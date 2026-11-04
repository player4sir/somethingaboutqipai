System.register("chunks:///_virtual/NodeMeldCardCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./NodeCardCtr.ts"], (function(e) {
    var t, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, a = e.initializerDefineProperty, o = e.assertThisInitialized
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Node, u = e.instantiate, d = e.Vec3
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            _ = e.RoomMgr
        }, function(e) {
            g = e.OPCode
        }, function(e) {
            m = e.FXJEvent
        }, function(e) {
            C = e.GameEvent, I = e.GameEventTag
        }, function(e) {
            A = e.GameRuleConfig
        }, function(e) {
            E = e.GameViewConfig
        }, function(e) {
            v = e.CardUtil
        }, function(e) {
            y = e.NodeCardCtr, S = e.CardTag
        }],
        execute: function() {
            var P, T, G, O, R, N;
            r._RF.push({}, "057889IyxlL36fxEZdr/9kN", "NodeMeldCardCtr", void 0);
            var b = s.ccclass,
                D = s.property,
                L = s.menu;
            e("NodeMeldCardCtr", (P = b("NodeMeldCardCtr"), T = L("prefab/game/NodeMeldCardCtr"), G = D({
                tooltip: "牌节点",
                type: l
            }), P(O = T((N = t((R = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, a(t, "nodeCard", N, o(t)), t._hostDir = 0, t._seatList = null, t._dataList = null, t._edgeList = null, t._distanceList = null, t._scale = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t._pickList = null, t._baoList = [], t.baopai = void 0, t._lastCardPos = null, t.userLastCardPos = [], t
                }
                i(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, r.start = function() {}, r.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, r.initData = function() {
                    this._seatList = new Array(A.playerNum), this._dataList = [], this._edgeList = [], this._distanceList = [];
                    for (var e = 0; e < A.playerNum; e++) this._dataList.push([]), this._edgeList.push(0), this._distanceList.push(0);
                    this._pickList = [], this._baoList = []
                }, r.getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return c.isNull(t) && (t = e), t
                }, r.updateUserDir = function(e) {
                    if (void 0 === e && (e = !0), null != this._seatList) {
                        this._hostDir = v.getDirFromSeatId(_.getInstance().mySeatId);
                        for (var t = this._seatList.length, n = 0; n < t; n++) this._seatList[n].setRotationFromEuler(0, 90 * this.getRotationDir(n), 0);
                        if (e)
                            for (var i = 0, a = 0; a < A.playerNum; a++) i = this.getDirByLocalSeat(a), this._edgeList[a] = E.CardConfig.EdgeToMeld[i], this._distanceList[a] = E.CardConfig.CenterToMeld[i]
                    }
                }, r.initView = function() {
                    this.doGameCompFun("preloaderRes");
                    var e = E.CardConfig.ScaleMeldCard,
                        t = E.CardConfig.Width * e,
                        n = E.CardConfig.Height * e,
                        i = E.CardConfig.Thickness * e,
                        a = E.CardConfig.GroundToCard * e;
                    this._scale = e, this._width = t, this._height = n, this._thickness = i, this._groundToCard = a;
                    for (var o = this._seatList.length, r = 0; r < o; r++) {
                        var s = new l;
                        s.name = r + "", this.node.addChild(s), this._seatList[r] = s, s.setRotationFromEuler(0, 90 * this.getRotationDir(r), 0)
                    }
                }, r.getDirByLocalSeat = function(e) {
                    var t = this.doGameCompFun("getDirByLocalSeat", e);
                    return c.isNull(t) && (t = e), t
                }, r.resetView = function() {
                    this._lastCardPos = null, this.userLastCardPos = [], this._hostDir = v.getDirFromSeatId(_.getInstance().mySeatId);
                    for (var e = 0; e < A.playerNum; e++) {
                        var t = this.getDirByLocalSeat(e);
                        this._edgeList[e] = E.CardConfig.EdgeToMeld[t], this._distanceList[e] = E.CardConfig.CenterToMeld[t]
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
                    var t = v.getDirFromSeatId(e.seatId),
                        n = v.getDirFromSeatId(e.cardSeatId);
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
                }, r.makeMeldPeng = function(e, t, n, i, a, o) {
                    for (var r = v.calculatePlayerSeat(_.getInstance().mySeatId, v.getSeatIdFromDir(t)), s = this._scale, l = this._width, h = this._height, f = this._groundToCard, I = this._edgeList[e], A = this._distanceList[e], P = null, T = null, G = null, O = 0; O < 3; O++) {
                        (G = u(this.nodeCard)).setScale(G.scale.x * s, G.scale.y * s, G.scale.z * s), G.setPosition(I - .5 * l, f, A - .5 * h);
                        var R = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, O, v.getSeatIdFromDir(e), a[2 - O]), 0);
                        if (G.setRotationFromEuler(0, 0, R), I -= l + E.CardConfig.SpaceMeldCard, G.active = !0, this._seatList[e].addChild(G), G.getComponent(y).setCardTag(S.HandCard), G.getComponent(y).setMeldCardByte(a[2 - O], n), 1 == O) {
                            T = G;
                            var N = G.getPosition();
                            P = new d(N.x, N.y + this._thickness, N.z)
                        }
                        e != t && (n == g.OPE_RIGHT_CHI || n == g.OPE_MIDDLE_CHI || n == g.OPE_LEFT_CHI ? i == G.getComponent(y).getCardByte() && p.dispatch(C.VIEW_ADD_CARD_POINT, G.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r) : 1 == O && (new d, p.dispatch(C.VIEW_ADD_CARD_POINT, G.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r)))
                    }
                    if (G.name = "goup_last", this.userLastCardPos[e] = G.getPosition(), this._edgeList[e] = I - .5 * l, this._dataList[e].push({
                            opCard: i,
                            opCards: a,
                            opCode: n,
                            buPos: P
                        }), c.isNotNull(T) && o) {
                        var b = {
                            seatId: v.getSeatIdFromDir(e),
                            aniType: E.AnimType.Peng,
                            pos: T.getWorldPosition()
                        };
                        p.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, b)
                    }
                    this.doGameCompFun("onPengGangResult", n, a, e)
                }, r.makeMeldAnPeng = function(e, t, n, i, a, o) {
                    for (var r = v.calculatePlayerSeat(_.getInstance().mySeatId, v.getSeatIdFromDir(t)), s = this._scale, l = this._width, h = this._height, f = this._groundToCard, g = this._edgeList[e], I = this._distanceList[e], A = null, P = null, T = 0; T < 3; T++)(P = u(this.nodeCard)).setScale(P.scale.x * s, P.scale.y * s, P.scale.z * s), P.setPosition(g - .5 * l, f, I - .5 * h), g -= l + E.CardConfig.SpaceMeldCard, 1 == T ? (P.setRotationFromEuler(0, 0, 180), e != t && p.dispatch(C.VIEW_ADD_CARD_POINT, P.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r)) : P.setRotationFromEuler(0, 0, 0), P.active = !0, this._seatList[e].addChild(P), P.getComponent(y).setCardTag(S.HandCard), P.getComponent(y).setMeldCardByte(a[2 - T], n), 1 == T && (A = P);
                    if (P.name = "goup_last", this.userLastCardPos[e] = P.getPosition(), this._edgeList[e] = g - .5 * l, this._dataList[e].push({
                            opCard: i,
                            opCards: a,
                            opCode: n,
                            buPos: null
                        }), c.isNotNull(A) && o) {
                        var G = {
                            seatId: v.getSeatIdFromDir(e),
                            aniType: E.AnimType.Peng,
                            pos: A.getWorldPosition()
                        };
                        p.dispatch(m.VIEW_OUT_CARD_ANI_PLAY, G)
                    }
                    this.doGameCompFun("onPengGangResult", n, a, e)
                }, r.makeMeldBuGang = function(e, t, i, a, o, r) {
                    for (var s = this, l = this._scale, d = this._dataList[e], h = 0; h < d.length; h++) {
                        var p = d[h];
                        if ((p.opCode == g.OPE_PENG || p.opCode == g.OPE_QIANG_PENG) && c.isNotNull(p.buPos)) {
                            var f = function() {
                                var t = {};
                                o.forEach((function(e, n, i) {
                                    t[e] = !0
                                }));
                                var n = !0;
                                if (p.opCards.forEach((function(e, i, a) {
                                        t[e] || (n = !1)
                                    })), n) {
                                    s._seatList[e].children.forEach((function(e) {
                                        o.includes(e.getComponent(y).getCardByte()) && "goup_last" == e.name && (e.name = "majiangzi")
                                    })), p.opCards.push(a);
                                    var r = u(s.nodeCard);
                                    return r.setScale(r.scale.x * l, r.scale.y * l, r.scale.z * l), r.setPosition(p.buPos), r.setRotationFromEuler(0, 0, 0), r.active = !0, r.name = "goup_last", s._seatList[e].addChild(r), r.getComponent(y).setCardTag(S.HandCard), r.getComponent(y).setMeldCardByte(a, i), p.opCode = g.OPE_BU_GANG, {
                                        v: void 0
                                    }
                                }
                            }();
                            if ("object" == n(f)) return f.v
                        }
                    }
                }, r.makeMeldZhuiGang = function(e, t, n, i, a, o) {
                    v.calculatePlayerPosition(v.getSeatIdFromDir(e), v.getSeatIdFromDir(t));
                    for (var r = this._scale, s = this._width, l = this._height, d = this._groundToCard, h = this._edgeList[e], p = this._distanceList[e], f = a.length, _ = [], g = null, m = null, C = 0; C < f; C++)
                        if (g = v.getCardValueLocal(a[C]), !this.doGameCompFun("checkSpecialGangMultCard", n, a) || !_.includes(g)) {
                            _.push(g), (m = u(this.nodeCard)).setScale(m.scale.x * r, m.scale.y * r, m.scale.z * r), m.setPosition(h - .5 * s, d, p - .5 * l);
                            var I = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, C, v.getSeatIdFromDir(e), a[2 - C]), 0);
                            m.setRotationFromEuler(0, 0, I), h -= s + E.CardConfig.SpaceMeldCard, m.active = !0, this._seatList[e].addChild(m), m.getComponent(y).setCardTag(S.HandCard), m.getComponent(y).setMeldCardByte(a[C], n)
                        } m.name = "goup_last", this.userLastCardPos[e] = m.getPosition(), this._edgeList[e] = h - .5 * s, this._dataList[e].push({
                        opCard: i,
                        opCards: a,
                        opCode: n,
                        buPos: null
                    })
                }, r.makeMeldMingGang = function(e, t, n, i, a, o) {
                    for (var r = v.calculatePlayerSeat(_.getInstance().mySeatId, v.getSeatIdFromDir(t)), s = this._scale, l = this._width, c = this._height, h = this._groundToCard, f = this._edgeList[e], g = this._distanceList[e], m = null, I = 0; I < 4; I++)(m = u(this.nodeCard)).setScale(m.scale.x * s, m.scale.y * s, m.scale.z * s), m.setPosition(f - .5 * l, h, g - .5 * c), m.setRotationFromEuler(0, 0, 0), f -= l + E.CardConfig.SpaceMeldCard, m.active = !0, this._seatList[e].addChild(m), m.getComponent(y).setCardTag(S.HandCard), m.getComponent(y).setMeldCardByte(a[I], n), e != t && 2 == I && p.dispatch(C.VIEW_ADD_CARD_POINT, m.getWorldPosition().add(new d(0, this._thickness - this._groundToCard, 0)), r);
                    m.name = "goup_last", this.userLastCardPos[e] = m.getPosition(), this._edgeList[e] = f - .5 * l, this._dataList[e].push({
                        opCard: i,
                        opCards: a,
                        opCode: n
                    }), this.doGameCompFun("onPengGangResult", n, a, e)
                }, r.makeMeldAnGang = function(e, t, n, i, a, o) {
                    a = this.doGameCompFun("orderAngCards", a) || a;
                    for (var r = this._scale, s = this._width, l = this._height, d = this._groundToCard, h = this._edgeList[e], p = this._distanceList[e], f = null, _ = 0; _ < 4; _++) {
                        (f = u(this.nodeCard)).setScale(f.scale.x * r, f.scale.y * r, f.scale.z * r), 2 == _ ? (h += s + E.CardConfig.SpaceMeldCard, f.setPosition(h - .5 * s, d + this._thickness, p - .5 * l)) : f.setPosition(h - .5 * s, d, p - .5 * l);
                        var g = c.number_valueOf(this.doGameCompFun("checkOpCardRotation", n, _, v.getSeatIdFromDir(e), a[_]), -1);
                        g >= 0 ? f.setRotationFromEuler(0, 0, g) : 2 == _ ? f.setRotationFromEuler(0, 0, 0) : f.setRotationFromEuler(0, 0, 180), f.active = !0, this._seatList[e].addChild(f), f.getComponent(y).setCardTag(S.HandCard), f.getComponent(y).setMeldCardByte(a[_], n), h -= s + E.CardConfig.SpaceMeldCard
                    }
                    f.name = "goup_last", this.userLastCardPos[e] = f.getPosition(), this._edgeList[e] = h - .5 * s, this._dataList[e].push({
                        opCard: i,
                        opCards: a,
                        opCode: n
                    })
                }, r.getMingPaiRotation = function(e, t, n) {
                    var i = this.doGameCompFun("getMingPaiRotation", e, t);
                    return c.isNull(i) ? n : i
                }, r.makeMeldLangqi = function(e, t, n, i, a, o) {
                    for (var r = this._scale, s = this._width, l = this._height, d = this._groundToCard, c = this._edgeList[e], h = this._distanceList[e], p = 0, f = a.length, _ = null, g = 0; g < f; g++) {
                        p = a[f - 1 - g], (_ = u(this.nodeCard)).setScale(_.scale.x * r, _.scale.y * r, _.scale.z * r), _.setPosition(c - .5 * s, d, h - .5 * l);
                        var m = this.getMingPaiRotation(a, p, 0);
                        _.setRotationFromEuler(m, 0, 0), _.getComponent(y).setRotationFromEuler({
                            x: m,
                            y: 0,
                            z: 0
                        }), c -= s + E.CardConfig.SpaceMeldCard, _.active = !0, this._seatList[e].addChild(_), _.getComponent(y).setCardTag(S.HandCard), _.getComponent(y).setMeldCardByte(p, n)
                    }
                    _.name = "goup_last", this.userLastCardPos[e] = _.getPosition(), this._edgeList[e] = c - .5 * s, this._dataList[e].push({
                        opCard: i,
                        opCards: a,
                        opCode: n
                    })
                }, r.onGameOver = function(e) {
                    this.resetBaoCard();
                    var t = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this._seatList.forEach((function(e, n, i) {
                        var a;
                        null == e || null == (a = e.children) || a.forEach((function(e) {
                            0 == (t = e.getComponent(y).getRotationFromEuler()).x && 0 == t.y && 0 == t.z || e.setRotationFromEuler(0, 0, 0)
                        }))
                    }))
                }, r.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), e.playerList.forEach((function(e, n, i) {
                        t.onRefreshOpGroupsCard(e)
                    })), this.baopai && this.onShowBaoCard(this.baopai)
                }, r.onRefreshOpGroupsCard = function(e) {
                    var t = this,
                        n = v.getDirFromSeatId(e.seatId),
                        i = null == e ? void 0 : e.opGroups;
                    this._seatList[n].destroyAllChildren(), this.scheduleOnce((function() {
                        t._seatList[n].removeAllChildren();
                        var a = t.getDirByLocalSeat(n);
                        t._edgeList[n] = E.CardConfig.EdgeToMeld[a], t._distanceList[n] = E.CardConfig.CenterToMeld[a], t._dataList[n] = [];
                        for (var o = n, r = 0; r < (null == i ? void 0 : i.length); r++) {
                            var s = i[r],
                                l = s.opCards;
                            switch (s.opCode) {
                                case g.OPE_RIGHT_CHI:
                                case g.OPE_MIDDLE_CHI:
                                case g.OPE_LEFT_CHI:
                                case g.OPE_PENG:
                                case g.OPE_QIANG_PENG:
                                    t.makeMeldPeng(n, o, s.opCode, l[0], l, !1);
                                    break;
                                case g.OPE_AN_GANG:
                                    t.makeMeldAnGang(n, o, s.opCode, l[0], l, !1);
                                    break;
                                case g.OPE_GANG:
                                    t.makeMeldMingGang(n, o, s.opCode, l[0], l, !1);
                                    break;
                                case g.OPE_BU_GANG:
                                    t.makeMeldPeng(n, o, g.OPE_PENG, l[0], l, !1), t.makeMeldBuGang(n, o, g.OPE_BU_GANG, l[3], l, !1);
                                    break;
                                case g.OPE_LANG_QI:
                                case g.OPE_MING_LOU:
                                    t.makeMeldLangqi(n, o, s.opCode, l[0], l, !1);
                                    break;
                                default:
                                    t.doGameCompFun("onNodeMeldCardCtrReconnect", n, o, s.opCode, l, t._seatList[n], e.seatId)
                            }
                        }
                        t.updatefyLastCardPos(e.seatId, null, {
                            reconnect: !0
                        })
                    }))
                }, r.onShowPickCard = function(e) {
                    this.resetPickCard();
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t].children, i = 0; i < n.length; i++) {
                            var a = n[i].getComponent(y),
                                o = v.getCardValue(a.byte);
                            this.baopai ? o !== v.getCardValue(this.baopai) && o == v.getCardValue(e) && (a.setBlack(!0), this._pickList.push(n[i])) : o == v.getCardValue(e) && (a.setBlack(!0), this._pickList.push(n[i]))
                        }
                }, r.onHidePickCard = function() {
                    this.resetPickCard()
                }, r.resetPickCard = function() {
                    var e = this;
                    this._pickList.forEach((function(t, n, i) {
                        if (t.isValid) {
                            var a = t.getComponent(y);
                            e.baopai ? v.getCardValue(a.byte) !== v.getCardValue(e.baopai) && t.getComponent(y).setBlack(!1) : t.getComponent(y).setBlack(!1)
                        }
                    })), this._pickList = []
                }, r.onShowBaoCard = function(e) {
                    this.resetBaoCard(), this.baopai = e;
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t].children, i = 0; i < n.length; i++) {
                            var a = n[i].getComponent(y);
                            v.getCardValue(a.byte) == v.getCardValue(e) && (a.setRed(!0), this._baoList.push(n[i]))
                        }
                }, r.onHideBaoCard = function() {
                    this.resetBaoCard()
                }, r.resetBaoCard = function() {
                    this.baopai = null, this._baoList.forEach((function(e, t, n) {
                        null != e && e.isValid && e.getComponent(y).setRed(!1)
                    })), this._baoList = []
                }, r.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var i = e.children, a = 0; a < i.length && i[a].active; a++) {
                            var o = i[a].getComponent(y);
                            o.getCardByte() > 0 && (o.checkHandCard(), o.checkHandCardColor())
                        }
                    }))
                }, r.updatefyLastCardPos = function(e, t, n) {
                    var i = this;
                    void 0 === n && (n = null), t != g.OPE_BU_GANG && _.getInstance().isMySelfSeat(e) && this.scheduleOnce((function() {
                        var a = v.getDirFromSeatId(e),
                            o = i.userLastCardPos[a];
                        console.log("手牌位置-- 位置发生变化，通知刷新手牌位置", o), h.Desk.updateListen(I.MELDCARDPOS, {
                            pos: o,
                            opCode: t,
                            param: n
                        })
                    }))
                }, r.onDestroy = function() {}, t
            }(f)).prototype, "nodeCard", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = R)) || O) || O)), r._RF.pop()
        }
    }
}))