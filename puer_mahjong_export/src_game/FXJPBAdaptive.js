System.register("chunks:///_virtual/FXJPBAdaptive.ts", ["cc", "./pbkiller.ts", "./FXJCmd.ts", "./FXJPB.ts"], (function(e) {
    var t, n, i, a, o;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.error
        }, function(e) {
            i = e.pbkiller
        }, function(e) {
            a = e.FXJPBPackageID
        }, function(e) {
            o = e.FXJPB
        }],
        execute: function() {
            t._RF.push({}, "3e17bYmnkJPI5h6lG96MRbV", "FXJPBAdaptive", void 0), e("FXJPBAdaptive", function() {
                function e(e) {
                    var t;
                    this._pbPackageConf = ((t = {})[a.Common] = {
                        FilePath: "fxj/Common.proto",
                        Class: o,
                        PackageName: a.Common
                    }, t[a.Game] = {
                        FilePath: "fxj/Game.proto",
                        Class: o,
                        PackageName: a.Game
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
                }, t.encodePacket = function(e, t, i) {
                    if (void 0 === i && (i = null), null == t) return null;
                    var a = this.findPBClass(t),
                        o = null;
                    return a ? o = a.encodeBody(e, i) : n("encodePacket: PB类找不到:" + t + " funcName = " + i), o
                }, t.decodePacket = function(e, t, i, a) {
                    if (void 0 === i && (i = null), void 0 === a && (a = null), !e || null == t) return null;
                    var o = this.findPBClass(t),
                        r = null;
                    return o ? r = o.decodeBody(e, i, a) : n("decodePacket: PB类找不到:" + t), r
                }, t.arrayBufferToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.byteLength)) return null;
                    var n, i = [],
                        a = null;
                    if (t) {
                        n = new Int8Array(e);
                        for (var o = 0; o < n.byteLength; o++) i[o] = n[o];
                        a = this.bytesToByteBuffer(i, t)
                    } else {
                        n = new Uint8Array(e);
                        for (var r = 0; r < n.byteLength; r++) i[r] = n[r];
                        a = this.bytesToByteBuffer(i, t)
                    }
                    return a
                }, t.byteBufferToArrayBuffer = function(e) {
                    return e && 0 != i.ByteBuffer.isByteBuffer(e) ? (e.clear(), e.toBuffer()) : null
                }, t.bytesToByteBuffer = function(e, t) {
                    if (void 0 === t && (t = !1), !e || null == (null == e ? void 0 : e.length)) return null;
                    var n = new i.ByteBuffer(e.length);
                    if (t)
                        for (var a = 0; a < e.length; a++) n.writeInt8(e[a], a);
                    else
                        for (var o = 0; o < e.length; o++) n.writeUint8(e[o], o);
                    return n.clear(), n
                }, t.byteBufferToBytes = function(e, t) {
                    if (void 0 === t && (t = !1), !e || 0 == i.ByteBuffer.isByteBuffer(e)) return null;
                    var n, a = [],
                        o = this.byteBufferToArrayBuffer(e);
                    if (o)
                        if (t) {
                            n = new Int8Array(o);
                            for (var r = 0; r < n.byteLength; r++) a[r] = n[r]
                        } else {
                            n = new Uint8Array(o);
                            for (var s = 0; s < n.byteLength; s++) a[s] = n[s]
                        } return a
                }, e
            }())._instance = null, t._RF.pop()
        }
    }
}))