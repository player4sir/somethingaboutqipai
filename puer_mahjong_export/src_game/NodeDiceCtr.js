System.register("chunks:///_virtual/NodeDiceCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./RoomMgr.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameViewConfig.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Vec3
        }, function(e) {
            u = e.Utils
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameSound, f = e.FXJSound
        }, function(e) {
            _ = e.GameEvent
        }, function(e) {
            g = e.GameViewConfig
        }, function(e) {
            m = e.CardUtil
        }],
        execute: function() {
            var C, I, A, E, v, y, S, P, T, G, O, R;
            o._RF.push({}, "dadb49ebEtAeZ0OHirDGawW", "NodeDiceCtr", void 0);
            var N = r.ccclass,
                b = r.property,
                D = r.menu;
            e("NodeDiceCtr", (C = N("NodeDiceCtr"), I = D("prefab/game/NodeDiceCtr"), A = b({
                tooltip: "麻将桌盖板节点",
                type: s
            }), E = b({
                tooltip: "色子节点",
                type: s
            }), v = b({
                tooltip: "色子节点1",
                type: s
            }), y = b({
                tooltip: "色子节点2",
                type: s
            }), C(S = I((T = t((P = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "nodeGaiBan", T, a(t)), i(t, "nodeDiceView", G, a(t)), i(t, "nodeDice1", O, a(t)), i(t, "nodeDice2", R, a(t)), t._hostDir = 0, t._diceStatus = g.DiceStatus.Stop, t._dices = null, t._time = 0, t._config = {
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
                    this._hostDir = m.getDirFromSeatId(h.getInstance().mySeatId), this.updateViewDir(), this._time = 0, this._diceStatus = g.DiceStatus.Stop, this.showGaiBan()
                }, o.updateViewDir = function() {
                    this.node.setRotationFromEuler(0, 90 * this._hostDir, 0)
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onRollDices = function(e) {
                    d.dispatch(_.VIEW_SET_REMAIN_INFO_VISIBLE, !1), this.diceInfo = e.diceInfo, this._curTimes = 0, this.doRollDicesOneTime()
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t || (t = this.node.addComponent("GameComponent")), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.onRollDicesOver = function() {
                    this.doGameCompFun("onRollDicesOver", this._dices)
                }, o.doRollDicesOneTime = function() {
                    var e;
                    if (this._curTimes > this.diceInfo.length - 1) return this.showGaiBan(), this.diceInfo = null, d.dispatch(_.NOTIFY_DESK_DICE_ANIM_STATUS, !0), void this.onRollDicesOver();
                    d.dispatch(_.NOTIFY_DESK_DICE_ANIM_STATUS, !1), this._dices = this.diceInfo[this._curTimes].dices, this._time = 0, this.nodeDice1.setPosition(this._config.BEGIN_X, 0, 0), this.nodeDice2.setPosition(-this._config.BEGIN_X, 0, 0), 1 == (null == (e = this._dices) ? void 0 : e.length) && (this.nodeDice2.active = !1), this.nodeGaiBan.active = !1, this._diceStatus = g.DiceStatus.Move, p.getInstance().playEffect(f.GameRoll)
                }, o.update = function(e) {
                    if (this._diceStatus == g.DiceStatus.Move) {
                        this._time += e;
                        var t = 360 * e * this._config.SECOND_LAP_LOCAL,
                            n = this.nodeDice1.eulerAngles;
                        this.nodeDice1.setRotationFromEuler(n.x + t, n.y + t, n.z + t);
                        var i = this.nodeDice2.eulerAngles;
                        this.nodeDice2.setRotationFromEuler(i.x + t, i.y + t, i.z + t);
                        var a = 360 * e * this._config.SECOND_LAP,
                            o = this.nodeDiceView.eulerAngles;
                        if (this.nodeDiceView.setRotationFromEuler(o.x, o.y + a, o.z), this._time >= this._config.TIME_ROTATE / this.diceInfo.length) {
                            var r = this.getRotationByValue(this._dices[0]);
                            if (this.nodeDice1.setRotationFromEuler(r), u.isNotNull(this._dices[1])) {
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
                    return new l(t, 0, n)
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
            }(c)).prototype, "nodeGaiBan", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(P.prototype, "nodeDiceView", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(P.prototype, "nodeDice1", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(P.prototype, "nodeDice2", [y], {
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