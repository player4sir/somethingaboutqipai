System.register("chunks:///_virtual/FXJConfig3.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var n, a, i, o, r, s, u, l;
            e({
                    GameStatus: void 0,
                    MJTYPE: void 0,
                    OPCode: void 0,
                    PlayerPosition: void 0
                }), t._RF.push({}, "9e6ddGEEqFE7a932f/2D3RV", "FXJConfig", void 0), e("FXJConfig", {
                    ChatTextAutoHide: 2
                }),
                function(e) {
                    e[e.WAN = 0] = "WAN", e[e.TONG = 1] = "TONG", e[e.TIAO = 2] = "TIAO"
                }(r || (r = e("MJTYPE", {}))),
                function(e) {
                    e[e.OPE_OK = -1e3] = "OPE_OK", e[e.OPE_ERROR = 1e4] = "OPE_ERROR", e[e.OPE_OUT_CARD = 10001] = "OPE_OUT_CARD", e[e.OPE_PASS = 10002] = "OPE_PASS", e[e.OPE_CANCEL = 10003] = "OPE_CANCEL", e[e.OPE_CANCEL_TING = 10004] = "OPE_CANCEL_TING", e[e.OPE_RIGHT_CHI = 1001] = "OPE_RIGHT_CHI", e[e.OPE_MIDDLE_CHI = 1002] = "OPE_MIDDLE_CHI", e[e.OPE_LEFT_CHI = 1003] = "OPE_LEFT_CHI", e[e.OPE_PENG = 2001] = "OPE_PENG", e[e.OPE_QIANG_PENG = 2002] = "OPE_QIANG_PENG", e[e.OPE_GANG = 3001] = "OPE_GANG", e[e.OPE_HUA_GANG = 3002] = "OPE_HUA_GANG", e[e.OPE_AN_GANG = 3003] = "OPE_AN_GANG", e[e.OPE_BU_GANG = 3004] = "OPE_BU_GANG", e[e.OPE_QIANG_GANG = 3005] = "OPE_QIANG_GANG", e[e.OPE_DIAO = 3006] = "OPE_DIAO", e[e.OPE_BAO_GANG = 3007] = "OPE_BAO_GANG", e[e.OPE_BU_HUA_TO_GANG = 3008] = "OPE_BU_HUA_TO_GANG", e[e.OPE_HUA_GANG_TO_HUA_QUAN_QI = 3009] = "OPE_HUA_GANG_TO_HUA_QUAN_QI", e[e.OPE_HU = 4001] = "OPE_HU", e[e.OPE_GANG_HU = 4002] = "OPE_GANG_HU", e[e.OPE_HUA_HU = 4003] = "OPE_HUA_HU", e[e.OPE_ZI_MO = 4004] = "OPE_ZI_MO", e[e.OPE_TANZI_HU = 4005] = "OPE_TANZI_HU", e[e.OPE_SHA_BAO = 4006] = "OPE_SHA_BAO", e[e.OPE_OUT_HU_QI_FENG = 4021] = "OPE_OUT_HU_QI_FENG", e[e.OPE_OUT_HU_SHI_FENG = 4022] = "OPE_OUT_HU_SHI_FENG", e[e.OPE_DUI_BAO = 4010] = "OPE_DUI_BAO", e[e.OPE_MO_BAO = 4011] = "OPE_MO_BAO", e[e.OPE_KAN_DUI_BAO = 4012] = "OPE_KAN_DUI_BAO", e[e.OPE_TING = 5001] = "OPE_TING", e[e.OPE_JIA_TING = 5002] = "OPE_JIA_TING", e[e.OPE_MING_LOU = 5003] = "OPE_MING_LOU", e[e.OPE_DI_TING = 5004] = "OPE_DI_TING", e[e.OPE_RIGHT_CHI_TING = 5005] = "OPE_RIGHT_CHI_TING", e[e.OPE_MIDDLE_CHI_TING = 5006] = "OPE_MIDDLE_CHI_TING", e[e.OPE_LEFT_CHI_TING = 5007] = "OPE_LEFT_CHI_TING", e[e.OPE_PENG_TING = 5008] = "OPE_PENG_TING", e[e.OPE_FENG_CARD = 5010] = "OPE_FENG_CARD", e[e.OPE_BAO_JIAO = 5011] = "OPE_BAO_JIAO", e[e.OPE_MING_LV = 5012] = "OPE_MING_LV", e[e.OPE_SHANG_TING = 5013] = "OPE_SHANG_TING", e[e.OPE_CHEN = 5014] = "OPE_CHEN", e[e.OPE_FAKE_TING = 5015] = "OPE_FAKE_TING", e[e.OPE_XIAO_SA_TING = 5016] = "OPE_XIAO_SA_TING", e[e.OPE_LANG_QI = 5017] = "OPE_LANG_QI", e[e.OPE_13_TING = 5018] = "OPE_13_TING", e[e.OPE_DU_ZI_MO = 5020] = "OPE_DU_ZI_MO", e[e.OPE_CANCEL_DU = 5021] = "OPE_CANCEL_DU", e[e.OPE_TRY_YOU_JIN = 5022] = "OPE_TRY_YOU_JIN", e[e.OPE_XFG_3X = 6001] = "OPE_XFG_3X", e[e.OPE_XFG_4X = 6002] = "OPE_XFG_4X", e[e.OPE_COUNT3_PENG_GANG = 6003] = "OPE_COUNT3_PENG_GANG", e[e.OPE_COUNT3_AN_GANG = 6004] = "OPE_COUNT3_AN_GANG", e[e.OPE_COUNT1_GANG = 6005] = "OPE_COUNT1_GANG", e[e.OPE_COL_1_GANG = 7001] = "OPE_COL_1_GANG", e[e.OPE_COL_9_GANG = 7002] = "OPE_COL_9_GANG", e[e.OPE_ROW_3_GANG_4 = 7003] = "OPE_ROW_3_GANG_4", e[e.OPE_ROW_3_GANG_3 = 7004] = "OPE_ROW_3_GANG_3", e[e.OPE_ROW_4_GANG = 7005] = "OPE_ROW_4_GANG", e[e.OPE_XXX_GANG = 7006] = "OPE_XXX_GANG", e[e.OPE_QIANG_TOU_ZHI_GANG = 7007] = "OPE_QIANG_TOU_ZHI_GANG", e[e.OPE_QIANG_TOU_AN_GANG = 7008] = "OPE_QIANG_TOU_AN_GANG", e[e.OPE_FA_CAI_GANG = 7009] = "OPE_FA_CAI_GANG", e[e.OPE_DONG_NAN_JI_GANG = 7010] = "OPE_DONG_NAN_JI_GANG", e[e.OPE_XI_BEI_TONG_GANG = 7011] = "OPE_XI_BEI_TONG_GANG", e[e.OPE_SHUANG_HUA_GANG = 7012] = "OPE_SHUANG_HUA_GANG", e[e.OPE_DAN_HUA_GANG = 7013] = "OPE_DAN_HUA_GANG", e[e.OPE_CAI_SHEN_GANG = 7014] = "OPE_CAI_SHEN_GANG", e[e.OPE_SPECIAL_BU_GANG = 7015] = "OPE_SPECIAL_BU_GANG", e[e.OPE_FENG_HUANG_YU_FEI = 7016] = "OPE_FENG_HUANG_YU_FEI", e[e.OPE_ZI_QI_DONG_LAI = 7017] = "OPE_ZI_QI_DONG_LAI", e[e.OPE_YUE_SHANG_LIU_SHAO = 7018] = "OPE_YUE_SHANG_LIU_SHAO", e[e.OPE_NOTYPE_GANG = 7019] = "OPE_NOTYPE_GANG", e[e.OPE_JIE_MING_GANG = 7020] = "OPE_JIE_MING_GANG", e[e.OPE_JIE_AN_GANG = 7021] = "OPE_JIE_AN_GANG", e[e.OPE_JIAN_PAI = 8001] = "OPE_JIAN_PAI", e[e.OPE_QIANG_PAI = 8002] = "OPE_QIANG_PAI", e[e.OPE_KA_TING = 8003] = "OPE_KA_TING", e[e.OPE_FENG_TING = 8004] = "OPE_FENG_TING", e[e.OPE_QIANG_JIN = 8005] = "OPE_QIANG_JIN", e[e.OPE_KOU_TING = 8006] = "OPE_KOU_TING"
                }(s || (s = e("OPCode", {}))),
                function(e) {
                    e[e["自己"] = 0] = "自己", e[e["下家"] = 1] = "下家", e[e["对家"] = 2] = "对家", e[e["上家"] = 3] = "上家"
                }(u || (u = e("PlayerPosition", {}))),
                function(e) {
                    e[e.DEAL_CARD = 1] = "DEAL_CARD", e[e.PLAY_CARD = 2] = "PLAY_CARD", e[e.OPERATION = 3] = "OPERATION", e[e.DING_QUE = 4] = "DING_QUE", e[e.MAI_DUAN_MEN = 5] = "MAI_DUAN_MEN", e[e.XIA_ZHU = 6] = "XIA_ZHU", e[e.DELAY_AFTER_ZHI_TOU = 7] = "DELAY_AFTER_ZHI_TOU", e[e.DELAY_AFTER_BANKER_OP = 8] = "DELAY_AFTER_BANKER_OP", e[e.MING_LOU_MING_LV = 9] = "MING_LOU_MING_LV", e[e.WAIT_USER_GIVE_UP = 10] = "WAIT_USER_GIVE_UP", e[e.HUAN_SAN_ZHANG = 11] = "HUAN_SAN_ZHANG"
                }(l || (l = e("GameStatus", {}))), e("MahjongMap", new Map([
                    ["0x01", "一万"],
                    ["0x02", "二万"],
                    ["0x03", "三万"],
                    ["0x04", "四万"],
                    ["0x05", "五万"],
                    ["0x06", "六万"],
                    ["0x07", "七万"],
                    ["0x08", "八万"],
                    ["0x09", "九万"],
                    ["0x11", "一筒"],
                    ["0x12", "二筒"],
                    ["0x13", "三筒"],
                    ["0x14", "四筒"],
                    ["0x15", "五筒"],
                    ["0x16", "六筒"],
                    ["0x17", "七筒"],
                    ["0x18", "八筒"],
                    ["0x19", "九筒"],
                    ["0x21", "一条"],
                    ["0x22", "二条"],
                    ["0x23", "三条"],
                    ["0x24", "四条"],
                    ["0x25", "五条"],
                    ["0x26", "六条"],
                    ["0x27", "七条"],
                    ["0x28", "八条"],
                    ["0x29", "九条"],
                    ["0x31", "东风"],
                    ["0x32", "南风"],
                    ["0x33", "西风"],
                    ["0x34", "北风"],
                    ["0x41", "红中"],
                    ["0x42", "发财"],
                    ["0x43", "白板"],
                    ["0x51", "春"],
                    ["0x52", "夏"],
                    ["0x53", "秋"],
                    ["0x54", "冬"],
                    ["0x55", "梅"],
                    ["0x56", "兰"],
                    ["0x57", "菊"],
                    ["0x58", "竹"]
                ])), e("MahjongResIndex", [0, 9, 18, 27, 31, 34, 42]), e("TingMap", ((n = {})[s.OPE_TING] = 5001, n[s.OPE_JIA_TING] = 5002, n[s.OPE_MING_LOU] = 5003, n[s.OPE_XIAO_SA_TING] = 5016, n[s.OPE_DI_TING] = 5004, n[s.OPE_RIGHT_CHI_TING] = 5005, n[s.OPE_MIDDLE_CHI_TING] = 5006, n[s.OPE_LEFT_CHI_TING] = 5007, n[s.OPE_PENG_TING] = 5008, n[s.OPE_BAO_JIAO] = 5011, n[s.OPE_13_TING] = 5018, n[s.OPE_SHANG_TING] = 5013, n[s.OPE_CHEN] = 5014, n[s.OPE_FAKE_TING] = 5015, n[s.OPE_KA_TING] = 5015, n[s.OPE_FENG_TING] = 5015, n[s.OPE_KOU_TING] = 5015, n[s.OPE_LANG_QI] = 5017, n)), e("HuMap", ((a = {})[s.OPE_HU] = 4001, a[s.OPE_GANG_HU] = 4002, a[s.OPE_HUA_HU] = 4003, a[s.OPE_ZI_MO] = 4004, a[s.OPE_TANZI_HU] = 4005, a[s.OPE_SHA_BAO] = 4006, a)), e("settleNameConfig", ((i = {})[s.OPE_PENG] = "刮风", i[s.OPE_QIANG_PENG] = "刮风", i[s.OPE_GANG] = "刮风", i[s.OPE_HUA_GANG] = "刮风", i[s.OPE_BU_GANG] = "刮风", i[s.OPE_QIANG_GANG] = "刮风", i[s.OPE_ROW_3_GANG_4] = "刮风", i[s.OPE_ROW_3_GANG_3] = "刮风", i[s.OPE_ROW_4_GANG] = "刮风", i[s.OPE_AN_GANG] = "下雨", i[s.OPE_HU] = "胡", i[s.OPE_GANG_HU] = "胡", i[s.OPE_HUA_HU] = "胡", i[s.OPE_TANZI_HU] = "胡", i[s.OPE_ZI_MO] = "自摸", i[0] = "黄庄", i.dou_di_zhu = "斗地主", i.gang_qian_zhuan_yi = "杠钱转移", i.cha_jiao = "查叫", i.gangBackMoney = "退雨钱", i.hua_zhu = "查花猪", i.pao_qian = "跑钱", i.tui_gang_qian = "退杠钱", i.di_fan = "底番", i.si_lai_zi = "四癞子", i.bao_ting = "首爆嘴", i.bu_hua = "补花", i)), e("settleHideFanNodeConfig", ((o = {})[s.OPE_GANG] = !0, o[s.OPE_HUA_GANG] = !0, o[s.OPE_AN_GANG] = !0, o[s.OPE_BU_GANG] = !0, o[s.OPE_QIANG_GANG] = !0, o[s.OPE_ROW_3_GANG_4] = !0, o[s.OPE_ROW_3_GANG_3] = !0, o[s.OPE_ROW_4_GANG] = !0, o.pao_qian = !0, o)), e("UserStatus", {
                    END: -1,
                    NONE: 0,
                    HU: 1,
                    HUED: 2,
                    GIVE_UP: 3,
                    LEAVE: 4
                }), t._RF.pop()
        }
    }
}))