System.register("chunks:///_virtual/EventManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }],
        execute: function() {
            i._RF.push({}, "98299TitIxEPp9ooWvS44HF", "EventManager", void 0);
            var a = e("_EventManager", function() {
                function e() {
                    this.listeners = {}
                }
                var i = e.prototype;
                return i.addListener = function(e, t, i, n) {
                    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(new o(t, i, n)), n && this.listeners[e].sort((function(e, t) {
                        return t.getProperty() - e.getProperty()
                    }))
                }, i.removeListener = function(e, t) {
                    var i = this.listeners[e];
                    if (i) {
                        for (var n = i.length, a = 0; a < n; a++)
                            if (i[a].compar(t)) {
                                i.splice(a, 1);
                                break
                            } 0 == i.length && delete this.listeners[e]
                    }
                }, i.removeListenerByContext = function(e) {
                    var t = [];
                    for (var i in this.listeners)
                        if (Object.prototype.hasOwnProperty.call(this.listeners, i)) {
                            var n = this.listeners[i];
                            if (n)
                                for (var a = length - 1; a >= 0; a--)
                                    if (n[a].compar(e)) {
                                        n.splice(a, 1);
                                        break
                                    } 0 == n.length && t.push(i)
                        } for (var o = 0; o < t.length; o++) this.listeners[t[o]] && delete this.listeners[t[o]]
                }, i.dispatch = function(e) {
                    var t = this.listeners[e];
                    if (t) {
                        for (var i = t.length, n = null, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) o[r - 1] = arguments[r];
                        for (var s = 0; s < i; s++) {
                            var c = t[s];
                            n = c.notify.apply(c, [e].concat(o))
                        }
                        return n
                    }
                }, t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }]), e
            }());
            a._instance = null;
            var o = function() {
                function e(e, t, i) {
                    void 0 === i && (i = 0), this.callback = null, this.context = null, this._property = 0;
                    var a = this;
                    a.callback = e, a.context = t, a._property = n.number_valueOf(i, 0)
                }
                var t = e.prototype;
                return t.getProperty = function() {
                    return this._property
                }, t.notify = function() {
                    for (var e, t = this, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (e = t.callback).call.apply(e, [t.context].concat(n))
                }, t.compar = function(e) {
                    return e == this.context
                }, e
            }();
            e("EventManager", a.instance), i._RF.pop()
        }
    }
}))