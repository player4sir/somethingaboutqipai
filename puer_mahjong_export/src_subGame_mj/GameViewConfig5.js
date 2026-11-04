System.register("chunks:///_virtual/GameViewConfig5.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var n;
            e("GameViewConfig", void 0), t._RF.push({}, "b4e37K2DHBIiLSkjoOQ2xtJ", "GameViewConfig", void 0),
                function(e) {
                    var t, n, a, i;
                    ! function(e) {
                        e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Moving = 3] = "Moving"
                    }(t || (t = {})), e.WallStatus = t,
                        function(e) {
                            e[e.Idle = 1] = "Idle", e[e.Sort = 2] = "Sort", e[e.Show = 3] = "Show", e[e.Over = 4] = "Over"
                        }(n || (n = {})), e.HandCardStatus = n,
                        function(e) {
                            e[e.Stop = 1] = "Stop", e[e.Move = 2] = "Move", e[e.Pause = 3] = "Pause"
                        }(a || (a = {})), e.DiceStatus = a, e.CardConfig = {
                            Width: 3.1,
                            Height: 4.1,
                            Thickness: 2,
                            GroundToCard: 1.2,
                            GroundToHandCard: 2.2,
                            ScaleWallCard: 1,
                            ScaleHandCard: 1.32,
                            ScaleOutCard: 1.5,
                            ScaleMeldCard: 1.254,
                            ScaleHuCard: 1.32,
                            SpaceOutCard: .03875,
                            SpaceHuCard: 3.1 * 1.1 * .01,
                            CenterToWallCard: 31.2,
                            CenterToOutCard: 20 * 1.18,
                            CenterToHandCard: 39,
                            CenterToHuCard: 31,
                            CenterToHuCardX: 26,
                            CenterToMeld: [45, 49, 43.2, 49],
                            EdgeToMeld: [46, 40, 44, 25],
                            SpaceMeldCard: 3.1 * .01
                        },
                        function(e) {
                            e[e.GameStart = 0] = "GameStart", e[e.GameOver = 1] = "GameOver", e[e.Hu = 2] = "Hu", e[e.Hu2 = 3] = "Hu2", e[e.Peng = 4] = "Peng", e[e.ChaJiao = 5] = "ChaJiao", e[e.WuJiao = 6] = "WuJiao", e[e.HuaZhu = 7] = "HuaZhu", e[e.GuanSi = 8] = "GuanSi", e[e.PaiXing = 9] = "PaiXing", e[e.Gang = 10] = "Gang", e[e.HuangZhuang = 11] = "HuangZhuang", e[e.ZhuoJi = 12] = "ZhuoJi"
                        }(i || (i = {})), e.AnimType = i
                }(n || (n = e("GameViewConfig", {}))), t._RF.pop()
        }
    }
}))