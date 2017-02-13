var myChart = echarts.init(document.getElementById('main'));

        // Specify configurations and data graphs 
myChart.showLoading({text:'iUsed正努力加载数据中...'});

$.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/USA_geo.json', function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap('USA', usaJson, {
        Alaska: {              // 把阿拉斯加移到美国主大陆左下方
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -110,        // 夏威夷
            top: 28,
            width: 5
        },
        'Puerto Rico': {       // 波多黎各
            left: -76,
            top: 26,
            width: 2
        }
    });
    option = {
        title: {
            text: 'Unique Visitors On iUsed.org(Feb.2017)',
            subtext: 'Data from api.iused.org',
            sublink: 'http://api.iused.org',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value+'人访问';
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 500,
            inRange: {
                color: ['#242424','#424242', '#616161', '#757575', '#9E9E9E', '#E0E0E0', '#EEEEEE', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65','#8BC34A','#80bd01']
            },
            text:['Opening','Wait to start'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: true},
                restore: {show:false},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '初始数据统计中...',
                type: 'map',
                roam: true,
                map: 'USA',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data:[
                    {name: 'Alabama', value: 0,provinceurl:"http://al.iused.org"},
                    {name: 'Alaska', value: 0,provinceurl:"http://ak.iused.org"},
                    {name: 'Arizona', value: 400,provinceurl:"http://az.iused.org"},
                    {name: 'Arkansas', value: 0,provinceurl:"http://ar.iused.org"},
                    {name: 'California', value: 0,provinceurl:"http://ca.iused.org"},
                    {name: 'Colorado', value: 0,provinceurl:"http://co.iused.org"},
                    {name: 'Connecticut', value: 0,provinceurl:"http://ct.iused.org"},
                    {name: 'Delaware', value: 0,provinceurl:"http://de.iused.org"},
                    {name: 'District of Columbia', value: 0,provinceurl:"http://dc.iused.org"},
                    {name: 'Florida', value: 400,provinceurl:"http://fl.iused.org"},
                    {name: 'Georgia', value: 0,provinceurl:"http://ga.iused.org"},
                    {name: 'Hawaii', value: 0,provinceurl:"http://hi.iused.org"},
                    {name: 'Idaho', value: 0,provinceurl:"http://id.iused.org"},
                    {name: 'Illinois', value: 0,provinceurl:"http://il.iused.org"},
                    {name: 'Indiana', value: 0,provinceurl:"http://in.iused.org"},
                    {name: 'Iowa', value: 500,provinceurl:"http://ia.iused.org"},
                    {name: 'Kansas', value: 500,provinceurl:"http://ks.iused.org"},
                    {name: 'Kentucky', value: 0,provinceurl:"http://ky.iused.org"},
                    {name: 'Louisiana', value: 0,provinceurl:"http://la.iused.org"},
                    {name: 'Maine', value: 0,provinceurl:"http://me.iused.org"},
                    {name: 'Maryland', value: 0,provinceurl:"http://md.iused.org"},
                    {name: 'Massachusetts', value: 0,provinceurl:"http://ma.iused.org"},
                    {name: 'Michigan', value: 400,provinceurl:"http://mi.iused.org"},
                    {name: 'Minnesota', value: 0,provinceurl:"http://mn.iused.org"},
                    {name: 'Mississippi', value: 0,provinceurl:"http://ms.iused.org"},
                    {name: 'Missouri', value: 500,provinceurl:"http://mo.iused.org"},
                    {name: 'Montana', value: 0,provinceurl:"http://mt.iused.org"},
                    {name: 'Nebraska', value: 0,provinceurl:"http://ne.iused.org"},
                    {name: 'Nevada', value: 0,provinceurl:"http://nv.iused.org"},
                    {name: 'New Hampshire', value: 0,provinceurl:"http://nh.iused.org"},
                    {name: 'New Jersey', value: 0,provinceurl:"http://nj.iused.org"},
                    {name: 'New Mexico', value: 0,provinceurl:"http://nm.iused.org"},
                    {name: 'New York', value: 0,provinceurl:"http://ny.iused.org"},
                    {name: 'North Carolina', value: 0,provinceurl:"http://nc.iused.org"},
                    {name: 'North Dakota', value: 0,provinceurl:"http://nd.iused.org"},
                    {name: 'Ohio', value: 400,provinceurl:"http://oh.iused.org"},
                    {name: 'Oklahoma', value: 500,provinceurl:"http://ok.iused.org"},
                    {name: 'Oregon', value: 400,provinceurl:"http://or.iused.org"},
                    {name: 'Pennsylvania', value: 400,provinceurl:"http://pa.iused.org"},
                    {name: 'Rhode Island', value: 0,provinceurl:"http://ri.iused.org"},
                    {name: 'South Carolina', value: 0,provinceurl:"http://sc.iused.org"},
                    {name: 'South Dakota', value: 0,provinceurl:"http://sd.iused.org"},
                    {name: 'Tennessee', value: 0,provinceurl:"http://tn.iused.org"},
                    {name: 'Texas', value: 0,provinceurl:"http://tx.iused.org"},
                    {name: 'Utah', value: 0,provinceurl:"http://ut.iused.org"},
                    {name: 'Vermont', value: 0,provinceurl:"http://vt.iused.org"},
                    {name: 'Virginia', value: 0,provinceurl:"http://va.iused.org"},
                    {name: 'Washington', value: 0,provinceurl:"http://wa.iused.org"},
                    {name: 'West Virginia', value: 0,provinceurl:"http://wv.iused.org"},
                    {name: 'Wisconsin', value: 0,provinceurl:"http://wi.iused.org"},
                    {name: 'Wyoming', value: 0,provinceurl:"http://wy.iused.org"},
                    {name: 'Puerto Rico', value: 0,provinceurl:"http://pr.iused.org"}
                ]
            }
        ]
    };

    myChart.setOption(option);
});
onresize = myChart.resize;
    myChart.on('click', function (params) {window.open(params.data.provinceurl);
});
