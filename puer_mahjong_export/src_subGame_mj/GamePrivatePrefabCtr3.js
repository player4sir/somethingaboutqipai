System.register("chunks:///_virtual/GamePrivatePrefabCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./AppSound.ts", "./GameConstant.ts", "./GameRes.ts", "./ReportConfig.ts", "./UIConfig.ts", "./Encrypto.ts", "./AudioManager.ts", "./EventManager.ts", "./BaseComponent.ts", "./PopupController.ts", "./gameCommonRes.ts", "./PlayerMgr6.ts", "./GameEvent6.ts", "./GameRuleConfig4.ts", "./GamePriveteInfoCtr3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g, f, C, E, S, A, I, G, y, v, P, T;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            o = e.cclegacy, r = e._decorator, s = e.Node, u = e.Prefab
        }, function(e) {
            l = e.GameTxt
        }, function(e) {
            d = e.Utils
        }, function(e) {
            c = e.GCache
        }, function(e) {
            h = e.AppEvent
        }, function(e) {
            p = e.AppSound
        }, function(e) {
            m = e.GConstants
        }, function(e) {
            _ = e.GameRes
        }, function(e) {
            g = e.ReportConfig
        }, function(e) {
            f = e.UIID
        }, function(e) {
            C = e.Encrypt
        }, function(e) {
            E = e.AudioManager
        }, function(e) {
            S = e.EventManager
        }, function(e) {
            A = e.BaseComponent
        }, function(e) {
            I = e.PopupController
        }, function(e) {
            G = e.GameCommonUuid
        }, function(e) {
            y = e.PlayerMgr
        }, function(e) {
            v = e.GameEvent
        }, function(e) {
            P = e.GameRuleConfig
        }, function(e) {
            T = e.GamePriveteInfoCtr
        }],
        execute: function() {
            var b, O, R, M, N, U, D, L, B, w, k, H, x, F;
            o._RF.push({}, "91ed3GNEM1C3ZfTh2arU8+9", "GamePrivatePrefabCtr", void 0);
            var V = r.ccclass,
                J = r.property,
                j = r.menu;
            e("GamePrivatePrefabCtr", (b = V("GamePrivatePrefabCtr"), O = j("prefab/subGame/mj/GamePrivatePrefabCtr"), R = J({
                tooltip: "邀请按钮节点",
                type: s
            }), M = J({
                tooltip: "开始按钮节点",
                type: s
            }), N = J({
                tooltip: "再来一轮按钮节点",
                type: s
            }), U = J({
                tooltip: "我的好友按钮节点",
                type: s
            }), D = J({
                tooltip: "房间信息节点",
                type: s
            }), b(L = O((w = t((B = function(e) {
                function t() {
                    for (var t, n, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "nodeBtnInvite", w, i(n)), a(n, "nodeBtnStart", k, i(n)), a(n, "nodeBtnAgain", H, i(n)), a(n, "nodeBtnFriendList", x, i(n)), a(n, "nodeRoomInfo", F, i(n)), n._switchEffect = -1, n._switchMusic = -1, n.event_defents = ((t = {})[h.UPDATE_PRIVATE_ROOM_TABLE_INFO] = "updateViewTableInfo", t[h.PRIVATE_SETTLE_FINAL] = "onShowPlayAgain", t[v.VIEW_BROADCAST_PLAYER_READY] = "palyerReady", t[v.VIEW_BROADCAST_PLAYER_ENTER] = "playerEnter", t[v.VIEW_BROADCAST_PLAYER_EXIT] = "playerExit", t[v.VIEW_BROADCAST_GAME_START] = "gameStart", t[v.VIEW_BROADCAST_DEAL_CARD] = "onDealCard", t[v.VIEW_BROADCAST_CHANGE_SEAT] = "onChangeSeat", t[v.PRIVATE_PLAY_AGAIN] = "onRspPlayAgain", t[v.PRIVATE_INVITE] = "onClickInvite", t[v.EXITS_SETTLE_VIEW] = "onGameOver", t[v.PRIVATE_CACEL_READY] = "onCancelReady", t[h.CHAT_VOICE_PLAY_START] = "playChatVoice", t[h.CHAT_VOICE_PLAY_START_NEW] = "playChatVoice", t[h.CHAT_VOICE_LIST_EMPTY] = "playChatVoiceEnd", t[h.NOTIFY_DISMISS_GAME] = "onGameOver", t[h.UPDATE_PRIVATE_ROOM_MASTER_INFO] = "onBroadcastMaster", t[h.UPDATE_PRIVATE_ROOM_INFO] = "onUpdateTwoPlayerModule", t), n
                }
                n(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initView(), this.updateView(), this.checkFriendListNeedOpen(), this.preloadRes()
                }, o.start = function() {}, o.preloadRes = function() {
                    var e = [{
                        ddzRes: _.Prefab_dismiss_confirm_pop,
                        resType: u
                    }, {
                        ddzRes: _.Prefab_dismiss_pop,
                        resType: u
                    }];
                    this.getPreLoaderArrayRes(e)
                }, o.initView = function() {}, o.updateView = function() {
                    this.updateViewTableInfo(), this.onUpdateAgainBtn(), this.updateViewBtnInvite()
                }, o.updateViewTableInfo = function() {
                    var e = c.PrivateData.getPrivateRoomTableInfo();
                    if (d.isNotNull(e)) {
                        var t;
                        if (this.nodeRoomInfo.active = !1, y.getInstance().getMyPlayerInfo() && y.getInstance().getMyPlayerInfo().isReady || 1 == (null == (t = c.Desk) ? void 0 : t.isPlayIng())) return;
                        var n = c.PrivateData.getPrivateRounds();
                        if (null != n && n.current > 0) return;
                        this.nodeRoomInfo.active = !0, this.nodeRoomInfo.getComponent(T).updateView({
                            title: c.SelectGame.getCurGameName(c.SelectGame.getCurGameId()) + "(" + d.string_format(l.private_room_table_info, e.tableId) + ")"
                        })
                    }
                }, o.updateViewBtnStart = function() {
                    this._checkBtns() && (this.nodeBtnStart.active = this._isNotReady())
                }, o._isNotReady = function() {
                    return 1 != this.nodeBtnAgain.active && (!y.getInstance().getMyPlayerInfo() || 0 == y.getInstance().getMyPlayerInfo().isReady)
                }, o.updateViewBtnInvite = function() {
                    this.nodeBtnInvite.active = !this.isFullPlayer()
                }, o.onUpdateTwoPlayerModule = function() {
                    this.updateViewBtnInvite()
                }, o.isFullPlayer = function() {
                    return c.PrivateData.isTwoPlayerModule() ? 2 == y.getInstance().playerList.length : y.getInstance().playerList.length == P.playerNum
                }, o._checkBtns = function() {
                    var e;
                    return 1 != (null == (e = c.Desk) ? void 0 : e.isPlayIng()) || (this.nodeBtnInvite.active = !1, this.nodeBtnStart.active = !1, this.nodeBtnAgain.active = !1, this.nodeBtnFriendList.active = !1, !1)
                }, o.updateContinueBtn = function(e) {
                    this._checkBtns() && (this.nodeBtnAgain.active = e, e && (this.nodeBtnStart.active = !1))
                }, o.onClickInvite = function(e, t) {
                    var n, a;
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick);
                    var i, o = null == (n = c.PrivateData.getPrivateRoomTableInfo()) ? void 0 : n.tableId,
                        r = d.obj2str(C.JsonDecode(c.WxShareData.getShareParam(m.ShareType.Invite, c.PrivateData.getPrivateRoomData()))),
                        s = c.PrivateData.getPrivateRoomConfigByGameId(c.SelectGame.getCurGameId()) || {},
                        u = c.PrivateData.getPrivateRoomData(),
                        g = d.number_valueOf(null == (a = y.getInstance().playerList) ? void 0 : a.length, 1),
                        f = d.string_format(l.share_wx_friends_in_room_text, c.SelectGame.getCurGameName(c.SelectGame.getCurGameId()), o, (null == u ? void 0 : u.rounds) || 4, (null == u ? void 0 : u.baseChip) || 1, g, 4 - g),
                        E = _.AppCommon_Share_Invite.path,
                        A = m.GameShareType[c.SelectGame.getCurGameId()];
                    A && (E = d.string_format(_.AppCommon_Share_Invite_Common.path, A)), i = {
                        title: f,
                        imageUrl: s.friend_share || E,
                        query: r
                    }, S.dispatch(h.EVENT_REQ_WXIN_SHARE, i)
                }, o.onClickStart = function(e, t) {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), this._isNotReady() && S.dispatch(h.NET_REQ_PLAYER_READY)
                }, o.palyerReady = function(e, t) {
                    t && t == c.User.getUserMid() && (this.nodeRoomInfo.active = !1, this.updateViewBtnStart())
                }, o.playerEnter = function(e, t) {
                    this.updateViewBtnInvite(), this.closeFriendListNeedOpen()
                }, o.playerExit = function(e, t, n) {
                    this.updateViewBtnInvite(), this.isMaster() || null != n && null != n.nickName && S.dispatch(h.SYS_TOAST_TIP, {
                        content: n.nickName + "退出了房间！"
                    })
                }, o.gameStart = function(e) {
                    this._hideViews(), c.PrivateData.onGameStart()
                }, o.onDealCard = function() {
                    this._hideViews()
                }, o._hideViews = function() {
                    this.nodeBtnFriendList.active = !1, this.nodeRoomInfo.active = !1, this.nodeBtnInvite.active = !1, this.nodeBtnStart.active = !1, this.nodeBtnAgain.active = !1
                }, o.onClickRecord = function(e, t) {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), I.getInstance().onOpenView("", f.GamePrivateRecordPrefab)
                }, o.onClickAgain = function(e) {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), S.dispatch(h.NET_REQ_PLAYER_AGAIN)
                }, o.isMaster = function() {
                    var e = c.User.getUserMid(),
                        t = c.PrivateData.getPrivateRoomMasterInfo();
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
                        if ((null == (e = c.PrivateData.getPrivateRoomSettleInfo()) || null == (t = e.recordList) ? void 0 : t.length) > 0 && c.PrivateData.getPrivateRoundFinish()) return void this.updateContinueBtn(!0)
                    } else this.nodeBtnAgain.active = !1;
                    this.updateViewBtnStart()
                }, o.onGameOver = function() {
                    this.updateViewBtnStart()
                }, o.onClickFriendList = function(e) {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), I.getInstance().onOpenView("", G.GameFriendsList, null, null, null, !0)
                }, o.onDestroy = function() {
                    1 == this._switchEffect && E.getInstance().setSwitchEffect(!0), 1 == this._switchMusic && E.getInstance().setSwitchMusic(!0), S.dispatch(h.VIEW_UI_CLOSE, G.GameFriendsList)
                }, o.onClickReservePoker = function() {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick);
                    var e = y.getInstance().playerList.length;
                    console.log("约局有奖传入人数:", e)
                }, o.onClickBacon = function() {
                    S.dispatch(h.SYS_PLAY_EFFECT, p.CommClick), S.dispatch(h.REPORT_CLIENT_CLICK, {
                        eventID: g.gift_bacon_2
                    })
                }, o.checkFriendListNeedOpen = function() {
                    this.isFullPlayer() || I.getInstance().onOpenView("", G.GameFriendsList, {
                        player_num: y.getInstance().playerList.length
                    }, null, null, !0)
                }, o.closeFriendListNeedOpen = function() {
                    y.getInstance().playerList.length == P.playerNum && S.dispatch(h.VIEW_UI_CLOSE, G.GameFriendsList)
                }, o.playChatVoice = function(e, t) {
                    -1 != this._switchEffect && -1 != this._switchMusic || (this._switchEffect = E.getInstance().getSwitchEffect() ? 1 : 0, this._switchMusic = E.getInstance().getSwitchMusic() ? 1 : 0, this._switchEffect && E.getInstance().setSwitchEffect(!1), this._switchMusic && E.getInstance().setSwitchMusic(!1))
                }, o.playChatVoiceEnd = function() {
                    console.log("playChatVoiceEnd", this._switchEffect, this._switchMusic), 1 == this._switchEffect && (E.getInstance().setSwitchEffect(!0), this._switchEffect = -1), 1 == this._switchMusic && (E.getInstance().setSwitchMusic(!0), this._switchEffect = -1)
                }, t
            }(A)).prototype, "nodeBtnInvite", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = t(B.prototype, "nodeBtnStart", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(B.prototype, "nodeBtnAgain", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(B.prototype, "nodeBtnFriendList", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(B.prototype, "nodeRoomInfo", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = B)) || L) || L)), o._RF.pop()
        }
    }
}))