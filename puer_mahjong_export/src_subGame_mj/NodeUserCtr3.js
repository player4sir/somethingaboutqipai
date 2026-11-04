System.register("chunks:///_virtual/NodeUserCtr3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./PlayerMgr6.ts", "./RoomMgr6.ts", "./FXJEvent3.ts", "./FXJRes3.ts", "./GameEvent6.ts", "./CardUtil3.ts", "./mjNodeUserPrefabCtr.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator, i = e.Prefab, o = e.instantiate
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            l = e.BaseComponent
        }, function(e) {
            d = e.PlayerMgr
        }, function(e) {
            c = e.RoomMgr
        }, function(e) {
            h = e.FXJEvent
        }, function(e) {
            p = e.FXJRes
        }, function(e) {
            m = e.GameEvent
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.mjNodeUserPrefabCtr
        }],
        execute: function() {
            var f;
            n._RF.push({}, "aebb6w8GzJOG4d/l/f/Ujrw", "NodeUserCtr", void 0);
            var C = a.ccclass,
                E = (a.property, a.menu);
            e("NodeUserCtr", C("NodeUserCtr")(f = E("prefab/subGame/mj/NodeUserCtr")(f = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this).userNodes = [], t
                }
                t(n, e);
                var a = n.prototype;
                return a.onInitModuleEvent = function() {
                    this.addModelListener(m.VIEW_BROADCAST_PLAYER_ENTER, this.playerEnter), this.addModelListener(m.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit), this.addModelListener(m.CLEAN_AI_SHOWING, this.cleanAiShowing), this.addModelListener(u.GAME_LOGOUT, this.onLogout), this.addModelListener(u.CHAT_VOICE_PLAY_START, this.playVoice), this.addModelListener(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, this.onGiveUp), this.addModelListener(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onGiveUpResult), this.addModelListener(m.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOptions), this.addModelListener(m.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, this.onDingQueOptionsResult), this.addModelListener(m.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(m.VIEW_BROADCAST_PLAYER_READY, this.playerReady), this.addModelListener(u.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(h.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(h.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onStartHuanSanZhang), this.addModelListener(h.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOneHuanSanZhangResult), this.addModelListener(h.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG, this.onAllHuanSanZhangResult), this.addModelListener(m.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(m.VIEW_BROADCAST_MAIDUANMEN_RESULT, this.viewUserMaiDuanMenOptionsResult), this.addModelListener(u.NOTIFY_DISMISS_GAME, this.onDismissGame), this.addModelListener(m.VIEW_BROADCAST_WAIT_HINT, this.broadcastWaitOperation), this.addModelListener(m.VIEW_BROADCAST_WAIT_HINT_OVER, this.hideWaitingOperation), this.addModelListener(m.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(m.VIEW_BROADCAST_GEN_ZHUANG_SUCC, this.onBroadcastGenZhuang), this.addModelListener(m.VIEW_USER_OPERATION, this.onUserOperation), this.addModelListener(m.VIEW_BROADCAST_GRAB_CARD, this.onUserGrabCard), this.addModelListener(u.UPDATE_PRIVATE_ROOM_ROUNDS_INFO, this.onUpdatePrivateRoomRoundsInfo), this.addModelListener(m.VIEW_SHOW_USER_OPERATION_TIPS, this.onShowOptionTips), this.addModelListener(u.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, a.onLoad = function() {
                    this.addGameComp()
                }, a.addGameComp = function() {
                    null == this.node && (this.node = r.create_2DNode()), this.node.addComponent("MJGameComponent");
                    var e = this.node.getComponent("MJGameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this), this.doGameCompFun("initExtGame")
                }, a.doGameCompFun = function(e) {
                    var t = this.node.getComponent("MJGameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return t[e].apply(t, a)
                    }
                }, a.enterRoomUpdatePlayer = function() {
                    var e;
                    (null == (e = this.userNodes) ? void 0 : e.length) > 0 && (console.log("头像节点--------enterRoomUpdatePlayer：", this.userNodes.length), this.userNodes = this.userNodes.filter((function(e) {
                        if (e && e.isValid) {
                            var t = e.getComponent(g);
                            if (t && t.UID !== s.User.getUserMid()) {
                                if (!d.getInstance().findPlayerWithUserId(t.UID)) return console.log("头像节点--------enterRoomUpdatePlayer：玩家已经离开了，移除用户头像"), e.destroy(), !1;
                                console.log("头像节点--------enterRoomUpdatePlayer：用户存在：", t.PosID)
                            }
                            return !0
                        }
                        return !1
                    })))
                }, a.onLogout = function() {
                    var e, t = this;
                    if ((null == (e = this.userNodes) ? void 0 : e.length) > 0) {
                        for (var n = [], a = [], i = null, o = 0; o < this.userNodes.length; o++)
                            if ((i = this.userNodes[o]) && i.isValid) {
                                a.push(i);
                                var r = i.getComponent(g);
                                null != (null == r ? void 0 : r.UID) && ((null == r ? void 0 : r.UID) == s.User.getUserMid() ? r.reset() : n.push(r.UID))
                            } else console.log("2222222222222222");
                        this.userNodes = a, n.forEach((function(e) {
                            t.palyerExit(null, e)
                        }))
                    }
                }, a.cleanAiShowing = function() {
                    var e;
                    if ((null == (e = this.userNodes) ? void 0 : e.length) > 0) {
                        for (var t = [], n = 0; n < this.userNodes.length; n++) {
                            var a = this.userNodes[n];
                            a && a.isValid ? (t.push(a), a.getComponent(g).cleanDepositStatus()) : console.log("33333333333333333333333333")
                        }
                        this.userNodes = t
                    }
                }, a.palyerExit = function(e, t) {
                    var n, a;
                    if (void 0 === t && (t = null), (null == (n = s.Desk) || !n.isPlayIng()) && (null == (a = this.userNodes) ? void 0 : a.length) > 0) {
                        for (var i, o = [], r = 0; r < this.userNodes.length; r++) {
                            var u = this.userNodes[r];
                            u && u.isValid && ((i = u.getComponent(g)).UID !== t && d.getInstance().findPlayerWithUserId(i.UID) ? o.push(u) : (u.destroy(), this.userNodes[r] = null))
                        }
                        this.userNodes = o
                    }
                }, a.playerEnter = function(e, t) {
                    var n = d.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        console.log("收到消息:玩家进入房间", n);
                        var a = {
                            uid: n.userId,
                            seatId: n.seatId
                        };
                        this.showUserView(a), s.PrivateData.setChatHistoryUserData({
                            mid: n.userId,
                            nick: d.getInstance().getUserNick(n.gameUserInfo),
                            icon: d.getInstance().getUserAvatar(n.gameUserInfo),
                            userHeadBox: d.getInstance().getUserHeadBox(n.gameUserInfo),
                            userChatBox: d.getInstance().getUserChatBox(n.gameUserInfo)
                        })
                    }
                }, a.showUserView = function(e) {
                    var t = this,
                        n = this;
                    this.getPreLoaderRes(p.Prefab_NodeUser.bundle, p.Prefab_NodeUser.path, i, (function(a) {
                        if (n.node && 0 != n.node.isValid) {
                            var i = _.calculatePlayerSeat(c.getInstance().mySeatId, e.seatId),
                                r = t.findUserIndexBySeatId(i);
                            if (-1 != r) {
                                var s;
                                if (console.log("头像节点--------当前座位的头像节点存在，判断节点是否有效", i), null != (s = t.userNodes[r]) && s.isValid) return console.log("头像节点--------当前座位的头像节点存在并且有效，只刷新用户信息", i), void t.userNodes[r].getComponent(g).initData(e);
                                console.log("头像节点--------当前座位的头像节点存在但无效", i), t.userNodes[r] = null, t.userNodes = t.userNodes.filter((function(e) {
                                    return null != e
                                }))
                            }
                            console.log("头像节点--------当前座位的头像节点不存在，创建节点，加入列表", i);
                            var u = o(a),
                                l = u.getComponent(g);
                            l.PosID = i, n.node.addChild(u), t.userNodes.push(u), l.initData(e)
                        }
                    }))
                }, a.findUserIndexBySeatId = function(e) {
                    for (var t = -1, n = null, a = null, i = 0; i < (null == (o = this.userNodes) ? void 0 : o.length); i++) {
                        var o, r, s;
                        if ((a = this.userNodes[i]) && a.isValid && (n = a.getComponent(g), console.log("头像节点--------findUserIndexBySeatId 查找头像节点上的座位号：", null == (r = n) ? void 0 : r.PosID), (null == (s = n) ? void 0 : s.PosID) === e)) {
                            t = i;
                            break
                        }
                    }
                    return t
                }, a.playVoice = function(e, t) {
                    if (console.log("播放语音的时候设置层级", t), t && t.mid) {
                        for (var n = [], a = 0; a < this.userNodes.length; a++) {
                            var i = this.userNodes[a];
                            i && i.isValid ? (n.push(i), i.getComponent(g).UID === t.mid && (console.log("播放语音的时候设置层级  111", t.mid), i.setSiblingIndex(4))) : console.log("55555555555555555555555555555")
                        }
                        this.userNodes = n
                    }
                }, a.onGiveUp = function(e, t, n) {
                    var a, i = this;
                    (null == t || null == (a = t.seatIdList) ? void 0 : a.length) > 0 && (null == t || t.seatIdList.forEach((function(e) {
                        for (var t = 0; t < i.userNodes.length; t++) {
                            var a = i.userNodes[t];
                            if (a && a.isValid) {
                                var o = a.getComponent(g);
                                if (o && o.getSeatId() === e) {
                                    o.onGiveUp(n);
                                    break
                                }
                            }
                        }
                    })))
                }, a.onGiveUpResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            if (i && i.getSeatId() === t.seatId) {
                                i.onGiveUpResult(t);
                                break
                            }
                        }
                    }
                }, a.onDingQueOptions = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        a && a.isValid && a.getComponent(g).onUpdateOptionTips({
                            tag: "show_dingque"
                        })
                    }
                }, a.onDingQueOptionsResult = function(e, t) {
                    if (null != (null == t ? void 0 : t.seatId))
                        for (var n = 0; n < this.userNodes.length; n++) {
                            var a = this.userNodes[n];
                            if (a && a.isValid) {
                                var i = a.getComponent(g);
                                i && i.getSeatId() === t.seatId && i.onDingQueOptionsResult(t)
                            }
                        }
                }, a.onAllDingQueOptionsResult = function(e) {
                    var t = this,
                        n = c.getInstance().dingQueResult;
                    if (r.table_isEmpty(n))
                        for (var a = 0; a < this.userNodes.length; a++) {
                            var i = this.userNodes[a];
                            if (i && i.isValid) {
                                var o = i.getComponent(g);
                                null == o || o.onUpdateOptionTips({
                                    tag: "reset_dingque"
                                })
                            }
                        } else Object.keys(n).forEach((function(e) {
                            for (var a = 0; a < t.userNodes.length; a++) {
                                var i = t.userNodes[a];
                                if (i && i.isValid) {
                                    var o, r = i.getComponent(g);
                                    r && r.getSeatId() === (null == (o = n[e]) ? void 0 : o.seatId) && r.onDingQueOptionsResult(n[e])
                                }
                            }
                        }))
                }, a.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("onNodeUserGameRealTimeHuInfo", this.userNodes, t)
                }, a.onStartHuanSanZhang = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        a && a.isValid && a.getComponent(g).onUpdateOptionTips({
                            tag: "show_hsz"
                        })
                    }
                }, a.onOneHuanSanZhangResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            if ((null == i ? void 0 : i.getSeatId()) == t.seatId) {
                                i.onUpdateOptionTips({
                                    tag: "hide"
                                });
                                break
                            }
                        }
                    }
                }, a.onAllHuanSanZhangResult = function(e, t) {
                    this.onOneHuanSanZhangResult(e, t)
                }, a.onReconnectSuccess = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            null == n || n.onReconnectSuccess(), c.getInstance().isMySelfSeat(null == n ? void 0 : n.getSeatId()) && (null == n || n.cleanDepositStatus())
                        }
                    }
                    this.onAllDingQueOptionsResult(null)
                }, a.playerReady = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            i && c.getInstance().isMySelfByUserId(t) && (null == i || i.resetUserStatus()), null == i || i.playerReady(e, t)
                        }
                    }
                }, a.viewUserMaiDuanMenOptions = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            i && (c.getInstance().isMySelfSeat(t.seatId) || null == i || i.onUpdateOptionTips({
                                tag: "maiduanmen",
                                info: t
                            }))
                        }
                    }
                }, a.viewUserMaiDuanMenOptionsResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            i && (null == i || i.onUpdateOptionTips({
                                tag: "hide",
                                info: t
                            }), null == i || i.onUpdateOptionTips({
                                tag: "maiduanmen_reslut",
                                info: t
                            }))
                        }
                    }
                }, a.broadcastWaitOperation = function(e, t) {
                    if (this.doGameCompFun("checkBroadcastWaitOperation"))
                        for (var n = 0; n < this.userNodes.length; n++) {
                            var a = this.userNodes[n];
                            if (a && a.isValid) {
                                var i = a.getComponent(g);
                                if (i && c.getInstance().isMySelfSeat(null == i ? void 0 : i.getSeatId())) {
                                    null == i || i.onUpdateOptionTips({
                                        tag: "wait_operation",
                                        info: t
                                    });
                                    break
                                }
                            }
                        }
                }, a.hideWaitingOperation = function(e) {
                    for (var t = 0; t < this.userNodes.length; t++) {
                        var n = this.userNodes[t];
                        if (n && n.isValid) {
                            var a = n.getComponent(g);
                            a && null != a && a.isWaitingToOperation() && (null == a || a.onUpdateOptionTips({
                                tag: "wait_operation_over",
                                info: e
                            }))
                        }
                    }
                }, a.onUpdatePrivateRoomRoundsInfo = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            n && n.checkChangeBtn()
                        }
                    }
                }, a.notifyOperation = function(e) {
                    for (var t = 0; t < this.userNodes.length; t++) {
                        var n = this.userNodes[t];
                        if (n && n.isValid) {
                            var a = n.getComponent(g);
                            a && a.getSeatId() == (null == e ? void 0 : e.seatId) && (null == a || a.onOperationResult(e)), a.onOperationResultCheckTips(e)
                        }
                    }
                }, a.onUserGrabCard = function(e, t) {
                    this.hideWaitingOperation(t)
                }, a.onUserOperation = function(e, t) {
                    this.hideWaitingOperation(t)
                }, a.onOperationResult = function(e, t) {
                    this.notifyOperation(t)
                }, a.onDismissGame = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            n && (null == n || n.onUpdateOptionTips({
                                tag: "hide"
                            }))
                        }
                    }
                }, a.onBroadcastGenZhuang = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            if (n && c.getInstance().isMySelfSeat(null == n ? void 0 : n.getSeatId())) {
                                null == n || n.onUpdateOptionTips({
                                    tag: "gen_zhuang"
                                });
                                break
                            }
                        }
                    }
                }, a.onShowOptionTips = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var a = this.userNodes[n];
                        if (a && a.isValid) {
                            var i = a.getComponent(g);
                            i && i.UID == (null == t ? void 0 : t.userId) && (null == i || i.onUpdateOptionTips(t))
                        }
                    }
                }, a.onUpdatePrivateRoomInfo = function() {
                    if (s.PrivateData.isTwoPlayerModule())
                        for (var e = c.getInstance().isDingQueFinish(), t = 0; t < this.userNodes.length; t++) {
                            var n = this.userNodes[t];
                            if (n && n.isValid) {
                                var a = n.getComponent(g);
                                a && (a.updatePos(), e && null != a && a.isDingQueOperation() && (null == a || a.onUpdateOptionTips({
                                    tag: "reset_dingque",
                                    info: null
                                })))
                            }
                        }
                }, n
            }(l)) || f) || f), n._RF.pop()
        }
    }
}))