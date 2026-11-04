System.register("chunks:///_virtual/NodeMeldCardCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts"], (function(e) {
    var t, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, a = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
        }, function(e) {
            r = e.cclegacy, s = e._decorator, u = e.Node, l = e.instantiate, d = e.Vec3
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.RoomMgr
        }, function(e) {
            g = e.OPCode
        }, function(e) {
            f = e.FXJEvent
        }, function(e) {
            C = e.GameEvent, E = e.GameEventTag
        }, function(e) {
            S = e.GameRuleConfig
        }, function(e) {
            A = e.GameViewConfig
        }, function(e) {
            I = e.CardUtil
        }, function(e) {
            G = e.NodeCardCtr, y = e.CardTag
        }],
        execute: function() {
            var v, P, T, b, O, R;
            r._RF.push({}, "a6734W7LwNDu5Y8vtAalxbK", "NodeMeldCardCtr", void 0);
            var M = s.ccclass,
                N = s.property,
                U = s.menu;
            e("NodeMeldCardCtr", (v = M("NodeMeldCardCtr"), P = U("prefab/subGame/mj/NodeMeldCardCtr"), T = N({
                tooltip: "牌节点",
                type: u
            }), v(b = P((R = t((O = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(a)) || this, i(t, "nodeCard", R, o(t)), t._hostDir = 0, t._seatList = null, t._dataList = null, t._edgeList = null, t._distanceList = null, t._scale = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t._pickList = null, t._baoList = [], t.baopai = void 0, t._lastCardPos = null, t.userLastCardPos = [], t
                }
                a(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, r.start = function() {}, r.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, r.initData = function() {
                    this._seatList = new Array(S.playerNum), this._dataList = [], this._edgeList = [], this._distanceList = [];
                    for (var e = 0; e < S.playerNum; e++) this._dataList.push([]), this._edgeList.push(0), this._distanceList.push(0);
                    this._pickList = [], this._baoList = []
                }, r.getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return c.isNull(t) && (t = e), t
                }, r.updateUserDir = function(e) {
                    if (void 0 === e && (e = !0), null != this._seatList) {
                        this._hostDir = I.getDirFromSeatId(_.getInstance().mySeatId);
                        for (var t = this._seatList.length, n = 0; n < t; n++) this._seatList[n].setRotationFromEuler(0, 90 * this.getRotationDir(n), 0);
                        if (e)
                            for (var a = 0, i = 0; i < S.playerNum; i++) a = this.getDirByLocalSeat(i), this._edgeList[i] = A.CardConfig.EdgeToMeld[a], this._distanceList[i] = A.CardConfig.CenterToMeld[a]
                    }
                }, r.initView = function() {
                    this.doGameCompFun("preloaderRes");
                    var e = A.CardConfig.ScaleMeldCard,
                        t = A.CardConfig.Width * e,
                        n = A.CardConfig.Height * e,
                        a = A.CardConfig.Thickness * e,
                        i = A.CardConfig.GroundToCard * e;
                    this._scale = e, this._width = t, this._height = n, this._thickness = a, this._groundToCard = i;
                    for (var o = this._seatList.length, r = 0; r < o; r++) {
                        var s = new u;
                        s.name = r + "", this.node.addChild(s), this._seatList[r] = s, s.setRotationFromEuler(0, 90 * this.getRotationDir(r), 0)
                    }
                }, r.getDirByLocalSeat = function(e) {
                    var t = this.doGameCompFun("getDirByLocalSeat", e);
                    return c.isNull(t) && (t = e), t
                }, r.resetView = function() {
                    this._lastCardPos = null, this.userLastCardPos = [], this._hostDir = I.getDirFromSeatId(_.getInstance().mySeatId);
                    for (var e = 0; e < S.playerNum; e++) {
                        var t = this.getDirByLocalSeat(e);
                        this._edgeList[e] = A.CardConfig.EdgeToMeld[t], this._distanceList[e] = A.CardConfig.CenterToMeld[t]
                    }
                    this._dataList = [
                        [],
                        [],
                        [],
                        []
                    ], this._seatList.forEach((function(e, t, n) {
                        e.destroyAllChildren()
                    })), this._pickList = [], this._baoList = [], this.baopai = null, p.dispatch(C.VIEW_RESET_CARD_POINT)
                }, r.onChangeSeat = function() {
                    this.resetView()
                }, r.onGameStart = function() {
                    this.resetView()
                }, r.onChannelOperationResult = function(e) {
                    this.doGameCompFun("onNodeMeldCardCtrOperationResult", this._seatList, e)
                }, r.onPengGang = function(e) {
                    var t = I.getDirFromSeatId(e.seatId),
                        n = I.getDirFromSeatId(e.cardSeatId);
                    switch (e.opCode) {
                        case g.OPE_RIGHT_CHI:
                        case g.OPE_MIDDLE_CHI:
                        case g.OPE_LEFT_CHI:
                        case g.OPE_PENG:
                        case g.OPE_QIANG_PENG:
                            this.makeMeldPeng(t, n, e.opCode, e.opCard, e.opCards, !0);
                            break;
                        case g.OPE_AN_GANG:
                            1 == this.doGameCompFun("checkMeldGang", e) || this.makeMeldAnGang(t, n, e.opCode, e.opCard, e.opCards, !1);
                            break;
                        case g.OPE_GANG:
                            1 == this.doGameCompFun("checkMeldGang", e) || this.makeMeldMingGang(t, n, e.opCode, e.opCard, e.opCards, !1);
                            break;
                        case g.OPE_BU_GANG:
                            this.makeMeldBuGang(t, n, e.opCode, e.opCard, e.opCards, !1);
                            break;
                        case g.OPE_LANG_QI:
                        case g.OPE_MING_LOU:
                            this.makeMeldLangqi(t, n, e.opCode, e.opCard, e.opCards, !1);
                            break;
                        default:
                            this.doGameCompFun("onNodeMeldCardCtrPengGang", t, n, e, this._seatList[t], this._dataList[t])
                    }
                    this.baopai && this.onShowBaoCard(this.baopai), this.updatefyLastCardPos(e.seatId, e.opCode)
                }, r.makeMeldPeng = function(e, t, n, a, i, o) {
                    for (var r = I.calculatePlayerSeat(_.getInstance().mySeatId, I.getSeatIdFromDir(t)), s = this._scale, u = this._width, h = this._height, m = this._groundToCard, E = this._edgeList[e], S = this._distanceList[e], v = null, P = null, T = null, b = 0; b < 3; b++) {
                        (T = l(this.nodeCard)).setScale(T.scale.x * s, T.scale.y * s, T.scale.z * s), T.setPosition(E - .5 * u, m, S - .5 * h);
                        var O = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, b, I.getSeatIdFromDir(e), i[2 - b]), 0);
                        if (T.setRotationFromEuler(0, 0, O), E -= u + A.CardConfig.SpaceMeldCard, T.active = !0, this._seatList[e].addChild(T), T.getComponent(G).setCardTag(y.HandCard), T.getComponent(G).setMeldCardByte(i[2 - b], n), 1 == b) {
                            P = T;
                            var R = T.getPosition();
                            v = new d(R.x, R.y + this._thickness, R.z)
                        }
                        e != t && (n == g.OPE_RIGHT_CHI || n == g.OPE_MIDDLE_CHI || n == g.OPE_LEFT_CHI ? a == T.getComponent(G).getCardByte() && p.dispatch(C.VIEW_ADD_CARD_POINT, T.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r) : 1 == b && (new d, p.dispatch(C.VIEW_ADD_CARD_POINT, T.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r)))
                    }
                    if (T.name = "goup_last", this.userLastCardPos[e] = T.getPosition(), this._edgeList[e] = E - .5 * u, this._dataList[e].push({
                            opCard: a,
                            opCards: i,
                            opCode: n,
                            buPos: v
                        }), c.isNotNull(P) && o) {
                        var M = {
                            seatId: I.getSeatIdFromDir(e),
                            aniType: A.AnimType.Peng,
                            pos: P.getWorldPosition()
                        };
                        p.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, M)
                    }
                    this.doGameCompFun("onPengGangResult", n, i, e)
                }, r.makeMeldAnPeng = function(e, t, n, a, i, o) {
                    for (var r = I.calculatePlayerSeat(_.getInstance().mySeatId, I.getSeatIdFromDir(t)), s = this._scale, u = this._width, h = this._height, m = this._groundToCard, g = this._edgeList[e], E = this._distanceList[e], S = null, v = null, P = 0; P < 3; P++)(v = l(this.nodeCard)).setScale(v.scale.x * s, v.scale.y * s, v.scale.z * s), v.setPosition(g - .5 * u, m, E - .5 * h), g -= u + A.CardConfig.SpaceMeldCard, 1 == P ? (v.setRotationFromEuler(0, 0, 180), e != t && p.dispatch(C.VIEW_ADD_CARD_POINT, v.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r)) : v.setRotationFromEuler(0, 0, 0), v.active = !0, this._seatList[e].addChild(v), v.getComponent(G).setCardTag(y.HandCard), v.getComponent(G).setMeldCardByte(i[2 - P], n), 1 == P && (S = v);
                    if (v.name = "goup_last", this.userLastCardPos[e] = v.getPosition(), this._edgeList[e] = g - .5 * u, this._dataList[e].push({
                            opCard: a,
                            opCards: i,
                            opCode: n,
                            buPos: null
                        }), c.isNotNull(S) && o) {
                        var T = {
                            seatId: I.getSeatIdFromDir(e),
                            aniType: A.AnimType.Peng,
                            pos: S.getWorldPosition()
                        };
                        p.dispatch(f.VIEW_OUT_CARD_ANI_PLAY, T)
                    }
                    this.doGameCompFun("onPengGangResult", n, i, e)
                }, r.makeMeldBuGang = function(e, t, a, i, o, r) {
                    for (var s = this, u = this._scale, d = this._dataList[e], h = 0; h < d.length; h++) {
                        var p = d[h];
                        if ((p.opCode == g.OPE_PENG || p.opCode == g.OPE_QIANG_PENG) && c.isNotNull(p.buPos)) {
                            var m = function() {
                                var t = {};
                                o.forEach((function(e, n, a) {
                                    t[e] = !0
                                }));
                                var n = !0;
                                if (p.opCards.forEach((function(e, a, i) {
                                        t[e] || (n = !1)
                                    })), n) {
                                    s._seatList[e].children.forEach((function(e) {
                                        o.includes(e.getComponent(G).getCardByte()) && "goup_last" == e.name && (e.name = "majiangzi")
                                    })), p.opCards.push(i);
                                    var r = l(s.nodeCard);
                                    return r.setScale(r.scale.x * u, r.scale.y * u, r.scale.z * u), r.setPosition(p.buPos), r.setRotationFromEuler(0, 0, 0), r.active = !0, r.name = "goup_last", s._seatList[e].addChild(r), r.getComponent(G).setCardTag(y.HandCard), r.getComponent(G).setMeldCardByte(i, a), p.opCode = g.OPE_BU_GANG, {
                                        v: void 0
                                    }
                                }
                            }();
                            if ("object" == n(m)) return m.v
                        }
                    }
                }, r.makeMeldZhuiGang = function(e, t, n, a, i, o) {
                    I.calculatePlayerPosition(I.getSeatIdFromDir(e), I.getSeatIdFromDir(t));
                    for (var r = this._scale, s = this._width, u = this._height, d = this._groundToCard, h = this._edgeList[e], p = this._distanceList[e], m = i.length, _ = [], g = null, f = null, C = 0; C < m; C++)
                        if (g = I.getCardValueLocal(i[C]), !this.doGameCompFun("checkSpecialGangMultCard", n, i) || !_.includes(g)) {
                            _.push(g), (f = l(this.nodeCard)).setScale(f.scale.x * r, f.scale.y * r, f.scale.z * r), f.setPosition(h - .5 * s, d, p - .5 * u);
                            var E = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, C, I.getSeatIdFromDir(e), i[2 - C]), 0);
                            f.setRotationFromEuler(0, 0, E), h -= s + A.CardConfig.SpaceMeldCard, f.active = !0, this._seatList[e].addChild(f), f.getComponent(G).setCardTag(y.HandCard), f.getComponent(G).setMeldCardByte(i[C], n)
                        } f.name = "goup_last", this.userLastCardPos[e] = f.getPosition(), this._edgeList[e] = h - .5 * s, this._dataList[e].push({
                        opCard: a,
                        opCards: i,
                        opCode: n,
                        buPos: null
                    })
                }, r.makeMeldMingGang = function(e, t, n, a, i, o) {
                    for (var r = I.calculatePlayerSeat(_.getInstance().mySeatId, I.getSeatIdFromDir(t)), s = this._scale, u = this._width, c = this._height, h = this._groundToCard, m = this._edgeList[e], g = this._distanceList[e], f = null, E = 0; E < 4; E++)(f = l(this.nodeCard)).setScale(f.scale.x * s, f.scale.y * s, f.scale.z * s), f.setPosition(m - .5 * u, h, g - .5 * c), f.setRotationFromEuler(0, 0, 0), m -= u + A.CardConfig.SpaceMeldCard, f.active = !0, this._seatList[e].addChild(f), f.getComponent(G).setCardTag(y.HandCard), f.getComponent(G).setMeldCardByte(i[E], n), e != t && 2 == E && p.dispatch(C.VIEW_ADD_CARD_POINT, f.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r);
                    f.name = "goup_last", this.userLastCardPos[e] = f.getPosition(), this._edgeList[e] = m - .5 * u, this._dataList[e].push({
                        opCard: a,
                        opCards: i,
                        opCode: n
                    }), this.doGameCompFun("onPengGangResult", n, i, e)
                }, r.makeMeldAnGang = function(e, t, n, a, i, o) {
                    i = this.doGameCompFun("orderAngCards", i) || i;
                    for (var r = this._scale, s = this._width, u = this._height, d = this._groundToCard, h = this._edgeList[e], p = this._distanceList[e], m = null, _ = 0; _ < 4; _++) {
                        (m = l(this.nodeCard)).setScale(m.scale.x * r, m.scale.y * r, m.scale.z * r), 2 == _ ? (h += s + A.CardConfig.SpaceMeldCard, m.setPosition(h - .5 * s, d + this._thickness, p - .5 * u)) : m.setPosition(h - .5 * s, d, p - .5 * u);
                        var g = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, _, I.getSeatIdFromDir(e), i[_]), -1);
                        g >= 0 ? m.setRotationFromEuler(0, 0, g) : 2 == _ ? m.setRotationFromEuler(0, 0, 0) : m.setRotationFromEuler(0, 0, 180), m.active = !0, this._seatList[e].addChild(m), m.getComponent(G).setCardTag(y.HandCard), m.getComponent(G).setMeldCardByte(i[_], n), h -= s + A.CardConfig.SpaceMeldCard
                    }
                    m.name = "goup_last", this.userLastCardPos[e] = m.getPosition(), this._edgeList[e] = h - .5 * s, this._dataList[e].push({
                        opCard: a,
                        opCards: i,
                        opCode: n
                    })
                }, r.getMingPaiRotation = function(e, t, n) {
                    var a = this.doGameCompFun("getMingPaiRotation", e, t);
                    return c.isNull(a) ? n : a
                }, r.makeMeldLangqi = function(e, t, n, a, i, o) {
                    for (var r = this._scale, s = this._width, u = this._height, d = this._groundToCard, c = this._edgeList[e], h = this._distanceList[e], p = 0, m = i.length, _ = null, g = 0; g < m; g++) {
                        p = i[m - 1 - g], (_ = l(this.nodeCard)).setScale(_.scale.x * r, _.scale.y * r, _.scale.z * r), _.setPosition(c - .5 * s, d, h - .5 * u);
                        var f = this.getMingPaiRotation(i, p, 0);
                        _.setRotationFromEuler(f, 0, 0), _.getComponent(G).setRotationFromEuler({
                            x: f,
                            y: 0,
                            z: 0
                        }), c -= s + A.CardConfig.SpaceMeldCard, _.active = !0, this._seatList[e].addChild(_), _.getComponent(G).setCardTag(y.HandCard), _.getComponent(G).setMeldCardByte(p, n)
                    }
                    _.name = "goup_last", this.userLastCardPos[e] = _.getPosition(), this._edgeList[e] = c - .5 * s, this._dataList[e].push({
                        opCard: a,
                        opCards: i,
                        opCode: n
                    })
                }, r.onGameOver = function(e) {
                    this.resetBaoCard();
                    var t = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this._seatList.forEach((function(e, n, a) {
                        var i;
                        null == e || null == (i = e.children) || i.forEach((function(e) {
                            0 == (t = e.getComponent(G).getRotationFromEuler()).x && 0 == t.y && 0 == t.z || e.setRotationFromEuler(0, 0, 0)
                        }))
                    }))
                }, r.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), e.playerList.forEach((function(e, n, a) {
                        t.onRefreshOpGroupsCard(e)
                    })), this.baopai && this.onShowBaoCard(this.baopai)
                }, r.onRefreshOpGroupsCard = function(e) {
                    var t = this,
                        n = I.getDirFromSeatId(e.seatId),
                        a = null == e ? void 0 : e.opGroups;
                    this._seatList[n].destroyAllChildren(), this.scheduleOnce((function() {
                        t._seatList[n].removeAllChildren();
                        var i = t.getDirByLocalSeat(n);
                        t._edgeList[n] = A.CardConfig.EdgeToMeld[i], t._distanceList[n] = A.CardConfig.CenterToMeld[i], t._dataList[n] = [];
                        for (var o = n, r = 0; r < (null == a ? void 0 : a.length); r++) {
                            var s = a[r],
                                u = s.opCards;
                            switch (s.opCode) {
                                case g.OPE_RIGHT_CHI:
                                case g.OPE_MIDDLE_CHI:
                                case g.OPE_LEFT_CHI:
                                case g.OPE_PENG:
                                case g.OPE_QIANG_PENG:
                                    t.makeMeldPeng(n, o, s.opCode, u[0], u, !1);
                                    break;
                                case g.OPE_AN_GANG:
                                    t.makeMeldAnGang(n, o, s.opCode, u[0], u, !1);
                                    break;
                                case g.OPE_GANG:
                                    t.makeMeldMingGang(n, o, s.opCode, u[0], u, !1);
                                    break;
                                case g.OPE_BU_GANG:
                                    t.makeMeldPeng(n, o, g.OPE_PENG, u[0], u, !1), t.makeMeldBuGang(n, o, g.OPE_BU_GANG, u[3], u, !1);
                                    break;
                                case g.OPE_LANG_QI:
                                case g.OPE_MING_LOU:
                                    t.makeMeldLangqi(n, o, s.opCode, u[0], u, !1);
                                    break;
                                default:
                                    t.doGameCompFun("onNodeMeldCardCtrReconnect", n, o, s.opCode, u, t._seatList[n], e.seatId)
                            }
                        }
                        t.updatefyLastCardPos(e.seatId, null, {
                            reconnect: !0
                        })
                    }))
                }, r.onShowPickCard = function(e) {
                    this.resetPickCard();
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t].children, a = 0; a < n.length; a++) {
                            var i = n[a].getComponent(G),
                                o = I.getCardValue(i.byte);
                            this.baopai ? o !== I.getCardValue(this.baopai) && o == I.getCardValue(e) && (i.setBlack(!0), this._pickList.push(n[a])) : o == I.getCardValue(e) && (i.setBlack(!0), this._pickList.push(n[a]))
                        }
                }, r.onHidePickCard = function() {
                    this.resetPickCard()
                }, r.resetPickCard = function() {
                    var e = this;
                    this._pickList.forEach((function(t, n, a) {
                        if (t.isValid) {
                            var i = t.getComponent(G);
                            e.baopai ? I.getCardValue(i.byte) !== I.getCardValue(e.baopai) && t.getComponent(G).setBlack(!1) : t.getComponent(G).setBlack(!1)
                        }
                    })), this._pickList = []
                }, r.onShowBaoCard = function(e) {
                    this.resetBaoCard(), this.baopai = e;
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t].children, a = 0; a < n.length; a++) {
                            var i = n[a].getComponent(G);
                            I.getCardValue(i.byte) == I.getCardValue(e) && (i.setRed(!0), this._baoList.push(n[a]))
                        }
                }, r.onHideBaoCard = function() {
                    this.resetBaoCard()
                }, r.resetBaoCard = function() {
                    this.baopai = null, this._baoList.forEach((function(e, t, n) {
                        null != e && e.isValid && e.getComponent(G).setRed(!1)
                    })), this._baoList = []
                }, r.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var a = e.children, i = 0; i < a.length && a[i].active; i++) {
                            var o = a[i].getComponent(G);
                            o.getCardByte() > 0 && (o.checkHandCard(), o.checkHandCardColor())
                        }
                    }))
                }, r.updatefyLastCardPos = function(e, t, n) {
                    var a = this;
                    void 0 === n && (n = null), t != g.OPE_BU_GANG && _.getInstance().isMySelfSeat(e) && this.scheduleOnce((function() {
                        var i = I.getDirFromSeatId(e),
                            o = a.userLastCardPos[i];
                        console.log("手牌位置-- 位置发生变化，通知刷新手牌位置", o), h.Desk.updateListen(E.MELDCARDPOS, {
                            pos: o,
                            opCode: t,
                            param: n
                        })
                    }))
                }, r.onDestroy = function() {}, t
            }(m)).prototype, "nodeCard", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = O)) || b) || b)), r._RF.pop()
        }
    }
}))