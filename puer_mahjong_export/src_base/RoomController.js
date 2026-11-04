System.register("chunks:///_virtual/RoomController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./Encrypto.ts", "./CountTime.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./ResLoader.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseController.ts", "./GSocket.ts", "./GameRoomHelper.ts", "./GlobalCmd.ts", "./AppControler.ts", "./MatchController.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.instantiate
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.GameTxt
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.GConstants, u = e.StoreKey
        }, function(e) {
            d = e.GameRes
        }, function(e) {
            _ = e.UIID
        }, function(e) {
            h = e.Encrypt
        }, function(e) {
            p = e.CountTime
        }, function(e) {
            f = e.GAME_EXPAND_INFO_TAG
        }, function(e) {
            m = e.LayerManager
        }, function(e) {
            g = e.resLoader
        }, function(e) {
            E = e.LocalStorage
        }, function(e) {
            v = e.EventManager
        }, function(e) {
            T = e.BaseController
        }, function(e) {
            R = e.GSocket
        }, function(e) {
            P = e.GameRoomHelper
        }, function(e) {
            y = e.GlobalCmdHeadPHP, C = e.GlobalCmdHead
        }, function(e) {
            S = e.AppControler
        }, function(e) {
            A = e.MatchController
        }, function(e) {
            I = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "b5401i76s5IbZDQ3JXoL/f5", "RoomController", void 0), e("RoomController", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, t) || this)._className = "", n._deskCache = null, n._reconnResLoadTime = 3, n._handlerReconnResLoad = null, n._gameValid = !1, n._handlerTimeOutLoginGame = null, n._sendLoginMaxCount = 2, n._sendLoginCurrowNum = 0, n._sendLoginTimeout = 6, n._sendLoginData = null, n._isReconn = !1, n._isReconnecting = !1, n._isChangeTable = !1, n._isReqReady = !1, n._dealyExitHandler = null, n._intoGameData = null, n._handlerCountTimeMap = new Map, n._halfwayExitRoomData = null, v.dispatch(c.REPORT_USER_INTERACTION, {
                        eventID: "event_10"
                    }), n._className = t, n._intoGameData = null == (i = s.SelectGame) ? void 0 : i.intoGameData, P.intoRoomInit(), n.onInit(), s.ShopInfo.checkRoomGoodList(), v.dispatch(c.NET_REQ_CONFIG, {
                        cmd: y.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    }), n
                }
                t(i, e);
                var T = i.prototype;
                return T.onInitModuleEvent = function() {
                    this.addModelListener(c.NOTIFY_PAY_SUCCESS, this.onPaySuccess), this.addModelListener(c.ROOM_REQ_RECONNECT, this.reqReconnect), this.addModelListener(c.ROOM_VIEW_ONLOAD, this.onViewLoad), this.addModelListener(c.RESPONSE_JOIN_GAME_RESPONSE, this.onJoinGameResponse), this.addModelListener(c.NET_REQ_ROOM_LOGIN, this.reqEnterGameLogin), this.addModelListener(c.NET_CHECK_OUT_TIME_ROOM_JOIN, this.loginRoomOutTime), this.addModelListener(c.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN, this.stopcheckLoginCheckTimeOut), this.addModelListener(c.NET_RECEIVE_GAME_LOGIN_SUCCESS, this.receiveLoginRoomSuccess), this.addModelListener(c.NET_RECEIVE_GAME_RECONNECT_SUCCESS, this.receiveReConnectSuccess), this.addModelListener(c.BROADCAST_GAME_START, this.receiveGameStart), this.addModelListener(c.NET_RECEIVE_GAME_LOGIN_FAIL, this.receiveLoginRoomFail), this.addModelListener(c.NET_RECEIVE_GAME_ROOM_INFO, this.receiveRoomInfo), this.addModelListener(c.NET_RECEIVE_GAME_READY_INFO, this.receiveReadyInfo), this.addModelListener(c.NET_REQ_PLAYER_READY, this.reqPlayerReady), this.addModelListener(c.NET_RECEIVE_GAME_PLAYER_READY, this.receivePlayerReady), this.addModelListener(c.NET_RECEIVE_GAME_PLAYER_INTO, this.receivePlayerInto), this.addModelListener(c.NET_RECEIVE_GAME_PLAYER_LOGOUT, this.receivePlayerLogOut), this.addModelListener(c.NET_REQ_LOGOUT_IN_GAME_TRY, this.reqTryLogOutInGame), this.addModelListener(c.NET_RESP_LOGOUT_IN_GAME, this.respTryLogOutInGame), this.addModelListener(c.NET_REQ_LOGOUT_IN_GAME, this.reqLogOutInGame), this.addModelListener(c.NET_REQ_LOGOUT_IN_GAME_FORCE, this.reqLogOutInGameForce), this.addModelListener(c.NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS, this.receiveExitRoomSuccess), this.addModelListener(c.NET_RECEIVE_GAME_FORCE_LOGOUT, this.receiveForceLogout), this.addModelListener(c.NET_RECEIVE_GAME_STOP_PLAYING, this.receiveStopPlaying), this.addModelListener(c.NET_RECEIVE_GAME_USER_FACE, this.receiveGameUserFace), this.addModelListener(c.NET_RECEIVE_GAME_USER_CHAT, this.receiveGameUserChat), this.addModelListener(c.NET_REQ_GAME_USER_AI, this.reqGamePlayerAI), this.addModelListener(c.NET_RECEIVE_GAME_PLAYER_AI, this.receiveGamePlayerAI), this.addModelListener(c.NET_RECEIVE_ROOM_LEVEL_UP, this.receiveRoomLevelUp), this.addModelListener(c.NET_REQ_GAME_CHANGE_DESK, this.reqGameChangeTable), this.addModelListener(c.NET_RECEIVE_GAME_CHANGE_DESK_ERROR, this.receiveChangeTableError), this.addModelListener(c.GAME_ROOM_STATE_CHANGE, this.receiveRoomStateChange), this.addModelListener(c.ACTIVITY_BANKUP_BACK, this.receiveBankUpBack), this.addModelListener(c.NOTIFY_PRIVATE_ROOM_CHANGE_SEAT, this.notifyPrivateRoomChangeSeat), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_CHANGE_SEAT_RESULT, this.broadcastPrivateRoomChangeSeatResult), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_DISMISS_RESULT, this.onDismissResult), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_DISMISS_GAME, this.onDismissGame), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_DISMISS_GAME_OLD, this.onDismissGameOld), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_ONLINE_STATU, this.onPrivateRoomOnlineStatu), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_CANCEL_READY, this.onPrivateRoomCancelReady), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_TABLE_KEY, this.onPrivateRoomTableKey), this.addModelListener(c.UPDATE_PRIVATE_ROOM_MASTER_INFO, this.onPrivateMasterInfoUpdate), this.addModelListener(c.NET_REQ_PLAYER_AGAIN, this.onPrivateSettlePlayerAgain), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_CONTINUE, this.onPrivateRoomContinue), this.addModelListener(c.BROADCAST_PRIVATE_ROOM_SETTLE, this.broadcastPrivateRoomSettle), this.addModelListener(c.UPDATE_MODULE_GIFT, this.onUpdateModuleGift), this.addModelListener(c.NOTIFY_UPDATE_LEVEL, this.onUpdateLevel), this.addModelListener(c.VIEW_SHOW_BANKRUPT, this.onShowBankruptGift), this.addModelListener(c.NET_BROAD_USE_PROPS, this.onBroadUseProps), this.addModelListener(c.REQ_AD_GAMEOVER_REWARD, this.reqGetADWard), this.addModelListener(c.REQ_AD_GETLOSEAD, this.onReqLoseAdConfig), this.addModelListener(c.NET_AD_GETLOSEAD, this.onGetLoseAdConfig), this.addModelListener(c.NET_AD_GAMEOVER_REWARD, this.onGetADWard), this.addModelListener(c.BROADCAST_REFRESH_PROPTY, this.onRefreshPropty), this.addModelListener(c.USER_UPDATE_PROPERTY, this.onRefreshPropty), this.addModelListener(c.USER_UPDATE_GAMERECORD, this.onSynGameRecord), this.addModelListener(c.NOTIFY_UPDATE_LEVEL, this.onSynRoomLevel), this.addModelListener(c.VOICE_GET_PLAYERTLIST, this.onGetPlayerOpenIds), this.addModelListener(c.NOTIFY_CHANGETABLE_READY, this.onChangeLevelAndReady), this.addModelListener(c.NET_RECEIVE_TEAM_MATCH, this.onTeamMatch), this.addModelListener(c.NET_SERVER_COMMAND_PUSH_USERINFO, this.onPushUserInfo), this.addModelListener(c.NET_RESP_BANKRUPT_COUNT, this.onRefreshBankruptCount), this.addModelListener(c.EVENT_USER_LEVEL_EXP_CHANGE, this.onUserLevelExpChange)
                }, T.onInit = function() {}, T.receiveGameOver = function(e, t) {}, T.receiveGameStart = function(e, t) {}, T.onUpdateLevel = function() {
                    this._intoGameData = s.SelectGame.intoGameData
                }, T.onSynRoomLevel = function() {
                    var e;
                    this._intoGameData && null != (e = s.SelectGame.intoGameData) && e.Level ? this._intoGameData.Level = s.SelectGame.intoGameData.Level : this.onUpdateLevel()
                }, T.onGamePlaying = function() {
                    this.updateRoomStates(l.GameRoomState.STATUS_PLAYING)
                }, T.onNotifyGameStart = function() {
                    var e;
                    v.dispatch(c.NET_REQ_BANKRUPT_GIFT_CONF, s.SelectGame.getCurGameId(), this.getCurLevelId(), !1, !1);
                    var t, i = s.SelectGame.getCurRoomInfo();
                    i && v.dispatch(c.VIEW_UPDATE_GAME_BASECHIP, i.service_fee), null != (e = s.Desk) && e.onReceiveServerGameStart && (null == (t = s.Desk) || t.onReceiveServerGameStart())
                }, T.onGameOver = function() {
                    this._deskCache && (this._deskCache.canExitGame = !1), this.updateRoomStates(l.GameRoomState.STATUS_GAMEOVER), v.dispatch(c.EVENT_GAME_OVER), s.PrivateData.clearChatHistoryData()
                }, T.onReceiveGameSettle = function() {
                    s.SelectGame.isNormalRoom() && s.Desk && s.Desk.updateGameExpandInfo(f.EXIT_GAME_VALID, !1)
                }, T.onGameHasOver = function() {
                    var e;
                    s.SelectGame.isNormalRoom() && (s.BankrupData.checkBankruptNum(!0), null == (e = s.Desk) || e.checkAutoPopup()), v.dispatch(c.REPORT_USER_INTERACTION, {
                        eventID: "event_11"
                    })
                }, T.onViewLoad = function(e) {
                    var t;
                    if (void 0 === e && (e = null), this._gameValid = !0, this._intoGameData = null == (t = s.SelectGame) ? void 0 : t.intoGameData, this._intoGameData && 1 != s.User.LoginRoomState) {
                        this._sendLoginCurrowNum = 0, this._handlerReconnResLoad && (this.stopScheduler(this._handlerReconnResLoad), this._handlerReconnResLoad = null);
                        var i = null != e;
                        1 == this._intoGameData.isReconn ? this.__reConnection(i) : this.__connection(i)
                    }
                    s.SelectGame.isInMatchRoom() && A.getInstance().onViewLoad()
                }, T.__reConnection = function(e, t) {
                    var i = this;
                    void 0 === e && (e = !1), void 0 === t && (t = null), this.print("重新连接，游戏场景状态:" + (1 == e ? "存在" : "不存在")), this._isReconn = !0, this._isReconnecting = !0, this.stopScheduler(this._handlerReconnResLoad), this._handlerReconnResLoad = null, 0 == e ? (v.dispatch(c.GAME_RECONNECT_RESLOAD), this._handlerReconnResLoad = this.addScheduler(this._reconnResLoadTime, (function() {
                        i.stopScheduler(i._handlerReconnResLoad), i._handlerReconnResLoad = null, i._sendLoginData = null, i.reqEnterGameLogin()
                    }))) : (this.stopScheduler(this._handlerReconnResLoad), this._handlerReconnResLoad = null, this._sendLoginData = null, this.reqEnterGameLogin(t))
                }, T._stopDealyHandler = function() {
                    null != this._dealyExitHandler && (this.stopScheduler(this._dealyExitHandler), this._dealyExitHandler = null)
                }, T.__connection = function(e) {
                    void 0 === e && (e = !1), this.print("推荐入场，游戏场景状态:" + (1 == e ? "存在" : "不存在")), this._isReconn = !1, this._isReconnecting = !1, this.stopScheduler(this._handlerReconnResLoad), this._handlerReconnResLoad = null, this._sendLoginData = null, this.reqEnterGameLogin()
                }, T.reqReconnect = function(e, t) {
                    R.instance.closeConnect(!0)
                }, T.onViewStart = function() {
                    s.WxShareData.checkWXStartQueryParams()
                }, T.onViewDestroy = function() {
                    s.setDesk(null), s.PrivateData.resetUserPos()
                }, T.resetIntoGameDataToLogin = function(e) {
                    s.SelectGame.intoGameData && (s.SelectGame.intoGameData.TableID = 0), this._intoGameData && (this._intoGameData.TableID = 0)
                }, T.onJoinGameResponse = function(e) {
                    this.print("")
                }, T.reqEnterGameLogin = function(e, t) {
                    if (void 0 === t && (t = null), 1 == s.User.LoginRoomState) {
                        if (!t || !t.forceReconnect) return void this.print("Error:已经登录成功了，不需要再次登录");
                        this.print("需要强制重连")
                    }
                    if (this.stopcheckLoginCheckTimeOut(), this.StopCountTime(), this._sendLoginCurrowNum >= this._sendLoginMaxCount) return console.log("Error:超出登录的最大次数 直接退出游戏场景"), v.dispatch(c.SYS_TOAST_TIP, {
                        content: o.hall_goto_game_out_time
                    }), void this.detailExitGame();
                    if (!this._intoGameData) return console.log("Error:进入房间的缓存参数有误 直接退出游戏场景"), void this.detailExitGame(!1);
                    console.log("请求登录进入房间===>当前登录次数:" + this._sendLoginCurrowNum);
                    var i = r.number_valueOf(this._intoGameData.GameID, 0),
                        n = r.number_valueOf(this._intoGameData.Level, 0),
                        l = r.number_valueOf(this._intoGameData.TableID, 0);
                    if (i <= 0) return v.dispatch(c.SYS_TOAST_TIP, {
                        content: o.hall_goto_game_no_gameid
                    }), void this.detailExitGame();
                    var u = null,
                        d = null,
                        _ = null,
                        p = !1,
                        f = this._sendLoginTimeout;
                    if (l > 0) {
                        console.log("请求重连进入游戏房间 gameID = " + i + " roomLevel = " + n + " tableID = " + l);
                        var m = {
                            version: a.AppVer,
                            api: 1
                        };
                        u = {
                            mid: s.User.getUserMid(),
                            roomId: l,
                            userInfo: s.User.getUserLoginInfoByIntoGame(i),
                            key: "55ff85e777d50680fb52935076d7e55b",
                            plateInfo: h.JsonEncode2(m)
                        }, d = C.ROOM_SEND_LOGIN, _ = o.login_room_reconnect
                    } else {
                        if (console.log("请求一键进入游戏房间 gameID = " + i + " roomLevel = " + n + " tableID = " + l), s.SelectGame.isInMatchRoom()) return;
                        if (s.SelectGame.isInPrivateRoom()) {
                            var g = s.PrivateData.getPrivateRoomData();
                            r.isNotNull(g) && r.isNotNull(g.creator) && g.creator == s.User.getUserMid() ? (u = {
                                gameId: i,
                                levelId: n,
                                userInfo: s.User.getUserLoginInfoByIntoGame(i),
                                baseChip: g.baseChip,
                                param: g.param,
                                tableType: g.tableType,
                                times: g.times,
                                rounds: g.rounds
                            }, d = C.CREATE_PRIVATE_ROOM_REQUEST) : (u = {
                                gameId: i,
                                levelId: n,
                                serverId: g.serverId,
                                tableId: g.tableId,
                                mid: s.User.getUserMid(),
                                userInfo: s.User.getUserLoginInfoByIntoGame(i),
                                baseChip: g.baseChip,
                                param: g.param,
                                tableType: g.tableType,
                                times: g.times,
                                rounds: g.rounds
                            }, d = C.ENTER_PRIVATE_ROOM_REQUEST)
                        } else {
                            var E = null;
                            if (E = 0 == n ? s.SelectGame.getGameLevelRoomMinMoney(i) : s.SelectGame.getGameRoomInfoByRoomLevelID(i, n), E = r.table_verify(E), 1 == r.number_valueOf(E.new_game_mode)) {
                                var T, R, P, y;
                                f = 30, u = {
                                    gameid: i,
                                    level: n,
                                    leader: {
                                        uid: s.User.getUserMid(),
                                        str_key: "55ff85e777d50680fb52935076d7e55b",
                                        str_info: h.JsonEncode(s.User.getUserLoginInfoByIntoGame(i)),
                                        ext_info: "",
                                        flag: 1
                                    }
                                };
                                var S = s.SelectGame.getTeamData();
                                null != S && null != (T = S.create) && T.leader_uid && null != S && null != (R = S.create) && null != (P = R.members) && P.length && (u.teamid = S.teamid), d = C.CLIENT_COMMAND_TEAM_MATCH, u.teamid && (null == S || null == (y = S.create) ? void 0 : y.leader_uid) != s.User.getUserMid() && (p = !0)
                            } else {
                                var A, I = r.number_valueOf(E.base_chip_type),
                                    D = r.number_valueOf(E.min_money),
                                    N = r.number_valueOf(s.User.getUserMoneyByID(I));
                                u = {
                                    gameId: i,
                                    levelId: n,
                                    userInfo: s.User.getUserLoginInfoByIntoGame(i),
                                    key: "55ff85e777d50680fb52935076d7e55b",
                                    flag: 1,
                                    changeTableType: r.number_valueOf(null == (A = t) ? void 0 : A.changeTableType),
                                    extParam: {},
                                    gameVersion: r.number_valueOf(s.SelectGame.getGameVersionByGameID(i)),
                                    playType: r.number_valueOf(E.play_mode),
                                    propertyId: I
                                }, d = C.ROOM_LOGIN_GAME_ONE_KEY, N < D && console.warn("应该触发降场,但是并未处理")
                            }
                        }
                    }
                    if (v.dispatch(c.SYS_TOAST_TIP, {
                            content: _
                        }), s.User.isInRoom() && v.dispatch(c.SYS_SHOW_NETLOADING, s.SelectGame.curRoomIsTeamMode() ? 30 : 15, s.SelectGame.curRoomIsTeamMode() ? {
                            skinName: "loading_match"
                        } : null), this._sendLoginData = u, this._sendLoginCurrowNum = this._sendLoginCurrowNum + 1, v.dispatch(c.SYS_UPDATE_HEART_TIME, 6e3), !p) {
                        var O = {
                            cmd: d,
                            body: this._sendLoginData
                        };
                        v.dispatch(c.NET_SEND_MSG, O), this.stopcheckLoginCheckTimeOut(), this._handlerTimeOutLoginGame = this.addScheduler(f, (function() {
                            v.dispatch(c.NET_CHECK_OUT_TIME_ROOM_JOIN)
                        }))
                    }
                    this.onLoginGameDesk()
                }, T.onTeamMatch = function(e, t) {
                    if (console.log("队伍匹配结果==>", t), 1 == t.retcode) v.dispatch(c.VIEW_RECEIVE_TEAM_MATCH, t);
                    else {
                        var i = "组队失败，请稍后再试";
                        if (t.error_code) switch (t.error_code) {
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_USER_NOT_IN_TEAM:
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_USER_DRNODE_NOT_FOUND:
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_TEAMID_NOT_FOUNDED:
                                i = "您的队伍已经解散了", s.SelectGame.resetTeamData();
                                break;
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_MEMBER_NOT_READY:
                                this.checkTeamMeatch(t);
                                break;
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_TOO_MUCH_MONEY:
                            case l.TEAM_ERROR_CODE.SINGLE_MATCH_TOO_MUCH_MONEY:
                                i = "资产超过限制~";
                                break;
                            case l.TEAM_ERROR_CODE.TEAM_MATCH_NOT_ENOUGH_MONEY:
                            case l.TEAM_ERROR_CODE.SINGLE_MATCH_NOT_ENOUGH_MONEY:
                                i = "资产不足~"
                        }
                        v.dispatch(c.SYS_TOAST_TIP, {
                            content: i
                        }), this.detailExitGame(!1)
                    }
                }, T.onPushUserInfo = function(e, t) {
                    console.log("服务器推送用户资产变化", t)
                }, T.onRefreshBankruptCount = function(e, t) {
                    s.Desk && s.Desk.checkBankruptCount()
                }, T.checkTeamMeatch = function(e) {}, T.onLoginGameDesk = function() {}, T.stopcheckLoginCheckTimeOut = function(e) {
                    this.stopScheduler(this._handlerTimeOutLoginGame), this._handlerTimeOutLoginGame = null
                }, T.loginRoomOutTime = function(e) {
                    if (this._handlerTimeOutLoginGame) {
                        if (this.print("请求登录超时" + this._sendLoginCurrowNum), this.stopcheckLoginCheckTimeOut(), this._sendLoginCurrowNum >= this._sendLoginMaxCount - 1) {
                            if (this.print("Error:超出登录的最大次数 直接退出游戏场景"), v.dispatch(c.SYS_CLOSE_NETLOADING), v.dispatch(c.SYS_UPDATE_HEART_TIME, 1e4), s.SelectGame.intoGameData.TableID <= 0) return v.dispatch(c.SYS_TOAST_TIP, {
                                content: o.hall_goto_game_out_time
                            }), void this.detailExitGame();
                            v.dispatch(c.SYS_TOAST_TIP, {
                                content: o.hall_goto_game_dismiss
                            }), this.resetIntoGameDataToLogin()
                        }
                        1 != s.User.LoginRoomState && this.reqEnterGameLogin()
                    }
                }, T.receiveLoginRoomSuccess = function(e, t) {
                    var i, n, a, o = this;
                    void 0 === t && (t = null), console.log("房间登录成功==>", t), v.dispatch(c.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN), this._isChangeTable = !1, this._isReconnecting = null == (i = t) ? void 0 : i.isReconnect, this.updateRoomStates(l.GameRoomState.STATUS_NORMAL), console.log("房间登录成功==>  this._isChangeTable=false"), v.dispatch(c.SYS_CLOSE_NETLOADING), this._sendLoginCurrowNum = 0, s.User.LoginRoomState = !0, this._halfwayExitRoomData = null, s.SelectGame.isInPrivateRoom() && v.dispatch(c.NET_REQ_PRIVATE_ROOM_CONFIG), this._deskCache && (this._deskCache.canExitGame = !0), null != (n = s.Desk) && n.setRoomChangeLevelInfo && (null == (a = s.Desk) || a.setRoomChangeLevelInfo({})), v.dispatch(c.NOTIFY_ROOM_LOGIN, {
                        tag: "loginSucc"
                    }), this._isReqReady && this.addSchedulerOnce(.1, (function() {
                        o.reqPlayerReady()
                    })), E.set(u.USER_CHARM_INFO, "");
                    var r = s.User.getGamePlayRecordByKey(this._intoGameData.GameID, l.UserGameRecodeKey.Charm) || 0,
                        d = {};
                    d[s.User.getUserMid()] = r, E.set(u.USER_CHARM_INFO, d)
                }, T.receiveReConnectSuccess = function(e, t, i) {
                    var n;
                    if (void 0 === t && (t = null), void 0 === i && (i = null), this.dump(t, "房间重连成功==>"), v.dispatch(c.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN), i && i.level && s.SelectGame.updateIntoGameLevel(i.level), this._isReconnecting = !1, this._isReqReady = !1, s.PrivateData.setPrivateRoundFinish(!1), s.PrivateData.setHasDismiss(!1), null != t && null != t.players) {
                        var a = t.players.filter((function(e) {
                            return e.userId === s.User.getUserMid()
                        }));
                        null != a && a[0] && !r.table_isEmpty(a[0].handCards) && this.onGamePlaying()
                    }
                    v.dispatch(c.SYS_CLOSE_NETLOADING);
                    var l, u = R.instance.getReconnectDuration();
                    u && u > 5 && v.dispatch(c.SYS_TOAST_TIP, {
                        content: o.login_reconnect_success
                    }), this._sendLoginCurrowNum = 0, s.User.LoginRoomState = !0, this._halfwayExitRoomData = null, s.SelectGame.isInPrivateRoom() && v.dispatch(c.NET_REQ_PRIVATE_ROOM_CONFIG), this._deskCache && (this._deskCache.canExitGame = !0, this._deskCache.MoneyTypeID = this._sendLoginData.propertyId), null != (n = s.Desk) && n.onReceiveServerGameStart && (null == (l = s.Desk) || l.onReceiveServerGameStart())
                }, T.receiveLoginRoomFail = function(e, t) {
                    var i = this;
                    if (void 0 === t && (t = null), this.dump(t, "游戏房间登录失败==>" + this._sendLoginCurrowNum), this.updateRoomStates(l.GameRoomState.STATUS_NORMAL), s.User.LoginRoomState = !1, this._isReconnecting = !1, 9 == t.errorType && (this._sendLoginCurrowNum = this._sendLoginMaxCount, this._deskCache.canExitGame = !0), this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
                        v.dispatch(c.SYS_CLOSE_NETLOADING), this._deskCache.canExitGame = !0;
                        var n = "";
                        if (2 == t.errorType) s.SelectGame.isInPrivateRoom() && (n = "您前往的约牌房已满座，无法成功加入");
                        else if (n = "登录房间失败", r.string_isEmpty(t.errorMsg))
                            if (3 == t.errorType) n = "您的资产没达到房间最低金额";
                            else if (4 == t.errorType) n = "您的资产超过了房间最高金额";
                        else if (5 == t.errorType);
                        else if (6 == t.errorType) n = s.SelectGame.isInPrivateRoom() ? "您前往的好友房已解散，无法成功加入" : "登录房间失败";
                        else {
                            if (9 == t.errorType) return n = "该场次还有牌局未结束，请等待结束后再进入！", v.dispatch(c.SYS_TOAST_TIP, {
                                content: n
                            }), this.stopcheckLoginCheckTimeOut(), this.StopCountTime(), void this.detailExitGame();
                            10 == t.errorType ? n = "您的账号或密码出现异常，请重新登录" : 11 == t.errorType ? n = "你被房主踢出去了两次，不能再进入该房间" : 12 == t.errorType ? n = "房间已经解散" : 13 == t.errorType && (n = "房间已满")
                        } else n = t.errorMsg;
                        r.string_isEmpty(n) || v.dispatch(c.SYS_TOAST_TIP, {
                            content: n
                        })
                    }
                    this.addSchedulerOnce(1, (function() {
                        i.resetIntoGameDataToLogin(), i.reqEnterGameLogin()
                    }))
                }, T.receiveRoomInfo = function(e, t) {
                    void 0 === t && (t = null), this._deskCache.updateRoomInfo(t), this.dump(this._deskCache.getRoomInfo(), "下发房间信息==>")
                }, T.receiveReadyInfo = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "server通知准备相关信息==>"), t && this._deskCache && (this._deskCache.readyTime = t.readyTime)
                }, T.reqPlayerReady = function(e) {
                    if (1 == s.User.LoginRoomState) {
                        this._isReqReady = !1;
                        var t = {
                            cmd: C.USER_READY_REQUEST,
                            body: null
                        };
                        v.dispatch(c.NET_SEND_MSG, t)
                    } else this.reqEnterGameLogin()
                }, T.receivePlayerReady = function(e, t) {
                    void 0 === t && (t = null), t && t.userId == s.User.getUserMid() && this._deskCache && this.updateRoomStates(l.GameRoomState.STATUS_READED)
                }, T.receivePlayerInto = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "广播:玩家进入==>"), v.dispatch(c.VOICE_NOTIFY_PLAYER_CHANGE, "join")
                }, T.receivePlayerLogOut = function(e, t) {
                    v.dispatch(c.VOICE_NOTIFY_PLAYER_CHANGE, "exit")
                }, T.receiveForceLogout = function(e, t) {
                    void 0 === t && (t = null), console.log("强制退出房间成功---receiveForceLogout==>", t), 0 == t.code ? (this.StopCountTime(), t.money >= 0 && s.User.updateUserMoneyByID(l.PropertyType.SILVER_COIN, t.money), this.onExitRoom(), S.getInstance().refreshProperty()) : 1 == t.code ? S.getInstance().showToast("正在对局中，不能中途退场哦！") : 2 == t.code && S.getInstance().showToast("游戏中，退出失败")
                }, T.receiveExitRoomSuccess = function(e, t) {
                    void 0 === t && (t = null);
                    var i = this.getRoomStates();
                    if (console.log("退出房间成功==>", t, s.User.LoginRoomState), null == i || i !== l.GameRoomState.STATUS_EXITSUCCESS) {
                        var n = !1;
                        null != this._dealyExitHandler && (n = !0), this._stopDealyHandler(), s.PrivateData.setPrivateRoundFinish(!0), this.resetIntoGameDataToLogin(), s.User.LoginRoomState = !1;
                        var a = !0;
                        if (this._deskCache && (this.updateRoomStates(l.GameRoomState.STATUS_EXITSUCCESS), this._deskCache.dumpPlayers(), this._deskCache.dumpPlayersReadyState(), a = this._deskCache.canExitGame, console.log("receiveExitRoomSuccess--------", a)), v.dispatch(c.GAME_LOGOUT), s.SelectGame.isInPrivateRoom()) this.detailExitGame(!1);
                        else if (s.SelectGame.curRoomIsTeamMode() && a) this.detailExitGame(!1);
                        else {
                            if (this._isChangeTable) return console.log("receiveExitRoomSuccess------this._isChangeTable=false--", this._isChangeTable), this.reqEnterGameLogin(null, {
                                changeTableType: 1
                            }), void(this._isChangeTable = !1);
                            a && n ? this.detailExitGame(!1) : console.log("receiveExitRoomSuccess--------没有退出房间")
                        }
                    }
                }, T.receiveStopPlaying = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "中途退出房间成功 强制结束游戏==>"), this._halfwayExitRoomData = t, this.updateRoomStates(l.GameRoomState.STATUS_EXITSUCCESS)
                }, T.reqTryLogOutInGame = function(e) {
                    var t = {
                        cmd: C.CLIENT_COMMAND_LOGOUT_IN_GAME,
                        body: null
                    };
                    v.dispatch(c.NET_SEND_MSG, t)
                }, T.reqLogOutInGame = function(e) {
                    var t;
                    this._checkCanExiRoom() && (null != (t = s.Desk) && t.isPlayIng() ? this.notifyExitGame() : (this.sendLogoutMsg(0), this.detailExitGame(!0)))
                }, T.sendLogoutMsg = function(e) {
                    void 0 === e && (e = 0), console.log("请求退出房间 发送0x1002"), this.resetIntoGameDataToLogin();
                    var t = {
                        cmd: C.ROOM_SEND_LOGOUT,
                        body: {
                            logoutFlag: e
                        }
                    };
                    this._deskCache && (this._deskCache.canExitGame = !0), v.dispatch(c.NET_SEND_MSG, t)
                }, T.reqLogOutInGameForce = function(e) {
                    var t = this;
                    if (0 == s.User.isLoginSuccesed() || 0 == s.User.LoginRoomState) return setTimeout((function() {
                        console.log("退出游戏场景，延迟0.5s发送退出消息"), t.sendLogoutMsg(0)
                    }), 500), void this.detailExitGame(!1);
                    this.reqLogOutInGame()
                }, T.respTryLogOutInGame = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "玩家请求中途退出游戏==>")
                }, T.receiveGameUserFace = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "有玩家发表情了==>")
                }, T.receiveGameUserChat = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "有玩家发聊天消息了==>")
                }, T.reqGamePlayerAI = function(e, t) {
                    t = r.number_valueOf(t, 0);
                    var i = {
                        cmd: C.CLIENT_COMMAND_REQUEST_AI,
                        body: {
                            ai: t
                        }
                    };
                    v.dispatch(c.NET_SEND_MSG, i)
                }, T.receiveGamePlayerAI = function(e, t) {}, T.receiveRoomLevelUp = function(e, t) {
                    var i;
                    void 0 === t && (t = null), this.dump(t, "广播:收到升降场信息==>"), null == (i = s.Desk) || i.updateLastIntoRoomData(t), this._intoGameData = s.SelectGame.intoGameData
                }, T.onReqLogOutInGame = function() {
                    this.sendLogoutMsg(0)
                }, T.onChangeLevelAndReady = function(e, t) {
                    var i, n;
                    if (null != (i = s.Desk) && i.setRoomChangeLevelInfo && (null == (n = s.Desk) || n.setRoomChangeLevelInfo({})), this.onUpdateLevel(), t && t.tag)
                        if (this._intoGameData = s.SelectGame.intoGameData, "up" == t.tag) S.getInstance().showToast("恭喜升级至更高级的场次", 3);
                        else {
                            if (!s.Desk.checkCurLevelMoney(t.param)) return console.log("您的资产不足，已掉落进入较低级场次！"), S.getInstance().showToast("您的资产不足"), void this.detailExitGame();
                            S.getInstance().showToast("您的资产不足，已掉落进入较低级场次！", 3)
                        } this.reqGameChangeTable(null, !0)
                }, T.reqGameChangeTable = function(e, t) {
                    if (void 0 === t && (t = !1), 1 == s.User.LoginRoomState)
                        if (t) {
                            this._isChangeTable = !0;
                            var i = {
                                cmd: C.ROOM_SEND_LOGOUT,
                                body: null
                            };
                            v.dispatch(c.NET_SEND_MSG, i)
                        } else {
                            var n = {
                                cmd: C.CLIENT_COMMAND_CHANGE_TABLE,
                                body: {}
                            };
                            v.dispatch(c.NET_SEND_MSG, n)
                        }
                    else this.reqEnterGameLogin()
                }, T.receiveChangeTableError = function(e, t) {
                    void 0 === t && (t = null), this.dump(t, "返回：换桌失败==>")
                }, T.updateCurGameState = function(e, t) {
                    void 0 === t && (t = null), this.updateRoomStates(e, t)
                }, T.updateRoomStates = function(e, t) {
                    var i;
                    if (void 0 === t && (t = null), this._deskCache && null != e) switch (this.print("房间状态改变>>>: 上一个:", this._deskCache.getRoomStates(), " 更新为:", e), null == (i = this._deskCache) || i.setRoomStates(e), this._deskCache.getRoomStates()) {
                        case l.GameRoomState.STATUS_NORMAL:
                            var n = !1;
                            this._intoGameData && r.number_valueOf(this._intoGameData.TableID) > 0 && (n = !0), this.startShowMathChing(n);
                            break;
                        case l.GameRoomState.STATUS_READY:
                            this.startShowReady(t);
                            break;
                        case l.GameRoomState.STATUS_START:
                            this.onNotifyGameStart();
                            break;
                        case l.GameRoomState.STATUS_EXITSUCCESS:
                            if (this.print("=======切换成结束状态:==="), !this._deskCache) return;
                            this.startShowExitSuccess()
                    }
                }, T.getRoomStates = function() {
                    var e;
                    return null == (e = this._deskCache) ? void 0 : e.getRoomStates()
                }, T.receiveRoomStateChange = function(e, t, i) {
                    void 0 === i && (i = null), this.updateRoomStates(t, i)
                }, T.receiveBankUpBack = function(e, t, i) {
                    this.dump(i, "破产结果通知:===>" + t)
                }, T.startShowMathChing = function(e) {}, T.startShowReady = function(e) {}, T.startShowExitSuccess = function(e) {}, T.onExitRoom = function() {
                    s.SelectGame.clearPrivateInviteInfo(), v.dispatch(c.GAME_GOTO_EXIT)
                }, T.detailExitGame = function(e) {
                    var t = this;
                    void 0 === e && (e = !0), console.log("延迟退出游戏---detailExitGame-==>", e), this._checkCanExiRoom() && (e ? (this.StopCountTime(), this.stopAllScheduler(), this._stopDealyHandler(), this._dealyExitHandler = this.addScheduler(0, (function() {
                        t._stopDealyHandler(), t.StopCountTime(), t.stopAllScheduler(), 1 == t._gameValid && (t._sendLoginCurrowNum = 0, t.onExitRoom())
                    }))) : 1 == this._gameValid && (this.StopCountTime(), this._stopDealyHandler(), this._sendLoginCurrowNum = 0, this.onExitRoom()))
                }, T.notifyExitGame = function() {
                    var e = this,
                        t = s.SelectGame.getCurRoomInfo(),
                        i = r.nullToDefault(null == t ? void 0 : t.force_quit_tax, 0);
                    if (t && i > 0) {
                        var n = {
                            txt_desc: "现在退出，牌局将由笨笨的机器人接手！\n同时需要扣除您" + i + "银币作为惩罚！\n确定要退出牌桌吗？\n\n(资产不足，退出将扣除您的全部资产)",
                            alignLeftTop: !1,
                            notshowClose: !0,
                            buttonsMap: [{
                                label: l.BtnConf.Label_Confirm,
                                can_click: !0,
                                click: function() {
                                    e.reqGamePlayerAI(null, 1), e.sendLogoutMsg(1)
                                }
                            }, {
                                label: l.BtnConf.Label_Cancel,
                                click: function() {}
                            }],
                            title: ""
                        };
                        S.getInstance().showCommonDialog(n)
                    } else S.getInstance().showToast("正在对局中，不能中途退场哦！")
                }, T.StartCountTime = function(e, t, i, n, a) {
                    if (void 0 === a && (a = !1), e) {
                        a && this.StopCountTime();
                        var o = this._handlerCountTimeMap.get(e);
                        o || (o = new p), o.EndTime = 0, o.StartTime = t, o.UpdateCallback = i, o.StopCallback = n, o.CallbackParam = e, this._handlerCountTimeMap.set(e, o), o.Start()
                    }
                }, T.StopCountTime = function(e) {
                    if (void 0 === e && (e = null), e) {
                        var t = this._handlerCountTimeMap.get(e);
                        t && t.Stop()
                    } else this._handlerCountTimeMap.forEach((function(e) {
                        e.Stop()
                    }))
                }, T.CheckCountTimeState = function(e) {
                    if (!e) return !1;
                    var t = this._handlerCountTimeMap.get(e);
                    return !!t && t.isStart()
                }, T.showBankUpView = function(e) {
                    s.SelectGame.isInMatchRoom(), s.SelectGame.isInPrivateRoom()
                }, T.clear = function() {
                    e.prototype.clear.call(this), this._gameValid = !1, this._deskCache = null, this._stopDealyHandler(), s.PrivateData.setPrivateRoundFinish(!0), s.PrivateData.setHasDismiss(!1), s.PrivateData.clearGameCache(), s.User.LoginRoomState = !1, s.SelectGame.isInMatchRoom() && A.getInstance().onClearGameCache()
                }, T._checkCanExiRoom = function() {
                    return this._checkPrivareRoomExit()
                }, T.isFullUser = function() {
                    return !0
                }, T._isMaster = function() {
                    var e = s.User.getUserMid(),
                        t = s.PrivateData.getPrivateRoomMasterInfo();
                    return null != t && t.userId == e
                }, T._checkPrivareRoomExit = function() {
                    if (s.SelectGame.isInPrivateRoom()) {
                        var e = s.PrivateData.getPrivateRoomTableConfig();
                        if (r.isNotNull(e) && 1 == e.dismissFlag) {
                            var t;
                            if (console.log("private---检查是否可以退出游戏：", s.PrivateData.getPrivateRoundFinish()), s.PrivateData.getPrivateRoundFinish()) return !(null != (t = s.Desk) && t.isPlayIng() && s.User.LoginRoomState && this.isFullUser() && (I.getInstance().onOpenView("", _.PrivateDismissConfirmPrefab, null, null, null, !0), 1));
                            if (this.print("private------校验解散房间", s.User.LoginRoomState, this.isFullUser()), s.User.LoginRoomState && this.isFullUser()) return I.getInstance().onOpenView("", _.PrivateDismissConfirmPrefab, null, null, null, !0), !1
                        }
                    }
                    return !0
                }, T.onPrivateSettlePlayerAgain = function(e) {
                    this._isMaster() ? this.reqPlayerAgain() : this.reqPlayerReady()
                }, T.reqPlayerAgain = function(e) {
                    if (s.PrivateData.setPrivateRoomSettleInfo(), 1 == s.User.LoginRoomState) {
                        var t = {
                            cmd: C.CLIENT_COMMAND_JIFEN_ROOM_CONTINUE_PLAY,
                            body: {}
                        };
                        v.dispatch(c.NET_SEND_MSG, t)
                    } else this.reqEnterGameLogin()
                }, T.onPrivateRoomTableKey = function(e, t) {
                    null != t && null != t.tableKey && s.PrivateData.updatePrivateRoomTableKey(t.tableKey)
                }, T.notifyPrivateRoomChangeSeat = function(e, t) {}, T.broadcastPrivateRoomChangeSeatResult = function(e, t) {}, T.broadcastPrivateRoomSettle = function(e, t) {}, T._privateIsFinish = function() {
                    s.PrivateData.setPrivateRoundFinish(!0), s.PrivateData.setHasDismiss(!0), v.dispatch(c.NOTIFY_DISMISS_GAME)
                }, T.onDismissGame = function(e, t) {
                    v.dispatch(c.SYS_TOAST_TIP, {
                        content: "房间解散成功"
                    }), this._privateIsFinish()
                }, T.onDismissGameOld = function(e, t) {
                    console.log("私人房解散广播：", t), this._privateIsFinish();
                    var i = t.status;
                    if (null != i) {
                        var n = "房间已解散";
                        1 == i ? n = "房间长时间无操作，游戏已自动解散" : 2 == i ? n = "裁判已经解散游戏" : 3 == i && (n = "服务器更新，本局自动结算。请稍后重新创建");
                        var a = h.JsonDecode(t.ext);
                        r.table_isEmpty(a) && !r.string_isEmpty(a.reason) && (n = a.reason), v.dispatch(c.SYS_TOAST_TIP, {
                            content: n
                        })
                    }
                }, T.onPrivateRoomOnlineStatu = function(e, t) {
                    v.dispatch(c.ROOM_ONLINE_STATU, t)
                }, T.onPrivateNextRound = function() {
                    s.PrivateData.setPrivateRoomSettleInfo(), s.PrivateData.setHasDismiss(!1), s.PrivateData.resetPrivateRounds()
                }, T.onUpdateModuleGift = function(e, t) {
                    "bankruptGift" == (null == t ? void 0 : t.module) ? this.checkBankruptGift() && this.onShowBankruptGift(): "RoolLevelGift" == (null == t ? void 0 : t.module) && (t.isSuccess ? this.onShowGameLevelDownGift(t.reqData) : S.getInstance().showToast(o.hall_goto_game_money_not_enough))
                }, T.getCurLevelId = function() {
                    var e = r.number_valueOf(this._deskCache.getCurLevelID());
                    if (0 == e) {
                        var t = s.SelectGame.getCurRoomInfo();
                        e = null == t ? void 0 : t.level
                    }
                    return e
                }, T.getCurGameId = function() {
                    return s.SelectGame.getCurGameId()
                }, T.checkBankruptGift = function() {
                    var e = P.getBankruptGifts(s.SelectGame.getCurGameId(), this.getCurLevelId());
                    return console.log("checkBankruptGift破产礼包配置=", e), !r.table_isEmpty(e)
                }, T.onGameOverCheckBankrupt = function() {
                    s.SelectGame.isNormalRoom() && s.BankrupData.isMineBankrupt() && this.onShowBankruptGift()
                }, T.onBroadUseProps = function(e, t) {
                    console.log("广播互动道具使用结果：", t), s.SelectGame.updateUsePops(t)
                }, T.onReqLoseAdConfig = function(e, t) {
                    var i = s.SelectGame.getCurRoomInfo();
                    if (i) {
                        var n = i.level,
                            o = s.SelectGame.getBestLevelByLevel(s.SelectGame.getCurGameId(), i.tab_id, n),
                            r = {
                                cmd: y.PHP_AD_GETLOSEAD,
                                body: {
                                    appid: a.PlatFormAppID,
                                    game_id: s.SelectGame.getCurGameId(),
                                    play_mode: i.play_mode,
                                    base_chip_type: o.base_chip_type,
                                    group_level: n,
                                    outcome: t.outcome,
                                    outcomeNum: Math.abs(t.outcomeNum)
                                }
                            };
                        v.dispatch(c.NET_SEND_MSG, r)
                    }
                }, T.reqGetADWard = function(e, t) {
                    var i = {};
                    t = r.table_verify(t);
                    var n = s.SelectGame.getCurRoomInfo();
                    if (n) {
                        var o = n.level,
                            l = s.SelectGame.getBestLevelByLevel(s.SelectGame.getCurGameId(), n.tab_id, o);
                        i = {
                            appid: a.PlatFormAppID,
                            game_id: s.SelectGame.getCurGameId(),
                            play_mode: n.play_mode,
                            base_chip_type: l.base_chip_type,
                            group_level: o,
                            num: t.num,
                            name: t.name,
                            reciveType: 1 == t.isFirst ? 2 : 1
                        }
                    }
                    var u = {
                        cmd: y.PHP_AD_RECIVEAWARD,
                        body: i
                    };
                    v.dispatch(c.NET_SEND_MSG, u)
                }, T.onGetPlayerOpenIds = function(e, t) {
                    return new Map
                }, T.onUserLevelExpChange = function(e, t) {
                    this.openLevelExpChangeView(t)
                }, T.openLevelExpChangeView = function(e) {
                    var t = this;
                    g.load(d.Prefab_LevelSystemUp.bundle, d.Prefab_LevelSystemUp.path, (function(i, a) {
                        if (!i) {
                            var o = n(a);
                            m.guide.addChild(o);
                            var r = {
                                type: l.ACTIVITY_EVEVT_TYPE.LEVELSYSTEM,
                                data: e
                            };
                            t.addSchedulerOnce(.1, (function() {
                                v.dispatch(c.EVENT_UPDATE_ACTIVITY_DATA, r)
                            }))
                        }
                    }))
                }, i
            }(T))._instance = null, i._RF.pop()
        }
    }
}))