System.register("chunks:///_virtual/Int64.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            t._RF.push({}, "b40dfvw1cxD2aGaid1ItZgg", "Int64", void 0);
            var i = e("Int64", function() {
                function e(e, t) {
                    this.buffer = void 0, this.offset = void 0, this._buildHex(), e instanceof Array ? (this.buffer = e, this.offset = t || 0) : "[object Uint8Array]" == Object.prototype.toString.call(e) ? (this.buffer = Array.apply([], e), this.offset = t || 0) : (this.buffer = this.buffer || [], this.offset = 0, this.setValue.apply(this, arguments))
                }
                var t = e.prototype;
                return t._buildHex = function() {
                    for (var t = 0; t < 256; t++) e._HEX[t] = (t > 15 ? "" : "0") + t.toString(16)
                }, t._2scomp = function() {
                    for (var e = this.buffer, t = this.offset, i = 1, n = t + 7; n >= t; n--) {
                        var a = (255 ^ e[n]) + i;
                        e[n] = 255 & a, i = a >> 8
                    }
                }, t.setValue = function(t, i) {
                    var n = !1;
                    if (1 == arguments.length)
                        if ("number" == typeof t) {
                            if (n = t < 0, i = (t = Math.abs(t)) % e.VAL32, (t /= e.VAL32) > e.VAL32) throw new RangeError(t + " is outside Int64 range");
                            t |= 0
                        } else {
                            if ("string" != typeof t) throw new Error(t + " must be a Number or String");
                            i = (t = (t + "").replace(/^0x/, "")).substr(-8), t = t.length > 8 ? t.substr(0, t.length - 8) : "", t = parseInt(t, 16), i = parseInt(i, 16)
                        } for (var a = this.buffer, o = this.offset, r = 7; r >= 0; r--) a[o + r] = 255 & i, i = 4 == r ? t : i >>> 8;
                    n && this._2scomp()
                }, t.toNumber = function(t) {
                    void 0 === t && (t = !1);
                    for (var i = this.buffer, n = this.offset, a = 128 & i[n], o = 0, r = 1, s = 7, c = 1; s >= 0; s--, c *= 256) {
                        var l = i[n + s];
                        a && (r = (l = (255 ^ l) + r) >> 8, l &= 255), o += l * c
                    }
                    return !t && o >= e.MAX_INT ? a ? -1 / 0 : 1 / 0 : a ? -o : o
                }, t.valueOf = function() {
                    return this.toNumber(!1)
                }, t.toString = function(e) {
                    return void 0 === e && (e = 10), this.valueOf().toString(e)
                }, t.toOctetString = function(t) {
                    void 0 === t && (t = "");
                    for (var i = new Array(8), n = this.buffer, a = this.offset, o = 0; o < 8; o++) i[o] = e._HEX[n[a + o]];
                    return i.join(t || "")
                }, t.toBuffer = function(e) {
                    return void 0 === e && (e = !1), e && 0 === this.offset ? this.buffer : Array.call([], this.buffer)
                }, t.compare = function(e) {
                    if ((128 & this.buffer[this.offset]) != (128 & e.buffer[e.offset])) return e.buffer[e.offset] - this.buffer[this.offset];
                    for (var t = 0; t < 8; t++)
                        if (this.buffer[this.offset + t] !== e.buffer[e.offset + t]) return this.buffer[this.offset + t] - e.buffer[e.offset + t];
                    return 0
                }, t.equals = function(e) {
                    return 0 === this.compare(e)
                }, t.inspect = function() {
                    return "[Int64 value:" + this + " octets:" + this.toOctetString(" ") + "]"
                }, e
            }());
            i.MASK31 = 2147483647, i.VAL31 = 2147483648, i.MASK32 = 4294967295, i.VAL32 = 4294967296, i.MAX_INT = Math.pow(2, 53), i.MIN_INT = -Math.pow(2, 53), i._HEX = new Array, t._RF.pop()
        }
    }
}))