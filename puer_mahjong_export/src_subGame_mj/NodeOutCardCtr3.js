System.register("chunks:///_virtual/NodeOutCardCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameInfo.ts", "./FXJConfig3.ts", "./FXJEvent3.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Vec3, l = e.instantiate, d = e.Tween, c = e.tween
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.GAME_POS_TAG
        }, function(e) {
            f = e.OPCode
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            E = e.GameRuleConfig
        }, function(e) {
            S = e.GameViewConfig
        }, function(e) {
            A = e.CardUtil
        }, function(e) {
            I = e.NodeCardCtr
        }],
        execute: function() {
            var G, y, v, P, T, b, O, R;
            o._RF.push({}, "f5812WA9BBL+ZpueKSdCha1", "NodeOutCardCtr", void 0);
            var M = r.ccclass,
                N = r.property,
                U = r.menu;
            e("NodeOutCardCtr", (G = M("NodeOutCardCtr"), y = U("prefab/subGame/mj/NodeOutCardCtr"), v = N({
                tooltip: "牌节点",
                type: s
            }), P = N({
                tooltip: "箭头节点",
                type: s
            }), G(T = y((O = t((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCard", O, i(t)), a(t, "nodeArrow", R, i(t)), t._numList = null, t._seatList = null, t._offsetArrow = null, t._pickList = null, t._baoList = [], t.baopai = null, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.initData = function() {
                    this._seatList = new Array(E.playerNum), this.resetData()
                }, o.resetData = function() {
                    this._numList = [];
                    for (var e = 0; e < E.playerNum; e++) this._numList.push(0);
                    this._pickList = [], this._baoList = []
                }, o._getRatationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.updateUserDir = function(e) {
                    void 0 === e && (e = !1);
                    for (var t = this.node.children, n = 0; n < t.length; n++) t[n].setRotationFromEuler(0, 90 * this._getRatationDir(n), 0);
                    e && this.doGameCompFun("updateOutCardPos", this.node, this._seatList, this.nodeCard)
                }, o.initView = function() {
                    for (var e = S.CardConfig.ScaleOutCard, t = (S.CardConfig.Width, S.CardConfig.Height, S.CardConfig.GroundToCard * e), n = (S.CardConfig.SpaceOutCard, S.CardConfig.CenterToOutCard, 0); n < E.playerNum; n++) {
                        var a = new s;
                        a.name = "seat_" + n, a.setRotationFromEuler(0, 90 * this._getRatationDir(n), 0), this.node.addChild(a), this._seatList[n] = [], this.initCardPos(n, a)
                    }
                    this.doGameCompFun("updateOutCardPos", this.node, this._seatList, this.nodeCard), this.nodeArrow.setPosition(0, -4.5, 0);
                    var i = this.nodeArrow.getPosition();
                    this._offsetArrow = new u(i.x, i.y + t, i.z), this.nodeArrow.setPosition(this._offsetArrow)
                }, o.initCardPos = function(e, t) {
                    var n = .88 * S.CardConfig.ScaleOutCard,
                        a = S.CardConfig.Width * n,
                        i = S.CardConfig.Height * n,
                        o = S.CardConfig.GroundToCard * n,
                        r = (6 * a + 5 * S.CardConfig.SpaceOutCard) / 2 - a / 2 - 0,
                        s = .9 * S.CardConfig.CenterToOutCard;
                    this._seatList[e] = [];
                    for (var u = [6, 8, 10, 12], d = 0; d < 4; d++)
                        for (var c = 0; c < u[d]; c++) {
                            var h = s + (d - 1) * i,
                                p = -r + c % u[d] * (a + S.CardConfig.SpaceOutCard) - d * (a + S.CardConfig.SpaceOutCard),
                                m = l(this.nodeCard);
                            m.setScale(m.scale.x * n, m.scale.y * n, m.scale.z * n), m.setPosition(p, o, h), t.addChild(m), this._seatList[e].push(m)
                        }
                }, o.resetView = function() {
                    for (var e = 0; e < this._seatList.length; e++)
                        for (var t = this._seatList[e], n = 0; n < t.length; n++) t[n].active = !1, t[n].getComponent(I).resetCard();
                    this.resetData(), this.baopai = null, this.nodeArrow.active = !1
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onOutCard = function(e) {
                    var t = A.getDirFromSeatId(e.seatId);
                    this.showCard(t, e.opCard)
                }, o.onOutCardRevert = function(e) {
                    var t = A.getDirFromSeatId(e.seatId);
                    this.hideCard(t, e.opCard, !1)
                }, o.showCard = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var a = this._seatList[e],
                        i = this._numList[e] + 1;
                    if (i > a.length) console.log("NodeOutCardCtr.showCard", "出牌数量已超上限", "num", i);
                    else {
                        var o = i - 1;
                        a[o].active = !0;
                        var r = a[o].getComponent(I);
                        if (r.setCardByte(t), this.baopai && A.getCardValue(t) == A.getCardValue(this.baopai) ? (r.setRed(!0), this._baoList.push(a[o])) : r.setRed(!1), this._numList[e] = i, !n) {
                            var s = a[o].getPosition();
                            this.nodeArrow.active = !0, d.stopAllByTarget(this.nodeArrow), this.nodeArrow.setPosition(s.x + this._offsetArrow.x, this._offsetArrow.y, s.z + this._offsetArrow.z), h.rotate3DAround(this.nodeArrow, new u(0, 0, 0), new u(0, 90 * this._getRatationDir(e), 0), !1);
                            var l = c(this.nodeArrow).by(.6, {
                                position: new u(0, 1, 0)
                            }).by(.6, {
                                position: new u(0, -1, 0)
                            });
                            c(this.nodeArrow).repeatForever(l).start()
                        }
                    }
                }, o.hideCard = function(e, t, n) {
                    var a = this._seatList[e],
                        i = this._numList[e];
                    if (!(i < 1)) {
                        var o = i - 1,
                            r = this;
                        if (n) {
                            var s = {
                                seatId: A.getSeatIdFromDir(e),
                                aniType: S.AnimType.Hu2,
                                pos: p.GameInfo.getInfoPos(g.HU_CARD_POSTION) || a[o].getWorldPosition()
                            };
                            m.dispatch(C.VIEW_OUT_CARD_ANI_PLAY, s), c(this.node).delay(.5).call((function() {
                                u()
                            })).start()
                        } else u()
                    }

                    function u() {
                        var n = !0,
                            i = r.doGameCompFun("checkRemoveOutCard", r._seatList[e], t);
                        "boolean" == typeof i && (n = i), n && (a[o].active = !1, r.nodeArrow.active = !1, r._numList[e] = o)
                    }
                }, o.onChannelOperationResult = function(e) {}, o.onPengGang = function(e) {
                    if (e.opCode != f.OPE_LANG_QI && e.opCode != f.OPE_MING_LOU && e.opCode != f.OPE_AN_GANG && e.opCode != f.OPE_BU_GANG && e.opCode != f.OPE_HUA_GANG && (h.isNull(e.cardSeatId) || h.isNull(e.seatId) || e.cardSeatId != e.seatId)) {
                        var t = A.getDirFromSeatId(e.cardSeatId);
                        this.hideCard(t, e.opCard, !1)
                    }
                }, o.onHu = function(e) {
                    if (e.cardSeatId != e.seatId) {
                        var t = A.getDirFromSeatId(e.cardSeatId);
                        this.hideCard(t, e.opCard, !0)
                    } else console.log("NodeOutCardCtr.onHu", "自摸不需要移除牌")
                }, o.onGameOver = function(e) {
                    this.resetBaoCard()
                }, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), e.playerList.forEach((function(e, n, a) {
                        var i = A.getDirFromSeatId(e.seatId),
                            o = e.outCards;
                        if (!h.table_isEmpty(o))
                            for (var r = 0; r < o.length; r++)(h.isNotNull(o[r].status) && 1 != o[r].status || h.isNull(o[r].status)) && t.showCard(i, o[r].card, !0)
                    }))
                }, o.onShowPickCard = function(e) {
                    this.resetPickCard();
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t], a = 0; a < n.length && n[a].active; a++) {
                            var i = n[a].getComponent(I),
                                o = A.getCardValue(i.byte);
                            this.baopai ? o !== A.getCardValue(this.baopai) && o == A.getCardValue(e) && (i.setBlack(!0), this._pickList.push(n[a])) : o == A.getCardValue(e) && (i.setBlack(!0), this._pickList.push(n[a]))
                        }
                }, o.onHidePickCard = function() {
                    this.resetPickCard()
                }, o.resetPickCard = function() {
                    this._pickList.forEach((function(e, t, n) {
                        e.isValid && e.getComponent(I).setBlack(!1)
                    })), this._pickList = []
                }, o.onShowBaoCard = function(e) {
                    this.resetBaoCard(), this.baopai = e;
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t], a = 0; a < n.length && n[a].active; a++) {
                            var i = n[a].getComponent(I);
                            A.getCardValue(i.byte) == A.getCardValue(e) && (i.setRed(!0), this._baoList.push(n[a]))
                        }
                }, o.onHideBaoCard = function(e) {
                    if (void 0 === e && (e = null), e)
                        for (var t = A.getDirFromSeatId(e.curSeat), n = 0; n < e.old_cards.length; n++) this.showCard(t, e.old_cards[n]);
                    this.resetBaoCard()
                }, o.resetBaoCard = function() {
                    this.baopai = null, this._baoList.forEach((function(e, t, n) {
                        e.getComponent(I).setRed(!1)
                    })), this._baoList = []
                }, o.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var a = 0; a < e.length && e[a].active; a++) {
                            var i = e[a].getComponent(I);
                            i.getCardByte() > 0 && (i.checkHandCard(), i.checkHandCardColor())
                        }
                    }))
                }, o.onDestroy = function() {
                    d.stopAllByTarget(this.nodeArrow)
                }, t
            }(_)).prototype, "nodeCard", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(b.prototype, "nodeArrow", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = b)) || T) || T)), o._RF.pop()
        }
    }
}))