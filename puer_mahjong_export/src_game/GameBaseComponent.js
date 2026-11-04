System.register("chunks:///_virtual/GameBaseComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./BaseComponent.ts", "./OperationMgr.ts", "./RoomMgr.ts", "./GameRuleConfig.ts", "./GameViewConfig.ts", "./CardUtil.ts"], (function(e) {
    var t, n, i, a, o, r, s, l, u, d, c, h, p, f;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, i = e._decorator, a = e.Vec3, o = e.instantiate
        }, function(e) {
            r = e.ClientInfo
        }, function(e) {
            s = e.Utils
        }, function(e) {
            l = e.GCache
        }, function(e) {
            u = e.BaseComponent
        }, function(e) {
            d = e.OperationMgr
        }, function(e) {
            c = e.RoomMgr
        }, function(e) {
            h = e.GameRuleConfig
        }, function(e) {
            p = e.GameViewConfig
        }, function(e) {
            f = e.CardUtil
        }],
        execute: function() {
            var _;
            n._RF.push({}, "2575bTxzpxKn53tUWxUeNoH", "GameBaseComponent", void 0);
            var g = i.ccclass,
                m = (i.property, i.menu);
            e("GameBaseComponent", g("GameBaseComponent")(_ = m("prefab/game/GameBaseComponent")(_ = function(e) {
                function n() {
                    for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(i)) || this)._delegate = null, t
                }
                t(n, e);
                var i = n.prototype;
                return i.setDelegate = function(e) {
                    this._delegate = e
                }, i.callDelegateFunc = function(e) {
                    if (this._delegate && "function" == typeof this._delegate[e]) {
                        for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return (t = this._delegate)[e].apply(t, i)
                    }
                }, i.onGameStart = function() {}, i.getSlicePrivareRules = function(e) {
                    return {
                        title: null,
                        desc: null
                    }
                }, i.onGameOver = function() {}, i.checkRecoinnectOperationSeatId = function(e) {
                    var t;
                    if (s.isNull(null == e ? void 0 : e.operation) || -1 == (null == e || null == (t = e.operation) ? void 0 : t.seatId)) {
                        var n, i = 0;
                        null == e || null == (n = e.players) || n.forEach((function(t) {
                            var n;
                            i = t.cardCount, null == t || null == (n = t.opGroups) || n.forEach((function(e) {
                                return [i += e.opCards.length]
                            })), 14 == i && (s.isNull(null == e ? void 0 : e.operation) ? d.getInstance().seatId = t.seatId : e.operation.seatId = t.seatId)
                        }))
                    }
                }, i.onAnalysisReconnect = function(e) {}, i.checkReconnectInfo = function(e, t) {
                    return !1
                }, i.orderCards = function(e) {}, i.checkOpCode = function(e, t, n) {}, i.checkLaiziCard = function(e, t) {
                    return !1
                }, i.onShowLaiziCard = function(e) {
                    return !1
                }, i.checkCansShowSettleView = function(e, t) {
                    e()
                }, i.onGameSceneRealTimeHuInfo = function(e) {}, i.showFanGangPai = function(e, t, n) {
                    return !1
                }, i.getBuGangTx = function() {
                    return null
                }, i.isAllHandsIsLaizi = function() {}, i.checkHuRequirement = function(e, t, n) {}, i.onReceiveSettleInfo = function(e) {}, i.checkHuangZhuang = function(e) {}, i.checkChaJiao = function(e, t) {
                    if (!0 === t) {
                        for (var n = null == e ? void 0 : e.totalInfo, i = 0; i < (null == n ? void 0 : n.length); i++)
                            if (s.isNotNull(n[i]) && 1 == s.number_valueOf(n[i].isYouJiao)) return console.log("checkChaJiao---", "true", n[i].isYouJiao), !0;
                        console.log("checkChaJiao----", "false")
                    }
                    return !1
                }, i.isShowLiuShui = function() {
                    return !1
                }, i.checkLiuShui = function(e) {
                    return !1
                }, i.checkGangSettle = function(e) {
                    return !1
                }, i.checkCommonHuSettle = function(e) {
                    return !1
                }, i.checkZiMoSettle = function(e) {
                    return !1
                }, i.checkGameDaPaiXinId = function(e) {
                    return null
                }, i.checkSmallBetBigWinRule = function(e) {}, i.resetHandCard = function(e) {}, i.checkHandCard = function(e, t, n) {}, i.checkHandCardColor = function(e) {}, i.checkTabFlag = function(e) {
                    return !1
                }, i.showTabFlag = function(e) {
                    return !1
                }, i.resetTabFalg = function(e) {
                    return !1
                }, i.checkCardTag = function(e, t, n) {}, i.onNodeMeldCardCtrPengGang = function(e, t, n, i, a) {}, i.checkOpCardRotation = function(e, t, n, i) {
                    return null
                }, i.onNodeMeldCardCtrReconnect = function(e, t, n, i, a, o) {}, i.checkSpecialGangMultCard = function(e, t) {
                    return !1
                }, i.checkReconnectCanShowWall = function(e) {
                    return !1
                }, i.getCardTotalNum = function() {
                    return null
                }, i.checkGameStartShowCardWall = function() {
                    return !0
                }, i.filterCPGCards = function(e) {
                    return []
                }, i.showOpGropCards = function(e, t) {
                    return !1
                }, i.showOverHandCards = function(e, t) {}, i.checkMeldGang = function(e) {}, i.onGameGrabCard = function(e) {}, i.updateNodeHandCardList = function(e, t) {}, i.onNodeHandCardCtrReconnect = function(e) {}, i.getMingPaiRotation = function(e, t) {}, i.onNodeMeldCardCtrOperationResult = function(e, t) {}, i.getMingpaiPos = function(e) {}, i.onNetBroadcastDingZhuang = function() {}, i.hasXiaZhu = function() {
                    return !1
                }, i.xiazhuOperationListen = function() {}, i.updateOpInfoCodeMap = function(e, t, n, i) {}, i.checkDiTing = function(e) {
                    return !1
                }, i.checkOpInfoOpCode = function(e) {
                    return e
                }, i.showViewCardList = function(e, t, n) {}, i.checkXiaZhuActive = function(e, t, n) {
                    return !1
                }, i.reconnectOpInfoOption = function() {}, i.reconnectXiaZhuOption = function() {}, i.checkPengGangOpInfo = function(e) {
                    return null
                }, i.getXiaZhuWidth = function() {
                    return null
                }, i.getXiaZhuStr = function(e, t) {
                    return null
                }, i.getXiaZhuBtn = function(e, t, n) {
                    return null
                }, i.checkXiaZhuPropty = function(e, t) {
                    return !1
                }, i.playXiaZhuEffect = function(e, t) {}, i.updateAtlasCodeMap = function(e) {}, i.playTingEffect = function(e) {}, i.checkNeedGangAnim = function() {
                    return !1
                }, i.onOperationResult = function(e) {}, i.onReconnectBaoTing = function(e) {}, i.onUserXiaZhuResult = function(e) {}, i.checkExtTing = function(e, t, n, i) {}, i.checkShowTingTag = function(e) {}, i.checkExtTag = function(e, t, n) {}, i.playOprationResultEffect = function(e, t) {}, i.showSpecialXiaZhuView = function(e, t, n) {}, i.hidTinTip = function() {
                    return !1
                }, i.checkGameMenuByHuInfo = function(e) {}, i.checkHuListInfo = function(e, t) {
                    return !1
                }, i.onNodeUserGameRealTimeHuInfo = function(e, t) {}, i.checkHuPaiTrunCard = function() {
                    return !1
                }, i.onNodeHandCardCtrPengGang = function(e, t, n) {}, i.onNodeHandCardBaoTingCoverHandCard = function() {}, i.onHandCardOperationResult = function(e) {}, i.onNodeHandCardSettle = function(e) {}, i.onHandCardDealCard = function(e, t) {}, i.checkBroadcastWaitOperation = function() {
                    return !0
                }, i.onChannelOperationResult = function(e) {}, i.onCardPlayManegerPlayerMySelfCard = function(e) {}, i.onCardPlayManegerPlayerOtherCard = function(e) {}, i.onMyPlayerCardSetBlack = function(e, t) {}, i.checkCanShowOutCard = function(e, t) {
                    return !0
                }, i.checkShowCards = function(e) {
                    return e
                }, i.checkCardCanOut = function(e) {
                    return !0
                }, i.onOutCardOperationResult = function(e) {}, i.checkShowOutCard = function(e, t, n) {}, i.onUpdateOptionTips = function(e, t, n, i) {
                    t.tag
                }, i.getXiazhuRateFramesName = function(e, t, n, i) {
                    return null
                }, i.checkXiaZhuFinish = function(e, t) {}, i.showXiaZhuItems = function(e, t, n) {}, i.updateXiaZhuView = function(e, t, n, i) {
                    return !1
                }, i.hideHeadXiaZhuInfo = function() {
                    return !1
                }, i.onOperationEffect = function(e, t) {
                    return !1
                }, i.showZhuojiAnim = function(e, t, n, i) {}, i.showPlayingJiType = function(e) {}, i.doChaJiao = function(e) {
                    return !1
                }, i.onRollDicesOver = function(e) {}, i.checkUserPlayIng = function(e) {}, i.checkCanChangeTable = function(e) {}, i.checkRemoveOutCard = function(e, t) {}, i.checkMultCard = function(e) {
                    return !0
                }, i.showDaPaixingOpGroupsCards = function(e, t, n) {
                    return !1
                }, i.getTagScale = function() {
                    return 1
                }, i.getNoAutoGiveUp = function() {
                    return r.deviceInfo.noAutoGiveUp
                }, i.getGameShareTitle = function() {
                    return null
                }, i.checkUpdateHandCards = function(e) {}, i.isTwoPlayerModule = function() {
                    return l.PrivateData.isTwoPlayerModule()
                }, i.getOprationAnimPos = function(e) {
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
                }, i.checkUsersPos = function(e) {
                    return this.isTwoPlayerModule() && (null == e ? void 0 : e.length) > 3 && null != e[1] && null != e[2] && null != e[3] && (e[1] = e[2], e[3] = e[2]), e
                }, i.getRotationDir = function(e) {
                    if (this.isTwoPlayerModule() && s.isNotNull(c.getInstance().mySeatId)) {
                        var t = f.getDirFromSeatId(c.getInstance().mySeatId);
                        if (0 == t) return 0 == e ? 0 : 2;
                        1 == t ? 1 != e && (e = 3) : 2 == t && 2 != e && (e = 0)
                    }
                    return e
                }, i.getDirByLocalSeat = function(e) {
                    if (!this.isTwoPlayerModule()) return s.isNotNull(c.getInstance().mySeatId) ? (e - f.getDirFromSeatId(c.getInstance().mySeatId) + h.playerNum) % h.playerNum : e;
                    if (s.isNotNull(c.getInstance().mySeatId)) {
                        var t = (e - f.getDirFromSeatId(c.getInstance().mySeatId) + h.playerNum) % h.playerNum;
                        return 0 != t && (t = 2), t
                    }
                }, i.getDir = function(e) {
                    return null
                }, i.getUserPos = function(e) {
                    return this.isTwoPlayerModule() && 0 != e && (e = 2), e
                }, i.getPaiXinAnimPos = function(e) {
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
                }, i.getShowOutCardPos = function(e) {
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
                }, i.updateNodeUserScorePos = function(e, t) {
                    switch (t) {
                        case 0:
                        case 2:
                            e.position = new a(95, 60, 0);
                            break;
                        case 1:
                        case 3:
                            e.position = new a(-40, -50, 0)
                    }
                }, i.updateOutCardPos = function(e, t, n) {
                    if (this.isTwoPlayerModule()) {
                        var i = .88 * p.CardConfig.ScaleOutCard,
                            a = p.CardConfig.Width * i,
                            r = p.CardConfig.Height * i,
                            s = p.CardConfig.GroundToCard * i,
                            l = (12 * a + 11 * p.CardConfig.SpaceOutCard) / 2 - a / 2 - 0,
                            u = .9 * p.CardConfig.CenterToOutCard,
                            d = h.CardTotalNum - 26,
                            c = Math.ceil(d / 12 / 2);
                        t.forEach((function(t, d) {
                            for (var h = 0, f = 0; f < c; f++)
                                for (var _ = u + ((f % 2 == 0 ? 0 : 1) - 1) * r, g = Math.floor(f / 2), m = s + g * p.CardConfig.Thickness * i, C = 0; C < 12; C++) {
                                    var I = -l + C % 12 * (a + p.CardConfig.SpaceOutCard),
                                        A = t[h];
                                    A || ((A = o(n)).setScale(A.scale.x * i, A.scale.y * i, A.scale.z * i), e.getChildByName("seat_" + d).addChild(A), t.push(A)), A.setPosition(I, m, _), h++
                                }
                        }))
                    }
                }, i.getRelativeLocalDir = function(e) {
                    var t = f.calculatePlayerSeat(c.getInstance().mySeatId, e);
                    return this.isTwoPlayerModule() && 0 != t && (t = 2), t
                }, n
            }(u)) || _) || _), n._RF.pop()
        }
    }
}))