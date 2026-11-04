System.register("chunks:///_virtual/OperationMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./BaseCache.ts", "./FXJConfig.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./PlayerMgr.ts", "./RoomMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.EventManager
        }, function(e) {
            a = e.BaseCache
        }, function(e) {
            o = e.OPCode
        }, function(e) {
            r = e.GameEvent
        }, function(e) {
            s = e.GameRuleConfig
        }, function(e) {
            l = e.PlayerMgr
        }, function(e) {
            u = e.RoomMgr
        }],
        execute: function() {
            n._RF.push({}, "66994Kjb+NKvIYnENLrxVK+", "OperationMgr", void 0), e("OperationMgr", function(e) {
                function n(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).operation = null, n.seatId = 0, n.userId = 0, n.cardSeatId = 0, n.cardUserId = 0, n.opGroups = null, n.tingInfos = null, n.tingInfosMap = null, n.tingInfosRangeRemain = null, n.tingInfosRangeBei = null, n.extendInfo = "", n
                }
                t(n, e), n.getInstance = function() {
                    return n.instance || (n.instance = new n), n.instance
                };
                var a = n.prototype;
                return a.getPassNumber = function() {
                    var e, t = 0;
                    return null == (e = this.opGroups) || e.forEach((function(e) {
                        var n;
                        e.opCode === o.OPE_PASS && (null == e || null == (n = e.cardsList) ? void 0 : n.length) > 0 && (t = e.cardsList[0].cards[0])
                    })), t
                }, a.getHuNumber = function() {
                    var e, t = 0;
                    return null == (e = this.opGroups) || e.forEach((function(e) {
                        var n;
                        (null == (n = e.cardsList) ? void 0 : n.length) > 0 && (e.opCode === o.OPE_HU || e.opCode === o.OPE_GANG_HU || e.opCode === o.OPE_ZI_MO || e.opCode === o.OPE_TANZI_HU) && (t = e.cardsList[0].cards[0])
                    })), t
                }, a.getOprationListNumber = function(e, t) {
                    var n, i = [];
                    return null == (n = this.opGroups) || n.forEach((function(n) {
                        var a;
                        n.opCode === e && (null == (a = n.cardsList) ? void 0 : a.length) > 0 && (i = n.cardsList[t].cards)
                    })), i
                }, a.getOprationListExtra = function(e, t) {
                    var n, i = null;
                    return null == (n = this.opGroups) || n.forEach((function(n) {
                        var a;
                        n.opCode === e && (null == (a = n.cardsList) ? void 0 : a.length) > 0 && (i = n.cardsList[t].extra)
                    })), i
                }, a.getOprationCardList = function(e) {
                    var t, n = [];
                    return null == (t = this.opGroups) || t.forEach((function(t) {
                        t.opCode === e && (n = t.cardsList || [])
                    })), n
                }, a.setExtendInfoCardList = function(e) {
                    this.extendInfo = e
                }, a.getExtendInfoCardList = function(e) {
                    var t, n = [],
                        i = null == (t = (JSON.parse(this.extendInfo) || [])[e]) ? void 0 : t.chosenGroups;
                    return i && i.length > 0 && i.forEach((function(e, t) {
                        n.push({
                            cards: e
                        })
                    })), n
                }, a.reset = function() {
                    this.operation = null, this.seatId = -1, this.userId = -1, this.cardSeatId = -1, this.cardUserId = -1, this.opGroups = [], this.tingInfos = [], this.tingInfosMap = {}, this.tingInfosRangeRemain = null, this.tingInfosRangeBei = null, this.extendInfo = ""
                }, a.updateMyselfOpration = function(e) {
                    var t, n, a = this;
                    i.dispatch(r.SYN_USER_OPERATION, e), this.operation = e, this.seatId = e.seatId, this.userId = e.userId, this.cardSeatId = e.cardSeatId, this.cardUserId = e.cardUserId, this.opGroups = e.opGroups || [], this.tingInfos = e.tingInfos, this.extendInfo = e.extendInfo, this.tingInfosMap = {}, this.tingInfosRangeRemain = null, this.tingInfosRangeBei = null, this.tingInfos && this.tingInfos.forEach((function(e, t, n) {
                        if (e.info) {
                            var i = 0,
                                o = 0;
                            e.info.forEach((function(e, t, n) {
                                i += e.remain, o += e.totalBei
                            })), a.tingInfosMap[e.card] = {
                                totalRemain: i,
                                totalBei: o,
                                info: e.info
                            }, a.tingInfosRangeRemain ? (i < a.tingInfosRangeRemain[0] && (a.tingInfosRangeRemain[0] = i), i > a.tingInfosRangeRemain[1] && (a.tingInfosRangeRemain[1] = i)) : a.tingInfosRangeRemain = [i, i], a.tingInfosRangeBei ? (o < a.tingInfosRangeBei[0] && (a.tingInfosRangeBei[0] = o), o > a.tingInfosRangeBei[1] && (a.tingInfosRangeBei[1] = o)) : a.tingInfosRangeBei = [o, o]
                        }
                    })), null == (t = this.opGroups) || t.forEach((function(e) {
                        e.opCode === o.OPE_LANG_QI && e.cardsList.sort((function(e, t) {
                            return e.cards.length - t.cards.length
                        }))
                    })), null == (n = this.opGroups) || n.sort((function(e, t) {
                        return e.opCode - t.opCode
                    }))
                }, a.updateOpGroup = function(e) {
                    this.opGroups = e
                }, a.getOpGroup = function() {
                    return this.opGroups
                }, a.checkMyChiPenGang = function(e) {
                    var t, n = !1;
                    return !u.getInstance().isMySelfSeat(e) && u.getInstance().isMySelfSeat(this.seatId) && (null == (t = this.opGroups) || t.forEach((function(e) {
                        e.opCode != o.OPE_RIGHT_CHI && e.opCode != o.OPE_MIDDLE_CHI && e.opCode != o.OPE_LEFT_CHI && e.opCode != o.OPE_PENG && e.opCode != o.OPE_QIANG_PENG && e.opCode != o.OPE_GANG && e.opCode != o.OPE_HUA_GANG && e.opCode != o.OPE_AN_GANG || (n = !0)
                    }))), n
                }, a.isSupportDiTing = function(e) {
                    if (null != e && s.isSupportDiTing && e == o.OPE_DI_TING) return !0
                }, a.getIndexByCards = function(e) {
                    for (var t = l.getInstance().getMyhands(), n = u.getInstance().orderCards(t), i = 0; i < n.length; i++)
                        if (n[i] == e) return i;
                    return null
                }, a.clear = function() {}, n
            }(a)).instance = null, n._RF.pop()
        }
    }
}))