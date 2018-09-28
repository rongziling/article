var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = {
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}%'
        }
    }
};
option = {
    title: {
        text: '',
        subtext: '',
        sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
    },
    legend: {
        y: 55,
        itemGap : document.getElementById('main').offsetWidth / 8,
        data:['扣球成功率', '扣球效率']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid: {
        y: 80,
        y2: 30
    },
    xAxis : [
        {
            type : 'value',
            position: 'top',
            splitLine: {show: false},
            axisLabel: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            splitLine: {show: false},
            data : ['李在英', '朴贞雅', '维拉万', '平皮查娅','黑厚爱','石井优希','长冈望悠','金软景','查楚昂','龚翔宇','朱婷']
        }
    ],
    series : [
        {
            name:'扣球成功率',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[30.00, 32.95, 36.62, 38.46,40.00,40.98,43.31,43.45,47.52,49.06,57.40]
        },
        {
            name:'扣球成功率',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[30.00, 32.95, 36.62, 38.46,40.00,40.98,43.31,43.45,47.52,49.06,57.40]
        },
        {
            name:'扣球效率',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[19.55,20.45, 28.17, 28.57,30.67,33.33,28.35,34.08,35.46,33.02,53.25]
        },

    ]
};
