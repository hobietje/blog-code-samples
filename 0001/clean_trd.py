#!/usr/local/bin/python3

### Tip: Make sure you enable "Pause on exceptions" and "Pause on caught exceptions" in Chrome Dev Tools
### Tip: Use regex101 to test your regular expressions

import re

folder="www"

with open(folder + "/trd.js", "r") as trd:
    lines = trd.read()

# Deobfuscation #1: Simplify

# - Booleans
re_true = re.compile('!!\[\]')
lines = re_true.sub(" true", lines)

re_true = re.compile('!\[\]')
lines = re_true.sub(" false", lines)

# - Concat strings
re_splitstrings_doublequote = re.compile('(".*?)"\s*\+\s*"(.*?")')
re_splitstrings_singlequote = re.compile('(\'.*?)\'\s*\+\s*\'(.*?\')')
def sub_splitstrings(m):
    return m.group(1) + m.group(2)

lines = re_splitstrings_doublequote.sub(sub_splitstrings, lines)
lines = re_splitstrings_singlequote.sub(sub_splitstrings, lines)

# - Array-style function calls
def transform_arraystyle_fn_calls(lines):
    re_arrayfns_sq = re.compile('([_0-9a-z]+)\[\'(\w+)\'\]', re.IGNORECASE)
    def sub_arrayfns(m):
        # Exception for 'static'
        return m.group(0) if m.group(1) == 'static' else m.group(1) + '.' + m.group(2)
    return re_arrayfns_sq.sub(sub_arrayfns, lines)

lines = transform_arraystyle_fn_calls(lines)

# - Convert hex numbers to decimal
re_hex_numbers = re.compile('(\[|\(|[-+*/:&= ,])(0x[a-f0-9]+)', re.IGNORECASE)
def sub_hex_numbers(m):
    return m.group(1) + str(int(m.group(2), 0))
lines = re_hex_numbers.sub(sub_hex_numbers, lines)

