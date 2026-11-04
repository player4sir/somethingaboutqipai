System.register("chunks:///_virtual/InterfaceDefines.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i, n, a, o, r;
            e({
                    GAME_EXPAND_INFO_TAG: void 0,
                    GAME_STATUS: void 0,
                    inf_GameSceneType: void 0,
                    inf_OnlineStatus: void 0,
                    inf_PrivateRoomSearchType: void 0
                }), t._RF.push({}, "9e1d62a3idGF4ELveM7+OcQ", "InterfaceDefines", void 0),
                function(e) {
                    e[e.Offline = 0] = "Offline", e[e.Online = 1] = "Online"
                }(i || (i = e("inf_OnlineStatus", {}))),
                function(e) {
                    e[e.GAME_STATUS_STOP = 0] = "GAME_STATUS_STOP", e[e.GAME_STATUS_PLAY = 1] = "GAME_STATUS_PLAY", e[e.GAME_STATUS_PAUSE = 2] = "GAME_STATUS_PAUSE", e[e.PRIVATEROOM_STATUS_STOP = 256] = "PRIVATEROOM_STATUS_STOP", e[e.PRIVATEROOM_STATUS_PLAY = 257] = "PRIVATEROOM_STATUS_PLAY", e[e.PRIVATEROOM_STATUS_RESTART = 258] = "PRIVATEROOM_STATUS_RESTART", e[e.PRIVATEROOM_STATUS_GAME_OVER = 259] = "PRIVATEROOM_STATUS_GAME_OVER"
                }(n || (n = e("GAME_STATUS", {}))),
                function(e) {
                    e[e.EXIT_GAME_VALID = 0] = "EXIT_GAME_VALID"
                }(a || (a = e("GAME_EXPAND_INFO_TAG", {}))), e("inf_ViewParams", (function() {
                    this.bundle = "resources", this.params = void 0, this.valid = !0, this.node = null, this.isAutoRecover = !1, this.isClickSpanceClose = !1
                })),
                function(e) {
                    e[e.Hall = 0] = "Hall", e[e.Select = 1] = "Select", e[e.Private = 2] = "Private", e[e.Match = 3] = "Match"
                }(o || (o = e("inf_GameSceneType", {}))),
                function(e) {
                    e[e.Join = 0] = "Join", e[e.Game = 1] = "Game", e[e.Invite = 2] = "Invite"
                }(r || (r = e("inf_PrivateRoomSearchType", {}))), t._RF.pop()
        }
    }
}))