System.register("chunks:///_virtual/WXSdkDefines.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i;
            t._RF.push({}, "c017eKt9SVJZIquQKn621f8", "WXSdkDefines", void 0), e("WXSdk_Lang", {
                en: "en",
                zh_CN: "zh_CN",
                zh_TW: "zh_TW"
            }), e("WXSdk_AuthSetting", ((i = {}).userInfo = "scope.userInfo", i.userLocation = "scope.userLocation", i.werun = "scope.werun", i.writePhotosAlbum = "scope.writePhotosAlbum", i.WxFriendInteraction = "scope.WxFriendInteraction", i.WxRecordInteraction = "scope.record", i.WxGameClubData = "scope.gameClubData", i)), e("WXSdk_VibrateShortType", {
                heavy: "heavy",
                medium: "medium",
                light: "light"
            }), t._RF.pop()
        }
    }
}))