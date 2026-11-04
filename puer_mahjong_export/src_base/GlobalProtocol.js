System.register("chunks:///_virtual/GlobalProtocol.ts", ["cc", "./Logger.ts", "./Utils.ts", "./Encrypto.ts", "./WebSocketBuffer.ts", "./GlobalCmd.ts", "./GPBWriteAndRead.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.Logger
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.Encrypt
        }, function(e) {
            o = e.WebSocketBuffer
        }, function(e) {
            r = e.GlobalCmdHead
        }, function(e) {
            s = e.GPBWriteAndRead
        }],
        execute: function() {
            t._RF.push({}, "19c82//EbBDJ4iFvx0yA6qj", "GlobalProtocol", void 0), e("GlobalProtocol", function() {
                function e() {
                    this.PacketSize = 16384
                }
                var t = e.prototype;
                return t.getHeadlen = function() {
                    return 15
                }, t.getHearbeatPackage = function() {
                    return {
                        headCmd: r.SERVER_SEND_HEART,
                        isCompress: !1,
                        data: {},
                        buffer: null
                    }
                }, t.getPackageLen = function(e) {
                    return e.byteLength || e.toString().length
                }, t.checkRequestPackage = function(e) {
                    return this.getPackageLen(e) <= this.PacketSize
                }, t.checkResponsePackage = function(e) {
                    return this.getPackageLen(e) >= this.getHeadlen()
                }, t.handlerRequestPackage = function(e) {
                    if (!e || !e.headCmd) return !1;
                    e.buffer = null;
                    var t = this.getHeadlen(),
                        c = o.Write.newPacket(0, this.isLittleEndian());
                    o.Write.writeInt(c, 0);
                    var l = n.string_codeToASCII("Q"),
                        u = n.string_codeToASCII("E");
                    if (o.Write.writeByte(c, l), o.Write.writeByte(c, u), o.Write.writeByte(c, 1), o.Write.writeByte(c, 0), o.Write.writeInt(c, e.headCmd), o.Write.writeShort(c, 1), o.Write.writeUByte(c, 0), "0x2008" != n.number_formatToHex(e.headCmd) && (e.action ? i.logNet("[GProtocol]:handlerRequestPackage 客户端发送消息 = " + e.action) : i.logNet("[GProtocol]:handlerRequestPackage 客户端发送消息 = " + n.number_formatToHex(e.headCmd))), !(e = s.Write.Start(e.headCmd, c, e))) return o.Read.delPacket(c), !1;
                    o.Read.syncPacket(c);
                    var d = o.Read.readPacket(c, !0);
                    return o.Read.delPacket(c), d && d.setInt32(0, d.byteLength - 4), e.headCmd == r.SERVER_SEND_HEART ? e.buffer = d : e.buffer = a.encodeBuffer(t, this.PacketSize, d, this.isLittleEndian()), this.checkRequestPackage(d) ? !(!e || null == e.buffer) : (e.buffer = null, i.logNet("[GProtocol]: Error:封包失败长度超出限制"), !1)
                }, t.handlerResponsePackage = function(e) {
                    if (!e) return null;
                    var t = o.Write.insertPacket(e, !1);
                    if (!t) return null;
                    var i = o.Read.readPacket(t, !0),
                        n = this.getHeadlen();
                    if (i.byteLength < n) return o.Read.delPacket(t), null;
                    var c = o.Read.readInt(t, this.isLittleEndian());
                    o.Read.readByte(t), o.Read.readByte(t), o.Read.readByte(t), o.Read.readByte(t);
                    var l = o.Read.readInt(t, this.isLittleEndian());
                    o.Read.readShort(t, this.isLittleEndian()), o.Read.readUByte(t);
                    var u = c + 4;
                    if (u - n < 0 || u > i.byteLength) return console.warn("[GProtocol]: 数据有误，正文数据比头部数据还短 或者 定义的数据长度比整个包还长 countRealSize:" + u), o.Read.delPacket(t), null;
                    if (l != r.SERVER_HEART_RESPONSE) {
                        i = a.decodeBuffer(n, this.PacketSize, i, this.isLittleEndian()), o.Read.delPacket(t);
                        var d = i.buffer.slice(0, i.byteLength);
                        t = o.Write.insertPacket(d, !1), o.Read.readPacket(t, !0), o.Read.readPacketOffset(t, n - 1)
                    }
                    var _ = null;
                    return t ? _ = s.Read.Start(l, t) : console.error("[Protocol]: Error：第一步解包出错 "), o.Read.delPacket(t), _
                }, t.isLittleEndian = function() {
                    return !1
                }, e
            }()), t._RF.pop()
        }
    }
}))