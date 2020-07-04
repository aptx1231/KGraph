<template>
    <div style="height: 100%; width: 100%;">
        <center>
            <font size="5" color="white" style="cursor: pointer;">情感趋势</font>
        </center>
        <div>
            <div id="myChart" style="height: 300px; width: 100%;"></div>
        </div>
        <div>
            <div style="width: 45%; float: left; margin-left: 70px">
                <vueSeamlessScroll :data="listData1" class="seamless-warp" id="haha1">
                    <ul>
                        <li style="font-size: 13px; height: auto;" v-for="(item, index3) in listData1" :key="index3">
                            {{item.created_at}} - {{item.content}}
                        </li>
                    </ul>
                </vueSeamlessScroll>
            </div>
            <div style="width: 45%; float: right; margin-right: 30px">
                <vueSeamlessScroll :data="listData2" class="seamless-warp" id="haha2">
                    <ul>
                        <li style="font-size: 13px; height: auto;" v-for="(item, index3) in listData2" :key="index3">
                            {{item.created_at}} - {{item.content}}
                        </li>
                    </ul>
                </vueSeamlessScroll>
            </div>
        </div>
    </div>
</template>

<script>
    const d3 = require('d3-dsv')
    const axios = require('axios')
    import { getCSV } from '../../api/core.js'
    import vueSeamlessScroll from 'vue-seamless-scroll'
    var echarts = require('echarts')
    require('echarts-gl');
    import { emotionFullData } from './dataTmp.js'
    import BScroll from 'better-scroll'

    export default {
        name: "Emotion",
        data () {
            return {
                topic_name: '',
                place: '',
                listData1: [],
                listData2: [],
                timedata : [],
                scoredata : [],
            }
        },
        mounted () {
            this.topic_name = this.$route.query.topic;
            if (this.topic_name === '新冠肺炎专题') {
                this.place = '中国'
            }
            else if (this.topic_name === '香港暴徒专题') {
                this.place = '香港'
            }
            else if (this.topic_name === '美国疫情专题') {
                this.place = '美国'
            }
            // console.log(this.topic_name)
            getCSV(this.topic_name).then(res => {
                this.listData1 = d3.csvParse(res.data)
                this.listData1.reverse()
                //console.log(this.listData1)
            })
            getCSV(this.topic_name).then(res => {
                this.listData2 = d3.csvParse(res.data)
                //this.listData2.reverse()
                //console.log(this.listData2)
            })
            this.timedata = emotionFullData[this.place]['timedata'];
            this.scoredata = emotionFullData[this.place]['scoredata'];
            this.drawLine();

            var haha1 = document.getElementById('haha1');
            var haha2 = document.getElementById('haha2');
            // var wrapper = document.querySelector('.scroll-wrapper');
            // var scroll = new BScroll(wrapper, {});
        },
        methods: {
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
                        data: this.timedata,
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
                        data: this.scoredata,
                        smooth: true
                    }]
                });
            },
        },
        components: {
            vueSeamlessScroll
        }
    }
</script>

<style>
    .seamless-warp {
        margin-top: 10px;
        margin-left: 10%;
        height: 300px;
        overflow: hidden;
        color: white;
    }
</style>
