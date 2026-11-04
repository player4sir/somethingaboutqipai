System.register("chunks:///_virtual/FXJConstant.ts", ["cc", "./GameConstant.ts", "./FXJRes.ts", "./GameRuleConfig.ts"], (function(e) {
    var t, n, i, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.GConstants
        }, function(e) {
            i = e.FXJRes
        }, function(e) {
            a = e.GameChatText
        }],
        execute: function() {
            var o;
            e("FXJConstant", void 0), t._RF.push({}, "55a3a3Pt/FETLSBRs4Xq9rt", "FXJConstant", void 0),
                function(e) {
                    e.PlayType = {
                        NORMAL: "normal",
                        MATCH: "match"
                    }, e.BAOSTATUS = {
                        NON: 0,
                        KAN: 1,
                        HUAN: 2,
                        HUAN_KAN: 3
                    }, e.BAOTYPE = {
                        NON: -2,
                        BACK: -1,
                        FRONT: 1
                    }, e.QuickChatDelay = 3, e.ChatText = a, e.ChatEmojiAniConf = n.ChatEmojiAniConf, e.ChatEmojiSpriteConf = n.ChatEmojiSpriteConf;
                    var t, o, r = e.RoomPropIds = {
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
                    };
                    e.EmojiProp = [{
                        name: "锤子",
                        propID: r.CHUIZI,
                        icon: "chuizi",
                        aniPath: i.Spine_Hddj,
                        aniName: ["ChuiZi_l", "ChuiZi_r", "ChuiZi_fly_l", "ChuiZi_fly_r"]
                    }, {
                        name: "平底锅",
                        propID: r.PINGDIGUO,
                        icon: "pingdiguo",
                        aniPath: i.Spine_Hddj,
                        aniName: ["Guo_l", "Guo_r", "Guo_fly_l", "Guo_fly_r"]
                    }, {
                        name: "鸡蛋",
                        propID: r.JIDAN,
                        icon: "jidan",
                        aniPath: i.Spine_Hddj,
                        aniName: ["JiDan_l", "JiDan_r"]
                    }, {
                        name: "咖啡",
                        propID: r.KAFEI,
                        icon: "kafei",
                        aniPath: i.Spine_Hddj,
                        aniName: ["KaFei_l", "KaFei_r"]
                    }, {
                        name: "爱心",
                        propID: r.LOVE,
                        icon: "love-u",
                        aniPath: i.Spine_Hddj,
                        aniName: ["LoveU_l", "LoveU_r"]
                    }, {
                        name: "鲜花",
                        propID: r.ROSE,
                        icon: "rose",
                        aniPath: i.Spine_Hddj,
                        aniName: ["Rose_l", "Rose_r"]
                    }, {
                        name: "水枪",
                        propID: r.GUN,
                        icon: "shuiqiang",
                        aniPath: i.Spine_Hddj,
                        aniName: ["ShuiQiang_l", "ShuiQiang_r"]
                    }, {
                        name: "西瓜",
                        propID: r.XIGUA,
                        icon: "guapi",
                        aniPath: i.Spine_Hddj,
                        aniName: ["XiGua_l", "XiGua_r"]
                    }, {
                        name: "炸弹",
                        propID: r.ZHADAN,
                        icon: "zhadan",
                        aniPath: i.Spine_Hddj,
                        aniName: ["ZhaDan_l", "ZhaDan_r"]
                    }, {
                        name: "红包",
                        propID: r.HONGBAO,
                        icon: "hb",
                        aniPath: i.Spine_PROP_HB,
                        aniName: ["start"]
                    }, {
                        name: "鞭炮",
                        propID: r.BAOZHU,
                        icon: "bp",
                        aniPath: i.Spine_PROP_BP,
                        aniName: ["start"]
                    }, {
                        name: "烟花",
                        propID: r.YANHUA,
                        icon: "yanhua",
                        aniPath: i.Spine_PROP_YH,
                        aniName: ["start"]
                    }, {
                        name: "蛋糕",
                        propID: r.DANGAO,
                        icon: "dangao",
                        aniPath: i.Spine_PROP_DG,
                        aniName: ["start"]
                    }, {
                        name: "彩带",
                        propID: r.CAIDAI,
                        icon: "yanhua",
                        aniPath: i.Spine_PROP_CD,
                        aniName: ["caidai-l", "caidai-r"]
                    }, {
                        name: "拖鞋",
                        propID: r.TUOXIE,
                        icon: "tuoxie",
                        aniPath: i.Spine_PROP_TX,
                        aniName: ["start"]
                    }], e.AnimNormal = {
                        HudongProp: "HudongProp",
                        common: "common",
                        picCommon: "picCommon",
                        Enter: "Enter"
                    }, e.HuDongPropConf = {
                        direction: (t = {}, t[0] = "l", t[1] = "r", t[2] = "r", t[3] = "l", t),
                        anim: (o = {
                            name: "HD_daoju"
                        }, o[r.JIDAN] = {
                            action: "JiDan_{0}",
                            time: .54,
                            bundle: i.Spine_Hddj,
                            sound: 100
                        }, o[r.CHUIZI] = {
                            action: "ChuiZi_fly_{0}",
                            action_end: "ChuiZi_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 101
                        }, o[r.KAFEI] = {
                            action: "KaFei_{0}",
                            time: 1.5,
                            delayTime: .5,
                            bundle: i.Spine_Hddj,
                            sound: 102
                        }, o[r.ZHADAN] = {
                            action: "ZhaDan_{0}",
                            time: .6,
                            bundle: i.Spine_Hddj,
                            sound: 103
                        }, o[r.HONGBAO] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: i.Spine_PROP_HB,
                            sound: 213
                        }, o[r.BAOZHU] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: i.Spine_PROP_BP,
                            sound: 211
                        }, o[r.YANHUA] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: i.Spine_PROP_YH,
                            sound: 209
                        }, o[r.DANGAO] = {
                            action: "dangao-{0}",
                            action_end: "hulian-{0}",
                            delay: .56,
                            time: .56,
                            bundle: i.Spine_PROP_DG
                        }, o[r.CAIDAI] = {
                            action: "caidai-{0}",
                            diff: {
                                x: 0,
                                y: -40
                            },
                            time: .56,
                            bundle: i.Spine_PROP_CD
                        }, o[r.PINGDIGUO] = {
                            action: "Guo_fly_{0}",
                            action_end: "Guo_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 206
                        }, o[r.LOVE] = {
                            action: "LoveU_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 207
                        }, o[r.ROSE] = {
                            action: "Rose_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 204
                        }, o[r.GUN] = {
                            action: "ShuiQiang_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 208
                        }, o[r.XIGUA] = {
                            action: "XiGua_{0}",
                            time: .5,
                            bundle: i.Spine_Hddj,
                            sound: 205
                        }, o[r.TUOXIE] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: i.Spine_PROP_TX
                        }, o)
                    }
                }(o || (o = e("FXJConstant", {}))), t._RF.pop()
        }
    }
}))