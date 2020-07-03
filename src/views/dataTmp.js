var topicData = {
  '中国': {
    'index': 1,
    'topic': '中国',
    'date': '',
    'text': '新冠肺炎专题',
    'link': ''},
  '香港': {
    'index': 2,
    'topic': '香港',
    'date': '',
    'text': '香港暴徒专题',
    'link': ''},
  '美国': {
    'index': 3,
    'topic': '美国',
    'date': '',
    'text': '美国疫情专题',
    'link': ''}
}

var eventData = {
  '中国': [{
    'date': '2019-12-31',
    'text': '国家卫健委专家组抵达武汉视察情况'
  },{
    'date': '2019-12-31',
    'text': '武汉卫健委通报27例新型肺炎，未发现明显人传人'
  },{
    'date': '2020-01-01',
    'text': '8名涉嫌散布武汉肺炎谣言者被依法查处'
  },{
    'date': '2020-01-08',
    'text': '8名感染新型肺炎的患者出院'
  },{
    'date': '2020-01-11',
    'text': '武汉卫健委通报1例死亡病例'
  },{
    'date': '2020-01-15',
    'text': '武汉卫健委：不能排除有限人传人'
  },{
    'date': '2020-01-20',
    'text': '钟南山：新型肺炎存在人传人'
  },{
    'date': '2020-01-23',
    'text': '武汉宣布封城'
  },{
    'date': '2020-01-24',
    'text': '武汉宣布建设“火神山”和“雷神山”医院'
  },{
    'date': '2020-01-31',
    'text': '世界卫生组织将新冠疫情列为国际关注的突发公共卫生事件'
  },{
    'date': '2020-01-31',
    'text': '湖北红十字会物资使用情况引发质疑'
  },{
    'date': '2020-02-06',
    'text': '疫情“吹哨人”李文亮医生因感染新冠肺炎去世'
  },{
    'date': '2020-02-13',
    'text': '湖北单日新增新冠肺炎人数破万'
  },{
    'date': '2020-02-13',
    'text': '湖北省委主要负责同志职务调整'
  },{
    'date': '2020-02-21',
    'text': '湖北监狱系统确诊新冠肺炎271例'
  },{
    'date': '2020-02-24',
    'text': '武汉市宣布放开离汉通道的公告无效'
  },{
    'date': '2020-02-29',
    'text': '北京深圳等多地出现境外输入病例'
  },{
    'date': '2020-03-01',
    'text': '武汉多家方舱医院休舱'
  },{
    'date': '2020-03-07',
    'text': '福建泉州一指定隔离酒店倒塌'
  },{
    'date': '2020-03-10',
    'text': '武汉16家方舱医院全部休舱'
  }],
  '香港': [{
    'date': '2019-06-09',
    'text': '有示威者发起“反修例”游行，意图冲击立法会'
  },{
    'date': '2019-06-12',
    'text': '示威者霸占金钟一带非法集会，袭警'
  },{
    'date': '2019-06-21',
    'text': '特区政府已宣布停止修订《逃犯条例》，激进势力仍升级'
  },{
    'date': '2019-07-01',
    'text': '暴徒阻塞道路，冲击防线'
  },{
    'date': '2019-07-07',
    'text': '示威者发起九龙区游行，致使高铁九龙站客流量下跌'
  },{
    'date': '2019-07-14',
    'text': '激进分子在沙田“先游行、后占领”，暴力袭警'
  },{
    'date': '2019-07-26',
    'text': '香港警方拘捕一名涉案男子'
  },{
    'date': '2019-08-03',
    'text': '示威者在旺角游行，演变为暴力冲击'
  },{
    'date': '2019-08-05',
    'text': '激进分子袭击香港多间警署'
  },{
    'date': '2019-08-07',
    'text': '举办香港局势座谈会，通报止暴制乱，恢复秩序的精神'
  },{
    'date': '2019-08-13',
    'text': '香港恢复行政会议，制定经济民生政策'
  },{
    'date': '2019-08-26',
    'text': '柬埔寨支持中国政府应对香港的措施'
  },{
    'date': '2019-08-29',
    'text': '香港各界人士发声力挺特区政府依法执政'
  },{
    'date': '2019-10-01',
    'text': '蒙面暴徒在香港多区非法集结，无差别破坏袭击'
  }]
};

