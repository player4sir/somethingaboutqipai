System.register("chunks:///_virtual/GameHeadInfoPrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./FXJRes.ts", "./FXJSound.ts", "./GameEvent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.BaseComponent
        }, function(e) {
            r = e.PlayerMgr
        }, function(e) {
            s = e.FXJConstant
        }, function(e) {
            l = e.FXJEvent
        }, function(e) {
            u = e.FXJRes
        }, function(e) {
            d = e.GameSound, c = e.FXJSound
        }, function(e) {
            h = e.GameEvent
        }],
        execute: function() {
            var p;
            n._RF.push({}, "b3e9883uaZCgbaTV6NHat2K", "GameHeadInfoPrefabCtr", void 0);
            var f = i.ccclass,
                _ = (i.property, i.menu);
            e("GameHeadInfoPrefabCtr", f("GameHeadInfoPrefabCtr")(p = _("prefab/game/GameHeadInfoPrefabCtr")(p = function(e) {
                function n() {
                    for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(i)) || this)._uid = void 0, t._posID = void 0, t._delegate = void 0, t._player = null, t
                }
                t(n, e);
                var i = n.prototype;
                return i.registerGameListener = function() {
                    this.addModelListener(l.USER_UPDATE_INFO, this.updateUserInfo), this.addModelListener(h.USER_UPDATE_PROPERTY, this.updateCoin), this.addModelListener(h.VIEW_BROADCAST_PLAYER_EXIT, this.receiveUserExitRoom)
                }, i.setDelegate = function(e) {
                    this._delegate = e
                }, i.callDelegate = function(e) {
                    if ("function" == typeof this._delegate[e]) {
                        for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return (t = this._delegate)[e].apply(t, i)
                    }
                }, i.onSetUserId = function(e) {
                    this._uid = e
                }, i.onGetGameUserInfo = function(e) {
                    var t = r.getInstance().findPlayerWithUserId(e);
                    return null == t ? void 0 : t.gameUserInfo
                }, i.onGetUserNick = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return r.getInstance().getUserNick(e)
                }, i.onGetUserAvatar = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return r.getInstance().getUserAvatar(e)
                }, i.onSetUserAvatar = function(e, t) {
                    2 == t ? e.setLocalLoad(u.Picture_UserBigHead_girl.bundle, u.Picture_UserBigHead_girl.path) : e.setLocalLoad(u.Picture_UserBigHead_boy.bundle, u.Picture_UserBigHead_boy.path)
                }, i.onGetUserHeadBox = function() {
                    var e = this.onGetGameUserInfo(this._uid);
                    return r.getInstance().getUserHeadBox(e)
                }, i.onUpdateUserPlayer = function() {
                    this._player = r.getInstance().findPlayerWithUserId(this._uid), this._player ? (this._posID = this._player.seatId, this._uid = this._player.userId, this.callDelegate("updateUserId", this._uid)) : this._posID = null, this.callDelegate("updateUserPosId", this._posID)
                }, i.onCheckBaseData = function() {
                    return !!this._uid || (this.onUpdateUserPlayer(), !!this._player)
                }, i.onGetPlayerMoney = function() {
                    return this.onUpdateUserPlayer(), this._player ? this._player.money : ""
                }, i.onPlayClickEffect = function() {
                    d.getInstance().playEffect(c.CommClick)
                }, i.onGetMySeatId = function() {
                    var e;
                    return null == (e = r.getInstance().getMyPlayerInfo()) ? void 0 : e.seatId
                }, i.onGetPlayerInfo = function(e) {
                    return r.getInstance().findPlayerWithUserId(e)
                }, i.onGetGamePopConfig = function() {
                    return a.clone(s.EmojiProp)
                }, i.updateUserInfo = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.callDelegate("updateUserInfo", e, t)
                }, i.updateCoin = function(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.callDelegate("updateCoin", e, t)
                }, i.receiveUserExitRoom = function(e, t) {
                    this.callDelegate("receiveUserExitRoom", e, t)
                }, n
            }(o)) || p) || p), n._RF.pop()
        }
    }
}))