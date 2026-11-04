System.register("chunks:///_virtual/SuperScrollView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SuperLayout.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.Vec2, l = e.EventHandler, u = e.PageView, d = e.Node, _ = e.ScrollView, h = e.EventTouch, p = e.Vec3
        }, function(e) {
            f = e.SuperLayout
        }],
        execute: function() {
            var m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G;
            e("ScrollViewDirection", void 0), r._RF.push({}, "37114ZKFFROdL3wpou2aYLh", "SuperScrollView", void 0);
            var k, U = s.ccclass,
                B = s.property,
                w = s.menu,
                H = 1e-4,
                F = new c;
            ! function(e) {
                e[e.HORIZONTAL = 0] = "HORIZONTAL", e[e.VERTICAL = 1] = "VERTICAL", e[e.NONE = 2] = "NONE"
            }(k || (k = e("ScrollViewDirection", {}))), e("SuperScrollView", (m = U("SuperScrollView"), g = w("gui/scrollview/SuperScrollView"), E = B({
                tooltip: "注意！向上传递事件只会发送当前滑动相反方向,如果开启horizontal则会发送vertical事件。如果开启vertical则会发送horizontal事件。同时开启horizontal和vertical 不会发送任何事件"
            }), v = B({
                displayName: "顶部偏移量",
                tooltip: "下拉时超过此偏移会发送下拉事件",
                visible: function() {
                    return this.pullRefresh
                }
            }), T = B({
                displayName: "满足触发Header的倍数",
                visible: function() {
                    return this.pullRefresh
                }
            }), R = B({
                displayName: "底部偏移量",
                tooltip: "上拉时超过此偏移会发送上拉事件",
                visible: function() {
                    return this.pullRefresh
                }
            }), P = B({
                displayName: "满足触发Footer的倍数",
                visible: function() {
                    return this.pullRefresh
                }
            }), y = B({
                type: l,
                visible: function() {
                    return this.pullRefresh
                }
            }), C = B({
                type: l,
                visible: function() {
                    return this.pullRefresh
                }
            }), m(S = g((I = t((A = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).direction = k.NONE, n(t, "isTransmitEvent", I, a(t)), n(t, "pullRefresh", D, a(t)), n(t, "headerOutOffset", N, a(t)), n(t, "headerMultiple", O, a(t)), n(t, "footerOutOffset", b, a(t)), n(t, "footerMultiple", L, a(t)), n(t, "headerEvents", M, a(t)), n(t, "footerEvents", G, a(t)), t.prevLocation = new c, t.location = new c, t._touchBeganPosition = new c, t._touchEndPosition = new c, t.isMoveHeader = !1, t.isMoveFooter = !1, t.isLockHeader = !1, t.isLockFooter = !1, t.headerProgress = 0, t.footerProgress = 0, t.isCustomScroll = !1, t.canTouchMove = !0, t.isCallSoonFinish = !1, t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this.layout.autoCenter && (this.brake = .7)
                }, r.onEnable = function() {
                    e.prototype.onEnable.call(this), this.node.on(u.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this)
                }, r.onDisable = function() {
                    e.prototype.onDisable.call(this), this.node.off(u.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this)
                }, r.getPages = function() {
                    return new Array(this.layout.itemTotal)
                }, r._getContentTopBoundary = function() {
                    return this._content ? 0 == this.layout.isOfTopBoundary ? this._topBoundary : this.layout.isOfTopBoundary : -1
                }, r._getContentBottomBoundary = function() {
                    return this._content ? 0 == this.layout.isOfButtomBoundary ? this._bottomBoundary : this.layout.isOfButtomBoundary : -1
                }, r._getContentLeftBoundary = function() {
                    return this._content ? 0 == this.layout.isOfLeftBoundary ? this._leftBoundary : this.layout.isOfLeftBoundary : -1
                }, r._getContentRightBoundary = function() {
                    return this._content ? 0 == this.layout.isOfRightBoundary ? this._rightBoundary : this.layout.isOfRightBoundary : -1
                }, r._onTouchBegan = function(t, i) {
                    this.isCallSoonFinish = !1, this.isCustomScroll = !1, this.layout.onTouchBegin(), this.canTouchMove && (this.direction = k.NONE, this.layout.isPageView && (t.touch.getUILocation(F), c.set(this._touchBeganPosition, F.x, F.y)), e.prototype._onTouchBegan.call(this, t, i), this.isTransmitEvent && this.transmitEvent(t, d.EventType.TOUCH_START))
                }, r._onTouchMoved = function(t, i) {
                    var n, a;
                    if (this.isCallSoonFinish = !1, this.isCustomScroll = !1, this.canTouchMove) {
                        if (this.isTransmitEvent) {
                            if (this.direction == k.NONE) {
                                var o = t.getStartLocation(),
                                    r = t.getLocation(),
                                    s = Math.abs(o.x - r.x),
                                    c = Math.abs(o.y - r.y);
                                s > c ? this.direction = k.HORIZONTAL : c > s && (this.direction = k.VERTICAL)
                            }
                            if (this.vertical && this.direction === k.HORIZONTAL || this.horizontal && this.direction == k.VERTICAL) return void this.transmitEvent(t, d.EventType.TOUCH_MOVE)
                        }
                        if (this.prevLocation = null == (n = t.touch) ? void 0 : n.getPreviousLocation(), this.location = null == (a = t.touch) ? void 0 : a.getLocation(), e.prototype._onTouchMoved.call(this, t, i), this.pullRefresh) {
                            var u = this._getHowMuchOutOfBoundary(),
                                _ = this.vertical ? u.y : -u.x;
                            _ > 0 && !this.isLockHeader && !this.isLockFooter ? (this.headerProgress = _ < H ? 0 : _ / this.headerOutOffset, this.isMoveHeader = this.headerProgress >= this.headerMultiple, l.emitEvents(this.headerEvents, this, {
                                action: !1,
                                progress: this.headerProgress,
                                stage: this.isMoveHeader ? "wait" : "touch"
                            }), l.emitEvents(this.footerEvents, this, {
                                action: !1,
                                progress: 0,
                                stage: "release"
                            })) : _ < 0 && !this.isLockHeader && !this.isLockFooter ? (this.footerProgress = -_ < H ? 0 : -_ / this.footerOutOffset, this.isMoveFooter = this.footerProgress >= this.footerMultiple, l.emitEvents(this.footerEvents, this, {
                                action: !1,
                                progress: this.footerProgress,
                                stage: this.isMoveFooter ? "wait" : "touch"
                            }), l.emitEvents(this.headerEvents, this, {
                                action: !1,
                                progress: 0,
                                stage: "release"
                            })) : 0 != _ || this.isLockHeader || this.isLockFooter || this.clearProgress()
                        }
                    }
                }, r._onTouchEnded = function(t, i) {
                    this.isCallSoonFinish = !1, this.isCustomScroll = !1, this.canTouchMove && (this.layout.isPageView && (t.touch.getUILocation(F), c.set(this._touchEndPosition, F.x, F.y)), e.prototype._onTouchEnded.call(this, t, i), this.isTransmitEvent && this.transmitEvent(t, d.EventType.TOUCH_END))
                }, r._onTouchCancelled = function(t, i) {
                    this.isCallSoonFinish = !1, this.isCustomScroll = !1, this.canTouchMove && (this.layout.isPageView && (t.touch.getUILocation(F), c.set(this._touchEndPosition, F.x, F.y)), this.isTransmitEvent && this.transmitEvent(t, d.EventType.TOUCH_CANCEL), e.prototype._onTouchCancelled.call(this, t, i))
                }, r.scrollToAny = function(e, t, i) {
                    void 0 === i && (i = !0), this.isCustomScroll = !0, t ? this._startAutoScroll(e, t, i, !0) : this._moveContent(e)
                }, r.release = function() {
                    this.isMoveHeader = !1, this.isMoveFooter = !1, (this.isLockHeader || this.isLockFooter) && (this.vertical && this.isLockHeader && (this._topBoundary += this.headerOutOffset), this.vertical && this.isLockFooter && (this._bottomBoundary -= this.footerOutOffset), this.horizontal && this.isLockHeader && (this._leftBoundary -= this.headerOutOffset), this.horizontal && this.isLockFooter && (this._rightBoundary += this.footerOutOffset), this.clearProgress(), this.layout.onPositionChanged(), this.isLockHeader = !1, this.isLockFooter = !1, this.startAutoScroll())
                }, r.startAutoScroll = function() {
                    this._autoScrolling = !0, this._outOfBoundaryAmountDirty = !0
                }, r._startAutoScroll = function(t, i, n, a) {
                    if (void 0 === a && (a = !1), this.pullRefresh && (this.isMoveHeader && !this.isLockHeader ? (this.vertical && (this._topBoundary -= this.headerOutOffset, t.y -= this.headerOutOffset), this.horizontal && (this._leftBoundary += this.headerOutOffset, t.x += this.headerOutOffset), this.isLockHeader = !0, l.emitEvents(this.headerEvents, this, {
                            action: !0,
                            progress: this.headerProgress,
                            stage: "lock"
                        })) : this.isMoveFooter && !this.isLockFooter && (this.vertical && (this._bottomBoundary += this.footerOutOffset, t.y += this.footerOutOffset), this.horizontal && (this._rightBoundary -= this.footerOutOffset, t.x -= this.footerOutOffset), this.isLockFooter = !0, l.emitEvents(this.footerEvents, this, {
                            action: !0,
                            progress: this.footerProgress,
                            stage: "lock"
                        }))), e.prototype._startAutoScroll.call(this, t, i, n), !a && this.layout.autoCenter) {
                        var o = this._calculateTouchMoveVelocity();
                        this.isQuicklyScrollable(o) || this.soonFinish()
                    }
                }, r._updateScrollBar = function(t) {
                    if (e.prototype._updateScrollBar.call(this, new c(t.x, t.y)), !this._autoScrollBraking && this._autoScrolling && this.pullRefresh) {
                        var i = this.vertical ? t.y : -t.x;
                        if (i > 0) {
                            var n = i < H ? 0 : i / this.headerOutOffset;
                            this.isLockHeader ? (this.headerProgress = 1 == this.headerProgress ? this.headerProgress : Math.max(n, 1), l.emitEvents(this.headerEvents, this, {
                                action: !1,
                                progress: this.headerProgress,
                                stage: "lock"
                            })) : (this.headerProgress = n < this.headerProgress ? n : this.headerProgress, l.emitEvents(this.headerEvents, this, {
                                action: !1,
                                progress: this.headerProgress,
                                stage: "release"
                            }))
                        } else if (i < 0) {
                            var a = -i < H ? 0 : -i / this.footerOutOffset;
                            this.isLockFooter ? (this.footerProgress = 1 == this.footerProgress ? this.footerProgress : Math.max(a, 1), l.emitEvents(this.footerEvents, this, {
                                action: !1,
                                progress: this.footerProgress,
                                stage: "lock"
                            })) : (this.footerProgress = a < this.footerProgress ? a : this.footerProgress, l.emitEvents(this.footerEvents, this, {
                                action: !1,
                                progress: this.footerProgress,
                                stage: "release"
                            }))
                        } else 0 == i && (this.isLockHeader || this.isLockFooter || this.clearProgress())
                    }
                }, r.clearProgress = function() {
                    l.emitEvents(this.headerEvents, this, {
                        action: !1,
                        progress: 0,
                        stage: "release"
                    }), l.emitEvents(this.footerEvents, this, {
                        action: !1,
                        progress: 0,
                        stage: "release"
                    })
                }, r.dispatchPageTurningEvent = function() {
                    this.layout._lastPageIndex !== this.layout._currPageIndex && (this.layout._lastPageIndex = this.layout._currPageIndex, l.emitEvents(this.layout.pageEvents, this, u.EventType.PAGE_TURNING), this.node.emit(u.EventType.PAGE_TURNING, this), console.log("滚动结束====>"))
                }, r._handleReleaseLogic = function(t) {
                    this.layout.isPageView ? (this._autoScrollToPage(), this._scrolling && (this._scrolling = !1, this._autoScrolling || this._dispatchEvent(_.EventType.SCROLL_ENDED))) : e.prototype._handleReleaseLogic.call(this, t)
                }, r._autoScrollToPage = function() {
                    if (this._startBounceBackIfNeeded()) {
                        var e = this._getHowMuchOutOfBoundary();
                        this._clampDelta(e), (e.x > 0 || e.y < 0) && (this.layout.horizontal ? this.layout.horizontalAxisDirection == f.HorizontalAxisDirection.LEFT_TO_RIGHT ? this.layout._currPageIndex = 0 === this.layout.itemTotal ? 0 : this.layout.itemTotal - 1 : this.layout._currPageIndex = 0 : this.layout.verticalAxisDirection == f.VerticalAxisDirection.TOP_TO_BOTTOM ? this.layout._currPageIndex = 0 === this.layout.itemTotal ? 0 : this.layout.itemTotal - 1 : this.layout._currPageIndex = 0), (e.x < 0 || e.y > 0) && (this.layout.horizontal ? this.layout.horizontalAxisDirection == f.HorizontalAxisDirection.LEFT_TO_RIGHT ? this.layout._currPageIndex = 0 : this.layout._currPageIndex = 0 === this.layout.itemTotal ? 0 : this.layout.itemTotal - 1 : this.layout.verticalAxisDirection == f.VerticalAxisDirection.TOP_TO_BOTTOM ? this.layout._currPageIndex = 0 : this.layout._currPageIndex = 0 === this.layout.itemTotal ? 0 : this.layout.itemTotal - 1), this.layout.indicator && this.layout.indicator._changedState()
                    } else {
                        var t = new c;
                        c.subtract(t, this._touchBeganPosition, this._touchEndPosition);
                        var i = this.layout._currPageIndex,
                            n = i + this.getDragDirection(t),
                            a = this.layout.pageTurningSpeed * Math.abs(i - n);
                        if (this.layout.footerLoop && n >= this.layout.itemTotal && (n = 0), this.layout.headerLoop && n < 0 && (n = this.layout.itemTotal - 1), n < this.layout.itemTotal) {
                            if (this.isScrollable(t, i, n)) return void this.scrollToPage(n, a);
                            var o = this._calculateTouchMoveVelocity();
                            if (this.isQuicklyScrollable(o)) return void this.scrollToPage(n, a)
                        }
                        this.scrollToPage(i, a)
                    }
                }, r.savePageIndex = function(e) {
                    return !(e < 0 || e >= this.layout.itemTotal || (this.layout._currPageIndex = e, this.layout.indicator && this.layout.indicator._changedState(), 0))
                }, r.scrollToPage = function(e, t) {
                    void 0 === t && (t = .3), e < 0 || e >= this.layout.itemTotal || this.savePageIndex(e) && this.layout.scrollToIndex(e, t)
                }, r.isQuicklyScrollable = function(e) {
                    if (this.horizontal) {
                        if (Math.abs(e.x) > this.layout.autoPageTurningThreshold) return !0
                    } else if (this.vertical && Math.abs(e.y) > this.layout.autoPageTurningThreshold) return !0;
                    return !1
                }, r.getDragDirection = function(e) {
                    return this.horizontal ? 0 === e.x ? 0 : this.layout.horizontalAxisDirection == f.HorizontalAxisDirection.LEFT_TO_RIGHT ? e.x > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal : e.x < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal : 0 === e.y ? 0 : this.layout.verticalAxisDirection == f.VerticalAxisDirection.TOP_TO_BOTTOM ? e.y < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal : e.y > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal
                }, r.isScrollable = function(e, t, i) {
                    var n = this.view;
                    return !!n && (this.horizontal ? Math.abs(e.x) >= n.width * this.layout.scrollThreshold : !!this.vertical && Math.abs(e.y) >= n.height * this.layout.scrollThreshold)
                }, r.transmitEvent = function(e, t) {
                    var i = new h(e.getTouches(), e.bubbles, t);
                    i.type = t, i.touch = e.touch, e.target.parent.dispatchEvent(i)
                }, r.soonFinish = function() {
                    this.isCallSoonFinish = !0, this.layout.soonFinish()
                }, r._processAutoScrolling = function(e) {
                    var t = this._isNecessaryAutoScrollBrake(),
                        i = t ? .015 : 1;
                    this._autoScrollAccumulatedTime += e * (1 / i);
                    var n, a = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
                    this._autoScrollAttenuate && (n = a, a = (n -= 1) * n * n * n * n + 1);
                    var o = this._autoScrollTargetDelta.clone();
                    o.multiplyScalar(a);
                    var r = this._autoScrollStartPosition.clone();
                    r.add(o);
                    var s = Math.abs(a - 1) <= H;
                    if (Math.abs(a - 1) <= this.getScrollEndedEventTiming() && !this._isScrollEndedWithThresholdEventFired && (this._dispatchEvent(_.EventType.SCROLL_ENG_WITH_THRESHOLD), this._isScrollEndedWithThresholdEventFired = !0), this.elastic) {
                        var c = r.clone();
                        c.subtract(this._autoScrollBrakingStartPosition), t && c.multiplyScalar(i), r.set(this._autoScrollBrakingStartPosition), r.add(c)
                    } else {
                        var l = r.clone();
                        l.subtract(this.getContentPosition());
                        var u = this._getHowMuchOutOfBoundary(l);
                        u.equals(p.ZERO, H) || (r.add(u), s = !0)
                    }
                    s && (this._autoScrolling = !1), !this.layout.autoCenter || this.isCallSoonFinish || this.isCustomScroll || (this._autoScrollTotalTime < 2 || a >= .8) && this.soonFinish();
                    var d = r.clone();
                    d.subtract(this.getContentPosition()), this._clampDelta(d), this._moveContent(d, s), this._autoScrolling || (this._isBouncing = !1, this._scrolling = !1, this._dispatchEvent(_.EventType.SCROLL_ENDED))
                }, o(t, [{
                    key: "autoScrolling",
                    set: function(e) {
                        this._autoScrolling = e
                    }
                }, {
                    key: "layout",
                    get: function() {
                        var e;
                        return this._layout || (this._layout = null == (e = this.content) ? void 0 : e.getComponent(f)), this._layout
                    }
                }, {
                    key: "curPageIdx",
                    get: function() {
                        return this.layout._currPageIndex
                    }
                }]), t
            }(_)).prototype, "isTransmitEvent", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), D = t(A.prototype, "pullRefresh", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), N = t(A.prototype, "headerOutOffset", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 200
                }
            }), O = t(A.prototype, "headerMultiple", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), b = t(A.prototype, "footerOutOffset", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 200
                }
            }), L = t(A.prototype, "footerMultiple", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), M = t(A.prototype, "headerEvents", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), G = t(A.prototype, "footerEvents", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = A)) || S) || S)), r._RF.pop()
        }
    }
}))