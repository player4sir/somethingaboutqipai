System.register("chunks:///_virtual/Activity.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./GameConstant.ts", "./LocalStorage.ts", "./Encrypto.ts", "./CountTime.ts", "./EventManager.ts", "./BaseCache.ts", "./Platform.ts", "./GlobalCmd.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.NodeEventType, a = e.Input, o = e.Label, r = e.UITransform
        }, function(e) {
            s = e.ClientInfo
        }, function(e) {
            c = e.GameSwitchConf
        }, function(e) {
            l = e.Utils
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            d = e.AppSound
        }, function(e) {
            _ = e.GConstants, h = e.StoreKey
        }, function(e) {
            p = e.LocalStorage
        }, function(e) {
            f = e.Encrypt
        }, function(e) {
            m = e.CountTime
        }, function(e) {
            g = e.EventManager
        }, function(e) {
            E = e.BaseCache
        }, function(e) {
            v = e.Platform
        }, function(e) {
            T = e.GlobalCmdHeadPHP
        }],
        execute: function() {
            i._RF.push({}, "fd0927p5UJKyazK8o429rIW", "Activity", void 0), e("Activity", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "Activity") || this).__User = null, i._discountGiftData = null, i._reservrPoker = null, i._signinData = null, i._continueAwardDay = null, i._signGiftData = null, i._signTodayGift = null, i._limitPackData = null, i._firstPayData = null, i._turnTableData = null, i._largeDeliveryData = null, i._largeDeliveryInviteList = null, i._giftVisitor = null, i._giftRedBag = null, i._giftBacon = null, i._atyList = null, i._giftClub = null, i._giftClubAuth = 0, i._physicalRewardData = null, i._physicalRewardInviteList = null, i._activityCollection = null, i._appointmentData = null, i.hallActEnterCfg = {}, i._weekCardData = null, i._lucklySilverData = null, i._cashCowData = null, i._liveactData = null, i._cardGodData = null, i._reportClickSource = [19, 27, 28, 30, 31, 33], i._guid_act_id = "", i._guid_act_node = null, i._guid_guid_node = null, i._guid_callBack = null, i._sign_day = 0, i._piggyBankData = null, i._gameBoxData = null, i._freeRewardConfig = null, i._moreGameData = null, i._suprePayData = null, i._goldSnakeData = null, i._charmGiftData = null, i._cumulativeCheckInData = null, i._cumulativePayData = null, i._dailyGiftData = null, i._boundPlanData = null, i._bonusGiftData = null, i._gameLotteryData = null, i._nianBeastData = null, i._timerHandle = null, i._laborPlayGameData = null, i._timeLoginData = null, i._costumeBundleData = null, i.__User = t, i
                }
                t(i, e);
                var E = i.prototype;
                return E.updateSquareRedDot = function(e, t) {
                    this.updateHallActEnterCfg(e, t);
                    for (var i = this.__User.SquareData.getData(), n = 0; n < (null == i ? void 0 : i.length); n++)
                        for (var a = i[n], o = 0; o < (null == (r = a.list) ? void 0 : r.length); o++) {
                            var r, s = a.list[o];
                            if (e == _.ActivityIDMap[null == s ? void 0 : s.act_id]) {
                                var c = s.status;
                                return s.status = t ? 1 : 0, void(this._checkActivityRemove(s) ? (a.list.splice(o, 1), this.__User.SquareData.syncSquareData(), g.dispatch(u.NOTIFY_UPDATE_RED_DOT, e, s.status, !0)) : c != s.status && g.dispatch(u.NOTIFY_UPDATE_RED_DOT, e, s.status))
                            }
                        }
                }, E._checkActivityRemove = function(e) {
                    var t = !1;
                    if (e && null != e.act_id) {
                        var i = null == e ? void 0 : e.act_id;
                        if (_.ActivityIDMap[i] == _.RedDotConf.FirstPay) this.canShowFirstPay() || (t = !0);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.GiftVisitor);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.AddToProgram) 0 == e.status && (t = !0);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.AddToDesk) 1 == e.status && (t = !0);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.Kefugift) 1 == e.status && (t = !0);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.PiggyBank) 3 == e.status && (t = !0);
                        else if (_.ActivityIDMap[i] == _.RedDotConf.SuperPayGift) {
                            var n, a;
                            this._suprePayData && ((null == (n = this._suprePayData) || null == (a = n.gifts) ? void 0 : a.length) > 0 || (t = !0))
                        } else if (_.ActivityIDMap[i] == _.RedDotConf.GoldSnake) {
                            var o, r, s;
                            this._goldSnakeData && null != (o = this._goldSnakeData) && o.goodsData && ((null == (r = this._goldSnakeData) || null == (s = r.goodsData) ? void 0 : s.length) > 0 || (t = !0))
                        } else if (_.ActivityIDMap[i] == _.RedDotConf.CharmGift) {
                            var c, u, d, h;
                            this._charmGiftData && null != (c = this._charmGiftData) && c.gifts && ((null == (u = this._charmGiftData) || null == (d = u.gifts) ? void 0 : d.length) > 0 ? (null == (h = this._charmGiftData) ? void 0 : h.etime) > 0 && this._charmGiftData.etime < l.time() && (t = !0) : t = !0)
                        } else _.ActivityIDMap[i] == _.RedDotConf.CostumeBundle ? null !== this._costumeBundleData && l.table_isEmpty(this._costumeBundleData) && (t = !0) : _.ActivityIDMap[i] == _.RedDotConf.FreeReward && (t = this.checkFreeRewardExpired())
                    }
                    return t
                }, E.getSquareRedDotByTpye = function(e) {
                    for (var t = this.__User.SquareData.getData(), i = 0; i < (null == t ? void 0 : t.length); i++)
                        for (var n = t[i], a = 0; a < (null == (o = n.list) ? void 0 : o.length); a++) {
                            var o, r;
                            if (e == _.ActivityIDMap[null == (r = n.list[a]) ? void 0 : r.act_id]) return 1 == n.list[a].status
                        }
                }, E.checkSquareDataConf = function() {
                    for (var e = this, t = function(t) {
                            for (var i = [], n = e.__User.SquareData.getData()[t], a = 0; a < (null == (o = n.list) ? void 0 : o.length); a++) {
                                var o;
                                e._checkActivityRedDot(n.list[a].act_id, n.list[a]), e._checkActivityRemove(n.list[a]) && i.push(n.list[a].act_id)
                            }
                            for (var r = function(e) {
                                    n.list = n.list.filter((function(t) {
                                        return Number(t.act_id) != Number(i[e])
                                    }))
                                }, s = 0; s < i.length; s++) r(s);
                            n.list.sort((function(e, t) {
                                return e.sort - t.sort
                            }))
                        }, i = 0; i < (null == (n = this.__User.SquareData.getData()) ? void 0 : n.length); i++) {
                        var n;
                        t(i)
                    }
                }, E._checkActivityRedDot = function(e, t) {
                    if (t.status = t.status || 0, _.ActivityIDMap[e] == _.RedDotConf.LargeDelivery)
                        if (l.table_isEmpty(this.getGiftLargeDeliveryConf())) this.__User.getTodayLocalRecord("hasOpenLargeDelivery", !1) || (t.status = 1), this._checkGiftLargeDeliveryConf();
                        else {
                            var i = this.hasRedDot(_.RedDotConf.LargeDelivery);
                            t.status = i ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ReservePoker)
                        if (l.table_isEmpty(this._reservrPoker)) this.__User.getTodayLocalRecord("hasOpenReservrPoker", !1) || (t.status = 1), this._checkGiftReservePokerConf(0 == t.status);
                        else {
                            var n = this.hasRedDot(_.RedDotConf.ReservePoker);
                            t.status = n ? 1 : 0, this.hasRewarded(_.RedDotConf.ReservePoker)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.GiftBacon)
                        if (l.table_isEmpty(this._giftBacon)) this.__User.getTodayLocalRecord("hasOpenRealGoods", !1) || (t.status = 1), this._checkGiftBaconConf(0 == t.status);
                        else {
                            var a = this.hasRedDot(_.RedDotConf.GiftBacon);
                            t.status = a ? 1 : 0, this.hasRewarded(_.RedDotConf.GiftBacon)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.GiftVisitor) {
                        if (!l.table_isEmpty(this._giftVisitor)) {
                            var o = this.hasRedDot(_.RedDotConf.GiftVisitor);
                            t.status = o ? 1 : 0, this.hasRewarded(_.RedDotConf.GiftVisitor)
                        }
                        this._checkGiftVisitorData()
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.Turntable) {
                        if (!l.table_isEmpty(this._turnTableData)) {
                            var r = this.hasRedDot(_.RedDotConf.Turntable);
                            t.status = r ? 1 : 0, this.hasRewarded(_.RedDotConf.Turntable)
                        }
                        this._checkTurnTableData()
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.GiftRedBag) {
                        if (!l.table_isEmpty(this._giftRedBag)) {
                            var s = this.hasRedDot(_.RedDotConf.GiftRedBag);
                            t.status = s ? 1 : 0
                        }
                        this._checkGiftRedBagConf(), this.canRedBagShow()
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.Sign) this.signCanShow() ? t.status = 1 : t.status = 0;
                    else if (_.ActivityIDMap[e] == _.RedDotConf.Holiday) l.table_isEmpty(this._discountGiftData) || this.hasRedDot(_.RedDotConf.Holiday), this._checkHolidaysGiftPackage(0 == t.status);
                    else if (_.ActivityIDMap[e] == _.RedDotConf.FirstPay) null == this._firstPayData && g.dispatch(u.NET_REQ_FIRST_PAY_CONFIG);
                    else if (_.ActivityIDMap[e] == _.RedDotConf.GiftClub)
                        if (l.table_isEmpty(this._giftClub)) this.__User.getTodayLocalRecord("hasOpenClub", !1) || (t.status = 1), this._checkGiftClubConf(0 == t.status);
                        else {
                            var c = this.hasRedDot(_.RedDotConf.GiftClub);
                            t.status = c ? 1 : 0, this.hasRewarded(_.RedDotConf.GiftClub)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.PhysicalReward)
                        if (l.table_isEmpty(this.getPhysicalRewardConf())) this.__User.getTodayLocalRecord("hasOpenPhysicalReward", !1) || (t.status = 1), this._checkPhysicalRewardConf(0 == t.status);
                        else {
                            var d = this.hasRedDot(_.RedDotConf.PhysicalReward);
                            t.status = d ? 1 : 0, this.hasRewarded(_.RedDotConf.PhysicalReward)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityCollectionNew)
                        if (l.table_isEmpty(this.getActivityCollectionConf())) this.__User.getTodayLocalRecord("hasOpenActivityCollectionNew", !1) || (t.status = 1, g.dispatch(u.NET_REQ_ACTIVITY_COLLECTION_CONFIG)), g.dispatch(u.NET_REQ_ACTIVITY_COLLECTION_CONFIG);
                        else {
                            var h = this.hasRedDot(_.RedDotConf.ActivityCollectionNew);
                            t.status = h ? 1 : 0, this.hasRewarded(_.RedDotConf.ActivityCollectionNew)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityCollectionReturn)
                        if (l.table_isEmpty(this.getActivityCollectionConf())) this.__User.getTodayLocalRecord("hasOpenActivityCollectionReturn", !1) || (t.status = 1), g.dispatch(u.NET_REQ_ACTIVITY_COLLECTION_CONFIG);
                        else {
                            var p = this.hasRedDot(_.RedDotConf.ActivityCollectionReturn);
                            t.status = p ? 1 : 0, this.hasRewarded(_.RedDotConf.ActivityCollectionReturn)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityAppointment)
                        if (l.table_isEmpty(this.getAppointmentConf())) this.__User.getTodayLocalRecord("hasOpenAppointment", !1) || (t.status = 1), this._checkAppointmentConf(0 == t.status);
                        else {
                            var f = this.hasRedDot(_.RedDotConf.ActivityAppointment);
                            t.status = f ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityWeekCard)
                        if (l.table_isEmpty(this.getWeekCardConf())) this.__User.getTodayLocalRecord("hasOpenWeekCard", !1) ? this._checkWeekCardConf() : t.status = 1;
                        else {
                            var m = this.hasRedDot(_.RedDotConf.ActivityWeekCard);
                            t.status = m ? 1 : 0, this.hasRewarded(_.RedDotConf.ActivityWeekCard)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityLucklySilver)
                        if (l.table_isEmpty(this.getLucklySilverConf())) this.__User.getTodayLocalRecord("hasOpenLucklySilver", !1) || (t.status = 1), this._checkLucklySilverConf();
                        else {
                            var E = this.hasRedDot(_.RedDotConf.ActivityLucklySilver);
                            t.status = E ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.AddToDesk) {
                        var v;
                        if (null != (v = this._atyList) && v.list && !l.table_isEmpty(this._atyList.list))
                            for (var R = 0, P = null == (y = this._atyList) ? void 0 : y.list.length; R < P; R++) {
                                var y;
                                if ("desktocoin" == this._atyList.list[R].act_type) {
                                    t.status = this._atyList.list[R].status;
                                    break
                                }
                            }
                        t.status
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.Kefugift) {
                        var C;
                        if (null != (C = this._atyList) && C.list && !l.table_isEmpty(this._atyList.list))
                            for (var S = 0, A = null == (I = this._atyList) ? void 0 : I.list.length; S < A; S++) {
                                var I;
                                if ("kefugift" == this._atyList.list[S].act_type) {
                                    t.status = this._atyList.list[S].status;
                                    break
                                }
                            }
                        t.status
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.AddToProgram) t.status = 1;
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityCashCow)
                        if (l.table_isEmpty(this.getCashCowConf())) this.__User.getTodayLocalRecord("hasOpenCashCow", !1) || (t.status = 1), this._checkCashCowConf();
                        else {
                            var D = this.hasRedDot(_.RedDotConf.ActivityCashCow);
                            t.status = D ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityLiveact)
                        if (null == this._liveactData) g.dispatch(u.NET_REQ_CONFIG, {
                            cmd: T.PHP_ACTIVITY_LIVEACT_CONFIG,
                            param: {}
                        });
                        else {
                            var N = this.hasRedDot(_.RedDotConf.ActivityLiveact);
                            t.status = N ? 1 : 0, this.hasRewarded(_.RedDotConf.ActivityLiveact)
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.ActivityCardGod) {
                        this.__User.getTodayLocalRecord("hasOpenCardGod", !1) || (t.status = 1);
                        var O = this.getCardGodConf();
                        if (l.table_isEmpty(null == O ? void 0 : O.day_tasks)) g.dispatch(u.NET_REQ_CARD_GOD_CONFIG);
                        else {
                            var b = this.hasRedDot(_.RedDotConf.ActivityCardGod);
                            t.status = b ? 1 : 0
                        }
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.PiggyBank) this.__User.getTodayLocalRecord("hasOpenPiggyBank", !1) || (t.status = 1), g.dispatch(u.NET_REQ_PIGGY_BANK_CONFIG);
                    else if (_.ActivityIDMap[e] == _.RedDotConf.FreeReward) {
                        var L, M;
                        if ((null == (L = this._freeRewardConfig) || null == (M = L.process_awards) ? void 0 : M.length) > 0) {
                            var G = this.hasRedDot(_.RedDotConf.FreeReward);
                            t.status = G ? 1 : 0
                        } else 0 == t.status && g.dispatch(u.NET_REQ_FREE_REWARD_CONFIG)
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.SuperPayGift)
                        if (l.table_isEmpty(this._suprePayData)) 0 == t.status && g.dispatch(u.NET_REQ_CONFIG, {
                            cmd: T.PHP_SUPER_PAY_ACTIVITY,
                            param: {}
                        });
                        else {
                            var k = this.hasRedDot(_.RedDotConf.SuperPayGift);
                            t.status = k ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.GoldSnake)
                        if (l.table_isEmpty(this._goldSnakeData)) 0 == t.status && g.dispatch(u.NET_REQ_CONFIG, {
                            cmd: T.PHP_GET_LIMITGIFT_CONFIG,
                            param: {}
                        });
                        else {
                            var U = this.hasRedDot(_.RedDotConf.GoldSnake);
                            t.status = U ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.CharmGift)
                        if (l.table_isEmpty(this._charmGiftData)) 0 == t.status && g.dispatch(u.NET_REQ_CONFIG, {
                            cmd: T.PHP_GET_CHARMGIFT,
                            param: {}
                        });
                        else {
                            var B = this.hasRedDot(_.RedDotConf.CharmGift);
                            t.status = B ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.CumulativePay)
                        if (l.table_isEmpty(this._cumulativePayData)) 0 == t.status && g.dispatch(u.NET_REQ_CUMULATIVE_PAY_CONFIG);
                        else {
                            var w = this.hasRedDot(_.RedDotConf.CumulativePay);
                            t.status = w ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.CumulativeCheckIn)
                        if (l.table_isEmpty(this._cumulativeCheckInData)) 0 == t.status && g.dispatch(u.NET_REQ_CUMULATIVE_CHECK_IN_CONFIG);
                        else {
                            var H = this.hasRedDot(_.RedDotConf.CumulativeCheckIn);
                            t.status = H ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.DailyGift)
                        if (l.table_isEmpty(this._dailyGiftData)) 0 == t.status && g.dispatch(u.NET_REQ_DAILY_GIFT_CONFIG);
                        else {
                            var F = this.hasRedDot(_.RedDotConf.DailyGift);
                            t.status = F ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.BoundPlan)
                        if (l.table_isEmpty(this._boundPlanData)) 0 == t.status && g.dispatch(u.NET_REQ_BOUND_PLAN_CONFIG);
                        else {
                            var q = this.hasRedDot(_.RedDotConf.BoundPlan);
                            t.status = q ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.BonusGift) {
                        var V, x;
                        if (null != (V = this._bonusGiftData) && null != (x = V.single_gift_list) && x.length) {
                            var W = this.hasRedDot(_.RedDotConf.BonusGift);
                            t.status = W ? 1 : 0
                        } else 0 == t.status && g.dispatch(u.NET_REQ_BONUS_GIFT_CONFIG)
                    } else if (_.ActivityIDMap[e] == _.RedDotConf.GameLottery)
                        if (l.table_isEmpty(this._gameLotteryData)) 0 == t.status && g.dispatch(u.NET_REQ_GAME_LOTTERY_CONFIG);
                        else {
                            var Y = this.hasRedDot(_.RedDotConf.GameLottery);
                            t.status = Y ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.NianBeast)
                        if (l.table_isEmpty(this._nianBeastData)) 0 == t.status && (g.dispatch(u.NET_REQ_NIAN_BEAST_CONFIG), setTimeout((function() {
                            g.dispatch(u.NET_REQ_NIAN_BEAST_TEAM)
                        }), 500));
                        else {
                            var j = this.hasRedDot(_.RedDotConf.NianBeast);
                            t.status = j ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.LaborPlayGame)
                        if (l.table_isEmpty(this._laborPlayGameData)) 0 == t.status && g.dispatch(u.NET_REQ_LABOR_PLAY_GAME_CONFIG);
                        else {
                            var K = this.hasRedDot(_.RedDotConf.LaborPlayGame);
                            t.status = K ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.TimeLogin)
                        if (l.table_isEmpty(this._timeLoginData)) 0 == t.status && g.dispatch(u.NET_REQ_TIMED_LOGIN_CONFIG);
                        else {
                            var Q = this.hasRedDot(_.RedDotConf.TimeLogin);
                            t.status = Q ? 1 : 0
                        }
                    else if (_.ActivityIDMap[e] == _.RedDotConf.CostumeBundle)
                        if (l.table_isEmpty(this._costumeBundleData)) 0 == t.status && g.dispatch(u.NET_REQ_COSTUME_BUNDLE_CONFIG);
                        else {
                            var J = this.hasRedDot(_.RedDotConf.CostumeBundle);
                            t.status = J ? 1 : 0
                        } t.status
                }, E.canShow = function(e) {
                    for (var t = !1, i = this.__User.SquareData.getData(), n = 0; n < (null == i ? void 0 : i.length); n++)
                        for (var a = i[n], o = 0; o < (null == (r = a.list) ? void 0 : r.length); o++) {
                            var r, s = a.list[o];
                            if (_.ActivityIDMap[s.act_id] == e) return !0
                        }
                    return t
                }, E.hasRedDot = function(e) {
                    var t, i, n = !1;
                    switch (e) {
                        case _.RedDotConf.GiftRedBag:
                            var a;
                            n = this._giftRedBag ? null == (a = this._giftRedBag) ? void 0 : a.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.Turntable:
                            var o;
                            n = this._turnTableData ? null == (o = this._turnTableData) ? void 0 : o.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.Sign:
                            n = this.signCanShow();
                            break;
                        case _.RedDotConf.GiftVisitor:
                            var r;
                            n = this._giftVisitor ? null == (r = this._giftVisitor) ? void 0 : r.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.FreeReward:
                            var s;
                            n = this._freeRewardConfig ? null == (s = this._freeRewardConfig) ? void 0 : s.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.CumulativeCheckIn:
                            var c;
                            this._cumulativeCheckInData && (n = null == (c = this._cumulativeCheckInData) ? void 0 : c.checkRedFun());
                            break;
                        case _.RedDotConf.ActivityCollectionNew:
                            var l;
                            n = this._activityCollection ? null == (l = this._activityCollection) ? void 0 : l.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityCollectionReturn:
                            var u;
                            n = this._activityCollection ? null == (u = this._activityCollection) ? void 0 : u.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.LargeDelivery:
                            var d;
                            n = this._largeDeliveryData ? null == (d = this._largeDeliveryData) ? void 0 : d.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityCardGod:
                            var h;
                            n = this._cardGodData ? null == (h = this._cardGodData) ? void 0 : h.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.GiftClub:
                            var p;
                            n = this._giftClub ? null == (p = this._giftClub) ? void 0 : p.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityLiveact:
                            var f;
                            n = this._liveactData ? null == (f = this._liveactData) ? void 0 : f.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.Shop:
                            n = this.__User.RedDot.has_reddot_shop();
                            break;
                        case _.RedDotConf.Email:
                            n = this.__User.RedDot.has_reddot_mail();
                            break;
                        case _.RedDotConf.Level:
                            n = this.__User.LevelData.checkLevelRedDot() || this.__User.LevelData.checkLotteryRedDot();
                            break;
                        case _.RedDotConf.Vip:
                            var m = this.__User.getVipConfigData();
                            n = null == m ? void 0 : m.hasRedDot;
                            break;
                        case _.RedDotConf.SuperPayGift:
                            this._suprePayData && (n = this._suprePayData.checkRedFun());
                            break;
                        case _.RedDotConf.GoldSnake:
                            n = !this.checkGoldSnakeHasOpen();
                            break;
                        case _.RedDotConf.CumulativePay:
                            n = !this.checkCumulativePayTodayOpen();
                            break;
                        case _.RedDotConf.FirstPay:
                            n = !this.checkGiftFirstPayHasOpen();
                            break;
                        case _.RedDotConf.Holiday:
                            n = !this.checkDiscountGiftHasOpen();
                            break;
                        case _.RedDotConf.PiggyBank:
                            var g;
                            n = this._piggyBankData ? null == (g = this._piggyBankData) ? void 0 : g.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityWeekCard:
                            var E;
                            n = this._weekCardData ? null == (E = this._weekCardData) ? void 0 : E.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityLucklySilver:
                            var v;
                            n = this._lucklySilverData ? null == (v = this._lucklySilverData) ? void 0 : v.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityCashCow:
                            var T;
                            n = this._cashCowData ? null == (T = this._cashCowData) ? void 0 : T.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ReservePoker:
                            var R;
                            n = this._reservrPoker ? null == (R = this._reservrPoker) ? void 0 : R.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.GiftBacon:
                            var P;
                            n = this._giftBacon ? null == (P = this._giftBacon) ? void 0 : P.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.PhysicalReward:
                            var y;
                            n = this._physicalRewardData ? null == (y = this._physicalRewardData) ? void 0 : y.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.ActivityAppointment:
                            var C;
                            n = this._appointmentData ? null == (C = this._appointmentData) ? void 0 : C.checkRedFun() : this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.CharmGift:
                            var S;
                            this._charmGiftData && (n = null == (S = this._charmGiftData) ? void 0 : S.checkRedFun());
                            break;
                        case _.RedDotConf.DailyGift:
                            var A;
                            if (this._dailyGiftData) return null == (A = this._dailyGiftData) ? void 0 : A.checkRedFun();
                            break;
                        case _.RedDotConf.BoundPlan:
                            var I;
                            if (this._boundPlanData) return null == (I = this._boundPlanData) ? void 0 : I.checkRedFun();
                            break;
                        case _.RedDotConf.ActivityNoticePopu:
                            n = this.__User.noticePup.getNoticeRedDot();
                            break;
                        case _.RedDotConf.BonusGift:
                            var D;
                            if (null != (t = this._bonusGiftData) && null != (i = t.single_gift_list) && i.length) return null == (D = this._bonusGiftData) ? void 0 : D.checkRedFun();
                            break;
                        case _.RedDotConf.GameLottery:
                            var N;
                            if (this._gameLotteryData) return null == (N = this._gameLotteryData) ? void 0 : N.checkRedFun();
                            n = this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.NianBeast:
                            var O;
                            if (this._nianBeastData) return null == (O = this._nianBeastData) ? void 0 : O.checkRedFun();
                            n = this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.LaborPlayGame:
                            var b;
                            if (this._laborPlayGameData) return null == (b = this._laborPlayGameData) ? void 0 : b.checkRedFun();
                            n = this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.TimeLogin:
                            var L;
                            if (this._timeLoginData) return null == (L = this._timeLoginData) ? void 0 : L.checkRedFun();
                            n = this.getSquareRedDotByTpye(e);
                            break;
                        case _.RedDotConf.Decoration:
                            n = this.__User.DecorationData.getDecorationStatus();
                            break;
                        case _.RedDotConf.CostumeBundle:
                            var M;
                            if (this._costumeBundleData) return null == (M = this._costumeBundleData) ? void 0 : M.checkRedFun();
                            n = this.getSquareRedDotByTpye(e);
                            break;
                        default:
                            n = this.getSquareRedDotByTpye(e)
                    }
                    return n
                }, E.hasRewarded = function(e) {
                    var t, i, n, a, o, r, s, c, l, u, d;
                    switch (e) {
                        case _.RedDotConf.ReservePoker:
                            return null == (t = this._reservrPoker) ? void 0 : t.hasRewarded();
                        case _.RedDotConf.LargeDelivery:
                            return null == (i = this._largeDeliveryData) ? void 0 : i.hasRewarded();
                        case _.RedDotConf.GiftVisitor:
                            return null == (n = this._giftVisitor) ? void 0 : n.hasRewarded();
                        case _.RedDotConf.Turntable:
                            return null == (a = this._turnTableData) ? void 0 : a.hasRewarded();
                        case _.RedDotConf.GiftBacon:
                            return null == (o = this._giftBacon) ? void 0 : o.hasRewarded();
                        case _.RedDotConf.GiftClub:
                            return null == (r = this._giftClub) ? void 0 : r.hasRewarded();
                        case _.RedDotConf.PhysicalReward:
                            return null == (s = this._physicalRewardData) ? void 0 : s.hasRewarded();
                        case _.RedDotConf.ActivityLiveact:
                            return null == (c = this._liveactData) ? void 0 : c.hasRewarded();
                        case _.RedDotConf.ActivityWeekCard:
                            return null == (l = this._weekCardData) ? void 0 : l.hasRewarded();
                        case _.RedDotConf.ActivityCardGod:
                            return null == (u = this._cardGodData) ? void 0 : u.hasRewarded();
                        case _.RedDotConf.FreeReward:
                            return null == (d = this._freeRewardConfig) ? void 0 : d.hasRewarded();
                        default:
                            return !1
                    }
                }, E.canReward = function(e) {
                    var t, i, n, a, o, r, s, c, l, u;
                    switch (e) {
                        case _.RedDotConf.ReservePoker:
                            return null == (t = this._reservrPoker) ? void 0 : t.canReward();
                        case _.RedDotConf.LargeDelivery:
                            return null == (i = this._largeDeliveryData) ? void 0 : i.canReward();
                        case _.RedDotConf.GiftVisitor:
                            return null == (n = this._giftVisitor) ? void 0 : n.canReward();
                        case _.RedDotConf.PhysicalReward:
                            return null == (a = this._physicalRewardData) ? void 0 : a.canReward();
                        case _.RedDotConf.ActivityWeekCard:
                            return null == (o = this._weekCardData) ? void 0 : o.canReward();
                        case _.RedDotConf.ActivityLiveact:
                            return null == (r = this._liveactData) ? void 0 : r.canReward();
                        case _.RedDotConf.ActivityCardGod:
                            return null == (s = this._cardGodData) ? void 0 : s.canReward();
                        case _.RedDotConf.PiggyBank:
                            return null == (c = this._piggyBankData) ? void 0 : c.canReward();
                        case _.RedDotConf.FreeReward:
                            return null == (l = this._freeRewardConfig) ? void 0 : l.canReward();
                        case _.RedDotConf.CumulativeCheckIn:
                            return null == (u = this._cumulativeCheckInData) ? void 0 : u.canReward();
                        default:
                            return !1
                    }
                }, E.reportClickSource = function(e) {
                    return this._reportClickSource.indexOf(e) > -1
                }, E.setHallActEnterCfg = function(e) {
                    for (var t = this, i = Object.keys(e), n = function(n) {
                            for (var a = [], o = e[i[n]], r = 0; r < o.length; r++) {
                                var s = o[r].sort;
                                t._checkActivityRedDot(o[r].act_id, o[r]), o[r].sort = s, t._checkActivityRemove(o[r]) && a.push(o[r].act_id)
                            }
                            for (var c = function(e) {
                                    o = o.filter((function(t) {
                                        return Number(t.act_id) != Number(a[e])
                                    }))
                                }, l = 0; l < a.length; l++) c(l);
                            o.sort((function(e, t) {
                                return e.sort - t.sort
                            }))
                        }, a = 0; a < (null == i ? void 0 : i.length); a++) n(a);
                    this.hallActEnterCfg = l.table_verify(e)
                }, E.updateHallActEnterCfg = function(e, t) {
                    for (var i = this.hallActEnterCfg, n = Object.keys(i), a = 0; a < (null == n ? void 0 : n.length); a++)
                        for (var o = i[n[a]], r = 0; r < (null == o ? void 0 : o.length); r++) {
                            var s = o[r];
                            if (e == _.ActivityIDMap[null == s ? void 0 : s.act_id]) return s.status, s.status = t ? 1 : 0, void(this._checkActivityRemove(s) && o.splice(r, 1))
                        }
                }, E.updateSigninData = function(e) {
                    if (e = l.table_verify(e), !l.isNull(e.today) && !l.isNull(e.signAward)) {
                        for (var t in e.today = l.number_valueOf(e.today), e.signAward) e.signAward[t].today = e.today;
                        this._signinData = e, this.print("updateSigninData: ", e), this.__User.RedDot.update_signin(this._signinData)
                    }
                }, E.updateSigninBySuccess = function(e) {
                    if (e = l.table_verify(e), l.isNull(this._signinData)) return null;
                    var t = null,
                        i = 0;
                    if (0 == this._sign_day ? (this._signinData.todayStatus = 1, i = this._signinData.today) : i = this._sign_day, !l.table_isEmpty(this._signinData.signAward)) {
                        var n = this._signinData.signAward[i - 1];
                        l.table_isEmpty(n) || (n.status = 3, e.video && ((n = this._signinData.signAward[this._signinData.today - 1]).saw_video = 1), t = n)
                    }
                    if (l.isNotNull(e.ctDay) && e.ctDay > 0 && !l.table_isEmpty(this._signinData.continueAward))
                        for (var a = 0; a < this._signinData.continueAward.length; a++) {
                            var o = this._signinData.continueAward[a];
                            l.table_isEmpty(o) || o.day != e.ctDay || (o.status = 1)
                        }
                    return this.__User.RedDot.update_signin(this._signinData), this.updateSquareRedDot(_.RedDotConf.Sign, this.__User.RedDot.hasRedDot(_.RedDotConf.Sign)), t
                }, E.updateContinusAward = function(e, t) {
                    var i = null;
                    if (e = l.table_verify(e), l.isNull(this._signinData)) return i;
                    if (l.isNotNull(t) && t > 0 && !l.table_isEmpty(this._signinData.continueAward))
                        for (var n = 0; n < this._signinData.continueAward.length; n++) {
                            var a = this._signinData.continueAward[n];
                            l.table_isEmpty(a) || a.day != t || (a.status = 2, i = a)
                        }
                    return this.__User.RedDot.update_signin(this._signinData), i
                }, E.updateSignDay = function(e) {
                    void 0 === e && (e = 0), this._sign_day = e
                }, E.signCanShow = function() {
                    if (l.table_isEmpty(this._signinData)) return !1;
                    if (!l.table_isEmpty(this._signinData.signAward)) {
                        var e = l.number_valueOf(this._signinData.videoStatus, 1),
                            t = this._signinData.signAward[this._signinData.today - 1];
                        if (!l.table_isEmpty(t))
                            if (l.string_isEmpty(s.deviceInfo.adunitId)) {
                                if (1 == t.status) return !0
                            } else if (1 == t.status || e && 3 == t.status && 0 == t.saw_video) return !0
                    }
                    var i = !1,
                        n = this._signinData.continueAward;
                    if (!l.table_isEmpty(n))
                        for (var a = 0; a < n.length; a++) {
                            var o = n[a];
                            if (!l.table_isEmpty(o) && 1 == o.status) {
                                i = !0;
                                break
                            }
                        }
                    return i
                }, E.updateContinueReward = function(e) {
                    if (e && e.day) {
                        var t = this._signinData.continueAward;
                        if (!l.table_isEmpty(t))
                            for (var i = 0; i < t.length; i++) l.table_isEmpty(t[i]) || Number(t[i].day) != Number(e.day) || (this._signinData.continueAward[i].status = 2)
                    }
                }, E.getSigninData = function() {
                    return this._signinData
                }, E.checkHaveSignin = function() {
                    return l.isNotNull(this._signinData)
                }, E.checkTodayIsShareSign = function() {
                    return this.__User.getTodayLocalRecord("hasShareSignin", !1)
                }, E.updateTodayShareSign = function() {
                    this.__User.setTodayLocalRecord("hasShareSignin", !0)
                }, E.setContinusAwardDay = function(e) {
                    this._continueAwardDay = e
                }, E.getContinusAwardDay = function() {
                    return this._continueAwardDay
                }, E.updateTurnTableData = function(e) {
                    var t = this;
                    e = l.table_verify(e), this._turnTableData = e || {}, this._turnTableData.checkRedFun = function() {
                        var e;
                        return l.number_valueOf(null == (e = t._turnTableData) ? void 0 : e.extra) > 0
                    }, this._turnTableData.hasRewarded = function() {
                        var e;
                        return l.number_valueOf(null == (e = t._turnTableData) ? void 0 : e.extra) <= 0
                    }, this.updateSquareRedDot(_.RedDotConf.Turntable, this._turnTableData.checkRedFun())
                }, E._checkTurnTableData = function() {
                    var e;
                    (l.isNull(this._turnTableData) || l.isNull(null == (e = this._turnTableData) ? void 0 : e.extra)) && g.dispatch(u.NET_REQ_TURN_TABLE_CONFIG)
                }, E.getTurnTableData = function() {
                    return this._turnTableData
                }, E.updateGiftLargeDeliveryConf = function(e) {
                    var t = this;
                    e = l.table_verify(e), this._largeDeliveryData = this.mergeArray(["sharetext", "sharebg", "rule", "maxcycle", "task"], e) || {}, this._largeDeliveryData.checkRedFun = function() {
                        if (!t.__User.getTodayLocalRecord("hasOpenLargeDelivery", !1)) return !0;
                        if (Object.prototype.hasOwnProperty.call(t._largeDeliveryData, "task"))
                            for (var e in t._largeDeliveryData.task) {
                                var i = t._largeDeliveryData.task[e];
                                if (i && 2 == i.status) return !0
                            }
                        return !1
                    }, this._largeDeliveryData.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(t._largeDeliveryData, "task")) {
                            for (var e in t._largeDeliveryData.task)
                                if (3 != t._largeDeliveryData.task[e].status) return !1;
                            return !0
                        }
                        return !1
                    }, this._largeDeliveryData.canReward = function() {
                        if (Object.prototype.hasOwnProperty.call(t._largeDeliveryData, "task"))
                            for (var e in t._largeDeliveryData.task)
                                if (2 == t._largeDeliveryData.task[e].status) return !0;
                        return !1
                    }, this._largeDeliveryData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenLargeDelivery", !0), t.updateSquareRedDot(_.RedDotConf.LargeDelivery, t._largeDeliveryData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.LargeDelivery, this._largeDeliveryData.checkRedFun()), console.log("activity  银币大派送活动配置：", this._largeDeliveryData)
                }, E._checkGiftLargeDeliveryConf = function() {
                    (l.isNull(this._largeDeliveryData) || l.isNull(this._largeDeliveryData.task)) && g.dispatch(u.NET_REQ_GIFT_LARGE_DELIVERY_CONFIG)
                }, E.getGiftLargeDeliveryConf = function() {
                    return this._largeDeliveryData
                }, E.updateGiftLargeDeliveryInviteList = function(e) {
                    this._largeDeliveryInviteList = l.table_verify(e), console.log("updateGiftLargeDeliveryInviteList:", this._largeDeliveryData)
                }, E.getGiftLargeDeliveryInviteList = function() {
                    return this._largeDeliveryInviteList
                }, E.updateGiftVisitorData = function(e) {
                    var t = this;
                    e = l.table_verify(e), this._giftVisitor = e || {}, this._giftVisitor.checkRedFun = function() {
                        if (Object.prototype.hasOwnProperty.call(t._giftVisitor, "tasks"))
                            for (var e in t._giftVisitor.tasks) {
                                var i = t._giftVisitor.tasks[e];
                                if (2 == i.status || 1 == i.status && i['finish_num"'] <= 0) return !0
                            }
                        return !1
                    }, this._giftVisitor.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(t._giftVisitor, "tasks")) {
                            for (var e in t._giftVisitor.tasks)
                                if (3 != t._giftVisitor.tasks[e].status) return !1;
                            return !0
                        }
                        return !1
                    }, this._giftVisitor.canReward = function() {
                        if (Object.prototype.hasOwnProperty.call(t._giftVisitor, "tasks"))
                            for (var e in t._giftVisitor.tasks)
                                if (2 == t._giftVisitor.tasks[e].status) return !0;
                        return !1
                    }, this.updateSquareRedDot(_.RedDotConf.GiftVisitor, this._giftVisitor.checkRedFun()), console.log("activity  新游体验活动配置：", this._giftVisitor)
                }, E._checkGiftVisitorData = function() {
                    var e, t;
                    null != (e = this._giftVisitor) && null != (t = e.tasks) && t.length && g.dispatch(u.NET_REQ_GIFT_VISITOR)
                }, E.getGiftVisitorData = function() {
                    return this._giftVisitor
                }, E.updateGiftRedBagData = function(e) {
                    var t = this;
                    e = l.table_verify(e), !l.table_isEmpty(e) && l.isNotNull(e.icon) ? this._giftRedBag = e : this._giftRedBag = {}, this._giftRedBag.errorCode = e.errorType || 0, this._giftRedBag.checkRedFun = function() {
                        var e;
                        if (l.isNotNull(t._giftRedBag)) return l.number_valueOf(null == (e = t._giftRedBag) ? void 0 : e.remain_num) > 0
                    }, this.updateSquareRedDot(_.RedDotConf.GiftRedBag, this._giftRedBag.checkRedFun())
                }, E._checkGiftRedBagConf = function() {
                    var e;
                    (l.isNull(this._giftRedBag) || null == (null == (e = this._giftRedBag) ? void 0 : e.remain_num)) && g.dispatch(u.NET_REQ_GIFT_REDBAG)
                }, E.getGiftRedBagConf = function() {
                    return this._giftRedBag
                }, E.checkHavrRedBag = function() {
                    return l.isNotNull(this._giftRedBag)
                }, E.canRedBagShow = function() {
                    var e;
                    return !l.isNotNull(this._giftRedBag) || l.number_valueOf(null == (e = this._giftRedBag) ? void 0 : e.remain_num) > 0
                }, E.checkTodayRedbagSub = function() {
                    return this.__User.getTodayLocalRecord("redbagsub", !1)
                }, E.updateTodayRedbagSub = function(e) {
                    this.__User.setTodayLocalRecord("redbagsub", e)
                }, E.updateTodayRedbagCheck = function(e) {
                    this.__User.setTodayLocalRecord("redbagcheck", e)
                }, E.getTodayRedbagCheck = function() {
                    return this.__User.getTodayLocalRecord("redbagcheck", 0)
                }, E.updateGiftReservePokerConf = function(e) {
                    var t = this;
                    e = l.table_verify(e), l.isNull(e.openRoomConf) || l.isNull(e.newerConf) || l.isNull(e.stime) || l.isNull(e.etime) ? this._reservrPoker = {} : (e.stime = l.number_valueOf(e.stime), e.etime = l.number_valueOf(e.etime), this._reservrPoker = this.mergeArray(["stime", "etime", "popNum", "wxbg", "rule", "openRoomConf", "newerConf", "openRoomNum", "newerNum"], e)), this._reservrPoker.checkRedFun = function() {
                        if (!t.__User.getTodayLocalRecord("hasOpenReservrPoker", !1)) return !0;
                        if (l.isNotNull(t._reservrPoker)) {
                            if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "openRoomConf"))
                                for (var e in t._reservrPoker.openRoomConf)
                                    if (2 == t._reservrPoker.openRoomConf[e].status) return !0;
                            if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "newerConf"))
                                for (var i in t._reservrPoker.newerConf)
                                    if (2 == t._reservrPoker.newerConf[i].status) return !0;
                            return !1
                        }
                        return !1
                    }, this._reservrPoker.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "openRoomConf")) {
                            for (var e in t._reservrPoker.openRoomConf) return 3 == t._reservrPoker.openRoomConf[e].status;
                            return !1
                        }
                        if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "newerConf")) {
                            for (var i in t._reservrPoker.newerConf) return 3 == t._reservrPoker.newerConf[i].status;
                            return !1
                        }
                    }, this._reservrPoker.canReward = function() {
                        if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "openRoomConf"))
                            for (var e in t._reservrPoker.openRoomConf)
                                if (2 == t._reservrPoker.openRoomConf[e].status) return !0;
                        if (Object.prototype.hasOwnProperty.call(t._reservrPoker, "newerConf"))
                            for (var i in t._reservrPoker.newerConf)
                                if (2 == t._reservrPoker.newerConf[i].status) return !0;
                        return !1
                    }, this._reservrPoker.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenReservrPoker", !0), t.updateSquareRedDot(_.RedDotConf.ReservePoker, t._reservrPoker.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ReservePoker, this._reservrPoker.checkRedFun())
                }, E._checkGiftReservePokerConf = function(e) {
                    (e || l.isNull(this._reservrPoker) || l.isNull(this._reservrPoker.openRoomConf)) && g.dispatch(u.NET_REQ_GIFT_RESERVE_POKER)
                }, E.getGiftReservePokerConf = function() {
                    var e;
                    return null == (e = this._reservrPoker) || e.openCallBack(), this._reservrPoker
                }, E.updateHolidaysGiftPackage = function(e) {
                    var t = this;
                    if (e = l.table_verify(e), l.isNull(e.giftpack) || l.isNull(e.sdate) || l.isNull(e.edate)) return !1;
                    e.sdate = l.number_valueOf(e.sdate), e.edate = l.number_valueOf(e.edate), this._discountGiftData = this.mergeArray(["add_time", "appid", "basemap", "buyBtn", "edate", "edit_time", "firstIcon", "giftpack", "id", "sdate", "sedate", "status"], e), this._discountGiftData.checkRedFun = function() {
                        return !t.checkDiscountGiftHasOpen()
                    }, this._discountGiftData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenDiscountGift", !0)
                    }, this.updateSquareRedDot(_.RedDotConf.Holiday, !this.checkDiscountGiftHasOpen())
                }, E._checkHolidaysGiftPackage = function(e) {
                    (e || l.isNull(this._discountGiftData) || l.isNull(this._discountGiftData.giftpack)) && g.dispatch(u.NET_REQ_HOLIDAYS_GIFTPACKAGE)
                }, E.getHolidaysGiftPackage = function() {
                    var e, t;
                    return (null == (e = this._discountGiftData) || null == (t = e.giftpack) ? void 0 : t.length) > 0 && this._discountGiftData.openCallBack(), this._discountGiftData
                }, E.checkHolidayPop = function() {
                    if (0 == v.isCanPay()) return !1;
                    if (this._discountGiftData && this._discountGiftData.sdate && this._discountGiftData.edate) {
                        var e = l.time();
                        if (e < this._discountGiftData.sdate || e > this._discountGiftData.edate) return !1
                    }
                    return !this.checkDiscountGiftHasOpen()
                }, E.checkDiscountGiftHasOpen = function() {
                    var e, t;
                    return !((null == (e = this._firstPayData) || null == (t = e.giftpack) ? void 0 : t.length) > 0) || this.__User.getTodayLocalRecord("hasOpenDiscountGift", !1)
                }, E.updateGiftBaconData = function(e) {
                    var t = this;
                    e = l.table_verify(e), !l.table_isEmpty(e) && l.isNotNull(e.task) ? this._giftBacon = e : this._giftBacon = {}, this._giftBacon.checkRedFun = function() {
                        if (Object.prototype.hasOwnProperty.call(t._giftBacon, "goods"))
                            for (var e in t._giftBacon.goods) {
                                var i = t._giftBacon.goods[e];
                                if (1 == Number(i.status)) return !0
                            }
                        if (t._giftBacon.task && t._giftBacon.task.complete && t._giftBacon.task.complete.status) {
                            var n = t._giftBacon.task.complete.status;
                            if (1 == Number(n)) return !0
                        }
                        if (!t.__User.getTodayLocalRecord("hasOpenRealGoods", !1)) return !0
                    }, this._giftBacon.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(t._giftBacon, "goods")) {
                            for (var e in t._giftBacon.goods) {
                                var i = t._giftBacon.goods[e];
                                if (0 == Number(i.status) || 1 == Number(i.status)) return !1
                            }
                            return !0
                        }
                        return !1
                    }, this._giftBacon.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenRealGoods", !0)
                    }, this.updateSquareRedDot(_.RedDotConf.GiftBacon, this._giftBacon.checkRedFun())
                }, E._checkGiftBaconConf = function(e) {
                    (e || null == this._giftBacon || l.isNull(this._giftBacon.task)) && g.dispatch(u.NET_REQ_GIFT_BACON)
                }, E.getGiftBaconConf = function() {
                    var e;
                    return null == (e = this._giftBacon) || e.openCallBack(), this._giftBacon
                }, E.updateFirstPayPackage = function(e) {
                    var t = this;
                    if (e = l.table_verify(e), this._firstPayData = {}, !l.table_isEmpty(e)) {
                        if (l.isNull(e.giftpack) || l.isNull(e.gid) || l.isNull(e.price)) return !1;
                        e.gid = l.number_valueOf(e.gid), e.price = l.number_valueOf(e.price), this._firstPayData = this.mergeArray(["gid", "price", "goodsBaseMap", "firstIcon", "giftpack", "button", "popNum", "original_price"], e)
                    }
                    this._firstPayData.checkRedFun = function() {
                        return !t.checkGiftFirstPayHasOpen()
                    }, this._firstPayData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenFirstPay", !0)
                    }, this.updateSquareRedDot(_.RedDotConf.FirstPay, this._firstPayData.checkRedFun())
                }, E.canShowFirstPay = function() {
                    var e;
                    return null == this._firstPayData || !l.table_isEmpty(null == (e = this._firstPayData) ? void 0 : e.giftpack)
                }, E.checkGiftFirstPayHasOpen = function() {
                    var e, t;
                    return !((null == (e = this._firstPayData) || null == (t = e.giftpack) ? void 0 : t.length) > 0) || this.__User.getTodayLocalRecord("hasOpenFirstPay", !1)
                }, E.getFirstPayPackage = function() {
                    var e, t;
                    return (null == (e = this._firstPayData) || null == (t = e.giftpack) ? void 0 : t.length) > 0 && this._firstPayData.openCallBack(), this._firstPayData
                }, E.updateActData = function(e) {
                    this._atyList = {
                        list: e.activity.sort((function(e, t) {
                            return Number(t.sort) - Number(e.sort)
                        })) || [],
                        _allowShareTime: 0
                    }, this.print("添加桌面----- this._atyList", this._atyList)
                }, E.getActData = function() {
                    return this._atyList
                }, E.checkUserReceiveInToByDesk = function() {
                    var e, t = "",
                        i = this.__User.WxShareData.getShareDataByType(_.ShareType.ADDTODESK);
                    if (this.__User.WxShareData.updateShareStatus(_.ShareType.ADDTODESK, 0), !l.table_isEmpty(null == (e = this._atyList) ? void 0 : e.list) && !l.table_isEmpty(i)) {
                        this.print("添加桌面----- referrerInfo", i, this._atyList), this.print("添加桌面----- referrerInfo------------1");
                        for (var n = 0; n < this._atyList.list.length; n++) {
                            var a = this._atyList.list[n];
                            if (this.print("添加桌面----- referrerInfo------------item=", a), a.is_jump) {
                                var o = f.JsonDecode(a.jump_code) || {},
                                    r = Number(o.cmd) || 0,
                                    s = o.tag || 0,
                                    c = l.string_format(h.USER_REWARD_BY_DESK, this.__User.getUserMid());
                                if (this.print("添加桌面----- referrerInfo------------key=", c), this.print("添加桌面----- referrerInfo------------_jumpCmd=", r, " mallScene=", s), r == _.JumpViewConf.POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT && s == _.JumpViewConf.POS_ACT_DESK_TAG)
                                    if (v.isWXPlatform()) {
                                        if (Number(i.scene) == _.AppLunchScene[1023]) {
                                            this.print("添加桌面-----从添加桌面进入了:", i.scene, this.__User.getUserMid());
                                            var u = 24 * Number(a.limit_time) * 60 * 60,
                                                d = new m;
                                            if (this._atyList._allowShareTime - l.time() > u && (p.remove(c), d.Stop()), !p.get(c, 0)) {
                                                t = a.activity_id, d.StartTime = 0, d.Start(), this._atyList._allowShareTime = d.StartTime, p.set(c, this.__User.getUserMid()), console.log("添加桌面-----终止循环，", n);
                                                break
                                            }
                                        }
                                    } else {
                                        var g = l.string_format(h.USER_REWARD_BY_DESK, this.__User.getUserMid());
                                        if (!p.get(g, 0)) {
                                            t = a.activity_id;
                                            var E = l.string_format(h.USER_REWARD_BY_DESK, this.__User.getUserMid());
                                            p.set(E, this.__User.getUserMid()), console.log("添加桌面-----终止循环", n);
                                            break
                                        }
                                    }
                            }
                        }
                        return t
                    }
                }, E.updateAddMyWxAmp = function(e) {
                    e = l.table_verify(e), this.updateSquareRedDot(_.RedDotConf.AddToProgram, !1)
                }, E.updateGiftClubData = function(e, t) {
                    var i = this;
                    e = l.table_verify(e), !l.table_isEmpty(e) && l.isNotNull(e.data) ? this._giftClub = e : this._giftClub = {}, this._giftClubAuth = t, this._giftClub.checkRedFun = function() {
                        if (Object.prototype.hasOwnProperty.call(i._giftClub, "data"))
                            for (var e in i._giftClub.data) {
                                var t = i._giftClub.data[e];
                                if (1 == Number(t.status)) return !0
                            }
                        if (!i.__User.getTodayLocalRecord("hasOpenClub", !1)) return !0
                    }, this._giftClub.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(i._giftClub, "data")) {
                            for (var e in i._giftClub.data) {
                                var t = i._giftClub.data[e];
                                if (1 == Number(t.status)) return !1
                            }
                            return !0
                        }
                        return !1
                    }, this._giftClub.openCallBack = function() {
                        i.__User.setTodayLocalRecord("hasOpenClub", !0)
                    }, this.updateSquareRedDot(_.RedDotConf.GiftClub, this._giftClub.checkRedFun())
                }, E._checkGiftClubConf = function(e) {
                    (e || l.isNull(this._giftClub) || l.isNull(this._giftClub.data)) && g.dispatch(u.NET_REQ_GIFT_CLUB, !0)
                }, E.getGiftClubConf = function() {
                    var e;
                    return null == (e = this._giftClub) || e.openCallBack(), this._giftClub
                }, E.getGiftClubAuth = function() {
                    return this._giftClubAuth
                }, E.updatePhysicalRewardConf = function(e) {
                    var t = this;
                    this._physicalRewardData = l.table_verify(e) || {}, this._physicalRewardData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenPhysicalReward", !1) || t._physicalRewardData.extra > 0 && !t._physicalRewardData.hasRewarded()
                    }, this._physicalRewardData.hasRewarded = function() {
                        if (Object.prototype.hasOwnProperty.call(t._physicalRewardData, "lottery")) {
                            for (var e in t._physicalRewardData.lottery) {
                                var i = t._physicalRewardData.lottery[e];
                                if (0 == Number(i.received)) return !1
                            }
                            return !0
                        }
                        return !1
                    }, this._physicalRewardData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenPhysicalReward", !0), t.updateSquareRedDot(_.RedDotConf.PhysicalReward, t._physicalRewardData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.PhysicalReward, this._physicalRewardData.checkRedFun()), console.log("activity 实物拉新活动配置：", this._physicalRewardData)
                }, E._checkPhysicalRewardConf = function(e) {
                    (e || null == this._physicalRewardData || l.isNull(this._physicalRewardData.lottery)) && g.dispatch(u.NET_REQ_PHYSICAL_REWARD_CONFIG)
                }, E.getPhysicalRewardConf = function() {
                    return this._physicalRewardData
                }, E.updatePhysicalRewardInviteList = function(e) {
                    this._physicalRewardInviteList = l.table_verify(e), console.log("updatePhysicalRewardInviteList:", this._physicalRewardInviteList)
                }, E.getPhysicalRewardInviteList = function() {
                    return this._physicalRewardInviteList
                }, E.updateActivityCollectionConf = function(e) {
                    var t = this;
                    this._activityCollection = l.table_verify(e) || {};
                    var i = [],
                        n = [];
                    this._activityCollection.data.forEach((function(e) {
                        1 == e.tab ? i = e.days : 2 == e.tab && (n = e)
                    }));
                    var a = !1;
                    i.forEach((function(e) {
                        1 == e.status && (a = !0)
                    })), this._activityCollection.isSignRed = a;
                    var o = !1;
                    n.scores.forEach((function(e) {
                        1 == e.status && (o = !0)
                    })), n.tasks.forEach((function(e) {
                        1 == e.status && (o = !0)
                    })), this._activityCollection.isPlayRed = o, 2 == this._activityCollection.u_type ? (this._activityCollection.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenActivityCollectionReturn", !1) || !(!a && !o)
                    }, this._activityCollection.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenActivityCollectionReturn", !0), t.updateSquareRedDot(_.RedDotConf.ActivityCollectionReturn, t._activityCollection.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityCollectionReturn, this._activityCollection.checkRedFun())) : (this._activityCollection.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenActivityCollectionNew", !1) || !(!a && !o)
                    }, this._activityCollection.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenActivityCollectionNew", !0), t.updateSquareRedDot(_.RedDotConf.ActivityCollectionNew, t._activityCollection.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityCollectionNew, this._activityCollection.checkRedFun())), console.log("activity 新手/回归活动配置：", this._activityCollection)
                }, E.getActivityCollectionConf = function() {
                    return this._activityCollection
                }, E.getCollectionBankruptCountPrivilege = function() {
                    var e, t = 0;
                    return this._activityCollection && this._activityCollection.countdown > 0 && (null == (e = this._activityCollection.data) || e.forEach((function(e) {
                        var i;
                        null != e && null != (i = e.privileges) && i.length && e.privileges.forEach((function(e) {
                            "bankruptsubsidy" == (null == e ? void 0 : e.type) && (t = l.number_valueOf(e.num))
                        }))
                    }))), t
                }, E.checkCollectionIsBack = function() {
                    if (this._activityCollection) return 2 == l.number_valueOf(this._activityCollection.u_type)
                }, E.updateAppointmentConf = function(e) {
                    var t = this;
                    if (this._appointmentData = {}, e && (this._appointmentData = l.table_verify(null == e ? void 0 : e.cfg) || {}), !l.table_isEmpty(this._appointmentData)) {
                        var i = l.string_format(h.USER_APPOINTMENT, this.__User.getUserMid()),
                            n = p.get(i, null),
                            a = [];
                        n && (a = JSON.parse(n));
                        var o = this._appointmentData.my_rank,
                            r = l.time();
                        a.push({
                            time: r,
                            mid: o.mid,
                            score: o.score,
                            rank: o.rank,
                            status: this._appointmentData.status
                        }), p.set(i, a), this._appointmentData.cacheData = a, this._appointmentData.etime - r <= 259200 && this._appointmentData.etime - r >= 0 ? this._appointmentData.isLastThreeDay = !0 : this._appointmentData.isLastThreeDay = !1
                    }
                    this._appointmentData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenAppointment", !1)
                    }, this._appointmentData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenAppointment", !0), t.updateSquareRedDot(_.RedDotConf.ActivityAppointment, t._appointmentData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityAppointment, this._appointmentData.checkRedFun()), console.log("activity 约牌大比拼活动配置：", this._appointmentData), this.updateAppointmentGuid(this._appointmentData)
                }, E._checkAppointmentConf = function(e) {
                    var t;
                    (e || l.isNull(this._appointmentData) || null == (null == (t = this._appointmentData) ? void 0 : t.cacheData)) && g.dispatch(u.NET_REQ_APPOINTMENT_CONFIG)
                }, E.getAppointmentConf = function() {
                    return this._appointmentData
                }, E.checkTodayAppointmentSub = function() {
                    return this.__User.getTodayLocalRecord("appointmentSub", !1)
                }, E.updateTodayAppointmentSub = function(e) {
                    this.__User.setTodayLocalRecord("appointmentSub", e)
                }, E.updateAppointmentGuid = function(e) {
                    if (this._guid_act_id == _.RedDotConf.ActivityAppointment) {
                        var t = "",
                            i = -1;
                        if (1 == (null == e ? void 0 : e.is_apply) && null != e && e.isLastThreeDay) {
                            var n = e.my_rank.rank;
                            if (console.log("约局排名变动activityData", e), 0 == n);
                            else if (n <= 10) t = n > 3 ? "距前三差" + (n - 3) + "名" : "第" + n + "名", i = 1;
                            else if (e.cacheData)
                                for (var a = e.cacheData.length - 1; a >= 0; a--) {
                                    var o = e.cacheData[a].rank;
                                    if (o > 0) {
                                        if (o > n) {
                                            t = "" + (o - n), i = 2;
                                            break
                                        }
                                        if (o < n && n <= 50 && o > 0) {
                                            t = "" + (n - o), i = 3;
                                            break
                                        }
                                    }
                                }
                        }
                        this.updateBundActivityGuid(t, !l.table_isEmpty(null == e ? void 0 : e.cacheData), i)
                    }
                }, E.bundAcvitity = function(e) {
                    var t = this;
                    this._guid_act_id = e.act_id, this._guid_act_node = e.act_node;
                    var i = l.time();
                    if (e.parent && e.act_node) {
                        var o = e.parent;
                        g.dispatch(u.ACTIVITY_UPDATE_CONFIG, this._guid_act_id), o.on(n.ACTIVE_IN_HIERARCHY_CHANGED, (function(e) {
                            1 == e.active && l.time() - i > 5 && (g.dispatch(u.ACTIVITY_UPDATE_CONFIG, t._guid_act_id), i = l.time())
                        })), this._guid_act_node.on(a.EventType.TOUCH_END, (function(t) {
                            g.dispatch(u.REPORT_CLICK_EVENT, e.clickId), g.dispatch(u.SYS_PLAY_EFFECT, d.CommClick), g.dispatch(u.VIEW_UI_OPEN, e.uuid)
                        }))
                    }
                }, E.updateBundActivityGuid = function(e, t, i) {
                    var n;
                    if (void 0 === i && (i = -1), null != (n = this._guid_act_node) && n.isValid)
                        if (this._guid_act_node.active = t, l.string_isEmpty(e)) {
                            var a = this._guid_act_node.getChildByName("bg");
                            a && (a.active = !1)
                        } else {
                            var s = this._guid_act_node.getChildByName("bg");
                            if (s.children.forEach((function(e) {
                                    e.active = !1
                                })), 1 == i) {
                                var c = null == s ? void 0 : s.getChildByName("desc");
                                if (c) {
                                    c.active = !0;
                                    var u = c.getComponent(o);
                                    u.string = e, u.updateRenderer(), setTimeout((function() {
                                        var e = c.getComponent(r).width + 20;
                                        s.getComponent(r).width = e < 120 ? 120 : e
                                    }), 100)
                                }
                            } else if (2 == i || 3 == i) {
                                var d = null == s ? void 0 : s.getChildByName("text" + i);
                                d && (d.getChildByName("rankDis").getComponent(o).string = e, d.active = !0)
                            }
                        }
                }, E.updateWeekCardConf = function(e) {
                    var t = this;
                    this._weekCardData = {}, e && (this._weekCardData = l.table_verify(e) || {}), this._weekCardData.canReward = function() {
                        var e, i = null == (e = t._weekCardData) ? void 0 : e.cfg;
                        if (i) {
                            for (var n in i) {
                                var a = i[n];
                                if (1 == Number(a.status)) return !0
                            }
                            return !1
                        }
                        return !1
                    }, this._weekCardData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenWeekCard", !1) || t._weekCardData.canReward() || !1
                    }, this._weekCardData.hasRewarded = function() {
                        var e, i = null == (e = t._weekCardData) ? void 0 : e.cfg;
                        if (i) {
                            for (var n in i) {
                                var a = i[n];
                                if (1 == Number(a.status)) return !1
                            }
                            return !0
                        }
                        return !1
                    }, this._weekCardData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenWeekCard", !0), t.updateSquareRedDot(_.RedDotConf.ActivityWeekCard, t._weekCardData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityWeekCard, this._weekCardData.checkRedFun()), console.log("activity 周卡活动配置：", this._weekCardData)
                }, E._checkWeekCardConf = function() {
                    var e;
                    null == (null == (e = this._weekCardData) ? void 0 : e.cfg) && g.dispatch(u.NET_REQ_WEEKCARD_CONFIG)
                }, E.getWeekCardConf = function() {
                    return this._weekCardData || null
                }, E.updateLucklySilverConf = function(e) {
                    var t = this;
                    this._lucklySilverData = {}, e && (this._lucklySilverData = l.table_verify(e) || {}), this._lucklySilverData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenLucklySilver", !1)
                    }, this._lucklySilverData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenLucklySilver", !0), t.updateSquareRedDot(_.RedDotConf.ActivityLucklySilver, t._lucklySilverData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityLucklySilver, this._lucklySilverData.checkRedFun()), console.log("activity 幸运银币活动配置：", this._lucklySilverData)
                }, E._checkLucklySilverConf = function() {
                    var e;
                    null != this._lucklySilverData && null != (null == (e = this._lucklySilverData) ? void 0 : e.goods) || g.dispatch(u.NET_REQ_LUCKLY_SILVER_CONFIG, {
                        refresh: 0
                    })
                }, E.getLucklySilverConf = function() {
                    return this._lucklySilverData || null
                }, E.updateCashCowConf = function(e) {
                    var t = this;
                    this._cashCowData = {}, e && (this._cashCowData = l.table_verify(e) || {}), this._cashCowData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenCashCow", !1)
                    }, this._cashCowData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenCashCow", !0), t.updateSquareRedDot(_.RedDotConf.ActivityCashCow, t._cashCowData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityCashCow, this._cashCowData.checkRedFun()), console.log("activity 摇钱树活动配置：", this._cashCowData)
                }, E._checkCashCowConf = function() {
                    var e;
                    null != this._cashCowData && null != (null == (e = this._cashCowData) ? void 0 : e.goods) || g.dispatch(u.NET_REQ_CASH_COW_CONFIG, {
                        refresh: 0
                    })
                }, E.getCashCowConf = function() {
                    return this._cashCowData || null
                }, E.updateLiveactData = function(e) {
                    var t = this;
                    l.table_isEmpty(e) || l.table_isEmpty(null == e ? void 0 : e.data) ? this._liveactData = {} : (e.data.forEach((function(e) {
                        e.id = l.number_valueOf(e.id), e.name = e.name || "", e.img = e.img || "", e.type = l.number_valueOf(e.type), e.award_num = l.number_valueOf(e.award_num), e.num = l.number_valueOf(e.num), e.finish_num = l.number_valueOf(e.finish_num), e.status = l.number_valueOf(e.status)
                    })), this._liveactData = e), this._liveactData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenLiveactCow", !1) || t._liveactData.canReward() || !1
                    }, this._liveactData.canReward = function() {
                        if (Object.prototype.hasOwnProperty.call(t._liveactData, "data"))
                            for (var e in t._liveactData.data)
                                if (1 == t._liveactData.data[e].status) return !0;
                        return !1
                    }, this._liveactData.hasRewarded = function() {
                        var e, i = null == (e = t._liveactData) ? void 0 : e.data;
                        if (i) {
                            for (var n in i) {
                                var a = i[n];
                                if (1 == Number(a.status) || 0 == Number(a.status)) return !1
                            }
                            return !0
                        }
                        return !1
                    }, this._liveactData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenLiveactCow", !0), t.updateSquareRedDot(_.RedDotConf.ActivityLiveact, t._liveactData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityLiveact, this._liveactData.checkRedFun())
                }, E.checkLiveactReport = function() {
                    var e = this._getLiveactTime();
                    if (e > 0) return this.updateLiveactTime(0), e
                }, E._getLiveactTime = function() {
                    return p.get("_game_liveact_end_time", 0)
                }, E.updateLiveactTime = function(e) {
                    var t = p.get("_game_liveact_start_time", 0);
                    0 == t && p.set("_game_liveact_start_time", e), p.set("_game_liveact_end_time", e), console.log("updateLiveactTime 直播", t, e)
                }, E.getLiveactData = function() {
                    var e, t;
                    return null == (e = this._liveactData) || e.openCallBack(), (null == (t = this._liveactData) ? void 0 : t.data) || []
                }, E.updateCardGodConf = function(e) {
                    var t = this;
                    if (this._cardGodData = {}, e) {
                        var i = l.table_verify(e) || {};
                        i.day_tasks = this._orderCardGodData(i.day_tasks || []), i.week_tasks = this._orderCardGodData(i.week_tasks || []), i.season_tasks = this._orderCardGodData(i.season_tasks || []), i.day_awards = this._orderCardGodPointAwards(i.day_awards || []), i.week_awards = this._orderCardGodPointAwards(i.week_awards || []), i.activeIndex = -1, i.unActiveIndex = -1, this._cardGodData = i
                    }
                    this._cardGodData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenCardGod", !1) || t._cardGodData.canReward() ? (console.log("牌神令checkRedFun true"), !0) : (console.log("牌神令checkRedFun false"), !1)
                    }, this._cardGodData.canReward = function() {
                        return t._cardGodData.checkCanRewardLevel() || t._cardGodData.checkCanRewardDaily() || t._cardGodData.checkCanRewardWeekly() || t._cardGodData.checkCanRewardSeason()
                    }, this._cardGodData.checkCanRewardLevel = function() {
                        var e = !1,
                            i = t._cardGodData.level_awards || [];
                        if (t._cardGodData.activeIndex = -1, t._cardGodData.unActiveIndex = -1, null != i && i.length)
                            for (var n = 0; n < i.length; n++) {
                                var a = i[n]; - 1 != t._cardGodData.activeIndex || 1 != (null == a ? void 0 : a.free_status) && 1 != (null == a ? void 0 : a.active_status) || (e = !0, t._cardGodData.activeIndex = n), -1 == t._cardGodData.unActiveIndex && 0 == (null == a ? void 0 : a.free_status) && (t._cardGodData.unActiveIndex = n)
                            }
                        return console.log("牌神令checkCanRewardLevel", e), e
                    }, this._cardGodData.hasRewarded = function() {
                        return console.log("牌神令checkCanRewardDaily"), !t._cardGodData.canReward()
                    }, this._cardGodData.checkCanRewardDaily = function() {
                        var e = !!t._cardGodData.day_tasks[0] && 1 == t._cardGodData.day_tasks[0].status,
                            i = (t._cardGodData.day_awards || []).some((function(e) {
                                return 1 == (null == e ? void 0 : e.status)
                            }));
                        return console.log("牌神令checkCanRewardDaily", e || i), e || i
                    }, this._cardGodData.checkCanRewardWeekly = function() {
                        var e = !!t._cardGodData.week_tasks[0] && 1 == t._cardGodData.week_tasks[0].status,
                            i = (t._cardGodData.week_awards || []).some((function(e) {
                                return 1 == (null == e ? void 0 : e.status)
                            }));
                        return console.log("牌神令checkCanRewardWeekly", e || i), e || i
                    }, this._cardGodData.checkCanRewardSeason = function() {
                        var e = !!t._cardGodData.season_tasks[0] && 1 == t._cardGodData.season_tasks[0].status;
                        return console.log("牌神令checkCanRewardSeason", e), e
                    }, this._cardGodData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenCardGod", !0), t.updateSquareRedDot(_.RedDotConf.ActivityCardGod, t._cardGodData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.ActivityCardGod, this._cardGodData.checkRedFun()), console.log("activity 牌神令活动配置：", this._cardGodData)
                }, E.getCardGodConf = function() {
                    return this._cardGodData || null
                }, E.updateCardGodTask = function(e, t, i) {
                    var n, a, o, r;
                    if (void 0 === i && (i = !1), i) {
                        if (null != (n = this._cardGodData.level_awards) && n.length) {
                            var s = this._cardGodData.level_awards.filter((function(t) {
                                return t.level == e
                            }));
                            if (s.length > 0) return 0 == t ? s[0].free_status = 2 : s[0].active_status = 2, !0
                        }
                    } else if (0 == t && null != (a = this._cardGodData.day_tasks) && a.length) {
                        var c = this._cardGodData.day_tasks.filter((function(t) {
                            return t.id == e
                        }));
                        if (c.length > 0) return c[0].status = 2, this._cardGodData.day_tasks = this._orderCardGodData(this._cardGodData.day_tasks), !0
                    } else if (1 == t && null != (o = this._cardGodData.week_tasks) && o.length) {
                        var l = this._cardGodData.week_tasks.filter((function(t) {
                            return t.id == e
                        }));
                        if (l.length > 0) return l[0].status = 2, this._cardGodData.week_tasks = this._orderCardGodData(this._cardGodData.week_tasks), !0
                    } else if (2 == t && null != (r = this._cardGodData.season_tasks) && r.length) {
                        var u = this._cardGodData.season_tasks.filter((function(t) {
                            return t.id == e
                        }));
                        if (u.length > 0) return u[0].status = 2, this._cardGodData.season_tasks = this._orderCardGodData(this._cardGodData.season_tasks), !0
                    }
                    return !1
                }, E.updateCardGodProgress = function(e) {
                    var t = this;
                    return !(!this._cardGodData || l.table_isEmpty(e) || (["my_level", "my_expr", "my_week_expr", "my_day_point", "my_week_point"].forEach((function(i) {
                        l.isNull(e[i]) || (t._cardGodData[i] = e[i])
                    })), 0))
                }, E.updateCardGodPointAward = function(e, t) {
                    var i, n;
                    if (!this._cardGodData) return !1;
                    if (null != (i = n = 1 == t ? this._cardGodData.week_awards : 2 == t ? this._cardGodData.season_awards : this._cardGodData.day_awards) && i.length) {
                        var a = n.filter((function(t) {
                            return t.id == e
                        }));
                        if (a.length > 0) return a[0].status = 2, 1 == t ? this._cardGodData.week_awards = this._orderCardGodPointAwards(n) : 2 == t ? this._cardGodData.season_awards = this._orderCardGodPointAwards(n) : this._cardGodData.day_awards = this._orderCardGodPointAwards(n), !0
                    }
                    return !1
                }, E._orderCardGodData = function(e) {
                    var t = {
                        1: 0,
                        0: 1,
                        2: 2
                    };
                    return e.slice().sort((function(e, i) {
                        var n, a, o = (null != (n = t[e.status]) ? n : 99) - (null != (a = t[i.status]) ? a : 99);
                        if (0 !== o) return o;
                        var r = l.number_valueOf(e.sort, 0) - l.number_valueOf(i.sort, 0);
                        return 0 !== r ? r : l.number_valueOf(e.id, 0) - l.number_valueOf(i.id, 0)
                    }))
                }, E._orderCardGodPointAwards = function(e) {
                    return e.slice().sort((function(e, t) {
                        var i = l.number_valueOf(e.point, 0) - l.number_valueOf(t.point, 0);
                        return 0 !== i ? i : l.number_valueOf(e.id, 0) - l.number_valueOf(t.id, 0)
                    }))
                }, E.updatePiggyBankConf = function(e) {
                    var t = this;
                    this._piggyBankData = {}, e && (this._piggyBankData = l.table_verify(e) || {}), 1 == this._piggyBankData.is_last ? this._piggyBankData.status = 4 : this._piggyBankData.money <= 0 ? this._piggyBankData.status = 0 : this._piggyBankData.money < this._piggyBankData.total_money ? this._piggyBankData.money < this._piggyBankData.need_money ? this._piggyBankData.status = 1 : this._piggyBankData.status = 2 : this._piggyBankData.status = 3;
                    var i = this.__User.getTodayLocalRecord("piggyBankStatusRecord", []);
                    i[1] != this._piggyBankData.status && (i[0] = i[1] || 0, i[1] = this._piggyBankData.status, this.__User.setTodayLocalRecord("piggyBankStatusRecord", i), 2 != this._piggyBankData.status && 3 != this._piggyBankData.status || this.__User.setTodayLocalRecord("hasClickMenuPiggyBank", !1)), this._piggyBankData.canReward = function() {
                        return console.log("存钱罐活动 canReward"), 2 == t._piggyBankData.status || 3 == t._piggyBankData.status
                    }, this._piggyBankData.checkRedFun = function() {
                        return !(t.__User.getTodayLocalRecord("hasOpenPiggyBank", !1) && !t._piggyBankData.canReward())
                    }, this._piggyBankData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenPiggyBank", !0), t.updateSquareRedDot(_.RedDotConf.PiggyBank, t._piggyBankData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.PiggyBank, this._piggyBankData.checkRedFun()), console.log("activity 存钱罐配置：", this._piggyBankData)
                }, E.getPiggyBankConf = function() {
                    return l.table_isEmpty(this._piggyBankData) ? null : this._piggyBankData
                }, E.hasPiggyBankConfig = function() {
                    var e;
                    return !l.isNull(null == (e = this._piggyBankData) ? void 0 : e.gid)
                }, E.isShowPiggyBank = function() {
                    return !(!this._piggyBankData || !c.ShopFlag) && this._piggyBankData.pop_num - this.__User.getTodayLocalRecord("PiggyBankPopNum", 0) > 0 && this._piggyBankData.canReward()
                }, E.updatePiggyBankRemainPopNum = function() {
                    var e = this.__User.getTodayLocalRecord("PiggyBankPopNum", 0);
                    this.__User.setTodayLocalRecord("PiggyBankPopNum", e + 1)
                }, E.updateGameBoxConf = function(e) {
                    this._gameBoxData = {}, e && (this._gameBoxData = l.table_verify(e) || {}), 1 == this._gameBoxData.is_rcv && (this._gameBoxData = null), console.log("activity 对局宝箱配置：", this._gameBoxData), g.dispatch(u.EVENT_UPDATE_GAME_BOX_CONFIG)
                }, E.updateGameBoxConfByPhp = function(e) {
                    e && (l.table_isEmpty(this._gameBoxData) ? g.dispatch(u.NET_REQ_GAME_BOX_CONFIG) : (this._gameBoxData.finish_num = e.finish_num, this._gameBoxData.total_num = e.total_num, this._gameBoxData.is_rcv = e.is_rcv, 1 == this._gameBoxData.is_rcv && (this._gameBoxData = null), console.log("activity 对局宝箱配置更新：", this._gameBoxData), g.dispatch(u.EVENT_UPDATE_GAME_BOX_CONFIG)))
                }, E.getGameBoxConf = function() {
                    return this._gameBoxData || null
                }, E.resetGameBoxConf = function() {
                    this._gameBoxData = null
                }, E.updateFreeRewardConf = function(e) {
                    var t = this;
                    this._freeRewardConfig = e, e && e.process_awards.forEach((function(e, t) {
                        e.index = t
                    })), this._freeRewardConfig.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenFreeReward", !0), t.updateSquareRedDot(_.RedDotConf.FreeReward, t._freeRewardConfig.checkRedFun())
                    }, this._freeRewardConfig.canReward = function() {
                        var e, i = !1;
                        if ((null == (e = t._freeRewardConfig.process_awards) ? void 0 : e.length) > 0) {
                            var n = t._freeRewardConfig.process_awards.filter((function(e) {
                                e.status
                            }));
                            (null == n ? void 0 : n.length) > 0 && (i = !0)
                        }
                        return console.log("免费奖励 canReward false"), i
                    }, this._freeRewardConfig.checkRedFun = function() {
                        return !(t.__User.getTodayLocalRecord("hasOpenFreeReward", !1) && !t._freeRewardConfig.canReward())
                    }, this.updateSquareRedDot(_.RedDotConf.FreeReward, this._freeRewardConfig.checkRedFun()), console.log("activity 免费奖励配置：", this._freeRewardConfig), g.dispatch(u.UPDATE_FREE_REWARD_CONFIG)
                }, E.getFreeRewardConf = function() {
                    return this._freeRewardConfig || null
                }, E.checkFreeRewardExpired = function() {
                    var e, t;
                    return !(null == (e = this._freeRewardConfig) || null == (t = e.process_awards) || !t.length || !(0 != this._freeRewardConfig.stime && this._freeRewardConfig.stime > l.time() || 0 != this._freeRewardConfig.etime && this._freeRewardConfig.etime < l.time()))
                }, E.updateFreeRewardAwards = function(e) {
                    var t, i;
                    (null == (t = this._freeRewardConfig) || null == (i = t.process_awards) ? void 0 : i.length) >= e + 1 && (this._freeRewardConfig.process_awards[e].status = 2, this.updateSquareRedDot(_.RedDotConf.FreeReward, this._freeRewardConfig.checkRedFun()))
                }, E.notifyFreeRewardFinish = function(e) {
                    this._freeRewardConfig && (this._freeRewardConfig.assist_nick = e)
                }, E.checkFreeRewardTaskStatus = function() {
                    if (this._freeRewardConfig) return this._freeRewardConfig.assist_nick
                }, E.updateFreeRewardTasks = function(e) {
                    var t, i;
                    console.log("更新免费奖励任务", e), 0 != (null == (t = this._freeRewardConfig) || null == (i = t.process_tasks) ? void 0 : i.length) && (null == e ? void 0 : e.get_process) > 0 && (this._freeRewardConfig.current_process = e.total_process, this._freeRewardConfig.process_tasks[e.idx] && (this._freeRewardConfig.process_tasks[e.idx].status = 1), e.nick && this.notifyFreeRewardFinish(e.nick), this._freeRewardConfig.process_awards.forEach((function(t) {
                        t.process <= e.total_process && 0 == t.status && (t.status = 1)
                    })), g.dispatch(u.UPDATE_FREE_REWARD_PROGRESS, e), this.updateSquareRedDot(_.RedDotConf.FreeReward, this._freeRewardConfig.checkRedFun()))
                }, E.getCurFreeRewardTask = function() {
                    var e = null,
                        t = this._freeRewardConfig.process_tasks.length;
                    if (t > 0) {
                        for (var i = 0; i < t; i++)
                            if (0 == this._freeRewardConfig.process_tasks[i].status) return (e = this._freeRewardConfig.process_tasks[i]).taskId = i, e;
                        (e = this._freeRewardConfig.process_tasks[t - 1]).taskId = t - 1
                    }
                    return e
                }, E.updateSuperPayConf = function(e) {
                    var t = this;
                    this._suprePayData = e, null != this._suprePayData && (this._suprePayData.hasRewarded = function() {
                        var e, i = l.shallowCopy(t._suprePayData.gifts);
                        return 0 == (null == (e = i = i.filter((function(e) {
                            return 1 != e.status
                        }))) ? void 0 : e.length)
                    }, this._suprePayData.canReward = function() {
                        var e;
                        if ((null == (e = t._suprePayData.gifts) ? void 0 : e.length) > 0) {
                            var i, n = l.shallowCopy(t._suprePayData.gifts);
                            if ((null == (i = n = n.filter((function(e) {
                                    return 1 != e.status
                                }))) ? void 0 : i.length) > 0 && 0 == n[0].good_price) return !0
                        }
                    }, this._suprePayData.checkRedFun = function() {
                        var e;
                        if ((null == (e = t._suprePayData.gifts) ? void 0 : e.length) > 0) {
                            var i, n = l.shallowCopy(t._suprePayData.gifts);
                            if ((null == (i = n = n.filter((function(e) {
                                    return 1 != e.status
                                }))) ? void 0 : i.length) > 0 && 0 == n[0].good_price) return !0
                        }
                        return !1
                    })
                }, E.rewardSuperPayConf = function(e, t) {
                    var i, n;
                    if ((null == (i = this._suprePayData) || null == (n = i.gifts) ? void 0 : n.length) > 0)
                        for (var a = this._suprePayData.gifts, o = a.length, r = 0; r < o; r++)
                            if ((a[r].gid == t || a[r].id == e) && 0 == a[r].status) {
                                this._suprePayData.gifts[r].status = 1, this._suprePayData.gifts[r + 1] && (this._suprePayData.gifts[r + 1].valid = !0);
                                break
                            } this.updateSquareRedDot(_.RedDotConf.SuperPayGift, this._suprePayData.checkRedFun())
                }, E.getSuperPayConf = function() {
                    var e, t;
                    if ((null == (e = this._suprePayData) || null == (t = e.gifts) ? void 0 : t.length) > 0) {
                        var i = l.shallowCopy(this._suprePayData.gifts),
                            n = l.clone(this._suprePayData);
                        if (n.gifts = n.gifts.filter((function(e) {
                                return 1 != e.status
                            })), n.gifts.length < 4) {
                            n.gifts.length > 0 && (n.gifts[0].valid = !0), i = i.filter((function(e) {
                                return 0 != e.status
                            }));
                            for (var a = 4 - n.gifts.length, o = 0; o < a; o++) n.gifts.unshift(i[i.length - o - 1])
                        } else
                            for (n.gifts.length > 0 && (n.gifts[0].valid = !0); n.gifts.length > 4;) n.gifts.pop();
                        return n
                    }
                    return null
                }, E.updateSnakeData = function(e) {
                    var t = this;
                    this._goldSnakeData = e, null != this._goldSnakeData && (this._goldSnakeData.hasRewarded = function() {
                        var e, i, n = l.shallowCopy(null == (e = t._goldSnakeData) ? void 0 : e.goodsData);
                        return 0 == (null == (i = n = n.filter((function(e) {
                            return e.buyNum >= e.limitNum || 0 == e.stock
                        }))) ? void 0 : i.length)
                    }, this._goldSnakeData.canReward = function() {
                        var e, i;
                        if ((null == (e = t._goldSnakeData) || null == (i = e.canReward) ? void 0 : i.length) > 0) {
                            var n, a = l.shallowCopy(t._goldSnakeData.goodsData);
                            return (null == (n = a = a.filter((function(e) {
                                return e.buyNum < e.limitNum && e.stock > 0
                            }))) ? void 0 : n.length) > 0
                        }
                    }, this._goldSnakeData.checkRedFun = function() {
                        return !t.checkGoldSnakeHasOpen()
                    }, this._goldSnakeData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenGoldSnake", !0)
                    })
                }, E.updateGoldSnakeBuyNum = function(e, t) {
                    var i;
                    if ((null == (i = this._goldSnakeData.goodsData) ? void 0 : i.length) > 0)
                        for (var n, a = null == (n = this._goldSnakeData.goodsData) ? void 0 : n.length, o = 0; o < a; o++) this._goldSnakeData.goodsData[o].buyId == t && (this._goldSnakeData.goodsData[o].stock = e.surplusNum)
                }, E.getGoldSnakeConf = function() {
                    var e, t;
                    return (null == (e = this._goldSnakeData) || null == (t = e.goodsData) ? void 0 : t.length) > 0 && this._goldSnakeData.openCallBack(), this._goldSnakeData
                }, E.onBuyResult = function(e) {
                    var t, i = l.number_valueOf(e.item_id);
                    if ((null == (t = this._goldSnakeData.goodsData) ? void 0 : t.length) > 0)
                        for (var n = 0; n < (null == (a = this._goldSnakeData.goodsData) ? void 0 : a.length); n++) {
                            var a;
                            this._goldSnakeData.goodsData[n].gid == i && ++this._goldSnakeData.goodsData[n].buyNum
                        }
                }, E.checkGoldSnakeHasOpen = function() {
                    var e, t;
                    return !((null == (e = this._goldSnakeData) || null == (t = e.goodsData) ? void 0 : t.length) > 0) || this.__User.getTodayLocalRecord("hasOpenGoldSnake", !1)
                }, E.updateCharmGiftData = function(e) {
                    var t = this;
                    this._charmGiftData = e, null != this._charmGiftData && (this._charmGiftData.hasRewarded = function() {
                        var e, i, n, a;
                        return (null == (e = t._charmGiftData) ? void 0 : e.etime) > 0 && (null == (i = t._charmGiftData) ? void 0 : i.etime) < l.time() || (null == (n = t._charmGiftData) ? void 0 : n.stime) > 0 && (null == (a = t._charmGiftData) ? void 0 : a.stime) > l.time() || t._charmGiftData.use_num >= t._charmGiftData.limit_num
                    }, this._goldSnakeData.canReward = function() {
                        var e, i, n, a, o, r;
                        if ((null == (e = t._charmGiftData) || null == (i = e.gifts) ? void 0 : i.length) > 0) return !((null == (n = t._charmGiftData) ? void 0 : n.etime) > 0 && (null == (a = t._charmGiftData) ? void 0 : a.etime) < l.time()) && !((null == (o = t._charmGiftData) ? void 0 : o.stime) > 0 && (null == (r = t._charmGiftData) ? void 0 : r.stime) > l.time()) && t._charmGiftData.use_num < t._charmGiftData.limit_num
                    }, this._goldSnakeData.checkRedFun = function() {
                        var e, i, n, a, o, r;
                        return (null == (e = t._charmGiftData) || null == (i = e.gifts) ? void 0 : i.length) > 0 && !((null == (n = t._charmGiftData) ? void 0 : n.etime) > 0 && (null == (a = t._charmGiftData) ? void 0 : a.etime) < l.time()) && !((null == (o = t._charmGiftData) ? void 0 : o.stime) > 0 && (null == (r = t._charmGiftData) ? void 0 : r.stime) > l.time()) && t._charmGiftData.use_num < t._charmGiftData.limit_num
                    })
                }, E.getCharmGiftConf = function() {
                    return this._charmGiftData
                }, E.onCharmGiftBuyResult = function(e) {
                    var t, i, n = l.number_valueOf(e.item_id);
                    (null == (t = this._charmGiftData) || null == (i = t.gifts) ? void 0 : i.length) > 0 && this._charmGiftData.gid == n && ++this._charmGiftData.use_num
                }, E.updateCumulativePayData = function(e) {
                    var t = this;
                    this._cumulativePayData = e, null != this._cumulativePayData && (this._cumulativePayData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenCumulativePay", !0)
                    }, this._cumulativePayData._currentTab = 0)
                }, E.getCumulativePayConf = function() {
                    var e;
                    return (null == (e = this._cumulativePayData) ? void 0 : e.goods_list.length) > 0 && this._cumulativePayData.openCallBack(), this._cumulativePayData || null
                }, E.updateCumulativePayTab = function(e) {
                    this._cumulativePayData._currentTab = e
                }, E.setCumulativePayGoodsId = function(e) {
                    this._cumulativePayData._gid = e
                }, E.getCumulativePayGoodsId = function() {
                    return this._cumulativePayData._gid || 0
                }, E.checkCumulativePayTodayOpen = function() {
                    var e;
                    return !((null == (e = this._cumulativePayData) ? void 0 : e.goods_list.length) > 0) || this.__User.getTodayLocalRecord("hasOpenCumulativePay", !1)
                }, E.updateCumulativeCheckInData = function(e) {
                    var t = this;
                    this._cumulativeCheckInData = e, null != this._cumulativeCheckInData && (this._cumulativeCheckInData.canReward = function() {
                        for (var e = !1, i = 0; i < t._cumulativeCheckInData.day_list.length; i++)
                            if (0 == t._cumulativeCheckInData.day_list[i].status) {
                                e = !0;
                                break
                            } return e
                    }, this._cumulativeCheckInData.checkRedFun = function() {
                        return !!t._cumulativeCheckInData.canReward()
                    }, this.updateSquareRedDot(_.RedDotConf.CumulativeCheckIn, this._cumulativeCheckInData.checkRedFun()))
                }, E.getCumulativeCheckInConf = function() {
                    return this._cumulativeCheckInData
                }, E.checkGameActivityConfig = function(e) {
                    var t, i, n, a, o, r, s, c, u, d, h, p, f, m, g, E, v, T, R, P, y, C, S, A, I, D, N, O, b, L, M, G, k = !1;
                    switch (e) {
                        case _.ActivityAcId.Sign:
                            null != (t = this._signinData) && t.continueAward && (k = !0);
                            break;
                        case _.ActivityAcId.GiftVisitor:
                            null != (i = this._giftVisitor) && null != (n = i.tasks) && n.length && (k = !0);
                            break;
                        case _.ActivityAcId.GiftRedBag:
                            l.isNotNull(null == (a = this._giftRedBag) ? void 0 : a.remain_num) && (k = !0);
                            break;
                        case _.ActivityAcId.LargeDelivery:
                            null != (o = this._largeDeliveryData) && null != (r = o.task) && r.LargeDelivery && (k = !0);
                            break;
                        case _.ActivityAcId.Turntable:
                            l.isNull(null == (s = this._turnTableData) ? void 0 : s.extra) && (k = !0);
                            break;
                        case _.ActivityAcId.Holiday:
                            var U = this._discountGiftData;
                            (null == U || null == (c = U.giftpack) ? void 0 : c.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.FirstPay:
                            var B = this._firstPayData;
                            (null == B || null == (u = B.giftpack) ? void 0 : u.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.GiftClub:
                            null != (d = this._giftClub) && null != (h = d.data) && h.length && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityCollectionNew:
                            var w = this.__User.Activity.getActivityCollectionConf();
                            w && l.isNotNull(w.u_type) && 1 == l.number_valueOf(w.u_type, 1) && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityCollectionReturn:
                            var H = this.__User.Activity.getActivityCollectionConf();
                            H && l.isNotNull(H.u_type) && 2 == l.number_valueOf(H.u_type, 1) && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityWeekCard:
                            null != (p = this._weekCardData) && null != (f = p.cfg) && f.length && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityLucklySilver:
                            var F = this.__User.Activity.getLucklySilverConf();
                            l.table_isEmpty(F) || (k = !0);
                            break;
                        case _.ActivityAcId.ActivityCashCow:
                            var q = this.__User.Activity.getCashCowConf();
                            l.table_isEmpty(q) || (k = !0);
                            break;
                        case _.ActivityAcId.ActivityLiveact:
                            null != (m = this._liveactData) && null != (g = m.data) && g.length && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityCardGod:
                            var V = this.__User.Activity.getCardGodConf();
                            (null == V || null == (E = V.day_tasks) ? void 0 : E.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.PiggyBank:
                            var x = this.__User.Activity.getPiggyBankConf();
                            l.table_isEmpty(x) || (k = !0);
                            break;
                        case _.ActivityAcId.FreeReward:
                            null != (v = this._freeRewardConfig) && null != (T = v.process_awards) && T.length && (k = !0);
                            break;
                        case _.ActivityAcId.SuperPayGift:
                            var W = this.getSuperPayConf();
                            (null == W || null == (R = W.gifts) ? void 0 : R.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.GoldSnake:
                            var Y = this.__User.Activity.getGoldSnakeConf();
                            2 == (null == Y || null == (P = Y.goodsData) ? void 0 : P.length) && (k = !0);
                            break;
                        case _.ActivityAcId.CharmGift:
                            (null == (y = this._charmGiftData) || null == (C = y.gifts) ? void 0 : C.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.DailyGift:
                            null != (S = this._dailyGiftData) && null != (A = S.stall) && A.length && (k = !0);
                            break;
                        case _.ActivityAcId.BoundPlan:
                            null != (I = this._boundPlanData) && null != (D = I.goods_list) && D.length && (k = !0);
                            break;
                        case _.ActivityAcId.CumulativePay:
                            (null == (N = this._cumulativePayData) ? void 0 : N.goods_list.length) > 0 && (k = !0);
                            break;
                        case _.ActivityAcId.CumulativeCheckIn:
                            null != (O = this._cumulativeCheckInData) && null != (b = O.day_list) && b.length && (k = !0);
                            break;
                        case _.ActivityAcId.BonusGift:
                            null != (L = this._bonusGiftData) && null != (M = L.single_gift_list) && M.length && (k = !0);
                            break;
                        case _.ActivityAcId.ActivityNoticePopu:
                            null != (G = this.__User.noticePup.getNoticeConfig()) && G.length && (k = !0);
                            break;
                        case _.ActivityAcId.GameLottery:
                            var j = this.__User.Activity.getGameLotteryConfig();
                            l.table_isEmpty(j) || (k = !0);
                            break;
                        case _.ActivityAcId.NianBeast:
                            var K = this.__User.Activity.getNianBeastConfig();
                            l.table_isEmpty(K) || (k = !0);
                            break;
                        case _.ActivityAcId.LaborPlayGame:
                            var Q = this.__User.Activity.getLaborPlayGameConfig();
                            l.table_isEmpty(Q) || (k = !0)
                    }
                    return k
                }, E.updateMoreGameConf = function(e) {
                    this._moreGameData = e
                }, E.getMoreGameConf = function() {
                    return this._moreGameData || []
                }, E.updateDailyGiftConfig = function(e) {
                    var t = this;
                    this._dailyGiftData = e, null != this._dailyGiftData && (this._dailyGiftData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenDailyGift", !1)
                    }, this._dailyGiftData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenDailyGift", !0), t.updateSquareRedDot(_.RedDotConf.DailyGift, t._dailyGiftData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.DailyGift, this._dailyGiftData.checkRedFun()))
                }, E.getDailyGiftConfig = function() {
                    return this._dailyGiftData
                }, E.canDailyGiftBuy = function() {
                    var e, t, i;
                    return !(null == (e = this._dailyGiftData) || null == (t = e.stall) || !t.length) && 0 == l.number_valueOf(null == (i = this._dailyGiftData) ? void 0 : i.state, -1)
                }, E.getDailyGiftDataByPhp = function() {
                    g.dispatch(u.NET_REQ_DAILY_GIFT_CONFIG), setTimeout((function() {
                        g.dispatch(u.NOTIFY_HALL_SQUARE)
                    }), 1)
                }, E.updateBoundPlanConfig = function(e) {
                    var t, i, n = this;
                    if (this._boundPlanData = e, null != (t = this._boundPlanData) && null != (i = t.goods_list) && i.length) {
                        var a = !0,
                            o = -1;
                        this._boundPlanData.goods_list.forEach((function(e, t) {
                            0 == e.status && a && (a = !1), 3 == e.status && -1 == o && (o = t)
                        })), this._boundPlanData.todayBuy = a, this._boundPlanData.tipIndex = o, this._boundPlanData.checkRedFun = function() {
                            return !n.__User.getTodayLocalRecord("hasOpenBoundPlan", !1)
                        }, this._boundPlanData.openCallBack = function() {
                            n.__User.setTodayLocalRecord("hasOpenBoundPlan", !0), n.updateSquareRedDot(_.RedDotConf.BoundPlan, n._boundPlanData.checkRedFun())
                        }, this.updateSquareRedDot(_.RedDotConf.BoundPlan, this._boundPlanData.checkRedFun())
                    }
                }, E.getBoundPlanConfig = function() {
                    return this._boundPlanData
                }, E.updateBonusGiftConfig = function(e) {
                    var t, i = this;
                    if (null != e && null != (t = e.single_gift_list) && t.length) {
                        for (var n = 0, a = e.single_gift_list, o = 0; o < a.length; o++)
                            if (o < a.length - 1) {
                                if (a[o].price <= e.day_recharge && a[o + 1].price > e.day_recharge) {
                                    a[o].active = !0, n += Number(a[o].rate);
                                    break
                                }
                            } else if (a[o].price <= e.day_recharge) {
                            a[o].active = !0, n += Number(a[o].rate);
                            break
                        }
                        for (var r = e.total_gift_list, s = 0; s < r.length; s++)
                            if (s < r.length - 1) {
                                if (r[s].price <= e.total_recharge && r[s + 1].price > e.total_recharge) {
                                    r[s].active = !0, n += Number(r[s].rate);
                                    break
                                }
                            } else if (r[s].price <= e.total_recharge) {
                            r[s].active = !0, n += Number(r[s].rate);
                            break
                        }
                        e.totalRate = n, this._bonusGiftData && this._bonusGiftData.totalRate != n && (e.hasRedDot = !0), this._bonusGiftData = e, this._bonusGiftData.checkRedFun = function() {
                            return !(i.__User.getTodayLocalRecord("hasOpenBonusGift", !1) && !i._bonusGiftData.hasRedDot)
                        }, this._bonusGiftData.openCallBack = function() {
                            i.__User.setTodayLocalRecord("hasOpenBonusGift", !0), i._bonusGiftData.hasRedDot = !1, i.updateSquareRedDot(_.RedDotConf.BonusGift, i._bonusGiftData.checkRedFun())
                        }, this.updateSquareRedDot(_.RedDotConf.BonusGift, this._bonusGiftData.checkRedFun())
                    }
                }, E.getBonusGiftConfig = function() {
                    return this._bonusGiftData
                }, E.updateGameLotteryConfig = function(e) {
                    var t = this;
                    this._gameLotteryData = e, null != this._gameLotteryData && (this._gameLotteryData.checkRedFun = function() {
                        if (!t.__User.getTodayLocalRecord("hasOpenGameLottery", !1)) return !0;
                        if (t._gameLotteryData.coupon > 0) return !0;
                        if (t._gameLotteryData.daily_tasks && t._gameLotteryData.daily_tasks.length > 0)
                            for (var e = 0; e < t._gameLotteryData.daily_tasks.length; e++)
                                if (1 == t._gameLotteryData.daily_tasks[e].status) return !0;
                        return !1
                    }, this._gameLotteryData.sortTaskList = function() {
                        var e = [],
                            i = [],
                            n = [];
                        t._gameLotteryData.daily_tasks.forEach((function(t) {
                            0 == t.status ? e.push(t) : 1 == t.status ? i.push(t) : n.push(t)
                        })), t._gameLotteryData.daily_tasks = i.concat(e, n)
                    }, this._gameLotteryData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenGameLottery", !0), t.updateSquareRedDot(_.RedDotConf.GameLottery, t._gameLotteryData.checkRedFun())
                    }, this._gameLotteryData.sortTaskList(), this.updateSquareRedDot(_.RedDotConf.GameLottery, this._gameLotteryData.checkRedFun()))
                }, E.getGameLotteryConfig = function() {
                    return this._gameLotteryData
                }, E.updateGameLotteryTaskData = function(e) {
                    var t, i = this;
                    e.length > 0 && null != (t = this._gameLotteryData) && t.daily_tasks && (e.forEach((function(e) {
                        i._gameLotteryData.daily_tasks.forEach((function(t) {
                            t.id == e.id && (t.finish_num = e.num, t.finish_num >= t.num && (t.status = 1))
                        }))
                    })), this._gameLotteryData.sortTaskList(), this.updateSquareRedDot(_.RedDotConf.GameLottery, this._gameLotteryData.checkRedFun()))
                }, E.updateNianBeastConfig = function(e) {
                    var t, i, n, a = this;
                    if (null != e) {
                        e.showAttackReddot = (null == (t = this._nianBeastData) ? void 0 : t.showAttackReddot) || !1, e.showLotteryReddot = (null == (i = this._nianBeastData) ? void 0 : i.showLotteryReddot) || !1, e.showLotteryReddotWheel = (null == (n = this._nianBeastData) ? void 0 : n.showLotteryReddotWheel) || 0, this._nianBeastData = e;
                        var o = l.string_format(h.Activity_Nian_Beast, this.__User.getUserMid()),
                            r = p.get(o, ""),
                            s = (r = r && JSON.parse(r) || {}).actData || {};
                        this._nianBeastData.whellChange = (null == s ? void 0 : s.wheel) != e.wheel, this._nianBeastData.whellChange && !this._nianBeastData.lottery_time && this._nianBeastData.firecracker > 0 && (this._nianBeastData.showAttackReddot = !0), this._nianBeastData.showLotteryReddotWheel != e.wheel && this._nianBeastData.lottery_time > 0 && this._nianBeastData.lottery_num > 0 && (this._nianBeastData.showLotteryReddot = !0, this._nianBeastData.showLotteryReddotWheel = e.wheel), r.actData = e, p.set(o, r), this._nianBeastData.teamChange = !1, this._nianBeastData.checkRedFun = function() {
                            return !a.__User.getTodayLocalRecord("hasOpenNianBeast", !1) || !!(a._nianBeastData.teamChange || a._nianBeastData.showAttackReddot || a._nianBeastData.showLotteryReddot)
                        }, this._nianBeastData.openCallBack = function() {
                            a.__User.setTodayLocalRecord("hasOpenNianBeast", !0), a.updateSquareRedDot(_.RedDotConf.NianBeast, a._nianBeastData.checkRedFun())
                        }, this._nianBeastData.resetNianBeastData = function(e) {
                            "teamChange" == e ? a._nianBeastData.teamChange = !1 : "showAttackReddot" == e ? a._nianBeastData.showAttackReddot = !1 : "showLotteryReddot" == e && (a._nianBeastData.showLotteryReddot = !1)
                        }, this.updateSquareRedDot(_.RedDotConf.NianBeast, this._nianBeastData.checkRedFun())
                    }
                }, E.getNianBeastConfig = function() {
                    return this._nianBeastData
                }, E.operNianBeastTeamChange = function(e) {
                    this._nianBeastData.teamChange = !0, this.updateSquareRedDot(_.RedDotConf.NianBeast, this._nianBeastData.checkRedFun())
                }, E.updateNianBeastTeamData = function(e) {
                    var t = l.string_format(h.Activity_Nian_Beast, this.__User.getUserMid()),
                        i = p.get(t, ""),
                        n = (i = i && JSON.parse(i) || {}).teamData || [],
                        a = {};
                    n.forEach((function(e) {
                        a[e.join_time] = !0
                    }));
                    for (var o = [], r = 0; r < e.length; r++) e[r] && e[r].mid != this.__User.getUserMid() && (a[e[r].join_time] || (this._nianBeastData.teamChange = !0, o.push(r)));
                    i.teamData = e, i.teamChangeList = o, p.set(t, i)
                }, E.countDownToZero = function(e, t) {
                    var i = this;
                    this._timerHandle || (console.log("countDownToZero", e), this._timerHandle = setTimeout((function() {
                        t(), i._timerHandle = null
                    }), 1e3 * e))
                }, E.updateLaborPlayGameConfig = function(e) {
                    var t = this;
                    this._laborPlayGameData = e, null != this._laborPlayGameData && (this._laborPlayGameData.checkRedFun = function() {
                        if (!t.__User.getTodayLocalRecord("hasOpenLaborPlayGame", !1)) return !0;
                        if (t._laborPlayGameData.list)
                            for (var e = 0; e < t._laborPlayGameData.list.length; e++)
                                if (1 == t._laborPlayGameData.list[e].status) return !0;
                        return !1
                    }, this._laborPlayGameData.sortTaskList = function() {
                        var e = [],
                            i = [],
                            n = [];
                        t._laborPlayGameData.list.forEach((function(t) {
                            0 == t.status ? e.push(t) : 1 == t.status ? i.push(t) : n.push(t)
                        })), t._laborPlayGameData.list = i.concat(e, n)
                    }, this._laborPlayGameData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenLaborPlayGame", !0), t.updateSquareRedDot(_.RedDotConf.LaborPlayGame, t._laborPlayGameData.checkRedFun())
                    }, this._laborPlayGameData.sortTaskList(), this.updateSquareRedDot(_.RedDotConf.LaborPlayGame, this._laborPlayGameData.checkRedFun()))
                }, E.getLaborPlayGameConfig = function() {
                    return this._laborPlayGameData
                }, E.updateLaborPlayGameTaskData = function(e) {
                    var t, i = this;
                    e.length > 0 && null != (t = this._laborPlayGameData) && t.list && (e.forEach((function(e) {
                        i._laborPlayGameData.list.forEach((function(t) {
                            t.id == e.id && (t.finish_num = e.num, t.finish_num >= t.num && (t.status = 1))
                        }))
                    })), this._laborPlayGameData.sortTaskList(), this.updateSquareRedDot(_.RedDotConf.LaborPlayGame, this._laborPlayGameData.checkRedFun()))
                }, E.updateTimeLoginConfig = function(e) {
                    var t = this;
                    this._timeLoginData = e, null != this._timeLoginData && (this._timeLoginData.checkRedFun = function() {
                        for (var e = 0; e < t._timeLoginData.cfg_data.length; e++)
                            if (2 == t._timeLoginData.cfg_data[e].status) return !0;
                        return !1
                    }, this._timeLoginData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenTimeLogin", !0), t.updateSquareRedDot(_.RedDotConf.TimeLogin, t._timeLoginData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.TimeLogin, this._timeLoginData.checkRedFun()))
                }, E.getTimeLoginConfig = function() {
                    return this._timeLoginData
                }, E.updateCostumeBundleConfig = function(e) {
                    var t = this;
                    this._costumeBundleData = e, null != this._costumeBundleData && (this._costumeBundleData.checkRedFun = function() {
                        return !t.__User.getTodayLocalRecord("hasOpenCostumeBundle", !1)
                    }, this._costumeBundleData.openCallBack = function() {
                        t.__User.setTodayLocalRecord("hasOpenCostumeBundle", !0), t.updateSquareRedDot(_.RedDotConf.CostumeBundle, t._costumeBundleData.checkRedFun())
                    }, this.updateSquareRedDot(_.RedDotConf.CostumeBundle, this._costumeBundleData.checkRedFun()))
                }, E.getCostumeBundleConfig = function() {
                    return this._costumeBundleData
                }, i
            }(E)), i._RF.pop()
        }
    }
}))