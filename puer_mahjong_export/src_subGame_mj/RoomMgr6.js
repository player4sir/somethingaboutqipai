System.register("chunks:///_virtual/RoomMgr6.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./BaseCache.ts", "./FXJConfig3.ts", "./GameRuleConfig4.ts", "./CardUtil3.ts", "./PlayerMgr6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createForOfIteratorHelperLoose
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            i = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.BaseCache
        }, function(e) {
            s = e.MahjongMap
        }, function(e) {
            u = e.GameRuleConfig
        }, function(e) {
            l = e.CardUtil
        }, function(e) {
            d = e.PlayerMgr
        }],
        execute: function() {
            var c;
            e("ROOM_DATA_TYPE", void 0), a._RF.push({}, "2039evFx89Oabt1+5RaR5rr", "RoomMgr", void 0),
                function(e) {
                    e.HUAN_SAN_ZHANG_CARD = "huan_san_zhang_cards", e.HUAN_SAN_ZHANG_STATUS = "huan_san_zhang_status", e.RECONNECT_HU_INFO = "reconnect_hu_info", e.RECONNECT_GIVEUP_INFO = "reconnect_giveup_info", e.RECONNECT_WAIT_GIVEUP = "reconnect_wait_giveup", e.MAI_DUAN_MEN_OP_INFO = "mai_duan_men_op_info", e.MAI_DUAN_MEN_STATUS = "mai_duan_men_status", e.SHUAIQIANG_RESULT = "shuai_qiang_result", e.JI_QIANG_RESULT = "ji_qiang_result", e.JI_QIANG_TYPE_RESULT = "ji_qiang_type_result", e.ZHUO_JI_INFO = "zhuo_ji_info", e.ZHUO_JI_SETTLE_TYPE_INFO = "zhuo_ji_settle_type_info"
                }(c || (c = e("ROOM_DATA_TYPE", {}))), e("RoomMgr", function(e) {
                    function a(t) {
                        var n;
                        return void 0 === t && (t = ""), (n = e.call(this, t) || this).roomCfg = null, n.bankSeatId = null, n.dices = null, n.mySeatId = null, n.totalCardCount = null, n.timerInfoList = null, n.laiziInfo = null, n.rollDice = null, n.remainCardsCount = 0, n.fangangCards = null, n.selectFanGangCards = null, n.timePass = 0, n.paoCards = null, n.paoCardsMap = null, n.xiaZhuOptions = null, n.xiaZhuResult = null, n.buHuaZhaPai = null, n.gangOperationResult = null, n._roomData = [], n._roomStateInfo = [], n._gameUserState = [], n.dingQueResult = {}, n.observers = [], n
                    }
                    t(a, e), a.getInstance = function() {
                        return a.instance || (a.instance = new a), a.instance
                    };
                    var r = a.prototype;
                    return r.doGameCompFun = function(e) {
                        var t = this.getComponent("MJGameComponent");
                        if (null == t && (this.addComponent("MJGameComponent"), "function" == typeof(t = this.getComponent("MJGameComponent")).setDelegate && t.setDelegate(this)), "function" == typeof t[e]) {
                            for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                            return (n = t)[e].apply(n, i)
                        }
                    }, r.addObserver = function(e) {
                        this.observers.push(e)
                    }, r.removeObserver = function(e) {
                        var t = this.observers.indexOf(e); - 1 !== t && this.observers.splice(t, 1)
                    }, r.notifyObservers = function() {
                        for (var e, t = n(this.observers); !(e = t()).done;) e.value.updateCardsCount()
                    }, r.getRoomInfoData = function(e) {
                        var t = this,
                            n = o.SelectGame.getServerGameLevelTabListByGameID(e),
                            a = null;
                        return this.roomCfg && n && (null == n || n.forEach((function(e) {
                            var n = e.data;
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var o, r = n[i];
                                    r.level === (null == (o = t.roomCfg) ? void 0 : o.level) && ((a = r).play_mode_name = e.tab_name)
                                }
                        }))), a
                    }, r.getMySeatId = function() {
                        return this.mySeatId
                    }, r.mySelfIsBanker = function() {
                        return this.bankSeatId === this.mySeatId
                    }, r.isMySelfSeat = function(e) {
                        return i.number_valueOf(e) === this.mySeatId
                    }, r.isMySelfByUserId = function(e) {
                        return e === o.User.getUserMid()
                    }, r.getTimeOut = function(e) {
                        var t, n = 0;
                        return null == (t = this.timerInfoList) || t.forEach((function(t) {
                            t.timerId == e && (n = t.timeout)
                        })), n
                    }, r.updateRoomInfo = function(e) {
                        var t, n, a, i, r, s, u, l;
                        this.roomCfg = null == e || null == (t = e.roomInfo) ? void 0 : t.roomCfg, this.bankSeatId = null == e || null == (n = e.roomInfo) ? void 0 : n.gameInfo.bankSeatId, this.dices = null == e || null == (a = e.roomInfo) ? void 0 : a.gameInfo.dices, this.fangangCards = null == e || null == (i = e.roomInfo) ? void 0 : i.gameInfo.fanGangPai, this.mySeatId = null == e || null == (r = e.roomInfo) ? void 0 : r.gameInfo.mySeatId, this.updateRemainCardsCount(null == e || null == (s = e.roomInfo) ? void 0 : s.gameInfo.remainCardCount), this.timerInfoList = (null == e || null == (u = e.roomInfo) ? void 0 : u.gameInfo.timerInfoList) || [], this.totalCardCount = null == e || null == (l = e.roomInfo) ? void 0 : l.gameInfo.totalCardCount, this.roomCfg && this.roomCfg.level && o.SelectGame.updateIntoGameLevel(this.roomCfg.level)
                    }, r.updateRemainCardsCount = function(e) {
                        this.remainCardsCount = e, this.notifyObservers()
                    }, r.getRemainCardsCount = function() {
                        return this.doGameCompFun("getRemainCardsCount", this.remainCardsCount) || i.number_valueOf(this.remainCardsCount, 0)
                    }, r.updatePaoCards = function(e) {
                        var t = this;
                        this.paoCards = e, this.paoCardsMap = {}, i.table_isEmpty(e) || e.forEach((function(e, n, a) {
                            t.paoCardsMap[e] = !0
                        }))
                    }, r.resetPaoCards = function() {
                        this.paoCards = null, this.paoCardsMap = null
                    }, r.reconnectionRoomUpdate = function(e) {
                        this.resetXiaZhu(), this.resetPaoCards(), this.updateRoomInfo(e), this.timePass = null == e ? void 0 : e.timePass
                    }, r.onResetGameOptionInfo = function() {
                        this.resetGameInfoByTag(), this.resetPaoCards(), this.resetDingQue(), this.resetXiaZhu()
                    }, r.onGameStart = function() {
                        this.onResetGameOptionInfo(), this.resetGameStateInfo()
                    }, r.onGameReconnect = function() {
                        this.onResetGameOptionInfo(), this.resetGameStateInfo()
                    }, r.resetRoomData = function() {
                        this.onResetGameOptionInfo(), this._roomData = [], this.resetXiaZhu(), this.buHuaZhaPai = null, this.gangOperationResult = null
                    }, r.updateXiaZhuOptions = function(e) {
                        this.xiaZhuOptions = e
                    }, r.getXiaZhuOptions = function() {
                        return this.xiaZhuOptions
                    }, r.hasXiaZhu = function() {
                        return i.isNotNull(this.xiaZhuOptions)
                    }, r.resetXiaZhu = function() {
                        this.xiaZhuOptions = null, this.xiaZhuResult = null
                    }, r.updateXiaZhuResult = function(e) {
                        e.xiaZhuType = i.number_valueOf(e.xiaZhuType), i.isNotNull(this.xiaZhuResult) ? (i.isNull(this.xiaZhuResult[e.seatId]) && (this.xiaZhuResult[e.seatId] = []), 0 == e.xiaZhuType ? this.xiaZhuResult[e.seatId].unshift(e) : this.xiaZhuResult[e.seatId].push(e)) : this._checkAddXiaZhu(e)
                    }, r._checkAddXiaZhu = function(e) {
                        this.xiaZhuResult = {}, i.isNull(this.xiaZhuResult[e.seatId]) && (this.xiaZhuResult[e.seatId] = []);
                        for (var t = i.number_valueOf(e.xiaZhuType), n = !1, a = 0; a < this.xiaZhuResult[e.seatId].length; a++)
                            if (this.xiaZhuResult[e.seatId][a].xiaZhuType == t) {
                                n = !0, this.xiaZhuResult[e.seatId][a] = e;
                                break
                            } 0 == n && (0 == e.xiaZhuType ? this.xiaZhuResult[e.seatId].unshift(e) : this.xiaZhuResult[e.seatId].push(e))
                    }, r.getXiaZhuOpInfo = function(e, t) {
                        var n = [];
                        if (t = i.number_valueOf(t), i.isNotNull(this.xiaZhuResult)) {
                            var a = this.xiaZhuResult[e];
                            if (-1 == t && (null == a ? void 0 : a.length) > 0) return a;
                            (null == a ? void 0 : a.length) > 0 && a.forEach((function(e) {
                                e.xiaZhuType == t && n.push(e)
                            }))
                        }
                        return n
                    }, r.getXiaZhuResult = function(e, t) {
                        var n = [];
                        if (t = i.number_valueOf(t), i.isNotNull(this.xiaZhuResult)) {
                            var a = this.xiaZhuResult[e];
                            if (-1 == t && (null == a ? void 0 : a.length) > 0) {
                                var o = [];
                                return null == a || a.forEach((function(e) {
                                    null != (null == e ? void 0 : e.option) && (null == e ? void 0 : e.option) > -1 && o.push(e)
                                })), o
                            }(null == a ? void 0 : a.length) > 0 && a.forEach((function(e) {
                                e.xiaZhuType == t && null != (null == e ? void 0 : e.option) && (null == e ? void 0 : e.option) > -1 && n.push(e)
                            }))
                        }
                        return n
                    }, r.hasAllXiaZhuFinish = function(e) {
                        var t = this,
                            n = !0;
                        return d.getInstance().playerList.forEach((function(a) {
                            var i;
                            0 == (null == (i = t.getXiaZhuResult(a.seatId, e)) ? void 0 : i.length) && (n = !1)
                        })), n
                    }, r.updateBuHuaZhaPai = function(e) {
                        var t;
                        i.isNotNull(this.buHuaZhaPai) ? this.buHuaZhaPai[e.seatId] = e : this.buHuaZhaPai = ((t = {})[e.seatId] = e, t)
                    }, r.getBuHuaZhaPai = function(e) {
                        if (i.isNotNull(this.buHuaZhaPai)) return this.buHuaZhaPai[e]
                    }, r.updateGangOperationResult = function(e) {
                        var t;
                        i.isNotNull(this.gangOperationResult) ? this.gangOperationResult[e.seatId] = e : this.gangOperationResult = ((t = {})[e.seatId] = e, t)
                    }, r.getGangOperationResult = function(e) {
                        if (i.isNotNull(this.gangOperationResult)) return this.gangOperationResult[e]
                    }, r.clear = function() {
                        this.resetRoomData()
                    }, r.updateDingQue = function(e, t) {
                        this.dingQueResult[e] = t, this.orderCardsBySeatId(e)
                    }, r.resetDingQue = function() {
                        this.dingQueResult = {}
                    }, r.isDingQueFinish = function() {
                        var e = this,
                            t = !0;
                        if (i.table_isEmpty(this.dingQueResult)) t = !1;
                        else {
                            var n = u.playerNum;
                            o.PrivateData.isTwoPlayerModule() && (n = 2), i.table_length(this.dingQueResult) == n ? Object.keys(this.dingQueResult).forEach((function(n) {
                                var a; - 1 == i.number_valueOf(null == (a = e.dingQueResult[n]) ? void 0 : a.option, -1) && (t = !1)
                            })) : t = !1
                        }
                        return t
                    }, r.getMyQueType = function() {
                        var e, t = this;
                        return i.table_isEmpty(this.dingQueResult) || Object.keys(this.dingQueResult).forEach((function(n) {
                            var a;
                            (null == (a = t.dingQueResult[n]) ? void 0 : a.seatId) == t.mySeatId && (e = t.dingQueResult[n].option)
                        })), e
                    }, r.setGameInfoByTag = function(e, t) {
                        this._roomData.length > 0 && (this._roomData = this._roomData.filter((function(t) {
                            return (null == t ? void 0 : t.tag) != e
                        }))), null != t && this._roomData.push({
                            tag: e,
                            data: t
                        })
                    }, r.setGameStateInfoByTag = function(e, t) {
                        this._roomStateInfo.length > 0 && (this._roomStateInfo = this._roomStateInfo.filter((function(t) {
                            return (null == t ? void 0 : t.tag) != e
                        }))), null != t && this._roomStateInfo.push({
                            tag: e,
                            data: t
                        })
                    }, r.getGameInfoByTag = function(e) {
                        if (this._roomData.length > 0) {
                            var t = i.clone(this._roomData).filter((function(t) {
                                return (null == t ? void 0 : t.tag) == e
                            }));
                            if ((null == t ? void 0 : t.length) > 0) return t[0].data
                        }
                    }, r.getGameStateInfoByTag = function(e) {
                        if (this._roomStateInfo.length > 0) {
                            var t = i.clone(this._roomStateInfo).filter((function(t) {
                                return (null == t ? void 0 : t.tag) == e
                            }));
                            if ((null == t ? void 0 : t.length) > 0) return t[0].data
                        }
                    }, r.resetGameInfoByTag = function() {
                        this._roomData = []
                    }, r.resetGameStateInfo = function() {
                        this._roomStateInfo = [], this.bankSeatId = null
                    }, r.orderCardsBySeatId = function(e) {
                        this.isMySelfSeat(e) && d.getInstance().orderMyhands()
                    }, r.orderCards = function(e) {
                        if (u.HasDingQue) {
                            var t = this.getMyQueType();
                            if (null != t) return l.sortCards(e, t)
                        }
                        return l.sortFeiXiaoJiCards(e)
                    }, r.setLaiziInfo = function(e) {
                        var t, n = this;
                        if (this.laiziInfo = e, null == e || 0 == i.number_valueOf(null == e || null == (t = e.laizi) ? void 0 : t.length)) l.resetLiziCard();
                        else {
                            if (this.doGameCompFun("checkLaiziCard", e, (function(e) {
                                    n.laiziInfo.laizi = e, l.updateLiziCard(e), d.getInstance().orderMyhands()
                                }))) return;
                            var a = [];
                            e.laizi.forEach((function(e) {
                                var t = l.getCardValue(e);
                                a.push(s.get(t))
                            })), l.updateLiziCard(e.laizi), d.getInstance().orderMyhands()
                        }
                    }, r.getLaiziInfo = function() {
                        return this.laiziInfo
                    }, r.setGameUserState = function(e, t) {
                        this._gameUserState[e] = t
                    }, r.getGameUserState = function(e) {
                        return this._gameUserState[e]
                    }, a
                }(r)).instance = null, a._RF.pop()
        }
    }
}))