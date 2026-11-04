System.register("chunks:///_virtual/ToastComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.Label, l = e.UITransform
        }, function(e) {
            u = e.SystemConf
        }, function(e) {
            d = e.BaseComponent
        }],
        execute: function() {
            var _, h, p, f, m, g, E, v, T, R;
            o._RF.push({}, "de1daMgSoJNGqNHLZHoRzt1", "ToastComponent", void 0);
            var P = r.ccclass,
                y = r.property,
                C = r.menu;
            e("ToastComponent", (_ = P("ToastComponent"), h = C("vc/ToastComponent"), p = y({
                tooltip: "吐司根节点",
                type: s
            }), f = y({
                tooltip: "吐司背景",
                type: s
            }), m = y({
                tooltip: "吐司文本内容",
                type: c
            }), _(g = h((v = t((E = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "toastRoot", v, a(t)), n(t, "lab_Bg", T, a(t)), n(t, "lab_content", R, a(t)), t._overWidth = 40, t._isLoad = !1, t._toastParam = null, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this._isLoad = !0, this.updateTxt(this._toastParam ? this._toastParam.content : ""), this.updateView()
                }, o.updateTxt = function(e) {
                    void 0 === e && (e = ""), this.lab_content && (this.lab_content.string = String(e), console.log("显示吐司===>content:", e))
                }, o.updateView = function() {
                    var e = this.lab_content.getComponent(l).width;
                    if (e >= this.lab_Bg.getComponent(l).width) {
                        var t = e + this._overWidth;
                        t > u.DEV_SIZE.width && (t = u.DEV_SIZE.width), this.lab_Bg.getComponent(l).width = t
                    }
                }, o.toast = function(e) {
                    this._toastParam = e, this._isLoad && (this.updateTxt(this._toastParam ? this._toastParam.content : ""), this.updateView())
                }, t
            }(d)).prototype, "toastRoot", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(E.prototype, "lab_Bg", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(E.prototype, "lab_content", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = E)) || g) || g)), o._RF.pop()
        }
    }
}))