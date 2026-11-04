System.register("chunks:///_virtual/MjGameHeadInfoPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./AppSound.ts", "./EventManager.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./FXJConstant3.ts", "./FXJRes3.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.AppSound
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            u = e.BaseComponent
        }, function(e) {
            l = e.PlayerMgr
        }, function(e) {
            d = e.FXJConstant
        }, function(e) {
            c = e.FXJRes
        }, function(e) {
            h = e.GameEvent
        }],
        execute: function() {
            var p;
            n._RF.push({}, "25b6aieKpFNzo17o/6OxJg1", "MjGameHeadInfoPrefabCtr", void 0);
            var m = a.ccclass,
                _ = (a.property, a.menu);
            e("MjGameHeadInfoPrefabCtr", m("MjGameHeadInfoPrefabCtr")(p = _("prefab/subGame/mj/MjGameHeadInfoPrefabCtr")(p = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this)._uid = void 0, t._posID = void 0, t._delegate = void 0, t._player = null, t
                }
                t(n, e);
                var a = n.prototype;
                return a.registerGameListener = function() {
                    this.addModelListener(o.USER_UPDATE_INFO, this.updateUserInfo), this.addModelListener(h.USER_UPDATE_PROPERTY, this.updateCoin), this.addModelListener(h.VIEW_BROADCAST_PLAYER_EXIT, this.receiveUserExitRoom)
                }, a.setDelegate = function(e) {
                    this._delegate = e
                }, a.callDelegate = function(e) {
                    if ("function" == typeof this._delegate[e]) {
                        for (var t, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return (t = this._delegate)[e].apply(t, a)
                    }
                }, a.onSetUserId = function(e) {
                    this._uid = e
                }, a.onGetGameUserInfo = function(e) {
                    var t = l.getInstance().findPlayerWithUserId(e);
                    return null == t ? void 0 : t.gameUserInfo
                }, a.onGetUserNick = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return l.getInstance().getUserNick(e)
                }, a.onGetUserAvatar = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return l.getInstance().getUserAvatar(e)
                }, a.onSetUserAvatar = function(e, t) {
                    2 == t ? e.setLocalLoad(c.Picture_UserBigHead_girl.bundle, c.Picture_UserBigHead_girl.path) : e.setLocalLoad(c.Picture_UserBigHead_boy.bundle, c.Picture_UserBigHead_boy.path)
                }, a.onGetUserHeadBox = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return l.getInstance().getUserHeadBox(e)
                }, a.onUpdateUserPlayer = function() {
                    this._player = l.getInstance().findPlayerWithUserId(this._uid), this._player ? (this._posID = this._player.seatId, this._uid = this._player.userId, this.callDelegate("updateUserId", this._uid)) : this._posID = null, this.callDelegate("updateUserPosId", this._posID)
                }, a.onCheckBaseData = function() {
                    return !!this._uid || (this.onUpdateUserPlayer(), !!this._player)
                }, a.onGetPlayerMoney = function() {
                    return this.onUpdateUserPlayer(), this._player ? this._player.money : ""
                }, a.onPlayClickEffect = function() {
                    s.dispatch(o.SYS_PLAY_EFFECT, r.CommClick)
                }, a.onGetMySeatId = function() {
                    return l.getInstance().getMyPlayerInfo().seatId
                }, a.onGetPlayerInfo = function(e) {
                    return l.getInstance().findPlayerWithUserId(e)
                }, a.onGetGamePopConfig = function() {
                    return i.clone(d.EmojiProp)
                }, a.updateUserInfo = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.callDelegate("updateUserInfo", e, t)
                }, a.updateCoin = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.callDelegate("updateCoin", e, t)
                }, a.receiveUserExitRoom = function(e, t) {
                    this.callDelegate("receiveUserExitRoom", e, t)
                }, n
            }(u)) || p) || p), n._RF.pop()
        }
    }
}))