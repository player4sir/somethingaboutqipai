System.register("chunks:///_virtual/LiuShuiItemCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./TableCell.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.Color
        }, function(e) {
            l = e.Utils
        }, function(e) {
            d = e.TableCell
        }],
        execute: function() {
            var c, h, p, m, _, g, f, C, E, S;
            o._RF.push({}, "55b84G4IMdIxaxaHx8LzkiU", "LiuShuiItemCtr", void 0);
            var A = r.ccclass,
                I = r.property,
                G = r.menu;
            e("LiuShuiItemCtr", (c = A("LiuShuiItemCtr"), h = G("prefab/subGame/mj/LiuShuiItemCtr"), p = I({
                tooltip: "标题",
                type: s
            }), m = I({
                tooltip: "倍数说明",
                type: s
            }), _ = I({
                tooltip: "输赢银币",
                type: s
            }), c(g = h((C = t((f = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "title", C, i(t)), a(t, "desc", E, i(t)), a(t, "money", S, i(t)), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.updateData = function(e) {
                    this.title.string = e.name;
                    var t = l.number_valueOf(e.money),
                        n = l.formatMoney(t, {
                            maxLen: 4,
                            isSimplify: !0
                        });
                    if (t > 0 && (n = "+" + n), this.money.string = n, this.money.color = t > 0 ? new u(255, 142, 51) : new u(109, 133, 213), e.fanInfo.length > 0) {
                        var a = e.totalBei + "(";
                        e.fanInfo.forEach((function(e, t) {
                            a += (0 != t ? "," : "") + e
                        })), a += ")", this.desc.string = a
                    } else this.desc.string = ""
                }, o.onDestroy = function() {}, t
            }(d)).prototype, "title", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(f.prototype, "desc", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(f.prototype, "money", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = f)) || g) || g)), o._RF.pop()
        }
    }
}))