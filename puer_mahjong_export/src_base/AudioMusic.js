System.register("chunks:///_virtual/AudioMusic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e._decorator, o = e.AudioClip, r = e.error, s = e.AudioSource
        }, function(e) {
            c = e.resLoader
        }],
        execute: function() {
            var l;
            n._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", void 0);
            var u = a.ccclass;
            a.menu, e("AudioMusic", u("AudioMusic")(l = function(e) {
                function n() {
                    var t;
                    return (t = e.call(this) || this).onComplete = null, t._progress = 0, t._bundle = "resources", t._path = null, t._isPause = !1, t._isStopPlay = !1, t._isStartPlay = !1, t._currowVolume = 1, t
                }
                t(n, e);
                var a = n.prototype;
                return a.initData = function() {
                    this._isPause = !1, this._isStopPlay = !1, this._isStartPlay = !1, this.clip && this.stop(), this.clip = null
                }, a.load = function(e, t, i) {
                    if (void 0 === e && (e = "resources"), this._path == t && this._bundle == e) {
                        if (1 == this.isPlay()) return i && i(), void console.log("针对同一音频不再重复播放---\x3e", 1, this._isPause);
                        if (this.clip) return 0 == this._isPause && 0 == this.playing && (this.startPause(), this.startPlay()), i && i(), void console.log("针对同一音频不再重复播放---\x3e", 2, this._isPause, this.playing, this.state)
                    }
                    this._isStopPlay = !1, this._isStartPlay = !0;
                    var n = this;
                    c.load(e, t, o, (function(a, o) {
                        a && r(a), n.realLoadAudioClip.call(n, e, t, o, i)
                    }))
                }, a.realLoadAudioClip = function(e, t, i, n) {
                    this._isStartPlay = !1, this.node && 0 != this.node.isValid && 1 != this._isStopPlay && ((this.playing || this.state == s.AudioState.INTERRUPTED) && (this.startStop(), this._path != t && this._bundle != e && c.release(this._path, this._bundle)), this.clip = i, this.currentTime = 0, this.volume = this._currowVolume, 0 == this._isPause && this.startPlay(), n && n(), this._path = t, this._bundle = e)
                }, a.isPlay = function() {
                    return !!this._isStartPlay || this.state == s.AudioState.PLAYING
                }, a.isPause = function() {
                    return this.state == s.AudioState.PAUSED
                }, a.startPlay = function() {
                    this.play(), this._isPause = !1
                }, a.startPause = function() {
                    this.pause(), this._isPause = !0
                }, a.startStop = function() {
                    this.stop(), this._isStopPlay = !0
                }, a.updatePauseState = function(e) {
                    this._isPause = e || !1
                }, a.setVolume = function(e) {
                    e = Number(e), isNaN(e) || (e > 1 ? e = 1 : e < 0 && (e = 0), this._currowVolume = e, (this.isPlay() || this.isPause()) && (this.volume = this._currowVolume))
                }, a.release = function() {
                    this._path && (c.release(this._path, this._bundle), this._path = null, this._bundle = "resources"), this.startStop(), this._isPause = !1
                }, i(n, [{
                    key: "progress",
                    get: function() {
                        return this._progress = this.currentTime / this.duration, this._progress
                    },
                    set: function(e) {
                        this._progress = e, this.currentTime = e * this.duration
                    }
                }]), n
            }(s)) || l), n._RF.pop()
        }
    }
}))