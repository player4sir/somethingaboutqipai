System.register("chunks:///_virtual/FXJPBAdaptive3.ts", ["cc", "./pbkiller.ts", "./FXJCmd3.ts", "./FXJPB3.ts"], (function(e) {
    var t, n, a, i, o;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.error
        }, function(e) {
            a = e.pbkiller
        }, function(e) {
            i = e.FXJPBPackageID
        }, function(e) {
            o = e.FXJPB
        }],
        execute: function() {
            t._RF.push({}, "d399cI3ZLhL57fOe4bZ44+I", "FXJPBAdaptive", void 0), e("FXJPBAdaptive", function() {
                function e(e) {
                    var t;
                    this._pbPackageConf = ((t = {})[i.Common] = {
                        FilePath: "subGames/xuazhanMj/Common.proto",
                        Class: o,
                        PackageName: i.Common
                    }, t[i.Game] = {
                        FilePath: "subGames/xuazhanMj/Game.proto",
                        Class: o,
                        PackageName: i.Game
                    }, t), this._pbPackageClassMapping = new Map
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e("FXJPBAdaptive")), this._instance
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
                    return this._pbPackageClassMapping.get(e) || (n(e + " 包名未配置 或找不到文件"), null)
                }, t.encodePacket = function(e, t, a) {
                    if (void 0 === a && (a = null), null == t) return null;
                    var i = this.findPBClass(t),
                        o = null;
                    return i ? o = i.encodeBody(e, a) : n("encodePacket: PB类找不到:" + t + " funcName = " + a), o
                }, t.decodePacket = function(e, t, a, i) {
                    if (void 0 === a && (a = null), void 0 === i && (i = null), !e || null == t) return null;
                    var o = this.findPBClass(t),
                        r = null;
                    return o ? r = o.decodeBody(e, a, i) : n("decodePacket: PB类找不到:" + t), r
                }, t.arrayBufferToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.byteLength)) return null;
                    var n, a = [],
                        i = null;
                    if (t) {
                        n = new Int8Array(e);
                        for (var o = 0; o < n.byteLength; o++) a[o] = n[o];
                        i = this.bytesToByteBuffer(a, t)
                    } else {
                        n = new Uint8Array(e);
                        for (var r = 0; r < n.byteLength; r++) a[r] = n[r];
                        i = this.bytesToByteBuffer(a, t)
                    }
                    return i
                }, t.byteBufferToArrayBuffer = function(e) {
                    return e && 0 != a.ByteBuffer.isByteBuffer(e) ? (e.clear(), e.toBuffer()) : null
                }, t.bytesToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.length)) return null;
                    var n = new a.ByteBuffer(e.length);
                    if (t)
                        for (var i = 0; i < e.length; i++) n.writeInt8(e[i], i);
                    else
                        for (var o = 0; o < e.length; o++) n.writeUint8(e[o], o);
                    return n.clear(), n
                }, t.byteBufferToBytes = function(e, t) {
                    if (void 0 === t && (t = !1), !e || 0 == a.ByteBuffer.isByteBuffer(e)) return null;
                    var n, i = [],
                        o = this.byteBufferToArrayBuffer(e);
                    if (o)
                        if (t) {
                            n = new Int8Array(o);
                            for (var r = 0; r < n.byteLength; r++) i[r] = n[r]
                        } else {
                            n = new Uint8Array(o);
                            for (var s = 0; s < n.byteLength; s++) i[s] = n[s]
                        } return i
                }, e
            }())._instance = null, t._RF.pop()
        }
    }
}))