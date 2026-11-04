System.register("chunks:///_virtual/PopWindowComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./SpriteLoad.ts", "./EventManager.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, c = e.Node, l = e.ScrollView, u = e.Button, d = e.Sprite, _ = e.UITransform, h = e.Layout, p = e.Widget
        }, function(e) {
            f = e.GameTxt
        }, function(e) {
            m = e.Utils
        }, function(e) {
            g = e.AppEvent
        }, function(e) {
            E = e.AppSound
        }, function(e) {
            v = e.default
        }, function(e) {
            T = e.EventManager
        }, function(e) {
            R = e.BaseComponent
        }],
        execute: function() {
            var P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x, W, Y, j, K, Q, J, z, X;
            o._RF.push({}, "9fa0fRIVBlG2aKGaEGZFc6h", "PopWindowComponent", void 0);
            var Z = r.ccclass,
                $ = r.property,
                ee = r.menu;
            e("PopWindowComponent", (P = Z("PopWindowComponent"), y = ee("vc/PopWindowComponent"), C = $({
                tooltip: "标题内容-文本",
                type: s
            }), S = $({
                tooltip: "所有label的box",
                type: c
            }), A = $({
                tooltip: "包含只有一个label的父节点",
                type: c
            }), I = $({
                tooltip: "包含只有一个label的ScrollView",
                type: l
            }), D = $({
                tooltip: "包含只有一个label的Label",
                type: c
            }), N = $({
                tooltip: "包含两个label的父节点",
                type: c
            }), O = $({
                tooltip: "包含两个label的Label desc的box",
                type: c
            }), b = $({
                tooltip: "包含两个label的ScrollView",
                type: l
            }), L = $({
                tooltip: "包含只有一个label的Label",
                type: c
            }), M = $({
                tooltip: "包含只有一个label的Label",
                type: s
            }), G = $({
                tooltip: "包含两个按钮的父节点",
                type: c
            }), k = $({
                tooltip: "包含一个按钮的父节点",
                type: c
            }), U = $({
                tooltip: "关闭按钮",
                type: c
            }), P(B = y((H = t((w = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "labelTitle", H, a(t)), n(t, "AllLabelbox", F, a(t)), n(t, "OneLabelParent", q, a(t)), n(t, "OneScrollView", V, a(t)), n(t, "OneLabelDesc", x, a(t)), n(t, "TwoLabelParent", W, a(t)), n(t, "TwoLabelbox", Y, a(t)), n(t, "TwoScrollView", j, a(t)), n(t, "TwoLabelDesc", K, a(t)), n(t, "TwoLabelMain", Q, a(t)), n(t, "TwoButtonsParent", J, a(t)), n(t, "OneButtonsParent", z, a(t)), n(t, "closeNode", X, a(t)), t._params = void 0, t.clickFuncList = {}, t._labelAddHeight = 70, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this._params = {
                        title: "",
                        txt_title: "",
                        txt_desc: "",
                        txt_img_url: "",
                        dec_fontSize: 32,
                        alignLeftTop: !1,
                        notshowClose: !1,
                        notAutoClickClose: !1,
                        buttonsMap: [],
                        web_url: "",
                        ignore_close: !1
                    };
                    var e = null;
                    (e = this.node.getComponent("DelegateComponent")) && (this._params = e.getParams()), this.updateView(), T.dispatch(g.SHOW_COMMON_DIALOG)
                }, o.start = function() {}, o.updateView = function() {
                    var e, t, i, n, a;
                    null != (e = this._params) && e.title && (this.labelTitle.string = null == (a = this._params) ? void 0 : a.title);
                    var o = 1;
                    m.string_isEmpty(null == (t = this._params) ? void 0 : t.web_url) ? null != this._params.txt_title && (o = 2, this.TwoLabelMain.string = this._params.txt_title, this.TwoLabelMain.horizontalAlign = 1, this.TwoLabelMain.verticalAlign = 1) : o = 3;
                    var r = 1,
                        c = !1;
                    if (null != (i = this._params) && i.buttonsMap) switch (this._params.buttonsMap.length) {
                        case 1:
                            for (var l in c = !0, this.TwoButtonsParent.active = !1, this.OneButtonsParent.active = !0, this._params.buttonsMap)
                                if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, l)) {
                                    var p = this._params.buttonsMap[l],
                                        g = this.OneButtonsParent.getChildByName("btn_" + r);
                                    if (g) {
                                        g.active = !0;
                                        var E = g.getChildByName("tx");
                                        if (E && null != p.label) {
                                            var T = E.getComponent(s);
                                            T && (T.string = p.label || f.common_btn_queding)
                                        }
                                        if (null != p.can_click && null != p.can_click && (g.getComponent(u).interactable = p.can_click, g.getComponent(d).grayscale = !p.can_click, null != p.desc && 0 == p.can_click)) {
                                            var R = g.getChildByName("desc");
                                            null != R && null != R && (R.getComponent(s).string = p.desc, R.active = !0)
                                        }
                                        this.clickFuncList["btn_" + r] = (null == p ? void 0 : p.click) || null
                                    }
                                    r += 1
                                } break;
                        case 2:
                            for (var P in this.TwoButtonsParent.active = !0, this.OneButtonsParent.active = !1, c = !0, this._params.buttonsMap)
                                if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, P)) {
                                    var y = this._params.buttonsMap[P],
                                        C = this.TwoButtonsParent.getChildByName("btn_" + r);
                                    if (C) {
                                        C.active = !0;
                                        var S = C.getChildByName("tx");
                                        if (S && null != y.label) {
                                            var A = S.getComponent(s);
                                            A && (A.string = y.label || (1 == r ? f.common_btn_queding : f.common_btn_cancle))
                                        }
                                        if (this.clickFuncList["btn_" + r] = (null == y ? void 0 : y.click) || null, null != y.can_click && null != y.can_click && (C.getComponent(u).interactable = y.can_click, C.getComponent(d).grayscale = !y.can_click, null != y.desc && 0 == y.can_click)) {
                                            var I = C.getChildByName("desc");
                                            null != I && null != I && (I.getComponent(s).string = y.desc, I.active = !0)
                                        }
                                    }
                                    r += 1
                                } break;
                        default:
                            c = !1, this.TwoButtonsParent.active = !1, this.OneButtonsParent.active = !1
                    } else c = !1, this.TwoButtonsParent.active = !1, this.OneButtonsParent.active = !1;
                    if (1 == o) {
                        var D;
                        this.OneLabelParent.active = !0, this.TwoLabelParent.active = !1;
                        var N = this.AllLabelbox,
                            O = this.OneScrollView,
                            b = this.OneLabelDesc.getComponent(s),
                            L = O.getComponent(_),
                            M = O.content.getParent().getComponent(_),
                            G = N.getComponent(_);
                        0 == c && (G.height = G.height + this._labelAddHeight, L.height = L.height + this._labelAddHeight, M.height = M.height + this._labelAddHeight);
                        var k = O.content.getChildByName("sprite");
                        if (null != (D = this._params) && D.txt_img_url) {
                            k.active = !0, b.node.active = !1;
                            var U = k.getComponent(v);
                            U.setCompleteCallBack(this.onImageCompleted.bind(this), {
                                scroll: O,
                                content: k
                            }), U.setRemoteUrl(this._params.txt_img_url)
                        } else {
                            var B, w;
                            k.active = !1, b.node.active = !0, null != (B = this._params) && B.dec_fontSize && (b.fontSize = this._params.dec_fontSize), b.string = (null == (w = this._params) ? void 0 : w.txt_desc) || "", this.updateLabelAlign(b.node), O.content.getComponent(h).updateLayout();
                            var H = O.content.getComponent(_);
                            M.height > H.height && (M.height = H.height, O.elastic = !1)
                        }
                    } else if (2 == o) {
                        var F;
                        this.OneLabelParent.active = !1, this.TwoLabelParent.active = !0;
                        var q = this.AllLabelbox,
                            V = this.TwoScrollView,
                            x = this.TwoLabelDesc.getComponent(s),
                            W = V.getComponent(_),
                            Y = V.content.getParent().getComponent(_),
                            j = q.getComponent(_);
                        0 == c && (j.height = j.height + this._labelAddHeight, W.height = W.height + this._labelAddHeight, Y.height = Y.height + this._labelAddHeight);
                        var K = V.content.getChildByName("sprite");
                        if (null != (F = this._params) && F.txt_img_url) {
                            K.active = !0, x.node.active = !1;
                            var Q = K.getComponent(v);
                            Q.setCompleteCallBack(this.onImageCompleted.bind(this), {
                                scroll: V,
                                content: K
                            }), Q.setRemoteUrl(this._params.txt_img_url)
                        } else {
                            var J, z;
                            K.active = !1, x.node.active = !0, null != (J = this._params) && J.dec_fontSize && (x.fontSize = this._params.dec_fontSize), x.string = (null == (z = this._params) ? void 0 : z.txt_desc) || "", this.updateLabelAlign(x.node), V.content.getComponent(h).updateLayout();
                            var X = V.content.getComponent(_);
                            Y.height > X.height && (Y.height = X.height, V.elastic = !1)
                        }
                    } else this.OneLabelParent.active = !1, this.TwoLabelParent.active = !1;
                    null != (null == (n = this._params) ? void 0 : n.notshowClose) ? this.closeNode.active = !this._params.notshowClose : this.closeNode.active = !0
                }, o.onImageCompleted = function(e) {
                    var t, i = e.scroll;
                    if (null != i && i.content && null != (t = i.content) && t.isValid) {
                        i.content.getComponent(h).updateLayout();
                        var n = i.content.getParent().getComponent(_),
                            a = i.content.getComponent(_);
                        n.height > a.height && (n.height = a.height, i.elastic = !1)
                    }
                }, o.onDestroy = function() {
                    T.dispatch(g.HIDE_COMMON_DIALOG)
                }, o.onClickLeftByTwoButton = function(e) {
                    var t;
                    T.dispatch(g.SYS_PLAY_EFFECT, E.CommClick);
                    var i = e.getCurrentTarget();
                    1 != (null == (t = this._params) ? void 0 : t.notAutoClickClose) && this.node.destroy(), this.clickFuncList[i.name] && this.clickFuncList[i.name]()
                }, o.onClickRightByTwoButton = function(e) {
                    var t;
                    T.dispatch(g.SYS_PLAY_EFFECT, E.CommClick);
                    var i = e.getCurrentTarget();
                    1 != (null == (t = this._params) ? void 0 : t.notAutoClickClose) && this.node.destroy(), this.clickFuncList[i.name] && this.clickFuncList[i.name]()
                }, o.onClicByOneButton = function(e) {
                    var t;
                    T.dispatch(g.SYS_PLAY_EFFECT, E.CommClick);
                    var i = e.getCurrentTarget();
                    0 != (null == (t = this._params) ? void 0 : t.notAutoClickClose) && this.node.destroy(), this.clickFuncList[i.name] && this.clickFuncList[i.name]()
                }, o.onClickMask = function(e) {
                    1 != this._params.ignore_close && this.onClickClose(e)
                }, o.onClickClose = function(e) {
                    T.dispatch(g.SYS_PLAY_EFFECT, E.CommClick), this.node.destroy()
                }, o.updateLabelAlign = function(e) {
                    var t, i, n = e.getComponent(p),
                        a = e.getComponent(s);
                    null != n && null != a && (1 == (null == (t = this._params) ? void 0 : t.alignLeftTop) ? (a.horizontalAlign = 0, n.isAlignLeft = !0, n.isAlignTop = !0) : 1 == (null == (i = this._params) ? void 0 : i.alignTop) ? (n.isAlignHorizontalCenter = !0, n.isAlignTop = !0, a.horizontalAlign = 1) : (n.isAlignHorizontalCenter = !0, n.isAlignVerticalCenter = !0, a.horizontalAlign = 1, a.verticalAlign = 1), a.updateRenderData(!0))
                }, t
            }(R)).prototype, "labelTitle", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(w.prototype, "AllLabelbox", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(w.prototype, "OneLabelParent", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(w.prototype, "OneScrollView", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(w.prototype, "OneLabelDesc", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = t(w.prototype, "TwoLabelParent", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = t(w.prototype, "TwoLabelbox", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = t(w.prototype, "TwoScrollView", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(w.prototype, "TwoLabelDesc", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = t(w.prototype, "TwoLabelMain", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = t(w.prototype, "TwoButtonsParent", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = t(w.prototype, "OneButtonsParent", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = t(w.prototype, "closeNode", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = w)) || B) || B)), o._RF.pop()
        }
    }
}))