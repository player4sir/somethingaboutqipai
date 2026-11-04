System.register("chunks:///_virtual/FXJCmd3.ts", ["cc", "./FXJEvent3.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.FXJEvent
        }, function(e) {
            a = e.GameEvent
        }],
        execute: function() {
            var i, o;
            t._RF.push({}, "82502o3yNZGtI2wl1fmEb43", "FXJCmd", void 0);
            var r = e("FXJPBPackageID", {
                    Common: "Common",
                    Game: "Game"
                }),
                s = e("CmdBindingPB", (function(e, t, n) {
                    return void 0 === n && (n = null), {
                        packageID: e,
                        funcName: t,
                        respEvent: n
                    }
                })),
                u = e("FXJCmdHead", {
                    S2C: {
                        SERVER_BROADCAST_PLAYER_LOGIN: 4109,
                        SERVER_BROADCAST_PLAYER_READY: 16385,
                        ROOM_LOGIN_SUCCESS: 4103,
                        SERVER_BROADCAST_PLAYER_LOGOUT: 4110,
                        ROOM_LOGOUT_SUCCESS: 4104,
                        ROOM_RECONNECT: 4105,
                        BROADCAST_LUA_ERROR: 12549,
                        BROADCAST_WAIT_HINT: 20528,
                        GRAP_CARD: 86022,
                        OUT_CARD: 86024,
                        OPERATION: 86032,
                        BROADCAST_USER_PIAO_GANG: 86048,
                        BROADCAST_BANKER_ACTION: 86052,
                        BROADCAST_PAOQIAN_OPTIONS: 94210,
                        BROADCAST_PAOQIAN_RESULT: 94212,
                        BROADCAST_USER_GIVE_UP: 94232,
                        BROADCAST_FAN_PI_GU_RESULT: 94230,
                        BROADCAST_COUZHUANG: 77896,
                        BROADCAST_DOUBLE_CARDS: 21302,
                        PACKAGE_ACK: 20480,
                        BROADCAST_GAME_START: 20482,
                        BROADCAST_GAME_OVER: 20484,
                        BROADCAST_DING_ZHUANG: 20486,
                        BROADCAST_ZHI_TOU: 20488,
                        BROADCAST_DING_FENG: 20496,
                        BROADCAST_USER_OPERATION: 20498,
                        BROADCAST_USER_OPERATION_RESULT: 20500,
                        DEAL_CARD: 20504,
                        GRAB_CARD: 20512,
                        BROADCAST_PLAYING_JI_TYPE: 20514,
                        BROADCAST_ZHUO_JI: 20516,
                        BROADCAST_SETTLE: 20518,
                        BROADCAST_HANDCARDS: 20520,
                        BROADCAST_BANKER_FIRST_OPERATION: 20530,
                        BROADCAST_UPDATE_PLAYER_MONEY: 20532,
                        BROADCAST_GANG_OPERATION_RESULT: 20534,
                        BROADCAST_ROOM_INFO: 20736,
                        BROADCAST_DING_LAIZI: 21304,
                        BROADCAST_TO_WAIT_USER_GIVE_UP: 21350,
                        BROADCAST_USER_GIVE_UP_RESULTS: 21352,
                        BROADCAST_DI_TING: 12321,
                        BROADCAST_BU_HUA: 12337,
                        BROADCAST_BAO_JIAO: 12386,
                        BROADCAST_WAIT_TIME_BEFORE_GRAB: 12388,
                        BROADCAST_SPECIAL_CARDS: 12392,
                        BROADCAST_XIAZHU_OPTIONS: 21250,
                        BROADCAST_XIAZHU_RESULT: 21252,
                        BROADCAST_SELECT_GANG_CARDS: 21254,
                        BROADCAST_GANG_CARDS: 21256,
                        BROADCAST_DINGQUE_OPTIONS: 21266,
                        BROADCAST_ONE_DINGQUE_RESULT: 21268,
                        BROADCAST_ALL_DINGQUE_RESULT: 21270,
                        BROADCAST_SHUAIQIANG_RESULT: 21284,
                        BROADCAST_CHAQUE_RESULT: 21288,
                        BROADCAST_MAIDUANMEN_USER: 21298,
                        BROADCAST_MAIDUANMEN_RESULT: 21300,
                        BROADCAST_FEN_ZHANG: 21312,
                        BROADCAST_UPDATE_FAN_GANG_PAI: 21314,
                        BROADCAST_SELECT_FAN_GANG_PAI: 21316,
                        BROADCAST_GEN_ZHUANG_SUCC: 21318,
                        BROADCAST_FOLDCARD: 21320,
                        BROADCAST_LAST_TIME_HUANG_ZHUANG: 21328,
                        BROADCAST_PAIXINGTEST_RESULT: 21332,
                        BROADCAST_FAN_GANG_PAI: 21330,
                        BROADCAST_LEFT_CARDS_UPDATE: 21334,
                        BROADCAST_LAPAI_OPTIONS: 21336,
                        BROADCAST_LAPAI_RESULT: 21344,
                        BROADCAST_LAPAI_FINAL_RESULTS: 21346,
                        BROADCAST_CHI_SAN_KOU: 21348,
                        BROADCAST_DITING_START: 21364,
                        BROADCAST_DITING_END: 21366,
                        BROADCAST_MAI_MA_RESULT: 21360,
                        BROADCAST_MAI_MA_SETTLE: 21362,
                        BROADCAST_UPDATE_USER_PAO_CARD: 21368,
                        BROADCAST_GUAN_SI: 21376,
                        BROADCAST_JI_QIANG_RESULT: 21378,
                        BROADCAST_PIAO_OPTION: 21382,
                        BROADCAST_PIAO_RESULT: 21384,
                        BROADCAST_HUAN_SAN_ZHANG: 21392,
                        BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT: 21394,
                        BROADCAST_ALL_HUAN_SAN_ZHANG: 21396,
                        BROADCAST_BAO_HU: 21398,
                        BROADCAST_BU_HUA_PAI: 21399,
                        BROADCAST_BAOPAI_RESULT: 21504,
                        BROADCAST_HUAN_BAO: 21506,
                        BROADCAST_RESTORE_DIAO: 21508,
                        BROADCAST_NEXT_OPERATION_USER: 21510,
                        BROADCAST_CAI_SHEN_RESULT: 21512,
                        BROADCAST_DING_LIPAI: 21520,
                        BROADCAST_YOU_JIN_STATUS: 21522,
                        BROADCAST_DIRVER_CLIENT_VARS: 21524,
                        DEBUG_STOP_GAME_SUCCESS: 22936,
                        CHECK_VERSION_RESULT: 22934,
                        REMOVE_HUAPAI: 24834,
                        RES_RULESCONFIG: 24576,
                        BROADCAST_DIRVERCLIENTVARS: 24577,
                        BROADCAST_TING_TIPS_OPTIONS: 24610,
                        BROADCAST_TING_TIPS: 24612,
                        BROADCAST_TING_TIPS_BUTTON: 24614
                    },
                    C2S: {
                        OUT_CARD: 20487,
                        OPERATION: 20489,
                        ROOM_USER_CHAT: 4099,
                        ROOM_USER_FACE: 4100,
                        CANCEL_OPERATION: 20503,
                        USER_XIAZHU_REQUEST: 21251,
                        USER_SUBMIT_GANG_CARD: 21255,
                        USER_DINGQUE_REQUEST: 21267,
                        USER_BREAK_UP_OPTION: 21271,
                        USER_PIAO_REQUEST: 21281,
                        USER_MAIDUANMEN_REQUEST: 21301,
                        USER_OPERATION_RESULT: 21303,
                        USER_SELECT_FAN_GANG_PAI: 21305,
                        USER_PAIXINGTEST_REQUEST: 21313,
                        USER_LAPAI_REQUEST: 21337,
                        USER_GIVE_UP_OPTION: 21351,
                        USER_SELECT_PIAO: 21383,
                        USER_HUAN_SAN_ZHANG_RESULT: 21393,
                        USER_CHOSE_GROUPS: 21395,
                        USER_DU_ZI_MO_RESULT: 21397,
                        DEBUG_STOP_GAME: 22937,
                        CHECK_VERSION: 22935,
                        REQ_RULESCONFIG: 24577
                    }
                });
            e("FXJCmdBinding", {
                REQ: (i = {}, i[u.C2S.OUT_CARD] = s(r.Game, "OutCard", null), i[u.C2S.ROOM_USER_CHAT] = s(null, "onReqCommonUserChat", null), i[u.C2S.ROOM_USER_FACE] = s(null, "onReqCommonUserFace", null), i[u.C2S.CANCEL_OPERATION] = s(r.Game, "UserCancel", null), i[u.C2S.USER_XIAZHU_REQUEST] = s(r.Game, "UserXiaZhu", null), i[u.C2S.USER_SUBMIT_GANG_CARD] = s(r.Game, "SelectGangCard", null), i[u.C2S.USER_DINGQUE_REQUEST] = s(r.Game, "UserDingQue", null), i[u.C2S.USER_BREAK_UP_OPTION] = s(r.Game, "UserBreakUpOption", null), i[u.C2S.USER_PIAO_REQUEST] = s(r.Game, "UserDingQue", null), i[u.C2S.USER_MAIDUANMEN_REQUEST] = s(r.Game, "MaiDuanMenResult", null), i[u.C2S.USER_OPERATION_RESULT] = s(r.Game, "OperationResult", null), i[u.C2S.USER_SELECT_FAN_GANG_PAI] = s(r.Game, "SelectFanGangPai", null), i[u.C2S.USER_PAIXINGTEST_REQUEST] = s(r.Game, "PaiXingTestRequest", null), i[u.C2S.USER_LAPAI_REQUEST] = s(r.Game, "UserXiaZhu", null), i[u.C2S.USER_GIVE_UP_OPTION] = s(r.Game, "UserGiveUpOption", null), i[u.C2S.USER_SELECT_PIAO] = s(r.Game, "UserXiaZhu", null), i[u.C2S.USER_HUAN_SAN_ZHANG_RESULT] = s(r.Game, "HuanSanZhang", null), i[u.C2S.USER_CHOSE_GROUPS] = s(r.Game, "UserChoseGroups", null), i[u.C2S.USER_DU_ZI_MO_RESULT] = s(r.Game, "UserDuResult", null), i[u.C2S.DEBUG_STOP_GAME] = s(r.Game, "UserCancel", null), i[u.C2S.CHECK_VERSION] = s(r.Game, "CheckVersion", null), i[u.C2S.REQ_RULESCONFIG] = s(r.Game, "REQ_RULESCONFIG", null), i[u.C2S.USER_HUAN_SAN_ZHANG_RESULT] = s(r.Game, "HuanSanZhang", null), i),
                RESP: (o = {}, o[u.S2C.ROOM_LOGIN_SUCCESS] = s(r.Game, "UserLoginRoom", n.NET_RECEIVE_GAME_LOGIN_SUCCESS), o[u.S2C.SERVER_BROADCAST_PLAYER_LOGIN] = s(r.Common, "PlayerInfo", a.SERVER_BROADCAST_PLAYER_LOGIN), o[u.S2C.ROOM_RECONNECT] = s(r.Game, "UserReconnect", n.NET_RECEIVE_GAME_RECONNECT_SUCCESS), o[u.S2C.BROADCAST_DING_ZHUANG] = s(r.Game, "FixBanker", n.BROADCAST_DING_ZHUANG), o[u.S2C.GRAB_CARD] = s(r.Game, "GrabCard", n.BROADCAST_GRAB_CARD), o[u.S2C.BROADCAST_ZHI_TOU] = s(r.Game, "RollDice", n.BROADCAST_ZHI_TOU), o[u.S2C.BROADCAST_DING_FENG] = s(r.Game, "QuanfengInfo", n.BROADCAST_DING_FENG), o[u.S2C.BROADCAST_USER_OPERATION] = s(r.Game, "Operation", n.BROADCAST_USER_OPERATION), o[u.S2C.BROADCAST_USER_OPERATION_RESULT] = s(r.Game, "OperationResult", n.BROADCAST_USER_OPERATION_RESULT), o[u.S2C.DEAL_CARD] = s(r.Game, "DealCard", n.BROADCAST_DEAL_CARD), o[u.S2C.BROADCAST_DINGQUE_OPTIONS] = s(r.Game, "DingQueOption", n.BROADCAST_DINGQUE_OPTIONS), o[u.S2C.BROADCAST_BANKER_FIRST_OPERATION] = s(r.Game, "FixBanker", n.BROADCAST_BANKER_FIRST_OPERATION), o[u.S2C.BROADCAST_UPDATE_PLAYER_MONEY] = s(r.Game, "UpdatePlayerMoney", n.BROADCAST_UPDATE_PLAYER_MONEY), o[u.S2C.BROADCAST_GANG_OPERATION_RESULT] = s(r.Game, "gangOperationResult", n.BROADCAST_GANG_OPERATION_RESULT), o[u.S2C.BROADCAST_DING_LAIZI] = s(r.Game, "FixLaizi", n.BROADCAST_DING_LAIZI), o[u.S2C.BROADCAST_TO_WAIT_USER_GIVE_UP] = s(r.Game, "ToWaitGiveup", n.BROADCAST_TO_WAIT_USER_GIVE_UP), o[u.S2C.BROADCAST_USER_GIVE_UP_RESULTS] = s(r.Game, "UserGiveUpOption", n.BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT), o[u.S2C.BROADCAST_XIAZHU_OPTIONS] = s(r.Game, "XiaZhuOption", n.BROADCAST_XIAZHU_OPTIONS), o[u.S2C.BROADCAST_XIAZHU_RESULT] = s(r.Game, "UserXiaZhu", n.BROADCAST_XIAZHU_RESULT), o[u.S2C.BROADCAST_BU_HUA_PAI] = s(r.Game, "BuHuaZhaPai", n.BROADCAST_BU_HUA_PAI), o[u.S2C.BROADCAST_PAOQIAN_OPTIONS] = s(r.Game, "PaoQianOption", n.BROADCAST_PAOQIAN_OPTIONS), o[u.S2C.BROADCAST_ONE_DINGQUE_RESULT] = s(r.Game, "UserDingQue", n.BROADCAST_ONE_DINGQUE_RESULT), o[u.S2C.BROADCAST_ALL_DINGQUE_RESULT] = s(r.Game, "DingQueResult", n.BROADCAST_ALL_DINGQUE_RESULT), o[u.S2C.BROADCAST_SHUAIQIANG_RESULT] = s(r.Game, "ShuaiQiang", n.BROADCAST_SHUAIQIANG_RESULT), o[u.S2C.BROADCAST_CHAQUE_RESULT] = s(r.Game, "UserChaQue", n.BROADCAST_CHAQUE_RESULT), o[u.S2C.BROADCAST_MAIDUANMEN_USER] = s(r.Game, "MaiDuanMenUser", n.BROADCAST_MAIDUANMEN_USER), o[u.S2C.BROADCAST_MAIDUANMEN_RESULT] = s(r.Game, "MaiDuanMenResult", n.BROADCAST_MAIDUANMEN_RESULT), o[u.S2C.BROADCAST_HUAN_BAO] = s(r.Game, "HuanBao", n.BROADCAST_HUAN_BAO), o[u.S2C.BROADCAST_FEN_ZHANG] = s(r.Game, "FenZhang", n.BROADCAST_FEN_ZHANG), o[u.S2C.BROADCAST_UPDATE_FAN_GANG_PAI] = s(r.Game, "UpdateFanGangPai", n.BROADCAST_UPDATE_FAN_GANG_PAI), o[u.S2C.BROADCAST_SELECT_FAN_GANG_PAI] = s(r.Game, "SelectFanGangPai", n.BROADCAST_SELECT_FAN_GANG_PAI), o[u.S2C.BROADCAST_FAN_GANG_PAI] = s(r.Game, "FanGangPai", n.BROADCAST_FAN_GANG_PAI), o[u.S2C.BROADCAST_UPDATE_USER_PAO_CARD] = s(r.Game, "UpdatePaoCard", n.BROADCAST_UPDATE_USER_PAO_CARD), o[u.S2C.BROADCAST_DOUBLE_CARDS] = s(r.Game, "ChouJiang", n.BROADCAST_DOUBLE_CARDS), o[u.S2C.BROADCAST_PLAYING_JI_TYPE] = s(r.Game, "PlayingJiType", n.BROADCAST_PLAYING_JI_TYPE), o[u.S2C.BROADCAST_ZHUO_JI] = s(r.Game, "ZhuoJi", n.BROADCAST_ZHUO_JI), o[u.S2C.BROADCAST_SETTLE] = s(r.Game, "SettleItem", n.BROADCAST_SETTLE), o[u.S2C.BROADCAST_HANDCARDS] = s(r.Game, "HandCards", n.BROADCAST_HANDCARDS), o[u.S2C.BROADCAST_GEN_ZHUANG_SUCC] = s(r.Game, "FixBanker", n.BROADCAST_GEN_ZHUANG_SUCC), o[u.S2C.BROADCAST_GAME_OVER] = s(r.Common, "GameState", n.BROADCAST_GAME_OVER), o[u.S2C.BROADCAST_GAME_START] = s(r.Common, "GameState", n.BROADCAST_GAME_START), o[u.S2C.BROADCAST_LUA_ERROR] = s(r.Game, "LuaError", n.BROADCAST_LUA_ERROR), o[u.S2C.BROADCAST_WAIT_HINT] = s(r.Game, "UserWaitOperate", n.BROADCAST_WAIT_HINT), o[u.S2C.BROADCAST_DITING_START] = s(r.Game, "DiTingStatus", n.BROADCAST_DITING_START), o[u.S2C.BROADCAST_DITING_END] = s(r.Game, "DiTingStatus", n.BROADCAST_DITING_END), o[u.S2C.BROADCAST_HUAN_SAN_ZHANG] = s(r.Game, "HuanSanZhang", n.BROADCAST_HUAN_SAN_ZHANG), o[u.S2C.BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT] = s(r.Game, "HuanSanZhang", n.BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT), o[u.S2C.BROADCAST_ALL_HUAN_SAN_ZHANG] = s(r.Game, "HuanSanZhang", n.BROADCAST_ALL_HUAN_SAN_ZHANG), o[u.S2C.BROADCAST_JI_QIANG_RESULT] = s(r.Game, "JiQiangResult", n.BROADCAST_JI_QIANG_RESULT), o)
            }), t._RF.pop()
        }
    }
}))