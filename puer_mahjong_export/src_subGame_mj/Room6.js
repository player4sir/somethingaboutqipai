System.register("chunks:///_virtual/Room6.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Desk.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./Encrypto.ts", "./EventManager.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./CardUtil3.ts", "./BankerMgr4.ts", "./OperationMgr3.ts", "./OperationResultMgr3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./SettleMgr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            i = e.Desk
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            u = e.Encrypt
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            d = e.OPCode, c = e.UserStatus
        }, function(e) {
            h = e.FXJEvent
        }, function(e) {
            p = e.GameEvent
        }, function(e) {
            m = e.GameRuleConfig
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.BankerMgr
        }, function(e) {
            f = e.OperationMgr
        }, function(e) {
            C = e.OperationResultMgr
        }, function(e) {
            E = e.PlayerMgr
        }, function(e) {
            S = e.RoomMgr, A = e.ROOM_DATA_TYPE
        }, function(e) {
            I = e.SettleMgr
        }],
        execute: function() {
            n._RF.push({}, "c130dUwfHZNG5fFyDNQYK2d", "Room", void 0), e("Room", function(e) {
                function n() {
                    var t;
                    return (t = e.call(this, "Room") || this).turnMe = !1, t.isReconnect = !1, t._listenList = [], t.bankerMgr = g.getInstance(), t.addGameComp(), t
                }
                t(n, e);
                var i = n.prototype;
                return i.addGameComp = function() {
                    this.addComponent("MJGameComponent");
                    var e = this.getComponent("MJGameComponent");
                    if ("function" == typeof e.setDelegate) return e.setDelegate(this)
                }, i.doGameCompFun = function(e) {
                    var t = this.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, i.enterRoomUpdate = function(e) {
                    var t, n, a, i;
                    null != e && null != (t = e.roomInfo) && null != (n = t.roomCfg) && n.level && this._updateLevel(null == e || null == (a = e.roomInfo) || null == (i = a.roomCfg) ? void 0 : i.level), S.getInstance().updateRoomInfo(e), S.getInstance().resetDingQue(), I.getInstance().onLoginRoom(), E.getInstance().setPlayerList(null == e ? void 0 : e.playerList), E.getInstance().getMyPlayerInfo(), E.getInstance().synGameRecord()
                }, i.reconnectionRoomUpdate = function(e) {
                    var t = this;
                    S.getInstance().reconnectionRoomUpdate(e), E.getInstance().setPlayerList(null == e ? void 0 : e.players), E.getInstance().playerList.forEach((function(e, t, n) {
                        if (e && e.opGroups && e.tingOpcode && e.tingOpcode == d.OPE_MING_LOU) {
                            var a = {
                                opCode: e.tingOpcode,
                                opCards: e.handCards
                            };
                            e.opGroups.push(a), e.handCards = []
                        }
                    })), m.HasHuagang && E.getInstance().playerList.forEach((function(e, n, a) {
                        var i;
                        if (e && e.opGroups && (null == (i = e.opGroups) ? void 0 : i.length) > 0) {
                            var o = 0;
                            e.opGroups.forEach((function(e, t, n) {
                                var a = e.opCards[0];
                                if (a) {
                                    var i = _.getCardValueLocalTypeValue(a),
                                        r = i[0];
                                    i[1], e.opCode == d.OPE_HUA_GANG ? o += e.opCards.length : e.opCode == d.OPE_AN_GANG && 3 == r ? o += 4 : e.opCode == d.OPE_AN_GANG && r < 3 || e.opCode == d.OPE_GANG && 3 == r ? o += 2 : e.opCode == d.OPE_GANG && r < 3 && (o += 1)
                                }
                            }));
                            var r = {
                                seatId: e.seatId,
                                gangNum: o
                            };
                            t.updateGangOperationResult(r), l.dispatch(p.VIEW_UPDATE_GANG_OPERATION_RESULT)
                        }
                    }));
                    var n = E.getInstance().getMyPlayerInfo();
                    if (a.isNotNull(n)) {
                        var i = u.JsonDecode(n.opExtend);
                        a.isNotNull(i) && (a.table_isEmpty(i.paoCardTBytes) || S.getInstance().updatePaoCards(i.paoCardTBytes))
                    }
                    var o = u.JsonDecode(e.customJson);
                    console.log("重连-------customInfo", o);
                    var r, s, c = null == o ? void 0 : o.curInfo;
                    if (a.isNotNull(c))
                        if (a.table_isEmpty(c.baoPaiData))
                            if ("DingQue" == (null == c ? void 0 : c.name)) this._checkDingQueData(c, e);
                            else if (null != (null == c ? void 0 : c.hszData)) this._checkHuanSanZhangData(c);
                    else if ((null == c || null == (r = c.WaitUserGiveUp) || null == (s = r.seatIdList) ? void 0 : s.length) > 0) S.getInstance().setGameInfoByTag(A.RECONNECT_WAIT_GIVEUP, {
                        seatIdList: null == c ? void 0 : c.WaitUserGiveUp.seatIdList,
                        timePass: e.timePass,
                        curTime: a.time()
                    }), this.getComponent("MJGameComponent").scheduleOnce((function() {
                        l.dispatch(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, null == c ? void 0 : c.WaitUserGiveUp, e.timePass)
                    }));
                    else if ("FanGangPai" == (null == c ? void 0 : c.status)) {
                        if (c.seatId && c.seatId == S.getInstance().mySeatId) {
                            var g = {
                                cards: S.getInstance().fangangCards
                            };
                            this.getComponent("MJGameComponent").scheduleOnce((function() {
                                l.dispatch(p.VIEW_UPDATE_BU_GANG_PAI, g)
                            }))
                        }
                    } else "DiTing" == (null == c ? void 0 : c.name) && (e.operation || (e.operation = null == c ? void 0 : c.operation));
                    else this.getComponent("MJGameComponent").scheduleOnce((function() {
                        l.dispatch(h.BROADCAST_HUAN_BAO, c.baoPaiData)
                    }));
                    this._checkPlayerStatus(e, o), a.isNotNull(o) && (a.table_isEmpty(o.historyInfo) || this.doGameCompFun("checkReconnectInfo", o, e) || o.historyInfo.forEach((function(e, n, i) {
                        if (e && e.name && "XiaZhu" == e.name) {
                            var o = e.options;
                            if (a.isNotNull(o)) {
                                var r = {
                                    options: e.options
                                };
                                t.updateXiaZhuOptions(r)
                            }
                            var s = e.data;
                            if (a.isNotNull(s))
                                for (var u in s) {
                                    var d = {
                                        seatId: a.number_valueOf(u),
                                        option: a.number_valueOf(s[u])
                                    };
                                    t.updateXiaZhuResult(d), l.dispatch(p.VIEW_UPDATE_XIA_ZHU_RESULT, d)
                                }
                        }
                    }))), this.isReconnect = !0, e.operation ? (this.userOperation(e.operation), setTimeout((function() {
                        l.dispatch(p.VIEW_USER_OPERATION, e.operation)
                    }), 0)) : (f.getInstance().reset(), this.turnMe = !1), this.doGameCompFun("checkRecoinnectOperationSeatId", e), e.settleItems && (I.getInstance().onLoginRoom(), e.settleItems.forEach((function(e) {
                        I.getInstance().onReceiveSettleInfo(e, !0)
                    }))), E.getInstance().synGameRecord()
                }, i._checkPlayerStatus = function(e, t) {
                    var n;
                    if ((null == e || null == (n = e.players) ? void 0 : n.length) > 0) {
                        var a, i, d = (null == t || null == (a = t.curInfo) ? void 0 : a.userStatusBeforeOFFList) || [],
                            h = [],
                            p = [];
                        null == e || null == (i = e.players) || i.forEach((function(e) {
                            if (e.opExtend) {
                                var t, n = u.JsonDecode(e.opExtend),
                                    a = null == (t = E.getInstance().findPlayerWithSeatId(e.seatId)) ? void 0 : t.seatId;
                                if (null != (null == n ? void 0 : n.queSuit) && n.queSuit >= 0 && null != a && (S.getInstance().updateDingQue(a, {
                                        option: n.queSuit,
                                        seatId: a,
                                        userId: e.userId,
                                        isReconnect: !0
                                    }), e.userId == o.User.getUserMid())) {
                                    var i = S.getInstance().orderCards(E.getInstance().getMyhands());
                                    E.getInstance().updateMyhands(i)
                                }
                            }
                            e.status == c.HUED || e.status == c.LEAVE && d[e.seatId - 1] == c.HUED && 0 != (null == e ? void 0 : e.cardCount) ? (h.push({
                                seatId: e.seatId,
                                totalFan: 0
                            }), S.getInstance().isMySelfSeat(e.seatId) && l.dispatch(r.GAME_ROOM_STATE_CHANGE, s.GameRoomState.STATUS_GAMEOVER)) : e.status != c.GIVE_UP && d[e.seatId - 1] != c.GIVE_UP || p.push(e.seatId)
                        })), this.doGameCompFun("checkPlayerStatus", null == e ? void 0 : e.players, d), h.length > 0 && S.getInstance().setGameInfoByTag(A.RECONNECT_HU_INFO, h), p.length > 0 && S.getInstance().setGameInfoByTag(A.RECONNECT_GIVEUP_INFO, p)
                    }
                }, i._checkHuanSanZhangData = function(e) {
                    var t, n;
                    if (S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_STATUS, null), (null == e || null == (t = e.hszData) || null == (n = t.status) ? void 0 : n.length) > 0) {
                        var a = e.hszData,
                            i = a.status;
                        S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_STATUS, {
                            cards: a.cards,
                            status: i
                        });
                        for (var o = 0; o < i.length; o++) {
                            var r = {
                                seatId: o + 1,
                                cards: a.cards
                            };
                            if (o + 1 == S.getInstance().mySeatId) {
                                S.getInstance().setGameInfoByTag(A.HUAN_SAN_ZHANG_CARD, r), 1 == i[o] && E.getInstance().onOneHuanSanZhang({
                                    seatId: r.seatId,
                                    cards: r.cards
                                });
                                break
                            }
                        }
                    }
                }, i._checkDingQueData = function(e, t) {
                    a.table_isEmpty(e.dingQueData) ? E.getInstance().playerList.forEach((function(e) {
                        S.getInstance().updateDingQue(e.seatId, {
                            option: -1,
                            seatId: e.seatId
                        })
                    })) : 1 == e.status ? e.dingQueData.forEach((function(e) {
                        S.getInstance().updateDingQue(e.seatId, e), setTimeout((function() {
                            l.dispatch(p.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, e)
                        }), 0)
                    })) : (S.getInstance().updateDingQue(S.getInstance().mySeatId, {
                        option: -1,
                        seatId: S.getInstance().mySeatId
                    }), setTimeout((function() {
                        l.dispatch(p.VIEW_BROADCAST_DINGQUE_OPTIONS, {
                            options: e.options,
                            suggestion: e.suggestion
                        })
                    }), 0))
                }, i.dealCardUpdate = function(e) {
                    E.getInstance().updatePlayerCardsNum(e.cardsCount), E.getInstance().updateMyhands(e.cards), S.getInstance().updateRemainCardsCount(e.remainCardsCount)
                }, i.gameGrabCard = function(e) {
                    S.getInstance().updateRemainCardsCount(e.remainCardNum), E.getInstance().onGameGrabCard(e)
                }, i.updateHuaCards = function(e) {
                    if (S.getInstance().updateRemainCardsCount(e.remainCardNum), S.getInstance().updateBuHuaZhaPai(e), e.seatId == S.getInstance().mySeatId) {
                        var t = C.getInstance().opCode,
                            n = C.getInstance().opCards;
                        t == d.OPE_HUA_GANG && E.getInstance().changeHandCard(n, e.cards)
                    }
                }, i.updateFanGangCards = function(e) {
                    S.getInstance().updateRemainCardsCount(e.remainCardCount), S.getInstance().fangangCards = e.cards, E.getInstance().gangCount = e.gangCount
                }, i.updateSelectFanGangCards = function(e) {
                    S.getInstance().selectFanGangCards = e.card
                }, i.updatePaoCards = function(e) {
                    S.getInstance().updatePaoCards(e.paoCardTBytes)
                }, i.updateXiaZhuOptions = function(e) {
                    S.getInstance().updateXiaZhuOptions(e)
                }, i.hasXiaZhu = function() {
                    return S.getInstance().hasXiaZhu()
                }, i.updateXiaZhuResult = function(e) {
                    S.getInstance().updateXiaZhuResult(e)
                }, i.getXiaZhuResult = function(e, t) {
                    return S.getInstance().getXiaZhuResult(e, t)
                }, i.updateGangOperationResult = function(e) {
                    S.getInstance().updateGangOperationResult(e)
                }, i.getGangOperationResult = function(e) {
                    return S.getInstance().getGangOperationResult(e)
                }, i.bankerFirstOperation = function(e) {
                    S.getInstance().updateRemainCardsCount(e.remainCardNum), S.getInstance().bankSeatId = e.bankSeatId
                }, i.getUserOperation = function() {
                    return f.getInstance().operation
                }, i.userOperation = function(e) {
                    f.getInstance().updateMyselfOpration(e), this.turnMe = !0
                }, i.userOperationResult = function(e) {
                    var t = {
                        opCode: e.opCode,
                        opCards: e.opCards
                    };
                    E.getInstance().updateOpCards(e.seatId, t), C.getInstance().userOperationResult(e), e.seatId == S.getInstance().mySeatId && (e.opCode != d.OPE_OUT_CARD && e.opCode != d.OPE_RIGHT_CHI && e.opCode != d.OPE_LEFT_CHI && e.opCode != d.OPE_MIDDLE_CHI && e.opCode != d.OPE_PENG && e.opCode != d.OPE_QIANG_PENG && e.opCode != d.OPE_GANG && e.opCode != d.OPE_AN_GANG && e.opCode != d.OPE_BU_GANG && e.opCode != d.OPE_HUA_GANG && e.opCode != d.OPE_QIANG_GANG && e.opCode != d.OPE_LANG_QI && e.opCode != d.OPE_MING_LOU || E.getInstance().removeHandCard(e.opCards), this.isReconnect && e.opCode == d.OPE_ZI_MO && E.getInstance().removeHandCard(e.opCards)), this.turnMe = !1, this.doGameCompFun("checkOpCode", e.opCode, e.seatId, e)
                }, i.onGameStart = function() {
                    S.getInstance().onGameStart(), f.getInstance().reset(), this.setRoomChangeLevelInfo({})
                }, i.onGameReconnect = function() {
                    S.getInstance().onGameReconnect()
                }, i.onResetGameOptionInfo = function() {
                    S.getInstance().onResetGameOptionInfo()
                }, i.gameOverResult = function() {
                    E.getInstance().resetPlayerStatus(), S.getInstance().resetRoomData(), this.doGameCompFun("onGameOver"), this.turnMe = !1
                }, i.checkCodeIsGang = function(e) {
                    var t = [d.OPE_XI_BEI_TONG_GANG, d.OPE_SHUANG_HUA_GANG, d.OPE_DAN_HUA_GANG, d.OPE_CAI_SHEN_GANG, d.OPE_FENG_HUANG_YU_FEI, d.OPE_ZI_QI_DONG_LAI, d.OPE_YUE_SHANG_LIU_SHAO, d.OPE_COL_1_GANG, d.OPE_COL_9_GANG, d.OPE_ROW_3_GANG_4, d.OPE_ROW_4_GANG, d.OPE_GANG, d.OPE_BU_GANG, d.OPE_HUA_GANG, d.OPE_AN_GANG, d.OPE_QIANG_GANG, d.OPE_QIANG_TOU_ZHI_GANG, d.OPE_QIANG_TOU_AN_GANG];
                    if (e && Object.values(t).includes(e)) return !0
                }, i.registerListen = function(e, t) {
                    this._listenList.push({
                        tag: e,
                        call: t
                    })
                }, i.unRegisterListen = function(e) {
                    this._listenList = this._listenList.filter((function(t) {
                        return t.tag != e
                    }))
                }, i.updateListen = function(e, t) {
                    var n = this._listenList.filter((function(t) {
                        return t.tag == e
                    }));
                    (null == n ? void 0 : n.length) > 0 && n.forEach((function(e) {
                        e.call(t)
                    }))
                }, i.hasReady = function() {
                    return !!this.isPlayIng() || !!o.User.LoginRoomState && 1 == E.getInstance().getMyPlayerInfo().isReady
                }, i.getHeadInfoComponentName = function() {
                    return "MjGameHeadInfoPrefabCtr"
                }, n
            }(i)), n._RF.pop()
        }
    }
}))