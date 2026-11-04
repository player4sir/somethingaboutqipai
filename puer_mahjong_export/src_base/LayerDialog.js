System.register("chunks:///_virtual/LayerDialog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./InterfaceDefines.ts", "./LayerPopup.ts"], (function(e) {
    var t, i, n, a, o;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.Color
        }, function(e) {
            a = e.inf_ViewParams
        }, function(e) {
            o = e.LayerPopUp
        }],
        execute: function() {
            i._RF.push({}, "dcad5w8wHlEDJpIKJ4gUxEP", "LayerDialog", void 0), e("LayerDialog", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).queue = [], t.onRemoved = function(e, i) {
                        setTimeout((function() {
                            i.valid = !1, t.removeByUuid(i.uuid, !0), t.next()
                        }), 0)
                    }, t
                }
                t(i, e);
                var o = i.prototype;
                return o.reloadMaskSprite = function() {
                    e.prototype.reloadMaskSprite.call(this, new n(0, 0, 0, 0))
                }, o.add = function(e, t, i, n, o) {
                    if (0 != this.isValid) {
                        var r = e.bundle || "resources",
                            s = e.prefab,
                            c = this.getSoleID(s),
                            l = new a;
                        return l.uuid = c, l.bundle = r, l.prefabPath = s, l.params = t || {}, l.callbacks = i || {}, l.noticeToRoot = {
                            onWillAdd: this.onWillAdd,
                            onAdded: this.onAdded,
                            onBeforeRemove: this.onBeforeRemove,
                            onRemoved: this.onRemoved
                        }, l.isAutoRecover = o || !1, l.isClickSpanceClose = n || !1, this.queue.push(l), null == this.current && this.next(), c
                    }
                }, o.onCallbackChildRemove = function(e) {
                    this.queue.length > 0 || this.updateMaskState()
                }, o.updateMaskState = function() {
                    if (0 != this.isValid && this._maskNode && 0 != this.activeInHierarchy) {
                        if (this.children.length > 1) this.active = !0, this.insertChild(this._maskNode, this.children.length - 1 - 1), this._maskNode.active = !0, this._buttonCompent.enabled = !0;
                        else {
                            if (this.queue.length > 0) return;
                            this._maskNode.active = !1
                        }
                        this.black.enabled = this._maskNode.active
                    }
                }, o.next = function() {
                    0 != this.isValid && (this.queue.length > 0 ? (this.black.enabled = !0, this.current = this.queue.shift(), this.load(this.current)) : (this.current = null, this.black.enabled = !1))
                }, o.remove = function(t, i) {
                    e.prototype.remove.call(this, t, i)
                }, o.removeAll = function(e, t) {
                    this.addHistoryRecode[e] = null;
                    for (var i = [], n = this.queue.length, a = 0; a < n; a++) {
                        var o = this.queue[a];
                        o && o.prefabPath != e && i.push(o)
                    }
                    this.queue = i, this.current = null, this.remove(e, t)
                }, o.toDestoryNotNotify = function() {
                    e.prototype.toDestoryNotNotify.call(this), 0 != this.isValid && (this.queue = [], this.current = null)
                }, o.clear = function(t) {
                    this.queue = [], this.current = null, e.prototype.clear.call(this, t)
                }, i
            }(o)), i._RF.pop()
        }
    }
}))