System.register("chunks:///_virtual/PrivateDataBase.ts", ["cc", "./ClientInfo.ts", "./GameConstant.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.ClientInfo
        }, function(e) {
            n = e.GConstants
        }],
        execute: function() {
            t._RF.push({}, "0291eQpo7NK9IvFF6ol8zoc", "PrivateDataBase", void 0), e("PrivateDataBase", function() {
                function e(e) {
                    this.__PrivateData = void 0, this.__PrivateData = e
                }
                var t = e.prototype;
                return t.getPrivateRoomOptionInfo = function(e, t, i) {
                    throw new Error("Method not implemented.")
                }, t.getPrivateRoomGameInfo = function(e, t, i) {
                    throw new Error("Method not implemented.")
                }, t.checkPrivateRoomGameInfo = function(e, t) {
                    return t
                }, t.checkPrivateItemInfo = function(e, t) {
                    return {
                        param: e,
                        DIYIds: t
                    }
                }, t.getCheckGamePrivateData = function(e) {
                    return null
                }, t.getPrivateRoomPlayerNum = function(e) {
                    return n.GamePlayerNumMax[e] || i.deviceInfo.playerNum
                }, e
            }()), t._RF.pop()
        }
    }
}))