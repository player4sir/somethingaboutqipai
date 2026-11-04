System.register("chunks:///_virtual/FXJObserver.ts", ["cc", "./EventManager.ts", "./GameEvent.ts"], (function(e) {
    var t, n, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.EventManager
        }, function(e) {
            i = e.GameEvent
        }],
        execute: function() {
            t._RF.push({}, "aad3ar0RyNIcpWddAYltiAe", "FXJObserver", void 0), e("FXJObserver", function() {
                function e() {}
                var t = e.prototype;
                return t.updatePlayerList = function(e) {}, t.updateCardsCount = function() {
                    n.dispatch(i.UPDATE_REMAIN_CARDS_COUNT)
                }, e
            }()), t._RF.pop()
        }
    }
}))