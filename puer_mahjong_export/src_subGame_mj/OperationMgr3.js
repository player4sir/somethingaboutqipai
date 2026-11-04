System.register("chunks:///_virtual/OperationMgr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./BaseCache.ts", "./FXJConfig3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.EventManager
        }, function(e) {
            i = e.BaseCache
        }, function(e) {
            o = e.OPCode
        }, function(e) {
            r = e.GameEvent
        }, function(e) {
            s = e.GameRuleConfig
        }, function(e) {
            u = e.PlayerMgr
        }, function(e) {
            l = e.RoomMgr
        }],
        execute: function() {
            n._RF.push({}, "08332KSum9ACaXiKSGNJEXy", "OperationMgr", void 0), e("OperationMgr", function(e) {
                function n(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).operation = null, n.seatId = 0, n.userId = 0, n.cardSeatId = 0, n.cardUserId = 0, n.opGroups = null, n.tingInfos = null, n.tingInfosMap = null, n.tingInfosRangeRemain = null, n.tingInfosRangeBei = null, n.extendInfo = "", n
                }
                t(n, e), n.getInstance = function() {
                    return n.instance || (n.instance = new n), n.instance
                };
                var i = n.prototype;
                return i.getPassNumber = function() {
                    var e, t = 0;
                    return null == (e = this.opGroups) || e.forEach((function(e) {
                        var n;
                        e.opCode === o.OPE_PASS && (null == e || null == (n = e.cardsList) ? void 0 : n.length) > 0 && (t = e.cardsList[0].cards[0])
                    })), t
                }, i.getHuNumber = function() {
                    var e, t = 0;
                    return null == (e = this.opGroups) || e.forEach((function(e) {
                        var n;
                        (null == (n = e.cardsList) ? void 0 : n.length) > 0 && (e.opCode === o.OPE_HU || e.opCode === o.OPE_GANG_HU || e.opCode === o.OPE_ZI_MO || e.opCode === o.OPE_TANZI_HU) && (t = e.cardsList[0].cards[0])
                    })), t
                }, i.getOprationListNumber = function(e, t) {
                    var n, a = [];
                    return null == (n = this.opGroups) || n.forEach((function(n) {
                        var i;
                        n.opCode === e && (null == (i = n.cardsList) ? void 0 : i.length) > 0 && (a = n.cardsList[t].cards)
                    })), a
                }, i.getOprationListExtra = function(e, t) {
                    var n, a = null;
                    return null == (n = this.opGroups) || n.forEach((function(n) {
                        var i;
                        n.opCode === e && (null == (i = n.cardsList) ? void 0 : i.length) > 0 && (a = n.cardsList[t].extra)
                    })), a
                }, i.getOprationCardList = function(e) {
                    var t, n = [];
                    return null == (t = this.opGroups) || t.forEach((function(t) {
                        t.opCode === e && (n = t.cardsList || [])
                    })), n
                }, i.setExtendInfoCardList = function(e) {
                    this.extendInfo = e
                }, i.getExtendInfoCardList = function(e) {
                    var t, n = [],
                        a = null == (t = (JSON.parse(this.extendInfo) || [])[e]) ? void 0 : t.chosenGroups;
                    return a && a.length > 0 && a.forEach((function(e, t) {
                        n.push({
                            cards: e
                        })
                    })), n
                }, i.reset = function() {
                    this.operation = null, this.seatId = -1, this.userId = -1, this.cardSeatId = -1, this.cardUserId = -1, this.opGroups = [], this.tingInfos = [], this.tingInfosMap = {}, this.tingInfosRangeRemain = null, this.tingInfosRangeBei = null, this.extendInfo = ""
                }, i.updateMyselfOpration = function(e) {
                    var t, n, i = this;
                    a.dispatch(r.SYN_USER_OPERATION, e), this.operation = e, this.seatId = e.seatId, this.userId = e.userId, this.cardSeatId = e.cardSeatId, this.cardUserId = e.cardUserId, this.opGroups = e.opGroups || [], this.tingInfos = e.tingInfos, this.extendInfo = e.extendInfo, this.tingInfosMap = {}, this.tingInfosRangeRemain = null, this.tingInfosRangeBei = null, this.tingInfos && this.tingInfos.forEach((function(e, t, n) {
                        if (e.info) {
                            var a = 0,
                                o = 0;
                            e.info.forEach((function(e, t, n) {
                                a += e.remain, o += e.totalBei
                            })), i.tingInfosMap[e.card] = {
                                totalRemain: a,
                                totalBei: o,
                                info: e.info
                            }, i.tingInfosRangeRemain ? (a < i.tingInfosRangeRemain[0] && (i.tingInfosRangeRemain[0] = a), a > i.tingInfosRangeRemain[1] && (i.tingInfosRangeRemain[1] = a)) : i.tingInfosRangeRemain = [a, a], i.tingInfosRangeBei ? (o < i.tingInfosRangeBei[0] && (i.tingInfosRangeBei[0] = o), o > i.tingInfosRangeBei[1] && (i.tingInfosRangeBei[1] = o)) : i.tingInfosRangeBei = [o, o]
                        }
                    })), null == (t = this.opGroups) || t.forEach((function(e) {
                        e.opCode === o.OPE_LANG_QI && e.cardsList.sort((function(e, t) {
                            return e.cards.length - t.cards.length
                        }))
                    })), null == (n = this.opGroups) || n.sort((function(e, t) {
                        return e.opCode - t.opCode
                    }))
                }, i.updateOpGroup = function(e) {
                    this.opGroups = e
                }, i.getOpGroup = function() {
                    return this.opGroups
                }, i.checkMyChiPenGang = function(e) {
                    var t, n = !1;
                    return !l.getInstance().isMySelfSeat(e) && l.getInstance().isMySelfSeat(this.seatId) && (null == (t = this.opGroups) || t.forEach((function(e) {
                        e.opCode != o.OPE_RIGHT_CHI && e.opCode != o.OPE_MIDDLE_CHI && e.opCode != o.OPE_LEFT_CHI && e.opCode != o.OPE_PENG && e.opCode != o.OPE_QIANG_PENG && e.opCode != o.OPE_GANG && e.opCode != o.OPE_HUA_GANG && e.opCode != o.OPE_AN_GANG || (n = !0)
                    }))), n
                }, i.isSupportDiTing = function(e) {
                    if (null != e && s.isSupportDiTing && e == o.OPE_DI_TING) return !0
                }, i.getIndexByCards = function(e) {
                    for (var t = u.getInstance().getMyhands(), n = l.getInstance().orderCards(t), a = 0; a < n.length; a++)
                        if (n[a] == e) return a;
                    return null
                }, i.clear = function() {}, n
            }(i)).instance = null, n._RF.pop()
        }
    }
}))