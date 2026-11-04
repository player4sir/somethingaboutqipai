System.register("chunks:///_virtual/RoomMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./BaseCache.ts", "./FXJConfig.ts", "./GameRuleConfig.ts", "./CardUtil.ts", "./PlayerMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createForOfIteratorHelperLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.BaseCache
        }, function(e) {
            l = e.MahjongMap
        }, function(e) {
            u = e.GameRuleConfig
        }, function(e) {
            d = e.CardUtil
        }, function(e) {
            c = e.PlayerMgr
        }],
        execute: function() {
            var h;
            e("ROOM_DATA_TYPE", void 0), i._RF.push({}, "ea7f0VBNGJIKowo0diJ1tNw", "RoomMgr", void 0),
                function(e) {
                    e.HUAN_SAN_ZHANG_CARD = "huan_san_zhang_cards", e.HUAN_SAN_ZHANG_STATUS = "huan_san_zhang_status", e.RECONNECT_HU_INFO = "reconnect_hu_info", e.RECONNECT_GIVEUP_INFO = "reconnect_giveup_info", e.RECONNECT_WAIT_GIVEUP = "reconnect_wait_giveup", e.MAI_DUAN_MEN_OP_INFO = "mai_duan_men_op_info", e.MAI_DUAN_MEN_STATUS = "mai_duan_men_status", e.SHUAIQIANG_RESULT = "shuai_qiang_result", e.JI_QIANG_RESULT = "ji_qiang_result", e.JI_QIANG_TYPE_RESULT = "ji_qiang_type_result", e.ZHUO_JI_INFO = "zhuo_ji_info", e.ZHUO_JI_SETTLE_TYPE_INFO = "zhuo_ji_settle_type_info", e.QIANG_PAI_INFO = "qiang_pai_info", e.JIAN_PAI_INFO = "jian_pai_info"
                }(h || (h = e("ROOM_DATA_TYPE", {}))), e("RoomMgr", function(e) {
                    function i(t) {
                        var n;
                        return void 0 === t && (t = ""), (n = e.call(this, t) || this).roomCfg = null, n.bankSeatId = null, n.dices = null, n.mySeatId = null, n.totalCardCount = null, n.timerInfoList = null, n.laiziInfo = null, n.rollDice = null, n.remainCardsCount = 0, n.fangangCards = null, n.selectFanGangCards = null, n.timePass = 0, n.paoCards = null, n.paoCardsMap = null, n.xiaZhuOptions = null, n.xiaZhuResult = null, n.buHuaZhaPai = null, n.gangOperationResult = null, n._roomData = [], n._roomStateInfo = [], n._gameUserState = [], n._gameUserInfo = new Map, n.dingQueResult = {}, n.observers = [], n
                    }
                    t(i, e), i.getInstance = function() {
                        return i.instance || (i.instance = new i), i.instance
                    };
                    var s = i.prototype;
                    return s.doGameCompFun = function(e) {
                        var t = this.getComponent("GameComponent");
                        if (null == t && (this.addComponent("GameComponent"), t = this.getComponent("GameComponent")), "function" == typeof t[e]) {
                            for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                            return (n = t)[e].apply(n, a)
                        }
                    }, s.addObserver = function(e) {
                        this.observers.push(e)
                    }, s.removeObserver = function(e) {
                        var t = this.observers.indexOf(e); - 1 !== t && this.observers.splice(t, 1)
                    }, s.notifyObservers = function() {
                        for (var e, t = n(this.observers); !(e = t()).done;) e.value.updateCardsCount()
                    }, s.getRoomInfoData = function(e) {
                        var t = this,
                            n = r.SelectGame.getServerGameLevelTabListByGameID(e),
                            i = null;
                        return this.roomCfg && n && (null == n || n.forEach((function(e) {
                            var n = e.data;
                            for (var a in n)
                                if (n.hasOwnProperty(a)) {
                                    var o, r = n[a];
                                    r.level === (null == (o = t.roomCfg) ? void 0 : o.level) && ((i = r).play_mode_name = e.tab_name)
                                }
                        }))), i
                    }, s.getMySeatId = function() {
                        return this.mySeatId
                    }, s.mySelfIsBanker = function() {
                        return this.bankSeatId === this.mySeatId
                    }, s.isMySelfSeat = function(e) {
                        return o.number_valueOf(e) === this.mySeatId
                    }, s.isMySelfByUserId = function(e) {
                        return e === r.User.getUserMid()
                    }, s.getTimeOut = function(e) {
                        var t, n = 0;
                        return null == (t = this.timerInfoList) || t.forEach((function(t) {
                            t.timerId == e && (n = t.timeout)
                        })), n
                    }, s.updateRoomInfo = function(e) {
                        var t, n, i, a, o, s, l, u;
                        this.roomCfg = null == e || null == (t = e.roomInfo) ? void 0 : t.roomCfg, this.bankSeatId = null == e || null == (n = e.roomInfo) ? void 0 : n.gameInfo.bankSeatId, this.dices = null == e || null == (i = e.roomInfo) ? void 0 : i.gameInfo.dices, this.fangangCards = null == e || null == (a = e.roomInfo) ? void 0 : a.gameInfo.fanGangPai, this.mySeatId = null == e || null == (o = e.roomInfo) ? void 0 : o.gameInfo.mySeatId, this.updateRemainCardsCount(null == e || null == (s = e.roomInfo) ? void 0 : s.gameInfo.remainCardCount), this.timerInfoList = (null == e || null == (l = e.roomInfo) ? void 0 : l.gameInfo.timerInfoList) || [], this.totalCardCount = null == e || null == (u = e.roomInfo) ? void 0 : u.gameInfo.totalCardCount, this.roomCfg && this.roomCfg.level && r.SelectGame.updateIntoGameLevel(this.roomCfg.level)
                    }, s.updateRemainCardsCount = function(e) {
                        this.remainCardsCount = e, this.notifyObservers()
                    }, s.getRemainCardsCount = function() {
                        return this.doGameCompFun("getRemainCardsCount", this.remainCardsCount) || o.number_valueOf(this.remainCardsCount, 0)
                    }, s.updatePaoCards = function(e) {
                        var t = this;
                        this.paoCards = e, this.paoCardsMap = {}, o.table_isEmpty(e) || e.forEach((function(e, n, i) {
                            t.paoCardsMap[e] = !0
                        }))
                    }, s.resetPaoCards = function() {
                        this.paoCards = null, this.paoCardsMap = null
                    }, s.reconnectionRoomUpdate = function(e) {
                        this.resetXiaZhu(), this.resetPaoCards(), this.updateRoomInfo(e), this.timePass = null == e ? void 0 : e.timePass
                    }, s.onResetGameOptionInfo = function() {
                        this.resetGameInfoByTag(), this.resetPaoCards(), this.resetDingQue(), this.resetXiaZhu()
                    }, s.onGameStart = function() {
                        this.onResetGameOptionInfo(), this.resetGameStateInfo()
                    }, s.onGameReconnect = function() {
                        this.onResetGameOptionInfo(), this.resetGameStateInfo()
                    }, s.resetRoomData = function() {
                        this.onResetGameOptionInfo(), this._roomData = [], this.resetXiaZhu(), this.buHuaZhaPai = null, this.gangOperationResult = null
                    }, s.updateXiaZhuOptions = function(e) {
                        this.xiaZhuOptions = e
                    }, s.getXiaZhuOptions = function() {
                        return this.xiaZhuOptions
                    }, s.hasXiaZhu = function() {
                        return o.isNotNull(this.xiaZhuOptions)
                    }, s.resetXiaZhu = function() {
                        this.xiaZhuOptions = null, this.xiaZhuResult = null
                    }, s.updateXiaZhuResult = function(e) {
                        e.xiaZhuType = o.number_valueOf(e.xiaZhuType), o.isNotNull(this.xiaZhuResult) ? (o.isNull(this.xiaZhuResult[e.seatId]) && (this.xiaZhuResult[e.seatId] = []), 0 == e.xiaZhuType ? this.xiaZhuResult[e.seatId].unshift(e) : this.xiaZhuResult[e.seatId].push(e)) : this._checkAddXiaZhu(e)
                    }, s._checkAddXiaZhu = function(e) {
                        this.xiaZhuResult = {}, o.isNull(this.xiaZhuResult[e.seatId]) && (this.xiaZhuResult[e.seatId] = []);
                        for (var t = o.number_valueOf(e.xiaZhuType), n = !1, i = 0; i < this.xiaZhuResult[e.seatId].length; i++)
                            if (this.xiaZhuResult[e.seatId][i].xiaZhuType == t) {
                                n = !0, this.xiaZhuResult[e.seatId][i] = e;
                                break
                            } 0 == n && (0 == e.xiaZhuType ? this.xiaZhuResult[e.seatId].unshift(e) : this.xiaZhuResult[e.seatId].push(e))
                    }, s.getXiaZhuOpInfo = function(e, t) {
                        var n = [];
                        if (t = o.number_valueOf(t), o.isNotNull(this.xiaZhuResult)) {
                            var i = this.xiaZhuResult[e];
                            if (-1 == t && (null == i ? void 0 : i.length) > 0) return i;
                            (null == i ? void 0 : i.length) > 0 && i.forEach((function(e) {
                                e.xiaZhuType == t && n.push(e)
                            }))
                        }
                        return n
                    }, s.getXiaZhuResult = function(e, t) {
                        var n = [];
                        if (t = o.number_valueOf(t), o.isNotNull(this.xiaZhuResult)) {
                            var i = this.xiaZhuResult[e];
                            if (-1 == t && (null == i ? void 0 : i.length) > 0) {
                                var a = [];
                                return null == i || i.forEach((function(e) {
                                    null != (null == e ? void 0 : e.option) && (null == e ? void 0 : e.option) > -1 && a.push(e)
                                })), a
                            }(null == i ? void 0 : i.length) > 0 && i.forEach((function(e) {
                                e.xiaZhuType == t && null != (null == e ? void 0 : e.option) && (null == e ? void 0 : e.option) > -1 && n.push(e)
                            }))
                        }
                        return n
                    }, s.hasAllXiaZhuFinish = function(e) {
                        var t = this,
                            n = !0;
                        return c.getInstance().playerList.forEach((function(i) {
                            var a;
                            0 == (null == (a = t.getXiaZhuResult(i.seatId, e)) ? void 0 : a.length) && (n = !1)
                        })), n
                    }, s.updateBuHuaZhaPai = function(e) {
                        var t;
                        o.isNotNull(this.buHuaZhaPai) ? this.buHuaZhaPai[e.seatId] = e : this.buHuaZhaPai = ((t = {})[e.seatId] = e, t)
                    }, s.getBuHuaZhaPai = function(e) {
                        if (o.isNotNull(this.buHuaZhaPai)) return this.buHuaZhaPai[e]
                    }, s.updateGangOperationResult = function(e) {
                        var t;
                        o.isNotNull(this.gangOperationResult) ? this.gangOperationResult[e.seatId] = e : this.gangOperationResult = ((t = {})[e.seatId] = e, t)
                    }, s.getGangOperationResult = function(e) {
                        if (o.isNotNull(this.gangOperationResult)) return this.gangOperationResult[e]
                    }, s.clear = function() {
                        this.resetRoomData()
                    }, s.updateDingQue = function(e, t) {
                        this.dingQueResult[e] = t, this.orderCardsBySeatId(e)
                    }, s.resetDingQue = function() {
                        this.dingQueResult = {}
                    }, s.isDingQueFinish = function() {
                        var e = this,
                            t = !0;
                        return o.table_isEmpty(this.dingQueResult) ? t = !1 : o.table_length(this.dingQueResult) == a.deviceInfo.playerNum ? Object.keys(this.dingQueResult).forEach((function(n) {
                            var i; - 1 == o.number_valueOf(null == (i = e.dingQueResult[n]) ? void 0 : i.option, -1) && (t = !1)
                        })) : t = !1, t
                    }, s.getMyQueType = function() {
                        var e, t = this;
                        return o.table_isEmpty(this.dingQueResult) || Object.keys(this.dingQueResult).forEach((function(n) {
                            var i;
                            (null == (i = t.dingQueResult[n]) ? void 0 : i.seatId) == t.mySeatId && (e = t.dingQueResult[n].option)
                        })), e
                    }, s.setGameInfoByTag = function(e, t) {
                        this._roomData.length > 0 && (this._roomData = this._roomData.filter((function(t) {
                            return (null == t ? void 0 : t.tag) != e
                        }))), null != t && this._roomData.push({
                            tag: e,
                            data: t
                        })
                    }, s.setUserInfoByUserId = function(e, t) {
                        this._gameUserInfo.set(e, t)
                    }, s.getUserInfoByUserId = function(e) {
                        return this._gameUserInfo.get(e)
                    }, s.setGameStateInfoByTag = function(e, t) {
                        this._roomStateInfo.length > 0 && (this._roomStateInfo = this._roomStateInfo.filter((function(t) {
                            return (null == t ? void 0 : t.tag) != e
                        }))), null != t && this._roomStateInfo.push({
                            tag: e,
                            data: t
                        })
                    }, s.getGameInfoByTag = function(e) {
                        if (this._roomData.length > 0) {
                            var t = o.clone(this._roomData).filter((function(t) {
                                return (null == t ? void 0 : t.tag) == e
                            }));
                            if ((null == t ? void 0 : t.length) > 0) return t[0].data
                        }
                    }, s.getGameStateInfoByTag = function(e) {
                        if (this._roomStateInfo.length > 0) {
                            var t = o.clone(this._roomStateInfo).filter((function(t) {
                                return (null == t ? void 0 : t.tag) == e
                            }));
                            if ((null == t ? void 0 : t.length) > 0) return t[0].data
                        }
                    }, s.resetGameInfoByTag = function() {
                        this._roomData = []
                    }, s.resetGameStateInfo = function() {
                        this._roomStateInfo = [], this.bankSeatId = null, this._gameUserInfo.clear()
                    }, s.orderCardsBySeatId = function(e) {
                        this.isMySelfSeat(e) && c.getInstance().orderMyhands()
                    }, s.orderCards = function(e) {
                        if (u.HasDingQue) {
                            var t = this.getMyQueType();
                            if (null != t) return d.sortCards(e, t)
                        }
                        var n = this.doGameCompFun("orderCards", e);
                        return n || d.sortFeiXiaoJiCards(e)
                    }, s.setLaiziInfo = function(e) {
                        var t, n = this;
                        if (this.laiziInfo = e, null == e || 0 == o.number_valueOf(null == e || null == (t = e.laizi) ? void 0 : t.length)) d.resetLiziCard();
                        else {
                            if (this.doGameCompFun("checkLaiziCard", e, (function(e) {
                                    n.laiziInfo.laizi = e, d.updateLiziCard(e), c.getInstance().orderMyhands()
                                }))) return;
                            var i = [];
                            e.laizi.forEach((function(e) {
                                var t = d.getCardValue(e);
                                i.push(l.get(t))
                            })), d.updateLiziCard(e.laizi), c.getInstance().orderMyhands()
                        }
                    }, s.getLaiziInfo = function() {
                        return this.laiziInfo
                    }, s.setGameUserState = function(e, t) {
                        this._gameUserState.length > 0 && (this._gameUserState = this._gameUserState.filter((function(t) {
                            return (null == t ? void 0 : t.tag) != e
                        }))), null != t && this._gameUserState.push({
                            tag: e,
                            data: t
                        })
                    }, s.getGameUserState = function(e) {
                        if (this._gameUserState.length > 0) {
                            var t = this._gameUserState.filter((function(t) {
                                return (null == t ? void 0 : t.tag) == e
                            }));
                            if ((null == t ? void 0 : t.length) > 0) return t[0].data
                        }
                        return null
                    }, i
                }(s)).instance = null, i._RF.pop()
        }
    }
}))