var cloudData = {
  '中国':
      [
      {
    'date': '2019-12-31',
    'text': '国家卫健委专家组抵达武汉视察情况'
  },{
    'date': '2019-12-31',
    'text': '武汉卫健委通报27例新型肺炎，未发现明显人传人'
  },{
    'date': '2020-01-01',
    'text': '8名涉嫌散布武汉肺炎谣言者被依法查处'
  },{
    'date': '2020-01-08',
    'text': '8名感染新型肺炎的患者出院'
  },{
    'date': '2020-01-11',
    'text': '武汉卫健委通报1例死亡病例'
  },{
    'date': '2020-01-15',
    'text': '武汉卫健委：不能排除有限人传人'
  },{
    'date': '2020-01-20',
    'text': '钟南山：新型肺炎存在人传人'
  },{
    'date': '2020-01-23',
    'text': '武汉宣布封城'
  },{
    'date': '2020-01-24',
    'text': '武汉宣布建设“火神山”和“雷神山”医院'
  },{
    'date': '2020-01-31',
    'text': '世界卫生组织将新冠疫情列为国际关注的突发公共卫生事件'
  },{
    'date': '2020-01-31',
    'text': '湖北红十字会物资使用情况引发质疑'
  },{
    'date': '2020-02-06',
    'text': '疫情“吹哨人”李文亮医生因感染新冠肺炎去世'
  },{
    'date': '2020-02-13',
    'text': '湖北单日新增新冠肺炎人数破万'
  },{
    'date': '2020-02-13',
    'text': '湖北省委主要负责同志职务调整'
  },{
    'date': '2020-02-21',
    'text': '湖北监狱系统确诊新冠肺炎271例'
  },{
    'date': '2020-02-24',
    'text': '武汉市宣布放开离汉通道的公告无效'
  },{
    'date': '2020-02-29',
    'text': '北京深圳等多地出现境外输入病例'
  },{
    'date': '2020-03-01',
    'text': '武汉多家方舱医院休舱'
  },{
    'date': '2020-03-07',
    'text': '福建泉州一指定隔离酒店倒塌'
  },{
    'date': '2020-03-10',
    'text': '武汉16家方舱医院全部休舱'
  }],
  '香港':
      [
    {'data': require('../assets/images/香港/2019-07-01.png'), 'title': '2019-07-01'},
    {'data': require('../assets/images/香港/2019-07-02.png'), 'title': '2019-07-02'},
    {'data': require('../assets/images/香港/2019-07-03.png'), 'title': '2019-07-03'},
    {'data': require('../assets/images/香港/2019-07-04.png'), 'title': '2019-07-04'},
    {'data': require('../assets/images/香港/2019-07-05.png'), 'title': '2019-07-05'},
    {'data': require('../assets/images/香港/2019-07-06.png'), 'title': '2019-07-06'},
    {'data': require('../assets/images/香港/2019-07-07.png'), 'title': '2019-07-07'},
    {'data': require('../assets/images/香港/2019-07-08.png'), 'title': '2019-07-08'},
    {'data': require('../assets/images/香港/2019-07-09.png'), 'title': '2019-07-09'},
    {'data': require('../assets/images/香港/2019-07-10.png'), 'title': '2019-07-10'},
    {'data': require('../assets/images/香港/2019-07-11.png'), 'title': '2019-07-11'},
    {'data': require('../assets/images/香港/2019-07-12.png'), 'title': '2019-07-12'},
    {'data': require('../assets/images/香港/2019-07-13.png'), 'title': '2019-07-13'},
    {'data': require('../assets/images/香港/2019-07-14.png'), 'title': '2019-07-14'},
    {'data': require('../assets/images/香港/2019-07-15.png'), 'title': '2019-07-15'},
    {'data': require('../assets/images/香港/2019-07-16.png'), 'title': '2019-07-16'},
    {'data': require('../assets/images/香港/2019-07-17.png'), 'title': '2019-07-17'},
    {'data': require('../assets/images/香港/2019-07-18.png'), 'title': '2019-07-18'},
    {'data': require('../assets/images/香港/2019-07-19.png'), 'title': '2019-07-19'},
    {'data': require('../assets/images/香港/2019-07-20.png'), 'title': '2019-07-20'},
    {'data': require('../assets/images/香港/2019-07-21.png'), 'title': '2019-07-21'},
    {'data': require('../assets/images/香港/2019-07-22.png'), 'title': '2019-07-22'},
    {'data': require('../assets/images/香港/2019-07-23.png'), 'title': '2019-07-23'},
    {'data': require('../assets/images/香港/2019-07-24.png'), 'title': '2019-07-24'},
    {'data': require('../assets/images/香港/2019-07-25.png'), 'title': '2019-07-25'},
    {'data': require('../assets/images/香港/2019-07-26.png'), 'title': '2019-07-26'},
    {'data': require('../assets/images/香港/2019-07-27.png'), 'title': '2019-07-27'},
    {'data': require('../assets/images/香港/2019-07-28.png'), 'title': '2019-07-28'},
    {'data': require('../assets/images/香港/2019-07-29.png'), 'title': '2019-07-29'},
    {'data': require('../assets/images/香港/2019-07-30.png'), 'title': '2019-07-30'},
    {'data': require('../assets/images/香港/2019-07-31.png'), 'title': '2019-07-31'},
    {'data': require('../assets/images/香港/2019-08-01.png'), 'title': '2019-08-01'},
    {'data': require('../assets/images/香港/2019-08-02.png'), 'title': '2019-08-02'},
    {'data': require('../assets/images/香港/2019-08-03.png'), 'title': '2019-08-03'},
    {'data': require('../assets/images/香港/2019-08-04.png'), 'title': '2019-08-04'},
    {'data': require('../assets/images/香港/2019-08-05.png'), 'title': '2019-08-05'},
    {'data': require('../assets/images/香港/2019-08-06.png'), 'title': '2019-08-06'},
    {'data': require('../assets/images/香港/2019-08-07.png'), 'title': '2019-08-07'},
    {'data': require('../assets/images/香港/2019-08-08.png'), 'title': '2019-08-08'},
    {'data': require('../assets/images/香港/2019-08-09.png'), 'title': '2019-08-09'},
    {'data': require('../assets/images/香港/2019-08-10.png'), 'title': '2019-08-10'},
    {'data': require('../assets/images/香港/2019-08-11.png'), 'title': '2019-08-11'},
    {'data': require('../assets/images/香港/2019-08-12.png'), 'title': '2019-08-12'},
    {'data': require('../assets/images/香港/2019-08-13.png'), 'title': '2019-08-13'},
    {'data': require('../assets/images/香港/2019-08-14.png'), 'title': '2019-08-14'},
    {'data': require('../assets/images/香港/2019-08-15.png'), 'title': '2019-08-15'},
    {'data': require('../assets/images/香港/2019-08-16.png'), 'title': '2019-08-16'},
    {'data': require('../assets/images/香港/2019-08-17.png'), 'title': '2019-08-17'},
    {'data': require('../assets/images/香港/2019-08-18.png'), 'title': '2019-08-18'},
    {'data': require('../assets/images/香港/2019-08-19.png'), 'title': '2019-08-19'},
    {'data': require('../assets/images/香港/2019-08-20.png'), 'title': '2019-08-20'},
    {'data': require('../assets/images/香港/2019-08-21.png'), 'title': '2019-08-21'},
    {'data': require('../assets/images/香港/2019-08-22.png'), 'title': '2019-08-22'},
    {'data': require('../assets/images/香港/2019-08-23.png'), 'title': '2019-08-23'},
    {'data': require('../assets/images/香港/2019-08-24.png'), 'title': '2019-08-24'},
    {'data': require('../assets/images/香港/2019-08-25.png'), 'title': '2019-08-25'},
    {'data': require('../assets/images/香港/2019-08-26.png'), 'title': '2019-08-26'},
    {'data': require('../assets/images/香港/2019-08-27.png'), 'title': '2019-08-27'},
    {'data': require('../assets/images/香港/2019-08-28.png'), 'title': '2019-08-28'},
    {'data': require('../assets/images/香港/2019-08-29.png'), 'title': '2019-08-29'},
    {'data': require('../assets/images/香港/2019-08-30.png'), 'title': '2019-08-30'},
    {'data': require('../assets/images/香港/2019-08-31.png'), 'title': '2019-08-31'},
    {'data': require('../assets/images/香港/2019-09-01.png'), 'title': '2019-09-01'},
  ]
};

