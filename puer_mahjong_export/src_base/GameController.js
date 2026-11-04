System.register("chunks:///_virtual/GameController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./AppSound.ts", "./GameConstant.ts", "./UIConfig.ts", "./LayerManager.ts", "./EventManager.ts", "./PkgLoaderManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmdConfig.ts", "./GlobalCmdPBConfig.ts", "./GlobalCmd.ts", "./GPBWriteAndRead.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R, P, y;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.Size, a = e.screen
        }, function(e) {
            o = e.ClientInfo
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.AppSound
        }, function(e) {
            u = e.POPUSCENE, d = e.GConstants
        }, function(e) {
            _ = e.getUIConfig, h = e.UIConfigData
        }, function(e) {
            p = e.LayerManager
        }, function(e) {
            f = e.EventManager
        }, function(e) {
            m = e.PkgLoaderManager
        }, function(e) {
            g = e.BaseController
        }, function(e) {
            E = e.Platform
        }, function(e) {
            v = e.GlobalCmdBinding
        }, function(e) {
            T = e.GlobalPBCmdBinding
        }, function(e) {
            R = e.GlobalCmdHeadPHP
        }, function(e) {
            P = e.GPBWriteAndRead
        }, function(e) {
            y = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "1adecbsS/5EHJqAv85BT3p8", "GameController", void 0), e("GameController", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._reportGameVerRecord = {}, t._canChange = !0, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("GameController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var g = i.prototype;
                return g.onInitModuleEvent = function() {
                    this.addModelListener(c.GAME_GOTO_SHOW, this.showGame), this.addModelListener(c.GAME_GOTO_EXIT, this.exitGame), this.addModelListener(c.NET_REQ_GAME_PLAY_INFO, this.reqGamePlayInfo), this.addModelListener(c.NET_RECEIVE_GAME_PLAY_INFO, this.respGamePlayInfo), this.addModelListener(c.NET_REQ_REPORT_GAME_VERSION, this.reqReportGameVer), this.addModelListener(c.VIEW_SCREENSHOT_TO_ALBUM, this.screenshotToAlbum)
                }, g.showGame = function(e) {
                    var t = this;
                    if (s.noticePup.updateCurScene(u.NONE), s.User.isLoginSuccesed()) {
                        var i = r.number_valueOf(s.SelectGame.getCurGameId()),
                            n = _()[i];
                        null != n && n.gameUI && (console.warn("socket----是否正在加载:", p.has(n.gameUI), p.isLoading(n.gameUI)), p.has(n.gameUI) || p.isLoading(n.gameUI) ? (this.print("游戏场景已存在，强制刷新===>"), f.dispatch(c.ROOM_VIEW_ONLOAD)) : (f.dispatch(c.SYS_CLOSE_NETLOADING), f.dispatch(c.SYS_UPDATE_CMDMAPPING), P.Write.initCommonCmds(v, T, !0), m.getInstance().isLoaded(n.pkg) ? this._jumpToGameScene(n) : f.dispatch(c.SYS_PACKAGE_LOAD, n.pkg, (function() {
                            t._jumpToGameScene(n)
                        }), (function(e) {
                            console.log("游戏加载失败-------------")
                        }))))
                    } else {
                        if (s.User.isLogining()) return;
                        p.clear(null), f.dispatch(c.NET_GOTO_START_LOGIN, null, !0)
                    }
                }, g._jumpToGameScene = function(e) {
                    var t = this;
                    if (this._canChange) {
                        if (0 == s.User.isLoginSuccesed()) return p.clear(null), void f.dispatch(c.NET_GOTO_START_LOGIN, null, !0);
                        if (!p.has(e.gameUI) && 1 != p.isLoading(e.gameUI)) {
                            this._canChange = !1;
                            var i = E.orientation;
                            s.User.updateIsRoom(!0), E.setDeviceOrientation("landscape", (function() {
                                t.addSchedulerOnce(0, (function() {
                                    t.print("游戏屏幕切换为横屏------场景从" + i + "到" + E.orientation), t._canChange = !0, p.has(e.gameUI) || 1 == p.isLoading(e.gameUI) || (p.clearOther(h[e.gameUI].layer), p.clear(h[e.gameUI].layer), t.print("打开游戏场景===>"), f.dispatch(c.SYS_APP_LIFE, d.AppRunLife.Game_Will_Open), y.getInstance().onOpenView("", e.gameUI, {
                                        ignoreRelease: !0
                                    }, {
                                        onAdded: function() {
                                            f.dispatch(c.VIEW_UI_MAIN_UPDATE, e.gameUI), f.dispatch(c.SYS_APP_LIFE, d.AppRunLife.Game_Opened)
                                        },
                                        onRemoved: function() {
                                            f.dispatch(c.SYS_APP_LIFE, d.AppRunLife.Game_Closed)
                                        }
                                    }, null, !1, !1, !0))
                                }))
                            }))
                        }
                    }
                }, g.exitGame = function() {
                    var e, t = (null == (e = s.SelectGame.intoGameData) ? void 0 : e.GameID) || o.CurrentGameID,
                        i = _()[t];
                    (p.has(i.gameUI) || p.isLoading(i.gameUI)) && (f.dispatch(c.SYS_PLAY_MUSIC, l.BgHall), f.dispatch(c.SYS_UPDATE_CMDMAPPING), P.Write.initCommonCmds(v, T, !0), f.dispatch(c.HALL_GOTO_SHOW, !0, u.ROOMTOSELECTLEVEL))
                }, g.reqReportGameVer = function(e, t) {
                    if (t = r.number_valueOf(t, null), !r.isNull(t) && r.isNull(this._reportGameVerRecord[t])) {
                        var i = r.number_valueOf(s.SelectGame.getGameVersionByGameID(t), null);
                        if (!r.isNull(i)) {
                            var n = {
                                    gid: t,
                                    gameVer: i
                                },
                                a = {
                                    cmd: R.PHP_REPORT_GAME_VERSION,
                                    body: n
                                };
                            f.dispatch(c.NET_SEND_MSG, a), this._reportGameVerRecord[t] = r.number_valueOf(this._reportGameVerRecord[t], 0) + 1
                        }
                    }
                }, g.reqGamePlayInfo = function(e, t, i) {
                    void 0 === i && (i = !1);
                    var n = {},
                        a = R.PHP_GAME_PLAY_INFO;
                    if (o.deviceInfo.isMJCollection) {
                        if (!i) {
                            var l = s.User.getGamePlayInfoRecordData(t);
                            if (!r.isNull(l)) return
                        }
                        a = R.PHP_GAME_PLAY_INFO_V2
                    } else {
                        if (t = r.number_valueOf(t, null), r.isNull(t)) return;
                        n = {
                            game_id: t
                        }
                    }
                    var u = {
                        cmd: a,
                        body: n
                    };
                    f.dispatch(c.NET_SEND_MSG, u)
                }, g.respGamePlayInfo = function(e, t, i, n) {
                    if (console.log("php获取用户某个游戏的信息返回", t, i, n), 0 != t) {
                        var a = s.User.syncGamePlayRecord(i.game_id, i);
                        null != a && f.dispatch(c.USER_UPDATE_GAMERECORD, a)
                    }
                }, g._getSize = function() {
                    var e = new n;
                    if (E.windowWidth && E.windowHeight) {
                        var t = a.devicePixelRatio;
                        (e = new n).width = E.windowWidth * t, e.height = E.windowHeight * t
                    } else e.width = a.windowSize.width, e.height = a.windowSize.height;
                    return e
                }, g.screenshotToAlbum = function(e, t) {
                    var i;
                    if (t = r.table_verify(t), E.isWXPlatform() && null != (i = window.canvas) && i.toTempFilePath) {
                        var n = this._getSize(),
                            a = n.width,
                            o = n.height;
                        E.saveToAlbum({
                            x: null == t.x ? 0 : t.x,
                            y: null == t.y ? 0 : t.y,
                            width: null == t.width ? a : t.width,
                            height: null == t.height ? o : t.height,
                            destWidth: null == t.destWidth ? a : t.destWidth,
                            destHeight: null == t.destHeight ? o : t.destHeight,
                            successCallBack: function(e) {
                                f.dispatch(c.SYS_TOAST_TIP, {
                                    content: "已保存到相册"
                                })
                            }
                        })
                    }
                }, i
            }(g))._instance = null, i._RF.pop()
        }
    }
}))