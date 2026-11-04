System.register("chunks:///_virtual/LevelController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.EventManager
        }, function(e) {
            s = e.BaseController
        }, function(e) {
            c = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "6765f+NfxFHK4hODBKsOI9i", "LevelController", void 0), e("LevelController", function(e) {
                function i(t) {
                    return e.call(this, t) || this
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("LevelController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var s = i.prototype;
                return s.onInitModuleEvent = function() {
                    this.addModelListener(o.NET_RESP_LEVEL_SYSTEM_CONFIG, this.respLevelConfigData), this.addModelListener(o.NET_REQ_LEVEL_SYSTEM_COUPON, this.reqLevelCouponReward), this.addModelListener(o.NET_RESP_LEVEL_SYSTEM_COUPON, this.respLevelCouponReward), this.addModelListener(o.NET_REQ_LEVEL_SYSTEM_COUPON_LOTTERY, this.reqLevelCouponLottery), this.addModelListener(o.NET_RESP_LEVEL_SYSTEM_COUPON_LOTTERY, this.respLevelCouponLottery)
                }, s.reqLevelConfigData = function(e, t) {
                    var i = {
                        cmd: c.PHP_GET_LEVEL_SYSTEM_CONFIG,
                        body: {}
                    };
                    console.log("请求成长系统配置", t), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respLevelConfigData = function(e, t, i, s) {
                    if (console.log("请求成长系统配置数据返回", i, t, s), t) {
                        if (n.isNull(i.cfg)) return;
                        var c = i.cfg;
                        a.LevelData.setLevelConfig(c)
                    }
                    r.dispatch(o.EVENT_UPDATE_LEVEL_SYSTEM_CONFIG)
                }, s.reqLevelCouponReward = function(e, t) {
                    var i = {
                        cmd: c.PHP_GET_LEVEL_SYSTEM_COUPON,
                        body: {}
                    };
                    console.log("请求等级夺宝券奖励"), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respLevelCouponReward = function(e, t, i, n) {
                    if (console.log("请求等级夺宝券奖励返回", i, t, n), t) {
                        var s = (null == i ? void 0 : i.coupon) || 0;
                        a.LevelData.updateMyCouponNum(s), a.LevelData.updateLevelConfigByKey("is_coupon", 2), r.dispatch(o.EVENT_UPDATE_LEVEL_SYSTEM_CONFIG), r.dispatch(o.SYS_TOAST_TIP, {
                            content: "领取成功"
                        })
                    } else r.dispatch(o.SYS_TOAST_TIP, {
                        content: "领取失败，请稍后重试"
                    })
                }, s.reqLevelCouponLottery = function(e, t) {
                    var i = {
                        cmd: c.PHP_GET_LEVEL_SYSTEM_COUPON_LOTTERY,
                        body: {
                            type: Number(t)
                        }
                    };
                    console.log("请求夺宝券抽奖"), r.dispatch(o.NET_SEND_MSG, i)
                }, s.respLevelCouponLottery = function(e, t, i, n) {}, i
            }(s))._instance = null, i._RF.pop()
        }
    }
}))