System.register("chunks:///_virtual/MyPlayerCard.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./GSocket.ts", "./OperationMgr.ts", "./OperationResultMgr.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./FXJSound.ts", "./GameEvent.ts", "./CardUtil.ts", "./NodeCardCtr.ts", "./CardConfigs.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose, r = e.createClass
        }, function(e) {
            s = e.cclegacy, l = e._decorator, u = e.Node, d = e.Vec3, c = e.Tween, h = e.tween, p = e.instantiate
        }, function(e) {
            f = e.Utils
        }, function(e) {
            _ = e.GCache
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            C = e.GSocket
        }, function(e) {
            I = e.OperationMgr
        }, function(e) {
            A = e.OperationResultMgr
        }, function(e) {
            E = e.PlayerMgr
        }, function(e) {
            v = e.RoomMgr, y = e.ROOM_DATA_TYPE
        }, function(e) {
            S = e.OPCode, P = e.MahjongMap
        }, function(e) {
            T = e.FXJEvent
        }, function(e) {
            G = e.GameSound, O = e.FXJSound
        }, function(e) {
            R = e.GameEvent
        }, function(e) {
            N = e.CardUtil
        }, function(e) {
            b = e.NodeCardCtr, D = e.CardTag
        }, function(e) {
            L = e.MjSize
        }],
        execute: function() {
            var M, U, w, B, H;
            s._RF.push({}, "3d0c77YRXRBtJNggOQz6Yof", "MyPlayerCard", void 0);
            var F = l.ccclass,
                k = l.property;
            e("MyPlayerCard", (M = F("MyPlayerCard"), U = k({
                tooltip: "手牌模板",
                type: u
            }), M((H = t((B = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).selectedNode = [], t._drawCardNode = null, t._mjList = [], t._mjListTarget = [], t.myHandCardY = 0, i(t, "nodeCardTemplate", H, a(t)), t._drawByte = void 0, t._isTouched = void 0, t._touchNode = null, t.moveYDistance = 0, t.thresholdDistance = 100, t.startPosition = new d, t.touchNodePos = new d, t._isPlayAnim = !1, t._isPlayAnimShow = !1, t._needResortCards = !1, t._is_huan_san_zhang = !1, t
                }
                n(t, e);
                var s = t.prototype;
                return s.isHuanSanZhang = function(e) {
                    this._is_huan_san_zhang = e
                }, s.onInitModuleEvent = function() {}, s.onLoad = function() {
                    this.node.on(u.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(u.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(u.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(u.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.addModelListener(R.VIEW_GAME_SCENE_BG_TOUCH, this.onBgTouchStart), this.nodeCardTemplate.active = !1, this.addGameComp()
                }, s.addGameComp = function() {
                    null == this.node && (this.node = f.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, s.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, s.stackAnim = function(e, t, n, i) {
                    var a = this.getOpIndexs(t);
                    if (a.length > 0) {
                        this.removeHandCard(a, !0), this.removeDrawCard(), null != i && n && this.addHandCard(n, i - a.length);
                        var o = E.getInstance().getMyhands();
                        this._mjList.length < o.length && (E.getInstance().checkUserIsMingLou(v.getInstance().mySeatId) || (e = !0, this.addHandCard(o[o.length - 1], this._mjList.length)))
                    }
                    if (e && this._mjList.length > 0) {
                        this._drawCardNode = this._mjList.pop(), this._drawCardNode.name = "drawCardNode", this.drawByte = E.getInstance().getLastMyhands();
                        var r = this._drawCardNode.getPosition(),
                            s = new d(r.x + .2 * L.width, r.y, r.z);
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
                        var i = E.getInstance().getMyhands();
                        this._mjList.length < (null == i ? void 0 : i.length) && i.slice(this._mjList.length, null == i ? void 0 : i.length).forEach((function(e) {
                            t.addHandCard(e, t._mjList.length)
                        })), this.updateHandPositionAndName()
                    }
                }, s.removeDrawCard = function() {
                    var e = null;
                    return null != this._drawCardNode && this._drawCardNode.isValid ? (e = this._drawCardNode.getComponent(b).byte, this.node.removeChild(this._drawCardNode), this._drawCardNode.destroy()) : console.log("当前没有渲染牌,无法移除"), this._drawCardNode = null, e
                }, s.getDrawCard = function() {
                    var e = null;
                    return null != this._drawCardNode && this._drawCardNode.isValid && (e = this._drawCardNode.getComponent(b).byte), e
                }, s.addHandCard = function(e, t) {
                    if (t > this._mjList.length) console.log("索引大于当前渲染手牌的数量请检查逻辑", t);
                    else {
                        if (this._mjList.length >= 13) return this.updateHandPositionAndName(), void console.log("当前渲染手牌数量已满--\x3e 13", t);
                        var n = p(this.nodeCardTemplate),
                            i = e,
                            a = n.getComponent(b);
                        a.setCardTag(D.HandCard), a.setCardByte(i), n.active = !0, n.name = "MJBlock" + t, this.node.addChild(n), this._mjList.splice(t, 0, n), this.updateHandPositionAndName()
                    }
                }, s.drawCard = function(e, t) {
                    var n = E.getInstance().getMyhands();
                    if (0 == this._mjList.length && n.length > 0) E.getInstance().checkUserIsMingLou(v.getInstance().mySeatId) || (n = n.filter((function(t) {
                        return t != e
                    })), this.addHandCards(n, !0, !1, !0));
                    else if (0 == n.length) return void C.instance.closeConnect({});
                    this.drawByte = e, this.removeDrawCard(), this._drawCardNode = p(this.nodeCardTemplate), this.changeDrawCard(e), this._drawCardNode.active = !0, this.node.addChild(this._drawCardNode), this.cardAddTouchEvent(this._drawCardNode), this.onUpdateDrawCardPos(), t && this._drawCardNode.setRotationFromEuler(90, 0, 0)
                }, s.changeDrawCard = function(e) {
                    if (this._drawCardNode && this._drawCardNode.isValid) {
                        var t = this._drawCardNode.getComponent(b);
                        t.setCardTag(D.HandCard), t.setCardByte(e), this._drawByte = e
                    }
                }, s.showOutCardList = function(e) {
                    var t = I.getInstance().getOprationCardList(e);
                    if (0 != (null == t ? void 0 : t.length)) {
                        var n = {};
                        f.table_isEmpty(t) || t.forEach((function(e, t, i) {
                            f.table_isEmpty(e.cards) || e.cards.forEach((function(e, t, i) {
                                n[e] = !0
                            }))
                        }));
                        for (var i = 0; i < this._mjList.length; i++) {
                            var a = this._mjList[i];
                            if (null != a && a.isValid) {
                                var o = a.getComponent(b);
                                this.setBlack(o, !n[o.byte]), o.setTouchEnable(n[o.byte])
                            }
                        }
                        if (null != this._drawCardNode && this._drawCardNode.isValid) {
                            var r = this._drawCardNode.getComponent(b);
                            this.setBlack(r, !n[r.byte]), r.setTouchEnable(n[r.byte])
                        }
                    }
                }, s.hideOutCardList = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        if (null != t && t.isValid) {
                            var n = t.getComponent(b);
                            this.setBlack(n, !1), n.setTouchEnable(!0)
                        }
                    }
                    if (null != this._drawCardNode && this._drawCardNode.isValid) {
                        var i = this._drawCardNode.getComponent(b);
                        this.setBlack(i, !1), i.setTouchEnable(!0)
                    }
                }, s.showTing = function() {
                    var e = I.getInstance().tingInfosMap;
                    if (!f.table_isEmpty(e) && !this.doGameCompFun("hidTinTip")) {
                        for (var t = I.getInstance().tingInfosRangeRemain || [-1, -1], n = I.getInstance().tingInfosRangeBei || [-1, -1], i = 0; i < this._mjList.length; i++) {
                            var a = this._mjList[i].getComponent(b),
                                o = e[a.byte];
                            if (f.isNotNull(o)) {
                                var r = !1,
                                    s = !1;
                                o.totalRemain == t[1] && o.totalRemain != t[0] && (r = !0), o.totalBei == n[1] && o.totalBei != n[0] && (s = !0), a.setArrow(!0, r, s)
                            } else a.setArrow(!1)
                        }
                        if (null != this._drawCardNode && this._drawCardNode.isValid) {
                            var l = this._drawCardNode.getComponent(b),
                                u = e[l.byte];
                            if (f.isNotNull(u)) {
                                var d = !1,
                                    c = !1;
                                u.totalRemain == t[1] && u.totalRemain != t[0] && (d = !0), u.totalBei == n[1] && u.totalBei != n[0] && (c = !0), l.setArrow(!0, d, c)
                            } else l.setArrow(!1)
                        }
                    }
                }, s.hideTing = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && t.getComponent(b).setArrow(!1)
                    }
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.getComponent(b).setArrow(!1)
                }, s.udpatePaoCard = function() {
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && t.getComponent(b).checkHandCard()
                    }
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.getComponent(b).checkHandCard()
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
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.setPosition(this.getLastPosition() + 1.2 * L.width, 0, 0)
                }, s.getLastCardPos = function(e) {
                    return this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    })), this._mjList.length > 0 ? {
                        x: this.getLastPosition() + 2.2 * L.width,
                        y: 0,
                        z: 0
                    } : this.doGameCompFun("getMingpaiPos", {
                        seatId: v.getInstance().getMySeatId()
                    })
                }, s.refreshHandCardPre = function() {
                    this.print("refreshHandCardPre"), this.stopShowCardAnim(), this.updateHandPositionAndName(!1, !0), g.dispatch(R.HIDE_TING_VIEW)
                }, s.refreshHandCard = function() {
                    this.print("refreshHandCard"), this.stopShowCardAnim(), E.getInstance().orderMyhands(), this.checkHandCardList(), this.updateHandPositionAndName(!1), g.dispatch(R.HIDE_TING_VIEW)
                }, s.checkHandCardList = function() {
                    var e = E.getInstance().getMyhands();
                    console.log("checkHandCardList", e.length, this._mjList.length)
                }, s.updateHandPositionAndName = function(e, t) {
                    void 0 === e && (e = !1), void 0 === t && (t = !1), this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    })), this.print("updateHandPositionAndName", e, t, this._mjList.length);
                    for (var n = new Array(this._mjList.length), i = 0; i < this._mjList.length; i++) n[i] = i;
                    e && n.sort((function() {
                        return Math.random() > .5 ? 1 : -1
                    }));
                    for (var a = this._mjList.length, o = 0; o < a; o++) {
                        var r = this._mjList[o];
                        if (c.stopAllByTarget(r), r.name = "MJBlock" + o, !t) {
                            var s = E.getInstance().getHandCardByIndex(n[o]);
                            s ? r.getComponent(b).setCardByte(s) : (r.destroy(), this._mjList[o] = null)
                        }
                        this.cardAddTouchEvent(r), r.setPosition(L.width / 2 + L.width * o, 0, 0), e && r.setRotationFromEuler(90, 0, 0)
                    }
                    this.selectedNode = [], this.updateHuanSanZhangCards([], !0)
                }, s.addHandCardDirect = function(e) {
                    var t = p(this.nodeCardTemplate),
                        n = t.getComponent(b);
                    n.setCardTag(D.HandCard), n.setCardByte(e), t.active = !0, this.node.addChild(t), this._mjList.push(t), this.cardAddTouchEvent(t)
                }, s.stopShowCardAnim = function() {
                    this._mjListTarget.forEach((function(e, t, n) {
                        c.stopAllByTarget(e)
                    })), this._mjListTarget = [];
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        null != t && t.isValid && (c.stopAllByTarget(t), t.setRotationFromEuler(0, 0, 0))
                    }
                    null != this._drawCardNode && this._drawCardNode.isValid && this._drawCardNode.setRotationFromEuler(0, 0, 0), this._isPlayAnim = !1, this._isPlayAnimShow = !1
                }, s.playShowCardAnim = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !1), !e) {
                        this._isPlayAnim = !0, this._isPlayAnimShow = !0;
                        var n = .3,
                            i = .3,
                            a = .2,
                            o = this._mjList.length,
                            r = Math.floor((o - 1) / 4);
                        o = this._checkShowCards(o);
                        for (var s = function(e) {
                                var s = new d(t._mjList[e].eulerAngles),
                                    l = new d(t._mjList[e].getPosition()),
                                    u = new d(l.x, 0, 0),
                                    h = Math.floor(e / 4),
                                    p = new d(0, 0, 0);
                                e == o - 1 ? new c(p).delay(n * h).by(i, new d(0, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).by(i, new d(-90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).by(a, new d(90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).call((function() {
                                    var e = E.getInstance().getMyhands();
                                    if (e.length >= 14) {
                                        var n, i = e.pop(),
                                            a = v.getInstance().orderCards(e);
                                        a.push(i), E.getInstance().updateMyhands(a), null != (n = t._drawCardNode) && n.isValid && t._drawCardNode.getComponent(b).setCardByte(i)
                                    } else {
                                        var o = v.getInstance().orderCards(e);
                                        E.getInstance().updateMyhands(o)
                                    }
                                    t._isPlayAnimShow = !1, t._needResortCards && t.sortHandCards(), t.updateHandPositionAndName(), t._checkReconnectHuanSanZhang()
                                })).by(a, new d(-90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).call((function() {
                                    t._isPlayAnim = !1
                                })).start() : new c(p).delay(n * h).by(i, new d(0, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).by(i, new d(-90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).delay(n * (r - h)).by(a, new d(90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).by(a, new d(-90, 0, 0), {
                                    onUpdate: function(n, i) {
                                        f.rotate3DAroundByPositionRotaion(t._mjList[e], l, s, u, n, !0)
                                    }
                                }).start(), t._mjListTarget.push(p)
                            }, l = 0; l < o; l++) s(l);
                        if (this._drawCardNode) {
                            var u = new d(this._drawCardNode.eulerAngles),
                                h = new d(this._drawCardNode.getPosition()),
                                p = new d(h.x, 0, 0),
                                _ = new d(0, 0, 0);
                            new c(_).delay(n * r + .6 + .4).by(n, new d(0, 0, 0), {
                                onUpdate: function(e, n) {
                                    f.rotate3DAroundByPositionRotaion(t._drawCardNode, h, u, p, e, !0)
                                }
                            }).by(.3, new d(-90, 0, 0), {
                                onUpdate: function(e, n) {
                                    f.rotate3DAroundByPositionRotaion(t._drawCardNode, h, u, p, e, !0)
                                }
                            }).start(), this._mjListTarget.push(_)
                        }
                    }
                }, s._checkShowCards = function(e) {
                    var t = this.doGameCompFun("checkShowCards", e);
                    return null != t ? t : e
                }, s._checkReconnectHuanSanZhang = function() {
                    var e, t = this,
                        n = v.getInstance().getGameInfoByTag(y.HUAN_SAN_ZHANG_CARD);
                    (null == n || null == (e = n.cards) ? void 0 : e.length) > 0 && this.scheduleOnce((function() {
                        t.onHuanSanZhangStart(null == n ? void 0 : n.cards)
                    }), 0)
                }, s.cardAddTouchEvent = function(e) {
                    var t = this;
                    e.off(u.EventType.TOUCH_START), e.on(u.EventType.TOUCH_START, (function(e) {
                        t._touchNode = e.target, t.touchNodePos = t._touchNode.getPosition()
                    }), this), e.on(u.EventType.TOUCH_CANCEL, (function(e) {
                        return !1
                    }), this)
                }, s.cancelOpcardTouch = function(e) {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var t = !1, n = 0; n < this._mjList.length; n++) {
                        var i = this._mjList[n],
                            a = i.getComponent(b).byte;
                        if (N.getMajiangValue(a) === N.getMajiangValue(e)) {
                            i.off(u.EventType.TOUCH_START), this.setBlack(i.getComponent(b), !0), t = !0;
                            break
                        }
                    }!t && E.getInstance().includesMyhands(A.getInstance().opCard) && (this._drawCardNode.off(u.EventType.TOUCH_START), this.setBlack(this._drawCardNode.getComponent(b), !0))
                }, s.updateOpcardTouch = function() {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var e = 0; e < this._mjList.length; e++) {
                        var t = this._mjList[e];
                        this.cardAddTouchEvent(t), this.setBlack(t.getComponent(b), !1)
                    }
                }, s.setBlack = function(e, t) {
                    this.doGameCompFun("onMyPlayerCardSetBlack", e, t) || e.setBlack(t)
                }, s.onBgTouchStart = function(e) {
                    this._is_huan_san_zhang || (this.resetSelectedNode(!1), g.dispatch(R.HIDE_TING_VIEW))
                }, s.onTouchStart = function(e) {
                    var t;
                    if (!this._isPlayAnim && (this._isTouched = !0, null !== this._touchNode && null != (t = this._touchNode) && t.isValid)) {
                        var n = e.getLocation();
                        this.startPosition = new d(n.x, n.y, 0)
                    }
                }, s.onTouchMove = function(e) {
                    var t;
                    if (_.Desk.turnMe && !this._isPlayAnim && (this._isTouched = !0, null !== this._touchNode && null != (t = this._touchNode) && t.isValid && this._touchNode.getComponent(b).getTouchEnable())) {
                        var n = this._touchNode.getPosition(),
                            i = e.getDelta();
                        n.y < 90 ? n.y + i.y >= 0 && d.add(n, n, new d(0, i.y, 0)) : d.add(n, n, new d(i.x, i.y, 0)), this._touchNode.setPosition(n);
                        var a = this._touchNode.getPosition();
                        this.moveYDistance = a.y
                    }
                }, s.onTouchEnd = function(e) {
                    var t;
                    if (!this._isPlayAnim && null !== this._touchNode && null != (t = this._touchNode) && t.isValid && this._touchNode.getComponent(b).getTouchEnable()) {
                        if (g.dispatch(R.HIDE_TING_VIEW), _.Desk.turnMe && this.moveYDistance > this.thresholdDistance)
                            if (_.Desk.turnMe)
                                if (I.getInstance().getOprationCardList(S.OPE_OUT_CARD).length > 0) {
                                    var n = this._touchNode.getComponent(b).byte;
                                    this.onSendCard(n), this.resetSelectedNode(!0)
                                } else this.resetSelectedNode(!1), this.playUnselectAnim(this._touchNode);
                        else this.resetSelectedNode(!1), this.playUnselectAnim(this._touchNode);
                        else if (this._is_huan_san_zhang) {
                            if (this.selectedNode.length <= 3) {
                                var i = this._touchNode.getComponent(b);
                                if (!this.resetCurSelectedNode(i.byte) && this.selectedNode.length < 3) {
                                    var a = this._touchNode.getComponent(b);
                                    this.playSelectAnim(this._touchNode, a.byte)
                                }
                                var o = [];
                                this.selectedNode.forEach((function(e) {
                                    var t = e.getComponent(b).byte;
                                    o.push(t)
                                })), this.updateHuanSanZhangCards(o)
                            }
                        } else if (this.selectedNode.length > 0) {
                            var r = this.selectedNode[this.selectedNode.length - 1];
                            if (r && r.isValid && r == this._touchNode)
                                if (_.Desk.turnMe)
                                    if (I.getInstance().getOprationCardList(S.OPE_OUT_CARD).length > 0) {
                                        var s = this._touchNode.getComponent(b).byte;
                                        this.onSendCard(s), this.resetSelectedNode(!0)
                                    } else this.resetSelectedNode(!1);
                            else this.resetSelectedNode(!1);
                            else {
                                this.resetSelectedNode(!0);
                                var l = this._touchNode.getComponent(b);
                                this.playSelectAnim(this._touchNode, l.byte), l.getArrow() && g.dispatch(R.SHOW_TING_VIEW, l.byte)
                            }
                        } else {
                            var u = this._touchNode.getComponent(b);
                            this.playSelectAnim(this._touchNode, u.byte), u.getArrow() && g.dispatch(R.SHOW_TING_VIEW, u.byte)
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
                    void 0 === t && (t = !0), this.selectedNode.forEach((function(i, a, o) {
                        null != i && i.isValid && (e && i === n._touchNode || (t ? n.playUnselectAnim(i) : i.setPosition(new d(n.getSelectNodePosx(i), 0, 0))))
                    })), this.selectedNode = []
                }, s.resetCurSelectedNode = function(e) {
                    for (var t = !1, n = this.selectedNode.length, i = 0; i < n; i++)
                        if (this.selectedNode[i] && this.selectedNode[i].isValid && this.selectedNode[i].getComponent(b).byte == e) {
                            this.playUnselectAnim(this.selectedNode[i]), this.selectedNode.splice(i, 1), t = !0;
                            break
                        } return t
                }, s.playSelectAnim = function(e, t) {
                    console.log("===================================playSelectAnim--------------------------------------"), this.selectedNode.push(e), c.stopAllByTarget(e);
                    var n = this.getSelectNodePosx(e);
                    h(e).to(.1, {
                        position: new d(n, 20, 0)
                    }).start(), G.getInstance().playEffect(O.GameTiPai), g.dispatch(R.SHOW_PICK_CARD, t)
                }, s.getOpIndexs = function(e) {
                    this._mjList = this._mjList.filter((function(e) {
                        return null != e
                    }));
                    for (var t = [], n = 0; n < this._mjList.length; n++) {
                        var i = this._mjList[n].getComponent(b).byte; - 1 !== e.indexOf(i) && t.push(n)
                    }
                    return t
                }, s.playCardFromHandAnim = function(e, t) {
                    this._isPlayAnim = !0;
                    for (var n = -1, i = -1, a = [], o = 0; o < this._mjList.length; o++) {
                        var r = this._mjList[o].getComponent(b).byte;
                        r == e ? n = o : a.push(r)
                    }
                    if (this.print("playCardFromHandAnim", e, t, n), -1 !== n) {
                        a.push(t), a = v.getInstance().orderCards(a);
                        for (var s = 0; s < a.length; s++) t == a[s] && (i = s);
                        return this.print("playCardFromHandAnim indexInsert", i), null != this._mjList[n] && this._mjList[n].isValid && (this.node.removeChild(this._mjList[n]), this._mjList[n].destroy()), this._mjList[n] = null, this.makeSlotAnim(i, n)
                    }
                    return e == this.getDrawCard() && this.removeDrawCard(), 0
                }, s.removeHandCard = function(e, t) {
                    void 0 === t && (t = !1), console.log("removeHandCard", e), e.sort((function(e, t) {
                        return t - e
                    }));
                    for (var n, i = o(e); !(n = i()).done;) {
                        var a = n.value;
                        if (!(a < this._mjList.length)) return void console.log("索引大于等于当前渲染手牌的数量请检查逻辑", a);
                        var r = this._mjList.splice(a, 1);
                        this.node.removeChild(r[0]), r[0].destroy()
                    }
                    t && this.updateHandPositionAndName()
                }, s.makeSlotAnim = function(e, t) {
                    console.log("makeSlotAnim", this._mjList.length, e, t);
                    var n = 0;
                    if (-1 == t || null != this._mjList[t]) return console.log("当前没有空的手牌位置,无法空出对应的索引位置", t, e), n;
                    if (n = .2 * (Math.abs(e - t) + 1), t < e) {
                        for (var i = t + 1; i <= e; i++)
                            if (this._mjList[i]) {
                                var a = this._mjList[i],
                                    o = a.getPosition(),
                                    r = this.getHandPosition(i - 1);
                                c.stopAllByTarget(a), h(a).to(0, {
                                    position: new d(o.x, o.y, o.z)
                                }).to(.2, {
                                    position: new d(r.x, o.y, r.z)
                                }).start()
                            } else console.log("card is nill");
                        for (var s = t; s < e; s++) this._mjList[s] = this._mjList[s + 1]
                    } else if (e < t) {
                        for (var l = e; l < t; l++)
                            if (this._mjList[l]) {
                                var u = this._mjList[l];
                                null != u && u.isValid || console.log("-----------------");
                                var p = u.getPosition(),
                                    f = this.getHandPosition(l + 1);
                                c.stopAllByTarget(u), h(u).to(0, {
                                    position: new d(p.x, p.y, p.z)
                                }).to(.2, {
                                    position: new d(f.x, p.y, f.z)
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
                        var n = this._mjList[t].getComponent(b).byte;
                        e.push(n)
                    }
                    return e
                }, s.useByteFindIndexs = function(e) {
                    var t = this;
                    console.log("card-----------------useByteFindIndexs---1");
                    var n = [];
                    return e.forEach((function(e) {
                        for (var i = 0; i < t._mjList.length; i++)
                            if (e === t._mjList[i].getComponent(b).byte) {
                                n.push(i);
                                break
                            }
                    })), n
                }, s.getNodeIndex = function(e) {
                    return this._mjList.findIndex((function(t) {
                        return t == e
                    }), this)
                }, s.addHandCards = function(e, t, n, i, a) {
                    if (void 0 === n && (n = !1), void 0 === i && (i = !1), void 0 === a && (a = !0), (null == e ? void 0 : e.length) > 0) {
                        this.resetView();
                        var o = e.length;
                        n && (o = e.length - 1);
                        for (var r = this._checkShowCards(o), s = 0; s < o; s++) {
                            var l = p(this.nodeCardTemplate),
                                u = e[s],
                                d = l.getComponent(b);
                            d.setCardTag(D.HandCard), d.setCardByte(u), l.active = !0, this._mjList.push(l), this.node.addChild(l), s >= r && l.setRotationFromEuler(90, 0, 0)
                        }
                        i ? this.updateHandPositionAndName() : this.updateHandPositionAndName(!0, o != r), n && (this.drawCard(e[o], a), this._drawCardNode.active = t), _.Desk.turnMe && (this.showOutCardList(S.OPE_OUT_CARD), this.showTing())
                    }
                }, s.getHandPosition = function(e) {
                    return new d(L.width / 2 + L.width * e, 0, 0)
                }, s.getHandPositionX = function(e) {
                    return L.width / 2 + L.width * e
                }, s.getLastPosition = function() {
                    var e = L.width / 2 + L.width * (this._mjList.length - 1);
                    return this._mjList.length || (e -= L.width / 2), e
                }, s.getSelectNodePosx = function(e) {
                    return e.name && e.name.includes("MJBlock") ? this.getHandPositionX(parseInt(e.name.replace("MJBlock", ""))) : this.getLastPosition() + 1.2 * L.width
                }, s.playUnselectAnim = function(e) {
                    console.log("playUnselectAnim-----------"), c.stopAllByTarget(e);
                    var t = this.getSelectNodePosx(e);
                    h(e).to(.1, {
                        position: new d(t, 0, 0)
                    }).start(), g.dispatch(R.HIDE_PICK_CARD)
                }, s.onSendCard = function(e) {
                    var t = N.getCardValue(e);
                    if (this.doGameCompFun("checkCardCanOut", e)) {
                        console.log("出牌", P.get(t), e);
                        var n = {
                            opCard: e,
                            opCode: S.OPE_OUT_CARD,
                            opCards: [e],
                            seatId: I.getInstance().seatId,
                            userId: I.getInstance().userId
                        };
                        g.dispatch(R.SEND_PLAYER_OPERATION_PRE, n), g.dispatch(R.SEND_PLAYER_OPERATION, n)
                    }
                }, s.onHuanSanZhangStart = function(e) {
                    if (this._isPlayAnimShow) console.log("正在发牌，不显示选中的换三张手牌");
                    else {
                        this.resetSelectCard(!1, !1);
                        for (var t, n = 0, i = 0; i < this._mjList.length; i++) {
                            var a = this._mjList[i];
                            if (null != a && a.isValid)
                                for (var o = a.getComponent(b), r = 0; r < e.length; r++)
                                    if (o.byte == e[r]) {
                                        this.playSelectAnim(a, o.byte), ++n;
                                        break
                                    }
                        }
                        if (n < 3 && null != (t = this._drawCardNode) && t.isValid) {
                            var s = this._drawCardNode.getComponent(b);
                            this.playSelectAnim(this._drawCardNode, s.byte)
                        }
                    }
                }, s.updateHuanSanZhangCards = function(e, t) {
                    var n;
                    void 0 === t && (t = !1);
                    var i = v.getInstance().getGameInfoByTag(y.HUAN_SAN_ZHANG_CARD);
                    t && (null == i || null == (n = i.cards) ? void 0 : n.length) > 0 || (v.getInstance().setGameInfoByTag(y.HUAN_SAN_ZHANG_CARD, {
                        seatId: v.getInstance().mySeatId,
                        cards: e
                    }), g.dispatch(T.VIEW_UPDATE_HUAN_SAN_ZHANG_CARDS))
                }, s.removeHandCards = function(e, t) {
                    void 0 === t && (t = !1), console.log("removeHandCards", e);
                    for (var n = 0; n < e.length; n++)
                        for (var i = 0; i < this._mjList.length; i++) {
                            var a = this._mjList[i];
                            if (null != a && a.isValid && a.getComponent(b).byte == e[n]) {
                                this.node.removeChild(a), a.destroy(), this._mjList.splice(i, 1);
                                break
                            }
                        }
                    t && this.updateHandPositionAndName()
                }, s.dumpMyHandsNode = function(e) {
                    void 0 === e && (e = "");
                    for (var t = [], n = 0; n < this._mjList.length; n++)
                        if (null != this._mjList[n] && this._mjList[n].isValid) {
                            var i = N.getCardValue(this._mjList[n].getComponent(b).byte);
                            t.push(P.get(i))
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
                        for (var e = E.getInstance().getMyhands(), t = this._mjList.length, n = 0; n < t; n++) {
                            var i = this._mjList[n];
                            c.stopAllByTarget(i), i.name = "MJBlock" + n, i.getComponent(b).setCardByte(e[n]), this.cardAddTouchEvent(i), i.setPosition(L.width / 2 + L.width * n, 0, 0), i.setRotationFromEuler(0, 0, 0)
                        }
                        null != this._drawCardNode && this._drawCardNode.isValid && (t + 1 == e.length ? this._drawCardNode.getComponent(b).setCardByte(e[t]) : this._drawCardNode.getComponent(b).checkHandCard())
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
            }(m)).prototype, "nodeCardTemplate", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = B)) || w)), s._RF.pop()
        }
    }
}))