System.register("chunks:///_virtual/NoticeDialogComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./DelegateComponent.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, c = e.Label, l = e.Widget, u = e.Button, d = e.LabelComponent
        }, function(e) {
            _ = e.GameTxt
        }, function(e) {
            h = e.DelegateComponent
        }, function(e) {
            p = e.BaseComponent
        }],
        execute: function() {
            var f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L;
            o._RF.push({}, "bb0b8IPVp9KGr7naOkPvSFG", "NoticeDialogComponent", void 0);
            var M = r.ccclass,
                G = r.property,
                k = r.menu;
            e("NoticeDialogComponent", (f = M("NoticeDialogComponent"), m = k("vc/NoticeDialogComponent"), g = G({
                tooltip: "关闭按钮",
                type: s
            }), E = G({
                tooltip: "弹窗标题",
                type: c
            }), v = G({
                tooltip: "内容背景",
                type: s
            }), T = G({
                tooltip: "内容列表",
                type: s
            }), R = G({
                tooltip: "内容标题",
                type: c
            }), P = G({
                tooltip: "内容描述",
                type: c
            }), y = G({
                tooltip: "弹窗按钮",
                type: s
            }), f(C = m((A = t((S = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "closeNode", A, a(t)), n(t, "dialogTitle", I, a(t)), n(t, "subBg", D, a(t)), n(t, "scrollNode", N, a(t)), n(t, "mainTitle", O, a(t)), n(t, "mainDesc", b, a(t)), n(t, "btns", L, a(t)), t._params = void 0, t.clickFuncList = {}, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    var e = this.node.getComponent(h);
                    e && (this._params = e.getParams()), this.updateView()
                }, o.updateView = function() {
                    if (this.closeNode.active = !this._params.notshowClose, this._params.title && (this.dialogTitle.string = this._params.title), this._params.txt_title ? this.mainTitle.string = this._params.txt_title : (this.mainTitle.node.active = !1, this.scrollNode.getComponent(l).top = 20), this._params.txt_desc ? (this.mainDesc.string = this._params.txt_desc, this._params.alignLeftTop && (this.mainDesc.horizontalAlign = 0)) : this.mainDesc.node.active = !1, this._params.ignore_close && (this.node.getComponent(u).interactable = !1), this._params.buttonsMap && this._params.buttonsMap.length) {
                        for (var e in this.btns.children.forEach((function(e) {
                                e.active = !1
                            })), this._params.buttonsMap)
                            if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, e)) {
                                var t = this._params.buttonsMap[e],
                                    i = this.btns.getChildByName("btn_" + e);
                                if (i) {
                                    i.active = !0;
                                    var n = i.getChildByName("Label");
                                    if (n) {
                                        var a = n.getComponent(d);
                                        a && (a.string = (null == t ? void 0 : t.label) || _.common_btn_queding)
                                    }
                                    this.clickFuncList["btn_" + e] = (null == t ? void 0 : t.click) || null
                                }
                            }
                    } else {
                        this.btns.active = !1;
                        var o = this.subBg.getComponent(l);
                        if (o.bottom = 20, o.updateAlignment(), !this._params.txt_title) {
                            var r = this.scrollNode.getComponent(l);
                            r.top = 20, r.bottom = 20, r.updateAlignment()
                        }
                    }
                }, o.onClickLeftButton = function(e) {
                    var t, i = e.getCurrentTarget();
                    this.clickFuncList[i.name] && (this.clickFuncList[i.name](), null != (t = this._params) && t.notAutoClickClose || this.node.destroy())
                }, o.onClickRightButton = function(e) {
                    var t, i = e.getCurrentTarget();
                    this.clickFuncList[i.name] && (this.clickFuncList[i.name](), null != (t = this._params) && t.notAutoClickClose || this.node.destroy())
                }, o.onClickClose = function(e) {
                    this._params.closeCallback && this._params.closeCallback(), this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(p)).prototype, "closeNode", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = t(S.prototype, "dialogTitle", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(S.prototype, "subBg", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(S.prototype, "scrollNode", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(S.prototype, "mainTitle", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(S.prototype, "mainDesc", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = t(S.prototype, "btns", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = S)) || C) || C)), o._RF.pop()
        }
    }
}))