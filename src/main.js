// 基于准备好的dom，初始化echarts实例

const myChart = echarts.init(document.getElementById("skills"));

// 指定图表的配置项和数据
const option = {
  radar: {
    // shape: 'circle',
    indicator: [
      {name: "静态页面", max: 100},
      {name: "微信小程序", max: 100},
      {name: "Vue 全家桶", max: 100},
      {name: "项目开发能力", max: 100},
      {name: "沟通能力", max: 100},
    ]
  },
  series: [{
    name: "能力雷达",
    type: "radar",
    data: [
      {
        value: [100, 80, 90, 85, 80],
        name: "能力指数"
      }
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);