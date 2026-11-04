System.register("chunks:///_virtual/GameScenePrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./LayerManager.ts", "./LayerPopup.ts", "./ResLoader.ts", "./EventManager.ts", "./BaseComponent.ts", "./GlobalCmd.ts", "./GameTopMenuAutoFit.ts", "./gameCommonRes.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJConstant.ts", "./FXJController.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./Ai.ts", "./BaoPaiTop.ts", "./BugangBottom.ts", "./BugangTop.ts", "./HuanSanZhangCtr.ts", "./OpInfo.ts", "./NodeUserCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H, F, k, V, x, W, z, Z, X, J, j, Y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.view, u = e.Prefab, d = e.UITransform, c = e.Label, h = e.Widget, p = e.Button, f = e.Texture2D
        }, function(e) {
            _ = e.Utils
        }, function(e) {
            g = e.GCache
        }, function(e) {
            m = e.AppEvent
        }, function(e) {
            C = e.GConstants
        }, function(e) {
            I = e.GameRes
        }, function(e) {
            A = e.inf_LayerType
        }, function(e) {
            E = e.LayerManager
        }, function(e) {
            v = e.LayerPopUp
        }, function(e) {
            y = e.resLoader
        }, function(e) {
            S = e.EventManager
        }, function(e) {
            P = e.BaseComponent
        }, function(e) {
            T = e.GlobalCmdHeadPHP
        }, function(e) {
            G = e.GameTopMenuAutoFit
        }, function(e) {
            O = e.GameCommonUIConfig, R = e.GameCommonRes
        }, function(e) {
            N = e.PlayerMgr
        }, function(e) {
            b = e.RoomMgr
        }, function(e) {
            D = e.SettleMgr
        }, function(e) {
            L = e.FXJConstant
        }, function(e) {
            M = e.FXJController
        }, function(e) {
            U = e.FXJEvent
        }, function(e) {
            w = e.FXJUIConfig, B = e.FXJRes, H = e.FXJUIID
        }, function(e) {
            F = e.FXJSound, k = e.GameSound
        }, function(e) {
            V = e.GameEvent
        }, function(e) {
            x = e.GameRuleConfig
        }, function(e) {
            W = e.Ai
        }, function(e) {
            z = e.BaoPaiTop
        }, function(e) {
            Z = e.BugangBottom
        }, function(e) {
            X = e.BugangTop
        }, function(e) {
            J = e.HuanSanZhangCtr
        }, function(e) {
            j = e.OpInfo
        }, function(e) {
            Y = e.NodeUserCtr
        }],
        execute: function() {
            var Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue, de, ce, he, pe, fe, _e, ge, me, Ce, Ie, Ae, Ee, ve, ye, Se, Pe, Te, Ge, Oe, Re, Ne, be, De, Le, Me, Ue, we, Be, He, Fe, ke, Ve, xe, We;
            o._RF.push({}, "f3c52TX5I9AdLaa0LpQr0m+", "GameScenePrefabCtr", void 0);
            var ze = r.ccclass,
                Ze = r.property,
                Xe = r.menu;
            e("GameScenePrefabCtr", (Q = ze("GameScenePrefabCtr"), q = Xe("prefab/game/GameScenePrefabCtr"), K = Ze({
                tooltip: "背景",
                type: s
            }), $ = Ze({
                tooltip: "遮罩",
                type: s
            }), ee = Ze({
                tooltip: "用户节点",
                type: Y
            }), te = Ze({
                tooltip: "手牌节点",
                type: s
            }), ne = Ze({
                tooltip: "信息节点",
                type: s
            }), ie = Ze({
                tooltip: "信息节点(前景)",
                type: s
            }), ae = Ze({
                tooltip: "菜单节点",
                type: s
            }), oe = Ze({
                tooltip: "操作节点",
                type: s
            }), re = Ze({
                tooltip: "普通动画操作根节点",
                type: s
            }), se = Ze({
                tooltip: "弹框节点",
                type: s
            }), le = Ze({
                tooltip: "更多按钮",
                type: s
            }), ue = Ze({
                tooltip: "退出按钮",
                type: s
            }), de = Ze({
                tooltip: "左上角菜单",
                type: s
            }), ce = Ze({
                tooltip: "ai弹窗",
                type: W
            }), he = Ze({
                tooltip: "房间信息",
                type: s
            }), pe = Ze({
                tooltip: "剩余牌数信息",
                type: s
            }), fe = Ze(j), _e = Ze(X), ge = Ze(z), me = Ze(J), Ce = Ze(Z), Ie = Ze({
                tooltip: "活动入口",
                type: s
            }), Q(Ae = q((ve = t((Ee = function(e) {
                n(o, e);
                var t = o.prototype;

                function o() {
                    var t;
                    return t = e.call(this) || this, i(t, "bg", ve, a(t)), i(t, "mask", ye, a(t)), i(t, "nodeUser", Se, a(t)), i(t, "nodeHandCard", Pe, a(t)), i(t, "nodeInfo", Te, a(t)), i(t, "nodeInfoFg", Ge, a(t)), i(t, "nodeMenu", Oe, a(t)), i(t, "opration", Re, a(t)), i(t, "nodeNormalAnim", Ne, a(t)), i(t, "nodePopup", be, a(t)), i(t, "btnMore", De, a(t)), i(t, "btnExit", Le, a(t)), i(t, "topLeftMenus", Me, a(t)), i(t, "ai", Ue, a(t)), i(t, "roomInfoTx", we, a(t)), i(t, "remainInfoTx", Be, a(t)), i(t, "opInfo", He, a(t)), i(t, "bugangTop", Fe, a(t)), i(t, "baoPaiTop", ke, a(t)), i(t, "huanSanZhang", Ve, a(t)), i(t, "bugangBottom", xe, a(t)), i(t, "gameActivity", We, a(t)), t._nodePopUp = null, t
                }
                return t.onInitModuleEvent = function() {
                    this.addModelListener(m.SYS_DESIGN_RESOLUTION_SIZE, this.onUpdateDesignResolutionSize), this.addModelListener(V.INIT_GAMEINFO_POS, this._updateGameInfoPos), this.addModelListener(U.VIEW_DESK_BTN_MENU_UPDATE, this.showOrHideBtnMore), this.addModelListener(U.GAME_OPEN_POPUP, this.onOpenPopUp), this.addModelListener(U.GAME_CLOSE_POPUP, this.onClosePopUp), this.addModelListener(V.VIEW_BROADCAST_GRAB_CARD, this.grabCardEvent), this.addModelListener(V.ENTER_ROOM_UPDATE_PLAYER, this.enterRoomUpdatePlayer), this.addModelListener(V.VIEW_UPDATE_FAN_GANG_PAI, this.updateFanGangPai), this.addModelListener(V.VIEW_UPDATE_BU_GANG_PAI, this.updateBuGangPai), this.addModelListener(V.VIEW_GET_BU_GANG_PAI, this.onGetBuGangPai), this.addModelListener(V.UPDATE_REMAIN_CARDS_COUNT, this.updateRemainCardsCount), this.addModelListener(V.VIEW_USER_OPERATION, this.viewUserOperation), this.addModelListener(V.VIEW_MYSELF_OPERATION, this.viewUserOperation), this.addModelListener(V.VIEW_UPDATE_XIA_ZHU_OPTIONS, this.viewUserXiaZhuOptions), this.addModelListener(V.VIEW_UPDATE_XIA_ZHU_RESULT, this.viewUserXiaZhuResult), this.addModelListener(V.VIEW_BROADCAST_DEAL_CARD, this.viewDealCard), this.addModelListener(U.BROADCAST_HUAN_BAO, this.onHuanBao), this.addModelListener(V.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(V.VIEW_BROADCAST_DING_LAIZI, this.onUpdateLaizi), this.addModelListener(m.VIEW_BROADCAST_GAME_OVER, this.onGameOver), this.addModelListener(m.VIEW_BROADCAST_GAME_START, this.onGameStart), this.addModelListener(V.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit), this.addModelListener(V.PRIVATE_PLAY_AGAIN, this.playAgain), this.addModelListener(m.NOTIFY_DISMISS_GAME, this.resetDesk), this.addModelListener(U.ROTAION_HANDCARD_OVER, this.onRotaionHandCardOver), this.addModelListener(V.VIEW_SET_REMAIN_INFO_VISIBLE, this.setRemainInfoVisible), this.addModelListener(m.NOTIFY_UPDATE_LEVEL, this._updateGameInfoPosRoomInfo), this.addModelListener(U.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(U.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onHuanSanZhangStart), this.addModelListener(m.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(V.VIEW_BROADCAST_PLAYER_READY, this.playerReady), this.addModelListener(m.UPDATE_PRIVATE_ROOM_TABLE_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(m.UPDATE_PRIVATE_SETTLE_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(m.UPDATE_PRIVATE_ROOM_ROUNDS_INFO, this._updateGameInfoPosRoomInfo), this.addModelListener(U.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onUserGiveUpReslut), this.addModelListener(m.EVENT_SURE_EXIT_GAME, this.onSureExitGame), this.addModelListener(m.NOTIFY_EXCHANGE_RESULT, this.notifyExchangeRes), this.addModelListener(V.BROADCAST_OPEN_SETTLE_VIEW, this.onShowGameOverView), this.addModelListener(V.VIEW_GAMEOVER_SHOW_HAND_CARD, this.onGameoverShowHandCard)
                }, t.onLoad = function() {
                    console.log("========GameScenePrefabCtr======飞小鸡游戏场景初始化========"), l.on("canvas-resize", this.onUpdateDesignResolutionSize, this), E.updateConfig(w), E.updateConfig(O), S.dispatch(U.SYS_PLAY_MUSIC, F.BgGame), S.dispatch(m.CHAT_VOICE_RESET_PLAY_STATUS), this.addGameComp()
                }, t.start = function() {
                    this.initModules(), M.getInstance().onViewLoad(), this.initView(), this.updateMenuPos(), this.getPiggyBankConfig(), this.loadActivity()
                }, t.loadActivity = function() {
                    var e = this;
                    this.gameActivity.destroyAllChildren(), this.getPreLoaderRes(I.Prefab_GameActivity.bundle, I.Prefab_GameActivity.path, u, (function(t) {
                        if (t) {
                            e.gameActivity.destroyAllChildren(), e.gameActivity.addChild(t);
                            var n = t.getChildByName("activityNode");
                            n && (n.addComponent(G).setTopDiffAlignModule(10), t.getComponent(d).scheduleOnce((function() {
                                var i = t.getComponent(d).convertToWorldSpaceAR(n.getPosition()),
                                    a = e.node.getComponent(d).convertToNodeSpaceAR(i);
                                a.y -= n.getComponent(d).contentSize.height / 2, g.GameInfo.setInfoPos("gameBoxAnim", a)
                            })))
                        }
                    }))
                }, t.addGameComp = function() {
                    null == this.node && (this.node = _.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, t.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, t.initModules = function() {
                    k.getInstance().initCurLang(), g.firstRunLoadSuccess && (this.preLoaderRes(), M.init(), S.dispatch(m.NET_REQ_CONFIG, {
                        cmd: T.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    }))
                }, t.preLoaderRes = function() {
                    if (g.firstRunLoadSuccess) {
                        var e = [{
                            ddzRes: B.Prefab_GameDesk,
                            resType: u
                        }, {
                            ddzRes: B.Prefab_GameMenu,
                            resType: u
                        }, {
                            ddzRes: B.Prefab_NodeUser,
                            resType: u
                        }, {
                            ddzRes: B.Prefab_GameHandCard,
                            resType: u
                        }, {
                            ddzRes: B.Prefab_op,
                            resType: u
                        }, {
                            ddzRes: B.Prefab_GameSettle,
                            resType: u
                        }, {
                            ddzRes: B.Picture_Game_Card_Laizi,
                            resType: f
                        }, {
                            ddzRes: B.Picture_Game_Card_Pao,
                            resType: f
                        }];
                        if (g.SelectGame.isInMatchRoom()) {
                            var t = [{
                                ddzRes: B.Prefab_GameMatch,
                                resType: u
                            }, {
                                ddzRes: B.Prefab_GameNotify,
                                resType: u
                            }];
                            e = e.concat(t)
                        } else if (g.SelectGame.isInPrivateRoom()) {
                            var n = [{
                                ddzRes: B.Prefab_GamePrivate,
                                resType: u
                            }, {
                                ddzRes: B.Prefab_NodeUserPrivate,
                                resType: u
                            }];
                            e = e.concat(n)
                        }
                        this.getPreLoaderArrayRes(e, (function() {})), [].forEach((function(e, t, n) {
                            y.loadDir(e.ddzRes.bundle, e.ddzRes.path, e.resType, (function(e, t) {
                                e && console.log(e)
                            }))
                        }))
                    }
                }, t._updateGameInfoPos = function() {
                    this._updateGameInfoPosRoomInfo(), this._updateGameInfoPosRemainInfo()
                }, t._updateGameInfoPosRoomInfo = function() {
                    var e = g.GameInfo.getRoomInfoPos();
                    if (null != e && !_.table_isEmpty(e)) {
                        var t = E.camera2D.screenToWorld(E.camera3D.worldToScreen(e)),
                            n = this.node.getComponent(d).convertToNodeSpaceAR(t);
                        if (0 != n.x || 0 != n.y || 0 != n.z)
                            if (g.SelectGame.isInMatchRoom());
                            else if (g.SelectGame.isInPrivateRoom()) {
                            var i, a = g.PrivateData.getPrivateRounds();
                            null != a && null != a.current && (1 == (null == (i = g.Desk) ? void 0 : i.isPlayIng()) && 0 == a.current && (a.current = a.current + 1), this.roomInfoTx.getComponent(c).string = "第" + a.current + "/" + a.total + "局", this.roomInfoTx.position = n, this.roomInfoTx.active = !0)
                        } else {
                            var o = g.SelectGame.getCurRoomInfo();
                            o && (this.roomInfoTx.getComponent(c).string = (o.tab_name || "") + " 底注" + o.base_chip, this.roomInfoTx.position = n, this.roomInfoTx.active = !0)
                        }
                    }
                }, t._updateGameInfoPosRemainInfo = function() {
                    var e = g.GameInfo.getRemainInfoPos();
                    if (null != e && !_.table_isEmpty(e)) {
                        var t = E.camera2D.screenToWorld(E.camera3D.worldToScreen(e)),
                            n = this.node.getComponent(d).convertToNodeSpaceAR(t);
                        0 == n.x && 0 == n.y && 0 == n.z || (this.remainInfoTx.position = n, _.isNotNull(b.getInstance().getRemainCardsCount()) && this.updateRemainCardsCount())
                    }
                }, t.setRemainInfoVisible = function(e, t) {
                    this.remainInfoTx.active = t
                }, t.onRotaionHandCardOver = function(e) {
                    g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() || (this.roomInfoTx.active = !0)
                }, t.modifyPlayerDeposit = function(e, t) {
                    null != t.mid && N.getInstance().getMyPlayerInfo() && t.mid === N.getInstance().getMyPlayerInfo().userId && (this.ai.node.active || k.getInstance().playEffect(F.Ai), this.ai.showAiView(t.ai))
                }, t.onGameStart = function(e, t) {
                    g.SelectGame.isNormalRoom() && g.SelectGame.getCurRoomInfo() && (this.roomInfoTx.active = !1, t && 1 == t.isReconn && this._updateGameInfoPosRoomInfo()), this.resetRemainCardCount(t), S.dispatch(V.CLEAN_HAND_CARD), this.baoPaiTop.node.active = !1, this._updateExitStatus(!0), this._updateExitMenuInteractable(!0)
                }, t._updateExitStatus = function(e) {
                    var t;
                    !g.SelectGame.isInPrivateRoom() || null == (t = g.PrivateData.getPrivateRoomTableConfig()) || t.dismissFlag
                }, t.onUpdateDesignResolutionSize = function() {
                    this.updateMenuPos()
                }, t.updateMenuPos = function(e) {
                    var t, n = this;
                    null != (t = this.bugangTop) && t.isValid && this.bugangTop.getComponent(h).scheduleOnce((function() {
                        var e = n.node.getComponent(d).height / n.bg.getComponent(d).height;
                        n.bg.setScale(e, e, 1), n._updateGameInfoPos(), n.loadActivity()
                    }), .1)
                }, t.updateRemainCardsCount = function(e) {
                    var t = _.number_valueOf(b.getInstance().getRemainCardsCount(), 0);
                    this.remainInfoTx.getComponent(c).string = "余牌:" + t
                }, t.viewUserOperation = function(e, t) {
                    this.opInfo.updateOpration(t)
                }, t.viewUserXiaZhuOptions = function(e, t) {
                    g.Desk.hasXiaZhu() ? this.opInfo.updateXiaZhuOptions(t) : this.print("没有下注过程")
                }, t.viewUserMaiDuanMenOptions = function(e, t) {
                    b.getInstance().isMySelfSeat(t.seatId) && this.opInfo.updateMaiDuanMenOptions(t)
                }, t.viewUserXiaZhuResult = function(e, t) {
                    this.doGameCompFun("onUserXiaZhuResult", t), g.Desk.hasXiaZhu() ? t.seatId == b.getInstance().mySeatId && this.opInfo.resetViewXiaZhu() : this.print("没有下注过程")
                }, t.viewDealCard = function(e, t) {
                    g.Desk.hasXiaZhu() ? this.opInfo.resetViewXiaZhu() : this.print("没有下注过程")
                }, t.grabCardEvent = function(e, t) {}, t.onHuanBao = function(e, t) {
                    if (void 0 === t && (t = null), console.log("onHuanBao", t), x.HasBaoPai) {
                        if (t.status == L.BAOSTATUS.KAN) {
                            var n = {
                                seatId: t.curSeat,
                                sprite: "kanbao",
                                tag: "$baopai_" + t.curSeat
                            };
                            S.dispatch(U.VIEW_DESK_ANI_PLAY, L.AnimNormal.picCommon, n)
                        } else if (t.status == L.BAOSTATUS.HUAN) {
                            var i = {
                                seatId: t.curSeat,
                                sprite: "huanbao",
                                tag: "$baopai_" + t.curSeat
                            };
                            S.dispatch(U.VIEW_DESK_ANI_PLAY, L.AnimNormal.picCommon, i)
                        }
                        this.baoPaiTop.node.active = !0, this.baoPaiTop.onHuanBao(t)
                    }
                }, t.updateFanGangPai = function(e) {
                    void 0 === e && (e = null), x.HasBugang && !_.table_isEmpty(b.getInstance().fangangCards) ? (this.bugangTop.updateFanGangPai(b.getInstance().fangangCards), this.bugangTop.node.active = !0) : this.onUpdateLaizi(e)
                }, t.onUpdateLaizi = function(e) {
                    var t, n;
                    if (!this.doGameCompFun("onShowLaiziCard", this.bugangTop)) {
                        var i = b.getInstance().getLaiziInfo();
                        if ((null == i || null == (t = i.fanCard) ? void 0 : t.length) > 0 && (null == i || null == (n = i.laizi) ? void 0 : n.length) > 0) {
                            var a = [i.fanCard[0], i.laizi[0]];
                            this.bugangTop.updateFanGangPai(a), this.bugangTop.node.active = !0
                        }
                    }
                }, t.updateBuGangPai = function(e, t) {
                    void 0 === t && (t = null), this.bugangBottom.updateBuGangPai(t), this.bugangBottom.node.active = !0
                }, t.onGetBuGangPai = function() {
                    this.bugangBottom.node.active = !1
                }, t.initView = function() {
                    var e = this;
                    M.getInstance().onViewStart(), console.log("初始化界面"), this.getPreLoaderRes(B.Prefab_GameDesk.bundle, B.Prefab_GameDesk.path, u, (function(t) {
                        t ? (S.dispatch(U.VIEW_UI_3D_REMOVE), S.dispatch(U.VIEW_UI_3D_ADD, t), e.scheduleOnce((function() {
                            S.dispatch(V.VIEW_UPDATE_DESK_POS)
                        }), 0)) : S.dispatch(U.BROADCAST_FOURCE_EXIT_ROOM)
                    }), !0, !0), this._nodePopUp = new v(A.PopUp), this.nodePopup.addChild(this._nodePopUp), this.nodeMenu.destroyAllChildren(), this.getPreLoaderRes(B.Prefab_GameMenu.bundle, B.Prefab_GameMenu.path, u, (function(t) {
                        e.nodeMenu.addChild(t)
                    })), g.SelectGame.isInMatchRoom() && (this.nodeInfoFg.destroyAllChildren(), this.getPreLoaderRes(B.Prefab_GameMatch.bundle, B.Prefab_GameMatch.path, u, (function(t) {
                        e.nodeInfoFg.addChild(t)
                    })), this.getPreLoaderRes(B.Prefab_GameNotify.bundle, B.Prefab_GameNotify.path, u, (function(t) {
                        e.nodeInfoFg.addChild(t)
                    }))), this.getPreLoaderRes(B.Prefab_Opmgr.bundle, B.Prefab_Opmgr.path, u, (function(t) {
                        e.nodeMenu.addChild(t)
                    })), this.getPreLoaderRes(R.Prefab_GameTips.bundle, R.Prefab_GameTips.path, u, (function(t) {
                        e.nodePopup.addChild(t)
                    })), this._updateGameInfoPos(), this.bugangTop.node.active = !1, this.baoPaiTop.node.active = !1
                }, t.onTouchStart = function(e) {
                    this.print("点击背景"), S.dispatch(V.VIEW_GAME_SCENE_BG_TOUCH)
                }, t.updateView = function() {}, t.playerLoign = function(e) {
                    var t = this;
                    void 0 === e && (e = null), this.resetDesk(e), this.getPreLoaderRes(B.Prefab_GameHandCard.bundle, B.Prefab_GameHandCard.path, u, (function(e) {
                        var n;
                        t.nodeHandCard.destroyAllChildren(), S.dispatch(V.VIEW_DESTROY_MY_HANDCARD_VIEW), t.nodeHandCard.addChild(e), null != (n = g.Desk) && n.isReconnect && (S.dispatch(V.RECEIVE_DEAL_CARD), S.dispatch(V.DRAW_MY_CARD))
                    })), g.SelectGame.isInPrivateRoom() && this.getPreLoaderRes(B.Prefab_GamePrivate.bundle, B.Prefab_GamePrivate.path, u, (function(e) {
                        t.nodeInfo.destroyAllChildren(), t.nodeInfo.addChild(e)
                    }))
                }, t.dingzhang = function() {}, t.enterRoomUpdatePlayer = function(e, t) {
                    console.log("用户列表---enterRoomUpdatePlayer：", N.getInstance().playerList), this.nodeUser.getComponent(Y).enterRoomUpdatePlayer(), N.getInstance().playerList.forEach((function(e) {
                        S.dispatch(V.VIEW_BROADCAST_PLAYER_ENTER, e.userId)
                    })), this.playerLoign(t)
                }, t.onOpenPopUp = function(e, t, n, i) {
                    void 0 === i && (i = null), t && (w[t] || w[t]) && (E.has(t, this._nodePopUp) || E.isLoading(t, this._nodePopUp) || E.open(t, n, i, this._nodePopUp))
                }, t.onClosePopUp = function(e, t) {
                    if (t && (w[t] || w[t]))
                        if (t == H.ToolBarPrefab) {
                            var n = this._nodePopUp.getChildByName(t);
                            if (n) return void n.destroy()
                        } else {
                            var i = w[t] || w[t];
                            E.clear(null == i ? void 0 : i.layer, !0, this._nodePopUp)
                        }
                }, t.onEnable = function() {
                    this.mask && this.mask.isValid && this.mask.on(s.EventType.TOUCH_START, this.onTouchStart, this)
                }, t.onDisable = function() {
                    this.mask && this.mask.isValid && this.mask.off(s.EventType.TOUCH_START, this.onTouchStart, this)
                }, t.onDestroy = function() {
                    this.unscheduleAllCallbacks(), S.dispatch(m.CHAT_VOICE_RESET_PLAY_STATUS), l.off("canvas-resize", this.onUpdateDesignResolutionSize, this), S.dispatch(U.VIEW_UI_3D_REMOVE), M.getInstance().onViewDestroy(), M.getInstance().clear(), g.Activity.resetGameBoxConf(), S.dispatch(m.SYS_STOP_PLAY_EFFECT)
                }, t.onGameOver = function() {
                    this._updateExitStatus(!1), this.resetDesk(), this.ai.node.active = !1, this.remainInfoTx.active = !1, S.dispatch(V.CLEAN_AI_SHOWING)
                }, t.resetDesk = function(e) {
                    void 0 === e && (e = null), this.opInfo.resetView(), this.bugangBottom.node.active = !1, e && e.isReconn || (this.baoPaiTop.node.active = !1)
                }, t.playAgain = function(e) {
                    this.resetDesk(), this._updateGameInfoPosRoomInfo()
                }, t.showOrHideBtnMore = function(e, t, n) {
                    n && "settle" == n ? (this.topLeftMenus.active = t, t && this._updateExitMenuInteractable(!0)) : this.btnMore.active = t
                }, t.onClickMoreMenu = function() {
                    k.getInstance().playEffect(F.CommClick), S.dispatch(U.GAME_OPEN_POPUP, H.ToolBarPrefab, null, {})
                }, t.onCloseBack = function() {
                    var e;
                    if (k.getInstance().playEffect(F.CommClick), g.SelectGame.isNormalRoom() && null != (e = g.Desk) && e.isPlayIng()) {
                        var t = g.SelectGame.getCurRoomInfo();
                        if (_.nullToDefault(null == t ? void 0 : t.force_quit_tax, 0) <= 0) return void S.dispatch(m.SYS_TOAST_TIP, {
                            content: "正在对局中，不能中途退场哦！"
                        })
                    }
                    _.table_isEmpty(g.Activity.getGameBoxConf()) || g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() ? this.onSureExitGame() : S.dispatch(m.EVENT_SHOW_IS_EXIT_GAME)
                }, t.onSureExitGame = function() {
                    if (g.SelectGame.isInMatchRoom());
                    else if (g.SelectGame.isInPrivateRoom()) {
                        var e, t = g.PrivateData.getPrivateRoomInviteInfoKey();
                        _.string_isEmpty(t) || S.dispatch(U.NET_REQ_PRIVATE_ROOM_INVITE, t, "leave"), (null == (e = g.Desk) ? void 0 : e.getRoomStates()) !== C.GameRoomState.STATUS_EXITSUCCESS && g.User.LoginRoomState ? S.dispatch(U.NET_REQ_LOGOUT_IN_GAME) : S.dispatch(U.NET_REQ_LOGOUT_IN_GAME_FORCE)
                    } else {
                        var n;
                        (null == (n = g.Desk) ? void 0 : n.getRoomStates()) !== C.GameRoomState.STATUS_EXITSUCCESS && g.User.LoginRoomState ? S.dispatch(U.NET_REQ_LOGOUT_IN_GAME) : S.dispatch(U.NET_REQ_LOGOUT_IN_GAME_FORCE)
                    }
                }, t.resetRemainCardCount = function(e) {
                    if (console.log("test----------重置剩余手牌数量", e), !(null == e ? void 0 : e.isReconn)) {
                        var t = this.doGameCompFun("getCardTotalNum");
                        t ? b.getInstance().updateRemainCardsCount(t) : b.getInstance().updateRemainCardsCount(x.CardTotalNum)
                    }
                }, t.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("onGameSceneRealTimeHuInfo", t)
                }, t.onHuanSanZhangStart = function() {
                    this.huanSanZhang.node.active = !0, this.huanSanZhang.resetInit(), this.huanSanZhang.onHuanSanZhangStart()
                }, t.onUserGiveUpReslut = function(e, t) {
                    1 == t.isGiveUp && t.userId == g.User.getUserMid() && this.onGameOver()
                }, t.onReconnectSuccess = function() {
                    this._updateExitMenuInteractable(!0), this.huanSanZhang.onReconnectSuccess(), this.opInfo.onReconnectSuccess(), this.ai.onReconnectSuccess()
                }, t.playerReady = function(e, t) {
                    b.getInstance().isMySelfByUserId(t) && (this.bugangTop.node.active = !1)
                }, t.getPiggyBankConfig = function() {
                    g.SelectGame.isInMatchRoom() || g.SelectGame.isInPrivateRoom() || g.Activity.hasPiggyBankConfig() || S.dispatch(m.NET_REQ_PIGGY_BANK_CONFIG)
                }, t.notifyExchangeRes = function(e, t) {
                    _.table_isEmpty(g.SelectGame.getPopConfig()) || 1 == (t = _.table_verify(t)).state && S.dispatch(m.NET_REQ_CONFIG, {
                        cmd: T.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    })
                }, t.onShowGameOverView = function(e, t) {
                    var n = this;
                    this.doGameCompFun("checkCansShowSettleView", (function() {
                        var e = D.getInstance().getSetleViewData();
                        "showSettleView" == e.tag && e.viewId ? S.dispatch(U.GAME_OPEN_POPUP, e.viewId, e.data) : "showOutCardAniPlay" == e.tag && e.eventId ? n.scheduleOnce((function() {
                            S.dispatch(e.eventId, e.data)
                        }), 1.5) : "showHuangZhuanAniPlay" == e.tag && e.eventId && S.dispatch(e.eventId, e.data)
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
            }(P)).prototype, "bg", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(Ee.prototype, "mask", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(Ee.prototype, "nodeUser", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(Ee.prototype, "nodeHandCard", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(Ee.prototype, "nodeInfo", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(Ee.prototype, "nodeInfoFg", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(Ee.prototype, "nodeMenu", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(Ee.prototype, "opration", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ne = t(Ee.prototype, "nodeNormalAnim", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(Ee.prototype, "nodePopup", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(Ee.prototype, "btnMore", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(Ee.prototype, "btnExit", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(Ee.prototype, "topLeftMenus", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ue = t(Ee.prototype, "ai", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), we = t(Ee.prototype, "roomInfoTx", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Be = t(Ee.prototype, "remainInfoTx", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), He = t(Ee.prototype, "opInfo", [fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Fe = t(Ee.prototype, "bugangTop", [_e], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ke = t(Ee.prototype, "baoPaiTop", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ve = t(Ee.prototype, "huanSanZhang", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), xe = t(Ee.prototype, "bugangBottom", [Ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), We = t(Ee.prototype, "gameActivity", [Ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ae = Ee)) || Ae) || Ae)), o._RF.pop()
        }
    }
}))