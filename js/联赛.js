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
            data : ['斯洛特耶斯', '马里赫', '埃格努', '利普曼', '斯马泽克', '坦达拉', '沃龙科娃', '巴奇', '朱婷', '博斯科维奇']
        }
    ],
    series : [
        {
            name:'扣球成功率',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[42.08, 42.41,43.6, 43.48,44.03,44.37,44.58,45.53,46.94,47.62]
        },
        {
            name:'扣球效率',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[28.66, 27.55, 28.05, 30.19,30.65,30.51,27.71,34.44,36.67,27.33]
        },

    ]
};
