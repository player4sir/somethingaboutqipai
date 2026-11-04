System.register("chunks:///_virtual/SafeAreaAutoFit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./Platform.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.UITransform, c = e.Widget
        }, function(e) {
            l = e.Utils
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            d = e.Platform
        }, function(e) {
            _ = e.BaseComponent
        }],
        execute: function() {
            var h, p, f, m, g, E, v;
            o._RF.push({}, "d03f5TESXpKp6m7nYLF9D8u", "SafeAreaAutoFit", void 0);
            var T = r.ccclass,
                R = r.property,
                P = r.menu,
                y = r.requireComponent;
            e("SafeAreaAutoFit", (h = T("SafeAreaAutoFit"), p = y([s, c]), f = P("gui/SafeAreaAutoFit"), m = R({
                tooltip: "true: 对齐位置加上刘海宽度；false：直接对齐刘海位置",
                visible: function() {
                    return !0
                }
            }), h(g = p(g = f((v = t((E = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this)._startX = 0, n(t, "flag", v, a(t)), t
                }
                i(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(u.SYS_DESIGN_RESOLUTION_SIZE, this.updateView)
                }, o.onLoad = function() {
                    this.initView(), this.updateView()
                }, o.start = function() {}, o.initView = function() {
                    var e = this.node.getComponent(c);
                    e.isAlignLeft ? (this._startX = e.left, this.flag || (this._startX = 0)) : e.isAlignRight && (this._startX = e.right, this.flag || (this._startX = 0))
                }, o.updateStartX = function(e) {
                    this._startX = e, this.updateView()
                }, o.updateView = function() {
                    var e = d.getScreenSafeAreaRect();
                    if (e && null != e.x && null != e.x) {
                        var t = l.number_valueOf(e.x);
                        if (t > 0) {
                            var i = this.node.getComponent(c);
                            "landscape" === d.orientation ? i.isAlignLeft ? i.left = this._startX + t : i.isAlignRight && (i.right = this._startX) : "landscapeReverse" === d.orientation && (i.isAlignLeft ? i.left = this._startX : i.isAlignRight && (i.right = this._startX + t)), console.log("����λ�ã�", this.node.name, i.left, i.right)
                        }
                    }
                }, o.onDestroy = function() {}, t
            }(_)).prototype, "flag", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), g = E)) || g) || g) || g)), o._RF.pop()
        }
    }
}))