System.register("chunks:///_virtual/GameScenePrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./LayerManager.ts", "./LayerPopup.ts", "./ResLoader.ts", "./EventManager.ts", "./BaseComponent.ts", "./GlobalCmd.ts", "./gameCommonRes.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJConstant3.ts", "./FXJController3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./Ai3.ts", "./BaoPaiTop3.ts", "./BugangBottom3.ts", "./BugangTop3.ts", "./HuanSanZhangCtr3.ts", "./OpInfo3.ts", "./NodeUserCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.view, l = e.Prefab, d = e.UITransform, c = e.Label, h = e.Widget, p = e.Button, m = e.Texture2D
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            g = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            C = e.GConstants
        }, function(e) {
            E = e.GameRes
        }, function(e) {
            S = e.inf_LayerType
        }, function(e) {
            A = e.LayerManager
        }, function(e) {
            I = e.LayerPopUp
        }, function(e) {
            G = e.resLoader
        }, function(e) {
            y = e.EventManager
        }, function(e) {
            v = e.BaseComponent
        }, function(e) {
            P = e.GlobalCmdHeadPHP
        }, function(e) {
            T = e.GameCommonUIConfig, b = e.GameCommonRes
        }, function(e) {
            O = e.PlayerMgr
        }, function(e) {
            R = e.RoomMgr
        }, function(e) {
            M = e.SettleMgr
        }, function(e) {
            N = e.FXJConstant
        }, function(e) {
            U = e.FXJController
        }, function(e) {
            D = e.FXJEvent
        }, function(e) {
            L = e.FXJUIConfig, B = e.FXJRes, w = e.FXJUIID
        }, function(e) {
            k = e.FXJSound, H = e.GameSound
        }, function(e) {
            x = e.GameEvent
        }, function(e) {
            F = e.GameChatTextDefalut, V = e.GameSoundConfigDefault, J = e.GameResConfigDefault, j = e.GameRuleConfig
        }, function(e) {
            W = e.Ai
        }, function(e) {
            z = e.BaoPaiTop
        }, function(e) {
            X = e.BugangBottom
        }, function(e) {
            Z = e.BugangTop
        }, function(e) {
            Y = e.HuanSanZhangCtr
        }, function(e) {
            Q = e.OpInfo
        }, function(e) {
            q = e.NodeUserCtr
        }],
        execute: function() {
            var K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de, ce, he, pe, me, _e, ge, fe, Ce, Ee, Se, Ae, Ie, Ge, ye, ve, Pe, Te, be, Oe, Re, Me, Ne, Ue, De, Le, Be, we, ke, He, xe, Fe, Ve, Je, je, We;
            o._RF.push({}, "42c2aKf8PFEwY05TWjtXgHq", "GameScenePrefabCtr", void 0);
            var ze = r.ccclass,
                Xe = r.property,
                Ze = r.menu;
            e("GameScenePrefabCtr", (K = ze("GameScenePrefabCtr"), $ = Ze("prefab/subGame/mj/GameScenePrefabCtr"), ee = Xe({
                tooltip: "背景",
                type: s
            }), te = Xe({
                tooltip: "遮罩",
                type: s
            }), ne = Xe({
                tooltip: "用户节点",
                type: q
            }), ae = Xe({
                tooltip: "手牌节点",
                type: s
            }), ie = Xe({
                tooltip: "信息节点",
                type: s
            }), oe = Xe({
                tooltip: "信息节点(前景)",
                type: s
            }), re = Xe({
                tooltip: "菜单节点",
                type: s
            }), se = Xe({
                tooltip: "操作节点",
                type: s
            }), ue = Xe({
                tooltip: "普通动画操作根节点",
                type: s
            }), le = Xe({
                tooltip: "弹框节点",
                type: s
            }), de = Xe({
                tooltip: "更多按钮",
                type: s
            }), ce = Xe({
                tooltip: "退出按钮",
                type: s
            }), he = Xe({
                tooltip: "左上角菜单",
                type: s
            }), pe = Xe({
                tooltip: "ai弹窗",
                type: W
            }), me = Xe({
                tooltip: "房间信息",
                type: s
            }), _e = Xe({
                tooltip: "剩余牌数信息",
                type: s
            }), ge = Xe(Q), fe = Xe(Z), Ce = Xe(z), Ee = Xe(Y), Se = Xe(X), Ae = Xe({
                tooltip: "活动入口",
                type: s
            }), K(Ie = $((ye = t((Ge = function(e) {
                n(o, e);
                var t = o.prototype;

                function o() {
                    var t;
                    return t = e.call(this) || this, a(t, "bg", ye, i(t)), a(t, "mask", ve, i(t)), a(t, "nodeUser", Pe, i(t)), a(t, "nodeHandCard", Te, i(t)), a(t, "nodeInfo", be, i(t)), a(t, "nodeInfoFg", Oe, i(t)), a(t, "nodeMenu", Re, i(t)), a(t, "opration", Me, i(t)), a(t, "nodeNormalAnim", Ne, i(t)), a(t, "nodePopup", Ue, i(t)), a(t, "btnMore", De, i(t)), a(t, "btnExit", Le, i(t)), a(t, "topLeftMenus", Be, i(t)), a(t, "ai", we, i(t)), a(t, "roomInfoTx", ke, i(t)), a(t, "remainInfoTx", He, i(t)), a(t, "opInfo", xe, i(t)), a(t, "bugangTop", Fe, i(t)), a(t, "baoPaiTop", Ve, i(t)), a(t, "huanSanZhang", Je, i(t)), a(t, "bugangBottom", je, i(t)), a(t, "gameActivity", We, i(t)), t._nodePopUp = null, t.initGameConfig(), t
                }
                return t.onInitModuleEvent = function() {
                    this.addModelListener(f.SYS_DESIGN_RESOLUTION_SIZE, this.onUpdateDesignResolutionSize), this.addModelListener(x.INIT_GAMEINFO_POS, this._updateGameInfoPos), this.addModelListener(D.VIEW_DESK_BTN_MENU_UPDATE, this.showOrHideBtnMore), this.addModelListener(D.GAME_OPEN_POPUP, this.onOpenPopUp), this.addModelListener(D.GAME_CLOSE_POPUP, this.onClosePopUp), this.addModelListener(x.VIEW_BROADCAST_GRAB_CARD, this.grabCardEvent), this.addModelListener(x.ENTER_ROOM_UPDATE_PLAYER, this.enterRoomUpdatePlayer), this.addModelListener(x.VIEW_UPDATE_FAN_GANG_PAI, this.updateFanGangPai), this.addModelListener(x.VIEW_UPDATE_BU_GANG_PAI, this.updateBuGangPai), this.addModelListener(x.VIEW_GET_BU_GANG_PAI, this.onGetBuGangPai), this.addModelListener(x.UPDATE_REMAIN_CARDS_COUNT, this.updateRemainCardsCount), this.addModelListener(x.VIEW_USER_OPERATION, this.viewUserOperation), this.addModelListener(x.VIEW_MYSELF_OPERATION, this.viewUserOperation), this.addModelListener(x.VIEW_UPDATE_XIA_ZHU_OPTIONS, this.viewUserXiaZhuOptions), this.addModelListener(x.VIEW_UPDATE_XIA_ZHU_RESULT, this.viewUserXiaZhuResult), this.addModelListener(x.VIEW_BROADCAST_DEAL_CARD, this.viewDealCard), this.addModelListener(D.BROADCAST_HUAN_BAO, this.onHuanBao), this.addModelListener(x.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(x.VIEW_BROADCAST_DING_LAIZI, this.onUpdateLaizi), this.addModelListener(x.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(x.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(x.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit), this.addModelListener(x.PRIVATE_PLAY_AGAIN, this.playAgain), this.addModelListener(f.NOTIFY_DISMISS_GAME, this.resetDesk), this.addModelListener(D.ROTAION_HANDCARD_OVER, this.onRotaionHandCardOver), this.addModelListener(x.VIEW_SET_REMAIN_INFO_VISIBLE, this.setRemainInfoVisible), this.addModelListener(f.NOTIFY_UPDATE_LEVEL, this._updateGameInfoPosRoomInfo), this.addModelListener(D.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(D.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangStart), this.addModelListener(f.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(x.VIEW_BROADCAST_PLAYER_READY, this.playerReady), this.addModelListener(f.UPDATE_PRIVATE_ROOM_TABLE_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(f.UPDATE_PRIVATE_SETTLE_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(f.UPDATE_PRIVATE_ROOM_ROUNDS_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(x.PRIVATE_PLAY_AGAIN, this._updateGameInfoPosRoomInfo), this.addModelListener(D.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onUserGiveUpReslut), this.addModelListener(f.EVENT_SURE_EXIT_GAME, this.onSureExitGame), this.addModelListener(f.NOTIFY_EXCHANGE_RESULT, this.notifyExchangeRes), this.addModelListener(x.BROADCAST_OPEN_SETTLE_VIEW, this.onShowGameOverView), this.addModelListener(x.VIEW_GAMEOVER_SHOW_HAND_CARD, this.onGameoverShowHandCard)
                }, t.onLoad = function() {
                    console.log("==============飞小鸡游戏场景初始化========"), this.initModules(), u.on("canvas-resize", this.onUpdateDesignResolutionSize, this), A.updateConfig(L), A.updateConfig(T), U.getInstance().onViewLoad(), y.dispatch(D.SYS_PLAY_MUSIC, k.BgGame), y.dispatch(f.CHAT_VOICE_RESET_PLAY_STATUS), this.addGameComp()
                }, t.start = function() {
                    this.initView(), this.updateMenuPos(), this.getPiggyBankConfig(), this.loadActivity()
                }, t.loadActivity = function() {
                    var e = this;
                    this.gameActivity.destroyAllChildren(), this.getPreLoaderRes(E.Prefab_GameActivity.bundle, E.Prefab_GameActivity.path, l, (function(t) {
                        if (t) {
                            e.checkAddChild(e.gameActivity, t, "GameActivity");
                            var n = t.getChildByName("activityNode");
                            n && t.getComponent(d).scheduleOnce((function() {
                                var a = t.getComponent(d).convertToWorldSpaceAR(n.getPosition()),
                                    i = e.node.getComponent(d).convertToNodeSpaceAR(a);
                                i.y -= n.getComponent(d).contentSize.height / 2, g.GameInfo.setInfoPos("gameBoxAnim", i)
                            }))
                        }
                    }))
                }, t.addGameComp = function() {
                    null == this.node && (this.node = _.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, t.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, t.initModules = function() {
                    H.getInstance().initCurLang(), g.firstRunLoadSuccess && (this.preLoaderRes(), U.init(), y.dispatch(f.NET_REQ_CONFIG, {
                        cmd: P.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    }))
                }, t.initGameConfig = function() {
                    for (var e in F) N.ChatText[e] = F[e];
                    for (var t in V) k[t] = V[t];
                    for (var n in J) B[n] = J[n];
                    for (var a in j.GameChatText) N.ChatText[a] = j.GameChatText[a];
                    for (var i in j.GameSoundConfig) k[i] = j.GameSoundConfig[i];
                    for (var o in j.GameResConfig) B[o] = j.GameResConfig[o]
                }, t.preLoaderRes = function() {
                    if (g.firstRunLoadSuccess) {
                        var e = [{
                            ddzRes: B.Prefab_GameDesk,
                            resType: l
                        }, {
                            ddzRes: B.Prefab_GameMenu,
                            resType: l
                        }, {
                            ddzRes: B.Prefab_NodeUser,
                            resType: l
                        }, {
                            ddzRes: B.Prefab_GameHandCard,
                            resType: l
                        }, {
                            ddzRes: B.Prefab_op,
                            resType: l
                        }, {
                            ddzRes: B.Prefab_GameSettle,
                            resType: l
                        }, {
                            ddzRes: B.Picture_Game_Card_Laizi,
                            resType: m
                        }, {
                            ddzRes: B.Picture_Game_Card_Pao,
                            resType: m
                        }, {
                            ddzRes: B.Picture_Game_Desk,
                            resType: m
                        }];
                        if (g.SelectGame.isInMatchRoom()) {
                            var t = [{
                                ddzRes: B.Prefab_GameMatch,
                                resType: l
                            }, {
                                ddzRes: B.Prefab_GameNotify,
                                resType: l
                            }];
                            e = e.concat(t)
                        } else if (g.SelectGame.isInPrivateRoom()) {
                            var n = [{
                                ddzRes: B.Prefab_GamePrivate,
                                resType: l
                            }, {
                                ddzRes: B.Prefab_NodeUserPrivate,
                                resType: l
                            }];
                            e = e.concat(n)
                        }
                        this.getPreLoaderArrayRes(e, (function() {})), [].forEach((function(e, t, n) {
                            G.loadDir(e.ddzRes.bundle, e.ddzRes.path, e.resType, (function(e, t) {
                                e && console.log(e)
                            }))
                        }))
                    }
                }, t._updateGameInfoPos = function() {
                    this._updateGameInfoPosRoomInfo(), this._updateGameInfoPosRemainInfo()
                }, t._updateGameInfoPosRoomInfo = function() {
                    var e = g.GameInfo.getRoomInfoPos();
                    if (null != e && !_.table_isEmpty(e)) {
                        var t = A.camera2D.screenToWorld(A.camera3D.worldToScreen(e)),
                            n = this.node.getComponent(d).convertToNodeSpaceAR(t);
                        if (0 != n.x || 0 != n.y || 0 != n.z)
                            if (g.SelectGame.isInMatchRoom());
                            else if (g.SelectGame.isInPrivateRoom()) {
                            var a, i = g.PrivateData.getPrivateRounds();
                            null != i && null != i.current && (1 == (null == (a = g.Desk) ? void 0 : a.isPlayIng()) && 0 == i.current && (i.current = i.current + 1), this.roomInfoTx.getComponent(c).string = "第" + i.current + "/" + i.total + "局", this.roomInfoTx.position = n, this.roomInfoTx.active = !0)
                        } else {
                            var o = g.SelectGame.getCurRoomInfo();
                            o && (this.roomInfoTx.getComponent(c).string = (o.tab_name || "") + " 底注" + o.base_chip, this.roomInfoTx.position = n, this.roomInfoTx.active = !0)
                        }
                    }
                }, t._updateGameInfoPosRemainInfo = function() {
                    var e = g.GameInfo.getRemainInfoPos();
                    if (null != e && !_.table_isEmpty(e)) {
                        var t = A.camera2D.screenToWorld(A.camera3D.worldToScreen(e)),
                            n = this.node.getComponent(d).convertToNodeSpaceAR(t);
                        0 == n.x && 0 == n.y && 0 == n.z || (this.remainInfoTx.position = n, _.isNotNull(R.getInstance().getRemainCardsCount()) && this.updateRemainCardsCount())
                    }
                }, t.setRemainInfoVisible = function(e, t) {
                    this.remainInfoTx.active = t
                }, t.onRotaionHandCardOver = function(e) {
                    g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() || (this.roomInfoTx.active = !0)
                }, t.modifyPlayerDeposit = function(e, t) {
                    null != t.mid && O.getInstance().getMyPlayerInfo() && t.mid === O.getInstance().getMyPlayerInfo().userId && (this.ai.node.active || H.getInstance().playEffect(k.Ai), this.ai.showAiView(t.ai))
                }, t.onGameStart = function(e, t) {
                    g.SelectGame.isNormalRoom() && g.SelectGame.getCurRoomInfo() && (this.roomInfoTx.active = !1, t && 1 == t.isReconn && this._updateGameInfoPosRoomInfo()), this.resetRemainCardCount(t), y.dispatch(x.CLEAN_HAND_CARD), this.baoPaiTop.node.active = !1, this._updateExitStatus(!0), this._updateExitMenuInteractable(!0)
                }, t._updateExitStatus = function(e) {
                    var t;
                    !g.SelectGame.isInPrivateRoom() || null == (t = g.PrivateData.getPrivateRoomTableConfig()) || t.dismissFlag
                }, t.onUpdateDesignResolutionSize = function() {
                    this.updateMenuPos()
                }, t.updateMenuPos = function(e) {
                    var t = this;
                    this.topLeftMenus.getComponent(h).scheduleOnce((function() {
                        var e = t.node.getComponent(d).height / t.bg.getComponent(d).height;
                        t.bg.setScale(e, e, 1), t._updateGameInfoPos(), t.loadActivity()
                    }), .1)
                }, t.updateRemainCardsCount = function(e) {
                    var t = _.number_valueOf(R.getInstance().getRemainCardsCount(), 0);
                    this.remainInfoTx.getComponent(c).string = "余牌:" + t
                }, t.viewUserOperation = function(e, t) {
                    this.opInfo.updateOpration(t)
                }, t.viewUserXiaZhuOptions = function(e, t) {
                    g.Desk.hasXiaZhu() ? this.opInfo.updateXiaZhuOptions(t) : this.print("没有下注过程")
                }, t.viewUserMaiDuanMenOptions = function(e, t) {
                    R.getInstance().isMySelfSeat(t.seatId) && this.opInfo.updateMaiDuanMenOptions(t)
                }, t.viewUserXiaZhuResult = function(e, t) {
                    this.doGameCompFun("onUserXiaZhuResult", t), g.Desk.hasXiaZhu() ? t.seatId == R.getInstance().mySeatId && this.opInfo.resetViewXiaZhu() : this.print("没有下注过程")
                }, t.viewDealCard = function(e, t) {
                    g.Desk.hasXiaZhu() ? this.opInfo.resetViewXiaZhu() : this.print("没有下注过程")
                }, t.grabCardEvent = function(e, t) {}, t.onHuanBao = function(e, t) {
                    if (void 0 === t && (t = null), console.log("onHuanBao", t), j.HasBaoPai) {
                        if (t.status == N.BAOSTATUS.KAN) {
                            var n = {
                                seatId: t.curSeat,
                                sprite: "kanbao",
                                tag: "$baopai_" + t.curSeat
                            };
                            y.dispatch(D.VIEW_DESK_ANI_PLAY, N.AnimNormal.picCommon, n)
                        } else if (t.status == N.BAOSTATUS.HUAN) {
                            var a = {
                                seatId: t.curSeat,
                                sprite: "huanbao",
                                tag: "$baopai_" + t.curSeat
                            };
                            y.dispatch(D.VIEW_DESK_ANI_PLAY, N.AnimNormal.picCommon, a)
                        }
                        this.baoPaiTop.node.active = !0, this.baoPaiTop.onHuanBao(t)
                    }
                }, t.updateFanGangPai = function(e) {
                    void 0 === e && (e = null), j.HasBugang && !_.table_isEmpty(R.getInstance().fangangCards) ? (this.bugangTop.updateFanGangPai(R.getInstance().fangangCards), this.bugangTop.node.active = !0) : this.onUpdateLaizi(e)
                }, t.onUpdateLaizi = function(e) {
                    var t, n;
                    if (!this.doGameCompFun("onShowLaiziCard", this.bugangTop)) {
                        var a = R.getInstance().getLaiziInfo();
                        if ((null == a || null == (t = a.fanCard) ? void 0 : t.length) > 0 && (null == a || null == (n = a.laizi) ? void 0 : n.length) > 0) {
                            var i = [a.fanCard[0], a.laizi[0]];
                            this.bugangTop.updateFanGangPai(i), this.bugangTop.node.active = !0
                        }
                    }
                }, t.updateBuGangPai = function(e, t) {
                    void 0 === t && (t = null), this.bugangBottom.updateBuGangPai(t), this.bugangBottom.node.active = !0
                }, t.onGetBuGangPai = function() {
                    this.bugangBottom.node.active = !1
                }, t.initView = function() {
                    var e = this;
                    U.getInstance().onViewStart(), console.log("初始化界面"), this.getPreLoaderRes(B.Prefab_GameDesk.bundle, B.Prefab_GameDesk.path, l, (function(t) {
                        y.dispatch(D.VIEW_UI_3D_REMOVE), y.dispatch(D.VIEW_UI_3D_ADD, t), e.scheduleOnce((function() {
                            y.dispatch(x.VIEW_UPDATE_DESK_POS)
                        }), 0)
                    })), this._nodePopUp = new I(S.PopUp), this.nodePopup.addChild(this._nodePopUp), this.nodeMenu.destroyAllChildren(), this.getPreLoaderRes(B.Prefab_GameMenu.bundle, B.Prefab_GameMenu.path, l, (function(t) {
                        e.checkAddChild(e.nodeMenu, t, "GameMenu")
                    })), g.SelectGame.isInMatchRoom() && (this.nodeInfoFg.destroyAllChildren(), this.getPreLoaderRes(B.Prefab_GameMatch.bundle, B.Prefab_GameMatch.path, l, (function(t) {
                        e.checkAddChild(e.nodeInfoFg, t, "GameMatch")
                    })), this.getPreLoaderRes(B.Prefab_GameNotify.bundle, B.Prefab_GameNotify.path, l, (function(t) {
                        e.checkAddChild(e.nodeInfoFg, t, "GameNotify")
                    }))), this.getPreLoaderRes(B.Prefab_Opmgr.bundle, B.Prefab_Opmgr.path, l, (function(t) {
                        e.checkAddChild(e.nodeMenu, t, "Opmgr")
                    })), this.getPreLoaderRes(b.Prefab_GameTips.bundle, b.Prefab_GameTips.path, l, (function(t) {
                        e.nodePopup.addChild(t)
                    })), this._updateGameInfoPos(), this.bugangTop.node.active = !1, this.baoPaiTop.node.active = !1
                }, t.checkAddChild = function(e, t, n) {
                    var a = e.getChildByName(n);
                    a && e.removeChild(a), t.name = n, e.addChild(t)
                }, t.onTouchStart = function(e) {
                    this.print("点击背景"), y.dispatch(x.VIEW_GAME_SCENE_BG_TOUCH)
                }, t.updateView = function() {}, t.playerLoign = function(e) {
                    var t = this;
                    void 0 === e && (e = null), this.resetDesk(e), this.getPreLoaderRes(B.Prefab_GameHandCard.bundle, B.Prefab_GameHandCard.path, l, (function(e) {
                        var n;
                        t.nodeHandCard.destroyAllChildren(), y.dispatch(x.VIEW_DESTROY_MY_HANDCARD_VIEW), t.checkAddChild(t.nodeHandCard, e, "GameHandCard"), null != (n = g.Desk) && n.isReconnect && (y.dispatch(x.RECEIVE_DEAL_CARD), y.dispatch(x.DRAW_MY_CARD))
                    })), g.SelectGame.isInPrivateRoom() && this.getPreLoaderRes(B.Prefab_GamePrivate.bundle, B.Prefab_GamePrivate.path, l, (function(e) {
                        t.nodeInfo.destroyAllChildren(), t.checkAddChild(t.nodeInfo, e, "GamePrivate")
                    }))
                }, t.dingzhang = function() {}, t.enterRoomUpdatePlayer = function(e, t) {
                    console.log("用户列表---enterRoomUpdatePlayer：", O.getInstance().playerList), this.nodeUser.getComponent(q).enterRoomUpdatePlayer(), O.getInstance().playerList.forEach((function(e) {
                        y.dispatch(x.VIEW_BROADCAST_PLAYER_ENTER, e.userId)
                    })), this.playerLoign(t)
                }, t.onOpenPopUp = function(e, t, n, a) {
                    void 0 === a && (a = null), t && (L[t] || L[t]) && (A.has(t, this._nodePopUp) || A.isLoading(t, this._nodePopUp) || A.open(t, n, a, this._nodePopUp))
                }, t.onClosePopUp = function(e, t) {
                    if (t && (L[t] || L[t]))
                        if (t == w.ToolBarPrefab) {
                            var n = this._nodePopUp.getChildByName(t);
                            if (n) return void n.destroy()
                        } else {
                            var a = L[t] || L[t];
                            A.clear(null == a ? void 0 : a.layer, !0, this._nodePopUp)
                        }
                }, t.onEnable = function() {
                    this.mask && this.mask.isValid && this.mask.on(s.EventType.TOUCH_START, this.onTouchStart, this)
                }, t.onDisable = function() {
                    this.mask && this.mask.isValid && this.mask.off(s.EventType.TOUCH_START, this.onTouchStart, this)
                }, t.onDestroy = function() {
                    this.unscheduleAllCallbacks(), y.dispatch(f.CHAT_VOICE_RESET_PLAY_STATUS), u.off("canvas-resize", this.onUpdateDesignResolutionSize, this), y.dispatch(D.VIEW_UI_3D_REMOVE), U.getInstance().onViewDestroy(), U.getInstance().clear(), g.Activity.resetGameBoxConf(), y.dispatch(f.SYS_STOP_PLAY_EFFECT)
                }, t.onGameOver = function() {
                    this._updateExitStatus(!1), this.resetDesk(), this.ai.node.active = !1, this.remainInfoTx.active = !1, y.dispatch(x.CLEAN_AI_SHOWING)
                }, t.resetDesk = function(e) {
                    void 0 === e && (e = null), this.opInfo.resetView(), this.bugangBottom.node.active = !1, e && e.isReconn || (this.baoPaiTop.node.active = !1)
                }, t.playAgain = function(e) {
                    this.resetDesk(), this._updateGameInfoPosRoomInfo()
                }, t.showOrHideBtnMore = function(e, t, n) {
                    n && "settle" == n ? (this.topLeftMenus.active = t, t && this._updateExitMenuInteractable(!0)) : this.btnMore.active = t
                }, t.onClickMoreMenu = function() {
                    H.getInstance().playEffect(k.CommClick), y.dispatch(D.GAME_OPEN_POPUP, w.ToolBarPrefab, null, {})
                }, t.onCloseBack = function() {
                    var e;
                    if (H.getInstance().playEffect(k.CommClick), g.SelectGame.isNormalRoom() && null != (e = g.Desk) && e.isPlayIng()) {
                        var t = g.SelectGame.getCurRoomInfo();
                        if (_.nullToDefault(null == t ? void 0 : t.force_quit_tax, 0) <= 0) return void y.dispatch(f.SYS_TOAST_TIP, {
                            content: "正在对局中，不能中途退场哦！"
                        })
                    }
                    _.table_isEmpty(g.Activity.getGameBoxConf()) || g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() ? this.onSureExitGame() : y.dispatch(f.EVENT_SHOW_IS_EXIT_GAME)
                }, t.onSureExitGame = function() {
                    if (g.SelectGame.isInMatchRoom());
                    else if (g.SelectGame.isInPrivateRoom()) {
                        var e, t = g.PrivateData.getPrivateRoomInviteInfoKey();
                        _.string_isEmpty(t) || y.dispatch(D.NET_REQ_PRIVATE_ROOM_INVITE, t, "leave"), (null == (e = g.Desk) ? void 0 : e.getRoomStates()) !== C.GameRoomState.STATUS_EXITSUCCESS && g.User.LoginRoomState ? y.dispatch(D.NET_REQ_LOGOUT_IN_GAME) : y.dispatch(D.NET_REQ_LOGOUT_IN_GAME_FORCE)
                    } else {
                        var n;
                        (null == (n = g.Desk) ? void 0 : n.getRoomStates()) !== C.GameRoomState.STATUS_EXITSUCCESS && g.User.LoginRoomState ? y.dispatch(D.NET_REQ_LOGOUT_IN_GAME) : y.dispatch(D.NET_REQ_LOGOUT_IN_GAME_FORCE)
                    }
                }, t.resetRemainCardCount = function(e) {
                    if (console.log("test----------重置剩余手牌数量", e), !(null == e ? void 0 : e.isReconn)) {
                        var t = this.doGameCompFun("getCardTotalNum");
                        t ? R.getInstance().updateRemainCardsCount(t) : R.getInstance().updateRemainCardsCount(j.CardTotalNum)
                    }
                }, t.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("onGameSceneRealTimeHuInfo", t)
                }, t.onHuanSanZhangStart = function() {
                    this.huanSanZhang.node.active = !0, this.huanSanZhang.resetInit(), this.huanSanZhang.onHuanSanZhangStart()
                }, t.onUserGiveUpReslut = function(e, t) {
                    1 == t.isGiveUp && t.userId == g.User.getUserMid() && this.onGameOver()
                }, t.onReconnectSuccess = function() {
                    this.huanSanZhang.onReconnectSuccess(), this.opInfo.onReconnectSuccess(), this.ai.onReconnectSuccess(), this._updateExitMenuInteractable(!0)
                }, t.playerReady = function(e, t) {
                    R.getInstance().isMySelfByUserId(t) && (this.bugangTop.node.active = !1)
                }, t.getPiggyBankConfig = function() {
                    g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() || g.Activity.hasPiggyBankConfig() || y.dispatch(f.NET_REQ_PIGGY_BANK_CONFIG)
                }, t.notifyExchangeRes = function(e, t) {
                    _.table_isEmpty(g.SelectGame.getPopConfig()) || 1 == (t = _.table_verify(t)).state && y.dispatch(f.NET_REQ_CONFIG, {
                        cmd: P.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    })
                }, t.onShowGameOverView = function(e, t) {
                    var n = this;
                    this.doGameCompFun("checkCansShowSettleView", (function() {
                        var e = M.getInstance().getSetleViewData();
                        "showSettleView" == e.tag && e.viewId ? y.dispatch(D.GAME_OPEN_POPUP, e.viewId, e.data) : "showOutCardAniPlay" == e.tag && e.eventId ? n.scheduleOnce((function() {
                            y.dispatch(e.eventId, e.data)
                        }), 1.5) : "showHuangZhuanAniPlay" == e.tag && e.eventId && y.dispatch(e.eventId, e.data)
                    }), t)
                }, t.onGameoverShowHandCard = function() {
                    var e = this;
                    this._updateExitMenuInteractable(!1), this.btnExit.getComponent(p).scheduleOnce((function() {
                        e._updateExitMenuInteractable(!0)
                    }), 10)
                }, t._updateExitMenuInteractable = function(e) {
                    var t;
                    if (null != (t = this.btnExit) && t.isValid) {
                        var n = this.btnExit.getComponent(p);
                        n && (n.unscheduleAllCallbacks(), n.interactable = e, console.log("更新退出菜单可交互状态", e))
                    }
                }, o
            }(v)).prototype, "bg", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(Ge.prototype, "mask", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(Ge.prototype, "nodeUser", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(Ge.prototype, "nodeHandCard", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(Ge.prototype, "nodeInfo", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(Ge.prototype, "nodeInfoFg", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(Ge.prototype, "nodeMenu", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(Ge.prototype, "opration", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ne = t(Ge.prototype, "nodeNormalAnim", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ue = t(Ge.prototype, "nodePopup", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(Ge.prototype, "btnMore", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(Ge.prototype, "btnExit", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Be = t(Ge.prototype, "topLeftMenus", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), we = t(Ge.prototype, "ai", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ke = t(Ge.prototype, "roomInfoTx", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), He = t(Ge.prototype, "remainInfoTx", [_e], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), xe = t(Ge.prototype, "opInfo", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Fe = t(Ge.prototype, "bugangTop", [fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ve = t(Ge.prototype, "baoPaiTop", [Ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Je = t(Ge.prototype, "huanSanZhang", [Ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), je = t(Ge.prototype, "bugangBottom", [Se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), We = t(Ge.prototype, "gameActivity", [Ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = Ge)) || Ie) || Ie)), o._RF.pop()
        }
    }
}))