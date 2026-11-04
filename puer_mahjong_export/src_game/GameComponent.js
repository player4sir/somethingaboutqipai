System.register("chunks:///_virtual/GameComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./GameEvent.ts", "./CardUtil.ts", "./GameBaseComponent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.EventManager
        }, function(e) {
            r = e.GameEvent
        }, function(e) {
            s = e.CardUtil
        }, function(e) {
            l = e.GameBaseComponent
        }],
        execute: function() {
            var u;
            n._RF.push({}, "b4b3fR+1G9KUKVJ9gYFw6Pa", "GameComponent", void 0);
            var d = i.ccclass,
                c = (i.property, i.menu);
            e("GameComponent", d("GameComponent")(u = c("prefab/game/GameComponent")(u = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                t(n, e);
                var i = n.prototype;
                return i.checkHuRequirement = function(e, t, n) {
                    var i = a.isNull(n) ? e : e.concat(n),
                        l = {},
                        u = 0;
                    i.forEach((function(e) {
                        if (s.isLaiziCard(e)) u++;
                        else {
                            var t = s.getCardValueLocal(e);
                            l[t] = (l[t] || 0) + 1
                        }
                    })), this.check3N2(l, u) && o.dispatch(r.VIEW_SHOW_HU_TIPS, "平胡：不可抢杠胡、海底炮、普通点炮胡")
                }, i.check3N2 = function(e, t) {
                    for (var n in e) {
                        var i = Number(n),
                            a = e[i];
                        if (a >= 2) {
                            e[i] -= 2;
                            var o = this.check3N(e, t);
                            if (e[i] += 2, o) return !0
                        } else if (1 == a && t >= 1) {
                            e[i] -= 1;
                            var r = this.check3N(e, t - 1);
                            if (e[i] += 1, r) return !0
                        }
                    }
                    return !!(t >= 2 && this.check3N(e, t - 2))
                }, i.check3N = function(e, t) {
                    return !!(Object.values(e).every((function(e) {
                        return 0 === e
                    })) && t >= 0) || !!this.checkKeZi(e, t) || !!this.checkShunZi(e, t)
                }, i.checkKeZi = function(e, t) {
                    for (var n in e) {
                        var i = Number(n),
                            a = e[i];
                        if (a >= 3) {
                            e[i] -= 3;
                            var o = this.check3N(e, t);
                            if (e[i] += 3, o) return !0
                        } else if (2 == a && t >= 1) {
                            e[i] -= 2;
                            var r = this.check3N(e, t - 1);
                            if (e[i] += 2, r) return !0
                        } else if (1 == a && t >= 2) {
                            e[i] -= 1;
                            var s = this.check3N(e, t - 2);
                            if (e[i] += 1, s) return !0
                        }
                    }
                    return !1
                }, i.checkShunZi = function(e, t) {
                    for (var n in e) {
                        var i = Number(n),
                            a = i >> 4;
                        if (0 == a || 1 == a || 2 == a) {
                            var o = i - 1,
                                r = i + 1,
                                s = e[i],
                                l = e[o] || 0,
                                u = e[r] || 0;
                            if (s >= 1 && l >= 1 && u >= 1) {
                                e[i] -= 1, e[o] -= 1, e[r] -= 1;
                                var d = this.check3N(e, t);
                                if (e[i] += 1, e[o] += 1, e[r] += 1, d) return !0
                            } else if (t >= 2) {
                                if (0 == s && 0 == l && u >= 1) {
                                    e[r] -= 1;
                                    var c = this.check3N(e, t - 2);
                                    if (e[r] += 1, c) return !0
                                } else if (s >= 1 && 0 == l && 0 == u) {
                                    e[i] -= 1;
                                    var h = this.check3N(e, t - 2);
                                    if (e[i] += 1, h) return !0
                                } else if (0 == s && l >= 1 && 0 == u) {
                                    e[o] -= 1;
                                    var p = this.check3N(e, t - 2);
                                    if (e[o] += 1, p) return !0
                                }
                            } else if (t >= 1)
                                if (0 == s && l >= 1 && u >= 1) {
                                    e[o] -= 1, e[r] -= 1;
                                    var f = this.check3N(e, t - 1);
                                    if (e[o] += 1, e[r] += 1, f) return !0
                                } else if (s >= 1 && 0 == l && u >= 1) {
                                e[i] -= 1, e[r] -= 1;
                                var _ = this.check3N(e, t - 1);
                                if (e[i] += 1, e[r] += 1, _) return !0
                            } else if (s >= 1 && l >= 1 && 0 == u) {
                                e[i] -= 1, e[o] -= 1;
                                var g = this.check3N(e, t - 1);
                                if (e[i] += 1, e[o] += 1, g) return !0
                            }
                        }
                    }
                    return !1
                }, n
            }(l)) || u) || u), n._RF.pop()
        }
    }
}))