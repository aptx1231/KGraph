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
  {
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
  }],
  '美国':
      [
    {
        'date': '2019-06-09',
        'text': '有示威者发起“反修例”游行，意图冲击立法会'
    },{
        'date': '2019-06-12',
        'text': '示威者霸占金钟一带非法集会，袭警'
    }]
};

var cloudData = {
  '美国':
      [
        {'data': require('../assets/images/美国/2020-05-01.png'), 'title': '2020-05-01'},
        {'data': require('../assets/images/美国/2020-05-02.png'), 'title': '2020-05-02'},
        {'data': require('../assets/images/美国/2020-05-03.png'), 'title': '2020-05-03'},
        {'data': require('../assets/images/美国/2020-05-04.png'), 'title': '2020-05-04'},
        {'data': require('../assets/images/美国/2020-05-05.png'), 'title': '2020-05-05'},
        {'data': require('../assets/images/美国/2020-05-06.png'), 'title': '2020-05-06'},
        {'data': require('../assets/images/美国/2020-05-07.png'), 'title': '2020-05-07'},
        {'data': require('../assets/images/美国/2020-05-08.png'), 'title': '2020-05-08'},
        {'data': require('../assets/images/美国/2020-05-09.png'), 'title': '2020-05-09'},
        {'data': require('../assets/images/美国/2020-05-10.png'), 'title': '2020-05-10'},
        {'data': require('../assets/images/美国/2020-05-11.png'), 'title': '2020-05-11'},
        {'data': require('../assets/images/美国/2020-05-12.png'), 'title': '2020-05-12'},
        {'data': require('../assets/images/美国/2020-05-13.png'), 'title': '2020-05-13'},
        {'data': require('../assets/images/美国/2020-05-14.png'), 'title': '2020-05-14'},
        {'data': require('../assets/images/美国/2020-05-15.png'), 'title': '2020-05-15'},
        {'data': require('../assets/images/美国/2020-05-16.png'), 'title': '2020-05-16'},
        {'data': require('../assets/images/美国/2020-05-17.png'), 'title': '2020-05-17'},
        {'data': require('../assets/images/美国/2020-05-18.png'), 'title': '2020-05-18'},
        {'data': require('../assets/images/美国/2020-05-19.png'), 'title': '2020-05-19'},
        {'data': require('../assets/images/美国/2020-05-20.png'), 'title': '2020-05-20'},
        {'data': require('../assets/images/美国/2020-05-21.png'), 'title': '2020-05-21'},
        {'data': require('../assets/images/美国/2020-05-22.png'), 'title': '2020-05-22'},
        {'data': require('../assets/images/美国/2020-05-23.png'), 'title': '2020-05-23'},
        {'data': require('../assets/images/美国/2020-05-24.png'), 'title': '2020-05-24'},
        {'data': require('../assets/images/美国/2020-05-25.png'), 'title': '2020-05-25'},
        {'data': require('../assets/images/美国/2020-05-26.png'), 'title': '2020-05-26'},
        {'data': require('../assets/images/美国/2020-05-27.png'), 'title': '2020-05-27'},
        {'data': require('../assets/images/美国/2020-05-28.png'), 'title': '2020-05-28'},
        {'data': require('../assets/images/美国/2020-05-29.png'), 'title': '2020-05-29'},
        {'data': require('../assets/images/美国/2020-05-30.png'), 'title': '2020-05-30'},
        {'data': require('../assets/images/美国/2020-05-31.png'), 'title': '2020-05-31'},
        {'data': require('../assets/images/美国/2020-06-01.png'), 'title': '2020-06-01'},
        {'data': require('../assets/images/美国/2020-06-02.png'), 'title': '2020-06-02'},
        {'data': require('../assets/images/美国/2020-06-03.png'), 'title': '2020-06-03'},
        {'data': require('../assets/images/美国/2020-06-04.png'), 'title': '2020-06-04'},
        {'data': require('../assets/images/美国/2020-06-05.png'), 'title': '2020-06-05'},
        {'data': require('../assets/images/美国/2020-06-06.png'), 'title': '2020-06-06'},
        {'data': require('../assets/images/美国/2020-06-07.png'), 'title': '2020-06-07'},
        {'data': require('../assets/images/美国/2020-06-08.png'), 'title': '2020-06-08'},
        {'data': require('../assets/images/美国/2020-06-09.png'), 'title': '2020-06-09'},
        {'data': require('../assets/images/美国/2020-06-10.png'), 'title': '2020-06-10'},
        {'data': require('../assets/images/美国/2020-06-11.png'), 'title': '2020-06-11'},
        {'data': require('../assets/images/美国/2020-06-12.png'), 'title': '2020-06-12'},
        {'data': require('../assets/images/美国/2020-06-13.png'), 'title': '2020-06-13'},
        {'data': require('../assets/images/美国/2020-06-14.png'), 'title': '2020-06-14'},
        {'data': require('../assets/images/美国/2020-06-15.png'), 'title': '2020-06-15'},
        {'data': require('../assets/images/美国/2020-06-16.png'), 'title': '2020-06-16'},
        {'data': require('../assets/images/美国/2020-06-17.png'), 'title': '2020-06-17'},
        {'data': require('../assets/images/美国/2020-06-18.png'), 'title': '2020-06-18'},
        {'data': require('../assets/images/美国/2020-06-19.png'), 'title': '2020-06-19'},
        {'data': require('../assets/images/美国/2020-06-20.png'), 'title': '2020-06-20'},
        {'data': require('../assets/images/美国/2020-06-21.png'), 'title': '2020-06-21'},
        {'data': require('../assets/images/美国/2020-06-22.png'), 'title': '2020-06-22'},
        {'data': require('../assets/images/美国/2020-06-23.png'), 'title': '2020-06-23'},
        {'data': require('../assets/images/美国/2020-06-24.png'), 'title': '2020-06-24'},
        {'data': require('../assets/images/美国/2020-06-25.png'), 'title': '2020-06-25'},
        {'data': require('../assets/images/美国/2020-06-26.png'), 'title': '2020-06-26'},
        {'data': require('../assets/images/美国/2020-06-27.png'), 'title': '2020-06-27'},
        {'data': require('../assets/images/美国/2020-06-28.png'), 'title': '2020-06-28'},
        {'data': require('../assets/images/美国/2020-06-29.png'), 'title': '2020-06-29'},
        {'data': require('../assets/images/美国/2020-06-30.png'), 'title': '2020-06-30'},
      ],
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
  ],
  '中国':
      [
          {'data': require('../assets/images/中国/2020-06-01.png'), 'title': '2020-06-01'},
          {'data': require('../assets/images/中国/2020-06-02.png'), 'title': '2020-06-02'},
          {'data': require('../assets/images/中国/2020-06-03.png'), 'title': '2020-06-03'},
          {'data': require('../assets/images/中国/2020-06-04.png'), 'title': '2020-06-04'},
          {'data': require('../assets/images/中国/2020-06-05.png'), 'title': '2020-06-05'},
          {'data': require('../assets/images/中国/2020-06-06.png'), 'title': '2020-06-06'},
          {'data': require('../assets/images/中国/2020-06-07.png'), 'title': '2020-06-07'},
          {'data': require('../assets/images/中国/2020-06-08.png'), 'title': '2020-06-08'},
          {'data': require('../assets/images/中国/2020-06-09.png'), 'title': '2020-06-09'},
          {'data': require('../assets/images/中国/2020-06-10.png'), 'title': '2020-06-10'},
          {'data': require('../assets/images/中国/2020-06-11.png'), 'title': '2020-06-11'},
          {'data': require('../assets/images/中国/2020-06-12.png'), 'title': '2020-06-12'},
          {'data': require('../assets/images/中国/2020-06-13.png'), 'title': '2020-06-13'},
          {'data': require('../assets/images/中国/2020-06-14.png'), 'title': '2020-06-14'},
          {'data': require('../assets/images/中国/2020-06-15.png'), 'title': '2020-06-15'},
          {'data': require('../assets/images/中国/2020-06-16.png'), 'title': '2020-06-16'},
          {'data': require('../assets/images/中国/2020-06-17.png'), 'title': '2020-06-17'},
          {'data': require('../assets/images/中国/2020-06-18.png'), 'title': '2020-06-18'},
          {'data': require('../assets/images/中国/2020-06-19.png'), 'title': '2020-06-19'},
          {'data': require('../assets/images/中国/2020-06-20.png'), 'title': '2020-06-20'},
          {'data': require('../assets/images/中国/2020-06-21.png'), 'title': '2020-06-21'},
          {'data': require('../assets/images/中国/2020-06-22.png'), 'title': '2020-06-22'},
          {'data': require('../assets/images/中国/2020-06-23.png'), 'title': '2020-06-23'},
          {'data': require('../assets/images/中国/2020-06-24.png'), 'title': '2020-06-24'},
          {'data': require('../assets/images/中国/2020-06-25.png'), 'title': '2020-06-25'},
          {'data': require('../assets/images/中国/2020-06-26.png'), 'title': '2020-06-26'},
          {'data': require('../assets/images/中国/2020-06-27.png'), 'title': '2020-06-27'},
          {'data': require('../assets/images/中国/2020-06-28.png'), 'title': '2020-06-28'},
          {'data': require('../assets/images/中国/2020-06-29.png'), 'title': '2020-06-29'},
          {'data': require('../assets/images/中国/2020-06-30.png'), 'title': '2020-06-30'},
      ]
};

