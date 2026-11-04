System.register("chunks:///_virtual/CardGangPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr.ts", "./FXJConfig.ts", "./GameEvent.ts", "./CardUtil.ts", "./Card.ts", "./Item.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, l = e.Prefab, u = e.Node, d = e.instantiate, c = e.Layout, h = e.UITransform
        }, function(e) {
            p = e.Utils
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.OperationMgr
        }, function(e) {
            m = e.MahjongMap
        }, function(e) {
            C = e.GameEvent
        }, function(e) {
            I = e.CardUtil
        }, function(e) {
            A = e.Card
        }, function(e) {
            E = e.Item
        }],
        execute: function() {
            var v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B;
            e("cardSize", void 0), r._RF.push({}, "944f4xnVnVOR5TibMChnfgb", "CardGangPrefabCtr", void 0);
            var H, F = s.ccclass,
                k = s.property,
                V = s.menu;
            ! function(e) {
                e[e.Width = 61] = "Width", e[e.Height = 86] = "Height"
            }(H || (H = e("cardSize", {}))), e("CardGangPrefabCtr", (v = F("CardGangPrefabCtr"), y = V("prefab/game/CardGangPrefabCtr"), S = k({
                tooltip: "手牌预制体",
                type: l
            }), P = k(l), T = k(u), G = k(u), O = k(u), R = k(u), v(N = y((D = t((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "CardPrefab", D, a(t)), i(t, "itemPrefab", L, a(t)), i(t, "scrollView", M, a(t)), i(t, "content", U, a(t)), i(t, "listScrollView", w, a(t)), i(t, "listContent", B, a(t)), t.tag = 0, t.cardList = {}, t.curList = [], t.curCard = 0, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.addGameComp = function() {
                    null == this.node && (this.node = p.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, r._reset = function() {
                    this.scrollView.active = !1, this.content.destroyAllChildren(), this.listScrollView.active = !1, this.listContent.destroyAllChildren()
                }, r.updateCards = function(e, t) {
                    this._reset();
                    var n = [];
                    Object.keys(t).forEach((function(e) {
                        n.push(p.number_valueOf(t[e].card_value))
                    })), this.cardList = this.filterAar(t), this.updateSelCards(n)
                }, r.filterAar = function(e) {
                    var t = {};
                    for (var n in e) {
                        for (var i, a = e[n], r = [], s = new Map, l = o(a.list); !(i = l()).done;) {
                            var u = i.value,
                                d = u.cards.map((function(e) {
                                    return e >> 8
                                })),
                                c = JSON.stringify(d),
                                h = u.opcode + "_" + c;
                            s.has(h) || (s.set(h, !0), r.push(u))
                        }
                        t[n] = {
                            card_value: a.card_value,
                            list: r
                        }
                    }
                    return t
                }, r.updateSelCards = function(e) {
                    var t = this;
                    this.scrollView.active = !0, this.content.destroyAllChildren();
                    var n = d(this.itemPrefab),
                        i = e.length;
                    n.destroyAllChildren(), n.getComponent(c).spacingX = 20, e.forEach((function(e) {
                        var i = d(t.CardPrefab);
                        i.getComponent(A).setCardByte(e), i.getComponent(A).setCardSize(H.Width, H.Height), n.addChild(i), i.off(u.EventType.TOUCH_END), i.on(u.EventType.TOUCH_END, (function(e) {
                            var n = e.target.getComponent(A).getCardByte();
                            t.onClickCard(n)
                        }), t)
                    })), n.getComponent(c).updateLayout(!0), this.content.addChild(n), this.content.getComponent(c).updateLayout(!0);
                    var a = this.scrollView.getComponent(h);
                    a.width = i * H.Width + 20 + 20 * i, this.node.getComponent(h).width = a.width
                }, r.onClickCard = function(e) {
                    var t, n = this,
                        i = I.getCardValue(e);
                    console.log("点击了牌", m.get(i)), this.curList = [], Object.keys(this.cardList).forEach((function(t) {
                        e == p.number_valueOf(n.cardList[t].card_value) && n.cardList[t].list.forEach((function(e) {
                            n.curList.push({
                                cards: e.cards,
                                opCode: e.opCode
                            })
                        }))
                    })), this.curCard = e, 1 == (null == (t = this.curList) ? void 0 : t.length) && this.doGameCompFun("isZuiGang", {
                        opCode: this.curList[0].opCode,
                        cardList: this.curList[0].cards
                    }) ? this.opClick(0) : this.showSelCards()
                }, r.showSelCards = function() {
                    var e = this;
                    this.listScrollView.active = !0, this.listContent.destroyAllChildren();
                    var t = this.listContent.getComponent(c);
                    d(this.itemPrefab).destroyAllChildren();
                    for (var n = [], i = this.curList.length, a = 3, o = [], r = 0, s = function(t) {
                            var i = d(e.itemPrefab),
                                s = e.curList[t].cards;
                            n = [], s.forEach((function(a) {
                                if (Object.values(n).includes(I.getCardValueLocal(a))) {
                                    if (0 == e.checkMultCard(s, e.curList[t].opCode)) {
                                        n.push(I.getCardValueLocal(a));
                                        var o = d(e.CardPrefab);
                                        o.getComponent(A).setCardByte(a), o.getComponent(A).setCardSize(H.Width, H.Height), i.addChild(o)
                                    }
                                } else {
                                    n.push(I.getCardValueLocal(a));
                                    var r = d(e.CardPrefab);
                                    r.getComponent(A).setCardByte(a), r.getComponent(A).setCardSize(H.Width, H.Height), i.addChild(r)
                                }
                            })), a = n.length > a ? n.length : a, i.getComponent(E).index = t, i.off(u.EventType.TOUCH_END), i.on(u.EventType.TOUCH_END, (function(t) {
                                console.log("点击了牌");
                                var n = t.target.getComponent(E).index;
                                e.opClick(n)
                            }), e), e.listContent.addChild(i), i.getComponent(c).updateLayout(!0), o.push(i.getComponent(h).width), 2 == o.length && (r < o[0] + o[1] && (r = o[0] + o[1]), o = [])
                        }, l = 0; l < i; l++) s(l);
                    0 == r && o.length > 0 && (r = o[0]), t.updateLayout();
                    var p = i >= 2 ? 2 : i,
                        f = Math.ceil(i / p) * H.Height + 20 * Math.ceil(i / p),
                        _ = (H.Width, t.spacingX, t.paddingLeft, t.paddingRight);
                    _ = r + t.spacingX + t.paddingLeft + t.paddingRight + 5, this.listContent.getComponent(h).width = _, this.listScrollView.getComponent(h).width = _, this.listScrollView.getComponent(h).height = f
                }, r.checkMultCard = function(e, t) {
                    if ((null == e ? void 0 : e.length) <= 3) return !1;
                    var n = this.doGameCompFun("checkMultCard", t);
                    return !!p.isNull(n) || n
                }, r.opClick = function(e) {
                    var t = this.curList[e].opCode,
                        n = this.curList[e].cards,
                        i = {
                            opCard: n[n.length - 1],
                            opCode: t,
                            opCards: n,
                            seatId: g.getInstance().seatId,
                            userId: g.getInstance().userId
                        };
                    console.log("发送请求特殊杠：", i), f.dispatch(C.SEND_PLAYER_OPERATION, i), f.dispatch(C.CLOSE_OPRATION_INFO)
                }, t
            }(_)).prototype, "CardPrefab", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(b.prototype, "itemPrefab", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(b.prototype, "scrollView", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(b.prototype, "content", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(b.prototype, "listScrollView", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(b.prototype, "listContent", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = b)) || N) || N)), r._RF.pop()
        }
    }
}))