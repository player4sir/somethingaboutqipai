System.register("chunks:///_virtual/MyPlayerCard3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./OperationResultMgr3.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts", "./CardConfigs3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose, r = e.createClass
        }, function(e) {
            s = e.cclegacy, u = e._decorator, l = e.Node, d = e.Vec3, c = e.Tween, h = e.tween, p = e.instantiate
        }, function(e) {
            m = e.Utils
        }, function(e) {
            _ = e.GCache
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            C = e.OperationMgr
        }, function(e) {
            E = e.OperationResultMgr
        }, function(e) {
            S = e.PlayerMgr
        }, function(e) {
            A = e.RoomMgr, I = e.ROOM_DATA_TYPE
        }, function(e) {
            G = e.OPCode, y = e.MahjongMap
        }, function(e) {
            v = e.FXJEvent
        }, function(e) {
            P = e.GameSound, T = e.FXJSound
        }, function(e) {
            b = e.GameEvent
        }, function(e) {
            O = e.CardUtil
        }, function(e) {
            R = e.NodeCardCtr, M = e.CardTag
        }, function(e) {
            N = e.MjSize
        }],
        execute: function() {
            var U, D, L, B, w, k;
            s._RF.push({}, "5549fJ8Iz1Nq720LVP/R7Jh", "MyPlayerCard", void 0);
            var H = u.ccclass,
                x = u.property,
                F = u.menu;
            e("MyPlayerCard", (U = H("MyPlayerCard"), D = F("prefab/subGame/mj/MyPlayerCard"), L = x({
                tooltip: "手牌模板",
                type: l
            }), U(B = D((k = t((w = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).selectedNode = [], t._drawCardNode = null, t._mjList = [], t._mjListTarget = [], t.myHandCardY = 0, a(t, "nodeCardTemplate", k, i(t)), t._drawByte = void 0, t._isTouched = void 0, t._touchNode = null, t.moveYDistance = 0, t.thresholdDistance = 100, t.startPosition = new d, t.touchNodePos = new d, t._isPlayAnim = !1, t._isPlayAnimShow = !1, t._needResortCards = !1, t._is_huan_san_zhang = !1, t
                }
                n(t, e);
                var s = t.prototype;
                return s.isHuanSanZhang = function(e) {
                    this._is_huan_san_zhang = e
                }, s.onInitModuleEvent = function() {}, s.onLoad = function() {
                    this.node.on(l.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(l.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(l.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.addModelListener(b.VIEW_GAME_SCENE_BG_TOUCH, this.onBgTouchStart), this.nodeCardTemplate.active = !1, this.addGameComp()
                }, s.addGameComp = function() {
                    null == this.node && (this.node = m.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, s.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, s.stackAnim = function(e, t, n, a) {
                    var i = this.getOpIndexs(t);
                    if (i.length > 0) {
                        this.removeHandCard(i, !0), this.removeDrawCard(), null != a && n && this.addHandCard(n, a - i.length);
                        var o = S.getInstance().getMyhands();
                        this._mjList.length < o.length && (e = !0, this.addHandCard(o[o.length - 1], this._mjList.length))
                    }
                    if (e && this._mjList.length > 0) {
                        this._drawCardNode = this._mjList.pop(), this._drawCardNode.name = "drawCardNode", this.drawByte = S.getInstance().getLastMyhands();
                        var r = this._drawCardNode.getPosition(),
                            s = new d(r.x + .2 * N.width, r.y, r.z);
                        this._drawCardNode.setPosition(s), c.stopAllByTarget(this._drawCardNode), h(this._drawCardNode).to(0, {
                            position: new d(r.x, r.y, r.z)
                        }).to(.1, {
                            position: new d(s.x, s.y, s.z)
                        }).start()
                    }
                }, s.onRemoveCards = function(e) {
                    var t = this,
                        n = this.getOpIndexs(e);
                    if (this.removeDrawCard(), n.length > 0) {
                        this.removeHandCard(n, !0);
                        var a = S.getInstance().getMyhands();
                        this._mjList.length < (null == a ? void 0 : a.length) && a.slice(this._mjList.length, null == a ? void 0 : a.length).forEach((function(e) {
                            t.addHandCard(e, t._mjList.length)
                        })), this.updateHandPositionAndName()
                    }
                }, s.removeDrawCard = function() {
                    var e = null;
                    return null != this._drawCardNode && this._drawCardNode.isValid ? (e = this._drawCardNode.getComponent(R).byte, this.node.removeChild(this._drawCardNode), this._drawCardNode.destroy()) : console.log("当前没有渲染牌,无法移除"), this._drawCardNode = null, e
                }, s.getDrawCard = function() {
                    var e = null;
                    return null != this._drawCardNode && this._drawCardNode.isValid && (e = this._drawCardNode.getComponent(R).byte), e
                }, s.addHandCard = function(e, t) {
                    if (t > this._mjList.length) console.log("索引大于当前渲染手牌的数量请检查逻辑", t);
                    else {
                        if (this._mjList.length >= 13) return this.updateHandPositionAndName(), void console.log("当前渲染手牌数量已满--\x3e 13", t);
                        var n = p(this.nodeCardTemplate),
                            a = e,
                            i = n.getComponent(R);
                        i.setCardTag(M.HandCard), i.setCardByte(a), n.active = !0, n.name = "MJBlock" + t, this.node.addChild(n), this._mjList.splice(t, 0, n), this.updateHandPositionAndName()
                    }
                }, s.drawCard = function(e, t) {
                    var n = S.getInstance().getMyhands();
                    0 == this._mjList.length && n.length > 0 && (n = n.filter((function(t) {
                        return t != e
                    })), this.addHandCards(n, !0, !1, !0)), this.drawByte = e, this.removeDrawCard(), this._drawCardNode = p(this.nodeCardTemplate), this.changeDrawCard(e), this._drawCardNode.active = !0, this.node.addChild(this._drawCardNode), this.cardAddTouchEvent(this._drawCardNode), this.onUpdateDrawCardPos(), t && this._drawCardNode.setRotationFromEuler(90, 0, 0)
                }, s.changeDrawCard = function(e) {
                    if (this._drawCardNode && this._drawCardNode.isValid) {
                        var t = this._drawCardNode.getComponent(R);
                        t.setCardTag(M.HandCard), t.setCardByte(e), this._drawByte = e
                    }
                }, s.showOutCardList = function(e) {
                    var t = C.getInstance().getOprationCardList(e);
                    if (0 != (null == t ? void 0 : t.length)) {
                        var n = {};
                        m.table_isEmpty(t) || t.forEach((function(e, t, a) {
                            m.table_isEmpty(e.cards) || e.cards.forEach((function(e, t, a) {
                                n[e] = !0
                            }))
                        }));
                        for (var a = 0; a < this._mjList.length; a++) {
                            var i = this._mjList[a];
                            if (null != i && i.isValid) {
                                var o = i.getComponent(R);
                                o.setBlack(!n[o.byte]), o.setTouchEnable(n[o.byte])
                            }
                        }
                        if (null != this._drawCardNode && this._drawCardNode.isValid) {
                            var r = this._drawCardNode.getComponent(R);
                            r.setBlack(!n[r.byte]), r.setTouchEnable(n[r.byte])
                        }
                    }
                }, s.hideOutCardList = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        if (null != t && t.isValid) {
                            var n = t.getComponent(R);
                            n.setBlack(!1), n.setTouchEnable(!0)
                        }
                    }
                    if (null != this._drawCardNode && this._drawCardNode.isValid) {
                        var a = this._drawCardNode.getComponent(R);
                        a.setBlack(!1), a.setTouchEnable(!0)
                    }
                }, s.showTing = function() {
                    var e = C.getInstance().tingInfosMap;
                    if (!m.table_isEmpty(e) && !this.doGameCompFun("hidTinTip")) {
                        for (var t = C.getInstance().tingInfosRangeRemain || [-1, -1], n = C.getInstance().tingInfosRangeBei || [-1, -1], a = 0; a < this._mjList.length; a++) {
                            var i = this._mjList[a].getComponent(R),
                                o = e[i.byte];
                            if (m.isNotNull(o)) {
                                var r = !1,
                                    s = !1;
                                o.totalRemain == t[1] && o.totalRemain != t[0] && (r = !0), o.totalBei == n[1] && o.totalBei != n[0] && (s = !0), i.setArrow(!0, r, s)
                            } else i.setArrow(!1)
                        }
                        if (null != this._drawCardNode && this._drawCardNode.isValid) {
                            var u = this._drawCardNode.getComponent(R),
                                l = e[u.byte];
                            if (m.isNotNull(l)) {
                                var d = !1,
                                    c = !1;
                                l.totalRemain == t[1] && l.totalRemain != t[0] && (d = !0), l.totalBei == n[1] && l.totalBei != n[0] && (c = !0), u.setArrow(!0, d, c)
                            } else u.setArrow(!1)
                        }
                    }
                }, s.hideTing = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && t.getComponent(R).setArrow(!1)
                    }
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.getComponent(R).setArrow(!1)
                }, s.udpatePaoCard = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && t.getComponent(R).checkHandCard()
                    }
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.getComponent(R).checkHandCard()
                }, s.onMingPaiCard = function() {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && t.setRotationFromEuler(-90, 0, 0)
                    }
                    this.updateHandPositionAndName(), null != this._drawCardNode && this._drawCardNode.isValid && (this._drawCardNode.setRotationFromEuler(-90, 0, 0), this.onUpdateDrawCardPos())
                }, s.resetCardStatus = function() {
                    this.hideOutCardList()
                }, s.onUpdateDrawCardPos = function() {
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.setPosition(this.getLastPosition() + 1.2 * N.width, 0, 0)
                }, s.getLastCardPos = function(e) {
                    return this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    })), this._mjList.length > 0 ? {
                        x: this.getLastPosition() + 2.2 * N.width,
                        y: 0,
                        z: 0
                    } : this.doGameCompFun("getMingpaiPos", {
                        seatId: A.getInstance().getMySeatId()
                    })
                }, s.refreshHandCardPre = function() {
                    this.print("refreshHandCardPre"), this.stopShowCardAnim(), this.updateHandPositionAndName(!1, !0), g.dispatch(b.HIDE_TING_VIEW), this._isPlayAnim = !1, this._isPlayAnimShow = !1
                }, s.refreshHandCard = function() {
                    this.print("refreshHandCard"), this.stopShowCardAnim(), S.getInstance().orderMyhands(), this.checkHandCardList(), this.updateHandPositionAndName(!1), g.dispatch(b.HIDE_TING_VIEW), this._isPlayAnim = !1, this._isPlayAnimShow = !1
                }, s.checkHandCardList = function() {
                    var e = S.getInstance().getMyhands();
                    console.log("checkHandCardList", e.length, this._mjList.length)
                }, s.updateHandPositionAndName = function(e, t) {
                    void 0 === e && (e = !1), void 0 === t && (t = !1), this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    })), this.print("updateHandPositionAndName", e, t, this._mjList.length);
                    for (var n = new Array(this._mjList.length), a = 0; a < this._mjList.length; a++) n[a] = a;
                    e && n.sort((function() {
                        return Math.random() > .5 ? 1 : -1
                    }));
                    for (var i = this._mjList.length, o = 0; o < i; o++) {
                        var r = this._mjList[o];
                        if (c.stopAllByTarget(r), r.name = "MJBlock" + o, !t) {
                            var s = S.getInstance().getHandCardByIndex(n[o]);
                            s ? r.getComponent(R).setCardByte(s) : (r.destroy(), this._mjList[o] = null)
                        }
                        this.cardAddTouchEvent(r), r.setPosition(N.width / 2 + N.width * o, 0, 0), e && r.setRotationFromEuler(90, 0, 0)
                    }
                    this.selectedNode = [], this.updateHuanSanZhangCards([], !0)
                }, s.stopShowCardAnim = function() {
                    this._mjListTarget.forEach((function(e, t, n) {
                        c.stopAllByTarget(e)
                    })), this._mjListTarget = [];
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && (c.stopAllByTarget(t), t.setRotationFromEuler(0, 0, 0))
                    }
                }, s.playShowCardAnim = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !1), !e) {
                        this._isPlayAnim = !0, this._isPlayAnimShow = !0;
                        var n = .3,
                            a = .3,
                            i = .2,
                            o = this._mjList.length,
                            r = Math.floor((o - 1) / 4);
                        o = this._checkShowCards(o);
                        for (var s = function(e) {
                                var s = new d(t._mjList[e].eulerAngles),
                                    u = new d(t._mjList[e].getPosition()),
                                    l = new d(u.x, 0, 0),
                                    h = Math.floor(e / 4),
                                    p = new d(0, 0, 0);
                                e == o - 1 ? new c(p).delay(n * h).by(a, new d(0, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).by(a, new d(-90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).by(i, new d(90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).call((function() {
                                    var e = S.getInstance().getMyhands();
                                    if (e.length >= 14) {
                                        var n, a = e.pop(),
                                            i = A.getInstance().orderCards(e);
                                        i.push(a), S.getInstance().updateMyhands(i), null != (n = t._drawCardNode) && n.isValid && t._drawCardNode.getComponent(R).setCardByte(a)
                                    } else {
                                        var o = A.getInstance().orderCards(e);
                                        S.getInstance().updateMyhands(o)
                                    }
                                    t._isPlayAnimShow = !1, t._needResortCards && t.sortHandCards(), t.updateHandPositionAndName(), t._checkReconnectHuanSanZhang()
                                })).by(i, new d(-90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).call((function() {
                                    t._isPlayAnim = !1
                                })).start() : new c(p).delay(n * h).by(a, new d(0, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).by(a, new d(-90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).delay(n * (r - h)).by(i, new d(90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).by(i, new d(-90, 0, 0), {
                                    onUpdate: function(n, a) {
                                        m.rotate3DAroundByPositionRotaion(t._mjList[e], u, s, l, n, !0)
                                    }
                                }).start(), t._mjListTarget.push(p)
                            }, u = 0; u < o; u++) s(u);
                        if (this._drawCardNode) {
                            var l = new d(this._drawCardNode.eulerAngles),
                                h = new d(this._drawCardNode.getPosition()),
                                p = new d(h.x, 0, 0),
                                _ = new d(0, 0, 0);
                            new c(_).delay(n * r + .6 + .4).by(n, new d(0, 0, 0), {
                                onUpdate: function(e, n) {
                                    m.rotate3DAroundByPositionRotaion(t._drawCardNode, h, l, p, e, !0)
                                }
                            }).by(.3, new d(-90, 0, 0), {
                                onUpdate: function(e, n) {
                                    m.rotate3DAroundByPositionRotaion(t._drawCardNode, h, l, p, e, !0)
                                }
                            }).start(), this._mjListTarget.push(_)
                        }
                    }
                }, s._checkShowCards = function(e) {
                    var t = this.doGameCompFun("checkShowCards", e);
                    return null != t ? t : e
                }, s._checkReconnectHuanSanZhang = function() {
                    var e, t = this,
                        n = A.getInstance().getGameInfoByTag(I.HUAN_SAN_ZHANG_CARD);
                    (null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && this.scheduleOnce((function() {
                        t.onHuanSanZhangStart(null == n ? void 0 : n.cards)
                    }), 0)
                }, s.cardAddTouchEvent = function(e) {
                    var t = this;
                    e.off(l.EventType.TOUCH_START), e.on(l.EventType.TOUCH_START, (function(e) {
                        t._touchNode = e.target, t.touchNodePos = t._touchNode.getPosition()
                    }), this), e.on(l.EventType.TOUCH_CANCEL, (function(e) {
                        return !1
                    }), this)
                }, s.cancelOpcardTouch = function(e) {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var t = !1, n = 0; n < this._mjList.length; n++) {
                        var a = this._mjList[n],
                            i = a.getComponent(R).byte;
                        if (O.getMajiangValue(i) === O.getMajiangValue(e)) {
                            a.off(l.EventType.TOUCH_START), a.getComponent(R).setBlack(!0), t = !0;
                            break
                        }
                    }!t && S.getInstance().includesMyhands(E.getInstance().opCard) && (this._drawCardNode.off(l.EventType.TOUCH_START), this._drawCardNode.getComponent(R).setBlack(!0))
                }, s.updateOpcardTouch = function() {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        this.cardAddTouchEvent(t), t.getComponent(R).setBlack(!1)
                    }
                }, s.onBgTouchStart = function(e) {
                    this._is_huan_san_zhang || (this.resetSelectedNode(!1), g.dispatch(b.HIDE_TING_VIEW))
                }, s.onTouchStart = function(e) {
                    var t;
                    if (!this._isPlayAnim && (this._isTouched = !0, null !== this._touchNode && null != (t = this._touchNode) && t.isValid)) {
                        var n = e.getLocation();
                        this.startPosition = new d(n.x, n.y, 0)
                    }
                }, s.onTouchMove = function(e) {
                    var t;
                    if (_.Desk.turnMe && !this._isPlayAnim && (this._isTouched = !0, null !== this._touchNode && null != (t = this._touchNode) && t.isValid && this._touchNode.getComponent(R).getTouchEnable())) {
                        var n = this._touchNode.getPosition(),
                            a = e.getDelta();
                        n.y < 90 ? n.y + a.y >= 0 && d.add(n, n, new d(0, a.y, 0)) : d.add(n, n, new d(a.x, a.y, 0)), this._touchNode.setPosition(n);
                        var i = this._touchNode.getPosition();
                        this.moveYDistance = i.y
                    }
                }, s.onTouchEnd = function(e) {
                    var t;
                    if (!this._isPlayAnim && null !== this._touchNode && null != (t = this._touchNode) && t.isValid && this._touchNode.getComponent(R).getTouchEnable()) {
                        if (g.dispatch(b.HIDE_TING_VIEW), _.Desk.turnMe && this.moveYDistance > this.thresholdDistance)
                            if (_.Desk.turnMe)
                                if (C.getInstance().getOprationCardList(G.OPE_OUT_CARD).length > 0) {
                                    var n = this._touchNode.getComponent(R).byte;
                                    this.onSendCard(n), this.resetSelectedNode(!0)
                                } else this.resetSelectedNode(!1), this.playUnselectAnim(this._touchNode);
                        else this.resetSelectedNode(!1), this.playUnselectAnim(this._touchNode);
                        else if (this._is_huan_san_zhang) {
                            if (this.selectedNode.length <= 3) {
                                var a = this._touchNode.getComponent(R);
                                if (!this.resetCurSelectedNode(a.byte) && this.selectedNode.length < 3) {
                                    var i = this._touchNode.getComponent(R);
                                    this.playSelectAnim(this._touchNode, i.byte)
                                }
                                var o = [];
                                this.selectedNode.forEach((function(e) {
                                    var t = e.getComponent(R).byte;
                                    o.push(t)
                                })), this.updateHuanSanZhangCards(o)
                            }
                        } else if (this.selectedNode.length > 0) {
                            var r = this.selectedNode[this.selectedNode.length - 1];
                            if (r && r.isValid && r == this._touchNode)
                                if (_.Desk.turnMe)
                                    if (C.getInstance().getOprationCardList(G.OPE_OUT_CARD).length > 0) {
                                        var s = this._touchNode.getComponent(R).byte;
                                        this.onSendCard(s), this.resetSelectedNode(!0)
                                    } else this.resetSelectedNode(!1);
                            else this.resetSelectedNode(!1);
                            else {
                                this.resetSelectedNode(!0);
                                var u = this._touchNode.getComponent(R);
                                this.playSelectAnim(this._touchNode, u.byte), u.getArrow() && g.dispatch(b.SHOW_TING_VIEW, u.byte)
                            }
                        } else {
                            var l = this._touchNode.getComponent(R);
                            this.playSelectAnim(this._touchNode, l.byte), l.getArrow() && g.dispatch(b.SHOW_TING_VIEW, l.byte)
                        }
                        this._touchNode = null, this._isTouched = !1, this.moveYDistance = 0
                    }
                }, s.onTouchCancel = function(e) {
                    var t;
                    if (!this._isPlayAnim && null !== this._touchNode && null != (t = this._touchNode) && t.isValid)
                        if (e.getUILocation().y > this.thresholdDistance) this.onTouchEnd(e);
                        else {
                            var n = this.getSelectNodePosx(this._touchNode);
                            this._touchNode.setPosition(n, 0, 0), this._touchNode = null, this._isTouched = !1, this.moveYDistance = 0
                        }
                }, s.resetSelectedNode = function(e) {
                    this.resetSelectCard(e), this.updateHuanSanZhangCards([])
                }, s.resetSelectCard = function(e, t) {
                    var n = this;
                    void 0 === t && (t = !0), this.selectedNode.forEach((function(a, i, o) {
                        null != a && a.isValid && (e && a === n._touchNode || (t ? n.playUnselectAnim(a) : a.setPosition(new d(n.getSelectNodePosx(a), 0, 0))))
                    })), this.selectedNode = []
                }, s.resetCurSelectedNode = function(e) {
                    for (var t = !1, n = this.selectedNode.length, a = 0; a < n; a++)
                        if (this.selectedNode[a] && this.selectedNode[a].isValid && this.selectedNode[a].getComponent(R).byte == e) {
                            this.playUnselectAnim(this.selectedNode[a]), this.selectedNode.splice(a, 1), t = !0;
                            break
                        } return t
                }, s.playSelectAnim = function(e, t) {
                    console.log("===================================playSelectAnim--------------------------------------"), this.selectedNode.push(e), c.stopAllByTarget(e);
                    var n = this.getSelectNodePosx(e);
                    h(e).to(.1, {
                        position: new d(n, 20, 0)
                    }).start(), P.getInstance().playEffect(T.GameTiPai), g.dispatch(b.SHOW_PICK_CARD, t)
                }, s.getOpIndexs = function(e) {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var t = [], n = 0; n < this._mjList.length; n++) {
                        var a = this._mjList[n].getComponent(R).byte; - 1 !== e.indexOf(a) && t.push(n)
                    }
                    return t
                }, s.playCardFromHandAnim = function(e, t) {
                    this._isPlayAnim = !0;
                    for (var n = -1, a = -1, i = [], o = 0; o < this._mjList.length; o++) {
                        var r = this._mjList[o].getComponent(R).byte;
                        r == e ? n = o : i.push(r)
                    }
                    if (this.print("playCardFromHandAnim", e, t, n), -1 !== n) {
                        i.push(t), i = A.getInstance().orderCards(i);
                        for (var s = 0; s < i.length; s++) t == i[s] && (a = s);
                        return this.print("playCardFromHandAnim indexInsert", a), null != this._mjList[n] && this._mjList[n].isValid && (this.node.removeChild(this._mjList[n]), this._mjList[n].destroy()), this._mjList[n] = null, this.makeSlotAnim(a, n)
                    }
                    return e == this.getDrawCard() && this.removeDrawCard(), 0
                }, s.removeHandCard = function(e, t) {
                    void 0 === t && (t = !1), console.log("removeHandCard", e), e.sort((function(e, t) {
                        return t - e
                    }));
                    for (var n, a = o(e); !(n = a()).done;) {
                        var i = n.value;
                        if (!(i < this._mjList.length)) return void console.log("索引大于等于当前渲染手牌的数量请检查逻辑", i);
                        var r = this._mjList.splice(i, 1);
                        this.node.removeChild(r[0]), r[0].destroy()
                    }
                    t && this.updateHandPositionAndName()
                }, s.makeSlotAnim = function(e, t) {
                    console.log("makeSlotAnim", this._mjList.length, e, t);
                    var n = 0;
                    if (-1 == t || null != this._mjList[t]) return console.log("当前没有空的手牌位置,无法空出对应的索引位置", t, e), n;
                    if (n = .2 * (Math.abs(e - t) + 1), t < e) {
                        for (var a = t + 1; a <= e; a++)
                            if (this._mjList[a]) {
                                var i = this._mjList[a],
                                    o = i.getPosition(),
                                    r = this.getHandPosition(a - 1);
                                c.stopAllByTarget(i), h(i).to(0, {
                                    position: new d(o.x, o.y, o.z)
                                }).to(.2, {
                                    position: new d(r.x, o.y, r.z)
                                }).start()
                            } else console.log("card is nill");
                        for (var s = t; s < e; s++) this._mjList[s] = this._mjList[s + 1]
                    } else if (e < t) {
                        for (var u = e; u < t; u++)
                            if (this._mjList[u]) {
                                var l = this._mjList[u];
                                null != l && l.isValid || console.log("-----------------");
                                var p = l.getPosition(),
                                    m = this.getHandPosition(u + 1);
                                c.stopAllByTarget(l), h(l).to(0, {
                                    position: new d(p.x, p.y, p.z)
                                }).to(.2, {
                                    position: new d(m.x, p.y, m.z)
                                }).start()
                            } else console.log("card is nill");
                        for (var _ = t; _ > e; _--) this._mjList[_] = this._mjList[_ - 1]
                    }
                    this._mjList[e] = null;
                    var g = this.drawCardToSlot(e);
                    return n > g ? n : g
                }, s.drawCardToSlot = function(e) {
                    if (null == this._drawCardNode) return console.log("没有渲染抽牌节点, 抽牌到手牌动画失败"), 0;
                    this._mjList[e] = this._drawCardNode, this._drawCardNode = null;
                    var t = this._mjList[e].getPosition(),
                        n = this.getHandPosition(e);
                    return c.stopAllByTarget(this._mjList[e]), h(this._mjList[e]).to(0, {
                        position: new d(t.x, t.y, t.z)
                    }, {
                        easing: "sineOut"
                    }).to(.1, {
                        position: new d(t.x, t.y + 20, t.z - 5)
                    }, {
                        easing: "sineOut"
                    }).to(.4, {
                        position: new d(n.x, t.y + 20, t.z - 5)
                    }, {
                        easing: "sineOut"
                    }).to(.5, {
                        position: new d(n.x, n.y, n.z)
                    }, {
                        easing: "sineOut"
                    }).start(), .5
                }, s.getListBytes = function() {
                    for (var e = [], t = 0; t < this._mjList.length; t++) {
                        var n = this._mjList[t].getComponent(R).byte;
                        e.push(n)
                    }
                    return e
                }, s.useByteFindIndexs = function(e) {
                    var t = this;
                    console.log("card-----------------useByteFindIndexs---1");
                    var n = [];
                    return e.forEach((function(e) {
                        for (var a = 0; a < t._mjList.length; a++)
                            if (e === t._mjList[a].getComponent(R).byte) {
                                n.push(a);
                                break
                            }
                    })), n
                }, s.getNodeIndex = function(e) {
                    return this._mjList.findIndex((function(t) {
                        return t == e
                    }), this)
                }, s.addHandCards = function(e, t, n, a) {
                    if (void 0 === n && (n = !1), void 0 === a && (a = !1), (null == e ? void 0 : e.length) > 0) {
                        this.resetView();
                        var i = e.length;
                        n && (i = e.length - 1);
                        for (var o = this._checkShowCards(i), r = 0; r < i; r++) {
                            var s = p(this.nodeCardTemplate),
                                u = e[r],
                                l = s.getComponent(R);
                            l.setCardTag(M.HandCard), l.setCardByte(u), s.active = !0, this._mjList.push(s), this.node.addChild(s), r >= o && s.setRotationFromEuler(90, 0, 0)
                        }
                        a ? this.updateHandPositionAndName() : this.updateHandPositionAndName(!0, i != o), n && (this.drawCard(e[i], !0), this._drawCardNode.active = t), _.Desk.turnMe && (this.showOutCardList(G.OPE_OUT_CARD), this.showTing())
                    }
                }, s.getHandPosition = function(e) {
                    return new d(N.width / 2 + N.width * e, 0, 0)
                }, s.getHandPositionX = function(e) {
                    return N.width / 2 + N.width * e
                }, s.getLastPosition = function() {
                    return N.width / 2 + N.width * (this._mjList.length - 1)
                }, s.getSelectNodePosx = function(e) {
                    return e.name && e.name.includes("MJBlock") ? this.getHandPositionX(parseInt(e.name.replace("MJBlock", ""))) : this.getLastPosition() + 1.2 * N.width
                }, s.playUnselectAnim = function(e) {
                    console.log("playUnselectAnim-----------"), c.stopAllByTarget(e);
                    var t = this.getSelectNodePosx(e);
                    h(e).to(.1, {
                        position: new d(t, 0, 0)
                    }).start(), g.dispatch(b.HIDE_PICK_CARD)
                }, s.onSendCard = function(e) {
                    var t = O.getCardValue(e);
                    if (this.doGameCompFun("checkCardCanOut", e)) {
                        console.log("出牌", y.get(t), e);
                        var n = {
                            opCard: e,
                            opCode: G.OPE_OUT_CARD,
                            opCards: [e],
                            seatId: C.getInstance().seatId,
                            userId: C.getInstance().userId
                        };
                        g.dispatch(b.SEND_PLAYER_OPERATION_PRE, n), g.dispatch(b.SEND_PLAYER_OPERATION, n)
                    }
                }, s.onHuanSanZhangStart = function(e) {
                    if (this._isPlayAnimShow) console.log("正在发牌，不显示选中的换三张手牌");
                    else {
                        this.resetSelectCard(!1, !1);
                        for (var t, n = 0, a = 0; a < this._mjList.length; a++) {
                            var i = this._mjList[a];
                            if (null != i && i.isValid)
                                for (var o = i.getComponent(R), r = 0; r < e.length; r++)
                                    if (o.byte == e[r]) {
                                        this.playSelectAnim(i, o.byte), ++n;
                                        break
                                    }
                        }
                        if (n < 3 && null != (t = this._drawCardNode) && t.isValid) {
                            var s = this._drawCardNode.getComponent(R);
                            this.playSelectAnim(this._drawCardNode, s.byte)
                        }
                    }
                }, s.updateHuanSanZhangCards = function(e, t) {
                    var n;
                    void 0 === t && (t = !1);
                    var a = A.getInstance().getGameInfoByTag(I.HUAN_SAN_ZHANG_CARD);
                    t && (null == a || null == (n = a.cards) ? void 0 : n.length) > 0 || (A.getInstance().setGameInfoByTag(I.HUAN_SAN_ZHANG_CARD, {
                        seatId: A.getInstance().mySeatId,
                        cards: e
                    }), g.dispatch(v.VIEW_UPDATE_HUAN_SAN_ZHANG_CARDS))
                }, s.removeHandCards = function(e, t) {
                    void 0 === t && (t = !1), console.log("removeHandCards", e);
                    for (var n = 0; n < e.length; n++)
                        for (var a = 0; a < this._mjList.length; a++) {
                            var i = this._mjList[a];
                            if (null != i && i.isValid && i.getComponent(R).byte == e[n]) {
                                this.node.removeChild(i), i.destroy(), this._mjList.splice(a, 1);
                                break
                            }
                        }
                    t && this.updateHandPositionAndName()
                }, s.dumpMyHandsNode = function(e) {
                    void 0 === e && (e = "");
                    for (var t = [], n = 0; n < this._mjList.length; n++)
                        if (null != this._mjList[n] && this._mjList[n].isValid) {
                            var a = O.getCardValue(this._mjList[n].getComponent(R).byte);
                            t.push(y.get(a))
                        } else t.push("null");
                    this.print("dumpMyHandsNode " + e, t)
                }, s.resetView = function() {
                    console.log("MyPlayerCard----resetView"), this.node.destroyAllChildren(), this._mjList = [], this._drawCardNode = null, this.drawByte = 0
                }, s.onDestroy = function() {
                    this._mjListTarget.forEach((function(e, t, n) {
                        c.stopAllByTarget(e)
                    }))
                }, s.sortHandCards = function() {
                    if (this.isPlayAnimShow) this._needResortCards = !0;
                    else {
                        this._needResortCards = !1, this._mjList = this._mjList.filter((function(e) {
                            return null != e
                        }));
                        for (var e = S.getInstance().getMyhands(), t = this._mjList.length, n = 0; n < t; n++) {
                            var a = this._mjList[n];
                            c.stopAllByTarget(a), a.name = "MJBlock" + n, a.getComponent(R).setCardByte(e[n]), this.cardAddTouchEvent(a), a.setPosition(N.width / 2 + N.width * n, 0, 0), a.setRotationFromEuler(0, 0, 0)
                        }
                        null != this._drawCardNode && this._drawCardNode.isValid && (t + 1 == e.length ? this._drawCardNode.getComponent(R).setCardByte(e[t]) : this._drawCardNode.getComponent(R).checkHandCard())
                    }
                }, r(t, [{
                    key: "drawByte",
                    get: function() {
                        return this._drawByte
                    },
                    set: function(e) {
                        this._drawByte = e
                    }
                }, {
                    key: "isPlayAnimShow",
                    get: function() {
                        return this._isPlayAnimShow
                    }
                }]), t
            }(f)).prototype, "nodeCardTemplate", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = w)) || B) || B)), s._RF.pop()
        }
    }
}))