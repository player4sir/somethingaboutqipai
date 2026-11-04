System.register("chunks:///_virtual/LiuShuiCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ListView.ts", "./BaseComponent.ts", "./SettleMgr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Label
        }, function(e) {
            u = e.default
        }, function(e) {
            d = e.BaseComponent
        }, function(e) {
            c = e.SettleMgr
        }],
        execute: function() {
            var h, p, f, _, g, m, C, I, A, E;
            o._RF.push({}, "fd9bazFn69DToh+VG8QCKMQ", "LiuShuiCtr", void 0);
            var v = r.ccclass,
                y = r.property,
                S = r.menu;
            e("LiuShuiCtr", (h = v("LiuShuiCtr"), p = S("prefab/game/LiuShuiCtr"), f = y({
                tooltip: "关闭按钮",
                type: s
            }), _ = y({
                tooltip: "当前流水",
                type: l
            }), g = y({
                tooltip: "流水列表",
                type: u
            }), h(m = p((I = t((C = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "closeBtn", I, a(t)), i(t, "money", A, a(t)), i(t, "listView", E, a(t)), t.listData = [], t.event_defents = {}, t
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
            }(d)).prototype, "closeBtn", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(C.prototype, "money", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(C.prototype, "listView", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), m = C)) || m) || m)), o._RF.pop()
        }
    }
}))