var emotionData = {
  '中国': {
    emotion_index: '正向',
    timedata: [
        '06-20',
        '06-21',
        '06-22',
        '06-23',
        '06-24',
        '06-25',
        '06-26',
        '06-27',
        '06-28',
        '06-29',
        '06-30',
        '07-01',
        '07-02',
        '07-03',
        '07-04',],
    scoredata: [
        0.88,
        0.81,
        0.86,
        0.76,
        0.89,
        0.79,
        0.91,
        0.89,
        0.92,
        0.88,
        0.87,
        0.84,
        0.88,
        0.89,
        0.95,],
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
        '武汉，是一座英雄的城市，也是一座即将重焕活力的城市！[心]',
        '疫情依然严峻，不可掉以轻心！',
        '不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。',
        '希望早点结束呢',
        '我国一向是生命至上，人民至上。才不像漂亮国那样政治私利至上呢',
        '美国由此无赖领导，真好！',
        '美方自己抗疫不力还有脸指责别人',
        '一路走好 好希望疫情快点结束啊 我们已经伤不起了,',
        '这个疫情真的是带走了太多人的生命，一路走好',
        '隔离人员不能出去，措施到位，到哪都一样',
        '早日康复 谁也不愿自己患病还影响别人 加油小哥',
  ]},
  '香港': {
    emotion_index: '负向',
    timedata: [
        '08-17',
        '08-18',
        '08-19',
        '08-20',
        '08-21',
        '08-22',
        '08-23',
        '08-24',
        '08-25',
        '08-26',
        '08-27',
        '08-28',
        '08-29',
        '08-30',
        '08-31',],
    scoredata: [
        0.65,
        0.57,
        0.54,
        0.53,
        0.62,
        0.67,
        0.65,
        0.69,
        0.69,
        0.54,
        0.64,
        0.57,
        0.6,
        0.46,
        0.6,],
    evaluation: [
        '已经是恐怖分子了！',
        '一定要严惩暴徒[拳头][拳头][拳头]',
        '要独立拿美国国旗干啥，一群傻子，自己的国家都搞，到最后美国能保护你吗就是别人的抢，还傻了吧唧的，真的以为会给你什么',
        '废青，整天啃老，还不工作，就是一群废人',
        '港独必死！',
        '是滴！无法无天，绝不容忍',
        '警察抓人，法官放人，香港病了',
        '说暴徒太轻，都是杀人放火没脑子的凶手，统统抓住，一个不留，全部法办!',
        '擒贼先擒王，幕后超控者先抓起来，这些人必须严惩才能长记性！',
        '不定性为暴恐吗',
        '严惩暴徒，祖国不知13亿人做你们的后盾!强大起来',
        '呆湾太阳花们都没有蒙面，香港的港独们太lou了，又要威，又要带头盔,',
        '小小的香港都这样了，以后统一后的台湾该咋整？',
        '难搞，外国排挤中国，香港台湾天天闹夜夜闹，烦到',
        '一国两制不想要？那就一国一制！连夜成立班子',
        '有台湾的太阳花给这些港独培训，传授经验，沆瀣一气',
        '无法无天的暴徒行径，依法严惩，维护法律尊严，维护祖国尊严',
        '严惩暴徒就是对良民最好的交待！',
        '别等秋后算账了，赶紧该枪毙的枪毙。',
        '戴着口罩戴着安全帽，都是有组织有目的暴乱！',
  ]},
  '美国': {
    emotion_index: '负向',
    timedata: [
        '06-20',
        '06-21',
        '06-22',
        '06-23',
        '06-24',
        '06-25',
        '06-26',
        '06-27',
        '06-28',
        '06-29',
        '06-30',
        '07-01',
        '07-02',
        '07-03',
        '07-04',],
    scoredata: [
        0.66,
        0.6,
        0.71,
        0.7,
        0.68,
        0.72,
        0.71,
        0.77,
        0.65,
        0.7,
        0.72,
        0.66,
        0.62,
        0.55,
        0.46,],
    evaluation: [
        '散漫自由惯了，突然来这么一下，有点措手不及。',
        '老特：反正病毒不是来自美国的[吃瓜]',
        '手里有病毒这把锤子，看什么问题都像钉子[吃瓜]',
        '纵观微博千姿态，键盘手中行天下',
        '快点好起来吧！这个不是数字是生命啊[衰]',
        '现实版的灾难片',
        '希望尽快能控制住不再蔓延',
        '检测速度跟不上增长速度[二哈][二哈][二哈]',
        '为什么大家都欺负特朗普，他都80岁了，好可怜[悲伤]',
        '川建国在等疫苗！',
        '不靠谱又甩锅检测多了而不是自己无能！',
        '希望美国在特朗普的带领下团灭',
        '能不能先查清楚了特朗普怎么赢的再来说话，张口就来精英阶层支持他。多读点书吧别丢人了。',
        '加油，川建国同志，把美国搞垮吧',
        '[微笑]干脆直接无视新冠这个病毒的存在好了',
        '苹果实体店受疫情影响太大了，希望美国能快点好起来',
        '如果这次在美国被白人警察虐杀的是个黄种人，是个华人（华裔），美国各地还会发生大规模抗议游行和暴动骚乱吗？这些美国黑人受白人种族主义者歧视与迫害，却又歧视与迫害华人',
        '排除外力原因，希望疫情快点过去，经济可以恢复以前的发展',
        '美国的体制造孽啊，十多万人就因为体制原因失去生命而永远无法呼吸',
        '还是建国同志连任比较好',
    ]},
};

export { topicData, eventData, cloudData, emotionData };
