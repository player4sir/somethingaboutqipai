System.register("chunks:///_virtual/CardConfigs3.ts", ["cc"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.Vec4
        }],
        execute: function() {
            var a;
            e("PlayerRole", void 0), t._RF.push({}, "5369bwwoXBNR7O9wVZuYAhM", "CardConfigs", void 0), e("MjSize", {
                    width: 81.9,
                    height: 130,
                    length: 1.4300000000000002
                }), e("MjTabel", {
                    innerSize: 34.7,
                    outterSize: 37.2
                }),
                function(e) {
                    e[e.ME = 1] = "ME", e[e.RIGHT = 2] = "RIGHT", e[e.TOP = 3] = "TOP", e[e.LEFT = 4] = "LEFT"
                }(a || (a = e("PlayerRole", {})));
            for (var i = e("CardInfo", []), o = 1; o < 10; o++) i[o] = new n(1, 1, o / 9, -.25);
            for (var r = 11; r < 20; r++) i[r] = new n(1, 1, (r - 10) / 9, 0);
            for (var s = 21; s < 30; s++) i[s] = new n(1, 1, (s - 20) / 9, .25);
            for (var u = 31; u < 35; u++) i[u] = new n(1, 1, (u - 30) / 9, .5);
            for (var l = 41; l < 44; l++) i[l] = new n(1, 1, (l - 40 + 4) / 9, .5);
            e("drawCardDisRatio", 2), e("CountDownInfo", [new n(-1, 1, .25, 0), new n(-1, 1, .5, 0), new n(-1, 1, .75, 0), new n(-1, 1, 0, 0), new n(-1, 1, .25, .333333), new n(-1, 1, .5, .333333), new n(-1, 1, .75, .333333), new n(-1, 1, 0, .333333), new n(-1, 1, .25, .666667), new n(-1, 1, .5, .666667)]), t._RF.pop()
        }
    }
}))