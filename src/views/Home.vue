<template>
  <div id="app">
    <div class="con-box l-t-box">
      <!-- <Echarts theme="ring" :option="options.left_up.option" className="chart" ></Echarts> -->
      <center style="margin-top: 10px;">
        <font size="5" color="white">综合选题</font>
      </center>
      <ul>
        <font size="5" color="white">
          <div style="margin-left: 30px; margin-top: 20px">
            <table border="0" cellspacing="" cellpadding="">
              <tr v-for="(item, index1) in left_up_list" :key="index1" @click="clicking(item)" style="cursor: pointer;">
                <td width=50px height=50px style="font-size: 20px;">{{item.index}}</td>
                <td width=80px style="font-size: 20px;">{{item.topic}}</td>
                <td style="font-size: 20px;">{{item.text}}</td>
              </tr>
            </table> 
          </div>
        </font>
      </ul>
    </div>
    <div class="con-box r-t-box">
      <!-- <Echarts theme="ring" :option="options.right_up.option" className="chart" ></Echarts> -->
      <center style="margin-top: 10px;">
        <font size="5" color="white" @click="jumpTo()" style="cursor: pointer;">事件演化</font>
      </center>
      <div class="scroll-wrapper">
        <ul>
          <font color="white">
            <div style="margin-left: 30px; margin-top: 10px">
              <table border="0" cellspacing="" cellpadding="">
                <tr v-for="(item, index2) in right_up_list" :key="index2">
                  <td width=25% height=30px style="font-size: 13px;">{{item.date}}</td>
                  <td style="font-size: 13px;">{{item.text}}</td>
                </tr>
              </table> 
            </div>
          </font>
        </ul>
      </div>
    </div>
    <div class="con-box l-b-box">
      <center style="margin-top: 10px;">
        <font size="5" color="white">情感趋势</font>
      </center>
      <div style="height: 80%; width: 80%;">
        <div :hidden="closeEvaluation">
          <p style="margin-top: 35px; margin-bottom: 40px;" align="center">
            <font color="white" size="4">最新情感指数：</font>
            <font color="99ff99" size="6">{{topic_index}}</font>
          </p>
        </div>
        <div :hidden="closeChart" style="position: absoluet; margin-top: -30px; height: 75%">
          <div id="myChart" style="height: 190px; width: 100%; margin-left: 11%"></div>
        </div>
        <div>
          <vueSeamlessScroll :data="listData" class="seamless-warp" id="haha">
            <ul>
              <li style="font-size: 13px; height: auto;" v-for="(item, index3) in listData" :key="index3">{{item}}</li>
            </ul>
          </vueSeamlessScroll>
        </div>
      </div>
    </div>
    
    <div class="center-box">
      <div class="chart" id="echarts-globe"></div>
    </div>
  
  </div>
</template>

