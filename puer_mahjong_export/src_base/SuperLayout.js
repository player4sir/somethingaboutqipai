System.register("chunks:///_virtual/SuperLayout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SuperScrollView.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass, r = e.asyncToGenerator
        }, function(e) {
            s = e.cclegacy, c = e._decorator, l = e.ccenum, u = e.UITransform, d = e.Node, _ = e.PageViewIndicator, h = e.EventHandler, p = e.Vec3, f = e.Vec2, m = e.Size, g = e.Component, E = e.instantiate
        }, function(e) {
            v = e.SuperScrollView
        }],
        execute: function() {
            var T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k, U, B, w, H, F, q, V, x, W, Y, j, K, Q, J, z, X, Z, $, ee, te, ie, ne, ae, oe, re, se, ce, le, ue, de, _e, he, pe, fe, me, ge, Ee, ve, Te, Re, Pe, ye, Ce, Se, Ae, Ie, De, Ne, Oe, be;
            s._RF.push({}, "b4600Q7U6xFDIc0O8S8gv7q", "SuperLayout", void 0);
            var Le, Me, Ge, ke, Ue, Be, we = c.ccclass,
                He = c.property,
                Fe = c.menu,
                qe = c.requireComponent;
            ! function(e) {
                e[e.HORIZONTAL = 0] = "HORIZONTAL", e[e.VERTICAL = 1] = "VERTICAL"
            }(Le || (Le = {})), l(Le),
                function(e) {
                    e[e.TOP_TO_BOTTOM = 0] = "TOP_TO_BOTTOM", e[e.BOTTOM_TO_TOP = 1] = "BOTTOM_TO_TOP"
                }(Me || (Me = {})), l(Me),
                function(e) {
                    e[e.LEFT_TO_RIGHT = 0] = "LEFT_TO_RIGHT", e[e.RIGHT_TO_LEFT = 1] = "RIGHT_TO_LEFT"
                }(Ge || (Ge = {})), l(Ge),
                function(e) {
                    e[e.NONE = 0] = "NONE", e[e.HEADER = 1] = "HEADER", e[e.FOOTER = 2] = "FOOTER"
                }(ke || (ke = {})),
                function(e) {
                    e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM"
                }(Ue || (Ue = {})), l(Ue),
                function(e) {
                    e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT"
                }(Be || (Be = {})), l(Be), e("SuperLayout", (T = we("SuperLayout"), R = qe(u), P = Fe("gui/scrollview/SuperLayout"), y = He({
                    tooltip: "绑定了SuperScrollView的ScrollowView",
                    type: v
                }), C = He({
                    tooltip: "view的UITransform组件",
                    type: u
                }), S = He({
                    tooltip: "用于克隆的节点",
                    type: d
                }), A = He({
                    tooltip: "layout类型",
                    type: Le
                }), I = He({
                    type: Ue,
                    visible: function() {
                        return this.layoutType == Le.VERTICAL && !this.autoCenter
                    }
                }), D = He({
                    type: Be,
                    visible: function() {
                        return this.layoutType == Le.HORIZONTAL && !this.autoCenter
                    }
                }), N = He({
                    type: Me
                }), O = He({
                    type: Ge
                }), b = He({
                    tooltip: "最小值=1，大于1就是Grid模式"
                }), L = He({
                    tooltip: "决定最多创建Prefab的数量"
                }), M = He({
                    tooltip: "顶部填充"
                }), G = He({
                    tooltip: "底部填充"
                }), k = He({
                    tooltip: "左侧填充"
                }), U = He({
                    tooltip: "右侧填充"
                }), B = He({
                    tooltip: "横轴间距"
                }), w = He({
                    tooltip: "纵轴间距"
                }), H = He({
                    tooltip: "计算缩放后的尺寸"
                }), F = He({
                    tooltip: "开启翻页模式"
                }), q = He({
                    tooltip: "每个页面翻页时所需时间。单位：秒",
                    visible: function() {
                        return this.isPageView
                    }
                }), V = He({
                    type: _,
                    visible: function() {
                        return this.isPageView
                    }
                }), x = He({
                    slide: !0,
                    range: [0, 1, .01],
                    tooltip: "滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原",
                    visible: function() {
                        return this.isPageView
                    }
                }), W = He({
                    tooltip: "快速滑动翻页临界值。当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值,该值与此临界值相比较，如果大于临界值，则进行自动翻页",
                    visible: function() {
                        return this.isPageView
                    }
                }), Y = He({
                    type: h,
                    visible: function() {
                        return this.isPageView
                    }
                }), j = He({
                    tooltip: "开启自动居中",
                    visible: function() {
                        return !this.isPageView
                    }
                }), K = He({
                    tooltip: "自动居中的滚动时间",
                    visible: function() {
                        return this.autoCenter
                    }
                }), Q = He({
                    type: d,
                    tooltip: "自动居中的参考节点，如果为空、则默认选择View中心",
                    visible: function() {
                        return this.autoCenter
                    }
                }), J = He({
                    tooltip: "自动居中时、Item的居中锚点",
                    visible: function() {
                        return this.autoCenter
                    }
                }), z = He({
                    tooltip: "上/左 无限循环"
                }), X = He({
                    tooltip: "下/右 无限循环"
                }), Z = He(h), T($ = R($ = P(((be = function(e) {
                    function t() {
                        for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(o)) || this, n(t, "scrollView", te, a(t)), n(t, "view", ie, a(t)), n(t, "cloneNode", ne, a(t)), n(t, "layoutType", ae, a(t)), n(t, "indexVerticalAxisDirection", oe, a(t)), n(t, "indexHorizontalAxisDirection", re, a(t)), n(t, "verticalAxisDirection", se, a(t)), n(t, "horizontalAxisDirection", ce, a(t)), n(t, "groupItemTotal", le, a(t)), n(t, "multiple", ue, a(t)), n(t, "paddingTop", de, a(t)), n(t, "paddingBottom", _e, a(t)), n(t, "paddingLeft", he, a(t)), n(t, "paddingRight", pe, a(t)), n(t, "spacingX", fe, a(t)), n(t, "spacingY", me, a(t)), n(t, "affectedByScale", ge, a(t)), n(t, "isPageView", Ee, a(t)), n(t, "pageTurningSpeed", ve, a(t)), n(t, "indicator", Te, a(t)), n(t, "scrollThreshold", Re, a(t)), n(t, "autoPageTurningThreshold", Pe, a(t)), n(t, "pageEvents", ye, a(t)), n(t, "autoCenter", Ce, a(t)), n(t, "centerTime", Se, a(t)), n(t, "centerNode", Ae, a(t)), n(t, "centerAnchor", Ie, a(t)), n(t, "headerLoop", De, a(t)), n(t, "footerLoop", Ne, a(t)), n(t, "refreshItemEvents", Oe, a(t)), t.stretchLock = {}, t._currPageIndex = 0, t._lastPageIndex = 0, t.isRestart = !1, t.scrollDirection = ke.NONE, t.prevPos = new p(0, 0, 0), t._maxPrefabTotal = 0, t.currentCreateItemTotal = 0, t._itemTotal = 0, t
                    }
                    i(t, e);
                    var s = t.prototype;
                    return s.onLoad = function() {
                        var e, t, i, n = this;
                        null == (e = this.transform) || e.setAnchorPoint(new f(.5, .5)), null == (t = this.transform) || t.setContentSize(this.view.contentSize), this.node.setPosition(p.ZERO), this.isPageView && (this.autoCenter = !1), null == (i = this.scrollView.view) || i.node.on(d.EventType.SIZE_CHANGED, this.onViewSizeChange, this), Object.defineProperty(this.transform, "contentSize", {
                            get: function() {
                                return n.contentSize
                            }
                        }), Object.defineProperty(this.transform, "width", {
                            get: function() {
                                return n.contentSize.width
                            }
                        }), Object.defineProperty(this.transform, "height", {
                            get: function() {
                                return n.contentSize.height
                            }
                        })
                    }, s.onEnable = function() {
                        this.addEventListener()
                    }, s.onDisable = function() {
                        this.removeEventListener()
                    }, s.total = function(e, t) {
                        void 0 === t && (t = !1), this.scrollView.canTouchMove = !1, this.currentCreateItemTotal = e, this.createItems(e, t);
                        var i = e - this.itemTotal;
                        return this._itemTotal = e, this.refreshItems(i, t), t || this.updateItems(), this.scrollView.release(), this.indicator && this.indicator.setPageView(this.scrollView), this.autoCenter && this.scrollToCenter(), this.scrollView.canTouchMove = !0, this
                    }, s.updateItems = function() {
                        return this.resetIndexStartToEnd(this.headerIndex), this
                    }, s.updateItemSize = function(e, t) {
                        var i;
                        this.groupItemTotal > 1 || e && t && (e.__runtime_size = t, this.onChangeChildSize(null == (i = e._uiProps) ? void 0 : i.uiTransformComp))
                    }, s.scrollToCenter = function() {
                        this.soonFinish()
                    }, s.scrollToHeader = function(e) {
                        var t, i, n, a, o = 0;
                        this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? (o = this.viewHeaderBoundary, this.indexVerticalAxisDirection == Ue.BOTTOM && (o -= (null == (t = this.header) ? void 0 : t.height) + this.paddingTop + this.paddingBottom)) : (o = this.viewFooterBoundary, this.indexVerticalAxisDirection == Ue.TOP && (o += (null == (i = this.header) ? void 0 : i.height) + this.paddingTop + this.paddingBottom)) : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? (o = this.viewHeaderBoundary, this.indexHorizontalAxisDirection == Be.RIGHT && (o += (null == (n = this.header) ? void 0 : n.width) + this.paddingLeft + this.paddingRight)) : (o = this.viewFooterBoundary, this.indexHorizontalAxisDirection == Be.LEFT && (o -= (null == (a = this.header) ? void 0 : a.width) + this.paddingLeft + this.paddingRight)), this.scrollToIndex(0, e, new p(o, o))
                    }, s.scrollToFooter = function(e) {
                        var t = 0;
                        if (this.vertical) {
                            if (this.fixedItemHeight < this.view.height) return;
                            var i, n;
                            this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? (t = this.viewFooterBoundary, this.indexVerticalAxisDirection == Ue.BOTTOM && (t += (null == (i = this.footer) ? void 0 : i.height) + this.paddingTop + this.paddingBottom)) : (t = this.viewHeaderBoundary, this.indexVerticalAxisDirection == Ue.TOP && (t -= (null == (n = this.footer) ? void 0 : n.height) + this.paddingTop + this.paddingBottom))
                        } else {
                            if (this.fixedItemWidth < this.view.width) return;
                            var a, o;
                            this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? (t = this.viewFooterBoundary, this.indexHorizontalAxisDirection == Be.RIGHT && (t -= (null == (a = this.footer) ? void 0 : a.width) + this.paddingLeft + this.paddingRight)) : (t = this.viewHeaderBoundary, this.indexHorizontalAxisDirection == Be.LEFT && (t += (null == (o = this.footer) ? void 0 : o.width) + this.paddingLeft + this.paddingRight))
                        }
                        this.scrollToIndex(this.itemTotal - 1, e, new p(t, t), !0)
                    }, s.isNearFooter = function(e) {
                        var t = !1;
                        if (e > this.footerIndex && e < this.headerIndex) {
                            var i = Math.abs(e - this.headerIndex) < Math.abs(e - this.footerIndex);
                            t = this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? !i : i : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? !i : i
                        } else e > this.footerIndex ? t = this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT : e < this.headerIndex && (t = this.vertical ? this.verticalAxisDirection != Me.TOP_TO_BOTTOM : this.horizontalAxisDirection != Ge.LEFT_TO_RIGHT);
                        return t
                    }, s.getFooterOffset = function(e) {
                        var t = this.footerIndex % this.groupItemTotal;
                        return e % this.groupItemTotal - t + this.groupItemTotal
                    }, s.getHeaderOffset = function(e) {
                        return this.headerIndex % this.groupItemTotal - e % this.groupItemTotal + this.groupItemTotal
                    }, s.offsetToHeader = function(e) {
                        var t = 0;
                        t = this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.getHeaderOffset(e) : this.getFooterOffset(e) : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.getHeaderOffset(e) : this.getFooterOffset(e), t -= this.groupItemTotal;
                        for (var i = 0; i < t; i++) this.pushToHeader(!0)
                    }, s.offsetToFooter = function(e) {
                        var t = 0;
                        t = this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.getFooterOffset(e) : this.getHeaderOffset(e) : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.getFooterOffset(e) : this.getHeaderOffset(e), t -= this.groupItemTotal;
                        for (var i = 0; i < t; i++) this.pushToFooter(!0)
                    }, s.resetIndexStartToEnd = function(e) {
                        for (var t = 0; t < this.node.children.length; t++) {
                            var i = this.node.children[t];
                            i.__index = e, e++, (this.headerLoop || this.footerLoop) && (e < 0 || e >= this.itemTotal) && (e = 0), this.notifyRefreshItem(i)
                        }
                    }, s.resetIndexEndToStart = function(e) {
                        for (var t = this.node.children.length - 1; t >= 0; t--) {
                            var i = this.node.children[t];
                            i.__index = e, e--, (this.headerLoop || this.footerLoop) && e < 0 && (e = this.itemTotal - 1), this.notifyRefreshItem(i)
                        }
                    }, s.scrollToIndex = function(e, t, i, n) {
                        var a;
                        if (void 0 === n && (n = !1), !(isNaN(e) || e < 0 || e > this.itemTotal - 1)) {
                            this.scrollView.stopAutoScroll(), this.isPageView && this.scrollView.savePageIndex(e);
                            var o = this.node.children.find((function(t) {
                                    return t.__index == e
                                })),
                                r = this.isNearFooter(e);
                            if (this.stretchLock.index = e, this.stretchLock.timeInSecond = t, this.stretchLock.boundary = i, this.stretchLock.reverse = n, !o) {
                                0 == e && this.pushToHeader(), e == this.itemTotal - 1 && this.pushToFooter();
                                var s = this.vertical && this.verticalAxisDirection == Me.TOP_TO_BOTTOM || !this.vertical && this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT;
                                r ? (this.offsetToFooter(e), s ? this.resetIndexEndToStart(e) : this.resetIndexStartToEnd(e)) : (this.offsetToHeader(e), s ? this.resetIndexStartToEnd(e) : this.resetIndexEndToStart(e)), o = this.node.children.find((function(t) {
                                    return t.__index == e
                                }))
                            }
                            if (o) {
                                var c = o.getPosition().clone();
                                this.autoCenter || (this.vertical ? this.indexVerticalAxisDirection == Ue.TOP ? c.y = n ? this.getItemYMin(o.getComponent(u)) - this.paddingBottom : this.getItemYMax(o.getComponent(u)) + this.paddingTop : c.y = n ? this.getItemYMax(o.getComponent(u)) + this.paddingTop : this.getItemYMin(o.getComponent(u)) - this.paddingBottom : this.indexHorizontalAxisDirection == Be.LEFT ? c.x = n ? this.getItemXMax(o.getComponent(u)) + this.paddingRight : this.getItemXMin(o.getComponent(u)) - this.paddingLeft : c.x = n ? this.getItemXMin(o.getComponent(u)) - this.paddingLeft : this.getItemXMax(o.getComponent(u)) + this.paddingRight);
                                var l, d = null == (a = this.transform) ? void 0 : a.convertToWorldSpaceAR(c),
                                    _ = this.view.convertToNodeSpaceAR(d);
                                l = !this.autoCenter && i ? i : this.getCenterAnchor(o.getComponent(u), this.centerPosition), _.multiply(new p(-1, -1, 1)).add(l), this.scrollView.scrollToAny(_, t, !0)
                            }
                        }
                    }, s.onViewSizeChange = function() {
                        var e = r(_regeneratorRuntime2().mark((function e() {
                            var t, i;
                            return _regeneratorRuntime2().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        for (this.isRestart = !0, this.createItems(this.currentCreateItemTotal), this.resetChilds(!0), this.scrollToHeader(), t = 0; t < this.node.children.length; t++) i = this.node.children[t].getComponent(u), this.setAndSaveSizeAndScale(i);
                                        this.isRestart = !1;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), s.setAndSaveSizeAndScale = function(e) {
                        e.setContentSize(this.getItemSize(e)), e.node.__size = e.contentSize.clone(), e.node.__scale = e.node.getScale().clone()
                    }, s.getCenterAnchor = function(e, t) {
                        var i = t.clone();
                        if (this.vertical) {
                            var n = e.height * this.centerAnchor.y,
                                a = e.height * e.anchorY;
                            i.y -= n - a
                        } else {
                            var o = e.width * this.centerAnchor.x,
                                r = e.width * e.anchorX;
                            i.x += o - r
                        }
                        return i
                    }, s.soonFinish = function() {
                        if (this.autoCenter && !this.scrollView.pullRefresh) {
                            this.scrollView.stopAutoScroll();
                            for (var e = new p(999999, 999999), t = 0; t < this.node.children.length; t++) {
                                var i, n = this.node.children[t],
                                    a = null == (i = this.transform) ? void 0 : i.convertToWorldSpaceAR(n.position),
                                    o = this.view.convertToNodeSpaceAR(a),
                                    r = {
                                        width: !1,
                                        height: !1
                                    },
                                    s = this.getCenterAnchor(n.getComponent(u), this.centerPosition),
                                    c = o.subtract(s);
                                r.width = Math.abs(c.x) < Math.abs(e.x), r.height = Math.abs(c.y) < Math.abs(e.y), (this.vertical && r.height || !this.vertical && r.width) && (e = c)
                            }
                            e.multiply(new p(-1, -1, 1)), this.scrollView.scrollToAny(e, this.centerTime)
                        }
                    }, s.getItemSize = function(e) {
                        var t = new m;
                        if (this.vertical) {
                            var i = this.spacingX * (this.groupItemTotal - 1);
                            t.width = (this.accommodWidth - i) / this.groupItemTotal, t.height = e.height
                        } else {
                            var n = this.spacingY * (this.groupItemTotal - 1);
                            t.height = (this.accommodHeight - n) / this.groupItemTotal, t.width = e.width
                        }
                        return t
                    }, s.getItemYMax = function(e) {
                        if (!e) return 0;
                        var t = this.getScaleHeight(e) * (1 - e.anchorY);
                        return e.node.position.y + t
                    }, s.getItemYMin = function(e) {
                        if (!e) return 0;
                        var t = this.getScaleHeight(e) * e.anchorY;
                        return e.node.position.y - t
                    }, s.getItemXMax = function(e) {
                        if (!e) return 0;
                        var t = this.getScaleWidth(e) * (1 - e.anchorX);
                        return e.node.position.x + t
                    }, s.getItemXMin = function(e) {
                        if (!e) return 0;
                        var t = this.getScaleWidth(e) * e.anchorX;
                        return e.node.position.x - t
                    }, s.getStartX = function(e) {
                        if (!e) return 0;
                        var t = 0;
                        if (this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT) {
                            var i = this.getScaleWidth(e) * e.anchorX;
                            t = this.viewStartPoint.x + i
                        } else {
                            var n = this.getScaleWidth(e) * (1 - e.anchorX);
                            t = this.viewStartPoint.x - n
                        }
                        return t
                    }, s.getEndX = function(e) {
                        if (!e) return 0;
                        var t = 0;
                        if (this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT) {
                            var i = this.getScaleWidth(e) * (1 - e.anchorX);
                            t = -this.viewStartPoint.x - i - this.paddingRight + this.paddingLeft
                        } else {
                            var n = this.getScaleWidth(e) * e.anchorX;
                            t = -this.viewStartPoint.x + n + this.paddingLeft - this.paddingRight
                        }
                        return t
                    }, s.getStartY = function(e) {
                        if (!e) return 0;
                        var t = 0;
                        if (this.verticalAxisDirection == Me.TOP_TO_BOTTOM) {
                            var i = this.getScaleHeight(e) * (1 - e.anchorY);
                            t = this.viewStartPoint.y - i
                        } else {
                            var n = this.getScaleHeight(e) * e.anchorY;
                            t = this.viewStartPoint.y + n
                        }
                        return t
                    }, s.getEndY = function(e) {
                        if (!e) return 0;
                        var t = 0;
                        if (this.verticalAxisDirection == Me.TOP_TO_BOTTOM) {
                            var i = this.getScaleHeight(e) * e.anchorY;
                            t = -this.viewStartPoint.y + i + this.paddingBottom - this.paddingTop
                        } else {
                            var n = this.getScaleHeight(e) * (1 - e.anchorY);
                            t = -this.viewStartPoint.y - n - this.paddingTop + this.paddingBottom
                        }
                        return t
                    }, s.isAccommodateByTop = function(e) {
                        return this.getItemYMax(e) + this.paddingTop < .5 * this.accommodHeight
                    }, s.isAccommodateByBottom = function(e) {
                        return this.getItemYMin(e) - this.paddingBottom > -.5 * this.accommodHeight
                    }, s.isAccommodateByLeft = function(e) {
                        return this.getItemXMin(e) - this.paddingLeft > -.5 * this.accommodWidth
                    }, s.isAccommodateByRight = function(e) {
                        return this.getItemXMax(e) + this.paddingRight < .5 * this.accommodWidth
                    }, s.getRelativeByLeft = function(e, t) {
                        return this.getItemXMin(t) - this.spacingX - this.getScaleWidth(e) * (1 - e.anchorX)
                    }, s.getRelativeByRight = function(e, t) {
                        return this.getItemXMax(t) + this.spacingX + this.getScaleWidth(e) * e.anchorX
                    }, s.getRelativeByTop = function(e, t) {
                        return this.getItemYMax(t) + this.spacingY + this.getScaleHeight(e) * e.anchorY
                    }, s.getRelativeByBottom = function(e, t) {
                        return this.getItemYMin(t) - this.spacingY - this.getScaleHeight(e) * (1 - e.anchorY)
                    }, s.setItemPosition = function(e, t, i, n) {
                        void 0 === i && (i = !1), void 0 === n && (n = !1);
                        var a = new p;
                        n ? (a.x = this.getStartX(e), a.y = this.getStartY(e)) : a = this.vertical ? this.getVerticalRelativePosition(e, t, i) : this.getHorizontalRelativePosition(e, t, i), e.node.setPosition(a)
                    }, s.getVerticalRelativePosition = function(e, t, i) {
                        var n, a = new p;
                        return n = this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? i ? this.isAccommodateByLeft(t) : this.isAccommodateByRight(t) : i ? this.isAccommodateByRight(t) : this.isAccommodateByLeft(t), this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? a.x = i ? n ? this.getRelativeByLeft(e, t) : this.getEndX(e) : n ? this.getRelativeByRight(e, t) : this.getStartX(e) : a.x = i ? n ? this.getRelativeByRight(e, t) : this.getEndX(e) : n ? this.getRelativeByLeft(e, t) : this.getStartX(e), this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? a.y = i ? n ? t.node.position.y : this.getRelativeByTop(e, t) : n ? t.node.position.y : this.getRelativeByBottom(e, t) : a.y = i ? n ? t.node.position.y : this.getRelativeByBottom(e, t) : n ? t.node.position.y : this.getRelativeByTop(e, t), a
                    }, s.getHorizontalRelativePosition = function(e, t, i) {
                        var n, a = new p;
                        return n = this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? i ? this.isAccommodateByTop(t) : this.isAccommodateByBottom(t) : i ? this.isAccommodateByBottom(t) : this.isAccommodateByTop(t), this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? a.y = i ? n ? this.getRelativeByTop(e, t) : this.getEndY(e) : n ? this.getRelativeByBottom(e, t) : this.getStartY(e) : a.y = i ? n ? this.getRelativeByBottom(e, t) : this.getEndY(e) : n ? this.getRelativeByTop(e, t) : this.getStartY(e), this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? a.x = i ? n ? t.node.position.x : this.getRelativeByLeft(e, t) : n ? t.node.position.x : this.getRelativeByRight(e, t) : a.x = i ? n ? t.node.position.x : this.getRelativeByRight(e, t) : n ? t.node.position.x : this.getRelativeByLeft(e, t), a
                    }, s.refreshItems = function(e, t) {
                        if (void 0 === t && (t = !1), e < 0) {
                            for (var i = 0; i < -e; i++) this.headerLoop || this.footerLoop ? this.pushToHeader() : (this.pushToHeader(!0), this.pushToFooter());
                            var n = this.headerIndex > 0 ? this.headerIndex : 0;
                            n + this.node.children.length > this.itemTotal && (n += e), n < 0 && (n = 0);
                            for (var a = 0; a < this.node.children.length; a++) {
                                var o = this.node.children[a];
                                (this.headerLoop || this.footerLoop) && n > this.itemTotal - 1 && (n = 0), o.__index = n, n++, t && this.notifyRefreshItem(o)
                            }
                            this.scrollView.stopAutoScroll(), this.scrollView.startAutoScroll()
                        } else
                            for (var r = 0; r < this.node.children.length; r++) this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.pushToFooter() : this.pushToHeader() : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.pushToFooter() : this.pushToHeader()
                    }, s.createItems = function(e, t) {
                        var i = this;
                        if (this.node.children.length > e) this.removeItems(e);
                        else if (this.needAddPrefab() || !(this._maxPrefabTotal > 0) || this._maxPrefabTotal != this.node.children.length)
                            for (var n = e - this.node.children.length, a = function(e) {
                                    var t, n = E(i.cloneNode),
                                        a = n.getComponent(u);
                                    if (i.setAndSaveSizeAndScale(a), n.__index = i.node.children.length, i.node.addChild(n), r = i.node.children.length - 2, s = 0 == n.__index ? i.footer : null == (t = i.node.children[r]._uiProps) ? void 0 : t.uiTransformComp, n.on(d.EventType.SIZE_CHANGED, (function() {
                                            i.onChangeChildSize(a)
                                        }), i, !0), n.on(d.EventType.TRANSFORM_CHANGED, (function(e) {
                                            i.onChangeChildScale(e, a)
                                        }), i, !0), i.notifyRefreshItem(n), i.setItemPosition(n.getComponent(u), s, !1, 0 == n.__index), !i.needAddPrefab()) return i._maxPrefabTotal = i.node.children.length, console.log("已固定item数量", i._maxPrefabTotal), "break"
                                }, o = 0; o < n; o++) {
                                var r, s;
                                if ("break" === a()) break
                            }
                    }, s.needAddPrefab = function() {
                        var e = this.vertical ? this.contentSize.height : this.contentSize.width;
                        return e > 0 && e < (this.vertical ? this.view.height : this.view.width) * this.multiple
                    }, s.onChangeChildSize = function() {
                        var e = r(_regeneratorRuntime2().mark((function e(t) {
                            var i, n;
                            return _regeneratorRuntime2().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null == t) {
                                            e.next = 6;
                                            break
                                        }
                                        if (i = t.node, !(this.groupItemTotal > 1)) {
                                            e.next = 5;
                                            break
                                        }
                                        return n = i.__size, e.abrupt("return", (t.setContentSize(n), void console.warn("表格布局不支持动态修改 Size,如果你非要修改，那你把我注释掉看效果")));
                                    case 5:
                                        this.stretchLock.index == i.__index && this.scrollToIndex(this.stretchLock.index, this.stretchLock.timeInSecond, this.stretchLock.boundary, this.stretchLock.reverse), this.resetStrectchItems();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), s.onChangeChildScale = function() {
                        var e = r(_regeneratorRuntime2().mark((function e(t, i) {
                            var n, a;
                            return _regeneratorRuntime2().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t !== d.TransformBit.SCALE || !this.affectedByScale) {
                                            e.next = 6;
                                            break
                                        }
                                        if (n = i.node, !(this.groupItemTotal > 1)) {
                                            e.next = 5;
                                            break
                                        }
                                        return a = n.__scale, e.abrupt("return", (i.node.setScale(a), void console.warn("表格布局不支持动态修改 Scale,如果你非要修改，那你把我注释掉看效果")));
                                    case 5:
                                        this.stretchLock.index == n.__index && this.scrollToIndex(this.stretchLock.index, this.stretchLock.timeInSecond, this.stretchLock.boundary, this.stretchLock.reverse), this.resetStrectchItems();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }(), s.resetStrectchItems = function() {
                        var e = this;
                        if (!isNaN(this.stretchLock.index)) {
                            var t = this.node.children.findIndex((function(t) {
                                return t.__index == e.stretchLock.index
                            }));
                            if (-1 != t) {
                                for (var i = t; i >= 0; i--) {
                                    var n, a, o = this.node.children[i];
                                    i != t && i < t && this.setItemPosition(null == (n = o._uiProps) ? void 0 : n.uiTransformComp, null == (a = this.node.children[i + 1]._uiProps) ? void 0 : a.uiTransformComp, !0)
                                }
                                for (var r = t; r < this.node.children.length; r++) {
                                    var s, c, l = this.node.children[r];
                                    r != t && this.setItemPosition(null == (s = l._uiProps) ? void 0 : s.uiTransformComp, null == (c = this.node.children[r - 1]._uiProps) ? void 0 : c.uiTransformComp)
                                }
                                return
                            }
                        }
                        this.scrollDirection == ke.HEADER ? (this.unschedule(this.stretchToFooter), this.scheduleOnce(this.stretchToFooter)) : (this.unschedule(this.stretchToHeader), this.scheduleOnce(this.stretchToHeader))
                    }, s.stretchToHeader = function() {
                        for (var e = this.node.children.length - 1; e >= 0; e--) {
                            var t, i, n = this.node.children[e];
                            e != this.node.children.length - 1 && this.setItemPosition(null == (t = n._uiProps) ? void 0 : t.uiTransformComp, null == (i = this.node.children[e + 1]._uiProps) ? void 0 : i.uiTransformComp, !0)
                        }
                    }, s.stretchToFooter = function() {
                        for (var e = 0; e < this.node.children.length; e++) {
                            var t, i, n = this.node.children[e];
                            0 != e && this.setItemPosition(null == (t = n._uiProps) ? void 0 : t.uiTransformComp, null == (i = this.node.children[e - 1]._uiProps) ? void 0 : i.uiTransformComp)
                        }
                    }, s.removeItems = function(e) {
                        for (var t = this.node.children.length, i = t - e, n = 0; n < i; n++) {
                            var a = this.node.children[t - 1];
                            a.off(d.EventType.SIZE_CHANGED), a.off(d.EventType.TRANSFORM_CHANGED), this.node.removeChild(a), a.destroy()
                        }
                    }, s.addEventListener = function() {
                        this.node.on(d.EventType.TRANSFORM_CHANGED, this.onPositionChanged, this)
                    }, s.removeEventListener = function() {
                        this.node.off(d.EventType.TRANSFORM_CHANGED, this.onPositionChanged, this)
                    }, s.resetChilds = function(e) {
                        if (void 0 === e && (e = !1), this.vertical && this.fixedItemHeight <= this.view.height || !this.vertical && this.fixedItemWidth <= this.view.width) {
                            var t, i = this.getStartX(this.header),
                                n = this.getStartY(this.header);
                            null == (t = this.header) || t.node.setPosition(new p(i, n))
                        }
                        if (e)
                            if (this.vertical) {
                                var a, o = this.getStartX(this.header);
                                null == (a = this.header) || a.node.setPosition(new p(o, this.header.node.position.y))
                            } else {
                                var r, s = this.getStartY(this.header);
                                null == (r = this.header) || r.node.setPosition(new p(this.header.node.position.x, s))
                            } this.stretchToFooter(), e || this.scrollView.startAutoScroll()
                    }, s.onTouchBegin = function() {
                        this.stretchLock = {}
                    }, s.getUsedScaleValue = function(e) {
                        return this.affectedByScale ? Math.abs(e) : 1
                    }, s.getScaleWidth = function(e) {
                        if (!e) return 0;
                        var t = e.node.__runtime_size;
                        return (t ? t.width : e.width) * this.getUsedScaleValue(e.node.scale.x)
                    }, s.getScaleHeight = function(e) {
                        if (!e) return 0;
                        var t = e.node.__runtime_size;
                        return (t ? t.height : e.height) * this.getUsedScaleValue(e.node.scale.y)
                    }, s.onPositionChanged = function() {
                        if (!this.isRestart) {
                            if (this.vertical ? this.scrollView.prevLocation.y < this.scrollView.location.y ? this.scrollDirection = ke.FOOTER : this.scrollView.prevLocation.y > this.scrollView.location.y ? this.scrollDirection = ke.HEADER : this.scrollDirection = ke.NONE : this.scrollView.prevLocation.x > this.scrollView.location.x ? this.scrollDirection = ke.FOOTER : this.scrollView.prevLocation.x < this.scrollView.location.x ? this.scrollDirection = ke.HEADER : this.scrollDirection = ke.NONE, this.vertical)
                                for (var e = 0; e < this.node.children.length; e++) Math.abs(this.prevPos.y - this.node.position.y) > 1e-5 && (this.prevPos.y < this.node.position.y ? this.pushToFooter() : this.prevPos.y > this.node.position.y && this.pushToHeader());
                            else
                                for (var t = 0; t < this.node.children.length; t++) Math.abs(this.prevPos.x - this.node.position.x) > 1e-5 && (this.prevPos.x > this.node.position.x ? this.pushToFooter() : this.prevPos.x < this.node.position.x && this.pushToHeader());
                            this.prevPos = this.node.position.clone()
                        }
                    }, s.pushToFooter = function(e) {
                        var t, i, n, a;
                        void 0 === e && (e = !1), this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? (e || this.headerBoundary - this.paddingTop > this.viewHeaderBoundary + (null == (t = this.header) ? void 0 : t.height)) && this.pushToFooterHandler() : (e || this.footerBoundary - this.paddingTop > this.viewHeaderBoundary + (null == (i = this.header) ? void 0 : i.height)) && this.pushToHeaderHandler() : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? (e || this.headerBoundary + this.paddingLeft < this.viewHeaderBoundary - (null == (n = this.header) ? void 0 : n.width)) && this.pushToFooterHandler() : (e || this.footerBoundary + this.paddingLeft < this.viewHeaderBoundary - (null == (a = this.header) ? void 0 : a.width)) && this.pushToHeaderHandler()
                    }, s.pushToHeader = function(e) {
                        var t, i, n, a;
                        void 0 === e && (e = !1), this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? (e || this.footerBoundary + this.paddingBottom < this.viewFooterBoundary - (null == (t = this.footer) ? void 0 : t.height)) && this.pushToHeaderHandler() : (e || this.headerBoundary + this.paddingBottom < this.viewFooterBoundary - (null == (i = this.footer) ? void 0 : i.height)) && this.pushToFooterHandler() : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? (e || this.footerBoundary - this.paddingRight > this.viewFooterBoundary + (null == (n = this.footer) ? void 0 : n.width)) && this.pushToHeaderHandler() : (e || this.headerBoundary - this.paddingRight > this.viewFooterBoundary + (null == (a = this.footer) ? void 0 : a.width)) && this.pushToFooterHandler()
                    }, s.pushToFooterHandler = function() {
                        var e, t, i = null == (e = this.header) ? void 0 : e.node;
                        if (this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.footerLoop : this.headerLoop : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.footerLoop : this.headerLoop) this.footerIndex >= this.itemTotal - 1 ? i.__index = 0 : i.__index = this.footerIndex + 1;
                        else {
                            if (!this.footer || this.footerIndex >= this.itemTotal - 1) return;
                            i.__index = this.footerIndex + 1
                        }
                        i.__index > 0 && i.__index < this.currentCreateItemTotal && this.notifyRefreshItem(i), this.setItemPosition(this.header, this.footer), null == (t = this.header) || t.node.setSiblingIndex(this.node.children.length)
                    }, s.pushToHeaderHandler = function() {
                        var e, t, i, n = null == (e = this.footer) ? void 0 : e.node;
                        if ((i = this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.headerLoop : this.footerLoop : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.headerLoop : this.footerLoop) || 0 != this.headerIndex || (this.vertical ? this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.isAccommodateByLeft(this.header) : this.isAccommodateByRight(this.header) : this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.isAccommodateByTop(this.header) : this.isAccommodateByBottom(this.header)) && this.resetChilds(!0), i) 0 == this.headerIndex ? n.__index = this.itemTotal - 1 : n.__index = this.headerIndex - 1;
                        else {
                            if (!this.header || 0 == this.headerIndex) return;
                            n.__index = this.headerIndex - 1
                        }
                        n.__index > 0 && n.__index < this.currentCreateItemTotal && this.notifyRefreshItem(n), this.setItemPosition(this.footer, this.header, !0), null == (t = this.footer) || t.node.setSiblingIndex(0)
                    }, s.notifyRefreshItem = function(e) {
                        h.emitEvents(this.refreshItemEvents, e, e.__index)
                    }, o(t, [{
                        key: "currPageIndex",
                        get: function() {
                            return this._currPageIndex
                        }
                    }, {
                        key: "lastPageIndex",
                        get: function() {
                            return this._lastPageIndex
                        }
                    }, {
                        key: "vertical",
                        get: function() {
                            return this.layoutType == Le.VERTICAL
                        }
                    }, {
                        key: "horizontal",
                        get: function() {
                            return this.layoutType == Le.HORIZONTAL
                        }
                    }, {
                        key: "transform",
                        get: function() {
                            var e, t;
                            if (null != (null == (e = this.node) ? void 0 : e._uiProps)) return null == (t = this.node._uiProps) ? void 0 : t.uiTransformComp
                        }
                    }, {
                        key: "accommodWidth",
                        get: function() {
                            return this.view.width - this.paddingLeft - this.paddingRight
                        }
                    }, {
                        key: "accommodHeight",
                        get: function() {
                            return this.view.height - this.paddingTop - this.paddingBottom
                        }
                    }, {
                        key: "header",
                        get: function() {
                            var e;
                            return 0 == this.node.children.length ? null : null == (e = this.node.children[0]._uiProps) ? void 0 : e.uiTransformComp
                        }
                    }, {
                        key: "footer",
                        get: function() {
                            var e;
                            return 0 == this.node.children.length ? null : null == (e = this.node.children[this.node.children.length - 1]._uiProps) ? void 0 : e.uiTransformComp
                        }
                    }, {
                        key: "headerIndex",
                        get: function() {
                            return this.header ? this.header.node.__index : -1
                        }
                    }, {
                        key: "footerIndex",
                        get: function() {
                            return this.footer ? this.footer.node.__index : -1
                        }
                    }, {
                        key: "viewStartPoint",
                        get: function() {
                            var e = new p;
                            return this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? e.x = -.5 * this.view.width + this.paddingLeft : e.x = .5 * this.view.width - this.paddingRight, this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? e.y = .5 * this.view.height - this.paddingTop : e.y = -.5 * this.view.height + this.paddingBottom, e
                        }
                    }, {
                        key: "viewHeaderBoundary",
                        get: function() {
                            return this.vertical ? .5 * this.view.height : -.5 * this.view.width
                        }
                    }, {
                        key: "viewFooterBoundary",
                        get: function() {
                            return this.vertical ? -.5 * this.view.height : .5 * this.view.width
                        }
                    }, {
                        key: "headerBoundary",
                        get: function() {
                            return this.header ? this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.node.position.y + this.getItemYMax(this.header) + this.paddingTop : this.node.position.y + this.getItemYMin(this.header) - this.paddingBottom : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.node.position.x + this.getItemXMin(this.header) - this.paddingLeft : this.node.position.x + this.getItemXMax(this.header) + this.paddingRight : 0
                        }
                    }, {
                        key: "footerBoundary",
                        get: function() {
                            return this.footer ? this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? this.node.position.y + this.getItemYMin(this.footer) - this.paddingBottom : this.node.position.y + this.getItemYMax(this.footer) + this.paddingTop : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.node.position.x + this.getItemXMax(this.footer) + this.paddingRight : this.node.position.x + this.getItemXMin(this.footer) - this.paddingLeft : 0
                        }
                    }, {
                        key: "centerHeaderBoundary",
                        get: function() {
                            var e, t = this.vertical ? "y" : "x";
                            return e = this.centerNode ? this.viewHeaderBoundary - this.centerNode.position[t] : this.viewHeaderBoundary - this.view.node.position[t], this.vertical && this.verticalAxisDirection == Me.TOP_TO_BOTTOM || this.horizontal && this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.headerBoundary + e : this.footerBoundary + e
                        }
                    }, {
                        key: "centerFooterBoundary",
                        get: function() {
                            var e, t = this.vertical ? "y" : "x";
                            return e = this.centerNode ? this.viewFooterBoundary - this.centerNode.position[t] : this.viewFooterBoundary - this.view.node.position[t], this.vertical && this.verticalAxisDirection == Me.TOP_TO_BOTTOM || this.horizontal && this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? this.footerBoundary + e : this.headerBoundary + e
                        }
                    }, {
                        key: "isOfLeftBoundary",
                        get: function() {
                            if (this.vertical) return 0;
                            if (this.autoCenter) return this.scrollDirection == ke.HEADER ? this.centerHeaderBoundary : 0;
                            if (this.headerLoop) return this.header ? 0 : this.viewHeaderBoundary + this.node.position.x;
                            if (!this.header || this.fixedItemWidth <= this.view.width) return this.viewHeaderBoundary + this.node.position.x;
                            if (this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT) {
                                if (0 == this.headerIndex) return this.headerBoundary
                            } else if (this.footerIndex == this.itemTotal - 1) return this.footerBoundary;
                            return 0
                        }
                    }, {
                        key: "isOfTopBoundary",
                        get: function() {
                            if (!this.vertical) return 0;
                            if (this.autoCenter) return this.scrollDirection == ke.HEADER ? this.centerHeaderBoundary : 0;
                            if (this.headerLoop) return this.header ? 0 : this.viewHeaderBoundary + this.node.position.y;
                            if (!this.header || this.fixedItemHeight <= this.view.height) return this.viewHeaderBoundary + this.node.position.y;
                            if (this.verticalAxisDirection == Me.TOP_TO_BOTTOM) {
                                if (0 == this.headerIndex) return this.headerBoundary
                            } else if (this.footerIndex == this.itemTotal - 1) return this.footerBoundary;
                            return 0
                        }
                    }, {
                        key: "isOfRightBoundary",
                        get: function() {
                            if (this.vertical) return 0;
                            if (this.autoCenter) return this.scrollDirection == ke.FOOTER ? this.centerFooterBoundary : 0;
                            if (this.footerLoop) return this.footer ? 0 : this.viewFooterBoundary + this.node.position.x;
                            if (!this.footer || this.fixedItemWidth <= this.view.width) return this.viewFooterBoundary + this.node.position.x;
                            if (this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT) {
                                if (this.footerIndex == this.itemTotal - 1) return this.footerBoundary
                            } else if (0 == this.headerIndex) return this.headerBoundary;
                            return 0
                        }
                    }, {
                        key: "isOfButtomBoundary",
                        get: function() {
                            if (!this.vertical) return 0;
                            if (this.autoCenter) return this.scrollDirection == ke.FOOTER ? this.centerFooterBoundary : 0;
                            if (this.footerLoop) return this.footer ? 0 : this.viewFooterBoundary + this.node.position.y;
                            if (!this.footer || this.fixedItemHeight <= this.view.height) return this.viewFooterBoundary + this.node.position.y;
                            if (this.verticalAxisDirection == Me.TOP_TO_BOTTOM) {
                                if (this.footerIndex == this.itemTotal - 1) return this.footerBoundary
                            } else if (0 == this.headerIndex) return this.headerBoundary;
                            return 0
                        }
                    }, {
                        key: "fixedItemHeight",
                        get: function() {
                            return this.header ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? Math.abs(this.getItemYMax(this.header)) + Math.abs(this.getItemYMin(this.footer)) : Math.abs(this.getItemYMin(this.header)) + Math.abs(this.getItemYMax(this.footer)) : 0
                        }
                    }, {
                        key: "fixedItemWidth",
                        get: function() {
                            return this.header ? this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? Math.abs(this.getItemXMin(this.header)) + Math.abs(this.getItemXMax(this.footer)) : Math.abs(this.getItemXMax(this.header)) + Math.abs(this.getItemXMin(this.footer)) : 0
                        }
                    }, {
                        key: "contentSize",
                        get: function() {
                            if (0 == this.node.children.length) return this.view.contentSize;
                            var e = new m(this.view.contentSize.width, this.view.contentSize.height);
                            return this.vertical ? this.verticalAxisDirection == Me.TOP_TO_BOTTOM ? e.height = this.headerBoundary + -this.footerBoundary : e.height = this.footerBoundary + -this.headerBoundary : this.horizontalAxisDirection == Ge.LEFT_TO_RIGHT ? e.width = this.footerBoundary + -this.headerBoundary : e.width = this.headerBoundary + -this.footerBoundary, e.width < this.view.contentSize.width && (e.width = this.view.contentSize.width), e.height < this.view.contentSize.height && (e.height = this.view.contentSize.height), e
                        }
                    }, {
                        key: "maxPrefabTotal",
                        get: function() {
                            return this._maxPrefabTotal
                        }
                    }, {
                        key: "itemTotal",
                        get: function() {
                            return this._itemTotal
                        }
                    }, {
                        key: "centerPosition",
                        get: function() {
                            var e, t, i;
                            if (!this._centerPosition)
                                if (this._centerPosition = new p, this.autoCenter) {
                                    if (this.centerNode && this.centerNode.parent && null != (e = this.centerNode.parent) && e._uiProps && null != (t = this.centerNode.parent) && null != (i = t._uiProps) && i.uiTransformComp) {
                                        var n, a, o, r = null == (n = this.centerNode.parent) || null == (a = n._uiProps) || null == (o = a.uiTransformComp) ? void 0 : o.convertToWorldSpaceAR(this.centerNode.position);
                                        this._centerPosition = this.view.convertToNodeSpaceAR(r)
                                    }
                                } else this.vertical ? this.indexVerticalAxisDirection == Ue.TOP ? this._centerPosition.y = this.viewHeaderBoundary : this._centerPosition.y = this.viewFooterBoundary : this.indexHorizontalAxisDirection == Be.LEFT ? this._centerPosition.x = this.viewHeaderBoundary : this._centerPosition.x = this.viewFooterBoundary;
                            return this._centerPosition
                        }
                    }]), t
                }(g)).VerticalAxisDirection = Me, be.HorizontalAxisDirection = Ge, te = t((ee = be).prototype, "scrollView", [y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), ie = t(ee.prototype, "view", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), ne = t(ee.prototype, "cloneNode", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), ae = t(ee.prototype, "layoutType", [A], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return Le.VERTICAL
                    }
                }), oe = t(ee.prototype, "indexVerticalAxisDirection", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return Ue.TOP
                    }
                }), re = t(ee.prototype, "indexHorizontalAxisDirection", [D], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return Be.LEFT
                    }
                }), se = t(ee.prototype, "verticalAxisDirection", [N], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return Me.TOP_TO_BOTTOM
                    }
                }), ce = t(ee.prototype, "horizontalAxisDirection", [O], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return Ge.LEFT_TO_RIGHT
                    }
                }), le = t(ee.prototype, "groupItemTotal", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 1
                    }
                }), ue = t(ee.prototype, "multiple", [L], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 2
                    }
                }), de = t(ee.prototype, "paddingTop", [M], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), _e = t(ee.prototype, "paddingBottom", [G], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), he = t(ee.prototype, "paddingLeft", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), pe = t(ee.prototype, "paddingRight", [U], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), fe = t(ee.prototype, "spacingX", [B], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), me = t(ee.prototype, "spacingY", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), ge = t(ee.prototype, "affectedByScale", [H], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Ee = t(ee.prototype, "isPageView", [F], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), ve = t(ee.prototype, "pageTurningSpeed", [q], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return .3
                    }
                }), Te = t(ee.prototype, "indicator", [V], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), Re = t(ee.prototype, "scrollThreshold", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return .5
                    }
                }), Pe = t(ee.prototype, "autoPageTurningThreshold", [W], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 100
                    }
                }), ye = t(ee.prototype, "pageEvents", [Y], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), Ce = t(ee.prototype, "autoCenter", [j], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Se = t(ee.prototype, "centerTime", [K], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 1
                    }
                }), Ae = t(ee.prototype, "centerNode", [Q], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), Ie = t(ee.prototype, "centerAnchor", [J], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new f(.5, .5)
                    }
                }), De = t(ee.prototype, "headerLoop", [z], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Ne = t(ee.prototype, "footerLoop", [X], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Oe = t(ee.prototype, "refreshItemEvents", [Z], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), $ = ee)) || $) || $) || $)), s._RF.pop()
        }
    }
}))