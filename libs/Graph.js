var msg = '\
<!DOCTYPE html>\
<html style="height: 100%" lang="zh">\
<head>\
    <meta charset="utf-8">\
	<link href="http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\
    <script type="text/javascript" src="js/echarts.js"></script>\
    <script type="text/javascript" src="js/jquery-3.3.1.js"></script>\
    <script type="text/javascript" src="js/own_dataTool.js"></script>\
	<style> \
		* { \
			box-sizing: border-box; \
		} \
		\
		body { \
			margin: 0; \
			padding: 0;\
			font-weight: 500; \
			font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo; \
		} \
		\
		#SearchBar { \
			width: 600px; \
			height: 100px; \
			margin: 0 auto; \
		} \
		\
		div.search {\
			padding: 30px 0;\
		} \
		\
		form { \
			position: relative;\
			width: 500px; \
			margin: 0 auto; \
		} \
		\
		input, button { \
			border: none; \
			outline: none; \
		} \
		\
		input { \
			width: 100%; \
			height: 42px; \
			padding-left: 13px;\
		} \
		\
		button { \
			height: 42px; \
			width: 42px; \
			cursor: pointer; \
			position: absolute; \
		} \
		\
		/*搜索框1*/ \
		.bar1 input { \
			border: 2px solid #7BA7AB; \
			border-radius: 5px; \
			background: #F9F0DA; \
			color: #9E9C9C; \
		} \
		.bar1 button { \
			top: 0; \
			right: 0; \
			background: #7BA7AB; \
			border-radius: 0 5px 5px 0; \
		} \
		\
		.bar1 button:before { \
			content: "\f002"; \
			font-family: FontAwesome; \
			font-size: 16px; \
			color: #F9F0DA; \
		} \
	</style> \
</head> \
<body style="height: 100%"> \
\
<div id="SearchBar" style="height: 10%"> \
	<div class="search bar1"> \
		<form> \
			<input id="inputValue" type="text" placeholder="请输入您要查询的事件(例如:E-李文星)或触发词(例如:T-打捞)..."/> \
			<button type="submit" onclick="return test()"></button> \
		</form> \
	</div> \
	</div> \
\
\
<div id="container" style="height:90%"></div> \
<script type="text/javascript"> \
	function test(){ \
    
		var dom = document.getElementById("container");
		var myChart = echarts.init(dom);
		var app = {};
		var searchCommand = document.getElementById('inputValue').value;
		

		option = null;
		//myChart.showLoading();
		
		if(searchCommand.charAt(0) == 'E'){
		$.get('data/' + searchCommand.substring(2) + ".xml", function (xml) {
			
			//myChart.hideLoading();
			//console.log(searchCommand.substring(2));
			var graph = echarts.dataTool.gexf.parse(xml);
			var categories = [];
			
			
			
			var triggerNodeList = [];
			var triggerMap = {};		//触发词名字与node对象字典
			var triggerEventMap = {};	//触发词与事件的映射字典
			
			var edgeMaxW = 0;	//边的权重最大值
			var edgeMinW = 0;	//边的权重最小值
			
			//设置类别
			categories[0] = {
				name:'Trigger-Start', 
				itemStyle: {
					color:'#36871d'
				}
			};
			
			categories[1] = {
				name:'Trigger-Middle',
				itemStyle: {
					color:'#105498'
				}
			};
			
			categories[2] = {
				name:'Trigger-End',
				itemStyle: {
					//color:'#bda29a'
					color:'#c1291f'
				}
			};
			
			//分拣出触发词与事件信息
			graph.nodes.forEach(function (node) {
				if(node.dataLabel == 1){	//证明该节点是事件
					triggerEventMap[node.eventKey] = node;
				}else{
					triggerNodeList.push(node);
					triggerMap[node.name] = node;
				}
			});

			//寻找边的权重最大值与最小值, 并设置节点的类型(source、middle、target)
			graph.links.forEach(function (edge){
				//console.log(triggerMap[edge.sourceId]);
				triggerMap[edge.source].isSource = true;				//对于触发词图, 此处sourceID即为触发词名字
				triggerMap[edge.target].isTarget = true;
			
				if(edgeMaxW == 0 && edgeMinW == 0){
					edgeMaxW = edge.weight;
					edgeMinW = edge.weight;
				}else if(edge.weight > edgeMaxW){
					edgeMaxW = edge.weight;
				}else if(edge.weight < edgeMinW){
					edgeMinW = edge.weight;
				}
			});
			
			//对触发词节点相关属性进行设置
			triggerNodeList.forEach(function (node) {
				//设置节点的颜色
				if(node.isSource && node.isTarget){
					node.category = 1;	//中间节点
				}else if(node.isSource){
					node.category = 0;  //起始节点
				}else if(node.isTarget){
					node.category = 2;  //结束节点
				}else{
					//当前应该不存在孤立点
					console.log("Warning: " + node.name + " is neither a source nor a target");
				}
				
				//node.itemStyle = null;	
				node.symbolSize = 40;	//触发词大小
				//node.category = 0;
				node.label = {
					show: true
				};
			});
			
			//根据边的权重设置颜色
			graph.links.forEach(function (edge){
				var lineWidth;
				var colorWeight = 255 - (edge.weight - edgeMinW)/(edgeMaxW - edgeMinW) * 255;	 //映射到(0,255)
				//var colorWeight = (edge.weight - edgeMinW)/(edgeMaxW - edgeMinW) * 0.5 + 0.5;	 //映射到(0.5,1)
				var lineColor = 'rgb(0,' + colorWeight + ',255)';
				//var lineColor = 'rgba(0, 191, 255, ' + colorWeight + ')';
			
				edge.lineStyle = {
					width: 1,
					//width: lineWidth,
					color: lineColor,
					//type: 'dashed'
					type: 'solid'
				}
			});
			
			//ECharts配置项信息
			option = {
				title: {
					text: 'Event Graph',
					subtext: 'Default layout',
					top: 'bottom',
					left: 'right'
				},
				tooltip:{
					//triggerOn: 'click',
					confine: true,	//是否将tooltip框限制在图表的区域内。
					enterable: true, //鼠标是否可以进入悬浮层
					formatter: function(params, ticket, callback){
						//console.log(params);
						if(params.dataType == 'node'){	//触发词对应的事件描述信息
							var showHtm = '';
							var eventInfo = triggerEventMap[params.name + "_e"];
							showHtm += 'Event: ' + eventInfo.name + '<br>';
							showHtm += 'Date: ' + eventInfo.date + '<br>';
							showHtm += 'Person: ' + eventInfo.person + '<br>';
							showHtm += 'Location: ' + eventInfo.location + '<br>';
							showHtm += 'Organization: ' + eventInfo.organization + '<br>';
							showHtm += 'Keywords: ' + eventInfo.keywords + '<br>';
							showHtm += 'Trigger: ' + eventInfo.trigger + '<br>';
							return showHtm;
						}else if(params.dataType == 'edge'){	//连接边对应的事件描述信息
							var showHtm = '';
							var eventInfo = triggerEventMap[params.name + "_e"];
							showHtm += params.data.source + ' -> ' + params.data.target + '<br>';
							showHtm += 'Weight: ' + params.data.weight + '<br>';
							return showHtm;
						}
					}
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				legend: [{
					// selectedMode: 'single',
					show: true,
					orient: 'vertical',
					right: 10,
					top: 20,
					bottom: 20,
					data: categories.map(function (a) {
						return a.name;
					}),
					
					selected:{
						"Trigger-Source": true,
						"Trigger-Middle": false,
						"Trigger-End": false
					}
					
				}],
				
				
				//视觉映射组件
				visualMap:{
					//left: 'right',
					right: '2.5%',
					bottom: '10%',
					itemHeight: 120,
					text: ['Edge Weight'],
					textGap: 30,
					hoverLink: false,
					seriesIndex: graph.links,
					inRange: {
						color: ['rgb(0,255,255)', 'rgb(0,0,255)']
					},
					outOfRange: {
						color: ['rgba(255,255,255,.2)']
					}
					
				},
				
				animationDuration: 1500,
				animationEasingUpdate: 'quinticInOut',
				series : [
					{
						name: 'Event Graph',
						type: 'graph',
						layout: 'force',
						force:{
							repulsion: 3000,		//斥力因子
							edgeLength: [0.1,100],
							layoutAnimation: true	//布局过程动画是否开启
						},
						draggable: true,	//节点是否可拖拽
						data: triggerNodeList,
						links: graph.links,
						categories: categories,
						roam: true,
						focusNodeAdjacency: true,
						edgeSymbol:['none','arrow'],
						edgeSymbolSize: 20,
						//left: '10%',
						//top: '10%',
						//right: '10%',
						//bottom: '10%',

						itemStyle: {
							normal: {
								borderColor: '#fff',
								borderWidth: 1,
								shadowBlur: 10,
								shadowColor: 'rgba(0, 0, 0, 0.3)'
							}
						},
						label: {
							normal: {
								position: 'right',
								formatter: '{b}',
								fontSize: 18
							}
						},
						lineStyle: {
							normal: {
								curveness: 0.3,
							}
						},
						emphasis: {
							lineStyle:{
								width: 10
								//type: 'solid'
							},
							edgeLabel:{
								show: true
							},
							label:{
								show: true
							}
						}
					}
				]
			};

			myChart.setOption(option);
		}, 'xml');;
		
		}
		
		/*
		myChart.on('click', function(params){
			//console.log(params.name);
			
			
			if(params.componentType == 'series'){
				if(params.seriesType == 'graph'){
					if(params.dataType = 'node'){
						console.log(params.name);
						console.log(params.dataIndex);
						console.log(params.data);
					}
				}
			
			}
			
		
		})
		*/
		return false;
	
	}
</script>
</body>
</html>
';