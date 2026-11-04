System.register("chunks:///_virtual/FXJRes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameRes.ts", "./UIConfig.ts"], (function(e) {
    var t, n, i, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.GamePackage, a = e.GameRes
        }, function(e) {
            o = e.GetUIID, r = e.inf_LayerType, s = e.UIID
        }],
        execute: function() {
            var l, u;
            n._RF.push({}, "d9350znbBNDBJEfns9k4YmE", "FXJRes", void 0);
            var d = e("FXJUIID", function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n
            }(s));
            d.GameSettlePrefab = o(), d.GameSettleDaPaixingPrefab = o(), d.ToolBarPrefab = o(), d.GameHeadInfoPrefab = o(), d.GameSettingPrefab = o(), d.GameAiPrefab = o(), d.GameHuRequirement = o(), d.GameLiuShui = o(), d.GameHuanSanZhang = o(), d.GameDiMaYou = o(), d.GameQiangPai = o(), d.SettleDetailPrefab = o();
            var c = e("FXJRes", {
                Prefab_GameMenu: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/GameMenuPrefab"
                },
                Prefab_Opmgr: {
                    bundle: i.GAME_REMOTE,
                    path: "module/opmgr/res/prefab/opmgr"
                },
                Prefab_Opmgr_Item: {
                    bundle: i.GAME_REMOTE,
                    path: "module/opmgr/res/prefab/opmgrItem"
                },
                Prefab_Opmgr_Image: {
                    bundle: i.GAME_REMOTE,
                    path: "module/opmgr/res/image/opmgr",
                    plistKey: "{0}"
                },
                Prefab_Card: {
                    bundle: i.GAME_REMOTE,
                    path: "image/card/card",
                    plistKey: "{0}"
                },
                Prefab_op: {
                    bundle: i.GAME_REMOTE,
                    path: "module/opInfo/res/prefab/OpInfo"
                },
                Prefab_ToolBar: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/ToolBarPrefab"
                },
                Prefab_GameSettle: {
                    bundle: i.GAME_REMOTE,
                    path: "module/settle/settle"
                },
                Prefab_SettleDetailPrefab: {
                    bundle: i.GAME_REMOTE,
                    path: "module/settle/settleDetailPrefab"
                },
                Prefab_GameSettleDaPaixing: {
                    bundle: i.GAME_REMOTE,
                    path: "module/settle/settleDaPaixing"
                },
                Prefab_NodeUser: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/NodeUserPrefab"
                },
                Prefab_GameDesk: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/GameDeskPrefab"
                },
                Prefab_GameHandCard: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/GameHandCardPrefab"
                },
                Prefab_GameSetting: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/GameSettingPrefab"
                },
                Prefab_GameHuRequirement: {
                    bundle: i.GAME_REMOTE,
                    path: "module/requirementHu/prefab/RequirementHuPrefab"
                },
                Prefab_GameLiuShui: {
                    bundle: i.GAME_REMOTE,
                    path: "module/liushui/LiuShuiPrefab"
                },
                Prefab_HuanSanZhang: {
                    bundle: i.GAME_REMOTE,
                    path: "module/huansanzhang/prefab/HuanSanZhangPrefab"
                },
                Prefab_DiMaYou: {
                    bundle: i.GAME_REMOTE,
                    path: "module/dimayou/DimayouPrefab"
                },
                Prefab_QiangPia: {
                    bundle: i.GAME_REMOTE,
                    path: "module/qiang/res/prefab/QiangPrefab"
                },
                Prefab_GameMatch: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "prefab/match/GameMatchPrefab"
                },
                Prefab_GameNotify: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "prefab/match/GameNotifyPrefab"
                },
                Prefab_GamePrivate: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/GamePrivatePrefab"
                },
                Prefab_NodeUserPrivate: {
                    bundle: i.GAME_REMOTE,
                    path: "prefab/NodeUserPrivatePrefab"
                },
                Spine_Hddj: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/HD_daoju"
                },
                Spine_PROP_HB: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/hb"
                },
                Spine_PROP_BP: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/bp"
                },
                Spine_PROP_YH: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/yh"
                },
                Spine_PROP_DG: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/dangao"
                },
                Spine_PROP_CD: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/caidai"
                },
                Spine_PROP_TX: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/tuoxie"
                },
                Spine_Emoji: {
                    bundle: i.GAMECOMMON_REMOTE,
                    path: "spineAnim/emoji/emoji"
                },
                Spine_Start: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/start/MJ_DJKS"
                },
                Spine_Over: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/over/MJ_DJJS"
                },
                Spine_Hu: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/hu/mj_hu"
                },
                Spine_ddz: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/ddz/skeleton"
                },
                Spine_PaiXing_MG: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/px/MG"
                },
                Spine_PaiXing_AG: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/px/AG"
                },
                Atlas_Game_Desk: {
                    bundle: i.GAME_REMOTE,
                    path: "image/desk/desk",
                    plistKey: "doudizhu/desk/{0}"
                },
                Atlas_Game_CardNum: {
                    bundle: i.GAME_REMOTE,
                    path: "image/handCard/card_num/card_num"
                },
                Atlas_Player_Common: {
                    bundle: i.GAME_REMOTE,
                    path: "image/player/player",
                    plistKey: "doudizhu/player/{0}"
                },
                Picture_UserBigHead_boy: {
                    bundle: i.GAME_REMOTE,
                    path: "image/player/big_male_head"
                },
                Picture_UserBigHead_girl: {
                    bundle: i.GAME_REMOTE,
                    path: "image/player/big_female_head"
                },
                Picture_Game_Card: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/card",
                    key: "/{0}/texture"
                },
                Picture_Game_Card_Laizi: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/lai/texture"
                },
                Picture_Game_Card_Pao: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/pao/texture"
                },
                Picture_Game_Card_Hui: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/hui/texture"
                },
                Picture_Game_Card_Qiang: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/qiang/texture"
                },
                Picture_Game_Card_Bao: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/bao/texture"
                },
                Picture_Game_Card_JI: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/ji/texture"
                },
                Picture_Game_Card_Gang2: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/gang_2/texture"
                },
                Picture_Game_Card_Gang3: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/gang_3/texture"
                },
                Picture_Game_Card_Gang4: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/majiang/gang_4/texture"
                },
                Picture_Game_Desk_Timer: {
                    bundle: i.GAME_REMOTE,
                    path: "mesh/daojishi",
                    key: "/{0}/texture"
                },
                Atlas_Game_EmojiProp: {
                    bundle: i.GAME_REMOTE,
                    path: "image/gameHeadInfo/emojiProp",
                    plistKey: "{0}"
                },
                Spine_op: {
                    bundle: i.GAME_REMOTE,
                    path: "spineAni/op/MJ_btn"
                },
                Prefab_Ai: {
                    bundle: i.GAME_REMOTE,
                    path: "module/ai/res/prefab/ai"
                },
                Ladder: {
                    bundle: i.GAME_REMOTE,
                    path: "image/badge"
                },
                Picture_Ting_Arrow: {
                    bundle: i.GAME_REMOTE,
                    path: "image/ting/select_arrow"
                },
                Picture_Ting_Arrow_More: {
                    bundle: i.GAME_REMOTE,
                    path: "image/ting/select_arrow_more"
                },
                Picture_Ting_Arrow_Big: {
                    bundle: i.GAME_REMOTE,
                    path: "image/ting/select_arrow_big"
                }
            });
            e("FXJUIConfig", ((l = {})[d.ToolBarPrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_ToolBar.path,
                bundle: c.Prefab_ToolBar.bundle
            }, l[d.GameSettlePrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_GameSettle.path,
                bundle: c.Prefab_GameSettle.bundle,
                isSingle: !0
            }, l[d.SettleDetailPrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_SettleDetailPrefab.path,
                bundle: c.Prefab_SettleDetailPrefab.bundle,
                isSingle: !0
            }, l[d.GameSettleDaPaixingPrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_GameSettleDaPaixing.path,
                bundle: c.Prefab_GameSettleDaPaixing.bundle,
                isSingle: !0
            }, l[d.GameHeadInfoPrefab] = {
                layer: r.PopUp,
                prefab: a.Prefab_GameHeadInfo.path,
                bundle: a.Prefab_GameHeadInfo.bundle
            }, l[d.GameSettingPrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_GameSetting.path,
                bundle: c.Prefab_GameSetting.bundle
            }, l[d.GameAiPrefab] = {
                layer: r.PopUp,
                prefab: c.Prefab_Ai.path,
                bundle: c.Prefab_Ai.bundle
            }, l[d.GameHuRequirement] = {
                layer: r.PopUp,
                prefab: c.Prefab_GameHuRequirement.path,
                bundle: c.Prefab_GameHuRequirement.bundle
            }, l[d.GameLiuShui] = {
                layer: r.PopUp,
                prefab: c.Prefab_GameLiuShui.path,
                bundle: c.Prefab_GameLiuShui.bundle
            }, l[d.GameHuanSanZhang] = {
                layer: r.PopUp,
                prefab: c.Prefab_HuanSanZhang.path,
                bundle: c.Prefab_HuanSanZhang.bundle
            }, l[d.GameDiMaYou] = {
                layer: r.PopUp,
                prefab: c.Prefab_DiMaYou.path,
                bundle: c.Prefab_DiMaYou.bundle
            }, l[d.GameQiangPai] = {
                layer: r.PopUp,
                prefab: c.Prefab_QiangPia.path,
                bundle: c.Prefab_QiangPia.bundle
            }, l)), e("ANI_TYPE", {
                PLAYER_INTO: "playerInto"
            }), e("FXJAniConf", ((u = {}).playerInto = {
                bundle: i.GAMECOMMON_REMOTE,
                path: "spineAnim/smoke/smoke",
                play: null
            }, u)), n._RF.pop()
        }
    }
}))