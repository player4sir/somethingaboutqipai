System.register("chunks:///_virtual/GamePriveteInfoCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./BaseComponent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Label, u = e.UITransform
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.BaseComponent
        }],
        execute: function() {
            var p, f, _, g, m, C, I, A, E, v;
            o._RF.push({}, "df799r74MpB8oNxRjJDTt3Y", "GamePriveteInfoCtr", void 0);
            var y = r.ccclass,
                S = r.property,
                P = r.menu;
            e("GamePriveteInfoCtr", (p = y("GamePriveteInfoCtr"), f = P("prefab/game/GamePriveteInfoCtr"), _ = S({
                tooltip: "标题",
                type: s
            }), g = S({
                tooltip: "玩法说明",
                type: s
            }), m = S({
                tooltip: "规则描述",
                type: s
            }), p(C = f((A = t((I = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "title", A, a(t)), i(t, "info", E, a(t)), i(t, "desc", v, a(t)), t.nodeSize = null, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.addGameComp = function() {
                    return null == this.node && (this.node = d.create_2DNode()), this.node.addComponent("GameComponent"), this.node.getComponent("GameComponent")
                }, o.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if (null == t && (t = this.addGameComp()), "function" == typeof t[e]) {
                        for (var n, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                        return (n = t)[e].apply(n, a)
                    }
                }, o.start = function() {}, o.initView = function() {}, o.updateView = function(e) {
                    this.title.getComponent(l).string = e.title;
                    var t = c.PrivateData.getPrivateRoomData();
                    if (d.isNull(t)) this.node.active = !1;
                    else {
                        var n = c.PrivateData.getPrivateRoomConfigByGameId(t.gameId);
                        if (d.isNull(n)) this.node.active = !1;
                        else {
                            var i = c.PrivateData.getPrivateRoomGameInfo(t.gameId, n, t.param);
                            if (!d.table_isEmpty(i)) {
                                var a = this.doGameCompFun("getSlicePrivareRules", i);
                                if (!d.isNull(null == a ? void 0 : a.title) && !d.isNull(null == a ? void 0 : a.desc)) return this.info.getComponent(l).string = null == a ? void 0 : a.title, void this._updateViewSize(null == a ? void 0 : a.desc);
                                if (i.length >= 2) {
                                    var o = i.slice(0, 1),
                                        r = o[0].itemName + "：" + o[0].itemStr;
                                    r = r + "\n" + (o = i.slice(1, 2))[0].itemName + "：" + o[0].itemStr, this.info.getComponent(l).string = r, i = i.slice(3, i.length)
                                }
                                var s = "";
                                i.forEach((function(e, t, n) {
                                    s = ("" == s ? "" : s + "，") + e.itemStr
                                })), this._updateViewSize(s)
                            }
                        }
                    }
                }, o._updateViewSize = function(e) {
                    this.nodeSize || (this.nodeSize = this.node.getComponent(u).contentSize), this.desc.getComponent(l).string = e, this.desc.getComponent(l).updateRenderData(!0);
                    var t = this.desc.getComponent(u).contentSize.height,
                        n = this.node.getComponent(u).contentSize,
                        i = t > 30 ? this.nodeSize.height + t - 30 + 10 : this.nodeSize.height;
                    this.node.getComponent(u).setContentSize(n.width, i)
                }, o.onClickClose = function(e, t) {}, o.onDestroy = function() {}, t
            }(h)).prototype, "title", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(I.prototype, "info", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(I.prototype, "desc", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = I)) || C) || C)), o._RF.pop()
        }
    }
}))