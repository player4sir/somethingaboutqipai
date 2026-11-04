System.register("chunks:///_virtual/BugangTop.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./GameRuleConfig.ts", "./Card.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Layout, u = e.Label, d = e.UITransform, c = e.instantiate
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            f = e.GameRuleConfig
        }, function(e) {
            _ = e.Card
        }],
        execute: function() {
            var g, m, C, I, A, E, v, y, S, P, T, G, O, R, N;
            o._RF.push({}, "c980fqyeclATJCmbQtKIZYW", "BugangTop", void 0);
            var b = r.ccclass,
                D = r.property;
            e("BugangTop", (g = b("BugangTop"), m = D(_), C = D(_), I = D({
                tooltip: "麻将子背景",
                type: s
            }), A = D({
                tooltip: "麻将子",
                type: s
            }), E = D({
                tooltip: "麻将子layout",
                type: l
            }), v = D({
                tooltip: "补杠文案",
                type: u
            }), g((P = t((S = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "leftCard", P, a(t)), i(t, "rightCard", T, a(t)), i(t, "bg", G, a(t)), i(t, "mjNode", O, a(t)), i(t, "cardLayout", R, a(t)), i(t, "bugang_tx", N, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t || (this.addGameComp(), t = this.node.getComponent("GameComponent")), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
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
                    f.bugang_tx && (this.bugang_tx.string = f.bugang_tx);
                    var e = this.doGameCompFun("getBuGangTx");
                    "string" == typeof e && (this.bugang_tx.string = e)
                }, o.initView = function() {}, o.updateView = function() {}, o.onClickClose = function(e) {}, o.onDestroy = function() {}, t
            }(p)).prototype, "leftCard", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(S.prototype, "rightCard", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(S.prototype, "bg", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(S.prototype, "mjNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(S.prototype, "cardLayout", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(S.prototype, "bugang_tx", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = S)) || y)), o._RF.pop()
        }
    }
}))