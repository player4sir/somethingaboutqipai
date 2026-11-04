System.register("chunks:///_virtual/GameBaseComponent3.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseComponent.ts", "./OperationMgr3.ts", "./RoomMgr6.ts", "./GameRuleConfig4.ts", "./GameViewConfig5.ts", "./CardUtil3.ts"], (function(e) {
    var t, n, a, i, o, r, s, u, l, d, c, h, p, m, _, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator, i = e.Vec3, o = e.instantiate
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            u = e.AppEvent
        }, function(e) {
            l = e.GConstants
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            c = e.BaseComponent
        }, function(e) {
            h = e.OperationMgr
        }, function(e) {
            p = e.RoomMgr
        }, function(e) {
            m = e.GameRuleConfig
        }, function(e) {
            _ = e.GameViewConfig
        }, function(e) {
            g = e.CardUtil
        }],
        execute: function() {
            var f;
            n._RF.push({}, "6ab49EpHUBFYrbKXXlrOw2S", "GameBaseComponent", void 0);
            var C = a.ccclass,
                E = (a.property, a.menu);
            e("GameBaseComponent", C("GameBaseComponent")(f = E("prefab/subGame/mj/GameBaseComponent")(f = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this)._delegate = null, t
                }
                t(n, e);
                var a = n.prototype;
                return a.setDelegate = function(e) {
                    this._delegate = e
                }, a.callDelegateFunc = function(e) {
                    if (this._delegate && "function" == typeof this._delegate[e]) {
                        for (var t, n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        return (t = this._delegate)[e].apply(t, a)
                    }
                }, a.onGameStart = function() {}, a.getSlicePrivareRules = function(e) {
                    return {
                        title: null,
                        desc: null
                    }
                }, a.onGameOver = function() {}, a.checkRecoinnectOperationSeatId = function(e) {
                    var t;
                    if (r.isNull(null == e ? void 0 : e.operation) || -1 == (null == e || null == (t = e.operation) ? void 0 : t.seatId)) {
                        var n, a = 0;
                        null == e || null == (n = e.players) || n.forEach((function(t) {
                            var n;
                            a = t.cardCount, null == t || null == (n = t.opGroups) || n.forEach((function(e) {
                                return [a += e.opCards.length]
                            })), 14 == a && (r.isNull(null == e ? void 0 : e.operation) ? h.getInstance().seatId = t.seatId : e.operation.seatId = t.seatId)
                        }))
                    }
                }, a.checkReconnectInfo = function(e, t) {
                    return d.dispatch(u.GAME_ROOM_STATE_CHANGE, l.GameRoomState.STATUS_PLAYING), !1
                }, a.checkOpCode = function(e, t, n) {}, a.checkLaiziCard = function(e, t) {
                    return !1
                }, a.onShowLaiziCard = function(e) {
                    return !1
                }, a.checkCansShowSettleView = function(e, t) {
                    e()
                }, a.onGameSceneRealTimeHuInfo = function(e) {}, a.showFanGangPai = function(e, t, n) {
                    return !1
                }, a.getBuGangTx = function() {
                    return null
                }, a.isAllHandsIsLaizi = function() {}, a.checkHuangZhuang = function(e) {}, a.checkChaJiao = function(e, t) {
                    if (!0 === t) {
                        for (var n = null == e ? void 0 : e.totalInfo, a = 0; a < (null == n ? void 0 : n.length); a++)
                            if (r.isNotNull(n[a]) && 1 == r.number_valueOf(n[a].isYouJiao)) return console.log("checkChaJiao---", "true", n[a].isYouJiao), !0;
                        console.log("checkChaJiao----", "false")
                    }
                    return !1
                }, a.isShowLiuShui = function() {
                    return !1
                }, a.checkLiuShui = function(e) {
                    return !1
                }, a.checkGangSettle = function(e) {
                    return !1
                }, a.checkCommonHuSettle = function(e) {
                    return !1
                }, a.checkZiMoSettle = function(e) {
                    return !1
                }, a.checkGameDaPaiXinId = function(e) {
                    return null
                }, a.resetHandCard = function(e) {}, a.checkHandCard = function(e, t, n) {}, a.checkHandCardColor = function(e) {}, a.checkTabFlag = function(e) {
                    return !1
                }, a.showTabFlag = function(e) {
                    return !1
                }, a.resetTabFalg = function(e) {
                    return !1
                }, a.checkCardTag = function(e, t, n) {}, a.onNodeMeldCardCtrPengGang = function(e, t, n, a, i) {}, a.checkOpCardRotation = function(e, t, n, a) {
                    return null
                }, a.onNodeMeldCardCtrReconnect = function(e, t, n, a, i, o) {}, a.checkSpecialGangMultCard = function(e, t) {
                    return !1
                }, a.checkReconnectCanShowWall = function(e) {
                    return !1
                }, a.getCardTotalNum = function() {
                    return null
                }, a.checkGameStartShowCardWall = function() {
                    return !0
                }, a.filterCPGCards = function(e) {
                    return []
                }, a.showOpGropCards = function(e, t) {
                    return !1
                }, a.showOverHandCards = function(e, t) {}, a.checkMeldGang = function(e) {}, a.onGameGrabCard = function(e) {}, a.updateNodeHandCardList = function(e, t) {}, a.onNodeHandCardCtrReconnect = function(e) {}, a.getMingPaiRotation = function(e, t) {}, a.onNodeMeldCardCtrOperationResult = function(e, t) {}, a.getMingpaiPos = function(e) {}, a.onNetBroadcastDingZhuang = function() {}, a.hasXiaZhu = function() {
                    return !1
                }, a.xiazhuOperationListen = function() {}, a.updateOpInfoCodeMap = function(e, t, n, a) {}, a.checkDiTing = function(e) {
                    return !1
                }, a.checkOpInfoOpCode = function(e) {
                    return e
                }, a.showViewCardList = function(e, t, n) {}, a.checkXiaZhuActive = function(e, t, n) {
                    return !1
                }, a.reconnectOpInfoOption = function() {}, a.reconnectXiaZhuOption = function() {}, a.checkPengGangOpInfo = function(e) {
                    return null
                }, a.getXiaZhuWidth = function() {
                    return null
                }, a.getXiaZhuStr = function(e, t) {
                    return null
                }, a.getXiaZhuBtn = function(e, t, n) {
                    return null
                }, a.checkXiaZhuPropty = function(e, t) {
                    return !1
                }, a.playXiaZhuEffect = function(e, t) {}, a.updateAtlasCodeMap = function(e) {}, a.onOperationResult = function(e) {}, a.checkNeedGangAnim = function() {
                    return !1
                }, a.onUserXiaZhuResult = function(e) {}, a.checkExtTing = function(e, t, n, a) {}, a.checkShowTingTag = function(e) {}, a.checkExtTag = function(e, t, n) {}, a.playOprationResultEffect = function(e, t) {}, a.showSpecialXiaZhuView = function(e, t, n) {}, a.hidTinTip = function() {
                    return !1
                }, a.checkGameMenuByHuInfo = function(e) {}, a.checkHuListInfo = function(e, t) {
                    return !1
                }, a.onNodeUserGameRealTimeHuInfo = function(e, t) {}, a.checkHuPaiTrunCard = function() {
                    return !1
                }, a.onNodeHandCardCtrPengGang = function(e, t, n) {}, a.onNodeHandCardSettle = function(e) {}, a.checkBroadcastWaitOperation = function() {
                    return !0
                }, a.onChannelOperationResult = function(e) {}, a.onCardPlayManegerPlayerMySelfCard = function(e) {}, a.checkShowCards = function(e) {
                    return e
                }, a.checkCardCanOut = function(e) {
                    return !0
                }, a.onUpdateOptionTips = function(e, t, n, a) {
                    t.tag
                }, a.getXiazhuRateFramesName = function(e, t, n, a) {
                    return null
                }, a.checkXiaZhuFinish = function(e, t) {}, a.showXiaZhuItems = function(e, t, n) {}, a.updateXiaZhuView = function(e, t, n, a) {
                    return !1
                }, a.hideHeadXiaZhuInfo = function() {
                    return !1
                }, a.showZhuojiAnim = function(e, t, n, a) {}, a.showPlayingJiType = function(e) {}, a.onReceiveSettleInfo = function(e) {}, a.doChaJiao = function(e) {
                    return !1
                }, a.onRollDicesOver = function(e) {}, a.checkUserPlayIng = function(e) {}, a.checkCanChangeTable = function(e) {}, a.checkRemoveOutCard = function(e, t) {}, a.checkMultCard = function(e) {
                    return !0
                }, a.showDaPaixingOpGroupsCards = function(e, t, n) {
                    return !1
                }, a.getTagScale = function() {
                    return 1
                }, a.loadExtendMenu = function(e) {}, a.getNoAutoGiveUp = function() {
                    return m.noAutoGiveUp
                }, a.getGameShareTitle = function() {
                    return null
                }, a.isTwoPlayerModule = function() {
                    return s.PrivateData.isTwoPlayerModule()
                }, a.getOprationAnimPos = function(e) {
                    this.isTwoPlayerModule() && e([{
                        x: 21.979,
                        y: -132.443
                    }, {
                        x: 22.299,
                        y: 256.069
                    }, {
                        x: 22.299,
                        y: 256.069
                    }, {
                        x: 22.299,
                        y: 256.069
                    }])
                }, a.checkUsersPos = function(e) {
                    return this.isTwoPlayerModule() && (null == e ? void 0 : e.length) > 3 && null != e[1] && null != e[2] && null != e[3] && (e[1] = e[2], e[3] = e[2]), e
                }, a.getRotationDir = function(e) {
                    if (this.isTwoPlayerModule() && r.isNotNull(p.getInstance().mySeatId)) {
                        var t = g.getDirFromSeatId(p.getInstance().mySeatId);
                        if (0 == t) return 0 == e ? 0 : 2;
                        1 == t ? 1 != e && (e = 3) : 2 == t && 2 != e && (e = 0)
                    }
                    return e
                }, a.getDirByLocalSeat = function(e) {
                    if (!this.isTwoPlayerModule()) return r.isNotNull(p.getInstance().mySeatId) ? (e - g.getDirFromSeatId(p.getInstance().mySeatId) + m.playerNum) % m.playerNum : e;
                    if (r.isNotNull(p.getInstance().mySeatId)) {
                        var t = (e - g.getDirFromSeatId(p.getInstance().mySeatId) + m.playerNum) % m.playerNum;
                        return 0 != t && (t = 2), t
                    }
                }, a.getDir = function(e) {
                    return null
                }, a.getUserPos = function(e) {
                    return this.isTwoPlayerModule() && 0 != e && (e = 2), e
                }, a.getPaiXinAnimPos = function(e) {
                    this.isTwoPlayerModule() && e([{
                        x: 0,
                        y: -90
                    }, {
                        x: 0,
                        y: 200
                    }, {
                        x: 0,
                        y: 200
                    }, {
                        x: 0,
                        y: 200
                    }])
                }, a.getShowOutCardPos = function(e) {
                    this.isTwoPlayerModule() && e([{
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 240
                    }, {
                        x: 0,
                        y: 240
                    }, {
                        x: 0,
                        y: 240
                    }])
                }, a.updateNodeUserScorePos = function(e, t) {
                    switch (t) {
                        case 0:
                        case 2:
                            e.position = new i(95, 60, 0);
                            break;
                        case 1:
                        case 3:
                            e.position = new i(-40, -50, 0)
                    }
                }, a.updateOutCardPos = function(e, t, n) {
                    if (this.isTwoPlayerModule()) {
                        var a = .88 * _.CardConfig.ScaleOutCard,
                            i = _.CardConfig.Width * a,
                            r = _.CardConfig.Height * a,
                            s = _.CardConfig.GroundToCard * a,
                            u = (12 * i + 11 * _.CardConfig.SpaceOutCard) / 2 - i / 2 - 0,
                            l = .9 * _.CardConfig.CenterToOutCard,
                            d = m.CardTotalNum - 26,
                            c = Math.ceil(d / 12 / 2);
                        t.forEach((function(t, d) {
                            for (var h = 0, p = 0; p < c; p++)
                                for (var m = l + ((p % 2 == 0 ? 0 : 1) - 1) * r, g = Math.floor(p / 2), f = s + g * _.CardConfig.Thickness * a, C = 0; C < 12; C++) {
                                    var E = -u + C % 12 * (i + _.CardConfig.SpaceOutCard),
                                        S = t[h];
                                    S || ((S = o(n)).setScale(S.scale.x * a, S.scale.y * a, S.scale.z * a), e.getChildByName("seat_" + d).addChild(S), t.push(S)), S.setPosition(E, f, m), h++
                                }
                        }))
                    }
                }, a.getRelativeLocalDir = function(e) {
                    var t = g.calculatePlayerSeat(p.getInstance().mySeatId, e);
                    return this.isTwoPlayerModule() && 0 != t && (t = 2), t
                }, n
            }(c)) || f) || f), n._RF.pop()
        }
    }
}))