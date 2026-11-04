System.register("chunks:///_virtual/NodeUserPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameRes.ts", "./SpriteLoad.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./GlobalCmd.ts", "./GameChatVoiceCtr.ts", "./NickComponentCtr.ts", "./nodeHeadExtraInfoPrefabCtr.ts", "./gameCommonRes.ts", "./GameChatDecorationPrefabCtr.ts", "./GameHeadDecorationPrefabCtr.ts", "./GameClockPrefabCtr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJConfig.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./CardUtil.ts", "./NodeUserScoreCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H, F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Node, u = e.Label, d = e.Sprite, c = e.SpriteAtlas, h = e.Vec3, p = e.view, f = e.AnimationClip, _ = e.Animation, g = e.UITransform, m = e.Vec2, C = e.Layout, I = e.Tween, A = e.sp, E = e.tween, v = e.Widget
        }, function(e) {
            y = e.GameSwitchConf
        }, function(e) {
            S = e.Utils
        }, function(e) {
            P = e.GCache
        }, function(e) {
            T = e.AppEvent
        }, function(e) {
            G = e.GameRes
        }, function(e) {
            O = e.default
        }, function(e) {
            R = e.inf_OnlineStatus
        }, function(e) {
            N = e.LayerManager
        }, function(e) {
            b = e.EventManager
        }, function(e) {
            D = e.SpineAniUtils
        }, function(e) {
            L = e.BaseComponent
        }, function(e) {
            M = e.SpriteLabel
        }, function(e) {
            U = e.GlobalCmdHead
        }, function(e) {
            w = e.GameChatVoiceCtr
        }, function(e) {
            B = e.NickComponentCtr
        }, function(e) {
            H = e.nodeHeadExtraInfoPrefabCtr
        }, function(e) {
            F = e.GameCommonRes
        }, function(e) {
            k = e.GameChatDecorationPrefabCtr
        }, function(e) {
            V = e.GameHeadDecorationPrefabCtr
        }, function(e) {
            x = e.GameClockPrefabCtr
        }, function(e) {
            W = e.PlayerMgr
        }, function(e) {
            z = e.RoomMgr, Z = e.ROOM_DATA_TYPE
        }, function(e) {
            X = e.SettleMgr
        }, function(e) {
            J = e.FXJConfig, j = e.TingMap, Y = e.OPCode, Q = e.MJTYPE
        }, function(e) {
            q = e.FXJConstant
        }, function(e) {
            K = e.FXJEvent
        }, function(e) {
            $ = e.FXJRes, ee = e.FXJAniConf, te = e.ANI_TYPE, ne = e.FXJUIID
        }, function(e) {
            ie = e.GameSound, ae = e.FXJSound
        }, function(e) {
            oe = e.GameEvent
        }, function(e) {
            re = e.CardUtil
        }, function(e) {
            se = e.NodeUserScoreCtr
        }],
        execute: function() {
            var le, ue, de, ce, he, pe, fe, _e, ge, me, Ce, Ie, Ae, Ee, ve, ye, Se, Pe, Te, Ge, Oe, Re, Ne, be, De, Le, Me, Ue, we, Be, He, Fe, ke, Ve, xe, We, ze, Ze, Xe, Je, je, Ye, Qe, qe, Ke, $e, et, tt, nt, it, at, ot, rt, st, lt, ut, dt, ct, ht, pt, ft, _t, gt, mt, Ct, It, At, Et, vt, yt;
            r._RF.push({}, "5151fbl7YZGEatqVwf4KG7Z", "NodeUserPrefabCtr", void 0);
            var St = s.ccclass,
                Pt = s.property,
                Tt = s.menu;
            e("NodeUserPrefabCtr", (le = St("NodeUserPrefabCtr"), ue = Tt("prefab/game/NodeUserPrefabCtr"), de = Pt({
                tooltip: "玩家入场动画节点",
                type: l
            }), ce = Pt({
                tooltip: "玩家信息背景",
                type: l
            }), he = Pt({
                tooltip: "玩家显示托管状态",
                type: l
            }), pe = Pt({
                tooltip: "用户头像",
                type: l
            }), fe = Pt({
                tooltip: "用户头像框",
                type: l
            }), _e = Pt({
                tooltip: "银币图标",
                type: l
            }), ge = Pt({
                tooltip: "积分图标",
                type: l
            }), me = Pt({
                tooltip: "比赛积分图标",
                type: l
            }), Ce = Pt({
                tooltip: "银币",
                type: u
            }), Ie = Pt({
                tooltip: "聊天气泡节点",
                type: l
            }), Ae = Pt({
                tooltip: "表情动画节点",
                type: l
            }), Ee = Pt({
                tooltip: "庄家节点",
                type: l
            }), ve = Pt({
                tooltip: "听节点",
                type: l
            }), ye = Pt({
                tooltip: "房主节点",
                type: l
            }), Se = Pt({
                tooltip: "用户标志扩展",
                type: l
            }), Pe = Pt({
                tooltip: "定缺节点",
                type: l
            }), Te = Pt({
                tooltip: "花跑分节点",
                type: l
            }), Ge = Pt({
                tooltip: "准备节点",
                type: l
            }), Oe = Pt({
                tooltip: "段位节点",
                type: l
            }), Re = Pt({
                tooltip: "换座节点",
                type: l
            }), Ne = Pt({
                tooltip: "提示节点",
                type: l
            }), be = Pt({
                tooltip: "昵称节点",
                type: u
            }), De = Pt({
                tooltip: "结算资产变化节点",
                type: M
            }), Le = Pt({
                tooltip: "跑分节点",
                type: M
            }), Me = Pt({
                tooltip: "操作提示节点",
                type: d
            }), Ue = Pt({
                tooltip: "拼图图集",
                type: c
            }), we = Pt({
                tooltip: "操作提示拼图图集",
                type: c
            }), Be = Pt({
                tooltip: "胡牌倍数拼图图集",
                type: c
            }), He = Pt({
                tooltip: "加倍、跑分拼图图集",
                type: c
            }), Fe = Pt({
                tooltip: "图集",
                type: c
            }), ke = Pt({
                tooltip: "定缺听父节点",
                type: l
            }), Ve = Pt({
                tooltip: "vip会员节点脚本",
                type: H
            }), xe = Pt({
                tooltip: "闹钟节点",
                type: x
            }), le(We = ue((Ze = t((ze = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "animNode", Ze, a(t)), i(t, "infoBgPlayer", Xe, a(t)), i(t, "nodeDeposit", Je, a(t)), i(t, "headNode", je, a(t)), i(t, "headBoxNode", Ye, a(t)), i(t, "coinIcon", Qe, a(t)), i(t, "scoreIcon", qe, a(t)), i(t, "matchIcon", Ke, a(t)), i(t, "coinLabel", $e, a(t)), i(t, "nodeChat", et, a(t)), i(t, "nodeEmoji", tt, a(t)), i(t, "nodeZhuang", nt, a(t)), i(t, "nodeTing", it, a(t)), i(t, "nodeMaster", at, a(t)), i(t, "nodeExt", ot, a(t)), i(t, "nodeQue", rt, a(t)), i(t, "nodeUserScore", st, a(t)), i(t, "nodeReady", lt, a(t)), i(t, "ladderNode", ut, a(t)), i(t, "nodeChangeSeat", dt, a(t)), i(t, "nodeTips", ct, a(t)), i(t, "nickName", ht, a(t)), i(t, "settleMoneyNode", pt, a(t)), i(t, "paoNode", ft, a(t)), i(t, "opTips", _t, a(t)), i(t, "imgAtlas", gt, a(t)), i(t, "optAtlas", mt, a(t)), i(t, "huNumAtlas", Ct, a(t)), i(t, "numPaoAtlas", It, a(t)), i(t, "spriteAtlas", At, a(t)), i(t, "nodeLabelView", Et, a(t)), i(t, "vipMemberNodeCtr", vt, a(t)), i(t, "nodeUserClock", yt, a(t)), t.zhuangNodePos = null, t.queNodePos = null, t.tipNodePos = null, t.funnyEmojiOffset = [new h(125, 75, 0), new h(-125, 75, 0), new h(-125, 0, 0), new h(125, 55, 0)], t.centerPos = [new h(480, 100, 0), new h(-345, -100, 0), new h(-245, -184, 0), new h(345, -100, 0)], t.op_tips_pos = [new h(0, 0, 30), new h(30, 0, 0), new h(0, 0, -30), new h(-30, 0, 0)], t.quePos = [new h(480, -50, 0), new h(-185, -100, 0), new h(-245, -94, 0), new h(195, -100, 0)], t._handlerChatTextAutoHide = null, t._isReload = !1, t._uid = null, t._posID = null, t._seatId = null, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {
                    this.addModelListener(oe.INIT_GAMEINFO_POS, this.onInitUserPos), this.addModelListener(K.NET_REQ_GAME_CHANGE_DESK, this.cleanOtherPlayer), this.addModelListener(oe.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit), this.addModelListener(oe.USER_UPDATE_PROPERTY, this.updateCoin), this.addModelListener(K.VIEW_PLAYER_CHAT_SHOW, this.showChatMsg), this.addModelListener(oe.VIEW_PLAYER_EMOJ_SHOW, this.showEmojMsg), this.addModelListener(oe.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit), this.addModelListener(oe.VIEW_BROADCAST_DING_ZHUANG, this.palyerDingZhuang), this.addModelListener(K.BROADCAST_PRIVATE_ROOM_MASTER_INFO, this.broadcastMasterInfo), this.addModelListener(K.UPDATE_PRIVATE_ROOM_MASTER_INFO, this.broadcastMasterInfo), this.addModelListener(T.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(K.BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(T.EVENT_GAME_OVER, this.onGameOver), this.addModelListener(T.ROOM_ONLINE_STATU, this.onRoomOnlineStatu), this.addModelListener(oe.PRIVATE_CACEL_READY, this.onUpdateReadyStatus), this.addModelListener(T.LADDER_SCORE_CHANGE, this.updateUserLadder), this.addModelListener(T.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(oe.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener(K.BROADCAST_MACTH_JIFEN, this.updateScore), this.addModelListener(K.BROADCAST_SETTLE_MONEY, this.showMoneyAnim), this.addModelListener(oe.VIEW_UPDATE_XIA_ZHU_RESULT, this.updatePao), this.addModelListener(T.NOTIFY_BANKRUPGIFT_COUNTDOWN_TIMEOUT, this.countDownTimeOut), this.addModelListener(T.NOTIFY_BANKRUPGIFT_IS_GIVEUP, this._onIsGiveUp), this.addModelListener(oe.VIEW_CHECK_EXT_TAG, this.onCheckExtTag), this.addModelListener(oe.VIEW_UPDATE_USER_CLOCK, this.onUpdateUserClock)
                }, r.onLoad = function() {
                    p.on("canvas-resize", this.delayUpdatePos, this), this._isReload = !0, console.log("NodeUser: onload==>", this._uid), this.preloadRes(), this.onInitUserPos(null, null), this.initUI(), this.node.active = !1
                }, r.addGameComp = function() {
                    null == this.node && (this.node = S.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (S.isNull(t) && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, r.resetUserStatus = function() {
                    this.onUpdateOptionTips({
                        tag: "hide"
                    }), this.onUpdateOptionTips({
                        tag: "reset_dingque"
                    }), this.nodeZhuang.active = !1, this.nodeTing.active = !1, this.nodeQue.active = !1, this.updateOptipsVisible(!1), this.nodeExt.active = !1
                }, r.updateOptipsVisible = function(e) {
                    this.opTips.node.active = e
                }, r.reset = function() {
                    this.settleMoneyNode.node.active = !1, this.infoBgPlayer.active = !0, this.nodeChat.active = !1, this.nodeEmoji.active = !0, this.nodeDeposit.active = !1, this.nodeZhuang.active = !1, this.nodeTing.active = !1, this.nodeMaster.active = !1, this.nodeQue.active = !1, this.nodeReady.active = !1, this.paoNode.node.active = !1, this.nodeChangeSeat.active = !1, P.SelectGame.isInMatchRoom() ? (this.coinIcon.active = !1, this.scoreIcon.active = !1, this.matchIcon.active = !0) : P.SelectGame.isInPrivateRoom() ? (this.coinIcon.active = !1, this.scoreIcon.active = !0, this.matchIcon.active = !1) : (this.coinIcon.active = !0, this.scoreIcon.active = !1, this.matchIcon.active = !1)
                }, r.initUI = function() {
                    this.reset(), this.palyerRefresh(null, this._uid);
                    var e = this.doGameCompFun("getTagScale");
                    e && (this.nodeMaster.parent.scale = new h(e, e, e))
                }, r.preloadRes = function() {
                    this.getPreLoaderResource($.Atlas_Game_CardNum.bundle, $.Atlas_Game_CardNum.path, c), this.getPreLoaderResource($.Atlas_Player_Common.bundle, $.Atlas_Player_Common.path, c), this.getPreLoaderRes(ee[te.PLAYER_INTO].bundle, ee[te.PLAYER_INTO].path, f)
                }, r.start = function() {}, r.getUserLocalPos = function() {
                    return this._getUserPos(this._posID)
                }, r.getSeatId = function() {
                    return this._seatId
                }, r.initData = function(e) {
                    var t = this;
                    e && (this._seatId = e.seatId, this._uid = e.uid), this.node && 0 != this.node.isValid && this._uid && (null != W.getInstance().findPlayerWithUserId(this._uid) ? (this.palyerRefresh(null, this._uid), this.animNode.getComponent(_).scheduleOnce((function() {
                        t.checkEnterAnim(!0)
                    }))) : this.node.destroy())
                }, r.checkEnterAnim = function(e) {
                    var t, n = W.getInstance().findPlayerWithUserId(this._uid);
                    if (n && (0 != this.node.position.x || 0 != this.node.position.y || 0 != this.node.position.z)) {
                        var i = null == n || null == (t = n.gameUserInfo) ? void 0 : t.userEnterAnim;
                        if (S.isNotNull(i)) {
                            var a = P.DecorationData.getUserEnterAnimConfig(i);
                            if (a) {
                                var o, r = ((o = {})[0] = {
                                        pos: new h(120, 80, 0),
                                        scale: new h(1, 1, 1)
                                    }, o[1] = {
                                        pos: new h(-120, 80, 0),
                                        scale: new h(-1, 1, 1)
                                    }, o[2] = {
                                        pos: new h(-120, -100, 0),
                                        scale: new h(1, 1, 1)
                                    }, o[3] = {
                                        pos: new h(120, 80, 0),
                                        scale: new h(1, 1, 1)
                                    }, o),
                                    s = this.getUserLocalPos();
                                if (!r[s]) return;
                                var l = r[s].pos,
                                    u = r[s].scale,
                                    d = {
                                        resConf: a,
                                        aniName: a.animName,
                                        toPos: l,
                                        scale: u,
                                        parentNode: this.animNode
                                    };
                                this.animNode.active = !0, this.animNode.destroyAllChildren(), b.dispatch(K.VIEW_DESK_ANI_PLAY, q.AnimNormal.Enter, d), n.gameUserInfo.userEnterAnim = -1
                            }
                        } else e && this.showEnterAnim()
                    }
                }, r.showEnterAnim = function() {
                    var e, t = this;
                    if (this.node.active && (null == (e = this.animNode) || !e.active)) {
                        var n = this.animNode.getComponent(_),
                            i = this;
                        n.off(_.EventType.STOP, this.onAnimationStop, this), n.unscheduleAllCallbacks(), n.scheduleOnce((function() {
                            i.animNode.active = !0, n.on(_.EventType.STOP, t.onAnimationStop, t), n.play(), n.on(_.EventType.FINISHED, (function() {
                                var e;
                                null != (e = i.animNode) && e.isValid && (i.animNode.active = !1)
                            }))
                        }))
                    }
                }, r.onAnimationStop = function() {
                    this.animNode.active = !1
                }, r.onInitUserPos = function(e, t) {
                    this.delayUpdatePos()
                }, r.delayUpdatePos = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        e.updatePos()
                    }))
                }, r.palyerRefresh = function(e, t) {
                    if (t && t == this._uid) {
                        this.updatePos();
                        var n = W.getInstance().findPlayerWithUserId(t);
                        if (n && P.Desk) {
                            this.setLadderNodeShow(!this._checkUserPlayIng()), this.onUpdateOptionTips({
                                tag: "hide"
                            }), this.onUpdateOptionTips({
                                tag: "reset_dingque"
                            }), this.infoBgPlayer.active = !0, this.updateUserHead(n), this.updateUserHeadBox(n.gameUserInfo.userHeadBox), this.updateUserChatBox(n.gameUserInfo.userChatBox), this.updateUserScore(n.seatId), this.updateUserLadder(), this.updateCoin(null, n.userId), this.playerReady(null, n.userId), this.updateNick(n.userId), this.playerTing(null, n), this.broadcastMasterInfo(null), this.palyerDingZhuang(null), this._refreshHuanSanZhang(), this._refreshDingQue(), this._refreshPlayerStatus(), this.checkWaitGiveUp(), this.onCheckExtTag(null);
                            var i = this.node.getChildByName("GameChatVoicePrefab");
                            i ? (i.getComponent(w).setUserMid(t), i.getComponent(w).setseatPos(this._getUserPos(this._posID))) : console.log("vedio is null");
                            try {
                                var a, o, r;
                                null == (a = this.vipMemberNodeCtr) || a.setUserInfo(null == n ? void 0 : n.gameUserInfo, {
                                    isVip: null == n || null == (o = n.gameUserInfo) ? void 0 : o.isVip
                                }), this.nickName.node.getComponent(B).setUserInfo(null == n || null == (r = n.gameUserInfo) ? void 0 : r.isVip)
                            } catch (e) {}
                        }
                    }
                }, r.updateUserScore = function(e) {
                    this.nodeUserScore.getComponent(se).setSeatId(e)
                }, r.updateUserLadder = function() {
                    var e, t;
                    if (this._uid) {
                        var n = W.getInstance().findPlayerWithUserId(this._uid),
                            i = P.LadderData.getLadderConfig((null == n || null == (e = n.gameUserInfo) ? void 0 : e.ladderScore) || 0),
                            a = S.number_valueOf(null == i ? void 0 : i.level),
                            o = P.LadderData.getLadderRankIconByLevel(a),
                            r = (null == n || null == (t = n.gameUserInfo) ? void 0 : t.ladderRank) || 0,
                            s = P.LadderData.getLadderRankTxtByLevel(a, r);
                        this.ladderNode.getChildByName("ladderIcon").getComponent(O).setLocalLoad(o.bundle, o.path), this.ladderNode.getChildByName("ladderTxt").getComponent(O).setLocalLoad(s.bundle, s.path)
                    }
                }, r.updateUserHead = function(e) {
                    var t, n = null == e || null == (t = e.gameUserInfo) ? void 0 : t.sex,
                        i = W.getInstance().getUserAvatar(null == e ? void 0 : e.gameUserInfo),
                        a = this.headNode.getComponent(O);
                    S.string_isHttp(i) ? a.setRemoteUrl(i, (function() {
                        2 == n ? a.setLocalLoad($.Picture_UserBigHead_girl.bundle, $.Picture_UserBigHead_girl.path) : a.setLocalLoad($.Picture_UserBigHead_boy.bundle, $.Picture_UserBigHead_boy.path)
                    })) : 2 == n ? a.setLocalLoad($.Picture_UserBigHead_girl.bundle, $.Picture_UserBigHead_girl.path) : a.setLocalLoad($.Picture_UserBigHead_boy.bundle, $.Picture_UserBigHead_boy.path)
                }, r.updateUserHeadBox = function(e) {
                    this.headBoxNode.getChildByName("GameHeadDecorationPrefab").getComponent(V).setHeadBox(e)
                }, r.updateUserChatBox = function(e) {
                    this.nodeChat.getComponent(k).updateUserChatBox(e);
                    var t = this.node.getChildByName("GameChatVoicePrefab");
                    t && t.getComponent(w).updateUserChatBox(e)
                }, r.updateCoin = function(e, t) {
                    if (void 0 === t && (t = null), t && t == this._uid) {
                        var n = W.getInstance().findPlayerWithUserId(t);
                        this.coinLabel.string = S.string_moneyToShortNumber(n ? n.money : 0, !0)
                    }
                }, r.updateNick = function(e) {
                    void 0 === e && (e = null), e && e == this._uid && (this.nickName.node.active = !1)
                }, r.updatePos = function() {
                    var e, t = this;
                    if (null != (e = this.node) && e.isValid) {
                        var n = P.GameInfo.getUserPosByPosId(this._getUserPos(this._posID));
                        if (null !== n && !S.table_isEmpty(n)) {
                            var i = N.camera2D.screenToWorld(N.camera3D.worldToScreen(n)),
                                a = this.node.parent.getComponent(g).convertToNodeSpaceAR(i);
                            0 == a.x && 0 == a.y && 0 == a.z || (this.setUserPos(a, this._posID), this.node.active ? this.animNode.getComponent(_).scheduleOnce((function() {
                                t.checkEnterAnim(!1)
                            })) : (this.node.active = !0, this.animNode.getComponent(_).scheduleOnce((function() {
                                t.checkEnterAnim(!0)
                            }))))
                        }
                    }
                }, r._getUserPos = function(e) {
                    var t = this.doGameCompFun("getUserPos", e);
                    return S.isNull(e) && (t = e), t
                }, r.setUserPos = function(e, t) {
                    var n = this;
                    switch (t = this._getUserPos(t)) {
                        case 0:
                            this.node.position = e, this.nodeReady.position = new h(180, 70, 0), this.settleMoneyNode.node.position = new h(180, 45, 0), this.ladderNode.getComponent(g).anchorPoint = new m(0, .5), this.opTips.node.position = new h(540, 45, 0), this.ladderNode.position = new h(-42, -46, 0), this.paoNode.node.getComponent(g).anchorPoint = new m(0, .5), this.paoNode.node.position = new h(210, 45, 0), this.nodeLabelView.position = new h(68, 100, 0);
                            break;
                        case 1:
                            this.node.position = e, this.nodeReady.position = new h(-180, 70, 0), this.settleMoneyNode.node.position = new h(-95, 13, 0), this.settleMoneyNode.node.getComponent(g).anchorPoint = new m(1, .5), this.opTips.node.position = new h(-236, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new m(1, .5), this.ladderNode.position = new h(-95, 13, 0), this.nodeUserScore.position = new h(-50, 100, 0), this.paoNode.node.getComponent(g).anchorPoint = new m(1, .5), this.paoNode.node.position = new h(-180, 45, 0), this.nodeLabelView.position = new h(-68, 100, 0);
                            break;
                        case 2:
                            this.node.position = e, this.nodeReady.position = new h(-180, 70, 0), this.settleMoneyNode.node.position = new h(-95, 13, 0), this.settleMoneyNode.node.getComponent(g).anchorPoint = new m(1, .5), this.opTips.node.position = new h(-236, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new m(1, .5), this.ladderNode.position = new h(-95, 13, 0), this.paoNode.node.getComponent(g).anchorPoint = new m(1, .5), this.paoNode.node.position = new h(-180, 45, 0), this.nodeLabelView.position = new h(-68, 100, 0);
                            break;
                        case 3:
                            this.node.position = e, this.nodeReady.position = new h(180, 70, 0), this.settleMoneyNode.node.position = new h(95, 13, 0), this.opTips.node.position = new h(260, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new m(0, .5), this.ladderNode.position = new h(95, 13, 0), this.nodeUserScore.position = new h(-50, 100, 0), this.paoNode.node.getComponent(g).anchorPoint = new m(0, .5), this.paoNode.node.position = new h(219, 45, 0), this.nodeLabelView.position = new h(68, 100, 0)
                    }
                    this.scheduleOnce((function() {
                        n.nodeLabelView.getComponent(C).updateLayout()
                    }), .1), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent), this.tipNodePos = this.opTips.node.getPosition(), this.doGameCompFun("updateNodeUserScorePos", this.nodeUserScore, t), P.PrivateData.updateUserPos(this.UID, e)
                }, r.modifyPlayerDeposit = function(e, t) {
                    null != t.mid && t.mid == this._uid && (this.nodeDeposit.active = t.ai)
                }, r.cleanDepositStatus = function() {
                    this.nodeDeposit.active = !1
                }, r.showEmojMsg = function(e, t) {
                    var n = this;
                    if (this._uid === t.mid) {
                        if (null != t.faceValue) {
                            var i = t.faceValue - Math.pow(2, 16),
                                a = q.ChatEmojiAniConf[i];
                            if (a) {
                                this.nodeEmoji.active = !0, I.stopAllByTarget(this.nodeEmoji);
                                var o = this.nodeEmoji.getComponent(d);
                                o && (o.spriteFrame = null);
                                var r = this.nodeEmoji.getChildByName("emojiSpine");
                                if (r && (r.active = !0), r) {
                                    var s = r.getComponent(A.Skeleton);
                                    s.setCompleteListener((function(e) {
                                        n.nodeEmoji.active = !1
                                    })), s.setAnimation(0, a, !1)
                                } else {
                                    var l = $.Spine_Emoji;
                                    D.loadSkeleDataInBundle(l.bundle, l.path, this, null, function(e, t) {
                                        if (!e && n.nodeEmoji && n.nodeEmoji.isValid) {
                                            var i = D.createSpineNode(n.nodeEmoji, t, null, null, !1);
                                            if (i) {
                                                i.name = "emojiSpine";
                                                var o = i.getComponent(A.Skeleton);
                                                o.setCompleteListener((function(e) {
                                                    n.nodeEmoji.active = !1
                                                })), o.setAnimation(0, a, !1)
                                            }
                                        }
                                    }.bind(this))
                                }
                                var u = {};
                                u.mid = t.mid, u.operate = "emoji", u.param = {
                                    index: t.faceValue - Math.pow(2, 16)
                                }, P.PrivateData.setChatHistoryMsgData(u)
                            } else {
                                var p = q.ChatEmojiSpriteConf[i];
                                if (p) {
                                    this.nodeEmoji.active = !0, I.stopAllByTarget(this.nodeEmoji);
                                    var f = this.funnyEmojiOffset[this._posID] || new h(0, 0, 0),
                                        _ = this.headNode ? this.headNode.getPosition() : new h(0, 0, 0);
                                    this.nodeEmoji.setPosition(_.x + f.x, _.y + f.y, 0), this.nodeEmoji.setScale(1.5, 1.5, 1);
                                    var g = this.nodeEmoji.getChildByName("emojiSpine");
                                    g && (g.active = !1), this.getPreLoaderRes(F.Atlas_Emoji.bundle, F.Atlas_Emoji.path, c, (function(e) {
                                        if (e && n.nodeEmoji && n.nodeEmoji.isValid) {
                                            var t = e.getSpriteFrame(p);
                                            if (t) {
                                                var i = n.nodeEmoji.getComponent(d) || n.nodeEmoji.addComponent(d);
                                                i.spriteFrame = t, i.sizeMode = d.SizeMode.TRIMMED, n.nodeEmoji.active = !0, E(n.nodeEmoji).delay(2).call((function() {
                                                    if (n.nodeEmoji && n.nodeEmoji.isValid) {
                                                        var e = n.nodeEmoji.getComponent(d);
                                                        e && (e.spriteFrame = null), n.nodeEmoji.setPosition(0, 0, 0), n.nodeEmoji.setScale(1, 1, 1), n.nodeEmoji.active = !1
                                                    }
                                                })).start()
                                            }
                                        }
                                    }));
                                    var m = {};
                                    return m.mid = t.mid, m.operate = "emoji", m.param = {
                                        index: i
                                    }, void P.PrivateData.setChatHistoryMsgData(m)
                                }
                                console.warn("Err:不支持的快捷表情", t)
                            }
                        }
                    } else this.nodeEmoji.active = !1
                }, r.showChatMsg = function(e, t) {
                    var n = this;
                    console.log("聊天接收到的是:", t);
                    var i = W.getInstance().findPlayerWithUserId(t.mid);
                    if (this._uid === t.mid) {
                        var a = this.doGameCompFun("getRelativeLocalDir", i.seatId);
                        if (S.isNotNull(a, t.msg)) {
                            var o = t.msg,
                                r = "",
                                s = -1;
                            for (var l in q.ChatText)
                                if (Object.prototype.hasOwnProperty.call(q.ChatText, l)) {
                                    var d = q.ChatText[l];
                                    if (S.isArray(d)) {
                                        var c = d.indexOf(o);
                                        if (-1 != c) {
                                            r = l, s = c;
                                            break
                                        }
                                    }
                                } if (S.string_isEmpty(r) || -1 == s) return;
                            var h = t.sex,
                                p = 2 == h ? ae.QuickChatXiaoYa : ae.QuickChatXiaoBo,
                                f = r + "_" + s;
                            "hot" === r ? (f = "classic_" + (s + 1), p = 2 == h ? G.QuickChatXiaoYa : G.QuickChatXiaoBo) : "classic" === r && (f = "classic_" + (s + 13), p = 2 == h ? G.QuickChatXiaoYa : G.QuickChatXiaoBo), ie.getInstance().playEffect({
                                bundle: p.bundle,
                                path: p.path + f
                            }), this.stopSchedulerOnce(this._handlerChatTextAutoHide), this._handlerChatTextAutoHide = null, this.nodeChat.active = !0;
                            var _ = ["right", "left", "bottom_left"],
                                m = _[0];
                            1 !== a && 2 !== a || (m = _[a]);
                            var I = null;
                            if (_.forEach((function(e, t) {
                                    var i = n.nodeChat.getChildByName(e);
                                    e == m ? (i.active = !0, I = i) : i.active = !1
                                })), !I) return;
                            var A = I.getChildByName("node"),
                                E = null == A ? void 0 : A.getChildByName("bg"),
                                y = null == E ? void 0 : E.getChildByName("Label");
                            if (y) {
                                var T = y.getComponent(u);
                                T.string = String(t.msg), T.updateRenderData(), y.parent.getComponent(C).updateLayout();
                                var O = y.parent.getComponent(g).height;
                                y.parent.parent.getComponent(g).height = O, y.parent.parent.getChildByName("chatBg").getComponent(v).updateAlignment()
                            }
                            this._handlerChatTextAutoHide = this.addSchedulerOnce(J.ChatTextAutoHide, S.handler(this, this.hideChatText));
                            var R = {};
                            R.mid = t.mid, R.operate = "quickMsg", R.param = {
                                text: t.msg
                            }, P.PrivateData.setChatHistoryMsgData(R)
                        }
                    } else this.nodeChat.active = !1
                }, r.hideChatText = function() {
                    this.nodeChat && 1 == this.nodeChat.isValid && (this.nodeChat.active = !1), this._handlerChatTextAutoHide = null
                }, r.onClickUserInfo = function(e) {
                    if (!P.SelectGame.isInMatchRoom()) {
                        var t = W.getInstance().findPlayerWithUserId(this._uid);
                        if (t)
                            if (ie.getInstance().playEffect(ae.CommClick), P.Desk.PlayType != q.PlayType.MATCH) {
                                var n = {
                                    uid: t.userId,
                                    posID: t.seatId
                                };
                                b.dispatch(K.GAME_OPEN_POPUP, ne.GameHeadInfoPrefab, n, {})
                            } else b.dispatch(K.SYS_TOAST_TIP, {
                                content: "比赛中无法查看玩家信息"
                            })
                    }
                }, r.cleanOtherPlayer = function(e, t) {
                    this._uid, P.User.getUserMid()
                }, r.palyerExit = function(e, t) {
                    var n;
                    void 0 === t && (t = null), null != (n = P.Desk) && n.isPlayIng() || S.isNotNull(t) && t == this._uid && (this.node.active = !1)
                }, r.palyerDingZhuang = function(e, t) {
                    var n = S.number_valueOf(z.getInstance().bankSeatId, -1);
                    if (n >= 0) {
                        var i = W.getInstance().findPlayerWithSeatId(n),
                            a = (null == i ? void 0 : i.userId) == this._uid;
                        if (this.nodeZhuang.scale = new h(.43, .43, .43), this.nodeZhuang.active = a, null == this.zhuangNodePos && (this.nodeLabelView.getComponent(C).updateLayout(), this.zhuangNodePos = this.nodeZhuang.getPosition()), a && null != e) {
                            var o = this.doGameCompFun("getTagScale"),
                                r = this.centerPos[this._getUserPos(this._posID)];
                            o && r && (r = new h(r.x / o, r.y / o, r.z / o)), this.nodeZhuang.setPosition(r), this.nodeZhuang.scale = new h(0, 0, 0), E().target(this.nodeZhuang).to(.016, {
                                scale: new h(1.2, 1.2, 1),
                                position: r
                            }).to(.1, {
                                scale: new h(.7, .7, 1),
                                position: r
                            }).to(.1, {
                                scale: new h(1.1, 1.1, 1),
                                position: r
                            }).to(.1, {
                                scale: new h(.8, .8, 1),
                                position: r
                            }).to(.1, {
                                scale: new h(1, 1, 1),
                                position: r
                            }).delay(1).to(.2, {
                                scale: new h(.43, .43, 1),
                                position: this.zhuangNodePos
                            }, {
                                onComplete: function(e) {
                                    e.parent.getComponent(C).updateLayout(!0)
                                }
                            }).start(), ie.getInstance().playEffect(ae.GameZhuang)
                        }
                    } else this.nodeZhuang.active = !1
                }, r.playerTing = function(e, t) {
                    void 0 === t && (t = null);
                    var n, i = t.opGroups,
                        a = !1,
                        o = 0;
                    if (!S.table_isEmpty(i))
                        for (var r = i.length - 1; r >= 0; r--)
                            if (i[r] && i[r].opCode && j[i[r].opCode]) {
                                o = i[r].opCode, a = !0;
                                break
                            } a ? this.nodeTing.active = a : j[null == (n = t) ? void 0 : n.tingOpcode] && (o = t.tingOpcode, this.nodeTing.active = !0), this.checkExtTing({
                        userId: t.userId,
                        opCode: o,
                        isReconnect: !0
                    })
                }, r.onUpdateTingBySeat = function(e, t, n) {
                    void 0 === n && (n = !1), z.getInstance().mySeatId == t && (this.nodeTing.active = n)
                }, r.onOperationResult = function(e) {
                    e.userId === this._uid && (e.opCode >= Y.OPE_RIGHT_CHI && e.opCode <= Y.OPE_HUA_GANG_TO_HUA_QUAN_QI ? e.opCode >= Y.OPE_GANG ? (ie.getInstance().playEffect(ae.Gang), "" == ae.Gang.path && ie.getInstance().playEffect(ae.Operate)) : e.opCode >= Y.OPE_AN_GANG ? (ie.getInstance().playEffect(ae.Angang), "" == ae.Gang.path && ie.getInstance().playEffect(ae.Operate)) : ie.getInstance().playEffect(ae.Operate) : e.opCode == Y.OPE_MING_LOU || e.opCode == Y.OPE_MING_LV ? this.doGameCompFun("onOperationEffect", this.UID, e.opCode) || ie.getInstance().playEffect(ae.Operate) : e.opCode == Y.OPE_ZI_MO || e.opCode == Y.OPE_HU ? ie.getInstance().playEffect(ae.Hupai) : j[e.opCode] && ie.getInstance().playEffect(ae.Operate), this.checkTing(e), this.nodeUserScore.getComponent(se).onOperationResult(e))
                }, r.checkTing = function(e) {
                    j[e.opCode] && e.userId == this._uid && (this.nodeTing.active = !0), this.checkExtTing({
                        userId: e.userId,
                        opCode: e.opCode,
                        isReconnect: !1
                    })
                }, r.checkExtTing = function(e) {
                    var t = this.doGameCompFun("checkShowTingTag", e);
                    S.isNull(t) || (this.nodeTing.active = t), this.doGameCompFun("checkExtTing", this._uid, e, this.nodeExt, e.isReconnect)
                }, r.checkOpcodeIsTing = function(e) {
                    this.doGameCompFun("checkOpcodeIsTing", e)
                }, r.onCheckExtTag = function(e) {
                    this.doGameCompFun("checkExtTag", this.nodeExt, this._uid, this._seatId)
                }, r.broadcastMasterInfo = function(e) {
                    var t = P.PrivateData.getPrivateRoomMasterInfo();
                    S.isNotNull(t) && this._uid == t.userId ? this.nodeMaster.active = !0 : this.nodeMaster.active = !1
                }, r.playerReady = function(e, t) {
                    if (this.checkChangeBtn(), t == this._uid && !this._checkUserPlayIng()) {
                        if (S.isNotNull(t)) {
                            var n = W.getInstance().findPlayerWithUserId(t);
                            n && (this.nodeReady.active = 1 == n.isReady)
                        }
                        this.nodeReady.active && this.nodeUserScore.getComponent(se).onRestView()
                    }
                }, r._checkUserPlayIng = function() {
                    var e, t = this.doGameCompFun("checkUserPlayIng", this._uid);
                    return console.log("玩家玩牌状态-------------_checkUserPlayIng--:", this._uid, t), S.isNotNull(t) ? t : 1 == (null == (e = P.Desk) ? void 0 : e.isPlayIng())
                }, r.checkChangeBtn = function() {
                    if (!P.PrivateData.isTwoPlayerModule()) {
                        if (P.SelectGame.isInPrivateRoom() && !z.getInstance().isMySelfByUserId(this._uid))
                            if (1 == W.getInstance().getMyPlayerInfo().isReady) this.nodeChangeSeat.active = !1;
                            else {
                                var e = W.getInstance().findPlayerWithUserId(this._uid);
                                null != e && e.userId && (1 == P.PrivateData.getPrivateRoundFinish() || 0 == P.PrivateData.getPrivateRounds().current ? this.nodeChangeSeat.active = 1 != e.isReady : this.nodeChangeSeat.active = !1)
                            }
                        else this.nodeChangeSeat.active = !1;
                        this.nodeChangeSeat.active && this.nodeUserScore.getComponent(se).onRestView()
                    }
                }, r.onGameStart = function() {
                    this.print("-----------游戏开始"), this._hideNodes(), this.onUpdateOptionTips({
                        tag: "hide"
                    }), this.nodeExt.destroyAllChildren()
                }, r.setLadderNodeShow = function(e) {
                    this.ladderNode.active = e
                }, r.onGameOver = function(e) {
                    this.setLadderNodeShow(!0), this.nodeQue.active = !1, this.nodeExt.destroyAllChildren(), this.checkChangeBtn(), console.log("userPrefab----游戏结束", this._uid), this.doGameCompFun("onUserPrefabGameOver")
                }, r.onClickChangeSeat = function(e, t) {
                    if (this._uid) {
                        var n = W.getInstance().getMyPlayerInfo(),
                            i = W.getInstance().findPlayerWithUserId(this._uid);
                        if (null != i && null != n) {
                            var a = {
                                    sUid: P.User.getUserMid(),
                                    sSeatId: re.getDirFromSeatId(n.seatId),
                                    tUid: i.userId,
                                    tSeatId: re.getDirFromSeatId(i.seatId)
                                },
                                o = {
                                    cmd: U.CLIENT_APPLY_JIFEN_ROOM_CHANGE_SEAT,
                                    body: a
                                };
                            console.log("onClickChangeSeat", o), b.dispatch(K.NET_SEND_MSG, o), b.dispatch(K.SYS_TOAST_TIP, {
                                content: "换座请求已发出..."
                            })
                        } else console.log("onClickChangeSeat", "玩家数据丢失")
                    }
                }, r.onRoomOnlineStatu = function(e, t) {
                    var n = this;
                    S.table_isEmpty(t) || S.table_isEmpty(t.users) || t.users.forEach((function(e) {
                        e.userId != n._uid || (e.status == R.Offline ? n.nodeTips.active = !0 : n.nodeTips.active = !1)
                    }))
                }, r.onUpdateReadyStatus = function(e, t) {
                    void 0 === t && (t = null), t.userId == this._uid && (W.getInstance().findPlayerWithUserId(this._uid).isReady ? this.nodeReady.active = !0 : this.nodeReady.active = !1)
                }, r.onReconnectSuccess = function() {
                    this._hideNodes()
                }, r.onDealCard = function() {
                    this._hideNodes()
                }, r._hideNodes = function() {
                    this.nodeReady.active = !1, this.nodeTing.active = !1, this.setLadderNodeShow(!1), P.SelectGame.isInPrivateRoom() && (this.nodeChangeSeat.active = !1)
                }, r.showMoneyAnim = function(e, t) {
                    var n = this,
                        i = W.getInstance().findPlayerWithUserId(this._uid);
                    if (t && i && null != t[i.seatId] && 0 != t[i.seatId]) {
                        this.settleMoneyNode.unscheduleAllCallbacks(), this.settleMoneyNode.node.active = !1;
                        var a = S.number_valueOf(t[i.seatId] || "0");
                        console.log("资产变化", a), 0 != a && (a >= 0 ? this.settleMoneyNode.setString("+" + a, "win/") : this.settleMoneyNode.setString("" + a, "lose/"), this.settleMoneyNode.node.active = !0, this.settleMoneyNode.scheduleOnce((function() {
                            n.settleMoneyNode.node.active = !1
                        }), 2))
                    }
                }, r.updateScore = function(e, t) {
                    var n = X.getInstance().getTotalInfoByUId(this._uid);
                    if (n) {
                        var i, a = this.node.position,
                            o = ((i = {})[0] = {
                                position: new h(90, 50, 0),
                                anchorPoint: new m(0, .5)
                            }, i),
                            r = new h(90, 50, 0),
                            s = new m(0, .5);
                        if (o[this.PosID]) r = o[this.PosID].position, s = o[this.PosID].anchorPoint;
                        else {
                            var l = this.nodeReady.position.x >= 0 ? 1 : -1;
                            r.x = r.x * l, s.x = l > 0 ? 0 : 1
                        }
                        b.dispatch(T.SHOW_MATCH_JIFEN, n.winMoney, r.add(a), s)
                    }
                }, r.updatePao = function(e, t, n) {
                    var i = this;
                    void 0 === n && (n = !1);
                    var a = W.getInstance().findPlayerWithUserId(this._uid);
                    if (a) {
                        var o = P.Desk.getXiaZhuResult(null == a ? void 0 : a.seatId, t.xiaZhuType);
                        if ((null == o ? void 0 : o.length) > 0)
                            if (this.doGameCompFun("hasXiaZhu")) this.onUpdateOptionTips({
                                tag: "double",
                                info: o[0],
                                isReconnect: n
                            }), t.seatId != this._seatId || n || this.doGameCompFun("playXiaZhuEffect", S.number_valueOf(null == t ? void 0 : t.option), null == t ? void 0 : t.xiaZhuType);
                            else {
                                var r = S.number_valueOf(o[0].option || "0");
                                console.log("刷新跑分", r), this.paoNode.string = r > 0 ? "p" + r : "b", this.paoNode.node.active = !0, z.getInstance().hasAllXiaZhuFinish(t.xiaZhuType) && (n ? (this.paoNode.node.active = !1, this.nodeUserScore.getComponent(se).updateView()) : this.paoNode.scheduleOnce((function() {
                                    i.paoNode.node.active = !1, i.nodeUserScore.getComponent(se).updateView()
                                }), 1.5)), n || (null == t ? void 0 : t.seatId) != this._seatId || this.nodeUserScore.getComponent(se).operatoinEffect({
                                    seatId: this._seatId,
                                    option: S.number_valueOf(null == t ? void 0 : t.option)
                                })
                            }
                    }
                }, r._refreshDingQue = function() {
                    var e = this,
                        t = z.getInstance().dingQueResult;
                    S.table_isEmpty(t) || Object.keys(t).forEach((function(n) {
                        var i;
                        e.getSeatId() === (null == (i = t[n]) ? void 0 : i.seatId) && e.onDingQueOptionsResult(t[n])
                    }))
                }, r._refreshHuanSanZhang = function() {
                    var e, t, n = z.getInstance().getGameInfoByTag(Z.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var i = n.status, a = 0; a < i.length; a++) a + 1 != z.getInstance().mySeatId && a + 1 == this._seatId && (0 == i[a] ? this.onUpdateOptionTips({
                            tag: "show_hsz"
                        }) : 1 == i[a] && this.onUpdateOptionTips({
                            tag: "hide"
                        }))
                }, r._refreshPlayerStatus = function() {
                    var e = this,
                        t = P.Desk.getXiaZhuResult(this._seatId, -1);
                    (null == t ? void 0 : t.length) > 0 && t.forEach((function(t) {
                        null != (null == t ? void 0 : t.option) && e.updatePao(null, t, !0)
                    }));
                    var n = z.getInstance().getGameInfoByTag(Z.MAI_DUAN_MEN_STATUS); - 1 == (null == n ? void 0 : n.option) ? this.onUpdateOptionTips({
                        tag: "maiduanmen",
                        info: n,
                        isReconnect: !0
                    }) : 1 != (null == n ? void 0 : n.option) && 0 != (null == n ? void 0 : n.option) || this.onUpdateOptionTips({
                        tag: "maiduanmen_reslut",
                        info: n,
                        isReconnect: !0
                    });
                    var i = z.getInstance().getGameInfoByTag(Z.RECONNECT_HU_INFO);
                    (null == i ? void 0 : i.length) > 0 && i.forEach((function(t) {
                        t.seatId == e._seatId && e.onUpdateOptionTips({
                            tag: "hu",
                            huNum: t.totalFan
                        })
                    }));
                    var a = z.getInstance().getGameInfoByTag(Z.RECONNECT_GIVEUP_INFO);
                    (null == a ? void 0 : a.length) > 0 && a.forEach((function(t) {
                        t == e._seatId && e.onGiveUpResult({
                            isGiveUp: 1
                        })
                    })), this.nodeUserScore.getComponent(se).showSpecialView({
                        refresh: !0,
                        seatId: this._seatId
                    })
                }, r.checkWaitGiveUp = function() {
                    var e, t = this,
                        n = z.getInstance().getGameInfoByTag(Z.RECONNECT_WAIT_GIVEUP);
                    (null == n || null == (e = n.seatIdList) ? void 0 : e.length) > 0 && (null == n || n.seatIdList.forEach((function(e) {
                        if (e == t._seatId) {
                            var i = null;
                            null != n && n.timePass && null != n && n.curTime && (i = (null == n ? void 0 : n.timePass) - (S.time() - (null == n ? void 0 : n.curTime))), t.onGiveUp(i)
                        }
                    })))
                }, r._updateDodeQuePos = function() {
                    this.nodeQue.active && this.nodeQue.setPosition(this.zhuangNodePos)
                }, r.onDingQueOptionsResult = function(e) {
                    var t = this;
                    if (null != (null == e ? void 0 : e.seatId) && (null == e ? void 0 : e.seatId) == this._seatId) {
                        if (this.onUpdateOptionTips({
                                tag: "hide"
                            }), I.stopAllByTarget(this.nodeQue), -1 == (null == e ? void 0 : e.option)) return void this.onUpdateOptionTips({
                            tag: "show_dingque"
                        });
                        var n = (null == e ? void 0 : e.option) == Q.WAN ? "wan" : (null == e ? void 0 : e.option) == Q.TIAO ? "tiao" : "tong";
                        this.nodeQue.getComponent(d).spriteFrame = this.imgAtlas.spriteFrames["doudizhu/player/icon_" + n], this.nodeQue.active = !0, this.nodeQue.scale = new h(.32, .32, .32), null == this.queNodePos && (this.nodeLabelView.getComponent(C).updateLayout(), this.queNodePos = this.nodeQue.getPosition());
                        var i = this.doGameCompFun("getTagScale"),
                            a = this.quePos[this._getUserPos(this._posID)];
                        if (i && a && (a = new h(a.x / i, a.y / i, a.z / i)), this.nodeQue.setPosition(a), a) {
                            if (!z.getInstance().isDingQueFinish()) return void(z.getInstance().isMySelfSeat(this._seatId) ? E(this.nodeQue).to(0, {
                                scale: new h(0, 0, 0),
                                position: a
                            }).delay(.1).to(.016, {
                                scale: new h(1, 1, 1),
                                position: a
                            }, {
                                onComplete: function() {
                                    t.nodeQue.setPosition(a)
                                }
                            }).start() : this.onUpdateOptionTips({
                                tag: "show_dingque"
                            }));
                            if (e.isReconnect) return;
                            this.nodeQue.setPosition(a), this.nodeQue.scale = new h(0, 0, 1), E().target(this.nodeQue).to(.016, {
                                scale: new h(1.5, 1.5, 1),
                                position: a
                            }).to(.1, {
                                scale: new h(.1, .1, 1),
                                position: a
                            }).to(.1, {
                                scale: new h(1.3, 1.3, 1),
                                position: a
                            }).to(.1, {
                                scale: new h(.9, .9, 1),
                                position: a
                            }).to(.1, {
                                scale: new h(1, 1, 1),
                                position: a
                            }).delay(1).to(.2, {
                                scale: new h(.32, .32, .32),
                                position: this.queNodePos
                            }, {
                                onComplete: function(e) {
                                    e.parent.getComponent(C).updateLayout(!0)
                                }
                            }).start()
                        }
                    }
                }, r._getOptipsPos = function(e) {
                    var t = this.doGameCompFun("getUserPos", this.PosID) || this.PosID,
                        n = this.op_tips_pos[t];
                    if (n) {
                        var i = N.camera2D.screenToWorld(N.camera3D.worldToScreen(n));
                        return e.getComponent(g).convertToNodeSpaceAR(i)
                    }
                }, r.setOptionTipsPos = function(e, t) {
                    void 0 === t && (t = null);
                    var n = this._getOptipsPos(t || e);
                    return n && e.setPosition(n), n
                }, r._resetOptipNode = function() {
                    I.stopAllByTarget(this.opTips.node), this.opTips.node.destroyAllChildren(), this.opTips.unscheduleAllCallbacks(), this.opTips.node.scale = new h(1, 1, 1), this.updateOptipsVisible(!1), this.tipNodePos && this.opTips.node.setPosition(this.tipNodePos)
                }, r.onOperationResultCheckTips = function(e) {
                    this.isWaitingToOperation() && this.onUpdateOptionTips({
                        tag: "wait_operation_over",
                        info: e
                    });
                    var t = {
                        opCode: e.opCode,
                        info: e,
                        nodeExt: this.nodeExt,
                        userId: this._uid,
                        posID: this._getUserPos(this._posID),
                        pos: this.tipNodePos,
                        atlas: this.optAtlas
                    };
                    this.doGameCompFun("onOperationResultCheckTips", this.opTips, t)
                }, r.onUpdateOptionTips = function(e) {
                    var t = this;
                    if (console.log("用户操作提示-----onUpdateOptionTips", this.UID, e), e && null != e.tag)
                        if (this._resetOptipNode(), "show_dingque" == e.tag) this._uid != P.User.getUserMid() && (this.opTips.spriteFrame = this.optAtlas.spriteFrames.dingque_txt, this.updateOptipsVisible(!0));
                        else if ("hide" == e.tag) this.updateOptipsVisible(!1);
                    else if ("give_up" == e.tag) this._showGiveView(e.time);
                    else if ("reset_dingque" == e.tag) this.nodeQue.active = !1, this.updateOptipsVisible(!1);
                    else if ("hu" == e.tag) this._showHuPaiTips(e);
                    else if ("show_hsz" == e.tag) this._showHuanSanZhang();
                    else if ("double" == e.tag) this._showDoubleInfo(e.info, e.isReconnect);
                    else if ("maiduanmen" == e.tag) {
                        if (this._uid == P.User.getUserMid()) {
                            var n = e.info;
                            if (null != n && n.seatId && !z.getInstance().isMySelfSeat(null == n ? void 0 : n.seatId)) {
                                var i = re.calculatePlayerSeat(z.getInstance().mySeatId, null == n ? void 0 : n.seatId),
                                    a = 1 == i ? "maiduan_down" : 2 == i ? "maiduan_opponent" : "maiduan_up";
                                this.opTips.spriteFrame = this.optAtlas.spriteFrames[a], this.updateOptipsVisible(!0), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent)
                            }
                        }
                    } else if ("maiduanmen_reslut" == e.tag) {
                        var o = e.info;
                        if (1 != e.isReconnect && (null == o ? void 0 : o.seatId) == this._seatId && (this.opTips.spriteFrame = this.optAtlas.spriteFrames[1 == (null == o ? void 0 : o.option) ? "maiduanmen" : "no_maiduanmen"], this.updateOptipsVisible(!0), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent), E().target(this.opTips.node).delay(1.5).call((function() {
                                t.updateOptipsVisible(!1)
                            })).start()), 1 == (null == o ? void 0 : o.option)) {
                            this.nodeExt.active = !0, this.removeNodeChildByName(this.nodeExt, "duan");
                            var r = S.create_2DSprite(this.spriteAtlas.spriteFrames["doudizhu/player/duan"], "duan");
                            r.scale = new h(.8, .8, 1), this.nodeExt.addChild(r)
                        }
                    } else if ("wait_operation" == e.tag) this.opTips.spriteFrame = this.optAtlas.spriteFrames.wait_operation, this.updateOptipsVisible(!0);
                    else if ("wait_operation_over" == e.tag) {
                        var s;
                        1 == this.opTips.node.active && "wait_operation" == (null == (s = this.opTips.spriteFrame) ? void 0 : s.name) && this.updateOptipsVisible(!1)
                    } else {
                        var l = this._getOptipsPos(this.opTips.node.parent);
                        e.nodeExt = this.nodeExt, e.userId = this._uid, e.posID = this._getUserPos(this._posID), this.doGameCompFun("onUpdateOptionTips", this.opTips, e, this.optAtlas, l)
                    }
                }, r.isWaitingToOperation = function() {
                    var e;
                    if (1 == this.opTips.node.active && "wait_operation" == (null == (e = this.opTips.spriteFrame) ? void 0 : e.name)) return !0
                }, r.removeNodeChildByName = function(e, t) {
                    var n = e.getChildByName(t);
                    n && (n.removeFromParent(), n.destroy())
                }, r._showDoubleInfo = function(e, t) {
                    var n = this,
                        i = null == e ? void 0 : e.option,
                        a = this.doGameCompFun("getXiazhuRateFramesName", i, e.xiaZhuType, this.opTips.node, this.optAtlas);
                    null != a ? (this.opTips.spriteFrame = this.optAtlas.spriteFrames[a], this.updateOptipsVisible(!0), z.getInstance().hasAllXiaZhuFinish(e.xiaZhuType) && this.onXiaZhuFinish(e, t)) : this.doGameCompFun("checkXiaZhuFinish", e, (function() {
                        n.onXiaZhuFinish(e, t)
                    }))
                }, r.onXiaZhuFinish = function(e, t) {
                    var n = this;
                    void 0 === t && (t = !1), this.doGameCompFun("updateXiaZhuView", null == e ? void 0 : e.option, this.nodeExt, this.spriteAtlas, e.xiaZhuType), t ? (this.updateOptipsVisible(!1), this.nodeUserScore.getComponent(se).updateView()) : (console.log("用户都已经下注了"), E().target(this.opTips.node).delay(1).call((function() {
                        n.updateOptipsVisible(!1), n.nodeUserScore.getComponent(se).updateView()
                    })).start())
                }, r._showHuPaiTips = function(e) {
                    console.log("胡牌显示胡牌番数-----_showHuPaiTips", e), this.updateOptipsVisible(!0);
                    var t = S.number_valueOf(e.huNum, -1);
                    if (t > 0 || P.SelectGame.isNormalRoom()) {
                        this.opTips.node.scale = new h(.8, .8, 1), this.opTips.spriteFrame = this.optAtlas.spriteFrames.fan_bg;
                        var n = S.create_2DNode("fan"),
                            i = n.addComponent(M),
                            a = n.addComponent(C);
                        a.type = C.Type.HORIZONTAL, a.alignHorizontal = !0, a.resizeMode = C.ResizeMode.CONTAINER, a.spacingX = 5, i.spriteAtlas = this.huNumAtlas, i.setString(t.toString(), null, "fan");
                        var o = S.create_2DSprite(this.optAtlas.spriteFrames.hu);
                        o.setPosition(-90, 0), this.opTips.node.addChild(o), this.opTips.node.addChild(n)
                    } else this.opTips.node.scale = new h(.8, .8, 1), this.opTips.spriteFrame = this.optAtlas.spriteFrames.hu
                }, r._showGiveView = function(e) {
                    this._seatId == z.getInstance().mySeatId ? this.doGameCompFun("getNoAutoGiveUp") && y.ShopFlag ? b.dispatch(T.NOTIFY_BANKRUP_GIVEUP, !0, e) : b.dispatch(K.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: 1
                    }) : this._showTipsLoading("renshu_bg")
                }, r._onIsGiveUp = function(e, t) {
                    void 0 === t && (t = 1), this._seatId == z.getInstance().mySeatId && b.dispatch(K.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: t
                    })
                }, r._showHuanSanZhang = function() {
                    this._seatId != z.getInstance().mySeatId && this._showTipsLoading("hsz_wait")
                }, r._showTipsLoading = function(e) {
                    var t = this;
                    this._resetOptipNode();
                    for (var n = 0; n < 3; n++) {
                        var i = S.create_2DSprite(this.optAtlas.spriteFrames.dot);
                        this.opTips.node.addChild(i), i.setPosition(32 + 10 * n, 0), i.active = 0 == n
                    }
                    this.opTips.spriteFrame = this.optAtlas.spriteFrames[e], this.updateOptipsVisible(!0);
                    var a = 1;
                    this.opTips.schedule((function() {
                        if (3 == a) return a = 0, void t.opTips.node.children.forEach((function(e) {
                            e.active = !1
                        }));
                        a < 3 && (t.opTips.node.children[a].active = !0), a++
                    }), .5)
                }, r.onGiveUpResult = function(e) {
                    this.onUpdateOptionTips({
                        tag: "hide"
                    }), 1 == e.isGiveUp && (this.updateOptipsVisible(!0), this.opTips.spriteFrame = this.optAtlas.spriteFrames.renshu_state, this._seatId == z.getInstance().mySeatId && b.dispatch(T.NOTIFY_BANKRUP_GIVEUP, !1))
                }, r.onGiveUp = function(e) {
                    this.onUpdateOptionTips({
                        tag: "give_up",
                        time: e
                    })
                }, r.onDestroy = function() {
                    console.log("用户节点销毁：", this._uid), p.off("canvas-resize", this.delayUpdatePos, this)
                }, r.countDownTimeOut = function() {
                    b.dispatch(K.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: 1
                    })
                }, r.getCenterPos = function(e) {
                    return S.clone(this.centerPos[e])
                }, r.onUpdateUserClock = function(e, t, n) {
                    var i = re.getDirFromSeatId(this._seatId);
                    t >= 0 && i == t ? this.nodeUserClock.setClock(t, n) : this.nodeUserClock.setClock(-1, -1)
                }, o(t, [{
                    key: "UID",
                    get: function() {
                        return this._uid
                    }
                }, {
                    key: "PosID",
                    get: function() {
                        return this._posID
                    },
                    set: function(e) {
                        this._posID = e
                    }
                }]), t
            }(L)).prototype, "animNode", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Xe = t(ze.prototype, "infoBgPlayer", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Je = t(ze.prototype, "nodeDeposit", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), je = t(ze.prototype, "headNode", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ye = t(ze.prototype, "headBoxNode", [fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Qe = t(ze.prototype, "coinIcon", [_e], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), qe = t(ze.prototype, "scoreIcon", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ke = t(ze.prototype, "matchIcon", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $e = t(ze.prototype, "coinLabel", [Ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), et = t(ze.prototype, "nodeChat", [Ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), tt = t(ze.prototype, "nodeEmoji", [Ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), nt = t(ze.prototype, "nodeZhuang", [Ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), it = t(ze.prototype, "nodeTing", [ve], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), at = t(ze.prototype, "nodeMaster", [ye], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ot = t(ze.prototype, "nodeExt", [Se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), rt = t(ze.prototype, "nodeQue", [Pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), st = t(ze.prototype, "nodeUserScore", [Te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), lt = t(ze.prototype, "nodeReady", [Ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ut = t(ze.prototype, "ladderNode", [Oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), dt = t(ze.prototype, "nodeChangeSeat", [Re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ct = t(ze.prototype, "nodeTips", [Ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ht = t(ze.prototype, "nickName", [be], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pt = t(ze.prototype, "settleMoneyNode", [De], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ft = t(ze.prototype, "paoNode", [Le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _t = t(ze.prototype, "opTips", [Me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), gt = t(ze.prototype, "imgAtlas", [Ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), mt = t(ze.prototype, "optAtlas", [we], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ct = t(ze.prototype, "huNumAtlas", [Be], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), It = t(ze.prototype, "numPaoAtlas", [He], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), At = t(ze.prototype, "spriteAtlas", [Fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Et = t(ze.prototype, "nodeLabelView", [ke], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), vt = t(ze.prototype, "vipMemberNodeCtr", [Ve], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), yt = t(ze.prototype, "nodeUserClock", [xe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), We = ze)) || We) || We)), r._RF.pop()
        }
    }
}))