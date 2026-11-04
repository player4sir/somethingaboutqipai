System.register("chunks:///_virtual/NodeHuCardCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJEvent3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts", "./NodeCardCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Tween, l = e.tween, d = e.instantiate
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            m = e.RoomMgr
        }, function(e) {
            _ = e.FXJEvent
        }, function(e) {
            g = e.GameEvent
        }, function(e) {
            f = e.GameRuleConfig
        }, function(e) {
            C = e.GameViewConfig
        }, function(e) {
            E = e.CardUtil
        }, function(e) {
            S = e.NodeCardCtr
        }],
        execute: function() {
            var A, I, G, y, v, P;
            o._RF.push({}, "056bcZ1pCFM4p1JNkn53MY0", "NodeHuCardCtr", void 0);
            var T = r.ccclass,
                b = r.property,
                O = r.menu;
            e("NodeHuCardCtr", (A = T("NodeHuCardCtr"), I = O("prefab/subGame/mj/NodeHuCardCtr"), G = b({
                tooltip: "牌节点",
                type: s
            }), A(y = I((P = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCard", P, i(t)), t._hostDir = 0, t._seatList = null, t._scale = 0, t._width = 0, t._height = 0, t._thickness = 0, t._groundToCard = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.start = function() {}, o.initData = function() {}, o.updateUserDir = function() {
                    for (var e = this.node.children, t = 0; t < e.length; t++) e[t].setRotationFromEuler(0, 90 * this.getRatationDir(t), 0)
                }, o.initView = function() {
                    var e = C.CardConfig.ScaleHuCard,
                        t = C.CardConfig.Width * e,
                        n = C.CardConfig.Height * e,
                        a = C.CardConfig.Thickness * e,
                        i = C.CardConfig.GroundToCard * e;
                    this._scale = e, this._width = t, this._height = n, this._thickness = a, this._groundToCard = i, this._seatList = new Array(f.playerNum);
                    for (var o = 0; o < this._seatList.length; o++) {
                        var r = new s;
                        this.node.addChild(r), r.setRotationFromEuler(0, 90 * this.getRatationDir(o), 0), this._seatList[o] = r
                    }
                }, o.updateView = function() {}, o.getRatationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return c.isNull(t) ? e : t
                }, o.resetView = function() {
                    this._hostDir = E.getDirFromSeatId(m.getInstance().mySeatId), u.stopAllByTarget(this.node), this._seatList.forEach((function(e, t, n) {
                        e.destroyAllChildren()
                    }))
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onHu = function(e) {
                    var t = E.getDirFromSeatId(e.seatId),
                        n = e.opCard;
                    this.showHuCard(t, n, !1)
                }, o.showHuCard = function(e, t, n) {
                    var a = this;
                    this._seatList[e].children.length >= f.CardHuNum || (E.calculatePlayerPosition(E.getSeatIdFromDir(this._hostDir), E.getSeatIdFromDir(e)), l(this.node).delay(n ? 0 : .5).call((function() {
                        a.pushCardA(e, t, n)
                    })).start())
                }, o.pushCardA = function(e, t, n) {
                    var a = this._scale,
                        i = this._width,
                        o = this._thickness,
                        r = this._groundToCard,
                        s = this._seatList[e].children.length,
                        u = Math.floor(s / 4),
                        l = s % 4,
                        c = C.CardConfig.CenterToHuCard,
                        h = d(this.nodeCard);
                    h.setScale(h.scale.x * a, h.scale.y * a, h.scale.z * a);
                    var p = C.CardConfig.CenterToHuCardX - (i + C.CardConfig.SpaceHuCard) * l,
                        m = r + u * o;
                    h.setPosition(p, m, c), h.setRotationFromEuler(0, 0, 0), h.active = !0, h.getComponent(S).setCardByte(t), this._seatList[e].addChild(h), this.showHuAnim(e, h, n)
                }, o.showHuAnim = function(e, t, n) {
                    if (!n) {
                        var a = {
                            seatId: E.getSeatIdFromDir(e),
                            aniType: C.AnimType.Hu,
                            pos: t.getWorldPosition(),
                            eventId: g.SHOW_SETTLE_VIEW
                        };
                        h.dispatch(_.VIEW_OUT_CARD_ANI_PLAY, a)
                    }
                }, o.getWho = function(e, t) {
                    return (t + 4 - e) % 4
                }, o.onGameOver = function(e) {}, o.onReconnect = function(e) {
                    var t = this;
                    this.resetView(), this.scheduleOnce((function() {
                        u.stopAllByTarget(t.node), e.playerList.forEach((function(e, n, a) {
                            if (!t.doGameCompFun("checkHuListInfo", e, (function(e) {
                                    e && null != e.card && null != e.dir && t.showHuCard(e.dir, e.card, !0)
                                }))) {
                                var i = E.getDirFromSeatId(e.seatId),
                                    o = e.isHu,
                                    r = e.huCard;
                                o && c.isNotNull(r) && r > 0 && t.showHuCard(i, r, !0)
                            }
                        }))
                    }))
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(this.name, t)
                }, t
            }(p)).prototype, "nodeCard", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = v)) || y) || y)), o._RF.pop()
        }
    }
}))