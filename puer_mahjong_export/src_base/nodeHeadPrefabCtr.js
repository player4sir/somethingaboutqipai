System.register("chunks:///_virtual/nodeHeadPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./SpriteLoad.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.default
        }, function(e) {
            u = e.BaseComponent
        }],
        execute: function() {
            var d, _, h, p, f, m, g, E;
            o._RF.push({}, "fe361O2EgVMRI+XrAYgsDtS", "nodeHeadPrefabCtr", void 0);
            var v = r.ccclass,
                T = r.property,
                R = r.menu;
            e("nodeHeadPrefabCtr", (d = v("nodeHeadPrefabCtr"), _ = R("vc/nodeHeadPrefabCtr"), h = T({
                tooltip: "头像节点",
                type: s
            }), p = T({
                tooltip: "头像框节点",
                type: s
            }), d(f = _((g = t((m = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "headNode", g, a(t)), n(t, "headFrame", E, a(t)), t.event_defents = {}, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {}, o.initView = function() {}, o.updateView = function() {}, o.updateHeadFrame = function(e) {
                    c.table_isEmpty(e) || (1 == c.number_valueOf(e.type) ? this.headFrame.getComponent(l).setRemoteUrl(e.url) : this.headFrame.getComponent(l).setLocalLoad(e.bundle, e.path))
                }, o.updateHeadIcon = function(e) {
                    c.table_isEmpty(e) || (1 == c.number_valueOf(e.type) ? this.headNode.getComponent(l).setRemoteUrl(e.url) : this.headNode.getComponent(l).setLocalLoad(e.bundle, e.path))
                }, o.onDestroy = function() {}, t
            }(u)).prototype, "headNode", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(m.prototype, "headFrame", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = m)) || f) || f)), o._RF.pop()
        }
    }
}))