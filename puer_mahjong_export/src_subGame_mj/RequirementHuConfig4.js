System.register("chunks:///_virtual/RequirementHuConfig4.ts", ["cc", "./Utils.ts", "./GCache.ts", "./FXJConfig3.ts"], (function(e) {
    var t, n, a, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            i = e.OPCode
        }],
        execute: function() {
            var o;
            e("requireData", (function() {
                var e, t = a.SelectGame.getCurRoomInfo();
                return e = n.isNotNull(t) && n.isNotNull(null == t ? void 0 : t.play_mode) ? null == t ? void 0 : t.play_mode : a.SelectGame.getDefaultPlayMode(a.SelectGame.getCurGameId()), r[e] ? r[e] : r[0]
            })), t._RF.push({}, "e76bblCpI5ESaY7/fEZQRkg", "RequirementHuConfig", void 0);
            var r = ((o = {})[0] = [{
                text: "三色全（万、筒、条3门花色都有）",
                checkFunc: function(e, t) {
                    return !! function(e, t) {
                        var n = !1,
                            a = !1,
                            o = !1;
                        return null == e || e.forEach((function(e) {
                            var t = e >> 8;
                            t >= 1 && t <= 9 && (n = !0), t >= 17 && t <= 25 && (a = !0), t >= 33 && t <= 41 && (o = !0)
                        })), !!(n && a && o) || (null == t || t.forEach((function(e) {
                            e.opCode !== i.OPE_OUT_CARD && e.opCards.forEach((function(e) {
                                var t = e >> 8;
                                t >= 1 && t <= 9 && (n = !0), t >= 17 && t <= 25 && (a = !0), t >= 33 && t <= 41 && (o = !0)
                            }))
                        })), !!(n && a && o) || void 0)
                    }(e, t)
                }
            }, {
                text: "有刻子（至少有1个刻子 或者 1个杠 或者 有红中、发财、白板里的任意1对）",
                checkFunc: function(e, t) {
                    return !(! function(e) {
                        var t = 0,
                            n = 0,
                            a = 0;
                        return null == e || e.forEach((function(e) {
                            var i = e >> 8;
                            65 == i ? t++ : 65 == i ? n++ : 65 == i && a++
                        })), 2 == t || 2 == n || 2 == a
                    }(e) && ! function(e, t) {
                        for (var n = 0; n < (null == t ? void 0 : t.length); n++) {
                            var a = t[n].opCode;
                            if (a == i.OPE_GANG || a == i.OPE_AN_GANG || a == i.OPE_BU_GANG || a == i.OPE_PENG) return !0
                        }
                        var o = {};
                        for (var r in null == e || e.forEach((function(e) {
                                var t = e >> 8;
                                o[t] = o[t] ? o[t] + 1 : 1
                            })), o)
                            if (o.hasOwnProperty(r)) {
                                if (o[r] >= 3) return !0;
                                if (o[65] >= 2 || o[66] >= 2 || o[67] >= 2) return !0
                            }
                    }(e, t))
                }
            }, {
                text: "已开门（至少有1次吃、碰、杠，暗杠不算）",
                checkFunc: function(e, t) {
                    return !! function(e, t) {
                        if (!(t instanceof Array)) return !1;
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n].opCode;
                            if (a == i.OPE_GANG || a == i.OPE_RIGHT_CHI || a == i.OPE_MIDDLE_CHI || a == i.OPE_LEFT_CHI || a == i.OPE_BU_GANG || a == i.OPE_PENG) return !0
                        }
                    }(0, t)
                }
            }, {
                text: "有幺九（有字牌或1、9牌）",
                checkFunc: function(e, t) {
                    return !! function(e, t) {
                        for (var n = 0; n < (null == e ? void 0 : e.length); n++) {
                            if ((61440 & e[n]) >= 12288) return !0;
                            var a = 3840 & e[n];
                            if (256 == a || 2304 == a) return !0
                        }
                        for (var o = 0; o < (null == t ? void 0 : t.length); o++)
                            for (var r = 0; r < t[o].opCards.length; r++)
                                if (t[o].opCode != i.OPE_OUT_CARD) {
                                    var s = t[o].opCards[r];
                                    if ((61440 & s) >= 12288) return !0;
                                    var u = 3840 & s;
                                    if (256 == u || 2304 == u) return !0
                                }
                    }(e, t)
                }
            }, {
                text: "有顺子（至少有1个顺子）",
                checkFunc: function(e, t) {
                    return !! function(e, t) {
                        for (var n = 0; n < (null == t ? void 0 : t.length); n++) {
                            var a = t[n].opCode;
                            if (a == i.OPE_RIGHT_CHI || a == i.OPE_MIDDLE_CHI || a == i.OPE_LEFT_CHI) return !0
                        }
                        for (var o = 0, r = 0; r < (null == e ? void 0 : e.length); r++) {
                            o = 1;
                            for (var s = e[r], u = s >> 12, l = s >> 8 & 15, d = r + 1; d < e.length; d++) {
                                var c = e[d],
                                    h = c >> 12,
                                    p = c >> 8 & 15;
                                if (u == h) {
                                    if (l + 1 == p) {
                                        if (++o >= 3) return !0;
                                        s = c, u = h, l = p;
                                        continue
                                    }
                                    if (l == p) continue
                                }
                                break
                            }
                        }
                    }(e, t)
                }
            }], o);
            t._RF.pop()
        }
    }
}))