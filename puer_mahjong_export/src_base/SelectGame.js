System.register("chunks:///_virtual/SelectGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./SubGameConfig.ts", "./AppEvent.ts", "./GameConstant.ts", "./Encrypto.ts", "./InterfaceDefines.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.GameSwitchConf
        }, function(e) {
            r = e.GameTxt
        }, function(e) {
            s = e.Logger
        }, function(e) {
            c = e.Utils
        }, function(e) {
            l = e.SubGameConfig
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            d = e.GConstants, _ = e.StoreKey
        }, function(e) {
            h = e.Encrypt
        }, function(e) {
            p = e.inf_GameSceneType
        }, function(e) {
            f = e.LocalStorage
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            g = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "726a9K4GalHYYMd7qckzMAp", "SelectGame", void 0), e("SelectGame", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "SelectGame") || this).__User = null, i._serverGameConfig = [], i._serverGameLevelTabList = {}, i._levelConfigMap = new Map, i._serverGamePersonOnline = new Map, i._gameRuleConfig = [], i._degradeRoomInfo = null, i._upLevelRoomInfo = null, i._roomLevelGiftData = null, i._roomPropConfig = null, i._intoGameData = null, i._curGameId = a.CurrentGameID, i.lastGames = [], i.lastPrivateGames = [], i.LASTPRIVATEGAMENUM = 3, i._teamData = {
                        retcode: 0,
                        errcode: "",
                        teamid: 0,
                        gameId: 0,
                        ready: [],
                        error_code: d.TEAM_ERROR_CODE.NORMAL
                    }, i.__User = t, i
                }
                t(n, e);
                var g = n.prototype;
                return g.getGameLevelConfigKeys = function() {
                    return ["base_chip", "base_chip_type", "canExit", "desc", "extra_info", "icon", "level", "levelname", "match", "max_money", "min_money", "play_mode", "sort", "broken_stat_in", "force_quit_tax", "force_quit_switch", "new_game_mode", "tab_name", "tab_id", "service_fee"]
                }, g.clear = function() {
                    this._serverGameLevelTabList = {}, this._serverGamePersonOnline.clear(), this._levelConfigMap.clear()
                }, g.updateIntoGameLevel = function(e) {
                    this._intoGameData && (this._intoGameData.Level = e, this._intoGameData.Scene = this.isInMatchRoom() ? p.Match : this.isInPrivateRoom() ? p.Private : p.Select)
                }, g.isInMatchRoom = function() {
                    return !!this._intoGameData && this._intoGameData.Level == d.GameRoomLevelConf.MATCH_DINGJU_ROOMID
                }, g.isInPrivateRoom = function() {
                    return !!this._intoGameData && (this._intoGameData.Level == d.GameRoomLevelConf.PRIVATE_ROOMID_JIFEN || this._intoGameData.Level == d.GameRoomLevelConf.PRIVATE_ROOMID || this._intoGameData.Level == d.GameRoomLevelConf.PRIVATE_ROOMID_CRYSTAL)
                }, g.isNormalRoom = function() {
                    return !this.isInMatchRoom() && !this.isInPrivateRoom()
                }, g.setLastIntoRoomData = function(e) {
                    var t = this.__User.getUserMid();
                    if (null != t) {
                        var i = h.JsonEncode2(e),
                            n = c.string_format(_.USER_INTO_GAME_RECORD, t);
                        f.set(n, i), (null == e ? void 0 : e.level) == d.GameRoomLevelConf.PRIVATE_ROOMID_JIFEN || (null == e ? void 0 : e.level) == d.GameRoomLevelConf.PRIVATE_ROOMID || (null == e ? void 0 : e.level) == d.GameRoomLevelConf.PRIVATE_ROOMID_CRYSTAL ? this.setLastPrivateGames(c.number_valueOf(null == e ? void 0 : e.gameId)) : this.setLastGames(c.number_valueOf(null == e ? void 0 : e.gameId))
                    }
                }, g.getLastIntoRoomData = function() {
                    var e = this.__User.getUserMid();
                    if (null == e) return null;
                    var t = c.string_format(_.USER_INTO_GAME_RECORD, e),
                        i = f.get(t, null);
                    return h.JsonDecode(i)
                }, g._checkRecommendGame = function() {
                    var e = this.__User.getUserMid();
                    null != e && (f.get(_.LOGIN_VERSION, null) != a.AppVer && f.remove(c.string_format(_.USER_LAST_GAME_RECORD, e)), f.set(_.LOGIN_VERSION, a.AppVer))
                }, g.getLastGames = function() {
                    var e = this;
                    if (this.lastGames.length > 0) return this.lastGames;
                    var t = this.__User.getUserMid();
                    if (null == t) return null;
                    this._checkRecommendGame();
                    var i = c.string_format(_.USER_LAST_GAME_RECORD, t),
                        n = f.get(i, null),
                        a = h.JsonDecode(n) || [];
                    return 0 == a.length && l.DefaultSubGameIds.forEach((function(t) {
                        e.setLastGames(t, !0), a.push(t + "")
                    })), this.lastGames = a, a
                }, g.getLastPlayGames = function() {
                    var e = this.getLastGames(),
                        t = [],
                        i = new Set,
                        n = function(e) {
                            var n = String(e);
                            i.has(n) || (i.add(n), t.push(n))
                        };
                    e.forEach((function(e) {
                        return n(e)
                    })), l.DefaultSubGameIds.forEach((function(e) {
                        return n(e)
                    }));
                    var a = !o.isShowLYCSubgame;
                    if (a) {
                        var r = String(d.GameID.LYC),
                            s = t.indexOf(r); - 1 !== s && (t.splice(s, 1), i.delete(r))
                    }
                    if (t.length < d.HALL_MAIN_GAMENUM)
                        for (var c = l.SupportSubGameIds, u = 0; u < c.length && !(t.length >= d.HALL_MAIN_GAMENUM); u++) {
                            var _ = String(c[u]);
                            i.has(_) || a && _ === String(d.GameID.LYC) || (i.add(_), t.push(_))
                        }
                    return t
                }, g.getHotGames = function() {
                    var e = this.__User.SelectGame.getLastGames(),
                        t = c.shallowCopy(l.SupportSubGameIds);
                    if ((null == e ? void 0 : e.length) > 0) {
                        var i = e.length > d.HALL_MAIN_GAMENUM ? e.slice(d.HALL_MAIN_GAMENUM) : [];
                        if (e.forEach((function(e) {
                                t = t.filter((function(t) {
                                    return t != c.number_valueOf(e) && t != d.GameID.DouDiZhu
                                }))
                            })), i.length > 0)
                            for (var n = i.length - 1; n >= 0; n--) t.unshift(c.number_valueOf(i[n]))
                    } else t = t.filter((function(e) {
                        return l.DefaultSubGameIds.includes(c.number_valueOf(e))
                    }));
                    return o.isShowLYCSubgame || (t = t.filter((function(e) {
                        return e != d.GameID.LYC
                    }))), t
                }, g.getHotGameNames = function() {
                    var e = this,
                        t = [],
                        i = this.getHotGames();
                    return null == i || i.forEach((function(i) {
                        t.push(e.getCurGameName(i))
                    })), t
                }, g.setLastGames = function(e, t) {
                    if (void 0 === t && (t = !1), (e = c.number_valueOf(e)) && e != a.CurrentGameID && e != d.GameID.DouDiZhu) {
                        0 == this.lastGames.length && 0 == t && (this.lastGames = this.getLastGames());
                        var i = e + "",
                            n = this.lastGames.indexOf(i);
                        n > -1 && this.lastGames.splice(n, 1), this.lastGames.unshift(i);
                        var o = this.__User.getUserMid();
                        if (null == o) return null;
                        var r = c.string_format(_.USER_LAST_GAME_RECORD, o);
                        f.set(r, h.JsonEncode2(this.lastGames))
                    }
                }, g.setLastPrivateGames = function(e, t) {
                    if (void 0 === t && (t = !1), e = c.number_valueOf(e), (a.deviceInfo.CurrentGameID == e || l.SupportPrivateSubGameIds.includes(e)) && e && e != a.CurrentGameID && e != d.GameID.DouDiZhu) {
                        0 == this.lastPrivateGames.length && 0 == t && (this.lastPrivateGames = this.getLastPrivateGames());
                        var i = e + "",
                            n = this.lastPrivateGames.indexOf(i);
                        n > -1 && this.lastPrivateGames.splice(n, 1), this.lastPrivateGames.unshift(i), this.lastPrivateGames.length > this.LASTPRIVATEGAMENUM && this.lastPrivateGames.pop();
                        var o = this.__User.getUserMid();
                        if (null == o) return [];
                        var r = c.string_format(_.USER_LAST_PRIVATE_GAME_RECORD, o);
                        f.set(r, h.JsonEncode2(this.lastPrivateGames))
                    }
                }, g.getLastPrivateGames = function() {
                    if (this.lastPrivateGames.length > 0) return this.lastPrivateGames;
                    var e = this.__User.getUserMid();
                    if (null == e) return [];
                    var t = c.string_format(_.USER_LAST_PRIVATE_GAME_RECORD, e),
                        i = f.get(t, null),
                        n = h.JsonDecode(i) || [];
                    return this.lastPrivateGames = n, n
                }, g.updateLastIntoRoomData = function(e) {
                    var t = this.getLastIntoRoomData();
                    t && t.gameId ? (c.isNotNull(null == e ? void 0 : e.base_chip_type) && (t.base_chip_type = e.base_chip_type), c.isNotNull(null == e ? void 0 : e.level) && (t.level = null == e ? void 0 : e.level), c.isNotNull(null == e ? void 0 : e.playMode) && (t.playMode = e.playMode), c.isNotNull(null == e ? void 0 : e.tab_id) && (t.tab_id = e.tab_id)) : t = e || {}, this.setLastIntoRoomData(t), e && e.level && this.intoGameData && (this.intoGameData.Level = e.level)
                }, g.getLastGameTabId = function(e) {
                    var t = 0,
                        i = this.getLastIntoRoomData();
                    return t = i && i.gameId && Number(i.gameId) == e ? i.tab_id : this.getDefaultTabId(e), t = c.number_valueOf(t), this.checkGameTabId(e, t)
                }, g.checkGameTabId = function(e, t) {
                    var i = this._checkTabIdValid(e, t);
                    return null == i ? this.getDefaultTabId(e) : i
                }, g._checkTabIdValid = function(e, t) {
                    for (var i = this.getServerGameLevelTabListByGameID(e), n = 0; n < (null == i ? void 0 : i.length); n++)
                        if (i[n].tab_id == t) return t;
                    return null
                }, g.getDefaultPlayMode = function(e) {
                    var t = 0,
                        i = this.getServerGameLevelTabListByGameID(e);
                    if (!c.table_isEmpty(i) && i[0] && null != i[0].tab_id)
                        for (var n in i[0].data)
                            if (Object.prototype.hasOwnProperty.call(i[0].data, n)) {
                                var a = i[0].data[n];
                                if (a) {
                                    t = a.play_mode;
                                    break
                                }
                            } return t
                }, g.getBestLevelPlayModeName = function(e, t) {
                    void 0 === t && (t = null);
                    var i = this.getBestLevel(e, t) || {},
                        n = this.getGameLevelTabInfo(e, i.tab_id);
                    if (n && n.tab_name) {
                        var a = n.tab_name || "";
                        return i.levelname && (a += " · " + i.levelname), a
                    }
                    return ""
                }, g.getDefaultTabId = function(e) {
                    var t = this.getServerGameLevelTabListByGameID(e);
                    return !c.table_isEmpty(t) && t[0] && null != t[0].tab_id ? t[0].tab_id : 0
                }, g.updateServerGameConfig = function(e) {
                    if (e) {
                        for (var t = ["desc", "name", "id", "game_pkg", "display", "has_free", "hash", "icon", "icon_more", "iconcomming", "isCartoon", "isMatch", "isPrivate", "isnew", "play_model_labels", "pushdate", "size", "url", "version", "sort", "applets_jump"], i = ["pushdate", "size", "url", "version", "gpm"], n = ["sort", "gpid", "icon", "label"], a = [], o = 0; o < e.length; o++) {
                            var r = e[o];
                            if (r) {
                                var s = this.mergeArray(t, r);
                                if (s) {
                                    if (s.play_model_labels && (s.play_model_labels = this.mergeArray(i, s.play_model_labels), s.play_model_labels.gpm)) {
                                        for (var c = [], l = 0; l < s.play_model_labels.gpm.length; l++) {
                                            var u = s.play_model_labels.gpm[l];
                                            if (u) {
                                                var d = this.mergeArray(n, u);
                                                d && c.push(d)
                                            }
                                        }
                                        s.play_model_labels.gpm = c
                                    }
                                    a.push(s)
                                }
                            }
                        }
                        return null != a && a.length && (this._serverGameConfig = a, this.setLocalSaveGameConfig()), this._serverGameConfig
                    }
                }, g.updateGameSortConfig = function(e) {
                    if (!c.table_isEmpty(this._serverGameConfig)) {
                        for (var t in this._serverGameConfig) {
                            var i = this._serverGameConfig[t];
                            for (var n in e)
                                if (i.game_pkg == e[n].game_pkg) {
                                    i.sort = e[n].sort;
                                    break
                                }
                        }
                        this._serverGameConfig.sort((function(e, t) {
                            return c.number_valueOf(e.sort) - c.number_valueOf(t.sort)
                        })), this.setLocalSaveGameConfig()
                    }
                }, g.setLocalSaveGameConfig = function() {
                    var e;
                    return console.log("大厅游戏配置返回:设置本地", this._serverGameConfig), null != (e = this._serverGameConfig) && e.length && f.set(_.HALL_GAME_CONF, JSON.stringify(this._serverGameConfig)), !0
                }, g.updateServerGameLevelTabList = function(e, t, i) {
                    if (void 0 === i && (i = !1), !c.isNull(e) && !c.isNull(t)) {
                        this._serverGameLevelTabList[e] || (this._serverGameLevelTabList[e] = []);
                        for (var n = ["data", "img_off", "img_on", "tab_desc", "tab_id", "tab_name"], a = [], o = this.getGameLevelConfigKeys(), r = 0; r < t.length; r++) {
                            var s = t[r],
                                u = !1;
                            if ((s = this.mergeArray(n, s)) && !l.ignoreGameLevels(e, s.tab_id)) {
                                var _ = {};
                                if (s.data)
                                    for (var h in s.data)
                                        if (Object.prototype.hasOwnProperty.call(s.data, h)) {
                                            var p = s.data[h];
                                            (p = this.mergeArray(o, p)) && (p.base_chip = c.number_valueOf(p.base_chip), p.base_chip_type = c.number_valueOf(p.base_chip_type), p.level = c.number_valueOf(p.level), p.max_money = c.number_valueOf(p.max_money, -1), p.min_money = c.number_valueOf(p.min_money, -1), p.play_mode = c.number_valueOf(p.play_mode), p.sort = c.number_valueOf(p.sort), p.broken_stat_in = c.number_valueOf(p.broken_stat_in), p.new_game_mode = c.number_valueOf(p.new_game_mode), p.service_fee = c.number_valueOf(p.service_fee), p.base_chip_type == d.PropertyType.SILVER_COIN && (u = !0, p.tab_name = s.tab_name, p.tab_id = c.number_valueOf(s.tab_id), p.extra_info && (p.force_quit_tax = c.number_valueOf(p.extra_info.force_quit_tax), p.force_quit_switch = c.number_valueOf(p.extra_info.force_quit_switch, 1)), _[h] = p))
                                        } u && (s.data = _, a.push(s))
                            }
                        }
                        if (i) this._serverGameLevelTabList[e] = a;
                        else if (a.length > 0) {
                            var f = this._serverGameLevelTabList[e];
                            if (0 === f.length) this._serverGameLevelTabList[e] = a;
                            else {
                                var m = new Map;
                                f.forEach((function(e) {
                                    null != e.tab_id && m.set(e.tab_id, e)
                                })), a.forEach((function(e) {
                                    null != e.tab_id && m.set(e.tab_id, e)
                                })), this._serverGameLevelTabList[e] = Array.from(m.values())
                            }
                        }
                        return this._analysisLevelConfig(e), this._serverGameLevelTabList[e]
                    }
                }, g._analysisLevelConfig = function(e) {
                    var t = this,
                        i = this._serverGameLevelTabList[e];
                    Object.keys(i).forEach((function(n) {
                        var a = i[n];
                        a.data && Object.keys(a.data).forEach((function(i) {
                            if (a.data[i]) {
                                var n = {
                                    base_chip_type: c.number_valueOf(a.data[i].base_chip_type),
                                    min_money: c.number_valueOf(a.data[i].min_money, 3e3),
                                    max_money: c.number_valueOf(a.data[i].max_money, -1),
                                    level: c.number_valueOf(a.data[i].level),
                                    tab_id: c.number_valueOf(a.data[i].tab_id),
                                    play_mode: c.number_valueOf(a.data[i].play_mode),
                                    gameId: c.number_valueOf(e)
                                };
                                if (t._levelConfigMap.has(e)) {
                                    var o = t._levelConfigMap.get(e),
                                        r = o.findIndex((function(e) {
                                            return e.level === n.level
                                        })); - 1 !== r ? o[r] = n : o.push(n)
                                } else t._levelConfigMap.set(e, [n])
                            }
                        }))
                    }))
                }, g.initHallGameConfigByLocal = function() {
                    this.getServerGameConfig()
                }, g.getMoreGameConfig = function(e) {
                    var t = this.getServerGameConfig();
                    if (c.table_isEmpty(t)) return [];
                    var i = [];
                    for (var n in t) {
                        var a = t[n];
                        0 != a.display && i.push(a)
                    }
                    return i
                }, g.getServerGameConfig = function() {
                    var e;
                    if (null == (e = this._serverGameConfig) || !e.length) {
                        this._serverGameConfig = [];
                        var t = _.HALL_GAME_CONF,
                            i = f.get(t);
                        if ("string" == typeof i && i.length) try {
                            this._serverGameConfig = c.table_verify(JSON.parse(i), !0)
                        } catch (e) {}
                    }
                    return this._serverGameConfig
                }, g.updateServerGamePersonOnline = function(e) {
                    if (!c.isNull(e))
                        for (var t in this._serverGamePersonOnline.clear(), e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                var i = e[t],
                                    n = new Map;
                                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && n.set(c.number_valueOf(a), c.number_valueOf(i[a]));
                                this._serverGamePersonOnline.set(c.number_valueOf(t), n)
                            }
                }, g.getServerGamePersonOnline = function() {
                    return this._serverGamePersonOnline
                }, g.getOnlineCount = function(e, t) {
                    void 0 === t && (t = -1);
                    var i = this._serverGamePersonOnline.get(c.number_valueOf(e));
                    if (!i) return 0;
                    if (-1 === (t = c.number_valueOf(t, -1))) {
                        var n = 0;
                        return i.forEach((function(e) {
                            n += e
                        })), n
                    }
                    return i.get(t) || 0
                }, g.getServerGameLevelTabListByGameID = function(e) {
                    return c.isNull(e) ? null : this._serverGameLevelTabList[e] ? this._serverGameLevelTabList[e] : null
                }, g.getServerGameLevelPersonListByGameID = function(e) {
                    return c.isNull(e) ? null : this._levelConfigMap.has(e) ? this._levelConfigMap.get(e) : null
                }, g.getGameConfigByGameID = function(e) {
                    if (c.isNull(e)) return null;
                    for (var t = 0; t < this._serverGameConfig.length; t++) {
                        var i = this._serverGameConfig[t];
                        if (i && i.id == e) return i
                    }
                    return null
                }, g.getGameVersionByGameID = function(e) {
                    if (c.isNull(e)) return a.deviceInfo.GameVersions[a.CurrentGameID];
                    var t = this.getGameConfigByGameID(e);
                    return t && c.number_valueOf(t.version) > 0 ? t.version : a.deviceInfo.GameVersions[e] ? a.deviceInfo.GameVersions[e] : a.deviceInfo.GameVersions[a.CurrentGameID]
                }, g.getGameConfigLevelListByGameID = function(e) {
                    if (c.isNull(e)) return null;
                    var t = this.getGameConfigByGameID(e);
                    return t && t.play_model_labels && t.play_model_labels.gpm ? t.play_model_labels.gpm : null
                }, g.getGameLevelListByGameID = function(e) {
                    if (c.isNull(e)) return null;
                    var t = this.getServerGameLevelTabListByGameID(e);
                    return t && t.data ? t.data : null
                }, g.getGameLevelRule = function(e, t) {
                    if (c.isNull(e) || c.isNull(t)) return null;
                    var i = this.getGameConfigLevelListByGameID(e);
                    if (i && i.length > 0)
                        for (var n = 0; n < i.length; n++) {
                            var a = i[n];
                            if (a.gpid == t) return a
                        }
                    return null
                }, g.getGameLevelTabInfo = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), c.isNull(e)) return null;
                    var n = this.getServerGameLevelTabListByGameID(e),
                        a = null == n ? void 0 : n.length;
                    if (a > 0) {
                        if (c.isNull(t)) {
                            if (c.isNull(i)) return n[0];
                            for (var o = 0; o < a; o++) {
                                var r;
                                if ((null == (r = n[o]) ? void 0 : r.data).hasOwnProperty(i)) return n[o]
                            }
                        }
                        for (var s = 0; s < a; s++) {
                            var l = n[s];
                            if (l.tab_id == t) return l
                        }
                    }
                    return null
                }, g.getGameLevelInfoByLevel = function(e, t) {
                    if (c.isNull(e)) return null;
                    var i = null,
                        n = this.getServerGameLevelTabListByGameID(e),
                        a = null == n ? void 0 : n.length;
                    if (a > 0 && (t = c.number_valueOf(t), !c.isNull(t)))
                        for (var o = function(e) {
                                var a, o = null == (a = n[e]) ? void 0 : a.data;
                                Object.keys(o).forEach((function(e) {
                                    c.number_valueOf(e) == t && (i = o[e])
                                }))
                            }, r = 0; r < a; r++) o(r);
                    return i
                }, g.getGameLevelRoomListAll = function(e) {
                    if (c.isNull(e)) return null;
                    var t = this.getServerGameLevelTabListByGameID(e);
                    if (t) {
                        for (var i = [], n = 0; n < t.length; n++) {
                            var a = t[n];
                            if (a && a.data)
                                for (var o in a.data)
                                    if (Object.prototype.hasOwnProperty.call(a.data, o)) {
                                        var r = a.data[o];
                                        null != r && i.push(r)
                                    }
                        }
                        return i
                    }
                    return null
                }, g.getGameLevelRoomSortList = function(e, t, i) {
                    if (void 0 === i && (i = null), c.isNull(e) || c.isNull(t)) return null;
                    var n = this.getGameLevelTabInfo(e, t, i);
                    if (c.isNull(n)) return null;
                    var a = new Map;
                    for (var o in n.data)
                        if (Object.prototype.hasOwnProperty.call(n.data, o)) {
                            var r = n.data[o];
                            r && (r.sort = c.number_valueOf(r.sort), a.set(o, r))
                        } if (a.size > 0) {
                        var s = [],
                            l = Array.from(a);
                        l.sort((function(e, t) {
                            return e[1].sort - t[1].sort
                        }));
                        for (var u = 0; u < l.length; u++) s.push(l[u][1]);
                        return s
                    }
                    return null
                }, g.isLevelExist = function(e, t) {
                    return !!this.getGameLevelRoomSortList(e, t)
                }, g.getGameLevelRoomMinMoney = function(e, t) {
                    if (void 0 === t && (t = null), c.isNull(e)) return null;
                    var i;
                    if ((i = (t = c.number_valueOf(t, -1)) >= 0 ? this.getGameLevelRoomSortList(e, t) : this.getGameLevelRoomListAll(e)) && i.length > 0) {
                        for (var n = 0, a = i[n].min_money, o = 0; o < i.length; o++) {
                            var r = i[o];
                            r.min_money < a && (a = r.min_money, n = o)
                        }
                        return i[n]
                    }
                    return null
                }, g.getGameLevelRoomCanEnter = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), c.isNull(e)) return null;
                    var n;
                    if (t = c.number_valueOf(t, null), (n = c.isNotNull(t) ? this.getGameLevelRoomSortList(e, t) : this.getGameLevelRoomListAll(e)) && n.length > 0) {
                        if (c.isNotNull(i)) {
                            for (var a = n.length - 1; a >= 0; a--) {
                                var o = n[a],
                                    r = c.number_valueOf(o.level, null),
                                    s = this.__User.getUserMoneyByID(o.base_chip_type);
                                if (i == r && o.min_money <= s && s <= o.max_money) return o
                            }
                            for (var l = n.length - 1; l >= 0; l--) {
                                var u = n[l],
                                    d = this.__User.getUserMoneyByID(u.base_chip_type);
                                if (u.min_money <= d && d <= u.max_money) return u
                            }
                            return n[0]
                        }
                        for (var _ = n.length - 1; _ >= 0; _--) {
                            var h = n[_],
                                p = this.__User.getUserMoneyByID(h.base_chip_type);
                            if (h.min_money <= p && p <= h.max_money) return h
                        }
                        return n[0]
                    }
                    return null
                }, g.getGameRoomInfoByRoomLevelID = function(e, t) {
                    if (null == (t = c.number_valueOf(t, null))) {
                        var i = this.getCurRoomInfo();
                        null != i && i.level && (t = null == i ? void 0 : i.level)
                    }
                    if (c.isNull(e) || c.isNull(t)) return null;
                    var n = this.getServerGameLevelTabListByGameID(e);
                    if (n)
                        for (var a = 0; a < n.length; a++) {
                            var o = n[a];
                            if (o && o.data && null != o.data[t]) return o.data[t]
                        }
                    return null
                }, g.setDegradeInfo = function(e) {
                    this._degradeRoomInfo = e
                }, g.getDegradeInfo = function() {
                    return this._degradeRoomInfo
                }, g.setRoomUpLevelInfo = function(e) {
                    this._upLevelRoomInfo = e
                }, g.getRoomUpLevelInfo = function() {
                    return this._upLevelRoomInfo
                }, g.getPropByLevelPropName = function(e, t, i) {
                    var n = this.getGameRoomInfoByRoomLevelID(e, t);
                    return n ? "broken_stat_in" == i ? 0 == n.broken_stat_in : "min_money" == i ? c.number_valueOf(n.min_money) : "max_money" == i ? c.number_valueOf(n.max_money) : "levelname" == i ? n.levelname || "" : "base_chip" == i ? c.number_valueOf(n.base_chip) : "base_chip_type" == i ? c.number_valueOf(n.base_chip_type) : null : null
                }, g.getIntoRoomData = function() {
                    return this.intoGameData
                }, g.willEnterGame = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === i && (i = p.Select), !c.isNull(e))
                        if ((e = c.number_valueOf(e, 0)) <= 0) m.dispatch(u.SYS_TOAST_TIP, {
                            content: r.hall_goto_game_no_gameid
                        });
                        else {
                            if (0 == (t = c.number_valueOf(t, 0))) {
                                var n = this.getGameLevelRoomListAll(e);
                                if (!n || n.length <= 0) return this.print("Error：请求进入房间=>快速开始，获取到的房间列表为空 此时重新请求 " + e + " 房间数据信息"), m.dispatch(u.SYS_TOAST_TIP, {
                                    content: r.hall_goto_game_no_levelList
                                }), void m.dispatch(u.NET_REQ_GAME_LEVEL_ROOM_TAB, e)
                            } else {
                                var a = this.getGameRoomInfoByRoomLevelID(e, t);
                                if (!a || a.length <= 0) return this.print("Error：请求进入房间=>正常点击，获取到的房间列表为空 此时重新请求 " + e + " 房间数据信息"), m.dispatch(u.SYS_TOAST_TIP, {
                                    content: r.hall_goto_game_no_levelList
                                }), void m.dispatch(u.NET_REQ_GAME_LEVEL_ROOM_TAB, e)
                            }
                            var o = {
                                GameID: e,
                                Level: t,
                                TableID: 0,
                                isReconn: !1,
                                Scene: i
                            };
                            this.intoGameData = o, this.clearPrivateInviteInfo(), m.dispatch(u.GAME_GOTO_SHOW)
                        }
                }, g.clearPrivateInviteInfo = function() {
                    var e = this.__User.PrivateData.getPrivateRoomInviteInfoKey();
                    if (!c.string_isEmpty(e)) {
                        var t = this.__User.PrivateData.getPrivateRoomInviteUserIdList();
                        t && t.length > 1 ? (m.dispatch(u.NET_REQ_PRIVATE_ROOM_INVITE, e, "leave"), this.__User.PrivateData.clearPrivateRoomInviteInfo()) : (m.dispatch(u.NET_REQ_PRIVATE_ROOM_INVITE, e, "clear"), this.__User.PrivateData.clearPrivateRoomInviteInfo())
                    }
                    this.__User.setUserJoinRoomCode("")
                }, g.getBestLevel = function(e, t) {
                    var i = this.getGameLevelRoomListAll(e),
                        n = null;
                    if ((null == i ? void 0 : i.length) > 0) {
                        if (i.sort((function(e, t) {
                                if (e && t && e.min_money && t.min_money) return t.min_money - e.min_money
                            })), null == t) {
                            var a = this.getLastIntoRoomData();
                            this.print("checkQuickGame", "data", a), a && a.gameId && a.gameId == e && (t = a.playMode), t = t || 0
                        }
                        var o = i.length;
                        n = i[o - 1];
                        for (var r = 0; r < o; r++) {
                            var s = this.__User.getUserMoneyByID(c.number_valueOf(i[r].base_chip_type));
                            if (Number(i[r].play_mode) == Number(t) && s >= i[r].min_money) {
                                n = i[r];
                                break
                            }
                        }
                    }
                    return n || ((null == i ? void 0 : i.length) > 0 ? i[i.length - 1] : {})
                }, g.getBestLevelByPlayMode = function(e, t) {
                    if (c.isNull(t) || c.isNull(e)) return {};
                    var i = this.getGameLevelRoomSortList(e, t),
                        n = null;
                    if ((null == i ? void 0 : i.length) > 0) {
                        i.sort((function(e, t) {
                            if (e && t && e.min_money && t.min_money) return t.min_money - e.min_money
                        }));
                        var a = i.length;
                        n = i[a - 1];
                        for (var o = 0; o < a; o++) {
                            var r = this.__User.getUserMoneyByID(c.number_valueOf(i[o].base_chip_type));
                            if (Number(i[o].play_mode) == Number(t) && r >= i[o].min_money) {
                                n = i[o];
                                break
                            }
                        }
                    }
                    return n || ((null == i ? void 0 : i.length) > 0 ? i[i.length - 1] : {})
                }, g._getAllValidLevels = function(e, t, i) {
                    var n = this,
                        a = this.getGameLevelRoomSortList(e, t, i),
                        o = [];
                    return a && (a.forEach((function(e) {
                        var t = n.__User.getUserMoneyByID(c.number_valueOf(e.base_chip_type));
                        t >= Number(e.min_money) && (-1 == Number(e.max_money) || t <= Number(e.max_money)) && o.push(e)
                    })), o.sort((function(e, t) {
                        if (e && t && e.level && t.level) return e.level - t.level
                    }))), o
                }, g.getBestLevelByLevel = function(e, t, i) {
                    return this.getGoodLevelConfig(e, i)
                }, g.checkQuickGame = function(e, t, i) {
                    if (void 0 === t && (t = null), this.print("checkQuickGame", e, t), !c.isNull(e)) {
                        var n = this.getBestLevelByPlayMode(e, t);
                        if (s.dump(n), c.table_isEmpty(n)) {
                            var a = this.getGoodLevelConfig(e, null);
                            a && a.level ? this.checkIntoRoom(e, a, i) : m.dispatch(u.SYS_TOAST_TIP, {
                                content: r.hall_goto_game_no_levelList
                            })
                        } else if (n) this.checkIntoRoom(e, n, i);
                        else {
                            console.warn("进入房间失败,未找到房间", n);
                            var o = this.getGoodLevelConfig(e, null);
                            o && o.level ? this.checkIntoRoom(e, o, i) : m.dispatch(u.SYS_TOAST_TIP, {
                                content: r.hall_goto_game_no_levelList
                            })
                        }
                    }
                }, g.enterTeamRoom = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = null);
                    var n = t.level,
                        a = {
                            gameId: e,
                            playMode: t.play_mode,
                            level: n,
                            base_chip_type: t.base_chip_type || 0,
                            tab_id: t.tab_id || 0
                        };
                    this.setLastIntoRoomData(a), this.willEnterGame(e, n, i)
                }, g.checkIntoRoom = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = null), this.print("checkIntoRoom", t);
                    var n, a, o, r = t.level,
                        s = t.min_money,
                        l = t.play_mode,
                        d = t.max_money,
                        _ = this,
                        h = function() {
                            var n = {
                                gameId: e,
                                playMode: l,
                                level: r,
                                base_chip_type: t.base_chip_type || 0,
                                tab_id: t.tab_id
                            };
                            _.setLastIntoRoomData(n), _.willEnterGame(e, r, i)
                        };
                    if (1 == c.number_valueOf(t.new_game_mode) && null != (n = this._teamData) && null != (a = n.create) && null != (o = a.members) && o.length) {
                        if (!this.checkTeamEnterRoom(e, d, s)) return;
                        h()
                    } else {
                        var p = c.number_valueOf(t.base_chip_type),
                            f = this.__User.getUserMoneyByID(p);
                        if (f < s) {
                            var g = {
                                diff: s - f,
                                level: r,
                                type: 0
                            };
                            m.dispatch(u.NET_RESQ_ROOM_LEVEL_GIFT, g)
                        } else - 1 != d && f > d ? m.dispatch(u.VIEW_SELECT_LEVEL_PROPERTY_NOTENOUGH, {
                            gameId: e,
                            roomData: t,
                            scene: i,
                            max: d,
                            level: r
                        }) : h()
                    }
                }, g.checkIntoPrivateRoom = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = p.Private), !c.isNull(e))
                        if ((e = c.number_valueOf(e, 0)) <= 0) m.dispatch(u.SYS_TOAST_TIP, {
                            content: r.hall_goto_game_no_gameid
                        });
                        else {
                            var n = {
                                GameID: e,
                                Level: t.roomLevel,
                                TableID: 0,
                                isReconn: !1,
                                Scene: i
                            };
                            this.intoGameData = n;
                            var a = {
                                gameId: e,
                                playMode: t.playType,
                                level: t.roomLevel,
                                base_chip_type: t.playType || 0,
                                tab_id: t.tableId
                            };
                            this.setLastIntoRoomData(a), m.dispatch(u.GAME_GOTO_SHOW)
                        }
                }, g.checkIntoMatchRoom = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = p.Match), !c.isNull(e))
                        if ((e = c.number_valueOf(e, 0)) <= 0) m.dispatch(u.SYS_TOAST_TIP, {
                            content: r.hall_goto_game_no_gameid
                        });
                        else {
                            var n = {
                                GameID: e,
                                Level: d.GameRoomLevelConf.MATCH_DINGJU_ROOMID,
                                TableID: 0,
                                MatchID: t.id,
                                isReconn: !1,
                                Scene: i
                            };
                            this.intoGameData = n, m.dispatch(u.GAME_GOTO_SHOW)
                        }
                }, g.getCurRoomInfo = function() {
                    if (this.intoGameData && c.number_valueOf(this.intoGameData.Level, 0) > 0) {
                        var e = this.getGameRoomInfoByRoomLevelID(this.getCurGameId(), this.intoGameData.Level);
                        if (e) return e
                    }
                }, g.updateRoomLevelGift = function(e, t) {
                    e && e.packArr && e.packArr.length > 0 ? this._roomLevelGiftData = e : this._roomLevelGiftData = null
                }, g.getRoomLevelGiftData = function() {
                    return this._roomLevelGiftData
                }, g.updatePopConfig = function(e) {
                    this._roomPropConfig = e
                }, g.updateUsePops = function(e) {
                    var t, i, n = this;
                    e && null != e.propType && null != e.propUseNum && e.mid == this.__User.getUserMid() && this._roomPropConfig && (null == (t = this._roomPropConfig.free) || t.forEach((function(t, i) {
                        if (t.type == e.propType) {
                            var a = n._roomPropConfig.free[i].free_num - e.propUseNum;
                            n._roomPropConfig.free[i].free_num = a >= 0 ? a : 0, n._roomPropConfig.free[i].allow_num = a > 0 ? n._roomPropConfig.free[i].allow_num : n._roomPropConfig.free[i].allow_num + a
                        }
                    })), null == (i = this._roomPropConfig.notfree) || i.forEach((function(t, i) {
                        if (t.type == e.propType) {
                            var a = n._roomPropConfig.notfree[i].free_num - e.propUseNum;
                            n._roomPropConfig.notfree[i].free_num = a >= 0 ? a : 0, n._roomPropConfig.notfree[i].allow_num = a > 0 ? n._roomPropConfig.notfree[i].allow_num : n._roomPropConfig.notfree[i].allow_num + a
                        }
                    })))
                }, g.getPopConfig = function() {
                    return this._roomPropConfig
                }, g.updateCurGameId = function(e) {
                    this._curGameId = e
                }, g.getCurGameId = function() {
                    return this._curGameId || a.CurrentGameID
                }, g.getCurGameName = function(e) {
                    return void 0 === e && (e = null), e = c.number_valueOf(e || a.CurrentGameID), d.GameNameEnum[e] || ""
                }, g.updateBestLevel = function() {
                    var e, t = null == (e = this.getCurRoomInfo()) ? void 0 : e.tab_id,
                        i = this.getGameLevelRoomMinMoney(this.getCurGameId(), t);
                    if (i) {
                        var n = i.level;
                        this.updateLastIntoRoomData({
                            level: n
                        })
                    }
                }, g.setGameRuleConfig = function(e) {
                    var t = this;
                    this._gameRuleConfig = [];
                    var i = 0,
                        n = null;
                    Object.keys(e).forEach((function(o) {
                        i = c.number_valueOf(o), n = {
                            gameId: i,
                            list: e[o],
                            ischecked: i == a.CurrentGameID
                        }, i == a.CurrentGameID ? t._gameRuleConfig.unshift(n) : t._gameRuleConfig.push(n)
                    }))
                }, g.getGameRuleConfig = function() {
                    var e = [].concat(this._gameRuleConfig);
                    return o.isShowLYCSubgame || (e = e.filter((function(e) {
                        return e.gameId != d.GameID.LYC
                    }))), e
                }, g.getGameRuleConfigByGameId = function(e) {
                    var t = this._gameRuleConfig.find((function(t) {
                        return t.gameId == e
                    }));
                    if (t && t.list && t.list.length > 0) {
                        var i = t.list.find((function(e) {
                            return "图文规则" == e.title
                        }));
                        if (i) return i
                    }
                    return null
                }, g._getCurTabId = function(e) {
                    var t = this.getLastIntoRoomData();
                    if (t && t.gameId && t.gameId == e) return t.tab_id
                }, g.getGoodLevelConfig = function(e, t) {
                    var i = [];
                    if (e && !c.isNull(t) && this._levelConfigMap.has(e)) {
                        var n = this._levelConfigMap.get(e);
                        if (null != n && n.length) {
                            var a = n.filter((function(e) {
                                    return e.level == t
                                })),
                                o = 0,
                                r = 0;
                            a.length && (o = a[0].base_chip_type, r = a[0].tab_id);
                            var s = n.filter((function(e) {
                                return e.tab_id == r
                            }));
                            if (s.length) {
                                var l = this.__User.getUserMoneyByID(o);
                                s.forEach((function(e) {
                                    l >= e.min_money && (-1 == e.max_money || l <= e.max_money) && i.push(e)
                                })), 0 == i.length && (i = a)
                            }
                        }
                    }
                    if (i.length) {
                        var u = i.filter((function(e) {
                            return e.level == t
                        }));
                        return u.length ? u[0] : i[i.length - 1]
                    }
                    var d = this.getBestLevel(e, null);
                    if (null != d && d.level) return {
                        level: c.number_valueOf(d.level),
                        tab_id: c.number_valueOf(d.tab_id),
                        min_money: c.number_valueOf(d.min_money, 3e3),
                        max_money: c.number_valueOf(d.max_money, -1),
                        base_chip_type: c.number_valueOf(d.base_chip_type),
                        play_mode: c.number_valueOf(d.play_mode),
                        gameId: e
                    }
                }, g.setTeamOperateResult = function(e) {
                    var t, i, n = this;
                    if (e) {
                        switch (e.retcode) {
                            case d.TEAM_OPERATION_CODE.CREATE:
                                var a, o;
                                this._teamData.create = e.create, this._teamData.gameId = c.number_valueOf(e.gameId), this._teamData.teamid = c.number_valueOf(e.teamid), e.errcode || null == (a = this._teamData.create) || null == (o = a.members) || o.forEach((function(e) {
                                    var t = h.JsonDecode(e.ext_info);
                                    e.uid = c.number_valueOf(e.uid), e.nick = t.nick || "", e.sex = c.number_valueOf(t.sex, 2), e.head = t.head || "", c.isNull(e.money) && (e.money = c.number_valueOf(t.money)), e.uid == n.__User.getUserMid() && (e.money = n.__User.getUserMoneyByID(0))
                                }));
                                break;
                            case d.TEAM_OPERATION_CODE.READY:
                                var r = e.ready;
                                if (this._teamData.ready) {
                                    var s = Array.isArray(this._teamData.ready) ? this._teamData.ready : [this._teamData.ready];
                                    0 == s.filter((function(e) {
                                        return e.uid == r.uid
                                    })).length ? s.push(r) : s.forEach((function(e) {
                                        e.uid == r.uid && (e.ready = r.ready)
                                    }))
                                } else this._teamData.ready = [], this._teamData.ready.push(r);
                                break;
                            case d.TEAM_OPERATION_CODE.QUIT:
                                this.resetTeamData();
                                break;
                            case d.TEAM_OPERATION_CODE.RECONN:
                                var l, u;
                                null != (t = e.reconn) && t.teamid && (this._teamData.create = e.reconn.members, null == (l = this._teamData.create) || null == (u = l.members) || u.forEach((function(e) {
                                    var t = h.JsonDecode(e.ext_info);
                                    e.uid = c.number_valueOf(e.uid), e.nick = t.nick || "", e.sex = c.number_valueOf(t.sex, 2), e.head = t.head || "", c.isNull(e.money) && (e.money = c.number_valueOf(t.money)), e.uid == n.__User.getUserMid() && (e.money = n.__User.getUserMoneyByID(0))
                                })), this._teamData.ready = e.reconn.ready, this._teamData.gameId = c.number_valueOf(e.gameId), this._teamData.teamid = c.number_valueOf(e.teamid), this._teamData.reconn = e.reconn);
                                break;
                            case d.TEAM_OPERATION_CODE.UPDATE_MONEY:
                                null == (i = e.syncdata) || i.forEach((function(e) {
                                    n.updateTeamMoney({
                                        uid: e.uid,
                                        money: e.money
                                    })
                                }))
                        }
                        this._teamData.retcode = e.retcode, this._teamData.error_code = e.error_code, this._teamData.errcode = e.errcode
                    } else this.resetTeamData()
                }, g.getTeamData = function() {
                    return this._teamData
                }, g.setTeamData = function(e) {
                    this._teamData = e
                }, g.resetTeamConnectData = function() {
                    this._teamData.reconn && (this._teamData.reconn = null)
                }, g.resetTeamData = function() {
                    this._teamData = {
                        retcode: 0,
                        errcode: "",
                        teamid: 0,
                        gameId: 0,
                        create: null,
                        ready: null,
                        error_code: d.TEAM_ERROR_CODE.NORMAL
                    }
                }, g.updateTeamReadyData = function(e) {
                    var t;
                    null != (t = this._teamData) && t.ready && null != e && e.length && (this._teamData.ready = e)
                }, g.updateMoney = function() {
                    this.updateTeamMoney({
                        uid: this.__User.getUserMid(),
                        money: this.__User.getUserMoneyByID(0)
                    }) && m.dispatch(u.NET_REQ_TEAM_OPERATE_UPDATE_MONEY, this._teamData.teamid, this._teamData.gameId)
                }, g.updateTeamMoney = function(e) {
                    var t, i, n;
                    if (null != (t = this._teamData) && null != (i = t.create) && null != (n = i.members) && n.length) {
                        var a = this._teamData.create.members.filter((function(t) {
                            return t.uid == e.uid
                        }));
                        if (null != a && a.length) return a[0].money != e.money && (a[0].money = e.money, !0)
                    }
                }, g.getTeamLevelTabId = function(e) {
                    var t = 0,
                        i = this.getServerGameLevelTabListByGameID(e);
                    if (i)
                        for (var n = 0; n < i.length; n++) {
                            var a = i[n];
                            if (a && a.data)
                                for (var o in a.data)
                                    if (Object.prototype.hasOwnProperty.call(a.data, o)) {
                                        var r = a.data[o];
                                        r && 1 == c.number_valueOf(r.new_game_mode) && (t = a.tab_id)
                                    }
                        }
                    return t
                }, g.checkTeamEnterRoom = function(e, t, i) {
                    var n;
                    if (null != (n = this._teamData.create) && n.leader_uid && this._teamData.gameId == e) {
                        var a, o;
                        if (this._teamData.create.leader_uid != this.__User.getUserMid()) return m.dispatch(u.SYS_TOAST_TIP, {
                            content: "队长才可操作入场"
                        }), !1;
                        var r = !1;
                        if (this._teamData.ready && (Array.isArray(this._teamData.ready) ? this._teamData.ready.length > 0 && (r = this._teamData.ready.every((function(e) {
                                return e.ready
                            }))) : r = this._teamData.ready.ready), !r) return m.dispatch(u.SYS_TOAST_TIP, {
                            content: "队友还未准备，不允许进入房间"
                        }), !1;
                        var s = 0;
                        if (null == (a = this._teamData.create) || null == (o = a.members) || o.forEach((function(e) {
                                s += e.money
                            })), t > 0 && s > 2 * t) return m.dispatch(u.SYS_TOAST_TIP, {
                            content: "队伍成员总资产超过上限的2倍，不允许进入房间"
                        }), !1;
                        if (2 * i > s) return m.dispatch(u.SYS_TOAST_TIP, {
                            content: "队伍成员总资产低于入场下限的2倍，不允许进入房间"
                        }), !1
                    }
                    return !0
                }, g.onDismissTeam = function() {
                    var e = {
                        ope: d.TEAM_OPERATION_CODE.QUIT,
                        gameid: this.getTeamGameId(),
                        quit: {
                            uid: this.__User.getUserMid()
                        }
                    };
                    m.dispatch(u.NET_REQ_TEAM_OPERATE, e)
                }, g.checkTeamSwitch = function(e, t) {
                    var i = this.getGameLevelRoomSortList(e, t);
                    if (null != i && i.length && i.filter((function(e) {
                            return 1 === c.number_valueOf(e.new_game_mode)
                        })).length > 0) {
                        var n, a = this.getTeamData();
                        if ((null == a ? void 0 : a.gameId) == e && null != (n = a.create) && n.leader_uid) return !1
                    }
                    return !0
                }, g.curRoomIsTeamMode = function() {
                    var e = this.getCurRoomInfo();
                    return 1 == c.number_valueOf(null == e ? void 0 : e.new_game_mode)
                }, g.isTeamMember = function(e) {
                    var t;
                    if (!this.curRoomIsTeamMode()) return !1;
                    var i = this.getTeamData(),
                        n = null == i || null == (t = i.create) ? void 0 : t.members;
                    return !!(n && n.filter((function(t) {
                        return t.uid == e
                    })).length > 0)
                }, g.isTeamLeader = function() {
                    var e;
                    if (!this.curRoomIsTeamMode()) return !1;
                    var t = this.getTeamData();
                    return (null == t || null == (e = t.create) ? void 0 : e.leader_uid) == this.__User.getUserMid()
                }, g.getTeamMemberId = function(e) {
                    var t;
                    if (!this.curRoomIsTeamMode()) return 0;
                    var i = this.getTeamData(),
                        n = null == i || null == (t = i.create) ? void 0 : t.members;
                    if (!n || n.length < 2) return 0;
                    var a = e || this.__User.getUserMid();
                    if (!n.some((function(e) {
                            return e.uid === a
                        }))) return 0;
                    var o = n.find((function(e) {
                        return e.uid !== a
                    }));
                    return o ? o.uid : 0
                }, g.getTeamGameId = function() {
                    var e = this.getTeamData();
                    return c.number_valueOf(null == e ? void 0 : e.gameId)
                }, g.dealIsShowLycGame = function() {
                    var e = this;
                    if (!o.isShowLYCSubgame) {
                        var t = d.GameID.LYC,
                            i = [].concat(l.DefaultSubGameIds);
                        if (-1 != i.indexOf(t)) {
                            i.splice(i.indexOf(t), 1);
                            for (var n = l.SupportSubGameIds.length - 1; n >= 0; n--) {
                                var a = l.SupportSubGameIds[n];
                                if (a != t && -1 == i.indexOf(a)) {
                                    i.unshift(a);
                                    break
                                }
                            }
                        }
                        var r = this.getLastPlayGames(),
                            s = r.indexOf(String(t));
                        if (-1 != s) {
                            var u = this.__User.getUserMid();
                            0 == s && f.remove(c.string_format(_.USER_INTO_GAME_RECORD, u)), f.remove(c.string_format(_.USER_LAST_GAME_RECORD, u)), r.splice(s, 1), i.forEach((function(t) {
                                e.setLastGames(Number(t))
                            })), r.forEach((function(t) {
                                e.setLastGames(Number(t))
                            })), console.log("aaaaaa", i, r)
                        }
                    }
                }, g.checkSupportGameList = function(e) {
                    return e
                }, g.updateAreaGameConfig = function(e) {}, i(n, [{
                    key: "intoGameData",
                    get: function() {
                        return this._intoGameData
                    },
                    set: function(e) {
                        this._intoGameData = e || null, this.updateCurGameId(e.GameID)
                    }
                }]), n
            }(g)), n._RF.pop()
        }
    }
}))