System.register("chunks:///_virtual/GamePrivatePrefabCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./AppSound.ts", "./GameConstant.ts", "./GameRes.ts", "./UIConfig.ts", "./Encrypto.ts", "./AudioManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./PopupController.ts", "./gameCommonRes.ts", "./PlayerMgr.ts", "./GameEvent.ts", "./GameRuleConfig.ts", "./GamePriveteInfoCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g, m, C, I, A, E, v, y, S, P, T, G;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, l = e.Prefab
        }, function(e) {
            u = e.ClientInfo
        }, function(e) {
            d = e.GameTxt
        }, function(e) {
            c = e.Utils
        }, function(e) {
            h = e.GCache
        }, function(e) {
            p = e.AppEvent
        }, function(e) {
            f = e.AppSound
        }, function(e) {
            _ = e.GConstants
        }, function(e) {
            g = e.GameRes
        }, function(e) {
            m = e.UIID
        }, function(e) {
            C = e.Encrypt
        }, function(e) {
            I = e.AudioManager
        }, function(e) {
            A = e.EventManager
        }, function(e) {
            E = e.BaseComponent
        }, function(e) {
            v = e.PopupController
        }, function(e) {
            y = e.GameCommonUuid
        }, function(e) {
            S = e.PlayerMgr
        }, function(e) {
            P = e.GameEvent
        }, function(e) {
            T = e.GameRuleConfig
        }, function(e) {
            G = e.GamePriveteInfoCtr
        }],
        execute: function() {
            var O, R, N, b, D, L, M, U, w, B, H, F, k, V;
            o._RF.push({}, "869e9lYaxBE7aaknEVsKDyy", "GamePrivatePrefabCtr", void 0);
            var x = r.ccclass,
                W = r.property,
                z = r.menu;
            e("GamePrivatePrefabCtr", (O = x("GamePrivatePrefabCtr"), R = z("prefab/game/GamePrivatePrefabCtr"), N = W({
                tooltip: "邀请按钮节点",
                type: s
            }), b = W({
                tooltip: "开始按钮节点",
                type: s
            }), D = W({
                tooltip: "再来一轮按钮节点",
                type: s
            }), L = W({
                tooltip: "我的好友按钮节点",
                type: s
            }), M = W({
                tooltip: "房间信息节点",
                type: s
            }), O(U = R((B = t((w = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, i(n, "nodeBtnInvite", B, a(n)), i(n, "nodeBtnStart", H, a(n)), i(n, "nodeBtnAgain", F, a(n)), i(n, "nodeBtnFriendList", k, a(n)), i(n, "nodeRoomInfo", V, a(n)), n._switchEffect = -1, n._switchMusic = -1, n.event_defents = ((t = {})[p.UPDATE_PRIVATE_ROOM_TABLE_INFO] = "updateViewTableInfo", t[p.PRIVATE_SETTLE_FINAL] = "onShowPlayAgain", t[P.VIEW_BROADCAST_PLAYER_READY] = "palyerReady", t[P.VIEW_BROADCAST_PLAYER_ENTER] = "playerEnter", t[P.VIEW_BROADCAST_PLAYER_EXIT] = "playerExit", t[p.VIEW_BROADCAST_GAME_START] = "gameStart", t[P.VIEW_BROADCAST_DEAL_CARD] = "onDealCard", t[P.VIEW_BROADCAST_CHANGE_SEAT] = "onChangeSeat", t[P.PRIVATE_PLAY_AGAIN] = "onRspPlayAgain", t[P.PRIVATE_INVITE] = "onClickInvite", t[P.EXITS_SETTLE_VIEW] = "onGameOver", t[P.PRIVATE_CACEL_READY] = "onCancelReady", t[p.CHAT_VOICE_PLAY_START] = "playChatVoice", t[p.CHAT_VOICE_PLAY_START_NEW] = "playChatVoice", t[p.CHAT_VOICE_LIST_EMPTY] = "playChatVoiceEnd", t[p.NOTIFY_DISMISS_GAME] = "onGameOver", t[p.UPDATE_PRIVATE_ROOM_MASTER_INFO] = "onBroadcastMaster", t[p.UPDATE_PRIVATE_ROOM_INFO] = "onUpdateTwoPlayerModule", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView(), this.updateView(), this.checkFriendListNeedOpen(), this.preloadRes()
                }, o.start = function() {}, o.preloadRes = function() {
                    var e = [{
                        ddzRes: g.Prefab_dismiss_confirm_pop,
                        resType: l
                    }, {
                        ddzRes: g.Prefab_dismiss_pop,
                        resType: l
                    }];
                    this.getPreLoaderArrayRes(e)
                }, o.initView = function() {}, o.updateView = function() {
                    this.updateViewTableInfo(), this.onUpdateAgainBtn(), this.updateViewBtnInvite()
                }, o.updateViewTableInfo = function() {
                    var e = h.PrivateData.getPrivateRoomTableInfo();
                    if (c.isNotNull(e)) {
                        var t;
                        if (this.nodeRoomInfo.active = !1, S.getInstance().getMyPlayerInfo() && S.getInstance().getMyPlayerInfo().isReady || 1 == (null == (t = h.Desk) ? void 0 : t.isPlayIng())) return;
                        var n = h.PrivateData.getPrivateRounds();
                        if (null != n && n.current > 0) return;
                        this.nodeRoomInfo.active = !0, this.nodeRoomInfo.getComponent(G).updateView({
                            title: u.AppName + "(" + c.string_format(d.private_room_table_info, e.tableId) + ")"
                        })
                    }
                }, o.updateViewBtnStart = function() {
                    this._checkBtns() && (this.nodeBtnStart.active = this._isNotReady())
                }, o._isNotReady = function() {
                    return 1 != this.nodeBtnAgain.active && (!S.getInstance().getMyPlayerInfo() || 0 == S.getInstance().getMyPlayerInfo().isReady)
                }, o.updateViewBtnInvite = function() {
                    this.nodeBtnInvite.active = !this.isFullPlayer()
                }, o.onUpdateTwoPlayerModule = function() {
                    this.updateViewBtnInvite()
                }, o.isFullPlayer = function() {
                    return h.PrivateData.isTwoPlayerModule() ? 2 == S.getInstance().playerList.length : S.getInstance().playerList.length == T.playerNum
                }, o._checkBtns = function() {
                    var e;
                    return 1 != (null == (e = h.Desk) ? void 0 : e.isPlayIng()) || (this.nodeBtnInvite.active = !1, this.nodeBtnStart.active = !1, this.nodeBtnAgain.active = !1, this.nodeBtnFriendList.active = !1, !1)
                }, o.updateContinueBtn = function(e) {
                    this._checkBtns() && (this.nodeBtnAgain.active = e, e && (this.nodeBtnStart.active = !1))
                }, o.onClickInvite = function(e, t) {
                    var n, i;
                    A.dispatch(p.SYS_PLAY_EFFECT, f.CommClick);
                    var a, o = null == (n = h.PrivateData.getPrivateRoomTableInfo()) ? void 0 : n.tableId,
                        r = c.obj2str(C.JsonDecode(h.WxShareData.getShareParam(_.ShareType.Invite, h.PrivateData.getPrivateRoomData()))),
                        s = h.PrivateData.getPrivateRoomConfigByGameId(h.SelectGame.getCurGameId()) || {},
                        l = h.PrivateData.getPrivateRoomData(),
                        m = c.number_valueOf(null == (i = S.getInstance().playerList) ? void 0 : i.length, 1);
                    a = {
                        title: c.string_format(d.share_wx_friends_in_room_text, u.AppName, o, (null == l ? void 0 : l.rounds) || 4, (null == l ? void 0 : l.baseChip) || 1, m, 4 - m),
                        imageUrl: s.friend_share || g.AppCommon_Share_Invite.path,
                        query: r
                    }, A.dispatch(p.EVENT_REQ_WXIN_SHARE, a)
                }, o.onClickStart = function(e, t) {
                    A.dispatch(p.SYS_PLAY_EFFECT, f.CommClick), this._isNotReady() && A.dispatch(p.NET_REQ_PLAYER_READY)
                }, o.palyerReady = function(e, t) {
                    t && t == h.User.getUserMid() && (this.nodeRoomInfo.active = !1, this.updateViewBtnStart())
                }, o.playerEnter = function(e, t) {
                    this.updateViewBtnInvite(), this.closeFriendListNeedOpen()
                }, o.playerExit = function(e, t, n) {
                    this.updateViewBtnInvite(), this.isMaster() || null != n && null != n.nickName && A.dispatch(p.SYS_TOAST_TIP, {
                        content: n.nickName + "退出了房间！"
                    })
                }, o.gameStart = function(e) {
                    this._hideViews(), h.PrivateData.onGameStart()
                }, o.onDealCard = function() {
                    this._hideViews()
                }, o._hideViews = function() {
                    this.nodeBtnFriendList.active = !1, this.nodeRoomInfo.active = !1, this.nodeBtnInvite.active = !1, this.nodeBtnStart.active = !1, this.nodeBtnAgain.active = !1
                }, o.onClickRecord = function(e, t) {
                    A.dispatch(p.SYS_PLAY_EFFECT, f.CommClick), v.getInstance().onOpenView("", m.GamePrivateRecordPrefab)
                }, o.onClickAgain = function(e) {
                    A.dispatch(p.SYS_PLAY_EFFECT, f.CommClick), A.dispatch(p.NET_REQ_PLAYER_AGAIN)
                }, o.isMaster = function() {
                    var e = h.User.getUserMid(),
                        t = h.PrivateData.getPrivateRoomMasterInfo();
                    return (null == t ? void 0 : t.userId) == e
                }, o.onChangeSeat = function(e, t) {
                    this.onUpdateAgainBtn()
                }, o.onRspPlayAgain = function() {
                    this.isMaster() ? (this.updateContinueBtn(!1), this._isNotReady() && this.onClickStart(null, null)) : this.updateViewBtnStart()
                }, o.onShowPlayAgain = function() {
                    this.nodeBtnFriendList.active = !0, this.isMaster() ? this.updateContinueBtn(!0) : this.updateViewBtnStart()
                }, o.onCancelReady = function(e) {
                    this.onUpdateAgainBtn()
                }, o.onBroadcastMaster = function(e, t) {
                    this.onUpdateAgainBtn()
                }, o.onUpdateAgainBtn = function() {
                    var e, t;
                    if (this.isMaster()) {
                        if ((null == (e = h.PrivateData.getPrivateRoomSettleInfo()) || null == (t = e.recordList) ? void 0 : t.length) > 0 && h.PrivateData.getPrivateRoundFinish()) return void this.updateContinueBtn(!0)
                    } else this.nodeBtnAgain.active = !1;
                    this.updateViewBtnStart()
                }, o.onGameOver = function() {
                    this.updateViewBtnStart()
                }, o.onClickFriendList = function(e) {
                    A.dispatch(p.SYS_PLAY_EFFECT, f.CommClick), v.getInstance().onOpenView("", y.GameFriendsList, null, null, null, !0)
                }, o.onDestroy = function() {
                    1 == this._switchEffect && I.getInstance().setSwitchEffect(!0), 1 == this._switchMusic && I.getInstance().setSwitchMusic(!0), A.dispatch(p.VIEW_UI_CLOSE, y.GameFriendsList)
                }, o.checkFriendListNeedOpen = function() {
                    this.isFullPlayer() || v.getInstance().onOpenView("", y.GameFriendsList, {
                        player_num: S.getInstance().playerList.length
                    }, null, null, !0)
                }, o.closeFriendListNeedOpen = function() {
                    S.getInstance().playerList.length == T.playerNum && A.dispatch(p.VIEW_UI_CLOSE, y.GameFriendsList)
                }, o.playChatVoice = function(e, t) {
                    -1 != this._switchEffect && -1 != this._switchMusic || (this._switchEffect = I.getInstance().getSwitchEffect() ? 1 : 0, this._switchMusic = I.getInstance().getSwitchMusic() ? 1 : 0, this._switchEffect && I.getInstance().setSwitchEffect(!1), this._switchMusic && I.getInstance().setSwitchMusic(!1))
                }, o.playChatVoiceEnd = function() {
                    console.log("playChatVoiceEnd", this._switchEffect, this._switchMusic), 1 == this._switchEffect && (I.getInstance().setSwitchEffect(!0), this._switchEffect = -1), 1 == this._switchMusic && (I.getInstance().setSwitchMusic(!0), this._switchEffect = -1)
                }, t
            }(E)).prototype, "nodeBtnInvite", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(w.prototype, "nodeBtnStart", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(w.prototype, "nodeBtnAgain", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(w.prototype, "nodeBtnFriendList", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(w.prototype, "nodeRoomInfo", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = w)) || U) || U)), o._RF.pop()
        }
    }
}))