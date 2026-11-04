System.register("chunks:///_virtual/Room.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Desk.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./Encrypto.ts", "./EventManager.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./CardUtil.ts", "./BankerMgr.ts", "./OperationMgr.ts", "./OperationResultMgr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./SettleMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.Utils
        }, function(e) {
            a = e.Desk
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.OPCode, c = e.UserStatus
        }, function(e) {
            h = e.FXJEvent
        }, function(e) {
            p = e.GameEvent
        }, function(e) {
            f = e.GameRuleConfig
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.BankerMgr
        }, function(e) {
            m = e.OperationMgr
        }, function(e) {
            C = e.OperationResultMgr
        }, function(e) {
            I = e.PlayerMgr
        }, function(e) {
            A = e.RoomMgr, E = e.ROOM_DATA_TYPE
        }, function(e) {
            v = e.SettleMgr
        }],
        execute: function() {
            n._RF.push({}, "6e6f67ndmJMNroVdVEpJ406", "Room", void 0), e("Room", function(e) {
                function n() {
                    var t;
                    return (t = e.call(this, "Room") || this).turnMe = !1, t.isReconnect = !1, t._listenList = [], t.bankerMgr = g.getInstance(), t.addGameComp(), t
                }
                t(n, e);
                var a = n.prototype;
                return a.addGameComp = function() {
                    this.addComponent("GameComponent");
                    var e = this.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, a.doGameCompFun = function(e) {
                    var t = this.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, a.enterRoomUpdate = function(e) {
                    var t, n, i, a, o;
                    null != e && null != (t = e.roomInfo) && null != (n = t.roomCfg) && n.level && this._updateLevel(null == e || null == (a = e.roomInfo) || null == (o = a.roomCfg) ? void 0 : o.level), A.getInstance().updateRoomInfo(e), A.getInstance().resetDingQue(), v.getInstance().onLoginRoom(), null != e && null != (i = e.playerList) && i.length && I.getInstance().resertPlayer(), I.getInstance().setPlayerList(null == e ? void 0 : e.playerList), I.getInstance().getMyPlayerInfo(), I.getInstance().synGameRecord()
                }, a.reconnectionRoomUpdate = function(e) {
                    var t = this;
                    A.getInstance().reconnectionRoomUpdate(e), this.doGameCompFun("onAnalysisReconnect", e), I.getInstance().setPlayerList(null == e ? void 0 : e.players), I.getInstance().playerList.forEach((function(e, t, n) {
                        if (e && e.opGroups && e.tingOpcode && e.tingOpcode == d.OPE_MING_LOU) {
                            var i = {
                                opCode: e.tingOpcode,
                                opCards: e.handCards
                            };
                            e.opGroups.push(i), e.handCards = []
                        }
                    })), f.HasHuagang && I.getInstance().playerList.forEach((function(e, n, i) {
                        var a;
                        if (e && e.opGroups && (null == (a = e.opGroups) ? void 0 : a.length) > 0) {
                            var o = 0;
                            e.opGroups.forEach((function(e, t, n) {
                                var i = e.opCards[0];
                                if (i) {
                                    var a = _.getCardValueLocalTypeValue(i),
                                        r = a[0];
                                    a[1], e.opCode == d.OPE_HUA_GANG ? o += e.opCards.length : e.opCode == d.OPE_AN_GANG && 3 == r ? o += 4 : e.opCode == d.OPE_AN_GANG && r < 3 || e.opCode == d.OPE_GANG && 3 == r ? o += 2 : e.opCode == d.OPE_GANG && r < 3 && (o += 1)
                                }
                            }));
                            var r = {
                                seatId: e.seatId,
                                gangNum: o
                            };
                            t.updateGangOperationResult(r), u.dispatch(p.VIEW_UPDATE_GANG_OPERATION_RESULT)
                        }
                    }));
                    var n = I.getInstance().getMyPlayerInfo();
                    if (i.isNotNull(n)) {
                        var a = l.JsonDecode(n.opExtend);
                        i.isNotNull(a) && (i.table_isEmpty(a.paoCardTBytes) || A.getInstance().updatePaoCards(a.paoCardTBytes))
                    }
                    var o = l.JsonDecode(e.customJson);
                    console.log("重连-------customInfo", o);
                    var r, s, c = null == o ? void 0 : o.curInfo;
                    if (i.isNotNull(c))
                        if (i.table_isEmpty(c.baoPaiData))
                            if (null != c.dingQueData) this._checkDingQueData(c, e);
                            else if (null != (null == c ? void 0 : c.hszData)) this._checkHuanSanZhangData(c);
                    else if ((null == c || null == (r = c.WaitUserGiveUp) || null == (s = r.seatIdList) ? void 0 : s.length) > 0) A.getInstance().setGameInfoByTag(E.RECONNECT_WAIT_GIVEUP, {
                        seatIdList: null == c ? void 0 : c.WaitUserGiveUp.seatIdList,
                        timePass: e.timePass,
                        curTime: i.time()
                    }), this.getComponent("GameComponent").scheduleOnce((function() {
                        u.dispatch(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, null == c ? void 0 : c.WaitUserGiveUp, e.timePass)
                    }));
                    else if ("FanGangPai" == (null == c ? void 0 : c.status)) {
                        if (c.seatId && c.seatId == A.getInstance().mySeatId) {
                            var g = {
                                cards: A.getInstance().fangangCards
                            };
                            this.getComponent("GameComponent").scheduleOnce((function() {
                                u.dispatch(p.VIEW_UPDATE_BU_GANG_PAI, g)
                            }))
                        }
                    } else "DiTing" == (null == c ? void 0 : c.name) && (e.operation || (e.operation = null == c ? void 0 : c.operation));
                    else this.getComponent("GameComponent").scheduleOnce((function() {
                        u.dispatch(h.BROADCAST_HUAN_BAO, c.baoPaiData)
                    }));
                    this._checkPlayerStatus(e, o), i.isNotNull(o) && (i.table_isEmpty(o.historyInfo) || this.doGameCompFun("checkReconnectInfo", o, e) || o.historyInfo.forEach((function(e, n, a) {
                        if (e && e.name && "XiaZhu" == e.name) {
                            var o = e.options;
                            if (i.isNotNull(o)) {
                                var r = {
                                    options: e.options
                                };
                                t.updateXiaZhuOptions(r)
                            }
                            var s = e.data;
                            if (i.isNotNull(s))
                                for (var l in s) {
                                    var d = {
                                        seatId: i.number_valueOf(l),
                                        option: i.number_valueOf(s[l])
                                    };
                                    t.updateXiaZhuResult(d), u.dispatch(p.VIEW_UPDATE_XIA_ZHU_RESULT, d)
                                }
                        }
                    }))), this.isReconnect = !0, e.operation ? (this.userOperation(e.operation), setTimeout((function() {
                        u.dispatch(p.VIEW_USER_OPERATION, e.operation)
                    }), 0)) : (m.getInstance().reset(), this.turnMe = !1), this.doGameCompFun("checkRecoinnectOperationSeatId", e), e.settleItems && (v.getInstance().onLoginRoom(), e.settleItems.forEach((function(e) {
                        v.getInstance().onReceiveSettleInfo(e, !0)
                    }))), I.getInstance().synGameRecord()
                }, a._checkPlayerStatus = function(e, t) {
                    var n;
                    if ((null == e || null == (n = e.players) ? void 0 : n.length) > 0) {
                        var i, a, d = (null == t || null == (i = t.curInfo) ? void 0 : i.userStatusBeforeOFFList) || [],
                            h = [],
                            p = [];
                        null == e || null == (a = e.players) || a.forEach((function(e) {
                            if (e.opExtend) {
                                var t, n = l.JsonDecode(e.opExtend),
                                    i = null == (t = I.getInstance().findPlayerWithSeatId(e.seatId)) ? void 0 : t.seatId;
                                if (null != (null == n ? void 0 : n.queSuit) && n.queSuit >= 0 && null != i && (A.getInstance().updateDingQue(i, {
                                        option: n.queSuit,
                                        seatId: i,
                                        userId: e.userId,
                                        isReconnect: !0
                                    }), e.userId == o.User.getUserMid())) {
                                    var a = A.getInstance().orderCards(I.getInstance().getMyhands());
                                    I.getInstance().updateMyhands(a)
                                }
                            }
                            e.status == c.HUED || e.status == c.LEAVE && d[e.seatId - 1] == c.HUED && 0 != (null == e ? void 0 : e.cardCount) ? (h.push({
                                seatId: e.seatId,
                                totalFan: 0
                            }), A.getInstance().isMySelfSeat(e.seatId) && u.dispatch(r.GAME_ROOM_STATE_CHANGE, s.GameRoomState.STATUS_GAMEOVER)) : e.status != c.GIVE_UP && d[e.seatId - 1] != c.GIVE_UP || p.push(e.seatId)
                        })), this.doGameCompFun("checkPlayerStatus", null == e ? void 0 : e.players, d), h.length > 0 && A.getInstance().setGameInfoByTag(E.RECONNECT_HU_INFO, h), p.length > 0 && A.getInstance().setGameInfoByTag(E.RECONNECT_GIVEUP_INFO, p)
                    }
                }, a._checkHuanSanZhangData = function(e) {
                    var t, n;
                    if (A.getInstance().setGameInfoByTag(E.HUAN_SAN_ZHANG_STATUS, null), (null == e || null == (t = e.hszData) || null == (n = t.status) ? void 0 : n.length) > 0) {
                        var i = e.hszData,
                            a = i.status;
                        A.getInstance().setGameInfoByTag(E.HUAN_SAN_ZHANG_STATUS, {
                            cards: i.cards,
                            status: a
                        });
                        for (var o = 0; o < a.length; o++) {
                            var r = {
                                seatId: o + 1,
                                cards: i.cards
                            };
                            if (o + 1 == A.getInstance().mySeatId) {
                                A.getInstance().setGameInfoByTag(E.HUAN_SAN_ZHANG_CARD, r), 1 == a[o] && I.getInstance().onOneHuanSanZhang({
                                    seatId: r.seatId,
                                    cards: r.cards
                                });
                                break
                            }
                        }
                    }
                }, a._checkDingQueData = function(e, t) {
                    i.table_isEmpty(e.dingQueData) ? setTimeout((function() {
                        u.dispatch(p.VIEW_BROADCAST_DINGQUE_OPTIONS, {
                            options: e.options,
                            suggestion: e.suggestion
                        })
                    }), 0) : 1 == e.status ? e.dingQueData.forEach((function(e) {
                        A.getInstance().updateDingQue(e.seatId, e), setTimeout((function() {
                            u.dispatch(p.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, e)
                        }), 0)
                    })) : (A.getInstance().updateDingQue(A.getInstance().mySeatId, {
                        option: -1,
                        seatId: A.getInstance().mySeatId
                    }), setTimeout((function() {
                        u.dispatch(p.VIEW_BROADCAST_DINGQUE_OPTIONS, {
                            options: e.options,
                            suggestion: e.suggestion
                        })
                    }), 0))
                }, a.dealCardUpdate = function(e) {
                    I.getInstance().updatePlayerCardsNum(e.cardsCount), I.getInstance().updateMyhands(e.cards), A.getInstance().updateRemainCardsCount(e.remainCardsCount)
                }, a.gameGrabCard = function(e) {
                    A.getInstance().updateRemainCardsCount(e.remainCardNum), I.getInstance().onGameGrabCard(e)
                }, a.updateHuaCards = function(e) {
                    if (A.getInstance().updateRemainCardsCount(e.remainCardNum), A.getInstance().updateBuHuaZhaPai(e), e.seatId == A.getInstance().mySeatId) {
                        var t = C.getInstance().opCode,
                            n = C.getInstance().opCards;
                        t == d.OPE_HUA_GANG && I.getInstance().changeHandCard(n, e.cards)
                    }
                }, a.updateFanGangCards = function(e) {
                    A.getInstance().updateRemainCardsCount(e.remainCardCount), A.getInstance().fangangCards = e.cards, I.getInstance().gangCount = e.gangCount
                }, a.updateSelectFanGangCards = function(e) {
                    A.getInstance().selectFanGangCards = e.card
                }, a.updatePaoCards = function(e) {
                    A.getInstance().updatePaoCards(e.paoCardTBytes)
                }, a.updateXiaZhuOptions = function(e) {
                    A.getInstance().updateXiaZhuOptions(e)
                }, a.hasXiaZhu = function() {
                    return A.getInstance().hasXiaZhu()
                }, a.updateXiaZhuResult = function(e) {
                    A.getInstance().updateXiaZhuResult(e)
                }, a.getXiaZhuResult = function(e, t) {
                    return A.getInstance().getXiaZhuResult(e, t)
                }, a.updateGangOperationResult = function(e) {
                    A.getInstance().updateGangOperationResult(e)
                }, a.getGangOperationResult = function(e) {
                    return A.getInstance().getGangOperationResult(e)
                }, a.bankerFirstOperation = function(e) {
                    A.getInstance().updateRemainCardsCount(e.remainCardNum), A.getInstance().bankSeatId = e.bankSeatId
                }, a.getUserOperation = function() {
                    return m.getInstance().operation
                }, a.userOperation = function(e) {
                    m.getInstance().updateMyselfOpration(e), this.turnMe = !0
                }, a.userOperationResult = function(e) {
                    var t = {
                        opCode: e.opCode,
                        opCards: e.opCards
                    };
                    I.getInstance().updateOpCards(e.seatId, t), C.getInstance().userOperationResult(e), e.seatId == A.getInstance().mySeatId && (e.opCode != d.OPE_OUT_CARD && e.opCode != d.OPE_RIGHT_CHI && e.opCode != d.OPE_LEFT_CHI && e.opCode != d.OPE_MIDDLE_CHI && e.opCode != d.OPE_PENG && e.opCode != d.OPE_QIANG_PENG && e.opCode != d.OPE_GANG && e.opCode != d.OPE_AN_GANG && e.opCode != d.OPE_BU_GANG && e.opCode != d.OPE_HUA_GANG && e.opCode != d.OPE_QIANG_GANG && e.opCode != d.OPE_LANG_QI && e.opCode != d.OPE_MING_LOU || I.getInstance().removeHandCard(e.opCards), this.isReconnect && e.opCode == d.OPE_ZI_MO && I.getInstance().removeHandCard(e.opCards)), this.turnMe = !1, this.doGameCompFun("checkOpCode", e.opCode, e.seatId, e)
                }, a.onGameStart = function() {
                    A.getInstance().onGameStart(), this.setRoomChangeLevelInfo({})
                }, a.onGameReconnect = function() {
                    A.getInstance().onGameReconnect()
                }, a.onResetGameOptionInfo = function() {
                    A.getInstance().onResetGameOptionInfo()
                }, a.gameOverResult = function() {
                    I.getInstance().resetPlayerStatus(), A.getInstance().resetRoomData(), this.doGameCompFun("onGameOver"), this.turnMe = !1
                }, a.checkCodeIsGang = function(e) {
                    var t = [d.OPE_XI_BEI_TONG_GANG, d.OPE_SHUANG_HUA_GANG, d.OPE_DAN_HUA_GANG, d.OPE_CAI_SHEN_GANG, d.OPE_FENG_HUANG_YU_FEI, d.OPE_ZI_QI_DONG_LAI, d.OPE_YUE_SHANG_LIU_SHAO, d.OPE_COL_1_GANG, d.OPE_COL_9_GANG, d.OPE_ROW_3_GANG_4, d.OPE_ROW_4_GANG, d.OPE_GANG, d.OPE_BU_GANG, d.OPE_HUA_GANG, d.OPE_AN_GANG, d.OPE_QIANG_GANG, d.OPE_QIANG_TOU_ZHI_GANG, d.OPE_QIANG_TOU_AN_GANG];
                    if (e && Object.values(t).includes(e)) return !0
                }, a.registerListen = function(e, t) {
                    this._listenList.push({
                        tag: e,
                        call: t
                    })
                }, a.unRegisterListen = function(e) {
                    this._listenList = this._listenList.filter((function(t) {
                        return t.tag != e
                    }))
                }, a.updateListen = function(e, t) {
                    var n = this._listenList.filter((function(t) {
                        return t.tag == e
                    }));
                    (null == n ? void 0 : n.length) > 0 && n.forEach((function(e) {
                        e.call(t)
                    }))
                }, n
            }(a)), n._RF.pop()
        }
    }
}))