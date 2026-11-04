System.register("chunks:///_virtual/NodeOutCardCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./GameInfo.ts", "./FXJConfig.ts", "./FXJEvent.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./NodeCardCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Vec3, u = e.instantiate, d = e.Tween, c = e.tween
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.GAME_POS_TAG
        }, function(e) {
            m = e.OPCode
        }, function(e) {
            C = e.FXJEvent
        }, function(e) {
            I = e.GameRuleConfig
        }, function(e) {
            A = e.GameViewConfig
        }, function(e) {
            E = e.CardUtil
        }, function(e) {
            v = e.NodeCardCtr
        }],
        execute: function() {
            var y, S, P, T, G, O, R, N;
            o._RF.push({}, "30945FhsC9LTJDpcl63l0H5", "NodeOutCardCtr", void 0);
            var b = r.ccclass,
                D = r.property,
                L = r.menu;
            e("NodeOutCardCtr", (y = b("NodeOutCardCtr"), S = L("prefab/game/NodeOutCardCtr"), P = D({
                tooltip: "牌节点",
                type: s
            }), T = D({
                tooltip: "箭头节点",
                type: s
            }), y(G = S((R = t((O = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCard", R, a(t)), i(t, "nodeArrow", N, a(t)), t._numList = null, t._seatList = null, t._offsetArrow = null, t._pickList = null, t._baoList = [], t.baopai = null, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.initData = function() {
                    this._seatList = new Array(I.playerNum), this.resetData()
                }, o.resetData = function() {
                    this._numList = [];
                    for (var e = 0; e < I.playerNum; e++) this._numList.push(0);
                    this._pickList = [], this._baoList = []
                }, o._getRatationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.updateUserDir = function(e) {
                    void 0 === e && (e = !1);
                    for (var t = this.node.children, n = 0; n < t.length; n++) t[n].setRotationFromEuler(0, 90 * this._getRatationDir(n), 0);
                    e && this.doGameCompFun("updateOutCardPos", this.node, this._seatList, this.nodeCard)
                }, o.initView = function() {
                    for (var e = A.CardConfig.ScaleOutCard, t = A.CardConfig.GroundToCard * e, n = 0; n < I.playerNum; n++) {
                        var i = new s;
                        i.name = "seat_" + n, i.setRotationFromEuler(0, 90 * this._getRatationDir(n), 0), this.node.addChild(i), this._seatList[n] = [], this.initCardPos(n, i)
                    }
                    this.doGameCompFun("updateOutCardPos", this.node, this._seatList, this.nodeCard), this.nodeArrow.setPosition(0, -4.5, 0);
                    var a = this.nodeArrow.getPosition();
                    this._offsetArrow = new l(a.x, a.y + t, a.z), this.nodeArrow.setPosition(this._offsetArrow)
                }, o.initCardPos = function(e, t) {
                    var n = .88 * A.CardConfig.ScaleOutCard,
                        i = A.CardConfig.Width * n,
                        a = A.CardConfig.Height * n,
                        o = A.CardConfig.GroundToCard * n,
                        r = (6 * i + 5 * A.CardConfig.SpaceOutCard) / 2 - i / 2 - 0,
                        s = .9 * A.CardConfig.CenterToOutCard;
                    this._seatList[e] = [];
                    for (var l = [6, 8, 10, 12], d = 0; d < 4; d++)
                        for (var c = 0; c < l[d]; c++) {
                            var h = s + (d - 1) * a,
                                p = -r + c % l[d] * (i + A.CardConfig.SpaceOutCard) - d * (i + A.CardConfig.SpaceOutCard),
                                f = u(this.nodeCard);
                            f.setScale(f.scale.x * n, f.scale.y * n, f.scale.z * n), f.setPosition(p, o, h), t.addChild(f), this._seatList[e].push(f)
                        }
                }, o.resetView = function() {
                    for (var e = 0; e < this._seatList.length; e++)
                        for (var t = this._seatList[e], n = 0; n < t.length; n++) t[n].active = !1, t[n].getComponent(v).resetCard(), t[n].setRotationFromEuler(0, 0, 0);
                    this.resetData(), this.baopai = null, this.nodeArrow.active = !1
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onOutCard = function(e) {
                    var t = E.getDirFromSeatId(e.seatId);
                    this.showCard(t, e.opCard)
                }, o.onOutCardRevert = function(e) {
                    var t = E.getDirFromSeatId(e.seatId);
                    this.hideCard(t, e.opCard, !1)
                }, o.showCard = function(e, t, n) {
                    void 0 === n && (n = !1);
                    var i = this._seatList[e],
                        a = this._numList[e] + 1;
                    if (a > i.length) console.log("NodeOutCardCtr.showCard", "出牌数量已超上限", "num", a);
                    else {
                        var o = a - 1;
                        i[o].active = !0;
                        var r = i[o].getComponent(v);
                        if (r.setCardByte(t), this.baopai && E.getCardValue(t) == E.getCardValue(this.baopai) ? (r.setRed(!0), this._baoList.push(i[o])) : r.setRed(!1), this.doGameCompFun("checkShowOutCard", i[o], t, e), this._numList[e] = a, !n) {
                            var s = i[o].getPosition();
                            this.nodeArrow.active = !0, d.stopAllByTarget(this.nodeArrow), this.nodeArrow.setPosition(s.x + this._offsetArrow.x, this._offsetArrow.y, s.z + this._offsetArrow.z), h.rotate3DAround(this.nodeArrow, new l(0, 0, 0), new l(0, 90 * this._getRatationDir(e), 0), !1);
                            var u = c(this.nodeArrow).by(.6, {
                                position: new l(0, 1, 0)
                            }).by(.6, {
                                position: new l(0, -1, 0)
                            });
                            c(this.nodeArrow).repeatForever(u).start()
                        }
                    }
                }, o.hideCard = function(e, t, n) {
                    var i = this._seatList[e],
                        a = this._numList[e];
                    if (!(a < 1)) {
                        var o = a - 1,
                            r = this;
                        if (n) {
                            var s = {
                                seatId: E.getSeatIdFromDir(e),
                                aniType: A.AnimType.Hu2,
                                pos: p.GameInfo.getInfoPos(g.HU_CARD_POSTION) || i[o].getWorldPosition()
                            };
                            f.dispatch(C.VIEW_OUT_CARD_ANI_PLAY, s), c(this.node).delay(.5).call((function() {
                                l()
                            })).start()
                        } else l()
                    }

                    function l() {
                        var n = !0,
                            a = r.doGameCompFun("checkRemoveOutCard", r._seatList[e], t);
                        "boolean" == typeof a && (n = a), n && (i[o].active = !1, r.nodeArrow.active = !1, r._numList[e] = o)
                    }
                }, o.onChannelOperationResult = function(e) {
                    this.doGameCompFun("onOutCardOperationResult", e)
                }, o.onPengGang = function(e) {
                    if (e.opCode != m.OPE_LANG_QI && e.opCode != m.OPE_MING_LOU && e.opCode != m.OPE_HUA_GANG && (h.isNull(e.cardSeatId) || h.isNull(e.seatId) || e.cardSeatId != e.seatId)) {
                        var t = E.getDirFromSeatId(e.cardSeatId);
                        this.hideCard(t, e.opCard, !1)
                    }
                }, o.onHu = function(e) {
                    if (e.cardSeatId != e.seatId) {
                        var t = E.getDirFromSeatId(e.cardSeatId);
                        this.hideCard(t, e.opCard, !0)
                    } else console.log("NodeOutCardCtr.onHu", "自摸不需要移除牌")
                }, o.onGameOver = function(e) {
                    this.resetBaoCard()
                }, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), e.playerList.forEach((function(e, n, i) {
                        var a = E.getDirFromSeatId(e.seatId),
                            o = e.outCards;
                        if (!h.table_isEmpty(o))
                            for (var r = 0; r < o.length; r++)(h.isNotNull(o[r].status) && 1 != o[r].status || h.isNull(o[r].status)) && t.showCard(a, o[r].card, !0)
                    }))
                }, o.onShowPickCard = function(e) {
                    this.resetPickCard();
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t], i = 0; i < n.length && n[i].active; i++) {
                            var a = n[i].getComponent(v),
                                o = E.getCardValue(a.byte);
                            this.baopai ? o !== E.getCardValue(this.baopai) && o == E.getCardValue(e) && (a.setBlack(!0), this._pickList.push(n[i])) : o == E.getCardValue(e) && (a.setBlack(!0), this._pickList.push(n[i]))
                        }
                }, o.onHidePickCard = function() {
                    this.resetPickCard()
                }, o.resetPickCard = function() {
                    this._pickList.forEach((function(e, t, n) {
                        e.isValid && e.getComponent(v).setBlack(!1)
                    })), this._pickList = []
                }, o.onShowBaoCard = function(e) {
                    this.resetBaoCard(), this.baopai = e;
                    for (var t = 0; t < this._seatList.length; t++)
                        for (var n = this._seatList[t], i = 0; i < n.length && n[i].active; i++) {
                            var a = n[i].getComponent(v);
                            E.getCardValue(a.byte) == E.getCardValue(e) && (a.setRed(!0), this._baoList.push(n[i]))
                        }
                }, o.onHideBaoCard = function(e) {
                    if (void 0 === e && (e = null), e)
                        for (var t = E.getDirFromSeatId(e.curSeat), n = 0; n < e.old_cards.length; n++) this.showCard(t, e.old_cards[n]);
                    this.resetBaoCard()
                }, o.resetBaoCard = function() {
                    this.baopai = null, this._baoList.forEach((function(e, t, n) {
                        e.getComponent(v).setRed(!1)
                    })), this._baoList = []
                }, o.onUpdateCardTag = function() {
                    this._seatList.forEach((function(e, t, n) {
                        for (var i = 0; i < e.length && e[i].active; i++) {
                            var a = e[i].getComponent(v);
                            a.getCardByte() > 0 && (a.checkHandCard(), a.checkHandCardColor())
                        }
                    }))
                }, o.onDestroy = function() {
                    d.stopAllByTarget(this.nodeArrow)
                }, t
            }(_)).prototype, "nodeCard", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(O.prototype, "nodeArrow", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = O)) || G) || G)), o._RF.pop()
        }
    }
}))