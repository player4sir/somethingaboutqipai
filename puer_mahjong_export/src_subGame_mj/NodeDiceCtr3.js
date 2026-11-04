System.register("chunks:///_virtual/NodeDiceCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr6.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameViewConfig5.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Vec3
        }, function(e) {
            l = e.Utils
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameSound, m = e.FXJSound
        }, function(e) {
            _ = e.GameEvent
        }, function(e) {
            g = e.GameViewConfig
        }, function(e) {
            f = e.CardUtil
        }],
        execute: function() {
            var C, E, S, A, I, G, y, v, P, T, b, O;
            o._RF.push({}, "9fef3OAC05F9qC0SR/7Zugp", "NodeDiceCtr", void 0);
            var R = r.ccclass,
                M = r.property,
                N = r.menu;
            e("NodeDiceCtr", (C = R("NodeDiceCtr"), E = N("prefab/subGame/mj/NodeDiceCtr"), S = M({
                tooltip: "麻将桌盖板节点",
                type: s
            }), A = M({
                tooltip: "色子节点",
                type: s
            }), I = M({
                tooltip: "色子节点1",
                type: s
            }), G = M({
                tooltip: "色子节点2",
                type: s
            }), C(y = E((P = t((v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "nodeGaiBan", P, i(t)), a(t, "nodeDiceView", T, i(t)), a(t, "nodeDice1", b, i(t)), a(t, "nodeDice2", O, i(t)), t._hostDir = 0, t._diceStatus = g.DiceStatus.Stop, t._dices = null, t._time = 0, t._config = {
                        LAP: 5,
                        LAP_LOCAL: 10,
                        TIME_ROTATE: 1.5,
                        TIME_MOVE: .5,
                        TIME_LOOK: .5,
                        SECOND_LAP_LOCAL: 10,
                        SECOND_LAP: 5,
                        BEGIN_X: 2,
                        MOVE_X: 1
                    }, t._curTimes = void 0, t.diceInfo = void 0, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {}, o.onLoad = function() {}, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.resetView = function() {
                    this._hostDir = f.getDirFromSeatId(h.getInstance().mySeatId), this.updateViewDir(), this._time = 0, this._diceStatus = g.DiceStatus.Stop, this.showGaiBan()
                }, o.updateViewDir = function() {
                    this.node.setRotationFromEuler(0, 90 * this._hostDir, 0)
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onRollDices = function(e) {
                    d.dispatch(_.VIEW_SET_REMAIN_INFO_VISIBLE, !1), this.diceInfo = e.diceInfo, this._curTimes = 0, this.doRollDicesOneTime()
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (t || "function" == typeof(t = this.node.addComponent("MJGameComponent")).setDelegate && t.setDelegate(this), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.onRollDicesOver = function() {
                    this.doGameCompFun("onRollDicesOver", this._dices)
                }, o.doRollDicesOneTime = function() {
                    var e;
                    if (this._curTimes > this.diceInfo.length - 1) return this.showGaiBan(), this.diceInfo = null, d.dispatch(_.NOTIFY_DESK_DICE_ANIM_STATUS, !0), void this.onRollDicesOver();
                    d.dispatch(_.NOTIFY_DESK_DICE_ANIM_STATUS, !1), this._dices = this.diceInfo[this._curTimes].dices, this._time = 0, this.nodeDice1.setPosition(this._config.BEGIN_X, 0, 0), this.nodeDice2.setPosition(-this._config.BEGIN_X, 0, 0), 1 == (null == (e = this._dices) ? void 0 : e.length) && (this.nodeDice2.active = !1), this.nodeGaiBan.active = !1, this._diceStatus = g.DiceStatus.Move, p.getInstance().playEffect(m.GameRoll)
                }, o.update = function(e) {
                    if (this._diceStatus == g.DiceStatus.Move) {
                        this._time += e;
                        var t = 360 * e * this._config.SECOND_LAP_LOCAL,
                            n = this.nodeDice1.eulerAngles;
                        this.nodeDice1.setRotationFromEuler(n.x + t, n.y + t, n.z + t);
                        var a = this.nodeDice2.eulerAngles;
                        this.nodeDice2.setRotationFromEuler(a.x + t, a.y + t, a.z + t);
                        var i = 360 * e * this._config.SECOND_LAP,
                            o = this.nodeDiceView.eulerAngles;
                        if (this.nodeDiceView.setRotationFromEuler(o.x, o.y + i, o.z), this._time >= this._config.TIME_ROTATE / this.diceInfo.length) {
                            var r = this.getRotationByValue(this._dices[0]);
                            if (this.nodeDice1.setRotationFromEuler(r), l.isNotNull(this._dices[1])) {
                                var s = this.getRotationByValue(this._dices[1]);
                                this.nodeDice2.setRotationFromEuler(s)
                            }
                            this._diceStatus = g.DiceStatus.Pause
                        }
                    } else this._diceStatus == g.DiceStatus.Pause ? (this._time += e, this._time >= (this._config.TIME_ROTATE + this._config.TIME_MOVE) / this.diceInfo.length + this._config.TIME_LOOK && (this._diceStatus = g.DiceStatus.Stop)) : this._diceStatus == g.DiceStatus.Stop && this.diceInfo && (this._curTimes += 1, this.doRollDicesOneTime())
                }, o.getRotationByValue = function(e) {
                    var t = 0,
                        n = 0;
                    switch (e) {
                        case 1:
                            t = 90, n = 0;
                            break;
                        case 2:
                            t = 270, n = 0;
                            break;
                        case 3:
                            t = 180, n = 0;
                            break;
                        case 4:
                            t = 0, n = 270;
                            break;
                        case 5:
                            t = 0, n = 0;
                            break;
                        case 6:
                            t = 0, n = 90
                    }
                    return new u(t, 0, n)
                }, o.showGaiBan = function() {
                    this.nodeGaiBan.active = !0
                }, o.onOperationSelect = function(e) {
                    this.showGaiBan()
                }, o.onXiaZhu = function(e) {
                    this.showGaiBan()
                }, o.onOperationStart = function(e) {
                    this.showGaiBan(), d.dispatch(_.VIEW_SET_REMAIN_INFO_VISIBLE, !0)
                }, o.onGameOver = function(e) {}, o.onReconnect = function() {
                    this.resetView()
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(this.name, t)
                }, t
            }(c)).prototype, "nodeGaiBan", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(v.prototype, "nodeDiceView", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(v.prototype, "nodeDice1", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(v.prototype, "nodeDice2", [G], {
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