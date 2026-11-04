System.register("chunks:///_virtual/BankrupData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            c = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "09cdeHx6FtCkp7sFLsu9Hgy", "BankrupData", void 0), e("BankrupData", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "BankrupData") || this).__User = null, i._bankruptConf = {
                        curCount: 0,
                        leftTime: 0,
                        vipExpires: 0,
                        vipActualTime: 0,
                        get_money: 4e3,
                        shard_cd_flag: 0,
                        resetTime: -1,
                        refreshInterval: 7200
                    }, i._lowestMoney = 0, i._maxCount = 0, i._curCount = 0, i._curleftTime = null, i._vipActualTime = 0, i._curBankruptReward = 0, i._curCanCutCD = 0, i._bankupToast = "", i._lastUpdateTimeBankUp = 0, i._isHideBankruptPayInRoom = !0, i._bankrupFeedbackData = null, i._bankruptGiftMap = new Map, i._bankruptGiftPackData = null, i.__User = t, i
                }
                t(n, e);
                var c = n.prototype;
                return c.clear = function() {
                    this._bankruptGiftMap.clear()
                }, c.updateBankrupGift = function(e, t) {
                    this._bankruptGiftMap.set(e, t)
                }, c.getkBankUpGiftByKey = function(e, t) {
                    var i = a.number_valueOf(e, 0) + "_" + a.number_valueOf(t, 0);
                    return this._bankruptGiftMap.get(i)
                }, c.updateLastTimeBankUpCount = function() {
                    this._lastUpdateTimeBankUp = a.time()
                }, c.isCanCheckUpdateCount = function() {
                    return !(a.time() - this._lastUpdateTimeBankUp < 8)
                }, c.updateBankruptConfig = function(e) {
                    e && (this._bankruptConf.curBankruptTime = a.number_valueOf(e.curBankruptTime, 0), this._bankruptConf.lowestMoney = a.number_valueOf(e.lowestMoney, 3e3), this._bankruptConf.intervals = e.intervals || [], this._lowestMoney = this._bankruptConf.lowestMoney, this._maxCount = this._bankruptConf.intervals.length, this.print("更新破产配置===>", "当前破产下限：", this._lowestMoney, this._bankruptConf))
                }, c.setCurBankruptInfo = function(e) {
                    this._bankruptConf.curCount = a.number_valueOf(e.curCount, 0), this._bankruptConf.leftTime = a.number_valueOf(e.leftTime, 0), this._bankruptConf.vipExpires = a.number_valueOf(e.vipExpires, 0), this._bankruptConf.vipActualTime = a.number_valueOf(e.vipActualTime, 0), this._bankruptConf.get_money = a.number_valueOf(e.get_money, 4e3), this._bankruptConf.shard_cd_flag = a.number_valueOf(e.shard_cd_flag, 0), this._bankruptConf.resetTime = a.number_valueOf(e.resetTime, -1), this._bankruptConf.refreshInterval = a.number_valueOf(e.refreshInterval, 7200), this._bankruptConf.rewardTime = this.__User.getServerTime() + this._bankruptConf.leftTime, this.curBankruptCount = this._bankruptConf.curCount, this.curLeftTime = this._bankruptConf.leftTime, this.vipActualTime = this._bankruptConf.vipActualTime, this.curBankruptReward = 0 == a.number_valueOf(this._bankruptConf.get_money) ? 4e3 : a.number_valueOf(this._bankruptConf.get_money), this.curCanCutCD = this._bankruptConf.shard_cd_flag
                }, c.getBankruptLowestMoney = function() {
                    return a.table_isEmpty(this._bankruptConf) && s.dispatch(o.NET_REQ_BANKRUPT_CONFIG), this._lowestMoney
                }, c.getBankruptMaxCount = function() {
                    return a.table_isEmpty(this._bankruptConf) && s.dispatch(o.NET_REQ_BANKRUPT_CONFIG), this._maxCount
                }, c.getBankruptTimesInterval = function() {
                    return a.table_isEmpty(this._bankruptConf) && s.dispatch(o.NET_REQ_BANKRUPT_CONFIG), a.nullToDefault(this._bankruptConf.intervals, [])
                }, c.getResetTime = function() {
                    return a.number_valueOf(this._bankruptConf.resetTime, -1)
                }, c.getRefreshInterval = function() {
                    return a.number_valueOf(this._bankruptConf.refreshInterval, 7200)
                }, c.getRewardCdExpTime = function() {
                    var e;
                    return a.number_valueOf(null == (e = this._bankruptConf) ? void 0 : e.rewardTime, this.__User.getServerTime())
                }, c.getCurTotalTime = function() {
                    var e = this.curBankruptCount;
                    return this.getTotalTimeByCount(e)
                }, c.getTotalTimeByCount = function(e) {
                    e = a.number_valueOf(e, 1);
                    var t = this.getBankruptTimesInterval(),
                        i = t.length,
                        n = t[e = (e = e <= 1 ? 1 : e) >= i ? i : e];
                    return a.number_valueOf(n, 30)
                }, c.isBankruptRewardRemain = function() {
                    var e = this.curBankruptCount,
                        t = this.getBankruptTimesInterval().length;
                    return t > 0 && e <= t
                }, c.getBankruptStatus = function() {
                    if (0 == this.__User.isLoginSuccesed()) return r.UserBankUpState.None;
                    var e = this.__User.getUserSilver(),
                        t = this.__User.getUserGameSilver(),
                        i = this.getBankruptLowestMoney();
                    return t >= i ? r.UserBankUpState.None : e >= i ? r.UserBankUpState.Fake : r.UserBankUpState.Real
                }, c.checkIsBankrupt = function(e) {
                    e = a.number_valueOf(e);
                    var t = a.number_valueOf(this.getBankruptLowestMoney());
                    return this.print("根据金币检查是否破产 checkIsBankrupt===>", "我的金币：" + e + " 破产下限: " + t), e <= 0 || e < t
                }, c.isMineBankrupt = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.__User.getUserGameSilver();
                    return e ? this.checkIsBankrupt(t) && this.getBankruptStatus() == r.UserBankUpState.Real : this.checkIsBankrupt(t)
                }, c.setBankruptPaySceneSatus = function(e) {
                    this._isHideBankruptPayInRoom = 0 == e
                }, c.isShowBankruptPayInRoom = function() {
                    return !this._isHideBankruptPayInRoom
                }, c.updateBankUpFeedbackData = function(e) {
                    this._bankrupFeedbackData = e
                }, c.getBankUpFeedbackData = function() {
                    return this._bankrupFeedbackData
                }, c.checkBankrupt = function() {
                    this.isMineBankrupt() && (this.curBankruptCount, this.getBankruptMaxCount())
                }, c.checkBankruptNum = function(e) {
                    void 0 === e && (e = !1), this.isMineBankrupt() && (e || this.isBankruptRewardRemain()) && s.dispatch(o.NET_REQ_BANKRUPT_COUNT, 0, e)
                }, i(n, [{
                    key: "curBankruptCount",
                    get: function() {
                        return this._curCount
                    },
                    set: function(e) {
                        this._curCount = e
                    }
                }, {
                    key: "curLeftTime",
                    get: function() {
                        return null == this._curleftTime ? 1800 : this._curleftTime
                    },
                    set: function(e) {
                        this._curleftTime = e
                    }
                }, {
                    key: "vipActualTime",
                    get: function() {
                        return this._vipActualTime
                    },
                    set: function(e) {
                        this._vipActualTime = e
                    }
                }, {
                    key: "curBankruptReward",
                    get: function() {
                        return a.number_valueOf(this._curBankruptReward) <= 0 ? 4e3 : this._curBankruptReward
                    },
                    set: function(e) {
                        this._curBankruptReward = e
                    }
                }, {
                    key: "curCanCutCD",
                    get: function() {
                        return this._curCanCutCD
                    },
                    set: function(e) {
                        this._curCanCutCD = e
                    }
                }, {
                    key: "bankToast",
                    get: function() {
                        return this._bankupToast
                    },
                    set: function(e) {
                        this._bankupToast = e || ""
                    }
                }]), n
            }(c)), n._RF.pop()
        }
    }
}))