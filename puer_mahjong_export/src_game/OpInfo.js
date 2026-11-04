System.register("chunks:///_virtual/OpInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConstant.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./LayerManager.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./OperationMgr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./Card.ts", "./Carditem.ts", "./XiaZhuItem.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Node, u = e.Layout, d = e.Prefab, c = e.SpriteFrame, h = e.sp, p = e.UITransform, f = e.instantiate
        }, function(e) {
            _ = e.GAMETYPE
        }, function(e) {
            g = e.Utils
        }, function(e) {
            m = e.GCache
        }, function(e) {
            C = e.AppEvent
        }, function(e) {
            I = e.LayerManager
        }, function(e) {
            A = e.EventManager
        }, function(e) {
            E = e.SpineAniUtils
        }, function(e) {
            v = e.BaseComponent
        }, function(e) {
            y = e.OperationMgr
        }, function(e) {
            S = e.PlayerMgr
        }, function(e) {
            P = e.RoomMgr
        }, function(e) {
            T = e.OPCode, G = e.GameStatus, O = e.HuMap, R = e.MJTYPE
        }, function(e) {
            N = e.FXJEvent
        }, function(e) {
            b = e.FXJRes
        }, function(e) {
            D = e.GameSound, L = e.FXJSound
        }, function(e) {
            M = e.GameEvent
        }, function(e) {
            U = e.GameRuleConfig
        }, function(e) {
            w = e.Card
        }, function(e) {
            B = e.Carditem
        }, function(e) {
            H = e.XiaZhuItem
        }],
        execute: function() {
            var F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue, de, ce, he, pe, fe, _e, ge, me, Ce, Ie, Ae, Ee, ve, ye, Se, Pe, Te, Ge, Oe, Re, Ne, be, De, Le, Me, Ue;
            r._RF.push({}, "631f7TN/sNLS4DSstZCbtvq", "OpInfo", void 0);
            var we = s.ccclass,
                Be = s.property;
            e("OpInfo", (F = we("OpInfo"), k = Be(l), V = Be(l), x = Be(l), W = Be(u), z = Be(u), Z = Be(u), X = Be(u), J = Be(u), j = Be(u), Y = Be(u), Q = Be(u), q = Be(u), K = Be(u), $ = Be(u), ee = Be(u), te = Be(u), ne = Be(u), ie = Be({
                tooltip: "定缺layout",
                type: u
            }), ae = Be({
                tooltip: "手牌预制体",
                type: d
            }), oe = Be({
                tooltip: "杠牌选择预制体",
                type: d
            }), re = Be(l), se = Be({
                tooltip: "下注选项预制体",
                type: d
            }), le = Be({
                tooltip: "听牌提示",
                type: c
            }), ue = Be({
                tooltip: "定缺高亮",
                type: c
            }), F((he = t((ce = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "opBtns", he, a(t)), i(t, "opCardList", pe, a(t)), i(t, "opWait", fe, a(t)), i(t, "guoLayout", _e, a(t)), i(t, "huLayout", ge, a(t)), i(t, "gangLayout", me, a(t)), i(t, "pengLayout", Ce, a(t)), i(t, "qiangPaiLayout", Ie, a(t)), i(t, "jianPaiLayout", Ae, a(t)), i(t, "chiLayout", Ee, a(t)), i(t, "zimoLayout", ve, a(t)), i(t, "ganghuaLayout", ye, a(t)), i(t, "langqiLayout", Se, a(t)), i(t, "baoTingLayout", Pe, a(t)), i(t, "jiaTingLayout", Te, a(t)), i(t, "cancelLayout", Ge, a(t)), i(t, "okLayout", Oe, a(t)), i(t, "dingqueLayout", Re, a(t)), i(t, "CardItemPrefab", Ne, a(t)), i(t, "CardGangPrefab", be, a(t)), i(t, "opXiaZhu", De, a(t)), i(t, "XiaZhuItemPrefab", Le, a(t)), i(t, "tingTipFrame", Me, a(t)), i(t, "dingqueLight", Ue, a(t)), t.tingKeCardList = [], t.btnCodeMap = new Map, t.btnCodeMapCancel = new Map, t.btnSkelMap = new Map, t.opTypeArr = [], t.opLayouts = {}, t._handlerTimeUpdate = null, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {
                    this.addModelListener(M.CLOSE_OPRATION_INFO, this.closeOpInfo), this.addModelListener(C.VIEW_BROADCAST_GAME_OVER, this.closeOpInfo), this.addModelListener(M.VIEW_BROADCAST_DITING_START, this.startWaiting), this.addModelListener(M.VIEW_BROADCAST_DITING_END, this.endWaiting), this.addModelListener(M.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOption), this.addModelListener(M.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(N.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(M.SEND_PLAYER_OPERATION_PRE, this.closeOpInfo)
                }, r.onLoad = function() {
                    this.updateCodeMap()
                }, r.addGameComp = function() {
                    null == this.node && (this.node = g.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return this.doGameCompFun("xiazhuOperationListen"), "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, r.updateCodeMap = function() {
                    this.opLayouts = {
                        guoLayout: this.guoLayout,
                        chiLayout: this.chiLayout,
                        pengLayout: this.pengLayout,
                        langqiLayout: this.langqiLayout,
                        huLayout: this.huLayout,
                        zimoLayout: this.zimoLayout,
                        gangLayout: this.gangLayout,
                        baoTingLayout: this.baoTingLayout,
                        jiaTingLayout: this.jiaTingLayout,
                        cancelLayout: this.cancelLayout,
                        okLayout: this.okLayout,
                        qiangPaiLayout: this.qiangPaiLayout,
                        jianPaiLayout: this.jianPaiLayout
                    }, this.btnCodeMap.set(T.OPE_QIANG_PAI, this.qiangPaiLayout), this.btnSkelMap.set(T.OPE_QIANG_PAI, "icon_qiang"), this.btnCodeMap.set(T.OPE_JIAN_PAI, this.jianPaiLayout), this.btnSkelMap.set(T.OPE_JIAN_PAI, "icon_shi"), this.btnCodeMap.set(T.OPE_PASS, this.guoLayout), this.btnCodeMap.set(T.OPE_RIGHT_CHI, this.chiLayout), this.btnCodeMap.set(T.OPE_MIDDLE_CHI, this.chiLayout), this.btnCodeMap.set(T.OPE_LEFT_CHI, this.chiLayout), this.btnCodeMap.set(T.OPE_PENG, this.pengLayout), this.btnCodeMap.set(T.OPE_QIANG_PENG, this.pengLayout), this.btnCodeMap.set(T.OPE_LANG_QI, this.langqiLayout), this.btnCodeMap.set(T.OPE_MING_LOU, this.langqiLayout), this.btnCodeMap.set(T.OPE_HU, this.huLayout), this.btnCodeMap.set(T.OPE_ZI_MO, this.zimoLayout), this.btnCodeMap.set(T.OPE_AN_GANG, this.gangLayout), this.btnCodeMap.set(T.OPE_GANG, this.gangLayout), this.btnCodeMap.set(T.OPE_BU_GANG, this.gangLayout), this.btnCodeMap.set(T.OPE_TING, this.baoTingLayout), this.btnCodeMap.set(T.OPE_DI_TING, this.baoTingLayout), this.btnCodeMap.set(T.OPE_BAO_JIAO, this.baoTingLayout), this.btnCodeMap.set(T.OPE_KA_TING, this.jiaTingLayout), this.btnCodeMap.set(T.OPE_KOU_TING, this.baoTingLayout), this.btnCodeMap.set(T.OPE_CANCEL, this.cancelLayout), this.btnCodeMap.set(T.OPE_OK, this.okLayout), this.btnCodeMapCancel.set(T.OPE_MING_LOU, !0), this.btnCodeMapCancel.set(T.OPE_TING, !0), this.btnCodeMapCancel.set(T.OPE_KA_TING, !0), this.btnCodeMapCancel.set(T.OPE_KOU_TING, !0), this.btnSkelMap.set(T.OPE_PASS, "icon_guo"), this.btnSkelMap.set(T.OPE_CANCEL, "icon_cancel"), this.btnSkelMap.set(T.OPE_RIGHT_CHI, "icon_chi"), this.btnSkelMap.set(T.OPE_MIDDLE_CHI, "icon_chi"), this.btnSkelMap.set(T.OPE_LEFT_CHI, "icon_chi"), this.btnSkelMap.set(T.OPE_PENG, "icon_peng"), this.btnSkelMap.set(T.OPE_QIANG_PENG, "icon_peng"), this.btnSkelMap.set(T.OPE_LANG_QI, "icon_langqi"), this.btnSkelMap.set(T.OPE_MING_LOU, "icon_ml"), this.btnSkelMap.set(T.OPE_HU, "icon_hu"), this.btnSkelMap.set(T.OPE_ZI_MO, "icon_zimo"), this.btnSkelMap.set(T.OPE_AN_GANG, "icon_gang"), this.btnSkelMap.set(T.OPE_GANG, "icon_gang"), this.btnSkelMap.set(T.OPE_BU_GANG, "icon_gang"), this.btnSkelMap.set(T.OPE_TING, "icon_baoting"), this.btnSkelMap.set(T.OPE_DI_TING, "icon_baoting"), this.btnSkelMap.set(T.OPE_BAO_JIAO, "icon_baoting"), this.btnSkelMap.set(T.OPE_KA_TING, "icon_jiating"), this.btnSkelMap.set(T.OPE_KOU_TING, "icon_kou"), this.btnSkelMap.set(T.OPE_OK, "icon_ok"), this.doGameCompFun("updateOpInfoCodeMap", this.btnCodeMap, this.btnSkelMap, this.opLayouts, this.btnCodeMapCancel)
                }, r.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null;
                    var e = P.getInstance().getTimeOut(G.OPERATION);
                    m.SelectGame.isInPrivateRoom() ? this._handlerTimeUpdate = this.addSchedulerOnce(e, (function() {
                        console.log("private room operation time out")
                    })) : this._handlerTimeUpdate = this.addSchedulerOnce(e, g.handler(this, this.onTimeout))
                }, r.onTimeout = function() {
                    this.resetView()
                }, r.opClick = function(e) {
                    if (0 != e.length) {
                        var t = e[0].opInfo;
                        if (e.length > 1) this.showViewCardList(e), this.resetViewWithoutGuo();
                        else if (this.btnCodeMapCancel.get(t.opCode)) {
                            this.resetViewWithoutCancel();
                            var n = {
                                    opCard: y.getInstance().getPassNumber(),
                                    opCode: t.opCode,
                                    opCards: y.getInstance().getOprationListNumber(t.opCode, 0),
                                    seatId: y.getInstance().seatId,
                                    userId: y.getInstance().userId
                                },
                                i = this._checkDiTing(t);
                            A.dispatch(M.SEND_PLAYER_OPERATION, n, {
                                showTing: !i
                            })
                        } else {
                            var a;
                            if ((null == (a = t.cardsList) ? void 0 : a.length) > 1) this.showViewCardList(e), this.resetViewWithoutGuo();
                            else {
                                this.resetView();
                                var o = {
                                        opCard: y.getInstance().getPassNumber(),
                                        opCode: t.opCode,
                                        opCards: y.getInstance().getOprationListNumber(t.opCode, 0),
                                        seatId: y.getInstance().seatId,
                                        userId: y.getInstance().userId
                                    },
                                    r = this._checkDiTing(t);
                                A.dispatch(M.SEND_PLAYER_OPERATION, o, {
                                    showTing: !r
                                })
                            }
                        }
                    }
                }, r._checkDiTing = function(e) {
                    if ((e.opCode == T.OPE_BAO_JIAO || e.opCode == T.OPE_TING) && U.isSupportDiTing) {
                        var t = y.getInstance().getExtendInfoCardList(e.opCode);
                        if (y.getInstance().setExtendInfoCardList(""), t.length > 0) return this.resetView(), this.showTingViewCardList(T.OPE_DI_TING, t), !0
                    }
                    return !1
                }, r.resetViewWithCancel = function(e, t) {
                    this.resetView();
                    var n = {
                        userId: t,
                        seatId: e,
                        opGroups: [{
                            opCode: T.OPE_CANCEL,
                            cardsList: []
                        }]
                    };
                    this.updateOpration(n)
                }, r.closeOpInfo = function(e, t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = !1), 0 == n && t && t != P.getInstance().mySeatId || (this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null, this.resetView())
                }, r.getShowBtn = function(e) {
                    for (var t, n = o(this.btnCodeMap); !(t = n()).done;) {
                        var i = t.value,
                            a = i[0],
                            r = i[1];
                        if (e == a) return r
                    }
                    return null
                }, r._getValidOpration = function(e) {
                    var t, n = this,
                        i = [],
                        a = [];
                    return null == e || null == (t = e.opGroups) || t.forEach((function(e) {
                        var t = n.getShowBtn(e.opCode);
                        if (t) {
                            var o = {
                                code: e.opCode,
                                node: t,
                                opInfo: e
                            };
                            O[e.opCode] ? (t.node.active = !0, a.push(o)) : i.push(o)
                        }
                    })), a.length > 0 ? U.isMastHu ? a : a.concat(i) : i
                }, r.updateOpration = function(e) {
                    var t = this;
                    this.resetView();
                    var n = this.doGameCompFun("checkPengGangOpInfo", e);
                    if (n && Array.isArray(n)) {
                        if (0 == n.length) return;
                        e.opGroups = n
                    }
                    console.log("updateOpration______________", e.opGroups);
                    for (var i, a = this._getValidOpration(e), r = new Map, s = o(a); !(i = s()).done;) {
                        var d, c = i.value,
                            h = c.node.name;
                        r.has(h) || r.set(h, []), null == (d = r.get(h)) || d.push(c)
                    }
                    for (var p, f = function() {
                            var e = p.value,
                                n = (e[0], e[1]),
                                i = n[0].node,
                                a = n[0].opInfo;
                            if (i instanceof u) {
                                i.node.active = !0, (g = i.node.getChildByName("Card")) && g.getComponent(w).setCardByte(y.getInstance().getHuNumber());
                                var o = i.node.getChildByName("sk");
                                t.changeSkin(a.opCode, o), o.off(l.EventType.TOUCH_END), o.on(l.EventType.TOUCH_END, (function() {
                                    t.opClick(n), D.getInstance().playEffect(L.GameClick)
                                }), t)
                            }
                        }, _ = o(r); !(p = _()).done;) {
                        var g;
                        f()
                    }
                    this.startOperationTime()
                }, r.changeSkin = function(e, t) {
                    e = this.doGameCompFun("checkOpInfoOpCode", e);
                    var n = this.btnSkelMap.get(e),
                        i = t.getChildByName("opSpine");
                    if (i) i.getComponent(h.Skeleton).setAnimation(0, n, !0);
                    else {
                        var a = b.Spine_op;
                        E.loadSkeleDataInBundle(a.bundle, a.path, this, null, (function(e, i) {
                            if (!e) {
                                var a = t.getChildByName("opSpine");
                                !a && t && t.isValid && (a = E.createSpineNode(t, i, n, 0, !0)), a && (a.name = "opSpine", a.getComponent(h.Skeleton).setAnimation(0, n, !0))
                            }
                        }))
                    }
                }, r.cleanLayout = function() {
                    [this.chiLayout, this.pengLayout, this.gangLayout, this.langqiLayout, this.jianPaiLayout, this.qiangPaiLayout].forEach((function(e) {
                        e.node.children.forEach((function(e) {
                            "sk" !== e.name && (e.removeFromParent(), e.destroy())
                        }))
                    }))
                }, r.resetView = function() {
                    this.guoLayout.node.active = !1, this.huLayout.node.active = !1, this.zimoLayout.node.active = !1, this.ganghuaLayout.node.active = !1, this.gangLayout.node.active = !1, this.pengLayout.node.active = !1, this.chiLayout.node.active = !1, this.langqiLayout.node.active = !1, this.baoTingLayout.node.active = !1, this.jiaTingLayout.node.active = !1, this.okLayout.node.active = !1, this.cancelLayout.node.active = !1, this.dingqueLayout.node.active = !1, this.qiangPaiLayout.node.active = !1, this.jianPaiLayout.node.active = !1, this.opWait.active = !1, this.cleanLayout(), this.resetViewCardList(), this.resetViewXiaZhu()
                }, r.resetViewWithoutGuo = function() {
                    this.huLayout.node.active = !1, this.zimoLayout.node.active = !1, this.ganghuaLayout.node.active = !1, this.gangLayout.node.active = !1, this.pengLayout.node.active = !1, this.chiLayout.node.active = !1, this.langqiLayout.node.active = !1, this.baoTingLayout.node.active = !1, this.jiaTingLayout.node.active = !1, this.qiangPaiLayout.node.active = !1, this.jianPaiLayout.node.active = !1, this.cleanLayout()
                }, r.resetViewWithoutCancel = function(e) {
                    var t = this;
                    void 0 === e && (e = T.OPE_CANCEL), this.resetViewWithoutGuo();
                    var n = {
                            opCode: e || T.OPE_CANCEL,
                            cardsList: []
                        },
                        i = [{
                            code: n.opCode,
                            node: this.guoLayout,
                            opInfo: n
                        }],
                        a = this.guoLayout.node.getChildByName("sk");
                    this.changeSkin(T.OPE_CANCEL, a), a.off(l.EventType.TOUCH_END), a.on(l.EventType.TOUCH_END, (function() {
                        t.opClick(i), D.getInstance().playEffect(L.GameClick)
                    }), this)
                }, r.showViewCardList = function(e, t) {
                    if (void 0 === t && (t = null), console.log("showViewCardList", e), !this.doGameCompFun("showViewCardList", this.opCardList, this.CardGangPrefab, e)) {
                        this.opCardList.active = !0, this.opCardList.destroyAllChildren();
                        var n = I.root.getComponent(p),
                            i = n.convertToNodeSpaceAR(this.opCardList.getWorldPosition()),
                            a = n.height / 2 - i.y,
                            o = f(this.CardItemPrefab);
                        o.getComponent(B).updateCardItemProp(e, a - 20, t), this.opCardList.addChild(o)
                    }
                }, r.showTingViewCardList = function(e, t) {
                    var n = this;
                    if (this.tingKeCardList = [], y.getInstance().isSupportDiTing(e)) {
                        this.resetViewWithoutOkCancel(e), this.opCardList.active = !0, this.opCardList.destroyAllChildren();
                        var i = I.root.getComponent(p),
                            a = i.convertToNodeSpaceAR(this.opCardList.getWorldPosition()),
                            o = i.height / 2 - a.y,
                            r = f(this.CardItemPrefab);
                        return r.getComponent(B).updateSelCardItem(t, o - 20, (function(e) {
                            console.log("showTingViewCardList", e), n.tingKeCardList = [], e.forEach((function(e, i) {
                                1 == e && n.tingKeCardList.push(t[i].cards)
                            }))
                        }), this.tingTipFrame), this.opCardList.addChild(r), !0
                    }
                }, r.resetViewWithoutOkCancel = function(e) {
                    var t = this;
                    this.resetViewWithoutGuo();
                    var n = {
                        opCode: T.OPE_PASS,
                        cardsList: []
                    };
                    this.guoLayout.node.active = !0;
                    var i = [{
                            code: n.opCode,
                            node: this.guoLayout,
                            opInfo: n
                        }],
                        a = this.guoLayout.node.getChildByName("sk");
                    this.changeSkin(T.OPE_CANCEL, a), a.off(l.EventType.TOUCH_END), a.on(l.EventType.TOUCH_END, (function() {
                        t.opClick(i), D.getInstance().playEffect(L.GameClick)
                    }), this), this.okLayout.node.active = !0, a = this.okLayout.node.getChildByName("sk"), this.changeSkin(T.OPE_OK, a), a.off(l.EventType.TOUCH_END), a.on(l.EventType.TOUCH_END, (function() {
                        var e = {
                            chosenGroups: {
                                groupList: []
                            },
                            seatId: y.getInstance().seatId
                        };
                        t.tingKeCardList.forEach((function(t, n, i) {
                            e.chosenGroups.groupList.push({
                                cards: t
                            })
                        })), A.dispatch(M.SEND_CHOSE_GROUPS, e), t.closeOpInfo(), t.tingKeCardList = []
                    }), this)
                }, r.resetViewCardList = function() {
                    this.opCardList.active = !1
                }, r.resetViewXiaZhu = function() {
                    this.opXiaZhu.getComponent(u).unscheduleAllCallbacks(), this.opXiaZhu.destroyAllChildren(), this.opXiaZhu.active = !1
                }, r.updateMaiDuanMenOptions = function(e) {
                    var t = this;
                    this.resetView(), this.opXiaZhu.active = !0;
                    for (var n = 0; n < 2; n++) {
                        var i = f(this.XiaZhuItemPrefab);
                        this.opXiaZhu.addChild(i), i.getComponent(H).setDataExt({
                            name: 0 == n ? "不买" : "买断门",
                            data: n,
                            callback: function(e) {
                                A.dispatch(M.NET_USER_MAIDUANMEN_OPERATION, {
                                    seatId: P.getInstance().mySeatId,
                                    option: e
                                });
                                var n = 2 == m.User.getUserSex(1) ? "xiaoya" : "xiaobo",
                                    i = g.clone(L.MaiDuanMen);
                                0 == e && (i = g.clone(L.BuMaiDuanMen)), i.path = g.string_format(i.path, n), D.getInstance().playEffect(i), t.closeOpInfo(null, null, !0)
                            }
                        })
                    }
                }, r.updateXiaZhuOptions = function(e, t) {
                    var n, i = this;
                    void 0 === t && (t = !1), this.resetView(), (null == (n = e.options) ? void 0 : n.length) > 0 && (this.doGameCompFun("checkXiaZhuActive", this.opXiaZhu, e, t) || (this.opXiaZhu.active = !0), e.options.forEach((function(t, n, a) {
                        var o = f(i.XiaZhuItemPrefab);
                        i.opXiaZhu.addChild(o);
                        var r = {
                            option: t,
                            limit: null != e && e.allLimits ? null == e ? void 0 : e.allLimits[n] : 0,
                            resp: e
                        };
                        o.getComponent(H).setData(r)
                    })))
                }, r.onAllDingQueOptionsResult = function(e, t) {
                    this.dingqueLayout.node.active = !1
                }, r.onDingQueOption = function(e, t) {
                    var n, i = this;
                    this.resetView(), null == t || null == (n = t.suggestion) || n.forEach((function(e, t) {
                        if (t + 1 == P.getInstance().mySeatId) {
                            for (var n = e == R.WAN ? "wan" : e == R.TIAO ? "tiao" : "tong", a = i.dingqueLayout.node.children, o = 0; o < a.length; o++) {
                                var r = a[o].getChildByName("anim"),
                                    s = r.getComponent(h.Skeleton);
                                if (s.paused = !1, s.clearTrack(0), a[o].getChildByName("light") && a[o].removeChild(a[o].getChildByName("light")), a[o].name == n) {
                                    s.loop = !0, r.getComponent(h.Skeleton).setAnimation(0, "dq_" + n, !0);
                                    var l = g.create_2DSprite(i.dingqueLight);
                                    l.name = "light", a[o].insertChild(l, 0)
                                } else s.paused = !0
                            }
                            i.dingqueLayout.node.active = !0
                        }
                    }))
                }, r.onClickDingQue = function(e, t) {
                    var n = S.getInstance().getMyPlayerInfo();
                    if (n) {
                        var i = {
                            seatId: n.seatId,
                            userId: n.userId,
                            option: parseInt(t),
                            selectFeiQue: 0
                        };
                        A.dispatch(M.SEND_DINGQ_OPERATION, i), this.closeOpInfo()
                    }
                }, r.startWaiting = function() {
                    m.Desk.turnMe || (this.opWait.active = !0)
                }, r.endWaiting = function() {
                    this.opWait.active = !1, this.closeOpInfo()
                }, r.onGameRealTimeHuInfo = function() {
                    U.GameType != _.XUEZHAN && U.GameType != _.XUELIU && this.closeOpInfo()
                }, r.onReconnectSuccess = function() {
                    this.doGameCompFun("reconnectOpInfoOption"), this.doGameCompFun("reconnectXiaZhuOption")
                }, t
            }(v)).prototype, "opBtns", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(ce.prototype, "opCardList", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(ce.prototype, "opWait", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(ce.prototype, "guoLayout", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(ce.prototype, "huLayout", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(ce.prototype, "gangLayout", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ce = t(ce.prototype, "pengLayout", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = t(ce.prototype, "qiangPaiLayout", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ae = t(ce.prototype, "jianPaiLayout", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ee = t(ce.prototype, "chiLayout", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(ce.prototype, "zimoLayout", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(ce.prototype, "ganghuaLayout", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(ce.prototype, "langqiLayout", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(ce.prototype, "baoTingLayout", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(ce.prototype, "jiaTingLayout", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(ce.prototype, "cancelLayout", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(ce.prototype, "okLayout", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(ce.prototype, "dingqueLayout", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ne = t(ce.prototype, "CardItemPrefab", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(ce.prototype, "CardGangPrefab", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), De = t(ce.prototype, "opXiaZhu", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Le = t(ce.prototype, "XiaZhuItemPrefab", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(ce.prototype, "tingTipFrame", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ue = t(ce.prototype, "dingqueLight", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = ce)) || de)), r._RF.pop()
        }
    }
}))