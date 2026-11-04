System.register("chunks:///_virtual/PkgLoaderManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./Platform.ts", "./pbkiller.ts", "./ResLoader.ts", "./BaseController.ts", "./AudioManager.ts", "./EventManager.ts", "./SpineAniManager.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy, a = e.Prefab, o = e.AudioClip
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.Platform
        }, function(e) {
            l = e.pbkiller
        }, function(e) {
            u = e.resLoader
        }, function(e) {
            d = e.BaseController
        }, function(e) {
            _ = e.AudioManager
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.SpineAniManager
        }],
        execute: function() {
            n._RF.push({}, "6ec5evvx/tKwoLpzTo1Z1FZ", "PkgLoaderManager", void 0), e("PkgLoaderManager", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "PkgLoaderManager") || this)._alreadyLoad = {}, i._currowLoad = {}, i
                }
                t(n, e), n.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new n("PkgLoaderManager")), this._instance
                };
                var d = n.prototype;
                return d.onInitModuleEvent = function() {
                    this.addModelListener(s.SYS_PACKAGE_LOAD_TASK_ADD, this.addTask), this.addModelListener(s.SYS_PACKAGE_LOAD_TASK_CANCLE, this.cancleTask)
                }, n.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, n.getInstance()
                }, d.addTask = function(e, t) {
                    if (t && null != t.taskID)
                        if (1 != this._alreadyLoad[t.taskID]) {
                            if (null == this._currowLoad[t.taskID]) {
                                var i = {
                                    taskID: t.taskID,
                                    taskList: t.taskList,
                                    taskNum: 0,
                                    progress: 0,
                                    startCallFunc: t.startCallFunc,
                                    updateCallFunc: t.updateCallFunc,
                                    endCallFunc: t.endCallFunc,
                                    errCallFunc: t.errCallFunc
                                };
                                this._currowLoad[t.taskID] = i, this._startLoad(t.taskID)
                            }
                        } else t.endCallFunc && t.endCallFunc(t.taskID)
                }, d.cancleTask = function(e, t, i) {
                    var n;
                    null != t && null != this._currowLoad[t] && (this.print(">>>取消加载任务:" + t + "成功！！！"), h.dispatch(s.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, t, null == (n = this._currowLoad[t]) ? void 0 : n.taskList), this._currowLoad[t] = null, null != i && i.msg && h.dispatch(s.REPORT_CLIENT_CLICK, {
                        eventID: 89999,
                        isFouce: !0,
                        body: i
                    }))
                }, d.showErrorDialog = function(e, t, i) {
                    void 0 === i && (i = !0), console.log("下载错误提示弹窗------------------", e), "string" == typeof e && (console.log("下载错误提示弹窗------------------1"), e.includes("unzip failed") || e.includes("load prefab failed") || e.includes("load prefab failed") || e.includes("readFile:fail no such file") || e.includes("readFile:fail permission denied") || e.includes("no such file or directory") || e.includes("does not exist!") || e.includes("fail exceed max file size")) ? null == c || c.notifyMemoryLow("游戏加载失败，是否重新加载？", t) : e && (console.log("下载错误提示弹窗------------------2"), i && c.notifyRestartGame("游戏加载失败，是否重新加载？"))
                }, d.isLoaded = function(e) {
                    return this._alreadyLoad[e]
                }, d._startLoad = function(e) {
                    var t = this._currowLoad[e];
                    if (t) {
                        var n = this,
                            r = new Map,
                            s = [],
                            c = [],
                            l = 0,
                            u = function t(o, u, d, _) {
                                var h = n._currowLoad[e];
                                if (!h) return console.log("分包--加载任务出错回调 任务记录异常：", u, _, o), n.cancleTask(null, e, {
                                    id: e,
                                    msg: null == _ ? void 0 : _.message,
                                    path: u,
                                    bundle: o
                                }), void n.showErrorDialog(null == _ ? void 0 : _.message, o, !1);
                                if (-1 === d) return console.log("分包--加载任务出错回调 包路径：", u, _, o), n.cancleTask(null, e, {
                                    id: e,
                                    msg: null == _ ? void 0 : _.message,
                                    path: u,
                                    bundle: o
                                }), n.showErrorDialog(null == _ ? void 0 : _.message, o), void(h.errCallFunc && h.errCallFunc(_));
                                r.set(u, d);
                                for (var p, f = 0, m = i(r.values()); !(p = m()).done;) f += p.value;
                                var g = 100 * h.taskNum;
                                if (h.progress = 100 * f / g, h.updateCallFunc && l < h.progress && (l = h.progress, h.updateCallFunc(e, h.progress)), h.progress >= 100) return n._alreadyLoad[e] = !0, h.endCallFunc && h.endCallFunc(e), void(n._currowLoad[e] = null);
                                if (100 === d && s.length > 0) {
                                    var E = s.indexOf(u);
                                    if (-1 !== E && s.splice(E, 1), 0 === s.length)
                                        for (var v, T = i(c); !(v = T()).done;) {
                                            var R = v.value;
                                            R && null != R.path && n.__addOneLoad(h, R.bundle, R.path, a, t, !1)
                                        }
                                }
                            },
                            d = t.taskList;
                        if (!d) return this._alreadyLoad[e] = !0, void(t.endCallFunc && t.endCallFunc(e));
                        t.startCallFunc && t.startCallFunc(e);
                        var _ = !1,
                            h = !1;
                        if (d.package && d.package.length > 0) {
                            s.push.apply(s, d.package);
                            var p = 0;
                            if (d.prefab && d.prefab.length > 0) {
                                c.push.apply(c, d.prefab);
                                for (var f, m = i(d.prefab); !(f = m()).done;) {
                                    var g = f.value;
                                    g && null != g.path && p++
                                }
                            }
                            h = p > 0, t.taskNum = p;
                            for (var E, v = i(d.package); !(E = v()).done;) {
                                var T = E.value;
                                null != T && "" !== T && (_ = !0, this.__addBundleLoad(t, T, u))
                            }
                        }
                        if (!h && d.prefab && d.prefab.length > 0)
                            for (var R, P = i(d.prefab); !(R = P()).done;) {
                                var y = R.value;
                                y && null != y.path && (_ = !0, this.__addOneLoad(t, y.bundle, y.path, a, u))
                            }
                        if (!0 === d.protobuf && (_ = !0, this.__addPreLoadPB(t, u)), d.audio && d.audio.length > 0)
                            for (var C, S = i(d.audio); !(C = S()).done;) {
                                var A = C.value;
                                A && (null != A.path && "" !== A.path || null == A.bundle ? null != A.path && "" !== A.path && (_ = !0, this.__addOneLoad(t, A.bundle, A.path, o, u)) : (_ = !0, this.__addPreLoadAudio(t, A.bundle, "", u)))
                            }
                        if (d.spine && d.spine.length > 0)
                            for (var I, D = i(d.spine); !(I = D()).done;) {
                                var N = I.value;
                                N && null != N.path && null != N.bundle && (_ = !0, this.__addPreLoadSpine(t, N.bundle, N.path, u))
                            }
                        _ || (this._alreadyLoad[e] = !0, t.endCallFunc && t.endCallFunc(e))
                    }
                }, d.__addBundleLoad = function(e, t, i) {
                    e.taskNum = r.number_valueOf(e.taskNum) + 1;
                    var n = -1;
                    u.loadBundle(t, (function(e, a) {
                        e ? (n = -1, console.log("分包--__addBundleLoad文件下载结果：", e)) : n = 100, i && i(t, t, n, e)
                    }))
                }, d.__addOneLoad = function(e, t, i, n, a, o) {
                    void 0 === o && (o = !0), o && (e.taskNum = r.number_valueOf(e.taskNum) + 1);
                    var s = -1,
                        c = !0;
                    u.load(t, i, n, (function(e, n, o) {
                        (s = e / n * 100) <= 100 && a && c && a(t, i, s), s >= 100 && (c = !1)
                    }), (function(e, n) {
                        e ? (s = -1, console.log("分包--__addOneLoad文件下载结果：", e), a && c && a(t, i, s, e)) : a && c && a(t, i, 100)
                    }))
                }, d.__addPreLoadAudio = function(e, t, i, n) {
                    e.taskNum = r.number_valueOf(e.taskNum) + 1;
                    var a = this,
                        o = -1,
                        s = t + "|" + i,
                        c = !0;
                    _.getInstance().preLoadAudioDir(t, i, (function(e, i, a) {
                        (o = e / i * 100) <= 100 && n && c && n(t, s, o), o >= 100 && (c = !1)
                    }), (function(e, r) {
                        if (e) return o = -1, console.log("分包--__addPreLoadAudio文件下载结果：", e), void(n && c && n(t, s, o, e));
                        a.print("音效预加载目录完成", t, i), n && c && n(t, s, o)
                    }))
                }, d.__addPreLoadSpine = function(e, t, i, n) {
                    e.taskNum = r.number_valueOf(e.taskNum) + 1;
                    var a = this,
                        o = -1,
                        s = t + "|" + i,
                        c = !0;
                    p.getInstance().preLoadSkinAniDir(t, i, (function(e, i, a) {
                        (o = e / i * 100) <= 100 && n && c && n(t, s, o), o >= 100 && (c = !1)
                    }), (function(e, r) {
                        if (e) return o = -1, console.log("分包--__addPreLoadSpine文件下载结果：", e), void(n && c && n(t, s, o, e));
                        a.print("Spine预加载目录完成", t, i), n && c && n(t, s, o)
                    }))
                }, d.__addPreLoadPB = function(e, t) {
                    e.taskNum = r.number_valueOf(e.taskNum) + 1;
                    var i = this,
                        n = -1,
                        a = "pbkiller",
                        o = !0,
                        c = function(e, i, r) {
                            (n = e / i * 100) <= 100 && t && o && t("", a, n), n >= 100 && (o = !1)
                        };
                    l.preload(c, (function e(r, u) {
                        if (r) return n = -1, console.log("分包--资源预加载: ---__addPreLoadPB---PB文件下载结果：", r), l.preload(c, e), void(t && o && t("", a, n, r));
                        i.print("PB文件目录遍历完成 开始加载"), h.dispatch(s.SYS_UPDATE_PROTOBUF), t && o && t("", a, n)
                    }))
                }, n
            }(d))._instance = null, n._RF.pop()
        }
    }
}))