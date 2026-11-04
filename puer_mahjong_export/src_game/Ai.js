System.register("chunks:///_virtual/Ai.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./FXJEvent.ts", "./FXJSound.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator, a = e.Node
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.EventManager
        }, function(e) {
            s = e.BaseComponent
        }, function(e) {
            l = e.PlayerMgr
        }, function(e) {
            u = e.FXJEvent
        }, function(e) {
            d = e.GameSound, c = e.FXJSound
        }],
        execute: function() {
            var h;
            n._RF.push({}, "c603416ZnZLd47kYn4WIwiD", "Ai", void 0);
            var p = i.ccclass;
            i.property, e("Ai", p("Ai")(h = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                t(n, e);
                var i = n.prototype;
                return i.onInitModuleEvent = function() {
                    this.node.on(a.EventType.TOUCH_END, this.onOprationTouchEnd, this)
                }, i.onOprationTouchEnd = function() {
                    var e;
                    1 == (null == (e = o.Desk) ? void 0 : e.isPlayIng()) ? this._checkAI() : this.node.active = !1
                }, i._checkAI = function() {
                    l.getInstance().getMyPlayerInfo().isAi && r.dispatch(u.NET_REQ_GAME_USER_AI, !l.getInstance().getMyPlayerInfo().isAi)
                }, i.onCloseAi = function() {
                    d.getInstance().playEffect(c.CommClick), this._checkAI()
                }, i.onReconnectSuccess = function() {
                    this.onCloseAi(), this.node.active = !1
                }, i.showAiView = function(e) {
                    this.node.active = e, d.getInstance().playEffect(c.CommClick)
                }, n
            }(s)) || h), n._RF.pop()
        }
    }
}))