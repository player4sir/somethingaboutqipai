System.register("chunks:///_virtual/BugangTop3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./GameRuleConfig4.ts", "./Card5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Layout, l = e.Label, d = e.UITransform, c = e.instantiate
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            m = e.GameRuleConfig
        }, function(e) {
            _ = e.Card
        }],
        execute: function() {
            var g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M;
            o._RF.push({}, "9f18bucFKNHBa/zBVF0IUcO", "BugangTop", void 0);
            var N = r.ccclass,
                U = r.property,
                D = r.menu;
            e("BugangTop", (g = N("BugangTop"), f = D("prefab/subGame/mj/BugangTop"), C = U(_), E = U(_), S = U({
                tooltip: "麻将子背景",
                type: s
            }), A = U({
                tooltip: "麻将子",
                type: s
            }), I = U({
                tooltip: "麻将子layout",
                type: u
            }), G = U({
                tooltip: "补杠文案",
                type: l
            }), g(y = f((P = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "leftCard", P, i(t)), a(t, "rightCard", T, i(t)), a(t, "bg", b, i(t)), a(t, "mjNode", O, i(t)), a(t, "cardLayout", R, i(t)), a(t, "bugang_tx", M, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (t || (this.addGameComp(), t = this.node.getComponent("MJGameComponent")), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.updateFanGangPai = function(e) {
                    var t = this;
                    if (this.cardLayout.node.destroyAllChildren(), this.doGameCompFun("showFanGangPai", e, this.mjNode, this.cardLayout)) {
                        var n = this.mjNode.getComponent(d).width * e.length + 18;
                        this.bg.getComponent(d).setContentSize(n < 97 ? 97 : n, 106)
                    } else null == e || e.forEach((function(e) {
                        var n = c(t.mjNode);
                        n.getComponent(_).setCardByte(e), n.active = !0, t.cardLayout.node.addChild(n)
                    })), this.cardLayout.updateLayout()
                }, o.start = function() {
                    m.bugang_tx && (this.bugang_tx.string = m.bugang_tx);
                    var e = this.doGameCompFun("getBuGangTx");
                    "string" == typeof e && (this.bugang_tx.string = e)
                }, o.initView = function() {}, o.updateView = function() {}, o.onClickClose = function(e) {}, o.onDestroy = function() {}, t
            }(p)).prototype, "leftCard", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(v.prototype, "rightCard", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(v.prototype, "bg", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(v.prototype, "mjNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(v.prototype, "cardLayout", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(v.prototype, "bugang_tx", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = v)) || y) || y)), o._RF.pop()
        }
    }
}))