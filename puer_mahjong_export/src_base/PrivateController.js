System.register("chunks:///_virtual/PrivateController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameTxt.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameTxt
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.GConstants
        }, function(e) {
            l = e.UIID
        }, function(e) {
            u = e.Encrypt
        }, function(e) {
            d = e.inf_GameSceneType, _ = e.inf_PrivateRoomSearchType
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.BaseController
        }, function(e) {
            f = e.GlobalCmdHeadPHP, m = e.GlobalCmdHead
        }, function(e) {
            g = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "3338cqCZCxN5qxPPlfHJjmB", "PrivateController", void 0), e("PrivateController", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, t) || this)._searchInfo = null, i._share_info = {}, i._voicePlayStatus = !1, i
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("PrivateController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var p = i.prototype;
                return p.onInitModuleEvent = function() {
                    this.addModelListener(s.NET_REQ_PRIVATE_ROOM_CONFIG, this.reqPrivateRoomConfig), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_CONFIG, this.respPrivateRoomConfig), this.addModelListener(s.NET_REQ_GAME_RECORD_LIST, this.reqGameRecordList), this.addModelListener(s.NET_RESP_GAME_RECORD_LIST, this.respGameRecordList, 1), this.addModelListener(s.NET_REQ_PRIVATE_ROOM_RECORD_LIST, this.reqPrivateRoomRecordList), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_RECORD_LIST, this.respPrivateRoomRecordList, 1), this.addModelListener(s.NET_REQ_PRIVATE_ROOM_RECORD_DETAIL, this.reqPrivateRoomRecordDetail), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_RECORD_DETAIL, this.respPrivateRoomRecordDetail), this.addModelListener(s.NET_REQ_PRIVATE_ROOM_RECORD_SCORE, this.reqPrivateRoomRecordScore), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_RECORD_SCORE, this.respPrivateRoomRecordScore), this.addModelListener(s.NET_REQ_CREATE_PRIVATE_ROOM, this.reqCreatePrivateRoom), this.addModelListener(s.NET_REQ_ENTER_PRIVATE_ROOM, this.reqEnterPrivateRoom), this.addModelListener(s.NET_REQ_SEARCH_PRIVATE_ROOM, this.reqSearchPrivateRoom), this.addModelListener(s.NET_RESP_SEARCH_PRIVATE_ROOM, this.respSearchPrivateRoom), this.addModelListener(s.BROADCAST_PRIVATE_ROOM_CONFIG, this.broadcastPrivateRoomConfig), this.addModelListener(s.BROADCAST_PRIVATE_ROOM_INFO, this.broadcastPrivateRoomInfo), this.addModelListener(s.BROADCAST_PRIVATE_ROOM_MASTER_INFO, this.broadcastPrivateRoomMasterInfo), this.addModelListener(s.BROADCAST_PRIVATE_ROOM_KICK_USER, this.broadcastPrivateRoomKickUser), this.addModelListener(s.NOTIFY_PRIVATE_ROOM_BE_KICK_USER, this.notifyPrivateRoomBeKickUser), this.addModelListener(s.NET_REQ_PRIVATE_ROOM_INVITE, this.reqPrivateRoomInvite), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_INVITE, this.respPrivateRoomInvite), this.addModelListener(s.NET_REQ_PRIVATE_ROOM_INVITE_BROADCAST, this.reqPrivateRoomInviteBroadcast), this.addModelListener(s.NET_RESP_PRIVATE_ROOM_INVITE_BROADCAST, this.respPrivateRoomInviteBroadcast), this.addModelListener(s.NOTIFY_CHAT_VOICE, this.getChatVoice), this.addModelListener(s.CHAT_VOICE_PLAY_START, this.voicePlayStart), this.addModelListener(s.CHAT_VOICE_PLAY_END, this.voicePlayEnd), this.addModelListener(s.CHAT_VOICE_LIST_EMPTY, this.voiceListEmpty), this.addModelListener(s.CHAT_VOICE_RESET_PLAY_STATUS, this.resetPlayStatus)
                }, p.reqPrivateRoomConfig = function(e) {
                    if (!r.PrivateData.getPrivateRoomConfig()) {
                        var t = {
                            cmd: f.PHP_PRIVATE_ROOM_CONFIG,
                            body: {
                                hall_version: n.HallVer,
                                cli_ver: -1,
                                the_two: 1
                            }
                        };
                        this.print("请求私人房配置", t), h.dispatch(s.NET_SEND_MSG, t)
                    }
                }, p.respPrivateRoomConfig = function(e, t, i, n) {
                    if (this.print("请求私人房配置返回", i, t, n), t) {
                        if (o.isNull(i.data)) return;
                        var a = i.data;
                        r.PrivateData.updatePrivateRoomConfig(a), h.dispatch(s.UPDATE_PRIVATE_ROOM_CONFIG)
                    }
                }, p.reqGameRecordList = function(e, t) {
                    var i = o.number_valueOf(null == t ? void 0 : t.gameId);
                    if (n.deviceInfo.isMJCollection) {
                        var a = r.PrivateData.getGameRecordList(i);
                        if (!o.table_isEmpty(a)) return
                    } else i = r.PrivateData.checkGameRecordList(t);
                    if (o.isNotNull(i)) {
                        var c = {
                            cmd: f.PHP_GAME_RECORD_DETAIL,
                            body: {
                                end_time: 0,
                                gameId: i
                            }
                        };
                        this.print("请求银币场记录列表", c), h.dispatch(s.NET_SEND_MSG, c)
                    }
                }, p.respGameRecordList = function(e, t, i, n) {
                    this.print("请求银币场记录列表返回", i, t, n), t && r.PrivateData.updateGameRecordList(n.gameId, i)
                }, p.reqPrivateRoomRecordList = function(e, t) {
                    var i = o.number_valueOf(null == t ? void 0 : t.gameId);
                    if (n.deviceInfo.isMJCollection) {
                        var a = r.PrivateData.getPriveteRecordList(i);
                        if (!o.table_isEmpty(a)) return
                    } else i = r.PrivateData.checkPrivateRecordList(t);
                    if (o.isNotNull(i)) {
                        var c = {
                            cmd: f.PHP_PRIVATE_ROOM_RECORD_LIST,
                            body: {
                                end_time: 0,
                                gameId: i
                            }
                        };
                        this.print("请求私人房约牌记录列表", c), h.dispatch(s.NET_SEND_MSG, c)
                    }
                }, p.respPrivateRoomRecordList = function(e, t, i, n) {
                    this.print("请求私人房约牌记录列表返回", i, t, n), t && r.PrivateData.updatePrivateRecordList(n.gameId, i)
                }, p.reqPrivateRoomRecordDetail = function(e, t) {
                    this._share_info = t;
                    var i = {
                        cmd: f.PHP_PRIVATE_ROOM_RECORD_DETAIL,
                        body: {
                            table_key: t.tableKey
                        }
                    };
                    this.print("请求私人房约牌记录详情", i), h.dispatch(s.NET_SEND_MSG, i)
                }, p.respPrivateRoomRecordDetail = function(e, t, i, n) {
                    if (this.print("请求私人房约牌记录详情返回", i, t, n, this._share_info), r.WxShareData.updateShareStatus(c.ShareType.Record, 0), t) {
                        var u = o.table_verify(i);
                        r.PrivateData.updatePrivatePokerInfo(u), this._share_info && this._share_info.from && ("hall" == this._share_info.from ? g.getInstance().onOpenView("", l.PrivatePokerInfoPrefab, {
                            from: this._share_info.from
                        }) : "game" == this._share_info.from && g.getInstance().onOpenView("", l.PrivateSettlePrefab, null, {}))
                    } else 8001 == i.errorType ? h.dispatch(s.SYS_TOAST_TIP, {
                        content: a.private_room_record_fail || "error"
                    }) : h.dispatch(s.SYS_TOAST_TIP, {
                        content: i.errorTips || "error"
                    });
                    this._share_info = null
                }, p.reqPrivateRoomRecordScore = function(e, t) {
                    var i = o.number_valueOf(null == t ? void 0 : t.gameId),
                        n = r.PrivateData.getPriveteRecordScore(i);
                    if (o.table_isEmpty(n)) {
                        var a = {
                            cmd: f.PHP_PRIVATE_ROOM_RECORD_SCORE,
                            body: {
                                game_id: i
                            }
                        };
                        this.print("请求私人房约牌记录积分", a), h.dispatch(s.NET_SEND_MSG, a)
                    }
                }, p.respPrivateRoomRecordScore = function(e, t, i, n) {
                    this.print("请求私人房约牌记录积分返回", i, t, n), t && r.PrivateData.updatePrivateRecordScore(n.game_id, i)
                }, p.reqCreatePrivateRoom = function(e, t, i) {
                    if (console.log("请求创建私人房", i), !o.isNull(i)) {
                        var n = {
                            gameId: 0,
                            tableId: 0,
                            tableIdLong: 0,
                            serverId: 0,
                            tableType: 0,
                            roomLevel: 0,
                            userCount_on: 0,
                            userCount_max: 0,
                            requireMoney: 0,
                            baseChip: 0,
                            isCanEscape: !1,
                            times: 0,
                            rounds: 0,
                            param: "",
                            creator: 0
                        };
                        for (var a in i) o.isNotNull(n[a]) && (n[a] = i[a]);
                        o.isNull(i.playType) || (n.playType = i.playType), n.gameId = t, n.tableType = c.PrivateTableType.Score, n.roomLevel = r.PrivateData.getPrivateRoomLevelByTableType(n.tableType), i.DIYIds.includes(c.GameTwoPlayerRuleId) && (i.numFlag = 2), n.creator = r.User.getUserMid(), n.param = u.JsonEncode(i), console.log("请求创建私人房", n), r.PrivateData.setLastCreateParam(n.gameId, n.param), r.PrivateData.setPrivateRoomData(n), r.SelectGame.checkIntoPrivateRoom(t, n, d.Private)
                    }
                }, p.reqEnterPrivateRoom = function(e, t, i) {
                    console.log("请求进入私人房", t), o.isNull(t) || (r.PrivateData.setPrivateRoomData(t), r.SelectGame.checkIntoPrivateRoom(t.gameId, t, i))
                }, p.reqSearchPrivateRoom = function(e, t) {
                    this._searchInfo = t;
                    var i = {
                        cmd: m.SEARCH_PRIVATE_ROOM_REQUEST,
                        body: {
                            tableId: t.searchKeyword
                        }
                    };
                    h.dispatch(s.NET_SEND_MSG, i)
                }, p.respSearchPrivateRoom = function(e, t) {
                    var i, n, p;
                    if (void 0 === t && (t = null), console.log("分享----请求搜索私人房返回respData=", t, "--this._searchInfo=", this._searchInfo), r.WxShareData.updateShareStatus(c.ShareType.Invite, 0), (null == (i = this._searchInfo) ? void 0 : i.searchType) == _.Join) {
                        var f = null,
                            m = "",
                            E = 0;
                        if (o.table_isEmpty(t)) m = a.private_search_room_empty;
                        else {
                            E = (f = t[0]).gameId, f.roomLevel = r.PrivateData.getPrivateRoomLevelByTableType(f.tableType);
                            var v = u.JsonDecode(f.param);
                            2 == (null == v ? void 0 : v.numFlag) && (f.userCount_max = 2), f.userCount_on >= f.userCount_max && (m = a.private_search_room_full)
                        }
                        if (0 == E || r.PrivateData.checkGameIdSupport(E) || (m = "您申请加入的游戏，暂未在本应用上线哦"), o.string_isEmpty(m)) h.dispatch(s.UPDATE_SEARCH_PRIVATE_ROOM, f);
                        else {
                            h.dispatch(s.UPDATE_SEARCH_PRIVATE_ROOM, null);
                            var T = {
                                txt_desc: m,
                                alignLeftTop: !1,
                                notshowClose: !1,
                                buttonsMap: [{}],
                                title: ""
                            };
                            g.getInstance().onOpenView("", l.PopWindow, T)
                        }
                    } else if ((null == (n = this._searchInfo) ? void 0 : n.searchType) == _.Game) {
                        if (!o.table_isEmpty(t)) {
                            var R = t[0];
                            R.roomLevel = r.PrivateData.getPrivateRoomLevelByTableType(R.tableType), r.PrivateData.setPrivateRoomData(R)
                        }
                    } else if ((null == (p = this._searchInfo) ? void 0 : p.searchType) == _.Invite) {
                        console.log("分享----请求搜索私人房返回--------2");
                        var P = null,
                            y = "";
                        if (o.table_isEmpty(t) || ((P = t[0]).roomLevel = r.PrivateData.getPrivateRoomLevelByTableType(P.tableType), P.userCount_on >= P.userCount_max && (y = a.private_search_room_full)), o.string_isEmpty(y)) o.isNull(P) ? h.dispatch(s.RESET_PRIVATE_ROOM_INVITE) : this.reqEnterPrivateRoom(s.NET_REQ_ENTER_PRIVATE_ROOM, P, d.Hall);
                        else {
                            var C = {
                                txt_desc: y,
                                notshowClose: !0,
                                alignLeftTop: !1,
                                buttonsMap: [{
                                    label: c.BtnConf.Label_Confirm,
                                    click: function() {
                                        h.dispatch(s.RESET_PRIVATE_ROOM_INVITE)
                                    }
                                }]
                            };
                            g.getInstance().onOpenView("", l.PopWindow, C)
                        }
                    }
                }, p.broadcastPrivateRoomConfig = function(e, t) {
                    void 0 === t && (t = null), console.log("广播私人房房间配置", t), r.PrivateData.setPrivateRoomTalbeConfig(t)
                }, p.broadcastPrivateRoomInfo = function(e, t) {
                    void 0 === t && (t = null), console.log("广播私人房房间信息", t), r.PrivateData.setPrivateRoomTalbeInfo(t);
                    var i = r.PrivateData.getPrivateRoomData();
                    o.isNotNull(i) && (i.tableId = t.tableId, i.tableIdLong = t.tableIdLong, i.isCanEscape = t.isCanEscape);
                    var n = {
                        searchType: _.Game,
                        searchKeyword: String(t.tableId)
                    };
                    if (i && null != i.creator && r.User.getUserMid() == i.creator) {
                        var a = r.PrivateData.getPrivateRoomInviteUserIdList();
                        if (!o.table_isEmpty(a)) {
                            var c = r.PrivateData.getPrivateRoomInviteInfoKey(),
                                l = r.PrivateData.getPrivateRoomInviteUserIdList(r.User.getUserMid());
                            if (!o.table_isEmpty(l)) {
                                var u = {
                                    mid: r.User.getUserMid(),
                                    operate: "start",
                                    param: {
                                        tableId: t.tableId
                                    }
                                };
                                this.reqPrivateRoomInviteBroadcast(null, c, l, u)
                            }
                            var d = r.PrivateData.getPrivateRoomInviteRoomInfo();
                            d && (d.tableId = t.tableId, this.reqPrivateRoomInvite(null, c, "setCom", d))
                        }
                    }
                    this.reqSearchPrivateRoom(null, n), h.dispatch(s.UPDATE_PRIVATE_ROOM_TABLE_INFO, t)
                }, p.broadcastPrivateRoomMasterInfo = function(e, t) {
                    void 0 === t && (t = null), console.log("广播私人房房主信息", t), r.PrivateData.setPrivateRoomMasterInfo(t), 0 == t.reconnectFlag && t.userId == r.User.getUserMid() && r.PrivateData.getPrivateRoomData().creator != r.User.getUserMid() && h.dispatch(s.SYS_TOAST_TIP, {
                        content: "恭喜你成为房主，获得房主权限！"
                    }), h.dispatch(s.UPDATE_PRIVATE_ROOM_MASTER_INFO, t)
                }, p.broadcastPrivateRoomKickUser = function(e, t) {
                    void 0 === t && (t = null), console.log("广播私人房踢人", t);
                    var i = "";
                    if (0 == t.errorcode) {
                        var n = r.User.getUserMid();
                        i = t.sUid == n ? o.string_format(a.private_room_user_kick, t.tName) : t.tUid == n ? o.string_format(a.private_room_user_be_kick, t.sName) : o.string_format(a.private_room_kick, t.sName, t.tName)
                    } else i = 1 == t.errorcode ? a.private_room_kick_user_exit : 2 == t.errorcode ? a.private_room_kick_has_playing : 3 == t.errorcode ? a.private_room_kick_is_not_master : a.private_room_kick_fail;
                    h.dispatch(s.SYS_TOAST_TIP, {
                        content: i
                    })
                }, p.notifyPrivateRoomBeKickUser = function(e, t) {
                    void 0 === t && (t = null), console.log("通知私人房被提出", t);
                    var i = r.User.getUserMid();
                    if (t.tUid == i) {
                        var n = o.string_format(a.private_room_user_be_kick, t.sName);
                        h.dispatch(s.SYS_TOAST_TIP, {
                            content: n
                        })
                    }
                }, p.reqPrivateRoomInvite = function(e, t, i, n, a) {
                    void 0 === n && (n = null);
                    var c = null;
                    if ("getRoomInfo" == i) c = {
                        cmd: f.PHP_PRIVATE_ROOM_INVITE,
                        body: {
                            op: i,
                            joinRoomCode: t,
                            param: n
                        }
                    };
                    else if ("clear" == i) c = {
                        cmd: f.PHP_PRIVATE_ROOM_INVITE,
                        body: {
                            op: i,
                            joinRoomCode: t
                        }
                    };
                    else if ("add" == i) {
                        var l = {
                                mid: r.User.getUserMid(),
                                operate: i,
                                param: {}
                            },
                            d = r.PrivateData.getPrivateRoomInviteUserIdList();
                        c = o.table_isEmpty(d) ? {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t,
                                param: u.JsonEncode(n),
                                bc: {
                                    content: u.JsonEncode(l),
                                    to: [r.User.getUserMid()]
                                }
                            }
                        } : {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t,
                                param: u.JsonEncode(n),
                                bc: {
                                    content: u.JsonEncode(l),
                                    to: d
                                }
                            }
                        }
                    } else if ("leave" == i) {
                        var _ = r.PrivateData.getPrivateRoomInviteUserIdList(r.User.getUserMid());
                        if (o.table_isEmpty(_)) c = {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t
                            }
                        };
                        else {
                            var p = {
                                mid: r.User.getUserMid(),
                                operate: i,
                                param: {}
                            };
                            c = {
                                cmd: f.PHP_PRIVATE_ROOM_INVITE,
                                body: {
                                    op: i,
                                    joinRoomCode: t,
                                    bc: {
                                        content: u.JsonEncode(p),
                                        to: _
                                    }
                                }
                            }
                        }
                    } else if ("kick" == i) {
                        var m = r.PrivateData.getPrivateRoomInviteUserIdList();
                        c = o.table_isEmpty(m) ? {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t,
                                kickMid: n.param.midT || 0
                            }
                        } : {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t,
                                kickMid: n.param.midT || 0,
                                bc: {
                                    content: u.JsonEncode(n),
                                    to: m
                                }
                            }
                        }
                    } else if ("setCom" == i) {
                        var g = r.PrivateData.getPrivateRoomInviteUserIdList();
                        if (o.table_isEmpty(g)) c = {
                            cmd: f.PHP_PRIVATE_ROOM_INVITE,
                            body: {
                                op: i,
                                joinRoomCode: t,
                                param: u.JsonEncode(n)
                            }
                        };
                        else {
                            var E = {
                                mid: r.User.getUserMid(),
                                operate: i,
                                param: {}
                            };
                            c = {
                                cmd: f.PHP_PRIVATE_ROOM_INVITE,
                                body: {
                                    op: i,
                                    joinRoomCode: t,
                                    param: u.JsonEncode(n),
                                    bc: {
                                        content: u.JsonEncode(E),
                                        to: g
                                    }
                                }
                            }
                        }
                    }
                    this.print("请求私人房邀请", c), h.dispatch(s.NET_SEND_MSG, c)
                }, p.respPrivateRoomInvite = function(e, t, i, n) {
                    if (this.print("分享---请求私人房邀请返回", i, t, n), r.WxShareData.updateShareStatus(c.ShareType.InviteFast, 0), t) {
                        var a = n.op || "";
                        if ("getRoomInfo" == a)
                            if (o.table_isEmpty(i)) r.PrivateData.initPrivateRoomInviteInfo(), h.dispatch(s.JUMP_HALL_MAIN_VIEW, "private");
                            else {
                                var l = {
                                    key: n.joinRoomCode,
                                    data: i,
                                    param: n.param
                                };
                                r.PrivateData.updateInviteInfo(l), h.dispatch(s.JUMP_HALL_MAIN_VIEW, "private", l)
                            }
                        else {
                            if (r.PrivateData.getPrivateRoomInviteInfoKey() != n.joinRoomCode) return void console.log("请求私人房邀请返回异常", "joinRoomCode不匹配");
                            if ("add" == a) {
                                if (i && 1 == i) {
                                    var d = o.number_valueOf(n.mid),
                                        _ = u.JsonDecode(n.param);
                                    r.PrivateData.addPrivateRoomInviteInfo(d, _), h.dispatch(s.UPDATE_PRIVATE_ROOM_INVITE, n)
                                }
                            } else if ("leave" == a) {
                                if (i && 1 == i) {
                                    var p = o.number_valueOf(n.mid);
                                    r.PrivateData.removePrivateRoomInviteInfo(p), h.dispatch(s.UPDATE_PRIVATE_ROOM_INVITE, n)
                                }
                            } else "kick" == a || "clear" == a && r.PrivateData.clearPrivateRoomInviteInfo()
                        }
                    }
                }, p.reqPrivateRoomInviteBroadcast = function(e, t, i, n) {
                    var a = {
                        cmd: f.PHP_PRIVATE_ROOM_INVITE_BROADCAST,
                        body: {
                            joinRoomCode: t,
                            content: u.JsonEncode(n),
                            to: i
                        }
                    };
                    this.print("请求私人房邀请广播", a), h.dispatch(s.NET_SEND_MSG, a)
                }, p.respPrivateRoomInviteBroadcast = function(e, t, i, n) {
                    this.print("请求私人房邀请广播返回", i, t, n)
                }, p.receivePrivateRoonInviteBroadcast = function(e) {
                    if (this.print("私人房推送", e), !o.isNull(e)) {
                        var t = e.joinRoomCode;
                        if (r.PrivateData.getPrivateRoomInviteInfoKey() == t) {
                            var i = e.room,
                                n = e.content,
                                a = o.table_verify(u.JsonDecode(n));
                            h.dispatch(s.UPDATE_PRIVATE_ROOM_INVITE_BROADCAST, t, i, a), "quickMsg" != (null == a ? void 0 : a.operate) && "emoji" != (null == a ? void 0 : a.operate) || h.dispatch(s.NOTIFY_PRIVATE_CHATMSG_STATUS, {
                                tag: "receive"
                            })
                        } else console.log("私人房广播推送异常", "joinRoomCode不匹配")
                    }
                }, p.getChatVoice = function(e, t) {
                    console.log("收到php私人房语音广播推送", t), r.PrivateData.setPrivateRoomChatVoiceList(t), h.dispatch(s.NOTIFY_PRIVATE_CHATMSG_STATUS, {
                        tag: "receive"
                    }), this._voicePlayStatus || this.dealVoiceList()
                }, p.dealVoiceList = function() {
                    var e = r.PrivateData.shiftPrivateRoomChatVoiceList();
                    e ? (console.log("录音voice", e.mid == r.User.getUserMid()), this.voicePlayStart(null, e)) : (console.log("全部语音播放完毕"), h.dispatch(s.CHAT_VOICE_LIST_EMPTY))
                }, p.voicePlayStart = function(e, t) {
                    console.log("开始播放语音", t), this._voicePlayStatus = !0, t && (console.log("开始播放语音11111", t), h.dispatch(s.CHAT_VOICE_PLAY_START_NEW, t))
                }, p.stopPlayVoice = function() {
                    this._voicePlayStatus = !1
                }, p.voicePlayEnd = function() {
                    this.dealVoiceList()
                }, p.voiceListEmpty = function() {
                    this._voicePlayStatus = !1, r.PrivateData.clearPrivateRoomChatVoiceList(), console.log("语音   全部语音播放完成", this._voicePlayStatus)
                }, p.resetPlayStatus = function() {
                    this.voiceListEmpty(), r.PrivateData.clearChatHistoryData(), console.log("语音   重设播放状态", this._voicePlayStatus)
                }, i
            }(p))._instance = null, i._RF.pop()
        }
    }
}))