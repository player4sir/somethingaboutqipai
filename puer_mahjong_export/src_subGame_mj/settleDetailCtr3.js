System.register("chunks:///_virtual/settleDetailCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./ListView.ts", "./DelegateComponent.ts", "./BaseComponent.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.Node, l = e.SpriteFrame, d = e.Sprite
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.default
        }, function(e) {
            p = e.DelegateComponent
        }, function(e) {
            m = e.BaseComponent
        }],
        execute: function() {
            var _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R;
            o._RF.push({}, "0c0899JBqVJLIq+oQgF3/Eh", "settleDetailCtr", void 0);
            var M = r.ccclass,
                N = r.property,
                U = r.menu;
            e("settleDetailCtr", (_ = M("mjSettleDetailCtr"), g = U("prefab/mj/mjSettleDetailCtr"), f = N({
                tooltip: "输赢的银币",
                type: s
            }), C = N({
                tooltip: "底注",
                type: s
            }), E = N({
                tooltip: "输赢提示",
                type: u
            }), S = N({
                tooltip: "流水列表",
                type: h
            }), A = N({
                tooltip: "积分icon",
                type: l
            }), I = N({
                tooltip: "资产icon",
                type: d
            }), _(G = g((v = t((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "money", v, i(t)), a(t, "baseChip", P, i(t)), a(t, "tips", T, i(t)), a(t, "listView", b, i(t)), a(t, "scoreIcon", O, i(t)), a(t, "propertyIcon", R, i(t)), t.detailData = null, t.event_defents = {}, t
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
                        var a = this.detailData.winMoney || 0,
                            i = a.toString();
                        a > 0 && (i = "+" + a), this.money.string = i, this.listView.setData(this.detailData.detail);
                        var o = 0;
                        this.detailData.detail.forEach((function(e, t) {
                            o += e.money
                        })), o != a && (this.tips.active = !0)
                    }
                    null != (n = this.detailData) && n.base_chip ? this.baseChip.string = "底注：" + this.detailData.base_chip : this.baseChip.string = "", c.SelectGame.isNormalRoom() || (this.propertyIcon.spriteFrame = this.scoreIcon)
                }, o.updateView = function() {}, o.onClickClose = function(e, t) {
                    this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(m)).prototype, "money", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(y.prototype, "baseChip", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(y.prototype, "tips", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(y.prototype, "listView", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(y.prototype, "scoreIcon", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(y.prototype, "propertyIcon", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = y)) || G) || G)), o._RF.pop()
        }
    }
}))