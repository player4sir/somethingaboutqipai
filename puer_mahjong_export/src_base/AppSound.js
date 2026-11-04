System.register("chunks:///_virtual/AppSound.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            t._RF.push({}, "0c074xdYcFDp7yRv1hL4IjY", "AppSound", void 0);
            var i = e("AudioPackage", {
                    COMMON: "audio_common",
                    GAME: "audio_game",
                    GAME_ROLE_ACTION: "audio_gameRoleAction",
                    GAME_ROLE_CARD: "audio_gameRoleCard",
                    LOTTERY: "audio_lottery"
                }),
                n = e("AppSound", (function() {}));
            n.CommClick = {
                bundle: i.COMMON,
                path: "common_click"
            }, n.SpecialClick = {
                bundle: i.COMMON,
                path: "special_click"
            }, n.GetGoods = {
                bundle: i.COMMON,
                path: "get_goods"
            }, n.GetGoodsCoin = {
                bundle: i.COMMON,
                path: "get_goods_coin"
            }, n.BgHall = {
                bundle: i.COMMON,
                path: "backGroundMusic/hall_bg"
            }, n.Lottery_LuckyTurnTablePlay = {
                bundle: i.LOTTERY,
                path: "luckyTurnTablePlay"
            }, t._RF.pop()
        }
    }
}))