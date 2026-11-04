System.register("chunks:///_virtual/XiaZhuItem3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./FXJEvent3.ts", "./FXJCmd3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, u = e.Sprite, l = e.SpriteFrame, d = e.UITransform
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            m = e.PlayerMgr
        }, function(e) {
            _ = e.FXJEvent
        }, function(e) {
            g = e.FXJCmdHead
        }],
        execute: function() {
            var f, C, E, S, A, I, G, y, v, P, T, b;
            o._RF.push({}, "fbe3as2yhJB6qMn+JMog1TQ", "XiaZhuItem", void 0);
            var O = r.ccclass,
                R = r.property,
                M = r.menu;
            e("XiaZhuItem", (f = O("XiaZhuItem"), C = M("prefab/subGame/mj/XiaZhuItem"), E = R({
                tooltip: "名称",
                type: s
            }), S = R({
                tooltip: "按钮图片",
                type: u
            }), A = R({
                tooltip: "按钮图片资源",
                type: l
            }), I = R({
                tooltip: "按钮图片资源",
                type: l
            }), f(G = C((v = t((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "labelName", v, i(t)), a(t, "spriteBtn", P, i(t)), a(t, "spriteFrameBtn1", T, i(t)), a(t, "spriteFrameBtn2", b, i(t)), t._option = null, t._limit = 0, t._extParam = {}, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this)
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (t || (this.addGameComp(), t = this.node.getComponent("MJGameComponent")), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.start = function() {}, o.setData = function(e) {
                    this._extParam = e, this._option = e.option, this._limit = c.number_valueOf(e.limit);
                    var t = this.getStr();
                    this.labelName.string = t, this.spriteBtn.spriteFrame = this.getBtnFrame(), this._setWidth(190)
                }, o._getXiaZhuWidth = function(e) {
                    var t = this.doGameCompFun("getXiaZhuWidth");
                    return c.isNull(t) && (t = e), t
                }, o.setDataExt = function(e) {
                    this._extParam = e, this.labelName.string = e.name, this.spriteBtn.spriteFrame = "不买" == e.name ? this.spriteFrameBtn2 : this.spriteFrameBtn1, this._setWidth(264)
                }, o._setWidth = function(e) {
                    var t = this._getXiaZhuWidth(e);
                    this.spriteBtn.node.getComponent(d).width = t, this.node.getComponent(d).width = t
                }, o.getStr = function() {
                    var e = this.doGameCompFun("getXiaZhuStr", this._option, this._extParam);
                    return null == e && (e = 0 == this._option ? "不跑" : c.string_format("跑{0}", this._option)), e
                }, o.getBtnFrame = function() {
                    var e = this.doGameCompFun("getXiaZhuBtn", this.spriteFrameBtn1, this.spriteFrameBtn2, this._option),
                        t = 0 == this._option ? this.spriteFrameBtn1 : this.spriteFrameBtn2;
                    return null != e && (t = e), t
                }, o.onClickItem = function(e, t) {
                    if (this._extParam && this._extParam.callback) this._extParam.callback(this._extParam.data);
                    else {
                        var n = m.getInstance().getMyPlayerInfo();
                        if (!c.isNull(n) && !this.doGameCompFun("checkXiaZhuPropty", n.money, this._limit)) {
                            var a = {
                                cmd: g.C2S.USER_XIAZHU_REQUEST,
                                body: {
                                    seatId: n.seatId,
                                    option: this._option
                                }
                            };
                            h.dispatch(_.NET_SEND_MSG, a), this._playEffect()
                        }
                    }
                }, o._playEffect = function() {
                    if (this._extParam.resp) {
                        var e = this._extParam.resp.xiaZhuType;
                        this.doGameCompFun("playXiaZhuEffect", this._option, e)
                    }
                }, o.onDestroy = function() {}, t
            }(p)).prototype, "labelName", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(y.prototype, "spriteBtn", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(y.prototype, "spriteFrameBtn1", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = t(y.prototype, "spriteFrameBtn2", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = y)) || G) || G)), o._RF.pop()
        }
    }
}))