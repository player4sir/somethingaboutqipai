System.register("chunks:///_virtual/FXJRes3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameRes.ts", "./UIConfig.ts", "./SubGameConfig.ts"], (function(e) {
    var t, n, a, i, o, r, s, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.GamePackage, i = e.GameRes
        }, function(e) {
            o = e.GetUIID, r = e.inf_LayerType, s = e.UIID
        }, function(e) {
            u = e.SubGameConfig
        }],
        execute: function() {
            var l, d;
            n._RF.push({}, "0bd13ZHrUFHQb2BGCWaS2xd", "FXJRes", void 0);
            var c = e("FXJUIID", function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n
            }(s));
            c.GameSettlePrefab = o(), c.GameSettleDaPaixingPrefab = o(), c.ToolBarPrefab = o(), c.GameHeadInfoPrefab = o(), c.GameSettingPrefab = o(), c.GameAiPrefab = o(), c.GameHuRequirement = o(), c.GameLiuShui = o(), c.GameHuanSanZhang = o(), c.GameDiMaYou = o(), c.GameQiangPai = o(), c.SettleDetailPrefab = o();
            var h = e("FXJRes", {
                Prefab_GameMenu: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/GameMenuPrefab"
                },
                Prefab_Opmgr: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/opmgr/res/prefab/opmgr"
                },
                Prefab_Opmgr_Item: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/opmgr/res/prefab/opmgrItem"
                },
                Prefab_Opmgr_Image: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/opmgr/res/image/opmgr",
                    plistKey: "{0}"
                },
                Prefab_Card: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/card/card",
                    plistKey: "{0}"
                },
                Prefab_op: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/opInfo/res/prefab/OpInfo"
                },
                Prefab_ToolBar: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/ToolBarPrefab"
                },
                Prefab_GameSettle: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/settle/settle"
                },
                Prefab_SettleDetailPrefab: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/settle/settleDetailPrefab"
                },
                Prefab_GameSettleDaPaixing: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/settle/settleDaPaixing"
                },
                Prefab_NodeUser: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/NodeUserPrefab"
                },
                Prefab_GameDesk: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/GameDeskPrefab"
                },
                Prefab_GameHandCard: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/GameHandCardPrefab"
                },
                Prefab_GameSetting: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/GameSettingPrefab"
                },
                Prefab_GameBankruptGift: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/bankrupt/res/prefab/BankruptPrefab"
                },
                Prefab_GamePayGift: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/bankrupt/res/prefab/BankruptGiftPrefab"
                },
                Prefab_GameLevelDownGift: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/roomLevelGift/RoomLevelGiftPrefab"
                },
                Prefab_GameHuRequirement: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/requirementHu/prefab/RequirementHuPrefab"
                },
                Prefab_GameLiuShui: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/liushui/LiuShuiPrefab"
                },
                Prefab_HuanSanZhang: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/huansanzhang/prefab/HuanSanZhangPrefab"
                },
                Prefab_DiMaYou: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/dimayou/DimayouPrefab"
                },
                Prefab_QiangPia: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/qiang/res/prefab/QiangPrefab"
                },
                Prefab_GameMatch: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "prefab/match/GameMatchPrefab"
                },
                Prefab_GameNotify: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "prefab/match/GameNotifyPrefab"
                },
                Prefab_GamePrivate: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/GamePrivatePrefab"
                },
                Prefab_NodeUserPrivate: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "prefab/NodeUserPrivatePrefab"
                },
                Spine_Hddj: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/HD_daoju"
                },
                Spine_PROP_HB: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/hb"
                },
                Spine_PROP_BP: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/bp"
                },
                Spine_PROP_YH: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/yh"
                },
                Spine_PROP_DG: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/dangao"
                },
                Spine_PROP_CD: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/caidai"
                },
                Spine_PROP_TX: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/hdprops/tuoxie"
                },
                Spine_Emoji: {
                    bundle: a.GAMECOMMON_REMOTE,
                    path: "spineAnim/emoji/emoji"
                },
                Spine_Start: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/start/MJ_DJKS"
                },
                Spine_Over: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/over/MJ_DJJS"
                },
                Spine_Hu: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/hu/mj_hu"
                },
                Spine_ddz: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/ddz/skeleton"
                },
                Spine_PaiXing_MG: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/MG"
                },
                Spine_PaiXing_AG: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/AG"
                },
                Atlas_Game_Desk: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/desk/desk",
                    plistKey: "doudizhu/desk/{0}"
                },
                Atlas_Game_CardNum: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/handCard/card_num/card_num"
                },
                Atlas_Player_Common: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/player/player",
                    plistKey: "doudizhu/player/{0}"
                },
                Picture_UserBigHead_boy: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/player/big_male_head"
                },
                Picture_UserBigHead_girl: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/player/big_female_head"
                },
                Picture_Game_Card: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/card",
                    key: "/{0}/texture"
                },
                Picture_Game_Card_Laizi: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/lai/texture"
                },
                Picture_Game_Card_Pao: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/pao/texture"
                },
                Picture_Game_Card_Hui: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/hui/texture"
                },
                Picture_Game_Card_Qiang: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/qiang/texture"
                },
                Picture_Game_Card_Bao: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/bao/texture"
                },
                Picture_Game_Card_JI: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/ji/texture"
                },
                Picture_Game_Card_Gang2: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/gang_2/texture"
                },
                Picture_Game_Card_Gang3: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/gang_3/texture"
                },
                Picture_Game_Card_Gang4: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/majiang/gang_4/texture"
                },
                Picture_Game_Desk_Timer: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/daojishi",
                    key: "/{0}/texture"
                },
                Picture_Game_Desk: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "mesh/desk/logo/texture"
                },
                Spine_op: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/op/MJ_btn"
                },
                Prefab_Ai: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "module/ai/res/prefab/ai"
                },
                Ladder: {
                    bundle: u.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "image/badge"
                },
                Picture_Ting_Arrow: {
                    bundle: a.GAME_REMOTE,
                    path: "image/ting/select_arrow"
                },
                Picture_Ting_Arrow_More: {
                    bundle: a.GAME_REMOTE,
                    path: "image/ting/select_arrow_more"
                },
                Picture_Ting_Arrow_Big: {
                    bundle: a.GAME_REMOTE,
                    path: "image/ting/select_arrow_big"
                },
                AppCommon_Share_Friend_Comm: {
                    path: "comm/img_share_xzdd.jpg"
                }
            });
            e("FXJUIConfig", ((l = {})[c.ToolBarPrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_ToolBar.path,
                bundle: h.Prefab_ToolBar.bundle
            }, l[c.GameSettlePrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_GameSettle.path,
                bundle: h.Prefab_GameSettle.bundle,
                isSingle: !0
            }, l[c.SettleDetailPrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_SettleDetailPrefab.path,
                bundle: h.Prefab_SettleDetailPrefab.bundle,
                isSingle: !0
            }, l[c.GameSettleDaPaixingPrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_GameSettleDaPaixing.path,
                bundle: h.Prefab_GameSettleDaPaixing.bundle,
                isSingle: !0
            }, l[c.GameHeadInfoPrefab] = {
                layer: r.PopUp,
                prefab: i.Prefab_GameHeadInfo.path,
                bundle: i.Prefab_GameHeadInfo.bundle
            }, l[c.GameSettingPrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_GameSetting.path,
                bundle: h.Prefab_GameSetting.bundle
            }, l[c.GameAiPrefab] = {
                layer: r.PopUp,
                prefab: h.Prefab_Ai.path,
                bundle: h.Prefab_Ai.bundle
            }, l[c.GameHuRequirement] = {
                layer: r.PopUp,
                prefab: h.Prefab_GameHuRequirement.path,
                bundle: h.Prefab_GameHuRequirement.bundle
            }, l[c.GameLiuShui] = {
                layer: r.PopUp,
                prefab: h.Prefab_GameLiuShui.path,
                bundle: h.Prefab_GameLiuShui.bundle
            }, l[c.GameHuanSanZhang] = {
                layer: r.PopUp,
                prefab: h.Prefab_HuanSanZhang.path,
                bundle: h.Prefab_HuanSanZhang.bundle
            }, l[c.GameDiMaYou] = {
                layer: r.PopUp,
                prefab: h.Prefab_DiMaYou.path,
                bundle: h.Prefab_DiMaYou.bundle
            }, l[c.GameQiangPai] = {
                layer: r.PopUp,
                prefab: h.Prefab_QiangPia.path,
                bundle: h.Prefab_QiangPia.bundle
            }, l)), e("ANI_TYPE", {
                PLAYER_INTO: "playerInto"
            }), e("FXJAniConf", ((d = {}).playerInto = {
                bundle: a.GAMECOMMON_REMOTE,
                path: "spineAnim/smoke/smoke",
                play: null
            }, d)), n._RF.pop()
        }
    }
}))