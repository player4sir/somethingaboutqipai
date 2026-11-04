System.register("chunks:///_virtual/ButtonSimple.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.EventHandler, l = e.Node, u = e.game, d = e.error, _ = e.Component
        }],
        execute: function() {
            var h, p, f, m, g, E, v, T, R, P, y, C;
            r._RF.push({}, "8d645yObX1FvJfk2sbi0rxp", "ButtonSimple", void 0);
            var S = s.ccclass,
                A = s.property,
                I = s.menu;
            e("default", (h = S("ButtonSimple"), p = I("gui/button/ButtonSimple"), f = A({
                tooltip: "是否只能触发一次"
            }), m = A({
                tooltip: "每次触发间隔(毫秒)"
            }), g = A({
                tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
            }), E = A({
                tooltip: "点击回调监听函数",
                type: c
            }), h(v = p((R = t((T = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "onlyOnce", R, a(t)), n(t, "delay_time", P, a(t)), n(t, "interactable", y, a(t)), n(t, "clickFunc", C, a(t)), t.touchCount = 0, t.touchtEndTime = 0, t._touchHandler = null, t._touchParam = null, t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this.regTouchEvent()
                }, r.regTouchEvent = function() {
                    this.node && (this.node.on(l.EventType.TOUCH_START, this.onTouchtStart, this), this.node.on(l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(l.EventType.TOUCH_CANCEL, this.onTouchCancel, this))
                }, r.setCustomEventHandler = function(e, t, i, n) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.clickFunc.target = e, this.clickFunc.component = t, this.clickFunc.handler = i, this.setCustomEventData(n)
                }, r.setCustomEventData = function(e) {
                    void 0 === e && (e = null), this.clickFunc.customEventData = e, this._touchParam = e
                }, r.addTouchEventListener = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this._touchHandler = e, this.setCustomEventData(t)
                }, r.setOnlyOnce = function(e) {
                    this.onlyOnce = e || !1
                }, r.onTouchtStart = function(e) {}, r.onTouchEnd = function(e) {
                    if (this.onlyOnce) {
                        if (this.touchCount > 0) return void(e.propagationStopped = !0);
                        this.touchCount++
                    }
                    var t, i;
                    (0 == this.touchtEndTime || u.totalTime - this.touchtEndTime >= this.delay_time) && this.interactable && (null == (t = this.clickFunc) || t.emit([e, null == (i = this.clickFunc) ? void 0 : i.customEventData]), this._touchHandler && this._touchHandler(e, this._touchParam)), this.touchtEndTime && u.totalTime - this.touchtEndTime < this.delay_time ? e.propagationStopped = !0 : this.touchtEndTime = u.totalTime
                }, r.onTouchCancel = function(e) {}, r.onDestroy = function() {
                    this.node.off(l.EventType.TOUCH_START, this.onTouchtStart, this), this.node.off(l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(l.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
                }, o(t, [{
                    key: "Interactable",
                    get: function() {
                        return this.interactable
                    },
                    set: function(e) {
                        "boolean" == typeof e ? this.interactable = null == e || e : d("setInteractable 参数类型传递错误 期待:boolean 结果:" + _typeof2(e))
                    }
                }, {
                    key: "delayTime",
                    set: function(e) {
                        this.delay_time = e || 500
                    }
                }]), t
            }(_)).prototype, "onlyOnce", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), P = t(T.prototype, "delay_time", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 500
                }
            }), y = t(T.prototype, "interactable", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), C = t(T.prototype, "clickFunc", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }), v = T)) || v) || v)), r._RF.pop()
        }
    }
}))