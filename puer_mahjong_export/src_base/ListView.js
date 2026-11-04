System.register("chunks:///_virtual/ListView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TableCell.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.ScrollView, l = e.Prefab, u = e.CCInteger, d = e.CCFloat, _ = e.Node, h = e.NodeEventType, p = e.UITransform, f = e.instantiate, m = e.Component
        }, function(e) {
            g = e.TableCell
        }],
        execute: function() {
            var E, v, T, R, P, y, C, S, A, I, D, N;
            r._RF.push({}, "175a81qCD9Ec7u47+aEK2tG", "ListView", void 0);
            var O = s.ccclass,
                b = s.property,
                L = s.requireComponent;
            e("default", (E = O("ListView"), v = L(c), T = b(l), R = b({
                type: u,
                tooltip: "一行有几个，如果设置为0，则自动计算"
            }), P = b({
                type: u || d,
                tooltip: "固定方向的间距，即不能滚动的方向的cell的间距。-1为自动计算"
            }), y = b({
                type: u || d,
                tooltip: "滚动的方向(跟固定方向垂直的方向)的cell的间距"
            }), E(C = v((A = t((S = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "itemPrefab", A, a(t)), n(t, "row", I, a(t)), n(t, "spaceFixDirction", D, a(t)), n(t, "spaceScrollDirction", N, a(t)), t.headFixDirctionSpace = -1, t.headScrollDirction = -1, t.itemSize = null, t._scrollView = void 0, t._isVertical = void 0, t._data = [], t._usedCells = [], t._freedCells = [], t.originCfg = {}, t.content = void 0, t.scrollOffset = void 0, t._delegate = null, t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this._scrollView = this.getComponent(c), this._isVertical = this._scrollView.vertical, this.content = this._scrollView.content, this.node.on(_.EventType.TRANSFORM_CHANGED, this._resetShowingCell, this), this.content.on(h.TRANSFORM_CHANGED, this._resetShowingCell, this), this.content.parent.on(h.SIZE_CHANGED, this.resetOnSizeChanged, this), this.originCfg = {
                        row: this.row,
                        headScrollDirction: this.headScrollDirction,
                        spaceFixDirction: this.spaceFixDirction,
                        headFixDirctionSpace: this.headFixDirctionSpace
                    }, this.resetOnSizeChanged()
                }, r.resetOnSizeChanged = function() {
                    var e = this.itemPrefab.data.getComponent(p).contentSize;
                    this.itemSize = e;
                    var t = this.content.parent.getComponent(p);
                    if (this.originCfg.row <= 0 && (this.row = this._isVertical ? Math.floor(t.width / e.width) : Math.floor(t.height / e.height)), -1 === this.originCfg.headScrollDirction && (this.headScrollDirction = this.spaceScrollDirction / 2), -1 === this.originCfg.spaceFixDirction) {
                        var i = this._isVertical ? t.width - e.width * this.row : t.height - e.height * this.row;
                        this.spaceFixDirction = i / this.row
                    } - 1 === this.originCfg.headFixDirctionSpace && (this.headFixDirctionSpace = this.spaceFixDirction / 2), this.setData(this._data)
                }, r.getCellByIndex = function(e) {
                    for (var t = 0; t < this._usedCells.length; t++) {
                        var i = this._usedCells[t],
                            n = this._getTableCellComponent(i);
                        if (n && n.index === e) return n
                    }
                }, r.getData = function() {
                    return this._data
                }, r.setData = function(e) {
                    var t = this;
                    this._data = e, this._scrollView && (this._usedCells.forEach((function(e) {
                        var i = t._getTableCellComponent(e);
                        i.resetCell && i.resetCell(), t._setItemPosToUnusePos(e), t._freedCells.push(e)
                    })), this._usedCells = [], this._updateContentSizeAndResetShowingCell(!0))
                }, r._updateContentSizeAndResetShowingCell = function(e) {
                    if (void 0 === e && (e = null), this.itemSize) {
                        var t, i, n = this.content.parent.getComponent(p),
                            a = Math.ceil(this._data.length / this.row);
                        this._isVertical ? (t = n.width, i = 2 * this.headScrollDirction + a * (this.spaceScrollDirction + this.itemSize.height) - this.spaceScrollDirction) : (t = 2 * this.headScrollDirction + a * (this.spaceScrollDirction + this.itemSize.width) - this.spaceScrollDirction, i = n.height), t = Math.max(t, n.width), i = Math.max(i, n.height);
                        var o = this.content.getComponent(p);
                        t == o.width && i == o.height ? e && this._resetShowingCell() : (o.setContentSize(t, i), this._resetShowingCell())
                    }
                }, r._resetShowingCell = function() {
                    if (this.itemPrefab && !(this._data.length <= 0) && this.itemSize) {
                        var e = this._getScrollOffset();
                        this.scrollOffset = e;
                        var t = this._getShowStartAndEndIndex(e),
                            i = t[0],
                            n = t[1];
                        this._updateShowingCell(i, n)
                    }
                }, r._getScrollOffset = function() {
                    var e = this.content.getComponent(p),
                        t = this.content.parent.getComponent(p),
                        i = this.content.getPosition();
                    return this._isVertical ? e.height * (1 - e.anchorY) - t.height * (1 - t.anchorY) + i.y : e.width * e.anchorX - t.width * t.anchorX - i.x
                }, r._getShowStartAndEndIndex = function(e) {
                    var t = this.itemSize[this._isVertical ? "height" : "width"],
                        i = (e - this.headScrollDirction) / (t + this.spaceScrollDirction);
                    i = Math.floor(i), (e - this.headScrollDirction) % (t + this.spaceScrollDirction) >= t && i++;
                    var n = this.content.parent.getComponent(p),
                        a = (e + (this._isVertical ? n.height : n.width) - this.headScrollDirction) / (this.itemSize[this._isVertical ? "height" : "width"] + this.spaceScrollDirction);
                    return a = Math.floor(a) + 1, i *= this.row, i = Math.min(this._data.length - 1, i), i = Math.max(0, i), a = a * this.row - 1, a = Math.min(this._data.length - 1, a), [i, a = Math.max(0, a)]
                }, r._updateShowingCell = function(e, t) {
                    for (var i = this, n = this._usedCells.length - 1; n >= 0; n--) {
                        var a = this._usedCells[n],
                            o = this._getTableCellComponent(a).index;
                        (o < e || o > t) && this._freedCells.push(this._usedCells.splice(n, 1)[0])
                    }
                    if (this._freedCells.forEach((function(e) {
                            i._setItemPosToUnusePos(e)
                        })), this._usedCells.length > 0) {
                        var r, s;
                        r = this._getTableCellComponent(this._usedCells[0]).index, s = this._getTableCellComponent(this._usedCells[this._usedCells.length - 1]).index;
                        for (var c = e; c < r; c++) this._updateCellAtIndex(c);
                        for (var l = s + 1; l <= t; l++) this._updateCellAtIndex(l)
                    } else
                        for (var u = e; u <= t; u++) this._updateCellAtIndex(u)
                }, r._updateCellAtIndex = function(e) {
                    var t = this._data.length;
                    if (!(0 == t || e > t - 1) && this.itemSize) {
                        var i = this._getDequeueCell(),
                            n = this._getTableCellComponent(i);
                        if (this._setIndexForCell(e, i), this._usedCells.length <= 0) this._usedCells.push(i);
                        else {
                            for (var a = !1, o = 0; o < this._usedCells.length; o++) {
                                var r = this._getTableCellComponent(this._usedCells[o]);
                                if (n.index < r.index) {
                                    a = !0, this._usedCells.splice(o, 0, i);
                                    break
                                }
                            }
                            a || this._usedCells.push(i)
                        }
                    }
                }, r._getDequeueCell = function() {
                    var e = null;
                    return this._freedCells.length > 0 && (e = this._freedCells.pop()), e || (e = f(this.itemPrefab)) && (this._getTableCellComponent(e).delegate = this.delegate, e.parent = this.content), e.active = !0, e
                }, r._setIndexForCell = function(e, t) {
                    this._setItemPosByIndex(e, t);
                    var i = this._getTableCellComponent(t);
                    i.index = e, i.updateData && i.updateData(this._data[e], this._data)
                }, r._setItemPosByIndex = function(e, t) {
                    var i, n, a = this.content.getComponent(p),
                        o = t.getComponent(p),
                        r = o.anchorPoint,
                        s = o.contentSize,
                        c = a.anchorPoint,
                        l = a.contentSize,
                        u = Math.ceil((e + 1) / this.row) - 1,
                        d = e % this.row;
                    this._isVertical ? (i = this.headFixDirctionSpace + d * (this.spaceFixDirction + this.itemSize.width), n = this.headScrollDirction + u * (this.spaceScrollDirction + this.itemSize.height)) : (n = this.headFixDirctionSpace + d * (this.spaceFixDirction + this.itemSize.height), i = this.headScrollDirction + u * (this.spaceScrollDirction + this.itemSize.width)), i -= l.width * c.x - s.width * r.x, n = l.height * (1 - c.y) - s.height * (1 - r.y) - n, t.setPosition(i, n)
                }, r._setItemPosToUnusePos = function(e) {
                    var t, i, n = this.content.getComponent(p),
                        a = e.getComponent(p),
                        o = a.anchorPoint,
                        r = a.contentSize,
                        s = n.anchorPoint,
                        c = n.contentSize;
                    this._isVertical ? (t = -this.itemSize.width - 100, t -= c.width * s.x - r.width * o.x, i = 0) : (i = -this.itemSize.height - 100, i = c.height * (1 - s.y) - r.height * (1 - o.y) - i, t = 0), e.setPosition(t, i), e.active = !1, "function" == typeof e.reset && e.reset()
                }, r._getTableCellComponent = function(e) {
                    if (e) return e.getComponent(g)
                }, o(t, [{
                    key: "delegate",
                    get: function() {
                        return this._delegate
                    },
                    set: function(e) {
                        var t = this;
                        this._delegate = e, this._usedCells.forEach((function(i) {
                            t._getTableCellComponent(i).delegate = e
                        })), this._freedCells.forEach((function(i) {
                            t._getTableCellComponent(i).delegate = e
                        }))
                    }
                }]), t
            }(m)).prototype, "itemPrefab", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), I = t(S.prototype, "row", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), D = t(S.prototype, "spaceFixDirction", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return -1
                }
            }), N = t(S.prototype, "spaceScrollDirction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), C = S)) || C) || C)), r._RF.pop()
        }
    }
}))