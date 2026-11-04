System.register("chunks:///_virtual/GameInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseCache.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.BaseCache
        }],
        execute: function() {
            var a;
            e("GAME_POS_TAG", void 0), i._RF.push({}, "032cdRFSv1EIbp4mZEHUAGq", "GameInfo", void 0),
                function(e) {
                    e.HU_CARD_POSTION = "huCardPos"
                }(a || (a = e("GAME_POS_TAG", {}))), e("GameInfo", function(e) {
                    function i(t) {
                        var i;
                        return (i = e.call(this, "GameInfo") || this).userPos = [], i.roomInfoPos = null, i.remainInfoPos = null, i.otherPos = new Map, i
                    }
                    t(i, e);
                    var n = i.prototype;
                    return n.setUserPos = function(e) {
                        console.log("nodeUser---设置头像位置"), this.userPos = e
                    }, n.getUserPosByPosId = function(e) {
                        return this.userPos[e]
                    }, n.setRoomInfoPos = function(e) {
                        this.roomInfoPos = e
                    }, n.getRoomInfoPos = function() {
                        return this.roomInfoPos
                    }, n.setRemainInfoPos = function(e) {
                        this.remainInfoPos = e
                    }, n.getRemainInfoPos = function() {
                        return this.remainInfoPos
                    }, n.setInfoPos = function(e, t) {
                        this.otherPos.set(e, t)
                    }, n.getInfoPos = function(e) {
                        return this.otherPos.get(e)
                    }, i
                }(n)), i._RF.pop()
        }
    }
}))