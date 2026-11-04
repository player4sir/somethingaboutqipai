System.register("chunks:///_virtual/GameComponent4.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GCache.ts", "./GameRuleConfig4.ts", "./GameBaseComponent3.ts"], (function(e) {
    var t, n, a, i, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            n = e.cclegacy, a = e._decorator
        }, function(e) {
            i = e.GCache
        }, function(e) {
            o = e.GameFileConfig
        }, function(e) {
            r = e.GameBaseComponent
        }],
        execute: function() {
            var s;
            n._RF.push({}, "5f97bHwNCtFhrjO6ZYcvzO/", "GameComponent", void 0);
            var u = a.ccclass,
                l = (a.property, a.menu);
            e("GameComponent", u("MJGameComponent")(s = l("prefab/subGame/mj/GameComponent")(s = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(a)) || this).gameComponet = null, t
                }
                t(n, e);
                var a = n.prototype;
                return a.setDelegate = function(e) {
                    if (this._delegate = e, null == this.gameComponet) {
                        var t = i.SelectGame.getCurGameId();
                        if (o[t] && o[t].GameComponent) {
                            var n = this._delegate;
                            null != n.node && (n = n.node), n.addComponent(o[t].GameComponent), this.gameComponet = n.getComponent(o[t].GameComponent), this.gameComponet && this.gameComponet.setDelegate(this._delegate)
                        }
                    } else this.gameComponet.setDelegate(this._delegate)
                }, a.doGameCompFun = function(t) {
                    var n = i.SelectGame.getCurGameId();
                    if (o[n] && o[n].GameComponent) {
                        var a = this.node.getComponent(o[n].GameComponent);
                        if (a) {
                            for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) s[u - 1] = arguments[u];
                            if ("function" == typeof a[t]) return a[t].apply(a, s);
                            var l;
                            if ("function" == typeof e.prototype[t]) return (l = e.prototype[t]).call.apply(l, [this].concat(s))
                        }
                    }
                }, a.onGameStart = function() {
                    return this.doGameCompFun("onGameStart")
                }, a.getSlicePrivareRules = function(e) {
                    return this.doGameCompFun("getSlicePrivareRules", e)
                }, a.onGameOver = function() {
                    return this.doGameCompFun("onGameOver")
                }, a.checkRecoinnectOperationSeatId = function(e) {
                    return this.doGameCompFun("checkRecoinnectOperationSeatId", e)
                }, a.checkReconnectInfo = function(e, t) {
                    return void 0 === t && (t = null), this.doGameCompFun("checkReconnectInfo", e, t)
                }, a.checkOpCode = function(e, t, n) {
                    return this.doGameCompFun("checkOpCode", e, t, n)
                }, a.checkLaiziCard = function(e, t) {
                    return this.doGameCompFun("checkLaiziCard", e, t)
                }, a.onShowLaiziCard = function(e) {
                    return this.doGameCompFun("onShowLaiziCard", e)
                }, a.checkCansShowSettleView = function(e, t) {
                    return this.doGameCompFun("checkCansShowSettleView", e, t)
                }, a.onGameSceneRealTimeHuInfo = function(e) {
                    return this.doGameCompFun("onGameSceneRealTimeHuInfo", e)
                }, a.showFanGangPai = function(e, t, n) {
                    return this.doGameCompFun("showFanGangPai", e, t, n)
                }, a.getBuGangTx = function() {
                    return this.doGameCompFun("getBuGangTx")
                }, a.isAllHandsIsLaizi = function() {
                    return this.doGameCompFun("isAllHandsIsLaizi")
                }, a.isShowLiuShui = function() {
                    return this.doGameCompFun("isShowLiuShui")
                }, a.resetHandCard = function(e) {
                    return this.doGameCompFun("resetHandCard", e)
                }, a.checkHandCard = function(e, t, n) {
                    return this.doGameCompFun("checkHandCard", e, t, n)
                }, a.checkHandCardColor = function(e) {
                    return this.doGameCompFun("checkHandCardColor", e)
                }, a.checkTabFlag = function(e) {
                    return this.doGameCompFun("checkTabFlag", e)
                }, a.showTabFlag = function(e) {
                    return this.doGameCompFun("showTabFlag", e)
                }, a.resetTabFalg = function(e) {
                    return this.doGameCompFun("resetTabFalg", e)
                }, a.checkCardTag = function(e, t, n) {
                    return void 0 === n && (n = null), this.doGameCompFun("checkCardTag", e, t, n)
                }, a.onNodeMeldCardCtrPengGang = function(e, t, n, a, i) {
                    return this.doGameCompFun("onNodeMeldCardCtrPengGang", e, t, n, a, i)
                }, a.checkOpCardRotation = function(e, t, n, a) {
                    return this.doGameCompFun("checkOpCardRotation", e, t, n, a)
                }, a.onNodeMeldCardCtrReconnect = function(e, t, n, a, i, o) {
                    return this.doGameCompFun("onNodeMeldCardCtrReconnect", e, t, n, a, i, o)
                }, a.checkSpecialGangMultCard = function(e, t) {
                    return this.doGameCompFun("checkSpecialGangMultCard", e, t)
                }, a.checkReconnectCanShowWall = function(e) {
                    return this.doGameCompFun("checkReconnectCanShowWall", e)
                }, a.getCardTotalNum = function() {
                    return this.doGameCompFun("getCardTotalNum")
                }, a.checkGameStartShowCardWall = function() {
                    return this.doGameCompFun("checkGameStartShowCardWall")
                }, a.filterCPGCards = function(e) {
                    return this.doGameCompFun("filterCPGCards", e)
                }, a.showOpGropCards = function(e, t) {
                    return this.doGameCompFun("showOpGropCards", e, t)
                }, a.showOverHandCards = function(e, t) {
                    return this.doGameCompFun("showOverHandCards", e, t)
                }, a.checkMeldGang = function(e) {
                    return this.doGameCompFun("checkMeldGang", e)
                }, a.onGameGrabCard = function(e) {
                    return this.doGameCompFun("onGameGrabCard", e)
                }, a.updateNodeHandCardList = function(e, t) {
                    return this.doGameCompFun("updateNodeHandCardList", e, t)
                }, a.onNodeHandCardCtrReconnect = function(e) {
                    return this.doGameCompFun("onNodeHandCardCtrReconnect", e)
                }, a.getMingPaiRotation = function(e, t) {
                    return this.doGameCompFun("getMingPaiRotation", e, t)
                }, a.onNodeMeldCardCtrOperationResult = function(e, t) {
                    return this.doGameCompFun("onNodeMeldCardCtrOperationResult", e, t)
                }, a.getMingpaiPos = function(e) {
                    return this.doGameCompFun("getMingpaiPos", e)
                }, a.onNetBroadcastDingZhuang = function() {
                    return this.doGameCompFun("onNetBroadcastDingZhuang")
                }, a.hasXiaZhu = function() {
                    return this.doGameCompFun("hasXiaZhu")
                }, a.xiazhuOperationListen = function() {
                    return this.doGameCompFun("xiazhuOperationListen")
                }, a.updateOpInfoCodeMap = function(e, t, n, a) {
                    return this.doGameCompFun("updateOpInfoCodeMap", e, t, n, a)
                }, a.checkDiTing = function(e) {
                    return this.doGameCompFun("checkDiTing", e)
                }, a.checkOpInfoOpCode = function(e) {
                    return this.doGameCompFun("checkOpInfoOpCode", e)
                }, a.showViewCardList = function(e, t, n) {
                    return this.doGameCompFun("showViewCardList", e, t, n)
                }, a.checkXiaZhuActive = function(e, t, n) {
                    return void 0 === n && (n = !1), this.doGameCompFun("checkXiaZhuActive", e, t, n)
                }, a.reconnectOpInfoOption = function() {
                    return this.doGameCompFun("reconnectOpInfoOption")
                }, a.reconnectXiaZhuOption = function() {
                    return this.doGameCompFun("reconnectXiaZhuOption")
                }, a.checkPengGangOpInfo = function(e) {
                    return this.doGameCompFun("doGameCompFun", e)
                }, a.getXiaZhuWidth = function() {
                    return this.doGameCompFun("getXiaZhuWidth")
                }, a.getXiaZhuStr = function(e, t) {
                    return this.doGameCompFun("getXiaZhuStr", e, t)
                }, a.getXiaZhuBtn = function(e, t, n) {
                    return this.doGameCompFun("getXiaZhuBtn", e, t, n)
                }, a.checkXiaZhuPropty = function(e, t) {
                    return this.doGameCompFun("checkXiaZhuPropty", e, t)
                }, a.playXiaZhuEffect = function(e, t) {
                    return this.doGameCompFun("playXiaZhuEffect", e, t)
                }, a.updateAtlasCodeMap = function(e) {
                    return this.doGameCompFun("updateAtlasCodeMap", e)
                }, a.onOperationResult = function(e) {
                    return this.doGameCompFun("onOperationResult", e)
                }, a.onUserXiaZhuResult = function(e) {
                    return this.doGameCompFun("onUserXiaZhuResult", e)
                }, a.checkExtTing = function(e, t, n, a) {
                    return this.doGameCompFun("checkExtTing", e, t, n, a)
                }, a.checkShowTingTag = function(e) {
                    return this.doGameCompFun("checkShowTingTag", e)
                }, a.checkExtTag = function(e, t, n) {
                    return this.doGameCompFun("checkExtTag", e, t, n)
                }, a.playOprationResultEffect = function(e, t) {
                    return this.doGameCompFun("playOprationResultEffect", e, t)
                }, a.showSpecialXiaZhuView = function(e, t, n) {
                    return this.doGameCompFun("showSpecialXiaZhuView", e, t, n)
                }, a.getOprationAnimPos = function(e) {
                    return this.doGameCompFun("getOprationAnimPos", e)
                }, a.checkUsersPos = function(e) {
                    return this.doGameCompFun("checkUsersPos", e)
                }, a.checkNeedGangAnim = function() {
                    return this.doGameCompFun("checkNeedGangAnim")
                }, a.getRotationDir = function(e) {
                    return this.doGameCompFun("getRotationDir", e)
                }, a.getDirByLocalSeat = function(e) {
                    return this.doGameCompFun("getDirByLocalSeat", e)
                }, a.getDir = function(e) {
                    return this.doGameCompFun("getDir", e)
                }, a.getUserPos = function(e) {
                    return this.doGameCompFun("getUserPos", e)
                }, a.getPaiXinAnimPos = function(e) {
                    return this.doGameCompFun("getPaiXinAnimPos", e)
                }, a.updateNodeUserScorePos = function(e, t) {
                    return this.doGameCompFun("updateNodeUserScorePos", e, t)
                }, a.hidTinTip = function() {
                    return this.doGameCompFun("hidTinTip")
                }, a.checkGameMenuByHuInfo = function(e) {
                    return this.doGameCompFun("checkGameMenuByHuInfo", e)
                }, a.checkHuListInfo = function(e, t) {
                    return this.doGameCompFun("checkHuListInfo", e, t)
                }, a.onNodeUserGameRealTimeHuInfo = function(e, t) {
                    return this.doGameCompFun("onNodeUserGameRealTimeHuInfo", e, t)
                }, a.checkHuPaiTrunCard = function() {
                    return this.doGameCompFun("checkHuPaiTrunCard")
                }, a.onNodeHandCardCtrPengGang = function(e, t, n) {
                    return this.doGameCompFun("onNodeHandCardCtrPengGang", e, t, n)
                }, a.onNodeHandCardSettle = function(e) {
                    return this.doGameCompFun("onNodeHandCardSettle", e)
                }, a.checkBroadcastWaitOperation = function() {
                    return this.doGameCompFun("checkBroadcastWaitOperation")
                }, a.onChannelOperationResult = function(e) {
                    return this.doGameCompFun("onChannelOperationResult", e)
                }, a.onCardPlayManegerPlayerMySelfCard = function(e) {
                    return this.doGameCompFun("onCardPlayManegerPlayerMySelfCard", e)
                }, a.checkShowCards = function(e) {
                    return this.doGameCompFun("checkShowCards", e)
                }, a.checkCardCanOut = function(e) {
                    return this.doGameCompFun("checkCardCanOut", e)
                }, a.onUpdateOptionTips = function(e, t, n, a) {
                    return this.doGameCompFun("onUpdateOptionTips", e, t, n, a)
                }, a.getXiazhuRateFramesName = function(e, t, n, a) {
                    return this.doGameCompFun("getXiazhuRateFramesName", e, t, n, a)
                }, a.checkXiaZhuFinish = function(e, t) {
                    return this.doGameCompFun("checkXiaZhuFinish", e, t)
                }, a.showXiaZhuItems = function(e, t, n) {
                    return this.doGameCompFun("showXiaZhuItems", e, t, n)
                }, a.updateXiaZhuView = function(e, t, n, a) {
                    return void 0 === a && (a = 0), this.doGameCompFun("updateXiaZhuView", e, t, n, a)
                }, a.hideHeadXiaZhuInfo = function() {
                    return this.doGameCompFun("hideHeadXiaZhuInfo")
                }, a.showZhuojiAnim = function(e, t, n, a) {
                    return this.doGameCompFun("showPlayingJiType", e, t, n, a)
                }, a.showPlayingJiType = function(e) {
                    return this.doGameCompFun("showPlayingJiType", e)
                }, a.onRollDicesOver = function(e) {
                    return this.doGameCompFun("onRollDicesOver", e)
                }, a.checkUserPlayIng = function(e) {
                    return this.doGameCompFun("checkUserPlayIng", e)
                }, a.checkCanChangeTable = function(e) {
                    return this.doGameCompFun("checkRemoveOutCard", e)
                }, a.checkRemoveOutCard = function(e, t) {
                    return this.doGameCompFun("checkRemoveOutCard", e, t)
                }, a.checkMultCard = function(e) {
                    return this.doGameCompFun("checkMultCard", e)
                }, a.showDaPaixingOpGroupsCards = function(e, t, n) {
                    return this.doGameCompFun("showDaPaixingOpGroupsCards", e, t, n)
                }, a.getTagScale = function() {
                    return this.doGameCompFun("getTagScale")
                }, a.loadExtendMenu = function(e) {
                    return this.doGameCompFun("loadExtendMenu", e)
                }, a.getNoAutoGiveUp = function() {
                    return this.doGameCompFun("getNoAutoGiveUp")
                }, a.getGameShareTitle = function() {
                    return this.doGameCompFun("getGameShareTitle")
                }, n
            }(r)) || s) || s), n._RF.pop()
        }
    }
}))