<script>
  // import 'components/charts/theme/Ring.js'
  // import Echarts from 'vue-echarts-v3/src/full.js'
  import vueSeamlessScroll from 'vue-seamless-scroll'
  // import echarts from 'echarts'
  // require('echarts-gl');
  // import "echarts/map/js/world.js";
  // import Common from 'components/Common.js'
  // import {fish_data, fishBone, ChartLib, ChartData} from './ChartLib.js'
  import BaseTexture from '../components/texture/Base.js'
  import BlendTexture from '../components/texture/Blend.js'

  import { topicData, eventData, emotionData } from './dataTmp.js'
  var echarts = require('echarts') 
  require('echarts-gl');
  import "echarts/map/js/world.js";

  import BScroll from 'better-scroll'

  const baseTexture = new Image();
  baseTexture.src = BaseTexture.texture;

  const blendTexture = new Image();
  blendTexture.src = BlendTexture.texture;

  const heightTexture = new Image();
  heightTexture.src = require('../assets/get/s/data-1491889019097-rJQYikcpl.jpg');

  export default {
    data () {
      return {
        events: {},
        listData: [],

        // Common: Common,
        jumpto: "",
        topic_index: '',

        topic_name:'',
        topic_text:'',
        closeChart: null,
        closeEvaluation: null,

        intervalID: null,
        intervalRotate: null,
        region: null,
        regions: null,
        nowCityIndex: 0,
        rotateCities: [],
        left_up_list: [],
        right_up_list: [],
        options: {
          left_up: { option: {}, update: () => { return; } },
          right_up: { option: {}, update: () => { return; } },
          left_down: { option: {}, update: () => { return; } },
          right_down: { option: {}, update: () => { return; } },
        },
      }
    },

    mounted () {
      // this.echartsGlobe();
      // console.log(topicData);
      this.closeChart = false;
      this.closeEvaluation = true;
      this.topic_name = '新冠肺炎专题';
      this.events = eventData;
      this.left_up_list = topicData;
      // console.log(this.left_up_list);
      this.right_up_list = this.events['中国'];
      this.listData = emotionData['中国']['evaluation'];
      this.topic_index = emotionData['中国']['emotion_index'];
      
      this.echartsGlobe();
      this.around('China');
      this.drawLine();
      var haha = document.getElementById('haha');
      // console.log(haha);

      var wrapper = document.querySelector('.scroll-wrapper');
      var scroll = new BScroll(wrapper, {});
    },

    methods: {
      findcountry: function (country) {
        var o;
        // console.log(country);
        for (o in this.regions) {
          if (this.regions[o].name === country) {
            return o;
          }
        }
      },

      around (country) {
        var index = this.findcountry(country);
        // this.region = this.regions[Math.round(Math.random() * (this.regions.length - 1))];
        this.region = this.regions[index];
        this.globe.setOption({
          title: {
            left: 'center',
            top: 'center',
            text: this.region.name,
            textStyle: {
              fontSize: 40
            }
          },
          globe: {
            viewControl: {
              targetCoord: this.region.center
            }
          },
          geo: {
            regions: [{
              name: this.region.name,
              itemStyle: {
                normal: {
                  areaColor: '#444'
                }
              }
            }]
          }
        });
      },

      echartsGlobe () {
        // 创建一个canvas类型的对象(mapChart)来作为地球的纹理(baseTexture)
        let canvas = document.createElement('canvas');
        let mapChart = echarts.init(canvas, null, {
            width: 2048,
            height: 1024
        });
        // console.log(mapChart);

        mapChart.setOption({
            backgroundColor: '#999',
            geo: {
                type: 'map',
                map: 'world',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boundingCoords: [[-180, 90], [180, -90]],
                // silent: true,
                itemStyle: {
                    normal: {
                        borderColor: '#000'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 40
                        }
                    }
                }
            }
        });

        let globe_new_option = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          globe: {
            baseTexture: mapChart,
            heightTexture: heightTexture.src,
            displacementScale: 0.1,
            shading: 'realistic',
            realisticMaterial: {
              roughness: 0.8,
              metalness: 0
            },
            postEffect: {
              enable: true
            },
            temporalSuperSampling: {
              enable: true
            },
            viewControl: {
              autoRotateSpeed: 0,
              animationDurationUpdate: 1000,
              animationEasingUpdate: 'cubicInOut',
              targetCoord: [116.46, 39.92],
              autoRotate: true
            }
          }
        };
        this.globe = echarts.init(document.getElementById('echarts-globe'));
        this.globe.setOption(globe_new_option);
        this.regions = mapChart.getModel().getComponent('geo').coordinateSystem.regions;
        var geo;
        geo = mapChart.getModel().getComponent('geo').coordinateSystem;
      },

      clicking: function (term) {
        // this.right_up_list = ChartData['exports'][this.topic];
        // this.options.left_down.option = ChartLib['折线图' + this.topic].option;
        // this.options.right_down.option = ChartLib['事件演化' + this.topic].option;
        // this.around(41);
        this.topic_name = term.text;
        if (term.topic == '中国' || term.topic == '香港') {
          this.around('China');
        } 
        this.right_up_list = this.events[term.topic];
        this.listData = emotionData[term.topic]['evaluation'];
        this.topic_index = emotionData[term.topic]['emotion_index'];

        if (term.text != '新冠肺炎专题') {
          this.closeChart = true;
          this.closeEvaluation = false;
        } else {
          this.closeEvaluation = true;
          this.closeChart = false;
        }
      },

      jumpTo: function () {
        this.$router.push({path:'/graph', query:{topic: this.topic_name}});
      },

      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#328fbc'
              }
            }
          },
          /*
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          */
          xAxis: {
            boundaryGap: false,
            data: ["3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5"],
            axisLabel: {
              show: true,
              textStyle: {
                color: 'white',  //更改坐标轴文字颜色
                fontSize : 12      //更改坐标轴文字大小
              }
            },
            axisLine:{
              lineStyle:{
                color:'#1a87e3' //更改坐标轴颜色
              }
            },
            axisTick:{
              show:false
            },
            splitLine:{
              show:false
            }
          },
          yAxis: {
            axisLabel: {
              show: false,
              textStyle: {
                color: 'white',  //更改坐标轴文字颜色
                fontSize : 12      //更改坐标轴文字大小
              }
            },
            axisLine:{
              lineStyle:{
                color:'#1a87e3' //更改坐标轴颜色
              }
            },
            axisTick:{
              show:false
            },
            splitLine:{
              show:false
            }
          },
          series: [{
            name: '情感指数',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: 'white'
              }
            },
            areaStyle: {
              color: '#41ade1'
            },
            lineStyle: {
              color: '#41ade1'
            },
            itemStyle : {
              normal : {
                color:'#41ade1'
              }
            },
            data: [0.689, 0.659, 0.607, 0.500, 0.535, 0.392, 0.532, 0.487, 0.453, 0.732],
            smooth: true
          }]
        });
      }
    },

    beforeDestroy () {
    },

    components: {
      vueSeamlessScroll
    }
  }
</script>

<style lang="sass">
  @import "../assets/sass/common"
  .con-box
    position: absolute
    width: 34%
    height: 35%
    padding: .7rem 1rem .8rem
    background-image: url("../assets/images/box-bg.png")
    background-size: 100% 100%
    z-index: 1000

    &.l-t-box
      left: 2.5rem
      top: 7%
    &.r-t-box
      right: 2.5rem
      top: 7%
      height: 82%
    &.l-b-box
      bottom: 7%
      left: 2.5rem
    &.r-b-box
      right: 2.5rem
      bottom: 2.5rem
      .chart
        bottom: 100rem
        width: 100%
        height: 80%
  .center-box
    position: absolute
    left: 0rem
    top: 0rem
    width: 100%
    height: 100%
    z-index: 0
    .chart
      width: 100%
      height: 100%
      cursor: pointer
</style>

<style>
  .seamless-warp {
    margin-top: 10px;
    margin-left: 22%;
    height: 70px;
    overflow: hidden;
    color: white;
  }
  .scroll-wrapper {
    margin-top: 10px;
    margin-left: 0%;
    height: 88%;
    overflow: hidden;
  }
</style>
