System.register("chunks:///_virtual/RequirementHuItem3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TableCell.ts", "./GameRuleConfig4.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, u = e.UITransform, l = e.Label, d = e.Sprite, c = e.NodeEventType, h = e.Layout, p = e.Vec2
        }, function(e) {
            m = e.TableCell
        }, function(e) {
            _ = e.GameRuleConfig
        }],
        execute: function() {
            var g, f, C, E, S, A, I, G, y, v, P, T;
            o._RF.push({}, "963f0m8ac5DmpmsUr0t/Tng", "RequirementHuItem", void 0);
            var b = r.ccclass,
                O = r.property,
                R = r.menu;
            e("RequirementHuItem", (g = b("RequirementHuItem"), f = R("prefab/subGame/mj/RequirementHuItem"), C = O({
                tooltip: "属性说明",
                type: s
            }), E = O({
                tooltip: "属性说明",
                type: u
            }), S = O({
                tooltip: "属性说明",
                type: l
            }), A = O({
                tooltip: "属性说明",
                type: d
            }), g(I = f((y = t((G = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "atlas", y, i(t)), a(t, "bg", v, i(t)), a(t, "lbl", P, i(t)), a(t, "doneIcon", T, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.bg.node.on(c.SIZE_CHANGED, this.onBgSizeChanged, this)
                }, o.onBgSizeChanged = function() {
                    this.node.getComponent(u).setContentSize(this.bg.width, this.bg.height)
                }, o.getCellSize = function(e) {
                    this.lbl.string = e.text, this.lbl.updateRenderData(!0);
                    var t = this.lbl.node.getComponent(u),
                        n = this.bg.getComponent(u).width,
                        a = this.bg.getComponent(h);
                    return new p(n, t.height + a.paddingBottom + a.paddingTop)
                }, o.updateData = function(e) {
                    this.lbl.string = e.text, 0 == _.needCheckCards ? this.doneIcon.node.active = !1 : this.doneIcon.spriteFrame = e.isDone ? this.atlas.getSpriteFrame("select") : this.atlas.getSpriteFrame("unselect")
                }, t
            }(m)).prototype, "atlas", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(G.prototype, "bg", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(G.prototype, "lbl", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(G.prototype, "doneIcon", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = G)) || I) || I)), o._RF.pop()
        }
    }
}))