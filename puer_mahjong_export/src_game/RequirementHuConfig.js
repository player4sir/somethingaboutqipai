System.register("chunks:///_virtual/RequirementHuConfig.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var n;
            e("requireData", (function() {
                return i[0]
            })), t._RF.push({}, "b2ff0SQkuVARYReb1gD9gma", "RequirementHuConfig", void 0);
            var i = ((n = {})[0] = [{
                text: "平胡：不存在另加番时，不允许点炮胡",
                checkFunc: function(e, t) {
                    return !0
                }
            }, {
                text: "能胡必胡：牌墙剩余牌张数≤3时，能胡必胡",
                checkFunc: function(e, t) {
                    return !0
                }
            }, {
                text: "能胡必胡：开杠后补进了杠牌，能胡必胡",
                checkFunc: function(e, t) {
                    return !0
                }
            }, {
                text: "不允许“先弃后胡”：其他人打出一张牌，玩家没有胡，则在该玩家操作（摸、碰、杠）前都不能再胡牌",
                checkFunc: function(e, t) {
                    return !0
                }
            }], n);
            t._RF.pop()
        }
    }
}))