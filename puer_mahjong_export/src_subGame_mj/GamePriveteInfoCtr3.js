System.register("chunks:///_virtual/GamePriveteInfoCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./BaseComponent.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Label, l = e.UITransform
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.BaseComponent
        }],
        execute: function() {
            var p, m, _, g, f, C, E, S, A, I;
            o._RF.push({}, "744d2RSfP9DD7QaxYdcFMEt", "GamePriveteInfoCtr", void 0);
            var G = r.ccclass,
                y = r.property,
                v = r.menu;
            e("GamePriveteInfoCtr", (p = G("GamePriveteInfoCtr"), m = v("prefab/subGame/mj/GamePriveteInfoCtr"), _ = y({
                tooltip: "标题",
                type: s
            }), g = y({
                tooltip: "玩法说明",
                type: s
            }), f = y({
                tooltip: "规则描述",
                type: s
            }), p(C = m((S = t((E = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "title", S, i(t)), a(t, "info", A, i(t)), a(t, "desc", I, i(t)), t.nodeSize = null, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.addGameComp = function() {
                    null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    return "function" == typeof e.setDelegate && e.setDelegate(this), e
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, i)
                    }
                }, o.start = function() {}, o.initView = function() {}, o.updateView = function(e) {
                    this.title.getComponent(u).string = e.title;
                    var t = c.PrivateData.getPrivateRoomData();
                    if (d.isNull(t)) this.node.active = !1;
                    else {
                        var n = c.PrivateData.getPrivateRoomConfigByGameId(t.gameId);
                        if (d.isNull(n)) this.node.active = !1;
                        else {
                            var a = c.PrivateData.getPrivateRoomGameInfo(t.gameId, n, t.param);
                            if (!d.table_isEmpty(a)) {
                                var i = this.doGameCompFun("getSlicePrivareRules", a);
                                if (!d.isNull(null == i ? void 0 : i.title) && !d.isNull(null == i ? void 0 : i.desc)) return this.info.getComponent(u).string = null == i ? void 0 : i.title, void this._updateViewSize(null == i ? void 0 : i.desc);
                                if (a.length >= 2) {
                                    var o = a.slice(0, 1),
                                        r = o[0].itemName + "：" + o[0].itemStr;
                                    r = r + "\n" + (o = a.slice(1, 2))[0].itemName + "：" + o[0].itemStr, this.info.getComponent(u).string = r, a = a.slice(3, a.length)
                                }
                                var s = "";
                                a.forEach((function(e, t, n) {
                                    s = ("" == s ? "" : s + "，") + e.itemStr
                                })), this._updateViewSize(s)
                            }
                        }
                    }
                }, o._updateViewSize = function(e) {
                    this.nodeSize || (this.nodeSize = this.node.getComponent(l).contentSize), this.desc.getComponent(u).string = e, this.desc.getComponent(u).updateRenderData(!0);
                    var t = this.desc.getComponent(l).contentSize.height,
                        n = this.node.getComponent(l).contentSize,
                        a = t > 30 ? this.nodeSize.height + t - 30 + 10 : this.nodeSize.height;
                    this.node.getComponent(l).setContentSize(n.width, a)
                }, o.onClickClose = function(e, t) {}, o.onDestroy = function() {}, t
            }(h)).prototype, "title", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(E.prototype, "info", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = t(E.prototype, "desc", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = E)) || C) || C)), o._RF.pop()
        }
    }
}))