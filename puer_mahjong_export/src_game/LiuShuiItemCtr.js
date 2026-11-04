System.register("chunks:///_virtual/LiuShuiItemCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./TableCell.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.Color
        }, function(e) {
            u = e.Utils
        }, function(e) {
            d = e.TableCell
        }],
        execute: function() {
            var c, h, p, f, _, g, m, C, I, A;
            o._RF.push({}, "6e8cc7FCmlKQbXw9YJ8EGG4", "LiuShuiItemCtr", void 0);
            var E = r.ccclass,
                v = r.property,
                y = r.menu;
            e("LiuShuiItemCtr", (c = E("LiuShuiItemCtr"), h = y("prefab/game/LiuShuiItemCtr"), p = v({
                tooltip: "标题",
                type: s
            }), f = v({
                tooltip: "倍数说明",
                type: s
            }), _ = v({
                tooltip: "输赢银币",
                type: s
            }), c(g = h((C = t((m = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "title", C, a(t)), i(t, "desc", I, a(t)), i(t, "money", A, a(t)), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.updateData = function(e) {
                    this.title.string = e.name;
                    var t = u.number_valueOf(e.money),
                        n = u.formatMoney(t, {
                            maxLen: 4,
                            isSimplify: !0
                        });
                    if (t > 0 && (n = "+" + n), this.money.string = n, this.money.color = t > 0 ? new l(255, 142, 51) : new l(109, 133, 213), e.fanInfo.length > 0) {
                        var i = e.totalBei + "(";
                        e.fanInfo.forEach((function(e, t) {
                            i += (0 != t ? "," : "") + e
                        })), i += ")", this.desc.string = i
                    } else this.desc.string = ""
                }, o.onDestroy = function() {}, t
            }(d)).prototype, "title", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = t(m.prototype, "desc", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(m.prototype, "money", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = m)) || g) || g)), o._RF.pop()
        }
    }
}))