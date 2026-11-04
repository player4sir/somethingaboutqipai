System.register("chunks:///_virtual/GPBWriteAndRead.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./Utils.ts", "./AppEvent.ts", "./Encrypto.ts", "./EventManager.ts", "./WebSocketBuffer.ts", "./GlobalPBAdaptive.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.createClass, i = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Logger
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.Encrypt
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            l = e.WebSocketBuffer
        }, function(e) {
            u = e.GlobalPBAdaptive
        }],
        execute: function() {
            n._RF.push({}, "53ac9U2SxRJUrJ0sWVSUBrh", "GPBWriteAndRead", void 0);
            var d = function(e, t, i, n) {
                    return void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = null), {
                        headCmd: e,
                        action: t,
                        data: i,
                        buffer: n
                    }
                },
                _ = function(e) {
                    return e && l.Read.readPacket(e, !0) || null
                },
                h = function(e, t) {
                    return !!e && !(!t || !t.data)
                },
                p = e("WriteAndReadType", {
                    Read: 0,
                    Write: 1
                }),
                f = function() {
                    function e(e, t) {
                        void 0 === e && (e = null), void 0 === t && (t = null), this._CmdArrayFunc = {}, this._className = "", this._type = null, e && (this._className = e), this._type = t
                    }
                    var t = e.prototype;
                    return t.initCommonCmds = function(e, t, i) {
                        void 0 === i && (i = !1), E.Write._initCommonCmd(e, i), E.Read._initCommonCmd(e, i), this._initCommonPbCmds(t, i)
                    }, t._initCommonPbCmds = function(e, t) {
                        void 0 === t && (t = !1), E.Write._initCommonPBCmd(e, t), E.Read._initCommonPBCmd(e, t), c.dispatch(r.SYS_UPDATE_CMDMAPPING, e.REQ), c.dispatch(r.SYS_UPDATE_CMDMAPPING, e.RESP)
                    }, t._initCommonCmd = function(e, t) {
                        if (void 0 === t && (t = !1), t && this.updateCmdArrayFunc(null, !0), e && "object" == _typeof2(e))
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i)) {
                                    var n = e[i];
                                    if (n && null != n.pbType) {
                                        var a = {
                                            cmd: i,
                                            binding: n.pbFunc
                                        };
                                        n.pbType == this._type && this.updateCmdArrayFunc([a])
                                    }
                                }
                    }, t._initCommonPBCmd = function(e, t) {
                        if (e && "object" == _typeof2(e)) {
                            var i = [],
                                n = [];
                            for (var a in e.REQ)
                                if (Object.prototype.hasOwnProperty.call(e.REQ, a)) {
                                    var o = Number(a),
                                        r = (e.REQ[o], {
                                            cmd: o,
                                            binding: u.WritePB
                                        });
                                    i.push(r)
                                } for (var s in e.RESP)
                                if (Object.prototype.hasOwnProperty.call(e.RESP, s)) {
                                    var c = Number(s),
                                        l = (e.RESP[c], {
                                            cmd: c,
                                            binding: u.ReadPB
                                        });
                                    n.push(l)
                                } E.Read.updateCmdArrayFunc(n), E.Write.updateCmdArrayFunc(i)
                        }
                    }, t.updateCmdArrayFunc = function(e, t) {
                        if (void 0 === t && (t = !1), t && (this._CmdArrayFunc = {}), null != e && null != e && 0 != e.length)
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.binding || (n.binding = this.__defaultWriteOrRead), n && n.cmd && n.binding && (this._CmdArrayFunc[n.cmd] = n.binding)
                            }
                    }, t.cleanCmdArrayFunc = function() {
                        this._CmdArrayFunc = {}
                    }, t.Start = function(e) {
                        if (this._CmdArrayFunc[e]) {
                            for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                            return (t = this._CmdArrayFunc)[e].apply(t, [e].concat(n))
                        }
                        return a.warn("【" + this._className + "】 【***未定义解析方法*】，HeadCmd[16进制] = " + o.number_formatToHex(e)), null
                    }, t.__defaultWriteOrRead = function() {}, e
                }(),
                m = function(e) {
                    function t() {
                        return e.call(this, "GPBRead", p.Read) || this
                    }
                    i(t, e), t.instance = function() {
                        return this._instance && null != this._instance || (this._instance = new t), this._instance
                    };
                    var n = t.prototype;
                    return n.ReadPhpRequest = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {};
                        n.flag = l.Read.readInt(t), n.cmd = l.Read.readInt(t);
                        var a = l.Read.readString(t);
                        return n.jsonStr = a ? s.JsonDecode(a) : null, d(e, null, n, i)
                    }, n.ReadPhpRequestNew = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {};
                        n.mid = l.Read.readInt(t), n.cmd = l.Read.readInt(t), n.compressType = l.Read.readInt(t);
                        var a = l.Read.readString(t);
                        if (a && null != n.compressType) {
                            var o = s.base64_decode(a);
                            1 == n.compressType && (o = s.UnZlibZip(o)), o && (o = s.JsonDecode(o)), a = o
                        }
                        return n.body = a, d(e, null, n, i)
                    }, n.ReadPHPTimeout = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            code: 0,
                            cmd: 0
                        };
                        return n.code = l.Read.readInt(t), n.cmd = l.Read.readInt(t), d(e, null, n, i)
                    }, n.onServerKickOut = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, {}, i) : null
                    }, n.onPhpKickout = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            uid: l.Read.readInt(t),
                            msg: l.Read.readString(t),
                            errorType: l.Read.readInt(t),
                            extendInfo: l.Read.readString(t)
                        };
                        return o.string_isEmpty(n.extendInfo) || (n.extendInfo = s.JsonDecode(n.extendInfo)), d(e, null, n, i)
                    }, n.ReadHallLoginSuccess = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {};
                        n.ret = o.nullToDefault(l.Read.readUByte(t), 0), 1 === n.ret && (n.gameType = o.nullToDefault(l.Read.readUShort(t), 0), n.svid = o.nullToDefault(l.Read.readInt(t), -1), n.roomId = o.nullToDefault(l.Read.readInt(t), 0), n.roomLevel = o.nullToDefault(l.Read.readUShort(t), 0)), n.matchInfo = {}, n.matchState = l.Read.readUByte(t), 1 == n.matchState && (n.matchInfo.gameId = o.nullToDefault(l.Read.readUShort(t), 0), n.matchInfo.matchId = o.nullToDefault(l.Read.readInt(t), -1), n.matchInfo.svid = o.nullToDefault(l.Read.readInt(t), 0), n.matchInfo.matchType = o.nullToDefault(l.Read.readUShort(t), 0)), n.objectInfo = {};
                        var r = l.Read.readString(t);
                        return "" != r && (n.objectInfo = o.table_verify(s.JsonDecode(r))), n.onlookerInfo = {}, n.onlookerType = o.nullToDefault(l.Read.readUShort(t), 0), 1 == n.onlookerType && (n.onlookerInfo.userId = o.nullToDefault(l.Read.readInt(t), 0), n.onlookerInfo.gameId = o.nullToDefault(l.Read.readInt(t), 0), n.onlookerInfo.roomLevel = o.nullToDefault(l.Read.readInt(t), 0)), console.log("大厅登录成功，这是结果"), a.dump(n), d(e, null, n, i)
                    }, n.ReadServersHeart = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, null, i) : null
                    }, n.ReadPhpPushMsg = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            result: null
                        };
                        return n.result = l.Read.readString(t), n.result = s.JsonDecode(n.result), d(e, null, n, i)
                    }, n.ReadPhpGetUserVipInfo = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: null,
                            propDetail: []
                        };
                        n.mid = l.Read.readInt(t);
                        var a = l.Read.readInt(t);
                        if (null != a)
                            for (var o = 0; o < a; o++) {
                                var r = l.Read.readString(t),
                                    c = s.JsonDecode(r);
                                n.propDetail.push(c)
                            }
                        return d(e, null, n, i)
                    }, n.ReadBroadUseProps = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0,
                            propNum: 0,
                            propType: 0,
                            propUseNum: 1,
                            propTarget: ""
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), n.propNum = o.nullToDefault(l.Read.readInt(t), n.propNum), n.propType = o.nullToDefault(l.Read.readInt(t), n.propType), n.propUseNum = o.nullToDefault(l.Read.readInt(t), n.propUseNum), n.propTarget = o.nullToDefault(l.Read.readString(t), n.propTarget), d(e, null, n, i)
                    }, n.ReadPhpPushPayMoney = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            type: 0,
                            data: ""
                        };
                        return n.type = o.nullToDefault(l.Read.readShort(t), n.type), n.data = o.nullToDefault(l.Read.readString(t), n.data), d(e, null, n, i)
                    }, n.comm_receiveGameStart = function(e, t) {}, n.comm_receiveGameOver = function(e, t) {}, n.onServerPushUserInfo = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            userId: 0,
                            propertyArr: []
                        };
                        n.userId = l.Read.readInt(t);
                        var a = o.nullToDefault(l.Read.readInt(t), 0);
                        if (a > 0)
                            for (var r = 0; r < a; r++) n.propertyArr.push({
                                propertyId: o.nullToDefault(l.Read.readInt(t), -1),
                                num: o.nullToDefault(l.Read.readInt64(t), -1)
                            });
                        return d(e, null, n, i)
                    }, n.comm_loginRoom = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorType: -1,
                            errorMsg: ""
                        };
                        return n.errorType = o.nullToDefault(l.Read.readByte(t), n.errorType), n.errorMsg = o.nullToDefault(l.Read.readString(t), n.errorMsg), d(e, null, n, i)
                    }, n.comm_receiveRoomInfo = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = l.Read.readString(t),
                            a = s.JsonDecode(n);
                        return a && (a.gameId = o.number_valueOf(a.gameId), a.levelId = o.number_valueOf(a.level), a.tid = o.number_valueOf(a.tid)), d(e, null, a, i)
                    }, n.comm_receiveReadyInfo = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            readyTime: 0
                        };
                        return n.readyTime = l.Read.readInt(t), d(e, null, n, i)
                    }, n.comm_receivePlayerReady = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            userId: 0
                        };
                        return n.userId = o.nullToDefault(l.Read.readInt(t), n.userId), d(e, null, n, i)
                    }, n.comm_receivePlayerInto = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0,
                            seatid: -1,
                            isReady: 0,
                            userInfo: "",
                            money: 0,
                            hp: 0
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), n.seatid = o.nullToDefault(l.Read.readInt(t), n.seatid), n.isReady = o.nullToDefault(l.Read.readInt(t), n.isReady), n.userInfo = o.nullToDefault(l.Read.readString(t), n.userInfo), n.money = o.nullToDefault(l.Read.readInt64(t), n.money), n.hp = o.nullToDefault(l.Read.readInt(t), n.hp), d(e, null, n, i)
                    }, n.comm_receivePlayerLogout = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), d(e, null, n, i)
                    }, n.comm_receiveExitRoomSuccess = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            totalMoney: -1,
                            money: 0
                        };
                        return n.totalMoney = o.nullToDefault(l.Read.readInt64(t), n.totalMoney), n.money = o.nullToDefault(l.Read.readInt64(t), n.money), d(e, null, n, i)
                    }, n.comm_receiveForceLogout = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            code: 0,
                            money: -1
                        };
                        return n.code = o.nullToDefault(l.Read.readByte(t), n.code), n.money = o.nullToDefault(l.Read.readInt(t), n.money), d(e, null, n, i)
                    }, n.comm_receiveStopGameInPlay = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            logoutMid: 0,
                            playerList: []
                        };
                        n.logoutMid = o.nullToDefault(l.Read.readInt(t), n.logoutMid);
                        for (var a = o.nullToDefault(l.Read.readByte(t), 0), r = 0; r < a; r++) {
                            var s = {
                                mid: 0,
                                totalmoney: 0,
                                turnMoney: 0,
                                winMoneyTotalInTable: 0
                            };
                            s.mid = o.nullToDefault(l.Read.readInt(t), s.mid), s.totalmoney = o.nullToDefault(l.Read.readInt64(t), s.totalmoney), s.turnMoney = o.nullToDefault(l.Read.readInt64(t), s.turnMoney), s.winMoneyTotalInTable = o.nullToDefault(l.Read.readInt64(t), s.winMoneyTotalInTable), n.playerList.push(s)
                        }
                        return d(e, null, n, i)
                    }, n.comm_receiveJoinGame = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            roomId: 0,
                            serverId: 0,
                            roomIp: "",
                            roomPort: 0,
                            hasIngame: 0,
                            level: 0,
                            gameId: 0
                        };
                        return n.roomId = o.nullToDefault(l.Read.readInt(t), n.roomId), n.serverId = o.nullToDefault(l.Read.readInt(t), n.serverId), n.roomIp = o.nullToDefault(l.Read.readString(t), n.roomIp), n.roomPort = o.nullToDefault(l.Read.readInt(t), n.roomPort), n.hasIngame = o.nullToDefault(l.Read.readInt(t), n.hasIngame), n.level = o.nullToDefault(l.Read.readInt(t), n.level), n.gameId = o.nullToDefault(l.Read.readInt(t), n.gameId), d(e, null, n, i)
                    }, n.comm_receivePlayerAI = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0,
                            ai: 0
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), n.ai = o.nullToDefault(l.Read.readInt(t), n.ai), d(e, null, n, i)
                    }, n.comm_receiveChangeDeskError = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorCode: 0
                        };
                        return n.errorCode = o.nullToDefault(l.Read.readInt(t), n.errorCode), d(e, null, n, i)
                    }, n.onCommRoomLevelUp = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            level: 0,
                            flag: 0,
                            exp: 0,
                            msg: 0,
                            baseChip: 0,
                            dis: 0
                        };
                        return n.level = o.nullToDefault(l.Read.readShort(t), n.level), n.flag = o.nullToDefault(l.Read.readInt(t), n.flag), n.exp = o.nullToDefault(l.Read.readInt(t), n.exp), n.msg = o.nullToDefault(l.Read.readString(t), n.msg), n.baseChip = o.nullToDefault(l.Read.readInt64(t), n.baseChip), n.dis = o.nullToDefault(l.Read.readInt64(t), n.dis), d(e, null, n, i)
                    }, n.comm_LogOutResp = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            compensation: ""
                        };
                        return n.compensation = o.nullToDefault(l.Read.readInt64(t), n.compensation), d(e, null, n, i)
                    }, n.comm_UserFace = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0,
                            faceValue: -1,
                            vipType: -1
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), n.faceValue = o.nullToDefault(l.Read.readInt(t), n.faceValue), n.vipType = o.nullToDefault(l.Read.readInt(t), n.vipType), d(e, null, n, i)
                    }, n.comm_UserChat = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            mid: 0,
                            msg: -1,
                            index: -1
                        };
                        return n.mid = o.nullToDefault(l.Read.readInt(t), n.mid), n.msg = o.nullToDefault(l.Read.readString(t), n.msg), n.index = o.nullToDefault(l.Read.readShort(t), n.index), d(e, null, n, i)
                    }, n.comm_respBankUpData = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            curBankruptTime: 0,
                            lowestMoney: 0,
                            intervals: []
                        };
                        n.curBankruptTime = o.nullToDefault(l.Read.readInt(t), n.curBankruptTime), n.lowestMoney = o.nullToDefault(l.Read.readInt64(t), n.lowestMoney);
                        for (var a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) n.intervals.push(o.nullToDefault(l.Read.readInt(t), 0));
                        return d(e, null, n, i)
                    }, n.comm_respBankUpCount = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            curCount: 0,
                            leftTime: 0,
                            vipExpires: 0,
                            vipActualTime: 0,
                            get_money: 0,
                            shard_cd_flag: 0,
                            resetTime: -1,
                            refreshInterval: 7200
                        };
                        return n.curCount = o.nullToDefault(l.Read.readInt(t), n.curCount), n.leftTime = o.nullToDefault(l.Read.readInt(t), n.leftTime), n.vipExpires = o.nullToDefault(l.Read.readInt(t), n.vipExpires), n.vipActualTime = o.nullToDefault(l.Read.readInt(t), n.vipActualTime), n.get_money = o.nullToDefault(l.Read.readInt(t), n.get_money), n.shard_cd_flag = o.nullToDefault(l.Read.readInt(t), n.shard_cd_flag), o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), 0), n.resetTime = o.nullToDefault(l.Read.readInt(t), n.resetTime), n.refreshInterval = o.nullToDefault(l.Read.readInt(t), n.refreshInterval), d(e, null, n, i)
                    }, n.comm_respBankUp = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            flag: 0,
                            brokeMoney: 0,
                            money: 0,
                            errType: 0
                        };
                        return n.flag = o.nullToDefault(l.Read.readInt(t), n.flag), n.brokeMoney = o.nullToDefault(l.Read.readInt64(t), n.brokeMoney), n.money = o.nullToDefault(l.Read.readInt64(t), n.money), n.errType = o.nullToDefault(l.Read.readInt(t), n.errType), d(e, null, n, i)
                    }, n.comm_respMatchSignUp = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            type: -1,
                            num: -1,
                            extenalMoney: -1,
                            userInfo: {}
                        };
                        n.type = o.nullToDefault(l.Read.readInt(t), n.type), n.num = o.nullToDefault(l.Read.readInt(t), n.num), 0 != n.type && (n.extenalMoney = o.nullToDefault(l.Read.readInt(t), n.extenalMoney));
                        var a = o.nullToDefault(l.Read.readString(t), "");
                        return n.userInfo = o.table_verify(s.JsonDecode(a)), d(e, null, n, i)
                    }, n.comm_respMatchSignUpEnter = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            num: -1,
                            totalNum: -1,
                            userInfo: {}
                        };
                        n.num = o.nullToDefault(l.Read.readShort(t), n.num), n.totalNum = o.nullToDefault(l.Read.readShort(t), n.totalNum), o.nullToDefault(l.Read.readInt(t), -1), o.nullToDefault(l.Read.readInt64(t), -1), o.nullToDefault(l.Read.readInt(t), -1);
                        var a = o.nullToDefault(l.Read.readString(t), "");
                        return o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), -1), o.nullToDefault(l.Read.readInt(t), -1), o.nullToDefault(l.Read.readInt(t), -1), n.userInfo = o.table_verify(s.JsonDecode(a)), d(e, null, n, i)
                    }, n.comm_respMatchSignUpFail = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorType: -1,
                            svid: -1,
                            gameId: -1,
                            id: -1,
                            errorMsg: ""
                        };
                        return n.errorType = o.nullToDefault(l.Read.readShort(t), n.errorType), n.svid = o.nullToDefault(l.Read.readShort(t), n.svid), n.gameId = o.nullToDefault(l.Read.readShort(t), n.gameId), n.id = o.nullToDefault(l.Read.readInt(t), n.id), n.errorMsg = o.nullToDefault(l.Read.readString(t), n.errorMsg), d(e, null, n, i)
                    }, n.comm_broadcastMatchEnter = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            id: 0,
                            mname: "",
                            min: 0,
                            stime: 0
                        };
                        return n.id = o.nullToDefault(l.Read.readInt(t), n.id), n.mname = o.nullToDefault(l.Read.readString(t), n.mname), n.min = o.nullToDefault(l.Read.readInt(t), n.min), n.stime = o.nullToDefault(l.Read.readInt64(t), n.stime), d(e, null, n, i)
                    }, n.comm_respMatchUnSignUp = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            returnMoney: 0,
                            totalMoney: 0,
                            totalDiamond: 0,
                            hasProp: 0,
                            type: 0,
                            num: 0,
                            userInfo: {}
                        };
                        n.returnMoney = o.nullToDefault(l.Read.readInt(t), n.returnMoney), n.totalMoney = o.nullToDefault(l.Read.readInt64(t), n.totalMoney), n.totalDiamond = o.nullToDefault(l.Read.readInt(t), n.totalDiamond), n.hasProp = o.nullToDefault(l.Read.readInt(t), n.hasProp), n.hasProp > 0 && (n.type = o.nullToDefault(l.Read.readInt(t), n.type), n.num = o.nullToDefault(l.Read.readInt(t), n.num));
                        var a = o.nullToDefault(l.Read.readString(t), "");
                        return n.userInfo = o.table_verify(s.JsonDecode(a)), d(e, null, n, i)
                    }, n.comm_respMatchUnSignUpFail = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorType: 0,
                            id: 0,
                            gameId: 0,
                            realId: 0
                        };
                        return o.nullToDefault(l.Read.readShort(t), 0), n.id = o.nullToDefault(l.Read.readShort(t), n.id), n.gameId = o.nullToDefault(l.Read.readShort(t), n.gameId), n.realId = o.nullToDefault(l.Read.readInt(t), n.realId), n.errorType = o.nullToDefault(l.Read.readShort(t), n.errorType), d(e, null, n, i)
                    }, n.comm_respMatchUpdatePeople = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            playerNumRequest: 0,
                            playerNum: 0
                        };
                        return n.playerNum = o.nullToDefault(l.Read.readShort(t), n.playerNum), n.playerNumRequest = o.nullToDefault(l.Read.readShort(t), n.playerNumRequest), o.nullToDefault(l.Read.readInt(t), 0), d(e, null, n, i)
                    }, n.comm_broadcastMatchStartTimeout = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorType: 0,
                            money: 0,
                            propList: [],
                            userInfo: {},
                            id: 0
                        };
                        n.errorType = o.nullToDefault(l.Read.readByte(t), 0), n.money = o.nullToDefault(l.Read.readInt64(t), n.money);
                        for (var a = o.nullToDefault(l.Read.readByte(t), 0), r = 0; r < a; r++) o.nullToDefault(l.Read.readByte(t), 0), o.nullToDefault(l.Read.readByte(t), 0);
                        var c = o.nullToDefault(l.Read.readString(t), "");
                        n.userInfo = o.table_verify(s.JsonDecode(c)), a = o.nullToDefault(l.Read.readInt(t), 0);
                        for (var u = 0; u < a; u++) {
                            var h = {
                                type: o.nullToDefault(l.Read.readInt(t), 0),
                                value: o.nullToDefault(l.Read.readInt(t), 0)
                            };
                            n.propList.push(h)
                        }
                        return n.id = o.nullToDefault(l.Read.readInt(t), n.id), d(e, null, n, i)
                    }, n.comm_broadcastMatchStart = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, {}, i) : null
                    }, n.comm_broadcastMatchPlayerScore = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        for (var n = [], a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) {
                            var s = {
                                mid: o.nullToDefault(l.Read.readInt(t), 0),
                                score: o.nullToDefault(l.Read.readInt(t), 0)
                            };
                            n.push(s)
                        }
                        return d(e, null, n, i)
                    }, n.comm_broadcastMatchStage = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                                daliInfo: {
                                    weedoutNum: 0,
                                    promotionNum: 0
                                },
                                stageInfo: [],
                                roundInfo: []
                            },
                            a = o.nullToDefault(l.Read.readString(t), ""),
                            r = o.nullToDefault(l.Read.readString(t), ""),
                            c = o.nullToDefault(l.Read.readString(t), ""),
                            u = o.table_verify(s.JsonDecode(a)),
                            h = o.table_verify(s.JsonDecode(r)),
                            p = o.table_verify(s.JsonDecode(c));
                        if (!o.table_isEmpty(u)) {
                            var f = [];
                            for (var m in u) f.push(m);
                            f.sort(), f.forEach((function(e, t, i) {
                                var a = u[e],
                                    r = {
                                        name: s.base64_decode(a.name, !0),
                                        number: o.nullToDefault(a.number, 0),
                                        rounds: []
                                    },
                                    c = o.nullToDefault(a.rounds, "");
                                o.string_isEmpty(c) || c.split(",").forEach((function(e, t, i) {
                                    r.rounds.push(o.number_valueOf(e, 0))
                                })), n.stageInfo.push(r)
                            }))
                        }
                        return o.table_isEmpty(h) || (n.daliInfo.weedoutNum = o.nullToDefault(h.TillWeedoutNum, 0), n.daliInfo.promotionNum = o.nullToDefault(h.PromotionNum, 0)), o.table_isEmpty(p) || o.table_isEmpty(p.roundPromotePlayerCount) || p.roundPromotePlayerCount.forEach((function(e, t, i) {
                            var a = {
                                number: o.nullToDefault(e, 0)
                            };
                            n.roundInfo.push(a)
                        })), d(e, null, n, i)
                    }, n.comm_broadcastMatchDingJuStage = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            stage: 0,
                            gameNum: 0,
                            gameNumTotal: 0,
                            roundNum: 0,
                            roundNumTotal: 0,
                            playerNum: 0,
                            rankInfoTable: {
                                rank: 0,
                                rankTotal: 0
                            },
                            scoreInfo: [],
                            rankInfo: {
                                rank: 0,
                                rankTotal: 0
                            }
                        };
                        n.gameNum = o.nullToDefault(l.Read.readShort(t), n.gameNum), n.roundNum = o.nullToDefault(l.Read.readShort(t), n.roundNum), n.playerNum = o.nullToDefault(l.Read.readShort(t), n.playerNum), n.rankInfoTable.rank = o.nullToDefault(l.Read.readShort(t), n.rankInfoTable.rank), n.rankInfoTable.rankTotal = o.nullToDefault(l.Read.readShort(t), n.rankInfoTable.rankTotal);
                        for (var a = 0; a < n.rankInfoTable.rankTotal; a++) {
                            var r = {
                                mid: o.nullToDefault(l.Read.readInt(t), 0),
                                score: o.nullToDefault(l.Read.readInt(t), 0),
                                nick: o.nullToDefault(l.Read.readString(t), "")
                            };
                            n.scoreInfo.push(r)
                        }
                        return n.gameNumTotal = o.nullToDefault(l.Read.readShort(t), n.gameNumTotal), n.roundNumTotal = o.nullToDefault(l.Read.readShort(t), n.roundNumTotal), n.stage = o.nullToDefault(l.Read.readByte(t), n.stage), n.rankInfo.rank = o.nullToDefault(l.Read.readInt(t), n.rankInfo.rank), n.rankInfo.rankTotal = o.nullToDefault(l.Read.readInt(t), n.rankInfo.rankTotal), l.Read.readShort(t), l.Read.readShort(t), l.Read.readShort(t), l.Read.readShort(t), l.Read.readInt(t), d(e, null, n, i)
                    }, n.comm_broadcastMatchUserBaseScore = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            baseScore: 0,
                            weedoutScore: 0,
                            isShow: 0
                        };
                        return n.baseScore = o.nullToDefault(l.Read.readInt(t), n.baseScore), n.weedoutScore = o.nullToDefault(l.Read.readInt(t), n.weedoutScore), n.isShow = o.nullToDefault(l.Read.readInt(t), n.isShow), d(e, null, n, i)
                    }, n.comm_broadcastMatchUserRank = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            rank: 0,
                            rankTotal: 0
                        };
                        return n.rank = o.nullToDefault(l.Read.readInt(t), n.rank), n.rankTotal = o.nullToDefault(l.Read.readInt(t), n.rankTotal), d(e, null, n, i)
                    }, n.comm_broadcastMatchUserStage = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            stage: 0,
                            state: 0
                        };
                        return n.stage = o.nullToDefault(l.Read.readByte(t), n.stage), n.state = o.nullToDefault(l.Read.readByte(t), n.state), d(e, null, n, i)
                    }, n.comm_broadcastMatchWaitTable = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, {}, i) : null
                    }, n.comm_broadcastMatchRoundOver = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            stage: 0,
                            stageName: 0,
                            notFinishTable: 0,
                            rank: 0,
                            rankList: [],
                            roundIndex: 0,
                            playerNum: 0,
                            roundNum: 0,
                            roundInfo: []
                        };
                        o.nullToDefault(l.Read.readShort(t), 0), o.nullToDefault(l.Read.readByte(t), 0), n.playerNum = o.nullToDefault(l.Read.readShort(t), n.playerNum), o.nullToDefault(l.Read.readByte(t), 0), l.Read.readByte(t);
                        for (var a = o.nullToDefault(l.Read.readByte(t), 0), r = 0; r < a; r++) l.Read.readByte(t);
                        n.stage = o.nullToDefault(l.Read.readByte(t), n.stage), n.roundIndex = o.nullToDefault(l.Read.readByte(t), n.roundIndex), n.stageName = o.nullToDefault(l.Read.readByte(t), n.stageName), n.notFinishTable = o.nullToDefault(l.Read.readShort(t), n.notFinishTable), n.rank = o.nullToDefault(l.Read.readInt(t), n.rank), o.nullToDefault(l.Read.readShort(t), 0), o.nullToDefault(l.Read.readShort(t), 0);
                        for (var s = o.nullToDefault(l.Read.readInt(t), 0), c = 0; c < s; c++) {
                            var u = {
                                rank: o.nullToDefault(l.Read.readInt(t), 0),
                                score: o.nullToDefault(l.Read.readInt(t), 0),
                                nick: o.nullToDefault(l.Read.readString(t), "")
                            };
                            n.rankList.push(u)
                        }
                        o.nullToDefault(l.Read.readInt(t), 0), n.roundNum = o.nullToDefault(l.Read.readByte(t), n.roundNum);
                        for (var h = 0; h < n.roundNum; h++) n.roundInfo.push({
                            number: o.nullToDefault(l.Read.readInt(t), 0)
                        });
                        return d(e, null, n, i)
                    }, n.comm_broadcastMatchRoundOverPromotion = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            stageName: 0,
                            notFinishTable: 0,
                            rank: 0,
                            rankList: [],
                            stage: 0,
                            roundIndex: 0,
                            playerNum: 0,
                            roundNum: 0,
                            roundInfo: []
                        };
                        n.stageName = o.nullToDefault(l.Read.readByte(t), n.stageName), n.notFinishTable = o.nullToDefault(l.Read.readShort(t), n.notFinishTable), n.rank = o.nullToDefault(l.Read.readInt(t), n.rank), o.nullToDefault(l.Read.readShort(t), 0), o.nullToDefault(l.Read.readShort(t), 0);
                        for (var a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) {
                            var s = {
                                rank: o.nullToDefault(l.Read.readInt(t), 0),
                                score: o.nullToDefault(l.Read.readInt(t), 0),
                                nick: o.nullToDefault(l.Read.readString(t), "")
                            };
                            n.rankList.push(s)
                        }
                        o.nullToDefault(l.Read.readByte(t), 0), o.nullToDefault(l.Read.readByte(t), 0);
                        for (var c = o.nullToDefault(l.Read.readByte(t), 0), u = 0; u < c; u++) o.nullToDefault(l.Read.readByte(t), 0);
                        n.stage = o.nullToDefault(l.Read.readByte(t), n.stage), n.roundIndex = o.nullToDefault(l.Read.readByte(t), n.roundIndex), n.playerNum = o.nullToDefault(l.Read.readShort(t), n.playerNum), o.nullToDefault(l.Read.readInt(t), 0), n.roundNum = o.nullToDefault(l.Read.readByte(t), n.roundNum);
                        for (var h = 0; h < n.roundNum; h++) n.roundInfo.push({
                            number: o.nullToDefault(l.Read.readInt(t), 0)
                        });
                        return d(e, null, n, i)
                    }, n.comm_broadcastMatchContinue = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, {}, i) : null
                    }, n.comm_broadcastMatchOver = function(e, t) {
                        var i = _(t);
                        return i ? d(e, null, {}, i) : null
                    }, n.comm_broadcastMatchAward = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            hasAward: 0,
                            rank: 0,
                            playerNum: 0,
                            awardInfo: [],
                            configid: "",
                            myProps: []
                        };
                        if (o.nullToDefault(l.Read.readShort(t), 0), n.hasAward = o.nullToDefault(l.Read.readShort(t), n.hasAward), n.rank = o.nullToDefault(l.Read.readShort(t), n.rank), n.playerNum = o.nullToDefault(l.Read.readShort(t), n.playerNum), 1 == n.hasAward)
                            for (var a = o.nullToDefault(l.Read.readByte(t), 0), r = 0; r < a; r++) {
                                var c = {
                                    type: o.nullToDefault(l.Read.readInt(t), 0),
                                    value: 0
                                };
                                1 == c.type ? c.value = o.nullToDefault(l.Read.readInt64(t), 0) : 8 != c.type && 9 != c.type || (c.value = o.nullToDefault(l.Read.readInt(t), 0)), c.value > 0 && n.awardInfo.push(c)
                            }
                        n.myProps = [];
                        for (var u = o.nullToDefault(l.Read.readShort(t), 0), h = 0; h < u; h++) {
                            var p = {
                                type: o.nullToDefault(l.Read.readInt(t), 0),
                                value: o.nullToDefault(l.Read.readInt(t), 0)
                            };
                            n.myProps.push(p)
                        }
                        for (var f = o.nullToDefault(l.Read.readInt(t), 0), m = 0; m < f; m++) o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), 0);
                        console.log("比赛奖励---当前拥有的道具：", n.myProps), l.Read.readString(t), n.configid = o.nullToDefault(l.Read.readString(t), n.configid), n.awardInfo = function(e) {
                            var t = [];
                            return console.log("比赛奖励：", e), o.table_isEmpty(e) || e.forEach((function(e, i, n) {
                                var a = {
                                    type: o.nullToDefault(null == e ? void 0 : e.new_type, 0),
                                    value: o.nullToDefault(null == e ? void 0 : e.new_value, 0)
                                };
                                t.push(a)
                            })), t
                        }(s.JsonDecode(o.nullToDefault(l.Read.readString(t), "")));
                        var g = l.Read.readString(t),
                            E = l.Read.readString(t);
                        return l.Read.readShort(t), l.Read.readString(t), l.Read.readShort(t), l.Read.readShort(t), console.log("比赛奖励 2", n.awardInfo, g, E), d(e, null, n, i)
                    }, n.comm_broadcastMatchReconnect = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            id: 0,
                            gameid: 0,
                            idReal: 0,
                            type: 0,
                            isPlaying: 0
                        };
                        return n.id = o.nullToDefault(l.Read.readShort(t), n.id), n.gameid = o.nullToDefault(l.Read.readShort(t), n.gameid), n.idReal = o.nullToDefault(l.Read.readInt(t), n.idReal), n.type = o.nullToDefault(l.Read.readShort(t), n.type), n.isPlaying = o.nullToDefault(l.Read.readInt(t), n.isPlaying), d(e, null, n, i)
                    }, n.comm_respSearchPrivateRoom = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        for (var n = o.nullToDefault(l.Read.readInt(t), 0), a = [], r = 0; r < n; r++) {
                            var s = {
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
                            s.tableId = o.nullToDefault(l.Read.readInt(t), s.tableId), s.serverId = o.nullToDefault(l.Read.readShort(t), s.serverId), s.gameId = o.nullToDefault(l.Read.readShort(t), s.gameId), s.userCount_on = o.nullToDefault(l.Read.readShort(t), s.userCount_on), s.userCount_max = o.nullToDefault(l.Read.readShort(t), s.userCount_max), s.requireMoney = o.nullToDefault(l.Read.readInt64(t), s.requireMoney), s.baseChip = o.nullToDefault(l.Read.readInt64(t), s.baseChip), o.nullToDefault(l.Read.readString(t), ""), o.nullToDefault(l.Read.readString(t), "");
                            var c = o.nullToDefault(l.Read.readInt(t), 0);
                            s.isCanEscape = 1 == (1 & c), a.push(s)
                        }
                        for (var u = 0; u < n; u++) o.nullToDefault(l.Read.readString(t), ""), a[u].tableType = o.nullToDefault(l.Read.readInt(t), a[u].tableType), a[u].times = o.nullToDefault(l.Read.readInt(t), a[u].times), a[u].rounds = o.nullToDefault(l.Read.readInt(t), a[u].rounds), a[u].param = o.nullToDefault(l.Read.readString(t), a[u].param), a[u].tableIdLong = o.nullToDefault(l.Read.readInt(t), a[u].tableIdLong);
                        return d(e, null, a, i)
                    }, n.comm_broadcastPrivateRoomConfig = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            dismissFlag: 0,
                            dismissTime: 0
                        };
                        return o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), 0), n.dismissFlag = o.nullToDefault(l.Read.readInt(t), n.dismissFlag), o.nullToDefault(l.Read.readInt(t), 0), n.dismissTime = o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readInt(t), 0), o.nullToDefault(l.Read.readString(t), ""), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomInfo = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            tableId: 0,
                            tableIdLong: 0,
                            time: 0,
                            isCanEscape: !1
                        };
                        n.tableId = o.nullToDefault(l.Read.readInt(t), n.tableId), o.nullToDefault(l.Read.readInt(t), 0);
                        var a = o.nullToDefault(l.Read.readInt(t), 0);
                        return n.isCanEscape = 1 == (1 & a), n.tableIdLong = o.nullToDefault(l.Read.readInt(t), n.tableIdLong), n.time = o.nullToDefault(l.Read.readInt(t), n.time), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomMaster = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            userId: 0,
                            reconnectFlag: 0,
                            tableKey: ""
                        };
                        return n.userId = o.nullToDefault(l.Read.readInt(t), n.userId), n.reconnectFlag = o.nullToDefault(l.Read.readShort(t), n.reconnectFlag), n.tableKey = o.nullToDefault(l.Read.readString(t), ""), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomCancelRead = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            userId: 0
                        };
                        return n.userId = o.nullToDefault(l.Read.readInt(t), n.userId), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomTableKey = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            tableKey: 0
                        };
                        return n.tableKey = o.nullToDefault(l.Read.readString(t), ""), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomKickUser = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            errorcode: -1
                        };
                        return n.errorcode = o.nullToDefault(l.Read.readInt(t), n.errorcode), 0 == n.errorcode && (n.sUid = o.nullToDefault(l.Read.readInt(t), 0), n.sName = o.nullToDefault(l.Read.readString(t), ""), n.tUid = o.nullToDefault(l.Read.readInt(t), 0), n.tName = o.nullToDefault(l.Read.readString(t), "")), d(e, null, n, i)
                    }, n.comm_notifyPrivateRoomBeKickUser = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            sUid: 0,
                            sName: "",
                            tUid: 0,
                            tName: ""
                        };
                        return n.sUid = o.nullToDefault(l.Read.readInt(t), n.sUid), n.sName = o.nullToDefault(l.Read.readString(t), n.sName), n.tUid = o.nullToDefault(l.Read.readInt(t), n.tUid), n.tName = o.nullToDefault(l.Read.readString(t), n.tName), d(e, null, n, i)
                    }, n.comm_notifyPrivateRoomChangeSeat = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            sUid: 0,
                            sSeatId: 0,
                            tUid: 0,
                            tSeatId: 0
                        };
                        return n.sUid = o.nullToDefault(l.Read.readInt(t), n.sUid), n.sSeatId = o.nullToDefault(l.Read.readInt(t), n.sSeatId), n.tUid = o.nullToDefault(l.Read.readInt(t), n.tUid), n.tSeatId = o.nullToDefault(l.Read.readInt(t), n.tSeatId), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomChangeSeatResult = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            result: 0
                        };
                        if (n.result = o.nullToDefault(l.Read.readInt(t), n.result), 1 == n.result) {
                            n.count = o.nullToDefault(l.Read.readInt(t), 0), n.change = [];
                            for (var a = 0; a < n.count; a++) {
                                var r = {
                                    uid: 0,
                                    seatId: -1
                                };
                                r.uid = o.nullToDefault(l.Read.readInt(t), r.uid), r.seatId = o.nullToDefault(l.Read.readInt(t), r.seatId), n.change.push(r)
                            }
                        } else n.errorcode = o.nullToDefault(l.Read.readInt(t), -1), n.sUid = o.nullToDefault(l.Read.readInt(t), 0), n.tUid = o.nullToDefault(l.Read.readInt(t), 0);
                        return d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomDismiss = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        for (var n = {
                                applyUserId: 0,
                                isReqDismiss: !1,
                                myUserId: 0,
                                nickName: "",
                                users: [],
                                players: [],
                                reason: ""
                            }, a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) {
                            var c = {
                                name: "",
                                head_url: "",
                                optType: -1,
                                uid: 0,
                                sex: 0
                            };
                            c.uid = o.nullToDefault(l.Read.readInt(t), c.uid), c.optType = o.nullToDefault(l.Read.readInt(t), c.optType), 1 == c.optType && (n.isReqDismiss = !0), n.users.push(c)
                        }
                        var u = o.nullToDefault(l.Read.readString(t), ""),
                            h = s.JsonDecode(u);
                        return h && (n.applyUserId = h.applyUserId, n.reason = h.reason), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomOnlineStatus = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        for (var n = {
                                users: [],
                                ext: {}
                            }, a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) {
                            var c = {
                                userId: o.nullToDefault(l.Read.readInt(t), 0),
                                status: o.nullToDefault(l.Read.readInt(t), 0)
                            };
                            n.users.push(c)
                        }
                        var u = o.nullToDefault(l.Read.readString(t), "");
                        return n.ext = s.JsonDecode(u), d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomDismissGame = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            status: 0,
                            ext: ""
                        };
                        return n.status = o.nullToDefault(l.Read.readInt(t), n.status), n.ext = o.nullToDefault(l.Read.readString(t), ""), d(e, null, n, i)
                    }, n.comm_repPrivateRoomContinue = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        for (var n = [], a = o.nullToDefault(l.Read.readInt(t), 0), r = 0; r < a; r++) {
                            var s = {
                                mid: o.nullToDefault(l.Read.readInt(t), 0),
                                seatid: o.nullToDefault(l.Read.readInt(t), 0),
                                isReady: o.nullToDefault(l.Read.readInt(t), 0),
                                userInfo: o.nullToDefault(l.Read.readString(t), ""),
                                money: o.nullToDefault(l.Read.readInt(t), 0)
                            };
                            n.push(s)
                        }
                        return d(e, null, n, i)
                    }, n.comm_broadcastPrivateRoomSettle = function(e, t) {
                        var i = _(t);
                        if (!i) return null;
                        var n = {
                            roomLevel: 0,
                            playerMode: 0,
                            baseChipType: 0,
                            baseChip: 0,
                            multiple: 0,
                            tableType: 0,
                            roundsTotal: 0,
                            roundsCurrent: 0,
                            state: 0,
                            leaveUserId: 0,
                            record: [],
                            recordList: [],
                            time: 0,
                            gameExtParams: "",
                            gameStatu: -1,
                            tableStatu: 0
                        };
                        n.roomLevel = o.nullToDefault(l.Read.readInt(t), n.roomLevel), n.playerMode = o.nullToDefault(l.Read.readInt(t), n.playerMode), n.baseChipType = o.nullToDefault(l.Read.readInt(t), n.baseChipType), n.multiple = o.nullToDefault(l.Read.readInt(t), n.multiple), n.tableType = o.nullToDefault(l.Read.readInt(t), n.tableType), n.roundsTotal = o.nullToDefault(l.Read.readInt(t), n.roundsTotal), n.roundsCurrent = o.nullToDefault(l.Read.readInt(t), n.roundsCurrent), n.baseChip = o.nullToDefault(l.Read.readInt(t), n.baseChip), n.state = o.nullToDefault(l.Read.readInt(t), n.state), n.leaveUserId = o.nullToDefault(l.Read.readInt(t), n.leaveUserId);
                        for (var a = o.nullToDefault(l.Read.readInt(t), 0), r = {}, s = 0; s < a; s++) {
                            var c = {
                                userId: 0,
                                currscore: 0,
                                wlscore: 0
                            };
                            c.userId = o.nullToDefault(l.Read.readInt(t), c.userId), c.currscore = o.nullToDefault(l.Read.readInt(t), c.currscore), c.wlscore = o.nullToDefault(l.Read.readInt(t), c.wlscore), r[String(c.userId)] = c
                        }
                        for (var u = o.nullToDefault(l.Read.readInt(t), 0), h = 0; h < u; h++) {
                            var p = {
                                userId: 0,
                                userInfo: {
                                    nickName: "",
                                    sex: 0,
                                    avatar: ""
                                },
                                roundsCount: 0,
                                winCount: 0,
                                loseCount: 0,
                                currscore: 0,
                                wlscore: 0,
                                list: []
                            };
                            p.userId = o.nullToDefault(l.Read.readInt(t), p.userId), p.roundsCount = o.nullToDefault(l.Read.readInt(t), p.roundsCount);
                            for (var f = 0; f < p.roundsCount; f++) {
                                var m = {
                                    wlscore: 0,
                                    leftScore: 0
                                };
                                m.wlscore = o.nullToDefault(l.Read.readInt(t), m.wlscore), m.leftScore = o.nullToDefault(l.Read.readInt(t), m.leftScore), m.wlscore >= 0 ? p.winCount++ : p.loseCount++, p.list.push(m)
                            }
                            o.isNotNull(r[String(p.userId)]) && (p.currscore = r[String(p.userId)].currscore, p.wlscore = r[String(p.userId)].wlscore), n.recordList.push(p)
                        }
                        n.time = o.nullToDefault(l.Read.readInt(t), 0), n.gameExtParams = o.nullToDefault(l.Read.readString(t), "");
                        var g = o.number_valueOf(l.Read.readInt(t), -1),
                            E = o.number_valueOf(l.Read.readInt(t), -1);
                        return n.gameStatu = g, n.tableStatu = E, d(e, null, n, i)
                    }, n.__defaultWriteOrRead = function(e, t) {
                        var i = _(t);
                        return i ? (a.logModel("【GPBRead】 HeadCmd[16进制] = " + o.number_formatToHex(e) + " 使用默认方式解析"), d(e, null, null, i)) : null
                    }, t
                }(f);
            m._instance = null;
            var g = function(e) {
                function t() {
                    return e.call(this, "GPBWrite", p.Write) || this
                }
                i(t, e), t.instance = function() {
                    return this._instance && null != this._instance || (this._instance = new t), this._instance
                };
                var n = t.prototype;
                return n.WritePhpRequest = function(e, t, i) {
                    if (!h(t, i)) return null
                }, n.WritePhpRequestNew = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = s.JsonEncode(i.data);
                    return n && (n = s.ZlibZip(n), n = s.base64_encode(n)), n || (n = "", i.isCompress = !1), null != n && null != n ? (l.Write.writeInt(t, i.data.mid), l.Write.writeInt(t, i.data.cmd), l.Write.writeInt(t, 1 == i.isCompress ? 1 : 0), l.Write.writeString(t, n)) : a.logModel("【GPBWrite】:WritePhpRequestNew  不存在正文数据"), i.data = n, i
                }, n.WriteServersHeart = function(e, t, i) {
                    return h(t, i) ? (i.isCompress = !1, l.Write.writeString(t, null), i.data = "", i) : null
                }, n.comm_OneKeyLoginGame = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    l.Write.writeInt(t, o.number_valueOf(n.gameId, 0)), l.Write.writeInt(t, o.number_valueOf(n.levelId, 0)), l.Write.writeString(t, o.nullToDefault(n.key, ""));
                    var a = s.JsonEncode(n.userInfo) || "";
                    l.Write.writeString(t, a), l.Write.writeInt(t, o.number_valueOf(n.flag, 0)), l.Write.writeShort(t, o.number_valueOf(n.changeTableType, 0));
                    var r = s.JsonEncode(n.extParam) || "";
                    l.Write.writeString(t, r), l.Write.writeInt(t, o.number_valueOf(n.gameVersion, 0)), l.Write.writeInt(t, o.number_valueOf(n.playType, 0)), l.Write.writeInt(t, o.number_valueOf(n.propertyId, 0));
                    var c = s.JsonEncode(n);
                    return i.data = c, i
                }, n.comm_LoginGameInto = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    l.Write.writeInt(t, o.number_valueOf(n.roomId)), l.Write.writeInt(t, o.number_valueOf(n.mid)), l.Write.writeString(t, n.key);
                    var a = s.JsonEncode(n.userInfo) || "";
                    return l.Write.writeString(t, a), l.Write.writeInt(t, 1), i.isCompress = !1, i.data = "", i
                }, n.comm_reqReady = function(e, t, i) {
                    return i.isCompress = !1, i.data = "", i
                }, n.comm_reqLogOutTry = function(e, t, i) {
                    return i.isCompress = !1, i.data = "", i
                }, n.comm_reqLogOut = function(e, t, i) {
                    return i.isCompress = !1, null != i.data && null != i.data.logoutFlag ? l.Write.writeByte(t, i.data.logoutFlag || 0) : l.Write.writeByte(t, 0), i.data = "", i
                }, n.comm_reqUserAI = function(e, t, i) {
                    return h(t, i) ? (i.isCompress = !1, l.Write.writeInt(t, i.data.ai || 0), i.data = "", i) : null
                }, n.comm_reqChangeTable = function(e, t, i) {
                    return i.isCompress = !1, i.data = "", i
                }, n.comm_reqBankUpData = function(e, t, i) {
                    return i.isCompress = !1, i.data = "", i
                }, n.comm_reqBankUpCount = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeInt(t, o.number_valueOf(n.mid, 0)), l.Write.writeInt(t, o.number_valueOf(n.hasShard, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqBankUp = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeInt(t, o.number_valueOf(n.mid, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqMatchSignUp = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return console.log("comm_reqMatchSignUp", n), l.Write.writeInt(t, o.number_valueOf(n.mid, 0)), l.Write.writeInt(t, o.number_valueOf(n.id, 0)), l.Write.writeString(t, "55ff85e777d50680fb52935076d7e55b"), l.Write.writeString(t, s.JsonEncode(n.userInfo) || ""), l.Write.writeInt(t, 0), l.Write.writeString(t, ""), l.Write.writeByte(t, 0), i.isCompress = !1, i.data = "", i
                }, n.comm_reqMatchUnSignUp = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return console.log("comm_reqMatchUnSignUp", n), l.Write.writeInt(t, o.number_valueOf(n.id, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqMatchUpdatePeople = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return console.log("comm_reqMatchUpdatePeople", n), l.Write.writeInt(t, o.number_valueOf(n.mid, 0)), l.Write.writeInt(t, o.number_valueOf(n.id, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqCreatePrivateRoom = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return console.log("comm_reqCreatePrivateRoom", n), l.Write.writeShort(t, o.number_valueOf(n.gameId, 0)), l.Write.writeInt(t, o.number_valueOf(n.baseChip, 0)), l.Write.writeString(t, ""), l.Write.writeString(t, ""), l.Write.writeInt(t, 0), l.Write.writeString(t, "55ff85e777d50680fb52935076d7e55b"), l.Write.writeString(t, s.JsonEncode(n.userInfo) || ""), l.Write.writeInt(t, 500), l.Write.writeInt(t, 0), l.Write.writeString(t, n.param || "[]"), l.Write.writeInt(t, o.number_valueOf(n.tableType, 0)), l.Write.writeInt(t, o.number_valueOf(n.times, 0)), l.Write.writeInt(t, o.number_valueOf(n.rounds, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqEnterPrivateRoom = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeShort(t, o.number_valueOf(n.gameId, 0)), l.Write.writeInt(t, o.number_valueOf(n.serverId, 0)), l.Write.writeInt(t, o.number_valueOf(n.tableId, 0)), l.Write.writeInt(t, o.number_valueOf(n.mid, 0)), l.Write.writeString(t, "55ff85e777d50680fb52935076d7e55b"), l.Write.writeString(t, s.JsonEncode(n.userInfo) || ""), l.Write.writeInt(t, 0), l.Write.writeString(t, ""), l.Write.writeInt(t, o.number_valueOf(n.tableType, 0)), l.Write.writeInt(t, o.number_valueOf(n.times, 0)), l.Write.writeInt(t, o.number_valueOf(n.rounds, 0)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqSearchPrivateRoom = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeString(t, n.tableId || ""), i.isCompress = !1, i.data = "", i
                }, n.comm_reqPrivateRoomKickUser = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeString(t, n.sName || ""), l.Write.writeInt(t, o.number_valueOf(n.tUid, 0)), l.Write.writeString(t, n.tName || ""), i.isCompress = !1, i.data = "", i
                }, n.comm_reqPrivateRoomChangeSeat = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeInt(t, o.number_valueOf(n.sUid, 0)), l.Write.writeInt(t, o.number_valueOf(n.sSeatId, -1)), l.Write.writeInt(t, o.number_valueOf(n.tUid, 0)), l.Write.writeInt(t, o.number_valueOf(n.tSeatId, -1)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqPrivateRoomChangeSeatReply = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    return l.Write.writeInt(t, o.number_valueOf(n.replyType, 0)), l.Write.writeInt(t, o.number_valueOf(n.sUid, 0)), l.Write.writeInt(t, o.number_valueOf(n.sSeatId, -1)), l.Write.writeInt(t, o.number_valueOf(n.tUid, 0)), l.Write.writeInt(t, o.number_valueOf(n.tSeatId, -1)), i.isCompress = !1, i.data = "", i
                }, n.comm_reqPrivateRoomDismiss = function(e, t, i) {
                    if (!h(t, i)) return null;
                    var n = i.data;
                    l.Write.writeInt(t, o.number_valueOf(n.optType, 1));
                    var a = s.JsonEncode(n.param) || "";
                    return l.Write.writeString(t, a), i.isCompress = !1, i.data = "", i
                }, n.comm_reqPrivateRoomContinue = function(e, t, i) {
                    return i.isCompress = !1, i.data = "", i
                }, t
            }(f);
            g._instance = null;
            var E = e("GPBWriteAndRead", function() {
                function e() {}
                return t(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance && null != this._instance || (this._instance = new e), this._instance
                    }
                }, {
                    key: "Write",
                    get: function() {
                        return this._Write && null != this._Write || (this._Write = g.instance()), this._Write
                    }
                }, {
                    key: "Read",
                    get: function() {
                        return this._Read && null != this._Read || (this._Read = m.instance()), this._Read
                    }
                }]), e
            }());
            E._instance = void 0, E._Read = void 0, E._Write = void 0, n._RF.pop()
        }
    }
}))