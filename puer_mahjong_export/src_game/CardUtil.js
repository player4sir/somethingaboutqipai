System.register("chunks:///_virtual/CardUtil.ts", ["cc", "./Utils.ts", "./GCache.ts", "./FXJConfig.ts", "./GameRuleConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            i = e.GCache
        }, function(e) {
            a = e.MJTYPE, o = e.MahjongMap, r = e.MahjongResIndex
        }, function(e) {
            s = e.GameRuleConfig
        }],
        execute: function() {
            t._RF.push({}, "4b37bXSsqpKgbzPBcSO/G5V", "CardUtil", void 0), e("CardUtil", function() {
                function e() {}
                return e.updateLiziCard = function(e) {
                    this.laiziCards = e
                }, e.resetLiziCard = function() {
                    this.laiziCards = []
                }, e._checkLaizi = function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (this.isLaiziCard(e[t])) {
                            var n = e.splice(t, 1)[0];
                            e.unshift(n)
                        } return e
                }, e.sortCards = function(t, n) {
                    if (void 0 === n && (n = a.TIAO), a.TIAO == n) return e.sortFeiXiaoJiCards(t);
                    var i, o = [
                        [],
                        [],
                        []
                    ];
                    return null == t || t.forEach((function(t) {
                        var n = e.getCardValueLocal(t);
                        n >= 1 && n <= 9 && o[0].push(t), n >= 17 && n <= 25 && o[1].push(t), n >= 33 && n <= 41 && o[2].push(t)
                    })), o[0] = [].concat(o[0]).sort((function(e, t) {
                        return e - t
                    })), o[1] = [].concat(o[1]).sort((function(e, t) {
                        return e - t
                    })), o[2] = [].concat(o[2]).sort((function(e, t) {
                        return e - t
                    })), i = a.WAN == n ? o[1].concat(o[2]).concat(o[0]) : a.TONG == n ? o[0].concat(o[2]).concat(o[1]) : o[0].concat(o[1]).concat(o[2]), this._checkLaizi(i)
                }, e.sortFeiXiaoJiCards = function(e) {
                    var t = [].concat(e).sort((function(e, t) {
                        return e - t
                    }));
                    return this._checkLaizi(t)
                }, e.addLeadingZero = function(e) {
                    return e < 10 ? "0" + e : e.toString()
                }, e.toHex = function(e) {
                    var t = e.toString(16);
                    return 1 === t.length ? "0" + t : t
                }, e.hasLaiziCard = function() {
                    return 1 == s.HasLaizi && !n.string_isEmpty(s.Laizi_value) || this.laiziCards.length > 0
                }, e.isLaiziCard = function(e) {
                    var t = this.getCardValue(e);
                    if (1 == s.HasLaizi && !n.string_isEmpty(s.Laizi_value) && s.Laizi_value == t) return !0;
                    if (this.laiziCards.length > 0) {
                        var i = this.laiziCards.filter((function(t) {
                            return t == e
                        }));
                        if ((null == i ? void 0 : i.length) > 0) return !0
                    }
                    return !1
                }, e.isPaoCard = function(t, n) {
                    var i = e.getCardValue(t);
                    return o.get(i), !(!n || !n[t])
                }, e.getCardValue = function(t) {
                    var n = e.getCardValueLocal(t);
                    return "0x" + e.toHex(n)
                }, e.getCardValueLocal = function(e) {
                    return e >> 8
                }, e.getCardValueLocalTypeValue = function(t) {
                    var n = e.getCardValueLocal(t);
                    return [n >> 4, n &= 15]
                }, e.getCardTillingValue = function(t) {
                    var n = e.getCardValueLocalTypeValue(t),
                        i = n[0],
                        a = n[1];
                    if (i >= 0 && i <= r.length - 1) {
                        var o = r[i] + a - 1;
                        return [o % 10, Math.floor(o / 10)]
                    }
                    return [0, 0]
                }, e.getMajiangValue = function(t) {
                    var n = e.getCardValue(t);
                    return o.get(n)
                }, e.getMajiangValues = function(t) {
                    var n = [];
                    return t.forEach((function(t) {
                        var i = e.getCardValue(t);
                        n.push(o.get(i))
                    })), n
                }, e.getDirFromSeatId = function(e) {
                    return n.isNull(e) ? -1 : e - 1
                }, e.getSeatIdFromDir = function(e) {
                    return n.isNull(e) ? -1 : e + 1
                }, e.calculatePlayerPosition = function(e, t) {
                    var n = (t - e + s.playerNum) % s.playerNum;
                    if (i.PrivateData.isTwoPlayerModule() && 0 != n) return "对家";
                    switch (n) {
                        case 1:
                            return "下家";
                        case 2:
                            return 3 == s.playerNum ? "上家" : "对家";
                        case 3:
                            return "上家";
                        default:
                            return "本家"
                    }
                }, e.calculatePlayerSeat = function(e, t) {
                    return (t - e + s.playerNum) % s.playerNum
                }, e.calculatePlayerSeatByDifference = function(t, n) {
                    var i = (e.getDirFromSeatId(t) + n) % s.playerNum;
                    return e.getSeatIdFromDir(i)
                }, e.sortPlayersBySeatId = function(e, t) {
                    var n = [],
                        i = e.find((function(e) {
                            return e.seatId === t
                        }));
                    if (i) {
                        n.push(i);
                        for (var a = function(i) {
                                var a = e.find((function(e) {
                                    return (e.seatId - t + s.playerNum) % s.playerNum === i
                                }));
                                a && n.push(a)
                            }, o = 1; o <= s.playerNum - 1; o++) a(o)
                    }
                    return n
                }, e.isSameHuaSe = function(t) {
                    var n = [0, 0, 0];
                    return null == t || t.forEach((function(t) {
                        var i = e.getCardValueLocal(t);
                        i >= 1 && i <= 9 ? n[0] = 1 : i >= 17 && i <= 25 ? n[1] = 1 : i >= 33 && i <= 41 && (n[2] = 1)
                    })), n[0] + n[1] + n[2] == 1
                }, e
            }()).laiziCards = [], t._RF.pop()
        }
    }
}))