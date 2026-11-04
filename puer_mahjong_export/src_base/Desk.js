System.register("chunks:///_virtual/Desk.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseCache.ts", "./GCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.extends, n = e.createClass
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            l = e.BaseCache
        }, function(e) {
            u = e.GCache
        }],
        execute: function() {
            a._RF.push({}, "aa885SgT8pNzImipsXlQA4g", "Desk", void 0), e("Desk", function(e) {
                function a(t) {
                    var i;
                    return void 0 === t && (t = ""), (i = e.call(this, t) || this).ROOM_TYPE = {
                        NORMAL_ROOM_RECONNECT: 110,
                        ROOM_NORMAL: 100,
                        PRIVATE_ROOM: 101,
                        PRIVATE_ROOM_RECONNECT: 102,
                        PRIVATE_ROOM_STATUS_CHECK: 103,
                        NORMAL_ROOM_FRIEND_INVITE: 104
                    }, i.NORMAL_IMMEDIATE_MATCH = 0, i.FIXED_TIME_MATCH = 3, i.JJ_MATCH = 7, i.BET_MATCH = 8, i.MATCH_RECONNECT = 1001, i.MATCH_RECONNECT_INGAME = 1002, i.MATCH_NONE = 1003, i.roomInfo = void 0, i._tableID = 0, i._roomStates = -1, i._roomStatesList = [], i._kickUserStatus = 0, i.basechiptype = 0, i._isCanExitGame = !0, i._isCheckBankrupt = !0, i._moneyTypeID = 0, i._roomLevelChange = null, i._curLevel = 0, i._readyTime = 15, i._gameExpandInfo = new Map, i.curBankruptNum = 0, i._gameOverAutoPopup = !1, i._reqBankruptCountNum = 0, i._timerHandle = null, console.log("nodeUser---初始化Desk"), i.canExitGame = !0, i
                }
                t(a, e);
                var l = a.prototype;
                return l.onSaveLoginSuccess = function(e) {}, l.updateRoomInfo = function(e) {
                    this.roomInfo = i({}, e)
                }, l.getRoomInfo = function() {
                    return this.roomInfo
                }, l.insertPlayer = function(e) {}, l.getPlayerByMID = function(e) {
                    return null
                }, l.updatePlayerOnReady = function(e, t) {}, l.getPlayerReadyStateByMid = function(e) {
                    return !1
                }, l.getPlayerByLocalSeatID = function(e) {
                    return null
                }, l.getNextPlayerBySeatID = function(e) {
                    return null
                }, l.getPlayerSortSeat = function() {
                    return null
                }, l.dumpPlayers = function() {}, l.dumpPlayersReadyState = function() {}, l.resetGameData = function() {}, l.setRoomStates = function(e) {
                    this._roomStates = e, (0 == this._roomStatesList.length || this._roomStatesList[this._roomStatesList.length - 1] != this._roomStates) && this._roomStatesList.push(this._roomStates)
                }, l.getRoomStates = function() {
                    return this._roomStates
                }, l.isPlayIng = function() {
                    return s.GameRoomState.STATUS_PLAYING == this._roomStates
                }, l.hasReady = function() {
                    return !!this.isPlayIng() || !!u.User.LoginRoomState && c.dispatch(r.USER_HAS_READY)
                }, l.getLastRoomStates = function() {
                    return 0 == this._roomStatesList.length ? -1 : this._roomStatesList[this._roomStatesList.length - 1]
                }, l.getLastLastRoomStates = function() {
                    return this._roomStatesList.length < 2 ? -1 : this._roomStatesList[this._roomStatesList.length - 2]
                }, l.setGameStates = function(e) {}, l.getGameStates = function() {
                    return null
                }, l.setCurLevelID = function(e) {}, l.getCurLevelID = function() {
                    var e, t = o.number_valueOf(null == (e = this.roomInfo) ? void 0 : e.levelId);
                    if (0 == t) {
                        var i = u.SelectGame.getCurRoomInfo();
                        t = null == i ? void 0 : i.level
                    }
                    return t
                }, l.setCurTableID = function(e) {
                    this._tableID = e
                }, l.getCurTableID = function() {
                    return this._tableID
                }, l.setCurGameID = function(e) {}, l.getCurGameID = function() {
                    return u.SelectGame.getCurGameId()
                }, l.getMoneyNameByID = function(e) {
                    switch (e) {
                        case s.PropertyType.SILVER_COIN:
                            return "银币";
                        case s.PropertyType.GOLD_BAR:
                            return "金条";
                        case s.PropertyType.DIAMOND:
                            return "兑换券";
                        default:
                            return ""
                    }
                }, l.getRoomInfoTx = function() {
                    var e, t;
                    null == (e = this.roomInfo) || e.level, null == (t = this.roomInfo) || t.basechiptype
                }, l.getHeadInfoComponentName = function() {
                    return "GameHeadInfoPrefabCtr"
                }, l.updateGameExpandInfo = function(e, t) {
                    this._gameExpandInfo.set(e, {
                        time: o.time(),
                        value: t
                    })
                }, l.getGameExpandInfo = function(e) {
                    return this._gameExpandInfo.get(e)
                }, l.onReceiveServerGameStart = function() {
                    this.curBankruptNum = o.number_valueOf(u.BankrupData.curBankruptCount)
                }, l.updateLastIntoRoomData = function(e) {
                    this.setRoomChangeLevelInfo(e);
                    var t = u.SelectGame.getCurRoomInfo();
                    t && (this._curLevel = t.level)
                }, l.setRoomChangeLevelInfo = function(e) {
                    this._roomLevelChange = e
                }, l.getRoomChangeLevelInfo = function() {
                    return this._roomLevelChange
                }, l.checkLevelValid = function(e) {
                    if (void 0 === e && (e = !1), u.SelectGame.isInMatchRoom() || u.SelectGame.isInPrivateRoom()) return !0;
                    if (this._gameOverAutoPopup = !1, this.stopBankruptHandle(), u.BankrupData.isMineBankrupt() && e) return !1;
                    if (o.table_isEmpty(this._roomLevelChange)) return this._checkLevelChange(e);
                    if (1 == this._roomLevelChange.flag) return this._jumpUpLevel(this._roomLevelChange.level), !1;
                    if (-1 == this._roomLevelChange.flag) {
                        var t = this._curLevel || this._roomLevelChange.level;
                        if (t) return this.checkCurLevelMoney(null, t) ? (this._updateLevel(t), !0) : (this._showRoomLevelGift(1, t), !1)
                    }
                }, l._checkLevel = function() {
                    var e, t = null == (e = u.SelectGame.getCurRoomInfo()) ? void 0 : e.tab_id,
                        i = u.SelectGame.getBestLevelByLevel(u.SelectGame.getCurGameId(), t, this._roomLevelChange.level);
                    if (i) {
                        var n = i.level;
                        this._roomLevelChange.level != n && (this._updateLevel(n), this._roomLevelChange.level = n)
                    }
                }, l._jumpUpLevel = function(e) {
                    this._updateLevel(e), c.dispatch(r.NOTIFY_CHANGETABLE_READY, {
                        tag: "up"
                    })
                }, l.isChangeTable = function() {
                    if (u.BankrupData.isMineBankrupt()) return !1;
                    if (o.table_isEmpty(this._roomLevelChange)) {
                        var e = u.SelectGame.getCurRoomInfo();
                        if (e) {
                            var t = e.level,
                                i = u.SelectGame.getBestLevelByLevel(u.SelectGame.getCurGameId(), e.tab_id, t);
                            if (i) {
                                var n = i.level;
                                return t != n && this._updateLevel(n), t != n
                            }
                        }
                    } else if (1 == this._roomLevelChange.flag || -1 == this._roomLevelChange.flag) return !0
                }, l._updateLevel = function(e) {
                    u.SelectGame.updateLastIntoRoomData({
                        level: e
                    }), c.dispatch(r.NOTIFY_UPDATE_LEVEL)
                }, l._checkLevelChange = function(e) {
                    void 0 === e && (e = !1);
                    var t = u.SelectGame.getCurRoomInfo();
                    if (t) {
                        var i = t.level,
                            n = u.SelectGame.getBestLevelByLevel(u.SelectGame.getCurGameId(), t.tab_id, i);
                        if (n) {
                            var a = n.level;
                            if (i < a) return this._jumpUpLevel(a), !1;
                            if (i > a) return this._showRoomLevelGift(1, i), !1;
                            if (u.BankrupData.isMineBankrupt()) return 0 == e && c.dispatch(r.VIEW_SHOW_BANKRUPT), !1;
                            if (0 == this.checkCurLevelMoney({})) return this._showRoomLevelGift(1, i), !1
                        }
                    }
                    return !0
                }, l._showRoomLevelGift = function(e, t) {
                    var i = u.SelectGame.getGameRoomInfoByRoomLevelID(u.SelectGame.getCurGameId(), t),
                        n = u.User.getUserMoneyByID(null == i ? void 0 : i.base_chip_type),
                        a = o.number_valueOf(null == i ? void 0 : i.min_money, 3e3),
                        s = {
                            diff: n > a ? n - a : a - n,
                            level: t,
                            type: e
                        };
                    c.dispatch(r.NET_RESQ_ROOM_LEVEL_GIFT, s)
                }, l.checkCurLevelMoney = function(e, t) {
                    if (!t)
                        if (e && e.levelId) t = e.levelId;
                        else {
                            var i = u.SelectGame.getCurRoomInfo();
                            i && (t = i.level)
                        } if (t) {
                        var n = u.SelectGame.getGameRoomInfoByRoomLevelID(u.SelectGame.getCurGameId(), t);
                        if (n) {
                            var a = o.number_valueOf(n.base_chip_type),
                                r = o.number_valueOf(n.min_money);
                            if (o.number_valueOf(u.User.getUserMoneyByID(a)) < r) return !1
                        }
                    }
                    return !0
                }, l.stopBankruptHandle = function() {
                    this._timerHandle && (clearTimeout(this._timerHandle), this._timerHandle = null)
                }, l.checkBankruptCount = function() {}, l.checkAutoPopup = function() {
                    console.log("自动弹窗------"), this._gameOverAutoPopup = !0, this._reqBankruptCountNum = 0, this._gameOverAutoPopup = !1
                }, n(a, [{
                    key: "MoneyTypeID",
                    get: function() {
                        return this._moneyTypeID
                    },
                    set: function(e) {
                        this._moneyTypeID = e
                    }
                }, {
                    key: "KickUserStatus",
                    get: function() {
                        return this._kickUserStatus
                    },
                    set: function(e) {
                        this._kickUserStatus = e
                    }
                }, {
                    key: "switchCheckBankrupt",
                    get: function() {
                        return this._isCheckBankrupt
                    },
                    set: function(e) {
                        this._isCheckBankrupt = e
                    }
                }, {
                    key: "readyTime",
                    get: function() {
                        return this._readyTime || 15
                    },
                    set: function(e) {
                        this._readyTime = e
                    }
                }, {
                    key: "canExitGame",
                    get: function() {
                        return this._isCanExitGame
                    },
                    set: function(e) {
                        null != e && null != e || (e = !0), this._isCanExitGame = e
                    }
                }]), a
            }(l)), a._RF.pop()
        }
    }
}))