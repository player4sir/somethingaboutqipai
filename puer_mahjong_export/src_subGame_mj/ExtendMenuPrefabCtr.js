System.register("chunks:///_virtual/ExtendMenuPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseComponent.ts", "./Platform.ts", "./RoomMgr6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Widget
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            d = e.Platform
        }, function(e) {
            c = e.RoomMgr
        }],
        execute: function() {
            var h, p, m, _, g, f, C, E;
            o._RF.push({}, "5037elK7X5Ex6Ic72vEZO/r", "ExtendMenuPrefabCtr", void 0);
            var S = r.ccclass,
                A = r.property,
                I = r.menu;
            e("ExtendMenuPrefabCtr", (h = S("ExtendMenuPrefabCtr"), p = I("prefab/subGame/mj/ExtendMenuPrefabCtr"), m = A({
                tooltip: "鬼碰杠操作按钮",
                type: s
            }), _ = A({
                tooltip: "是否选中标志",
                type: s
            }), h(g = p((C = t((f = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "btn", C, i(t)), a(t, "gou", E, i(t)), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    c.getInstance().setGameUserState("scluzhou_sel_gui_gang", !0);
                    var e = d.getScreenSafeAreaRect();
                    null != e && e.x && (this.node.getComponent(u).left = null == e ? void 0 : e.x)
                }, o.start = function() {}, o.updateView = function() {}, o.onClickClose = function(e, t) {}, o.onClickGou = function(e, t) {
                    this.gou.active = !this.gou.active, c.getInstance().setGameUserState("scluzhou_sel_gui_gang", this.gou.active)
                }, o.onDestroy = function() {}, t
            }(l)).prototype, "btn", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(f.prototype, "gou", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = f)) || g) || g)), o._RF.pop()
        }
    }
}))