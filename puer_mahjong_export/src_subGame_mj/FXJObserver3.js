System.register("chunks:///_virtual/FXJObserver3.ts", ["cc", "./EventManager.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.EventManager
        }, function(e) {
            a = e.GameEvent
        }],
        execute: function() {
            t._RF.push({}, "f1127JxgWdGMKoz0tSJukiN", "FXJObserver", void 0), e("FXJObserver", function() {
                function e() {}
                var t = e.prototype;
                return t.updatePlayerList = function(e) {}, t.updateCardsCount = function() {
                    n.dispatch(a.UPDATE_REMAIN_CARDS_COUNT)
                }, e
            }()), t._RF.pop()
        }
    }
}))