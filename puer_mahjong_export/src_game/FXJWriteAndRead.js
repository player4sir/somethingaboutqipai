System.register("chunks:///_virtual/FXJWriteAndRead.ts", ["cc", "./Utils.ts", "./Encrypto.ts", "./EventManager.ts", "./WebSocketBuffer.ts", "./FXJEvent.ts", "./FXJCmd.ts", "./FXJPBAdaptive.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.error
        }, function(e) {
            i = e.Utils
        }, function(e) {
            a = e.Encrypt
        }, function(e) {
            o = e.EventManager
        }, function(e) {
            r = e.WebSocketBuffer
        }, function(e) {
            s = e.FXJEvent
        }, function(e) {
            l = e.FXJCmdBinding
        }, function(e) {
            u = e.FXJPBAdaptive
        }],
        execute: function() {
            t._RF.push({}, "b570dlefCdEOYtPfFXkY0/l", "FXJWriteAndRead", void 0), e("FXJWriteAndRead", function() {
                function e(e) {
                    this.req_CmdMapping = {}, this.resp_CmdMapping = {}
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e("FXJWriteAndRead")), this._instance
                }, e.init = function() {
                    this._instance && (this._instance = null), e.getInstance()
                };
                var t = e.prototype;
                return t.initPB = function() {
                    u.getInstance().startReloadPBList();
                    var t = [],
                        n = [];
                    for (var i in l.REQ)
                        if (Object.prototype.hasOwnProperty.call(l.REQ, i)) {
                            var a = Number(i),
                                r = (l.REQ[a], {
                                    cmd: a,
                                    binding: e.WritePB
                                });
                            t.push(r)
                        } for (var d in l.RESP)
                        if (Object.prototype.hasOwnProperty.call(l.RESP, d)) {
                            var c = Number(d),
                                h = (l.RESP[c], {
                                    cmd: c,
                                    binding: e.ReadPB
                                });
                            n.push(h)
                        } o.dispatch(s.SYS_UPDATE_PROTOBUF, 0, n), o.dispatch(s.SYS_UPDATE_PROTOBUF, 1, t)
                }, t.initCMDMapping = function() {
                    var e = {};
                    for (var t in l.REQ)
                        if (Object.prototype.hasOwnProperty.call(l.REQ, t)) {
                            var n = Number(t),
                                i = l.REQ[n];
                            e[n] = i
                        } for (var a in l.RESP)
                        if (Object.prototype.hasOwnProperty.call(l.RESP, a)) {
                            var r = Number(a),
                                u = l.RESP[r];
                            e[r] = u
                        } o.dispatch(s.SYS_UPDATE_CMDMAPPING, e)
                }, e.WritePB = function(t, o, s) {
                    if (s.isCompress = !1, l.REQ[t]) {
                        var d = l.REQ[t].packageID,
                            c = l.REQ[t].funcName;
                        if (d && c) {
                            var h = u.getInstance().encodePacket(s.data, d, c),
                                p = a.arrayBufferToString(h, !1, !1);
                            p ? r.Write.writeStringNoZeroEnd(o, p) : n("[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + i.number_formatToHex(t) + ",包装函数为 = " + c)
                        } else null == d && null != c && (null != e.getInstance()[c] ? e.getInstance()[c](t, o, s) : n("[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + i.number_formatToHex(t) + ",包装函数为 = " + c))
                    }
                    return s.data = "", s
                }, e.ReadPB = function(t, o) {
                    console.log("FXJWriteAndRead:ReadPB pb读===>", ",HeadCmd[16进制] = " + i.number_formatToHex(t));
                    var s = function(e) {
                        return e && r.Read.readPacket(e, !0, !1, !1) || null
                    }(o);
                    if (!s) return null;
                    var d = null;
                    if (l.RESP[t]) {
                        var c = l.RESP[t].packageID,
                            h = l.RESP[t].funcName;
                        if (c && h) {
                            var p = r.Read.readStringNoZeroEnd(o),
                                f = a.stringToByte(p, !1);
                            if (f && f.length > 0) {
                                var _ = u.getInstance().bytesToByteBuffer(f, !1);
                                d = u.getInstance().decodePacket(_, c, h)
                            }
                        } else null == c && null != h && null != e.getInstance()[h] && (d = e.getInstance()[h](t, o));
                        d || (n("[FXJWriteAndRead]:ReadPB 解析包装的数据结构体为空 ,HeadCmd[16进制] = " + i.number_formatToHex(t) + ",解析函数为 = " + h), d = null)
                    }
                    return function(e, t, n, i) {
                        return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = null), void 0 === i && (i = null), {
                            headCmd: e,
                            action: t,
                            data: n,
                            buffer: i
                        }
                    }(t, null, d, s)
                }, t.onReqCommonUserChat = function(e, t, n) {
                    return r.Write.writeString(t, n.data.msg || ""), r.Write.writeShort(t, n.data.index || -1), n.data = "", n.isCompress = !1, n
                }, t.onReqCommonUserFace = function(e, t, n) {
                    return r.Write.writeInt(t, n.data.faceValue || 0), r.Write.writeInt(t, n.data.vipType || 0), n.data = "", n.isCompress = !1, n
                }, e
            }())._instance = null, t._RF.pop()
        }
    }
}))