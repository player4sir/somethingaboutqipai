System.register("chunks:///_virtual/GameRoomHelper.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.GameTxt
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            c = e.UIID
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.Platform
        }, function(e) {
            _ = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "de609KvJXhFFK5HRZsPILvh", "GameRoomHelper", void 0), e("GameRoomHelper", new(function(e) {
                function i() {
                    return e.call(this, "GameRoomHelper") || this
                }
                t(i, e);
                var u = i.prototype;
                return u.initData = function() {}, u.intoRoomInit = function() {
                    this.initData()
                }, u.getBankruptGifts = function(e, t) {
                    var i;
                    t = a.number_valueOf(t, 0);
                    var n = a.table_verify(o.BankrupData.getkBankUpGiftByKey(e, t));
                    return (null == n || null == (i = n.giftPack) ? void 0 : i.length) > 0 ? n : {}
                }, u.checkShowBankruptView = function(e, t, i, n, s) {
                    if (void 0 === n && (n = null), void 0 === s && (s = null), e = a.number_valueOf(e, null), t = a.number_valueOf(t, null), null != e && null != t && 1 == o.BankrupData.isMineBankrupt()) {
                        this.print("===破产了  即将显示破产界面逻辑===");
                        var u = this.getBankruptGifts(e, t);
                        if (a.table_isEmpty(u) || a.table_isEmpty(u.giftPack)) return void l.dispatch(r.NET_REQ_BANKRUPT_GIFT_CONF, e, t);
                        var h = {
                            gameID: e,
                            levelID: t,
                            moneyID: i,
                            status: n,
                            time: s,
                            config: u
                        };
                        l.dispatch(r.NET_REQ_BANKRUPT_COUNT);
                        var p = 3e3,
                            f = o.SelectGame.getGameRoomInfoByRoomLevelID(e, t);
                        if (f = a.table_verify(f), p = a.number_valueOf(f.min_money, p), h.difMoney = Math.abs(p - o.User.getUserMoneyByID(h.moneyID)), h.has_first_pay = !1, h = this.checkBankrupt(u), 0 == d.isCanPay()) return this.print("不支持支付 则直接领取救济金"), void l.dispatch(r.NET_REQ_BANKRUPT);
                        _.getInstance().onOpenView("", c.GameBankruptPrefab, h), this.print("打开破产界面造的数据==>", h)
                    }
                }, u.checkBankrupt = function(e) {
                    return 1 == a.number_valueOf(e.status) ? (e.bankrupt_type = s.UserBankUpType.BANKRUPT_TYPE_OVER, e.title = n.bankup_gift_title_1, e._type = s.BankupDialogType.GIVE_UP, e) : (o.User.getUserMoneyByID(e.moneyID, !0) >= s.UserBankUpType.BANKRUPT_TYPE_MINI ? (e.bankrupt_type = s.UserBankUpType.BANKRUPT_TYPE_SAFEBOX, e.title = n.bankup_gift_title_2, e._type = e.has_first_pay ? s.BankupDialogType.FIRST_SAFEBOX : s.BankupDialogType.BANKRUPT_SAFEBOX) : o.BankrupData.isMineBankrupt() && o.BankrupData.isBankruptRewardRemain() ? (e.bankrupt_type = s.UserBankUpType.BANKRUPT_TYPE_BANKRUPT, e.title = n.bankup_gift_title_3, e._type = e.has_first_pay ? s.BankupDialogType.BANKRUPT_FIRST : s.BankupDialogType.BANKRUPT_BANKRUPTGIFT) : (e.bankrupt_type = s.UserBankUpType.BANKRUPT_TYPE_OVER, e.title = n.bankup_gift_title_1, e._type = e.has_first_pay ? s.BankupDialogType.FIRST_NOBANKRUPT : s.BankupDialogType.BANKRUPTGIFT_NOBANKRUPT), e)
                }, u.checkBankruptFeedBackRedDot = function() {
                    var e = o.BankrupData.getBankUpFeedbackData();
                    if ((e = a.table_verify(e)).eTime = a.number_valueOf(e.eTime, 0), e.eTime < a.time()) l.dispatch(r.GAME_ROOM_BANKUP_REDDOT_REFRESH, !1);
                    else {
                        var t = !1;
                        if (e.stallData)
                            for (var i in e.stallData = a.table_verify(e.stallData), e.stallData)
                                if (Object.prototype.hasOwnProperty.call(e.stallData, i)) {
                                    var n = e.stallData[i];
                                    if (1 == n.state) {
                                        var s = a.table_verify(n.goods);
                                        for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && 1 == s[c].state && (t = !0)
                                    }
                                } l.dispatch(r.GAME_ROOM_BANKUP_REDDOT_REFRESH, t)
                    }
                }, u.checkIsBankrupt = function(e, t) {
                    return e = a.nullToDefault(e, null), t = a.nullToDefault(t, null), 0 == o.SelectGame.getPropByLevelPropName(e, t, "broken_stat_in") ? (this.print("checkIsBankrupt : 子游戏不检查破产"), !1) : o.BankrupData.isMineBankrupt()
                }, u.checkIsBankruptAfterGameOver = function() {
                    return !!o.BankrupData.isMineBankrupt() && (o.BankrupData.isShowBankruptPayInRoom() ? l.dispatch(r.NET_REQ_GOODS_INFO, {
                        scene: s.GoodsListID.Bankruptcy
                    }) : l.dispatch(r.NET_REQ_LOGOUT_IN_GAME_FORCE), !0)
                }, u.checkIsLevelUp = function(e) {
                    o.Desk.KickUserStatus, 9001 == o.Desk.KickUserStatus && (o.Desk.KickUserStatus = 0);
                    var t = o.SelectGame.getRoomUpLevelInfo();
                    t && (1 == t.flag ? this._handleLevelUp(t.level) : -1 == t.flag && (this._handleLevelDown(t.level), o.SelectGame.setRoomUpLevelInfo({})))
                }, u._handleLevelUp = function(e) {
                    if (!a.isNull(e)) {
                        o.Desk.setCurLevelID(e), o.Desk.updateRoomInfoByKey("level", e), l.dispatch(r.GAME_ROOM_LEVEL_CHANGE);
                        var t = {
                            exp: 0,
                            level: e
                        };
                        l.dispatch(r.GAME_ROOM_LEVEL_UP, t), o.SelectGame.setRoomUpLevelInfo({})
                    }
                }, u._handleLevelDown = function(e) {
                    if (!a.isNull(e)) {
                        var t = o.SelectGame.getCurGameId(),
                            i = o.Desk.getCurLevelID(),
                            n = o.SelectGame.getPropByLevelPropName(t, i, "min_money");
                        n = a.number_valueOf(n), o.Desk.mySelfPlayer.money, l.dispatch(r.GAME_ROOM_LEVEL_DOWN_RECHANGE), o.SelectGame.setDegradeInfo({})
                    }
                }, u.checkIsLegalPlay = function() {
                    return this._checkIsLegal(!1)
                }, u._checkIsLegal = function(e, t) {}, i
            }(u))), i._RF.pop()
        }
    }
}))