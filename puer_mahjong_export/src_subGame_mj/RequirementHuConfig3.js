System.register("chunks:///_virtual/RequirementHuConfig3.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var n;
            e("requireData", (function() {
                return a[0]
            })), t._RF.push({}, "81659saVYNB278y/PeOV3vI", "RequirementHuConfig", void 0);
            var a = ((n = {})[0] = [{
                text: "番种分值总和必须大于等于8番才可胡牌",
                checkFunc: function(e, t) {
                    return !0
                }
            }, {
                text: "花牌的番数不计入“8番起和”的门槛",
                checkFunc: function(e, t) {
                    return !0
                }
            }, {
                text: "大番如果“包含”了小番的前提条件，小番通常不再重复加",
                checkFunc: function(e, t) {
                    return !0
                }
            }], n);
            t._RF.pop()
        }
    }
}))