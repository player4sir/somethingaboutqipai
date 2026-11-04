System.register("chunks:///_virtual/UIConfig.ts", ["cc", "./ClientInfo.ts", "./GameChannelConfig.ts", "./SubGameConfig.ts", "./GameConstant.ts", "./GameRes.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.ClientInfo
        }, function(e) {
            n = e.GameChannelConfig
        }, function(e) {
            a = e.SubGameConfig
        }, function(e) {
            o = e.GConstants
        }, function(e) {
            r = e.GameRes
        }],
        execute: function() {
            var s, c;
            e({
                    PreloadID: void 0,
                    ReleaseID: void 0,
                    getUIConfig: function() {
                        var e;
                        if (Object.keys(f).length > 0) return f;
                        var t = ((e = {})[i.CurrentGameID] = {
                            gameUI: h.GameScenePrefab,
                            pkg: o.PkgLoaderTaskList.Game
                        }, e);
                        return f = a.mergeGameListUIConfig(t), f = n.mergeGameListUIConfig(t), t
                    },
                    inf_LayerType: void 0
                }), t._RF.push({}, "5e2c5M4Lw9D/Jgosyb+wBSB", "UIConfig", void 0),
                function(e) {
                    e.Game = "LayerGame", e.UI = "LayerUI", e.PopUp = "LayerPopUp", e.Dialog = "LayerDialog", e.DialogTip = "LayerDialogTip", e.Alert = "LayerAlert", e.Animal = "LayerDialogAnimal", e.NetWindow = "LayerNet", e.Notify = "LayerNotify", e.Guide = "LayerGuide"
                }(c || (c = e("inf_LayerType", {})));
            var l, u, d = 1,
                _ = e("GetUIID", (function() {
                    return d += 1
                })),
                h = e("UIID", (function() {}));
            h.GameScenePrefab = 1, h.LoginPrefab = _(), h.ToastTip = _(), h.SysPopWindow = _(), h.PopWindow = _(), h.NoticeDialog = _(), h.NetLoading = _(), h.HallPrefab = _(), h.RoolLevelUpGift = _(), h.PlayerInfoCenter = _(), h.SelectLevelPrefab = _(), h.HallGameListPrefab = _(), h.GameRuleDialog = _(), h.SettingPrefab = _(), h.ExchangePrefab = _(), h.BagPrefab = _(), h.BagItemInfoPrefab = _(), h.BagCompositeViewPrefab = _(), h.BagExchangeViewPrefab = _(), h.BagUseViewPrefab = _(), h.BagExchangeHistoryPrefab = _(), h.GetPropPrefab = _(), h.GetPropPrefabPSL = _(), h.LevelUpPSL = _(), h.RewardShowPSL = _(), h.UserAgreePrivate = _(), h.PictureDialog = _(), h.MallPrefab = _(), h.MallPrefabH = _(), h.IosRechargePrefab = _(), h.BuyDialogPrefab = _(), h.BuyPropDialogPrefab = _(), h.BuyPropDialogPrefabH = _(), h.SigninPrefab = _(), h.MailPrefab = _(), h.GiftDiscountPrefab = _(), h.AtyCenterPrefab = _(), h.NoticePopuPrefab = _(), h.FirstPayPrefab = _(), h.DecorationPrefab = _(), h.MatchDetailPrefab = _(), h.MatchRulePrefab = _(), h.MatchRecordPrefab = _(), h.MatchSignUpPrefab = _(), h.MatchHallTipsPrefab = _(), h.GameMatchLoadPrefab = _(), h.GameMatchWaitPrefab = _(), h.GameMatchSettlePrefab = _(), h.PrivatePrefab = _(), h.PrivateFriendPrefab = _(), h.PrivateRecordPrefab = _(), h.PrivateRecordSharePrefab = _(), h.PrivatePokerInfoPrefab = _(), h.MoreGamesPrefabCtr = _(), h.PrivateJoinPrefab = _(), h.PrivateMoreGamesPrefab = _(), h.PrivateDismissConfirmPrefab = _(), h.PrivateDismissPrefab = _(), h.PrivateSettlePrefab = _(), h.GamePrivateSettlePrefab = _(), h.GamePrivateTipsPrefab = _(), h.GamePrivateRecordPrefab = _(), h.GiftReservePokerPrefab = _(), h.RankPrefab = _(), h.GiftLargeDeliveryPrefab = _(), h.GiftLargeDeliveryRulePrefab = _(), h.GiftlargeDeliveryInviteListPrefab = _(), h.GiftVisitorPrefab = _(), h.GiftRedBagPrefab = _(), h.ChatHistoryPrefab = _(), h.GiftBaconPrefab = _(), h.GiftClubPrefab = _(), h.AddToProgramPrefab = _(), h.PhysicalRewardPrefab = _(), h.PhysicalRewardRulePrefab = _(), h.PhysicalRewardInviteListPrefab = _(), h.ActivityCollectionPrefab = _(), h.AppointmentPrefab = _(), h.WeekCardPrefab = _(), h.LucklySilverPrefab = _(), h.CustomerCarePrefab = _(), h.CashCowPrefab = _(), h.GameLivePrefab = _(), h.ExchangeSopPrefab = _(), h.ExchangeAddressView = _(), h.CardGodPrefab = _(), h.ExchangeHelpPrefab = _(), h.ExchangeHistoryPrefab = _(), h.ExchangeViewPrefab = _(), h.MoreGamePrefab = _(), h.HallHotGameListPrefab = _(), h.SeasonInheritPrefab = _(), h.RankChallengePrefab = _(), h.NewManGiftPrefab = _(), h.WelfareCenter = _(), h.GiftPackage = _(), h.PiggyBankPrefab = _(), h.PiggyBankPrefabH = _(), h.VipPrefab = _(), h.GameBoxPrefab = _(), h.FreeRewardPrefab = _(), h.FreeRewardPopup = _(), h.SuperPayGiftPrefab = _(), h.RankChramPrefab = _(), h.GoldSnakePrefab = _(), h.CharmGiftPrefab = _(), h.LevelSystemPrefab = _(), h.LevelSystemUpPrefab = _(), h.LevelSystemDialogPrefab = _(), h.CumulativePayPrefab = _(), h.CumulativeCheckInPrefab = _(), h.VipMemberDiaolog = _(), h.HallHeadInfoPrefab = _(), h.DailyGiftPrefab = _(), h.BoundPlanPrefab = _(), h.BonusGiftPrefab = _(), h.GameLotteryPrefab = _(), h.GameLotteryRecordPrefab = _(), h.NianBeastPrefab = _(), h.NianBeastRuleDialogPrefab = _(), h.NianBeastHurtDialogPrefab = _(), h.NianBeastTeamDialogPrefab = _(), h.NianBeastGetBPPrefab = _(), h.NianBeastJoinDialogPrefab = _(), h.NianBeastgrtPZDialogPrefab = _(), h.LaborPlayGamePrefab = _(), h.TimeLoginPrefab = _(), h.CostumeBundlePrefab = _(), h.GameUserInfoPrefab = _(), h.RoomLevelGiftPrefab = _(), h.GameBankruptPrefab = _(), h.GameBankruptGiftPrefab = _(), h.UserGuideDialog = _(),
                function(e) {
                    e[e.START = 1] = "START", e[e.HALL = 2] = "HALL", e[e.COMMON = 3] = "COMMON", e[e.GAME = 4] = "GAME"
                }(l || (l = e("PreloadID", {}))),
                function(e) {
                    e[e.COMMON = 1] = "COMMON", e[e.HALL = 2] = "HALL", e[e.GAME = 3] = "GAME"
                }(u || (u = e("ReleaseID", {})));
            var p = e("UIConfigData", ((s = {})[h.ToastTip] = {
                    layer: c.Notify,
                    prefab: r.Prefab_ToastTip.path,
                    bundle: r.Prefab_ToastTip.bundle
                }, s[h.NetLoading] = {
                    layer: c.NetWindow,
                    prefab: r.Prefab_NetLoading.path,
                    bundle: r.Prefab_NetLoading.bundle
                }, s[h.SysPopWindow] = {
                    layer: c.Alert,
                    prefab: r.Prefab_DialogWindow.path,
                    bundle: r.Prefab_DialogWindow.bundle
                }, s[h.PopWindow] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_DialogWindow.path,
                    bundle: r.Prefab_DialogWindow.bundle
                }, s[h.NoticeDialog] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NoticeDialog.path,
                    bundle: r.Prefab_NoticeDialog.bundle
                }, s[h.CustomerCarePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CustomerCare.path,
                    bundle: r.Prefab_CustomerCare.bundle
                }, s[h.UserAgreePrivate] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_UserAgreePrivate.path,
                    bundle: r.Prefab_UserAgreePrivate.bundle
                }, s[h.PictureDialog] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PictureDialog.path,
                    bundle: r.Prefab_PictureDialog.bundle
                }, s[h.LoginPrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_Login.path,
                    bundle: r.Prefab_Login.bundle
                }, s[h.HallPrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_HallScene.path,
                    bundle: r.Prefab_HallScene.bundle,
                    isSingle: !0
                }, s[h.PlayerInfoCenter] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PlayerInfoCenter.path,
                    bundle: r.Prefab_PlayerInfoCenter.bundle
                }, s[h.RoolLevelUpGift] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_RoomLevelUpGift.path,
                    bundle: r.Prefab_RoomLevelUpGift.bundle
                }, s[h.SelectLevelPrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_SelectLevelScene.path,
                    bundle: r.Prefab_SelectLevelScene.bundle,
                    isSingle: !0
                }, s[h.HallGameListPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_HallGameListPrefab.path,
                    bundle: r.Prefab_HallGameListPrefab.bundle
                }, s[h.GameRuleDialog] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameRuleDialog.path,
                    bundle: r.Prefab_GameRuleDialog.bundle
                }, s[h.SettingPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Setting.path,
                    bundle: r.Prefab_Setting.bundle
                }, s[h.ExchangePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Exchange.path,
                    bundle: r.Prefab_Exchange.bundle
                }, s[h.BagPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Bag.path,
                    bundle: r.Prefab_Bag.bundle
                }, s[h.BagItemInfoPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagItemInfo.path,
                    bundle: r.Prefab_BagItemInfo.bundle
                }, s[h.BagCompositeViewPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagCompositeView.path,
                    bundle: r.Prefab_BagCompositeView.bundle
                }, s[h.BagExchangeViewPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagExchangeView.path,
                    bundle: r.Prefab_BagExchangeView.bundle
                }, s[h.BagUseViewPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagUseView.path,
                    bundle: r.Prefab_BagUseView.bundle
                }, s[h.BagExchangeHistoryPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagExchangeHistoryView.path,
                    bundle: r.Prefab_BagExchangeHistoryView.bundle
                }, s[h.BagExchangeHistoryPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BagExchangeHistoryView.path,
                    bundle: r.Prefab_BagExchangeHistoryView.bundle
                }, s[h.SigninPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Signin.path,
                    bundle: r.Prefab_Signin.bundle
                }, s[h.GameScenePrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_GameScene.path,
                    bundle: r.Prefab_GameScene.bundle
                }, s[h.GetPropPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GongXiHuoDe.path,
                    bundle: r.Prefab_GongXiHuoDe.bundle
                }, s[h.GetPropPrefabPSL] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GongXiHuoDePSL.path,
                    bundle: r.Prefab_GongXiHuoDePSL.bundle
                }, s[h.LevelUpPSL] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_LevelUpPSL.path,
                    bundle: r.Prefab_LevelUpPSL.bundle
                }, s[h.RewardShowPSL] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_RewardShowPSL.path,
                    bundle: r.Prefab_RewardShowPSL.bundle
                }, s[h.BuyDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BuyDialog.path,
                    bundle: r.Prefab_BuyDialog.bundle
                }, s[h.BuyPropDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BuyPropDialog.path,
                    bundle: r.Prefab_BuyPropDialog.bundle
                }, s[h.BuyPropDialogPrefabH] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BuyPropDialogH.path,
                    bundle: r.Prefab_BuyPropDialogH.bundle
                }, s[h.MallPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Mall.path,
                    bundle: r.Prefab_Mall.bundle
                }, s[h.MallPrefabH] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_MallH.path,
                    bundle: r.Prefab_MallH.bundle
                }, s[h.IosRechargePrefab] = {
                    layer: c.PopUp,
                    prefab: r.IosRecharge.path,
                    bundle: r.IosRecharge.bundle
                }, s[h.RankPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Rank.path,
                    bundle: r.Prefab_Rank.bundle
                }, s[h.MailPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Mail.path,
                    bundle: r.Prefab_Mail.bundle
                }, s[h.GiftDiscountPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftDiscount.path,
                    bundle: r.Prefab_GiftDiscount.bundle
                }, s[h.AtyCenterPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_AtyCenter.path,
                    bundle: r.Prefab_AtyCenter.bundle
                }, s[h.FirstPayPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_FirstPay.path,
                    bundle: r.Prefab_FirstPay.bundle
                }, s[h.MoreGamePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_MoreGamePrefab.path,
                    bundle: r.Prefab_MoreGamePrefab.bundle
                }, s[h.HallHotGameListPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_HallHotGameListPrefab.path,
                    bundle: r.Prefab_HallHotGameListPrefab.bundle
                }, s[h.WelfareCenter] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_WelfareCenterPrefab.path,
                    bundle: r.Prefab_WelfareCenterPrefab.bundle
                }, s[h.GiftPackage] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftPackagePrefab.path,
                    bundle: r.Prefab_GiftPackagePrefab.bundle
                }, s[h.DecorationPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Decoration.path,
                    bundle: r.Prefab_Decoration.bundle
                }, s[h.MatchDetailPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Match_Detail.path,
                    bundle: r.Prefab_Match_Detail.bundle
                }, s[h.MatchRulePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Match_Rule.path,
                    bundle: r.Prefab_Match_Rule.bundle
                }, s[h.MatchRecordPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Match_Record.path,
                    bundle: r.Prefab_Match_Record.bundle
                }, s[h.MatchSignUpPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Match_SignUp.path,
                    bundle: r.Prefab_Match_SignUp.bundle
                }, s[h.MatchHallTipsPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Match_Hall_Tips.path,
                    bundle: r.Prefab_Match_Hall_Tips.bundle
                }, s[h.GameMatchLoadPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Match_Load.path,
                    bundle: r.Prefab_Game_Match_Load.bundle
                }, s[h.GameMatchWaitPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Match_Wait.path,
                    bundle: r.Prefab_Game_Match_Wait.bundle
                }, s[h.GameMatchSettlePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Match_Settle.path,
                    bundle: r.Prefab_Game_Match_Settle.bundle
                }, s[h.PrivatePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private.path,
                    bundle: r.Prefab_Private.bundle
                }, s[h.PrivateFriendPrefab] = {
                    layer: c.NetWindow,
                    prefab: r.Prefab_PrivateFriend.path,
                    bundle: r.Prefab_PrivateFriend.bundle
                }, s[h.PrivateRecordPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_Record.path,
                    bundle: r.Prefab_Private_Record.bundle
                }, s[h.PrivateRecordSharePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_RecordShare.path,
                    bundle: r.Prefab_Private_RecordShare.bundle
                }, s[h.PrivatePokerInfoPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_Poker_Info.path,
                    bundle: r.Prefab_Private_Poker_Info.bundle
                }, s[h.PrivateJoinPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_Join.path,
                    bundle: r.Prefab_Private_Join.bundle
                }, s[h.PrivateMoreGamesPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_More_Games.path,
                    bundle: r.Prefab_Private_More_Games.bundle
                }, s[h.PrivateDismissConfirmPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_dismiss_confirm_pop.path,
                    bundle: r.Prefab_dismiss_confirm_pop.bundle,
                    isSingle: !0
                }, s[h.PrivateDismissPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_dismiss_pop.path,
                    bundle: r.Prefab_dismiss_pop.bundle,
                    isSingle: !0
                }, s[h.PrivateSettlePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Private_Settle.path,
                    bundle: r.Prefab_Private_Settle.bundle
                }, s[h.GamePrivateSettlePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Private_Settle.path,
                    bundle: r.Prefab_Game_Private_Settle.bundle,
                    isSingle: !0
                }, s[h.GamePrivateTipsPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Private_Tips.path,
                    bundle: r.Prefab_Game_Private_Tips.bundle
                }, s[h.GamePrivateRecordPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Game_Private_Record.path,
                    bundle: r.Prefab_Game_Private_Record.bundle
                }, s[h.GiftReservePokerPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftReservePoker.path,
                    bundle: r.Prefab_GiftReservePoker.bundle
                }, s[h.GiftLargeDeliveryPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftlargeDelivery.path,
                    bundle: r.Prefab_GiftlargeDelivery.bundle
                }, s[h.GiftLargeDeliveryRulePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftlargeDeliveryRule.path,
                    bundle: r.Prefab_GiftlargeDeliveryRule.bundle
                }, s[h.GiftlargeDeliveryInviteListPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftlargeDeliveryInviteList.path,
                    bundle: r.Prefab_GiftlargeDeliveryInviteList.bundle
                }, s[h.GiftVisitorPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftVisitor.path,
                    bundle: r.Prefab_GiftVisitor.bundle
                }, s[h.GiftRedBagPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftRedBag.path,
                    bundle: r.Prefab_GiftRedBag.bundle
                }, s[h.ChatHistoryPrefab] = {
                    layer: c.NetWindow,
                    prefab: r.Prefab_ChatHistoryPrefab.path,
                    bundle: r.Prefab_ChatHistoryPrefab.bundle
                }, s[h.GiftBaconPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftBacon.path,
                    bundle: r.Prefab_GiftBacon.bundle,
                    isSingle: !0
                }, s[h.GiftClubPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GiftClub.path,
                    bundle: r.Prefab_GiftClub.bundle
                }, s[h.AddToProgramPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_AddToProgram.path,
                    bundle: r.Prefab_AddToProgram.bundle,
                    isSingle: !0
                }, s[h.PhysicalRewardPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PhysicalReward.path,
                    bundle: r.Prefab_PhysicalReward.bundle
                }, s[h.PhysicalRewardRulePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PhysicalRewardRule.path,
                    bundle: r.Prefab_PhysicalRewardRule.bundle
                }, s[h.PhysicalRewardInviteListPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PhysicalRewardInviteList.path,
                    bundle: r.Prefab_PhysicalRewardInviteList.bundle
                }, s[h.ActivityCollectionPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ActivityCollection.path,
                    bundle: r.Prefab_ActivityCollection.bundle
                }, s[h.AppointmentPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Appointment.path,
                    bundle: r.Prefab_Appointment.bundle
                }, s[h.WeekCardPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Weekcard.path,
                    bundle: r.Prefab_Weekcard.bundle
                }, s[h.LucklySilverPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_LucklySilver.path,
                    bundle: r.Prefab_LucklySilver.bundle
                }, s[h.CashCowPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CashCow.path,
                    bundle: r.Prefab_CashCow.bundle
                }, s[h.GameLivePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameLive.path,
                    bundle: r.Prefab_GameLive.bundle
                }, s[h.ExchangeSopPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ExchangeSop.path,
                    bundle: r.Prefab_ExchangeSop.bundle
                }, s[h.ExchangeAddressView] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ExchangeAddressView.path,
                    bundle: r.Prefab_ExchangeAddressView.bundle
                }, s[h.ExchangeHelpPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ExchangeHelpPrefab.path,
                    bundle: r.Prefab_ExchangeHelpPrefab.bundle
                }, s[h.ExchangeHistoryPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ExchangeHistoryPrefab.path,
                    bundle: r.Prefab_ExchangeHistoryPrefab.bundle
                }, s[h.ExchangeViewPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_ExchangeViewPrefab.path,
                    bundle: r.Prefab_ExchangeViewPrefab.bundle
                }, s[h.CardGodPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CardGod.path,
                    bundle: r.Prefab_CardGod.bundle
                }, s[h.SeasonInheritPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Season_Inherit.path,
                    bundle: r.Prefab_Season_Inherit.bundle
                }, s[h.RankChallengePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Rank_Challenge.path,
                    bundle: r.Prefab_Rank_Challenge.bundle
                }, s[h.NewManGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NewManGift.path,
                    bundle: r.Prefab_NewManGift.bundle
                }, s[h.RankChramPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_Rank_Charm.path,
                    bundle: r.Prefab_Rank_Charm.bundle
                }, s[h.VipPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_VIP.path,
                    bundle: r.Prefab_VIP.bundle
                }, s[h.PiggyBankPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PiggyBankPrefab.path,
                    bundle: r.Prefab_PiggyBankPrefab.bundle
                }, s[h.PiggyBankPrefabH] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_PiggyBankPrefabH.path,
                    bundle: r.Prefab_PiggyBankPrefabH.bundle
                }, s[h.GameBoxPrefab] = {
                    layer: c.Alert,
                    prefab: r.Prefab_GameBox.path,
                    bundle: r.Prefab_GameBox.bundle
                }, s[h.FreeRewardPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_FreeReward.path,
                    bundle: r.Prefab_FreeReward.bundle
                }, s[h.FreeRewardPopup] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_FreeRewardPopup.path,
                    bundle: r.Prefab_FreeRewardPopup.bundle
                }, s[h.SuperPayGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_SuperPayGift.path,
                    bundle: r.Prefab_SuperPayGift.bundle
                }, s[h.GoldSnakePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GoldSnake.path,
                    bundle: r.Prefab_GoldSnake.bundle
                }, s[h.CharmGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CharmGift.path,
                    bundle: r.Prefab_CharmGift.bundle
                }, s[h.LevelSystemUpPrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_LevelSystemUp.path,
                    bundle: r.Prefab_LevelSystemUp.bundle
                }, s[h.LevelSystemPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_LevelSystem.path,
                    bundle: r.Prefab_LevelSystem.bundle
                }, s[h.LevelSystemDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_LevelSystemDialog.path,
                    bundle: r.Prefab_LevelSystemDialog.bundle
                }, s[h.CumulativePayPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CumulativePay.path,
                    bundle: r.Prefab_CumulativePay.bundle
                }, s[h.CumulativeCheckInPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CumulativeCheckIn.path,
                    bundle: r.Prefab_CumulativeCheckIn.bundle
                }, s[h.VipMemberDiaolog] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_VipMemberDiaolog.path,
                    bundle: r.Prefab_VipMemberDiaolog.bundle
                }, s[h.HallHeadInfoPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameHeadInfo.path,
                    bundle: r.Prefab_GameHeadInfo.bundle
                }, s[h.DailyGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_DailyGift.path,
                    bundle: r.Prefab_DailyGift.bundle
                }, s[h.BoundPlanPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BoundPlan.path,
                    bundle: r.Prefab_BoundPlan.bundle
                }, s[h.BonusGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_BonusGift.path,
                    bundle: r.Prefab_BonusGift.bundle
                }, s[h.GameLotteryPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameLottery.path,
                    bundle: r.Prefab_GameLottery.bundle
                }, s[h.GameLotteryRecordPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameLotteryRecord.path,
                    bundle: r.Prefab_GameLotteryRecord.bundle
                }, s[h.NianBeastPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeast.path,
                    bundle: r.Prefab_NianBeast.bundle
                }, s[h.NianBeastRuleDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeastRuleDialog.path,
                    bundle: r.Prefab_NianBeastRuleDialog.bundle
                }, s[h.NianBeastHurtDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeastHurtDialog.path,
                    bundle: r.Prefab_NianBeastHurtDialog.bundle
                }, s[h.NianBeastTeamDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeastTeamDialog.path,
                    bundle: r.Prefab_NianBeastTeamDialog.bundle
                }, s[h.NianBeastGetBPPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeastGetBP.path,
                    bundle: r.Prefab_NianBeastGetBP.bundle
                }, s[h.NianBeastJoinDialogPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_NianBeastJoinDialog.path,
                    bundle: r.Prefab_NianBeastJoinDialog.bundle
                }, s[h.NianBeastgrtPZDialogPrefab] = {
                    layer: c.UI,
                    prefab: r.Prefab_NianBeastGetBPPrefab.path,
                    bundle: r.Prefab_NianBeastGetBPPrefab.bundle
                }, s[h.LaborPlayGamePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_LaborPlayGame.path,
                    bundle: r.Prefab_LaborPlayGame.bundle
                }, s[h.TimeLoginPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_TimeLoginGame.path,
                    bundle: r.Prefab_TimeLoginGame.bundle
                }, s[h.CostumeBundlePrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_CostumeBundle.path,
                    bundle: r.Prefab_CostumeBundle.bundle
                }, s[h.NoticePopuPrefab] = {
                    layer: c.PopUp,
                    prefab: r.NoticePopuPrefab.path,
                    bundle: r.NoticePopuPrefab.bundle
                }, s[h.GameUserInfoPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameHeadInfo.path,
                    bundle: r.Prefab_GameHeadInfo.bundle
                }, s[h.RoomLevelGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_RoomLevelGiftPrefab.path,
                    bundle: r.Prefab_RoomLevelGiftPrefab.bundle
                }, s[h.GameBankruptPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameBankruptPrefab.path,
                    bundle: r.Prefab_GameBankruptPrefab.bundle,
                    isSingle: !0
                }, s[h.GameBankruptGiftPrefab] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_GameBankruptGiftPrefab.path,
                    bundle: r.Prefab_GameBankruptGiftPrefab.bundle,
                    isSingle: !0
                }, s[h.UserGuideDialog] = {
                    layer: c.PopUp,
                    prefab: r.Prefab_UserGuideDialog.path,
                    bundle: r.Prefab_UserGuideDialog.bundle
                }, s)),
                f = {};
            a.mergeSubGameUIConfigData(p), t._RF.pop()
        }
    }
}))