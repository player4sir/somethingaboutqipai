System.register("chunks:///_virtual/NodeClockCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameRes.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./RoomMgr6.ts", "./FXJConfig3.ts", "./FXJRes3.ts", "./FXJSound3.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Texture2D, l = e.MeshRenderer, d = e.Tween, c = e.tween
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            m = e.AppEvent
        }, function(e) {
            _ = e.GameRes
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            f = e.BaseComponent
        }, function(e) {
            C = e.Platform
        }, function(e) {
            E = e.RoomMgr
        }, function(e) {
            S = e.GameStatus, A = e.OPCode
        }, function(e) {
            I = e.FXJRes
        }, function(e) {
            G = e.GameSound, y = e.FXJSound
        }, function(e) {
            v = e.GameEvent
        }, function(e) {
            P = e.GameRuleConfig
        }, function(e) {
            T = e.CardUtil
        }],
        execute: function() {
            var b, O, R, M, N, U, D, L, B, w, k, H, x, F;
            o._RF.push({}, "9abfaKTFptBAK3gYzWCd8zf", "NodeClockCtr", void 0);
            var V = r.ccclass,
                J = r.property,
                j = r.menu;
            e("NodeClockCtr", (b = V("NodeClockCtr"), O = j("prefab/subGame/mj/NodeClockCtr"), R = J({
                tooltip: "麻将桌东指示灯节点 - 东",
                type: s
            }), M = J({
                tooltip: "麻将桌东指示灯节点 - 南",
                type: s
            }), N = J({
                tooltip: "麻将桌东指示灯节点 - 西",
                type: s
            }), U = J({
                tooltip: "麻将桌东指示灯节点 - 北",
                type: s
            }), D = J({
                tooltip: "麻将桌倒计时节点",
                type: s
            }), b(L = O((w = t((B = function(e) {
                function t() {
                    var t;
                    return t = e.call(this) || this, a(t, "nodeLightDong", w, i(t)), a(t, "nodeLightNan", k, i(t)), a(t, "nodeLightXi", H, i(t)), a(t, "nodeLightBei", x, i(t)), a(t, "nodeTimer", F, i(t)), t._nodeLight = null, t._nodeLightConfig = [
                        ["dong_1", "dong_2"],
                        ["nan_1", "nan_2"],
                        ["xi_1", "xi_2"],
                        ["bei_1", "bei_2"]
                    ], t._nodeLightDir = -1, t._hostDir = 0, t._timeCount = 0, t._needShake = !1, t._isOutCard = !1, p.firstRunLoadSuccess ? (t.preloadRes(), t) : i(t)
                }
                n(t, e);
                var o = t.prototype;
                return o.preloadRes = function() {
                    var e = this;
                    this._nodeLightConfig.forEach((function(t, n, a) {
                        t.forEach((function(t, n, a) {
                            var i = _.Picture_Game_Desk_Light.path + h.string_format(_.Picture_Game_Desk_Light.key, t);
                            e.getPreLoaderResource(_.Picture_Game_Desk_Light.bundle, i, u, (function(e) {}))
                        }))
                    }));
                    for (var t = 0; t <= 20; t++) {
                        var n = I.Picture_Game_Desk_Timer.path + h.string_format(I.Picture_Game_Desk_Timer.key, t);
                        this.getPreLoaderResource(I.Picture_Game_Desk_Timer.bundle, n, u, (function(e) {}))
                    }
                }, o.onInitModuleEvent = function() {
                    this.addModelListener(v.NOTIFY_DESK_DICE_ANIM_STATUS, this.onDiceStatus)
                }, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, o._getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.start = function() {}, o.initData = function() {}, o.initView = function() {
                    this._nodeLight = [this.nodeLightDong, this.nodeLightNan, this.nodeLightXi, this.nodeLightBei]
                }, o.resetView = function() {
                    this._hostDir = T.getDirFromSeatId(E.getInstance().mySeatId), this.updateViewTimerDir(), this.onCloseClock()
                }, o.onDiceStatus = function(e, t) {
                    this.node.active = t
                }, o.updateViewTimerDir = function() {
                    this.node.setRotationFromEuler(0, 90 * this._getRotationDir(this._hostDir), 0)
                }, o.setViewLightVisible = function(e, t) {
                    var n = this;
                    if (this._nodeLightConfig[e] && this._nodeLight[e]) {
                        var a = this._nodeLightConfig[e],
                            i = _.Picture_Game_Desk_Light.path + h.string_format(_.Picture_Game_Desk_Light.key, t ? a[1] : a[0]);
                        this.getPreLoaderRes(_.Picture_Game_Desk_Light.bundle, i, u, (function(t) {
                            t && n._nodeLight[e].getComponent(l).material.setProperty("albedoMap", t)
                        }))
                    }
                }, o.updateViewLight = function(e) {
                    var t = this;
                    void 0 === e && (e = -1), this._nodeLightDir != e && (this._nodeLight.forEach((function(n, a, i) {
                        d.stopAllByTarget(n), e == a ? (t.setViewLightVisible(a, !0), c(n).delay(.8).call((function() {
                            t.setViewLightVisible(a, !1)
                        })).delay(.2).call((function() {
                            t.setViewLightVisible(a, !0)
                        })).union().repeatForever().start()) : t.setViewLightVisible(a, !1)
                    })), this._nodeLightDir = e)
                }, o.updateViewTime = function(e) {
                    var t = this;
                    if (void 0 === e && (e = -1), e >= 0) {
                        this.nodeTimer.active = !0;
                        var n = I.Picture_Game_Desk_Timer.path + h.string_format(I.Picture_Game_Desk_Timer.key, e);
                        this.getPreLoaderRes(I.Picture_Game_Desk_Timer.bundle, n, u, (function(e) {
                            e && t.nodeTimer.getComponent(l).material.setProperty("albedoMap", e)
                        })), this._needShake && T.getDirFromSeatId(E.getInstance().mySeatId) == this._nodeLightDir && e <= 3 && (C.vibrate(!0, "medium"), G.getInstance().playEffect(y.Time)), this._isOutCard && T.getDirFromSeatId(E.getInstance().mySeatId) == this._nodeLightDir && e <= 3 && g.dispatch(m.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, e)
                    } else this.nodeTimer.active = !1
                }, o.onOperationResult = function() {
                    this._needShake = !1
                }, o.onSetClock = function(e, t, n, a) {
                    void 0 === e && (e = -1), void 0 === t && (t = -1), void 0 === n && (n = !1), void 0 === a && (a = !1), g.dispatch(v.VIEW_UPDATE_USER_CLOCK, e, t), this.log("NodeClockCtr.onSetClock", "倒计时开始", "dir", e, "time", t), t = h.number_valueOf(t), e = this._getRotationDir(e), this.unschedule(this.onScheduleEvent), this.updateViewLight(e), this.updateViewTime(t), this._isOutCard = a, this._needShake = n, t > 0 && (this._timeCount = t, this.schedule(this.onScheduleEvent, 1)), (t <= 0 || T.getDirFromSeatId(E.getInstance().mySeatId) != this._nodeLightDir) && g.dispatch(m.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, -1)
                }, o.onScheduleEvent = function() {
                    this._timeCount--, this._timeCount < 0 ? this.unschedule(this.onScheduleEvent) : this.updateViewTime(this._timeCount)
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onMyOptions = function(e) {
                    var t = E.getInstance().getTimeOut(e),
                        n = T.getDirFromSeatId(E.getInstance().mySeatId);
                    this.onSetClock(n, t, !0)
                }, o.onUserOptions = function(e, t, n) {
                    void 0 === n && (n = 0);
                    var a = E.getInstance().getTimeOut(t);
                    0 != n && (a = n);
                    var i = T.getDirFromSeatId(e);
                    this.onSetClock(i, a, !0)
                }, o.onXiaZhu = function(e) {
                    var t = E.getInstance().getTimeOut(S.XIA_ZHU),
                        n = T.getDirFromSeatId(E.getInstance().mySeatId);
                    this.onSetClock(n, t, !0)
                }, o.onOperationStart = function(e) {
                    var t = E.getInstance().getTimeOut(S.PLAY_CARD),
                        n = T.getDirFromSeatId(e.bankSeatId);
                    this.onSetClock(n, t, !0)
                }, o.onOperationSelect = function(e) {
                    var t, n = E.getInstance().getTimeOut(S.OPERATION),
                        a = T.getDirFromSeatId(e.seatId),
                        i = !1;
                    null != e && null != (t = e.opGroups) && t.length && e.opGroups.forEach((function(e) {
                        e.opCode == A.OPE_OUT_CARD && (i = !0)
                    })), this.onSetClock(a, n, !0, i)
                }, o.onTakeCard = function(e) {
                    var t = E.getInstance().getTimeOut(S.PLAY_CARD),
                        n = T.getDirFromSeatId(e.seatId);
                    this.onSetClock(n, t, !0, !0)
                }, o.onChannelOperationResult = function(e) {}, o.onPengGang = function(e) {
                    if (e.opCode != A.OPE_HUA_GANG) {
                        var t = E.getInstance().getTimeOut(S.PLAY_CARD),
                            n = T.getDirFromSeatId(e.seatId);
                        this.onSetClock(n, t, !0)
                    }
                }, o.onGameOver = function(e) {
                    this.onCloseClock()
                }, o.onCloseClock = function() {
                    this.onSetClock(-1, -1), g.dispatch(m.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, -1)
                }, o.onReconnect = function(e) {
                    this.resetView();
                    var t = T.getDirFromSeatId(e.operationSeatId);
                    if (t < 0 || t >= P.playerNum) return this.log("NodeClockCtr.onReconnect", "座位号异常", e.operationSeatId), void this.updateViewTime(0);
                    if (h.isNull(e.operationTimePass)) this.log("NodeClockCtr.onReconnect", "操作时间异常", e.operationTimePass);
                    else {
                        var n = e.operationTimePass,
                            a = T.getDirFromSeatId(e.operationSeatId);
                        this.onSetClock(a, n, !0)
                    }
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(t)
                }, t
            }(f)).prototype, "nodeLightDong", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(B.prototype, "nodeLightNan", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(B.prototype, "nodeLightXi", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(B.prototype, "nodeLightBei", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(B.prototype, "nodeTimer", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = B)) || L) || L)), o._RF.pop()
        }
    }
}))