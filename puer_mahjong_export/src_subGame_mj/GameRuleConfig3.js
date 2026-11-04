System.register("chunks:///_virtual/GameRuleConfig3.ts", ["cc", "./GameConstant.ts", "./SubGameConfig.ts"], (function(e) {
    var t, n, a;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.GAMETYPE
        }, function(e) {
            a = e.SubGameConfig
        }],
        execute: function() {
            var i;
            t._RF.push({}, "7061fFo0JxDsIw/n2rfL4JC", "GameRuleConfig", void 0);
            var o = e("AnGangShowType", {
                GaiShang: 0,
                LiangYiPai: 1
            });
            e("GameRuleConfig", {
                CardTotalNum: 144,
                unitText: "番",
                CardHuNum: 1,
                playerNum: 4,
                anGangShowType: o.GaiShang,
                HasLaizi: !1,
                Laizi_value: "",
                HasBaoPai: !1,
                HasBugang: !1,
                HasHuagang: !0,
                SettleDaPaixingNum: 4,
                GameType: n.Common,
                TingLimitBtn: !0,
                needCheckCards: !1
            }), e("GameChatText", {
                classic: ["快点，我等到花儿都谢了", "跟你打牌真的太不愉快了", "醒醒啊，我们在打牌呢", "你给我等着！", "厉害啦，完美配合！", "你牌技太棒了！"],
                hot: ["Bro，靠你了", "退退退", "我摆烂了你随意", "我不装了我摊牌了", "我服了你个老六", "我真得栓Q了", "完了，芭比Q了！", "家人们，我破防了", "你真是YYDS！", "U1S1，你牌打得也忒烂了", "宝宝不开心了，宝宝有小情绪了", "向我开炮吧！"],
                majiang: ["我是一个没有感情的胡牌机器", "准备好了嘛?我要开始胡了", "打什么来什么心态崩了啊", "还让不让我摸牌啦!", "给个碰下呗"],
                dialect: []
            }), e("GamePaiXingConfig", ((i = {}).paixing100101 = {
                name: "平胡",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ph"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing100201 = {
                name: "碰碰胡",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/pph"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing100301 = {
                name: "七对",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/QD"
                },
                animText: null,
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qidui"
                }
            }, i.paixing101206 = {
                name: "十三幺",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ssy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/ssy"
                }
            }, i.paixing101010 = {
                name: "全不靠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qbk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing100304 = {
                name: "连七对",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/lqd"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/lqd"
                }
            }, i.paixing102201 = {
                name: "边张",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/bz"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing102304 = {
                name: "坎张",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/kz"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing102401 = {
                name: "单吊将",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ddj"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500301 = {
                name: "自摸",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/zm"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500401 = {
                name: "抢杠和",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qgh"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500602 = {
                name: "门前清",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/mqq"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500701 = {
                name: "全求人",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qqr"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500823 = {
                name: "四归一",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sgy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501001 = {
                name: "杠上开花",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/gskh"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501401 = {
                name: "混一色",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/hys"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501501 = {
                name: "清一色",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qys"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qys"
                }
            }, i.paixing501701 = {
                name: "字一色",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/zys"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/zys"
                }
            }, i.paixing501801 = {
                name: "大三元",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/dsy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/dsy"
                }
            }, i.paixing502001 = {
                name: "大四喜",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/dsx"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/dsx"
                }
            }, i.paixing502501 = {
                name: "妙手回春",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/mshc"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing502601 = {
                name: "海底捞月",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/hdly"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500827 = {
                name: "暗杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ag"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503901 = {
                name: "缺一门",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qym"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500828 = {
                name: "花牌",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/hp"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing502003 = {
                name: "小四喜",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/xsx"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/xsx"
                }
            }, i.paixing500906 = {
                name: "圈风刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qfk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500907 = {
                name: "门风刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/mfk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500910 = {
                name: "三暗刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sak3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500911 = {
                name: "四暗刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sak4"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/sak4"
                }
            }, i.paixing500917 = {
                name: "箭刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/jk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501902 = {
                name: "小三元",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/xsy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/xsy"
                }
            }, i.paixing500852 = {
                name: "明杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/mg"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing504202 = {
                name: "一色三节高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssjg3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/yssjg3"
                }
            }, i.paixing504003 = {
                name: "一般高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ybg"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing504005 = {
                name: "一色三同顺",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssts3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/yssts3"
                }
            }, i.paixing101408 = {
                name: "连六",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ll"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503805 = {
                name: "老少副",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/lsf"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing101352 = {
                name: "断幺",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/dy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing102612 = {
                name: "九莲宝灯",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/jbld"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/jbld"
                }
            }, i.paixing102613 = {
                name: "推不倒",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/tbd"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503811 = {
                name: "大于五",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/dyw"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503812 = {
                name: "小于五",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/xyw"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503814 = {
                name: "全双刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qsk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qsk"
                }
            }, i.paixing503815 = {
                name: "全小",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qx"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qx"
                }
            }, i.paixing503816 = {
                name: "全中",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qz"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qz"
                }
            }, i.paixing503817 = {
                name: "全大",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qd"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qd"
                }
            }, i.paixing504204 = {
                name: "一色四节高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssjg4"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/yssjg4"
                }
            }, i.paixing501508 = {
                name: "绿一色",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/lys"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/lys"
                }
            }, i.paixing500898 = {
                name: "四杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sg4"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/sg4"
                }
            }, i.paixing500899 = {
                name: "三杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sg"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/sg"
                }
            }, i.paixing500900 = {
                name: "双暗杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sag"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500960 = {
                name: "双明杠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/smg"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing101354 = {
                name: "清幺九",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qyj"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qyj"
                }
            }, i.paixing501509 = {
                name: "一色双龙会",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ysslh"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/ysslh"
                }
            }, i.paixing501510 = {
                name: "一色四同顺",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssts4"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/yssts4"
                }
            }, i.paixing501511 = {
                name: "一色四步高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssbg4"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/yssbg4"
                }
            }, i.paixing101355 = {
                name: "混幺九",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/hyj"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/hyj"
                }
            }, i.paixing101009 = {
                name: "七星不靠",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qxbk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/module/settle/image/paixing/qxbk"
                }
            }, i.paixing101011 = {
                name: "组合龙",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/zhl"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing101413 = {
                name: "清龙",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ql"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501512 = {
                name: "三色双龙会​",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ssslh"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501513 = {
                name: "一色三步高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yssbg3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500961 = {
                name: "全带五",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qdw"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500962 = {
                name: "三同刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/stk3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500963 = {
                name: "三风刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sfk3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing101414 = {
                name: "花龙",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/hl"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501302 = {
                name: "无番胡",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/wfh"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing504011 = {
                name: "三色三同顺​",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sssts3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing504205 = {
                name: "三色三节高​",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sssjg3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing502125 = {
                name: "五门齐",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/wmq"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501514 = {
                name: "三色三步高",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sssbg3"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500964 = {
                name: "双箭刻​",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sjk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing101356 = {
                name: "全带幺",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/qdy"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500704 = {
                name: "不求人",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/bqr"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing503112 = {
                name: "胡绝张",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/bqr"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing100106 = {
                name: "平胡",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/ph"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500965 = {
                name: "双同刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/stk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500966 = {
                name: "双暗刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/sak"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing504012 = {
                name: "喜相逢",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/xxf"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing500969 = {
                name: "幺九刻",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/yjk"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i.paixing501515 = {
                name: "无字",
                anim: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "spineAni/px/PX_ty"
                },
                animText: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/spineAni/px/text/wz"
                },
                animSound: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/px/tongyong"
                },
                settleText: null
            }, i)), e("GameSoundConfig", {
                GameQuickChatXiaoBo: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/chatxiaobo/"
                },
                GameQuickChatXiaoYa: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/chatxiaobo/"
                },
                GameDiscard: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/type_{1}_{2}"
                },
                GameChi: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_chi"
                },
                GamePeng: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_peng",
                    random: null
                },
                GameGang: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_gang"
                },
                GameAnGang: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_gang"
                },
                GameHuaGang: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: ""
                },
                GameBuPao: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: ""
                },
                GameHu: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_hu"
                },
                GameGangHu: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_ganghu"
                },
                GameZiMo: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/audio/{0}/1/action_zimo"
                },
                GameLangQi: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: ""
                },
                GameTing: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: ""
                }
            }), e("GameResConfig", {
                Picture_Game_Desk: {
                    bundle: a.SubGamePackage.SUBGAME_MJ_REMOTE,
                    path: "channel/guobiaomj/mesh/desk/logo/texture"
                },
                AppCommon_Share_Friend_Comm: {
                    path: "comm/img_share_gbmj.jpg"
                }
            }), t._RF.pop()
        }
    }
}))