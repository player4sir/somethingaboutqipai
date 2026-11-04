System.register("chunks:///_virtual/FXJController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./EventManager.ts", "./AppControler.ts", "./PopupController.ts", "./RoomController.ts", "./GSocket.ts", "./BankerMgr.ts", "./OperationResultMgr.ts", "./PlayerMgr.ts", "./Room.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJCmd.ts", "./FXJWriteAndRead.ts", "./CardUtil.ts", "./FXJConfig.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./FXJObserver.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GameSettleConfig.ts", "./ChatServer.ts", "./RoundServer.ts", "./SettleServer.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            l = e.GConstants
        }, function(e) {
            u = e.UIID
        }, function(e) {
            d = e.Encrypt
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            h = e.AppControler
        }, function(e) {
            p = e.PopupController
        }, function(e) {
            f = e.RoomController
        }, function(e) {
            _ = e.GSocket
        }, function(e) {
            g = e.BankerMgr
        }, function(e) {
            m = e.OperationResultMgr
        }, function(e) {
            C = e.PlayerMgr
        }, function(e) {
            I = e.Room
        }, function(e) {
            A = e.RoomMgr, E = e.ROOM_DATA_TYPE
        }, function(e) {
            v = e.SettleMgr, y = e.SettleTypeConfig
        }, function(e) {
            S = e.FXJCmdHead
        }, function(e) {
            P = e.FXJWriteAndRead
        }, function(e) {
            T = e.CardUtil
        }, function(e) {
            G = e.OPCode
        }, function(e) {
            O = e.FXJConstant
        }, function(e) {
            R = e.FXJEvent
        }, function(e) {
            N = e.FXJObserver
        }, function(e) {
            b = e.FXJUIID
        }, function(e) {
            D = e.GameSound
        }, function(e) {
            L = e.GameEvent
        }, function(e) {
            M = e.GameRuleConfig
        }, function(e) {
            U = e.GameSettleConfig
        }, function(e) {
            w = e.ChatServer
        }, function(e) {
            B = e.RoundServer
        }, function(e) {
            H = e.SettleServer
        }],
        execute: function() {
            var F;
            i._RF.push({}, "cac59TzRsRFB6HeEdgLHfe2", "FXJController", void 0);
            var k = e("TurnMeOpMap", ((F = {})[G.OPE_PASS] = !0, F[G.OPE_TING] = 5001, F[G.OPE_JIA_TING] = 5002, F[G.OPE_MING_LOU] = 5003, F[G.OPE_MING_LV] = 5012, F[G.OPE_XIAO_SA_TING] = 5016, F[G.OPE_DI_TING] = 5004, F[G.OPE_RIGHT_CHI_TING] = 5005, F[G.OPE_MIDDLE_CHI_TING] = 5006, F[G.OPE_LEFT_CHI_TING] = 5007, F[G.OPE_PENG_TING] = 5008, F[G.OPE_BAO_JIAO] = 5011, F[G.OPE_13_TING] = 5018, F[G.OPE_SHANG_TING] = 5013, F[G.OPE_CHEN] = 5014, F[G.OPE_FAKE_TING] = 5015, F[G.OPE_KA_TING] = 5015, F[G.OPE_FENG_TING] = 5015, F[G.OPE_KOU_TING] = 5015, F));
            e("FXJController", function(e) {
                t(f, e), f.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new f("FXJController")), this._instance
                }, f.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, f.getInstance()
                };
                var i = f.prototype;

                function f(t) {
                    var n;
                    return (n = e.call(this, t) || this).RoundServer = null, n.SettleServer = null, n.ChatServer = null, n.fxjObserver = null, n
                }
                return i.clear = function() {
                    this.print("[ FXJController ]clear 清理 重置所有定时器"), this.__clearServerClass(), e.prototype.clear.call(this), C.getInstance().clear(), A.getInstance().clear(), m.getInstance().clear(), v.getInstance().clear(), g.getInstance().clear(), f._instance = null
                }, i.onInit = function() {
                    e.prototype.onInit.call(this), P.getInstance().initPB(), P.getInstance().initCMDMapping()
                }, i.onViewLoad = function(t) {
                    void 0 === t && (t = null), r.setDesk(I), this._deskCache = r.Desk, this.fxjObserver = new N, C.getInstance().addObserver(this.fxjObserver), A.getInstance().addObserver(this.fxjObserver), this.__initModuleEvent(), this.__initServerClass(), e.prototype.onViewLoad.call(this, t)
                }, i.__initServerClass = function() {
                    this.__clearServerClass(), this.RoundServer = new B, this.SettleServer = new H, this.ChatServer = new w
                }, i.__clearServerClass = function() {
                    this.RoundServer && this.RoundServer.clear(), this.SettleServer && this.SettleServer.clear(), this.ChatServer && this.ChatServer.clear()
                }, i.__initModuleEvent = function() {
                    this.addModelListener(R.BROADCAST_DING_ZHUANG, this.broadcastDingZhuang), this.addModelListener(R.SERVER_BROADCAST_PLAYER_LOGIN, this.serverBroadcastPlayerLogin), this.addModelListener(R.BROADCAST_FOURCE_EXIT_ROOM, this.fourceExitRoom), this.addModelListener(R.BROADCAST_LUA_ERROR, this.broadcastServerError), this.addModelListener(R.BROADCAST_GRAB_CARD, this.broadcastGrabCard), this.addModelListener(R.BROADCAST_DINGQUE_OPTIONS, this.broadcastDingQueOptions), this.addModelListener(R.BROADCAST_USER_PIAO_GANG, this.broadcastUserPiaoGang), this.addModelListener(R.BROADCAST_PAOQIAN_OPTIONS, this.broadcastPaoQianOptions), this.addModelListener(R.BROADCAST_ONE_DINGQUE_RESULT, this.broadcastOneDingqueResult), this.addModelListener(R.BROADCAST_ALL_DINGQUE_RESULT, this.broadcastAllDingqueResult), this.addModelListener(R.BROADCAST_SHUAIQIANG_RESULT, this.broadcastAllShuaiQiangResult), this.addModelListener(R.BROADCAST_CHAQUE_RESULT, this.broadcastChaqueResult), this.addModelListener(R.BROADCAST_MAIDUANMEN_USER, this.broadcastMaiDuanMenUser), this.addModelListener(R.BROADCAST_MAIDUANMEN_RESULT, this.broadcastMaiDuanMenResult), this.addModelListener(R.BROADCAST_FEN_ZHANG, this.broadcastFenZhang), this.addModelListener(R.BROADCAST_UPDATE_FAN_GANG_PAI, this.broadcastUpdateFanGangPai), this.addModelListener(R.BROADCAST_SELECT_FAN_GANG_PAI, this.broadcastSelectFanGangPai), this.addModelListener(R.BROADCAST_UPDATE_USER_PAO_CARD, this.broadcastUpdateUserPaoCard), this.addModelListener(R.BROADCAST_DEAL_CARD, this.broadcastDealCard), this.addModelListener(R.BROADCAST_USER_OPERATION_RESULT, this.broadcastUserOperationResult), this.addModelListener(R.BROADCAST_USER_OPERATION, this.broadcastUserOperation), this.addModelListener(R.BROADCAST_DING_FENG, this.broadcastDingFeng), this.addModelListener(R.BROADCAST_ZHI_TOU, this.broadcastZhiTou), this.addModelListener(R.BROADCAST_DOUBLE_CARDS, this.broadcastDoubleCards), this.addModelListener(R.BROADCAST_REWARD_CARDS, this.broadcastRewardCards), this.addModelListener(R.BROADCAST_PLAYING_JI_TYPE, this.broadcastPlayingJiType), this.addModelListener(R.BROADCAST_ZHUO_JI, this.broadcastZhuoJi), this.addModelListener(R.BROADCAST_SETTLE, this.broadcastSettleItem), this.addModelListener(R.BROADCAST_HANDCARDS, this.broadcastHandCards), this.addModelListener(R.BROADCAST_BANKER_FIRST_OPERATION, this.broadcastBankerFirstOperation), this.addModelListener(R.BROADCAST_UPDATE_PLAYER_MONEY, this.broadcastUpdatePlayerMoney), this.addModelListener(R.BROADCAST_GANG_OPERATION_RESULT, this.broadcastGameOperationResult), this.addModelListener(R.BROADCAST_DING_LAIZI, this.broadcastDingLaizi), this.addModelListener(R.EVEMT_USER_GIVE_UP, this.sendGiveUpOption), this.addModelListener(R.BROADCAST_TO_WAIT_USER_GIVE_UP, this.broadcastToWaitUserGiveUp), this.addModelListener(R.BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.broadcastToWaitUserGiveUpResult), this.addModelListener(R.BROADCAST_XIAZHU_OPTIONS, this.broadcastXiazhuOptions), this.addModelListener(R.BROADCAST_XIAZHU_RESULT, this.broadcastXiazhuResult), this.addModelListener(R.BROADCAST_BU_HUA_PAI, this.broadcastBuHuaPai), this.addModelListener(R.BROADCAST_GEN_ZHUANG_SUCC, this.broadcastGenZhuangSucc), this.addModelListener(R.BROADCAST_GAME_OVER, this.broadcastGameOver), this.addModelListener(R.BROADCAST_GAME_START, this.broadcastGameStart), this.addModelListener(R.BROADCAST_FAN_GANG_PAI, this.broadcastFanGangPai), this.addModelListener(R.BROADCAST_WAIT_HINT, this.broadcastWaitHint), this.addModelListener(R.BROADCAST_DITING_START, this.broadcastDiTingStart), this.addModelListener(R.BROADCAST_DITING_END, this.broadcastDiTingEnd), this.addModelListener(L.SEND_CHOSE_GROUPS, this.sendPlayerGroupsOpration), this.addModelListener(L.SEND_PLAYER_OPERATION, this.sendPlayerOpration), this.addModelListener(L.NEXT_GAME_OPERATION, this.onNextGameOperation), this.addModelListener(L.SEND_DINGQ_OPERATION, this.onDingQueOperation), this.addModelListener(L.EXITS_SETTLE_VIEW, this.exitsSettleView), this.addModelListener(L.SHOW_SETTLE_VIEW, this.onShowSettleView), this.addModelListener(s.LADDER_SCORE_CHANGE, this.updatePlayerLadderInfo, 1), this.addModelListener(s.LEVEL_SCORE_CHANGE, this.updatePlayerLevelInfo, 1), this.addModelListener(s.NOTIFY_CHANGETABLE_READY, this.onChangeTable), this.addModelListener(R.BROADCAST_HUAN_SAN_ZHANG, this.onStartHuanSanZhang), this.addModelListener(R.BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOnetHuanSanZhang), this.addModelListener(R.BROADCAST_ALL_HUAN_SAN_ZHANG, this.onAllHuanSanZhang), this.addModelListener(L.SEND_GAME_OPERATION, this.onSendGameOperation), this.addModelListener(L.NET_USER_MAIDUANMEN_OPERATION, this.onSendMaiDuanMen), this.addModelListener(R.BROADCAST_JI_QIANG_RESULT, this.onBroadJiQiangResult), this.addModelListener(s.USER_UPDATE_PROPERTY, this.onRefreshPropty), this.addModelListener(s.USER_HAS_READY, this.onUserHasReady)
                }, i.onUpdateLanguage = function() {
                    D.getInstance().initCurLang()
                }, i.updatePlayerLadderInfo = function(e, t) {
                    for (var n = [], i = 0; i < t.length; i++) {
                        var a = t[i];
                        n.push({
                            uid: a.mid,
                            ladderScore: a.WinPoint,
                            ladderScoreChange: a.Change
                        })
                    }
                    C.getInstance().updatePlayersLadderInfo(n), v.getInstance().updatePlayersLadderInfo(n)
                }, i.updatePlayerLevelInfo = function(e, t) {
                    var n = [];
                    if (!o.table_isEmpty(t))
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i];
                            n.push({
                                uid: a.mid,
                                levelSystemScore: a.expr
                            })
                        }
                    C.getInstance().updatePlayersLevelInfo(n)
                }, i.onShowSettleView = function() {
                    r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom() || this._delayShowSettleView()
                }, i._delayShowSettleView = function(e, t, n) {
                    var i = this;
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = .5), this.addSchedulerOnce(n, (function() {
                        i.showSettleView(e), t && t()
                    }))
                }, i.showSettleView = function(e) {
                    if (void 0 === e && (e = null), r.SelectGame.isInPrivateRoom() || !a.deviceInfo.ladderFeature) v.getInstance().daPaixing && v.getInstance().daPaixing[A.getInstance().mySeatId] ? (v.getInstance().setSetleViewData({
                        tag: "showSettleView",
                        data: e,
                        viewId: b.GameSettleDaPaixingPrefab
                    }), c.dispatch(L.BROADCAST_OPEN_SETTLE_VIEW, {
                        tag: "showSettleView"
                    })) : (v.getInstance().setSetleViewData({
                        tag: "showSettleView",
                        data: e,
                        viewId: b.GameSettlePrefab
                    }), c.dispatch(L.BROADCAST_OPEN_SETTLE_VIEW, {
                        tag: "showSettleView"
                    }));
                    else {
                        var t, n = C.getInstance().getMyPlayerInfo();
                        "number" == typeof(null == n || null == (t = n.gameUserInfo) ? void 0 : t.ladderScore) && (v.getInstance().daPaixing && v.getInstance().daPaixing[A.getInstance().mySeatId] ? (v.getInstance().setSetleViewData({
                            tag: "showSettleView",
                            data: e,
                            viewId: b.GameSettleDaPaixingPrefab
                        }), c.dispatch(L.BROADCAST_OPEN_SETTLE_VIEW, {
                            tag: "showSettleView"
                        })) : (v.getInstance().setSetleViewData({
                            tag: "showSettleView",
                            data: e,
                            viewId: b.GameSettlePrefab
                        }), c.dispatch(L.BROADCAST_OPEN_SETTLE_VIEW, {
                            tag: "showSettleView"
                        })))
                    }
                    this.onGameHasOver()
                }, i.exitsSettleView = function(e, t) {
                    if (void 0 === t && (t = null), r.SelectGame.isInPrivateRoom()) {
                        if (o.isNull(t)) return;
                        2 == t.state && p.getInstance().onOpenView("", u.GamePrivateSettlePrefab, t, {})
                    }
                }, i.broadcastServerError = function(e, t) {
                    console.log("服务器异常，", t), c.dispatch(s.REPORT_CLICK_EVENT, {
                        eventID: "errorId",
                        isFouce: !0,
                        body: {
                            resp: t,
                            info: r.SelectGame.intoGameData,
                            tag: "svr"
                        }
                    }), this.fourceExitRoom()
                }, i.fourceExitRoom = function() {
                    this.sendLogoutMsg(0), this.detailExitGame(!1)
                }, i.broadcastGameOver = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:游戏结束==>"), this.onGameOver()
                }, i.onNextGameOperation = function(e, t) {
                    if (r.SelectGame.isInMatchRoom());
                    else if (r.SelectGame.isInPrivateRoom()) {
                        var n;
                        o.isNull(C.getInstance().getMyPlayerInfo()) || !r.User.LoginRoomState ? this.reqEnterGameLogin() : 0 == (null == (n = C.getInstance().getMyPlayerInfo()) ? void 0 : n.isReady) && this.reqPlayerReady()
                    } else o.isNull(C.getInstance().getMyPlayerInfo()) || !r.User.LoginRoomState ? (t && t.isSeqReady && (this._isReqReady = !0), this.reqEnterGameLogin()) : this.reqPlayerReady()
                }, i.onDingQueOperation = function(e, t) {
                    var n = {
                        cmd: S.C2S.USER_DINGQUE_REQUEST,
                        body: t
                    };
                    c.dispatch(R.NET_SEND_MSG, n)
                }, i.sendPlayerGroupsOpration = function(e, t) {
                    var n = {
                        cmd: S.C2S.USER_CHOSE_GROUPS,
                        body: t
                    };
                    c.dispatch(R.NET_SEND_MSG, n), r.Desk.turnMe = !0
                }, i.sendPlayerOpration = function(e, t) {
                    var n = {
                        cmd: S.C2S.USER_OPERATION_RESULT,
                        body: t
                    };
                    if (r.Desk.turnMe = k[t.opCode], c.dispatch(R.NET_SEND_MSG, n), t.opCode == G.OPE_CANCEL) {
                        var i = r.Desk.getUserOperation();
                        o.isNotNull(i) && (r.Desk.userOperation(i), c.dispatch(L.VIEW_USER_OPERATION, i))
                    }
                }, i.broadcastGameStart = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:游戏开始==>"), this.onNotifyGameStart(), C.getInstance().onGameStart(), r.PrivateData.updateCurRounds(), v.getInstance().onGameStart(), A.getInstance().setLaiziInfo(null), r.Desk.onGameStart(), C.getInstance().resetPlayerLadderInfo(), v.getInstance().clearPlayerList(), this.onGamePlaying(), c.dispatch(s.VIEW_BROADCAST_GAME_START, {}), c.dispatch(R.SYS_CHECK_PLAY_MUSIC)
                }, i.reqEnterGameLogin = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.reqEnterGameLogin.call(this, t, n)
                }, i.receiveReConnectSuccess = function(t, n) {
                    var i, a, o;
                    void 0 === t && (t = null), void 0 === n && (n = null);
                    var l = null == (i = n) || null == (a = i.roomInfo) || null == (o = a.roomCfg) ? void 0 : o.level;
                    r.Desk.onGameReconnect(), v.getInstance().onReconnect(), e.prototype.receiveReConnectSuccess.call(this, t, n, {
                        level: l
                    }), console.log("重连成功___________________________", n), r.Desk.reconnectionRoomUpdate(n), c.dispatch(L.ENTER_ROOM_UPDATE_PLAYER, {
                        isReconn: !0
                    }), c.dispatch(s.VIEW_BROADCAST_GAME_START, {
                        isReconn: !0
                    }), c.dispatch(L.VIEW_UPDATE_FAN_GANG_PAI), c.dispatch(s.NOTIFY_RECONNECT_SUCCESS)
                }, i.receiveLoginRoomSuccess = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), r.Desk.enterRoomUpdate(n), e.prototype.receiveLoginRoomSuccess.call(this, t, n), console.log("房间登录成功___________________________", n), c.dispatch(L.ENTER_ROOM_UPDATE_PLAYER)
                }, i.serverBroadcastPlayerLogin = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), console.log(n, "serverBroadcastPlayerLogin==>"), e.prototype.receivePlayerInto.call(this, t, n), C.getInstance().addPlayerList(n), c.dispatch(L.VIEW_BROADCAST_PLAYER_ENTER, n.userId)
                }, i.receivePlayerReady = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receivePlayerReady.call(this, t, n), console.log(n, "广播:玩家准备==>"), n && (C.getInstance().onReceivePlayerReady(n.userId), C.getInstance().updatePlayerReadyStatus(n.userId, 1), c.dispatch(L.VIEW_BROADCAST_PLAYER_READY, n.userId))
                }, i.broadcastFanGangPai = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "broadcastFanGangPai补杠==>"), c.dispatch(L.VIEW_UPDATE_BU_GANG_PAI, t)
                }, i.broadcastWaitHint = function(e, t) {
                    c.dispatch(L.VIEW_BROADCAST_WAIT_HINT, t)
                }, i.broadcastDiTingStart = function(e, t) {
                    void 0 === t && (t = null), r.Desk.turnMe || c.dispatch(L.VIEW_BROADCAST_WAIT_HINT, t)
                }, i.broadcastDiTingEnd = function(e, t) {
                    void 0 === t && (t = null), c.dispatch(L.CLOSE_OPRATION_INFO), c.dispatch(L.VIEW_BROADCAST_WAIT_HINT_OVER, t)
                }, i.receiveGamePlayerAI = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receiveGamePlayerAI.call(this, t, n), console.log(n, "有玩家托管了==>"), C.getInstance().updatePlayerAiStatus(n.mid, n.ai), c.dispatch(L.VIEW_PLAYER_AI_SHOW, n)
                }, i.receivePlayerLogOut = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), console.log(n, "广播:玩家退出==>"), e.prototype.receivePlayerLogOut.call(this, t, n);
                    var i, a = C.getInstance().findPlayerWithUserId(n.mid),
                        o = null;
                    null != a && null != a.gameUserInfo && (o = C.getInstance().getUserNick(a.gameUserInfo)), c.dispatch(L.VIEW_BROADCAST_PLAYER_EXIT, n.mid, {
                        nickName: o
                    }), n.mid != r.User.getUserMid() && (null != (i = r.Desk) && i.isPlayIng() || C.getInstance().deletePlayerLeave(n.mid))
                }, i.receiveExitRoomSuccess = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receiveExitRoomSuccess.call(this, t, n)
                }, i.broadcastZhiTou = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:掷投==>"), A.getInstance().rollDice = t, c.dispatch(L.VIEW_BROADCAST_ZHI_TOU, t)
                }, i.broadcastDingZhuang = function(e, t) {
                    console.log(t, "广播:定庄==>"), A.getInstance().setLaiziInfo(t), A.getInstance().bankSeatId = t.bankSeatId, c.dispatch(L.NET_BROADCAST_DING_ZHUANG, null == t ? void 0 : t.bankSeatId)
                }, i.broadcastGrabCard = function(e, t) {
                    console.log(t, "广播:抓牌==>"), r.Desk.gameGrabCard(t), c.dispatch(L.VIEW_BROADCAST_GRAB_CARD, t)
                }, i.broadcastDingQueOptions = function(e, t) {
                    console.log("广播:定缺==>", t), c.dispatch(L.VIEW_BROADCAST_DINGQUE_OPTIONS, t)
                }, i.broadcastOneDingqueResult = function(e, t) {
                    console.log("广播:定缺结果broadcastOneDingqueResult==>", t), c.dispatch(L.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, t)
                }, i.broadcastAllDingqueResult = function(e, t) {
                    var n;
                    console.log("广播:所有人的定缺结果broadcastAllDingqueResult==>", t), null == t || null == (n = t.queData) || n.forEach((function(e, t) {
                        A.getInstance().updateDingQue(e.seatId, e)
                    })), c.dispatch(L.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, t)
                }, i.broadcastUserPiaoGang = function(e, t) {
                    console.log(t, "广播:飘杠==>"), console.log("broadcastUserPiaoGang::::::::::::" + t)
                }, i.broadcastPaoQianOptions = function(e, t) {
                    console.log(t, "广播:飘缺选项==>"), console.log("broadcastPaoQianOptions::::::::::::" + t)
                }, i.broadcastAllShuaiQiangResult = function(e, t) {
                    console.log(t, "广播:摔枪结果：==>"), A.getInstance().setGameStateInfoByTag(E.SHUAIQIANG_RESULT, t)
                }, i.broadcastChaqueResult = function(e, t) {
                    console.log(t, "广播:broadcastChaqueResult==>"), console.log("broadcastChaqueResult::::::::::::" + t)
                }, i.onSendMaiDuanMen = function(e, t) {
                    var n = {
                        cmd: S.C2S.USER_MAIDUANMEN_REQUEST,
                        body: t
                    };
                    c.dispatch(R.NET_SEND_MSG, n)
                }, i.broadcastMaiDuanMenUser = function(e, t) {
                    console.log(t, "广播用户进行买断门操作:broadcastMaiDuanMenUser==>"), console.log("broadcastMaiDuanMenUser::::::::::::" + t), A.getInstance().setGameInfoByTag(E.MAI_DUAN_MEN_STATUS, t), c.dispatch(L.VIEW_BROADCAST_MAIDUANMEN_USER, t)
                }, i.broadcastMaiDuanMenResult = function(e, t) {
                    console.log(t, "广播买断门操作结果:broadcastMaiDuanMenResult==>"), A.getInstance().setGameInfoByTag(E.MAI_DUAN_MEN_STATUS, t), c.dispatch(L.VIEW_BROADCAST_MAIDUANMEN_RESULT, t)
                }, i.broadcastFenZhang = function(e, t) {
                    console.log(t, "广播分张:broadcastFenZhang==>");
                    var n = o.number_valueOf(A.getInstance().getRemainCardsCount(), 0);
                    A.getInstance().updateRemainCardsCount(Math.max(n - t.cards.length, 0));
                    var i = {
                        seatId: A.getInstance().mySeatId,
                        sprite: "fenzhang",
                        tag: "fenzhang"
                    };
                    c.dispatch(R.VIEW_DESK_ANI_PLAY, O.AnimNormal.picCommon, i), t.opGroups && t.opGroups.length > 0 && r.Desk.userOperation(t)
                }, i.broadcastUpdateFanGangPai = function(e, t) {
                    console.log(t, "广播:broadcastUpdateFanGangPai==>"), r.Desk.updateFanGangCards(t), c.dispatch(L.VIEW_UPDATE_FAN_GANG_PAI)
                }, i.broadcastSelectFanGangPai = function(e, t) {
                    console.log(t, "广播:broadcastSelectFanGangPai==>"), r.Desk.updateSelectFanGangCards(t), c.dispatch(L.VIEW_GET_BU_GANG_PAI)
                }, i.broadcastUpdateUserPaoCard = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:更新炮牌==>"), t && (r.Desk.updatePaoCards(t), c.dispatch(L.VIEW_UPDATE_USER_PAO_CARD))
                }, i.broadcastDealCard = function(e, t) {
                    console.log(t, "广播:分牌==>"), t ? (r.Desk.dealCardUpdate(t), this.updateRoomStates(l.GameRoomState.STATUS_PLAYING), c.dispatch(L.VIEW_BROADCAST_DEAL_CARD, t)) : _.instance.closeConnect({})
                }, i.broadcastUserOperationResult = function(e, t) {
                    console.log(t, "广播:broadcastUserOperationResult==>"), t ? (r.Desk.userOperationResult(t), c.dispatch(L.UPDATE_OPERATION_RESULT, t)) : _.instance.closeConnect({})
                }, i.broadcastUserOperation = function(e, t) {
                    console.log("广播:broadcastUserOperation==>", t), r.Desk.userOperation(t), c.dispatch(L.VIEW_USER_OPERATION, t)
                }, i.broadcastDingFeng = function(e, t) {
                    console.log(t, "广播:broadcastDingFeng==>")
                }, i.broadcastDoubleCards = function(e, t) {
                    console.log(t, "广播抽奖:broadcastDoubleCards==>"), c.dispatch(L.VIEW_BROADCAST_DOUBLE_CARDS, t)
                }, i.broadcastRewardCards = function(e, t) {
                    console.log(t, "广播:broadcastRewardCards==>")
                }, i.broadcastPlayingJiType = function(e, t) {
                    console.log(t, "广播:broadcastPlayingJiType==>"), c.dispatch(L.VIEW_BROADCAST_PLAYING_JI_TYPE, t)
                }, i.broadcastZhuoJi = function(e, t) {
                    console.log(t, "广播:broadcastZhuoJi==>"), t && t.fanCardData && t.fanCardData.card > 0 && (o.table_isEmpty(t.jiCardData) || t.jiCardData.sort((function(e, t) {
                        var n = e.settleType == U.SettleMoneyType.XingQiJi,
                            i = t.settleType == U.SettleMoneyType.XingQiJi;
                        return n && i ? 0 : n ? -1 : i ? 1 : 0
                    })), A.getInstance().setGameStateInfoByTag(E.ZHUO_JI_INFO, t), c.dispatch(L.VIEW_BROADCAST_ZHUO_JI, t))
                }, i.broadcastSettleItem = function(e, t) {
                    if (console.log(t, "广播游戏结算:broadcastSettleItem==>"), (r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom()) && o.isNotNull(t) && o.isNotNull(t.settleModel) && o.isNotNull(t.settleModel.totalInfo)) {
                        var n = 0;
                        t.settleModel.totalInfo.forEach((function(e, t, i) {
                            e.turnMoney > n && (n = e.turnMoney)
                        })), t.settleModel.totalInfo.forEach((function(e, t, i) {
                            e.bWin = e.turnMoney == n ? 1 : -1
                        })), t.settleModel.totalInfo.length > 0 && null == t.settleModel.totalInfo[0].isYouJiao && o.isNotNull(t.settleModel.moneyItemList) && t.settleModel.moneyItemList.length > 0 && (t.settleType == y.HuangZhuang ? (t.settleModel.totalInfo.forEach((function(e, t, n) {
                            e.isYouJiao = 1
                        })), t.settleModel.moneyItemList.forEach((function(e, n, i) {
                            e.name && "cha_jiao" == e.name && e.p2pMoney && e.p2pMoney.forEach((function(e, n, i) {
                                e < 0 ? t.settleModel.totalInfo[n].isYouJiao = 1 : e > 0 && (t.settleModel.totalInfo[n].isYouJiao = 0)
                            }))
                        }))) : t.settleModel.totalInfo.forEach((function(e, t, n) {
                            e.isYouJiao = -1
                        })))
                    }
                    console.log("settle", t), v.getInstance().onReceiveSettleInfo(t), c.dispatch(R.SYS_CHECK_PLAY_MUSIC), r.SelectGame.isInMatchRoom() && t.isShowGameOver && c.dispatch(R.BROADCAST_MACTH_JIFEN)
                }, i.broadcastHandCards = function(e, t) {
                    console.log(t, "广播:摊开手牌==>"), C.getInstance().updateHandCards(t), v.getInstance().onShowHandCards(), c.dispatch(s.VIEW_BROADCAST_GAME_OVER, t), c.dispatch(L.VIEW_GAMEOVER_SHOW_HAND_CARD)
                }, i.broadcastBankerFirstOperation = function(e, t) {
                    console.log(t, "广播:broadcastBankerFirstOperation==>"), r.Desk.bankerFirstOperation(t), c.dispatch(L.VIEW_BROADCAST_OPERATION_START, t)
                }, i.broadcastUpdatePlayerMoney = function(e, t) {
                    t && (C.getInstance().updatePlayerMoney(t.moneys), C.getInstance().playerList.forEach((function(e) {
                        c.dispatch(L.USER_UPDATE_PROPERTY, e.userId)
                    })))
                }, i.broadcastGameOperationResult = function(e, t) {
                    console.log(t, "广播:玩家特殊杠操作产生的信息==>"), r.Desk.updateGangOperationResult(t), c.dispatch(L.VIEW_UPDATE_GANG_OPERATION_RESULT)
                }, i.broadcastDingLaizi = function(e, t) {
                    console.log(t, "广播:定癞子==>"), A.getInstance().setLaiziInfo(t), c.dispatch(L.VIEW_BROADCAST_DING_LAIZI)
                }, i.broadcastToWaitUserGiveUp = function(e, t) {
                    console.log(t, "广播:认输操作broadcastToWaitUserGiveUp==>"), c.dispatch(R.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, t)
                }, i.sendGiveUpOption = function(e, t) {
                    var n = {
                        cmd: S.C2S.USER_GIVE_UP_OPTION,
                        body: t
                    };
                    c.dispatch(R.NET_SEND_MSG, n)
                }, i.broadcastToWaitUserGiveUpResult = function(e, t) {
                    console.log(t, "广播:认输操作结果broadcastToWaitUserGiveUp==>"), 1 == (null == t ? void 0 : t.isGiveUp) && t.userId == r.User.getUserMid() && c.dispatch(s.GAME_ROOM_STATE_CHANGE, l.GameRoomState.STATUS_GAMEOVER), c.dispatch(R.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, t), 1 == t.isGiveUp && t.userId == r.User.getUserMid() && (this._deskCache && (this._deskCache.canExitGame = !1), this.updateRoomStates(l.GameRoomState.STATUS_GAMEOVER), r.Desk.onResetGameOptionInfo())
                }, i.broadcastXiazhuOptions = function(e, t) {
                    console.log(t, "广播:下注==>"), r.Desk.updateXiaZhuOptions(t), c.dispatch(L.VIEW_UPDATE_XIA_ZHU_OPTIONS, t)
                }, i.broadcastXiazhuResult = function(e, t) {
                    console.log(t, "广播:下注结果==>"), r.Desk.updateXiaZhuResult(t), c.dispatch(L.VIEW_UPDATE_XIA_ZHU_RESULT, t)
                }, i.broadcastBuHuaPai = function(e, t) {
                    console.log(t, "广播:补花牌==>"), r.Desk.updateHuaCards(t), c.dispatch(L.VIEW_UPDATE_BU_HUA_PAI, t)
                }, i.broadcastGenZhuangSucc = function(e, t) {
                    console.log(t, "广播跟庄成功:broadcastGenZhuangSucc==>"), c.dispatch(L.VIEW_BROADCAST_GEN_ZHUANG_SUCC, t)
                }, i.receiveGameUserFace = function(t, n) {
                    void 0 === n && (n = null), e.prototype.receiveGameUserFace.call(this), console.log(n, "有玩家发表情了==>"), c.dispatch(L.VIEW_PLAYER_EMOJ_SHOW, n), o.isNull(n.faceValue) || (n.index = n.faceValue - Math.pow(2, 16), c.dispatch(s.ROOM_VIEW_PLAYER_EMOJ_SHOW, n))
                }, i.receiveGameUserChat = function(t, n) {
                    if (void 0 === n && (n = null), e.prototype.receiveGameUserChat.call(this), console.log(n, "有玩家发聊天消息了==>FXJ"), n) {
                        var i = C.getInstance().findPlayerWithUserId(n.mid);
                        if (i) {
                            n.sex = i.gameUserInfo.sex;
                            var a = d.JsonDecode(n.msg);
                            if (a && a.from && a.to) {
                                var r = n.index,
                                    l = (n.mid, o.number_valueOf(a.from, 0)),
                                    u = o.number_valueOf(a.to, 0);
                                if (l > 0 && u > 0 && r > 0) {
                                    var h = O.EmojiProp[0].propID,
                                        p = O.EmojiProp[O.EmojiProp.length - 1].propID;
                                    if (r < h || r > p) return void console.warn("Err:收到道具消息，不支持的道具信息", n);
                                    var f = {
                                        uid: l,
                                        prop_id: r,
                                        to_uid: u
                                    };
                                    console.log("有玩家发互动道具了==>FXJ", n, f), c.dispatch(R.VIEW_DESK_ANI_PLAY, O.AnimNormal.HudongProp, f)
                                }
                            } else c.dispatch(R.VIEW_PLAYER_CHAT_SHOW, n), c.dispatch(s.ROOM_VIEW_PLAYER_CHAT_SHOW, n)
                        }
                    }
                }, i.onBroadUseProps = function(t, n) {
                    var i = this;
                    if (e.prototype.onBroadUseProps.call(this, t, n), n && n.propTarget) {
                        var a = n.propTarget.split(",");
                        if (a && a[0] && a[1]) {
                            var r = C.getInstance().findPlayerWithSeatId(Number(a[0])),
                                s = C.getInstance().findPlayerWithSeatId(Number(a[1]));
                            O.HuDongPropConf.anim[n.propType] && r && s && function() {
                                var e = o.number_valueOf(r.userId, 0),
                                    t = o.number_valueOf(s.userId, 0),
                                    a = {
                                        uid: e,
                                        prop_id: n.propType,
                                        to_uid: t
                                    };
                                console.log("有玩家发互动道具了==>FXJ", n);
                                for (var l = 0; l < n.propUseNum; l++) i.addSchedulerOnce(.1 * l, (function() {
                                    c.dispatch(R.VIEW_DESK_ANI_PLAY, O.AnimNormal.HudongProp, a)
                                }))
                            }()
                        }
                    }
                }, i.isFullUser = function() {
                    return !(!r.PrivateData.isTwoPlayerModule() || 2 != o.table_length(C.getInstance().playerList)) || o.table_length(C.getInstance().playerList) == M.playerNum
                }, i.notifyPrivateRoomChangeSeat = function(e, t) {
                    if (void 0 === t && (t = null), console.log("通知换座", t), !o.isNull(t)) {
                        var n = C.getInstance().findPlayerWithUserId(t.sUid);
                        if (!o.isNull(n)) {
                            var i = {
                                nickName: C.getInstance().getUserNick(n.gameUserInfo),
                                sex: n.gameUserInfo.sex,
                                avatar: C.getInstance().getUserAvatar(n.gameUserInfo),
                                userHeadBox: C.getInstance().getUserHeadBox(n.gameUserInfo)
                            };
                            t.sUserInfo = i
                        }
                        var a = C.getInstance().findPlayerWithUserId(t.tUid);
                        if (!o.isNull(a)) {
                            var s = {
                                nickName: C.getInstance().getUserNick(a.gameUserInfo),
                                sex: a.gameUserInfo.sex,
                                avatar: C.getInstance().getUserAvatar(a.gameUserInfo),
                                userHeadBox: C.getInstance().getUserHeadBox(a.gameUserInfo)
                            };
                            t.tUserInfo = s
                        }
                        r.PrivateData.addPrivateRoomChangeSeatInfo(t), p.getInstance().onOpenView("", u.GamePrivateTipsPrefab)
                    }
                }, i.broadcastPrivateRoomChangeSeatResult = function(e, t) {
                    if (void 0 === t && (t = null), console.log("广播换座结果", t), !o.isNull(t))
                        if (1 == t.result) {
                            if (t.count > 0) {
                                var n = r.User.getUserMid();
                                if (!o.table_isEmpty(t.change)) {
                                    C.getInstance().playerList.forEach((function(e, t, n) {
                                        c.dispatch(L.VIEW_BROADCAST_PLAYER_EXIT, null == e ? void 0 : e.userId)
                                    }));
                                    var i = null,
                                        a = !1;
                                    if (t.change.forEach((function(e, t, o) {
                                            var r = C.getInstance().findPlayerWithUserId(e.uid);
                                            r.seatId = e.seatId + 1, e.uid == n ? (A.getInstance().mySeatId = r.seatId, a = !0) : i = C.getInstance().getUserNick(r.gameUserInfo)
                                        })), a) {
                                        c.dispatch(L.VIEW_BROADCAST_CHANGE_SEAT);
                                        var s = "换座成功！";
                                        o.isNotNull(i) && (s = o.string_format("你与{0}换座成功！", i)), c.dispatch(R.SYS_TOAST_TIP, {
                                            content: s
                                        })
                                    }
                                    C.getInstance().playerList.forEach((function(e, t, n) {
                                        c.dispatch(L.VIEW_BROADCAST_PLAYER_ENTER, e.userId)
                                    }))
                                }
                            }
                        } else {
                            var l = r.User.getUserMid();
                            if (t.sUid == l || t.tUid == l) {
                                var u = C.getInstance().findPlayerWithUserId(t.sUid),
                                    d = C.getInstance().findPlayerWithUserId(t.tUid),
                                    h = o.isNotNull(u) ? C.getInstance().getUserNick(u.gameUserInfo) : "对方",
                                    p = o.isNotNull(d) ? C.getInstance().getUserNick(d.gameUserInfo) : "对方";
                                h = t.sUid == l ? "你" : h, p = t.tUid == l ? "你" : p;
                                var f = "换座失败！";
                                0 == t.errorcode && t.sUid == l ? f = p + "不同意你的换座请求。" : 1 == t.errorcode ? f = "牌局已开始," + f : 2 == t.errorcode ? f = h + "座位已经改变," + h + "与" + p + f : 3 == t.errorcode ? f = "不可重复提交换座申请" : 4 == t.errorcode ? f = "位置已被其他玩家占用," + f : 5 == t.errorcode ? f = p + "座位已经改变," + h + "与" + p + f : 6 == t.errorcode && (f = h + "已离开," + f), c.dispatch(R.SYS_TOAST_TIP, {
                                    content: f
                                })
                            }
                        }
                }, i.broadcastPrivateRoomSettle = function(e, t) {
                    if (void 0 === t && (t = null), console.log("广播私人房结算,0x8001：", t), !o.isNull(t)) {
                        var n = !0;
                        if (t.recordList.forEach((function(e, t, i) {
                                0 == e.userId && (n = !1)
                            })), n) {
                            t.recordList.forEach((function(e, t, n) {
                                var i = C.getInstance().findPlayerWithUserId(e.userId);
                                if (o.isNull(i)) {
                                    var a = r.PrivateData.getPrivateRoomSettleInfo();
                                    if (null != a && !o.table_isEmpty(a.recordList)) {
                                        var s = C.getInstance().initRobotInfo(e.userId),
                                            l = a.recordList[t];
                                        o.isNotNull(l) && (e.userInfo.nickName = (null == s ? void 0 : s.nick) || l.userInfo.nickName, e.userInfo.sex = l.userInfo.sex, e.userInfo.avatar = (null == s ? void 0 : s.url) || l.userInfo.avatar, e.userInfo.userHeadBox = l.userInfo.userHeadBox)
                                    }
                                } else e.userInfo.nickName = C.getInstance().getUserNick(i.gameUserInfo), e.userInfo.sex = i.gameUserInfo.sex, e.userInfo.avatar = C.getInstance().getUserAvatar(i.gameUserInfo), e.userInfo.userHeadBox = C.getInstance().getUserHeadBox(i.gameUserInfo)
                            }));
                            var i = t.state;
                            if (t.gameStatu = o.number_valueOf(t.gameStatu, -1), r.PrivateData.setPrivateRoomSettleInfo(t), r.PrivateData.updateCurRounds({
                                    current: t.roundsCurrent,
                                    total: t.roundsTotal
                                }), 1 == i) this.onGameOver(), this._delayShowSettleView(t, (function() {
                                c.dispatch(L.PRIVATE_SETTLE, t)
                            }), 2);
                            else if (4 == i) this.onGameOver(), o.table_isEmpty(t.recordList) || (t.leaveUserId == r.User.getUserMid() ? c.dispatch(s.SYS_TOAST_TIP, {
                                content: "你提前离开，牌局结束！"
                            }) : c.dispatch(s.SYS_TOAST_TIP, {
                                content: "有玩家离开，牌局结束！"
                            }), p.getInstance().onOpenView("", u.GamePrivateSettlePrefab, t, {}));
                            else if (2 == i) {
                                if (0 != t.leaveUserId) return;
                                this.onGameOver(), r.PrivateData.getHasDismiss() ? p.getInstance().onOpenView("", u.GamePrivateSettlePrefab, t, {}) : this._delayShowSettleView(t, null, 2)
                            } else if (3 == i) {
                                var a = C.getInstance().getMyPlayerInfo();
                                a && o.table_isEmpty(a.handCards) || this.onGamePlaying()
                            }
                        }
                    }
                }, i.onGameOver = function() {
                    var t, n;
                    null == (t = r.Desk) || t.gameOverResult(), null == (n = r.Desk) || n.onResetGameOptionInfo(), C.getInstance().resetUserStatus(), e.prototype.onGameOver.call(this)
                }, i.onDismissResult = function(e, t) {
                    var n, i;
                    void 0 === t && (t = null), console.log("通知请求解散操作结果", t), 0 != t.myUserId || 0 != (null == (n = t.users) ? void 0 : n.length) ? (t.myUserId = r.User.getUserMid(), C.getInstance().playerList.forEach((function(e) {
                        t.players.push({
                            uid: e.gameUserInfo.userId,
                            avatar: C.getInstance().getUserAvatar(e.gameUserInfo),
                            nickName: C.getInstance().getUserNick(e.gameUserInfo),
                            sex: e.gameUserInfo.sex,
                            order: e.gameUserInfo.userId == t.applyUserId ? 1 : 2
                        })
                    })), t.isReqDismiss ? (null == (i = t.players) ? void 0 : i.length) > 0 ? p.getInstance().onOpenView("", u.PrivateDismissPrefab, t, null, null, !0) : p.getInstance().onCloseView("", u.PrivateDismissPrefab) : c.dispatch(s.BROADCAST_PRIVATE_ROOM_DISMISS_OPT, t)) : p.getInstance().onCloseView("", u.PrivateDismissPrefab)
                }, i.onPrivateRoomCancelReady = function(e, t) {
                    void 0 === t && (t = null), C.getInstance().updatePlayerReadyStatus(t.userId, 0), c.dispatch(L.PRIVATE_CACEL_READY, t)
                }, i.onPrivateRoomContinue = function(e, t) {
                    if (void 0 === t && (t = null), console.log("广播私人房请求再来一轮的操作结果 ", t), this.onPrivateNextRound(), null == t) console.log("广播私人房请求再来一轮的操作结果  数据异常");
                    else {
                        for (var n = C.getInstance(), i = {}, a = 0; a < t.length; a++) {
                            var o = t[a],
                                l = n.findPlayerWithUserId(o.mid);
                            l && (l.isReady = o.isReady, l.money = o.money), i[o.mid] = o.money
                        }
                        n.updateUsersMoney(i);
                        var u = r.User.getUserMid(),
                            d = r.PrivateData.getPrivateRoomMasterInfo();
                        if (d && d.userId != u) {
                            var h = n.findPlayerWithUserId(u);
                            h && !h.isReady && c.dispatch(s.SYS_TOAST_TIP, {
                                content: "房主已开启新的一轮，点击准备继续游戏！"
                            })
                        }
                    }
                    c.dispatch(L.PRIVATE_PLAY_AGAIN)
                }, i.onPrivateMasterInfoUpdate = function() {}, i.onShowBankruptGift = function() {
                    if (r.BankrupData.isMineBankrupt()) {
                        if (this.checkBankruptGift()) return p.getInstance().onOpenView("", b.GameBankruptPrefab, {}), !0;
                        console.log("onShowBankruptGift----------破产礼包配置为空，请求配置"), c.dispatch(s.NET_REQ_BANKRUPT_GIFT_CONF, this.getCurGameId(), this.getCurLevelId())
                    }
                }, i.onShowGameLevelDownGift = function(e) {
                    p.getInstance().onOpenView("", b.RoomLevelGiftPrefab, e)
                }, i.receiveBankUpBack = function(t, n, i) {
                    e.prototype.receiveBankUpBack.call(this, t, n, i), n && this.onRefreshPropty()
                }, i.reqGamePlayerAI = function(t, n) {
                    void 0 === t && (t = null), e.prototype.reqGamePlayerAI.call(this, t, n)
                }, i.onChangeTable = function(e, t) {
                    if (r.Desk.setRoomChangeLevelInfo({}), this.onUpdateLevel(), t && t.tag)
                        if ("up" == t.tag) h.getInstance().showToast("恭喜升级至更高级的场次", 3);
                        else {
                            if (!r.Desk.checkCurLevelMoney(t.param)) return console.log("您的资产不足，已掉落进入较低级场次！"), h.getInstance().showToast("您的资产不足"), void this.detailExitGame();
                            h.getInstance().showToast("您的资产不足，已掉落进入较低级场次！", 3)
                        } this.reqGameChangeTable(null, !0)
                }, i.onGetLoseAdConfig = function(e, t, n, i) {
                    console.log("获取输牌广告配置：", t, n, i), v.getInstance().updateLostAdConfig(n)
                }, i.onGetADWard = function(e, t, n, i) {
                    if (console.log("结算看视频领奖结果：", t, n, i), t && (i = o.table_verify(i), n && null != n.money)) {
                        var a = o.number_valueOf(n.money),
                            l = a - r.User.getUserMoneyByID(0);
                        r.User.updateUserMoneyByID(0, a), this.onRefreshPropty();
                        var d = [{
                            name: i.name || "银币",
                            icon: n.url,
                            num: i.num || l
                        }];
                        c.dispatch(s.VIEW_UI_OPEN, u.GetPropPrefab, d)
                    }
                }, i.onPaySuccess = function(e, t) {
                    this.onRefreshPropty()
                }, i.onStartHuanSanZhang = function(e, t) {
                    console.log("开始换三张---", t), c.dispatch(R.VIEW_BROADCAST_HUAN_SAN_ZHANG, t)
                }, i.onOnetHuanSanZhang = function(e, t) {
                    console.log("0x5392广播用户的换三张,换出去的三张牌---", t), C.getInstance().onOneHuanSanZhang(t), c.dispatch(R.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, t)
                }, i.onAllHuanSanZhang = function(e, t, n) {
                    console.log("0x5394广播所有用户的换三张,换回来的牌---", t), C.getInstance().onAllHuanSanZhang(t), c.dispatch(R.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG, t, n)
                }, i.onSendGameOperation = function(e, t, n) {
                    var i = {
                        cmd: n,
                        body: t
                    };
                    c.dispatch(R.NET_SEND_MSG, i)
                }, i.onRefreshPropty = function() {
                    if (!r.SelectGame.isInPrivateRoom()) {
                        var e = r.User.getUserMoneyByID(0);
                        C.getInstance().updateMyMoney(e), c.dispatch(L.USER_UPDATE_PROPERTY, r.User.getUserMid())
                    }
                }, i.onGetPlayerOpenIds = function(e, t) {
                    var n, i = new Map;
                    return null == (n = C.getInstance().playerList) || n.forEach((function(e) {
                        if (1 == t) {
                            var n = T.calculatePlayerSeat(A.getInstance().mySeatId, e.seatId);
                            i.set(e.gameUserInfo.openId, {
                                userId: e.userId,
                                dir: n
                            })
                        } else {
                            var a;
                            if (null != e && null != (a = e.gameUserInfo) && a.openId) {
                                var o = T.calculatePlayerSeat(A.getInstance().mySeatId, e.seatId);
                                i.set(e.gameUserInfo.openId, {
                                    userId: e.userId,
                                    dir: o
                                })
                            }
                        }
                    })), i
                }, i.onBroadJiQiangResult = function(e, t) {
                    A.getInstance().setGameStateInfoByTag(E.JI_QIANG_RESULT, t)
                }, i.onUserHasReady = function() {
                    var e;
                    return 1 == (null == (e = C.getInstance().getMyPlayerInfo()) ? void 0 : e.isReady)
                }, i.onSynGameRecord = function(e, t) {
                    C.getInstance().synGameRecord()
                }, i.onPushUserInfo = function(e, t) {
                    var n;
                    console.log("服务器广播通知用户信息发生了变化", t), null != t && t.userId && null != t && null != (n = t.propertyArr) && n.length && C.getInstance().findPlayerWithUserId(t.userId) && t.propertyArr.forEach((function(e) {
                        0 == e.propertyId && e.num >= 0 && C.getInstance().updatePlayerMoneyByUserId([{
                            userId: t.userId,
                            money: e.num
                        }])
                    }))
                }, n(f, [{
                    key: "IsReconn",
                    get: function() {
                        var e;
                        return null == (e = this._intoGameData) ? void 0 : e.isReconn
                    }
                }]), f
            }(f)), i._RF.pop()
        }
    }
}))