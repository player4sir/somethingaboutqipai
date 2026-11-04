System.register("chunks:///_virtual/DelegateComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./AppEvent.ts", "./ResLoader.ts", "./EventManager.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.Component
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.resLoader
        }, function(e) {
            c = e.EventManager
        }],
        execute: function() {
            var l;
            i._RF.push({}, "d8f1fGRD7dBzIeBSkOpd/Py", "DelegateComponent", void 0);
            var u = n.ccclass,
                d = n.menu;
            e("DelegateComponent", u("DelegateComponent")(l = d("layer/DelegateComponent")(l = function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).viewParams = null, t.params = void 0, t.comp = void 0, t
                }
                t(i, e);
                var n = i.prototype;
                return n.add = function() {
                    var e = this.viewParams;
                    null != e && null != e.noticeToRoot && "function" == typeof e.noticeToRoot.onAdded && e.noticeToRoot.onAdded(this.node, e), this.applyComponentsFunction(this.node, "onAdded", e.params), "function" == typeof e.callbacks.onAdded && e.callbacks.onAdded(this.node, e.params);
                    var t = {
                        UIID: e.uuid,
                        Prefab: e.prefabPath,
                        Bundle: e.bundle
                    };
                    c.dispatch(r.VIEW_UI_OPENED, t)
                }, n.remove = function(e) {
                    var t = this,
                        i = this.viewParams;
                    i.valid && (this.applyComponentsFunction(this.node, "onBeforeRemove", i.params), null != i.noticeToRoot && "function" == typeof i.noticeToRoot.onBeforeRemove && i.noticeToRoot.onBeforeRemove(this.node, (function() {
                        t.removed(i, e)
                    })), "function" == typeof i.callbacks.onBeforeRemove ? i.callbacks.onBeforeRemove(this.node, (function() {
                        t.removed(i, e)
                    })) : this.removed(i, e))
                }, n.onDestroy = function() {
                    var e = this.viewParams;
                    if (e) {
                        e.valid = !1, 1 == e.isAutoRecover && (o.logView("释放资源:" + e.prefabPath), s.release(e.prefabPath)), this.applyComponentsFunction(this.node, "onRemoved", null == e ? void 0 : e.params), null != e.noticeToRoot && "function" == typeof e.noticeToRoot.onRemoved && e.noticeToRoot.onRemoved(this.node, e), "function" == typeof e.callbacks.onRemoved && e.callbacks.onRemoved(this.node, e);
                        var t = {
                            UIID: e.uuid,
                            Prefab: e.prefabPath,
                            Bundle: e.bundle
                        };
                        c.dispatch(r.VIEW_UI_CLOSED, t)
                    }
                    this.viewParams = null
                }, n.removed = function(e, t) {
                    e.valid = !1, t ? this.node.destroy() : this.node.removeFromParent()
                }, n.applyComponentsFunction = function(e, t, i) {
                    if (e.components)
                        for (var n = e.components.length, a = 0; a < n; a++) {
                            var o = e.components[a],
                                r = o[t];
                            r && r.call(o, i)
                        }
                }, n.getViewParams = function() {
                    return this.viewParams
                }, n.getParams = function() {
                    return this.viewParams ? this.viewParams.params : null
                }, i
            }(a)) || l) || l), i._RF.pop()
        }
    }
}))