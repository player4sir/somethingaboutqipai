System.register("chunks:///_virtual/FXJWriteAndRead3.ts", ["cc", "./Utils.ts", "./Encrypto.ts", "./EventManager.ts", "./WebSocketBuffer.ts", "./FXJEvent3.ts", "./FXJCmd3.ts", "./FXJPBAdaptive3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.error
        }, function(e) {
            a = e.Utils
        }, function(e) {
            i = e.Encrypt
        }, function(e) {
            o = e.EventManager
        }, function(e) {
            r = e.WebSocketBuffer
        }, function(e) {
            s = e.FXJEvent
        }, function(e) {
            u = e.FXJCmdBinding
        }, function(e) {
            l = e.FXJPBAdaptive
        }],
        execute: function() {
            t._RF.push({}, "5e3f7rjSE5K2LT04HAQqNSP", "FXJWriteAndRead", void 0), e("FXJWriteAndRead", function() {
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
                    l.getInstance().startReloadPBList();
                    var t = [],
                        n = [];
                    for (var a in u.REQ)
                        if (Object.prototype.hasOwnProperty.call(u.REQ, a)) {
                            var i = Number(a),
                                r = (u.REQ[i], {
                                    cmd: i,
                                    binding: e.WritePB
                                });
                            t.push(r)
                        } for (var d in u.RESP)
                        if (Object.prototype.hasOwnProperty.call(u.RESP, d)) {
                            var c = Number(d),
                                h = (u.RESP[c], {
                                    cmd: c,
                                    binding: e.ReadPB
                                });
                            n.push(h)
                        } o.dispatch(s.SYS_UPDATE_PROTOBUF, 0, n), o.dispatch(s.SYS_UPDATE_PROTOBUF, 1, t)
                }, t.initCMDMapping = function() {
                    var e = {};
                    for (var t in u.REQ)
                        if (Object.prototype.hasOwnProperty.call(u.REQ, t)) {
                            var n = Number(t),
                                a = u.REQ[n];
                            e[n] = a
                        } for (var i in u.RESP)
                        if (Object.prototype.hasOwnProperty.call(u.RESP, i)) {
                            var r = Number(i),
                                l = u.RESP[r];
                            e[r] = l
                        } o.dispatch(s.SYS_UPDATE_CMDMAPPING, e)
                }, e.WritePB = function(t, o, s) {
                    if (s.isCompress = !1, u.REQ[t]) {
                        var d = u.REQ[t].packageID,
                            c = u.REQ[t].funcName;
                        if (d && c) {
                            var h = l.getInstance().encodePacket(s.data, d, c),
                                p = i.arrayBufferToString(h, !1, !1);
                            p ? r.Write.writeStringNoZeroEnd(o, p) : n("[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + a.number_formatToHex(t) + ",包装函数为 = " + c)
                        } else null == d && null != c && (null != e.getInstance()[c] ? e.getInstance()[c](t, o, s) : n("[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[16进制] = " + a.number_formatToHex(t) + ",包装函数为 = " + c))
                    }
                    return s.data = "", s
                }, e.ReadPB = function(t, o) {
                    console.log("FXJWriteAndRead:ReadPB pb读===>", ",HeadCmd[16进制] = " + a.number_formatToHex(t));
                    var s = function(e) {
                        return e && r.Read.readPacket(e, !0, !1, !1) || null
                    }(o);
                    if (!s) return null;
                    var d = null;
                    if (u.RESP[t]) {
                        var c = u.RESP[t].packageID,
                            h = u.RESP[t].funcName;
                        if (c && h) {
                            var p = r.Read.readStringNoZeroEnd(o),
                                m = i.stringToByte(p, !1);
                            if (m && m.length > 0) {
                                var _ = l.getInstance().bytesToByteBuffer(m, !1);
                                d = l.getInstance().decodePacket(_, c, h)
                            }
                        } else null == c && null != h && null != e.getInstance()[h] && (d = e.getInstance()[h](t, o));
                        d || (n("[FXJWriteAndRead]:ReadPB 解析包装的数据结构体为空 ,HeadCmd[16进制] = " + a.number_formatToHex(t) + ",解析函数为 = " + h), d = null)
                    }
                    return function(e, t, n, a) {
                        return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = null), {
                            headCmd: e,
                            action: t,
                            data: n,
                            buffer: a
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