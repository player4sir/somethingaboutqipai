System.register("chunks:///_virtual/ChatServer3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseController.ts", "./FXJCmd3.ts", "./FXJConstant3.ts", "./FXJEvent3.ts", "./GameEvent6.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, n = e.createClass
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            i = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.Encrypt
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            l = e.BaseController
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
            a._RF.push({}, "26e88ZySXxLzIX/TpTY7awC", "ChatServer", void 0), e("ChatServer", function(e) {
                function a(t) {
                    var n;
                    return void 0 === t && (t = null), (n = e.call(this, t) || this)._handlerCanSendChat = null, n._handlerCanSendInterProp = null, n._handlerCanSendEmoji = null, n
                }
                t(a, e);
                var l = a.prototype;
                return l.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_REQ_GAME_USER_CHAT, this.reqGameChatMsg), this.addModelListener(r.NET_REQ_GAME_USER_FACE, this.reqGameChatEmoji), this.addModelListener(h.GAME_REQ_EMOJI_PROPS_MSG, this.reqGameEmojiProps)
                }, l.reqGameChatMsg = function(e, t) {
                    if (t = i.table_verify(t), !i.isNull(t.text))
                        if (null == this._handlerCanSendChat) {
                            var n = o.User.getUserSex(),
                                a = {
                                    index: t.index,
                                    msg: t.text,
                                    sex: n
                                },
                                s = {
                                    cmd: d.C2S.ROOM_USER_CHAT,
                                    body: a
                                };
                            u.dispatch(h.NET_SEND_MSG, s), a.mid = o.User.getUserMid(), u.dispatch(h.VIEW_PLAYER_CHAT_SHOW, a), u.dispatch(r.ROOM_VIEW_PLAYER_CHAT_SHOW, a), this.stopScheduler(this._handlerCanSendChat);
                            var l = this;
                            this._handlerCanSendChat = this.addScheduler(c.QuickChatDelay, (function() {
                                l.stopScheduler(l._handlerCanSendChat), l._handlerCanSendChat = null
                            }))
                        } else u.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, l.reqGameChatEmoji = function(e, t, n) {
                    if (null != n)
                        if (null == this._handlerCanSendEmoji) {
                            var a = {
                                    vipType: 1,
                                    faceValue: parseInt(n) + Math.pow(2, 16)
                                },
                                i = {
                                    cmd: d.C2S.ROOM_USER_FACE,
                                    body: a
                                };
                            u.dispatch(h.NET_SEND_MSG, i), a.mid = o.User.getUserMid(), u.dispatch(p.VIEW_PLAYER_EMOJ_SHOW, a);
                            var s = {
                                index: a.faceValue - Math.pow(2, 16),
                                mid: a.mid
                            };
                            u.dispatch(r.ROOM_VIEW_PLAYER_EMOJ_SHOW, s), this.stopScheduler(this._handlerCanSendEmoji);
                            var l = this;
                            this._handlerCanSendEmoji = this.addScheduler(c.QuickChatDelay, (function() {
                                l.stopScheduler(l._handlerCanSendEmoji), l._handlerCanSendEmoji = null
                            }))
                        } else u.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, l.receiveGameChatMsg = function() {}, l.reqGameEmojiProps = function(e, t, n) {
                    var a = i.number_valueOf(n.num, 1),
                        o = s.JsonEncode(n || {});
                    if (null != t && null != n)
                        if (null == this._handlerCanSendInterProp) {
                            var r = {
                                    index: t,
                                    msg: o
                                },
                                l = {
                                    cmd: d.C2S.ROOM_USER_CHAT,
                                    body: r
                                };
                            console.log("reqGameEmojiProps", l), u.dispatch(h.NET_SEND_MSG, l);
                            var p = s.JsonDecode(o),
                                m = {
                                    uid: p.from,
                                    prop_id: t,
                                    to_uid: p.to
                                };
                            console.log("reqGameEmojiProps1", m);
                            for (var _ = 0; _ < a; _++) this.addSchedulerOnce(.5 * _, (function() {
                                u.dispatch(h.VIEW_DESK_ANI_PLAY, c.AnimNormal.HudongProp, m)
                            }));
                            this.stopScheduler(this._handlerCanSendInterProp);
                            var g = this;
                            this._handlerCanSendInterProp = this.addScheduler(c.QuickChatDelay, (function() {
                                g.stopScheduler(g._handlerCanSendInterProp), g._handlerCanSendInterProp = null
                            }))
                        } else u.dispatch(h.SYS_TOAST_TIP, {
                            content: "发送太频繁"
                        })
                }, n(a, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new a("ChatServer")), this._instance
                    }
                }]), a
            }(l))._instance = null, a._RF.pop()
        }
    }
}))