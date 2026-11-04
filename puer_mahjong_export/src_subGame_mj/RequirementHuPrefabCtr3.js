System.register("chunks:///_virtual/RequirementHuPrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./TableView.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./GameRuleConfig4.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label
        }, function(e) {
            u = e.Utils
        }, function(e) {
            l = e.default
        }, function(e) {
            d = e.BaseComponent
        }, function(e) {
            c = e.PlayerMgr
        }, function(e) {
            h = e.RoomMgr
        }, function(e) {
            p = e.GameRuleConfig
        }],
        execute: function() {
            var m, _, g, f, C, E, S, A;
            o._RF.push({}, "f1758Qp9N9PioPg3cfgZyRa", "RequirementHuPrefabCtr", void 0);
            var I = r.ccclass,
                G = r.property,
                y = r.menu;
            e("RequirementHuPrefabCtr", (m = I("RequirementHuPrefabCtr"), _ = y("prefab/subGame/mj/RequirementHuPrefabCtr"), g = G({
                tooltip: "属性说明",
                type: l
            }), f = G({
                tooltip: "描述说明",
                type: s
            }), m(C = _((S = t((E = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(t, "tableView", S, i(t)), a(t, "tips", A, i(t)), t.data = void 0, t.event_defents = {}, t
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView()
                }, o.start = function() {}, o.initView = function() {
                    var e;
                    p.hupaiTips && (this.tips.string = p.hupaiTips), this.data = u.table_DeepClone(p.GameRequirementHuConfig);
                    var t = c.getInstance().getMyhands(),
                        n = null == (e = c.getInstance().findPlayerWithSeatId(h.getInstance().mySeatId)) ? void 0 : e.opGroups;
                    this.data.forEach((function(e) {
                        e.isDone = e.checkFunc(t, n)
                    })), this.tableView.setData(this.data)
                }, o.updateView = function() {
                    var e, t = this,
                        n = c.getInstance().getMyhands(),
                        a = null == (e = c.getInstance().findPlayerWithSeatId(h.getInstance().mySeatId)) ? void 0 : e.opGroups;
                    this.data.forEach((function(e, i) {
                        var o = e.checkFunc(n, a),
                            r = !!e.isDone != !!o;
                        e.isDone = o, r && t.tableView.updateCellByIndex(i)
                    }))
                }, o.onClickClose = function(e, t) {
                    this.node.destroy()
                }, o.onDestroy = function() {}, t
            }(d)).prototype, "tableView", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = t(E.prototype, "tips", [f], {
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