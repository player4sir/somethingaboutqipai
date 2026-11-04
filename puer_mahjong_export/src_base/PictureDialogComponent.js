System.register("chunks:///_virtual/PictureDialogComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./ResLoader.ts", "./EventManager.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, c = e.Node, l = e.UITransform, u = e.Size, d = e.Layout, _ = e.Vec3, h = e.ImageAsset
        }, function(e) {
            p = e.Utils
        }, function(e) {
            f = e.AppEvent
        }, function(e) {
            m = e.AppSound
        }, function(e) {
            g = e.resLoader
        }, function(e) {
            E = e.EventManager
        }, function(e) {
            v = e.BaseComponent
        }],
        execute: function() {
            var T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V;
            o._RF.push({}, "2e341vk5rVJ3La0/ztS8QzU", "PictureDialogComponent", void 0);
            var x = r.ccclass,
                W = r.property;
            e("PictureDialogComponent", (T = x("PictureDialogComponent"), R = W({
                tooltip: "标题内容-文本",
                type: s
            }), P = W({
                tooltip: "正文和按钮的根节点",
                type: c
            }), y = W({
                tooltip: "正文根节点",
                type: c
            }), C = W({
                tooltip: "按钮根节点",
                type: c
            }), S = W({
                tooltip: "关闭按钮",
                type: c
            }), A = W({
                tooltip: "正文节点",
                type: c
            }), I = W({
                tooltip: "滚动条节点",
                type: c
            }), D = W({
                tooltip: "两个按钮的父节点",
                type: c
            }), N = W({
                tooltip: "一个按钮的父节点",
                type: c
            }), O = W({
                tooltip: "无内容时的节点",
                type: c
            }), T((M = t((L = function(e) {
                function t() {
                    var t;
                    return t = e.call(this) || this, n(t, "labelTitle", M, a(t)), n(t, "nodePanel", G, a(t)), n(t, "nodeContentRoot", k, a(t)), n(t, "nodeButtonRoot", U, a(t)), n(t, "nodeButtonClose", B, a(t)), n(t, "contentNode", w, a(t)), n(t, "scrollowBarNode", H, a(t)), n(t, "nodeTwoBtn", F, a(t)), n(t, "nodeOneBtn", q, a(t)), n(t, "nodeNoTips", V, a(t)), t._loadResMapList = {}, t._curMaxResNum = -1, t._currowType = null, t._title = null, t._titleColor = null, t._spriteFrameCache = {}, t.preLoad(), t
                }
                i(t, e);
                var o = t.prototype;
                return o.preLoad = function() {}, o._loadRes = function(e, t) {
                    for (var i = this, n = function(n) {
                            var a = e[n];
                            g.load(a.bundle, a.path, h, (function(e, a) {
                                !e && i._loadResMapList && (i._loadResMapList[t] || (i._loadResMapList[t] = {}), i._loadResMapList[t][n] = null, i._loadResMapList[t][n] = a, i._currowType == t && i.onLoadCallback(i._currowType))
                            }))
                        }, a = 0; a < e.length; a++) n(a)
                }, o.onLoad = function() {
                    var e = null,
                        t = null;
                    if (e = this.node.getComponent("DelegateComponent")) {
                        var i = e.getParams();
                        this._currowType = null == i ? void 0 : i.type, this._title = null == i ? void 0 : i.title, this._titleColor = null == i ? void 0 : i.titleColor, t = i.res
                    }
                    this.updateView(), t ? (this._curMaxResNum = t.length, this._loadRes(t, this._currowType)) : this.onLoadCallback(this._currowType)
                }, o.onClickSure = function() {
                    E.dispatch(f.SYS_PLAY_EFFECT, m.CommClick), this.node.destroy()
                }, o.onClickCancel = function() {
                    E.dispatch(f.SYS_PLAY_EFFECT, m.CommClick), this.node.destroy()
                }, o.updateView = function() {
                    "string" == typeof this._title && (this.labelTitle.string = this._title, this.labelTitle.node.active = !0, this._titleColor && (this.labelTitle.color = this._titleColor)), this.nodePanel.active = !0;
                    var e = this.nodeContentRoot.getComponent(l);
                    "连炸场玩法规则" == this._currowType ? (this.nodeButtonRoot.active = !1, this.nodeButtonClose.active = !0, e.setContentSize(new u(e.width, this.nodePanel.getComponent(l).height))) : (this.nodeButtonRoot.active = !0, this.nodeButtonClose.active = !1, e.setContentSize(new u(e.width, this.nodePanel.getComponent(l).height - this.nodeButtonRoot.getComponent(l).height))), this.nodeContentRoot.active = !0, this.nodeOneBtn.active = !0, this.nodeTwoBtn.active = !1, this.nodeNoTips.active = !0, this.nodePanel.getComponent(d).updateLayout()
                }, o.onLoadCallback = function(e) {
                    if (void 0 === e && (e = null), null != e && null != this._loadResMapList[e] && this.node && 0 != this.node.isValid && p.table_length(this._loadResMapList[e]) == this._curMaxResNum) {
                        this.nodeNoTips.active = !1;
                        var t = this.contentNode.getComponent(l).width - 40;
                        this.contentNode.destroyAllChildren();
                        for (var i = 0; i < this._curMaxResNum; i++) {
                            var n = this._loadResMapList[e][i];
                            if (n) {
                                var a = this.creatorSpriteNode(n);
                                this.contentNode.addChild(a);
                                var o = a.getComponent(l),
                                    r = 1,
                                    s = 1;
                                (o.width / t > 1 || o.width / t < 1) && (s = r = t / o.width), a.scale = new _(r, s, 1)
                            }
                        }
                    }
                }, o.creatorSpriteNode = function(e) {
                    var t = e._nativeUrl;
                    p.string_isEmpty(t) && (t = e._uuid);
                    var i = this._spriteFrameCache[t];
                    i || (i = p.image_ImageAssetToSpriteFrame(e), this._spriteFrameCache[t] = i);
                    var n = p.create_2DSprite(i, "Sprite");
                    return n.setScale(.9, .9), n
                }, o.onDestroy = function() {
                    var e = this;
                    this._loadResMapList = null, Object.keys(this._spriteFrameCache).forEach((function(t) {
                        var i = e._spriteFrameCache[t];
                        null != i && i.isValid && i.decRef()
                    })), this._spriteFrameCache = null
                }, t
            }(v)).prototype, "labelTitle", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(L.prototype, "nodePanel", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(L.prototype, "nodeContentRoot", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(L.prototype, "nodeButtonRoot", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = t(L.prototype, "nodeButtonClose", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = t(L.prototype, "contentNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(L.prototype, "scrollowBarNode", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(L.prototype, "nodeTwoBtn", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(L.prototype, "nodeOneBtn", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(L.prototype, "nodeNoTips", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = L)) || b)), o._RF.pop()
        }
    }
}))