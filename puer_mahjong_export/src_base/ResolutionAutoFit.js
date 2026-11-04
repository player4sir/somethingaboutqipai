System.register("chunks:///_virtual/ResolutionAutoFit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./GCache.ts", "./AppEvent.ts", "./Platform.ts", "./EventManager.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.NodeEventType, o = e.view, r = e.ResolutionPolicy, s = e.Widget, c = e.size, l = e.Size
        }, function(e) {
            u = e.Logger
        }, function(e) {
            d = e.GCache
        }, function(e) {
            _ = e.AppEvent
        }, function(e) {
            h = e.Platform
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }],
        execute: function() {
            var m;
            i._RF.push({}, "fe013u+XUhCfZPojAKe19fR", "ResolutionAutoFit", void 0);
            var g = n.ccclass;
            n.menu, n.property, e("ResolutionAutoFit", g("ResolutionAutoFit")(m = function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._oldSize = c(), t.curSize = new l, t
                }
                t(i, e);
                var n = i.prototype;
                return n.onLoad = function() {
                    this._registerEvent(), this.adjustResolutionPolicy("onLoad")
                }, n._registerEvent = function() {
                    this.node.on(a.SIZE_CHANGED, this.onSizeChange, this), p.addListener(_.DEVICE_ORIENTATION_CHANGE, this.onUpateResolutionPolicy, this)
                }, n._unRegisterEvent = function() {
                    var e;
                    null != (e = this.node) && e.isValid && this.node.off(a.SIZE_CHANGED, this.onSizeChange, this), p.removeListener(_.DEVICE_ORIENTATION_CHANGE, this)
                }, n.onUpateResolutionPolicy = function(e, t) {
                    void 0 === t && (t = !1), console.log("屏幕切换---ResolutionAutoFit----------onUpateResolutionPolicy：", t);
                    var i = this._getSize();
                    this.updateDesignResolutionSize(t, i, "onUpateResolutionPolicy")
                }, n.updateDesignResolutionSize = function(e, t, i) {
                    if (void 0 === e && (e = !1), u.logPlatform("屏幕适配----ResolutionAutoFit.updateDesignResolutionSize=", this._oldSize, t, e), this._oldSize.width != t.width || this._oldSize.height != t.height || e) {
                        var n, a, c, l, f, m, g = t.width / t.height,
                            E = h.orientation;
                        u.logPlatform("屏幕适配--ratio=", g, null == (n = d.User) ? void 0 : n.IsRoom, E), "portrait" == E ? 1280 / 720 > g ? null != (c = d.User) && c.IsRoom ? (u.logPlatform("屏幕适配--------竖屏1-----------1280*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_WIDTH)) : (u.logPlatform("屏幕适配---------竖屏2----------720*1560"), o.setDesignResolutionSize(720, 1560, r.FIXED_WIDTH)) : null != (l = d.User) && l.IsRoom ? (u.logPlatform("屏幕适配----------竖屏3---------1280*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_HEIGHT)) : (u.logPlatform("屏幕适配---------竖屏4----------720*1560"), o.setDesignResolutionSize(720, 1560, r.FIXED_HEIGHT)) : 1280 / 720 > g ? null != (f = d.User) && f.IsRoom ? (u.logPlatform("屏幕适配-------横屏11------------1280*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_WIDTH)) : (u.logPlatform("屏幕适配--------横屏12-----------1560*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_WIDTH)) : null != (m = d.User) && m.IsRoom ? (u.logPlatform("屏幕适配--------横屏13-----------1280*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_HEIGHT)) : (u.logPlatform("屏幕适配--------横屏14-----------1280*720"), o.setDesignResolutionSize(1280, 720, r.FIXED_HEIGHT)), u.logPlatform("屏幕适配--修改设计分辨率"), this._oldSize.set(t), null == (a = this.getComponent(s)) || a.updateAlignment(), p.dispatch(_.SYS_DESIGN_RESOLUTION_SIZE)
                    }
                }, n.onSizeChange = function() {
                    var e = this;
                    u.logPlatform("屏幕适配-----ResolutionAutoFit---onSizeChange当节点尺寸改变时触发的事件"), this.scheduleOnce((function() {
                        e.adjustResolutionPolicy("onSizeChange")
                    }))
                }, n.adjustResolutionPolicy = function(e) {
                    u.logPlatform("屏幕适配---ResolutionAutoFit------adjustResolutionPolicy", e);
                    var t = this._getSize();
                    this._oldSize.width == t.width && this._oldSize.height == t.height || this.updateDesignResolutionSize(!0, t, "adjustResolutionPolicy")
                }, n._getSize = function() {
                    var e = h.getScreenSize();
                    return this.curSize.width = e.width, this.curSize.height = e.height, this.curSize
                }, n.onDestroy = function() {
                    this._unRegisterEvent()
                }, i
            }(f)) || m), i._RF.pop()
        }
    }
}))