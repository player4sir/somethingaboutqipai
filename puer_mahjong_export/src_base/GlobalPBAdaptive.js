System.register("chunks:///_virtual/GlobalPBAdaptive.ts", ["cc", "./Utils.ts", "./pbkiller.ts", "./Encrypto.ts", "./WebSocketBuffer.ts", "./GlobalCmdPBConfig.ts", "./GlobalPB.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e.error
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.pbkiller
        }, function(e) {
            o = e.Encrypt
        }, function(e) {
            r = e.WebSocketBuffer
        }, function(e) {
            s = e.GlobalPBCmdBinding
        }, function(e) {
            c = e.GlobalPB
        }],
        execute: function() {
            t._RF.push({}, "1da79DUjYxDnopL3zGsDzxD", "GlobalPBAdaptive", void 0), e("GlobalPBAdaptive", function() {
                function e(e) {
                    var t;
                    this._pbPackageConf = ((t = {}).Access = {
                        FilePath: "common/Access.proto",
                        Class: c,
                        PackageName: "Access"
                    }, t), this._pbPackageClassMapping = new Map, console.log(e + "实例化...")
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e("GlobalPBAdaptive")), this._instance
                };
                var t = e.prototype;
                return t.__reloadPBConf = function(e) {
                    if (!e || !e.Class) return !1;
                    var t = new e.Class(e.PackageName);
                    return t.reloadPB(e), this._pbPackageClassMapping.set(e.PackageName, t), !0
                }, t.startReloadPBList = function() {
                    for (var e in this._pbPackageConf)
                        if (Object.prototype.hasOwnProperty.call(this._pbPackageConf, e)) {
                            var t = this._pbPackageConf[e];
                            this.__reloadPBConf(t)
                        }
                }, t.findPBClass = function(e) {
                    return this._pbPackageClassMapping.get(e) || (i(e + " 包名未配置 或找不到文件"), null)
                }, t.encodePacket = function(e, t, n) {
                    if (void 0 === n && (n = null), null == t) return null;
                    var a = this.findPBClass(t),
                        o = null;
                    return a ? o = a.encodeBody(e, n) : i("encodePacket: PB类找不到:" + t + " funcName = " + n), o
                }, t.decodePacket = function(e, t, n, a) {
                    if (void 0 === n && (n = null), void 0 === a && (a = null), !e || null == t) return null;
                    var o = this.findPBClass(t),
                        r = null;
                    return o ? r = o.decodeBody(e, n, a) : i("decodePacket: PB类找不到:" + t), r
                }, t.arrayBufferToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.byteLength)) return null;
                    var i, n = [],
                        a = null;
                    if (t) {
                        i = new Int8Array(e);
                        for (var o = 0; o < i.byteLength; o++) n[o] = i[o];
                        a = this.bytesToByteBuffer(n, t)
                    } else {
                        i = new Uint8Array(e);
                        for (var r = 0; r < i.byteLength; r++) n[r] = i[r];
                        a = this.bytesToByteBuffer(n, t)
                    }
                    return a
                }, t.byteBufferToArrayBuffer = function(e) {
                    return e && 0 != a.ByteBuffer.isByteBuffer(e) ? (e.clear(), e.toBuffer()) : null
                }, t.bytesToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.length)) return null;
                    var i = new a.ByteBuffer(e.length);
                    if (t)
                        for (var n = 0; n < e.length; n++) i.writeInt8(e[n], n);
                    else
                        for (var o = 0; o < e.length; o++) i.writeUint8(e[o], o);
                    return i.clear(), i
                }, t.byteBufferToBytes = function(e, t) {
                    if (void 0 === t && (t = !1), !e || 0 == a.ByteBuffer.isByteBuffer(e)) return null;
                    var i, n = [],
                        o = this.byteBufferToArrayBuffer(e);
                    if (o)
                        if (t) {
                            i = new Int8Array(o);
                            for (var r = 0; r < i.byteLength; r++) n[r] = i[r]
                        } else {
                            i = new Uint8Array(o);
                            for (var s = 0; s < i.byteLength; s++) n[s] = i[s]
                        } return n
                }, e.WritePB = function(t, a, c) {
                    if (c.isCompress = !1, s.REQ[t]) {
                        var l = s.REQ[t].packageID,
                            u = s.REQ[t].funcName;
                        if (l && u) {
                            var d = e.getInstance().encodePacket(c.data, l, u),
                                _ = o.arrayBufferToString(d, !1, !1);
                            _ ? r.Write.writeStringNoZeroEnd(a, _) : i("[GPBWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + n.number_formatToHex(t) + ",包装函数为 = " + u)
                        } else i("[GPBWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + n.number_formatToHex(t) + ",包装函数为 = " + u)
                    }
                    return c.data = "", c
                }, e.ReadPB = function(t, a) {
                    console.log("GPBWriteAndRead:ReadPB pb读===>", ",HeadCmd[16进制] = " + n.number_formatToHex(t));
                    var c = function(e) {
                        return e && r.Read.readPacket(e, !0) || null
                    }(a);
                    if (!c) return null;
                    var l = null;
                    if (s.RESP[t]) {
                        var u = s.RESP[t].packageID,
                            d = s.RESP[t].funcName;
                        if (u && d) {
                            var _ = r.Read.readStringNoZeroEnd(a),
                                h = o.stringToByte(_, !1);
                            if (h && h.length > 0) {
                                var p = e.getInstance().bytesToByteBuffer(h, !1);
                                l = e.getInstance().decodePacket(p, u, d)
                            }
                        }
                        l || (i("[GPBWriteAndRead]:ReadPB 解析包装的数据结构体为空 ,HeadCmd[16进制] = " + n.number_formatToHex(t) + ",解析函数为 = " + d), l = null)
                    }
                    return function(e, t, i, n) {
                        return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), {
                            headCmd: e,
                            action: t,
                            data: i,
                            buffer: n
                        }
                    }(t, null, l, c)
                }, e
            }())._instance = null, t._RF.pop()
        }
    }
}))