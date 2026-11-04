System.register("chunks:///_virtual/settleDetailItemCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./TableCell.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.SpriteFrame, l = e.Sprite, d = e.Color
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.TableCell
        }],
        execute: function() {
            var m, _, g, f, C, E, S, A, I, G, y, v, P, T;
            o._RF.push({}, "d0ec1BIEL9MlLuJJK9ORlyX", "settleDetailItemCtr", void 0);
            var b = r.ccclass,
                O = r.property,
                R = r.menu;
            e("settleDetailItemCtr", (m = b("mjSettleDetailItemCtr"), _ = R("prefab/mj/settleDetailItemCtr"), g = O({
                tooltip: "标题",
                type: s
            }), f = O({
                tooltip: "赢方的位置",
                type: s
            }), C = O({
                tooltip: "输赢银币",
                type: s
            }), E = O({
                tooltip: "积分icon",
                type: u
            }), S = O({
                tooltip: "资产icon",
                type: l
            }), m(A = _((G = t((I = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "title", G, i(t)), a(t, "dir", y, i(t)), a(t, "money", v, i(t)), a(t, "scoreIcon", P, i(t)), a(t, "propertyIcon", T, i(t)), t.detailData = null, t.color = new d(76, 100, 160), t.event_defents = {}, t
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
            }), y = t(I.prototype, "dir", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(I.prototype, "money", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(I.prototype, "scoreIcon", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(I.prototype, "propertyIcon", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = I)) || A) || A)), o._RF.pop()
        }
    }
}))