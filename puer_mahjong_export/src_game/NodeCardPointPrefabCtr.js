System.register("chunks:///_virtual/NodeCardPointPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LayerManager.ts", "./BaseComponent.ts", "./GameEvent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.instantiate, u = e.UITransform
        }, function(e) {
            d = e.LayerManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.GameEvent
        }],
        execute: function() {
            var p, f, _, g, m, C, I, A;
            o._RF.push({}, "ec48aevRRtBTbvo2wGLUttK", "NodeCardPointPrefabCtr", void 0);
            var E = r.ccclass,
                v = r.property,
                y = r.menu;
            e("NodeCardPointPrefabCtr", (p = E("NodeCardPointPrefabCtr"), f = y("prefab/game/NodeCardPointPrefabCtr"), _ = v({
                tooltip: "view",
                type: s
            }), g = v({
                tooltip: "item",
                type: s
            }), p(m = f((I = t((C = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "view", I, a(n)), i(n, "item", A, a(n)), n.event_defents = ((t = {})[h.VIEW_ADD_CARD_POINT] = "onAddCardPoint", t[h.VIEW_RESET_CARD_POINT] = "onResetCardPoint", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.item.active = !1, this.resetView()
                }, o.start = function() {}, o.resetView = function() {
                    this.print("resetView"), this.view.destroyAllChildren()
                }, o.onResetCardPoint = function(e) {
                    this.resetView()
                }, o.onAddCardPoint = function(e, t, n) {
                    this.print("onAddCardPoint", t, n);
                    var i = l(this.item);
                    i.active = !0;
                    var a = d.camera2D.screenToWorld(d.camera3D.worldToScreen(t)),
                        o = this.view.getComponent(u).convertToNodeSpaceAR(a);
                    i.setPosition(o), i.setRotationFromEuler(0, 0, 90 * n - 180), this.view.addChild(i)
                }, o.onDestroy = function() {}, t
            }(c)).prototype, "view", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(C.prototype, "item", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = C)) || m) || m)), o._RF.pop()
        }
    }
}))