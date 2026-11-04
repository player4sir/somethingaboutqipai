System.register("chunks:///_virtual/NodeWallCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJEvent.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.instantiate, u = e.tween, d = e.Vec3
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.BaseComponent
        }, function(e) {
            p = e.RoomMgr
        }, function(e) {
            f = e.FXJEvent
        }, function(e) {
            _ = e.GameRuleConfig
        }, function(e) {
            g = e.GameViewConfig
        }, function(e) {
            m = e.CardUtil
        }],
        execute: function() {
            var C, I, A, E, v, y, S, P, T, G, O, R, N, b;
            o._RF.push({}, "47a792lHC5HlbU3BOiWcFB8", "NodeWallCtr", void 0);
            var D = r.ccclass,
                L = r.property,
                M = r.menu;
            e("NodeWallCtr", (C = D("NodeWallCtr"), I = M("prefab/game/NodeWallCtr"), A = L({
                tooltip: "牌节点",
                type: s
            }), E = L({
                tooltip: "升降台节点1",
                type: s
            }), v = L({
                tooltip: "升降台节点2",
                type: s
            }), y = L({
                tooltip: "升降台节点3",
                type: s
            }), S = L({
                tooltip: "升降台节点4",
                type: s
            }), C(P = I((G = t((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeCard", G, a(t)), i(t, "nodeDeskLift1", O, a(t)), i(t, "nodeDeskLift2", R, a(t)), i(t, "nodeDeskLift3", N, a(t)), i(t, "nodeDeskLift4", b, a(t)), t._nodeWall = null, t._wallStatus = g.WallStatus.Top, t._headIndex = -1, t._tailIndex = -1, t._remian = 0, t._gangCount = 0, t._wallList = null, t._numList = null, t._nodeDeskLiftList = null, t._hostDir = 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(f.ROTAION_HANDCARD_OVER, this.onRotaionHandCardOver)
                }, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.start = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o.initData = function() {
                    var e = this.doGameCompFun("getCardTotalNum");
                    e || (e = _.CardTotalNum), this._wallList = new Array(e), this._numList = new Array(4);
                    for (var t = e / 2, n = Math.floor(t / 4), i = t % 4, a = 0; a < 4; a++) this._numList[a] = 2 * n;
                    if (i > 0)
                        for (var o = 0; o < 4; o++) i > 0 && (this._numList[o] += 2, i -= 1);
                    console.log("NodeWallCtr.initData", this._numList)
                }, o.initView = function() {
                    this._nodeWall = new s, this.node.addChild(this._nodeWall), this._nodeDeskLiftList = [this.nodeDeskLift1, this.nodeDeskLift2, this.nodeDeskLift3, this.nodeDeskLift4];
                    for (var e = g.CardConfig.ScaleWallCard, t = g.CardConfig.Width * e, n = (g.CardConfig.Height, g.CardConfig.Thickness * e), i = g.CardConfig.GroundToCard * e, a = g.CardConfig.CenterToWallCard, o = 0, r = 3; r >= 0; r--) {
                        for (var u = this._numList[r] / 2, d = new Array(u), c = -t * u * .5 + .5 * t, h = 0, p = this._numList[r] / 2 - 1; p >= 0; p--)
                            for (var f = 0; f < 2; f++) {
                                var _ = l(this.nodeCard);
                                this._nodeWall.addChild(_), 0 == r ? (_.setRotationFromEuler(0, 0, 180), _.setPosition(c + p * t, i + n * f, a)) : 1 == r ? (_.setRotationFromEuler(0, 90, 180), _.setPosition(a, i + n * f, c + p * t)) : 2 == r ? (_.setRotationFromEuler(0, 0, 180), _.setPosition(c + p * t, i + n * f, -a)) : 3 == r && (_.setRotationFromEuler(0, 90, 180), _.setPosition(-a, i + n * f, c + p * t)), d[h++] = _
                            }
                        if (console.log("NodeWallCtr.initView", "cardList.length", d.length), 0 == r || 3 == r)
                            for (var m = 0; m < d.length; m += 2) this._wallList[o++] = d[m + 1], this._wallList[o++] = d[m];
                        else if (1 == r || 2 == r)
                            for (var C = d.length - 1; C > 0; C -= 2) this._wallList[o++] = d[C], this._wallList[o++] = d[C - 1]
                    }
                    console.log("NodeWallCtr.initView", "this._wallList.length", this._wallList.length)
                }, o.updateView = function() {}, o.resetView = function() {
                    this._hostDir = m.getDirFromSeatId(p.getInstance().mySeatId), this.updateViewDir(), this._wallStatus = g.WallStatus.Top, this._headIndex = -1, this._tailIndex = -1, this._remian = this._wallList.length, this._gangCount = 0;
                    for (var e = 0; e < this._wallList.length; e++) this._wallList[e].active = !0;
                    var t = this._nodeWall.getPosition();
                    this._nodeWall.setPosition(t.x, 0, t.z), this._nodeWall.active = !1;
                    for (var n = 0; n < this._nodeDeskLiftList.length; n++) {
                        var i = this._nodeDeskLiftList[n],
                            a = i.getPosition();
                        i.setPosition(a.x, 0, a.z)
                    }
                }, o.riseUpInit = function() {
                    if (this.node.active = !0, this._wallStatus == g.WallStatus.Top) {
                        var e = this._nodeWall.getPosition();
                        this._nodeWall.setPosition(e.x, e.y - 8, e.z), this._nodeWall.active = !0;
                        for (var t = 0; t < this._nodeDeskLiftList.length; t++) {
                            var n = this._nodeDeskLiftList[t],
                                i = n.getPosition();
                            n.setPosition(i.x, i.y - .08, i.z)
                        }
                        this._wallStatus = g.WallStatus.Bottom
                    } else console.log("prepareRiseUp", "error", this._wallStatus)
                }, o.riseUp = function() {
                    var e = this;
                    if (this._wallStatus == g.WallStatus.Bottom) {
                        var t = this._nodeWall.getPosition();
                        u(this._nodeWall).to(1.6, {
                            position: new d(t.x, t.y + 8, t.z)
                        }).call((function() {
                            e._wallStatus != g.WallStatus.Top && (e._wallStatus = g.WallStatus.Top)
                        })).start();
                        for (var n = 0; n < this._nodeDeskLiftList.length; n++) {
                            var i = this._nodeDeskLiftList[n],
                                a = i.getPosition();
                            u(i).to(1.6, {
                                position: new d(a.x, a.y + .08, a.z)
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
                    this._nodeDeskLiftList.forEach((function(t, n, i) {
                        t.setRotationFromEuler(0, 90 * e._hostDir, 0)
                    }))
                }, o.onRollDices = function(e) {
                    this.changeHeadAndTail(e.diceInfo[0].seatId, e.diceInfo[0].dices)
                }, o.changeHeadAndTail = function(e, t) {
                    console.log("NodeWallCtr.changeHeadAndTail", "bankerSeatId", e, "diceList", t);
                    var n = t[0] + t[1],
                        i = Math.min(t[0] + t[1]);
                    if (n < 2 || n > 12) console.log("NodeWallCtr.changeHeadAndTail", "骰子数值非法", t);
                    else {
                        console.log("NodeWallCtr.changeHeadAndTail", "num", n, "min", i);
                        var a = 0;
                        5 == n || 9 == n ? a = e : 2 == n || 6 == n || 10 == n ? a = e + 1 : 3 == n || 7 == n || 11 == n ? a = e + 2 : 4 != n && 8 != n && 12 != n || (a = e + 3), a > 4 && (a -= 4), console.log("NodeWallCtr.changeHeadAndTail", "startSeatId", a), 4 == a ? this._tailIndex = 2 * i - 1 : 3 == a ? this._tailIndex = this._numList[2] + 2 * i - 1 : 2 == a ? this._tailIndex = this._numList[2] + this._numList[1] + 2 * i - 1 : 1 == a && (this._tailIndex = this._numList[2] + this._numList[1] + this._numList[0] + 2 * i - 1), this._headIndex = this._tailIndex + 1, console.log("NodeWallCtr.changeHeadAndTail", this._headIndex, this._tailIndex)
                    }
                }, o.onDealCard = function(e) {
                    for (var t = 0, n = 0; n < e.cardsCount.length; n++) t += e.cardsCount[n];
                    for (var i = 0; i < t; i++) this.takeOneCard()
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
                    this.hasHead() ? this.isEmpty() ? console.log("NodeWallCtr.takeOneCard", "牌墙已空") : this._wallList[this._headIndex] && (this._wallList[this._headIndex].active = !1, this._headIndex++, this._headIndex > this._wallList.length - 1 && (this._headIndex = 0), this._remian = this._remian - 1) : console.log("NodeWallCtr.takeOneCard", "牌墙没有起点")
                }, o.takeOneCardFromTail = function() {
                    if (this.hasHead())
                        if (this.isEmpty()) console.log("NodeWallCtr.takeOneCard", "牌墙已空");
                        else {
                            var e = this._tailIndex;
                            (e + 1) % 2 == 0 ? (e--, this._wallList[e] && (this._wallList[e].active = !1)) : (e++, this._wallList[e] && (this._wallList[e].active = !1)), this._tailIndex--, this._tailIndex < 0 && (this._tailIndex = this._wallList.length - 1), this._gangCount++, this._remian--
                        }
                    else console.log("NodeWallCtr.takeOneCard", "牌墙没有起点")
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
                        i = e.gangCount,
                        a = e.remain;
                    this._checkReconnectDices(e) && this.changeHeadAndTail(n, t), this._wallList.forEach((function(e, t, n) {
                        e.active = !0
                    }));
                    for (var o = 0; o < this._wallList.length - a; o++) this.takeOneCard();
                    for (var r = 0; r < i; r++) this.takeOneCardFromTail();
                    this._nodeWall.active = !0
                }, o._checkReconnectDices = function(e) {
                    if (c.table_isEmpty(e.dices)) return !1;
                    for (var t = 0; t < e.dices.length; t++) {
                        var n = e.dices[t];
                        if (n < 1 || n > 6) return !1
                    }
                    return !0
                }, o.onDestroy = function() {}, t
            }(h)).prototype, "nodeCard", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(T.prototype, "nodeDeskLift1", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(T.prototype, "nodeDeskLift2", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(T.prototype, "nodeDeskLift3", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(T.prototype, "nodeDeskLift4", [S], {
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