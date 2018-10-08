if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    window.location = 'http://127.0.0.1:8090/home'
}

$(function () {
    Highcharts.chart('chart1', {
        title: {
            text: 'Exchange rate USD/VND',
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11','12']
        },
        yAxis: {
            title: {
                text: 'VND'
            },
            plotLines: [{
                value: 10000,
                width: 10000,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'VND'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            data: [20700, 20705, 20720, 20710, 20750, 20750, 20790, 20800, 20810, 20820, 20800, 20790]
        }]
    });
});