System.register("chunks:///_virtual/ViewGroupNested.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.Node, o = e.instantiate, r = e.EventTouch, s = e.Component
        }],
        execute: function() {
            var c;
            i._RF.push({}, "e0c40qMsvtFLrupB4plym30", "ViewGroupNested", void 0);
            var l = n.ccclass,
                u = (n.property, function(e) {
                    function i() {
                        for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this).sham = void 0, t
                    }
                    return t(i, e), i
                }(r));
            e("default", l(c = function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).events = [], t.isCancel = !1, t.touchStart = null, t.touchMove = null, t.touchEnd = null, t.touchCancel = null, t
                }
                t(i, e);
                var n = i.prototype;
                return n.onLoad = function() {
                    this.node.on(a.EventType.TOUCH_START, this.onTouchHandle, this, !0), this.node.on(a.EventType.TOUCH_MOVE, this.onTouchHandle, this, !0), this.node.on(a.EventType.TOUCH_END, this.onTouchHandle, this, !0), this.node.on(a.EventType.TOUCH_CANCEL, this.onTouchHandle, this, !0), this.node.on(a.EventType.MOUSE_WHEEL, this._onMouseWheel, this, !0)
                }, n.onTouchHandle = function(e) {
                    if (!e.sham && !e.simulate && e.target !== this.node) {
                        if (e.getType() == a.EventType.TOUCH_START) this.isCancel = !1, this.touchStart && this.touchStart(e);
                        else if (this.isCancel) return;
                        var t, i = !1;
                        e.getType() == a.EventType.TOUCH_MOVE && "function" == typeof this.touchMove && this.touchMove(e) || e.getType() == a.EventType.TOUCH_END && "function" == typeof this.touchEnd && this.touchEnd(e) ? i = !0 : e.getType() == a.EventType.TOUCH_CANCEL && "function" == typeof this.touchCancel && this.touchCancel(e), i ? (t = a.EventType.TOUCH_CANCEL, this.isCancel = !0) : t = e.getType();
                        var n = new u(e.getTouches(), e.bubbles, t);
                        n.touch = e.touch, n.sham = !0, this.events.push(n)
                    }
                }, n._onMouseWheel = function(e, t) {
                    if (!e.sham && e.target !== this.node) {
                        var i = o(e);
                        i.sham = !0, this.events.push(i)
                    }
                }, n.update = function() {
                    if (0 !== this.events.length) {
                        for (var e = 0; e < this.events.length; e++) this.node.dispatchEvent(this.events[e]);
                        this.events.length = 0
                    }
                }, i
            }(s)) || c), i._RF.pop()
        }
    }
}))