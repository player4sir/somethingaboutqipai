System.register("chunks:///_virtual/PrivateData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./SubGameConfig.ts", "./AppEvent.ts", "./GameConstant.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts", "./PrivateCommon.ts", "./PrivateDefault.ts", "./PrivateInterface.ts", "./PrivatePaoDeKuai.ts", "./PrivateXueZhanMj.ts", "./GCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass, n = e.assertThisInitialized
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            o = e.ClientInfo
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.SubGameConfig
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.StoreKey, u = e.GConstants
        }, function(e) {
            d = e.Encrypt
        }, function(e) {
            _ = e.GAME_STATUS
        }, function(e) {
            h = e.LocalStorage
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.BaseCache
        }, function(e) {
            m = e.PrivateCommon
        }, function(e) {
            g = e.PrivateDefault
        }, function(e) {
            E = e.PrivateInterfaceOptionType
        }, function(e) {
            v = e.PrivatePaoDeKuai
        }, function(e) {
            T = e.PrivateXueZhanMj
        }, function(e) {
            R = e.GCache
        }],
        execute: function() {
            a._RF.push({}, "03a4azG/flIBaOXMH6BdLgx", "PrivateData", void 0), e("PrivateData", function(e) {
                function a(t) {
                    var i;
                    (i = e.call(this, "PrivateData") || this).__User = null, i._priateRoomConfig = null, i._privateRecordList = new Map, i._privateRecordScore = new Map, i._gameRecordList = new Map, i._privatePokerInfo = null, i.recordMaxLen = 20, i.recordMaxLenGame = 50, i._roomData = null, i._roomTableConfig = null, i._roomTableInfo = null, i._roomMasterInfo = null, i._roomChangeSeatInfoList = [], i._roomSettleInfo = null, i._isRoundFinish = !0, i._hasDismiss = !0, i._privateGame = new Map, i._inviteInfo = null, i._inviteInfoHall = null, i._voiceList = [], i._userPosMap = new Map, i.roundsInfo = {
                        total: 0,
                        current: 0
                    }, i._chatHistoryUser = {}, i._chatHistoryData = [], i.historyMaxNum = 20, i.__User = t, i._privateGame.set(o.CurrentGameID, new m(n(i))), i._privateGame.set(u.GameID.YNXUEZHANMJ, new T(n(i))), i._privateGame.set(u.GameID.PAODEKUAI, new v(n(i)));
                    var a = new g(n(i));
                    return i._privateGame.set(u.GameID.DouDiZhu, a), i._privateGame.set(u.GameID.ShengJi, a), i._privateGame.set(u.GameID.GanDengYan, a), i._privateGame.set(u.GameID.SHUANGKOU, a), i._privateGame.set(u.GameID.WUSHIK, a), i._privateGame.set(u.GameID.WRDDZ, a), i._privateGame.set(u.GameID.XLCH, a), i._privateGame.set(u.GameID.QZXZ, a), i._privateGame.set(u.GameID.HZXLCH, a), i._privateGame.set(u.GameID.GUOBIAOMJ, a), i
                }
                t(a, e);
                var f = a.prototype;
                return f.clearGameCache = function() {
                    this._roomChangeSeatInfoList = [], this._roomMasterInfo = null, this._roomTableInfo = null, this._roomTableConfig = null, this._roomSettleInfo = null, this.roundsInfo = {
                        total: 0,
                        current: 0
                    }
                }, f.setLastCreateParam = function(e, t) {
                    var i = this.__User.getUserMid();
                    if (null != i) {
                        var n = r.string_format(l.USER_PRIAVATE_ROOM_CREATE, i, e);
                        h.set(n, t)
                    }
                }, f.getLastCreateParam = function(e) {
                    var t = this.__User.getUserMid();
                    if (null == t) return null;
                    var i = r.string_format(l.USER_PRIAVATE_ROOM_CREATE, t, e);
                    return h.get(i, null)
                }, f.getPrivateRoomOptionInfo = function(e, t, i) {
                    this.print("getPrivateRoomOptionInfo", e, t), e = r.number_valueOf(e);
                    var n = {},
                        a = this.getLastCreateParam(e);
                    r.string_isEmpty(a) || (n = r.table_verify(d.JsonDecode(a), !1)), this.print("getPrivateRoomOptionInfo lastParam ", n);
                    var o = [],
                        s = this._privateGame.get(e);
                    return r.isNotNull(s) && (o = s.getPrivateRoomOptionInfo(e, t, i)), o = this.addVoiceOptions(o), r.table_isEmpty(n) || o.forEach((function(e, t, i) {
                        e.itemDefault = n[null == e ? void 0 : e.itemKey]
                    })), this.print("getPrivateRoomOptionInfo result", e, o), o
                }, f.addVoiceOptions = function(e) {
                    var t = null;
                    e.forEach((function(i, n, a) {
                        "人数" == i.itemName && (t = e.splice(n, 1)[0])
                    }));
                    var i = {
                        itemKey: "voice",
                        itemType: E.Radio,
                        itemName: "语音",
                        itemOptions: [],
                        itemDefault: u.PRIVATE_VOICE_TYPE.REALTIME_VOICE,
                        itemOptionsMax: 2
                    };
                    return i.itemOptions.push({
                        id: u.PRIVATE_VOICE_TYPE.REALTIME_VOICE,
                        key: u.PRIVATE_VOICE_TYPE.REALTIME_VOICE,
                        name: "实时语音"
                    }), i.itemOptions.push({
                        id: u.PRIVATE_VOICE_TYPE.NORMAL_VOICE,
                        key: u.PRIVATE_VOICE_TYPE.NORMAL_VOICE,
                        name: "普通语音"
                    }), e.unshift(i), t && e.unshift(t), e
                }, f.getCheckGamePrivateData = function(e) {
                    var t = this._privateGame.get(this.__User.SelectGame.getCurGameId());
                    if (r.isNotNull(t)) {
                        var i, n = t.getCheckGamePrivateData(e);
                        return null != (i = n) && i.length && (n = this.addVoiceOptions(n)), n || []
                    }
                }, f.getPrivateRoomGameInfo = function(e, t, i) {
                    this.print("getPrivateRoomGameInfo", t, i), e = r.number_valueOf(e);
                    var n = [],
                        a = this._privateGame.get(e);
                    return r.isNotNull(a) && (n = a.getPrivateRoomGameInfo(e, t, i)), this.print("getPrivateRoomGameInfo result", n), n
                }, f.checkPrivateRoomGameInfo = function(e) {
                    this.print("checkPrivateRoomGameInfo", e);
                    var t = this.__User.SelectGame.getCurGameId(),
                        i = this._privateGame.get(t);
                    return r.isNotNull(i) && (e = i.checkPrivateRoomGameInfo(t, e)), this.print("checkPrivateRoomGameInfo result", e), e
                }, f.checkPrivateItemInfo = function(e, t) {
                    this.print("checkPrivateRoomGameInfo", e);
                    var i = this._privateGame.get(this.__User.SelectGame.getCurGameId());
                    return r.isNotNull(i) && (e = i.checkPrivateItemInfo(e, t)), this.print("checkPrivateItemInfo result", e), {
                        param: e.param,
                        DIYIds: e.DIYIds
                    }
                }, f.onGameStart = function() {
                    console.log("onGameStart"), this.setPrivateRoundFinish(!1), this.setHasDismiss(!1);
                    var e = this.getPrivateRoomInviteInfoKey();
                    r.string_isEmpty(e) || p.dispatch(c.NET_REQ_PRIVATE_ROOM_INVITE, e, "clear")
                }, f.setPrivateRoomSettleInfo = function(e) {
                    void 0 === e && (e = null), this._roomSettleInfo = e, r.isNotNull(e) && (2 == e.state || 4 == e.state ? (this.setPrivateRoundFinish(!0), this.resetPrivateRounds()) : e.tableStatu == _.PRIVATEROOM_STATUS_RESTART || e.tableStatu == _.PRIVATEROOM_STATUS_GAME_OVER ? (this.setPrivateRoundFinish(!0), this.updateGameStates(e)) : e.gameStatu == _.GAME_STATUS_STOP && 0 == e.roundsCurrent ? (this.setPrivateRoundFinish(!0), this.roundsInfo.current = 0, this.updateGameStates(e)) : this.setPrivateRoundFinish(!1)), null != this._roomMasterInfo && (this._roomMasterInfo.reconnectFlag = 0)
                }, f.updateGameStates = function(e) {
                    var t;
                    3 == e.state && null != (t = R.Desk) && t.setRoomStates && R.Desk.setRoomStates(u.GameRoomState.STATUS_NORMAL)
                }, f.getPrivateRoomSettleInfo = function() {
                    return this._roomSettleInfo
                }, f.resetPrivateRoomChangeSeatInfo = function() {
                    this._roomChangeSeatInfoList = []
                }, f.addPrivateRoomChangeSeatInfo = function(e) {
                    void 0 === e && (e = null), this._roomChangeSeatInfoList.push(e)
                }, f.getPrivateRoomChangeSeatInfoList = function() {
                    return this._roomChangeSeatInfoList
                }, f.setPrivateRoomMasterInfo = function(e) {
                    void 0 === e && (e = null), this._roomMasterInfo = e
                }, f.getPrivateRoomMasterInfo = function() {
                    return this._roomMasterInfo
                }, f.updatePrivateRoomTableKey = function(e) {
                    null == this._roomMasterInfo && (this._roomMasterInfo = {
                        userId: 0,
                        reconnectFlag: 0,
                        tableKey: ""
                    }), this._roomMasterInfo.tableKey = e
                }, f.setPrivateRoomTalbeInfo = function(e) {
                    void 0 === e && (e = null), this._roomTableInfo = e
                }, f.getPrivateRoomTableInfo = function() {
                    return this._roomTableInfo
                }, f.setPrivateRoomTalbeConfig = function(e) {
                    void 0 === e && (e = null), this._roomTableConfig = e
                }, f.getPrivateRoomTableConfig = function() {
                    return this._roomTableConfig
                }, f.setPrivateRoomData = function(e) {
                    void 0 === e && (e = null);
                    var t = this.isTwoPlayerModule();
                    if (this._roomData = e, this.roundsInfo.total = e.rounds, !r.string_isEmpty(this._roomData.param)) {
                        var i = d.JsonDecode(this._roomData.param);
                        if (!r.table_isEmpty(i))
                            for (var n in i) r.isNull(this._roomData[n]) && (this._roomData[n] = i[n])
                    }
                    p.dispatch(c.UPDATE_PRIVATE_SETTLE_INFO), !t && this.isTwoPlayerModule() && p.dispatch(c.UPDATE_PRIVATE_ROOM_INFO)
                }, f.getPrivateRoomData = function() {
                    return this._roomData
                }, f.getLastPrivateGameId = function() {
                    var e;
                    return (null == (e = this._roomData) ? void 0 : e.gameId) || o.deviceInfo.CurrentGameID
                }, f.updatePrivateRoomConfig = function(e) {
                    this._priateRoomConfig = e
                }, f.getPrivateRoomConfig = function() {
                    return this._priateRoomConfig
                }, f.getPrivateRoomGameListSize = function() {
                    return 6
                }, f.getPrivateRoomGameList = function() {
                    var e = this,
                        t = [],
                        i = [];
                    if (r.isNotNull(this._priateRoomConfig)) {
                        var n = this.getPrivateRoomGameListSize(),
                            a = this.__User.SelectGame.getLastPrivateGames(),
                            c = s.SupportPrivateSubGameIds,
                            l = [o.deviceInfo.CurrentGameID, u.GameID.DouDiZhu];
                        r.table_isEmpty(a) ? c = c.filter((function(e) {
                            return e != u.GameID.DouDiZhu
                        })) : (l = l.concat(a), a.forEach((function(e) {
                            c = c.filter((function(t) {
                                return t != r.number_valueOf(e) && t != u.GameID.DouDiZhu
                            }))
                        }))), r.table_isEmpty(c) || (c.sort((function(e, t) {
                            return (u.GamePrivateSort[e] || 0) - (u.GamePrivateSort[t] || 0)
                        })), l = l.concat(c)), l.forEach((function(a, o, r) {
                            var s = String(a);
                            if (e._priateRoomConfig[s]) {
                                var c = {
                                    gameKey: s,
                                    gameName: e._priateRoomConfig[s].name || ""
                                };
                                t.length < n ? t.push(c) : i.push(c)
                            }
                        })), t.length < n && 1 == i.length && t.push(i.pop())
                    }
                    return [t, i]
                }, f.getPrivateRoomConfigByGameId = function(e) {
                    var t = null,
                        i = String(e),
                        n = String(u.PrivateTableType.Score);
                    return r.isNotNull(this._priateRoomConfig) && r.isNotNull(this._priateRoomConfig[i]) && r.isNotNull(this._priateRoomConfig[i].data) && r.isNotNull(this._priateRoomConfig[i].data[n]) && (t = this._priateRoomConfig[i].data[n]), t
                }, f.getPrivateRoomLevelByTableType = function(e) {
                    return e == u.PrivateTableType.Money ? u.GameRoomLevelConf.PRIVATE_ROOMID : e == u.PrivateTableType.Crystal ? u.GameRoomLevelConf.PRIVATE_ROOMID_CRYSTAL : e == u.PrivateTableType.Score ? u.GameRoomLevelConf.PRIVATE_ROOMID_JIFEN : void 0
                }, f.updatePrivateRecordList = function(e, t) {
                    void 0 === t && (t = []);
                    var i = t;
                    if (this._privateRecordList.has(e)) {
                        var n = this._privateRecordList.get(e),
                            a = new Map;
                        n.forEach((function(e) {
                            e.end_time && a.set(e.end_time, !0)
                        }));
                        var o = t.filter((function(e) {
                            return !e.end_time || !a.has(e.end_time)
                        }));
                        i = r.mergeArray(o, n).slice(0, this.recordMaxLen)
                    }
                    this._privateRecordList.set(e, i)
                }, f.getPriveteRecordList = function(e) {
                    return void 0 === e && (e = 0), r.nullToDefault(this._privateRecordList.get(e), [])
                }, f.getGameRecordList = function(e) {
                    return void 0 === e && (e = 0), r.nullToDefault(this._gameRecordList.get(e), [])
                }, f.updateGameRecordList = function(e, t) {
                    void 0 === t && (t = []);
                    var i = t;
                    if (this._gameRecordList.has(e)) {
                        var n = this._gameRecordList.get(e),
                            a = new Map;
                        n.forEach((function(e) {
                            e.play_time && a.set(e.play_time, !0)
                        }));
                        var o = t.filter((function(e) {
                            return !e.play_time || !a.has(e.play_time)
                        }));
                        i = r.mergeArray(o, n).slice(0, this.recordMaxLenGame)
                    }
                    this._gameRecordList.set(e, i)
                }, f.updatePrivateRecordScore = function(e, t) {
                    this._privateRecordScore.set(e, t)
                }, f.getPriveteRecordScore = function(e) {
                    return void 0 === e && (e = 0), this._privateRecordScore.get(e)
                }, f.resetPriveteRecordList = function() {
                    this._privateRecordList.clear(), this._privateRecordScore.clear(), this._gameRecordList.clear()
                }, f.updatePrivatePokerInfo = function(e) {
                    this._privatePokerInfo = r.table_verify(e)
                }, f.getPrivetePokerInfo = function() {
                    return r.table_verify(this._privatePokerInfo)
                }, f.setPrivateRoundFinish = function(e) {
                    this._isRoundFinish = e
                }, f.getPrivateRoundFinish = function() {
                    return this._isRoundFinish
                }, f.setHasDismiss = function(e) {
                    this._hasDismiss = e
                }, f.getHasDismiss = function() {
                    return this._hasDismiss
                }, f.isLastRounds = function() {
                    return this.roundsInfo.current == this.roundsInfo.total
                }, f.initPrivateRoomInviteInfoHall = function() {
                    var e = {
                        key: r.string_format("{0}_{1}", this.__User.getUserMid(), r.time()),
                        userList: {},
                        roomInfo: {
                            tableId: 0,
                            param: {}
                        }
                    };
                    this._inviteInfoHall = e
                }, f.getPrivateRoomInviteInfoKeyHall = function() {
                    return r.isNull(this._inviteInfoHall) ? "" : this._inviteInfoHall.key
                }, f.initPrivateRoomInviteInfo = function(e) {
                    void 0 === e && (e = null), console.log("initPrivateRoomInviteInfo", e), r.isNull(e) && (e = r.string_format("{0}_{1}", this.__User.getUserMid(), r.time()));
                    var t = {
                        key: e,
                        userList: {},
                        roomInfo: {
                            tableId: 0,
                            param: {}
                        }
                    };
                    this._inviteInfo = t
                }, f.getPrivateRoomInviteInfoKey = function() {
                    return r.isNull(this._inviteInfo) ? "" : this._inviteInfo.key
                }, f.getPrivateRoomInviteUserList = function() {
                    var e = [];
                    if (r.isNull(this._inviteInfo)) return e;
                    var t = this.getPrivateRoomPlayerNum();
                    for (var i in this._inviteInfo.userList) r.isNotNull(this._inviteInfo.userList[i]) && e.length <= t && e.push(this._inviteInfo.userList[i]);
                    return e.sort((function(e, t) {
                        return e.time - t.time
                    })), e
                }, f.getPrivateRoomPlayerNum = function() {
                    var e = this.__User.SelectGame.getCurGameId(),
                        t = u.GamePlayerNumMax[e] || o.deviceInfo.playerNum,
                        i = this._privateGame.get(e);
                    return r.isNotNull(i) && (t = i.getPrivateRoomPlayerNum(e)), t
                }, f.getPrivateRoomInviteUserIdList = function(e) {
                    void 0 === e && (e = null);
                    var t = [];
                    if (r.isNull(this._inviteInfo)) return t;
                    var i = this.getPrivateRoomPlayerNum();
                    for (var n in this._inviteInfo.userList) r.isNotNull(this._inviteInfo.userList[n]) && t.length <= i && (e && e == this._inviteInfo.userList[n].userInfo.mid || t.push(this._inviteInfo.userList[n].userInfo.mid));
                    return t
                }, f.addPrivateRoomInviteInfo = function(e, t) {
                    r.isNull(this._inviteInfo) || (this._inviteInfo.userList[String(e)] = t)
                }, f.removePrivateRoomInviteInfo = function(e) {
                    r.isNull(this._inviteInfo) || (this._inviteInfo.userList[String(e)] = null)
                }, f.setPrivateRoomInviteRoomInfo = function(e) {
                    r.isNull(this._inviteInfo) || (this._inviteInfo.roomInfo = e)
                }, f.getPrivateRoomInviteRoomInfo = function() {
                    if (!r.isNull(this._inviteInfo)) return this._inviteInfo.roomInfo
                }, f.getPrivateRoomInviteInfo = function(e) {
                    if (!r.isNull(this._inviteInfo)) return this._inviteInfo.userList[String(e)]
                }, f.getPrivateRoomUserList = function() {
                    return r.isNull(this._inviteInfo) ? {} : this._inviteInfo.userList
                }, f.clearPrivateRoomInviteInfo = function() {
                    this._inviteInfo = null
                }, f.updateInviteInfo = function(e) {
                    var t = this.getPrivateRoomInviteInfoKey();
                    if (r.string_isEmpty(t) || t == e.key || (console.log("checkParam", "在其他房间中"), p.dispatch(c.NET_REQ_PRIVATE_ROOM_INVITE, t, "leave")), this.initPrivateRoomInviteInfo(e.key), r.isNotNull(e.data))
                        for (var i in e.data) {
                            var n = d.JsonDecode(e.data[i] || "");
                            if ("com" == i) this.setPrivateRoomInviteRoomInfo(n);
                            else {
                                var a = r.number_valueOf(i);
                                this.addPrivateRoomInviteInfo(a, n)
                            }
                        }
                }, f.setPrivateRoomChatVoiceList = function(e) {
                    console.log("储存私人房语音数据", e), this._voiceList.push(e)
                }, f.getPrivateRoomChatVoiceList = function(e) {
                    return void 0 === e && (e = 0), 0 == this._voiceList.length ? null : this._voiceList[e]
                }, f.shiftPrivateRoomChatVoiceList = function() {
                    if (0 == this._voiceList.length) return null;
                    var e = this._voiceList.shift();
                    return console.log("私人房语音队列", e, this._voiceList, this._voiceList.length), e
                }, f.clearPrivateRoomChatVoiceList = function() {
                    this._voiceList = []
                }, f.clearChatHistoryData = function() {
                    this._chatHistoryData = []
                }, f.setChatHistoryUserData = function(e) {
                    e && e.mid && (this._chatHistoryUser[e.mid] = e)
                }, f.setChatHistoryMsgData = function(e) {
                    e && (this._chatHistoryData.push(e), this._chatHistoryData.length > this.historyMaxNum && this._chatHistoryData.shift())
                }, f.getChatHistoryMsgData = function() {
                    return this._chatHistoryData
                }, f.getChatHistoryUserData = function() {
                    return this._chatHistoryUser
                }, f.getLastChatHistoryMsgData = function() {
                    return this._chatHistoryData[this._chatHistoryData.length - 1]
                }, f.resetPrivateRounds = function() {
                    this.roundsInfo && (this.roundsInfo.current = 0)
                }, f.getPrivateRounds = function() {
                    if (this.roundsInfo.total > 0) return this.roundsInfo
                }, f.updateCurRounds = function(e) {
                    void 0 === e && (e = null), null == e ? this.roundsInfo.current < this.roundsInfo.total && (this.roundsInfo.current = this.roundsInfo.current + 1) : this.roundsInfo = e, 0 == this.roundsInfo.current && this.setPrivateRoundFinish(!0), p.dispatch(c.UPDATE_PRIVATE_ROOM_ROUNDS_INFO, this.roundsInfo)
                }, f.checkGameIdSupport = function(e) {
                    return o.deviceInfo.GameIds.includes(r.number_valueOf(e))
                }, f.checkGameRecordList = function(e) {
                    var t = r.number_valueOf(null == e ? void 0 : e.gameId),
                        i = R.PrivateData.getGameRecordList(t);
                    if (r.table_isEmpty(i)) return t
                }, f.checkPrivateRecordList = function(e) {
                    var t = r.number_valueOf(null == e ? void 0 : e.gameId),
                        i = R.PrivateData.getPriveteRecordList(t);
                    if (r.table_isEmpty(i)) return t
                }, f.isTwoPlayerModule = function() {
                    if (this.__User.SelectGame.isInPrivateRoom()) {
                        var e = this.getPrivateRoomData();
                        if (null != e && e.param) {
                            var t = d.JsonDecode(e.param);
                            if (2 == r.number_valueOf(null == t ? void 0 : t.numFlag)) return !0
                        }
                    }
                    return !1
                }, f.updateUserPos = function(e, t) {
                    this._userPosMap.set(e, t)
                }, f.getUserInfo = function(e) {
                    return this._userPosMap.get(e)
                }, f.resetUserPos = function() {
                    this._userPosMap.clear()
                }, f.getGuidGames = function() {
                    return [u.GameID.FXJ, u.GameID.GeJiuMJ, u.GameID.PUERMJ, u.GameID.DanDongMJ, u.GameID.SCNEIJIANGMJ, u.GameID.KXW, u.GameID.QiongHuMJ, u.GameID.HZXLCH, u.GameID.YNXUEZHANMJ]
                }, i(a, [{
                    key: "User",
                    get: function() {
                        return this.__User
                    }
                }]), a
            }(f)), a._RF.pop()
        }
    }
}))