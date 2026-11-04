System.register("chunks:///_virtual/NodeHuCardCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJEvent.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts", "./NodeCardCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Tween, u = e.tween, d = e.instantiate
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            f = e.RoomMgr
        }, function(e) {
            _ = e.FXJEvent
        }, function(e) {
            g = e.GameEvent
        }, function(e) {
            m = e.GameRuleConfig
        }, function(e) {
            C = e.GameViewConfig
        }, function(e) {
            I = e.CardUtil
        }, function(e) {
            A = e.NodeCardCtr
        }],
        execute: function() {
            var E, v, y, S, P, T;
            o._RF.push({}, "3a700KxE9JHeJ3hYurNPZNj", "NodeHuCardCtr", void 0);
            var G = r.ccclass,
                O = r.property,
                R = r.menu;
            e("NodeHuCardCtr", (E = G("NodeHuCardCtr"), v = R("prefab/game/NodeHuCardCtr"), y = O({
                tooltip: "牌节点",
                type: s
            }), E(S = v((T = t((P = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCard", T, a(t)), t._hostDir = 0, t._seatList = null, t._scale = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.start = function() {}, o.initData = function() {}, o.updateUserDir = function() {
                    for (var e = this.node.children, t = 0; t < e.length; t++) e[t].setRotationFromEuler(0, 90 * this.getRatationDir(t), 0)
                }, o.initView = function() {
                    var e = C.CardConfig.ScaleHuCard,
                        t = C.CardConfig.Width * e,
                        n = C.CardConfig.Height * e,
                        i = C.CardConfig.Thickness * e,
                        a = C.CardConfig.GroundToCard * e;
                    this._scale = e, this._width = t, this._height = n, this._thickness = i, this._groundToCard = a, this._seatList = new Array(m.playerNum);
                    for (var o = 0; o < this._seatList.length; o++) {
                        var r = new s;
                        this.node.addChild(r), r.setRotationFromEuler(0, 90 * this.getRatationDir(o), 0), this._seatList[o] = r
                    }
                }, o.updateView = function() {}, o.getRatationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return c.isNull(t) ? e : t
                }, o.resetView = function() {
                    this._hostDir = I.getDirFromSeatId(f.getInstance().mySeatId), l.stopAllByTarget(this.node), this._seatList.forEach((function(e, t, n) {
                        e.destroyAllChildren()
                    }))
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onHu = function(e) {
                    var t = I.getDirFromSeatId(e.seatId),
                        n = e.opCard;
                    this.showHuCard(t, n, !1)
                }, o.showHuCard = function(e, t, n) {
                    var i = this;
                    this._seatList[e].children.length >= m.CardHuNum || (I.calculatePlayerPosition(I.getSeatIdFromDir(this._hostDir), I.getSeatIdFromDir(e)), u(this.node).delay(n ? 0 : .5).call((function() {
                        i.pushCardA(e, t, n)
                    })).start())
                }, o.pushCardA = function(e, t, n) {
                    var i = this._scale,
                        a = this._width,
                        o = this._thickness,
                        r = this._groundToCard,
                        s = this._seatList[e].children.length,
                        l = Math.floor(s / 4),
                        u = s % 4,
                        c = C.CardConfig.CenterToHuCard,
                        h = d(this.nodeCard);
                    h.setScale(h.scale.x * i, h.scale.y * i, h.scale.z * i);
                    var p = C.CardConfig.CenterToHuCardX - (a + C.CardConfig.SpaceHuCard) * u,
                        f = r + l * o;
                    h.setPosition(p, f, c), h.setRotationFromEuler(0, 0, 0), h.active = !0, h.getComponent(A).setCardByte(t), this._seatList[e].addChild(h), this.showHuAnim(e, h, n)
                }, o.showHuAnim = function(e, t, n) {
                    if (!n) {
                        var i = {
                            seatId: I.getSeatIdFromDir(e),
                            aniType: C.AnimType.Hu,
                            pos: t.getWorldPosition(),
                            eventId: g.SHOW_SETTLE_VIEW
                        };
                        h.dispatch(_.VIEW_OUT_CARD_ANI_PLAY, i)
                    }
                }, o.getWho = function(e, t) {
                    return (t + 4 - e) % 4
                }, o.onGameOver = function(e) {}, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), this.scheduleOnce((function() {
                        l.stopAllByTarget(t.node), e.playerList.forEach((function(e, n, i) {
                            if (!t.doGameCompFun("checkHuListInfo", e, (function(e) {
                                    e && null != e.card && null != e.dir && t.showHuCard(e.dir, e.card, !0)
                                }))) {
                                var a = I.getDirFromSeatId(e.seatId),
                                    o = e.isHu,
                                    r = e.huCard;
                                o && c.isNotNull(r) && r > 0 && t.showHuCard(a, r, !0)
                            }
                        }))
                    }))
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(this.name, t)
                }, t
            }(p)).prototype, "nodeCard", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = P)) || S) || S)), o._RF.pop()
        }
    }
}))