System.register("chunks:///_virtual/Carditem3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./GameEvent6.ts", "./Card5.ts", "./Item3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Prefab, u = e.Node, l = e.UITransform, d = e.Layout, c = e.Sprite, h = e.instantiate
        }, function(e) {
            p = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            _ = e.OperationMgr
        }, function(e) {
            g = e.GameEvent
        }, function(e) {
            f = e.Card
        }, function(e) {
            C = e.Item
        }],
        execute: function() {
            var E, S, A, I, G, y, v, P, T, b, O, R, M, N;
            o._RF.push({}, "e0f72z00ZlDiKOjlKwPu1ej", "Carditem", void 0);
            var U = r.ccclass,
                D = r.property,
                L = r.menu;
            e("Carditem", (E = U("Carditem"), S = L("prefab/subGame/mj/Carditem"), A = D({
                tooltip: "手牌预制体",
                type: s
            }), I = D(s), G = D(u), y = D(u), v = D(u), E(P = S((b = t((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "CardPrefab", b, i(t)), a(t, "itemPrefab", O, i(t)), a(t, "scrollView", R, i(t)), a(t, "content", M, i(t)), a(t, "nodeTips", N, i(t)), t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.updateCardItemProp = function(e, t, n) {
                    var a = this;
                    void 0 === n && (n = null), this.content.destroyAllChildren();
                    for (var i = [], o = 0; o < e.length; o++)
                        for (var r = e[o], s = _.getInstance().getOprationCardList(r.code), c = 0; c < s.length; c++) {
                            var p = _.getInstance().getOprationListNumber(r.code, c);
                            i.push({
                                code: r.code,
                                cards: p,
                                index: c
                            })
                        }
                    i.sort((function(e, t) {
                        return t.cards.length - e.cards.length
                    }));
                    var m = [],
                        g = [];
                    i.forEach((function(e) {
                        var t = e.cards,
                            n = e.code,
                            a = e.index;
                        t.length > 7 ? m.push([{
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !1
                        }]) : g[g.length - 1] && g[g.length - 1].length < 2 ? g[g.length - 1].push({
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !0
                        }) : g.push([{
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !0
                        }])
                    })), m = m.concat(g);
                    for (var E = 700, S = 0; S < m.length; S++) {
                        var A = m[S],
                            I = new u,
                            G = I.addComponent(l);
                        G.width = E, G.height = 85;
                        for (var y = function(e) {
                                var t = A[e],
                                    i = t.code,
                                    o = t.index,
                                    r = t.cards,
                                    s = h(a.itemPrefab);
                                s.destroyAllChildren(), r.forEach((function(e) {
                                    var t = h(a.CardPrefab);
                                    t.getComponent(f).setCardByte(e), t.getComponent(f).setCardSize(52, 85), s.addChild(t)
                                })), s.getComponent(C).index = o, s.off(u.EventType.TOUCH_END), s.on(u.EventType.TOUCH_END, (function(e) {
                                    var t = e.target.getComponent(C).index;
                                    n ? n(i, t) : a.opClick(i, t)
                                }), a);
                                var d = 52 * r.length;
                                if (s.getComponent(l).width = d, t.isPair) {
                                    var c = d / 2 + 20;
                                    s.setPosition(0 == e ? -c : c, 0)
                                } else s.setPosition(0, 0);
                                I.addChild(s), E = Math.max(E, d)
                            }, v = 0; v < A.length; v++) y(v);
                        this.content.addChild(I)
                    }
                    var P = this.content.getComponent(d);
                    P.updateLayout();
                    var T = this.content.getComponent(l);
                    T.height = 85 * m.length + P.spacingY * (m.length - 1) + P.paddingTop + P.paddingBottom, T.width = E;
                    var b = this.scrollView.getComponent(l),
                        O = this.node.getComponent(l);
                    T.height > t ? (b.height = t, b.width = T.width, O.height = t) : (b.height = T.height, b.width = T.width, O.height = T.height)
                }, o.updateSelCardItem = function(e, t, n, a) {
                    var i = this;
                    void 0 === n && (n = null);
                    var o = [];
                    this.content.destroyAllChildren();
                    for (var r = [], s = 0; s < e.length; s++) {
                        var p = e[s].cards;
                        r.push({
                            code: null,
                            cards: p,
                            index: s
                        })
                    }
                    r.sort((function(e, t) {
                        return t.cards.length - e.cards.length
                    }));
                    var m = [],
                        _ = [];
                    r.forEach((function(e) {
                        var t = e.cards,
                            n = e.code,
                            a = e.index;
                        t.length > 7 ? m.push([{
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !1
                        }]) : _[_.length - 1] && _[_.length - 1].length < 2 ? _[_.length - 1].push({
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !0
                        }) : _.push([{
                            code: n,
                            cards: t,
                            index: a,
                            isPair: !0
                        }])
                    })), m = m.concat(_);
                    for (var g = 700, E = 0; E < m.length; E++) {
                        var S = m[E],
                            A = new u,
                            I = A.addComponent(l);
                        I.width = g, I.height = 85;
                        for (var G = function(e) {
                                var t = S[e],
                                    a = (t.code, t.index),
                                    r = t.cards,
                                    s = h(i.itemPrefab);
                                s.destroyAllChildren(), o[a] = !1, r.forEach((function(e) {
                                    var t = h(i.CardPrefab);
                                    t.getComponent(f).setCardByte(e), t.getComponent(f).setCardSize(52, 85), t.getComponent(f).setBlack(!0), s.addChild(t)
                                })), s.getComponent(C).index = a, s.off(u.EventType.TOUCH_END), s.on(u.EventType.TOUCH_END, (function(e) {
                                    e.target.getComponent(C).index, o[a] = !o[a], e.target.children.forEach((function(e) {
                                        e.getComponent(f).setBlack(!o[a])
                                    })), n(o)
                                }), i);
                                var d = 52 * r.length;
                                if (s.getComponent(l).width = d, t.isPair) {
                                    var c = d / 2 + 20;
                                    s.setPosition(0 == e ? -c : c, 0)
                                } else s.setPosition(0, 0);
                                A.addChild(s), g = Math.max(g, d)
                            }, y = 0; y < S.length; y++) G(y);
                        this.content.addChild(A)
                    }
                    var v = this.content.getComponent(d);
                    v.updateLayout();
                    var P = this.content.getComponent(l);
                    P.height = 85 * m.length + v.spacingY * (m.length - 1) + v.paddingTop + v.paddingBottom, P.width = g;
                    var T = this.scrollView.getComponent(l),
                        b = this.node.getComponent(l);
                    P.height > t ? (T.height = t, T.width = P.width, b.height = t) : (T.height = P.height, T.width = P.width, b.height = P.height), null != a && (this.nodeTips.getComponent(c).spriteFrame = a, this.nodeTips.active = !0, this.nodeTips.setPosition(0, T.height + 20))
                }, o.opClick = function(e, t) {
                    var n = {
                        opCard: _.getInstance().getPassNumber(),
                        opCode: e,
                        opCards: _.getInstance().getOprationListNumber(e, t),
                        seatId: _.getInstance().seatId,
                        userId: _.getInstance().userId
                    };
                    n.extra = _.getInstance().getOprationListExtra(e, t), p.dispatch(g.SEND_PLAYER_OPERATION, n), p.dispatch(g.CLOSE_OPRATION_INFO)
                }, t
            }(m)).prototype, "CardPrefab", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(T.prototype, "itemPrefab", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(T.prototype, "scrollView", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(T.prototype, "content", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(T.prototype, "nodeTips", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = T)) || P) || P)), o._RF.pop()
        }
    }
}))