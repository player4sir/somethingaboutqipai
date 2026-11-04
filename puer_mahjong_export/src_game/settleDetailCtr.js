System.register("chunks:///_virtual/settleDetailCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./ListView.ts", "./DelegateComponent.ts", "./BaseComponent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.Node, u = e.SpriteFrame, d = e.Sprite
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.default
        }, function(e) {
            p = e.DelegateComponent
        }, function(e) {
            f = e.BaseComponent
        }],
        execute: function() {
            var _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N;
            o._RF.push({}, "d7d5fDNOhtPLIHhWfrrVUx9", "settleDetailCtr", void 0);
            var b = r.ccclass,
                D = r.property,
                L = r.menu;
            e("settleDetailCtr", (_ = b("settleDetailCtr"), g = L("prefab/game/settleDetailCtr"), m = D({
                tooltip: "输赢的银币",
                type: s
            }), C = D({
                tooltip: "底注",
                type: s
            }), I = D({
                tooltip: "输赢提示",
                type: l
            }), A = D({
                tooltip: "流水列表",
                type: h
            }), E = D({
                tooltip: "积分icon",
                type: u
            }), v = D({
                tooltip: "资产icon",
                type: d
            }), _(y = g((P = t((S = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "money", P, a(t)), i(t, "baseChip", T, a(t)), i(t, "tips", G, a(t)), i(t, "listView", O, a(t)), i(t, "scoreIcon", R, a(t)), i(t, "propertyIcon", N, a(t)), t.detailData = null, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    var e = this.node.getComponent(p);
                    e && (this.detailData = e.getParams())
                }, o.start = function() {
                    this.initView()
                }, o.initView = function() {
                    var e, t, n;
                    if (null != (e = this.detailData) && null != (t = e.detail) && t.length) {
                        var i = this.detailData.winMoney || 0,
                            a = i.toString();
                        i > 0 && (a = "+" + i), this.money.string = a, this.listView.setData(this.detailData.detail);
                        var o = 0;
                        this.detailData.detail.forEach((function(e, t) {
                            o += e.money
                        })), o != i && (this.tips.active = !0)
                    }
                    null != (n = this.detailData) && n.base_chip ? this.baseChip.string = "底注：" + this.detailData.base_chip : this.baseChip.string = "", c.SelectGame.isNormalRoom() || (this.propertyIcon.spriteFrame = this.scoreIcon)
                }, o.updateView = function() {}, o.onClickClose = function(e, t) {
                    this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(f)).prototype, "money", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(S.prototype, "baseChip", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(S.prototype, "tips", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(S.prototype, "listView", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(S.prototype, "scoreIcon", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(S.prototype, "propertyIcon", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = S)) || y) || y)), o._RF.pop()
        }
    }
}))