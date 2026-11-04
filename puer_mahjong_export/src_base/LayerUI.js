System.register("chunks:///_virtual/LayerUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Platform.ts", "./InterfaceDefines.ts", "./ResLoader.ts", "./DelegateComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy, a = e.Widget, o = e.Node, r = e.Layers, s = e.MaskComponent, c = e.Button, l = e.UITransform, u = e.Vec2, d = e.Sprite, _ = e.Prefab, h = e.error, p = e.instantiate, f = e.warn, m = e.isValid
        }, function(e) {
            g = e.Platform
        }, function(e) {
            E = e.inf_ViewParams
        }, function(e) {
            v = e.resLoader
        }, function(e) {
            T = e.DelegateComponent
        }],
        execute: function() {
            n._RF.push({}, "02f9bWPhnlCyosSjezkc7Yq", "LayerUI", void 0), e("LayerUI", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, t) || this).addHistoryRecode = {}, i.loadingMap = {}, i.key_num = 0, i.ui_nodes = {}, i._maskNode = null, i._buttonCompent = null, i.onWillAdd = function(e, t) {}, i.onAdded = function(e, t) {}, i.onRemoved = function(e, t) {
                        setTimeout((function() {
                            t.node = null, t.valid = !1, i.removeByUuid(t.uuid, !0)
                        }), 0)
                    }, i.onBeforeRemove = function(e, t) {}, i.init(), i
                }
                t(n, e);
                var R = n.prototype;
                return R.init = function() {
                    var e = this.getComponent(a);
                    e || (e = this.addComponent(a)), e.isAlignLeft = e.isAlignRight = e.isAlignTop = e.isAlignBottom = !0, e.left = e.right = e.top = e.bottom = 0, e.alignMode = 2, e.enabled = !0, e.updateAlignment(), this.create_Mask("Mask"), this.on(o.EventType.CHILD_ADDED, this.onCallbackChildAdd, this), this.on(o.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this), this.on(o.EventType.NODE_DESTROYED, this.onCallbackDestory, this)
                }, R.create_Mask = function(e) {
                    void 0 === e && (e = null), this._maskNode || (this._maskNode = new o(e), this._maskNode.layer = r.Enum.UI_2D, this.addChild(this._maskNode));
                    var t = this._maskNode.getComponent(a);
                    t || (t = this._maskNode.addComponent(a)), t.isAlignLeft = t.isAlignRight = t.isAlignTop = t.isAlignBottom = !0, t.left = t.right = t.top = t.bottom = 0, t.alignMode = 2, t.enabled = !0, t.updateAlignment();
                    var i = this._maskNode.addComponent(s);
                    i.type = 0, i.enabled = !0, this._buttonCompent = this._maskNode.getComponent(c), this._buttonCompent || (this._buttonCompent = this._maskNode.addComponent(c)), this._buttonCompent.target = this._maskNode, this._buttonCompent.interactable = !0, this._buttonCompent.transition = 0, this._buttonCompent.enabled = !0, this._maskNode.active = !1
                }, R.create_2DNode = function(e) {
                    void 0 === e && (e = null), null != e && (e = String(e));
                    var t = new o(e);
                    t.layer = r.Enum.UI_2D;
                    var i = t.addComponent(l);
                    return i.anchorPoint = new u(.5, .5), i.enabled = !0, t
                }, R.create_2DSprite = function(e, t) {
                    void 0 === t && (t = null);
                    var i = this.create_2DNode(t);
                    if (i) {
                        var n = i.addComponent(d);
                        n.sizeMode = 0, n.type = 0, n.trim = !0, n.spriteFrame = e, n.enabled = !0
                    }
                    return i
                }, R.onCallbackChildAdd = function(e) {
                    this.updateMaskState()
                }, R.onCallbackChildRemove = function(e) {
                    this.updateMaskState()
                }, R.onCallbackDestory = function(e) {
                    this.off(o.EventType.CHILD_ADDED, this.onCallbackChildAdd, this), this.off(o.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this), this.off(o.EventType.NODE_DESTROYED, this.onCallbackDestory, this)
                }, R.updateMaskState = function() {
                    0 != this.isValid && this._maskNode && 0 != this.activeInHierarchy && (this.children.length > 1 ? (this.active = !0, this.insertChild(this._maskNode, this.children.length - 1 - 1), this._maskNode.active = !0, this._buttonCompent.enabled = !0) : this._maskNode.active = !1)
                }, R.getSoleID = function(e) {
                    this.key_num = this.key_num + 1;
                    var t = (this.name + "_" + e + "_" + this.key_num).replace(/\//g, "_");
                    return this.addHistoryRecode[e] || (this.addHistoryRecode[e] = {}), this.addHistoryRecode[e][t] = !0, t
                }, R.add = function(e, t, i, n, a) {
                    if (0 != this.isValid) {
                        var o = e.bundle || "resources",
                            r = e.prefab,
                            s = this.getSoleID(r),
                            c = new E;
                        return c.uuid = s, c.bundle = o, c.prefabPath = r, c.params = t || {}, c.callbacks = i || {}, c.noticeToRoot = {
                            onWillAdd: this.onWillAdd,
                            onAdded: this.onAdded,
                            onBeforeRemove: this.onBeforeRemove,
                            onRemoved: this.onRemoved
                        }, c.valid = !0, c.isAutoRecover = a || !1, c.isClickSpanceClose = n || !1, this.load(c), s
                    }
                }, R.load = function(e, t) {
                    if (void 0 === t && (t = 0), 0 != this.isValid) {
                        var i = this;
                        if (e && e.prefabPath) {
                            this.loadingMap[e.prefabPath] = !0;
                            var n = v.get(e.prefabPath, _, e.bundle);
                            if (n) {
                                if (!this.addHistoryRecode[e.prefabPath] || !this.addHistoryRecode[e.prefabPath][e.uuid]) return;
                                var a = p(n);
                                n.addRef(), a.addComponent(T).viewParams = e, this.createNode(a, e)
                            } else v.load(e.bundle, e.prefabPath, (function(n, a) {
                                if (n) {
                                    if (t < 1) {
                                        g.resetTempStorage();
                                        var o = i.getComponent(l);
                                        return void(o ? o.scheduleOnce((function() {
                                            i.load(e, t + 1)
                                        })) : i.load(e, t + 1))
                                    }
                                    return null == g || g.notifyMemoryLow("当前网络不稳定，页面加载失败，是否重新加载？", e.bundle), i.loadingMap[e.prefabPath] = !1, void h(n)
                                }
                                if (0 != i.isValid)
                                    if (i.addHistoryRecode[e.prefabPath] && i.addHistoryRecode[e.prefabPath][e.uuid]) {
                                        var r = p(a);
                                        a.addRef(), r.addComponent(T).viewParams = e, i.createNode(r, e)
                                    } else i.loadingMap[e.prefabPath] = null;
                                else i.loadingMap[e.prefabPath] = null
                            }))
                        } else f(this.name + ".load 加载失败 viewParams.bundle = " + e.bundle + " viewParams.prefabPath = " + (null == e ? void 0 : e.prefabPath))
                    }
                }, R.createNode = function(e, t) {
                    if (0 != this.isValid) {
                        if (!this.addHistoryRecode[t.prefabPath] || !this.addHistoryRecode[t.prefabPath][t.uuid]) return this.loadingMap[t.prefabPath] = null, null;
                        var i = e,
                            n = i.getComponent(T);
                        if (i) {
                            this.layer = r.Enum.UI_2D, this._activeInHierarchy = !0;
                            var a = this;
                            if (!a.addHistoryRecode[t.prefabPath] || !a.addHistoryRecode[t.prefabPath][t.uuid]) return a.loadingMap[t.prefabPath] = null, null;
                            if (0 == a.isValid) return a.loadingMap[t.prefabPath] = null, null;
                            a.addChild(i), i.__UUID__ = t.uuid, t.params && t.params.ignoreRelease || (i.__bundConfig__ = {
                                bundleName: t.bundle,
                                prefabPath: t.prefabPath
                            }), t.node = i, t.valid = !0, null == n || n.add(), a.ui_nodes[t.prefabPath] || (a.ui_nodes[t.prefabPath] = new Map), a.ui_nodes[t.prefabPath].set(t.uuid, t), i.active = !0, a.loadingMap[t.prefabPath] = null
                        } else t.node = null, t.valid = !1, this.loadingMap[t.prefabPath] = null;
                        return i
                    }
                    this.loadingMap[t.prefabPath] = null
                }, R.removeByUuid = function(e, t) {
                    var i = this.getViewParamsSizeByUuid(e),
                        n = i[0],
                        a = i[1];
                    if (a) {
                        var o = a.node,
                            r = m(o);
                        (t || 0 == r) && this.ui_nodes[n].delete(a.uuid), r && (this.addHistoryRecode[a.prefabPath] && (this.addHistoryRecode[a.prefabPath][a.uuid] = !1), o && null != o && o.components && o.getComponent(T).remove(t))
                    }
                }, R.remove = function(e, t) {
                    var i = this;
                    if (e) {
                        var n = this.ui_nodes[e];
                        n && n.size > 0 ? n.forEach((function(n, a) {
                            var o = n.node,
                                r = m(o);
                            (t || 0 == r) && i.ui_nodes[e].delete(a), r && (i.addHistoryRecode[n.prefabPath] && (i.addHistoryRecode[n.prefabPath][n.uuid] = !1), o && null != o && o.components && o.getComponent(T).remove(t), n.valid = !1)
                        })) : this.addHistoryRecode[e] = null
                    }
                }, R.toDestoryNotNotify = function() {
                    if (this.addHistoryRecode = {}, this.loadingMap = {}, this.key_num = 0, this.ui_nodes = {}, this.off(o.EventType.CHILD_ADDED, this.onCallbackChildAdd, this), this.off(o.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this), this.off(o.EventType.NODE_DESTROYED, this.onCallbackDestory, this), this.children && this.children.length > 0) {
                        this.children.length;
                        for (var e = this.children.length - 1; e >= 0; e--) {
                            var t = this.children[e];
                            if (t && 1 == t.isValid) {
                                var i = t.getComponent(T);
                                i && (i.enabled = !1), t.destroy()
                            }
                        }
                    }
                    this._maskNode = null, this._buttonCompent = null, this.create_Mask("Mask"), this.on(o.EventType.CHILD_ADDED, this.onCallbackChildAdd, this), this.on(o.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this), this.on(o.EventType.NODE_DESTROYED, this.onCallbackDestory, this)
                }, R.getViewParamsSizeByUuid = function(e) {
                    var t = null,
                        i = null;
                    for (var n in this.ui_nodes)
                        if (Object.prototype.hasOwnProperty.call(this.ui_nodes, n)) {
                            var a = this.ui_nodes[n];
                            a.has(e) && (t = n, i = a.get(e))
                        } return [t, i]
                }, R.isLoading = function(e) {
                    return 1 == this.loadingMap[e]
                }, R.find = function(e) {
                    for (var t, n = [], a = this.__nodes(), o = i(a); !(t = o()).done;) {
                        var r = t.value;
                        e.test(r.viewParams.prefabPath) && n.push(r.node)
                    }
                    return n
                }, R.has = function(e) {
                    for (var t, n = this.__nodes(), a = i(n); !(t = a()).done;) {
                        var o = t.value;
                        if (o.viewParams.uuid === e || o.viewParams.prefabPath === e) return !0
                    }
                    return !1
                }, R.__nodes = function() {
                    for (var e = [], t = this.children, i = 0; i < t.length; i++) {
                        var n;
                        if (t[i] && null != (n = t[i]) && n.components) {
                            var a = t[i].getComponent(T);
                            a && a.viewParams && a.viewParams.valid && m(a) && e.push(a)
                        }
                    }
                    return e
                }, R.size = function() {
                    return this.children.length
                }, R.clear = function(e) {
                    var t = this;
                    this.addHistoryRecode = {};
                    var i = function(i) {
                        Object.prototype.hasOwnProperty.call(t.ui_nodes, i) && t.ui_nodes[i].forEach((function(n, a) {
                            var o = !0,
                                r = n.node;
                            e ? t.ui_nodes[i].delete(n.uuid) : 0 == m(r) && (t.ui_nodes[i].delete(n.uuid), o = !1), o && (r && null != r && r.components && r.getComponent(T).remove(e), n.valid = !1)
                        }))
                    };
                    for (var n in this.ui_nodes) i(n);
                    this.ui_nodes = {}
                }, n
            }(o)), n._RF.pop()
        }
    }
}))