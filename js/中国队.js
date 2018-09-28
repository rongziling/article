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
        show : true,
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
