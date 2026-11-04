System.register("chunks:///_virtual/mjNodeUserPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./SpriteLoad.ts", "./InterfaceDefines.ts", "./LayerManager.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./SpriteLabel.ts", "./GlobalCmd.ts", "./GameChatVoiceCtr.ts", "./NickComponentCtr.ts", "./nodeHeadExtraInfoPrefabCtr.ts", "./gameCommonRes.ts", "./GameChatDecorationPrefabCtr.ts", "./GameHeadDecorationPrefabCtr.ts", "./GameClockPrefabCtr.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJConfig3.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./NodeUserScoreCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, u = e.Node, l = e.Label, d = e.Sprite, c = e.SpriteAtlas, h = e.Vec3, p = e.view, m = e.AnimationClip, _ = e.Animation, g = e.UITransform, f = e.Vec2, C = e.Layout, E = e.sp, S = e.Tween, A = e.tween, I = e.Widget
        }, function(e) {
            G = e.GameSwitchConf
        }, function(e) {
            y = e.Utils
        }, function(e) {
            v = e.GCache
        }, function(e) {
            P = e.AppEvent
        }, function(e) {
            T = e.GConstants
        }, function(e) {
            b = e.GameRes
        }, function(e) {
            O = e.default
        }, function(e) {
            R = e.inf_OnlineStatus
        }, function(e) {
            M = e.LayerManager
        }, function(e) {
            N = e.EventManager
        }, function(e) {
            U = e.SpineAniUtils
        }, function(e) {
            D = e.BaseComponent
        }, function(e) {
            L = e.SpriteLabel
        }, function(e) {
            B = e.GlobalCmdHead
        }, function(e) {
            w = e.GameChatVoiceCtr
        }, function(e) {
            k = e.NickComponentCtr
        }, function(e) {
            H = e.nodeHeadExtraInfoPrefabCtr
        }, function(e) {
            x = e.GameCommonRes
        }, function(e) {
            F = e.GameChatDecorationPrefabCtr
        }, function(e) {
            V = e.GameHeadDecorationPrefabCtr
        }, function(e) {
            J = e.GameClockPrefabCtr
        }, function(e) {
            j = e.PlayerMgr
        }, function(e) {
            W = e.RoomMgr, z = e.ROOM_DATA_TYPE
        }, function(e) {
            X = e.SettleMgr
        }, function(e) {
            Z = e.FXJConfig, Y = e.TingMap, Q = e.OPCode, q = e.MJTYPE
        }, function(e) {
            K = e.FXJConstant
        }, function(e) {
            $ = e.FXJEvent
        }, function(e) {
            ee = e.FXJRes, te = e.FXJAniConf, ne = e.ANI_TYPE, ae = e.FXJUIID
        }, function(e) {
            ie = e.GameSound, oe = e.FXJSound
        }, function(e) {
            re = e.GameEvent
        }, function(e) {
            se = e.CardUtil
        }, function(e) {
            ue = e.NodeUserScoreCtr
        }],
        execute: function() {
            var le, de, ce, he, pe, me, _e, ge, fe, Ce, Ee, Se, Ae, Ie, Ge, ye, ve, Pe, Te, be, Oe, Re, Me, Ne, Ue, De, Le, Be, we, ke, He, xe, Fe, Ve, Je, je, We, ze, Xe, Ze, Ye, Qe, qe, Ke, $e, et, tt, nt, at, it, ot, rt, st, ut, lt, dt, ct, ht, pt, mt, _t, gt, ft, Ct, Et, St, At, It, Gt, yt;
            r._RF.push({}, "d983eVfLEVG8qFHQpGaP2a6", "mjNodeUserPrefabCtr", void 0);
            var vt = s.ccclass,
                Pt = s.property,
                Tt = s.menu;
            e("mjNodeUserPrefabCtr", (le = vt("mjNodeUserPrefabCtr"), de = Tt("prefab/subGame/mj/mjNodeUserPrefabCtr"), ce = Pt({
                tooltip: "玩家入场动画节点",
                type: u
            }), he = Pt({
                tooltip: "玩家信息背景",
                type: u
            }), pe = Pt({
                tooltip: "玩家显示托管状态",
                type: u
            }), me = Pt({
                tooltip: "用户头像",
                type: u
            }), _e = Pt({
                tooltip: "用户头像框",
                type: u
            }), ge = Pt({
                tooltip: "银币图标",
                type: u
            }), fe = Pt({
                tooltip: "积分图标",
                type: u
            }), Ce = Pt({
                tooltip: "比赛积分图标",
                type: u
            }), Ee = Pt({
                tooltip: "银币",
                type: l
            }), Se = Pt({
                tooltip: "聊天气泡节点",
                type: u
            }), Ae = Pt({
                tooltip: "表情动画节点",
                type: u
            }), Ie = Pt({
                tooltip: "庄家节点",
                type: u
            }), Ge = Pt({
                tooltip: "听节点",
                type: u
            }), ye = Pt({
                tooltip: "房主节点",
                type: u
            }), ve = Pt({
                tooltip: "用户标志扩展",
                type: u
            }), Pe = Pt({
                tooltip: "定缺节点",
                type: u
            }), Te = Pt({
                tooltip: "花跑分节点",
                type: u
            }), be = Pt({
                tooltip: "准备节点",
                type: u
            }), Oe = Pt({
                tooltip: "段位节点",
                type: u
            }), Re = Pt({
                tooltip: "换座节点",
                type: u
            }), Me = Pt({
                tooltip: "提示节点",
                type: u
            }), Ne = Pt({
                tooltip: "昵称节点",
                type: l
            }), Ue = Pt({
                tooltip: "结算资产变化节点",
                type: L
            }), De = Pt({
                tooltip: "跑分节点",
                type: L
            }), Le = Pt({
                tooltip: "操作提示节点",
                type: d
            }), Be = Pt({
                tooltip: "拼图图集",
                type: c
            }), we = Pt({
                tooltip: "操作提示拼图图集",
                type: c
            }), ke = Pt({
                tooltip: "胡牌倍数拼图图集",
                type: c
            }), He = Pt({
                tooltip: "加倍、跑分拼图图集",
                type: c
            }), xe = Pt({
                tooltip: "图集",
                type: c
            }), Fe = Pt({
                tooltip: "定缺听父节点",
                type: u
            }), Ve = Pt({
                tooltip: "vip会员节点脚本",
                type: H
            }), Je = Pt({
                tooltip: "闹钟节点",
                type: J
            }), le(je = de((ze = t((We = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "animNode", ze, i(t)), a(t, "infoBgPlayer", Xe, i(t)), a(t, "nodeDeposit", Ze, i(t)), a(t, "headNode", Ye, i(t)), a(t, "headBoxNode", Qe, i(t)), a(t, "coinIcon", qe, i(t)), a(t, "scoreIcon", Ke, i(t)), a(t, "matchIcon", $e, i(t)), a(t, "coinLabel", et, i(t)), a(t, "nodeChat", tt, i(t)), a(t, "nodeEmoji", nt, i(t)), a(t, "nodeZhuang", at, i(t)), a(t, "nodeTing", it, i(t)), a(t, "nodeMaster", ot, i(t)), a(t, "nodeExt", rt, i(t)), a(t, "nodeQue", st, i(t)), a(t, "nodeUserScore", ut, i(t)), a(t, "nodeReady", lt, i(t)), a(t, "ladderNode", dt, i(t)), a(t, "nodeChangeSeat", ct, i(t)), a(t, "nodeTips", ht, i(t)), a(t, "nickName", pt, i(t)), a(t, "settleMoneyNode", mt, i(t)), a(t, "paoNode", _t, i(t)), a(t, "opTips", gt, i(t)), a(t, "imgAtlas", ft, i(t)), a(t, "optAtlas", Ct, i(t)), a(t, "huNumAtlas", Et, i(t)), a(t, "numPaoAtlas", St, i(t)), a(t, "spriteAtlas", At, i(t)), a(t, "nodeLabelView", It, i(t)), a(t, "vipMemberNodeCtr", Gt, i(t)), a(t, "nodeUserClock", yt, i(t)), t.zhuangNodePos = null, t.queNodePos = null, t.tipNodePos = null, t.centerPos = [new h(480, 100, 0), new h(-345, -100, 0), new h(-245, -184, 0), new h(345, -100, 0)], t.funnyEmojiOffset = [new h(125, 75, 0), new h(-125, 75, 0), new h(-125, 0, 0), new h(125, 55, 0)], t.op_tips_pos = [new h(0, 0, 30), new h(30, 0, 0), new h(0, 0, -30), new h(-30, 0, 0)], t.quePos = [new h(480, -50, 0), new h(-185, -100, 0), new h(-245, -94, 0), new h(195, -100, 0)], t._handlerChatTextAutoHide = null, t._isReload = !1, t._uid = null, t._posID = null, t._seatId = null, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {
                    this.addModelListener(re.INIT_GAMEINFO_POS, this.onInitUserPos), this.addModelListener($.NET_REQ_GAME_CHANGE_DESK, this.cleanOtherPlayer), this.addModelListener(re.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit), this.addModelListener(re.USER_UPDATE_PROPERTY, this.updateCoin), this.addModelListener($.VIEW_PLAYER_CHAT_SHOW, this.showChatMsg), this.addModelListener(re.VIEW_PLAYER_EMOJ_SHOW, this.showEmojMsg), this.addModelListener(re.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit), this.addModelListener(re.VIEW_BROADCAST_DING_ZHUANG, this.palyerDingZhuang), this.addModelListener($.BROADCAST_PRIVATE_ROOM_MASTER_INFO, this.broadcastMasterInfo), this.addModelListener($.UPDATE_PRIVATE_ROOM_MASTER_INFO, this.broadcastMasterInfo), this.addModelListener(re.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener($.BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(P.EVENT_GAME_OVER, this.onGameOver), this.addModelListener(P.ROOM_ONLINE_STATU, this.onRoomOnlineStatu), this.addModelListener(re.PRIVATE_CACEL_READY, this.onUpdateReadyStatus), this.addModelListener(P.LADDER_SCORE_CHANGE, this.updateUserLadder), this.addModelListener(P.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(re.VIEW_BROADCAST_DEAL_CARD, this.onDealCard), this.addModelListener($.BROADCAST_MACTH_JIFEN, this.updateScore), this.addModelListener($.BROADCAST_SETTLE_MONEY, this.showMoneyAnim), this.addModelListener(re.VIEW_UPDATE_XIA_ZHU_RESULT, this.updatePao), this.addModelListener(re.NOTIFY_BANKRUPGIFT_COUNTDOWN_TIMEOUT, this.countDownTimeOut), this.addModelListener(P.NOTIFY_BANKRUPGIFT_IS_GIVEUP, this._onIsGiveUp), this.addModelListener(re.VIEW_CHECK_EXT_TAG, this.onCheckExtTag), this.addModelListener(re.VIEW_UPDATE_USER_CLOCK, this.onUpdateUserClock)
                }, r.onLoad = function() {
                    p.on("canvas-resize", this.delayUpdatePos, this), this._isReload = !0, console.log("NodeUser: onload==>", this._uid), this.preloadRes(), this.onInitUserPos(null, null), this.initUI(), this.node.active = !1
                }, r.addGameComp = function() {
                    null == this.node && (this.node = y.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (y.isNull(t) && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
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
                    this.settleMoneyNode.node.active = !1, this.infoBgPlayer.active = !0, this.nodeChat.active = !1, this.nodeEmoji.active = !0, this.nodeDeposit.active = !1, this.nodeZhuang.active = !1, this.nodeTing.active = !1, this.nodeMaster.active = !1, this.nodeQue.active = !1, this.nodeReady.active = !1, this.paoNode.node.active = !1, this.nodeChangeSeat.active = !1, v.SelectGame.isInMatchRoom() ? (this.coinIcon.active = !1, this.scoreIcon.active = !1, this.matchIcon.active = !0) : v.SelectGame.isInPrivateRoom() ? (this.coinIcon.active = !1, this.scoreIcon.active = !0, this.matchIcon.active = !1) : (this.coinIcon.active = !0, this.scoreIcon.active = !1, this.matchIcon.active = !1)
                }, r.initUI = function() {
                    this.reset(), this.palyerRefresh(null, this._uid);
                    var e = this.doGameCompFun("getTagScale");
                    e && (this.nodeMaster.parent.scale = new h(e, e, e))
                }, r.preloadRes = function() {
                    this.getPreLoaderResource(ee.Atlas_Game_CardNum.bundle, ee.Atlas_Game_CardNum.path, c), this.getPreLoaderResource(ee.Atlas_Player_Common.bundle, ee.Atlas_Player_Common.path, c), this.getPreLoaderRes(te[ne.PLAYER_INTO].bundle, te[ne.PLAYER_INTO].path, m)
                }, r.start = function() {}, r.getUserLocalPos = function() {
                    return this._getUserPos(this._posID)
                }, r.getSeatId = function() {
                    return this._seatId
                }, r.initData = function(e) {
                    var t = this;
                    e && (this._seatId = e.seatId, this._uid = e.uid), this.node && 0 != this.node.isValid && this._uid && (null != j.getInstance().findPlayerWithUserId(this._uid) ? (this.palyerRefresh(null, this._uid), this.animNode.getComponent(_).scheduleOnce((function() {
                        t.checkEnterAnim(!0)
                    }))) : this.node.destroy())
                }, r.checkEnterAnim = function(e) {
                    var t, n = j.getInstance().findPlayerWithUserId(this._uid);
                    if (n && (0 != this.node.position.x || 0 != this.node.position.y || 0 != this.node.position.z)) {
                        var a = null == n || null == (t = n.gameUserInfo) ? void 0 : t.userEnterAnim;
                        if (y.isNotNull(a)) {
                            var i = v.DecorationData.getUserEnterAnimConfig(a);
                            if (i) {
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
                                var u = r[s].pos,
                                    l = r[s].scale,
                                    d = {
                                        resConf: i,
                                        aniName: i.animName,
                                        toPos: u,
                                        scale: l,
                                        parentNode: this.animNode
                                    };
                                this.animNode.active = !0, this.animNode.destroyAllChildren(), N.dispatch($.VIEW_DESK_ANI_PLAY, K.AnimNormal.Enter, d), n.gameUserInfo.userEnterAnim = -1
                            }
                        } else e && this.showEnterAnim()
                    }
                }, r.showEnterAnim = function() {
                    var e = this.animNode.getComponent(_),
                        t = this;
                    this.getPreLoaderRes(te[ne.PLAYER_INTO].bundle, te[ne.PLAYER_INTO].path, m, (function(n) {
                        var a;
                        null != (a = t.animNode) && a.isValid && (t.animNode.active = !0, e.defaultClip = n, e.play(), e.on(_.EventType.FINISHED, (function() {
                            var e;
                            null != (e = t.animNode) && e.isValid && (t.animNode.active = !1)
                        })))
                    }))
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
                        var n = j.getInstance().findPlayerWithUserId(t);
                        if (n && v.Desk) {
                            this.setLadderNodeShow(!this._checkUserPlayIng()), this.onUpdateOptionTips({
                                tag: "hide"
                            }), this.onUpdateOptionTips({
                                tag: "reset_dingque"
                            }), this.infoBgPlayer.active = !0, this.updateUserHead(n), this.updateUserHeadBox(n.gameUserInfo.userHeadBox), this.updateUserChatBox(n.gameUserInfo.userChatBox), this.updateUserScore(n.seatId), this.updateUserLadder(), this.updateCoin(null, n.userId), this.playerReady(null, n.userId), this.updateNick(n.userId), this.playerTing(null, n), this.broadcastMasterInfo(null), this.palyerDingZhuang(null), this._refreshHuanSanZhang(), this._refreshDingQue(), this._refreshPlayerStatus(), this.checkWaitGiveUp(), this.onCheckExtTag(null);
                            var a = this.node.getChildByName("GameChatVoicePrefab");
                            a ? (a.getComponent(w).setUserMid(t), a.getComponent(w).setseatPos(this.PosID)) : console.log("vedio is null");
                            try {
                                var i, o, r;
                                null == (i = this.vipMemberNodeCtr) || i.setUserInfo(null == n ? void 0 : n.gameUserInfo, {
                                    isVip: null == n || null == (o = n.gameUserInfo) ? void 0 : o.isVip
                                }), this.nickName.node.getComponent(k).setUserInfo(null == n || null == (r = n.gameUserInfo) ? void 0 : r.isVip)
                            } catch (e) {}
                        }
                    }
                }, r.updateUserScore = function(e) {
                    this.nodeUserScore.getComponent(ue).setSeatId(e)
                }, r.updateUserLadder = function() {
                    var e, t;
                    if (this._uid) {
                        var n = j.getInstance().findPlayerWithUserId(this._uid),
                            a = v.LadderData.getLadderConfig((null == n || null == (e = n.gameUserInfo) ? void 0 : e.ladderScore) || 0),
                            i = y.number_valueOf(null == a ? void 0 : a.level),
                            o = v.LadderData.getLadderRankIconByLevel(i),
                            r = (null == n || null == (t = n.gameUserInfo) ? void 0 : t.ladderRank) || 0,
                            s = v.LadderData.getLadderRankTxtByLevel(i, r);
                        this.ladderNode.getChildByName("ladderIcon").getComponent(O).setLocalLoad(o.bundle, o.path), this.ladderNode.getChildByName("ladderTxt").getComponent(O).setLocalLoad(s.bundle, s.path)
                    }
                }, r.updateUserHead = function(e) {
                    var t, n = null == e || null == (t = e.gameUserInfo) ? void 0 : t.sex,
                        a = j.getInstance().getUserAvatar(null == e ? void 0 : e.gameUserInfo),
                        i = this.headNode.getComponent(O);
                    y.string_isHttp(a) ? i.setRemoteUrl(a, (function() {
                        2 == n ? i.setLocalLoad(ee.Picture_UserBigHead_girl.bundle, ee.Picture_UserBigHead_girl.path) : i.setLocalLoad(ee.Picture_UserBigHead_boy.bundle, ee.Picture_UserBigHead_boy.path)
                    })) : 2 == n ? i.setLocalLoad(ee.Picture_UserBigHead_girl.bundle, ee.Picture_UserBigHead_girl.path) : i.setLocalLoad(ee.Picture_UserBigHead_boy.bundle, ee.Picture_UserBigHead_boy.path)
                }, r.updateUserHeadBox = function(e) {
                    this.headBoxNode.getChildByName("GameHeadDecorationPrefab").getComponent(V).setHeadBox(e)
                }, r.updateUserChatBox = function(e) {
                    this.nodeChat.getComponent(F).updateUserChatBox(e);
                    var t = this.node.getChildByName("GameChatVoicePrefab");
                    t && t.getComponent(w).updateUserChatBox(e)
                }, r.updateCoin = function(e, t) {
                    if (void 0 === t && (t = null), t && t == this._uid) {
                        var n = j.getInstance().findPlayerWithUserId(t);
                        this.coinLabel.string = y.string_moneyToShortNumber(n ? n.money : 0, !0)
                    }
                }, r.updateNick = function(e) {
                    void 0 === e && (e = null), e && e == this._uid && (this.nickName.node.active = !1)
                }, r.updatePos = function() {
                    var e, t = this;
                    if (null != (e = this.node) && e.isValid) {
                        var n = v.GameInfo.getUserPosByPosId(this.PosID);
                        if (null !== n && !y.table_isEmpty(n)) {
                            var a = M.camera2D.screenToWorld(M.camera3D.worldToScreen(n)),
                                i = this.node.parent.getComponent(g).convertToNodeSpaceAR(a);
                            0 == i.x && 0 == i.y && 0 == i.z || (this.setUserPos(i, this._posID), this.node.active ? this.animNode.getComponent(_).scheduleOnce((function() {
                                t.checkEnterAnim(!1)
                            })) : (this.node.active = !0, this.animNode.getComponent(_).scheduleOnce((function() {
                                t.checkEnterAnim(!0)
                            }))))
                        }
                    }
                }, r._getUserPos = function(e) {
                    var t = this.doGameCompFun("getUserPos", e);
                    return y.isNull(e) && (t = e), t
                }, r.setUserPos = function(e, t) {
                    var n = this;
                    switch (t = this._getUserPos(t)) {
                        case 0:
                            this.node.position = e, this.nodeReady.position = new h(180, 70, 0), this.settleMoneyNode.node.position = new h(180, 45, 0), this.ladderNode.getComponent(g).anchorPoint = new f(0, .5), this.opTips.node.position = new h(540, 45, 0), this.ladderNode.position = new h(-42, -46, 0), this.paoNode.node.getComponent(g).anchorPoint = new f(0, .5), this.paoNode.node.position = new h(210, 45, 0), this.nodeLabelView.position = new h(68, 100, 0);
                            break;
                        case 1:
                            this.node.position = e, this.nodeReady.position = new h(-180, 70, 0), this.settleMoneyNode.node.position = new h(-95, 13, 0), this.settleMoneyNode.node.getComponent(g).anchorPoint = new f(1, .5), this.opTips.node.position = new h(-236, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new f(1, .5), this.ladderNode.position = new h(-95, 13, 0), this.nodeUserScore.position = new h(-50, 100, 0), this.paoNode.node.getComponent(g).anchorPoint = new f(1, .5), this.paoNode.node.position = new h(-180, 45, 0), this.nodeLabelView.position = new h(-68, 100, 0);
                            break;
                        case 2:
                            this.node.position = e, this.nodeReady.position = new h(-180, 70, 0), this.settleMoneyNode.node.position = new h(-95, 13, 0), this.settleMoneyNode.node.getComponent(g).anchorPoint = new f(1, .5), this.opTips.node.position = new h(-236, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new f(1, .5), this.ladderNode.position = new h(-95, 13, 0), this.paoNode.node.getComponent(g).anchorPoint = new f(1, .5), this.paoNode.node.position = new h(-180, 45, 0), this.nodeLabelView.position = new h(-68, 100, 0);
                            break;
                        case 3:
                            this.node.position = e, this.nodeReady.position = new h(180, 70, 0), this.settleMoneyNode.node.position = new h(95, 13, 0), this.opTips.node.position = new h(260, 13, 0), this.ladderNode.getComponent(g).anchorPoint = new f(0, .5), this.ladderNode.position = new h(95, 13, 0), this.nodeUserScore.position = new h(-50, 100, 0), this.paoNode.node.getComponent(g).anchorPoint = new f(0, .5), this.paoNode.node.position = new h(219, 45, 0), this.nodeLabelView.position = new h(68, 100, 0)
                    }
                    this.scheduleOnce((function() {
                        n.nodeLabelView.getComponent(C).updateLayout()
                    }), .1), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent), this.tipNodePos = this.opTips.node.getPosition(), this.doGameCompFun("updateNodeUserScorePos", this.nodeUserScore, t), v.PrivateData.updateUserPos(this.UID, e)
                }, r.modifyPlayerDeposit = function(e, t) {
                    null != t.mid && t.mid == this._uid && (this.nodeDeposit.active = t.ai)
                }, r.cleanDepositStatus = function() {
                    this.nodeDeposit.active = !1
                }, r.showEmojMsg = function(e, t) {
                    var n = this;
                    if (this._uid === t.mid) {
                        if (null != t.faceValue) {
                            var a = t.faceValue - Math.pow(2, 16),
                                i = K.ChatEmojiAniConf[a];
                            if (i) {
                                this.nodeEmoji.active = !0;
                                var o = this.nodeEmoji.getChildByName("emojiSpine");
                                if (o) {
                                    var r = o.getComponent(E.Skeleton);
                                    r.setCompleteListener((function(e) {
                                        n.nodeEmoji.active = !1
                                    })), r.setAnimation(0, i, !1)
                                } else {
                                    var s = ee.Spine_Emoji;
                                    U.loadSkeleDataInBundle(s.bundle, s.path, this, null, function(e, t) {
                                        if (!e && n.nodeEmoji && n.nodeEmoji.isValid) {
                                            var a = U.createSpineNode(n.nodeEmoji, t, null, null, !1);
                                            if (a) {
                                                a.name = "emojiSpine";
                                                var o = a.getComponent(E.Skeleton);
                                                o.setCompleteListener((function(e) {
                                                    n.nodeEmoji.active = !1
                                                })), o.setAnimation(0, i, !1)
                                            }
                                        }
                                    }.bind(this))
                                }
                                var u = {};
                                u.mid = t.mid, u.operate = "emoji", u.param = {
                                    index: t.faceValue - Math.pow(2, 16)
                                }, v.PrivateData.setChatHistoryMsgData(u)
                            } else {
                                var l = T.ChatEmojiSpriteConf[a];
                                if (l) {
                                    this.nodeEmoji.active = !0, S.stopAllByTarget(this.nodeEmoji);
                                    var p = this.funnyEmojiOffset[this._posID] || new h(0, 0, 0),
                                        m = this.headNode ? this.headNode.getPosition() : new h(0, 0, 0);
                                    this.nodeEmoji.setPosition(m.x + p.x, m.y + p.y, 0), this.nodeEmoji.setScale(1.5, 1.5, 1);
                                    var _ = this.nodeEmoji.getChildByName("emojiSpine");
                                    _ && (_.active = !1), this.getPreLoaderRes(x.Atlas_Emoji.bundle, x.Atlas_Emoji.path, c, (function(e) {
                                        if (e && n.nodeEmoji && n.nodeEmoji.isValid) {
                                            var t = e.getSpriteFrame(l);
                                            if (t) {
                                                var a = n.nodeEmoji.getComponent(d) || n.nodeEmoji.addComponent(d);
                                                a.spriteFrame = t, a.sizeMode = d.SizeMode.TRIMMED, n.nodeEmoji.active = !0, A(n.nodeEmoji).delay(2).call((function() {
                                                    if (n.nodeEmoji && n.nodeEmoji.isValid) {
                                                        var e = n.nodeEmoji.getComponent(d);
                                                        e && (e.spriteFrame = null), n.nodeEmoji.setPosition(0, 0, 0), n.nodeEmoji.setScale(1, 1, 1), n.nodeEmoji.active = !1
                                                    }
                                                })).start()
                                            }
                                        }
                                    }));
                                    var g = {};
                                    return g.mid = t.mid, g.operate = "emoji", g.param = {
                                        index: a
                                    }, void v.PrivateData.setChatHistoryMsgData(g)
                                }
                            }
                        }
                    } else this.nodeEmoji.active = !1
                }, r.showChatMsg = function(e, t) {
                    var n = this;
                    console.log("聊天接收到的是:", t);
                    var a = j.getInstance().findPlayerWithUserId(t.mid);
                    if (this._uid === t.mid) {
                        var i = this.doGameCompFun("getRelativeLocalDir", a.seatId);
                        if (y.isNotNull(i, t.msg)) {
                            var o = t.msg,
                                r = "",
                                s = -1;
                            for (var u in K.ChatText)
                                if (Object.prototype.hasOwnProperty.call(K.ChatText, u)) {
                                    var d = K.ChatText[u];
                                    if (y.isArray(d)) {
                                        var c = d.indexOf(o);
                                        if (-1 != c) {
                                            r = u, s = c;
                                            break
                                        }
                                    }
                                } if (y.string_isEmpty(r) || -1 == s) return;
                            var h = t.sex,
                                p = 2 == h ? oe.QuickChatXiaoYa : oe.QuickChatXiaoBo,
                                m = r + "_" + s;
                            "hot" === r ? (m = "classic_" + (s + 1), p = 2 == h ? b.QuickChatXiaoYa : b.QuickChatXiaoBo) : "classic" === r ? (m = "classic_" + (s + 13), p = 2 == h ? b.QuickChatXiaoYa : b.QuickChatXiaoBo) : "majiang" === r ? p = 2 == h ? b.QuickChatXiaoYa : b.QuickChatXiaoBo : "dialect" === r && (p = 2 == h ? oe.GameQuickChatXiaoYa : oe.GameQuickChatXiaoBo), ie.getInstance().playEffect({
                                bundle: p.bundle,
                                path: p.path + m
                            }), this.stopSchedulerOnce(this._handlerChatTextAutoHide), this._handlerChatTextAutoHide = null, this.nodeChat.active = !0;
                            var _ = ["right", "left", "bottom_left"],
                                f = _[0];
                            1 !== i && 2 !== i || (f = _[i]);
                            var E = null;
                            if (_.forEach((function(e, t) {
                                    var a = n.nodeChat.getChildByName(e);
                                    e == f ? (a.active = !0, E = a) : a.active = !1
                                })), !E) return;
                            var S = E.getChildByName("node"),
                                A = null == S ? void 0 : S.getChildByName("bg"),
                                G = null == A ? void 0 : A.getChildByName("Label");
                            if (G) {
                                var P = G.getComponent(l);
                                P.string = String(t.msg), P.updateRenderData(), G.parent.getComponent(C).updateLayout();
                                var T = G.parent.getComponent(g).height;
                                G.parent.parent.getComponent(g).height = T, G.parent.parent.getChildByName("chatBg").getComponent(I).updateAlignment()
                            }
                            this._handlerChatTextAutoHide = this.addSchedulerOnce(Z.ChatTextAutoHide, y.handler(this, this.hideChatText));
                            var O = {};
                            O.mid = t.mid, O.operate = "quickMsg", O.param = {
                                text: t.msg
                            }, v.PrivateData.setChatHistoryMsgData(O)
                        }
                    } else this.nodeChat.active = !1
                }, r.hideChatText = function() {
                    this.nodeChat && 1 == this.nodeChat.isValid && (this.nodeChat.active = !1), this._handlerChatTextAutoHide = null
                }, r.onClickUserInfo = function(e) {
                    if (!v.SelectGame.isInMatchRoom()) {
                        var t = j.getInstance().findPlayerWithUserId(this._uid);
                        if (t)
                            if (ie.getInstance().playEffect(oe.CommClick), v.Desk.PlayType != K.PlayType.MATCH) {
                                var n = {
                                    uid: t.userId,
                                    posID: t.seatId
                                };
                                N.dispatch($.GAME_OPEN_POPUP, ae.GameHeadInfoPrefab, n, {})
                            } else N.dispatch($.SYS_TOAST_TIP, {
                                content: "比赛中无法查看玩家信息"
                            })
                    }
                }, r.cleanOtherPlayer = function(e, t) {
                    this._uid, v.User.getUserMid()
                }, r.palyerExit = function(e, t) {
                    var n;
                    void 0 === t && (t = null), null != (n = v.Desk) && n.isPlayIng() || y.isNotNull(t) && t == this._uid && (this.node.active = !1)
                }, r.palyerDingZhuang = function(e, t) {
                    var n = y.number_valueOf(W.getInstance().bankSeatId, -1);
                    if (n >= 0) {
                        var a = j.getInstance().findPlayerWithSeatId(n),
                            i = (null == a ? void 0 : a.userId) == this._uid;
                        if (this.nodeZhuang.scale = new h(.43, .43, .43), this.nodeZhuang.active = i, null == this.zhuangNodePos && (this.nodeLabelView.getComponent(C).updateLayout(), this.zhuangNodePos = this.nodeZhuang.getPosition()), i && null != e) {
                            var o = this.centerPos[this.PosID];
                            this.nodeZhuang.setPosition(o), this.nodeZhuang.scale = new h(0, 0, 0), A(this.nodeZhuang).target(this.nodeZhuang).to(.016, {
                                scale: new h(1.2, 1.2, 1),
                                position: o
                            }).to(.1, {
                                scale: new h(.7, .7, 1),
                                position: o
                            }).to(.1, {
                                scale: new h(1.1, 1.1, 1),
                                position: o
                            }).to(.1, {
                                scale: new h(.8, .8, 1),
                                position: o
                            }).to(.1, {
                                scale: new h(1, 1, 1),
                                position: o
                            }).delay(1).to(.2, {
                                scale: new h(.43, .43, 1),
                                position: this.zhuangNodePos
                            }, {
                                onComplete: function(e) {
                                    e.parent.getComponent(C).updateLayout(!0)
                                }
                            }).start(), ie.getInstance().playEffect(oe.GameZhuang)
                        }
                    } else this.nodeZhuang.active = !1
                }, r.playerTing = function(e, t) {
                    void 0 === t && (t = null);
                    var n, a = t.opGroups,
                        i = !1,
                        o = 0;
                    if (!y.table_isEmpty(a))
                        for (var r = a.length - 1; r >= 0; r--)
                            if (a[r] && a[r].opCode && Y[a[r].opCode]) {
                                o = a[r].opCode, i = !0;
                                break
                            } i ? this.nodeTing.active = i : Y[null == (n = t) ? void 0 : n.tingOpcode] && (o = t.tingOpcode, this.nodeTing.active = !0), this.checkExtTing({
                        userId: t.userId,
                        opCode: o,
                        isReconnect: !0
                    })
                }, r.onUpdateTingBySeat = function(e, t, n) {
                    void 0 === n && (n = !1), se.calculatePlayerSeat(W.getInstance().mySeatId, t) == this.PosID && (this.nodeTing.active = n)
                }, r.onOperationResult = function(e) {
                    e.userId === this._uid && (e.opCode >= Q.OPE_RIGHT_CHI && e.opCode <= Q.OPE_HUA_GANG_TO_HUA_QUAN_QI ? e.opCode >= Q.OPE_GANG ? (ie.getInstance().playEffect(oe.Gang), "" == oe.Gang.path && ie.getInstance().playEffect(oe.Operate)) : e.opCode >= Q.OPE_AN_GANG ? (ie.getInstance().playEffect(oe.Angang), "" == oe.Gang.path && ie.getInstance().playEffect(oe.Operate)) : ie.getInstance().playEffect(oe.Operate) : e.opCode == Q.OPE_MING_LOU || e.opCode == Q.OPE_MING_LV ? ie.getInstance().playEffect(oe.Operate) : e.opCode == Q.OPE_ZI_MO || e.opCode == Q.OPE_HU ? ie.getInstance().playEffect(oe.Hupai) : Y[e.opCode] && ie.getInstance().playEffect(oe.Operate), this.checkTing(e), this.nodeUserScore.getComponent(ue).onOperationResult(e))
                }, r.checkTing = function(e) {
                    Y[e.opCode] && e.userId == this._uid && (this.nodeTing.active = !0), this.checkExtTing({
                        userId: e.userId,
                        opCode: e.opCode,
                        isReconnect: !1
                    })
                }, r.checkExtTing = function(e) {
                    var t = this.doGameCompFun("checkShowTingTag", e);
                    y.isNull(t) || (this.nodeTing.active = t), this.doGameCompFun("checkExtTing", this._uid, e, this.nodeExt, e.isReconnect)
                }, r.checkOpcodeIsTing = function(e) {
                    this.doGameCompFun("checkOpcodeIsTing", e)
                }, r.onCheckExtTag = function(e) {
                    this.doGameCompFun("checkExtTag", this.nodeExt, this._uid, this._seatId)
                }, r.broadcastMasterInfo = function(e) {
                    var t = v.PrivateData.getPrivateRoomMasterInfo();
                    y.isNotNull(t) && this._uid == t.userId ? this.nodeMaster.active = !0 : this.nodeMaster.active = !1
                }, r.playerReady = function(e, t) {
                    if (this.checkChangeBtn(), t == this._uid && !this._checkUserPlayIng()) {
                        if (y.isNotNull(t)) {
                            var n = j.getInstance().findPlayerWithUserId(t);
                            n && (this.nodeReady.active = 1 == n.isReady)
                        }
                        this.nodeReady.active && this.nodeUserScore.getComponent(ue).onRestView()
                    }
                }, r._checkUserPlayIng = function() {
                    var e, t = this.doGameCompFun("checkUserPlayIng", this._uid);
                    return console.log("玩家玩牌状态-------------_checkUserPlayIng--:", this._uid, t), y.isNotNull(t) ? t : 1 == (null == (e = v.Desk) ? void 0 : e.isPlayIng())
                }, r.checkChangeBtn = function() {
                    if (!v.PrivateData.isTwoPlayerModule()) {
                        if (v.SelectGame.isInPrivateRoom() && !W.getInstance().isMySelfByUserId(this._uid))
                            if (1 == j.getInstance().getMyPlayerInfo().isReady) this.nodeChangeSeat.active = !1;
                            else {
                                var e = j.getInstance().findPlayerWithUserId(this._uid);
                                null != e && e.userId && (1 == v.PrivateData.getPrivateRoundFinish() || 0 == v.PrivateData.getPrivateRounds().current ? this.nodeChangeSeat.active = 1 != e.isReady : this.nodeChangeSeat.active = !1)
                            }
                        else this.nodeChangeSeat.active = !1;
                        this.nodeChangeSeat.active && this.nodeUserScore.getComponent(ue).onRestView()
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
                        var n = j.getInstance().getMyPlayerInfo(),
                            a = j.getInstance().findPlayerWithUserId(this._uid);
                        if (null != a && null != n) {
                            var i = {
                                    sUid: v.User.getUserMid(),
                                    sSeatId: se.getDirFromSeatId(n.seatId),
                                    tUid: a.userId,
                                    tSeatId: se.getDirFromSeatId(a.seatId)
                                },
                                o = {
                                    cmd: B.CLIENT_APPLY_JIFEN_ROOM_CHANGE_SEAT,
                                    body: i
                                };
                            console.log("onClickChangeSeat", o), N.dispatch($.NET_SEND_MSG, o), N.dispatch($.SYS_TOAST_TIP, {
                                content: "换座请求已发出..."
                            })
                        } else console.log("onClickChangeSeat", "玩家数据丢失")
                    }
                }, r.onRoomOnlineStatu = function(e, t) {
                    var n = this;
                    y.table_isEmpty(t) || y.table_isEmpty(t.users) || t.users.forEach((function(e) {
                        e.userId != n._uid || (e.status == R.Offline ? n.nodeTips.active = !0 : n.nodeTips.active = !1)
                    }))
                }, r.onUpdateReadyStatus = function(e, t) {
                    void 0 === t && (t = null), t.userId == this._uid && (j.getInstance().findPlayerWithUserId(this._uid).isReady ? this.nodeReady.active = !0 : this.nodeReady.active = !1)
                }, r.onReconnectSuccess = function() {
                    this._hideNodes()
                }, r.onDealCard = function() {
                    this._hideNodes()
                }, r._hideNodes = function() {
                    this.nodeReady.active = !1, this.nodeTing.active = !1, this.setLadderNodeShow(!1), v.SelectGame.isInPrivateRoom() && (this.nodeChangeSeat.active = !1)
                }, r.showMoneyAnim = function(e, t) {
                    var n = this,
                        a = j.getInstance().findPlayerWithUserId(this._uid);
                    if (t && a && null != t[a.seatId] && 0 != t[a.seatId]) {
                        this.settleMoneyNode.unscheduleAllCallbacks(), this.settleMoneyNode.node.active = !1;
                        var i = y.number_valueOf(t[a.seatId] || "0");
                        console.log("资产变化", i), 0 != i && (i >= 0 ? this.settleMoneyNode.setString("+" + i, "win/") : this.settleMoneyNode.setString("" + i, "lose/"), this.settleMoneyNode.node.active = !0, this.settleMoneyNode.scheduleOnce((function() {
                            n.settleMoneyNode.node.active = !1
                        }), 2))
                    }
                }, r.updateScore = function(e, t) {
                    var n = X.getInstance().getTotalInfoByUId(this._uid);
                    if (n) {
                        var a, i = this.node.position,
                            o = ((a = {})[0] = {
                                position: new h(90, 50, 0),
                                anchorPoint: new f(0, .5)
                            }, a),
                            r = new h(90, 50, 0),
                            s = new f(0, .5);
                        if (o[this.PosID]) r = o[this.PosID].position, s = o[this.PosID].anchorPoint;
                        else {
                            var u = this.nodeReady.position.x >= 0 ? 1 : -1;
                            r.x = r.x * u, s.x = u > 0 ? 0 : 1
                        }
                        N.dispatch(P.SHOW_MATCH_JIFEN, n.winMoney, r.add(i), s)
                    }
                }, r.updatePao = function(e, t, n) {
                    var a = this;
                    void 0 === n && (n = !1);
                    var i = j.getInstance().findPlayerWithUserId(this._uid);
                    if (i) {
                        var o = v.Desk.getXiaZhuResult(null == i ? void 0 : i.seatId, t.xiaZhuType);
                        if ((null == o ? void 0 : o.length) > 0)
                            if (this.doGameCompFun("hasXiaZhu")) this.onUpdateOptionTips({
                                tag: "double",
                                info: o[0],
                                isReconnect: n
                            });
                            else {
                                var r = y.number_valueOf(o[0].option || "0");
                                console.log("刷新跑分", r), this.paoNode.string = r > 0 ? "p" + r : "b", this.paoNode.node.active = !0, W.getInstance().hasAllXiaZhuFinish(t.xiaZhuType) && (n ? (this.paoNode.node.active = !1, this.nodeUserScore.getComponent(ue).updateView()) : this.paoNode.scheduleOnce((function() {
                                    a.paoNode.node.active = !1, a.nodeUserScore.getComponent(ue).updateView()
                                }), 1.5))
                            }
                    }
                }, r._refreshDingQue = function() {
                    var e = this,
                        t = W.getInstance().dingQueResult;
                    y.table_isEmpty(t) || Object.keys(t).forEach((function(n) {
                        var a;
                        e.getSeatId() === (null == (a = t[n]) ? void 0 : a.seatId) && e.onDingQueOptionsResult(t[n])
                    }))
                }, r._refreshHuanSanZhang = function() {
                    var e, t, n = W.getInstance().getGameInfoByTag(z.HUAN_SAN_ZHANG_STATUS);
                    if ((null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && (null == n || null == (t = n.status) ? void 0 : t.length) > 0)
                        for (var a = n.status, i = 0; i < a.length; i++) i + 1 != W.getInstance().mySeatId && i + 1 == this._seatId && (0 == a[i] ? this.onUpdateOptionTips({
                            tag: "show_hsz"
                        }) : 1 == a[i] && this.onUpdateOptionTips({
                            tag: "hide"
                        }))
                }, r._refreshPlayerStatus = function() {
                    var e, t = this,
                        n = v.Desk.getXiaZhuResult(this._seatId, -1);
                    (null == n ? void 0 : n.length) > 0 && n.forEach((function(e) {
                        null != (null == e ? void 0 : e.option) && t.updatePao(null, e, !0)
                    }));
                    var a = W.getInstance().getGameInfoByTag(z.MAI_DUAN_MEN_STATUS); - 1 == (null == a ? void 0 : a.option) ? this.onUpdateOptionTips({
                        tag: "maiduanmen",
                        info: a,
                        isReconnect: !0
                    }) : 1 != (null == a ? void 0 : a.option) && 0 != (null == a ? void 0 : a.option) || this.onUpdateOptionTips({
                        tag: "maiduanmen_reslut",
                        info: a,
                        isReconnect: !0
                    });
                    var i = W.getInstance().getGameInfoByTag(z.RECONNECT_HU_INFO);
                    (null == i ? void 0 : i.length) > 0 && i.forEach((function(e) {
                        e.seatId == t._seatId && t.onUpdateOptionTips({
                            tag: "hu",
                            huNum: e.totalFan
                        })
                    }));
                    var o = W.getInstance().getGameInfoByTag(z.RECONNECT_GIVEUP_INFO);
                    (null == o ? void 0 : o.length) > 0 && o.forEach((function(e) {
                        e == t._seatId && t.onGiveUpResult({
                            isGiveUp: 1
                        })
                    })), null != (e = v.Desk) && e.isPlayIng() && this.nodeUserScore.getComponent(ue).updateViewHua(), this.nodeUserScore.getComponent(ue).showSpecialView({
                        refresh: !0,
                        seatId: this._seatId
                    })
                }, r.checkWaitGiveUp = function() {
                    var e, t = this,
                        n = W.getInstance().getGameInfoByTag(z.RECONNECT_WAIT_GIVEUP);
                    (null == n || null == (e = n.seatIdList) ? void 0 : e.length) > 0 && (null == n || n.seatIdList.forEach((function(e) {
                        if (e == t._seatId) {
                            var a = null;
                            null != n && n.timePass && null != n && n.curTime && (a = (null == n ? void 0 : n.timePass) - (y.time() - (null == n ? void 0 : n.curTime))), t.onGiveUp(a)
                        }
                    })))
                }, r._updateDodeQuePos = function() {
                    this.nodeQue.active && this.nodeQue.setPosition(this.zhuangNodePos)
                }, r.onDingQueOptionsResult = function(e) {
                    var t = this;
                    if (null != (null == e ? void 0 : e.seatId) && (null == e ? void 0 : e.seatId) == this._seatId) {
                        if (this.onUpdateOptionTips({
                                tag: "hide"
                            }), S.stopAllByTarget(this.nodeQue), -1 == (null == e ? void 0 : e.option)) return void this.onUpdateOptionTips({
                            tag: "show_dingque"
                        });
                        var n = (null == e ? void 0 : e.option) == q.WAN ? "wan" : (null == e ? void 0 : e.option) == q.TIAO ? "tiao" : "tong";
                        this.nodeQue.getComponent(d).spriteFrame = this.imgAtlas.spriteFrames["doudizhu/player/icon_" + n], this.nodeQue.active = !0, this.nodeQue.scale = new h(.32, .32, .32), null == this.queNodePos && (this.nodeLabelView.getComponent(C).updateLayout(), this.queNodePos = this.nodeQue.getPosition());
                        var a = this.quePos[this.PosID];
                        if (this.nodeQue.setPosition(a), a) {
                            if (!W.getInstance().isDingQueFinish()) return void(W.getInstance().isMySelfSeat(this._seatId) ? A(this.nodeQue).to(0, {
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
                            this.nodeQue.setPosition(a), this.nodeQue.scale = new h(0, 0, 1), A(this.nodeQue).target(this.nodeQue).to(.016, {
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
                        var a = M.camera2D.screenToWorld(M.camera3D.worldToScreen(n));
                        return e.getComponent(g).convertToNodeSpaceAR(a)
                    }
                }, r.setOptionTipsPos = function(e, t) {
                    void 0 === t && (t = null);
                    var n = this._getOptipsPos(t || e);
                    return n && e.setPosition(n), n
                }, r._resetOptipNode = function() {
                    S.stopAllByTarget(this.opTips.node), this.opTips.node.destroyAllChildren(), this.opTips.unscheduleAllCallbacks(), this.opTips.node.scale = new h(1, 1, 1), this.updateOptipsVisible(!1), this.tipNodePos && this.opTips.node.setPosition(this.tipNodePos)
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
                        posID: this.PosID,
                        pos: this.tipNodePos,
                        atlas: this.optAtlas
                    };
                    this.doGameCompFun("onOperationResultCheckTips", this.opTips, t)
                }, r.onUpdateOptionTips = function(e) {
                    var t = this;
                    if (console.log("用户操作提示-----onUpdateOptionTips", this.UID, e), e && null != e.tag)
                        if (this._resetOptipNode(), "show_dingque" == e.tag) this._uid != v.User.getUserMid() && (this.opTips.spriteFrame = this.optAtlas.spriteFrames.dingque_txt, this.updateOptipsVisible(!0));
                        else if ("hide" == e.tag) this.updateOptipsVisible(!1);
                    else if ("give_up" == e.tag) this._showGiveView(e.time);
                    else if ("reset_dingque" == e.tag) this.nodeQue.active = !1, this.updateOptipsVisible(!1);
                    else if ("hu" == e.tag) this._showHuPaiTips(e);
                    else if ("show_hsz" == e.tag) this._showHuanSanZhang();
                    else if ("double" == e.tag) this._showDoubleInfo(e.info, e.isReconnect);
                    else if ("maiduanmen" == e.tag) {
                        if (this._uid == v.User.getUserMid()) {
                            var n = e.info;
                            if (null != n && n.seatId && !W.getInstance().isMySelfSeat(null == n ? void 0 : n.seatId)) {
                                var a = se.calculatePlayerSeat(W.getInstance().mySeatId, null == n ? void 0 : n.seatId),
                                    i = 1 == a ? "maiduan_down" : 2 == a ? "maiduan_opponent" : "maiduan_up";
                                this.opTips.spriteFrame = this.optAtlas.spriteFrames[i], this.updateOptipsVisible(!0), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent)
                            }
                        }
                    } else if ("maiduanmen_reslut" == e.tag) {
                        var o = e.info;
                        if (1 != e.isReconnect && (null == o ? void 0 : o.seatId) == this._seatId && (this.opTips.spriteFrame = this.optAtlas.spriteFrames[1 == (null == o ? void 0 : o.option) ? "maiduanmen" : "no_maiduanmen"], this.updateOptipsVisible(!0), this.setOptionTipsPos(this.opTips.node, this.opTips.node.parent), A(this.opTips.node).target(this.opTips.node).delay(1.5).call((function() {
                                t.updateOptipsVisible(!1)
                            })).start()), 1 == (null == o ? void 0 : o.option)) {
                            this.nodeExt.active = !0, this.removeNodeChildByName(this.nodeExt, "duan");
                            var r = y.create_2DSprite(this.spriteAtlas.spriteFrames["doudizhu/player/duan"], "duan");
                            r.scale = new h(.8, .8, 1), this.nodeExt.addChild(r)
                        }
                    } else if ("wait_operation" == e.tag) this.opTips.spriteFrame = this.optAtlas.spriteFrames.wait_operation, this.updateOptipsVisible(!0);
                    else if ("wait_operation_over" == e.tag) {
                        var s;
                        1 == this.opTips.node.active && "wait_operation" == (null == (s = this.opTips.spriteFrame) ? void 0 : s.name) && this.updateOptipsVisible(!1)
                    } else {
                        var u = this._getOptipsPos(this.opTips.node.parent);
                        e.nodeExt = this.nodeExt, e.userId = this._uid, e.posID = this.PosID, this.doGameCompFun("onUpdateOptionTips", this.opTips, e, this.optAtlas, u)
                    }
                }, r.isWaitingToOperation = function() {
                    var e;
                    if (1 == this.opTips.node.active && "wait_operation" == (null == (e = this.opTips.spriteFrame) ? void 0 : e.name)) return !0
                }, r.isDingQueOperation = function() {
                    var e;
                    if (1 == this.opTips.node.active && "dingque_txt" == (null == (e = this.opTips.spriteFrame) ? void 0 : e.name) || this.nodeQue.active) return !0
                }, r.removeNodeChildByName = function(e, t) {
                    var n = e.getChildByName(t);
                    n && (n.removeFromParent(), n.destroy())
                }, r._showDoubleInfo = function(e, t) {
                    var n = this,
                        a = null == e ? void 0 : e.option,
                        i = this.doGameCompFun("getXiazhuRateFramesName", a, e.xiaZhuType, this.opTips.node, this.optAtlas);
                    null != i ? (this.opTips.spriteFrame = this.optAtlas.spriteFrames[i], this.updateOptipsVisible(!0), W.getInstance().hasAllXiaZhuFinish(e.xiaZhuType) && this.onXiaZhuFinish(e, t)) : this.doGameCompFun("checkXiaZhuFinish", e, (function() {
                        n.onXiaZhuFinish(e, t)
                    }))
                }, r.onXiaZhuFinish = function(e, t) {
                    var n = this;
                    void 0 === t && (t = !1), this.doGameCompFun("updateXiaZhuView", null == e ? void 0 : e.option, this.nodeExt, this.spriteAtlas, e.xiaZhuType), t ? (this.updateOptipsVisible(!1), this.nodeUserScore.getComponent(ue).updateView()) : (console.log("用户都已经下注了"), A(this.opTips.node).target(this.opTips.node).delay(1).call((function() {
                        n.updateOptipsVisible(!1), n.nodeUserScore.getComponent(ue).updateView()
                    })).start())
                }, r._showHuPaiTips = function(e) {
                    console.log("胡牌显示胡牌番数-----_showHuPaiTips", e), this.updateOptipsVisible(!0);
                    var t = y.number_valueOf(e.huNum, -1);
                    if (t > 0 || v.SelectGame.isNormalRoom()) {
                        this.opTips.node.scale = new h(.8, .8, 1), this.opTips.spriteFrame = this.optAtlas.spriteFrames.fan_bg;
                        var n = y.create_2DNode("fan"),
                            a = n.addComponent(L),
                            i = n.addComponent(C);
                        i.type = C.Type.HORIZONTAL, i.alignHorizontal = !0, i.resizeMode = C.ResizeMode.CONTAINER, i.spacingX = 5, a.spriteAtlas = this.huNumAtlas, a.setString(t.toString(), null, "fan");
                        var o = y.create_2DSprite(this.optAtlas.spriteFrames.hu);
                        o.setPosition(-90, 0), this.opTips.node.addChild(o), this.opTips.node.addChild(n)
                    } else this.opTips.node.scale = new h(.8, .8, 1), this.opTips.spriteFrame = this.optAtlas.spriteFrames.hu
                }, r._showGiveView = function(e) {
                    this._seatId == W.getInstance().mySeatId ? this.doGameCompFun("getNoAutoGiveUp") && G.ShopFlag ? N.dispatch(P.NOTIFY_BANKRUP_GIVEUP, !0, e) : N.dispatch($.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: 1
                    }) : this._showTipsLoading("renshu_bg")
                }, r._onIsGiveUp = function(e, t) {
                    void 0 === t && (t = 1), this._seatId == W.getInstance().mySeatId && N.dispatch($.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: t
                    })
                }, r._showHuanSanZhang = function() {
                    this._seatId != W.getInstance().mySeatId && this._showTipsLoading("hsz_wait")
                }, r._showTipsLoading = function(e) {
                    var t = this;
                    this._resetOptipNode();
                    for (var n = 0; n < 3; n++) {
                        var a = y.create_2DSprite(this.optAtlas.spriteFrames.dot);
                        this.opTips.node.addChild(a), a.setPosition(32 + 10 * n, 0), a.active = 0 == n
                    }
                    this.opTips.spriteFrame = this.optAtlas.spriteFrames[e], this.updateOptipsVisible(!0);
                    var i = 1;
                    this.opTips.schedule((function() {
                        if (3 == i) return i = 0, void t.opTips.node.children.forEach((function(e) {
                            e.active = !1
                        }));
                        i < 3 && (t.opTips.node.children[i].active = !0), i++
                    }), .5)
                }, r.onGiveUpResult = function(e) {
                    this.onUpdateOptionTips({
                        tag: "hide"
                    }), 1 == e.isGiveUp && (this.updateOptipsVisible(!0), this.opTips.spriteFrame = this.optAtlas.spriteFrames.renshu_state, this._seatId == W.getInstance().mySeatId && N.dispatch(P.NOTIFY_BANKRUP_GIVEUP, !1))
                }, r.onGiveUp = function(e) {
                    this.onUpdateOptionTips({
                        tag: "give_up",
                        time: e
                    })
                }, r.onDestroy = function() {
                    console.log("用户节点销毁：", this._uid), p.off("canvas-resize", this.delayUpdatePos, this)
                }, r.countDownTimeOut = function() {
                    N.dispatch($.EVEMT_USER_GIVE_UP, {
                        seatId: this._seatId,
                        userId: this._uid,
                        isGiveUp: 1
                    })
                }, r.getCenterPos = function(e) {
                    return y.clone(this.centerPos[e])
                }, r.onUpdateUserClock = function(e, t, n) {
                    var a = se.getDirFromSeatId(this._seatId);
                    t >= 0 && a == t ? this.nodeUserClock.setClock(t, n) : this.nodeUserClock.setClock(-1, -1)
                }, o(t, [{
                    key: "UID",
                    get: function() {
                        return this._uid
                    }
                }, {
                    key: "PosID",
                    get: function() {
                        return this.doGameCompFun("getUserPos", this._posID)
                    },
                    set: function(e) {
                        this._posID = e
                    }
                }]), t
            }(D)).prototype, "animNode", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Xe = t(We.prototype, "infoBgPlayer", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ze = t(We.prototype, "nodeDeposit", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ye = t(We.prototype, "headNode", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Qe = t(We.prototype, "headBoxNode", [_e], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), qe = t(We.prototype, "coinIcon", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ke = t(We.prototype, "scoreIcon", [fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $e = t(We.prototype, "matchIcon", [Ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), et = t(We.prototype, "coinLabel", [Ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), tt = t(We.prototype, "nodeChat", [Se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), nt = t(We.prototype, "nodeEmoji", [Ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), at = t(We.prototype, "nodeZhuang", [Ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), it = t(We.prototype, "nodeTing", [Ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ot = t(We.prototype, "nodeMaster", [ye], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), rt = t(We.prototype, "nodeExt", [ve], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), st = t(We.prototype, "nodeQue", [Pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ut = t(We.prototype, "nodeUserScore", [Te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), lt = t(We.prototype, "nodeReady", [be], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), dt = t(We.prototype, "ladderNode", [Oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ct = t(We.prototype, "nodeChangeSeat", [Re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ht = t(We.prototype, "nodeTips", [Me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pt = t(We.prototype, "nickName", [Ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), mt = t(We.prototype, "settleMoneyNode", [Ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _t = t(We.prototype, "paoNode", [De], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), gt = t(We.prototype, "opTips", [Le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ft = t(We.prototype, "imgAtlas", [Be], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ct = t(We.prototype, "optAtlas", [we], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Et = t(We.prototype, "huNumAtlas", [ke], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), St = t(We.prototype, "numPaoAtlas", [He], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), At = t(We.prototype, "spriteAtlas", [xe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), It = t(We.prototype, "nodeLabelView", [Fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Gt = t(We.prototype, "vipMemberNodeCtr", [Ve], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), yt = t(We.prototype, "nodeUserClock", [Je], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), je = We)) || je) || je)), r._RF.pop()
        }
    }
}))