System.register("chunks:///_virtual/GameRuleConfig.ts", ["cc", "./ClientInfo.ts", "./AppSound.ts", "./GameRes.ts"], (function(e) {
    var t, n, i, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            i = e.AudioPackage
        }, function(e) {
            a = e.GamePackage
        }],
        execute: function() {
            var o;
            t._RF.push({}, "531fdcpcEJNiL73U3R1yYRk", "GameRuleConfig", void 0);
            var r = e("AnGangShowType", {
                GaiShang: 0,
                LiangYiPai: 1
            });
            e("GameRuleConfig", {
                CardTotalNum: 136,
                unitText: n.deviceInfo.unitText,
                CardHuNum: 1,
                playerNum: 4,
                anGangShowType: r.GaiShang,
                HasLaizi: n.HasLaizi,
                Laizi_value: n.Laizi_value,
                HasBaoPai: !1,
                HasBugang: n.HasBugang,
                HasHuagang: n.HasHuagang,
                SettleDaPaixingNum: n.deviceInfo.SettleDaPaixingNum,
                bugang_tx: "翻屁股",
                TingLimitBtn: !0,
                needCheckCards: !1
            }), e("GameChatText", {
                classic: ["快点，我等到花儿都谢了", "跟你打牌真的太不愉快了", "醒醒啊，我们在打牌呢", "你给我等着！", "厉害啦，完美配合！", "你牌技太棒了！"],
                hot: ["Bro，靠你了", "退退退", "我摆烂了你随意", "我不装了我摊牌了", "我服了你个老六", "我真得栓Q了", "完了，芭比Q了！", "家人们，我破防了", "你真是YYDS！", "U1S1，你牌打得也忒烂了", "宝宝不开心了，宝宝有小情绪了", "向我开炮吧！"],
                majiang: ["我是一个没有感情的胡牌机器", "准备好了嘛?我要开始胡了", "打什么来什么心态崩了啊", "还让不让我摸牌啦!", "给个碰下呗"],
                dialect: ["快点啦，气都等脱啦！", "哦哟，趁热打铁，再整几把！", "背时啦，连输好几把了！", "你是搞么，净零担实碎呢服些？", "哦，炮兵该？", "来了该。", "你几个玩得，先闪啦！", "你智叠牌，倒是打的呢叼啦！"]
            }), e("GamePaiXingConfig", ((o = {}).paixing100101 = {
                name: "平胡",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/ph"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/tongyong"
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/ph"
                }
            }, o.paixing100104 = {
                name: "中发板杠上花",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/zfbgsh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/tongyong"
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/zfbgsh"
                }
            }, o.paixing100201 = {
                name: "大对胡",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/ddh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/ddh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/ddh"
                }
            }, o.paixing100301 = {
                name: "小七对",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/xqd"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/xqd",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/xqd"
                }
            }, o.paixing100401 = {
                name: "龙七对",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/lqd"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/lqd",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/lqd"
                }
            }, o.paixing100501 = {
                name: "双龙七对",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/shuang_lqd"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/shuang_lqd",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/shuang_lqd"
                }
            }, o.paixing100601 = {
                name: "三龙七对",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/san_lqd"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/san_lqd",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/san_lqd"
                }
            }, o.paixing900102 = {
                name: "十老头",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/slt"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/slt",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/slt"
                }
            }, o.paixing900701 = {
                name: "小七星",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/xqx"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/xqx",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/xqx"
                }
            }, o.paixing500401 = {
                name: "抢杠胡",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/qgh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/qgh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/qgh"
                }
            }, o.paixing501002 = {
                name: "杠上花",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/gsh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/gsh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/gsh"
                }
            }, o.paixing501003 = {
                name: "双杠花",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/shuang_gh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/shuang_gh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/shuang_gh"
                }
            }, o.paixing501004 = {
                name: "三杠花",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/san_gh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/san_gh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/san_gh"
                }
            }, o.paixing501603 = {
                name: "五梅花",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/wmh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/wmh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/wmh"
                }
            }, o.paixing501101 = {
                name: "杠上炮",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/gsp"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/gsp",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/gsp"
                }
            }, o.paixing501501 = {
                name: "清一色",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/QYS"
                },
                animText: null,
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/qys",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/qys"
                }
            }, o.paixing501701 = {
                name: "清一色",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/QYS"
                },
                animText: null,
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/qys",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/qys"
                }
            }, o.paixing501704 = {
                name: "一字胡",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/yzh"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/yzh",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/yzh"
                }
            }, o.paixing501901 = {
                name: "中发板",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/zfb"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/zfb",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/zfb"
                }
            }, o.paixing501902 = {
                name: "中发板",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/zfb"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/zfb",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/zfb"
                }
            }, o.paixing502501 = {
                name: "海底捞",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/hdl"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/hdl",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/hdl"
                }
            }, o.paixing502601 = {
                name: "海底炮",
                anim: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.GAME_REMOTE,
                    path: "spineAni/px/text/hdp"
                },
                animSound: {
                    bundle: i.GAME,
                    path: "px/{0}/0/hdp",
                    lang: {
                        lang: !0,
                        replace: function(e, t) {
                            return "px/tongyong"
                        }
                    }
                },
                settleText: {
                    bundle: a.GAME_REMOTE,
                    path: "module/settle/image/paixing/hdp"
                }
            }, o)), t._RF.pop()
        }
    }
}))