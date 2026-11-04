System.register("chunks:///_virtual/FXJConstant3.ts", ["cc", "./GameConstant.ts", "./FXJRes3.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.GConstants
        }, function(e) {
            a = e.FXJRes
        }],
        execute: function() {
            var i;
            e("FXJConstant", void 0), t._RF.push({}, "23925kLvl5PQqxTcQ0Lq7UK", "FXJConstant", void 0),
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
                    }, e.QuickChatDelay = 3, e.ChatText = {
                        classic: [],
                        hot: [],
                        majiang: [],
                        dialect: []
                    }, e.ChatEmojiAniConf = n.ChatEmojiAniConf, e.ChatEmojiSpriteConf = n.ChatEmojiSpriteConf;
                    var t, i, o = e.RoomPropIds = {
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
                        propID: o.CHUIZI,
                        icon: "chuizi",
                        aniPath: a.Spine_Hddj,
                        aniName: ["ChuiZi_l", "ChuiZi_r", "ChuiZi_fly_l", "ChuiZi_fly_r"]
                    }, {
                        name: "平底锅",
                        propID: o.PINGDIGUO,
                        icon: "pingdiguo",
                        aniPath: a.Spine_Hddj,
                        aniName: ["Guo_l", "Guo_r", "Guo_fly_l", "Guo_fly_r"]
                    }, {
                        name: "鸡蛋",
                        propID: o.JIDAN,
                        icon: "jidan",
                        aniPath: a.Spine_Hddj,
                        aniName: ["JiDan_l", "JiDan_r"]
                    }, {
                        name: "咖啡",
                        propID: o.KAFEI,
                        icon: "kafei",
                        aniPath: a.Spine_Hddj,
                        aniName: ["KaFei_l", "KaFei_r"]
                    }, {
                        name: "爱心",
                        propID: o.LOVE,
                        icon: "love-u",
                        aniPath: a.Spine_Hddj,
                        aniName: ["LoveU_l", "LoveU_r"]
                    }, {
                        name: "鲜花",
                        propID: o.ROSE,
                        icon: "rose",
                        aniPath: a.Spine_Hddj,
                        aniName: ["Rose_l", "Rose_r"]
                    }, {
                        name: "水枪",
                        propID: o.GUN,
                        icon: "shuiqiang",
                        aniPath: a.Spine_Hddj,
                        aniName: ["ShuiQiang_l", "ShuiQiang_r"]
                    }, {
                        name: "西瓜",
                        propID: o.XIGUA,
                        icon: "guapi",
                        aniPath: a.Spine_Hddj,
                        aniName: ["XiGua_l", "XiGua_r"]
                    }, {
                        name: "炸弹",
                        propID: o.ZHADAN,
                        icon: "zhadan",
                        aniPath: a.Spine_Hddj,
                        aniName: ["ZhaDan_l", "ZhaDan_r"]
                    }, {
                        name: "红包",
                        propID: o.HONGBAO,
                        icon: "hb",
                        aniPath: a.Spine_PROP_HB,
                        aniName: ["start"]
                    }, {
                        name: "鞭炮",
                        propID: o.BAOZHU,
                        icon: "bp",
                        aniPath: a.Spine_PROP_BP,
                        aniName: ["start"]
                    }, {
                        name: "烟花",
                        propID: o.YANHUA,
                        icon: "yanhua",
                        aniPath: a.Spine_PROP_YH,
                        aniName: ["start"]
                    }, {
                        name: "蛋糕",
                        propID: o.DANGAO,
                        icon: "dangao",
                        aniPath: a.Spine_PROP_DG,
                        aniName: ["start"]
                    }, {
                        name: "彩带",
                        propID: o.CAIDAI,
                        icon: "yanhua",
                        aniPath: a.Spine_PROP_CD,
                        aniName: ["caidai-l", "caidai-r"]
                    }, {
                        name: "拖鞋",
                        propID: o.TUOXIE,
                        icon: "tuoxie",
                        aniPath: a.Spine_PROP_TX,
                        aniName: ["start"]
                    }], e.AnimNormal = {
                        HudongProp: "HudongProp",
                        common: "common",
                        picCommon: "picCommon",
                        Enter: "Enter"
                    }, e.HuDongPropConf = {
                        direction: (t = {}, t[0] = "l", t[1] = "r", t[2] = "r", t[3] = "l", t),
                        anim: (i = {
                            name: "HD_daoju"
                        }, i[o.JIDAN] = {
                            action: "JiDan_{0}",
                            time: .54,
                            bundle: a.Spine_Hddj,
                            sound: 100
                        }, i[o.CHUIZI] = {
                            action: "ChuiZi_fly_{0}",
                            action_end: "ChuiZi_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 101
                        }, i[o.KAFEI] = {
                            action: "KaFei_{0}",
                            time: 1.5,
                            delayTime: .5,
                            bundle: a.Spine_Hddj,
                            sound: 102
                        }, i[o.ZHADAN] = {
                            action: "ZhaDan_{0}",
                            time: .6,
                            bundle: a.Spine_Hddj,
                            sound: 103
                        }, i[o.HONGBAO] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: a.Spine_PROP_HB,
                            sound: 213
                        }, i[o.BAOZHU] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: a.Spine_PROP_BP,
                            sound: 211
                        }, i[o.YANHUA] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: a.Spine_PROP_YH,
                            sound: 209
                        }, i[o.DANGAO] = {
                            action: "dangao-{0}",
                            action_end: "hulian-{0}",
                            delay: .56,
                            time: .56,
                            bundle: a.Spine_PROP_DG
                        }, i[o.CAIDAI] = {
                            action: "caidai-{0}",
                            diff: {
                                x: 0,
                                y: -40
                            },
                            time: .56,
                            bundle: a.Spine_PROP_CD
                        }, i[o.PINGDIGUO] = {
                            action: "Guo_fly_{0}",
                            action_end: "Guo_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 206
                        }, i[o.LOVE] = {
                            action: "LoveU_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 207
                        }, i[o.ROSE] = {
                            action: "Rose_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 204
                        }, i[o.GUN] = {
                            action: "ShuiQiang_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 208
                        }, i[o.XIGUA] = {
                            action: "XiGua_{0}",
                            time: .5,
                            bundle: a.Spine_Hddj,
                            sound: 205
                        }, i[o.TUOXIE] = {
                            action: "start",
                            actions: [{
                                ac: "pass",
                                delay: .56
                            }],
                            action_end: "end",
                            delay: .56,
                            time: .56,
                            bundle: a.Spine_PROP_TX
                        }, i)
                    }
                }(i || (i = e("FXJConstant", {}))), t._RF.pop()
        }
    }
}))