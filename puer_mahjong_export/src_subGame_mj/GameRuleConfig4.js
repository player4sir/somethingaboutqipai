System.register("chunks:///_virtual/GameRuleConfig4.ts", ["cc", "./ClientInfo.ts", "./GCache.ts", "./GameConstant.ts", "./SubGameConfig.ts", "./GameRuleConfig3.ts", "./RequirementHuConfig3.ts", "./GameRuleConfig5.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GCache
        }, function(e) {
            i = e.GConstants, o = e.GAMETYPE
        }, function(e) {
            r = e.SubGameConfig
        }, function(e) {
            s = e.GameRuleConfig, u = e.GameChatText, l = e.GamePaiXingConfig, d = e.GameSoundConfig, c = e.GameResConfig
        }, function(e) {
            h = e.requireData
        }, function(e) {
            p = e.GameRuleConfig, m = e.GameChatText, _ = e.GamePaiXingConfig, g = e.GameSoundConfig, f = e.GameResConfig
        }],
        execute: function() {
            var C;
            t._RF.push({}, "dbcaabzZlZG7Yzkyc65MXnl", "GameRuleConfig", void 0);
            var E = e("GameFileConfig", ((C = {})[i.GameID.YNXUEZHANMJ] = {
                    GameComponent: "YnXueZhanMJGameComponent",
                    GameSettleComponent: null,
                    GameRuleConfig: p,
                    GameChatText: m,
                    GamePaiXingConfig: _,
                    GameSoundConfig: g,
                    GameResConfig: f,
                    GameRequirementHuConfig: null
                }, C[i.GameID.GUOBIAOMJ] = {
                    GameComponent: "GuoBiaoMJGameComponent",
                    GameSettleComponent: "GuoBiaoMJSettleComponent",
                    GameRuleConfig: s,
                    GameChatText: u,
                    GamePaiXingConfig: l,
                    GameSoundConfig: d,
                    GameResConfig: c,
                    GameRequirementHuConfig: h
                }, C)),
                S = e("AnGangShowType", {
                    GaiShang: 0,
                    LiangYiPai: 1
                }),
                A = (e("GameRuleConfig", {
                    get CardTotalNum() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.CardTotalNum ? i.CardTotalNum : 136
                    },
                    get unitText() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.unitText ? o.unitText : n.deviceInfo.unitText
                    },
                    get CardHuNum() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.CardHuNum ? i.CardHuNum : 1
                    },
                    get playerNum() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.playerNum ? i.playerNum : 4
                    },
                    get anGangShowType() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.anGangShowType ? i.anGangShowType : S.GaiShang
                    },
                    get HasLaizi() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.HasLaizi ? o.HasLaizi : n.HasLaizi
                    },
                    get Laizi_value() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.Laizi_value ? o.Laizi_value : n.Laizi_value
                    },
                    get HasBaoPai() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !i || null == i.HasBaoPai || i.HasBaoPai
                    },
                    get HasBugang() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.HasBugang ? o.HasBugang : n.HasBugang
                    },
                    get HasHuagang() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.HasHuagang ? o.HasHuagang : n.HasHuagang
                    },
                    get SettleDaPaixingNum() {
                        var e, t, i = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            o = null == (t = E[i]) ? void 0 : t.GameRuleConfig;
                        return o && null != o.SettleDaPaixingNum ? o.SettleDaPaixingNum : n.deviceInfo.SettleDaPaixingNum
                    },
                    get isSupportDiTing() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.isSupportDiTing) && i.isSupportDiTing
                    },
                    get HasDingQue() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.HasDingQue) && i.HasDingQue
                    },
                    get GameType() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.GameType ? i.GameType : o.Common
                    },
                    get bugang_tx() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return i && null != i.bugang_tx ? i.bugang_tx : null
                    },
                    get isMastHu() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.isMastHu) && i.isMastHu
                    },
                    get TingHide() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.TingHide) && i.TingHide
                    },
                    get TingLimitBtn() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.TingLimitBtn) && i.TingLimitBtn
                    },
                    get noAutoGiveUp() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.noAutoGiveUp) && i.noAutoGiveUp
                    },
                    get needCheckCards() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRuleConfig;
                        return !(!i || null == i.needCheckCards) && i.needCheckCards
                    },
                    get GameChatText() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId();
                        return (null == (t = E[n]) ? void 0 : t.GameChatText) || A
                    },
                    get GamePaiXingConfig() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId();
                        return (null == (t = E[n]) ? void 0 : t.GamePaiXingConfig) || I
                    },
                    get GameSoundConfig() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId();
                        return (null == (t = E[n]) ? void 0 : t.GameSoundConfig) || G
                    },
                    get GameResConfig() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId();
                        return (null == (t = E[n]) ? void 0 : t.GameResConfig) || y
                    },
                    get GameRequirementHuConfig() {
                        var e, t, n = null == (e = a.SelectGame) ? void 0 : e.getCurGameId(),
                            i = null == (t = E[n]) ? void 0 : t.GameRequirementHuConfig;
                        return i && "function" == typeof i ? i() : []
                    }
                }), e("GameChatTextDefalut", {
                    classic: ["快点，我等到花儿都谢了", "跟你打牌真的太不愉快了", "醒醒啊，我们在打牌呢", "你给我等着！", "厉害啦，完美配合！", "你牌技太棒了！"],
                    hot: ["Bro，靠你了", "退退退", "我摆烂了你随意", "我不装了我摊牌了", "我服了你个老六", "我真得栓Q了", "完了，芭比Q了！", "家人们，我破防了", "你真是YYDS！", "U1S1，你牌打得也忒烂了", "宝宝不开心了，宝宝有小情绪了", "向我开炮吧！"],
                    majiang: ["我是一个没有感情的胡牌机器", "准备好了嘛?我要开始胡了", "打什么来什么心态崩了啊", "还让不让我摸牌啦!", "给个碰下呗"],
                    dialect: []
                })),
                I = e("GamePaiXingConfigDefault", {}),
                G = e("GameSoundConfigDefault", {
                    GameQuickChatXiaoBo: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: ""
                    },
                    GameQuickChatXiaoYa: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: ""
                    },
                    GameDiscard: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/type_{1}_{2}",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        }
                    },
                    GameChi: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_chi",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GamePeng: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_peng",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameGang: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_gang",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameAnGang: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_gang",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameHuaGang: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_buhua",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        }
                    },
                    GameBuPao: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_bupao",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        }
                    },
                    GameHu: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_hu",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameGangHu: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_ganghu",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameZiMo: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_zimo",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return e.replace("/0/", "/" + t + "/")
                            }
                        },
                        random: null
                    },
                    GameLangQi: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "audio/{0}/0/action_langqi",
                        lang: {
                            lang: !0,
                            replace: function(e, t) {
                                return null
                            }
                        }
                    },
                    GameTing: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "",
                        lang: null,
                        random: null
                    }
                }),
                y = e("GameResConfigDefault", {
                    Picture_Game_Desk: {
                        bundle: r.SubGamePackage.SUBGAME_MJ_REMOTE,
                        path: "mesh/desk/logo/texture"
                    },
                    AppCommon_Share_Friend_Comm: {
                        path: "comm/img_share_common.jpg"
                    }
                });
            t._RF.pop()
        }
    }
}))