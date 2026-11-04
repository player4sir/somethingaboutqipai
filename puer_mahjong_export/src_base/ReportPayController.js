System.register("chunks:///_virtual/ReportPayController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Logger
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            c = e.BaseController
        }, function(e) {
            l = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "4b735ICWgJJzaWkoycPJz0Y", "ReportPayController", void 0), e("ReportPayController", function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("ReportPayController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var c = i.prototype;
                return c.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_REQ_REPORT_PAY_ORDER, this.reqReportPayOrder), this.addModelListener(r.NET_FORWARD_REPORT_PAY_ORDER, this.respReportPayOrder)
                }, c.reqReportPayOrder = function(e, t) {
                    n.logPay("支付订单上报==>", t);
                    var i = o.CurrowPaySceneType,
                        c = {
                            order_id: t.orderID,
                            gameid: a.nullToDefault(t.gameID, 0),
                            level: a.nullToDefault(t.levelID, 0),
                            gameparty_anto: "",
                            gameparty_pname: "",
                            gameparty_subname: "",
                            gameparty_gsubname: a.nullToDefault(t.matchName, ""),
                            bankrupt: 1 == o.BankrupData.checkIsBankrupt(o.User.getUserMoneyByID(0)) ? 1 : 0,
                            pay_scene: i,
                            pay_scene_type: i,
                            pm_name: a.nullToDefault(t.pmode, 0),
                            currency_type: a.number_valueOf(t.currency, 1),
                            currency_num: a.number_valueOf(t.pamount, 0),
                            item_category: a.number_valueOf(t.scene, 1),
                            item_id: a.number_valueOf(t.id),
                            item_num: a.number_valueOf(t.pchips),
                            platform_order_id: "",
                            fee: 0,
                            is_pay_done: 0,
                            award_type: [],
                            match_type: 0
                        };
                    n.logPay("上报数据：", c);
                    var u = {
                        cmd: l.PHP_ROOM_PAY_SEND_ORDER,
                        body: c
                    };
                    s.dispatch(r.NET_SEND_MSG, u)
                }, c.respReportPayOrder = function(e, t, i, a) {
                    n.logPay("支付订单上报回调结果:" + t + ",返回数据:", i)
                }, i
            }(c))._instance = null, i._RF.pop()
        }
    }
}))