System.register("chunks:///_virtual/NodeCardPointPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LayerManager.ts", "./BaseComponent.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.instantiate, l = e.UITransform
        }, function(e) {
            d = e.LayerManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.GameEvent
        }],
        execute: function() {
            var p, m, _, g, f, C, E, S;
            o._RF.push({}, "9b88fw5V+pIX41QvIv/3FbT", "NodeCardPointPrefabCtr", void 0);
            var A = r.ccclass,
                I = r.property,
                G = r.menu;
            e("NodeCardPointPrefabCtr", (p = A("NodeCardPointPrefabCtr"), m = G("prefab/subGame/mj/NodeCardPointPrefabCtr"), _ = I({
                tooltip: "view",
                type: s
            }), g = I({
                tooltip: "item",
                type: s
            }), p(f = m((E = t((C = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "view", E, i(n)), a(n, "item", S, i(n)), n.event_defents = ((t = {})[h.VIEW_ADD_CARD_POINT] = "onAddCardPoint", t[h.VIEW_RESET_CARD_POINT] = "onResetCardPoint", t), n
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
                    var a = u(this.item);
                    a.active = !0;
                    var i = d.camera2D.screenToWorld(d.camera3D.worldToScreen(t)),
                        o = this.view.getComponent(l).convertToNodeSpaceAR(i);
                    a.setPosition(o), a.setRotationFromEuler(0, 0, 90 * n - 180), this.view.addChild(a)
                }, o.onDestroy = function() {}, t
            }(c)).prototype, "view", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(C.prototype, "item", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = C)) || f) || f)), o._RF.pop()
        }
    }
}))