System.register("chunks:///_virtual/NodeHandCardCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./FXJSound.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./MajiangUtil.ts", "./CardUtil.ts", "./NodeCardCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.instantiate, u = e.Tween, d = e.tween, c = e.Vec3
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            _ = e.RoomMgr, g = e.ROOM_DATA_TYPE
        }, function(e) {
            m = e.OPCode
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            I = e.GameSound, A = e.FXJSound
        }, function(e) {
            E = e.GameRuleConfig
        }, function(e) {
            v = e.GameViewConfig
        }, function(e) {
            y = e.MajiangUtil
        }, function(e) {
            S = e.CardUtil
        }, function(e) {
            P = e.NodeCardCtr, T = e.CardTag
        }],
        execute: function() {
            var G, O, R, N, b, D;
            o._RF.push({}, "2d9565M3txPHI3NCQcz6sdN", "NodeHandCardCtr", void 0);
            var L = r.ccclass,
                M = r.property,
                U = r.menu;
            e("NodeHandCardCtr", (G = L("NodeHandCardCtr"), O = U("prefab/game/NodeHandCardCtr"), R = M({
                tooltip: "牌节点",
                type: s
            }), G(N = O((D = t((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCard", D, a(t)), t._hostDir = 0, t._numList = null, t._seatList = null, t._seatListTarget = null, t._cardStart = 0, t._spaceLast = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t._cardStatus = v.HandCardStatus.Idle, t._cardListLangqi = null, t._audioIndex = 0, t._handlerAudio = null, t._hasTrunCard = [!1, !1, !1, !1], t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.start = function() {}, o.initData = function() {
                    this._seatList = new Array(E.playerNum), this.resetData()
                }, o.resetData = function() {
                    this._numList = [], this._seatListTarget = [], this._cardListLangqi = [];
                    for (var e = 0; e < E.playerNum; e++) this._numList.push(0), this._seatListTarget.push([]), this._cardListLangqi.push([])
                }, o.getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.updateUserDir = function() {
                    for (var e = this.node.children, t = 0; t < e.length; t++) e[t].setRotationFromEuler(0, 90 * this.getRotationDir(t), 0)
                }, o.initView = function() {
                    var e = v.CardConfig.ScaleHandCard,
                        t = v.CardConfig.Width * e,
                        n = v.CardConfig.Height * e,
                        i = v.CardConfig.Thickness * e,
                        a = v.CardConfig.GroundToHandCard * e,
                        o = .5 * t,
                        r = 14 * t / 2 + o - t / 2;
                    this._cardStart = r, this._spaceLast = o, this._width = t, this._height = n, this._thickness = i, this._groundToCard = a;
                    for (var u = 0; u < E.playerNum; u++) {
                        var d = new s,
                            c = this.getRotationDir(u);
                        d.name = u + "", d.setRotationFromEuler(0, 90 * c, 0), this.node.addChild(d), this._seatList[u] = [];
                        for (var h = 0; h < 14; h++) {
                            var p = h * t - r;
                            14 == h && (p += o);
                            var f = l(this.nodeCard);
                            f.setScale(f.scale.x * e, f.scale.y * e, f.scale.z * e), f.setPosition(p, a, v.CardConfig.CenterToHandCard), f.setRotationFromEuler(90, 0, 0), d.addChild(f), this._seatList[u].push(f)
                        }
                    }
                }, o.resetView = function() {
                    this._hasTrunCard = [!1, !1, !1, !1], this._hostDir = S.getDirFromSeatId(_.getInstance().mySeatId), u.stopAllByTarget(this.node), this._stopSeatAnim();
                    for (var e = 0; e < this._seatList.length; e++)
                        for (var t = this._seatList[e], n = 0; n < t.length; n++) {
                            t[n].active = !1;
                            var i = t[n].getComponent(P);
                            i.setCardTag(T.Default), i.resetCard(), u.stopAllByTarget(t[n]), t[n].setRotationFromEuler(90, 0, 0);
                            var a = t[n].getPosition();
                            t[n].setPosition(a.x, this._groundToCard, v.CardConfig.CenterToHandCard)
                        }
                    this.resetData(), this._cardStatus = v.HandCardStatus.Idle
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onDealCard = function(e) {
                    this.dealCard(e.cardsCount), this.playAnimOfSort()
                }, o.dealCard = function(e) {
                    if (h.isNull(this._hostDir) || this._hostDir < 0 || this._hostDir >= E.playerNum) console.log("NodeHandCardCtr.dealCard", "本家座位号无效");
                    else
                        for (var t = 0; t < this._seatList.length; t++) {
                            for (var n = h.number_valueOf(null == e ? void 0 : e[t]), i = this._seatList[t], a = 0; a < i.length; a++) t == this._hostDir ? i[a].active = !1 : i[a].active = a + 1 <= n, i[a].getComponent(P).setBlack(!1);
                            this._numList[t] = t == this._hostDir ? 0 : n, this.adjustPosition(t), this.doGameCompFun("onHandCardDealCard", i, t)
                        }
                }, o.adjustPosition = function(e, t) {
                    void 0 === t && (t = 0);
                    var n = v.CardConfig.CenterToHandCard + t,
                        i = this._groundToCard;
                    if (this._hasTrunCard[e] && this._seatList[e] && this._seatList[e][0]) {
                        var a = this._seatList[e][0].getPosition();
                        n = a.z, i = a.y
                    }
                    for (var o = this._numList[e], r = this._seatList[e], s = 0; s < o; s++) {
                        var l = -this._cardStart + s * this._width;
                        s == o - 1 && this.turnToMe(e) && (l += this._spaceLast);
                        var d = r[s];
                        u.stopAllByTarget(d), d.setPosition(l, i, n)
                    }
                }, o.turnToMe = function(e) {
                    return (this._numList[e] + this._cardListLangqi[e].length) % 3 == 2
                }, o.playAnimOfSort = function() {
                    var e = this;
                    if (this._cardStatus == v.HandCardStatus.Idle) {
                        for (var t = 0; t < this._seatList.length; t++) this.playAnimOfSortByDir(t, .25, .25);
                        this._cardStatus = v.HandCardStatus.Sort, d(this.node).delay(.51).call((function() {
                            e._cardStatus = v.HandCardStatus.Idle;
                            for (var t = 0; t < e._seatList.length; t++) {
                                for (var n = e._seatList[t], i = 0; i < n.length; i++) n[i].setRotationFromEuler(90, 0, 0);
                                e.adjustPosition(t)
                            }
                            p.dispatch(C.ROTAION_HANDCARD_OVER)
                        })).start(), this._handlerAudio = this.addScheduler(.35, h.handler(this, this.onSchedulerUpdate))
                    }
                }, o.onSchedulerUpdate = function() {
                    this._audioIndex = this._audioIndex + 1, I.getInstance().playEffect(A.GameAdjust), 4 == this._audioIndex && (this.stopScheduler(this._handlerAudio), this._audioIndex = 0)
                }, o.playAnimOfSortByDir = function(e, t, n) {
                    var i = this,
                        a = this._seatListTarget[e];
                    if (a) {
                        for (var o = 0; o < a.length; o++) u.stopAllByTarget(a[o]);
                        this._seatListTarget[e] = [];
                        for (var r = this._numList[e], s = this._seatList[e], l = function(a) {
                                if (a + 1 > r) return "break";
                                var o = new c(s[a].eulerAngles),
                                    l = new c(s[a].getPosition()),
                                    d = new c(l.x, 0, l.z + i._thickness - v.CardConfig.GroundToCard),
                                    p = new c(0, 0, 0);
                                new u(p).by(t, new c(90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(s[a], l, o, d, e, !0)
                                    }
                                }).by(n, new c(-90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(s[a], l, o, d, e, !0)
                                    }
                                }).start(), i._seatListTarget[e].push(p)
                            }, d = 0; d < s.length && "break" !== l(d); d++);
                    }
                }, o.onFenZhang = function(e) {
                    var t = this;
                    e.cards.forEach((function(e, n) {
                        var i = n;
                        t.takeCard(i, e)
                    }))
                }, o.onTakeCard = function(e) {
                    var t = S.getDirFromSeatId(e.seatId);
                    t < 0 || t >= E.playerNum ? console.log("NodeHandCardCtr.onTakeCard", "座位号错误") : this.takeCard(t, e.card, e.seatId)
                }, o.onTakeCardList = function(e) {
                    var t = this,
                        n = S.getDirFromSeatId(e.seatId);
                    n < 0 || n >= E.playerNum ? console.log("NodeHandCardCtr.onTakeCardList", "座位号错误") : h.table_isEmpty(e.cards) ? console.log("NodeHandCardCtr.onTakeCardList", e.cards) : e.cards.forEach((function(i, a, o) {
                        t.takeCard(n, i, e.seatId)
                    }))
                }, o.takeCard = function(e, t, n) {
                    var i;
                    if (this._hostDir != e && this._cardStatus == v.HandCardStatus.Idle) {
                        this.turnToMe(e) && console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常移除", "dir", e);
                        var a = this._seatList[e],
                            o = this._numList[e] + 1;
                        console.log("NodeHandCardCtr.takeCard", "dir", e, "num", o), o > a.length ? console.log("NodeHandCardCtr.takeCard", "手牌数量太多", "dir", e) : (this.doGameCompFun("onHandCardDealCard", a, e, t, n), null != (i = a[o - 1]) && i.isValid ? (a[o - 1].active = !0, this.doGameCompFun("showNodeHandCardByte", n, t) && h.number_valueOf(t) > 0 && (a[o - 1].getComponent(P).setCardByte(t), a[o - 1].setRotationFromEuler(90, 0, 0)), this._numList[e] = o, this.adjustPosition(e)) : console.log("NodeHandCardCtr.takeCard", "手牌数量不匹配", "num", o))
                    }
                }, o.onOutCard = function(e) {
                    var t = S.getDirFromSeatId(e.seatId);
                    if (!this.turnToMe(t)) return console.log("NodeHandCardCtr.onOutCard", "手牌数量异常，可能未正常拿牌", "dir", t), void this.adjustPosition(t);
                    this.outCardAny(t, 1, e)
                }, o.onOutCardRevert = function(e) {
                    var t = S.getDirFromSeatId(e.seatId);
                    this.takeCard(t, e.opCard, e.seatId)
                }, o.hideHandCard = function(e) {
                    if (e) {
                        var t = S.getDirFromSeatId(e.seatId);
                        this.outCardAny(t, e.opCards.length, e)
                    }
                }, o.outCardAny = function(e, t, n) {
                    if (console.log("NodeHandCardCtr.outCardAny", "dir", e, "count", t), console.log("NodeHandCardCtr.outCardAny", "numList", this._numList), this._hostDir != e && this._cardStatus == v.HandCardStatus.Idle) {
                        this.adjustPosition(e);
                        var i = this._cardListLangqi[e].length > 0,
                            a = Math.floor(100 * Math.random());
                        i || a % 2 == 1 || this._hasTrunCard[e] ? this.simpleOutCardAny(e, t) : this.normalOutCardAny(e, t), this.doGameCompFun("updateNodeHandCardList", this._seatList[e], n)
                    }
                }, o.trunCard = function(e) {
                    var t = this,
                        n = S.getDirFromSeatId(_.getInstance().mySeatId);
                    if (e != n) {
                        this._hasTrunCard[e] = !0;
                        for (var i = this._seatList[e], a = i.length, o = function(n) {
                                var o = new c(i[n].eulerAngles),
                                    r = i[n].getPosition(),
                                    s = new c(r.x, r.y, r.z - t._thickness),
                                    l = new c(s.x, 0, s.z + t._thickness - v.CardConfig.GroundToCard),
                                    d = new c(0, 0, 0);
                                new u(d).by(.3, new c(90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(i[n], s, o, l, e, !0)
                                    },
                                    onComplete: function(e) {
                                        n == a - 1 && console.log("恢复手牌---------------翻牌动画执行完成")
                                    }
                                }).start(), t._seatListTarget[e].push(d)
                            }, r = 0; r < a; r++) o(r)
                    }
                }, o._opHandCards = function(e, t) {
                    for (var n = this, i = this._seatList[e], a = null == i ? void 0 : i.length, o = function(e) {
                            if (e + 1 > a) return "break";
                            t[e] && i[e].getComponent(P).setCardByte(t[e]);
                            var o = new c(i[e].eulerAngles),
                                r = new c(i[e].getPosition()),
                                s = v.CardConfig.CenterToHandCard,
                                l = n._groundToCard,
                                d = new c(r.x, l, s),
                                p = new c(0, 0, 0);
                            new u(p).by(.3, new c(-90, 0, 0), {
                                onUpdate: function(t, n) {
                                    h.rotate3DAroundByPositionRotaion(i[e], r, o, d, t, !0)
                                }
                            }).call((function() {
                                u.stopAllByTarget(p)
                            })).start()
                        }, r = 0; r < i.length && "break" !== o(r); r++);
                }, o.simpleOutCardAny = function(e, t) {
                    console.log("NodeHandCardCtr.simpleOutCardAny");
                    var n = this._numList[e];
                    t = Math.min(t, n);
                    for (var i = this._seatList[e], a = 0; a < t; a++) i[n - 1].active = !1, n--;
                    this._numList[e] = n
                }, o.normalOutCardAny = function(e, t) {
                    console.log("NodeHandCardCtr.normalOutCardAny begin", this._numList[e]);
                    var n = this._numList[e],
                        i = t = Math.min(t, n),
                        a = n - 1,
                        o = Math.min(Math.floor(Math.random() * (a + 1 - i) + i), a),
                        r = this._seatList[e],
                        s = r.splice(o - t, t);
                    s.forEach((function(e, t, n) {
                        e.active = !1
                    }));
                    for (var l = 0; l < s.length; l++) r.push(s[l]);
                    n -= t, this._numList[e] = n, console.log("NodeHandCardCtr.normalOutCardAny end", this._numList[e]);
                    for (var u = 0; u < n; u++) {
                        var h = r[u].getPosition(),
                            p = -this._cardStart + u * this._width;
                        u == n - 1 && n % 3 == 2 && (p += this._spaceLast), d(r[u]).to(.06 * t, {
                            position: new c(p, h.y, h.z)
                        }).start()
                    }
                }, o.onBaoTing = function(e) {
                    if (e.seatId != _.getInstance().mySeatId) {
                        var t = S.getDirFromSeatId(e.seatId);
                        switch (e.opCode) {
                            case m.OPE_BAO_JIAO:
                            case m.OPE_TING:
                            case m.OPE_KOU_TING:
                                if (0 == this.doGameCompFun("onNodeHandCardBaoTingCoverHandCard")) return;
                                this.onCoverHandCard(t)
                        }
                    }
                }, o.onPengGang = function(e) {
                    var t = S.getDirFromSeatId(e.seatId);
                    switch (e.opCode) {
                        case m.OPE_RIGHT_CHI:
                        case m.OPE_MIDDLE_CHI:
                        case m.OPE_LEFT_CHI:
                        case m.OPE_PENG:
                        case m.OPE_QIANG_PENG:
                            this.outCardAny(t, 2, e);
                            break;
                        case m.OPE_AN_GANG:
                            this.outCardAny(t, 4, e);
                            break;
                        case m.OPE_GANG:
                            this.outCardAny(t, 3, e);
                            break;
                        case m.OPE_BU_GANG:
                            this.outCardAny(t, 1, e);
                            break;
                        case m.OPE_HUA_GANG:
                            this.outCardAny(t, e.opCards.length, e);
                            break;
                        case m.OPE_LANG_QI:
                        case m.OPE_MING_LOU:
                            this.onMinglou(t, e);
                            break;
                        default:
                            this.doGameCompFun("onNodeHandCardCtrPengGang", e.opCode, t, e)
                    }
                }, o.onMinglou = function(e, t) {
                    this._cardListLangqi[e] = t.opCards, this.outCardAny(e, t.opCards.length, t)
                }, o.onMingPai = function(e, t) {
                    var n = S.getDirFromSeatId(e);
                    this._opHandCards(n, t)
                }, o.onHu = function(e) {
                    var t = S.getDirFromSeatId(e.cardSeatId);
                    this.turnToMe(t) && this.outCardAny(t, 1, e)
                }, o.onChannelOperationResult = function(e) {
                    this.doGameCompFun("onHandCardOperationResult", e)
                }, o.onGameOver = function(e) {
                    var t = this;
                    this.scheduleOnce((function() {
                        t.playAnimOfReset((function() {
                            for (var n = 0; n < (null == e ? void 0 : e.handCards.length); n++) {
                                var i, a = n,
                                    o = e.handCards[n].handCards.slice();
                                if (o.length > 14) return void console.log("NodeHandCardCtr.onGameOver", "手牌数据异常", o);
                                h.isNotNull(e.handCards[n].huCard) && y.deleteHasInList(o, [e.handCards[n].huCard]), (null == (i = t._cardListLangqi[a]) ? void 0 : i.length) > 0 && y.deleteHasInList(o, t._cardListLangqi[a]), console.log("NodeHandCardCtr.onGameOver", o), t._numList[a] = o.length;
                                for (var r = t._seatList[a], s = 0; s < r.length; s++) s < o.length ? (r[s].active = !0, r[s].setRotationFromEuler(90, 0, 0), r[s].getComponent(P).setCardTag(T.HandCard), r[s].getComponent(P).setCardByte(o[s])) : r[s].active = !1;
                                t.adjustPosition(a, .8 * t._thickness)
                            }
                            t.playAnimOfShow()
                        }))
                    }), .3)
                }, o.playAnimOfReset = function(e) {
                    for (var t = !1, n = this, i = 0; i < this._hasTrunCard.length; i++) n._hasTrunCard[i] && function() {
                        t = !0;
                        for (var a = n._seatList[i], o = a.length, r = function(t) {
                                var r = new c(a[t].eulerAngles),
                                    s = a[t].getPosition(),
                                    l = new c(s.x, s.y, s.z + n._thickness),
                                    d = new c(l.x, 0, l.z - v.CardConfig.GroundToCard),
                                    p = new c(0, 0, 0);
                                p.dir = i, new u(p).by(.016, new c(-90, 0, 0), {
                                    onUpdate: function(e, n) {
                                        h.rotate3DAroundByPositionRotaion(a[t], l, r, d, e, !0)
                                    },
                                    onComplete: function(i) {
                                        var a = i.dir;
                                        if (t == o - 1) {
                                            n._hasTrunCard[a] = !1;
                                            var r = !0;
                                            n._hasTrunCard.forEach((function(e, t) {
                                                1 == e && (r = !1)
                                            })), r && e()
                                        }
                                    }
                                }).start()
                            }, s = 0; s < o; s++) r(s)
                    }();
                    t || e()
                }, o.playAnimOfShow = function() {
                    var e = this;
                    if (this._cardStatus == v.HandCardStatus.Idle) {
                        for (var t = this, n = function(n) {
                                for (var i = e._seatList[n], a = e._numList[n], o = function(e) {
                                        if (e + 1 > a) return "break";
                                        var o = new c(i[e].eulerAngles),
                                            r = new c(i[e].getPosition()),
                                            s = new c(r.x, 0, r.z - v.CardConfig.GroundToCard),
                                            l = new c(0, 0, 0);
                                        new u(l).by(.3, new c(-90, 0, 0), {
                                            onUpdate: function(t, n) {
                                                h.rotate3DAroundByPositionRotaion(i[e], r, o, s, t, !0)
                                            }
                                        }).start(), t._seatListTarget[n].push(l)
                                    }, r = 0; r < i.length && "break" !== o(r); r++);
                            }, i = 0; i < this._seatList.length; i++) n(i);
                        this._cardStatus = v.HandCardStatus.Show, d(this.node).delay(.31).call((function() {
                            e._cardStatus = v.HandCardStatus.Over
                        })).start()
                    }
                }, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView();
                    var n = [0, 0, 0, 0];
                    e.playerList.forEach((function(e, i, a) {
                        var o = S.getDirFromSeatId(e.seatId);
                        n[o] = e.handCards.length, e.opGroups.forEach((function(e, n, i) {
                            e.opCode != m.OPE_LANG_QI && e.opCode != m.OPE_MING_LOU || (t._cardListLangqi[o] = e.opCards)
                        })), h.number_valueOf(null == e ? void 0 : e.huCard) > 0 && --n[o]
                    })), this.dealCard(n), this.checkHuPaiTrunCard(), this.checkGiveUp();
                    for (var i = 0; i < this._seatList.length; i++) this.adjustPosition(i);
                    e.playerList.forEach((function(e, n, i) {
                        t.doGameCompFun("onNodeHandCardCtrReconnect", e)
                    }))
                }, o.checkGiveUp = function() {
                    var e = this,
                        t = _.getInstance().getGameInfoByTag(g.RECONNECT_GIVEUP_INFO);
                    (null == t ? void 0 : t.length) > 0 && t.forEach((function(t) {
                        e.onGiveUpResult({
                            seatId: t
                        })
                    }))
                }, o.checkHuPaiTrunCard = function() {
                    var e = this;
                    if (this.doGameCompFun("checkHuPaiTrunCard")) {
                        var t = _.getInstance().getGameInfoByTag(g.RECONNECT_HU_INFO);
                        (null == t ? void 0 : t.length) > 0 && t.forEach((function(t) {
                            var n = S.getDirFromSeatId(t.seatId);
                            e.trunCard(n)
                        }))
                    }
                }, o.onGameRealTimeSettle = function(e) {
                    this.doGameCompFun("onNodeHandCardSettle", e)
                }, o.onGiveUpResult = function(e) {
                    var t = S.getDirFromSeatId(e.seatId);
                    this.onCoverHandCard(t)
                }, o.onCoverHandCard = function(e) {
                    this.adjustPosition(e), this.trunCard(e)
                }, o._stopSeatAnim = function() {
                    for (var e = 0; e < this._seatListTarget.length; e++)
                        for (var t = this._seatListTarget[e], n = 0; n < t.length; n++) u.stopAllByTarget(t[n]);
                    this._seatListTarget = [
                        [],
                        [],
                        [],
                        []
                    ]
                }, o.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var i = 0; i < e.length && e[i].active; i++) {
                            var a = e[i].getComponent(P);
                            a.getCardByte() > 0 && (a.checkHandCard(), a.checkHandCardColor())
                        }
                    }))
                }, o.onDestroy = function() {
                    this._stopSeatAnim()
                }, t
            }(f)).prototype, "nodeCard", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = b)) || N) || N)), o._RF.pop()
        }
    }
}))