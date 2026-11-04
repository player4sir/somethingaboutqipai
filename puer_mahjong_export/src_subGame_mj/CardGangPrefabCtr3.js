System.register("chunks:///_virtual/CardGangPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./FXJConfig3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./Card5.ts", "./Item3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.createForOfIteratorHelperLoose
        }, function(e) {
            r = e.cclegacy, s = e._decorator, u = e.Prefab, l = e.Node, d = e.instantiate, c = e.Layout, h = e.UITransform
        }, function(e) {
            p = e.Utils
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            _ = e.BaseComponent
        }, function(e) {
            g = e.OperationMgr
        }, function(e) {
            f = e.MahjongMap
        }, function(e) {
            C = e.GameEvent
        }, function(e) {
            E = e.CardUtil
        }, function(e) {
            S = e.Card
        }, function(e) {
            A = e.Item
        }],
        execute: function() {
            var I, G, y, v, P, T, b, O, R, M, N, U, D, L, B, w;
            e("cardSize", void 0), r._RF.push({}, "245e3xyqAFOd4ZsCnibSnrz", "CardGangPrefabCtr", void 0);
            var k, H = s.ccclass,
                x = s.property,
                F = s.menu;
            ! function(e) {
                e[e.Width = 61] = "Width", e[e.Height = 86] = "Height"
            }(k || (k = e("cardSize", {}))), e("CardGangPrefabCtr", (I = H("CardGangPrefabCtr"), G = F("prefab/subGame/mj/CardGangPrefabCtr"), y = x({
                tooltip: "手牌预制体",
                type: u
            }), v = x(u), P = x(l), T = x(l), b = x(l), O = x(l), I(R = G((N = t((M = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "CardPrefab", N, i(t)), a(t, "itemPrefab", U, i(t)), a(t, "scrollView", D, i(t)), a(t, "content", L, i(t)), a(t, "listScrollView", B, i(t)), a(t, "listContent", w, i(t)), t.tag = 0, t.cardList = {}, t.curList = [], t.curCard = 0, t
                }
                n(t, e);
                var r = t.prototype;
                return r.onInitModuleEvent = function() {}, r.addGameComp = function() {
                    null == this.node && (this.node = p.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, r.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
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
                        for (var a, i = e[n], r = [], s = new Map, u = o(i.list); !(a = u()).done;) {
                            var l = a.value,
                                d = l.cards.map((function(e) {
                                    return e >> 8
                                })),
                                c = JSON.stringify(d),
                                h = l.opcode + "_" + c;
                            s.has(h) || (s.set(h, !0), r.push(l))
                        }
                        t[n] = {
                            card_value: i.card_value,
                            list: r
                        }
                    }
                    return t
                }, r.updateSelCards = function(e) {
                    var t = this;
                    this.scrollView.active = !0, this.content.destroyAllChildren();
                    var n = d(this.itemPrefab),
                        a = e.length;
                    n.destroyAllChildren(), n.getComponent(c).spacingX = 20, e.forEach((function(e) {
                        var a = d(t.CardPrefab);
                        a.getComponent(S).setCardByte(e), a.getComponent(S).setCardSize(k.Width, k.Height), n.addChild(a), a.off(l.EventType.TOUCH_END), a.on(l.EventType.TOUCH_END, (function(e) {
                            var n = e.target.getComponent(S).getCardByte();
                            t.onClickCard(n)
                        }), t)
                    })), n.getComponent(c).updateLayout(!0), this.content.addChild(n), this.content.getComponent(c).updateLayout(!0);
                    var i = this.scrollView.getComponent(h);
                    i.width = a * k.Width + 20 + 20 * a, this.node.getComponent(h).width = i.width
                }, r.onClickCard = function(e) {
                    var t, n = this,
                        a = E.getCardValue(e);
                    console.log("点击了牌", f.get(a)), this.curList = [], Object.keys(this.cardList).forEach((function(t) {
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
                    for (var n = [], a = this.curList.length, i = 3, o = [], r = 0, s = function(t) {
                            var a = d(e.itemPrefab),
                                s = e.curList[t].cards;
                            n = [], s.forEach((function(i) {
                                if (Object.values(n).includes(E.getCardValueLocal(i))) {
                                    if (0 == e.checkMultCard(s, e.curList[t].opCode)) {
                                        n.push(E.getCardValueLocal(i));
                                        var o = d(e.CardPrefab);
                                        o.getComponent(S).setCardByte(i), o.getComponent(S).setCardSize(k.Width, k.Height), a.addChild(o)
                                    }
                                } else {
                                    n.push(E.getCardValueLocal(i));
                                    var r = d(e.CardPrefab);
                                    r.getComponent(S).setCardByte(i), r.getComponent(S).setCardSize(k.Width, k.Height), a.addChild(r)
                                }
                            })), i = n.length > i ? n.length : i, a.getComponent(A).index = t, a.off(l.EventType.TOUCH_END), a.on(l.EventType.TOUCH_END, (function(t) {
                                console.log("点击了牌");
                                var n = t.target.getComponent(A).index;
                                e.opClick(n)
                            }), e), e.listContent.addChild(a), a.getComponent(c).updateLayout(!0), o.push(a.getComponent(h).width), 2 == o.length && (r < o[0] + o[1] && (r = o[0] + o[1]), o = [])
                        }, u = 0; u < a; u++) s(u);
                    0 == r && o.length > 0 && (r = o[0]), t.updateLayout();
                    var p = a >= 2 ? 2 : a,
                        m = Math.ceil(a / p) * k.Height + 20 * Math.ceil(a / p),
                        _ = (k.Width, t.spacingX, t.paddingLeft, t.paddingRight);
                    _ = r + t.spacingX + t.paddingLeft + t.paddingRight + 5, this.listContent.getComponent(h).width = _, this.listScrollView.getComponent(h).width = _, this.listScrollView.getComponent(h).height = m
                }, r.checkMultCard = function(e, t) {
                    if ((null == e ? void 0 : e.length) <= 3) return !1;
                    var n = this.doGameCompFun("checkMultCard", t);
                    return !!p.isNull(n) || n
                }, r.opClick = function(e) {
                    var t = this.curList[e].opCode,
                        n = this.curList[e].cards,
                        a = {
                            opCard: n[n.length - 1],
                            opCode: t,
                            opCards: n,
                            seatId: g.getInstance().seatId,
                            userId: g.getInstance().userId
                        };
                    console.log("发送请求特殊杠：", a), m.dispatch(C.SEND_PLAYER_OPERATION, a), m.dispatch(C.CLOSE_OPRATION_INFO)
                }, t
            }(_)).prototype, "CardPrefab", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(M.prototype, "itemPrefab", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(M.prototype, "scrollView", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(M.prototype, "content", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(M.prototype, "listScrollView", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(M.prototype, "listContent", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = M)) || R) || R)), r._RF.pop()
        }
    }
}))