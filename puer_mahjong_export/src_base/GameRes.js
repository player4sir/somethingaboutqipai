System.register("chunks:///_virtual/GameRes.ts", ["cc", "./SubGameConfig.ts", "./GameConstant.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            i = e.SubGameConfig
        }, function(e) {
            n = e.GConstants
        }],
        execute: function() {
            var a;
            t._RF.push({}, "b764aZR1GpGf4oDN+xs2+ia", "GameRes", void 0);
            var o = e("GamePackage", {
                    BASE: "base",
                    DEFAULT: "resources",
                    LOGIN: "login",
                    HALL: "hall",
                    HALL_REMOTE: "hall_remote",
                    PRIVATE: "private",
                    PRIVATE_REMOTE: "private_remote",
                    ACTIVITY: "activity",
                    ACTIVITY_REMOTE: "activity_remote",
                    GIFTBAG: "giftbag",
                    GIFTBAG_REMOTE: "giftbag_remote",
                    GAME: "game",
                    GAME_REMOTE: "game_remote",
                    GAMECOMMON: "game_common",
                    GAMECOMMON_REMOTE: "game_common_remote",
                    MATCH: "match",
                    MATCH_REMOTE: "match_remote",
                    DECORATION: "decoration",
                    DECORATION_REMOTE: "decoration_remote",
                    USERPUBLIC: "userpublic"
                }),
                r = e("GameRes", {
                    Prefab_DebugWindow: {
                        bundle: o.DEFAULT,
                        path: "prefab/DebugPrefab"
                    },
                    Prefab_ToastTip: {
                        bundle: o.DEFAULT,
                        path: "prefab/common/notify"
                    },
                    Prefab_DialogWindow: {
                        bundle: o.DEFAULT,
                        path: "prefab/common/PopWindowPrefab"
                    },
                    Prefab_NoticeDialog: {
                        bundle: o.DEFAULT,
                        path: "prefab/common/NoticeDialogPrefab"
                    },
                    Prefab_PictureDialog: {
                        bundle: o.DEFAULT,
                        path: "prefab/common/PictureDialogPrefab"
                    },
                    Prefab_NetLoading: {
                        bundle: o.DEFAULT,
                        path: "prefab/common/netLoadingPrefab"
                    },
                    Spine_DengLongAni: {
                        bundle: o.DEFAULT,
                        path: "spineAni/denglong/TongYong_denglong"
                    },
                    Audio_Button_Click: {
                        bundle: o.DEFAULT,
                        path: "audio/Audio_Button_Click"
                    },
                    Picture_UserBigHead_boy: {
                        bundle: o.HALL_REMOTE,
                        path: "hall/image/big_male_head"
                    },
                    Picture_UserBigHead_girl: {
                        bundle: o.HALL_REMOTE,
                        path: "hall/image/big_female_head"
                    },
                    Spine_ClickAni: {
                        bundle: o.DEFAULT,
                        path: "spineAni/clickAni/skeleton"
                    },
                    Atlas_BtnConf: {
                        bundle: o.DEFAULT,
                        path: "image/common/button"
                    },
                    Prefab_CustomerCare: {
                        bundle: o.LOGIN,
                        path: "prefab/customerCarePrefab"
                    },
                    Prefab_UserAgreePrivate: {
                        bundle: o.LOGIN,
                        path: "prefab/UserAgreePrivatePrefab"
                    },
                    Prefab_Login: {
                        bundle: o.LOGIN,
                        path: "prefab/loginPrefab"
                    },
                    Picture_UserPrivacyPolicy: [{
                        bundle: o.LOGIN,
                        path: "protocolRes/privatepolicy/1"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/privatepolicy/2"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/privatepolicy/3"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/privatepolicy/4"
                    }],
                    Picture_UserAgree: [{
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/1"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/2"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/3"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/4"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/5"
                    }, {
                        bundle: o.LOGIN,
                        path: "protocolRes/useragree/6"
                    }],
                    Picture_AgePromit: [{
                        bundle: o.LOGIN,
                        path: "image/agepromit/1"
                    }],
                    Picture_CoinHelp: [{
                        bundle: o.HALL_REMOTE,
                        path: "hall/image/currency_statement/currency_statement"
                    }],
                    Picture_CleanNet: [{
                        bundle: o.HALL_REMOTE,
                        path: "hall/image/net_declaration/currency_statement"
                    }],
                    Picture_AntiCheat: [{
                        bundle: o.HALL_REMOTE,
                        path: "hall/image/anti_cheat/anti_cheat"
                    }],
                    Prefab_HallScene: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/hall/hallPrefab"
                    },
                    Prefab_HallGameListPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/hall/hallGameListPrefab"
                    },
                    Prefab_MoreGamePrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/hall/moreGamesPrefab"
                    },
                    Prefab_HallTopUI: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/commonBtnPrefab"
                    },
                    Prefab_SelectLevelScene: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/selectGameLevelPrefab"
                    },
                    Prefab_HallHotGameListPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/hall/hallHotGameListPrefab"
                    },
                    Prefab_GameRuleDialog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/gameRules/gameRuleDialogPrefab"
                    },
                    Prefab_PlayerInfoCenter: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/userInfoPrefab"
                    },
                    Prefab_Mall: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/mallPrefab"
                    },
                    Prefab_MallH: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/mallPrefabH"
                    },
                    Prefab_Setting: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/settingPrefab"
                    },
                    Prefab_Exchange: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/exchangePrefab"
                    },
                    Prefab_BuyDialog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/buyDialogPrefab"
                    },
                    Prefab_BuyPropDialog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/buyPropDialogPrefab"
                    },
                    Prefab_BuyPropDialogH: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/buyPropDialogPrefabH"
                    },
                    IosRecharge: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/IosRechargePrefab"
                    },
                    Prefab_HallSquare: {
                        bundle: o.HALL_REMOTE,
                        path: "square/square"
                    },
                    Prefab_Bag: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bag"
                    },
                    Prefab_BagItemInfo: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bagItemInfo"
                    },
                    Prefab_BagCompositeView: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bagCompositeView"
                    },
                    Prefab_BagExchangeView: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bagExchangeView"
                    },
                    Prefab_BagUseView: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bagUseView"
                    },
                    Prefab_BagExchangeHistoryView: {
                        bundle: o.HALL_REMOTE,
                        path: "bag/bagExchangeHistory"
                    },
                    Prefab_Rank: {
                        bundle: o.HALL_REMOTE,
                        path: "rank/rankPrefab"
                    },
                    Prefab_ExchangeSop: {
                        bundle: o.HALL_REMOTE,
                        path: "exchangeShop/exchangeShopPrefab"
                    },
                    Prefab_ExchangeAddressView: {
                        bundle: o.HALL_REMOTE,
                        path: "exchangeShop/exchangeAddressView"
                    },
                    Prefab_ExchangeHelpPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "exchangeShop/exchangeHelpPrefab"
                    },
                    Prefab_ExchangeHistoryPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "exchangeShop/exchangeHistory"
                    },
                    Prefab_ExchangeViewPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "exchangeShop/exchangeView"
                    },
                    Atlas_Num: {
                        bundle: o.HALL_REMOTE,
                        path: "image/nums"
                    },
                    Atlas_Mall: {
                        bundle: o.HALL_REMOTE,
                        path: "image/mall/mall",
                        plistKey: "mall/"
                    },
                    Picture_Hall_Coin_bg: {
                        bundle: o.HALL_REMOTE,
                        path: "image/money_bg/spriteFrame"
                    },
                    Picture_Setting_Btn_close: {
                        bundle: o.HALL_REMOTE,
                        path: "image/switch_off_bg/spriteFrame"
                    },
                    Picture_Setting_Btn_open: {
                        bundle: o.HALL_REMOTE,
                        path: "image/switch_on_bg/spriteFrame"
                    },
                    Audio_Hall_bg: {
                        bundle: o.HALL_REMOTE,
                        path: "audio/game_bg_1"
                    },
                    HALL_IMAGE: {
                        bundle: o.HALL_REMOTE,
                        path: "image/hall/"
                    },
                    Spine_Xc_Select: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/gameHall/skeleton"
                    },
                    Spine_Mall_Bg: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/shop/SC"
                    },
                    Spine_Mall_Role: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/shop/MaoNvLang"
                    },
                    Spine_Mall_Qiehuan: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/shop/SC_qiehuan"
                    },
                    Spine_Guide_Hander_Click: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/newGuide/hand_dianji"
                    },
                    Spine_Hand_guid: {
                        bundle: o.HALL_REMOTE,
                        path: "spineAni/handGuid/skeleton"
                    },
                    gameTeamPrefab: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/gameTeam/gameTeamPrefab"
                    },
                    Prefab_WelfareCenterPrefab: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/welfareCenter/welfareCenterPrefab"
                    },
                    Prefab_GiftPackagePrefab: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/giftPackage/giftPackagePrefab"
                    },
                    Prefab_PiggyBankPrefab: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/piggyBank"
                    },
                    Prefab_PiggyBankPrefabH: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/piggyBankH"
                    },
                    Prefab_AtyCenter: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "notice/NoticePrefab"
                    },
                    NoticePopuPrefab: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "notice/NoticePopuPrefab"
                    },
                    Prefab_Signin: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/signin"
                    },
                    Prefab_Mail: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/mailPrefab"
                    },
                    Prefab_GongXiHuoDe: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/getPopPrefab"
                    },
                    Prefab_GongXiHuoDePSL: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/cardGod/getPopPrefabPSL"
                    },
                    Prefab_LevelUpPSL: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/cardGod/levelUpPSL"
                    },
                    Prefab_RewardShowPSL: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/cardGod/rewardShowPSL"
                    },
                    Prefab_AddToProgram: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "addProgram/addProgramPrefab"
                    },
                    Spine_Get_Item: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "spineAni/get/get"
                    },
                    Prefab_GameLive: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/gameLive"
                    },
                    Picture_NotiveLS: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "image/activityCenter/gg"
                    },
                    Prefab_FreeReward: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/freeReward/freeRewardPrefab"
                    },
                    Prefab_FreeRewardPopup: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/freeReward/freeRewardDialogPrefab"
                    },
                    Prefab_SuperPayGift: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "superPayGift/SuperPayGiftPrefab"
                    },
                    Prefab_GoldSnake: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/goldSnake/goldSnakePrefab"
                    },
                    Prefab_CharmGift: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/charmGift/charmGiftPrefab"
                    },
                    Prefab_GiftDiscount: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/giftDiscountPrefab"
                    },
                    Prefab_FirstPay: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftFirstPayPrefab"
                    },
                    Prefab_GiftReservePoker: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftReservePokerPrefab"
                    },
                    Prefab_GiftlargeDelivery: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/largeDeliveryPrefab"
                    },
                    Prefab_GiftlargeDeliveryRule: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/largeDeliveryRulePrefab"
                    },
                    Prefab_GiftlargeDeliveryInviteList: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/largeDeliveryInviteListPrefab"
                    },
                    Prefab_GiftVisitor: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftVisitorPrefab"
                    },
                    Prefab_GiftRedBag: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftRedBagPrefab"
                    },
                    Prefab_GiftBacon: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftLarouPrefab"
                    },
                    Prefab_GiftClub: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/giftClubPrefab"
                    },
                    Prefab_RoomLevelUpGift: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/roomLevelUpGift"
                    },
                    Prefab_PhysicalReward: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/physicalReward/physicalRewardPrefab"
                    },
                    Prefab_PhysicalRewardRule: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/physicalReward/physicalRewardRulePrefab"
                    },
                    Prefab_PhysicalRewardInviteList: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/physicalReward/physicalRewardInviteListPrefab"
                    },
                    Prefab_ActivityCollection: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/activityCollection/activityMainPrefab"
                    },
                    Prefab_Appointment: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/appointmentPrefab"
                    },
                    Prefab_Weekcard: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/weekCardtPrefab"
                    },
                    Prefab_LucklySilver: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/lucklySilverPrefab"
                    },
                    Prefab_CashCow: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/cashCowPrefab"
                    },
                    Prefab_CardGod: {
                        bundle: o.GIFTBAG_REMOTE,
                        path: "prefab/cardGod/cardGodPrefab"
                    },
                    Prefab_NewManGift: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/newManGift/newManPrefab"
                    },
                    Prefab_Decoration: {
                        bundle: o.DECORATION_REMOTE,
                        path: "prefab/DecorationPrefab"
                    },
                    Picture_Chat_Box: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/chat/chat_default"
                    },
                    Picture_Room_Bg: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/room_table"
                    },
                    Picture_Clock_Bg: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/clock_bg"
                    },
                    Picture_Game_Desk: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/desk/desk1/texture"
                    },
                    Picture_Game_Majiang: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/majiang/card/card/texture"
                    },
                    Picture_Game_Majiang_Back: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/hand_card_mj"
                    },
                    Picture_Game_Desk_Light: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/desk",
                        key: "/{0}/texture"
                    },
                    Atlas_Hand_Card: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "image/decoration/card/cardDecoration"
                    },
                    Prefab_Match_Hall: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchHall/MatchHallPrefab"
                    },
                    Prefab_Match_Detail: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchDetail/MatchDetailPrefab"
                    },
                    Prefab_Match_Record: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchRecord/MatchRecordPrefab"
                    },
                    Prefab_Match_Record_Detail: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchRecord/MatchRecordDetailPrefab"
                    },
                    Prefab_Match_Rule: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchRule/MatchRulePrefab"
                    },
                    Prefab_Match_SignUp: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchSignUp/MatchSignUpPrefab"
                    },
                    Prefab_Match_Hall_Tips: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchHall/MatchHallTipsPrefab"
                    },
                    Picture_Match_Hall_Video: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchHall/image/icon_ad"
                    },
                    Picture_Match_Hall_VIP: {
                        bundle: o.MATCH_REMOTE,
                        path: "matchHall/image/vip_icon"
                    },
                    Prefab_Game_Match_Load: {
                        bundle: o.MATCH_REMOTE,
                        path: "game/matchLoad/GameMatchLoadPrefab"
                    },
                    Prefab_Game_Match_Wait: {
                        bundle: o.MATCH_REMOTE,
                        path: "game/matchWait/GameMatchWaitPrefab"
                    },
                    Prefab_Game_Match_Settle: {
                        bundle: o.MATCH_REMOTE,
                        path: "game/matchSettle/GameMatchSettlePrefab"
                    },
                    Prefab_Private: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivatePrefab"
                    },
                    Prefab_PrivateFriend: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateFriendPrefab"
                    },
                    Prefab_Private_Record: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateRecordPrefab"
                    },
                    Prefab_Private_RecordShare: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateRecordSharePrefab"
                    },
                    Prefab_Private_Poker_Info: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivatePokerInfoPrefab"
                    },
                    Prefab_Private_Join: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateJoinPrefab"
                    },
                    Prefab_Private_More_Games: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateMoreGamesPrefab"
                    },
                    Prefab_dismiss_confirm_pop: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateDismissConfirmPrefab"
                    },
                    Prefab_dismiss_pop: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateDismissPrefab"
                    },
                    Prefab_Private_Settle: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateSettlePrefab"
                    },
                    Prefab_Private_Settle_View: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateSettleViewPrefab"
                    },
                    Prefab_Private_Settle_View_Six: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateSettleViewSixPrefab"
                    },
                    Prefab_Private_Settle_View_Hall: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateSettleViewHallPrefab"
                    },
                    Atlas_Private_Settle: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "image/settle/settle",
                        plistKey: "{0}"
                    },
                    Prefab_ChatHistoryPrefab: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/PrivateChatHistoryPrefab"
                    },
                    Spine_Emoji: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "image/anim/emoji/emoji"
                    },
                    Atlas_Emoji: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "image/emoji/emoji",
                        plistKey: "{0}"
                    },
                    Prefab_Game_Private_Settle: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/GamePrivateSettlePrefab"
                    },
                    Prefab_Game_Private_Tips: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/GamePrivateTipsPrefab"
                    },
                    Prefab_Game_Private_Record: {
                        bundle: o.PRIVATE_REMOTE,
                        path: "prefab/GamePrivateRecordPrefab"
                    },
                    AppCommon_Login_WX: {
                        path: "comm/img_wxLogin.png"
                    },
                    AppCommon_IOS_PAY_IMG: {
                        path: "comm/pay_img.jpg"
                    },
                    AppCommon_Share_Friend_Comm: {
                        path: "comm/img_share_common.jpg"
                    },
                    AppCommon_Share_Invite: {
                        path: "comm/img_share_invite.jpg"
                    },
                    AppCommon_Share_Invite_Common: {
                        path: "comm/img_share_invite_{0}.jpg"
                    },
                    AppCommon_Share_Invite_Private: {
                        path: "comm/img_share_invite_private.jpg"
                    },
                    AppCommon_Share_Friend_Rank: {
                        path: "comm/img_shareFriendRank.jpg"
                    },
                    AppCommon_Share_Global_Rank: {
                        path: "comm/img_shareGlobalRank.jpg"
                    },
                    AppCommon_Share_Global_Charm: {
                        path: "comm/img_shareGlobalCharm.jpg"
                    },
                    AppCommon_Share_Global_NianBeast: {
                        path: "comm/img_share_nianBeast.jpg"
                    },
                    AppCommon_Share_HZXLCH_Team: {
                        path: "comm/img_share_hzxlch_team.jpg"
                    },
                    Prefab_Season_Inherit: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/rankInheritPrefab"
                    },
                    Prefab_Rank_Challenge: {
                        bundle: o.HALL_REMOTE,
                        path: "rank/rankChallengePrefab"
                    },
                    Prefab_Rank_Charm: {
                        bundle: o.HALL_REMOTE,
                        path: "charm/rankCharmPrefab"
                    },
                    Prefab_VIP: {
                        bundle: o.HALL_REMOTE,
                        path: "vip/vipPrefab"
                    },
                    Prefab_GameBox: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/GameBoxPrefab"
                    },
                    Prefab_LevelSystemUp: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/levelSystem/levelSystemUpPrefab"
                    },
                    Prefab_LevelSystem: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/levelSystem/levelSystemPrefab"
                    },
                    Prefab_LevelSystemDialog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/levelSystem/levelSystemDialogPrefab"
                    },
                    Prefab_CumulativePay: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/cumulativePay/cumulativePayPrefab"
                    },
                    Prefab_CumulativeCheckIn: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/cumulativeCheckIn/cumulativeCheckInPrefab"
                    },
                    Prefab_VipMemberDiaolog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/member/memberPrefab"
                    },
                    Prefab_DailyGift: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/dailyGift/dailyGiftPrefab"
                    },
                    Prefab_BoundPlan: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/boundPlan/boundPlanPrefab"
                    },
                    Prefab_BonusGift: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/bonusGift/bonusGiftPrefab"
                    },
                    Prefab_GameLottery: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/gameLottery/gameLotteryPrefab"
                    },
                    Prefab_GameLotteryRecord: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/gameLottery/recordPrefab"
                    },
                    Prefab_NianBeast: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/nianBeastPrefab"
                    },
                    Prefab_NianBeastRuleDialog: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/ruleDialogPrefab"
                    },
                    Prefab_NianBeastHurtDialog: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/hurtRankDialogPrefab"
                    },
                    Prefab_NianBeastTeamDialog: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/teamDialogPrefab"
                    },
                    Prefab_NianBeastGetBP: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/getBPPrefab"
                    },
                    Prefab_NianBeastJoinDialog: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/nianBeastJoinPrefab"
                    },
                    Prefab_NianBeastGetBPPrefab: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/nianBeast/getPZDialogPrefab"
                    },
                    BombEffect: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "audio/bomb"
                    },
                    Prefab_LaborPlayGame: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/laborPlayGame/laborPlayGamePrefab"
                    },
                    Prefab_TimeLoginGame: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/timeLogin/timeLoginPrefab"
                    },
                    Prefab_CostumeBundle: {
                        bundle: o.ACTIVITY_REMOTE,
                        path: "prefab/costumeBundle/costumeBundlePrefab"
                    },
                    Prefab_GameScene: {
                        bundle: o.GAME_REMOTE,
                        path: "prefab/GameScenePrefab"
                    },
                    Prefab_GameHeadInfo: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "prefab/GameHeadInfoPrefab"
                    },
                    Prefab_GameBankruptPrefab: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "prefab/common/GameBankruptPrefab"
                    },
                    Prefab_GameBankruptGiftPrefab: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "prefab/common/GameBankruptGiftPrefab"
                    },
                    Prefab_GameActivity: {
                        bundle: i.SubGamePackage.GAMECOMMON_REMOTE,
                        path: "prefab/gameActivity/GameActivityPrefab"
                    },
                    Prefab_RoomLevelGiftPrefab: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "prefab/roomLevelGift/RoomLevelGiftPrefab"
                    },
                    QuickChatXiaoBo: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "audio/chatxiaobo/"
                    },
                    QuickChatXiaoYa: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "audio/chatxiaoya/"
                    },
                    InteractProp: {
                        bundle: o.GAMECOMMON_REMOTE,
                        path: "audio/interactProp/Prop_{0}"
                    },
                    Prefab_UserGuideDialog: {
                        bundle: o.HALL_REMOTE,
                        path: "prefab/userGuideDialog"
                    }
                }),
                s = e("GameResPreLoad", ((a = {})[n.PkgLoaderTaskList.Login] = {
                    package: [o.GAMECOMMON, o.DECORATION, o.HALL, o.GAME, o.PRIVATE, o.ACTIVITY, o.GIFTBAG, o.MATCH],
                    protobuf: !0,
                    prefab: [r.Prefab_ToastTip, r.Prefab_Login]
                }, a[n.PkgLoaderTaskList.Hall] = {
                    package: [o.GAMECOMMON_REMOTE],
                    prefab: [r.Prefab_HallScene, r.Prefab_Private, r.Prefab_Match_Hall, r.Prefab_Signin, r.Prefab_GameHeadInfo]
                }, a[n.PkgLoaderTaskList.Game] = {
                    package: [o.GAMECOMMON_REMOTE],
                    prefab: [r.Prefab_HallScene, r.Prefab_Private, r.Prefab_GameScene, r.Prefab_GameHeadInfo, r.Prefab_Signin]
                }, a));
            i.mergeSubGamePackage(o), i.mergeGameResPreLoad(s), t._RF.pop()
        }
    }
}))