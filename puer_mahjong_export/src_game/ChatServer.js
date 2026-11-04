System.register("chunks:///_virtual/ChatServer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseController.ts", "./FXJCmd.ts", "./FXJConstant.ts", "./FXJEvent.ts", "./GameEvent.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createClass
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.Encrypt
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.FXJCmdHead
        }, function(e) {
            c = e.FXJConstant
        }, function(e) {
            h = e.FXJEvent
        }, function(e) {
            p = e.GameEvent
        }],
        execute: function() {
            i._RF.push({}, "6acf0InGUlN66HdbVJqkN81", "ChatServer", void 0), e("ChatServer", function(e) {
                function i(t) {
                    var n;
                    return void 0 === t && (t = null), (n = e.call(this, t) || this)._handlerCanSendChat = null, n._handlerCanSendInterProp = null, n._handlerCanSendEmoji = null, n
                }
                t(i, e);
                var u = i.prototype;
                return u.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_REQ_GAME_USER_CHAT, this.reqGameChatMsg), this.addModelListener(r.NET_REQ_GAME_USER_FACE, this.reqGameChatEmoji), this.addModelListener(h.GAME_REQ_EMOJI_PROPS_MSG, this.reqGameEmojiProps)
                }, u.reqGameChatMsg = function(e, t) {
                    if (t = a.table_verify(t), !a.isNull(t.text))
                        if (null == this._handlerCanSendChat) {
                            var n = o.User.getUserSex(),
                                i = {
                                    index: t.index,
                                    msg: t.text,
                                    sex: n
                                },
                                s = {
                                    cmd: d.C2S.ROOM_USER_CHAT,
                                    body: i
                                };
                            l.dispatch(h.NET_SEND_MSG, s), i.mid = o.User.getUserMid(), l.dispatch(h.VIEW_PLAYER_CHAT_SHOW, i), l.dispatch(r.ROOM_VIEW_PLAYER_CHAT_SHOW, i), this.stopScheduler(this._handlerCanSendChat);
                            var u = this;
                            this._handlerCanSendChat = this.addScheduler(c.QuickChatDelay, (function() {
                                u.stopScheduler(u._handlerCanSendChat), u._handlerCanSendChat = null
                            }))
                        } else l.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, u.reqGameChatEmoji = function(e, t, n) {
                    if (null != n)
                        if (null == this._handlerCanSendEmoji) {
                            var i = {
                                    vipType: 1,
                                    faceValue: parseInt(n) + Math.pow(2, 16)
                                },
                                a = {
                                    cmd: d.C2S.ROOM_USER_FACE,
                                    body: i
                                };
                            l.dispatch(h.NET_SEND_MSG, a), i.mid = o.User.getUserMid(), l.dispatch(p.VIEW_PLAYER_EMOJ_SHOW, i);
                            var s = {
                                index: i.faceValue - Math.pow(2, 16),
                                mid: i.mid
                            };
                            l.dispatch(r.ROOM_VIEW_PLAYER_EMOJ_SHOW, s), this.stopScheduler(this._handlerCanSendEmoji);
                            var u = this;
                            this._handlerCanSendEmoji = this.addScheduler(c.QuickChatDelay, (function() {
                                u.stopScheduler(u._handlerCanSendEmoji), u._handlerCanSendEmoji = null
                            }))
                        } else l.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, u.receiveGameChatMsg = function() {}, u.reqGameEmojiProps = function(e, t, n) {
                    var i = a.number_valueOf(n.num, 1),
                        o = s.JsonEncode(n || {});
                    if (null != t && null != n)
                        if (null == this._handlerCanSendInterProp) {
                            var r = {
                                    index: t,
                                    msg: o
                                },
                                u = {
                                    cmd: d.C2S.ROOM_USER_CHAT,
                                    body: r
                                };
                            console.log("reqGameEmojiProps", u), l.dispatch(h.NET_SEND_MSG, u);
                            var p = s.JsonDecode(o),
                                f = {
                                    uid: p.from,
                                    prop_id: t,
                                    to_uid: p.to
                                };
                            console.log("reqGameEmojiProps1", f);
                            for (var _ = 0; _ < i; _++) this.addSchedulerOnce(.5 * _, (function() {
                                l.dispatch(h.VIEW_DESK_ANI_PLAY, c.AnimNormal.HudongProp, f)
                            }));
                            this.stopScheduler(this._handlerCanSendInterProp);
                            var g = this;
                            this._handlerCanSendInterProp = this.addScheduler(c.QuickChatDelay, (function() {
                                g.stopScheduler(g._handlerCanSendInterProp), g._handlerCanSendInterProp = null
                            }))
                        } else l.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, n(i, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new i("ChatServer")), this._instance
                    }
                }]), i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))