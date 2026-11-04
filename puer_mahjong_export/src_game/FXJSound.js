System.register("chunks:///_virtual/FXJSound.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppSound.ts", "./AudioManager.ts", "./EventManager.ts", "./RandomManager.ts", "./FXJEvent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            i = e.Utils
        }, function(e) {
            a = e.AudioPackage, o = e.AppSound
        }, function(e) {
            r = e.AudioManager, s = e.LANG_TYPE
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.RandomManager
        }, function(e) {
            d = e.FXJEvent
        }],
        execute: function() {
            n._RF.push({}, "36323jmvupIoLD0m6svaueL", "FXJSound", void 0);
            var c = e("FXJSound", function(e) {
                function n() {
                    return e.apply(this, arguments) || this
                }
                return t(n, e), n
            }(o));
            c.BgGame = {
                bundle: a.GAME,
                path: "music/game_bg"
            }, c.QuickChatXiaoBo = {
                bundle: a.GAME,
                path: "chatxiaobo/"
            }, c.QuickChatXiaoYa = {
                bundle: a.GAME,
                path: "chatxiaoya/"
            }, c.Comein = {
                bundle: a.GAME,
                path: "effect/audio_comein"
            }, c.Leave = {
                bundle: a.GAME,
                path: "effect/audio_leave"
            }, c.Ready = {
                bundle: a.GAME,
                path: "effect/audio_ready"
            }, c.Gamestart = {
                bundle: a.GAME,
                path: "effect/audio_gamestart"
            }, c.Win = {
                bundle: a.GAME,
                path: "effect/audio_win"
            }, c.Ai = {
                bundle: a.GAME,
                path: "effect/audio_ai"
            }, c.Operate = {
                bundle: a.GAME,
                path: "effect/audio_operate"
            }, c.Zimo = {
                bundle: a.GAME,
                path: "effect/audio_zimo"
            }, c.Hupai = {
                bundle: a.GAME,
                path: "effect/audio_hu"
            }, c.Get = {
                bundle: a.GAME,
                path: "effect/audio_get"
            }, c.Play = {
                bundle: a.GAME,
                path: "effect/audio_play"
            }, c.Time = {
                bundle: a.GAME,
                path: "effect/audio_time"
            }, c.Liuju = {
                bundle: a.GAME,
                path: "effect/audio_liuju"
            }, c.Gang = {
                bundle: a.GAME,
                path: "effect/audio_Gang"
            }, c.Angang = {
                bundle: a.GAME,
                path: "effect/audio_Angang"
            }, c.Tongyong = {
                bundle: a.GAME,
                path: "effect/audio_tongyong"
            }, c.GameBattle = {
                bundle: a.GAME,
                path: "effect/battle_start_end"
            }, c.GameRoll = {
                bundle: a.GAME,
                path: "effect/roll_dices"
            }, c.GameClick = {
                bundle: a.GAME,
                path: "effect/click"
            }, c.GamePushUp = {
                bundle: a.GAME,
                path: "effect/ti_pai"
            }, c.GameAdjust = {
                bundle: a.GAME,
                path: "effect/adjust"
            }, c.GameZhuang = {
                bundle: a.GAME,
                path: "effect/audio_zhuang"
            }, c.GameDiscard = {
                bundle: a.GAME,
                path: "{0}/0/type_{1}_{2}",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameChi = {
                bundle: a.GAME,
                path: "{0}/0/action_chi",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GamePeng = {
                bundle: a.GAME,
                path: "{0}/0/action_peng",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameGang = {
                bundle: a.GAME,
                path: "{0}/0/action_gang",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameAnGang = {
                bundle: a.GAME,
                path: "{0}/0/action_gang",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameHuaGang = {
                bundle: a.GAME,
                path: "{0}/0/action_buhua",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameBuPao = {
                bundle: a.GAME,
                path: "{0}/0/action_bupao",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                }
            }, c.GameHu = {
                bundle: a.GAME,
                path: "{0}/0/action_hu",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameGangHu = {
                bundle: a.GAME,
                path: "{0}/0/action_ganghu",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameZiMo = {
                bundle: a.GAME,
                path: "{0}/0/action_zimo",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return e.replace("/0/", "/" + t + "/")
                    }
                },
                random: null
            }, c.GameLangQi = {
                bundle: a.GAME,
                path: "{0}/0/action_langqi",
                lang: {
                    lang: !0,
                    replace: function(e, t) {
                        return null
                    }
                }
            }, c.GameTing = {
                bundle: a.GAME,
                path: "",
                lang: null,
                random: null
            }, c.GameDianPaoAni = {
                bundle: a.GAME,
                path: "effect/hu1"
            }, c.GameHuAni = {
                bundle: a.GAME,
                path: "effect/hu2"
            }, c.GameQiPai = {
                bundle: a.GAME,
                path: "effect/qi_pai"
            }, c.GameTiPai = {
                bundle: a.GAME,
                path: "effect/ti_pai"
            }, c.GameMoneyDance = {
                bundle: a.GAME,
                path: "effect/money_dance"
            }, c.BuMaiDuanMen = {
                bundle: a.GAME,
                path: "",
                lang: null
            }, c.MaiDuanMen = {
                bundle: a.GAME,
                path: "",
                lang: null
            }, c.XiaZhu = {
                bundle: a.GAME,
                path: "",
                lang: null,
                random: null
            }, c.NoXiaZhu = {
                bundle: a.GAME,
                path: "",
                lang: null
            }, c.ChongFengJi = {
                bundle: a.GAME,
                path: "",
                lang: null,
                random: null
            }, c.ZheRenJi = {
                bundle: a.GAME,
                path: "",
                lang: null,
                random: null
            }, c.GamePao = {
                bundle: a.GAME,
                path: "",
                lang: {}
            }, e("GameSound", function() {
                function e() {
                    this.langType = s.DIALET, this.initCurLang()
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e), this._instance
                };
                var t = e.prototype;
                return t.initCurLang = function() {
                    this.langType = r.getInstance().getLangType()
                }, t.setLangType = function(e) {
                    this.langType = e, r.getInstance().setLangType(e)
                }, t.getLangType = function() {
                    return this.langType = r.getInstance().getLangType(), this.langType
                }, t.playEffect = function(e) {
                    if (null != e && e.lang && 1 == e.lang.lang && this.langType == s.MANDARIN && null != e.lang.replace && (e.path = e.lang.replace(e.path, this.langType)), !i.table_isEmpty(null == e ? void 0 : e.random) && !i.string_isEmpty(null == e ? void 0 : e.path) && e.random && null != e.random.replace) {
                        var t = u.getRandomInt(e.random.min, e.random.max, 2);
                        e.path = e.random.replace(e.path, t, this.langType)
                    }
                    i.string_isEmpty(null == e ? void 0 : e.path) || l.dispatch(d.SYS_PLAY_EFFECT, {
                        bundle: e.bundle,
                        path: e.path
                    })
                }, e
            }())._instance = null, n._RF.pop()
        }
    }
}))