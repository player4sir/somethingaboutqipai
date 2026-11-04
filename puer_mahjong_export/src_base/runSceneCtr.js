System.register("chunks:///_virtual/runSceneCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./LayerManager.ts", "./EventManager.ts", "./PkgLoaderManager.ts", "./SchedulerManager.ts", "./SpineAniUtils.ts", "./NetState.ts", "./BaseComponent.ts", "./Platform.ts", "./GPBWriteAndRead.ts", "./GlobalCmdConfig.ts", "./GlobalCmdPBConfig.ts", "./GlobalPBAdaptive.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.Camera, l = e.SphereLight, u = e.DirectionalLight, d = e.NodeEventType, _ = e.screen, h = e.renderer, p = e.Prefab, f = e.Widget, m = e.Tween, g = e.tween, E = e.Vec3, v = e.UITransform, T = e.sp, R = e.director
        }, function(e) {
            P = e.ClientInfo
        }, null, function(e) {
            y = e.Logger
        }, function(e) {
            C = e.Utils
        }, function(e) {
            S = e.GCache
        }, function(e) {
            A = e.AppEvent
        }, function(e) {
            I = e.GConstants
        }, function(e) {
            D = e.GameRes, N = e.GameResPreLoad
        }, function(e) {
            O = e.UIConfigData
        }, function(e) {
            b = e.LayerManager
        }, function(e) {
            L = e.EventManager
        }, function(e) {
            M = e.PkgLoaderManager
        }, function(e) {
            G = e.SchedulerManager
        }, function(e) {
            k = e.SpineAniUtils
        }, function(e) {
            U = e.Network
        }, function(e) {
            B = e.BaseComponent
        }, function(e) {
            w = e.Platform
        }, function(e) {
            H = e.GPBWriteAndRead
        }, function(e) {
            F = e.GlobalCmdBinding
        }, function(e) {
            q = e.GlobalPBCmdBinding
        }, function(e) {
            V = e.GlobalPBAdaptive
        }],
        execute: function() {
            var x, W, Y, j, K, Q, J, z, X, Z, $, ee, te, ie, ne, ae, oe, re, se, ce, le, ue, de, _e, he, pe;
            o._RF.push({}, "98ae21b5m1BW6Mb9txxuQ55", "runSceneCtr", void 0);
            var fe = r.ccclass,
                me = r.property,
                ge = r.menu;
            e("runSceneCtr", (x = fe("runSceneCtr"), W = ge("scenes/runSceneCtr"), Y = me({
                tooltip: "UI底图",
                type: s
            }), j = me({
                tooltip: "UILogo",
                type: s
            }), K = me({
                tooltip: "UI根节点",
                type: s
            }), Q = me({
                tooltip: "摄像头节点",
                type: c
            }), J = me({
                tooltip: "UI根节点",
                type: s
            }), z = me({
                tooltip: "3D摄像头节点",
                type: c
            }), X = me({
                tooltip: "球面光",
                type: l
            }), Z = me({
                tooltip: "平行光",
                type: u
            }), $ = me({
                tooltip: "游戏debug节点",
                type: s
            }), ee = me({
                tooltip: "加载节点",
                type: s
            }), te = me({
                tooltip: "点击最上层",
                type: s
            }), x(ie = W((ae = t((ne = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "bg", ae, a(t)), n(t, "logo", oe, a(t)), n(t, "gui", re, a(t)), n(t, "camera2D", se, a(t)), n(t, "root3D", ce, a(t)), n(t, "camera3D", le, a(t)), n(t, "sphereLight", ue, a(t)), n(t, "directionalLight", de, a(t)), n(t, "debugNode", _e, a(t)), n(t, "loading", he, a(t)), n(t, "aniClick", pe, a(t)), t._handlerLoadPackage = null, t.clickSpine = void 0, t.cur_direction = -1, t.last_direction = -1, t.diff_time = 0, t._bg_y = -170, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onInitModuleEvent = function() {
                    this.addModelListener(A.SYS_PACKAGE_LOAD, this.packageLoad), this.addModelListener(A.SYS_APP_LIFE, this.appChangeLife), this.addModelListener(A.VIEW_UI_3D_ADD, this.view3DAdd), this.addModelListener(A.VIEW_UI_3D_REMOVE, this.view3DRemove), this.addModelListener(A.VIEW_GET_LIGHT_DATA, this.viewGetLightData), this.addModelListener(A.VIEW_SET_LIGHT_DATA, this.viewSetLightData), this.addModelListener(A.SYS_DESIGN_RESOLUTION_SIZE, this.initCamera3D), this.addModelListener(A.PRIVACY_DIALOG_INIT_END, this.onPrivacyDialogInitEnd)
                }, o.onLoad = function() {
                    w.checkStorageMemory(), G.instance.unscheduleAll(), 0 == P.DEBUG && y.setTags(0)
                }, o.start = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        L.dispatch(A.REPORT_USER_INTERACTION, {
                            eventID: "event_1"
                        }), e.initCamera3D(), e.regTouchEvent(), L.dispatch(A.SYS_APP_LIFE, I.AppRunLife.RunScence), b.initCamara(e.camera2D, e.camera3D), b.initUIConfig(O), b.reload(e.gui), e.loading.active = !0, w.initAdVideo(P.deviceInfo.adunitId), e.reloadDebugView(), e.node.on(d.SIZE_CHANGED, e.initCamera3D, e), e.initBase(), e.scheduleOnce((function() {
                            L.dispatch(A.LOGIN_GOTO_SHOW, {
                                state: "first_login"
                            })
                        }))
                    }), .1)
                }, o.initBase = function() {
                    w.initBase(), U.getInstance(), H.Write.initCommonCmds(F, q, !0)
                }, o.initCamera3D = function() {
                    _.windowSize.width / _.windowSize.height < 1280 / 720 ? (this.camera3D.node.setPosition(0, 138.7, 111.6), this.camera3D.node.setRotationFromEuler(-53, 0, 0), this.camera3D.fovAxis = h.scene.CameraFOVAxis.HORIZONTAL, this.camera3D.fov = 45) : (this.camera3D.node.setPosition(0, 106.4, 105), this.camera3D.node.setRotationFromEuler(-48.3, 0, 0), this.camera3D.fovAxis = h.scene.CameraFOVAxis.VERTICAL, this.camera3D.fov = 28.2)
                }, o.reloadDebugView = function() {
                    if (this.debugNode.destroyAllChildren(), P.DEBUG) {
                        var e = this,
                            t = {
                                bundle: D.Prefab_DebugWindow.bundle,
                                path: D.Prefab_DebugWindow.path,
                                resType: p,
                                callFunc: function(t, i) {
                                    t && e.debugNode && 1 == e.debugNode.isValid && e.debugNode.addChild(t)
                                }
                            };
                        L.dispatch(A.SYS_RELOADD_LOCAL, t)
                    }
                }, o.packageLoad = function(e, t, i) {
                    this.loading.active = !1;
                    var n = this,
                        a = C.handler(this, this.onStartCallback),
                        o = C.handler(this, this.onUpdateLoadingCallback),
                        r = {
                            taskID: t,
                            taskList: N[t],
                            startCallFunc: a,
                            updateCallFunc: o,
                            endCallFunc: function(e) {
                                e == I.PkgLoaderTaskList.Login && (S.firstRunLoadSuccess = !0), n.stopScheduler(n._handlerLoadPackage), n._handlerLoadPackage = n.addScheduler(1, (function() {
                                    n.stopScheduler(n._handlerLoadPackage), n.loading && 1 == n.loading.isValid && (n.loading.active = !1), i && i()
                                }))
                            }
                        };
                    M.getInstance().addTask(A.SYS_PACKAGE_LOAD_TASK_ADD, r)
                }, o.appChangeLife = function(e, t) {
                    var i;
                    null != (i = this.bg) && i.isValid && (t == I.AppRunLife.Hall_Opened ? (this.bg.active = !1, this.logo.active = !1) : t == I.AppRunLife.Hall_Will_Open ? this.bg.active = !0 : t == I.AppRunLife.Login_Opened ? (this.bg.active = !0, this.logo.active = !0, V.getInstance().startReloadPBList()) : t == I.AppRunLife.Login_Closed ? w.onCompassListen({
                        tag: "stop"
                    }) : t == I.AppRunLife.Game_Will_Open ? this.bg.active = !0 : t == I.AppRunLife.Game_Opened && (this.bg.active = !1))
                }, o.onPrivacyDialogInitEnd = function(e, t) {
                    var i = this;
                    void 0 === t && (t = !1), w.onCompassListen({
                        tag: "stop"
                    }), this.scheduleOnce((function() {
                        w.onCompassListen({
                            tag: "start",
                            listenChange: t
                        }, (function(e) {
                            var t;
                            if (null != (t = i.bg) && t.isValid)
                                if (-1 == i.cur_direction) i.bg.getComponent(f).updateAlignment(), i._bg_y = i.bg.getPosition().y, console.log("this._bg_y", i._bg_y), w.isAndroid() && "high" != e.accuracy && "medium" != e.accuracy && "low" != e.accuracy || (i.cur_direction = e.direction), i.last_direction = e.direction, i.diff_time = C.timeEx();
                                else {
                                    var n = Math.abs(i.last_direction - e.direction),
                                        a = Math.abs(i.cur_direction - e.direction);
                                    if (n > 1 && a <= 90) {
                                        if (w.isAndroid() && (C.timeEx() - i.diff_time) / 1e3 > .5) return void(i.diff_time = C.timeEx());
                                        i.diff_time = C.timeEx(), i.last_direction = e.direction;
                                        var o = Math.floor(7 * (i.cur_direction - e.direction));
                                        m.stopAllByTarget(i.bg), g(i.bg).to(.2, {
                                            position: new E(o, i._bg_y, 0)
                                        }, {
                                            easing: "sineOut",
                                            onComplete: function(e) {}
                                        }).start()
                                    }
                                }
                        }))
                    }))
                }, o.onStartCallback = function(e) {
                    this.node && 0 != this.node.isValid && (L.dispatch(A.SYS_PACKAGE_LOAD_SHOW, 0, e), this.loading.active = !0)
                }, o.onUpdateLoadingCallback = function(e, t) {
                    this.node && 0 != this.node.isValid && L.dispatch(A.SYS_PACKAGE_LOAD_SHOW, t, e)
                }, o.regTouchEvent = function() {
                    this.node && this.aniClick.on(s.EventType.TOUCH_START, this.onTouchtStart, this, !0)
                }, o.onTouchtStart = function(e) {
                    var t = this,
                        i = e.touch.getUILocation(),
                        n = new E;
                    if (this.aniClick.getComponent(v).convertToNodeSpaceAR(new E(i.x, i.y, 0), n), this.clickSpine) this.clickSpine.active = !0, this.clickSpine.getComponent(T.Skeleton).setCompleteListener((function(e) {
                        t.clickSpine.active = !1
                    })), this.clickSpine.getComponent(T.Skeleton).setAnimation(0, "dianji_ani", !1), this.clickSpine.position = n;
                    else {
                        var a = D.Spine_ClickAni;
                        k.loadSkeleDataInBundle(a.bundle, a.path, this, null, (function(e, i) {
                            var a;
                            !e && t.aniClick && t.aniClick.isValid && (null == (a = t.clickSpine) || a.destroy(), t.clickSpine = k.createSpineNode(t.aniClick, i, "dianji_ani"), t.clickSpine && (t.clickSpine.position = n))
                        }))
                    }
                }, o.view3DAdd = function(e, t) {
                    this.print("view3DAdd"), C.isNotNull(t) && this.root3D.addChild(t)
                }, o.view3DRemove = function(e) {
                    this.print("view3DRemove"), this.root3D.destroyAllChildren()
                }, o.viewGetLightData = function(e) {
                    var t = {
                        ambientLum: R.getScene().globals.ambient.skyIllum,
                        sphereLum: this.sphereLight.luminousFlux,
                        directionalRotation: this.directionalLight.node.eulerAngles.x,
                        directionalLum: this.directionalLight.illuminance
                    };
                    this.print("viewGetLightData", t), L.dispatch(A.VIEW_GET_LIGHT_DATA_RESP, t)
                }, o.viewSetLightData = function(e, t) {
                    this.print("viewSetLightData", t), C.isNull(t) || (C.isNotNull(t.ambientLum) && (R.getScene().globals.ambient.skyIllum = t.ambientLum), C.isNotNull(t.sphereLum) && (this.sphereLight.luminousFlux = t.sphereLum), C.isNotNull(t.directionalRotation) && this.directionalLight.node.setRotationFromEuler(new E(t.directionalRotation, this.directionalLight.node.eulerAngles.y, this.directionalLight.node.eulerAngles.z)), C.isNotNull(t.directionalLum) && (this.directionalLight.illuminance = t.directionalLum))
                }, o.onDisable = function() {
                    e.prototype.onDisable.call(this), this.aniClick && this.aniClick.isValid && this.aniClick.off(s.EventType.TOUCH_START, this.onTouchtStart, this, !0)
                }, o.onDestroy = function() {
                    b.initCamara()
                }, t
            }(B)).prototype, "bg", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(ne.prototype, "logo", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(ne.prototype, "gui", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(ne.prototype, "camera2D", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(ne.prototype, "root3D", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(ne.prototype, "camera3D", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(ne.prototype, "sphereLight", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), de = t(ne.prototype, "directionalLight", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(ne.prototype, "debugNode", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(ne.prototype, "loading", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(ne.prototype, "aniClick", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = ne)) || ie) || ie)), o._RF.pop()
        }
    }
}))