var emotionData = {
  '中国': {
    emotion_index: '正向',
    evaluation: [
      '自从美国爆发新冠病毒以来，美国流感就消失了，你说奇不奇怪[摊手]',
      '新疆自身条件也不是很好，还援助他国。真的，没有那个国家能做到中国这样不计前嫌，大爱无疆！',
      '我们不要窝里斗，都互相理解一下～',
      '有问题和矛盾，及早解决，不要上升到两地人民。大家都是一家人[心]',
      '巴铁加油[心]',
      '致敬所有医护工作者',
      '湖北终于挺过来了！！一定要严防境外！！',
      '这就是开往春天的地铁[心][心][心][心]',
      '武汉加油！中国加油！待到雨过天晴，我们一起去看樱花！',
      '武汉，是一座英雄的城市，也是一座即将重焕活力的城市！[心]'
  ]},
  '香港': {
    emotion_index: '负向',
    evaluation: [
      '已经是恐怖分子了！',
      '一定要严惩暴徒[拳头][拳头][拳头]',
      '要独立拿美国国旗干啥，一群傻子，自己的国家都搞，到最后美国能保护你吗就是别人的抢，还傻了吧唧的，真的以为会给你什么',
      '废青，整天啃老，还不工作，就是一群废人',
      '港独必死！',
      '是滴！无法无天，绝不容忍',
      '警察抓人，法官放人，香港病了',
      '说暴徒太轻，都是杀人放火没脑子的凶手，统统抓住，一个不留，全部法办!'
  ]},
  '美国': {
    emotion_index: '负向',
    evaluation: [
      '已经是恐怖分子了！',
      '一定要严惩暴徒[拳头][拳头][拳头]',
      '要独立拿美国国旗干啥，一群傻子，自己的国家都搞，到最后美国能保护你吗就是别人的抢，还傻了吧唧的，真的以为会给你什么',
      '废青，整天啃老，还不工作，就是一群废人',
      '港独必死！',
      '是滴！无法无天，绝不容忍',
      '警察抓人，法官放人，香港病了',
      '说暴徒太轻，都是杀人放火没脑子的凶手，统统抓住，一个不留，全部法办!'
    ]},
};

export { topicData, eventData, cloudData, emotionData };
