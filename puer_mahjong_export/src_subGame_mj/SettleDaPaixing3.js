System.register("chunks:///_virtual/SettleDaPaixing3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./SpriteLoad.ts", "./DelegateComponent.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./AppControler.ts", "./SubGameConfig.ts", "./RoomMgr6.ts", "./SettleMgr3.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameRuleConfig4.ts", "./NodeCardCtr3.ts", "./Card5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T, b, O, R, M, N, U, D, L;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.SpriteAtlas, u = e.Prefab, l = e.Node, d = e.Sprite, c = e.instantiate, h = e.Label, p = e.Layout, m = e.UITransform, _ = e.Vec2
        }, function(e) {
            g = e.Utils
        }, function(e) {
            f = e.GCache
        }, function(e) {
            C = e.AppEvent
        }, function(e) {
            E = e.default
        }, function(e) {
            S = e.DelegateComponent
        }, function(e) {
            A = e.EventManager
        }, function(e) {
            I = e.BaseComponent
        }, function(e) {
            G = e.Platform
        }, function(e) {
            y = e.AppControler
        }, function(e) {
            v = e.SubGameConfig
        }, function(e) {
            P = e.RoomMgr
        }, function(e) {
            T = e.SettleMgr
        }, function(e) {
            b = e.FXJEvent
        }, function(e) {
            O = e.FXJRes, R = e.FXJUIID
        }, function(e) {
            M = e.GameSound, N = e.FXJSound
        }, function(e) {
            U = e.GameRuleConfig
        }, function(e) {
            D = e.CardTag
        }, function(e) {
            L = e.Card
        }],
        execute: function() {
            var B, w, k, H, x, F, V, J, j, W, z, X, Z, Y, Q, q, K, $, ee, te, ne, ae, ie, oe, re, se, ue, le, de, ce, he, pe;
            o._RF.push({}, "6f4b68WVHZEur+UZph0ZdDA", "SettleDaPaixing", void 0);
            var me = r.ccclass,
                _e = r.property,
                ge = r.menu;
            e("SettleDaPaixing", (B = me("SettleDaPaixing"), w = ge("prefab/subGame/mj/SettleDaPaixing"), k = _e(s), H = _e(u), x = _e(l), F = _e(l), V = _e(l), J = _e(d), j = _e(d), W = _e(l), z = _e(l), X = _e(l), Z = _e(l), Y = _e({
                tooltip: "资产icon",
                type: d
            }), Q = _e({
                tooltip: "截屏按钮",
                type: l
            }), q = _e(l), B(K = w((ee = t(($ = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "atlas", ee, i(t)), a(t, "cardPrefab", te, i(t)), a(t, "btnBack", ne, i(t)), a(t, "huTag", ae, i(t)), a(t, "bg", ie, i(t)), a(t, "title", oe, i(t)), a(t, "role", re, i(t)), a(t, "cardLayout", se, i(t)), a(t, "fanNumLayout", ue, i(t)), a(t, "winNumLayout", le, i(t)), a(t, "scrollContent", de, i(t)), a(t, "coin", ce, i(t)), a(t, "btnAlbum", he, i(t)), a(t, "item", pe, i(t)), t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    A.dispatch(C.VIEW_SET_LIGHT_DATA, {
                        directionalLum: 16e4
                    }), A.dispatch(C.VIEW_SET_LIGHT_DATA, {
                        directionalRotation: 15
                    })
                }, o.start = function() {
                    if (this.initView(), G.isOHOS(!0)) {
                        var e = this.btnAlbum.parent.getChildByName("shareBtn");
                        e && (e.active = !1), this.btnAlbum.active = !1
                    }
                }, o.addGameComp = function() {
                    null == this.node && (this.node = g.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (t || (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.initView = function() {
                    var e, t;
                    f.SelectGame.isInPrivateRoom() && (this.coin.spriteFrame = this.atlas.spriteFrames.score);
                    var n = T.getInstance().getSettleShowItemBySeat(P.getInstance().mySeatId);
                    n = n.filter((function(e) {
                        return e.isFan
                    }));
                    var a, i, o, r = null;
                    T.getInstance().daPaixing && null != (a = r = T.getInstance().daPaixing[P.getInstance().mySeatId]) && a.isExtra && n.push(r), n = n.sort((function(e, t) {
                        return t.num - e.num
                    }));
                    for (var s = 0; s < n.length; s += 2) {
                        var u = void 0;
                        0 == s ? u = this.item : (u = c(this.item), this.scrollContent.addChild(u));
                        var l = this.setFanItem(u, 1, n[s], o);
                        i = l[0], o = l[1];
                        var d = this.setFanItem(u, 2, n[s + 1], o);
                        i = d[0], o = d[1]
                    }
                    this.print("settle winTitleItem", i), this.print("settle fanTemp", o), this.showDaPaiXingTitle(i, o, n);
                    var h = T.getInstance().getTotalInfoBySeatId(P.getInstance().mySeatId);
                    if (!g.isNull(h)) {
                        var p = Math.max(h.totalFan, (null == (e = r) ? void 0 : e.totalFan) || 0);
                        g.createNumSprImg(this.fanNumLayout, {
                            atlas: this.atlas,
                            str: "共" + (p.toString() + U.unitText)
                        });
                        var m = h.winMoney > 0 ? "+" + h.winMoney : h.winMoney.toString();
                        g.createNumSprImg(this.winNumLayout, {
                            atlas: this.atlas,
                            str: m
                        });
                        var _ = T.getInstance().findPlayerWithSeatId(P.getInstance().mySeatId),
                            C = 2 == (null == (t = _.gameUserInfo) ? void 0 : t.sex) ? "xiaoya" : "xiaobo";
                        this.role.getComponent(E).setLocalLoad(v.SubGamePackage.SUBGAME_MJ_REMOTE, "module/settle/image/" + C), this._showHandCards(_)
                    }
                }, o.showDaPaiXingTitle = function(e, t, n) {
                    (e = e || t) && t && e.num < t.num && t.type < 3 && (e = t);
                    var a = this;

                    function i(e) {
                        var t = U.GamePaiXingConfig[e];
                        if (g.isNotNull(t) && g.isNotNull(t.settleText)) return a.title.getComponent(E).setLocalLoad(t.settleText.bundle, t.settleText.path), !0
                    }
                    if (!e || !i(e.paixingId))
                        for (var o = 0; o < (null == n ? void 0 : n.length) && !i(n[o].paixingId); o++);
                }, o.setFanItem = function(e, t, n, a) {
                    var i;
                    return n && n.isFan ? (e.getChildByName("fan" + t).getComponent(h).string = n.name, e.getChildByName("num" + t).getComponent(h).string = n.num + U.unitText, 1 === n.isTitle && (i = n), (!a || n.num > a.num) && n.type < 3 && (a = n)) : (e.getChildByName("fan" + t).getComponent(h).string = "", e.getChildByName("num" + t).getComponent(h).string = ""), [i, a]
                }, o._showHandCards = function(e) {
                    var t = this;
                    if (!this.doGameCompFun("showDaPaixingCards", e, this.cardPrefab, this.cardLayout, this.huTag)) {
                        if (e.opGroups.length > 0 && !this.doGameCompFun("showDaPaixingOpGroupsCards", e, this.cardPrefab, this.cardLayout)) {
                            var n = T.getInstance().filterCPGCards(e.opGroups);
                            n.length > 0 && n.forEach((function(e) {
                                var n = g.create_2DNode("opGroups");
                                n.addComponent(p);
                                var a = n.getComponent(p);
                                a.type = p.Type.HORIZONTAL, a.alignHorizontal = !0, a.resizeMode = p.ResizeMode.CONTAINER, a.horizontalDirection = p.HorizontalDirection.LEFT_TO_RIGHT, a.paddingRight = 7, a.affectedByScale = !0, e.forEach((function(e, a) {
                                    var i = e,
                                        o = c(t.cardPrefab);
                                    o.getComponent(L).setCardTag(D.HandCard), o.getComponent(L).setCardByte(i), o.getComponent(L).setCardSize(61, 98), o.getComponent(L).setCardAngle(320, 0, 0), o.getComponent(L).setCardAlbedo(.8, .8, .8), n.addChild(o)
                                })), t.cardLayout.addChild(n)
                            }))
                        }
                        for (var a = null == e ? void 0 : e.handCards.filter((function(t) {
                                return t !== e.huCard
                            })), i = 0; i < a.length; i++) {
                            var o = e.handCards[i],
                                r = c(this.cardPrefab);
                            r.getComponent(L).setCardTag(D.HandCard), r.getComponent(L).setCardByte(o), r.getComponent(L).setCardSize(61, 98), r.getComponent(L).setCardAngle(320, 0, 0), r.getComponent(L).setCardAlbedo(.8, .8, .8), this.cardLayout.addChild(r)
                        }
                        if (!g.isNull(e.huCard)) {
                            var s = g.create_2DNode("cardNode"),
                                u = s.getComponent(m);
                            u.setContentSize(76, 98), u.anchorPoint = new _(0, .5);
                            var l = c(this.cardPrefab);
                            l.getComponent(L).setCardByte(e.huCard), l.getComponent(L).setCardSize(61, 98), l.getComponent(L).setCardAngle(320, 0, 0), l.getComponent(L).setCardAlbedo(.8, .8, .8), l.setPosition(45.5, 0), s.addChild(l), this.cardLayout.addChild(s), this.huTag.active = !0, l.addChild(this.huTag), this.huTag.setPosition(-13, 38)
                        }
                    }
                }, o.onClickAlbum = function() {
                    A.dispatch(C.VIEW_SCREENSHOT_TO_ALBUM)
                }, o.onClickShare = function(e, t) {
                    f.SelectGame.isInPrivateRoom() ? y.getInstance().reportClickEvent("room_11") : y.getInstance().reportClickEvent("room_18"), M.getInstance().playEffect(N.CommClick);
                    var n = {
                        title: "缺一门才叫血战！刮风下雨，查叫定输赢，来？",
                        imageUrl: O.AppCommon_Share_Friend_Comm.path
                    };
                    A.dispatch(C.EVENT_REQ_WXIN_SHARE, n)
                }, o.onClickClose = function(e, t) {
                    var n;
                    A.dispatch(b.GAME_CLOSE_POPUP, R.GameSettleDaPaixingPrefab), M.getInstance().playEffect(N.CommClick);
                    var a = this.node.getComponent(S);
                    a && (n = a.getParams()), A.dispatch(b.GAME_OPEN_POPUP, R.GameSettlePrefab, n)
                }, o.onDestroy = function() {}, t
            }(I)).prototype, "atlas", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t($.prototype, "cardPrefab", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t($.prototype, "btnBack", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t($.prototype, "huTag", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t($.prototype, "bg", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t($.prototype, "title", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t($.prototype, "role", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t($.prototype, "cardLayout", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t($.prototype, "fanNumLayout", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t($.prototype, "winNumLayout", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t($.prototype, "scrollContent", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t($.prototype, "coin", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t($.prototype, "btnAlbum", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t($.prototype, "item", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = $)) || K) || K)), o._RF.pop()
        }
    }
}))