with open(folder + "/trd.clean.01.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #2: Expressions To Numbers

# - Because 'identifierNamesGenerator' was used with the 'hexadecimal', our regexes
#   are likely to consume part of our hex variable/literal/function names.  We will avoid this
#   by post-fixing them with underscore.  They are already prefix with underscore as well.
re_hex_variables = re.compile('_0x([a-f0-9]+)', re.IGNORECASE)
def sub_hex_variables(m):
    return '_' + m.group(1) + '_'
lines = re_hex_variables.sub(sub_hex_variables, lines)
    
# - Revert 'numbersToExpressions' obfuscation by evaluating all math-only expressions
re_numbers_to_expressions = re.compile('(.)([+-]?(?:\s*[+-]?[0-9]+\s*[*\/%+-])+\s*[+-]?[0-9]+)', re.IGNORECASE)
def sub_numbers_to_expressions(m):
    try:
        try:
            calc = eval(m.group(2))
            # Eval in JS handles leading zeros correctly but python eval doesn't like it
            plus=' + ' if m.group(1)[-1] == "_" and calc >= 0 else ''
            return m.group(1) + plus + str(calc)
        except Exception as e:
            # Error: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers
            print("WARN re_calcs {}: {}".format(e, m.group(0)))
            return m.group(0)
    except Exception as e:
        # Error: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers
        print("WARN re_numbers_to_expressions {}: {}".format(e, m.group(1)))
        return m.group(1)
lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

with open(folder + "/trd.clean.02.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #3: String Array Encoding

# - Rename our strings table and decode function to make the code easier to follow
lines = lines.replace("_2084_", "_strings_")
lines = lines.replace("_1c40_", "_decode_")

# -  Remove _decode_ wrappers by "lifting" the logic from inside the function to the caller instead.
def transform_wrapper(lines, fn_name):
    re_decode_wrapper = re.compile(fn_name+'=function\((_[0-9a-f]+_),(_[0-9a-f]+_),(_[0-9a-f]+_),(_[0-9a-f]+_)\){return _decode_\((_[0-9a-f]+_)\s*([+-]\s*-?\s*\d+),\s*(_[0-9a-f]+_)\);}')
    match = re_decode_wrapper.search(lines)
    arg1 = match.group(1)
    arg2 = match.group(2)
    arg3 = match.group(3)
    arg4 = match.group(4)
    use1 = match.group(5)
    offset = match.group(6)
    use2 = match.group(7)
    # Remove the function but keep an 'undefined' variable as a poor fix for multiple assignments being done in a single statement
    # sub='{} = function(_a, _b) {{ return _decode_(_a{}, _b); }}'.format(fn_name, offset)
    # sub='{} = function(_a, _b) {{ return _decode_(_a, _b); }}'.format(fn_name)
    sub='{} = undefined'.format(fn_name)
    # Replace fn definition
    lines = lines[0:match.start()] + sub + lines[match.end():]
    # Replace fn calls
    re_decode_wrapper_call = re.compile(fn_name + '\(([^,]+?),([^,]+?),([^,]+?),([^,]+?)\)')
    def sub_decode_wrapper_call(m):
        a = 1 if arg1 == use1 else (2 if arg2 == use1 else (3 if arg3 == use1 else 4))
        b = 1 if arg1 == use2 else (2 if arg2 == use2 else (3 if arg3 == use2 else 4))
        # return fn_name + "(" + m.group(a) + ", " + m.group(b) + ")"
        # return fn_name + "(" + m.group(a) + offset + ", " + m.group(b) + ")"
        return "_decode_(" + m.group(a) + ' ' + offset + "," + m.group(b) + ")"
    lines = re_decode_wrapper_call.sub(sub_decode_wrapper_call, lines)
    return lines

lines = transform_wrapper(lines, '_5d947c_')
lines = transform_wrapper(lines, '_59517a_')
lines = transform_wrapper(lines, '_354bfe_')
lines = transform_wrapper(lines, '_ab96c9_')
lines = transform_wrapper(lines, '_161da0_')
lines = transform_wrapper(lines, '_e32e17_')
lines = transform_wrapper(lines, '_63426_')
lines = transform_wrapper(lines, '_4462a5_')
lines = transform_wrapper(lines, '_20774a_')
lines = transform_wrapper(lines, '_4c6cf2_')
lines = transform_wrapper(lines, '_45686c_')
lines = transform_wrapper(lines, '_16f03c_')
lines = transform_wrapper(lines, '_321958_')

# - Tidy up: As a result of removing these wrappers, we have math expressions again.  Let's clean them up.
lines = lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

with open(folder + "/trd.clean.03.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #4: String Array Encoding on steroids

# - Decode fn double wrapped
lines = transform_wrapper(lines, '_49b4f7_')
lines = transform_wrapper(lines, '_18384e_')
lines = transform_wrapper(lines, '_4164e3_')
lines = transform_wrapper(lines, '_254ee8_')
lines = transform_wrapper(lines, '_5482d9_')
lines = transform_wrapper(lines, '_96f7d4_')
lines = transform_wrapper(lines, '_2dfa7a_')
lines = transform_wrapper(lines, '_48a921_')
lines = transform_wrapper(lines, '_5e452b_')
lines = transform_wrapper(lines, '_4c2300_')

# - Tidy up: As a result of removing these wrappers, we have math expressions again.
lines = lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

# - Decode fn triple wrapped
lines = transform_wrapper(lines, '_51bdaf_')
lines = transform_wrapper(lines, '_766024_')
lines = transform_wrapper(lines, '_3099b2_')
lines = transform_wrapper(lines, '_1a1868_')
lines = transform_wrapper(lines, '_3db08c_')
lines = transform_wrapper(lines, '_30b91d_')
lines = transform_wrapper(lines, '_e028b7_')
lines = transform_wrapper(lines, '_209f89_')
lines = transform_wrapper(lines, '_37021a_')
lines = transform_wrapper(lines, '_364075_')
lines = transform_wrapper(lines, '_348b6c_')
lines = transform_wrapper(lines, '_37ff48_')
lines = transform_wrapper(lines, '_50948d_')
lines = transform_wrapper(lines, '_116a4f_')

# - Tidy up: As a result of removing these wrappers, we have math expressions again.
lines = lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

# - Decode fn quadruple wrapped
lines = transform_wrapper(lines, '_5e6d4a_')
lines = transform_wrapper(lines, '_2a6097_')
lines = transform_wrapper(lines, '_3458c8_')
lines = transform_wrapper(lines, '_4c5d30_')

# - Tidy up: As a result of removing these wrappers, we have math expressions again.
lines = lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

with open(folder + "/trd.clean.04.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #5: Simplifying Decode
# - 1st argument has a 327 offset. Let's remove it and adjust all calls to it accordingly
# - 2nd argument seems to be just dead code, so let's drop it
lines = lines.replace("var _decode_=function(_183893_,_1c6082_){_183893_=_183893_-(327);", "var _decode_=function(_183893_){")

re_decode_final_call = re.compile('_decode_\(([^,]+?),([^,]+?)\)')
def sub_decode_final_call(m):
    return "_decode_(" + m.group(1) + " - 327)"
lines = re_decode_final_call.sub(sub_decode_final_call, lines)

# - Tidy up: As a result of removing these wrappers, we have math expressions again.
lines = lines = re_numbers_to_expressions.sub(sub_numbers_to_expressions, lines)

with open(folder + "/trd.clean.05.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #6: Removing Decode

# - Add a debugger to break JS execution
debugger_str = '\ndebugger;\n'
strings_str = "(_strings_,343663));"
strings_idx = lines.index(strings_str) + len(strings_str)
lines = lines[:strings_idx] + debugger_str + lines[strings_idx:]

# - Manually evaluate this in Chrome DevTools console:
# strings_rotated = _strings_.map(function(_str, _idx) { return _decode_(_idx); })

# - Replace Decode calls with actual string values
strings_rotated = [
    "split",
    "cuCTK",
    "ESDpn",
    "bind",
    "563924uuZESl",
    "JYXRW",
    "opos",
    "return (fu",
    "toString",
    "hrrqM",
    "xTaat",
    "mhagn",
    "zUEkL",
    "table",
    "5MAkeSD",
    "YnthJ",
    "referrer",
    "match",
    "IAzgv",
    "[^ ]+)+)+[",
    "https://js",
    "yJAsV",
    "apply",
    "yXRQO",
    "XoZsI",
    "bTKqL",
    "iaQZF",
    "wmROp",
    "7|2|1",
    "error",
    "5|4|3|2|0|",
    "108070wsiAnp",
    "302565nRDvmW",
    "YAztD",
    "/trds?q=",
    "IWJVh",
    "LpdGr",
    "return /\" ",
    "ONgNl",
    "VkmBG",
    " | ",
    "375117UPuKZX",
    "408620SufYIE",
    "exception",
    "test",
    "{}.constru",
    "BfmMv",
    "1781347vhoOAP",
    "iurlT",
    "title",
    "FNwst",
    "oIHcA",
    "AxzzK",
    "wYVHc",
    "nqUSy",
    "zYqxW",
    "bXBLq",
    "^ ]}",
    "^([^ ]+( +",
    "YlsGc",
    "MSKoQ",
    "ZxXjg",
    "JfkrD",
    "length",
    "location",
    "RckNx",
    "prototype",
    "TJrTW",
    "Ecsof",
    "dtPhA",
    "nction() ",
    "com2",
    "warn",
    "__proto__",
    "GGAKL",
    "XEiHt",
    "uGaPi",
    "93739XfdKTL",
    "bEAMW",
    "SqwjM",
    "; path=",
    "href",
    "MspFG",
    "CWmsa",
    "bwFMF",
    "LzgsX",
    "joMfz",
    "aOXyP",
    "; secure",
    "; domain=",
    "IZOXR",
    "xOKOg",
    "searchers",
    "cookie",
    "=([^;]*);?",
    "TLEWV",
    "KCosp",
    "ctor(\"retu",
    "FdSvc",
    "KVlWv",
    "ANxVP",
    "hSHLs",
    " - ",
    "4HDHXGt",
    "TUYfY",
    "vytkc",
    "3|5|0|6|4|",
    "ceQNV",
    "DSIHY",
    "Rzajs",
    "sp_redirec",
    "ggBIn",
    "EgDmb",
    "EeDfB",
    "Bbjtw",
    "lsVzk",
    "constructo",
    "(?:; )?",
    "+ this + \"",
    "EtlgV",
    "console"
]

# - Remove original strings array and Decode function
lines = lines[strings_idx + len(debugger_str):]

# - Replace all references to Decode function with resulting values
re_re4_to_strings = re.compile('_decode_\(([^,]+?)\)')
def sub_re4_to_strings(m):
    idx = int(m.group(1))
    return "'" + strings_rotated[idx] + "'"
lines = re_re4_to_strings.sub(sub_re4_to_strings, lines)

with open(folder + "/trd.clean.06.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #7: Simplify, again

# - Fix string concats (twice)
lines = re_splitstrings_doublequote.sub(sub_splitstrings, lines)
lines = re_splitstrings_singlequote.sub(sub_splitstrings, lines)

lines = re_splitstrings_doublequote.sub(sub_splitstrings, lines)
lines = re_splitstrings_singlequote.sub(sub_splitstrings, lines)

# - Replace array style calls with object dot notation
lines = transform_arraystyle_fn_calls(lines)

with open(folder + "/trd.clean.07.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #7 & #8: Bringing back the console and disabling anti-tampering

# - Enable console (disableConsoleOutput)
#   Self evident from these lines
#     _239d7f_.iurlT = 'log',
#     _239d7f_.ONgNl = 'warn',
#     _239d7f_.joMfz = 'info',
#     _239d7f_.wmROp = 'error',
#     _239d7f_.vJKrs = 'exception',
#     _239d7f_.iaQZF = 'table',
#     _239d7f_.XoZsI = 'trace',
lines = lines.replace("_1b8bb4_();", "/*_1b8bb4_();*/")

# - Disable the anti-tampering check
#   Give away is these lines that check how a function definition is serialised as a string:
#    _124008_.zUEkL = 'return /" ' + '+ this + "' + '/',
#    _124008_.mhagn = '^([^ ]+( +' + '[^\x20]+)+)+[' + '^ ]}',
lines = lines.replace("_41a7ac_();", "/*_41a7ac_();*/")


# - Let's just get rid of this code altogether
antiTamperFn_str = "/*_1b8bb4_();*/"
strings_idx = lines.index(antiTamperFn_str) + len(antiTamperFn_str)
lines = lines[strings_idx:]

with open(folder + "/trd.clean.08.js", "w") as trd:
    trd.write(lines)

# Deobfuscation #9: Rename

# - Reassigns same object to multiple variables
lines = lines.replace("_422a7e_", "controlFlow") \
             .replace("_ea28a2_", "controlFlow")

# - Inline most literals
re_cff_properties = re.compile('(controlFlow.\w+)\s*=\s*(\'[^\']*\'),')
match = re_cff_properties.search(lines)
while match:
    cff_property = match.group(1)
    cff_value = match.group(2)
    # Replace fn definition
    lines = lines[0:match.start()] + lines[match.end():]
    # Replace fn calls
    lines = lines.replace(cff_property, cff_value)
    # Find next match
    match = re_cff_properties.search(lines)

# - Rename elements of the control-flow flattening block to make the code more readable
lines = lines.replace("controlFlow.yXRQO", "controlFlow.str_dash") \
             .replace("controlFlow.hSHLs", "controlFlow.or") \
             .replace("controlFlow.yJAsV", "controlFlow.plus_a") \
             .replace("controlFlow.TJrTW", "controlFlow.plus_b") \
             .replace("controlFlow.bEAMW", "controlFlow.concat") \
             .replace("controlFlow.xOKOg", "controlFlow.lessThan") \
             .replace("controlFlow.JYXRW", "controlFlow.notStrictlyEqual") \
             .replace("controlFlow.KCosp", "controlFlow.equal") \
             .replace("controlFlow.nqUSy", "controlFlow.strictlyEqual") \
             .replace("controlFlow.bXBLq", "controlFlow.invokeFn") \
             .replace("controlFlow.YnthJ", "controlFlow.invokeFnWith1Arg") \
             .replace("controlFlow.IWJVh", "controlFlow.invokeFnWith2Args") \
             .replace("controlFlow.FdSvc", "controlFlow.invokeFnWith5Args") \
             .replace("controlFlow.AxzzK", "controlFlow.SqwjM") \
             .replace("controlFlow.LpdGr", "controlFlow.hwKDr") \
             .replace("controlFlow.EgDmb", "controlFlow.opos")

# - Rename other parts of the code after learning their behaviour
lines = lines.replace("_20e474_", "app") \
             .replace("_55c85a_", "idx") \
             .replace("_b2a74f_", "referer") \
             .replace("_30b034_", "searcher") \
             .replace("_5ef3c8_", "fn_test_cookie_is_set") \
             .replace("controlFlow.opos", "controlFlow.str_cookie_name") \
             .replace("_4583d0_", "str_cookie_name") \
             .replace("_1c5b61_", "regex") \
             .replace("controlFlow.MspFG", "controlFlow.str_regexp_semicolon") \
             .replace("_2a3ea2_", "fn_set_cookie") \
             .replace("_6800c7_", "document_title_prefix") \
    
with open(folder + "/trd.clean.09.js", "w") as trd:
    trd.write(lines)

with open(folder + "/trd.clean.js", "w") as trd:
    trd.write(lines)