System.register("chunks:///_virtual/LiuShuiCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ListView.ts", "./BaseComponent.ts", "./SettleMgr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Label
        }, function(e) {
            l = e.default
        }, function(e) {
            d = e.BaseComponent
        }, function(e) {
            c = e.SettleMgr
        }],
        execute: function() {
            var h, p, m, _, g, f, C, E, S, A;
            o._RF.push({}, "2b368SMqnhDyrpQ6OqToFWO", "LiuShuiCtr", void 0);
            var I = r.ccclass,
                G = r.property,
                y = r.menu;
            e("LiuShuiCtr", (h = I("LiuShuiCtr"), p = y("prefab/subGame/mj/LiuShuiCtr"), m = G({
                tooltip: "关闭按钮",
                type: s
            }), _ = G({
                tooltip: "当前流水",
                type: u
            }), g = G({
                tooltip: "流水列表",
                type: l
            }), h(f = p((E = t((C = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "closeBtn", E, i(t)), a(t, "money", S, i(t)), a(t, "listView", A, i(t)), t.listData = [], t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {
                    this.initView()
                }, o.initView = function() {
                    this.listData = c.getInstance().getLiuShuiListData();
                    var e = 0;
                    this.listData.forEach((function(t) {
                        e += Number(t.money)
                    }));
                    var t = e.toString();
                    e > 0 && (t = "+" + e), this.money.string = t, this.listView.setData(this.listData)
                }, o.updateView = function() {}, o.onClickClose = function(e, t) {
                    this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(d)).prototype, "closeBtn", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = t(C.prototype, "money", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(C.prototype, "listView", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = C)) || f) || f)), o._RF.pop()
        }
    }
}))