~function () {
    var myChart = echarts.init(E1);
    var placeoptionHoledStyle = {
        normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        },
        emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        }
    };
    var dataStyle = {
        normal: {
            label: {
                show: true,
                position: 'insideLeft',
                formatter: '{c}%'
            }
        }
    };
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%'
        },
        legend: {
            y: 55,
            itemGap: 10,
            data: ['扣球成功率', '扣球效率']
        },
        grid: {
            y: 80,
            y2:30,
        },
        xAxis: [
            {
                type: 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'category',
                splitLine: {show: false},
                data: ['李在英', '朴贞雅', '维拉万', '平皮查娅', '黑厚爱', '石井优希', '长冈望悠', '金软景', '查楚昂', '龚翔宇', '朱婷']
            }
        ],
        series: [
            {
                name: '扣球成功率',
                type: 'bar',
                stack: '总量',
                itemStyle: dataStyle,
                data: [30.00, 32.95, 36.62, 38.46, 40.00, 40.98, 43.31, 43.45, 47.52, 49.06, 57.40]
            },

            {
                name: '扣球效率',
                type: 'bar',
                stack: '总量',
                itemStyle: dataStyle,
                data: [19.55, 20.45, 28.17, 28.57, 30.67, 33.33, 28.35, 34.08, 35.46, 33.02, 53.25]
            },
        ]
    };
    myChart.setOption(option);
}();
~function () {
    var myChart = echarts.init(E3);
    var placeoptionHoledStyle = {
        normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        },
        emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
        }
    };
    var dataStyle = {
        normal: {
            label: {
                show: true,
                position: 'insideLeft',
                formatter: '{c}%'
            }
        }
    };
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%'
        },
        legend: {
            y: 55,
            itemGap: 10,
            data: ['扣球成功率', '扣球效率']
        },
        grid: {
            y: 80,
            y2: 30
        },
        xAxis: [
            {
                type: 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'category',
                splitLine: {show: false},
                data: ['斯洛特耶斯', '马里赫', '埃格努', '利普曼', '斯马泽克', '坦达拉', '沃龙科娃', '巴奇', '朱婷', '博斯科维奇']
            }
        ],
        series: [
            {
                name: '扣球成功率',
                type: 'bar',
                stack: '总量',
                itemStyle: dataStyle,
                data: [42.08, 42.41,43.6, 43.48,44.03,44.37,44.58,45.53,46.94,47.62]
            },
            {
                name: '扣球效率',
                type: 'bar',
                stack: '总量',
                itemStyle: dataStyle,
                data: [28.66, 27.55, 28.05, 30.19,30.65,30.51,27.71,34.44,36.67,27.33]
            },
        ]
    };
    myChart.setOption(option);
}();
~function () {
    var myChart = echarts.init(E2);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['扣中', '失误被拦','扣球总数']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['朱婷','杨方旭','段放','李盈莹','刘晓彤','龚翔宇']
            }
        ],
        series : [
            {
                name:'扣中',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[169, 47, 53, 133, 116, 107]
            },
            {
                name:'失误被拦',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[37, 20, 21, 61, 49, 30]
            },
            {
                name:'扣球总数',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[360, 124, 148, 377,330, 328]}
        ]
    };

    myChart.setOption(option);
}();
~function () {
    var myChart = echarts.init(E4);

    function createRandomItemStyle() {
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };
    }

    option = {
        title: {
            text: '朱婷个人荣誉',
            link: 'http://www.google.com/trends/hottrends'
        },
        tooltip: {
            show: true
        },
        series: [{
            name: '朱婷个人荣誉',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: [
                {
                    name: "2015女排世界杯MVP",
                    value: 10000,
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    }
                },
                {
                    name: "2016女排奥运会MVP",
                    value: 6181,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017女排欧冠MVP",
                    value: 4386,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017女排世俱杯MVP",
                    value: 4055,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017女排大冠军杯MVP",
                    value: 2467,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017土耳其杯MVP",
                    value: 2244,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2018土耳其联赛MVP",
                    value: 1898,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2016女排奥运会最佳主攻",
                    value: 1484,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017土耳其联赛最佳主攻",
                    value: 1112,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "2017女排大冠军杯最佳主攻",
                    value: 965,
                    itemStyle: createRandomItemStyle()
                },
            ]
        }]
    };

    myChart.setOption(option);
}();