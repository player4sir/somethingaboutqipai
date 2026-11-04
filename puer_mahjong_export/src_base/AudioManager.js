System.register("chunks:///_virtual/AudioManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./LocalStorage.ts", "./AudioEffect.ts", "./AudioMusic.ts", "./BaseController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e._decorator, o = e.director, r = e.Node, s = e.assetManager, c = e.AudioClip, l = e.AudioSource
        }, function(e) {
            u = e.Utils
        }, function(e) {
            d = e.AppEvent
        }, function(e) {
            _ = e.StoreKey
        }, function(e) {
            h = e.LocalStorage
        }, function(e) {
            p = e.AudioEffect
        }, function(e) {
            f = e.AudioMusic
        }, function(e) {
            m = e.BaseController
        }],
        execute: function() {
            var g, E;
            e("LANG_TYPE", void 0), n._RF.push({}, "f9adcU8rCpAI4ZuI5QyfjAj", "AudioManager", void 0);
            var v, T = a.ccclass;
            ! function(e) {
                e[e.DIALET = 0] = "DIALET", e[e.MANDARIN = 1] = "MANDARIN"
            }(v || (v = e("LANG_TYPE", {}))), e("AudioManager", T("AudioManager")(((E = function(e) {
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._audioManagerNode = null, t.musicPNode = null, t.effectPNode = null, t.local_data = {}, t.nodeEffectList = [], t._volume_music = 1, t._volume_effect = 1, t._switch_music = !0, t._switch_effect = !0, t._langType = v.DIALET, t._uuid = "10000", t._localStorageTag = "audio_", t._playMusicData = {}, t.MAX_EFFECT_NUM = 20, t.effectMap = {}, t
                }
                t(n, e), n.getInstance = function() {
                    if (this._instance && null != this._instance || (this._instance = new n("AudioManager")), !this._instance._audioManagerNode) {
                        var e, t = null == (e = o.getScene()) ? void 0 : e.getChildByName("root");
                        if (null != t && t.isValid) {
                            var i = t.getChildByName("NodeAudioManager");
                            i || (i = new r("UIAudioManager"), t.addChild(i)), this._instance._audioManagerNode = i;
                            var a = i.getChildByName("NodeUIMusic");
                            a || ((a = new r("NodeUIMusic")).addComponent(f), i.addChild(a)), this._instance.musicPNode = a, this._instance.music = a.getComponent(f);
                            var s = i.getChildByName("NodeUIEffect");
                            s || (s = new r("NodeUIEffect")), this._instance.effectPNode = s
                        }
                        this._instance.initData()
                    }
                    return this._instance
                }, n.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, n.getInstance()
                };
                var a = n.prototype;
                return a.onInitModuleEvent = function() {
                    this.addModelListener(d.SYS_PLAY_MUSIC, this.receivePlayMusic), this.addModelListener(d.SYS_CHECK_PLAY_MUSIC, this.checkMusicValid), this.addModelListener(d.SYS_REWARD_VEDIO_STATUS, this.onRewardVedioStatus), this.addModelListener(d.SYS_PLAY_EFFECT, this.receivePlayEffect), this.addModelListener(d.SYS_STOP_PLAY_MUSIC, this.receiveStopPlayMusic), this.addModelListener(d.SYS_STOP_PLAY_EFFECT, this.receiveStopPlayEffect)
                }, a.preLoadAudioDir = function(e, t, i, n, a) {
                    void 0 === i && (i = null), void 0 === n && (n = null), t = t || "";
                    var o = this;
                    s.loadBundle(e, {
                        version: null == a ? void 0 : a.v,
                        scriptAsyncLoading: null == a ? void 0 : a.scriptAsyncLoading
                    }, (function(e, a) {
                        if (e) return o.print("加载包名出错", e), void(n && n(e, a));
                        a.preloadDir(t, c, (function(e, t, n) {
                            i && i(e, t, n)
                        }), (function(e, t) {
                            if (e) return o.print(e), void(n && n(e, t));
                            n && n(null, t)
                        }))
                    }))
                }, a.receivePlayMusic = function(e, t) {
                    t && null != t.path && this.playMusic(t.path, t.bundle, !0, t.callEndFunc)
                }, a.receivePlayEffect = function(e, t, i) {
                    void 0 === i && (i = !1), t && null != t.path && this.playEffect(t.path, t.bundle, i)
                }, a.receiveStopPlayMusic = function(e) {
                    this.music && this.music.startStop()
                }, a.receiveStopPlayEffect = function(e, t) {
                    void 0 === t && (t = null);
                    for (var i = this.nodeEffectList.length - 1; i >= 0; i--) {
                        var n, a = void 0;
                        if ((a = this.nodeEffectList[i]) && 1 == (null == (n = a.node) ? void 0 : n.isValid))
                            if (t) {
                                var o = a.commp.getCurrowPlayConf();
                                o.bundle == t.bundle && o.path == t.path && a.comp.startStop()
                            } else a.comp.startStop();
                        else this.nodeEffectList.splice(i, 1)
                    }
                }, a.initData = function() {
                    var e = h.get(this._localStorageTag);
                    if (e) {
                        try {
                            this.local_data = JSON.parse(e), this._volume_music = this.local_data.volume_music, this._volume_effect = this.local_data.volume_effect, this._switch_music = this.local_data.switch_music, this._switch_effect = this.local_data.switch_effect, this._langType = u.number_valueOf(this.local_data.langType, v.DIALET)
                        } catch (e) {
                            this.local_data = {}, this._volume_music = 1, this._volume_effect = 1, this._switch_music = !0, this._switch_effect = !0
                        }
                        this.music.volume = this._volume_music
                    }
                }, a.setUuid = function(e) {
                    this._uuid = e, this._localStorageTag = "game_audio_" + this._uuid
                }, a.getNewEffect = function() {
                    var e = null;
                    this.nodeEffectList.length > this.MAX_EFFECT_NUM && (this.nodeEffectList = [], this.effectPNode.destroyAllChildren());
                    for (var t = this.nodeEffectList.length - 1; t >= 0; t--) {
                        var i, n = void 0;
                        if ((n = this.nodeEffectList[t]) && 1 == (null == (i = n.node) ? void 0 : i.isValid)) {
                            if (0 == n.comp.isPlay() && 0 == n.comp.isPause()) {
                                e = n;
                                break
                            }
                        } else this.nodeEffectList.splice(t, 1)
                    }
                    if (!e) {
                        var a = new r("NodeUIEffect");
                        a.addComponent(p), this.effectPNode.addChild(a);
                        var o = a.getComponent(p);
                        e = {
                            node: a,
                            comp: o
                        }, this.nodeEffectList.push(e)
                    }
                    return e.comp.initData(), e.comp.volume = this._volume_effect, e
                }, a.playMusic = function(e, t, i, n) {
                    void 0 === t && (t = "resources"), void 0 === i && (i = !0), void 0 === n && (n = null), this._playMusicData = {
                        path: e,
                        bundle: t,
                        isLoop: i,
                        callback: n
                    }, this._switch_music ? (this.music.load(t, e), this.music.loop = i, this.music.onComplete = n) : this.print("播放音乐失败,开关已关闭path=", e)
                }, a.playEffect = function(e, t, i) {
                    if (void 0 === e && (e = ""), void 0 === t && (t = "resources"), void 0 === i && (i = !1), this._switch_effect) {
                        var n = t + "/" + e,
                            a = this.effectMap[n] || 0,
                            o = u.timeEx();
                        if (o - a < 50 && !i) return;
                        this.effectMap[n] = o;
                        var r = this.getNewEffect();
                        r.comp.load(t, e), r.comp.setVolume(this._volume_effect)
                    }
                }, a.getSwitchMusic = function() {
                    return this._switch_music
                }, a.setSwitchMusic = function(e) {
                    if (this._switch_music = e, 1 == this._switch_music) {
                        if (this.music.state == l.AudioState.PAUSED) this.music.startPlay();
                        else if (0 == this.music.isPlay())
                            if (this._playMusicData.path && this._playMusicData.bundle) {
                                var t = {
                                    path: this._playMusicData.path,
                                    bundle: this._playMusicData.bundle,
                                    isLoop: this._playMusicData.isLoop,
                                    callback: this._playMusicData.callback
                                };
                                this._playMusicData = {}, this.music.updatePauseState(!1), this.playMusic(t.path, t.bundle, t.isLoop, t.callback)
                            } else this.print("没有音乐文件配置")
                    } else this.music.startStop()
                }, a.getShakeSwitch = function() {
                    return h.get(_.SYS_Shock, 1)
                }, a.setShakeSwitch = function(e) {
                    h.set(_.SYS_Shock, e)
                }, a.getSwitchEffect = function() {
                    return this._switch_effect
                }, a.setSwitchEffect = function(e) {
                    if (this._switch_effect = e, 0 == e)
                        for (var t = this.nodeEffectList.length - 1; t >= 0; t--) {
                            var i, n = void 0;
                            (n = this.nodeEffectList[t]) && 1 == (null == (i = n.node) ? void 0 : i.isValid) ? n.comp.startStop() : this.nodeEffectList.splice(t, 1)
                        }
                }, a.getLangType = function() {
                    return this._langType
                }, a.setLangType = function(e) {
                    this._langType = e, this.save()
                }, a.checkMusicValid = function() {
                    if (this.music.isPlay()) return !0;
                    this.resumeAll()
                }, a.onRewardVedioStatus = function(e, t) {
                    "open" == t ? (console.log("暂停背景音乐------------"), this.pauseAll()) : "close" == t && (console.log("恢复背景音乐-------------"), this.resumeAll())
                }, a.resumeAll = function() {
                    var e = this;
                    1 == this._switch_music ? this.music ? (console.log("恢复背景音乐-------------------", this.music.state), this.music.state == l.AudioState.PLAYING && this.music.clip ? (console.log("恢复背景音乐-------------------先停止在重新播放"), this.music.startStop(), this.addSchedulerOnce(.5, (function() {
                        e.rePlayMusic()
                    }))) : this.music.state == l.AudioState.PAUSED && this.music.clip ? (console.log("恢复背景音乐-------------------1"), this.music.startPlay()) : 0 == this.music.isPlay() || this.music.state == l.AudioState.STOPPED ? (console.log("恢复背景音乐-------------------2"), this.rePlayMusic()) : console.log("恢复背景音乐-------------------4")) : console.log("恢复背景音乐-------------------5") : console.log("恢复背景音乐-------------------6")
                }, a.rePlayMusic = function() {
                    if (console.log("恢复背景音乐-------------------重新播放背景音乐"), this._playMusicData.path && this._playMusicData.bundle) {
                        var e = {
                            path: this._playMusicData.path,
                            bundle: this._playMusicData.bundle,
                            isLoop: this._playMusicData.isLoop,
                            callback: this._playMusicData.callback
                        };
                        console.log("恢复背景音乐-------------------3", e), this._playMusicData = {}, this.music.updatePauseState(!1), this.playMusic(e.path, e.bundle, e.isLoop, e.callback)
                    }
                }, a.pauseAll = function() {
                    console.log("暂停所有背景音乐-------------------1"), 1 == this.music.isPlay() && (console.log("暂停所有背景音乐-------------------2"), this.music.startPause());
                    for (var e = this.nodeEffectList.length - 1; e >= 0; e--) {
                        var t, i = void 0;
                        (i = this.nodeEffectList[e]) && 1 == (null == (t = i.node) ? void 0 : t.isValid) ? i.comp.state == l.AudioState.PLAYING && i.comp.startStop() : this.nodeEffectList.splice(e, 1)
                    }
                }, a.stopAll = function() {
                    this.music && this.music.startStop();
                    for (var e = this.nodeEffectList.length - 1; e >= 0; e--) {
                        var t, i = void 0;
                        (i = this.nodeEffectList[e]) && 1 == (null == (t = i.node) ? void 0 : t.isValid) ? i.comp.startStop() : this.nodeEffectList.splice(e, 1)
                    }
                    this.effectPNode.destroyAllChildren(), this.nodeEffectList = []
                }, a.isCloseAll = function() {
                    return !this.getSwitchMusic() && !this.getSwitchMusic()
                }, a.save = function() {
                    this.local_data.volume_music = this._volume_music, this.local_data.volume_effect = this._volume_effect, this.local_data.switch_music = this._switch_music, this.local_data.switch_effect = this._switch_effect, this.local_data.langType = this._langType;
                    var e = JSON.stringify(this.local_data);
                    h.set(this._localStorageTag, e)
                }, a.releaseAll = function() {
                    this.stopAll(), this._playMusicData = {}, this.music && this.music.release();
                    for (var e = this.nodeEffectList.length - 1; e >= 0; e--) {
                        var t, i = void 0;
                        (i = this.nodeEffectList[e]) && 1 == (null == (t = i.node) ? void 0 : t.isValid) ? i.comp.release() : this.nodeEffectList.splice(e, 1)
                    }
                    this.effectPNode.destroyAllChildren()
                }, a.clear = function() {
                    e.prototype.clear.call(this), this.releaseAll()
                }, i(n, [{
                    key: "musicVolume",
                    get: function() {
                        return this._volume_music
                    }
                }, {
                    key: "MusicVolume",
                    set: function(e) {
                        this._volume_music = e, this.music.setVolume(e)
                    }
                }, {
                    key: "effectVolume",
                    get: function() {
                        return this._volume_effect
                    }
                }, {
                    key: "EffectVolume",
                    set: function(e) {
                        this._volume_effect = e
                    }
                }]), n
            }(m))._instance = void 0, g = E)) || g), n._RF.pop()
        }
    }
}))