System.register("chunks:///_virtual/TableView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TableCell.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized, o = e.createClass
        }, function(e) {
            r = e.cclegacy, s = e._decorator, c = e.ScrollView, l = e.Prefab, u = e.CCInteger, d = e.Node, _ = e.NodeEventType, h = e.Vec2, p = e.UITransform, f = e.instantiate, m = e.Component
        }, function(e) {
            g = e.TableCell
        }],
        execute: function() {
            var E, v, T, R, P, y, C, S;
            r._RF.push({}, "b59f7rWFytDnKypG1eRWDZ5", "TableView", void 0);
            var A = s.ccclass,
                I = s.property,
                D = s.requireComponent;
            e("default", (E = A("TableView"), v = D(c), T = I(l), R = I(u), E(P = v((C = t((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, n(t, "itemPrefab", C, a(t)), n(t, "space", S, a(t)), t._data = [], t._freedCells = [], t._usedCells = [], t._cellsPositions = [], t._scrollView = void 0, t._isVertical = void 0, t.scrollOffset = void 0, t.content = void 0, t._delegate = null, t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    this._scrollView = this.getComponent(c), this.content = this._scrollView.content, this._isVertical = this._scrollView.vertical, this.node.on(d.EventType.SIZE_CHANGED, this._resetShowingCell, this), this.content.on(_.TRANSFORM_CHANGED, this._resetShowingCell, this), this.setData(this._data)
                }, r.getCellByIndex = function(e) {
                    for (var t = 0; t < this._usedCells.length; t++) {
                        var i = this._usedCells[t],
                            n = this._getTableCellComponent(i);
                        if (n && n.index === e) return i
                    }
                }, r.getData = function() {
                    return this._data
                }, r.setData = function(e) {
                    var t = this;
                    if (this._data = e, this._scrollView) {
                        this._usedCells.forEach((function(e) {
                            t._setItemPosToUnusePos(e), t._freedCells.push(e)
                        })), this._usedCells = [];
                        var i, n = new h(this.space / 2, this.space / 2);
                        this._cellsPositions[0] = n;
                        for (var a = 1; a <= this._data.length; a++) i = this._getCellSize(a - 1), a === this._data.length ? this._cellsPositions[a] = i.add(n).add(new h(this.space / 2, this.space / 2)) : this._cellsPositions[a] = i.add(n).add(new h(this.space, this.space)), n = this._cellsPositions[a];
                        this._updateContentSizeAndResetShowingCell(!0)
                    }
                }, r.getCellComponentByIndex = function(e) {
                    for (var t = 0; t < this._usedCells.length; t++) {
                        var i = this._getTableCellComponent(this._usedCells[t]);
                        if (i.index == e) return i
                    }
                }, r.updateCellByIndex = function(e, t) {
                    void 0 === t && (t = 1);
                    for (var i = Math.min(e + t - 1, this._data.length - 1), n = 0; n < this._usedCells.length; n++) {
                        var a = this._getTableCellComponent(this._usedCells[n]);
                        a.index >= e && a.index <= i && a.updateData(this._data[a.index], this._data)
                    }
                    for (var o = this._cellsPositions[i + 1], r = e; r <= i; r++) {
                        var s = this._getCellSize(r);
                        r === this._data.length - 1 ? s.add(new h(this.space / 2, this.space / 2)) : s.add(new h(this.space, this.space)), this._cellsPositions[r + 1] = s.add(this._cellsPositions[r])
                    }
                    if (o !== this._cellsPositions[i + 1]) {
                        for (var c = new h(this._cellsPositions[i + 1]).subtract(o), l = i + 2; l <= this._cellsPositions.length - 1; l++) this._cellsPositions[l].add(c);
                        this._updateContentSizeAndResetShowingCell(!0)
                    }
                    for (var u = 0; u < this._usedCells.length; u++) this._setItemPosByIndex(this._getTableCellComponent(this._usedCells[u]).index, this._usedCells[u])
                }, r.insertData = function(e, t) {
                    var i, n, a = this;
                    if (void 0 === t && (t = 0), !(e.length <= 0)) {
                        t = Math.min(t, this._data.length);
                        var o = [],
                            r = new h(this._cellsPositions[t]);
                        (i = this._data).splice.apply(i, [t, 0].concat(e));
                        for (var s = 0; s <= e.length - 1; s++) {
                            o[s] = r;
                            var c = this._getCellSize(t + s);
                            r = s == e.length - 1 && t == this._data.length ? new h(c).add(r).add(new h(this.space / 2, this.space / 2)) : new h(c).add(r).add(new h(this.space, this.space))
                        }
                        for (var l = new h(r.x - o[0].x, r.y - o[0].y), u = t; u < this._cellsPositions.length; u++) this._cellsPositions[u].add(l);
                        (n = this._cellsPositions).splice.apply(n, [t, 0].concat(o)), this._usedCells.forEach((function(e) {
                            a._setItemPosToUnusePos(e), a._freedCells.push(e)
                        })), this._usedCells = [], this._updateContentSizeAndResetShowingCell(!0)
                    }
                }, r._updateContentSizeAndResetShowingCell = function(e) {
                    void 0 === e && (e = null);
                    var t = this.content.parent.getComponent(p),
                        i = this._isVertical ? t.width : this._cellsPositions[this._cellsPositions.length - 1].x,
                        n = this._isVertical ? this._cellsPositions[this._cellsPositions.length - 1].y : t.height;
                    i = Math.max(i, t.width), n = Math.max(n, t.height);
                    var a = this.content.getComponent(p);
                    i == a.width && n == a.height ? e && this._resetShowingCell() : (a.setContentSize(i, n), this._resetShowingCell())
                }, r._getScrollOffset = function() {
                    var e, t = this.content.getComponent(p),
                        i = t.node.parent.getComponent(p),
                        n = t.node.getPosition();
                    return this._isVertical ? (e = t.height * (1 - t.anchorY) - i.height * (1 - i.anchorY) + n.y, new h(0, e)) : (e = t.width * t.anchorX - i.width * i.anchorX - n.x, new h(e, 0))
                }, r._onScrolling = function() {
                    if (!(this._cellsPositions.length <= 0)) {
                        var e = this.scrollOffset,
                            t = this._getScrollOffset();
                        this.scrollOffset = t;
                        var i = this._getTableCellComponent(this._usedCells[0]),
                            n = this._getTableCellComponent(this._usedCells[this._usedCells.length - 1]),
                            a = i.index,
                            o = n.index;
                        if (e > t) {
                            for (var r = i.index; r >= 0 && this._checkIndexShow(r, t); r--) a = r;
                            for (var s = n.index; s > a; s--)
                                if (this._checkIndexShow(s, t)) {
                                    o = s;
                                    break
                                }
                        } else {
                            for (var c = n.index; c < this._data.length && this._checkIndexShow(c, t); c++) o = c;
                            for (var l = i.index; l < o; l++)
                                if (this._checkIndexShow(l, t)) {
                                    a = l;
                                    break
                                }
                        }
                        this._updateShowingCell(a, o)
                    }
                }, r._checkIndexShow = function(e, t) {
                    var i, n = this.content.parent.getComponent(p).contentSize,
                        a = this._isVertical ? n.height : n.width,
                        o = this._isVertical ? t.y : t.x,
                        r = this._isVertical ? "y" : "x",
                        s = this._cellsPositions[e][r];
                    return i = e + 1 == this._cellsPositions.length ? this._cellsPositions[e + 1][r] - this.space / 2 : this._cellsPositions[e + 1][r] - this.space, s <= o + a && i >= o
                }, r._updateShowingCell = function(e, t) {
                    for (var i = this._usedCells.length - 1; i >= 0; i--) {
                        var n = this._usedCells[i],
                            a = this._getTableCellComponent(n).index;
                        (a < e || a > t) && (this._setItemPosToUnusePos(n), this._freedCells.push(this._usedCells.splice(i, 1)[0]))
                    }
                    if (this._usedCells.length > 0) {
                        var o, r;
                        o = this._getTableCellComponent(this._usedCells[0]).index, r = this._getTableCellComponent(this._usedCells[this._usedCells.length - 1]).index;
                        for (var s = e; s < o; s++) this._updateCellAtIndex(s);
                        for (var c = r + 1; c <= t; c++) this._updateCellAtIndex(c)
                    } else
                        for (var l = e; l <= t; l++) this._updateCellAtIndex(l)
                }, r._resetShowingCell = function() {
                    if (this.itemPrefab && !(this._data.length <= 0)) {
                        var e = this.content.parent.getComponent(p),
                            t = this._getScrollOffset();
                        this.scrollOffset = t;
                        var i = this._indexFromOffset(t, !0),
                            n = new h(e.width, e.height).add(t),
                            a = this._indexFromOffset(n, !1);
                        this._updateShowingCell(i, a)
                    }
                }, r._indexFromOffset = function(e, t) {
                    var i = 0,
                        n = this._data.length - 1,
                        a = this._isVertical ? e.y : e.x,
                        o = this._isVertical ? "y" : "x";
                    if (e < this._cellsPositions[0][o]) return 0;
                    if (e > this._cellsPositions[this._cellsPositions.length - 1][o]) return this._data.length - 1;
                    for (; n >= i;) {
                        var r = Math.floor(i + (n - i) / 2),
                            s = this._cellsPositions[r][o],
                            c = this._cellsPositions[r + 1][o];
                        if (t && (s -= this.space, c -= this.space), a >= s && a <= c) return r;
                        a < s ? n = r - 1 : i = r + 1
                    }
                    return i <= 0 ? 0 : this._data.length - 1
                }, r._updateCellAtIndex = function(e) {
                    var t = this._data.length;
                    if (!(0 == t || e > t - 1)) {
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
                    return this._freedCells.length > 0 && (e = this._freedCells.pop()), e || (e = f(this.itemPrefab)) && (this._getTableCellComponent(e).delegate = this.delegate, e.parent = this.content), e
                }, r._setIndexForCell = function(e, t) {
                    this._setItemPosByIndex(e, t);
                    var i = this._getTableCellComponent(t);
                    i.index = e, i.updateData && i.updateData(this._data[e], this._data)
                }, r._setItemPosByIndex = function(e, t) {
                    var i = this.content.getComponent(p),
                        n = t.getComponent(p).anchorPoint,
                        a = this._cellsPositions[e + 1].x - this._cellsPositions[e].x,
                        o = this._cellsPositions[e + 1].y - this._cellsPositions[e].y;
                    e == this._data.length - 1 ? (a -= this.space / 2, o -= this.space / 2) : (a -= this.space, o -= this.space);
                    var r, s, c = i.anchorPoint,
                        l = i.contentSize;
                    this._isVertical ? (r = l.width * (1 - c.x) - a * (1 - n.x) - (l.width - a) / 2, s = this._cellsPositions[e].y, s = l.height * (1 - c.y) - o * (1 - n.y) - s) : (r = this._cellsPositions[e].x, r = a * n.x - l.width * c.x + r, s = l.height * (1 - c.y) - o * (1 - n.y) - (l.height - o) / 2), t.setPosition(r, s)
                }, r._setItemPosToUnusePos = function(e) {
                    var t, i, n = this.content.getComponent(p),
                        a = e.getComponent(p),
                        o = a.anchorPoint,
                        r = a.contentSize,
                        s = n.anchorPoint,
                        c = n.contentSize;
                    this._isVertical ? (t = -r.width - 100, t -= c.width * s.x - r.width * o.x, i = 0) : (i = -r.height - 100, i = c.height * (1 - s.y) - r.height * (1 - o.y) - i, t = 0), e.setPosition(t, i)
                }, r._getTableCellComponent = function(e) {
                    if (e) return e.getComponent(g)
                }, r._getCellSize = function(e) {
                    return this.itemPrefab.data.getComponent(g).getCellSize(this._data[e])
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
            }), S = t(y.prototype, "space", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), P = y)) || P) || P)), r._RF.pop()
        }
    }
}))