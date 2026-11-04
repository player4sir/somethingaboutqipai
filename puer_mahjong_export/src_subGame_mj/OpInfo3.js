System.register("chunks:///_virtual/OpInfo3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConstant.ts", "./Utils.ts", "./GCache.ts", "./LayerManager.ts", "./EventManager.ts", "./SpineAniUtils.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./Card5.ts", "./Carditem3.ts", "./XiaZhuItem3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, u = e.Node, l = e.Layout, d = e.Prefab, c = e.SpriteFrame, h = e.sp, p = e.UITransform, m = e.instantiate
        }, function(e) {
            _ = e.GAMETYPE
        }, function(e) {
            g = e.Utils
        }, function(e) {
            f = e.GCache
        }, function(e) {
            C = e.LayerManager
        }, function(e) {
            E = e.EventManager
        }, function(e) {
            S = e.SpineAniUtils
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            I = e.OperationMgr
        }, function(e) {
            G = e.PlayerMgr
        }, function(e) {
            y = e.RoomMgr
        }, function(e) {
            v = e.OPCode, P = e.GameStatus, T = e.HuMap, b = e.MJTYPE
        }, function(e) {
            O = e.FXJEvent
        }, function(e) {
            R = e.FXJRes
        }, function(e) {
            M = e.GameSound, N = e.FXJSound
        }, function(e) {
            U = e.GameEvent
        }, function(e) {
            D = e.GameRuleConfig
        }, function(e) {
            L = e.Card
        }, function(e) {
            B = e.Carditem
        }, function(e) {
            w = e.XiaZhuItem
        }],
        execute: function() {
            var k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de, ce, he, pe, me, _e, ge, fe, Ce, Ee, Se, Ae, Ie, Ge, ye, ve, Pe, Te, be, Oe, Re, Me;
            r._RF.push({}, "70fa7Z0jvtFFrA9C+okGczU", "OpInfo", void 0);
            var Ne = s.ccclass,
                Ue = s.property,
                De = s.menu;
            e("OpInfo", (k = Ne("OpInfo"), H = De("prefab/subGame/mj/OpInfo"), x = Ue(u), F = Ue(u), V = Ue(u), J = Ue(l), j = Ue(l), W = Ue(l), z = Ue(l), X = Ue(l), Z = Ue(l), Y = Ue(l), Q = Ue(l), q = Ue(l), K = Ue(l), $ = Ue(l), ee = Ue(l), te = Ue({
                tooltip: "定缺layout",
                type: l
            }), ne = Ue({
                tooltip: "手牌预制体",
                type: d
            }), ae = Ue({
                tooltip: "杠牌选择预制体",
                type: d
            }), ie = Ue(u), oe = Ue({
                tooltip: "下注选项预制体",
                type: d
            }), re = Ue({
                tooltip: "听牌提示",
                type: c
            }), se = Ue({
                tooltip: "定缺高亮",
                type: c
            }), k(ue = H((de = t((le = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "opBtns", de, i(t)), a(t, "opCardList", ce, i(t)), a(t, "opWait", he, i(t)), a(t, "guoLayout", pe, i(t)), a(t, "huLayout", me, i(t)), a(t, "gangLayout", _e, i(t)), a(t, "pengLayout", ge, i(t)), a(t, "chiLayout", fe, i(t)), a(t, "zimoLayout", Ce, i(t)), a(t, "ganghuaLayout", Ee, i(t)), a(t, "langqiLayout", Se, i(t)), a(t, "baoTingLayout", Ae, i(t)), a(t, "jiaTingLayout", Ie, i(t)), a(t, "cancelLayout", Ge, i(t)), a(t, "okLayout", ye, i(t)), a(t, "dingqueLayout", ve, i(t)), a(t, "CardItemPrefab", Pe, i(t)), a(t, "CardGangPrefab", Te, i(t)), a(t, "opXiaZhu", be, i(t)), a(t, "XiaZhuItemPrefab", Oe, i(t)), a(t, "tingTipFrame", Re, i(t)), a(t, "dingqueLight", Me, i(t)), t.tingKeCardList = [], t.btnCodeMap = new Map, t.btnCodeMapCancel = new Map, t.btnSkelMap = new Map, t.opTypeArr = [], t.opLayouts = {}, t._handlerTimeUpdate = null, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {
                    this.addModelListener(U.CLOSE_OPRATION_INFO, this.closeOpInfo), this.addModelListener(U.VIEW_BROADCAST_GAME_OVER, this.closeOpInfo), this.addModelListener(U.VIEW_BROADCAST_DITING_START, this.startWaiting), this.addModelListener(U.VIEW_BROADCAST_DITING_END, this.endWaiting), this.addModelListener(U.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOption), this.addModelListener(U.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(O.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(U.SEND_PLAYER_OPERATION_PRE, this.closeOpInfo)
                }, r.onLoad = function() {
                    this.updateCodeMap()
                }, r.addGameComp = function() {
                    null == this.node && (this.node = g.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), this.doGameCompFun("xiazhuOperationListen"), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
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
                        okLayout: this.okLayout
                    }, this.btnCodeMap.set(v.OPE_PASS, this.guoLayout), this.btnCodeMap.set(v.OPE_RIGHT_CHI, this.chiLayout), this.btnCodeMap.set(v.OPE_MIDDLE_CHI, this.chiLayout), this.btnCodeMap.set(v.OPE_LEFT_CHI, this.chiLayout), this.btnCodeMap.set(v.OPE_PENG, this.pengLayout), this.btnCodeMap.set(v.OPE_QIANG_PENG, this.pengLayout), this.btnCodeMap.set(v.OPE_LANG_QI, this.langqiLayout), this.btnCodeMap.set(v.OPE_MING_LOU, this.langqiLayout), this.btnCodeMap.set(v.OPE_HU, this.huLayout), this.btnCodeMap.set(v.OPE_ZI_MO, this.zimoLayout), this.btnCodeMap.set(v.OPE_AN_GANG, this.gangLayout), this.btnCodeMap.set(v.OPE_GANG, this.gangLayout), this.btnCodeMap.set(v.OPE_BU_GANG, this.gangLayout), this.btnCodeMap.set(v.OPE_TING, this.baoTingLayout), this.btnCodeMap.set(v.OPE_DI_TING, this.baoTingLayout), this.btnCodeMap.set(v.OPE_BAO_JIAO, this.baoTingLayout), this.btnCodeMap.set(v.OPE_KA_TING, this.jiaTingLayout), this.btnCodeMap.set(v.OPE_KOU_TING, this.baoTingLayout), this.btnCodeMap.set(v.OPE_CANCEL, this.cancelLayout), this.btnCodeMap.set(v.OPE_OK, this.okLayout), this.btnCodeMapCancel.set(v.OPE_MING_LOU, !0), this.btnCodeMapCancel.set(v.OPE_TING, !0), this.btnCodeMapCancel.set(v.OPE_KA_TING, !0), this.btnCodeMapCancel.set(v.OPE_KOU_TING, !0), this.btnSkelMap.set(v.OPE_PASS, "icon_guo"), this.btnSkelMap.set(v.OPE_CANCEL, "icon_cancel"), this.btnSkelMap.set(v.OPE_RIGHT_CHI, "icon_chi"), this.btnSkelMap.set(v.OPE_MIDDLE_CHI, "icon_chi"), this.btnSkelMap.set(v.OPE_LEFT_CHI, "icon_chi"), this.btnSkelMap.set(v.OPE_PENG, "icon_peng"), this.btnSkelMap.set(v.OPE_QIANG_PENG, "icon_peng"), this.btnSkelMap.set(v.OPE_LANG_QI, "icon_langqi"), this.btnSkelMap.set(v.OPE_MING_LOU, "icon_ml"), this.btnSkelMap.set(v.OPE_HU, "icon_hu"), this.btnSkelMap.set(v.OPE_ZI_MO, "icon_zimo"), this.btnSkelMap.set(v.OPE_AN_GANG, "icon_gang"), this.btnSkelMap.set(v.OPE_GANG, "icon_gang"), this.btnSkelMap.set(v.OPE_BU_GANG, "icon_gang"), this.btnSkelMap.set(v.OPE_TING, "icon_baoting"), this.btnSkelMap.set(v.OPE_DI_TING, "icon_baoting"), this.btnSkelMap.set(v.OPE_BAO_JIAO, "icon_baoting"), this.btnSkelMap.set(v.OPE_KA_TING, "icon_jiating"), this.btnSkelMap.set(v.OPE_KOU_TING, "icon_kou"), this.btnSkelMap.set(v.OPE_OK, "icon_ok"), this.doGameCompFun("updateOpInfoCodeMap", this.btnCodeMap, this.btnSkelMap, this.opLayouts, this.btnCodeMapCancel)
                }, r.startOperationTime = function() {
                    this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null;
                    var e = y.getInstance().getTimeOut(P.OPERATION);
                    f.SelectGame.isInPrivateRoom() ? this._handlerTimeUpdate = this.addSchedulerOnce(e, (function() {
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
                                    opCard: I.getInstance().getPassNumber(),
                                    opCode: t.opCode,
                                    opCards: I.getInstance().getOprationListNumber(t.opCode, 0),
                                    seatId: I.getInstance().seatId,
                                    userId: I.getInstance().userId
                                },
                                a = this._checkDiTing(t);
                            E.dispatch(U.SEND_PLAYER_OPERATION, n, {
                                showTing: !a
                            })
                        } else {
                            var i;
                            if ((null == (i = t.cardsList) ? void 0 : i.length) > 1) this.showViewCardList(e), this.resetViewWithoutGuo();
                            else {
                                this.resetView();
                                var o = {
                                        opCard: I.getInstance().getPassNumber(),
                                        opCode: t.opCode,
                                        opCards: I.getInstance().getOprationListNumber(t.opCode, 0),
                                        seatId: I.getInstance().seatId,
                                        userId: I.getInstance().userId
                                    },
                                    r = this._checkDiTing(t);
                                E.dispatch(U.SEND_PLAYER_OPERATION, o, {
                                    showTing: !r
                                })
                            }
                        }
                    }
                }, r._checkDiTing = function(e) {
                    if ((e.opCode == v.OPE_BAO_JIAO || e.opCode == v.OPE_TING) && D.isSupportDiTing) {
                        var t = I.getInstance().getExtendInfoCardList(e.opCode);
                        if (I.getInstance().setExtendInfoCardList(""), t.length > 0) return this.resetView(), this.showTingViewCardList(v.OPE_DI_TING, t), !0
                    }
                    return !1
                }, r.resetViewWithCancel = function(e, t) {
                    this.resetView();
                    var n = {
                        userId: t,
                        seatId: e,
                        opGroups: [{
                            opCode: v.OPE_CANCEL,
                            cardsList: []
                        }]
                    };
                    this.updateOpration(n)
                }, r.closeOpInfo = function(e, t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = !1), 0 == n && t && t != y.getInstance().mySeatId || (this.stopSchedulerOnce(this._handlerTimeUpdate), this._handlerTimeUpdate = null, this.resetView())
                }, r.getShowBtn = function(e) {
                    for (var t, n = o(this.btnCodeMap); !(t = n()).done;) {
                        var a = t.value,
                            i = a[0],
                            r = a[1];
                        if (e == i) return r
                    }
                    return null
                }, r._getValidOpration = function(e) {
                    var t, n = this,
                        a = [],
                        i = [];
                    return null == e || null == (t = e.opGroups) || t.forEach((function(e) {
                        var t = n.getShowBtn(e.opCode);
                        if (t) {
                            var o = {
                                code: e.opCode,
                                node: t,
                                opInfo: e
                            };
                            T[e.opCode] ? (t.node.active = !0, i.push(o)) : a.push(o)
                        }
                    })), i.length > 0 ? D.isMastHu ? i : i.concat(a) : a
                }, r.updateOpration = function(e) {
                    var t = this;
                    this.resetView();
                    var n = this.doGameCompFun("checkPengGangOpInfo", e);
                    if (n && Array.isArray(n)) {
                        if (0 == n.length) return;
                        e.opGroups = n
                    }
                    console.log("updateOpration______________", e.opGroups);
                    for (var a, i = this._getValidOpration(e), r = new Map, s = o(i); !(a = s()).done;) {
                        var d, c = a.value,
                            h = c.node.name;
                        r.has(h) || r.set(h, []), null == (d = r.get(h)) || d.push(c)
                    }
                    for (var p, m = function() {
                            var e = p.value,
                                n = (e[0], e[1]),
                                a = n[0].node,
                                i = n[0].opInfo;
                            if (a instanceof l) {
                                a.node.active = !0, (g = a.node.getChildByName("Card")) && g.getComponent(L).setCardByte(I.getInstance().getHuNumber());
                                var o = a.node.getChildByName("sk");
                                t.changeSkin(i.opCode, o), o.off(u.EventType.TOUCH_END), o.on(u.EventType.TOUCH_END, (function() {
                                    t.opClick(n), M.getInstance().playEffect(N.GameClick)
                                }), t)
                            }
                        }, _ = o(r); !(p = _()).done;) {
                        var g;
                        m()
                    }
                    this.startOperationTime()
                }, r.changeSkin = function(e, t) {
                    e = this.doGameCompFun("checkOpInfoOpCode", e);
                    var n = this.btnSkelMap.get(e),
                        a = t.getChildByName("opSpine");
                    if (a) a.getComponent(h.Skeleton).setAnimation(0, n, !0);
                    else {
                        var i = R.Spine_op;
                        S.loadSkeleDataInBundle(i.bundle, i.path, this, null, (function(e, a) {
                            if (!e) {
                                var i = t.getChildByName("opSpine");
                                !i && t && t.isValid && (i = S.createSpineNode(t, a, n, 0, !0)), i && (i.name = "opSpine", i.getComponent(h.Skeleton).setAnimation(0, n, !0))
                            }
                        }))
                    }
                }, r.cleanLayout = function() {
                    [this.chiLayout, this.pengLayout, this.gangLayout, this.langqiLayout].forEach((function(e) {
                        e.node.children.forEach((function(e) {
                            "sk" !== e.name && (e.removeFromParent(), e.destroy())
                        }))
                    }))
                }, r.resetView = function() {
                    this.guoLayout.node.active = !1, this.huLayout.node.active = !1, this.zimoLayout.node.active = !1, this.ganghuaLayout.node.active = !1, this.gangLayout.node.active = !1, this.pengLayout.node.active = !1, this.chiLayout.node.active = !1, this.langqiLayout.node.active = !1, this.baoTingLayout.node.active = !1, this.jiaTingLayout.node.active = !1, this.okLayout.node.active = !1, this.cancelLayout.node.active = !1, this.dingqueLayout.node.active = !1, this.opWait.active = !1, this.cleanLayout(), this.resetViewCardList(), this.resetViewXiaZhu()
                }, r.resetViewWithoutGuo = function() {
                    this.huLayout.node.active = !1, this.zimoLayout.node.active = !1, this.ganghuaLayout.node.active = !1, this.gangLayout.node.active = !1, this.pengLayout.node.active = !1, this.chiLayout.node.active = !1, this.langqiLayout.node.active = !1, this.baoTingLayout.node.active = !1, this.jiaTingLayout.node.active = !1, this.cleanLayout()
                }, r.resetViewWithoutCancel = function(e) {
                    var t = this;
                    void 0 === e && (e = v.OPE_CANCEL), this.resetViewWithoutGuo();
                    var n = {
                            opCode: e || v.OPE_CANCEL,
                            cardsList: []
                        },
                        a = [{
                            code: n.opCode,
                            node: this.guoLayout,
                            opInfo: n
                        }],
                        i = this.guoLayout.node.getChildByName("sk");
                    this.changeSkin(v.OPE_CANCEL, i), i.off(u.EventType.TOUCH_END), i.on(u.EventType.TOUCH_END, (function() {
                        t.opClick(a), M.getInstance().playEffect(N.GameClick)
                    }), this)
                }, r.showViewCardList = function(e, t) {
                    if (void 0 === t && (t = null), console.log("showViewCardList", e), !this.doGameCompFun("showViewCardList", this.opCardList, this.CardGangPrefab, e)) {
                        this.opCardList.active = !0, this.opCardList.destroyAllChildren();
                        var n = C.root.getComponent(p),
                            a = n.convertToNodeSpaceAR(this.opCardList.getWorldPosition()),
                            i = n.height / 2 - a.y,
                            o = m(this.CardItemPrefab);
                        o.getComponent(B).updateCardItemProp(e, i - 20, t), this.opCardList.addChild(o)
                    }
                }, r.showTingViewCardList = function(e, t) {
                    var n = this;
                    if (this.tingKeCardList = [], I.getInstance().isSupportDiTing(e)) {
                        this.resetViewWithoutOkCancel(e), this.opCardList.active = !0, this.opCardList.destroyAllChildren();
                        var a = C.root.getComponent(p),
                            i = a.convertToNodeSpaceAR(this.opCardList.getWorldPosition()),
                            o = a.height / 2 - i.y,
                            r = m(this.CardItemPrefab);
                        return r.getComponent(B).updateSelCardItem(t, o - 20, (function(e) {
                            console.log("showTingViewCardList", e), n.tingKeCardList = [], e.forEach((function(e, a) {
                                1 == e && n.tingKeCardList.push(t[a].cards)
                            }))
                        }), this.tingTipFrame), this.opCardList.addChild(r), !0
                    }
                }, r.resetViewWithoutOkCancel = function(e) {
                    var t = this;
                    this.resetViewWithoutGuo();
                    var n = {
                        opCode: v.OPE_PASS,
                        cardsList: []
                    };
                    this.guoLayout.node.active = !0;
                    var a = [{
                            code: n.opCode,
                            node: this.guoLayout,
                            opInfo: n
                        }],
                        i = this.guoLayout.node.getChildByName("sk");
                    this.changeSkin(v.OPE_CANCEL, i), i.off(u.EventType.TOUCH_END), i.on(u.EventType.TOUCH_END, (function() {
                        t.opClick(a), M.getInstance().playEffect(N.GameClick)
                    }), this), this.okLayout.node.active = !0, i = this.okLayout.node.getChildByName("sk"), this.changeSkin(v.OPE_OK, i), i.off(u.EventType.TOUCH_END), i.on(u.EventType.TOUCH_END, (function() {
                        var e = {
                            chosenGroups: {
                                groupList: []
                            },
                            seatId: I.getInstance().seatId
                        };
                        t.tingKeCardList.forEach((function(t, n, a) {
                            e.chosenGroups.groupList.push({
                                cards: t
                            })
                        })), E.dispatch(U.SEND_CHOSE_GROUPS, e), t.closeOpInfo(), t.tingKeCardList = []
                    }), this)
                }, r.resetViewCardList = function() {
                    this.opCardList.active = !1
                }, r.resetViewXiaZhu = function() {
                    this.opXiaZhu.getComponent(l).unscheduleAllCallbacks(), this.opXiaZhu.destroyAllChildren(), this.opXiaZhu.active = !1
                }, r.updateMaiDuanMenOptions = function(e) {
                    var t = this;
                    this.resetView(), this.opXiaZhu.active = !0;
                    for (var n = 0; n < 2; n++) {
                        var a = m(this.XiaZhuItemPrefab);
                        this.opXiaZhu.addChild(a), a.getComponent(w).setDataExt({
                            name: 0 == n ? "不买" : "买断门",
                            data: n,
                            callback: function(e) {
                                E.dispatch(U.NET_USER_MAIDUANMEN_OPERATION, {
                                    seatId: y.getInstance().mySeatId,
                                    option: e
                                });
                                var n = 2 == f.User.getUserSex(1) ? "xiaoya" : "xiaobo",
                                    a = g.clone(N.MaiDuanMen);
                                0 == e && (a = g.clone(N.BuMaiDuanMen)), a.path = g.string_format(a.path, n), M.getInstance().playEffect(a), t.closeOpInfo(null, null, !0)
                            }
                        })
                    }
                }, r.updateXiaZhuOptions = function(e, t) {
                    var n, a = this;
                    void 0 === t && (t = !1), this.resetView(), (null == (n = e.options) ? void 0 : n.length) > 0 && (this.doGameCompFun("checkXiaZhuActive", this.opXiaZhu, e, t) || (this.opXiaZhu.active = !0), e.options.forEach((function(t, n, i) {
                        var o = m(a.XiaZhuItemPrefab);
                        a.opXiaZhu.addChild(o);
                        var r = {
                            option: t,
                            limit: null != e && e.allLimits ? null == e ? void 0 : e.allLimits[n] : 0,
                            resp: e
                        };
                        o.getComponent(w).setData(r)
                    })))
                }, r.onAllDingQueOptionsResult = function(e, t) {
                    this.dingqueLayout.node.active = !1
                }, r.onDingQueOption = function(e, t) {
                    var n, a = this;
                    this.resetView(), null == t || null == (n = t.suggestion) || n.forEach((function(e, t) {
                        if (t + 1 == y.getInstance().mySeatId) {
                            for (var n = e == b.WAN ? "wan" : e == b.TIAO ? "tiao" : "tong", i = a.dingqueLayout.node.children, o = 0; o < i.length; o++) {
                                var r = i[o].getChildByName("anim"),
                                    s = r.getComponent(h.Skeleton);
                                if (s.paused = !1, s.clearTrack(0), i[o].getChildByName("light") && i[o].removeChild(i[o].getChildByName("light")), i[o].name == n) {
                                    s.loop = !0, r.getComponent(h.Skeleton).setAnimation(0, "dq_" + n, !0);
                                    var u = g.create_2DSprite(a.dingqueLight);
                                    u.name = "light", i[o].insertChild(u, 0)
                                } else s.paused = !0
                            }
                            a.dingqueLayout.node.active = !0
                        }
                    }))
                }, r.onClickDingQue = function(e, t) {
                    var n = G.getInstance().getMyPlayerInfo(),
                        a = {
                            seatId: n.seatId,
                            userId: n.userId,
                            option: parseInt(t),
                            selectFeiQue: 0
                        };
                    E.dispatch(U.SEND_DINGQ_OPERATION, a), this.closeOpInfo()
                }, r.startWaiting = function() {
                    f.Desk.turnMe || (this.opWait.active = !0)
                }, r.endWaiting = function() {
                    this.opWait.active = !1, this.closeOpInfo()
                }, r.onGameRealTimeHuInfo = function() {
                    D.GameType != _.XUEZHAN && D.GameType != _.XUELIU && this.closeOpInfo()
                }, r.onReconnectSuccess = function() {
                    this.doGameCompFun("reconnectOpInfoOption"), this.doGameCompFun("reconnectXiaZhuOption")
                }, t
            }(A)).prototype, "opBtns", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(le.prototype, "opCardList", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(le.prototype, "opWait", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(le.prototype, "guoLayout", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(le.prototype, "huLayout", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(le.prototype, "gangLayout", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(le.prototype, "pengLayout", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(le.prototype, "chiLayout", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ce = t(le.prototype, "zimoLayout", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ee = t(le.prototype, "ganghuaLayout", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = t(le.prototype, "langqiLayout", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ae = t(le.prototype, "baoTingLayout", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ie = t(le.prototype, "jiaTingLayout", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Ge = t(le.prototype, "cancelLayout", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ye = t(le.prototype, "okLayout", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ve = t(le.prototype, "dingqueLayout", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Pe = t(le.prototype, "CardItemPrefab", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Te = t(le.prototype, "CardGangPrefab", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(le.prototype, "opXiaZhu", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Oe = t(le.prototype, "XiaZhuItemPrefab", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Re = t(le.prototype, "tingTipFrame", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Me = t(le.prototype, "dingqueLight", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = le)) || ue) || ue)), r._RF.pop()
        }
    }
}))