System.register("chunks:///_virtual/NodeClockCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameRes.ts", "./EventManager.ts", "./BaseComponent.ts", "./Platform.ts", "./RoomMgr.ts", "./FXJConfig.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Texture2D, u = e.MeshRenderer, d = e.Tween, c = e.tween
        }, function(e) {
            h = e.Utils
        }, function(e) {
            p = e.GCache
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            _ = e.GameRes
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            m = e.BaseComponent
        }, function(e) {
            C = e.Platform
        }, function(e) {
            I = e.RoomMgr
        }, function(e) {
            A = e.GameStatus, E = e.OPCode
        }, function(e) {
            v = e.FXJRes
        }, function(e) {
            y = e.GameSound, S = e.FXJSound
        }, function(e) {
            P = e.GameEvent
        }, function(e) {
            T = e.GameRuleConfig
        }, function(e) {
            G = e.CardUtil
        }],
        execute: function() {
            var O, R, N, b, D, L, M, U, w, B, H, F, k, V;
            o._RF.push({}, "06d44r0E6pFVZLpR0zzOqqp", "NodeClockCtr", void 0);
            var x = r.ccclass,
                W = r.property,
                z = r.menu;
            e("NodeClockCtr", (O = x("NodeClockCtr"), R = z("prefab/game/NodeClockCtr"), N = W({
                tooltip: "麻将桌东指示灯节点 - 东",
                type: s
            }), b = W({
                tooltip: "麻将桌东指示灯节点 - 南",
                type: s
            }), D = W({
                tooltip: "麻将桌东指示灯节点 - 西",
                type: s
            }), L = W({
                tooltip: "麻将桌东指示灯节点 - 北",
                type: s
            }), M = W({
                tooltip: "麻将桌倒计时节点",
                type: s
            }), O(U = R((B = t((w = function(e) {
                function t() {
                    var t;
                    return t = e.call(this) || this, i(t, "nodeLightDong", B, a(t)), i(t, "nodeLightNan", H, a(t)), i(t, "nodeLightXi", F, a(t)), i(t, "nodeLightBei", k, a(t)), i(t, "nodeTimer", V, a(t)), t._nodeLight = null, t._nodeLightConfig = [
                        ["dong_1", "dong_2"],
                        ["nan_1", "nan_2"],
                        ["xi_1", "xi_2"],
                        ["bei_1", "bei_2"]
                    ], t._nodeLightDir = -1, t._hostDir = 0, t._timeCount = 0, t._needShake = !1, t._isOutCard = !1, p.firstRunLoadSuccess ? (t.preloadRes(), t) : a(t)
                }
                n(t, e);
                var o = t.prototype;
                return o.preloadRes = function() {
                    var e = this;
                    this._nodeLightConfig.forEach((function(t, n, i) {
                        t.forEach((function(t, n, i) {
                            var a = _.Picture_Game_Desk_Light.path + h.string_format(_.Picture_Game_Desk_Light.key, t);
                            e.getPreLoaderResource(_.Picture_Game_Desk_Light.bundle, a, l, (function(e) {}))
                        }))
                    }));
                    for (var t = 0; t <= 20; t++) {
                        var n = v.Picture_Game_Desk_Timer.path + h.string_format(v.Picture_Game_Desk_Timer.key, t);
                        this.getPreLoaderResource(v.Picture_Game_Desk_Timer.bundle, n, l, (function(e) {}))
                    }
                }, o.onInitModuleEvent = function() {
                    this.addModelListener(P.NOTIFY_DESK_DICE_ANIM_STATUS, this.onDiceStatus)
                }, o.onLoad = function() {
                    this.addGameComp(), this.initData(), this.initView(), this.resetView()
                }, o.addGameComp = function() {
                    null == this.node && (this.node = h.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, o._getRotationDir = function(e) {
                    var t = this.doGameCompFun("getRotationDir", e);
                    return h.isNull(t) && (t = e), t
                }, o.start = function() {}, o.initData = function() {}, o.initView = function() {
                    this._nodeLight = [this.nodeLightDong, this.nodeLightNan, this.nodeLightXi, this.nodeLightBei]
                }, o.resetView = function() {
                    this._hostDir = G.getDirFromSeatId(I.getInstance().mySeatId), this.updateViewTimerDir(), this.onCloseClock()
                }, o.onDiceStatus = function(e, t) {
                    this.node.active = t
                }, o.updateViewTimerDir = function() {
                    this.node.setRotationFromEuler(0, 90 * this._getRotationDir(this._hostDir), 0)
                }, o.setViewLightVisible = function(e, t) {
                    var n = this;
                    if (this._nodeLightConfig[e] && this._nodeLight[e]) {
                        var i = this._nodeLightConfig[e],
                            a = _.Picture_Game_Desk_Light.path + h.string_format(_.Picture_Game_Desk_Light.key, t ? i[1] : i[0]);
                        this.getPreLoaderRes(_.Picture_Game_Desk_Light.bundle, a, l, (function(t) {
                            t && n._nodeLight[e].getComponent(u).material.setProperty("albedoMap", t)
                        }))
                    }
                }, o.updateViewLight = function(e) {
                    var t = this;
                    void 0 === e && (e = -1), this._nodeLightDir != e && (this._nodeLight.forEach((function(n, i, a) {
                        d.stopAllByTarget(n), e == i ? (t.setViewLightVisible(i, !0), c(n).delay(.8).call((function() {
                            t.setViewLightVisible(i, !1)
                        })).delay(.2).call((function() {
                            t.setViewLightVisible(i, !0)
                        })).union().repeatForever().start()) : t.setViewLightVisible(i, !1)
                    })), this._nodeLightDir = e)
                }, o.updateViewTime = function(e) {
                    var t = this;
                    if (void 0 === e && (e = -1), e >= 0) {
                        this.nodeTimer.active = !0;
                        var n = v.Picture_Game_Desk_Timer.path + h.string_format(v.Picture_Game_Desk_Timer.key, e);
                        this.getPreLoaderRes(v.Picture_Game_Desk_Timer.bundle, n, l, (function(e) {
                            e && t.nodeTimer.getComponent(u).material.setProperty("albedoMap", e)
                        })), this._needShake && G.getDirFromSeatId(I.getInstance().mySeatId) == this._nodeLightDir && e <= 3 && (C.vibrate(!0, "medium"), y.getInstance().playEffect(S.Time)), this._isOutCard && G.getDirFromSeatId(I.getInstance().mySeatId) == this._nodeLightDir && e <= 3 && g.dispatch(f.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, e)
                    } else this.nodeTimer.active = !1
                }, o.onOperationResult = function() {
                    this._needShake = !1
                }, o.onSetClock = function(e, t, n, i) {
                    void 0 === e && (e = -1), void 0 === t && (t = -1), void 0 === n && (n = !1), void 0 === i && (i = !1), g.dispatch(P.VIEW_UPDATE_USER_CLOCK, e, t), this.log("NodeClockCtr.onSetClock", "倒计时开始", "dir", e, "time", t), t = h.number_valueOf(t), e = this._getRotationDir(e), this.unschedule(this.onScheduleEvent), this.updateViewLight(e), this.updateViewTime(t), this._isOutCard = i, this._needShake = n, t > 0 && (this._timeCount = t, this.schedule(this.onScheduleEvent, 1)), (t <= 0 || G.getDirFromSeatId(I.getInstance().mySeatId) != this._nodeLightDir) && g.dispatch(f.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, -1)
                }, o.onScheduleEvent = function() {
                    this._timeCount--, this._timeCount < 0 ? this.unschedule(this.onScheduleEvent) : this.updateViewTime(this._timeCount)
                }, o.onChangeSeat = function() {
                    this.resetView()
                }, o.onGameStart = function() {
                    this.resetView()
                }, o.onMyOptions = function(e) {
                    var t = I.getInstance().getTimeOut(e),
                        n = G.getDirFromSeatId(I.getInstance().mySeatId);
                    this.onSetClock(n, t, !0)
                }, o.onUserOptions = function(e, t, n) {
                    void 0 === n && (n = 0);
                    var i = I.getInstance().getTimeOut(t);
                    0 != n && (i = n);
                    var a = G.getDirFromSeatId(e);
                    this.onSetClock(a, i, !0)
                }, o.onXiaZhu = function(e) {
                    var t = I.getInstance().getTimeOut(A.XIA_ZHU),
                        n = G.getDirFromSeatId(I.getInstance().mySeatId);
                    this.onSetClock(n, t, !0)
                }, o.onOperationStart = function(e) {
                    var t = I.getInstance().getTimeOut(A.PLAY_CARD),
                        n = G.getDirFromSeatId(e.bankSeatId);
                    this.onSetClock(n, t, !0)
                }, o.onOperationSelect = function(e) {
                    var t, n = I.getInstance().getTimeOut(A.OPERATION),
                        i = G.getDirFromSeatId(e.seatId),
                        a = !1;
                    null != e && null != (t = e.opGroups) && t.length && e.opGroups.forEach((function(e) {
                        e.opCode == E.OPE_OUT_CARD && (a = !0)
                    })), this.onSetClock(i, n, !0, a)
                }, o.onTakeCard = function(e) {
                    var t = I.getInstance().getTimeOut(A.PLAY_CARD),
                        n = G.getDirFromSeatId(e.seatId);
                    this.onSetClock(n, t, !0, !0)
                }, o.onChannelOperationResult = function(e) {}, o.onPengGang = function(e) {
                    if (e.opCode != E.OPE_HUA_GANG) {
                        var t = I.getInstance().getTimeOut(A.PLAY_CARD),
                            n = G.getDirFromSeatId(e.seatId);
                        this.onSetClock(n, t, !0)
                    }
                }, o.onGameOver = function(e) {
                    this.onCloseClock()
                }, o.onCloseClock = function() {
                    this.onSetClock(-1, -1), g.dispatch(f.VIEW_UPDATE_GAME_OUTCARD_TIMEOUT, -1)
                }, o.onReconnect = function(e) {
                    this.resetView();
                    var t = G.getDirFromSeatId(e.operationSeatId);
                    if (t < 0 || t >= T.playerNum) return this.log("NodeClockCtr.onReconnect", "座位号异常", e.operationSeatId), void this.updateViewTime(0);
                    if (h.isNull(e.operationTimePass)) this.log("NodeClockCtr.onReconnect", "操作时间异常", e.operationTimePass);
                    else {
                        var n = e.operationTimePass,
                            i = G.getDirFromSeatId(e.operationSeatId);
                        this.onSetClock(i, n, !0)
                    }
                }, o.onDestroy = function() {}, o.log = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    console.log(t)
                }, t
            }(m)).prototype, "nodeLightDong", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(w.prototype, "nodeLightNan", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(w.prototype, "nodeLightXi", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(w.prototype, "nodeLightBei", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(w.prototype, "nodeTimer", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = w)) || U) || U)), o._RF.pop()
        }
    }
}))