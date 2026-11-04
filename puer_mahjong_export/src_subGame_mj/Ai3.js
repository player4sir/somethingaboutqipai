System.register("chunks:///_virtual/Ai3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./EventManager.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./FXJEvent3.ts", "./FXJSound3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator, i = e.Node
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.EventManager
        }, function(e) {
            s = e.BaseComponent
        }, function(e) {
            u = e.PlayerMgr
        }, function(e) {
            l = e.FXJEvent
        }, function(e) {
            d = e.GameSound, c = e.FXJSound
        }],
        execute: function() {
            var h;
            n._RF.push({}, "eabeaIHYCJD+KLHeL3bNRqW", "Ai", void 0);
            var p = a.ccclass,
                m = (a.property, a.menu);
            e("Ai", p("Ai")(h = m("prefab/subGame/mj/Ai")(h = function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                t(n, e);
                var a = n.prototype;
                return a.onInitModuleEvent = function() {
                    this.node.on(i.EventType.TOUCH_END, this.onOprationTouchEnd, this)
                }, a.onOprationTouchEnd = function() {
                    var e;
                    1 == (null == (e = o.Desk) ? void 0 : e.isPlayIng()) ? this._checkAI() : this.node.active = !1
                }, a._checkAI = function() {
                    u.getInstance().getMyPlayerInfo().isAi && r.dispatch(l.NET_REQ_GAME_USER_AI, !u.getInstance().getMyPlayerInfo().isAi)
                }, a.onCloseAi = function() {
                    d.getInstance().playEffect(c.CommClick), this._checkAI()
                }, a.onReconnectSuccess = function() {
                    this.onCloseAi(), this.node.active = !1
                }, a.showAiView = function(e) {
                    this.node.active = e, d.getInstance().playEffect(c.CommClick)
                }, n
            }(s)) || h) || h), n._RF.pop()
        }
    }
}))