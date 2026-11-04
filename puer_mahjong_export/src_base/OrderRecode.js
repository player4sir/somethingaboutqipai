System.register("chunks:///_virtual/OrderRecode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.GameTxt
        }, function(e) {
            a = e.Logger
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.GConstants
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.Platform
        }, function(e) {
            _ = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "286fdqjbtZCzoErp7E8HH+B", "OrderRecode", void 0), e("OrderRecode", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(n)) || this).__TestPay = !1, t._platformParam = null, t._orderReportParam = null, t.print = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        a.logPay.apply(a, [5].concat(t))
                    }, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("OrderRecode")), this._instance
                };
                var u = i.prototype;
                return u.onInitModuleEvent = function() {
                    this.addModelListener(s.NET_FORWARD_PAYMENT_ORDER, this.respForWardOrder), this.addModelListener(s.NET_FORWARD_PAYMENT_ORDER_TIMEOUT, this.onOrderTimeOut), this.addModelListener(s.NOTIFY_PAY_SUCCESS, this.reportOrderInfo)
                }, u.setReportData = function(e) {
                    this._orderReportParam = e
                }, u.reqSendOrder = function(e, t) {
                    if (this.checkPay(e)) {
                        this._platformParam = t || {}, this._platformParam.goodsPrice = e.goodsPrice;
                        var i = {
                            cmd: _.PHP_SEND_PAYMENT_ORDER,
                            body: e
                        };
                        console.log("微信支付-----下单参数：", i), l.dispatch(s.SYS_SHOW_NETLOADING, 15, {
                            eventId: s.NET_FORWARD_PAYMENT_ORDER_TIMEOUT,
                            showType: "scheduler",
                            showTips: n.pay_creater_order
                        }), l.dispatch(s.NET_SEND_MSG, i)
                    }
                }, u.onOrderTimeOut = function() {
                    l.dispatch(s.SYS_TOAST_TIP, {
                        content: "下单失败，请稍后再试"
                    })
                }, u.respForWardOrder = function(e, t, i, a) {
                    if (this.print("微信支付-----下单结果返回====reqData", a, "respData", i), l.dispatch(s.SYS_CLOSE_NETLOADING), null != this._platformParam)
                        if (1 != t || null == i.orderid || o.table_isEmpty(i.orderinfo)) {
                            this.print("微信支付-----Fail:订单创建失败,ErrorCode:" + i.errorType + ",ErrorTips:" + i.errorTips);
                            var r = n.pay_failed;
                            o.string_isEmpty(i.errorTips) || (r = i.errorTips), l.dispatch(s.SYS_TOAST_TIP, {
                                content: r
                            })
                        } else {
                            var c = i.orderid;
                            this._platformParam.outTradeNo = c, 1 == this.__TestPay ? l.dispatch(s.SYS_TOAST_TIP, {
                                content: "模拟下单成功，请到支付测试后台发货"
                            }) : this.doPlatformPay(i)
                        }
                }, u.reportOrderInfo = function(e, t) {
                    var i;
                    this._orderReportParam && null != t && null != (i = t.detailData) && i.orderNo && (console.log("reportOrderInfo respData", t), this._orderReportParam.orderID = t.detailData.orderNo, this.print("Success:创建订单成功，即将上报订单记录,MID:" + r.User.getUserMid() + ",上报数据:", this._orderReportParam), l.dispatch(s.NET_REQ_REPORT_PAY_ORDER, this._orderReportParam), this._orderReportParam = null)
                }, u.checkPay = function(e) {
                    if (d.isIOS()) {
                        if (!d.getIsSupportIOSPay()) return l.dispatch(s.NOTIFY_IOS_PAY, e), console.log("微信支付----ios调用公众号进行支付"), !1;
                        console.log("微信支付----调用微信接口进行支付"), e.ptype = c.WECHAT_PAYTYPE.WECHAT_NEW
                    }
                    return !0
                }, u.doPlatformPay = function(e) {
                    var t, i = null == e || null == (t = e.orderinfo) ? void 0 : t.wx_mini;
                    null != i && i.sign_data && null != i && i.pay_sig && null != i && i.signature && (this._platformParam.sign_data = i.sign_data, this._platformParam.pay_sig = i.pay_sig, this._platformParam.signature = i.signature), d.reqSendPay(this._platformParam)
                }, i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))