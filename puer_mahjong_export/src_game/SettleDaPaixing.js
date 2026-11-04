System.register("chunks:///_virtual/SettleDaPaixing.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameRes.ts", "./SpriteLoad.ts", "./DelegateComponent.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./AppControler.ts", "./RoomMgr.ts", "./SettleMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameRuleConfig.ts", "./NodeCardCtr.ts", "./Card.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G, O, R, N, b, D, L, M, U, w, B, H;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, l = e.Prefab, u = e.Node, d = e.Sprite, c = e.find, h = e.instantiate, p = e.Label, f = e.Layout, _ = e.UITransform, g = e.Vec2
        }, function(e) {
            m = e.ClientInfo
        }, function(e) {
            C = e.Utils
        }, function(e) {
            I = e.GCache
        }, function(e) {
            A = e.AppEvent
        }, function(e) {
            E = e.GamePackage, v = e.GameRes
        }, function(e) {
            y = e.default
        }, function(e) {
            S = e.DelegateComponent
        }, function(e) {
            P = e.EventManager
        }, function(e) {
            T = e.BaseComponent
        }, function(e) {
            G = e.Platform
        }, function(e) {
            O = e.AppControler
        }, function(e) {
            R = e.RoomMgr
        }, function(e) {
            N = e.SettleMgr
        }, function(e) {
            b = e.FXJEvent
        }, function(e) {
            D = e.FXJUIID
        }, function(e) {
            L = e.GameSound, M = e.FXJSound
        }, function(e) {
            U = e.GameRuleConfig, w = e.GamePaiXingConfig
        }, function(e) {
            B = e.CardTag
        }, function(e) {
            H = e.Card
        }],
        execute: function() {
            var F, k, V, x, W, z, Z, X, J, j, Y, Q, q, K, $, ee, te, ne, ie, ae, oe, re, se, le, ue, de, ce, he, pe, fe, _e, ge;
            o._RF.push({}, "2f50eHCIjFKgowjrXh6KdQp", "SettleDaPaixing", void 0);
            var me = r.ccclass,
                Ce = r.property,
                Ie = r.menu;
            e("SettleDaPaixing", (F = me("SettleDaPaixing"), k = Ie("prefab/game/SettleDaPaixing"), V = Ce(s), x = Ce(l), W = Ce(u), z = Ce(u), Z = Ce(u), X = Ce(d), J = Ce(d), j = Ce(u), Y = Ce(u), Q = Ce(u), q = Ce(u), K = Ce({
                tooltip: "资产icon",
                type: d
            }), $ = Ce({
                tooltip: "截屏按钮",
                type: u
            }), ee = Ce(u), F(te = k((ie = t((ne = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "atlas", ie, a(t)), i(t, "cardPrefab", ae, a(t)), i(t, "btnBack", oe, a(t)), i(t, "huTag", re, a(t)), i(t, "bg", se, a(t)), i(t, "title", le, a(t)), i(t, "role", ue, a(t)), i(t, "cardLayout", de, a(t)), i(t, "fanNumLayout", ce, a(t)), i(t, "winNumLayout", he, a(t)), i(t, "scrollContent", pe, a(t)), i(t, "coin", fe, a(t)), i(t, "btnAlbum", _e, a(t)), i(t, "item", ge, a(t)), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    P.dispatch(A.VIEW_SET_LIGHT_DATA, {
                        directionalLum: 16e4
                    }), P.dispatch(A.VIEW_SET_LIGHT_DATA, {
                        directionalRotation: 15
                    })
                }, o.start = function() {
                    this.initView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = C.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t || (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.initView = function() {
                    var e, t;
                    if (G.isOHOS(!0)) {
                        var n = c("layout/shareBtn", this.bg);
                        n && (n.active = !1);
                        var i = c("layout/albumBtn", this.bg);
                        i && (i.active = !1)
                    }
                    I.SelectGame.isInPrivateRoom() && (this.coin.spriteFrame = this.atlas.spriteFrames.score);
                    var a = N.getInstance().getSettleShowItemBySeat(R.getInstance().mySeatId);
                    a = a.filter((function(e) {
                        return e.isFan
                    }));
                    var o, r, s, l = null;
                    N.getInstance().daPaixing && null != (o = l = N.getInstance().daPaixing[R.getInstance().mySeatId]) && o.isExtra && a.push(l), a = a.sort((function(e, t) {
                        return t.num - e.num
                    }));
                    for (var u = 0; u < a.length; u += 2) {
                        var d = void 0;
                        0 == u ? d = this.item : (d = h(this.item), this.scrollContent.addChild(d));
                        var p = this.setFanItem(d, 1, a[u], s);
                        r = p[0], s = p[1];
                        var f = this.setFanItem(d, 2, a[u + 1], s);
                        r = f[0], s = f[1]
                    }
                    this.print("settle winTitleItem", r), this.print("settle fanTemp", s), this.showDaPaiXingTitle(r, s, a);
                    var _ = N.getInstance().getTotalInfoBySeatId(R.getInstance().mySeatId);
                    if (!C.isNull(_)) {
                        var g = Math.max(_.totalFan, (null == (e = l) ? void 0 : e.totalFan) || 0);
                        C.createNumSprImg(this.fanNumLayout, {
                            atlas: this.atlas,
                            str: "共" + (g.toString() + U.unitText)
                        });
                        var m = _.winMoney > 0 ? "+" + _.winMoney : _.winMoney.toString();
                        C.createNumSprImg(this.winNumLayout, {
                            atlas: this.atlas,
                            str: m
                        });
                        var A = N.getInstance().findPlayerWithSeatId(R.getInstance().mySeatId),
                            v = 2 == (null == (t = A.gameUserInfo) ? void 0 : t.sex) ? "xiaoya" : "xiaobo";
                        this.role.getComponent(y).setLocalLoad(E.GAME_REMOTE, "module/settle/image/" + v), this._showHandCards(A)
                    }
                }, o.showDaPaiXingTitle = function(e, t, n) {
                    (e = e || t) && t && e.num < t.num && t.type < 3 && (e = t);
                    var i = this;

                    function a(e) {
                        var t = w[e];
                        if (C.isNotNull(t) && C.isNotNull(t.settleText)) return i.title.getComponent(y).setLocalLoad(t.settleText.bundle, t.settleText.path), !0
                    }
                    if (!e || !a(e.paixingId))
                        for (var o = 0; o < (null == n ? void 0 : n.length) && !a(n[o].paixingId); o++);
                }, o.setFanItem = function(e, t, n, i) {
                    var a;
                    return n && n.isFan ? (e.getChildByName("fan" + t).getComponent(p).string = n.name, e.getChildByName("num" + t).getComponent(p).string = n.num + U.unitText, 1 === n.isTitle && (a = n), (!i || n.num > i.num) && n.type < 3 && (i = n)) : (e.getChildByName("fan" + t).getComponent(p).string = "", e.getChildByName("num" + t).getComponent(p).string = ""), [a, i]
                }, o._showHandCards = function(e) {
                    var t = this;
                    if (!this.doGameCompFun("showDaPaixingCards", e, this.cardPrefab, this.cardLayout, this.huTag)) {
                        if (e.opGroups.length > 0 && !this.doGameCompFun("showDaPaixingOpGroupsCards", e, this.cardPrefab, this.cardLayout)) {
                            var n = N.getInstance().filterCPGCards(e.opGroups);
                            n.length > 0 && n.forEach((function(e) {
                                var n = C.create_2DNode("opGroups");
                                n.addComponent(f);
                                var i = n.getComponent(f);
                                i.type = f.Type.HORIZONTAL, i.alignHorizontal = !0, i.resizeMode = f.ResizeMode.CONTAINER, i.horizontalDirection = f.HorizontalDirection.LEFT_TO_RIGHT, i.paddingRight = 7, i.affectedByScale = !0, e.forEach((function(e, i) {
                                    var a = e,
                                        o = h(t.cardPrefab);
                                    o.getComponent(H).setCardTag(B.HandCard), o.getComponent(H).setCardByte(a), o.getComponent(H).setCardSize(61, 98), o.getComponent(H).setCardAngle(320, 0, 0), o.getComponent(H).setCardAlbedo(.8, .8, .8), n.addChild(o)
                                })), t.cardLayout.addChild(n)
                            }))
                        }
                        for (var i = null == e ? void 0 : e.handCards.filter((function(t) {
                                return t !== e.huCard
                            })), a = 0; a < i.length; a++) {
                            var o = e.handCards[a],
                                r = h(this.cardPrefab);
                            r.getComponent(H).setCardTag(B.HandCard), r.getComponent(H).setCardByte(o), r.getComponent(H).setCardSize(61, 98), r.getComponent(H).setCardAngle(320, 0, 0), r.getComponent(H).setCardAlbedo(.8, .8, .8), this.cardLayout.addChild(r)
                        }
                        if (!C.isNull(e.huCard)) {
                            var s = C.create_2DNode("cardNode"),
                                l = s.getComponent(_);
                            l.setContentSize(76, 98), l.anchorPoint = new g(0, .5);
                            var u = h(this.cardPrefab);
                            u.getComponent(H).setCardByte(e.huCard), u.getComponent(H).setCardSize(61, 98), u.getComponent(H).setCardAngle(320, 0, 0), u.getComponent(H).setCardAlbedo(.8, .8, .8), u.setPosition(45.5, 0), s.addChild(u), this.cardLayout.addChild(s), this.huTag.active = !0, u.addChild(this.huTag), this.huTag.setPosition(-13, 38)
                        }
                    }
                }, o.onClickAlbum = function() {
                    P.dispatch(A.VIEW_SCREENSHOT_TO_ALBUM)
                }, o.onClickShare = function(e, t) {
                    I.SelectGame.isInPrivateRoom() ? O.getInstance().reportClickEvent("room_11") : O.getInstance().reportClickEvent("room_18"), L.getInstance().playEffect(M.CommClick);
                    var n = {
                        title: m.deviceInfo.shareTitle,
                        imageUrl: v.AppCommon_Share_Friend_Comm.path
                    };
                    P.dispatch(A.EVENT_REQ_WXIN_SHARE, n)
                }, o.onClickClose = function(e, t) {
                    var n;
                    P.dispatch(b.GAME_CLOSE_POPUP, D.GameSettleDaPaixingPrefab), L.getInstance().playEffect(M.CommClick);
                    var i = this.node.getComponent(S);
                    i && (n = i.getParams()), P.dispatch(b.GAME_OPEN_POPUP, D.GameSettlePrefab, n)
                }, o.onDestroy = function() {}, t
            }(T)).prototype, "atlas", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(ne.prototype, "cardPrefab", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(ne.prototype, "btnBack", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(ne.prototype, "huTag", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(ne.prototype, "bg", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(ne.prototype, "title", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(ne.prototype, "role", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(ne.prototype, "cardLayout", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(ne.prototype, "fanNumLayout", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(ne.prototype, "winNumLayout", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(ne.prototype, "scrollContent", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(ne.prototype, "coin", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(ne.prototype, "btnAlbum", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(ne.prototype, "item", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = ne)) || te) || te)), o._RF.pop()
        }
    }
}))