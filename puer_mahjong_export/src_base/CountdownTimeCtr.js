System.register("chunks:///_virtual/CountdownTimeCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Label
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.BaseComponent
        }],
        execute: function() {
            var u, d, _, h, p, f;
            o._RF.push({}, "c0b35PlimlKj7lPK9ep1VZn", "CountdownTimeCtr", void 0);
            var m = r.ccclass,
                g = r.property,
                E = r.menu;
            e("CountdownTimeCtr", (u = m("CountdownTimeCtr"), d = E("prefab/base/CountdownTimeCtr"), _ = g({
                tooltip: "时间节点",
                type: s
            }), u(h = d((f = t((p = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "timeNode", f, a(t)), t.event_defents = {}, t
                }
                i(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}, o.start = function() {}, o.startClock = function(e, t, i) {
                    var n = this,
                        a = e;
                    this.stoptClock(), this.timeNode.schedule((function() {
                        --a, n.timeNode.string = t ? t(a) : c.calculateTimeDifference(a), 0 == a && (n.stoptClock(), n.timeNode.string = t ? t(a) : "0秒", i && i())
                    }), 1, a)
                }, o.stoptClock = function() {
                    this.timeNode.unscheduleAllCallbacks()
                }, t
            }(l)).prototype, "timeNode", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = p)) || h) || h)), o._RF.pop()
        }
    }
}))