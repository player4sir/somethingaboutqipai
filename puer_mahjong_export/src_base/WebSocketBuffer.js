System.register("chunks:///_virtual/WebSocketBuffer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Encrypto.ts", "./Int64.ts"], (function(e) {
    var t, i, n, a, o;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.Encrypt
        }, function(e) {
            o = e.Int64
        }],
        execute: function() {
            i._RF.push({}, "5de6cMDg0JL0qhp/8Cv+g/G", "WebSocketBuffer", void 0);
            var r = {},
                s = function() {
                    var e = new ArrayBuffer(2),
                        t = new Uint8Array(e),
                        i = new Uint16Array(e);
                    if (t[0] = 170, t[1] = 187, 48042 === i[0]) return !0;
                    if (43707 === i[0]) return !1;
                    throw new Error("大小端检测异常")
                },
                c = 0,
                l = function() {
                    function e(e) {
                        this.isLocalLittleEndian = !1, console.log(e + " 初始化"), this.isLocalLittleEndian = s()
                    }
                    e.instance = function() {
                        return this._instance && null != this._instance || (this._instance = new e("WriteBuffer")), this._instance
                    };
                    var i = e.prototype;
                    return i.newPacket = function(e, t) {
                        void 0 === t && (t = !1);
                        var i = {
                                isLittleEndian: t,
                                byteArray: new Array,
                                readByteArray: new Array
                            },
                            n = this.PacketID;
                        return r[n] = i, n
                    }, i.insertPacket = function(e, t) {
                        if (void 0 === t && (t = !1), !e) return null;
                        for (var i = {
                                isLittleEndian: t,
                                byteArray: new Array,
                                readByteArray: new Array
                            }, n = new DataView(e, 0), a = n.buffer.slice(0, n.buffer.byteLength), o = new Int8Array(a), s = 0; s < o.byteLength; s++) i.byteArray.push(o[s]), i.readByteArray.push(o[s]);
                        var c = this.PacketID;
                        return r[c] = i, c
                    }, i.writeInt = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(4),
                                a = new DataView(n);
                            a.setInt32(0, t, i.isLittleEndian);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Int8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeInt64 = function(e, t) {
                        if (!e || !r[e]) return !1;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(8);
                            new DataView(n).setBigInt64(0, t, i.isLittleEndian);
                            for (var a = new Int8Array(n), o = 0; o < a.byteLength; o++) i.byteArray.push(a[o]), i.readByteArray.push(a[o]);
                            return !0
                        }
                    }, i.writeUInt = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(4),
                                a = new DataView(n);
                            a.setUint32(0, t, i.isLittleEndian);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Uint8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeShort = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(2),
                                a = new DataView(n);
                            a.setInt16(0, t);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Int8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeUShort = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(2),
                                a = new DataView(n);
                            a.setUint16(0, t);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Uint8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeByte = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(1),
                                a = new DataView(n);
                            a.setInt8(0, t);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Int8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeUByte = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e] && null != t) {
                            var i = r[e],
                                n = new ArrayBuffer(1),
                                a = new DataView(n);
                            a.setUint8(0, t);
                            for (var o = a.buffer.slice(0, a.buffer.byteLength), s = new Uint8Array(o), c = 0; c < s.byteLength; c++) i.byteArray.push(s[c]), i.readByteArray.push(s[c]);
                            return !0
                        }
                        return null
                    }, i.writeString = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e]) {
                            var i = 1,
                                o = 0,
                                s = a.stringToByte(t);
                            s && (o = s.length), o > 0 && (i += o), this.writeInt(e, i);
                            var c = new ArrayBuffer(i),
                                l = new DataView(c),
                                u = -1;
                            if (i > 1)
                                for (var d = 0; d < s.length; d++) u++, l.setUint8(d, s[d]);
                            u += 1, l.setUint8(u, n.string_codeToASCII("\0"));
                            for (var _ = l.buffer.slice(0, l.buffer.byteLength), h = new Uint8Array(_), p = r[e], f = 0; f < h.byteLength; f++) p.byteArray.push(h[f]), p.readByteArray.push(h[f]);
                            return !0
                        }
                    }, i.writeStringNoZeroEnd = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                        if (r[e]) {
                            var i = 0,
                                n = 0,
                                o = a.stringToByte(t, !1);
                            o && (n = o.length), n > 0 && (i += n), this.writeInt(e, i);
                            var s = new ArrayBuffer(i),
                                c = new DataView(s);
                            if (i > 0)
                                for (var l = 0; l < o.length; l++) c.setUint8(l, o[l]);
                            for (var u = c.buffer.slice(0, c.buffer.byteLength), d = new Uint8Array(u), _ = r[e], h = 0; h < d.byteLength; h++) _.byteArray.push(d[h]), _.readByteArray.push(d[h]);
                            return !0
                        }
                    }, t(e, [{
                        key: "PacketID",
                        get: function() {
                            return "PacketID_" + (c += 1)
                        }
                    }]), e
                }();
            l._instance = null;
            var u = function() {
                function e(e) {
                    this.isLocalLittleEndian = !1, console.log(e + " 初始化"), this.isLocalLittleEndian = s()
                }
                e.instance = function() {
                    return this._instance && null != this._instance || (this._instance = new e("ReadBuffer")), this._instance
                };
                var t = e.prototype;
                return t.readPacket = function(e, t, i, n) {
                    if (void 0 === e && (e = null), void 0 === t && (t = !1), void 0 === i && (i = !1), void 0 === n && (n = !1), !e) return null;
                    if (r[e]) {
                        var a, o, s = r[e],
                            c = 0;
                        1 == i ? (c = s.byteArray.length, a = s.byteArray.slice(0, c)) : (c = s.readByteArray.length, a = s.readByteArray.slice(0, c), 0 == t && s.readByteArray.splice(0, c)), o = 0 == n ? new Int8Array(a.length) : new Uint8Array(a.length);
                        for (var l = 0; l < o.length; l++) o[l] = a[l];
                        var u = o.buffer.slice(0, o.byteLength);
                        return new DataView(u)
                    }
                    return null
                }, t.syncPacket = function(e) {
                    if (void 0 === e && (e = null), !e) return !1;
                    if (r[e]) {
                        var t = r[e],
                            i = t.byteArray,
                            n = t.readByteArray;
                        n.length > i.length && (n = n.slice(0, i.length));
                        for (var a = 0; a < i.length; a++) n[a] = i[a];
                        return t.readByteArray = n, !0
                    }
                    return !1
                }, t.delPacket = function(e) {
                    return void 0 === e && (e = null), !!e && (r[e] && (r[e] = null), !0)
                }, t.readPacketOffset = function(e, t) {
                    if (void 0 === e && (e = null), !e) return !1;
                    if (r[e] && null != t && t > 0) {
                        var i = r[e];
                        return i.readByteArray.length - 1 <= t ? (i.readByteArray.splice(0, i.readByteArray.length), !0) : (i.readByteArray.splice(0, t + 1), !0)
                    }
                    return !1
                }, t.readInt = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = !1), !e) return null;
                    if (r[e]) {
                        var n = r[e];
                        if (n.readByteArray.length < 4) return null;
                        var a = n.readByteArray.slice(0, 4);
                        1 != i && n.readByteArray.splice(0, 4);
                        for (var o = new Int8Array(a.length), s = 0; s < o.length; s++) o[s] = a[s];
                        var c = o.buffer.slice(0, o.byteLength);
                        return new DataView(c).getInt32(0, null != t ? t : n.isLittleEndian)
                    }
                    return null
                }, t.readUInt = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = !1), !e) return null;
                    if (r[e]) {
                        var n = r[e];
                        if (n.readByteArray.length < 4) return null;
                        var a = n.readByteArray.slice(0, 4);
                        1 != i && n.readByteArray.splice(0, 4);
                        for (var o = new Uint8Array(a.length), s = 0; s < o.length; s++) o[s] = a[s];
                        var c = o.buffer.slice(0, o.byteLength);
                        return new DataView(c).getUint32(0, null != t ? t : n.isLittleEndian)
                    }
                    return null
                }, t.readInt64 = function(e) {
                    if (void 0 === e && (e = null), !e) return null;
                    if (r[e]) {
                        var t = r[e];
                        if (t.readByteArray.length < 8) return null;
                        var i = t.readByteArray.slice(0, 8);
                        t.readByteArray.splice(0, 8);
                        for (var n = new Uint8Array(i.length), a = 0; a < n.length; a++) n[a] = i[a];
                        return new o(n).toNumber()
                    }
                    return null
                }, t.readShort = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                    if (r[e]) {
                        var i = r[e];
                        if (i.readByteArray.length < 2) return null;
                        var n = i.readByteArray.slice(0, 2);
                        i.readByteArray.splice(0, 2);
                        for (var a = new Int8Array(n.length), o = 0; o < a.length; o++) a[o] = n[o];
                        var s = a.buffer.slice(0, a.byteLength);
                        return new DataView(s).getInt16(0, null != t ? t : i.isLittleEndian)
                    }
                    return null
                }, t.readUShort = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                    if (r[e]) {
                        var i = r[e];
                        if (i.readByteArray.length < 2) return null;
                        var n = i.readByteArray.slice(0, 2);
                        i.readByteArray.splice(0, 2);
                        for (var a = new Uint8Array(n.length), o = 0; o < a.length; o++) a[o] = n[o];
                        var s = a.buffer.slice(0, a.byteLength);
                        return new DataView(s).getUint16(0, null != t ? t : i.isLittleEndian)
                    }
                    return null
                }, t.readByte = function(e) {
                    if (void 0 === e && (e = null), !e) return null;
                    if (r[e]) {
                        var t = r[e];
                        if (t.readByteArray.length < 1) return null;
                        var i = t.readByteArray.slice(0, 1);
                        t.readByteArray.splice(0, 1);
                        for (var n = new Int8Array(i.length), a = 0; a < n.length; a++) n[a] = i[a];
                        var o = n.buffer.slice(0, n.byteLength);
                        return new DataView(o).getInt8(0)
                    }
                    return null
                }, t.readUByte = function(e) {
                    if (void 0 === e && (e = null), !e) return null;
                    if (r[e]) {
                        var t = r[e];
                        if (t.readByteArray.length < 1) return null;
                        var i = t.readByteArray.slice(0, 1);
                        t.readByteArray.splice(0, 1);
                        for (var n = new Uint8Array(i.length), a = 0; a < n.length; a++) n[a] = i[a];
                        var o = n.buffer.slice(0, n.byteLength);
                        return new DataView(o).getUint8(0)
                    }
                    return null
                }, t.readString = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                    if (r[e]) {
                        var i = r[e],
                            n = this.readPacket(e, !0);
                        if (!n || 0 == n.byteLength) return null;
                        try {
                            var o = n.getInt32(0, null != t ? t : i.isLittleEndian);
                            if (!o || n.byteLength - 4 < o) return console.log("Error：readString 读取的正文长度不存在 或 超出缓冲区长度，读取长度为:" + o + " 实际长度为:" + (n.byteLength - 4)), null;
                            var s = o - 1;
                            if (0 == s) return i.readByteArray.splice(0, 5), "";
                            if (s < 0) return console.log("Error：readString 读取的正文长度为负，正文长度数据有误 或 不是正文，读取长度为:" + o + " 实际长度为:" + (n.byteLength - 4)), null;
                            i.readByteArray.splice(0, 4 + o);
                            for (var c = n.buffer.slice(4, 4 + s), l = new Uint8Array(c), u = [], d = 0; d < l.byteLength; d++) u.push(l[d]);
                            return a.bytesToString(u)
                        } catch (t) {
                            console.log("Error：readString 读取正文长度数据失败，请检查数据包是否正常，数据包ID:" + e)
                        }
                    }
                    return null
                }, t.readStringNoZeroEnd = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), !e) return null;
                    if (r[e]) {
                        var i = r[e],
                            n = this.readPacket(e, !0);
                        if (!n || 0 == n.byteLength) return null;
                        try {
                            var o = 0;
                            try {
                                o = n.getInt32(0, null != t ? t : i.isLittleEndian)
                            } catch (t) {
                                console.log("Error：readStringNoZeroEnd 读取正文长度数据失败，请检查数据包是否正常，数据包ID:" + e)
                            }
                            if (!o || n.byteLength - 4 < o) return console.log("Error：readString 读取的正文长度不存在 或 超出缓冲区长度，读取长度为:" + o + " 实际长度为:" + (n.byteLength - 4)), null;
                            var s = o;
                            if (0 == s) return i.readByteArray.splice(0, 4), "";
                            if (s < 0) return console.log("Error：readString 读取的正文长度为负，正文长度数据有误 或 不是正文，读取长度为:" + o + " 实际长度为:" + (n.byteLength - 4)), null;
                            i.readByteArray.splice(0, 4 + o);
                            for (var c = n.buffer.slice(4, 4 + s), l = new Uint8Array(c), u = [], d = 0; d < l.byteLength; d++) u.push(l[d]);
                            return a.bytesToString(u, !1)
                        } catch (t) {
                            return console.log("Error：readStringNoZeroEnd 读取字符串失败，请检查数据包是否正确，数据包ID:" + e), null
                        }
                    }
                    return null
                }, e
            }();
            u._instance = null;
            var d = e("WebSocketBuffer", function() {
                function e() {}
                return t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }, {
                    key: "Write",
                    get: function() {
                        return this._Write && null != this._Write || (this._Write = l.instance()), this._Write
                    }
                }, {
                    key: "Read",
                    get: function() {
                        return this._Read && null != this._Read || (this._Read = u.instance()), this._Read
                    }
                }]), e
            }());
            d._instance = void 0, d._Read = void 0, d._Write = void 0, d.isLocalLittleEndian = s(), i._RF.pop()
        }
    }
}))