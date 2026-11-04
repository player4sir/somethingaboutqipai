System.register("chunks:///_virtual/ButtonTouchLong.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.EventHandler, l = e.Node, u = e.UITransform, d = e.Vec3, _ = e.Rect, h = e.error, p = e.Component
        }],
        execute: function() {
            var f, m, g, E, v, T, R, P, y, C, S, A, I, D;
            r._RF.push({}, "e2034MX2g1EAL0jtbQF99de", "ButtonTouchLong", void 0);
            var N = s.ccclass,
                O = s.property,
                b = s.menu,
                L = e("ButtonTouchLongStatus", {
                    START: "START",
                    RUN: "RUNNING",
                    END: "END"
                });
            e("ButtonTouchLong", (f = N("ButtonTouchLong"), m = b("gui/button/ButtonTouchLong"), g = O({
                tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
            }), E = O({
                tooltip: "长按时间（秒）等于0则为点击",
                min: 0
            }), v = O({
                tooltip: "长按时是否只回调一次",
                visible: function() {
                    return this.touchlongtime > 0
                }
            }), T = O({
                tooltip: "长按的回调监听函数",
                type: c,
                visible: function() {
                    return this.touchlongtime > 0
                }
            }), R = O({
                tooltip: "点击的回调监听函数",
                type: c
            }), f(P = m((C = t((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "interactable", C, a(t)), n(t, "touchlongtime", S, a(t)), n(t, "onceLongCallback", A, a(t)), n(t, "clickLongFunc", I, a(t)), n(t, "clickFunc", D, a(t)), t._touchHandler = null, t._touchParam = null, t._isTouchLong = !1, t._currowPassTime = 0, t._currowEvent = null, t._currowBoxRect = null, t._isCanCallback = !1, t._isOnload = !1, t._isRegEvent = !1, t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this._isOnload = !0, this.regTouchEvent()
                }, r.updateRegEventState = function() {
                    this._isOnload && (1 == this.interactable ? 0 == this._isRegEvent && this.regTouchEvent() : 1 == this._isRegEvent && this.unRegTouchEvent())
                }, r.regTouchEvent = function() {
                    this.node && (this.node.on(l.EventType.TOUCH_START, this.onTouchtStart, this), this.node.on(l.EventType.TOUCH_MOVE, this.onTouchtMove, this), this.node.on(l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(l.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this._isRegEvent = !0)
                }, r.unRegTouchEvent = function() {
                    this.node && this.node.isValid && (this.node.off(l.EventType.TOUCH_START, this.onTouchtStart, this), this.node.off(l.EventType.TOUCH_MOVE, this.onTouchtMove, this), this.node.off(l.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(l.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this._isRegEvent = !1)
                }, r.setCustomEventHandler = function(e, t, i, n) {
                    void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), this.clickLongFunc.target = e, this.clickLongFunc.component = t, this.clickLongFunc.handler = i, this.setCustomEventData(n)
                }, r.setCustomEventData = function(e) {
                    void 0 === e && (e = null), this.clickLongFunc.customEventData = e, this._touchParam = e
                }, r.addTouchEventListener = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this._touchHandler = e, this.setCustomEventData(t)
                }, r.onTouchtStart = function(e) {
                    this._currowEvent = e, this._currowPassTime = 0, this._currowBoxRect = null, this._isCanCallback = !0, this._isTouchLong = !1;
                    var t = this.node.getComponent(u);
                    if (t) {
                        var i = Math.abs(t.width) * Math.abs(this.node.scale.x),
                            n = Math.abs(t.height) * Math.abs(this.node.scale.y),
                            a = new d;
                        this.node.getWorldPosition(a);
                        var o = {
                            x: a.x,
                            y: a.y
                        };
                        if (t.anchorX < 0 || t.anchorX > 1 || t.anchorY < 0 || t.anchorY > 1) return;
                        o.x = o.x - i * t.anchorX, o.y = o.y - n * t.anchorY, this._currowBoxRect = new _(o.x, o.y, i, n)
                    }
                }, r.onTouchtMove = function(e) {
                    this._currowEvent = e, this.checkRect()
                }, r.onTouchEnd = function(e) {
                    this._currowPassTime > this.touchlongtime && (e.propagationStopped = !0);
                    var t = this._currowEvent,
                        i = this._isTouchLong;
                    this._currowEvent = e, this.checkRect(), this._currowEvent = null, this._isTouchLong = !1, this._currowPassTime = 0, 0 == i && null != t && 1 == this._isCanCallback && this.onClickCallback(e, L.END), 1 == i && null != t && 0 == this.onceLongCallback && this.onLongClickCallback(e, L.END), this._isCanCallback = !1
                }, r.removeTouchLong = function() {
                    this._currowEvent = null, this._isTouchLong = !1, this._isCanCallback = !1
                }, r.update = function(e) {
                    if (this._currowEvent && 1 == this.interactable && 1 == this._isCanCallback) {
                        if (this._currowPassTime = this._currowPassTime + e, this.touchlongtime <= 0) return this._isTouchLong = !1, this.onClickCallback(this._currowEvent, L.END), void this.removeTouchLong();
                        if (this._currowPassTime >= this.touchlongtime) {
                            var t = L.RUN;
                            0 == this._isTouchLong && (t = L.START), 1 == this.onceLongCallback && (t = L.END), this._isTouchLong = !0, this.onLongClickCallback(this._currowEvent, t), 1 == this.onceLongCallback && this.removeTouchLong()
                        }
                    }
                }, r.checkRect = function() {
                    if (this._currowEvent) {
                        var e = this._currowEvent.touch.getUILocation();
                        this._currowBoxRect && 0 == this._currowBoxRect.contains(e) && (this._isCanCallback = !1)
                    }
                }, r.onLongClickCallback = function(e, t) {
                    var i, n;
                    void 0 === t && (t = null), 0 != this._isCanCallback && 0 != this.interactable && (null == (i = this.clickLongFunc) || i.emit([e, t, null == (n = this.clickLongFunc) ? void 0 : n.customEventData]), this._touchHandler && this._touchHandler(e, t, this._touchParam))
                }, r.onClickCallback = function(e, t) {
                    var i, n;
                    void 0 === t && (t = null), 0 != this._isCanCallback && 0 != this.interactable && (null == (i = this.clickFunc) || i.emit([e, t, null == (n = this.clickFunc) ? void 0 : n.customEventData]), this._touchHandler && this._touchHandler(e, t, this._touchParam))
                }, r.onDestroy = function() {
                    this._currowEvent = null, this.unRegTouchEvent()
                }, o(t, [{
                    key: "Interactable",
                    get: function() {
                        return this.interactable
                    },
                    set: function(e) {
                        "boolean" == typeof e ? (this.interactable = null == e || e, this.updateRegEventState()) : h("setInteractable 参数类型传递错误 期待:boolean 结果:" + _typeof2(e))
                    }
                }, {
                    key: "CanCallback",
                    set: function(e) {
                        this._isCanCallback = 0 != e
                    }
                }]), t
            }(p)).prototype, "interactable", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), S = t(y.prototype, "touchlongtime", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), A = t(y.prototype, "onceLongCallback", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), I = t(y.prototype, "clickLongFunc", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }), D = t(y.prototype, "clickFunc", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }), P = y)) || P) || P)), r._RF.pop()
        }
    }
}))