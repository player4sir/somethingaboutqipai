System.register("chunks:///_virtual/XiaZhuItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./EventManager.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./FXJEvent.ts", "./FXJCmd.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label, l = e.Sprite, u = e.SpriteFrame, d = e.UITransform
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseComponent
        }, function(e) {
            f = e.PlayerMgr
        }, function(e) {
            _ = e.FXJEvent
        }, function(e) {
            g = e.FXJCmdHead
        }],
        execute: function() {
            var m, C, I, A, E, v, y, S, P, T, G, O;
            o._RF.push({}, "b0d8dJ2X/RMl4cvOD0IzbT3", "XiaZhuItem", void 0);
            var R = r.ccclass,
                N = r.property,
                b = r.menu;
            e("XiaZhuItem", (m = R("XiaZhuItem"), C = b("prefab/game/XiaZhuItem"), I = N({
                tooltip: "名称",
                type: s
            }), A = N({
                tooltip: "按钮图片",
                type: l
            }), E = N({
                tooltip: "按钮图片资源",
                type: u
            }), v = N({
                tooltip: "按钮图片资源",
                type: u
            }), m(y = C((P = t((S = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "labelName", P, a(t)), i(t, "spriteBtn", T, a(t)), i(t, "spriteFrameBtn1", G, a(t)), i(t, "spriteFrameBtn2", O, a(t)), t._option = null, t._limit = 0, t._extParam = {}, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = c.create_2DNode()), this.node.addComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (t || (this.addGameComp(), t = this.node.getComponent("GameComponent")), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
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
                        var n = f.getInstance().getMyPlayerInfo();
                        if (!c.isNull(n) && !this.doGameCompFun("checkXiaZhuPropty", n.money, this._limit)) {
                            var i = {
                                cmd: g.C2S.USER_XIAZHU_REQUEST,
                                body: {
                                    seatId: n.seatId,
                                    option: this._option
                                }
                            };
                            h.dispatch(_.NET_SEND_MSG, i), this._playEffect()
                        }
                    }
                }, o._playEffect = function() {}, o.onDestroy = function() {}, t
            }(p)).prototype, "labelName", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(S.prototype, "spriteBtn", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = t(S.prototype, "spriteFrameBtn1", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = t(S.prototype, "spriteFrameBtn2", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = S)) || y) || y)), o._RF.pop()
        }
    }
}))