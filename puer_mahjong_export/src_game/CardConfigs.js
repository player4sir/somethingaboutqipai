System.register("chunks:///_virtual/CardConfigs.ts", ["cc"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e.Vec4
        }],
        execute: function() {
            var i;
            e("PlayerRole", void 0), t._RF.push({}, "a36443Z+F9P3qMZU/74+a4T", "CardConfigs", void 0), e("MjSize", {
                    width: 81.9,
                    height: 130,
                    length: 1.4300000000000002
                }), e("MjTabel", {
                    innerSize: 34.7,
                    outterSize: 37.2
                }),
                function(e) {
                    e[e.ME = 1] = "ME", e[e.RIGHT = 2] = "RIGHT", e[e.TOP = 3] = "TOP", e[e.LEFT = 4] = "LEFT"
                }(i || (i = e("PlayerRole", {})));
            for (var a = e("CardInfo", []), o = 1; o < 10; o++) a[o] = new n(1, 1, o / 9, -.25);
            for (var r = 11; r < 20; r++) a[r] = new n(1, 1, (r - 10) / 9, 0);
            for (var s = 21; s < 30; s++) a[s] = new n(1, 1, (s - 20) / 9, .25);
            for (var l = 31; l < 35; l++) a[l] = new n(1, 1, (l - 30) / 9, .5);
            for (var u = 41; u < 44; u++) a[u] = new n(1, 1, (u - 40 + 4) / 9, .5);
            e("drawCardDisRatio", 2), e("CountDownInfo", [new n(-1, 1, .25, 0), new n(-1, 1, .5, 0), new n(-1, 1, .75, 0), new n(-1, 1, 0, 0), new n(-1, 1, .25, .333333), new n(-1, 1, .5, .333333), new n(-1, 1, .75, .333333), new n(-1, 1, 0, .333333), new n(-1, 1, .25, .666667), new n(-1, 1, .5, .666667)]), t._RF.pop()
        }
    }
}))