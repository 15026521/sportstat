<template>
  <div>
    <avue-data-icons :option="option"></avue-data-icons>
    <hr>
    <avue-data-display :option="option1"></avue-data-display>
    <hr>
    <avue-data-box :option="option0"></avue-data-box>
    <hr>
    <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
    <!-- //<avue-echart-line ref="echart" :option="option3" :data="echartsdata" width="1000"></avue-echart-line> -->
  </div>
  
</template>


<script lang="ts">

  import {Vue,Component,} from "vue-property-decorator";
  
  export default {
    name: 'home',
    data(){
      return {
        option0: {
          span:6,
          data: [
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '错误日志',
              count: 12332,
              icon: 'el-icon-warning',
              color: 'rgb(49, 180, 141)',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '数据展示',
              count: 33,
              icon: 'el-icon-view',
              color: 'rgb(56, 161, 242)',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '权限管理',
              count: 2223,
              icon: 'el-icon-setting',
              color: 'rgb(117, 56, 199)',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '权限管理',
              count: 2223,
              icon: 'el-icon-setting',
              color: 'rgb(117, 56, 199)',
              // href:'https://avuejs.com',
              target:'_blank'
            },
          ]
        },
        option1: {
          span:6,
          data: [
          {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              count: 100,
              title: '日活跃数',
              //href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              count: '3,000',
              title: '月活跃数',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              count: '20,000',
              title: '年活跃数',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              count: '40,000',
              title: '周活跃数',
              // href:'https://avuejs.com',
              target:'_blank'
            }
          ]
        },
        option: {
          span:4,
          data: [
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日注册',
              count: 12678,
              icon: 'el-icon-tickets',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日登录',
              count: 22139,
              icon: 'el-icon-success',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日订阅',
              count: 35623,
              icon: 'el-icon-info',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              // href:'https://avuejs.com',
              target:'_blank'
            },
            {
              // click: function (item) {
              //   alert(JSON.stringify(item));
              // },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              // href:'https://avuejs.com',
              target:'_blank'
            }
          ]
        },
      }
    },
    
    methods: {
      drawLine(){
        
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts;
          myChart.init(document.getElementById('myChart'));
          
          // 绘制图表
          //myChart.setOption(option3);
          myChart.setOption({
              title: { text: '在Vue中使用echarts' },
              tooltip: {},
              xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
          });
      }
    },
    mounted(){
      this.drawLine();
    },
    
  }
</script>

