System.register("chunks:///_virtual/RequirementHuItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TableCell.ts", "./GameRuleConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, l = e.UITransform, u = e.Label, d = e.Sprite, c = e.NodeEventType, h = e.Layout, p = e.Vec2
        }, function(e) {
            f = e.TableCell
        }, function(e) {
            _ = e.GameRuleConfig
        }],
        execute: function() {
            var g, m, C, I, A, E, v, y, S, P, T;
            o._RF.push({}, "c52d2TUCi5MrpRqa3Gc0xJr", "RequirementHuItem", void 0);
            var G = r.ccclass,
                O = r.property;
            e("RequirementHuItem", (g = G("RequirementHuItem"), m = O({
                tooltip: "属性说明",
                type: s
            }), C = O({
                tooltip: "属性说明",
                type: l
            }), I = O({
                tooltip: "属性说明",
                type: u
            }), A = O({
                tooltip: "属性说明",
                type: d
            }), g((y = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "atlas", y, a(t)), i(t, "bg", S, a(t)), i(t, "lbl", P, a(t)), i(t, "doneIcon", T, a(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.bg.node.on(c.SIZE_CHANGED, this.onBgSizeChanged, this)
                }, o.onBgSizeChanged = function() {
                    this.node.getComponent(l).setContentSize(this.bg.width, this.bg.height)
                }, o.getCellSize = function(e) {
                    this.lbl.string = e.text, this.lbl.updateRenderData(!0);
                    var t = this.lbl.node.getComponent(l),
                        n = this.bg.getComponent(l).width,
                        i = this.bg.getComponent(h);
                    return new p(n, t.height + i.paddingBottom + i.paddingTop)
                }, o.updateData = function(e) {
                    this.lbl.string = e.text, 0 == _.needCheckCards ? this.doneIcon.node.active = !1 : this.doneIcon.spriteFrame = e.isDone ? this.atlas.getSpriteFrame("select") : this.atlas.getSpriteFrame("unselect")
                }, t
            }(f)).prototype, "atlas", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(v.prototype, "bg", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(v.prototype, "lbl", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(v.prototype, "doneIcon", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = v)) || E)), o._RF.pop()
        }
    }
}))