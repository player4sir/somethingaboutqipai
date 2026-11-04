System.register("chunks:///_virtual/LayerManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./UIConfig.ts", "./DelegateComponent.ts", "./LayerDialog.ts", "./LayerNotify.ts", "./LayerPopup.ts", "./LayerUI.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy, n = e.warn, a = e.Camera, o = e.Layers, r = e.Node, s = e.isValid, c = e.Widget, l = e.Tween, u = e.tween, d = e.Vec3
        }, function(e) {
            _ = e.Logger
        }, function(e) {
            h = e.inf_LayerType
        }, function(e) {
            p = e.DelegateComponent
        }, function(e) {
            f = e.LayerDialog
        }, function(e) {
            m = e.LayerNotify
        }, function(e) {
            g = e.LayerPopUp
        }, function(e) {
            E = e.LayerUI
        }],
        execute: function() {
            i._RF.push({}, "ad2094zom9DNqLUbiD0KRxu", "LayerManager", void 0);
            var v = function() {
                function e() {
                    this.guiRoot = null, this.configs = {}, this.NodeList = {}, this.ZorderConf = {}
                }
                var i = e.prototype;
                return i.initCamara = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.camera2D = e, this.camera3D = t
                }, i.load = function(e) {
                    this.root || this.load(e)
                }, i.reload = function(e) {
                    e || n("重新加载UI失败，root不存在"), this.clear(), this.root = null, this._load(e)
                }, i._load = function(e) {
                    _.logView("成功初始化！！！"), this.root = e, this.camera = this.root.getComponentInChildren(a), this.initGuiNode()
                }, i.initGuiNode = function() {
                    var e, t;
                    if (this.guiRoot && 0 != this.guiRoot.isValid) {
                        var i = this.guiRoot.children;
                        if (i && (null == i ? void 0 : i.length) > 0)
                            for (var n = 0; n < i.length; n++) {
                                var a = i[n];
                                this.removeByNode(a, !0)
                            }
                    } else {
                        if (!this.root) return;
                        this.guiRoot = this.create_node("GUI"), this.root.addChild(this.guiRoot)
                    }
                    this.game = this.create_node(h.Game), this.ui = new E(h.UI), this.popup = new g(h.PopUp), this.dialog = new f(h.Dialog), this.dialogTip = new f(h.DialogTip), this.alert = new f(h.Alert), this.dialogAnim = new f(h.DialogTip), this.netwindow = new f(h.NetWindow), this.notify = new m(h.Notify), this.guide = this.create_node(h.Guide), this.ZorderConf = ((e = {})[h.Game] = 0, e[h.UI] = 1, e[h.PopUp] = 2, e[h.Dialog] = 3, e[h.DialogTip] = 4, e[h.Alert] = 5, e[h.Animal] = 6, e[h.NetWindow] = 7, e[h.Notify] = 8, e[h.Guide] = 9, e), this.NodeList = ((t = {})[h.Game] = this.game, t[h.UI] = this.ui, t[h.PopUp] = this.popup, t[h.Dialog] = this.dialog, t[h.DialogTip] = this.dialogTip, t[h.Alert] = this.alert, t[h.Animal] = this.dialogAnim, t[h.NetWindow] = this.netwindow, t[h.Notify] = this.notify, t[h.Guide] = this.guide, t), this.guiRoot.addChild(this.game), this.guiRoot.addChild(this.ui), this.guiRoot.addChild(this.popup), this.guiRoot.addChild(this.dialog), this.guiRoot.addChild(this.dialogTip), this.guiRoot.addChild(this.alert), this.guiRoot.addChild(this.dialogAnim), this.guiRoot.addChild(this.netwindow), this.guiRoot.addChild(this.notify), this.guiRoot.addChild(this.guide), this.updateZorder()
                }, i.updateZorder = function() {
                    for (var e in this.NodeList)
                        if (Object.prototype.hasOwnProperty.call(this.NodeList, e)) {
                            var t = this.NodeList[e],
                                i = this.ZorderConf[e];
                            t.setSiblingIndex(i), t.layer = o.Enum.UI_2D
                        }
                }, i.initUIConfig = function(e) {
                    this.configs = e
                }, i.updateConfig = function(e) {
                    if (e)
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                var i = e[t];
                                this.configs || (this.configs = {}), this.configs[t] = i
                            }
                }, i.open = function(e, t, i, a, o, r) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === a && (a = null), void 0 === o && (o = !1), void 0 === r && (r = !1), 0 != T.loadState) {
                        var s = this.configs[e];
                        if (null != s) {
                            var c = s.prefab;
                            if (console.log("正在打开编号为【" + e + "】= " + c + " 的界面"), 1 == s.isSingle && (this.has(e) || 1 == this.isLoading(e)) && this.remove(e, !0, a), a) switch (s.layer) {
                                case h.UI:
                                    "function" == typeof a.add && a.add(s, t, i, o, r);
                                case h.NetWindow:
                                    this.has(e, a) && 1 != this.isLoading(e, a) || "function" == typeof a.add && a.add(s, t, i, o, r);
                                    break;
                                case h.Notify:
                                    "function" == typeof a.show && (t && "top" == t.pos ? a.show(s, t, this.getToastEffectByTop(i, t.timeOut), r) : a.show(s, t, this.getToastEffectByCenter(i, t.timeOut), r));
                                    break;
                                default:
                                    "function" == typeof a.add ? a.add(s, t, i || this.getPopCommonEffect(), o, r) : n("打开编号为【" + e + "】的界面失败，函数【add】不存在")
                            } else switch (s.layer) {
                                case h.UI:
                                    this.ui.add(s, t, i, o, r);
                                    break;
                                case h.PopUp:
                                    this.popup.add(s, t, this.getPopCommonEffect(i), o, r);
                                    break;
                                case h.Dialog:
                                    this.dialog.add(s, t, this.getPopCommonEffect(i), o, r);
                                    break;
                                case h.DialogTip:
                                    this.dialogTip.add(s, t, this.getPopCommonEffect(i), o, r);
                                    break;
                                case h.Alert:
                                    this.alert.add(s, t, this.getPopCommonEffect(i), o, r);
                                    break;
                                case h.NetWindow:
                                    this.has(e) || 0 != this.isLoading(e) || this.netwindow.add(s, t, i, o, r);
                                    break;
                                case h.Notify:
                                    t && "top" == t.pos ? this.notify.show(s, t, this.getToastEffectByTop(i, t.timeOut), r) : this.notify.show(s, t, this.getToastEffectByCenter(i, t.timeOut), r);
                                    break;
                                default:
                                    n("打开编号为【" + e + "】= " + c + " 的界面失败，类型配置错误")
                            }
                        } else n("打开编号为【" + e + "】的界面失败，配置信息不存在")
                    } else n("打开编号为【" + e + "】的界面失败")
                }, i.has = function(e, t) {
                    if (void 0 === t && (t = null), 0 == T.loadState) return n("判断界面编号为【" + e + "】的界面失败"), !1;
                    var i = this.configs[e];
                    if (null != i) {
                        if (t) return "function" == typeof t.has && t.has(i.prefab);
                        var a = !1;
                        switch (i.layer) {
                            case h.UI:
                                a = this.ui.has(i.prefab);
                                break;
                            case h.PopUp:
                                a = this.popup.has(i.prefab);
                                break;
                            case h.Dialog:
                                a = this.dialog.has(i.prefab);
                                break;
                            case h.DialogTip:
                                a = this.dialogTip.has(i.prefab);
                                break;
                            case h.Alert:
                                a = this.alert.has(i.prefab);
                                break;
                            case h.NetWindow:
                                a = this.netwindow.has(i.prefab)
                        }
                        return a
                    }
                    n("编号为【" + e + "】的界面失败，配置信息不存在")
                }, i.isLoading = function(e, t) {
                    if (void 0 === t && (t = null), 0 == T.loadState) return n("判断界面编号为【" + e + "】的界面失败"), !1;
                    var i = this.configs[e];
                    if (null != i) {
                        if (t) return "function" == typeof t.isLoading && t.isLoading(i.prefab);
                        var a = !1;
                        switch (i.layer) {
                            case h.UI:
                                a = this.ui.isLoading(i.prefab);
                                break;
                            case h.PopUp:
                                a = this.popup.isLoading(i.prefab);
                                break;
                            case h.Dialog:
                                a = this.dialog.isLoading(i.prefab);
                                break;
                            case h.DialogTip:
                                a = this.dialogTip.isLoading(i.prefab);
                                break;
                            case h.Alert:
                                a = this.alert.isLoading(i.prefab);
                                break;
                            case h.NetWindow:
                                a = this.netwindow.isLoading(i.prefab)
                        }
                        return a
                    }
                    n("编号为【" + e + "】的界面失败，配置信息不存在")
                }, i.remove = function(e, t, i) {
                    if (void 0 === t && (t = !0), void 0 === i && (i = null), 0 != T.loadState) {
                        var a = this.configs[e];
                        if (null != a)
                            if (i) {
                                if (a.layer == h.NetWindow) {
                                    if ("function" == typeof i.removeAll) return i.removeAll(a.prefab)
                                } else if ("function" == typeof i.remove) return i.remove(a.prefab)
                            } else switch (a.layer) {
                                case h.UI:
                                    this.ui.remove(a.prefab, t);
                                    break;
                                case h.PopUp:
                                    this.popup.remove(a.prefab, t);
                                    break;
                                case h.Dialog:
                                    this.dialog.remove(a.prefab, t);
                                    break;
                                case h.DialogTip:
                                    this.dialogTip.remove(a.prefab, t);
                                    break;
                                case h.Alert:
                                    this.alert.remove(a.prefab, t);
                                    break;
                                case h.NetWindow:
                                    this.netwindow.removeAll(a.prefab, t);
                                    break;
                                case h.Notify:
                                    this.notify.toDestoryNotNotify()
                            } else n("删除编号为【" + e + "】的界面失败，配置信息不存在")
                    } else n("根据编号移除UI 编号为【" + e + "】失败")
                }, i.removeByNode = function(e, t) {
                    if (void 0 === t && (t = !1), e instanceof r) {
                        var i = e.getComponent(p);
                        i && i.viewParams ? e.parent.removeByUuid(i.viewParams.uuid, t) : e.destroy()
                    }
                }, i.clear = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === t && (t = !0), void 0 === i && (i = null), this.root) {
                        if (0 == s(this.root)) return n("Layermanager还没有初始化"), void(this.root = null);
                        if (i) "function" == typeof i.clear && i.clear(t);
                        else {
                            switch (e) {
                                case h.UI:
                                    this.ui.clear(t);
                                    break;
                                case h.PopUp:
                                    this.popup.clear(t);
                                    break;
                                case h.Dialog:
                                    this.dialog.clear(t);
                                    break;
                                case h.DialogTip:
                                    this.dialogTip.clear(t);
                                    break;
                                case h.Alert:
                                    this.alert.clear(t);
                                    break;
                                case h.NetWindow:
                                    this.netwindow.clear(t);
                                    break;
                                default:
                                    this.initGuiNode()
                            }
                            this.updateZorder()
                        }
                    } else n("Layermanager还没有初始化")
                }, i.clearOther = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = !1), this.root) {
                        if (0 == s(this.root)) return n("Layermanager还没有初始化"), void(this.root = null);
                        var i = [{
                            type: h.UI,
                            node: this.ui
                        }, {
                            type: h.PopUp,
                            node: this.popup
                        }, {
                            type: h.Dialog,
                            node: this.dialog
                        }, {
                            type: h.DialogTip,
                            node: this.dialogTip
                        }, {
                            type: h.Alert,
                            node: this.alert
                        }];
                        1 == t && i.push({
                            type: h.NetWindow,
                            node: this.netwindow
                        });
                        for (var a = i.length - 1; a >= 0; a--) e != i[a].type && i[a].node.toDestoryNotNotify();
                        this.updateZorder()
                    } else n("Layermanager还没有初始化")
                }, i.create_node = function(e) {
                    var t = new r(e);
                    t.layer = o.Enum.UI_2D;
                    var i = t.addComponent(c);
                    return i.isAlignLeft = i.isAlignRight = i.isAlignTop = i.isAlignBottom = !0, i.left = i.right = i.top = i.bottom = 0, i.alignMode = 2, i.enabled = !0, t
                }, i.getToastEffectByCenter = function(e, t) {
                    void 0 === t && (t = 1);
                    var i = {
                        onAdded: function(e, i) {
                            e.setScale(.85, .85, .85), e.setPosition(0, 0, 0), u(e).to(.15, {
                                scale: new d(1, 1, 1)
                            }, {
                                easing: "sineIn"
                            }).delay(t || 1).parallel(u().to(.2, {
                                position: new d(0, 80, 0)
                            }), u().to(.2, {
                                easing: "sineOut"
                            })).call((function() {
                                e.destroy()
                            })).start()
                        }
                    };
                    if (e) {
                        if (e && e.onAdded) {
                            var n = e.onAdded;
                            e.onAdded = function(e, t) {
                                n(e, t), i.onAdded(e, t)
                            }
                        }
                        return e
                    }
                    return i
                }, i.getToastEffectByTop = function(e, t) {
                    void 0 === t && (t = 2);
                    var i = {
                        onAdded: function(e, i) {
                            var n = e.getComponent(c);
                            n || (n = e.addComponent(c)), n.isAlignLeft = n.isAlignRight = n.isAlignTop = !0, n.isAlignBottom = !1, n.left = n.right = 0, n.top = -50, n.alignMode = 2, n.enabled = !0, n.updateAlignment(), u(e).parallel(u().to(.15, {
                                easing: "sineIn"
                            }), u().by(.15, {
                                position: new d(0, -140, 0)
                            }), u().to(.15, {
                                easing: "sineOut"
                            })).delay(t || 2).parallel(u().by(.2, {
                                position: new d(0, 70, 0)
                            }), u().to(.2, {
                                easing: "sineOut"
                            })).call((function() {
                                e.destroy()
                            })).start()
                        }
                    };
                    if (e) {
                        if (e && e.onAdded) {
                            var n = e.onAdded;
                            e.onAdded = function(e, t) {
                                n(e, t), i.onAdded(e, t)
                            }
                        }
                        return e
                    }
                    return i
                }, i.getPopCommonEffect = function(e) {
                    var t = {
                        onAdded: function(e, t) {
                            if (e && 0 != e.isValid) {
                                var i = new d(1, 1, 1);
                                u(e).delay(0).call((function() {
                                    var t = .15;
                                    e.getScale(i), e.setScale(i.x - t, i.y - t, i.z - t)
                                })).parallel(u().to(.15, {
                                    scale: i
                                }), u().to(.15, {
                                    easing: "sineIn"
                                })).call((function() {
                                    e.setScale(i)
                                })).start()
                            }
                        },
                        onBeforeRemove: function(e, t) {
                            setTimeout((function() {
                                if (e && 0 != e.isValid) {
                                    var i = new d(1, 1, 1);
                                    e.getScale(i), u(e).parallel(u().to(.1, {
                                        scale: new d(i.x - .2, i.y - .2, i.z - .2)
                                    }), u().to(.1, {
                                        easing: "sineOut"
                                    })).call(t).start()
                                }
                            }), 0)
                        }
                    };
                    if (e) {
                        if (e && e.onAdded) {
                            var i = e.onAdded;
                            e.onAdded = function(e, n) {
                                i(e, n), t.onAdded(e, n)
                            }
                        }
                        if (e && e.onBeforeRemove) {
                            var n = e.onBeforeRemove;
                            e.onBeforeRemove = function(e, i) {
                                n(e, i), t.onBeforeRemove(e, i)
                            }
                        }
                        return e
                    }
                    return t
                }, i.shakeScreen = function() {
                    l.stopAllByTarget(this.root), u(this.root).sequence(u(this.root).to(.03, {
                        position: new d(5, 7)
                    }), u(this.root).to(.03, {
                        position: new d(-6, 7)
                    }), u(this.root).to(.03, {
                        position: new d(-13, 3)
                    }), u(this.root).to(.03, {
                        position: new d(3, -6)
                    }), u(this.root).to(.03, {
                        position: new d(-5, 5)
                    }), u(this.root).to(.03, {
                        position: new d(2, -8)
                    }), u(this.root).to(.03, {
                        position: new d(-8, -10)
                    }), u(this.root).to(.03, {
                        position: new d(3, 10)
                    }), u(this.root).to(.03, {
                        position: new d(0, 0)
                    })).start()
                }, t(e, [{
                    key: "AnimNode",
                    get: function() {
                        return this.dialogAnim
                    }
                }, {
                    key: "loadState",
                    get: function() {
                        return this.root ? 0 == s(this.root) ? (n("isValid(this.root) = false,根节点未初始化"), !1) : !!this.configs || (n("isTrueload = false,配置信息未初始化"), !1) : (n("isTrueload = false,根节点未初始化"), !1)
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }]), e
            }();
            v._instance = null;
            var T = e("LayerManager", v.instance);
            i._RF.pop()
        }
    }
}))