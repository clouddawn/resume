// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById("skills"));
// 指定图表的配置项和数据
const option = {
    radar: {
        // shape: 'circle',
        indicator: [
            {
                name: "\u9759\u6001\u9875\u9762",
                max: 100
            },
            {
                name: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",
                max: 100
            },
            {
                name: "Vue \u5168\u5BB6\u6876",
                max: 100
            },
            {
                name: "\u9879\u76EE\u5F00\u53D1\u80FD\u529B",
                max: 100
            },
            {
                name: "\u6C9F\u901A\u80FD\u529B",
                max: 100
            }
        ]
    },
    series: [
        {
            name: "\u80FD\u529B\u96F7\u8FBE",
            type: "radar",
            data: [
                {
                    value: [
                        100,
                        80,
                        90,
                        85,
                        80
                    ],
                    name: "\u80FD\u529B\u6307\u6570"
                }
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//# sourceMappingURL=resume.de158e3a.js.map
