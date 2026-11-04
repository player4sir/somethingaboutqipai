System.register("chunks:///_virtual/NodeUserCtr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./BaseComponent.ts", "./PlayerMgr.ts", "./RoomMgr.ts", "./FXJEvent.ts", "./FXJRes.ts", "./GameEvent.ts", "./CardUtil.ts", "./NodeUserPrefabCtr.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f, _, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator, a = e.Prefab, o = e.instantiate
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            l = e.AppEvent
        }, function(e) {
            u = e.BaseComponent
        }, function(e) {
            d = e.PlayerMgr
        }, function(e) {
            c = e.RoomMgr
        }, function(e) {
            h = e.FXJEvent
        }, function(e) {
            p = e.FXJRes
        }, function(e) {
            f = e.GameEvent
        }, function(e) {
            _ = e.CardUtil
        }, function(e) {
            g = e.NodeUserPrefabCtr
        }],
        execute: function() {
            var m;
            n._RF.push({}, "437eaoAHwZEyYBNA0UyRmWP", "NodeUserCtr", void 0);
            var C = i.ccclass,
                I = (i.property, i.menu);
            e("NodeUserCtr", C("NodeUserCtr")(m = I("prefab/game/NodeUserCtr")(m = function(e) {
                function n() {
                    for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(i)) || this).userNodes = [], t
                }
                t(n, e);
                var i = n.prototype;
                return i.onInitModuleEvent = function() {
                    this.addModelListener(f.VIEW_BROADCAST_PLAYER_ENTER, this.playerEnter), this.addModelListener(f.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit), this.addModelListener(f.CLEAN_AI_SHOWING, this.cleanAiShowing), this.addModelListener(l.GAME_LOGOUT, this.onLogout), this.addModelListener(l.CHAT_VOICE_PLAY_START, this.playVoice), this.addModelListener(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP, this.onGiveUp), this.addModelListener(h.VIEW_BROADCAST_TO_WAIT_USER_GIVE_UP_RESULT, this.onGiveUpResult), this.addModelListener(f.VIEW_BROADCAST_DINGQUE_OPTIONS, this.onDingQueOptions), this.addModelListener(f.VIEW_BROADCAST_DINGQUE_OPTIONS_RESULT, this.onDingQueOptionsResult), this.addModelListener(f.VIEW_BROADCAST_ALL_DINGQUE_OPTIONS_RESULT, this.onAllDingQueOptionsResult), this.addModelListener(f.VIEW_BROADCAST_PLAYER_READY, this.playerReady), this.addModelListener(l.NOTIFY_RECONNECT_SUCCESS, this.onReconnectSuccess), this.addModelListener(h.BROADCAST_REALTIME_HU_INFO, this.onGameRealTimeHuInfo), this.addModelListener(h.VIEW_BROADCAST_HUAN_SAN_ZHANG, this.onStartHuanSanZhang), this.addModelListener(h.VIEW_BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT, this.onOneHuanSanZhangResult), this.addModelListener(h.VIEW_BROADCAST_ALL_HUAN_SAN_ZHANG, this.onAllHuanSanZhangResult), this.addModelListener(f.VIEW_BROADCAST_MAIDUANMEN_USER, this.viewUserMaiDuanMenOptions), this.addModelListener(f.VIEW_BROADCAST_MAIDUANMEN_RESULT, this.viewUserMaiDuanMenOptionsResult), this.addModelListener(l.NOTIFY_DISMISS_GAME, this.onDismissGame), this.addModelListener(f.VIEW_BROADCAST_WAIT_HINT, this.broadcastWaitOperation), this.addModelListener(f.VIEW_BROADCAST_WAIT_HINT_OVER, this.hideWaitingOperation), this.addModelListener(f.UPDATE_OPERATION_RESULT, this.onOperationResult), this.addModelListener(f.VIEW_BROADCAST_GEN_ZHUANG_SUCC, this.onBroadcastGenZhuang), this.addModelListener(f.VIEW_USER_OPERATION, this.onUserOperation), this.addModelListener(f.VIEW_BROADCAST_GRAB_CARD, this.onUserGrabCard), this.addModelListener(l.UPDATE_PRIVATE_ROOM_ROUNDS_INFO, this.onUpdatePrivateRoomRoundsInfo), this.addModelListener(f.VIEW_SHOW_USER_OPERATION_TIPS, this.onShowOptionTips), this.addModelListener(l.UPDATE_PRIVATE_ROOM_INFO, this.onUpdatePrivateRoomInfo)
                }, i.onLoad = function() {
                    this.addGameComp()
                }, i.addGameComp = function() {
                    null == this.node && (this.node = r.create_2DNode()), this.node.addComponent("GameComponent");
                    var e = this.node.getComponent("GameComponent");
                    "function" == typeof e.setDelegate && e.setDelegate(this), this.doGameCompFun("initExtGame")
                }, i.doGameCompFun = function(e) {
                    var t = this.node.getComponent("GameComponent");
                    if ("function" == typeof t[e]) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return t[e].apply(t, i)
                    }
                }, i.enterRoomUpdatePlayer = function() {
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
                }, i.onLogout = function() {
                    var e, t = this;
                    if ((null == (e = this.userNodes) ? void 0 : e.length) > 0) {
                        for (var n = [], i = [], a = null, o = 0; o < this.userNodes.length; o++)
                            if ((a = this.userNodes[o]) && a.isValid) {
                                i.push(a);
                                var r = a.getComponent(g);
                                null != (null == r ? void 0 : r.UID) && ((null == r ? void 0 : r.UID) == s.User.getUserMid() ? r.reset() : n.push(r.UID))
                            } else console.log("2222222222222222");
                        this.userNodes = i, n.forEach((function(e) {
                            t.palyerExit(null, e)
                        }))
                    }
                }, i.cleanAiShowing = function() {
                    var e;
                    if ((null == (e = this.userNodes) ? void 0 : e.length) > 0) {
                        for (var t = [], n = 0; n < this.userNodes.length; n++) {
                            var i = this.userNodes[n];
                            i && i.isValid ? (t.push(i), i.getComponent(g).cleanDepositStatus()) : console.log("33333333333333333333333333")
                        }
                        this.userNodes = t
                    }
                }, i.palyerExit = function(e, t) {
                    var n, i;
                    if (void 0 === t && (t = null), (null == (n = s.Desk) || !n.isPlayIng()) && (null == (i = this.userNodes) ? void 0 : i.length) > 0) {
                        for (var a, o = [], r = 0; r < this.userNodes.length; r++) {
                            var l = this.userNodes[r];
                            l && l.isValid ? (a = l.getComponent(g)).UID !== t && d.getInstance().findPlayerWithUserId(a.UID) ? o.push(l) : (l.destroy(), this.userNodes[r] = null) : console.log("44444444444444444444444444")
                        }
                        this.userNodes = o
                    }
                }, i.playerEnter = function(e, t) {
                    var n = d.getInstance().findPlayerWithUserId(t);
                    if (n) {
                        console.log("收到消息:玩家进入房间", n);
                        var i = {
                            uid: n.userId,
                            seatId: n.seatId
                        };
                        this.showUserView(i), s.PrivateData.setChatHistoryUserData({
                            mid: n.userId,
                            nick: d.getInstance().getUserNick(n.gameUserInfo),
                            icon: d.getInstance().getUserAvatar(n.gameUserInfo),
                            userHeadBox: d.getInstance().getUserHeadBox(n.gameUserInfo),
                            userChatBox: d.getInstance().getUserChatBox(n.gameUserInfo)
                        })
                    }
                }, i.showUserView = function(e) {
                    var t = this,
                        n = this;
                    this.getPreLoaderRes(p.Prefab_NodeUser.bundle, p.Prefab_NodeUser.path, a, (function(i) {
                        if (n.node && 0 != n.node.isValid) {
                            var a = _.calculatePlayerSeat(c.getInstance().mySeatId, e.seatId),
                                r = t.findUserIndexBySeatId(a);
                            if (-1 != r) {
                                var s;
                                if (console.log("头像节点--------当前座位的头像节点存在，判断节点是否有效", a), null != (s = t.userNodes[r]) && s.isValid) return console.log("头像节点--------当前座位的头像节点存在并且有效，只刷新用户信息", a), void t.userNodes[r].getComponent(g).initData(e);
                                console.log("头像节点--------当前座位的头像节点存在但无效", a), t.userNodes[r] = null, t.userNodes = t.userNodes.filter((function(e) {
                                    return null != e
                                }))
                            }
                            console.log("头像节点--------当前座位的头像节点不存在，创建节点，加入列表", a);
                            var l = o(i),
                                u = l.getComponent(g);
                            u.PosID = a, n.node.addChild(l), t.userNodes.push(l), u.initData(e)
                        }
                    }))
                }, i.findUserIndexBySeatId = function(e) {
                    for (var t = -1, n = null, i = null, a = 0; a < (null == (o = this.userNodes) ? void 0 : o.length); a++) {
                        var o, r, s;
                        if ((i = this.userNodes[a]) && i.isValid && (n = i.getComponent(g), console.log("头像节点--------findUserIndexBySeatId 查找头像节点上的座位号：", null == (r = n) ? void 0 : r.PosID), (null == (s = n) ? void 0 : s.PosID) === e)) {
                            t = a;
                            break
                        }
                    }
                    return t
                }, i.playVoice = function(e, t) {
                    if (console.log("播放语音的时候设置层级", t), t && t.mid) {
                        for (var n = [], i = 0; i < this.userNodes.length; i++) {
                            var a = this.userNodes[i];
                            a && a.isValid ? (n.push(a), a.getComponent(g).UID === t.mid && (console.log("播放语音的时候设置层级  111", t.mid), a.setSiblingIndex(4))) : console.log("55555555555555555555555555555")
                        }
                        this.userNodes = n
                    }
                }, i.onGiveUp = function(e, t, n) {
                    var i, a = this;
                    (null == t || null == (i = t.seatIdList) ? void 0 : i.length) > 0 && (null == t || t.seatIdList.forEach((function(e) {
                        for (var t = 0; t < a.userNodes.length; t++) {
                            var i = a.userNodes[t];
                            if (i && i.isValid) {
                                var o = i.getComponent(g);
                                if (o && o.getSeatId() === e) {
                                    o.onGiveUp(n);
                                    break
                                }
                            }
                        }
                    })))
                }, i.onGiveUpResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            if (a && a.getSeatId() === t.seatId) {
                                a.onGiveUpResult(t);
                                break
                            }
                        }
                    }
                }, i.onDingQueOptions = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        i && i.isValid && i.getComponent(g).onUpdateOptionTips({
                            tag: "show_dingque"
                        })
                    }
                }, i.onDingQueOptionsResult = function(e, t) {
                    if (null != (null == t ? void 0 : t.seatId))
                        for (var n = 0; n < this.userNodes.length; n++) {
                            var i = this.userNodes[n];
                            if (i && i.isValid) {
                                var a = i.getComponent(g);
                                a && a.getSeatId() === t.seatId && a.onDingQueOptionsResult(t)
                            }
                        }
                }, i.onAllDingQueOptionsResult = function(e) {
                    var t = this,
                        n = c.getInstance().dingQueResult;
                    if (r.table_isEmpty(n))
                        for (var i = 0; i < this.userNodes.length; i++) {
                            var a = this.userNodes[i];
                            if (a && a.isValid) {
                                var o = a.getComponent(g);
                                null == o || o.onUpdateOptionTips({
                                    tag: "reset_dingque"
                                })
                            }
                        } else Object.keys(n).forEach((function(e) {
                            for (var i = 0; i < t.userNodes.length; i++) {
                                var a = t.userNodes[i];
                                if (a && a.isValid) {
                                    var o, r = a.getComponent(g);
                                    r && r.getSeatId() === (null == (o = n[e]) ? void 0 : o.seatId) && r.onDingQueOptionsResult(n[e])
                                }
                            }
                        }))
                }, i.onGameRealTimeHuInfo = function(e, t) {
                    this.doGameCompFun("onNodeUserGameRealTimeHuInfo", this.userNodes, t)
                }, i.onStartHuanSanZhang = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        i && i.isValid && i.getComponent(g).onUpdateOptionTips({
                            tag: "show_hsz"
                        })
                    }
                }, i.onOneHuanSanZhangResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            if ((null == a ? void 0 : a.getSeatId()) == t.seatId) {
                                a.onUpdateOptionTips({
                                    tag: "hide"
                                });
                                break
                            }
                        }
                    }
                }, i.onAllHuanSanZhangResult = function(e, t) {
                    this.onOneHuanSanZhangResult(e, t)
                }, i.onReconnectSuccess = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            null == n || n.onReconnectSuccess(), c.getInstance().isMySelfSeat(null == n ? void 0 : n.getSeatId()) && (null == n || n.cleanDepositStatus())
                        }
                    }
                    this.onAllDingQueOptionsResult(null)
                }, i.playerReady = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            a && c.getInstance().isMySelfByUserId(t) && (null == a || a.resetUserStatus()), null == a || a.playerReady(e, t)
                        }
                    }
                }, i.viewUserMaiDuanMenOptions = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            a && (c.getInstance().isMySelfSeat(t.seatId) || null == a || a.onUpdateOptionTips({
                                tag: "maiduanmen",
                                info: t
                            }))
                        }
                    }
                }, i.viewUserMaiDuanMenOptionsResult = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            a && (null == a || a.onUpdateOptionTips({
                                tag: "hide",
                                info: t
                            }), null == a || a.onUpdateOptionTips({
                                tag: "maiduanmen_reslut",
                                info: t
                            }))
                        }
                    }
                }, i.broadcastWaitOperation = function(e, t) {
                    if (this.doGameCompFun("checkBroadcastWaitOperation"))
                        for (var n = 0; n < this.userNodes.length; n++) {
                            var i = this.userNodes[n];
                            if (i && i.isValid) {
                                var a = i.getComponent(g);
                                if (a && c.getInstance().isMySelfSeat(null == a ? void 0 : a.getSeatId())) {
                                    null == a || a.onUpdateOptionTips({
                                        tag: "wait_operation",
                                        info: t
                                    });
                                    break
                                }
                            }
                        }
                }, i.hideWaitingOperation = function(e) {
                    for (var t = 0; t < this.userNodes.length; t++) {
                        var n = this.userNodes[t];
                        if (n && n.isValid) {
                            var i = n.getComponent(g);
                            i && null != i && i.isWaitingToOperation() && (null == i || i.onUpdateOptionTips({
                                tag: "wait_operation_over",
                                info: e
                            }))
                        }
                    }
                }, i.onUpdatePrivateRoomRoundsInfo = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            n && n.checkChangeBtn()
                        }
                    }
                }, i.notifyOperation = function(e) {
                    for (var t = 0; t < this.userNodes.length; t++) {
                        var n = this.userNodes[t];
                        if (n && n.isValid) {
                            var i = n.getComponent(g);
                            i && i.getSeatId() == (null == e ? void 0 : e.seatId) && (null == i || i.onOperationResult(e)), i.onOperationResultCheckTips(e)
                        }
                    }
                }, i.onUserGrabCard = function(e, t) {
                    this.hideWaitingOperation(t)
                }, i.onUserOperation = function(e, t) {
                    this.hideWaitingOperation(t)
                }, i.onOperationResult = function(e, t) {
                    this.notifyOperation(t)
                }, i.onDismissGame = function() {
                    for (var e = 0; e < this.userNodes.length; e++) {
                        var t = this.userNodes[e];
                        if (t && t.isValid) {
                            var n = t.getComponent(g);
                            n && (null == n || n.onUpdateOptionTips({
                                tag: "hide"
                            }))
                        }
                    }
                }, i.onBroadcastGenZhuang = function() {
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
                }, i.onShowOptionTips = function(e, t) {
                    for (var n = 0; n < this.userNodes.length; n++) {
                        var i = this.userNodes[n];
                        if (i && i.isValid) {
                            var a = i.getComponent(g);
                            a && a.UID == (null == t ? void 0 : t.userId) && (null == a || a.onUpdateOptionTips(t))
                        }
                    }
                }, i.onUpdatePrivateRoomInfo = function() {
                    if (s.PrivateData.isTwoPlayerModule())
                        for (var e = 0; e < this.userNodes.length; e++) {
                            var t = this.userNodes[e];
                            if (t && t.isValid) {
                                var n = t.getComponent(g);
                                n && n.updatePos()
                            }
                        }
                }, n
            }(u)) || m) || m), n._RF.pop()
        }
    }
}))