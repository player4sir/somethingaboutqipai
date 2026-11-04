System.register("chunks:///_virtual/settleDetailItemCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./TableCell.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.SpriteFrame, u = e.Sprite, d = e.Color
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.TableCell
        }],
        execute: function() {
            var f, _, g, m, C, I, A, E, v, y, S, P, T, G;
            o._RF.push({}, "d275eVMuCtG5IG1SmAC3PIE", "settleDetailItemCtr", void 0);
            var O = r.ccclass,
                R = r.property,
                N = r.menu;
            e("settleDetailItemCtr", (f = O("settleDetailItemCtr"), _ = N("prefab/game/settleDetailItemCtr"), g = R({
                tooltip: "标题",
                type: s
            }), m = R({
                tooltip: "赢方的位置",
                type: s
            }), C = R({
                tooltip: "输赢银币",
                type: s
            }), I = R({
                tooltip: "积分icon",
                type: l
            }), A = R({
                tooltip: "资产icon",
                type: u
            }), f(E = _((y = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "title", y, a(t)), i(t, "dir", S, a(t)), i(t, "money", P, a(t)), i(t, "scoreIcon", T, a(t)), i(t, "propertyIcon", G, a(t)), t.detailData = null, t.color = new d(76, 100, 160), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.updateData = function(e) {
                    if (this.detailData = e, this.title.string = this.detailData.title, null != this.detailData.money) {
                        var t = c.number_valueOf(this.detailData.money),
                            n = c.formatMoney(t, {
                                maxLen: 4,
                                isSimplify: !0
                            });
                        t > 0 && (n = "+" + n), this.money.string = n, t > 0 ? this.color.set(255, 142, 51) : this.color.set(76, 100, 160), this.money.color = this.color, this.dir.string = this.detailData.winnerDirs.join("、"), this.money.node.active = !0, this.dir.node.active = !0, this.node.getChildByName("icon").active = !0, this.color.set(76, 100, 160), this.title.color = this.color
                    } else this.color.set(255, 142, 51), this.title.color = this.color, this.money.node.active = !1, this.dir.node.active = !1, this.node.getChildByName("icon").active = !1;
                    h.SelectGame.isNormalRoom() || (this.propertyIcon.spriteFrame = this.scoreIcon)
                }, o.onDestroy = function() {}, t
            }(p)).prototype, "title", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(v.prototype, "dir", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(v.prototype, "money", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(v.prototype, "scoreIcon", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(v.prototype, "propertyIcon", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = v)) || E) || E)), o._RF.pop()
        }
    }
}))