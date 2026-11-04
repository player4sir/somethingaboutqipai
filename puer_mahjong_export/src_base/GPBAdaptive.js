System.register("chunks:///_virtual/GPBAdaptive.ts", ["cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./GCmdMapping.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.ClientInfo
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            o = e.GCmdMapping
        }, function(e) {
            r = e.GlobalCmdHead
        }],
        execute: function() {
            e("GetPHPSeq", c), t._RF.push({}, "213032Uj0ZBn5e1dHuIQ50z", "GPBAdaptive", void 0);
            var s = e("PHPSeqID", -1);

            function c() {
                return s = e("PHPSeqID", s + 1)
            }
            e("GPBAdaptive", function() {
                function e() {}
                var t = e.prototype;
                return t.getSendPacket = function(e, t, i, n, a, o) {
                    return {
                        headCmd: e,
                        action: t,
                        callback: i,
                        isCompress: a,
                        data: n,
                        buffer: null,
                        outtime: o
                    }
                }, t.generatPacket = function(e, t) {
                    if (e < r.PHP_CMD_CONSTANT) return [e, t];
                    var i = o.getReqHeadByCmd(e),
                        a = this.getJsonTable(e);
                    for (var s in a.cmd = e - r.PHP_CMD_CONSTANT, a.seq = c(), t = n.table_verify(t)) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
                    return [i, a]
                }, t.isCompressByHeadCmd = function(e) {
                    void 0 === e && (e = null);
                    var t = !1;
                    switch (e) {
                        case r.SEND_PHP_REQUEST:
                        case r.RESPONSE_PHP_REQUEST:
                        case r.SEND_PHP_REQUEST_NEW:
                        case r.RESPONSE_PHP_REQUEST_NEW:
                            t = !0;
                            break;
                        case r.SERVER_SEND_HEART:
                        case r.SERVER_HEART_RESPONSE:
                            t = !1
                    }
                    return t
                }, t.getJsonTable = function(e) {
                    var t = {};
                    t = {
                        timestamp: n.time(),
                        app: i.PlatFormAppID,
                        ssid: a.User.getDataUser("ssid", ""),
                        mid: 0,
                        isNew: 1,
                        action: o.getActionByCmd(e),
                        hall_version: i.HallVer
                    };
                    var r = a.User.getUserMid();
                    return null == r && null == (r = a.User.getLastlocalMid()) && (r = 0), t.mid = r, t
                }, e
            }()), t._RF.pop()
        }
    }
}))