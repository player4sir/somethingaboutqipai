System.register("chunks:///_virtual/NodeHandCardCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./FXJSound3.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./MajiangUtil3.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.instantiate, l = e.Tween, d = e.tween, c = e.Vec3
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.RoomMgr, g = e.ROOM_DATA_TYPE
        }, function(e) {
            f = e.OPCode
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            E = e.GameSound, S = e.FXJSound
        }, function(e) {
            A = e.GameRuleConfig
        }, function(e) {
            I = e.GameViewConfig
        }, function(e) {
            G = e.MajiangUtil
        }, function(e) {
            y = e.CardUtil
        }, function(e) {
            v = e.NodeCardCtr, P = e.CardTag
        }],
        execute: function() {
            var T, b, O, R, M, N;
            o._RF.push({}, "3b1f9vDns1DCZo0/WKqzFjB", "NodeHandCardCtr", void 0);
            var U = r.ccclass,
                D = r.property,
                L = r.menu;
            e("NodeHandCardCtr", (T = U("NodeHandCardCtr"), b = L("prefab/subGame/mj/NodeHandCardCtr"), O = D({
                tooltip: "牌节点",
                type: s
            }), T(R = b((N = t((M = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCard", N, i(t)), t._hostDir = 0, t._numList = null, t._seatList = null, t._seatListTarget = null, t._cardStart = 0, t._spaceLast = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t._cardStatus = I.HandCardStatus.Idle, t._cardListLangqi = null, t._audioIndex = 0, t._handlerAudio = null, t._hasTrunCard = [!1, !1, !1, !1], t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.start = function() {}, o.initData = function() {
                    this._seatList = new Array(A.playerNum), this.resetData()
                }, o.resetData = function() {
                    this._numList = [], this._seatListTarget = [], this._cardListLangqi = [];
                    for (var e = 0; e < A.playerNum; e++) this._numList.push(0), this._seatListTarget.push([]), this._cardListLangqi.push([])
                }, o.getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.updateUserDir = function() {
                    for (var e = this.node.children, t = 0; t < e.length; t++) e[t].setRotationFromEuler(0, 90 * this.getRotationDir(t), 0)
                }, o.initView = function() {
                    var e = I.CardConfig.ScaleHandCard,
                        t = I.CardConfig.Width * e,
                        n = I.CardConfig.Height * e,
                        a = I.CardConfig.Thickness * e,
                        i = I.CardConfig.GroundToHandCard * e,
                        o = .5 * t,
                        r = 14 * t / 2 + o - t / 2;
                    this._cardStart = r, this._spaceLast = o, this._width = t, this._height = n, this._thickness = a, this._groundToCard = i;
                    for (var l = 0; l < A.playerNum; l++) {
                        var d = new s,
                            c = this.getRotationDir(l);
                        d.name = l + "", d.setRotationFromEuler(0, 90 * c, 0), this.node.addChild(d), this._seatList[l] = [];
                        for (var h = 0; h < 14; h++) {
                            var p = h * t - r;
                            14 == h && (p += o);
                            var m = u(this.nodeCard);
                            m.setScale(m.scale.x * e, m.scale.y * e, m.scale.z * e), m.setPosition(p, i, I.CardConfig.CenterToHandCard), m.setRotationFromEuler(90, 0, 0), d.addChild(m), this._seatList[l].push(m)
                        }
                    }
                }, o.resetView = function() {
                    this._hasTrunCard = [!1, !1, !1, !1], this._hostDir = y.getDirFromSeatId(_.getInstance().mySeatId), l.stopAllByTarget(this.node), this._stopSeatAnim();
                    for (var e = 0; e < this._seatList.length; e++)
                        for (var t = this._seatList[e], n = 0; n < t.length; n++) {
                            t[n].active = !1;
                            var a = t[n].getComponent(v);
                            a.setCardTag(P.Default), a.resetCard(), l.stopAllByTarget(t[n]), t[n].setRotationFromEuler(90, 0, 0);
                            var i = t[n].getPosition();
                            t[n].setPosition(i.x, this._groundToCard, I.CardConfig.CenterToHandCard)
                        }
                    this.resetData(), this._cardStatus = I.HandCardStatus.Idle
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onDealCard = function(e) {
                    this.dealCard(e.cardsCount), this.playAnimOfSort()
                }, o.dealCard = function(e) {
                    if (h.isNull(this._hostDir) || this._hostDir < 0 || this._hostDir >= A.playerNum) console.log("NodeHandCardCtr.dealCard", "本家座位号无效");
                    else
                        for (var t = 0; t < this._seatList.length; t++) {
                            for (var n = e[t], a = this._seatList[t], i = 0; i < a.length; i++) t == this._hostDir ? a[i].active = !1 : a[i].active = i + 1 <= n;
                            this._numList[t] = t == this._hostDir ? 0 : n, this.adjustPosition(t)
                        }
                }, o.adjustPosition = function(e, t) {
                    void 0 === t && (t = 0);
                    var n = I.CardConfig.CenterToHandCard + t,
                        a = this._groundToCard;
                    if (this._hasTrunCard[e] && this._seatList[e] && this._seatList[e][0]) {
                        var i = this._seatList[e][0].getPosition();
                        n = i.z, a = i.y
                    }
                    for (var o = this._numList[e], r = this._seatList[e], s = 0; s < o; s++) {
                        var u = -this._cardStart + s * this._width;
                        s == o - 1 && this.turnToMe(e) && (u += this._spaceLast);
                        var d = r[s];
                        l.stopAllByTarget(d), d.setPosition(u, a, n)
                    }
                }, o.turnToMe = function(e) {
                    return (this._numList[e] + this._cardListLangqi[e].length) % 3 == 2
                }, o.playAnimOfSort = function() {
                    var e = this;
                    if (this._cardStatus == I.HandCardStatus.Idle) {
                        for (var t = 0; t < this._seatList.length; t++) this.playAnimOfSortByDir(t, .25, .25);
                        this._cardStatus = I.HandCardStatus.Sort, d(this.node).delay(.51).call((function() {
                            e._cardStatus = I.HandCardStatus.Idle;
                            for (var t = 0; t < e._seatList.length; t++) {
                                for (var n = e._seatList[t], a = 0; a < n.length; a++) n[a].setRotationFromEuler(90, 0, 0);
                                e.adjustPosition(t)
                            }
                            p.dispatch(C.ROTAION_HANDCARD_OVER)
                        })).start(), this._handlerAudio = this.addScheduler(.35, h.handler(this, this.onSchedulerUpdate))
                    }
                }, o.onSchedulerUpdate = function() {
                    this._audioIndex = this._audioIndex + 1, E.getInstance().playEffect(S.GameAdjust), 4 == this._audioIndex && (this.stopScheduler(this._handlerAudio), this._audioIndex = 0)
                }, o.playAnimOfSortByDir = function(e, t, n) {
                    var a = this,
                        i = this._seatListTarget[e];
                    if (i) {
                        for (var o = 0; o < i.length; o++) l.stopAllByTarget(i[o]);
                        this._seatListTarget[e] = [];
                        for (var r = this._numList[e], s = this._seatList[e], u = function(i) {
                                if (i + 1 > r) return "break";
                                var o = new c(s[i].eulerAngles),
                                    u = new c(s[i].getPosition()),
                                    d = new c(u.x, 0, u.z + a._thickness - I.CardConfig.GroundToCard),
                                    p = new c(0, 0, 0);
                                new l(p).by(t, new c(90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(s[i], u, o, d, e, !0)
                                    }
                                }).by(n, new c(-90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(s[i], u, o, d, e, !0)
                                    }
                                }).start(), a._seatListTarget[e].push(p)
                            }, d = 0; d < s.length && "break" !== u(d); d++);
                    }
                }, o.onFenZhang = function(e) {
                    var t = this;
                    e.cards.forEach((function(n, a) {
                        var i = a;
                        t.takeCard(i, n, e.seatId)
                    }))
                }, o.onTakeCard = function(e) {
                    var t = y.getDirFromSeatId(e.seatId);
                    t < 0 || t >= A.playerNum ? console.log("NodeHandCardCtr.onTakeCard", "座位号错误") : this.takeCard(t, e.card, e.seatId)
                }, o.onTakeCardList = function(e) {
                    var t = this,
                        n = y.getDirFromSeatId(e.seatId);
                    n < 0 || n >= A.playerNum ? console.log("NodeHandCardCtr.onTakeCardList", "座位号错误") : h.table_isEmpty(e.cards) ? console.log("NodeHandCardCtr.onTakeCardList", e.cards) : e.cards.forEach((function(a, i, o) {
                        t.takeCard(n, a, e.seatId)
                    }))
                }, o.takeCard = function(e, t, n) {
                    var a;
                    if (this._hostDir != e && this._cardStatus == I.HandCardStatus.Idle) {
                        this.turnToMe(e) && console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常移除", "dir", e);
                        var i = this._seatList[e],
                            o = this._numList[e] + 1;
                        console.log("NodeHandCardCtr.takeCard", "dir", e, "num", o), o > i.length ? console.log("NodeHandCardCtr.takeCard", "手牌数量太多", "dir", e) : null != (a = i[o - 1]) && a.isValid ? (i[o - 1].active = !0, this.doGameCompFun("showNodeHandCardByte", n) && h.number_valueOf(t) > 0 && (i[o - 1].getComponent(v).setCardByte(t), i[o - 1].setRotationFromEuler(90, 0, 0)), this._numList[e] = o, this.adjustPosition(e)) : console.log("NodeHandCardCtr.takeCard", "手牌数量不匹配", "num", o)
                    }
                }, o.onOutCard = function(e) {
                    var t = y.getDirFromSeatId(e.seatId);
                    if (!this.turnToMe(t)) return console.log("NodeHandCardCtr.onOutCard", "手牌数量异常，可能未正常拿牌", "dir", t), void this.adjustPosition(t);
                    this.outCardAny(t, 1, e)
                }, o.onOutCardRevert = function(e) {
                    var t = y.getDirFromSeatId(e.seatId);
                    this.takeCard(t, e.opCard, e.seatId)
                }, o.hideHandCard = function(e) {
                    if (e) {
                        var t = y.getDirFromSeatId(e.seatId);
                        this.outCardAny(t, e.opCards.length, e)
                    }
                }, o.outCardAny = function(e, t, n) {
                    if (console.log("NodeHandCardCtr.outCardAny", "dir", e, "count", t), console.log("NodeHandCardCtr.outCardAny", "numList", this._numList), this._hostDir != e && this._cardStatus == I.HandCardStatus.Idle) {
                        this.adjustPosition(e);
                        var a = this._cardListLangqi[e].length > 0,
                            i = Math.floor(100 * Math.random());
                        a || i % 2 == 1 || this._hasTrunCard[e] ? this.simpleOutCardAny(e, t) : this.normalOutCardAny(e, t), this.doGameCompFun("updateNodeHandCardList", this._seatList[e], n)
                    }
                }, o.trunCard = function(e) {
                    var t = this,
                        n = y.getDirFromSeatId(_.getInstance().mySeatId);
                    if (e != n) {
                        this._hasTrunCard[e] = !0;
                        for (var a = this._seatList[e], i = a.length, o = function(n) {
                                var o = new c(a[n].eulerAngles),
                                    r = a[n].getPosition(),
                                    s = new c(r.x, r.y, r.z - t._thickness),
                                    u = new c(s.x, 0, s.z + t._thickness - I.CardConfig.GroundToCard),
                                    d = new c(0, 0, 0);
                                new l(d).by(.3, new c(90, 0, 0), {
                                    onUpdate: function(e, t) {
                                        h.rotate3DAroundByPositionRotaion(a[n], s, o, u, e, !0)
                                    },
                                    onComplete: function(e) {
                                        n == i - 1 && console.log("恢复手牌---------------翻牌动画执行完成")
                                    }
                                }).start(), t._seatListTarget[e].push(d)
                            }, r = 0; r < i; r++) o(r)
                    }
                }, o._opHandCards = function(e, t) {
                    for (var n = this, a = this._seatList[e], i = null == a ? void 0 : a.length, o = function(e) {
                            if (e + 1 > i) return "break";
                            t[e] && a[e].getComponent(v).setCardByte(t[e]);
                            var o = new c(a[e].eulerAngles),
                                r = new c(a[e].getPosition()),
                                s = I.CardConfig.CenterToHandCard,
                                u = n._groundToCard,
                                d = new c(r.x, u, s),
                                p = new c(0, 0, 0);
                            new l(p).by(.3, new c(-90, 0, 0), {
                                onUpdate: function(t, n) {
                                    h.rotate3DAroundByPositionRotaion(a[e], r, o, d, t, !0)
                                }
                            }).call((function() {
                                l.stopAllByTarget(p)
                            })).start()
                        }, r = 0; r < a.length && "break" !== o(r); r++);
                }, o.simpleOutCardAny = function(e, t) {
                    console.log("NodeHandCardCtr.simpleOutCardAny");
                    var n = this._numList[e];
                    t = Math.min(t, n);
                    for (var a = this._seatList[e], i = 0; i < t; i++) a[n - 1].active = !1, n--;
                    this._numList[e] = n
                }, o.normalOutCardAny = function(e, t) {
                    console.log("NodeHandCardCtr.normalOutCardAny begin", this._numList[e]);
                    var n = this._numList[e],
                        a = t = Math.min(t, n),
                        i = n - 1,
                        o = Math.min(Math.floor(Math.random() * (i + 1 - a) + a), i),
                        r = this._seatList[e],
                        s = r.splice(o - t, t);
                    s.forEach((function(e, t, n) {
                        e.active = !1
                    }));
                    for (var u = 0; u < s.length; u++) r.push(s[u]);
                    n -= t, this._numList[e] = n, console.log("NodeHandCardCtr.normalOutCardAny end", this._numList[e]);
                    for (var l = 0; l < n; l++) {
                        var h = r[l].getPosition(),
                            p = -this._cardStart + l * this._width;
                        l == n - 1 && n % 3 == 2 && (p += this._spaceLast), d(r[l]).to(.06 * t, {
                            position: new c(p, h.y, h.z)
                        }).start()
                    }
                }, o.onBaoTing = function(e) {
                    if (e.seatId != _.getInstance().mySeatId) {
                        var t = y.getDirFromSeatId(e.seatId);
                        switch (e.opCode) {
                            case f.OPE_BAO_JIAO:
                            case f.OPE_TING:
                            case f.OPE_KOU_TING:
                                this.onCoverHandCard(t)
                        }
                    }
                }, o.onPengGang = function(e) {
                    var t = y.getDirFromSeatId(e.seatId);
                    switch (e.opCode) {
                        case f.OPE_RIGHT_CHI:
                        case f.OPE_MIDDLE_CHI:
                        case f.OPE_LEFT_CHI:
                        case f.OPE_PENG:
                        case f.OPE_QIANG_PENG:
                            this.outCardAny(t, 2, e);
                            break;
                        case f.OPE_AN_GANG:
                            this.outCardAny(t, 4, e);
                            break;
                        case f.OPE_GANG:
                            this.outCardAny(t, 3, e);
                            break;
                        case f.OPE_BU_GANG:
                            this.outCardAny(t, 1, e);
                            break;
                        case f.OPE_HUA_GANG:
                            this.outCardAny(t, e.opCards.length, e);
                            break;
                        case f.OPE_LANG_QI:
                        case f.OPE_MING_LOU:
                            this.onMinglou(t, e);
                            break;
                        default:
                            this.doGameCompFun("onNodeHandCardCtrPengGang", e.opCode, t, e)
                    }
                }, o.onMinglou = function(e, t) {
                    this._cardListLangqi[e] = t.opCards, this.outCardAny(e, t.opCards.length, t)
                }, o.onMingPai = function(e, t) {
                    var n = y.getDirFromSeatId(e);
                    this._opHandCards(n, t)
                }, o.onHu = function(e) {
                    var t = y.getDirFromSeatId(e.cardSeatId);
                    this.turnToMe(t) && this.outCardAny(t, 1, e)
                }, o.onChannelOperationResult = function(e) {
                    this.doGameCompFun("onHandCardOperationResult", e)
                }, o.onGameOver = function(e) {
                    var t = this;
                    this.scheduleOnce((function() {
                        t.playAnimOfReset((function() {
                            for (var n = 0; n < (null == e ? void 0 : e.handCards.length); n++) {
                                var a, i = n,
                                    o = e.handCards[n].handCards.slice(),
                                    r = h.number_valueOf(A.CardHandNum, 13);
                                if (o.length > r + 1) return void console.log("NodeHandCardCtr.onGameOver", "手牌数据异常", o);
                                var s = h.number_valueOf(null == (a = e.handCards[n].opGroups) ? void 0 : a.length);
                                o.length + 3 * s == r || h.isNotNull(e.handCards[n].huCard) && G.deleteHasInList(o, [e.handCards[n].huCard]), t._cardListLangqi[i].length > 0 && G.deleteHasInList(o, t._cardListLangqi[i]), console.log("NodeHandCardCtr.onGameOver", o), t._numList[i] = o.length;
                                for (var u = t._seatList[i], l = 0; l < u.length; l++) l < o.length ? (u[l].active = !0, u[l].setRotationFromEuler(90, 0, 0), u[l].getComponent(v).setCardTag(P.HandCard), u[l].getComponent(v).setCardByte(o[l])) : u[l].active = !1;
                                t.adjustPosition(i, .8 * t._thickness)
                            }
                            t.playAnimOfShow()
                        }))
                    }), .3)
                }, o.playAnimOfReset = function(e) {
                    for (var t = !1, n = this, a = 0; a < this._hasTrunCard.length; a++) n._hasTrunCard[a] && function() {
                        t = !0;
                        for (var i = n._seatList[a], o = i.length, r = function(t) {
                                var r = new c(i[t].eulerAngles),
                                    s = i[t].getPosition(),
                                    u = new c(s.x, s.y, s.z + n._thickness),
                                    d = new c(u.x, 0, u.z - I.CardConfig.GroundToCard),
                                    p = new c(0, 0, 0);
                                p.dir = a, new l(p).by(.016, new c(-90, 0, 0), {
                                    onUpdate: function(e, n) {
                                        h.rotate3DAroundByPositionRotaion(i[t], u, r, d, e, !0)
                                    },
                                    onComplete: function(a) {
                                        var i = a.dir;
                                        if (t == o - 1) {
                                            n._hasTrunCard[i] = !1;
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
                    if (this._cardStatus == I.HandCardStatus.Idle) {
                        for (var t = this, n = function(n) {
                                for (var a = e._seatList[n], i = e._numList[n], o = function(e) {
                                        if (e + 1 > i) return "break";
                                        var o = new c(a[e].eulerAngles),
                                            r = new c(a[e].getPosition()),
                                            s = new c(r.x, 0, r.z - I.CardConfig.GroundToCard),
                                            u = new c(0, 0, 0);
                                        new l(u).by(.3, new c(-90, 0, 0), {
                                            onUpdate: function(t, n) {
                                                h.rotate3DAroundByPositionRotaion(a[e], r, o, s, t, !0)
                                            }
                                        }).start(), t._seatListTarget[n].push(u)
                                    }, r = 0; r < a.length && "break" !== o(r); r++);
                            }, a = 0; a < this._seatList.length; a++) n(a);
                        this._cardStatus = I.HandCardStatus.Show, d(this.node).delay(.31).call((function() {
                            e._cardStatus = I.HandCardStatus.Over
                        })).start()
                    }
                }, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView();
                    var n = [0, 0, 0, 0];
                    e.playerList.forEach((function(e, a, i) {
                        var o = y.getDirFromSeatId(e.seatId);
                        n[o] = e.handCards.length, e.opGroups.forEach((function(e, n, a) {
                            e.opCode != f.OPE_LANG_QI && e.opCode != f.OPE_MING_LOU || (t._cardListLangqi[o] = e.opCards)
                        })), h.number_valueOf(null == e ? void 0 : e.huCard) > 0 && --n[o]
                    })), this.dealCard(n), this.checkHuPaiTrunCard(), this.checkGiveUp();
                    for (var a = 0; a < this._seatList.length; a++) this.adjustPosition(a);
                    e.playerList.forEach((function(e, n, a) {
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
                            var n = y.getDirFromSeatId(t.seatId);
                            e.trunCard(n)
                        }))
                    }
                }, o.onGameRealTimeSettle = function(e) {
                    this.doGameCompFun("onNodeHandCardSettle", e)
                }, o.onGiveUpResult = function(e) {
                    var t = y.getDirFromSeatId(e.seatId);
                    this.onCoverHandCard(t)
                }, o.onCoverHandCard = function(e) {
                    this.adjustPosition(e), this.trunCard(e)
                }, o._stopSeatAnim = function() {
                    for (var e = 0; e < this._seatListTarget.length; e++)
                        for (var t = this._seatListTarget[e], n = 0; n < t.length; n++) l.stopAllByTarget(t[n]);
                    this._seatListTarget = [
                        [],
                        [],
                        [],
                        []
                    ]
                }, o.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var a = 0; a < e.length && e[a].active; a++) {
                            var i = e[a].getComponent(v);
                            i.getCardByte() > 0 && (i.checkHandCard(), i.checkHandCardColor())
                        }
                    }))
                }, o.onDestroy = function() {
                    this._stopSeatAnim()
                }, t
            }(m)).prototype, "nodeCard", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = M)) || R) || R)), o._RF.pop()
        }
    }
}))