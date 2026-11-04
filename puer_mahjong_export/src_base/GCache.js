System.register("chunks:///_virtual/GCache.ts", ["cc", "./User.ts"], (function(e) {
    var t, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.User
        }],
        execute: function() {
            t._RF.push({}, "3710eJVjilD44v0ra8UZmiA", "GCache", void 0);
            var n = e("GCache", function() {
                function e() {}
                return e.init = function() {
                    e.User = new i, e.reloadSubClass(), e.CurrowPaySceneType = null
                }, e.reloadSubClass = function() {
                    e.Activity = e.User.Activity, e.BankrupData = e.User.BankrupData, e.RecommendPop = e.User.RecommendPop, e.ShopInfo = e.User.ShopInfo, e.MailInfo = e.User.MailInfo, e.WatchMessage = e.User.WatchMessage, e.PropsConf = e.User.PropsConf, e.SelectGame = e.User.SelectGame, e.ShareInfo = e.User.ShareInfo, e.RedDot = e.User.RedDot, e.BackPack = e.User.BackPack, e.MatchData = e.User.MatchData, e.PrivateData = e.User.PrivateData, e.WxShareData = e.User.WxShareData, e.LadderData = e.User.LadderData, e.RankData = e.User.RankData, e.SquareData = e.User.SquareData, e.SubContext = e.User.SubContext, e.ExchangeShop = e.User.ExchangeShop, e.GameInfo = e.User.GameInfo, e.LevelData = e.User.LevelData, e.MemberData = e.User.MemberData, e.noticePup = e.User.noticePup, e.DecorationData = e.User.DecorationData, e.firstRunLoading = !0, e.firstRunLoadSuccess = !1, e.setDesk(null)
                }, e.setDesk = function(t) {
                    var i = function() {
                        e.Desk && (e.Desk.clear(), e.Desk.destroy(), e.Desk = null)
                    };
                    i(), t ? e.Desk = new t : i()
                }, e.clearGameCache = function() {
                    e.PrivateData.clearGameCache(), e.MatchData.clearGameCache()
                }, e.resetConfig = function() {
                    e.noticePup.resetConfig()
                }, e
            }());
            n.firstRunLoading = !1, n.firstRunLoadSuccess = !1, n.CurrowPaySceneType = null, n.User = null, n.BackPack = null, n.ShopInfo = null, n.MailInfo = null, n.WatchMessage = null, n.SelectGame = null, n.ShareInfo = null, n.RedDot = null, n.RecommendPop = null, n.Desk = null, n.Activity = null, n.PropsConf = null, n.BankrupData = null, n.MatchData = null, n.PrivateData = null, n.WxShareData = null, n.LadderData = null, n.RankData = null, n.MemberData = null, n.SquareData = null, n.SubContext = null, n.ExchangeShop = null, n.GameInfo = null, n.LevelData = null, n.noticePup = null, n.DecorationData = null, t._RF.pop()
        }
    }
}))