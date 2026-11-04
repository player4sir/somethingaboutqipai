System.register("chunks:///_virtual/FXJController3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./EventManager.ts", "./AppControler.ts", "./PopupController.ts", "./RoomController.ts", "./BankerMgr4.ts", "./OperationResultMgr3.ts", "./PlayerMgr6.ts", "./Room6.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJCmd3.ts", "./FXJWriteAndRead3.ts", "./CardUtil3.ts", "./FXJConfig3.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./FXJObserver3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GameSettleConfig5.ts", "./ChatServer3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createClass
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            i = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            u = e.GConstants
        }, function(e) {
            l = e.UIID
        }, function(e) {
            d = e.Encrypt
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            h = e.AppControler
        }, function(e) {
            p = e.PopupController
        }, function(e) {
            m = e.RoomController
        }, function(e) {
            _ = e.BankerMgr
        }, function(e) {
            g = e.OperationResultMgr
        }, function(e) {
            f = e.PlayerMgr
        }, function(e) {
            C = e.Room
        }, function(e) {
            E = e.RoomMgr, S = e.ROOM_DATA_TYPE
        }, function(e) {
            A = e.SettleMgr, I = e.SettleTypeConfig
        }, function(e) {
            G = e.FXJCmdHead
        }, function(e) {
            y = e.FXJWriteAndRead
        }, function(e) {
            v = e.CardUtil
        }, function(e) {
            P = e.OPCode
        }, function(e) {
            T = e.FXJConstant
        }, function(e) {
            b = e.FXJEvent
        }, function(e) {
            O = e.FXJObserver
        }, function(e) {
            R = e.FXJUIID
        }, function(e) {
            M = e.GameSound
        }, function(e) {
            N = e.GameEvent
        }, function(e) {
            U = e.GameRuleConfig
        }, function(e) {
            D = e.GameSettleConfig
        }, function(e) {
            L = e.ChatServer
        }],
        execute: function() {
            var B;
            a._RF.push({}, "45c87A8eA9FW5//WNIwZeIU", "FXJController", void 0);
            var w = e("TurnMeOpMap", ((B = {})[P.OPE_PASS] = !0, B[P.OPE_TING] = 5001, B[P.OPE_JIA_TING] = 5002, B[P.OPE_MING_LOU] = 5003, B[P.OPE_MING_LV] = 5012, B[P.OPE_XIAO_SA_TING] = 5016, B[P.OPE_DI_TING] = 5004, B[P.OPE_RIGHT_CHI_TING] = 5005, B[P.OPE_MIDDLE_CHI_TING] = 5006, B[P.OPE_LEFT_CHI_TING] = 5007, B[P.OPE_PENG_TING] = 5008, B[P.OPE_BAO_JIAO] = 5011, B[P.OPE_13_TING] = 5018, B[P.OPE_SHANG_TING] = 5013, B[P.OPE_CHEN] = 5014, B[P.OPE_FAKE_TING] = 5015, B[P.OPE_KA_TING] = 5015, B[P.OPE_FENG_TING] = 5015, B[P.OPE_KOU_TING] = 5015, B));
            e("FXJController", function(e) {
                t(m, e), m.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new m("FXJController")), this._instance
                }, m.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, m.getInstance()
                };
                var a = m.prototype;

                function m(t) {
                    var n;
                    return (n = e.call(this, t) || this).ChatServer = null, n.fxjObserver = null, n
                }
                return a.clear = function() {
                    this.print("[ FXJController ]clear 清理 重置所有定时器"), this.__clearServerClass(), e.prototype.clear.call(this), f.getInstance().clear(), E.getInstance().clear(), g.getInstance().clear(), A.getInstance().clear(), _.getInstance().clear(), m._instance = null
                }, a.onInit = function() {
                    e.prototype.onInit.call(this), y.getInstance().initPB(), y.getInstance().initCMDMapping()
                }, a.onViewLoad = function(t) {
                    void 0 === t && (t = null), r.setDesk(C), this._deskCache = r.Desk, this.fxjObserver = new O, f.getInstance().addObserver(this.fxjObserver), E.getInstance().addObserver(this.fxjObserver), this.__initModuleEvent(), this.__initServerClass(), e.prototype.onViewLoad.call(this, t)
                }, a.__initServerClass = function() {
                    this.__clearServerClass(), this.ChatServer = new L
                }, a.__clearServerClass = function() {
                    this.ChatServer && this.ChatServer.clear()
                }, a.__initModuleEvent = function() {
                    this.addModelListener(b.BROADCAST_DING_ZHUANG, this.broadcastDingZhuang), this.addModelListener(N.SERVER_BROADCAST_PLAYER_LOGIN, this.serverBroadcastPlayerLogin), this.addModelListener(b.BROADCAST_LUA_ERROR, this.broadcastServerError), this.addModelListener(b.BROADCAST_GRAB_CARD, this.broadcastGrabCard), this.addModelListener(b.BROADCAST_DINGQUE_OPTIONS, this.broadcastDingQueOptions), this.addModelListener(b.BROADCAST_USER_PIAO_GANG, this.broadcastUserPiaoGang), this.addModelListener(b.BROADCAST_PAOQIAN_OPTIONS, this.broadcastPaoQianOptions), this.addModelListener(b.BROADCAST_ONE_DINGQUE_RESULT, this.broadcastOneDingqueResult), this.addModelListener(b.BROADCAST_ALL_DINGQUE_RESULT, this.broadcastAllDingqueResult), this.addModelListener(b.BROADCAST_SHUAIQIANG_RESULT, this.broadcastAllShuaiQiangResult), this.addModelListener(b.BROADCAST_CHAQUE_RESULT, this.broadcastChaqueResult), this.addModelListener(b.BROADCAST_MAIDUANMEN_USER, this.broadcastMaiDuanMenUser), this.addModelListener(b.BROADCAST_MAIDUANMEN_RESULT, this.broadcastMaiDuanMenResult), this.addModelListener(b.BROADCAST_FEN_ZHANG, this.broadcastFenZhang), this.addModelListener(b.BROADCAST_UPDATE_FAN_GANG_PAI, this.broadcastUpdateFanGangPai), this.addModelListener(b.BROADCAST_SELECT_FAN_GANG_PAI, this.broadcastSelectFanGangPai), this.addModelListener(b.BROADCAST_UPDATE_USER_PAO_CARD, this.broadcastUpdateUserPaoCard), this.addModelListener(b.BROADCAST_DEAL_CARD, this.broadcastDealCard), this.addModelListener(b.BROADCAST_USER_OPERATION_RESULT, this.broadcastUserOperationResult), this.addModelListener(b.BROADCAST_USER_OPERATION, this.broadcastUserOperation), this.addModelListener(b.BROADCAST_DING_FENG, this.broadcastDingFeng), this.addModelListener(b.BROADCAST_ZHI_TOU, this.broadcastZhiTou), this.addModelListener(b.BROADCAST_DOUBLE_CARDS, this.broadcastDoubleCards), this.addModelListener(b.BROADCAST_REWARD_CARDS, this.broadcastRewardCards), this.addModelListener(b.BROADCAST_PLAYING_JI_TYPE, this.broadcastPlayingJiType), this.addModelListener(b.BROADCAST_ZHUO_JI, this.broadcastZhuoJi), this.addModelListener(b.BROADCAST_SETTLE, this.broadcastSettleItem), this.addModelListener(b.BROADCAST_HANDCARDS, this.broadcastHandCards), this.addModelListener(b.BROADCAST_BANKER_FIRST_OPERATION, this.broadcastBankerFirstOperation), this.addModelListener(b.BROADCAST_UPDATE_PLAYER_MONEY, this.broadcastUpdatePlayerMoney), this.addModelListener(b.BROADCAST_GANG_OPERATION_RESULT, this.broadcastGameOperationResult), this.addModelListener(b.BROADCAST_DING_LAIZI, this.broadcastDingLaizi), this.addModelListener(b.EVEMT_USER_GIVE_UP, this.sendGiveUpOption), this.addModelListener(b.BROADCAST_TO_WAIT_USER_GIVE_UP, this.broadcastToWaitUserGiveUp), this.addModelListener(b.BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.broadcastToWaitUserGiveUpResult), this.addModelListener(b.BROADCAST_XIAZHU_OPTIONS, this.broadcastXiazhuOptions), this.addModelListener(b.BROADCAST_XIAZHU_RESULT, this.broadcastXiazhuResult), this.addModelListener(b.BROADCAST_BU_HUA_PAI, this.broadcastBuHuaPai), this.addModelListener(b.BROADCAST_GEN_ZHUANG_SUCC, this.broadcastGenZhuangSucc), this.addModelListener(b.BROADCAST_GAME_OVER, this.broadcastGameOver), this.addModelListener(b.BROADCAST_GAME_START, this.broadcastGameStart), this.addModelListener(b.BROADCAST_FAN_GANG_PAI, this.broadcastFanGangPai), this.addModelListener(b.BROADCAST_WAIT_HINT, this.broadcastWaitHint), this.addModelListener(b.BROADCAST_DITING_START, this.broadcastDiTingStart), this.addModelListener(b.BROADCAST_DITING_END, this.broadcastDiTingEnd), this.addModelListener(N.SEND_CHOSE_GROUPS, this.sendPlayerGroupsOpration), this.addModelListener(N.SEND_PLAYER_OPERATION, this.sendPlayerOpration), this.addModelListener(N.NEXT_GAME_OPERATION, this.onNextGameOperation), this.addModelListener(N.SEND_DINGQ_OPERATION, this.onDingQueOperation), this.addModelListener(N.EXITS_SETTLE_VIEW, this.exitsSettleView), this.addModelListener(N.SHOW_SETTLE_VIEW, this.onShowSettleView), this.addModelListener(s.LADDER_SCORE_CHANGE, this.updatePlayerLadderInfo, 1), this.addModelListener(s.LEVEL_SCORE_CHANGE, this.updatePlayerLevelInfo, 1), this.addModelListener(b.NOTIFY_CHANGETABLE_READY, this.onChangeTable), this.addModelListener(b.BROADCAST_HUAN_SAN_ZHANG, this.onStartHuanSanZhang), this.addModelListener(b.BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOnetHuanSanZhang), this.addModelListener(b.BROADCAST_ALL_HUAN_SAN_ZHANG, this.onAllHuanSanZhang), this.addModelListener(N.SEND_GAME_OPERATION, this.onSendGameOperation), this.addModelListener(N.NET_USER_MAIDUANMEN_OPERATION, this.onSendMaiDuanMen), this.addModelListener(b.BROADCAST_JI_QIANG_RESULT, this.onBroadJiQiangResult), this.addModelListener(s.USER_UPDATE_PROPERTY, this.onRefreshPropty), this.addModelListener(s.USER_HAS_READY, this.onUserHasReady)
                }, a.onUpdateLanguage = function() {
                    M.getInstance().initCurLang()
                }, a.updatePlayerLadderInfo = function(e, t) {
                    for (var n = [], a = 0; a < t.length; a++) {
                        var i = t[a];
                        n.push({
                            uid: i.mid,
                            ladderScore: i.WinPoint,
                            ladderScoreChange: i.Change
                        })
                    }
                    f.getInstance().updatePlayersLadderInfo(n), A.getInstance().updatePlayersLadderInfo(n)
                }, a.updatePlayerLevelInfo = function(e, t) {
                    var n = [];
                    if (!o.table_isEmpty(t))
                        for (var a = 0; a < t.length; a++) {
                            var i = t[a];
                            n.push({
                                uid: i.mid,
                                levelSystemScore: i.expr
                            })
                        }
                    f.getInstance().updatePlayersLevelInfo(n)
                }, a.onShowSettleView = function() {
                    r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom() || this._delayShowSettleView()
                }, a._delayShowSettleView = function(e, t, n) {
                    var a = this;
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = .5), this.addSchedulerOnce(n, (function() {
                        a.showSettleView(e), t && t()
                    }))
                }, a.showSettleView = function(e) {
                    void 0 === e && (e = null), (r.SelectGame.isInPrivateRoom() || !i.deviceInfo.ladderFeature || "number" == typeof f.getInstance().getMyPlayerInfo().gameUserInfo.ladderScore) && (A.getInstance().daPaixing && A.getInstance().daPaixing[E.getInstance().mySeatId] ? (A.getInstance().setSetleViewData({
                        tag: "showSettleView",
                        data: e,
                        viewId: R.GameSettleDaPaixingPrefab
                    }), c.dispatch(N.BROADCAST_OPEN_SETTLE_VIEW, {
                        tag: "showSettleView"
                    })) : (A.getInstance().setSetleViewData({
                        tag: "showSettleView",
                        data: e,
                        viewId: R.GameSettlePrefab
                    }), c.dispatch(N.BROADCAST_OPEN_SETTLE_VIEW, {
                        tag: "showSettleView"
                    }))), this.onGameHasOver()
                }, a.exitsSettleView = function(e, t) {
                    if (void 0 === t && (t = null), r.SelectGame.isInPrivateRoom()) {
                        if (o.isNull(t)) return;
                        2 == t.state && p.getInstance().onOpenView("", l.GamePrivateSettlePrefab, t, {})
                    }
                }, a.broadcastServerError = function(e, t) {
                    this.sendLogoutMsg(0), this.detailExitGame(!1)
                }, a.broadcastGameOver = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:游戏结束==>"), this.onGameOver()
                }, a.onNextGameOperation = function(e, t) {
                    r.SelectGame.isInMatchRoom() || (r.SelectGame.isInPrivateRoom() ? o.isNull(f.getInstance().getMyPlayerInfo()) || !r.User.LoginRoomState ? this.reqEnterGameLogin() : 0 == f.getInstance().getMyPlayerInfo().isReady && this.reqPlayerReady() : o.isNull(f.getInstance().getMyPlayerInfo()) || !r.User.LoginRoomState ? (t && t.isSeqReady && (this._isReqReady = !0), this.reqEnterGameLogin()) : this.reqPlayerReady())
                }, a.onDingQueOperation = function(e, t) {
                    var n = {
                        cmd: G.C2S.USER_DINGQUE_REQUEST,
                        body: t
                    };
                    c.dispatch(b.NET_SEND_MSG, n)
                }, a.sendPlayerGroupsOpration = function(e, t) {
                    var n = {
                        cmd: G.C2S.USER_CHOSE_GROUPS,
                        body: t
                    };
                    c.dispatch(b.NET_SEND_MSG, n), r.Desk.turnMe = !0
                }, a.sendPlayerOpration = function(e, t) {
                    var n = {
                        cmd: G.C2S.USER_OPERATION_RESULT,
                        body: t
                    };
                    if (r.Desk.turnMe = w[t.opCode], c.dispatch(b.NET_SEND_MSG, n), t.opCode == P.OPE_CANCEL) {
                        var a = r.Desk.getUserOperation();
                        o.isNotNull(a) && (r.Desk.userOperation(a), c.dispatch(N.VIEW_USER_OPERATION, a))
                    }
                }, a.broadcastGameStart = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:游戏开始==>"), this.onNotifyGameStart(), f.getInstance().onGameStart(), r.PrivateData.updateCurRounds(), A.getInstance().onGameStart(), E.getInstance().setLaiziInfo(null), r.Desk.onGameStart(), f.getInstance().resetPlayerLadderInfo(), A.getInstance().clearPlayerList(), this.onGamePlaying(), c.dispatch(N.VIEW_BROADCAST_GAME_START, {}), c.dispatch(b.SYS_CHECK_PLAY_MUSIC)
                }, a.reqEnterGameLogin = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.reqEnterGameLogin.call(this, t, n)
                }, a.receiveReConnectSuccess = function(t, n) {
                    var a, i, o;
                    void 0 === t && (t = null), void 0 === n && (n = null);
                    var u = null == (a = n) || null == (i = a.roomInfo) || null == (o = i.roomCfg) ? void 0 : o.level;
                    r.Desk.onGameReconnect(), A.getInstance().onReconnect(), e.prototype.receiveReConnectSuccess.call(this, t, n, {
                        level: u
                    }), console.log("重连成功___________________________", n), r.Desk.reconnectionRoomUpdate(n), c.dispatch(N.ENTER_ROOM_UPDATE_PLAYER, {
                        isReconn: !0
                    }), c.dispatch(N.VIEW_BROADCAST_GAME_START, {
                        isReconn: !0
                    }), c.dispatch(N.VIEW_UPDATE_FAN_GANG_PAI), c.dispatch(s.NOTIFY_RECONNECT_SUCCESS)
                }, a.receiveLoginRoomSuccess = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), r.Desk.enterRoomUpdate(n), e.prototype.receiveLoginRoomSuccess.call(this, t, n), console.log("房间登录成功___________________________", n), c.dispatch(N.ENTER_ROOM_UPDATE_PLAYER)
                }, a.serverBroadcastPlayerLogin = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), console.log(n, "serverBroadcastPlayerLogin==>"), f.getInstance().addPlayerList(n), c.dispatch(N.VIEW_BROADCAST_PLAYER_ENTER, n.userId), e.prototype.receivePlayerInto.call(this, t, n)
                }, a.receivePlayerReady = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receivePlayerReady.call(this, t, n), console.log(n, "广播:玩家准备==>"), f.getInstance().onReceivePlayerReady(n.userId), f.getInstance().updatePlayerReadyStatus(n.userId, 1), c.dispatch(N.VIEW_BROADCAST_PLAYER_READY, n.userId)
                }, a.broadcastFanGangPai = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "broadcastFanGangPai补杠==>"), c.dispatch(N.VIEW_UPDATE_BU_GANG_PAI, t)
                }, a.broadcastWaitHint = function(e, t) {
                    c.dispatch(N.VIEW_BROADCAST_WAIT_HINT, t)
                }, a.broadcastDiTingStart = function(e, t) {
                    void 0 === t && (t = null), r.Desk.turnMe || c.dispatch(N.VIEW_BROADCAST_WAIT_HINT, t)
                }, a.broadcastDiTingEnd = function(e, t) {
                    void 0 === t && (t = null), c.dispatch(N.CLOSE_OPRATION_INFO), c.dispatch(N.VIEW_BROADCAST_WAIT_HINT_OVER, t)
                }, a.receiveGamePlayerAI = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receiveGamePlayerAI.call(this, t, n), console.log(n, "有玩家托管了==>"), f.getInstance().updatePlayerAiStatus(n.mid, n.ai), c.dispatch(N.VIEW_PLAYER_AI_SHOW, n)
                }, a.receivePlayerLogOut = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), console.log(n, "广播:玩家退出==>"), e.prototype.receivePlayerLogOut.call(this, t, n);
                    var a = f.getInstance().findPlayerWithUserId(n.mid),
                        i = null;
                    null != a && null != a.gameUserInfo && (i = f.getInstance().getUserNick(a.gameUserInfo)), c.dispatch(N.VIEW_BROADCAST_PLAYER_EXIT, n.mid, {
                        nickName: i
                    })
                }, a.receiveExitRoomSuccess = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null), e.prototype.receiveExitRoomSuccess.call(this, t, n), f.getInstance().playerList.forEach((function(e, t, n) {
                        null != e && e.userId && (null == e ? void 0 : e.userId) != r.User.getUserMid() && c.dispatch(N.VIEW_BROADCAST_PLAYER_EXIT, null == e ? void 0 : e.userId)
                    }))
                }, a.broadcastZhiTou = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:掷投==>"), E.getInstance().rollDice = t, c.dispatch(N.VIEW_BROADCAST_ZHI_TOU, t)
                }, a.broadcastDingZhuang = function(e, t) {
                    console.log(t, "广播:定庄==>"), E.getInstance().setLaiziInfo(t), E.getInstance().bankSeatId = t.bankSeatId, c.dispatch(N.NET_BROADCAST_DING_ZHUANG, t.bankSeatId)
                }, a.broadcastGrabCard = function(e, t) {
                    console.log(t, "广播:抓牌==>"), r.Desk.gameGrabCard(t), c.dispatch(N.VIEW_BROADCAST_GRAB_CARD, t)
                }, a.broadcastDingQueOptions = function(e, t) {
                    console.log("广播:定缺==>", t), c.dispatch(N.VIEW_BROADCAST_DINGQUE_OPTIONS, t)
                }, a.broadcastOneDingqueResult = function(e, t) {
                    console.log("广播:定缺结果broadcastOneDingqueResult==>", t), c.dispatch(N.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, t)
                }, a.broadcastAllDingqueResult = function(e, t) {
                    var n;
                    console.log("广播:所有人的定缺结果broadcastAllDingqueResult==>", t), null == t || null == (n = t.queData) || n.forEach((function(e, t) {
                        E.getInstance().updateDingQue(e.seatId, e)
                    })), c.dispatch(N.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, t)
                }, a.broadcastUserPiaoGang = function(e, t) {
                    console.log(t, "广播:飘杠==>"), console.log("broadcastUserPiaoGang::::::::::::" + t)
                }, a.broadcastPaoQianOptions = function(e, t) {
                    console.log(t, "广播:飘缺选项==>"), console.log("broadcastPaoQianOptions::::::::::::" + t)
                }, a.broadcastAllShuaiQiangResult = function(e, t) {
                    console.log(t, "广播:摔枪结果：==>"), E.getInstance().setGameStateInfoByTag(S.SHUAIQIANG_RESULT, t)
                }, a.broadcastChaqueResult = function(e, t) {
                    console.log(t, "广播:broadcastChaqueResult==>"), console.log("broadcastChaqueResult::::::::::::" + t)
                }, a.onSendMaiDuanMen = function(e, t) {
                    var n = {
                        cmd: G.C2S.USER_MAIDUANMEN_REQUEST,
                        body: t
                    };
                    c.dispatch(b.NET_SEND_MSG, n)
                }, a.broadcastMaiDuanMenUser = function(e, t) {
                    console.log(t, "广播用户进行买断门操作:broadcastMaiDuanMenUser==>"), console.log("broadcastMaiDuanMenUser::::::::::::" + t), E.getInstance().setGameInfoByTag(S.MAI_DUAN_MEN_STATUS, t), c.dispatch(N.VIEW_BROADCAST_MAIDUANMEN_USER, t)
                }, a.broadcastMaiDuanMenResult = function(e, t) {
                    console.log(t, "广播买断门操作结果:broadcastMaiDuanMenResult==>"), E.getInstance().setGameInfoByTag(S.MAI_DUAN_MEN_STATUS, t), c.dispatch(N.VIEW_BROADCAST_MAIDUANMEN_RESULT, t)
                }, a.broadcastFenZhang = function(e, t) {
                    console.log(t, "广播分张:broadcastFenZhang==>");
                    var n = o.number_valueOf(E.getInstance().getRemainCardsCount(), 0);
                    E.getInstance().updateRemainCardsCount(Math.max(n - t.cards.length, 0));
                    var a = {
                        seatId: E.getInstance().mySeatId,
                        sprite: "fenzhang",
                        tag: "fenzhang"
                    };
                    c.dispatch(b.VIEW_DESK_ANI_PLAY, T.AnimNormal.picCommon, a), t.opGroups && t.opGroups.length > 0 && r.Desk.userOperation(t)
                }, a.broadcastUpdateFanGangPai = function(e, t) {
                    console.log(t, "广播:broadcastUpdateFanGangPai==>"), r.Desk.updateFanGangCards(t), c.dispatch(N.VIEW_UPDATE_FAN_GANG_PAI)
                }, a.broadcastSelectFanGangPai = function(e, t) {
                    console.log(t, "广播:broadcastSelectFanGangPai==>"), r.Desk.updateSelectFanGangCards(t), c.dispatch(N.VIEW_GET_BU_GANG_PAI)
                }, a.broadcastUpdateUserPaoCard = function(e, t) {
                    void 0 === t && (t = null), console.log(t, "广播:更新炮牌==>"), t && (r.Desk.updatePaoCards(t), c.dispatch(N.VIEW_UPDATE_USER_PAO_CARD))
                }, a.broadcastDealCard = function(e, t) {
                    console.log(t, "广播:分牌==>"), r.Desk.dealCardUpdate(t), this.updateRoomStates(u.GameRoomState.STATUS_PLAYING), c.dispatch(N.VIEW_BROADCAST_DEAL_CARD, t)
                }, a.broadcastUserOperationResult = function(e, t) {
                    console.log(t, "广播:broadcastUserOperationResult==>"), r.Desk.userOperationResult(t), c.dispatch(N.UPDATE_OPERATION_RESULT, t)
                }, a.broadcastUserOperation = function(e, t) {
                    console.log(t, "广播:broadcastUserOperation==>"), r.Desk.userOperation(t), c.dispatch(N.VIEW_USER_OPERATION, t)
                }, a.broadcastDingFeng = function(e, t) {
                    console.log(t, "广播:broadcastDingFeng==>")
                }, a.broadcastDoubleCards = function(e, t) {
                    console.log(t, "广播抽奖:broadcastDoubleCards==>"), c.dispatch(N.VIEW_BROADCAST_DOUBLE_CARDS, t)
                }, a.broadcastRewardCards = function(e, t) {
                    console.log(t, "广播:broadcastRewardCards==>")
                }, a.broadcastPlayingJiType = function(e, t) {
                    console.log(t, "广播:broadcastPlayingJiType==>"), c.dispatch(N.VIEW_BROADCAST_PLAYING_JI_TYPE, t)
                }, a.broadcastZhuoJi = function(e, t) {
                    console.log(t, "广播:broadcastZhuoJi==>"), t && t.fanCardData && t.fanCardData.card > 0 && (o.table_isEmpty(t.jiCardData) || t.jiCardData.sort((function(e, t) {
                        var n = e.settleType == D.SettleMoneyType.XingQiJi,
                            a = t.settleType == D.SettleMoneyType.XingQiJi;
                        return n && a ? 0 : n ? -1 : a ? 1 : 0
                    })), E.getInstance().setGameStateInfoByTag(S.ZHUO_JI_INFO, t), c.dispatch(N.VIEW_BROADCAST_ZHUO_JI, t))
                }, a.broadcastSettleItem = function(e, t) {
                    if (console.log(t, "广播游戏结算:broadcastSettleItem==>"), (r.SelectGame.isInMatchRoom() || r.SelectGame.isInPrivateRoom()) && o.isNotNull(t) && o.isNotNull(t.settleModel) && o.isNotNull(t.settleModel.totalInfo)) {
                        var n = 0;
                        t.settleModel.totalInfo.forEach((function(e, t, a) {
                            e.turnMoney > n && (n = e.turnMoney)
                        })), t.settleModel.totalInfo.forEach((function(e, t, a) {
                            e.bWin = e.turnMoney == n ? 1 : -1
                        })), t.settleModel.totalInfo.length > 0 && null == t.settleModel.totalInfo[0].isYouJiao && o.isNotNull(t.settleModel.moneyItemList) && t.settleModel.moneyItemList.length > 0 && (t.settleType == I.HuangZhuang ? (t.settleModel.totalInfo.forEach((function(e, t, n) {
                            e.isYouJiao = 1
                        })), t.settleModel.moneyItemList.forEach((function(e, n, a) {
                            e.name && "cha_jiao" == e.name && e.p2pMoney && e.p2pMoney.forEach((function(e, n, a) {
                                e < 0 ? t.settleModel.totalInfo[n].isYouJiao = 1 : e > 0 && (t.settleModel.totalInfo[n].isYouJiao = 0)
                            }))
                        }))) : t.settleModel.totalInfo.forEach((function(e, t, n) {
                            e.isYouJiao = -1
                        })))
                    }
                    console.log("settle", t), A.getInstance().onReceiveSettleInfo(t), c.dispatch(b.SYS_CHECK_PLAY_MUSIC), r.SelectGame.isInMatchRoom() && t.isShowGameOver && c.dispatch(b.BROADCAST_MACTH_JIFEN)
                }, a.broadcastHandCards = function(e, t) {
                    console.log(t, "广播:摊开手牌==>"), f.getInstance().updateHandCards(t), A.getInstance().onShowHandCards(), c.dispatch(N.VIEW_BROADCAST_GAME_OVER, t), c.dispatch(N.VIEW_GAMEOVER_SHOW_HAND_CARD)
                }, a.broadcastBankerFirstOperation = function(e, t) {
                    console.log(t, "广播:broadcastBankerFirstOperation==>"), r.Desk.bankerFirstOperation(t), c.dispatch(N.VIEW_BROADCAST_OPERATION_START, t)
                }, a.broadcastUpdatePlayerMoney = function(e, t) {
                    t && (f.getInstance().updatePlayerMoney(t.moneys), f.getInstance().playerList.forEach((function(e) {
                        c.dispatch(N.USER_UPDATE_PROPERTY, e.userId)
                    })))
                }, a.broadcastGameOperationResult = function(e, t) {
                    console.log(t, "广播:玩家特殊杠操作产生的信息==>"), r.Desk.updateGangOperationResult(t), c.dispatch(N.VIEW_UPDATE_GANG_OPERATION_RESULT)
                }, a.broadcastDingLaizi = function(e, t) {
                    console.log(t, "广播:定癞子==>"), E.getInstance().setLaiziInfo(t), c.dispatch(N.VIEW_BROADCAST_DING_LAIZI)
                }, a.broadcastToWaitUserGiveUp = function(e, t) {
                    console.log(t, "广播:认输操作broadcastToWaitUserGiveUp==>"), c.dispatch(b.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, t)
                }, a.sendGiveUpOption = function(e, t) {
                    var n = {
                        cmd: G.C2S.USER_GIVE_UP_OPTION,
                        body: t
                    };
                    c.dispatch(b.NET_SEND_MSG, n)
                }, a.broadcastToWaitUserGiveUpResult = function(e, t) {
                    console.log(t, "广播:认输操作结果broadcastToWaitUserGiveUp==>"), 1 == (null == t ? void 0 : t.isGiveUp) && t.userId == r.User.getUserMid() && c.dispatch(s.GAME_ROOM_STATE_CHANGE, u.GameRoomState.STATUS_GAMEOVER), c.dispatch(b.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, t), 1 == t.isGiveUp && t.userId == r.User.getUserMid() && (this._deskCache && (this._deskCache.canExitGame = !1), this.updateRoomStates(u.GameRoomState.STATUS_GAMEOVER), r.Desk.onResetGameOptionInfo())
                }, a.broadcastXiazhuOptions = function(e, t) {
                    console.log(t, "广播:下注==>"), r.Desk.updateXiaZhuOptions(t), c.dispatch(N.VIEW_UPDATE_XIA_ZHU_OPTIONS, t)
                }, a.broadcastXiazhuResult = function(e, t) {
                    console.log(t, "广播:下注结果==>"), r.Desk.updateXiaZhuResult(t), c.dispatch(N.VIEW_UPDATE_XIA_ZHU_RESULT, t)
                }, a.broadcastBuHuaPai = function(e, t) {
                    console.log(t, "广播:补花牌==>"), r.Desk.updateHuaCards(t), c.dispatch(N.VIEW_UPDATE_BU_HUA_PAI, t)
                }, a.broadcastGenZhuangSucc = function(e, t) {
                    console.log(t, "广播跟庄成功:broadcastGenZhuangSucc==>"), c.dispatch(N.VIEW_BROADCAST_GEN_ZHUANG_SUCC, t)
                }, a.receiveGameUserFace = function(t, n) {
                    void 0 === n && (n = null), e.prototype.receiveGameUserFace.call(this), console.log(n, "有玩家发表情了==>"), c.dispatch(N.VIEW_PLAYER_EMOJ_SHOW, n), o.isNull(n.faceValue) || (n.index = n.faceValue - Math.pow(2, 16), c.dispatch(s.ROOM_VIEW_PLAYER_EMOJ_SHOW, n))
                }, a.receiveGameUserChat = function(t, n) {
                    if (void 0 === n && (n = null), e.prototype.receiveGameUserChat.call(this), console.log(n, "有玩家发聊天消息了==>FXJ"), n) {
                        var a = f.getInstance().findPlayerWithUserId(n.mid);
                        if (a) {
                            n.sex = a.gameUserInfo.sex;
                            var i = d.JsonDecode(n.msg);
                            if (i && i.from && i.to) {
                                var r = n.index,
                                    u = (n.mid, o.number_valueOf(i.from, 0)),
                                    l = o.number_valueOf(i.to, 0);
                                if (u > 0 && l > 0 && r > 0) {
                                    var h = T.EmojiProp[0].propID,
                                        p = T.EmojiProp[T.EmojiProp.length - 1].propID;
                                    if (r < h || r > p) return void console.warn("Err:收到道具消息，不支持的道具信息", n);
                                    var m = {
                                        uid: u,
                                        prop_id: r,
                                        to_uid: l
                                    };
                                    console.log("有玩家发互动道具了==>FXJ", n, m), c.dispatch(b.VIEW_DESK_ANI_PLAY, T.AnimNormal.HudongProp, m)
                                }
                            } else c.dispatch(b.VIEW_PLAYER_CHAT_SHOW, n), c.dispatch(s.ROOM_VIEW_PLAYER_CHAT_SHOW, n)
                        }
                    }
                }, a.onBroadUseProps = function(t, n) {
                    var a = this;
                    if (e.prototype.onBroadUseProps.call(this, t, n), n && n.propTarget) {
                        var i = n.propTarget.split(",");
                        if (i && i[0] && i[1]) {
                            var r = f.getInstance().findPlayerWithSeatId(Number(i[0])),
                                s = f.getInstance().findPlayerWithSeatId(Number(i[1]));
                            T.HuDongPropConf.anim[n.propType] && r && s && function() {
                                var e = o.number_valueOf(r.userId, 0),
                                    t = o.number_valueOf(s.userId, 0),
                                    i = {
                                        uid: e,
                                        prop_id: n.propType,
                                        to_uid: t
                                    };
                                console.log("有玩家发互动道具了==>FXJ", n);
                                for (var u = 0; u < n.propUseNum; u++) a.addSchedulerOnce(.1 * u, (function() {
                                    c.dispatch(b.VIEW_DESK_ANI_PLAY, T.AnimNormal.HudongProp, i)
                                }))
                            }()
                        }
                    }
                }, a.isFullUser = function() {
                    return !(!r.PrivateData.isTwoPlayerModule() || 2 != o.table_length(f.getInstance().playerList)) || o.table_length(f.getInstance().playerList) == U.playerNum
                }, a.notifyPrivateRoomChangeSeat = function(e, t) {
                    if (void 0 === t && (t = null), console.log("通知换座", t), !o.isNull(t)) {
                        var n = f.getInstance().findPlayerWithUserId(t.sUid);
                        if (!o.isNull(n)) {
                            var a = {
                                nickName: f.getInstance().getUserNick(n.gameUserInfo),
                                sex: n.gameUserInfo.sex,
                                avatar: f.getInstance().getUserAvatar(n.gameUserInfo),
                                userHeadBox: f.getInstance().getUserHeadBox(n.gameUserInfo)
                            };
                            t.sUserInfo = a
                        }
                        var i = f.getInstance().findPlayerWithUserId(t.tUid);
                        if (!o.isNull(i)) {
                            var s = {
                                nickName: f.getInstance().getUserNick(i.gameUserInfo),
                                sex: i.gameUserInfo.sex,
                                avatar: f.getInstance().getUserAvatar(i.gameUserInfo),
                                userHeadBox: f.getInstance().getUserHeadBox(i.gameUserInfo)
                            };
                            t.tUserInfo = s
                        }
                        r.PrivateData.addPrivateRoomChangeSeatInfo(t), p.getInstance().onOpenView("", l.GamePrivateTipsPrefab)
                    }
                }, a.broadcastPrivateRoomChangeSeatResult = function(e, t) {
                    if (void 0 === t && (t = null), console.log("广播换座结果", t), !o.isNull(t))
                        if (1 == t.result) {
                            if (t.count > 0) {
                                var n = r.User.getUserMid();
                                if (!o.table_isEmpty(t.change)) {
                                    f.getInstance().playerList.forEach((function(e, t, n) {
                                        c.dispatch(N.VIEW_BROADCAST_PLAYER_EXIT, null == e ? void 0 : e.userId)
                                    }));
                                    var a = null,
                                        i = !1;
                                    if (t.change.forEach((function(e, t, o) {
                                            var r = f.getInstance().findPlayerWithUserId(e.uid);
                                            r.seatId = e.seatId + 1, e.uid == n ? (E.getInstance().mySeatId = r.seatId, i = !0) : a = f.getInstance().getUserNick(r.gameUserInfo)
                                        })), i) {
                                        c.dispatch(N.VIEW_BROADCAST_CHANGE_SEAT);
                                        var s = "换座成功！";
                                        o.isNotNull(a) && (s = o.string_format("你与{0}换座成功！", a)), c.dispatch(b.SYS_TOAST_TIP, {
                                            content: s
                                        })
                                    }
                                    f.getInstance().playerList.forEach((function(e, t, n) {
                                        c.dispatch(N.VIEW_BROADCAST_PLAYER_ENTER, e.userId)
                                    }))
                                }
                            }
                        } else {
                            var u = r.User.getUserMid();
                            if (t.sUid == u || t.tUid == u) {
                                var l = f.getInstance().findPlayerWithUserId(t.sUid),
                                    d = f.getInstance().findPlayerWithUserId(t.tUid),
                                    h = o.isNotNull(l) ? f.getInstance().getUserNick(l.gameUserInfo) : "对方",
                                    p = o.isNotNull(d) ? f.getInstance().getUserNick(d.gameUserInfo) : "对方";
                                h = t.sUid == u ? "你" : h, p = t.tUid == u ? "你" : p;
                                var m = "换座失败！";
                                0 == t.errorcode && t.sUid == u ? m = p + "不同意你的换座请求。" : 1 == t.errorcode ? m = "牌局已开始," + m : 2 == t.errorcode ? m = h + "座位已经改变," + h + "与" + p + m : 3 == t.errorcode ? m = "不可重复提交换座申请" : 4 == t.errorcode ? m = "位置已被其他玩家占用," + m : 5 == t.errorcode ? m = p + "座位已经改变," + h + "与" + p + m : 6 == t.errorcode && (m = h + "已离开," + m), c.dispatch(b.SYS_TOAST_TIP, {
                                    content: m
                                })
                            }
                        }
                }, a.broadcastPrivateRoomSettle = function(e, t) {
                    if (void 0 === t && (t = null), console.log("广播私人房结算,0x8001：", t), !o.isNull(t)) {
                        var n = r.PrivateData.getPrivateRoomSettleInfo(),
                            a = !0;
                        if (t.recordList.forEach((function(e, t, n) {
                                0 == e.userId && (a = !1)
                            })), a) {
                            t.recordList.forEach((function(e, t, a) {
                                var i = f.getInstance().findPlayerWithUserId(e.userId);
                                if (o.isNull(i)) {
                                    if (null != n && !o.table_isEmpty(n.recordList)) {
                                        var r = f.getInstance().initRobotInfo(e.userId),
                                            s = n.recordList[t];
                                        o.isNotNull(s) && (e.userInfo.nickName = (null == r ? void 0 : r.nick) || s.userInfo.nickName, e.userInfo.sex = s.userInfo.sex, e.userInfo.avatar = (null == r ? void 0 : r.url) || s.userInfo.avatar, e.userInfo.userHeadBox = s.userInfo.userHeadBox)
                                    }
                                } else e.userInfo.nickName = f.getInstance().getUserNick(i.gameUserInfo), e.userInfo.sex = i.gameUserInfo.sex, e.userInfo.avatar = f.getInstance().getUserAvatar(i.gameUserInfo), e.userInfo.userHeadBox = f.getInstance().getUserHeadBox(i.gameUserInfo)
                            }));
                            var i = t.state;
                            if (t.gameStatu = o.number_valueOf(t.gameStatu, -1), r.PrivateData.setPrivateRoomSettleInfo(t), r.PrivateData.updateCurRounds({
                                    current: t.roundsCurrent,
                                    total: t.roundsTotal
                                }), 1 == i) this.onGameOver(), this._delayShowSettleView(t, (function() {
                                c.dispatch(N.PRIVATE_SETTLE, t)
                            }), 2);
                            else if (4 == i) this.onGameOver(), o.table_isEmpty(t.recordList) || (t.leaveUserId == r.User.getUserMid() ? c.dispatch(s.SYS_TOAST_TIP, {
                                content: "你提前离开，牌局结束！"
                            }) : c.dispatch(s.SYS_TOAST_TIP, {
                                content: "有玩家离开，牌局结束！"
                            }), p.getInstance().onOpenView("", l.GamePrivateSettlePrefab, t, {}));
                            else if (2 == i) {
                                if (0 != t.leaveUserId) return;
                                this.onGameOver(), r.PrivateData.getHasDismiss() ? p.getInstance().onOpenView("", l.GamePrivateSettlePrefab, t, {}) : this._delayShowSettleView(t, null, 2)
                            } else if (3 == i) {
                                var u = f.getInstance().getMyPlayerInfo();
                                u && o.table_isEmpty(u.handCards) || this.onGamePlaying()
                            }
                        }
                    }
                }, a.onGameOver = function() {
                    var t, n;
                    null == (t = r.Desk) || t.gameOverResult(), null == (n = r.Desk) || n.onResetGameOptionInfo(), f.getInstance().resetUserStatus(), e.prototype.onGameOver.call(this)
                }, a.onDismissResult = function(e, t) {
                    var n, a;
                    void 0 === t && (t = null), console.log("通知请求解散操作结果", t), 0 != t.myUserId || 0 != (null == (n = t.users) ? void 0 : n.length) ? (t.myUserId = r.User.getUserMid(), f.getInstance().playerList.forEach((function(e) {
                        t.players.push({
                            uid: e.gameUserInfo.userId,
                            avatar: f.getInstance().getUserAvatar(e.gameUserInfo),
                            nickName: f.getInstance().getUserNick(e.gameUserInfo),
                            sex: e.gameUserInfo.sex,
                            order: e.gameUserInfo.userId == t.applyUserId ? 1 : 2
                        })
                    })), t.isReqDismiss ? (null == (a = t.players) ? void 0 : a.length) > 0 ? p.getInstance().onOpenView("", l.PrivateDismissPrefab, t, null, null, !0) : p.getInstance().onCloseView("", l.PrivateDismissPrefab) : c.dispatch(s.BROADCAST_PRIVATE_ROOM_DISMISS_OPT, t)) : p.getInstance().onCloseView("", l.PrivateDismissPrefab)
                }, a.onPrivateRoomCancelReady = function(e, t) {
                    void 0 === t && (t = null), f.getInstance().updatePlayerReadyStatus(t.userId, 0), c.dispatch(N.PRIVATE_CACEL_READY, t)
                }, a.onPrivateRoomContinue = function(e, t) {
                    if (void 0 === t && (t = null), this.onPrivateNextRound(), null != t) {
                        var n = {},
                            a = null;
                        t.forEach((function(e) {
                            (a = f.getInstance().findPlayerWithUserId(e.mid)) && (a.isReady = e.isReady, a.money = e.money), n[e.mid] = e.money
                        })), f.getInstance().updateUsersMoney(n);
                        var i = r.User.getUserMid();
                        r.PrivateData.getPrivateRoomMasterInfo().userId != i && (f.getInstance().findPlayerWithUserId(i).isReady || c.dispatch(s.SYS_TOAST_TIP, {
                            content: "房主已开启新的一轮，点击准备继续游戏！"
                        })), c.dispatch(N.PRIVATE_PLAY_AGAIN)
                    }
                }, a.onPrivateMasterInfoUpdate = function() {}, a.onShowBankruptGift = function() {
                    if (r.BankrupData.isMineBankrupt()) {
                        if (this.checkBankruptGift()) return p.getInstance().onOpenView("", l.GameBankruptPrefab, {}), !0;
                        console.log("onShowBankruptGift----------破产礼包配置为空，请求配置"), c.dispatch(s.NET_REQ_BANKRUPT_GIFT_CONF, this.getCurGameId(), this.getCurLevelId())
                    }
                }, a.onShowGameLevelDownGift = function(e) {
                    p.getInstance().onOpenView("", l.RoomLevelGiftPrefab, e)
                }, a.receiveBankUpBack = function(t, n, a) {
                    e.prototype.receiveBankUpBack.call(this, t, n, a), n && this.onRefreshPropty()
                }, a.reqGamePlayerAI = function(t, n) {
                    void 0 === t && (t = null), e.prototype.reqGamePlayerAI.call(this, t, n)
                }, a.onChangeTable = function(e, t) {
                    if (r.Desk.setRoomChangeLevelInfo({}), this.onUpdateLevel(), t && t.tag)
                        if ("up" == t.tag) h.getInstance().showToast("恭喜升级至更高级的场次", 3);
                        else {
                            if (!r.Desk.checkCurLevelMoney(t.param)) return console.log("您的资产不足，已掉落进入较低级场次！"), h.getInstance().showToast("您的资产不足"), void this.detailExitGame();
                            h.getInstance().showToast("您的资产不足，已掉落进入较低级场次！", 3)
                        } this.reqGameChangeTable(null, !0)
                }, a.onGetLoseAdConfig = function(e, t, n, a) {
                    console.log("获取输牌广告配置：", t, n, a), A.getInstance().updateLostAdConfig(n)
                }, a.onGetADWard = function(e, t, n, a) {
                    if (console.log("结算看视频领奖结果：", t, n, a), t && (a = o.table_verify(a), n && null != n.money)) {
                        var i = o.number_valueOf(n.money),
                            u = i - r.User.getUserMoneyByID(0);
                        r.User.updateUserMoneyByID(0, i), this.onRefreshPropty();
                        var d = [{
                            name: a.name || "银币",
                            icon: n.url,
                            num: a.num || u
                        }];
                        c.dispatch(s.VIEW_UI_OPEN, l.GetPropPrefab, d)
                    }
                }, a.onPaySuccess = function(e, t) {
                    this.onRefreshPropty()
                }, a.onStartHuanSanZhang = function(e, t) {
                    console.log("开始换三张---", t), c.dispatch(b.VIEW_BROADCAST_HUAN_SAN_ZHANG, t)
                }, a.onOnetHuanSanZhang = function(e, t) {
                    console.log("0x5392广播用户的换三张,换出去的三张牌---", t), f.getInstance().onOneHuanSanZhang(t), c.dispatch(b.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, t)
                }, a.onAllHuanSanZhang = function(e, t, n) {
                    console.log("0x5394广播所有用户的换三张,换回来的牌---", t), f.getInstance().onAllHuanSanZhang(t), c.dispatch(b.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG, t, n)
                }, a.onSendGameOperation = function(e, t, n) {
                    var a = {
                        cmd: n,
                        body: t
                    };
                    c.dispatch(b.NET_SEND_MSG, a)
                }, a.onRefreshPropty = function() {
                    if (!r.SelectGame.isInPrivateRoom()) {
                        var e = r.User.getUserMoneyByID(0);
                        f.getInstance().updateMyMoney(e), c.dispatch(N.USER_UPDATE_PROPERTY, r.User.getUserMid())
                    }
                }, a.onBroadJiQiangResult = function(e, t) {
                    E.getInstance().setGameStateInfoByTag(S.JI_QIANG_RESULT, t)
                }, a.onGetPlayerOpenIds = function(e, t) {
                    var n, a = new Map;
                    return null == (n = f.getInstance().playerList) || n.forEach((function(e) {
                        var t;
                        if (null != e && null != (t = e.gameUserInfo) && t.openId) {
                            var n = v.calculatePlayerSeat(E.getInstance().mySeatId, e.seatId);
                            a.set(e.gameUserInfo.openId, {
                                userId: e.userId,
                                dir: n
                            })
                        }
                    })), a
                }, a.onUserHasReady = function() {
                    return 1 == f.getInstance().getMyPlayerInfo().isReady
                }, a.onSynGameRecord = function(e, t) {
                    f.getInstance().synGameRecord()
                }, a.onPushUserInfo = function(e, t) {
                    var n;
                    console.log("服务器广播通知用户信息发生了变化", t), null != t && t.userId && null != t && null != (n = t.propertyArr) && n.length && f.getInstance().findPlayerWithUserId(t.userId) && t.propertyArr.forEach((function(e) {
                        0 == e.propertyId && e.num >= 0 && f.getInstance().updatePlayerMoneyByUserId([{
                            userId: t.userId,
                            money: e.num
                        }])
                    }))
                }, n(m, [{
                    key: "IsReconn",
                    get: function() {
                        var e;
                        return null == (e = this._intoGameData) ? void 0 : e.isReconn
                    }
                }]), m
            }(m)), a._RF.pop()
        }
    }
}))