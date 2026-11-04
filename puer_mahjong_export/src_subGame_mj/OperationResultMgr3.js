System.register("chunks:///_virtual/OperationResultMgr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseCache.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "fe10dMX4ElLHqG4/iQUb8cH", "OperationResultMgr", void 0), e("OperationResultMgr", function(e) {
                function n(t) {
                    var n;
                    return void 0 === t && (t = ""), (n = e.call(this, t) || this).seatId = 0, n.userId = 0, n.opCode = 0, n.opCard = 0, n.opCards = [], n.cardSeatId = 0, n.cardUserId = 0, n.handCard = null, n.huNum = 0, n.huInfo = null, n.tingInfos = null, n.CustomData = "", n.extendInfo = "", n
                }
                t(n, e), n.getInstance = function() {
                    return n.instance || (n.instance = new n), n.instance
                };
                var a = n.prototype;
                return a.userOperationResult = function(e) {
                    this.seatId = e.seatId, this.userId = e.userId, this.opCode = e.opCode, this.opCard = e.opCard, this.opCards = e.opCards, this.cardSeatId = e.cardSeatId, this.cardUserId = e.cardUserId, this.handCard = e.handCard, this.huNum = e.huNum, this.huInfo = e.huInfo, this.tingInfos = e.tingInfos, this.CustomData = e.CustomData, this.extendInfo = e.extendInfo
                }, a.clear = function() {}, n
            }(a)).instance = null, n._RF.pop()
        }
    }
}))