System.register("chunks:///_virtual/GameRuleConfig5.ts", ["cc", "./GameConstant.ts", "./AudioManager.ts", "./SubGameConfig.ts"], (function(e) {
    var t, n, a, i;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.GAMETYPE
        }, function(e) {
            a = e.LANG_TYPE
        }, function(e) {
            i = e.SubGameConfig
        }],
        execute: function() {
            var o;
            t._RF.push({}, "e4c81e546VHTrjO0XeJph2S", "GameRuleConfig", void 0);
            var r = e("AnGangShowType", {
                GaiShang: 0,
                LiangYiPai: 1
            });
            e("GameRuleConfig", {
                CardTotalNum: 108,
                unitText: "番",
                CardHuNum: 1,
                playerNum: 4,
                anGangShowType: r.GaiShang,
                HasLaizi: !1,
                Laizi_value: "",
                HasBaoPai: !1,
                HasBugang: !1,
                HasHuagang: !1,
                SettleDaPaixingNum: 4,
                GameType: n.XUEZHAN,
                HasDingQue: !0,
                noAutoGiveUp: !0
            }), e("GameChatText", {
                classic: ["快点，我等到花儿都谢了", "跟你打牌真的太不愉快了", "醒醒啊，我们在打牌呢", "你给我等着！", "厉害啦，完美配合！", "你牌技太棒了！"],
                hot: ["Bro，靠你了", "退退退", "我摆烂了你随意", "我不装了我摊牌了", "我服了你个老六", "我真得栓Q了", "完了，芭比Q了！", "家人们，我破防了", "你真是YYDS！", "U1S1，你牌打得也忒烂了", "宝宝不开心了，宝宝有小情绪了", "向我开炮吧！"],
                majiang: ["我是一个没有感情的胡牌机器", "准备好了嘛?我要开始胡了", "打什么来什么心态崩了啊", "还让不让我摸牌啦!", "给个碰下呗"],
                dialect: ["哎，你打牌快点嘛，你太像下象棋啦", "哎哟，趁热打铁", "哎，手拿发球权", "你太不懂整啦，尽胡小牌，像掐碗豆荚一样", "这个你也敢打", "哦，三缺一，找一个嘛", "哦，你这个牌技，赌神家的？该是从澳门回来的吧", "交学费啦，输三万块，技术就好了"]
            }), e("GamePaiXingConfig", ((o = {}).paixing100101 = {
                name: "平胡",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/ph"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/ph"
                }
            }, o.paixing100201 = {
                name: "对对胡",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/ddz"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/ddz",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/ddz"
                }
            }, o.paixing100301 = {
                name: "七对",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/QD"
                },
                animText: null,
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/qd"
                }
            }, o.paixing100401 = {
                name: "龙七对",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/lqd"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/lqd"
                }
            }, o.paixing501007 = {
                name: "杠上花",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/gsh"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/gsh_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    },
                    random: {
                        min: 1,
                        max: 3,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("gsh_1", "gsh_" + t) : "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/gsh"
                }
            }, o.paixing502501 = {
                name: "海底捞月",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/hdly"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/hdly"
                }
            }, o.paixing501501 = {
                name: "清一色",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/QYS"
                },
                animText: null,
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/qys",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/qys"
                }
            }, o.paixing502601 = {
                name: "海底炮",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/hdly"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/hai_di_pao_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    },
                    random: {
                        min: 1,
                        max: 2,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("hai_di_pao_1", "hai_di_pao_" + t) : "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/hdp"
                }
            }, o.paixing502701 = {
                name: "金钩钓",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/jjj"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/jin_gou_diao_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    },
                    random: {
                        min: 1,
                        max: 1,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("jin_gou_diao_1", "jin_gou_diao_" + t) : "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/jjj"
                }
            }, o.paixing101805 = {
                name: "十八罗汉",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/sblh"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/sblh"
                }
            }, o.paixing501104 = {
                name: "杠上炮",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/gsp"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/{0}/0/gsp_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    },
                    random: {
                        min: 1,
                        max: 2,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("gsp_1", "gsp_" + t) : "channel/ynxuezhanmj/audio/px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/gsp"
                }
            }, o.paixing502301 = {
                name: "天胡",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/th"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/th"
                }
            }, o.paixing502204 = {
                name: "地胡",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/dh"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/dh"
                }
            }, o.paixing500401 = {
                name: "抢杠",
                anim: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/spineAni/px/text/qg"
                },
                animSound: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/px/tongyong"
                },
                settleText: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/module/settle/image/paixing/qg"
                }
            }, o)), e("GameSoundConfig", {
                GameQuickChatXiaoBo: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/chatxiaobo/"
                },
                GameQuickChatXiaoYa: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/chatxiaobo/"
                },
                GameDiscard: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/type_{1}_{2}",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    }
                },
                GameChi: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_chi",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    },
                    random: null
                },
                GameGang: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_gang",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    },
                    random: null
                },
                GameAnGang: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_gang",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    },
                    random: null
                },
                GameHuaGang: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_buhua",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    }
                },
                GameBuPao: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_bupao",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    }
                },
                GameGangHu: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_ganghu",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return e.replace("/0/", "/" + t + "/")
                        }
                    },
                    random: null
                },
                GameLangQi: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_langqi",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return null
                        }
                    }
                },
                GameTing: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "",
                    lang: null,
                    random: null
                },
                GameHu: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_hu_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return ""
                        }
                    },
                    random: {
                        min: 1,
                        max: 4,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("action_hu_1", "action_hu_" + t) : e
                        }
                    }
                },
                GamePeng: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_peng_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return ""
                        }
                    },
                    random: {
                        min: 1,
                        max: 3,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("action_hu_1", "action_hu_" + t) : e
                        }
                    }
                },
                GameZiMo: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/audio/{0}/0/action_zimo_1",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return ""
                        }
                    },
                    random: {
                        min: 1,
                        max: 3,
                        replace: function(e, t, n) {
                            return n == a.DIALET ? e.replace("action_zimo_1", "action_zimo_" + t) : e
                        }
                    }
                }
            }), e("GameResConfig", {
                Picture_Game_Desk: {
                    bundle: i.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/ynxuezhanmj/mesh/desk/logo/texture"
                },
                AppCommon_Share_Friend_Comm: {
                    path: "comm/img_share_xzdd.jpg"
                }
            }), t._RF.pop()
        }
    }
}))