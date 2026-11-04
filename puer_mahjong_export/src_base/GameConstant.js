System.register("chunks:///_virtual/GameConstant.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var i, n;
            e({
                    GConstants: void 0,
                    POPUSCENE: void 0
                }), t._RF.push({}, "956c9/490FNB5vV9kBQJM0T", "GameConstant", void 0), e("GAMETYPE", {
                    Common: 1,
                    XUEZHAN: 2,
                    XUELIU: 3
                }),
                function(e) {
                    e[e.NONE = 0] = "NONE", e[e.LOGIN = 1] = "LOGIN", e[e.SELECTLEVEL = 2] = "SELECTLEVEL", e[e.SETTLE = 3] = "SETTLE", e[e.ROOMTOSELECTLEVEL = 4] = "ROOMTOSELECTLEVEL", e[e.SELECTLEVELTOHALL = 5] = "SELECTLEVELTOHALL"
                }(i || (i = e("POPUSCENE", {}))), e("StoreKey", {
                    SYS_ClientVer: "sys_clientVer",
                    SYS_EffectVolume: "sys_effectVolume",
                    SYS_MusicVolume: "sys_musicVolume",
                    SYS_CloseAllMusic: "sys_closeAllMusic",
                    SYS_Shock: "sys_shock",
                    SYS_Chat: "sys_chat",
                    SYS_Lang: "sys_lang_{0}",
                    SYS_ReadCard: "readCard",
                    LOGIN_VERSION: "login_version",
                    LOGIN_USER_OPENID: "user_wx_openid_{0}",
                    LOGIN_USER_HISTORY: "login_history",
                    LOGIN_LAST_INFO: "login_last_info",
                    LOGIN_LAST_CHECK_AGREE: "login_last_check_agree",
                    LOGIN_SUCCESS_COUNT: "login_success_count",
                    ACTIVITY_LAST_OPEN_TIME: "last_open_view_activity",
                    WATCH_MESSAGE_SYSTEMID: "user_system_last_id_{0}",
                    WATCH_MESSAGE_USRERID: "user_last_id_{0}",
                    USER_MAIL_CACHE: "user_mail_cache_{0}",
                    USER_LADDER_CACHE: "user_ladder_cache_{0}",
                    USER_LADDER_CFG_CACHE: "user_ladder_cfg_cache_{0}",
                    USER_INHERIT_LADDER_CACHE: "user_inherit_ladder_cache_{0}",
                    USER_OPEN_MODULES: "user_open_modules_{0}_{1}",
                    USER_RECOMMEND_POP: "user_recommend_pop_{0}",
                    USER_RED_RECORD: "user_red_record_{0}",
                    USER_LOGIN_LAST_TIME: "user_login_last_time_{0}",
                    USER_TODAY_EVENT: "user_today_event_{0}",
                    USER_CLICKED_RECORD: "user_clicked_record_{0}",
                    USER_INTO_GAME_RECORD: "user_into_game_{0}",
                    USER_LAST_GAME_RECORD: "user_last_game_{0}",
                    USER_LAST_GAME_AREA: "user_last_game_area_{0}",
                    USER_LAST_PRIVATE_GAME_RECORD: "user_last_private_game_{0}",
                    USER_LAST_PRIVATE_GAME_ONE: "user_last_private_game_one_{0}",
                    USER_REWARD_BY_DESK: "user_reward_by_desk_{0}",
                    PROPS_BASE_CONF: "props_base_conf",
                    PROPS_UNION_CONF: "props_union_conf",
                    PROPS_ICON_PRE: "props_icon_pre",
                    FRIEND_CURROW_CLICK: "friend_currow_click",
                    HALL_GAME_CONF: "hall_game_conf",
                    USER_PRIAVATE_ROOM_CREATE: "user_private_room_create_{0}_{1}",
                    USER_TRACE_ID: "user_trace_id",
                    USER_LOGIN_HISTORY_List: "user_login_history_list_{0}",
                    USER_CHAT_HISTORY: "user_chat_history",
                    USER_CHAT_TAB_MENU: "user_chat_tab_menu",
                    USER_CHAT_EMOJI_SUB_TAB: "user_chat_emoji_sub_tab",
                    USER_VISITOR_COMPLETE_TASK: "user_visitor_{0}",
                    USER_INTERACTIVE_RESULT: "user_interactive_result_{0}",
                    USER_APPOINTMENT: "user_appointment_{0}",
                    REPORT_LOG: "user_report_log",
                    SDK_REPORT_LOG: "sdk_user_report_log",
                    USER_ROBOT_INFO: "user_robot_info",
                    USER_CHARM_INFO: "user_charm_info",
                    USER_GUIDE_INFO: "user_guide_info",
                    USER_VIP_MEMBER_EXPIRES_TIME: "user_vip_member_expires_time_{0}",
                    USER_VIP_MEMBER_RED_DOT_SHOW: "user_vip_member_red_dot_show_{0}",
                    USER_VIP_MEMBER_EXPIRES_OPEN_COUNT: "user_vip_member_expires_oper_count_{0}",
                    Activity_Nian_Beast: "activity_nian_beast_{0}",
                    Activity_Nian_Beast_Status: "activity_nian_beast_status_{0}",
                    Activity_Nian_Beast_Invite: "activity_nian_beast_invite_{0}",
                    User_Guide_Status: "user_guide_status_{0}_{1}",
                    User_HuPai_First_Show_Status: "user_hupan_first_show_status_{0}_{1}_{2}",
                    User_Decoration_Info: "user_decoration_info_{0}"
                }), e("CloundKey", {
                    USER_UID: "user_uid",
                    USER_LOGIN_TIME: "user_login_time",
                    USER_HEAD_FRAME: "user_head_frame"
                }),
                function(e) {
                    var t, i, n, a, o, r, s, c, l;
                    e.AppRunLife = {
                            MainScence: "main-scene",
                            RunScence: "run-scene",
                            Login_Will_Open: "login-will-open",
                            Login_Opened: "login-opened",
                            Login_Closed: "login-closed",
                            Hall_Will_Open: "hall-will-open",
                            Hall_Opened: "hall-opened",
                            Hall_Closed: "hall-closed",
                            Game_Will_Open: "game-will-open",
                            Game_Opened: "game-opened",
                            Game_Closed: "game-closed"
                        },
                        function(e) {
                            e[e.Base = 0] = "Base", e[e.Main = 1] = "Main", e[e.Login = 2] = "Login", e[e.Hall = 3] = "Hall", e[e.Game = 4] = "Game", e[e.SubGame_ddz = 5] = "SubGame_ddz", e[e.SubGame_SJ = 6] = "SubGame_SJ"
                        }(l || (l = {})), e.PkgLoaderTaskList = l, e.LoginStateCode = {
                            platform_fail_wx_logincode: 1,
                            platform_fail_wx_userinfo: 2,
                            platform_fail_wx_notAuthSetting: 3,
                            platform_fail_wx_notAgreeAuthSetting: 4,
                            platform_fail_wx_logincode_authSettingBtn: 5,
                            platform_fail_wx_code2session_error: 6,
                            platform_fail_wx_access_token_error: 7
                        }, e.UserLoginType = {
                            NONE: -1,
                            Token: 1,
                            Acount: 2,
                            BoyaaPassportResetPsd: 3,
                            Notoken: 4,
                            BoyaaPassportRegister: 5,
                            BoyaaPassportLogin: 6,
                            TaobaoLogin: 10,
                            Qihu360Login: 11,
                            HeYouXiLogin: 12,
                            AiYouXiLogin: 13,
                            HuaWei: 14,
                            OPPO: 15,
                            WechatLogin: 18,
                            AppleLogin: 20,
                            VIVO: 19
                        }, e.UserUType = {
                            None: -1,
                            Guest: 1,
                            BoyaaPassport: 2,
                            Sina: 3,
                            Tencent: 4,
                            Taobao: 5,
                            Qihu360: 6,
                            HeYouXi: 7,
                            AiYouXi: 8,
                            HuaWei: 9,
                            OPPO: 11,
                            Wechat: 14,
                            Apple: 16,
                            VIVO: 15
                        }, e.UserIdentity = {
                            Normal: 0,
                            Rmb: 1,
                            Vip: 2,
                            RmbAndVip: 3
                        }, e.UserPropsType = {
                            TYPE_VIP: 1,
                            TYPE_VIP_HEAD: 2,
                            TYPE_VIP_KICK: 3,
                            TYPE_VIP_MAGU: 4,
                            TYPE_VIP_GAME: 5,
                            TYPE_VIP_FACE: 6,
                            TYPE_VIP_DEG: 7,
                            TYPE_VIP_LOG: 8,
                            TYPE_MATCHCARD_LOW: 9,
                            TYPE_BUQIANCARD: 10,
                            TYPE_CARDCOUNT: 50,
                            TYPE_WATCH_BOTTOM_CARD: 56,
                            TYPE_SUPER_MULTIPLE: 60,
                            TYPE_ROSE: 200,
                            TYPE_EGG: 201,
                            TYPE_SHOES: 202,
                            TYPE_BOMB: 203,
                            TYPE_SILVER: 150,
                            TYPE_MATCH_AD: 600
                        }, e.PropertyType = {
                            SILVER_COIN: 0,
                            GOLD_BAR: 1,
                            DIAMOND: 3,
                            EXCHANGE: 58
                        }, e.ThresholdType = {
                            SILVER_COIN: 0,
                            GOLD_BAR: 1,
                            VIP: 2,
                            LEVEL: 3,
                            LADDER_LEVEL: 4
                        }, e.UserGameRecodeKey = {
                            SilverTotal: "silver_total",
                            SilverWin: "silver_win",
                            FriendTotal: "friend_total",
                            FriendWin: "friend_win",
                            TodayTotal: "today_total",
                            TodayWin: "today_win",
                            Win: "wintimes",
                            Lose: "losetimes",
                            Draw: "drawtimes",
                            WinMax: "winmax",
                            Points: "points",
                            Group: "group",
                            LadderScore: "eloscore",
                            HistoryLadderScore: "history_eloscore",
                            CurrentRank: "current_rank",
                            HistoryRank: "history_rank",
                            SeasonName: "season_name",
                            STime: "stime",
                            ETime: "etime",
                            LastLadderScore: "last_eloscore",
                            Charm: "charm",
                            GameIds: "playrecords_game_ids",
                            PrivateGameIds: "prirecords_game_ids"
                        }, e.GameRoomState = {
                            STATUS_NORMAL: 0,
                            STATUS_READY: 1,
                            STATUS_READED: 2,
                            STATUS_START: 3,
                            STATUS_PLAYING: 4,
                            STATUS_GAMEOVER: 5,
                            STATUS_EXITSUCCESS: 6
                        }, e.GameRoomLevelConf = {
                            XINSHOU_ROOMID: 12,
                            PRIVATE_ROOMID: 100,
                            PRIVATE_ROOMID_CRYSTAL: 10100,
                            PRIVATE_ROOMID_JIFEN: 30100,
                            MATCH_DINGJU_ROOMID: 500,
                            MATCH_XIANSHI_ROOMID: 600,
                            MATCH_DINGSHI_ROOMID: 700,
                            privateRoomLevel: [100, 10100, 30100],
                            matchRoomLevel: [500, 600, 700]
                        }, e.UserLoginFailCode = {
                            ERR_MOVE_SERVER: 1004,
                            ERR_FOBID_GUEST_LOGIN: 1051,
                            ERR_FORBID_VIRTUAL_MACHINE_LOGIN: 1070,
                            ERR_STOP_SERVER: 1,
                            ERR_DISABLE_ACCOUNT: 1003,
                            ERR_DISABLE_GUEST: 1038,
                            ERR_VerifyCode_ERROR: 1074,
                            ERR_REG_IDIOM_ERROR: 1076,
                            ERR_REG_PHONENUMBER_ERROR: 1077,
                            ERR_LOGIN_BINDPHONE_ERROR: 1078,
                            ERR_LOGIN_IDIOM_ERROR: 1079,
                            ERR_LOGIN_OVER_TIMES: 1080,
                            ERR_LOGIN_ANTIADDICTION_EXIT: 1088,
                            ERR_LOGIN_ANTIADDICTION_NOTICE: 1089,
                            ERR_LOGIN_ANTIADDICTION: 1090,
                            ERR_LOGIN_NOTICE: 1091
                        }, e.UserLoginState = {
                            None: 0,
                            Logining: 1,
                            Switching: 2,
                            LoginSuccess: 3,
                            LoginFailed: 4,
                            Offline: 5,
                            Kicked: 6,
                            MultiDeviceLogin: 7,
                            PhpKickout: 8,
                            SessionTimeOut: 9,
                            ServerStop: 10,
                            DisableAccount: 1003,
                            ForbidGuestLogin: 1051
                        };
                    var u, d = e.RedDotConf = {
                        Sign: "Sign",
                        Email: "Email",
                        Shop: "Shop",
                        Level: "Level",
                        Vip: "Vip",
                        Ladder: "Ladder",
                        Friend: "Friend",
                        ActivityNormal: "Activity-Normal",
                        ActivityNotice: "Activity-Notice",
                        Kefugift: "Activity-Normal-Kefugift",
                        AddToDesk: "Activity-Normal-AddToDesk",
                        WelfareCenter: "WelfareCenter",
                        UserHead: "User-Head",
                        NewUserActivity: "NewUserActivity",
                        FirstPay: "Activity-FirstPay",
                        Holiday: "Activity-Holiday",
                        bankruptcy: "Giftbag-Bankruptcy",
                        ReservePoker: "Activity-ReserverPoker",
                        LargeDelivery: "Activity-LargeDelivery",
                        GiftVisitor: "Activity-GiftVisitor",
                        Turntable: "Activity-Turntable",
                        GiftRedBag: "Activity-GiftRedBag",
                        GiftBacon: "Activity-GiftBacon",
                        GiftClub: "Activity-GiftClub",
                        AddToProgram: "Activity-Normal-AddToProgram",
                        PhysicalReward: "Activity-PhysicalReward",
                        ActivityCollectionNew: "Activity-ActivityCollection-New",
                        ActivityCollectionReturn: "Activity-ActivityCollection-Return",
                        ActivityAppointment: "Activity-Appointment",
                        ActivityBubble: "Activity-bubble",
                        ActivityWeekCard: "Activity-Week-Card",
                        Mall: "Mall",
                        Rank: "Rank",
                        GameCoin: "GameCoin",
                        GamePrivate: "GamePrivate",
                        GameMatch: "GameMatch",
                        ToMiniGame: "ToMiniGame",
                        Square: "Square",
                        ActivityLucklySilver: "Activity-Luckly-Silver",
                        ActivityCashCow: "Activity-Cash-Cow",
                        ActivityLiveact: "Activity-liveact",
                        ActivityCardGod: "Activity-Card-God",
                        ActivityMoreGame: "Activity-More_Game",
                        FreeSilver: "Free-Silver",
                        PayGiftPackage: "Pay-Gift-Package",
                        PiggyBank: "Piggy-Bank",
                        FreeReward: "Activity-Free-Reward",
                        SuperPayGift: "Activity-super-pay-gift",
                        GoldSnake: "Activity-gold-snake",
                        CharmGift: "Activity-charm-gift",
                        CumulativePay: "Activity-Cumulative-Pay",
                        CumulativeCheckIn: "Activity-Cumulative-Check-in",
                        ShopSilver: "Activity-shop-silver",
                        ShopProp: "Activity-shop-prop",
                        ShopVIP: "Activity-shop-vip",
                        DailyGift: "Activity-Daily-Gift",
                        BoundPlan: "Activity-Bound-Plan",
                        BonusGift: "Activity-Bouns-Gift",
                        ActivityNoticePopu: "Activity-NoticePopu",
                        GameLottery: "Activity-Game-Lottery",
                        NianBeast: "Activity-Nian-Beast",
                        LaborPlayGame: "Activity-LarborPlayGame",
                        TimeLogin: "Activity-TimeLogin",
                        UserInfo: "Activity-UserInfo",
                        Decoration: "Decoration",
                        CostumeBundle: "CostumeBundle"
                    };
                    e.ActivityIDMap = {
                            1: d.Sign,
                            2: d.Kefugift,
                            3: d.AddToDesk,
                            4: d.GiftVisitor,
                            5: d.GiftRedBag,
                            6: d.LargeDelivery,
                            7: d.ReservePoker,
                            8: d.Turntable,
                            9: d.GiftBacon,
                            10: d.WelfareCenter,
                            11: d.Holiday,
                            12: d.ActivityNotice,
                            13: d.FirstPay,
                            14: d.GiftClub,
                            15: d.AddToProgram,
                            16: d.ActivityCollectionNew,
                            17: d.ActivityCollectionReturn,
                            18: d.PhysicalReward,
                            19: d.ActivityAppointment,
                            20: d.Mall,
                            21: d.Rank,
                            23: d.GameCoin,
                            24: d.GamePrivate,
                            25: d.GameMatch,
                            26: d.ToMiniGame,
                            27: d.ActivityWeekCard,
                            28: d.Square,
                            30: d.ActivityLucklySilver,
                            31: d.ActivityCashCow,
                            32: d.ActivityLiveact,
                            33: d.ActivityCardGod,
                            34: d.ActivityMoreGame,
                            35: d.FreeSilver,
                            36: d.PayGiftPackage,
                            37: d.PiggyBank,
                            38: d.FreeReward,
                            39: d.SuperPayGift,
                            40: d.GoldSnake,
                            41: d.CharmGift,
                            42: d.CumulativePay,
                            43: d.CumulativeCheckIn,
                            44: d.ShopSilver,
                            45: d.ShopProp,
                            46: d.ShopVIP,
                            47: d.DailyGift,
                            48: d.BoundPlan,
                            49: d.BonusGift,
                            50: d.ActivityNoticePopu,
                            51: d.GameLottery,
                            52: d.NianBeast,
                            53: d.LaborPlayGame,
                            54: d.TimeLogin,
                            55: d.UserInfo,
                            56: d.CostumeBundle
                        }, e.ActivityRedToAcId = ((t = {})[d.Sign] = 1, t[d.Kefugift] = 2, t[d.AddToDesk] = 3, t[d.GiftVisitor] = 4, t[d.GiftRedBag] = 5, t[d.LargeDelivery] = 6, t[d.ReservePoker] = 7, t[d.Turntable] = 8, t[d.GiftBacon] = 9, t[d.WelfareCenter] = 10, t[d.Holiday] = 11, t[d.ActivityNotice] = 12, t[d.FirstPay] = 13, t[d.GiftClub] = 14, t[d.AddToProgram] = 15, t[d.ActivityCollectionNew] = 16, t[d.ActivityCollectionReturn] = 17, t[d.PhysicalReward] = 18, t[d.ActivityAppointment] = 19, t[d.Rank] = 21, t[d.ToMiniGame] = 26, t[d.ActivityWeekCard] = 27, t[d.Square] = 28, t[d.ActivityLucklySilver] = 30, t[d.ActivityCashCow] = 31, t[d.ActivityLiveact] = 32, t[d.ActivityCardGod] = 33, t[d.ActivityMoreGame] = 34, t[d.FreeSilver] = 35, t[d.PayGiftPackage] = 36, t[d.PiggyBank] = 37, t[d.FreeReward] = 38, t[d.SuperPayGift] = 39, t[d.GoldSnake] = 40, t[d.CharmGift] = 41, t[d.CumulativePay] = 42, t[d.CumulativeCheckIn] = 43, t[d.ShopSilver] = 43, t[d.ShopSilver] = 44, t[d.ShopProp] = 45, t[d.ShopVIP] = 46, t[d.DailyGift] = 47, t[d.BoundPlan] = 48, t[d.BonusGift] = 49, t[d.ActivityNoticePopu] = 50, t[d.GameLottery] = 51, t[d.NianBeast] = 52, t[d.LaborPlayGame] = 53, t[d.TimeLogin] = 54, t[d.UserInfo] = 55, t[d.CostumeBundle] = 56, t), e.ActivityAcId = {
                            Sign: 1,
                            Kefugift: 2,
                            AddToDesk: 3,
                            GiftVisitor: 4,
                            GiftRedBag: 5,
                            LargeDelivery: 6,
                            ReservePoker: 7,
                            Turntable: 8,
                            GiftBacon: 9,
                            WelfareCenter: 10,
                            Holiday: 11,
                            ActivityNotice: 12,
                            FirstPay: 13,
                            GiftClub: 14,
                            AddToProgram: 15,
                            ActivityCollectionNew: 16,
                            ActivityCollectionReturn: 17,
                            PhysicalReward: 18,
                            ActivityAppointment: 19,
                            Rank: 21,
                            ToMiniGame: 26,
                            ActivityWeekCard: 27,
                            Square: 28,
                            ActivityLucklySilver: 30,
                            ActivityCashCow: 31,
                            ActivityLiveact: 32,
                            ActivityCardGod: 33,
                            ActivityMoreGame: 34,
                            FreeSilver: 35,
                            PayGiftPackage: 36,
                            PiggyBank: 37,
                            FreeReward: 38,
                            SuperPayGift: 39,
                            GoldSnake: 40,
                            CharmGift: 41,
                            CumulativePay: 42,
                            CumulativeCheckIn: 43,
                            ShopSilver: 44,
                            ShopProp: 45,
                            ShopVIP: 46,
                            DailyGift: 47,
                            BoundPlan: 48,
                            BonusGift: 49,
                            ActivityNoticePopu: 50,
                            GameLottery: 51,
                            NianBeast: 52,
                            LaborPlayGame: 53,
                            TimeLogin: 54,
                            UserInfo: 55,
                            CostumeBundle: 56
                        }, e.GoodsSubTypes = {
                            PROP: 1,
                            ROLE_EXPER: 2,
                            ROLE_MATERIAL: 3,
                            AVATAR: 4,
                            AVATAR_FRAME: 5,
                            CLOCK: 6,
                            CHAT_FRAME: 7,
                            EMOTI: 8,
                            EMOTI_GIFT: 9,
                            ROOM_PROP: 10,
                            SKIN: 11,
                            PET_ROLE: 12,
                            PET_PROP: 13,
                            ROLE: 14,
                            ROLE_KSIN: 15,
                            GOLD: 16,
                            DIAMOND: 17,
                            Activity: 18,
                            BUILD: 19,
                            QUICK_VOICE: 22
                        }, e.UserBankUpState = {
                            Fake: -1,
                            None: 0,
                            Real: 1
                        }, e.UserBankUpType = {
                            BANKRUPT_TYPE_SAFEBOX: 1,
                            BANKRUPT_TYPE_BANKRUPT: 2,
                            BANKRUPT_TYPE_OVER: 3,
                            BANKRUPT_TYPE_MINI: 3e3
                        }, e.BankupDialogType = {
                            FIRST_SAFEBOX: 1,
                            BANKRUPT_SAFEBOX: 2,
                            BANKRUPT_FIRST: 3,
                            BANKRUPT_BANKRUPTGIFT: 4,
                            FIRST_NOBANKRUPT: 5,
                            BANKRUPTGIFT_NOBANKRUPT: 6,
                            GIVE_UP: 7
                        }, e.MsgStatus = {
                            MSG_STATUS_FRESH: 1,
                            MSG_STATUS_READ: 2,
                            MSG_STATUS_HANDLED: 3,
                            MSG_STATUS_DELETE: 4
                        }, e.MsgAwardStatus = {
                            GOT: 1,
                            NOT_GOT: 0
                        }, e.MessageMaxNum = 100, e.UserGoodsDataType = {
                            GOODS_CONFIG: 1,
                            ROLES_CONFIG: 2,
                            ROLES_SKILL: 3,
                            BUILD_CONFIG: 4
                        }, e.ShopBigTabType = {
                            ALL: 0,
                            SILVER_COIN: 1,
                            PROPS: 3,
                            VIP: 2,
                            DECORATION: 25
                        }, e.GoodsListID = {
                            MarketSilver: 1,
                            MarketVip: 2,
                            MarketProp: 3,
                            MarketGold: 12,
                            MarketHot: 4,
                            Broken: 5,
                            HallPlus: 6,
                            RoomPay: 7,
                            VipCharge: 8,
                            FirstRecharge: 9,
                            SecondePay: 10,
                            Degrade: 11,
                            AgentCard: 999,
                            Bankruptcy: 19,
                            MarketGoldLevelChange: 20,
                            MallSlotMachine: 21,
                            RoomLevelDown: 22,
                            safebox: 23,
                            bankrupt_firstPay: 24,
                            dressUp: 25,
                            GiftPack: 26,
                            limitPack: 28,
                            newYearPack: 29,
                            BankruptcyFeedBack: 30,
                            GiftPackDaily: 31,
                            piggyBank: 32,
                            limitBuy: 36,
                            NoviceGiftPack: 46,
                            ReturnGiftPack: 47,
                            WeekCard: 48,
                            LucklySilver: 50,
                            CashCow: 51,
                            CardGod: 52,
                            PiggyBankNew: 53,
                            SuperPay: 54,
                            CharmGift: 55,
                            CumulativePay: 56,
                            surgePlan: 57,
                            CostumeBundle: 58
                        }, e.GoodsType = {
                            SILVER_COIN: {
                                id: 0,
                                name: "银币"
                            },
                            GOLD_BAR: {
                                id: 1,
                                name: "金条"
                            },
                            DIAMOND: {
                                id: 58,
                                name: "兑换券"
                            },
                            JIFEN: {
                                id: 3,
                                name: "积分"
                            }
                        }, e.ShopSmallTabType = {
                            SILVER_COIN: 1,
                            PROPS: 3
                        }, e.getGoodsTypeNameByScene = [{
                            scene: 1,
                            name: "银币"
                        }, {
                            scene: 3,
                            name: "道具"
                        }, {
                            scene: 12,
                            name: "金条"
                        }], e.GoodMoneyType = {
                            rmb: 1,
                            gold: 2,
                            diamond: 3
                        }, e.AppPayResult = {
                            UNINE: -1,
                            SUCCESS: 0,
                            FAIL: 1
                        }, e.GameTab = {
                            kechi: "kechi",
                            bukechi: "bukechi"
                        }, e.MatchType = {
                            NORMAL_IMMEDIATE_MATCH: 0,
                            FIXED_TIME_MATCH: 3,
                            JJ_MATCH: 7,
                            BET_MATCH: 8
                        }, e.MatchLoopType = {
                            NOT: 1,
                            WEEK: 2,
                            MONTH: 3,
                            CUSTOM: 4
                        }, e.MatchStatus = {
                            NOT_SIGN_UP: 0,
                            HAVE_SIGN_UP: 1,
                            ALLOW_JOIN_IN: 2,
                            MATCH_HAVE_START: 3,
                            SIGN_UP_AND_ALLOW_JOIN_IN: 4,
                            SIGN_UP_BUT_HAVE_START: 5
                        },
                        function(e) {
                            e[e.CAN_SIGNUP_FREE = 0] = "CAN_SIGNUP_FREE", e[e.CAN_SIGNUP_NOT_FREE = 1] = "CAN_SIGNUP_NOT_FREE", e[e.CAN_NOT_SIGNUP = 2] = "CAN_NOT_SIGNUP", e[e.AREALDY_SIGNUP_CAN_ENTER = 3] = "AREALDY_SIGNUP_CAN_ENTER", e[e.AREALDY_SIGNUP_CAN_NOT_ENTER = 4] = "AREALDY_SIGNUP_CAN_NOT_ENTER", e[e.OVER = 5] = "OVER"
                        }(u || (u = {})), e.MatchViewStatus = u, e.MatchSignUpError = {
                            FATAL_ERROR: 0,
                            MATCH_NOT_EXSITS: 1,
                            NOT_ENOUGH_ENTRY_FEE: 2,
                            MATH_IS_PLAYING: 3,
                            ALREADY_SIGN_UP: 4,
                            NOT_REACH_TIME: 5,
                            SIGN_UP_ERROR: 6,
                            MATCH_OVER_MAX_USER: 7
                        }, e.MatchUnSignUpError = {
                            MATCH_PLAYING: 0,
                            MATCH_UNSIGNUP: 1,
                            MATCH_UNKNOW: 2,
                            USER_NOT_EXSITS: 3,
                            MATCH_START: 4
                        }, e.MatchStartTimeoutError = {
                            WAIT_LONG_TIME: 1,
                            MATCH_START_ERROR: 2,
                            MATCH_CONTINUE_ERROR: 3,
                            MATCH_LONG_TIME_NOT_END: 4,
                            UNKOWN_REASON: 5,
                            SIGN_UP_ENOUGH_COUNT: 6
                        }, e.UBPaySceneConfig = {
                            kHallMarketGold: "1",
                            kHallMarketVip: "2",
                            kHallMarketCrystal: "19",
                            kHallBroken: "3",
                            KRoomBrokenRecharge: "8",
                            KGameDescendRecharege: "11",
                            kRoomTableRecharge: "13",
                            kRoomChatWndVipRecharge: "15",
                            kRoomUserInfoVipRecharge: "16",
                            kAgencyRecharge: "18",
                            kMatchMarketGold: "20",
                            kMatchMarketCrystal: "21",
                            kMatchMarketVip: "22",
                            kPrivateRoomMarketGold: "23",
                            kPrivateRoomMarketCrystal: "24",
                            kPrivateRoomMarketVip: "25",
                            kBankruptMarketGold: "26",
                            kBankruptMarketCrystal: "27",
                            kBankruptMarketVip: "28",
                            kRankMarketGold: "29",
                            kRankMarketCrystal: "30",
                            kRankMarketVip: "31",
                            kTaskMarketGold: "32",
                            kTaskMarketCrystal: "33",
                            kTaskMarketVip: "34",
                            kPrivateRoomButtonMarketGold: "35",
                            kPrivateRoomButtonMarketCrystal: "36",
                            kPrivateRoomButtonMarketVip: "37",
                            kHallButtonMarketGold: "38",
                            kHallButtonMarketCrystal: "39",
                            kHallButtonMarketVip: "40",
                            kCommonJumpMarketGold: "41",
                            kCommonJumpMarketCrystal: "42",
                            kCommonJumpMarketVip: "43",
                            kHallGameMarketGold: "47",
                            kHallGameMarketCrystal: "48",
                            kHallGameMarketVip: "49",
                            kHallUserInfoMarketGold: "50",
                            kHallUserInfoMarketCrystal: "51",
                            kHallUserInfoMarketVip: "52",
                            kMatchUserInfoMarketGold: "53",
                            kMatchUserInfoMarketCrystal: "54",
                            kMatchUserInfoMarketVip: "55",
                            kPrivateUserInfoMarketGold: "56",
                            kPrivateUserInfoMarketCrystal: "57",
                            kPrivateUserInfoMarketVip: "58",
                            kPrivateCreateRoom: "59",
                            kPrivateEnterRoom: "60",
                            KInvitationalMatchCreate: "61",
                            KInvitationalMatchSignup: "62",
                            kMatchSignup: "63",
                            kMatchSignupNext: "64",
                            kHallGameLevelEnter: "65",
                            kHallGameUserInfoMarketGold: "66",
                            kHallGameUserInfoMarketCrystal: "67",
                            kHallGameUserInfoMarketVip: "68",
                            kRoomMenuBarMarket: "69",
                            kRoomGameRecharge: "80",
                            kMatchMarketButtonGold: "81",
                            kMatchMarketButtonCrystal: "82",
                            kMatchMarketButtonVip: "83",
                            kFirstPay_1: "93",
                            kFirstPay_2: "94",
                            kFirstPay_3: "95",
                            KExitRecharge: "96",
                            KBankrupt_1: "97",
                            KBankrupt_2: "98",
                            kHallGameLevelEnterBankrupt: "99",
                            KMallSlotMachineRecharge1: "100",
                            KMallSlotMachineRecharge2: "101",
                            KGameLevelUp: "102",
                            KGameLevelDown: "103",
                            KSafebox: "104",
                            KBankruptFeedBack: "105",
                            KAeroplanChess: "106",
                            KHolidayGifg: "107",
                            KBankrupt_3: "108",
                            kActivity_1: "109",
                            kDailyGiftPack: "110",
                            KPiggyBank: "112",
                            KLimitBuy: "121",
                            LucklySilver: "141",
                            WeekCard: "142",
                            CashCow: "143",
                            CardGod: "144",
                            PiggyBank: "145",
                            SuperPayGift: "146",
                            CumulativePay: "147",
                            KSurgePlan: "148",
                            KOutSpecification: "149",
                            kActivityCollectionNew: "150",
                            kActivityCollectionBack: "151",
                            kHallMarketDecoration: "152",
                            CostumeBundle: "153"
                        }, e.UBPayLastSceneConfig = {
                            kHallScene: 1,
                            kHallSceneButton: 2,
                            kMatchHallScene: 3,
                            kMatchHallSceneButton: 4,
                            kPrivateRoomScene: 5,
                            kPrivateRoomSceneButton: 6,
                            kBankruptScene: 7,
                            kRankScene: 8,
                            kTaskScene: 9,
                            kCommonJump: 10,
                            kHallSceneGame: 11,
                            kHallUserInfoScene: 12,
                            kMatchUserInfoScene: 13,
                            kPrivateUserInfoScene: 14,
                            kGameUserInfoScene: 15
                        }, e.JumpViewConf = {
                            POS_LOGIN: 1,
                            POS_ACT_USERINFO: 1005,
                            POS_ACT_FRIEND: 1011,
                            POS_ACT_HALL: 1006,
                            POS_ACT_GAME: 1007,
                            POS_ACT_MALL: 1008,
                            POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT: 1045,
                            POS_ACT_SPECIALGIFT_TAG: "SPECIALSGIFTPACK",
                            POS_ACT_SIGN_TAG: "SIGN",
                            POS_ACT_DESK_TAG: "DESKTOPCOIN",
                            POS_ACT_CUSTOMER_SERVICE: "KEFUCOIN"
                        }, e.PopupPos = {
                            POS_LOGIN: 1,
                            POS_LOGOUT: 2,
                            POS_BALANCE: 3,
                            POS_BACK_HALL: 4,
                            POS_INTO_ROOM: 5,
                            POS_Mall_GO_Lobby: 6
                        }, e.PopupIds = {
                            SIGNIN: 1e3,
                            SHARE: 10020,
                            ACTIVITY_CENTER: 2,
                            FIRSTPAY_ACTIVITY: 30,
                            HOLIDAY_ACTIVITY: 33,
                            GIFTBAG_BANKRUPTCY: 35,
                            GIFTBAG_RESERVE_POKER: 72,
                            SILVERDELIVERY: 76,
                            GIFT_REDBAG: 79
                        }, e.PayMode = {
                            WEIXIN_PMODE: "431",
                            WEBCHAT_PMODE: "756",
                            APPLE_PMODE: "99"
                        }, e.PayType = {
                            FREE: 0,
                            RMB: 1,
                            SILVER: 2,
                            TICKET: 3,
                            SHARE: 4,
                            VIDEO: 5,
                            GOLD: 6,
                            WXTSET: 937
                        }, e.PayScene = {
                            hall: "大厅",
                            game: "游戏"
                        }, e.PayModel = {
                            sign_card: "签到_补签卡",
                            sign_video: "签到_视频补签",
                            userinfo_dress: "个人信息_装扮",
                            shop: "商城",
                            shop_hot: "商城_热销",
                            shop_gold: "商城_金豆",
                            shop_silver_coin: "商城_银币",
                            shop_props: "商城_道具",
                            shop_dress: "商城_装扮",
                            shop_vip: "商城_vip",
                            shop_jewelry: "商城_宝珠",
                            gift_newUser: "新手/首充礼包",
                            gift_limit: "限量礼包",
                            gift_flash: "限时礼包",
                            gift_discount: "特价礼包",
                            gift_weekly: "续航礼",
                            spring_limit: "春日限定装扮",
                            buy_limit: "限购礼包",
                            quick_pay: "通用支付"
                        }, e.BtnConf = {
                            Label_Cancel: "取消",
                            Label_Confirm: "确认"
                        }, e.ShareSceneConf = {
                            kefugift: "kefugift",
                            shopshare: "shopshare",
                            friend: "friend",
                            limitDiscount: "sharegift",
                            roomLevelGift: "roomLevelGift"
                        }, e.WatchMessageFrdType = {
                            inval: 0,
                            invite: 1,
                            likes: 2,
                            add_result: 3,
                            add_info: 4,
                            gift: 5,
                            gift_thank: 6
                        }, e.FriendUserInfoSceneTab = {
                            list: 1,
                            lately: 2,
                            friendMsg: 3
                        }, e.ReqUrl = {
                            shareType: {
                                shop: 1,
                                other: 2
                            },
                            shopShareUrl: "applet.getShareInfo",
                            shareCBUrl: "applet.callback",
                            newShareReportUrl: "applet.setShare",
                            newVdieoReportUrl: "applet.setAdVideo"
                        }, e.goodsIsHave = {
                            isNotHave: 0,
                            isHave: 1
                        }, e.AppLunchScene = ((i = {})[1e3] = 1e3, i[1001] = 1001, i[1005] = 1005, i[1006] = 1006, i[1007] = 1007, i[1008] = 1008, i[1010] = 1010, i[1011] = 1011, i[1012] = 1012, i[1013] = 1013, i[1014] = 1014, i[1017] = 1017, i[1018] = 1018, i[1019] = 1019, i[1020] = 1020, i[1022] = 1022, i[1023] = 1023, i[1024] = 1024, i[1025] = 1025, i[1026] = 1026, i[1027] = 1027, i[1028] = 1028, i[1029] = 1029, i[1030] = 1030, i[1031] = 1031, i[1032] = 1032, i[1034] = 1034, i[1035] = 1035, i[1036] = 1036, i[1037] = 1037, i[1038] = 1038, i[1039] = 1039, i[1042] = 1042, i[1043] = 1043, i[1044] = 1044, i[1045] = 1045, i[1046] = 1046, i[1047] = 1047, i[1048] = 1048, i[1049] = 1049, i[1052] = 1052, i[1053] = 1053, i[1054] = 1054, i[1055] = 1055, i[1056] = 1056, i[1057] = 1057, i[1058] = 1058, i[1059] = 1059, i[1064] = 1064, i[1065] = 1065, i[1067] = 1067, i[1068] = 1068, i[1069] = 1069, i[1071] = 1071, i[1072] = 1072, i[1073] = 1073, i[1074] = 1074, i[1077] = 1077, i[1078] = 1078, i[1081] = 1081, i[1082] = 1082, i[1084] = 1084, i[1088] = 1088, i[1089] = 1089, i[1090] = 1090, i[1091] = 1091, i[1092] = 1092, i[1095] = 1095, i[1096] = 1096, i[1097] = 1097, i[1099] = 1099, i[1100] = 1100, i[1101] = 1101, i[1102] = 1102, i[1103] = 1103, i[1104] = 1104, i[1106] = 1106, i[1107] = 1107, i[1113] = 1113, i[1114] = 1114, i[1124] = 1124, i[1125] = 1125, i[1126] = 1126, i[1129] = 1129, i[1131] = 1131, i[1133] = 1133, i[1135] = 1135, i[1144] = 1144, i[1145] = 1145, i[1146] = 1146, i[1148] = 1148, i[1150] = 1150, i[1152] = 1152, i[1153] = 1153, i[1154] = 1154, i[1155] = 1155, i[1158] = 1158, i[1160] = 1160, i[1167] = 1167, i[1168] = 1168, i[1177] = 1177, i[1178] = 1178, i[1179] = 1179, i[1181] = 1181, i[1184] = 1184, i[1187] = 1187, i[1193] = 1193, i[1194] = 1194, i[1197] = 1197, i[1198] = 1198, i[1199] = 1199, i[1200] = 1200, i[1201] = 1201, i[1205] = 1205, i[1206] = 1206, i[1219] = 1219, i[1223] = 1223, i[1228] = 1228, i[1230] = 1230, i[1231] = 1231, i[1232] = 1232, i[1233] = 1233, i[1238] = 1238, i[1239] = 1239, i), e.shareSucConditions = {
                            shareUseTime: 2
                        }, e.ShareStateType = {
                            START: "start",
                            RESULT: "result"
                        }, e.PrivateTableType = {
                            Money: 0,
                            Crystal: 1,
                            Score: 3
                        };
                    var _, h, p = e.GameID = {
                            FXJ: 2e3,
                            GeJiuMJ: 2703,
                            KXW: 3800,
                            PUERMJ: 6101,
                            QiongHuMJ: 209,
                            DanDongMJ: 1600,
                            JNMJ: 907,
                            KAERTIAO: 3803,
                            YNXUEZHANMJ: 18,
                            NANCHONG_MJ: 18,
                            DALI_XUEZHAN_MJ: 18,
                            BANNA_XUEZHAN_MJ: 18,
                            LINCANG_XUEZHAN_MJ: 18,
                            LNBENXIMJ: 19,
                            LNFUSHUNMJ: 3202,
                            SDWEIFANMJ: 3704,
                            SDLIAOCHENGMJ: 2805,
                            ZIGONG_BXP_MJ: 605,
                            ZIGONG_MJ: 601,
                            PANJIN_MJ: 1704,
                            JINZHOU_MJ: 2403,
                            HULUODAO_MJ: 2600,
                            DEHONG_MJ: 4903,
                            SDZIBO_MJ: 2100,
                            SD_LINYI_MJ: 5601,
                            DouDiZhu: 203,
                            ShengJi: 25,
                            GanDengYan: 20,
                            JXFUZHOUMJ: 5500,
                            JXJIUJIANGMJ: 3303,
                            JXXIUSHUIMJ: 3305,
                            JXYIBINMJ: 401,
                            LNFUXINMJ: 2500,
                            LNANSHANGMJ: 1503,
                            LNCHAOYANGMJ: 2203,
                            LNYINGKOUMJ: 1003,
                            LNLIAOYANGMJ: 2300,
                            LNSHENYANGMJ: 3100,
                            LNTIELINGMJ: 3e3,
                            GZGUIYANGMJ: 5402,
                            GZZUNYIMJ: 6001,
                            SCLUZHOUMJ: 1401,
                            SCNANCHONGMJ: 1200,
                            LSYAOJIMJ: 800,
                            YIBINMJ: 401,
                            YUXIMJ: 3501,
                            SCNEIJIANGMJ: 1301,
                            SCBAZHOINGMJ: 804,
                            SCGUANGYUANMJ: 104,
                            JLCHANGCHUNMJ: 4201,
                            JLYANBIANMJ: 5200,
                            YNCHUXIONGMJ: 3901,
                            JLYANBIAN_MJ: 5200,
                            JLJILIN_MJ: 4102,
                            JLSIPINGMJ: 4300,
                            YNZHAOTONGMJ: 6500,
                            JLBAISHANMJ: 4103,
                            JLTONGHUAMJ: 4001,
                            YNWENSHANMJ: 5900,
                            SONGYUAN_MJ: 4101,
                            YNBAOSHANMJ: 6900,
                            JLBAICHENGMJ: 4104,
                            JLLIAOYUANMJ: 4500,
                            SHUANGKOU: 2002,
                            PAODEKUAI: 38,
                            WUSHIK: 2402,
                            ZUNYIMJ: 6001,
                            LIUPANSHUIMJ: 6700,
                            GZANSHUNMJ: 6800,
                            KAILIMJ: 5404,
                            GZBIJIEMJ: 5401,
                            WRDDZ: 30,
                            GZDUYUNMJ: 6002,
                            GZTONGRENMJ: 7100,
                            XLCH: 7,
                            GZXINGYIMJ: 5403,
                            HZXLCH: 53,
                            DATONGMJ: 11600,
                            JINZHONGMJ: 18500,
                            JINCHENGMJ: 6205,
                            SSZ: 55,
                            YUNNANKUNMINGMJ: 1100,
                            YUNNANHUAPINGMJ: 3804,
                            LYC: 29,
                            ZEY: 56,
                            SHP: 57,
                            QZXZ: 604,
                            GUOBIAOMJ: 59,
                            QGWES: 58
                        },
                        f = (e.GameNameEnum = ((n = {})[p.FXJ] = "飞小鸡", n[p.GeJiuMJ] = "个旧麻将", n[p.KXW] = "卡心五", n[p.PUERMJ] = "普洱麻将", n[p.QiongHuMJ] = "穷胡", n[p.DanDongMJ] = "丹东麻将", n[p.JNMJ] = "济南麻将", n[p.KAERTIAO] = "卡二条", n[p.YNXUEZHANMJ] = "血战到底", n[p.LNBENXIMJ] = "本溪麻将", n[p.LNFUSHUNMJ] = "抚顺麻将", n[p.SDWEIFANMJ] = "潍坊麻将", n[p.SDLIAOCHENGMJ] = "聊城麻将", n[p.JINZHOU_MJ] = "锦州麻将", n[p.HULUODAO_MJ] = "葫芦岛麻将", n[p.DEHONG_MJ] = "德宏麻将", n[p.SDZIBO_MJ] = "淄博麻将", n[p.SD_LINYI_MJ] = "临沂麻将", n[p.DouDiZhu] = "斗地主", n[p.ShengJi] = "升级", n[p.GanDengYan] = "干瞪眼", n[p.JXFUZHOUMJ] = "抚州麻将", n[p.JXJIUJIANGMJ] = "九江麻将", n[p.JXXIUSHUIMJ] = "修水麻将", n[p.JXYIBINMJ] = "宜宾麻将", n[p.LNFUXINMJ] = "阜新麻将", n[p.LNANSHANGMJ] = "鞍山麻将", n[p.LNCHAOYANGMJ] = "朝阳麻将", n[p.LNYINGKOUMJ] = "营口麻将", n[p.LNLIAOYANGMJ] = "辽阳麻将", n[p.LNSHENYANGMJ] = "沈阳麻将", n[p.LNTIELINGMJ] = "铁岭麻将", n[p.GZGUIYANGMJ] = "捉鸡麻将", n[p.GZZUNYIMJ] = "遵义麻将", n[p.SCLUZHOUMJ] = "泸州鬼麻将", n[p.SCNANCHONGMJ] = "南充麻将", n[p.LSYAOJIMJ] = "幺鸡麻将", n[p.YIBINMJ] = "宜宾麻将", n[p.YUXIMJ] = "玉溪麻将", n[p.YUNNANKUNMINGMJ] = "昆明麻将", n[p.SCNEIJIANGMJ] = "内江麻将", n[p.SCBAZHOINGMJ] = "巴中麻将", n[p.SCGUANGYUANMJ] = "广元麻将", n[p.JLCHANGCHUNMJ] = "长春麻将", n[p.JLYANBIANMJ] = "延边麻将", n[p.YNCHUXIONGMJ] = "楚雄四五筒", n[p.JLYANBIAN_MJ] = "延边麻将", n[p.JLJILIN_MJ] = "吉林麻将", n[p.JLSIPINGMJ] = "四平麻将", n[p.YNZHAOTONGMJ] = "昭通麻将", n[p.JLBAISHANMJ] = "白山麻将", n[p.JLTONGHUAMJ] = "通化麻将", n[p.YNWENSHANMJ] = "文山麻将", n[p.SONGYUAN_MJ] = "松原麻将", n[p.YNBAOSHANMJ] = "保山麻将", n[p.JLBAICHENGMJ] = "白城麻将", n[p.JLLIAOYUANMJ] = "辽源麻将", n[p.SHUANGKOU] = "双扣", n[p.PAODEKUAI] = "跑得快", n[p.WUSHIK] = "五十K", n[p.ZUNYIMJ] = "遵义麻将", n[p.LIUPANSHUIMJ] = "六盘水麻将", n[p.GZANSHUNMJ] = "安顺麻将", n[p.KAILIMJ] = "凯里麻将", n[p.GZBIJIEMJ] = "毕节麻将", n[p.WRDDZ] = "五人斗地主", n[p.GZDUYUNMJ] = "都匀麻将", n[p.GZTONGRENMJ] = "铜仁麻将", n[p.XLCH] = "血流成河", n[p.GZXINGYIMJ] = "兴义麻将", n[p.HZXLCH] = "红中血流", n[p.ZIGONG_BXP_MJ] = "自贡麻将", n[p.ZIGONG_MJ] = "自贡麻将", n[p.PANJIN_MJ] = "盘锦麻将", n[p.DATONGMJ] = "大同麻将", n[p.JINZHONGMJ] = "晋中麻将", n[p.JINCHENGMJ] = "晋城麻将", n[p.SSZ] = "博雅十三张", n[p.YUNNANHUAPINGMJ] = "华坪麻将", n[p.LYC] = "捞腌菜", n[p.ZEY] = "捉二游", n[p.SHP] = "四合牌", n[p.QZXZ] = "七张血战", n[p.GUOBIAOMJ] = "国标麻将", n[p.QGWES] = "七鬼五二三", n), e.GamePrivateSort = ((a = {})[p.SHUANGKOU] = 1, a[p.PAODEKUAI] = 2, a[p.YNXUEZHANMJ] = 3, a[p.WUSHIK] = 4, a[p.GanDengYan] = 5, a[p.ShengJi] = 6, a[p.WRDDZ] = 7, a[p.XLCH] = 8, a[p.QZXZ] = 9, a[p.GUOBIAOMJ] = 10, a), e.GamePlayerNumMax = ((o = {})[p.DouDiZhu] = 3, o[p.SHUANGKOU] = 4, o[p.YNXUEZHANMJ] = 4, o[p.WUSHIK] = 4, o[p.GanDengYan] = 5, o[p.PAODEKUAI] = 3, o[p.ShengJi] = 4, o[p.WRDDZ] = 5, o[p.XLCH] = 4, o[p.QZXZ] = 6, o[p.SSZ] = 4, o[p.HZXLCH] = 4, o[p.LYC] = 7, o[p.ZEY] = 3, o[p.SHP] = 5, o[p.GUOBIAOMJ] = 4, o[p.QGWES] = 5, o), e.GameShareType = ((r = {})[p.DouDiZhu] = "poker", r[p.SHUANGKOU] = "poker", r[p.YNXUEZHANMJ] = "mj", r[p.WUSHIK] = "poker", r[p.GanDengYan] = "poker", r[p.PAODEKUAI] = "poker", r[p.ShengJi] = "poker", r[p.WRDDZ] = "poker", r[p.XLCH] = "mj", r[p.HZXLCH] = "mj", r[p.SSZ] = "poker", r[p.LYC] = "poker", r[p.ZEY] = "poker", r[p.SHP] = "poker", r[p.GUOBIAOMJ] = "mj", r[p.QGWES] = "poker", r), e.ShareType = {
                            Invite: 0,
                            Record: 1,
                            LargeDelivery: 2,
                            LuckyRedBag: 3,
                            InviteFast: 4,
                            Bacon: 5,
                            ADDTODESK: 6,
                            AddToProgram: 7,
                            PhysicalReward: 8,
                            MatchNotify: 9,
                            FriendsHelp: 10,
                            NianBeast: 11,
                            GameTeam: 12
                        }, e.SubScene = {
                            RedBag: 2,
                            Appointment: 3
                        }, e.TXGDActionType = {
                            PURCHASE: "PURCHASE",
                            ONE_DAY_LEAVE: "ONE_DAY_LEAVE",
                            REGISTER: "REGISTER",
                            CUSTOM: "CUSTOM",
                            START_APP: "START_APP",
                            LOGIN: "LOGIN",
                            CREATE_ROLE: "CREATE_ROLE",
                            RE_ACTIVE: "RE_ACTIVE",
                            SHARE: "SHARE",
                            ADD_TO_WISHLIST: "ADD_TO_WISHLIST"
                        }, e.PrivateChatText = {
                            classic: ["房主怎么还不开始游戏？", "少人了，大家快邀请，时间不等人！", "稍等下，我拉个朋友。", "是我太强了让你们一言不发吗？", "不要走，决战到天亮！", "希望在座的给个面子，手下留情~", "雀神在此！"]
                        }, e.ChatEmojiAniConf = ((s = {})[1] = "1_XYX", s[2] = "4_MR", s[3] = "15_WX", s[4] = "3_Heng", s[5] = "16_CYX", s[6] = "8_JX", s[7] = "14_Shuai", s[8] = "2_KS", s[9] = "9_Nu", s[10] = "6_Yun", s[11] = "11_Zan", s[12] = "5_KuQi", s[13] = "10_Se", s[14] = "13_Ye", s[15] = "7_SX", s[16] = "12_Ku", s), e.ChatEmojiSpriteConf = ((c = {})[17] = "emoji_default_17", c[18] = "emoji_default_18", c[19] = "emoji_default_19", c), e.ChatFunnyEmojiPropIds = [173, 174, 172], e.SubContextScenes = {
                            REAL_EXCHANGE: "friendBaconRankList",
                            PRIVATE_INVITE: "friendList",
                            ROOM_INVITE: "friendListInRoom",
                            SQUARE: "square",
                            RANK: "friendRankList",
                            RANK_HALL: "friendListInHall"
                        }, e.RankConstant = {
                            RANK_TOP_LEVEL: 12,
                            RANK_TOP_NUM: 200
                        }, e.MODULENAME = {
                            PRIVATE: "private",
                            MATCH: "match",
                            HALL: "hall",
                            GAME: "game"
                        }, e.RechargeBroadcastType = {
                            MALL: 4,
                            FIRST_PAY: 8,
                            WEEK_CARD: 19,
                            LUCK_COIN: 21,
                            CASH_COW: 22,
                            CARD_GOD: 23,
                            NEW_BACK_ACTIVITY: 24,
                            PIGGY_BANK: 25,
                            SUPREPAYGIFT: 26,
                            GOLDSNAKE: 12,
                            CumulativePay: 28,
                            SurgePlan: 29,
                            CostumeBundle: 30
                        }, e.PropIds = {
                            ROSE: 204,
                            XIGUA: 205,
                            PINGDIGUO: 206,
                            LOVE: 207,
                            GUN: 208,
                            YANHUA: 209,
                            CAIDAI: 210,
                            BAOZHU: 211,
                            DANGAO: 212,
                            HONGBAO: 213,
                            DIANZAN: 214,
                            CHONGTIANPAO: 215,
                            YINNGGUANG: 216,
                            KOUHONG: 217,
                            MOJING: 218,
                            SAOZHOU: 219,
                            TUOXIE: 220,
                            PENCHAOJI: 221,
                            JIDAN: 222,
                            CHUIZI: 223,
                            KAFEI: 224,
                            ZHADAN: 225
                        });
                    e.EmojiProp = [{
                            name: "锤子",
                            propID: f.CHUIZI,
                            icon: "chuizi"
                        }, {
                            name: "平底锅",
                            propID: f.PINGDIGUO,
                            icon: "pingdiguo"
                        }, {
                            name: "鸡蛋",
                            propID: f.JIDAN,
                            icon: "jidan"
                        }, {
                            name: "咖啡",
                            propID: f.KAFEI,
                            icon: "kafei"
                        }, {
                            name: "爱心",
                            propID: f.LOVE,
                            icon: "love-u"
                        }, {
                            name: "鲜花",
                            propID: f.ROSE,
                            icon: "rose"
                        }, {
                            name: "水枪",
                            propID: f.GUN,
                            icon: "shuiqiang"
                        }, {
                            name: "西瓜",
                            propID: f.XIGUA,
                            icon: "guapi"
                        }, {
                            name: "炸弹",
                            propID: f.ZHADAN,
                            icon: "zhadan"
                        }, {
                            name: "红包",
                            propID: f.HONGBAO,
                            icon: "hb"
                        }, {
                            name: "鞭炮",
                            propID: f.BAOZHU,
                            icon: "bp"
                        }, {
                            name: "烟花",
                            propID: f.YANHUA,
                            icon: "yanhua"
                        }, {
                            name: "蛋糕",
                            propID: f.DANGAO,
                            icon: "dangao"
                        }, {
                            name: "彩带",
                            propID: f.CAIDAI,
                            icon: "yanhua"
                        }, {
                            name: "拖鞋",
                            propID: f.TUOXIE,
                            icon: "tuoxie"
                        }], e.WECHAT_PAYTYPE = {
                            WECHAT: 937,
                            WECHAT_NEW: 1002
                        }, e.ACTIVITY_EVEVT_TYPE = {
                            LEVELSYSTEM: 1,
                            NIANBEAT: 2
                        }, e.PRIVATE_VOICE_TYPE = {
                            REALTIME_VOICE: 999,
                            NORMAL_VOICE: 998
                        }, e.TEAM_OPERATION_CODE = {
                            CREATE: 1,
                            READY: 2,
                            QUIT: 3,
                            RECONN: 4,
                            HEART: 5,
                            UPDATE_MONEY: 6
                        },
                        function(e) {
                            e[e.NORMAL = 0] = "NORMAL", e[e.CREATE_MEMBER_SIZE_ERR = 1] = "CREATE_MEMBER_SIZE_ERR", e[e.CREATE_DUPLICATE_UIDS_ERR = 2] = "CREATE_DUPLICATE_UIDS_ERR", e[e.CREATE_LEADER_TEAM_NOT_IN_WAITGROUP = 3] = "CREATE_LEADER_TEAM_NOT_IN_WAITGROUP", e[e.CREATE_USER_ALREADY_HAS_TEAM = 4] = "CREATE_USER_ALREADY_HAS_TEAM", e[e.CREATE_NO_AVAILABLE_USER = 5] = "CREATE_NO_AVAILABLE_USER", e[e.CREATE_GET_USERSERVER_INFO_ERROR = 6] = "CREATE_GET_USERSERVER_INFO_ERROR", e[e.CREATE_USER_ALREADY_IN_TABLE = 7] = "CREATE_USER_ALREADY_IN_TABLE", e[e.CREATE_QUERY_TEAM_MEMBER_HALLID_ERROR = 8] = "CREATE_QUERY_TEAM_MEMBER_HALLID_ERROR", e[e.CREATE_JOIN_TEAM_ERROR = 9] = "CREATE_JOIN_TEAM_ERROR", e[e.CREATE_CREATE_TEAM_ERROR = 10] = "CREATE_CREATE_TEAM_ERROR", e[e.READY_USER_NOT_IN_TEAM = 11] = "READY_USER_NOT_IN_TEAM", e[e.READY_USER_NOT_IN_WAIT_GROUP = 12] = "READY_USER_NOT_IN_WAIT_GROUP", e[e.READY_STATUS_NO_CHANGE = 13] = "READY_STATUS_NO_CHANGE", e[e.READY_TEAM_USER_NOT_EXISTS = 14] = "READY_TEAM_USER_NOT_EXISTS", e[e.QUIT_USER_NOT_IN_TEAM = 15] = "QUIT_USER_NOT_IN_TEAM", e[e.QUIT_USER_NOT_FIND_TEAM = 16] = "QUIT_USER_NOT_FIND_TEAM", e[e.QUIT_TEAM_NOT_IN_WAIT_GROUP = 17] = "QUIT_TEAM_NOT_IN_WAIT_GROUP", e[e.RECONN_UID_ERROR = 18] = "RECONN_UID_ERROR", e[e.RECONN_USER_NOT_IN_TEAM = 19] = "RECONN_USER_NOT_IN_TEAM", e[e.RECONN_TEAM_NOT_FOUND_OR_SINGLE_TEAM = 20] = "RECONN_TEAM_NOT_FOUND_OR_SINGLE_TEAM", e[e.HEARTBEAT_ERROR = 21] = "HEARTBEAT_ERROR", e[e.INVALID_TEAM_OPERATE = 22] = "INVALID_TEAM_OPERATE", e[e.TEAM_MATCH_LEVEL_NOT_EXISTS = 23] = "TEAM_MATCH_LEVEL_NOT_EXISTS", e[e.TEAM_MATCH_MAX_USER_COUNT_ERROR = 24] = "TEAM_MATCH_MAX_USER_COUNT_ERROR", e[e.TEAM_MATCH_USER_NOT_IN_TEAM = 25] = "TEAM_MATCH_USER_NOT_IN_TEAM", e[e.TEAM_MATCH_USER_DRNODE_NOT_FOUND = 26] = "TEAM_MATCH_USER_DRNODE_NOT_FOUND", e[e.TEAM_MATCH_TEAMID_NOT_FOUNDED = 27] = "TEAM_MATCH_TEAMID_NOT_FOUNDED", e[e.TEAM_MATCH_TEAM_NOT_WAIT_STATUS = 28] = "TEAM_MATCH_TEAM_NOT_WAIT_STATUS", e[e.TEAM_MATCH_MEMBER_NOT_READY = 29] = "TEAM_MATCH_MEMBER_NOT_READY", e[e.TEAM_MATCH_MEMBER_SIZE_ERR = 30] = "TEAM_MATCH_MEMBER_SIZE_ERR", e[e.SINGLE_MATCH_USER_ALREADY_IN_TEAM = 31] = "SINGLE_MATCH_USER_ALREADY_IN_TEAM", e[e.SINGLE_MATCH_GET_USERSERVER_INFO_ERROR = 32] = "SINGLE_MATCH_GET_USERSERVER_INFO_ERROR", e[e.SINGLE_MATCH_USER_ALREADY_IN_TABLE = 33] = "SINGLE_MATCH_USER_ALREADY_IN_TABLE", e[e.SINGLE_MATCH_QUERY_MEMBER_HALLID_ERROR = 34] = "SINGLE_MATCH_QUERY_MEMBER_HALLID_ERROR", e[e.SINGLE_MATCH_ADD_SINGLE_USER_ERROR = 35] = "SINGLE_MATCH_ADD_SINGLE_USER_ERROR", e[e.TEAM_MATCH_TOO_MUCH_MONEY = 36] = "TEAM_MATCH_TOO_MUCH_MONEY", e[e.TEAM_MATCH_NOT_ENOUGH_MONEY = 37] = "TEAM_MATCH_NOT_ENOUGH_MONEY", e[e.SINGLE_MATCH_TOO_MUCH_MONEY = 38] = "SINGLE_MATCH_TOO_MUCH_MONEY", e[e.SINGLE_MATCH_NOT_ENOUGH_MONEY = 39] = "SINGLE_MATCH_NOT_ENOUGH_MONEY"
                        }(_ || (_ = {})), e.TEAM_ERROR_CODE = _, e.SUPPORT_TEAM_GAMEIDS = [p.HZXLCH], e.NOTICE_PUP_USERGROUP_TYPE = {
                            REGISTER_DAY: 1,
                            HISTORY_PAY: 2,
                            SEVEN_DAY_PAY: 3,
                            SEVEN_DAY_PAY_COUNT: 4,
                            USER_ASSET: 5,
                            BANKRUPT_COUNT: 6,
                            HALL_VERSION: 7
                        }, e.NOTICE_PUP_USERGROUP_OPERATOR = {
                            EQUAL: 1,
                            NOT_EQUAL: 2,
                            LESS_THAN: 3,
                            LESS_THAN_OR_EQUAL: 4,
                            GREATER_THAN: 5,
                            GREATER_THAN_OR_EQUAL: 6,
                            CONTAIN: 7
                        },
                        function(e) {
                            e[e.NicknameRedName = 1] = "NicknameRedName", e[e.BadgeCornerMark = 2] = "BadgeCornerMark", e[e.BuySilverBonus = 3] = "BuySilverBonus", e[e.SignInExtraBonus = 4] = "SignInExtraBonus", e[e.DailyFreeInteractionItems = 5] = "DailyFreeInteractionItems", e[e.FreeCardCounter = 6] = "FreeCardCounter", e[e.DailyRankProtect = 7] = "DailyRankProtect", e[e.LadderScoreBonus = 8] = "LadderScoreBonus", e[e.BuyVipGiftSilver = 9] = "BuyVipGiftSilver"
                        }(h || (h = {})), e.MemberPrivilegeType = h, e.DianState = {
                            DEFAULT: 0,
                            SUCC: 1,
                            FAIL: 2
                        }, e.RevoStat = {
                            DEFAULT: 0,
                            CHOOSE: 1,
                            YES: 2,
                            NO: 3
                        }, e.GameTwoPlayerRuleId = 102, e.PrimpType = {
                            HeadBox: 1,
                            Clock: 3,
                            ChatBox: 4,
                            EnterAnim: 5,
                            HandCard: 8,
                            RoomTable: 9,
                            RoomTableMJ: 10,
                            HandCardMJ: 11
                        }, e.HALL_MAIN_GAMENUM = 2
                }(n || (n = e("GConstants", {}))), t._RF.pop()
        }
    }
}))