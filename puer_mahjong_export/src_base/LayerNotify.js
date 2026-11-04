System.register("chunks:///_virtual/LayerNotify.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ToastComponent.ts", "./InterfaceDefines.ts", "./LayerUI.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.Layers
        }, function(e) {
            a = e.ToastComponent
        }, function(e) {
            o = e.inf_ViewParams
        }, function(e) {
            r = e.LayerUI
        }],
        execute: function() {
            i._RF.push({}, "da14ax+B2xNsL2taQFOh7we", "LayerNotify", void 0), e("LayerNotify", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).queue = {}, t.currentPrefabPath = {}, t.onRemoved = function(e, i) {
                        setTimeout((function() {
                            i.valid = !1, t.currentPrefabPath[i.prefabPath] = null, t.next(i.prefabPath)
                        }), 0)
                    }, t
                }
                t(i, e);
                var r = i.prototype;
                return r.show = function(e, t, i, n) {
                    var a = e.bundle || "resources",
                        r = e.prefab,
                        s = this.getSoleID(r),
                        c = new o;
                    c.uuid = s, c.bundle = a, c.prefabPath = r, c.params = t || null, c.callbacks = i || {}, c.noticeToRoot = {
                        onAdded: this.onAdded,
                        onBeforeRemove: this.onBeforeRemove,
                        onRemoved: this.onRemoved
                    }, c.valid = !0, c.isAutoRecover = n || !1, c.isClickSpanceClose = !1, this.queue[r] || (this.queue[r] = []), this.queue[r].push(c), this.currentPrefabPath[r] || this.next(r)
                }, r.updateMaskState = function() {
                    this._maskNode && 1 == this._maskNode.isValid && (this._maskNode.active = !1)
                }, r.load = function(t) {
                    e.prototype.load.call(this, t)
                }, r.createNode = function(t, i) {
                    if (0 != this.isValid) {
                        var o = e.prototype.createNode.call(this, t, i);
                        if (!o) return null;
                        this.layer = n.Enum.UI_2D, this._activeInHierarchy = !0, o.active = !0;
                        var r = o.getComponent(a);
                        return o.active = !0, null != r && r.toast && r.toast(i.params), o
                    }
                }, r.next = function(e) {
                    if (0 != this.isValid && e && this.queue[e]) {
                        var t = this.queue[e].shift();
                        t && (this.currentPrefabPath[t.prefabPath] = !0, this.load(t))
                    }
                }, r.remove = function(t, i) {
                    t && this.queue[t] && (this.queue[t] = null), e.prototype.remove.call(this, t, i)
                }, r.toDestoryNotNotify = function() {
                    this.queue = {}, this.currentPrefabPath = {}, e.prototype.toDestoryNotNotify.call(this)
                }, r.clear = function(t) {
                    this.queue = {}, e.prototype.clear.call(this, t)
                }, i
            }(r)), i._RF.pop()
        }
    }
}))