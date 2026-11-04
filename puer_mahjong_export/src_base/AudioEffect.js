System.register("chunks:///_virtual/AudioEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts"], (function(e) {
    var t, i, n, a, o, r, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.AudioClip, o = e.error, r = e.AudioSource
        }, function(e) {
            s = e.resLoader
        }],
        execute: function() {
            var c;
            i._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", void 0);
            var l = n.ccclass;
            n.menu, e("AudioEffect", l("AudioEffect")(c = function(e) {
                function i() {
                    var t;
                    return (t = e.call(this) || this)._isStopPlay = !1, t._isStartPlay = !1, t._currowVolume = 1, t.currowPlayEffect = {
                        bundle: null,
                        path: null
                    }, t.effects = new Map, t
                }
                t(i, e);
                var n = i.prototype;
                return n.initData = function() {
                    this._isStopPlay = !1, this._isStartPlay = !1, this.clip && this.stop(), this.clip = null, this.currowPlayEffect = {
                        bundle: null,
                        path: null
                    }
                }, n.load = function(e, t, i) {
                    void 0 === e && (e = "resources"), this._isStopPlay = !1, this._isStartPlay = !0;
                    var n = this;
                    s.load(e, t, a, (function(a, r) {
                        a && o(a), n.realLoadAudioClip.call(n, e, t, r, i)
                    }))
                }, n.realLoadAudioClip = function(e, t, i, n) {
                    this._isStartPlay = !1, this.node && 0 != this.node.isValid ? 1 != this._isStopPlay && (this.loop = !1, this.clip = i, this.currowPlayEffect = {
                        bundle: e,
                        path: t
                    }, this.effects.set(t, e), this.volume = this._currowVolume, this.startPlay(), n && n()) : this.currowPlayEffect = {
                        bundle: null,
                        path: null
                    }
                }, n.getCurrowPlayConf = function() {
                    return this.currowPlayEffect
                }, n.isPlay = function() {
                    return this.playing
                }, n.isPause = function() {
                    return this.state == r.AudioState.PAUSED
                }, n.getCurState = function() {
                    return this.state
                }, n.startPlay = function() {
                    this.clip && this.clip.validate() && this.playOneShot(this.clip)
                }, n.startPause = function() {
                    this.pause()
                }, n.startStop = function() {
                    this.stop(), this._isStopPlay = !0, this.currowPlayEffect = {
                        bundle: null,
                        path: null
                    }
                }, n.setVolume = function(e) {
                    e = Number(e), isNaN(e) || (e > 1 ? e = 1 : e < 0 && (e = 0), this._currowVolume = e, (this.isPlay() || this.isPause()) && (this.volume = this._currowVolume))
                }, n.release = function() {
                    for (var e in console.log("=============>音效资源释放：", this.effects), this.effects) s.release(e, this.effects[e]);
                    this.startStop(), this.effects.clear()
                }, i
            }(r)) || c), i._RF.pop()
        }
    }
}))