System.register("chunks:///_virtual/NodeWallCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJEvent3.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.instantiate, l = e.tween, d = e.Vec3
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.BaseComponent
        }, function(e) {
            p = e.RoomMgr
        }, function(e) {
            m = e.FXJEvent
        }, function(e) {
            _ = e.GameRuleConfig
        }, function(e) {
            g = e.GameViewConfig
        }, function(e) {
            f = e.CardUtil
        }],
        execute: function() {
            var C, E, S, A, I, G, y, v, P, T, b, O, R, M;
            o._RF.push({}, "0429arpWMxNYbMeed6QcI3O", "NodeWallCtr", void 0);
            var N = r.ccclass,
                U = r.property,
                D = r.menu;
            e("NodeWallCtr", (C = N("NodeWallCtr"), E = D("prefab/subGame/mj/NodeWallCtr"), S = U({
                tooltip: "牌节点",
                type: s
            }), A = U({
                tooltip: "升降台节点1",
                type: s
            }), I = U({
                tooltip: "升降台节点2",
                type: s
            }), G = U({
                tooltip: "升降台节点3",
                type: s
            }), y = U({
                tooltip: "升降台节点4",
                type: s
            }), C(v = E((T = t((P = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeCard", T, i(t)), a(t, "nodeDeskLift1", b, i(t)), a(t, "nodeDeskLift2", O, i(t)), a(t, "nodeDeskLift3", R, i(t)), a(t, "nodeDeskLift4", M, i(t)), t._nodeWall = null, t._wallStatus = g.WallStatus.Top, t._headIndex = -1, t._tailIndex = -1, t._remian = 0, t._gangCount = 0, t._wallList = null, t._numList = null, t._nodeDeskLiftList = null, t._hostDir = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(m.ROTAION_HANDCARD_OVER, this.onRotaionHandCardOver)
                }, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o.initData = function() {
                    var e = this.doGameCompFun("getCardTotalNum");
                    e || (e = _.CardTotalNum), this._wallList = new Array(e), this._numList = new Array(4);
                    for (var t = e / 2, n = Math.floor(t / 4), a = t % 4, i = 0; i < 4; i++) this._numList[i] = 2 * n;
                    if (a > 0)
                        for (var o = 0; o < 4; o++) a > 0 && (this._numList[o] += 2, a -= 1);
                    console.log("NodeWallCtr.initData", this._numList)
                }, o.initView = function() {
                    this._nodeWall = new s, this.node.addChild(this._nodeWall), this._nodeDeskLiftList = [this.nodeDeskLift1, this.nodeDeskLift2, this.nodeDeskLift3, this.nodeDeskLift4];
                    for (var e = g.CardConfig.ScaleWallCard, t = g.CardConfig.Width * e, n = (g.CardConfig.Height, g.CardConfig.Thickness * e), a = g.CardConfig.GroundToCard * e, i = g.CardConfig.CenterToWallCard, o = 0, r = 3; r >= 0; r--) {
                        for (var l = this._numList[r] / 2, d = new Array(l), c = -t * l * .5 + .5 * t, h = 0, p = this._numList[r] / 2 - 1; p >= 0; p--)
                            for (var m = 0; m < 2; m++) {
                                var _ = u(this.nodeCard);
                                this._nodeWall.addChild(_), 0 == r ? (_.setRotationFromEuler(0, 0, 180), _.setPosition(c + p * t, a + n * m, i)) : 1 == r ? (_.setRotationFromEuler(0, 90, 180), _.setPosition(i, a + n * m, c + p * t)) : 2 == r ? (_.setRotationFromEuler(0, 0, 180), _.setPosition(c + p * t, a + n * m, -i)) : 3 == r && (_.setRotationFromEuler(0, 90, 180), _.setPosition(-i, a + n * m, c + p * t)), d[h++] = _
                            }
                        if (console.log("NodeWallCtr.initView", "cardList.length", d.length), 0 == r || 3 == r)
                            for (var f = 0; f < d.length; f += 2) this._wallList[o++] = d[f + 1], this._wallList[o++] = d[f];
                        else if (1 == r || 2 == r)
                            for (var C = d.length - 1; C > 0; C -= 2) this._wallList[o++] = d[C], this._wallList[o++] = d[C - 1]
                    }
                    console.log("NodeWallCtr.initView", "this._wallList.length", this._wallList.length)
                }, o.updateView = function() {}, o.resetView = function() {
                    this._hostDir = f.getDirFromSeatId(p.getInstance().mySeatId), this.updateViewDir(), this._wallStatus = g.WallStatus.Top, this._headIndex = -1, this._tailIndex = -1, this._remian = this._wallList.length, this._gangCount = 0;
                    for (var e = 0; e < this._wallList.length; e++) this._wallList[e].active = !0;
                    var t = this._nodeWall.getPosition();
                    this._nodeWall.setPosition(t.x, 0, t.z), this._nodeWall.active = !1;
                    for (var n = 0; n < this._nodeDeskLiftList.length; n++) {
                        var a = this._nodeDeskLiftList[n],
                            i = a.getPosition();
                        a.setPosition(i.x, 0, i.z)
                    }
                }, o.riseUpInit = function() {
                    if (this.node.active = !0, this._wallStatus == g.WallStatus.Top) {
                        var e = this._nodeWall.getPosition();
                        this._nodeWall.setPosition(e.x, e.y - 8, e.z), this._nodeWall.active = !0;
                        for (var t = 0; t < this._nodeDeskLiftList.length; t++) {
                            var n = this._nodeDeskLiftList[t],
                                a = n.getPosition();
                            n.setPosition(a.x, a.y - .08, a.z)
                        }
                        this._wallStatus = g.WallStatus.Bottom
                    } else console.log("prepareRiseUp", "error", this._wallStatus)
                }, o.riseUp = function() {
                    var e = this;
                    if (this._wallStatus == g.WallStatus.Bottom) {
                        var t = this._nodeWall.getPosition();
                        l(this._nodeWall).to(1.6, {
                            position: new d(t.x, t.y + 8, t.z)
                        }).call((function() {
                            e._wallStatus != g.WallStatus.Top && (e._wallStatus = g.WallStatus.Top)
                        })).start();
                        for (var n = 0; n < this._nodeDeskLiftList.length; n++) {
                            var a = this._nodeDeskLiftList[n],
                                i = a.getPosition();
                            l(a).to(1.6, {
                                position: new d(i.x, i.y + .08, i.z)
                            }).start()
                        }
                        this._wallStatus = g.WallStatus.Moving
                    } else console.log("prepareRiseUp", "error", this._wallStatus)
                }, o.onRotaionHandCardOver = function() {
                    this.node.active = !1
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function(e) {
                    if (this.resetView(), !e) {
                        var t = this.doGameCompFun("checkGameStartShowCardWall");
                        if (c.isNotNull(t) && 0 == t) return;
                        this.riseUpInit(), this.riseUp()
                    }
                }, o.updateViewDir = function() {
                    var e = this;
                    this._nodeDeskLiftList.forEach((function(t, n, a) {
                        t.setRotationFromEuler(0, 90 * e._hostDir, 0)
                    }))
                }, o.onRollDices = function(e) {
                    this.changeHeadAndTail(e.diceInfo[0].seatId, e.diceInfo[0].dices)
                }, o.changeHeadAndTail = function(e, t) {
                    console.log("NodeWallCtr.changeHeadAndTail", "bankerSeatId", e, "diceList", t);
                    var n = t[0] + t[1],
                        a = Math.min(t[0] + t[1]);
                    if (n < 2 || n > 12) console.log("NodeWallCtr.changeHeadAndTail", "骰子数值非法", t);
                    else {
                        console.log("NodeWallCtr.changeHeadAndTail", "num", n, "min", a);
                        var i = 0;
                        5 == n || 9 == n ? i = e : 2 == n || 6 == n || 10 == n ? i = e + 1 : 3 == n || 7 == n || 11 == n ? i = e + 2 : 4 != n && 8 != n && 12 != n || (i = e + 3), i > 4 && (i -= 4), console.log("NodeWallCtr.changeHeadAndTail", "startSeatId", i), 4 == i ? this._tailIndex = 2 * a - 1 : 3 == i ? this._tailIndex = this._numList[2] + 2 * a - 1 : 2 == i ? this._tailIndex = this._numList[2] + this._numList[1] + 2 * a - 1 : 1 == i && (this._tailIndex = this._numList[2] + this._numList[1] + this._numList[0] + 2 * a - 1), this._headIndex = this._tailIndex + 1, console.log("NodeWallCtr.changeHeadAndTail", this._headIndex, this._tailIndex)
                    }
                }, o.onDealCard = function(e) {
                    for (var t = 0, n = 0; n < e.cardsCount.length; n++) t += e.cardsCount[n];
                    for (var a = 0; a < t; a++) this.takeOneCard()
                }, o.onFenZhang = function(e) {
                    var t = this;
                    e.cards.forEach((function(e, n) {
                        t.takeOneCard()
                    }))
                }, o.onTakeCard = function(e) {
                    if (this._remian <= e.remian) console.log("NodeWallCtr.onTakeCard", "牌桌剩余牌数太少");
                    else {
                        if (e.gangCount > this._gangCount)
                            for (var t = 0; t < e.gangCount - this._gangCount; t++) this.takeOneCardFromTail();
                        if (this._remian > e.remian)
                            for (var n = 0; n < this._remian - e.remian; n++) this.takeOneCard()
                    }
                }, o.takeOneCard = function() {
                    this.hasHead() && (this.isEmpty() ? console.log("NodeWallCtr.takeOneCard", "牌墙已空") : this._wallList[this._headIndex] && (this._wallList[this._headIndex].active = !1, this._headIndex++, this._headIndex > this._wallList.length - 1 && (this._headIndex = 0), this._remian = this._remian - 1))
                }, o.takeOneCardFromTail = function() {
                    if (this.hasHead())
                        if (this.isEmpty()) console.log("NodeWallCtr.takeOneCard", "牌墙已空");
                        else {
                            var e = this._tailIndex;
                            (e + 1) % 2 == 0 ? (e--, this._wallList[e] && (this._wallList[e].active = !1)) : (e++, this._wallList[e] && (this._wallList[e].active = !1)), this._tailIndex--, this._tailIndex < 0 && (this._tailIndex = this._wallList.length - 1), this._gangCount++, this._remian--
                        }
                }, o.hasHead = function() {
                    return this._headIndex >= 0 && this._tailIndex >= 0
                }, o.isEmpty = function() {
                    return this._remian <= 0
                }, o.onGameOver = function(e) {}, o.checkReconnectCanShowWall = function() {
                    this.doGameCompFun("checkReconnectCanShowWall", this.node) || (this.node.active = !1)
                }, o.onReconnect = function(e) {
                    this.resetView(), this.checkReconnectCanShowWall();
                    var t = e.dices,
                        n = e.bankSeatId,
                        a = e.gangCount,
                        i = e.remain;
                    this._checkReconnectDices(e) && this.changeHeadAndTail(n, t), this._wallList.forEach((function(e, t, n) {
                        e.active = !0
                    }));
                    for (var o = 0; o < this._wallList.length - i; o++) this.takeOneCard();
                    for (var r = 0; r < a; r++) this.takeOneCardFromTail();
                    this._nodeWall.active = !0
                }, o._checkReconnectDices = function(e) {
                    if (c.table_isEmpty(e.dices)) return !1;
                    for (var t = 0; t < e.dices.length; t++) {
                        var n = e.dices[t];
                        if (n < 1 || n > 6) return !1
                    }
                    return !0
                }, o.onDestroy = function() {}, t
            }(h)).prototype, "nodeCard", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(P.prototype, "nodeDeskLift1", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(P.prototype, "nodeDeskLift2", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(P.prototype, "nodeDeskLift3", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(P.prototype, "nodeDeskLift4", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = P)) || v) || v)), o._RF.pop()
        }
    }
}))