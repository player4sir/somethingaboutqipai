System.register("chunks:///_virtual/RequirementHuPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./TableView.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./GameRuleConfig.ts", "./RequirementHuConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label
        }, function(e) {
            l = e.Utils
        }, function(e) {
            u = e.default
        }, function(e) {
            d = e.BaseComponent
        }, function(e) {
            c = e.PlayerMgr
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameRuleConfig
        }, function(e) {
            f = e.requireData
        }],
        execute: function() {
            var _, g, m, C, I, A, E, v;
            o._RF.push({}, "7ebbb2ZRJxLjIwVCkyo24+9", "RequirementHuPrefabCtr", void 0);
            var y = r.ccclass,
                S = r.property,
                P = r.menu;
            e("RequirementHuPrefabCtr", (_ = y("RequirementHuPrefabCtr"), g = P("prefab/game/RequirementHuPrefabCtr"), m = S({
                tooltip: "属性说明",
                type: u
            }), C = S({
                tooltip: "描述说明",
                type: s
            }), _(I = g((E = t((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, i(t, "tableView", E, a(t)), i(t, "tips", v, a(t)), t.data = void 0, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.initView = function() {
                    var e;
                    p.hupaiTips && (this.tips.string = p.hupaiTips), this.data = l.table_DeepClone(f());
                    var t = c.getInstance().getMyhands(),
                        n = null == (e = c.getInstance().findPlayerWithSeatId(h.getInstance().mySeatId)) ? void 0 : e.opGroups;
                    this.data.forEach((function(e) {
                        e.isDone = e.checkFunc(t, n)
                    })), this.tableView.setData(this.data)
                }, o.updateView = function() {
                    var e, t = this,
                        n = c.getInstance().getMyhands(),
                        i = null == (e = c.getInstance().findPlayerWithSeatId(h.getInstance().mySeatId)) ? void 0 : e.opGroups;
                    this.data.forEach((function(e, a) {
                        var o = e.checkFunc(n, i),
                            r = !!e.isDone != !!o;
                        e.isDone = o, r && t.tableView.updateCellByIndex(a)
                    }))
                }, o.onClickClose = function(e, t) {
                    this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(d)).prototype, "tableView", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = t(A.prototype, "tips", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = A)) || I) || I)), o._RF.pop()
        }
    }
}))