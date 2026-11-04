System.register("chunks:///_virtual/FXJSound3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppSound.ts", "./AudioManager.ts", "./EventManager.ts", "./RandomManager.ts", "./SubGameConfig.ts", "./FXJEvent3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            i = e.AppSound
        }, function(e) {
            o = e.AudioManager, r = e.LANG_TYPE
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            u = e.RandomManager
        }, function(e) {
            l = e.SubGameConfig
        }, function(e) {
            d = e.FXJEvent
        }],
        execute: function() {
            n._RF.push({}, "771fcXVTyZHSZNRpNGBt26d", "FXJSound", void 0);
            var c = e("FXJSound", function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n
            }(i));
            c.BgGame = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/music/game_bg"
            }, c.QuickChatXiaoBo = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/chatxiaobo/"
            }, c.QuickChatXiaoYa = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/chatxiaoya/"
            }, c.GameQuickChatXiaoBo = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: ""
            }, c.GameQuickChatXiaoYa = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: ""
            }, c.Comein = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_comein"
            }, c.Leave = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_leave"
            }, c.Ready = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_ready"
            }, c.Gamestart = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_gamestart"
            }, c.Win = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_win"
            }, c.Ai = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_ai"
            }, c.Operate = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_operate"
            }, c.Zimo = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_zimo"
            }, c.Hupai = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_hu"
            }, c.Get = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_get"
            }, c.Play = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_play"
            }, c.Time = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_time"
            }, c.Liuju = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_liuju"
            }, c.Gang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_Gang"
            }, c.Angang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_Angang"
            }, c.Tongyong = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_tongyong"
            }, c.GameBattle = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/battle_start_end"
            }, c.GameRoll = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/roll_dices"
            }, c.GameClick = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/click"
            }, c.GamePushUp = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/ti_pai"
            }, c.GameAdjust = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/adjust"
            }, c.GameZhuang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/audio_zhuang"
            }, c.GameDiscard = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/type_{1}_{2}",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameChi = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_chi",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GamePeng = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_peng",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameGang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_gang",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameAnGang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_gang",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameHuaGang = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_buhua",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameBuPao = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_bupao",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameHu = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_hu",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameGangHu = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_ganghu",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameZiMo = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_zimo",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameLangQi = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/{0}/0/action_langqi",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return null
                    }
                }
            }, c.GameTing = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null,
                random: null
            }, c.GameDianPaoAni = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/hu1"
            }, c.GameHuAni = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/hu2"
            }, c.GameQiPai = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/qi_pai"
            }, c.GameTiPai = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/ti_pai"
            }, c.GameMoneyDance = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "audio/effect/money_dance"
            }, c.BuMaiDuanMen = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null
            }, c.MaiDuanMen = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null
            }, c.XiaZhu = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null,
                random: null
            }, c.NoXiaZhu = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null
            }, c.ChongFengJi = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null,
                random: null
            }, c.ZheRenJi = {
                bundle: l.SubGamePackage.SUBGAME_MJ_REMOTE,
                path: "",
                lang: null,
                random: null
            }, e("GameSound", function() {
                function e() {
                    this.langType = r.DIALET, this.initCurLang()
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e), this._instance
                };
                var t = e.prototype;
                return t.initCurLang = function() {
                    this.langType = o.getInstance().getLangType()
                }, t.setLangType = function(e) {
                    this.langType = e, o.getInstance().setLangType(e)
                }, t.getLangType = function() {
                    return this.langType = o.getInstance().getLangType(), this.langType
                }, t.playEffect = function(e) {
                    if (null != e && e.lang && 1 == e.lang.lang && this.langType == r.MANDARIN && null != e.lang.replace && (e.path = e.lang.replace(e.path, this.langType)), !a.table_isEmpty(e.random) && !a.string_isEmpty(null == e ? void 0 : e.path) && e.random && null != e.random.replace) {
                        var t = u.getRandomInt(e.random.min, e.random.max, 2);
                        e.path = e.random.replace(e.path, t, this.langType)
                    }
                    a.string_isEmpty(null == e ? void 0 : e.path) || s.dispatch(d.SYS_PLAY_EFFECT, {
                        bundle: e.bundle,
                        path: e.path
                    })
                }, e
            }())._instance = null, n._RF.pop()
        }
    }
}))