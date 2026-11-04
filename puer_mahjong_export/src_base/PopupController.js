System.register("chunks:///_virtual/PopupController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./UIConfig.ts", "./LayerManager.ts", "./BaseController.ts"], (function(e) {
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
            r = e.UIID
        }, function(e) {
            s = e.LayerManager
        }, function(e) {
            c = e.BaseController
        }],
        execute: function() {
            n._RF.push({}, "811b02qf09GZ7oweULw5GJ0", "PopupController", void 0), e("PopupController", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, t) || this)._curMainLayer = null, i._mainLayerArray = [], i._dequeAnim = [], i
                }
                t(n, e), n.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new n("PopupController")), this._instance
                }, n.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, n.getInstance()
                };
                var c = n.prototype;
                return c.onInitModuleEvent = function() {
                    this.addModelListener(o.VIEW_UI_MAIN_UPDATE, this.updateMainLayer), this.addModelListener(o.VIEW_UI_MAIN_ROLLBACK, this.rollBackMainLayer), this.addModelListener(o.VIEW_UI_OPEN, this.onOpenView), this.addModelListener(o.VIEW_UI_CLOSE, this.onCloseView), this.addModelListener(o.VIEW_UI_OPENED, this.onOpenedView), this.addModelListener(o.VIEW_UI_CLOSED, this.onClosedView), this.addModelListener(o.SYS_SHOW_NETLOADING, this.showNetLoading), this.addModelListener(o.SYS_CLOSE_NETLOADING, this.closeNetLoading), this.addModelListener(o.SYS_TOAST_TIP, this.showToastTips), this.addModelListener(o.SYS_CLOSE_TOAST_TIP, this.closeToastTips)
                }, c.updateMainLayer = function(e, t) {
                    this.print("更新主场景标志: code=", t), this._curMainLayer = t, this._mainLayerArray.push(this._curMainLayer)
                }, c.rollBackMainLayer = function(e) {
                    this.print("回滚主场景标志: 当前：", this._curMainLayer, "上一个:", this._mainLayerArray[this._mainLayerArray.length - 2]), this._mainLayerArray.length >= 2 ? (this._curMainLayer = this._mainLayerArray[this._mainLayerArray.length - 2], this._mainLayerArray.splice(this._mainLayerArray.length - 1, 1)) : (this._curMainLayer = null != this._mainLayerArray[0] ? this._mainLayerArray[0] : null, this._mainLayerArray = []), this.print("回滚主场景标志: 回滚后：", this._curMainLayer)
                }, c.onOpenView = function(e, t, i, n, a, o, r, c) {
                    if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = !1), void 0 === r && (r = !1), void 0 === c && (c = !1), this.print("[OpenView]即将打开界面:" + t), c && this.hasView(t, a)) return this.onCloseView(e, t, a), void this.addSchedulerOnce(0, (function() {
                        s.open(t, i, n, a, o, r)
                    }));
                    s.open(t, i, n, a, o, r)
                }, c.hasView = function(e, t) {
                    return void 0 === t && (t = null), s.has(e, t)
                }, c.onCloseView = function(e, t, i) {
                    void 0 === i && (i = null), this.print("[CloseView]即将关闭界面:" + t), s.remove(t, !0, i)
                }, c.onOpenedView = function(e, t) {
                    this.print("[OpenedView]打开了界面:" + t.Prefab)
                }, c.onClosedView = function(e, t) {
                    this.print("[ClosedView]关闭了界面:" + t.Prefab)
                }, c.showNetLoading = function(e, t, i) {
                    void 0 === t && (t = 15), void 0 === i && (i = null), this.print("===开启网络加载===", t), this.onOpenView(null, r.NetLoading, {
                        time: t,
                        param: i
                    })
                }, c.closeNetLoading = function(e) {
                    this.print("===关闭网络加载==="), this.onCloseView(null, r.NetLoading)
                }, c.showToastTips = function(e, t) {
                    t && t.content && 0 == a.string_isEmpty(t.content) && this.onOpenView(null, r.ToastTip, t)
                }, c.closeToastTips = function(e) {
                    this.print("关闭吐司===>"), this.onCloseView(e, r.ToastTip)
                }, i(n, [{
                    key: "MainLayerCode",
                    get: function() {
                        return this._curMainLayer
                    }
                }]), n
            }(c))._instance = null, n._RF.pop()
        }
    }
}))