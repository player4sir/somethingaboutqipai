System.register("chunks:///_virtual/JumpHelper.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConfig.ts", "./GameTxt.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./Platform.ts", "./PopupController.ts", "./LayerManager.ts", "./BaseController.ts", "./EventManager.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GameSwitchConf
        }, function(e) {
            r = e.GameTxt
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.GConstants
        }, function(e) {
            l = e.GameRes
        }, function(e) {
            u = e.UIID, d = e.UIConfigData, _ = e.inf_LayerType
        }, function(e) {
            h = e.Platform
        }, function(e) {
            p = e.PopupController
        }, function(e) {
            f = e.LayerManager
        }, function(e) {
            m = e.BaseController
        }, function(e) {
            g = e.EventManager
        }],
        execute: function() {
            var E, v, T, R;
            i._RF.push({}, "5472eefE2hPyat3QEZszjEm", "JumpHelper", void 0);
            var P = n.ccclass,
                y = c.RedDotConf;
            e("JumpHelper", P("JumpHelper")(((v = function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("JumpHelper")), this._instance
                };
                var n = i.prototype;
                return n.jumpToViewByName = function(e, t, n, a, o, r, s) {
                    void 0 === a && (a = null), void 0 === o && (o = null), void 0 === r && (r = !1), void 0 === s && (s = !1);
                    var c = i.jumpCfg[e];
                    if (c) {
                        var l, u;
                        if (c.uiid)
                            if (1 == (null == (l = d[c.uiid]) ? void 0 : l.isSingle) && (null == (u = d[c.uiid]) ? void 0 : u.layer) == _.UI && f.has(c.uiid));
                            else {
                                var h = c.uiid,
                                    m = null;
                                if ("string" == typeof t);
                                else {
                                    if (t && "room" == t.from && c.uiidRoom && (h = c.uiidRoom), t && c.params)
                                        for (var g in c.params) Object.prototype.hasOwnProperty.call(c.params, g) && !(g in t) && (t[g] = c.params[g]);
                                    m = t || c.params
                                }
                                p.getInstance().onOpenView("", h, m, a, o, r, s)
                            } c.callBack && c.callBack(n)
                    }
                }, n.jumpToViewByActID = function(e, t, i, n, o, r, s) {
                    void 0 === n && (n = null), void 0 === o && (o = null), void 0 === r && (r = !1), void 0 === s && (s = !1), 1045 == a.number_valueOf(e) && t ? this.jumpToViewByCode(t) : this.jumpToViewByName(c.ActivityIDMap[e.toString()], t, i, n, o, r, s)
                }, n.jumpToViewByCode = function(e, t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = null);
                    var a = JSON.parse(e || "{}");
                    if (a && void 0 !== a.cmd) {
                        switch (Number(a.cmd)) {
                            case 1006:
                                g.dispatch(s.JUMP_HALL_MAIN_VIEW, "game");
                                break;
                            case 1007:
                                g.dispatch(s.JUMP_HALL_MAIN_VIEW, "game");
                                var c = a.gameid || 0;
                                g.dispatch(s.JUMP_QUICK_START_GAME, c);
                                break;
                            case 1008:
                                var d, _, h, f, m, E;
                                o.ShopFlag && p.getInstance().onOpenView("", (null == (d = n) ? void 0 : d.uiId) || u.MallPrefab, null == (_ = n) ? void 0 : _.uiArgs, null == (h = n) ? void 0 : h.callbacks, null == (f = n) ? void 0 : f.parent, null == (m = n) ? void 0 : m.isClickSpanceClose, null == (E = n) ? void 0 : E.isAutoRecover);
                                break;
                            case 1009:
                                g.dispatch(s.JUMP_HALL_MAIN_VIEW, "game");
                                break;
                            case 1016:
                                g.dispatch(s.JUMP_HALL_MAIN_VIEW, "private");
                                break;
                            case 1019:
                                var v;
                                v = {
                                    title: r.share_wx_friends_txt,
                                    imageUrl: l.AppCommon_Share_Friend_Comm.path
                                }, g.dispatch(s.EVENT_REQ_WXIN_SHARE, v);
                            case 1045:
                                if ("LUCKYLOTTERY" == a.tag) p.getInstance().onOpenView("", u.LevelSystemPrefab, {
                                    bigTab: "lottery",
                                    smallTab: "free"
                                }, null, null, !0);
                                else {
                                    var T = i.activity_modules[a.tag];
                                    if (T) p.getInstance().onOpenView("", T, null, null, null, !0);
                                    else switch (a.tag) {
                                        case "PULLNEWPEOPLE":
                                        case "CHANGZHUHUODONG":
                                        case "SHENHAIXUNBAO":
                                        case "XINCHUNHAOLI":
                                        case "CHAOZHIFULI":
                                        case "XINNIANJIHAOYUN":
                                        case "FENXIANG":
                                        case "FREEGOLD":
                                            break;
                                        case "QUJINGSQUARE":
                                            g.dispatch(s.JUMP_HALL_MAIN_VIEW, "hall");
                                            break;
                                        case "PLAYRECOED":
                                            g.dispatch(s.EVENT_OPEN_HALL_USERINFO_TAB, "record");
                                            break;
                                        case "BAG":
                                            g.dispatch(s.EVENT_OPEN_HALL_USERINFO_TAB, "backpack");
                                            break;
                                        case "VIP":
                                            g.dispatch(s.EVENT_OPEN_HALL_USERINFO_TAB, "vip");
                                            break;
                                        case "PERSONINFO":
                                            break;
                                        case "PRIMP":
                                            g.dispatch(s.EVENT_OPEN_HALL_USERINFO_TAB, "decoration")
                                    }
                                }
                                break;
                            default:
                                console.log("err:无效的跳转code")
                        }
                        t && t()
                    } else console.log("err:无cmd字段")
                }, i
            }(m))._instance = void 0, v.jumpCfg = ((T = {})[y.Sign] = {
                uiid: u.SigninPrefab,
                actID: 1
            }, T[y.Kefugift] = {
                uiid: u.AtyCenterPrefab,
                actID: 2,
                params: {
                    type: "activity",
                    tabIndex: 2
                }
            }, T[y.AddToDesk] = {
                uiid: u.AtyCenterPrefab,
                actID: 3,
                params: {
                    type: "activity",
                    tabIndex: 1
                }
            }, T[y.GiftVisitor] = {
                uiid: u.GiftVisitorPrefab,
                actID: 4
            }, T[y.GiftRedBag] = {
                uiid: u.GiftRedBagPrefab,
                actID: 5
            }, T[y.LargeDelivery] = {
                uiid: u.GiftLargeDeliveryPrefab,
                actID: 6
            }, T[y.ReservePoker] = {
                uiid: u.GiftReservePokerPrefab,
                actID: 7
            }, T[y.Turntable] = {
                uiid: u.LevelSystemPrefab,
                actID: 8,
                params: {
                    bigTab: "lottery",
                    smallTab: "free"
                }
            }, T[y.GiftBacon] = {
                uiid: u.GiftBaconPrefab,
                actID: 9
            }, T[y.Holiday] = {
                uiid: u.GiftDiscountPrefab,
                actID: 11
            }, T[y.ActivityNotice] = {
                uiid: u.PictureDialog,
                actID: 12,
                params: {
                    type: "antiCheat",
                    title: "防作弊公告"
                }
            }, T[y.FirstPay] = {
                uiid: u.FirstPayPrefab,
                actID: 13
            }, T[y.GiftClub] = {
                uiid: u.GiftClubPrefab,
                actID: 14
            }, T[y.AddToProgram] = {
                uiid: u.AddToProgramPrefab,
                actID: 15
            }, T[y.ActivityCollectionNew] = {
                uiid: u.ActivityCollectionPrefab,
                actID: 16
            }, T[y.ActivityCollectionReturn] = {
                uiid: u.ActivityCollectionPrefab,
                actID: 17
            }, T[y.PhysicalReward] = {
                uiid: u.PhysicalRewardPrefab,
                actID: 18
            }, T[y.ActivityAppointment] = {
                uiid: u.AppointmentPrefab,
                actID: 19
            }, T[y.Mall] = {
                uiid: u.MallPrefab,
                actID: 20
            }, T[y.Rank] = {
                uiid: u.HallPrefab,
                actID: 21,
                callBack: function() {
                    g.dispatch(s.JUMP_HALL_MAIN_VIEW, "rank")
                }
            }, T[y.GameCoin] = {
                uiid: u.HallPrefab,
                actID: 23,
                callBack: function() {
                    g.dispatch(s.JUMP_HALL_MAIN_VIEW, "game")
                }
            }, T[y.GamePrivate] = {
                uiid: u.HallPrefab,
                actID: 24,
                callBack: function() {
                    g.dispatch(s.JUMP_HALL_MAIN_VIEW, "private")
                }
            }, T[y.GameMatch] = {
                uiid: u.HallPrefab,
                actID: 25,
                callBack: function() {
                    g.dispatch(s.JUMP_HALL_MAIN_VIEW, "match")
                }
            }, T[y.ToMiniGame] = {
                uiid: null,
                actID: 26,
                callBack: function(e) {
                    h.navigateToMiniProgram({
                        shortLink: e.link,
                        envVersion: "release",
                        complete: function(e) {
                            console.log("跳转小程序结束回调！", e)
                        }
                    })
                }
            }, T[y.ActivityWeekCard] = {
                uiid: u.WeekCardPrefab,
                actID: 27
            }, T[y.Square] = {
                uiid: u.HallPrefab,
                actID: 28,
                callBack: function() {
                    g.dispatch(s.JUMP_HALL_MAIN_VIEW, "square")
                }
            }, T[y.ActivityLucklySilver] = {
                uiid: u.LucklySilverPrefab,
                actID: 30
            }, T[y.ActivityCashCow] = {
                uiid: u.CashCowPrefab,
                actID: 31
            }, T[y.ActivityLiveact] = {
                uiid: u.GameLivePrefab,
                actID: 32
            }, T[y.ActivityCardGod] = {
                uiid: u.CardGodPrefab,
                actID: 33
            }, T[y.ActivityMoreGame] = {
                uiid: u.MoreGamePrefab,
                actID: 34
            }, T[y.FreeSilver] = {
                uiid: u.WelfareCenter,
                actID: 35
            }, T[y.PayGiftPackage] = {
                uiid: u.GiftPackage,
                actID: 36
            }, T[y.PiggyBank] = {
                uiid: u.PiggyBankPrefab,
                uiidRoom: u.PiggyBankPrefabH,
                actID: 37
            }, T[y.FreeReward] = {
                uiid: u.FreeRewardPrefab,
                actID: 38
            }, T[y.SuperPayGift] = {
                uiid: u.SuperPayGiftPrefab,
                actID: 39
            }, T[y.GoldSnake] = {
                uiid: u.GoldSnakePrefab,
                actID: 40
            }, T[y.CumulativeCheckIn] = {
                uiid: u.CumulativeCheckInPrefab,
                actID: 43
            }, T[y.CharmGift] = {
                uiid: u.CharmGiftPrefab,
                actID: 41
            }, T[y.CumulativePay] = {
                uiid: u.CumulativePayPrefab,
                actID: 42
            }, T[y.ShopSilver] = {
                uiid: u.MallPrefab,
                actID: y.ShopSilver,
                params: {
                    id: c.ShopBigTabType.SILVER_COIN
                }
            }, T[y.ShopProp] = {
                uiid: u.MallPrefab,
                actID: y.ShopProp,
                params: {
                    id: c.ShopBigTabType.PROPS
                }
            }, T[y.ShopVIP] = {
                uiid: u.MallPrefab,
                actID: y.ShopVIP,
                params: {
                    id: c.ShopBigTabType.VIP
                }
            }, T[y.ActivityNoticePopu] = {
                uiid: u.NoticePopuPrefab,
                actID: y.ActivityNoticePopu
            }, T[y.DailyGift] = {
                uiid: u.DailyGiftPrefab,
                actID: 47
            }, T[y.BoundPlan] = {
                uiid: u.BoundPlanPrefab,
                actID: 48
            }, T[y.BonusGift] = {
                uiid: u.BonusGiftPrefab,
                actID: 49
            }, T[c.RedDotConf.GameLottery] = {
                uiid: u.GameLotteryPrefab,
                actID: 51
            }, T[c.RedDotConf.NianBeast] = {
                uiid: u.NianBeastPrefab,
                actID: 52
            }, T[c.RedDotConf.LaborPlayGame] = {
                uiid: u.LaborPlayGamePrefab,
                actID: 53
            }, T[c.RedDotConf.TimeLogin] = {
                uiid: u.TimeLoginPrefab,
                actID: 54
            }, T[c.RedDotConf.UserInfo] = {
                uiid: u.PlayerInfoCenter,
                actID: 55
            }, T[c.RedDotConf.CostumeBundle] = {
                uiid: u.CostumeBundlePrefab,
                actID: 56
            }, T), v.activity_modules = ((R = {}).SIGN = u.SigninPrefab, R.LUCKYRED = u.GiftRedBagPrefab, R.CARDGODORDER = u.CardGodPrefab, R), E = v)) || E), i._RF.pop()
        }
    }
}))