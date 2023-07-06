<template>
  <div>
    <h2 style="margin-left:10px; height:10px"></h2>
    <h2 style="margin-left:10px">详细信息</h2>
    <div class = example style="width:210px;height:170px;margin-left:20px;margin-top:15px;">
      <img src="./old.png" width="50" height="50" style="float:left;padding-top: 8px;padding-left: 5px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;">老人总数</p>
      <p><div style=" font-weight: bold;font-size:30px;font-style: italic;padding-top: 22px;padding-left: 80px;">8人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 540px;top: 120px;">
      <img src="./oldman.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">男性人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">3人</div>

      <img src="./oldwoman.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">女性人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">5人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 810px;top: 120px;">
      <img src="./oldman.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">[80-100]人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">1人</div>

      <img src="./oldwoman.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">[80-100]人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">2人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 1080px;top: 120px;">
      <img src="./oldman.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">[60-80]人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">2人</div>

      <img src="./oldwoman.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">[60-80]人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">2人</div>
    </div>
    <div>
      <h2 style="margin-left:10px;margin-top:15px">老人年龄分析图</h2><br>
      <div id="chartPie" class="pie-wrap"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/macarons');//引入主题

export default {
  data() {
    return {
      chartPie: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart();
    })
  },
  methods: {
    drawPieChart() {
      let mytextStyle = {
        color: "#333",
        fontSize: 18,
      };
      let mylabel = {
        show: true,
        position: "right",
        offset: [30, 40],
        formatter: '{b} : {c} ({d}%)',
        textStyle: mytextStyle
      };
      this.chartPie = echarts.init(document.getElementById('chartPie'),'macarons');
      this.chartPie.setOption({
        title: {
          text: '年龄分析图',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          data: ['百岁老人','男性80-100', '男性60-80', '女性80-100', '女性60-80' ],
          left:"center",
          top:"bottom",
          orient:"horizontal",
        },
        series: [
          {
            name: '数据统计',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {value: 1, name: '百岁老人'},
              {value: 1, name: '男性80-100'},
              {value: 2, name: '男性60-80'},
              {value: 2, name: '女性80-100'},
              {value: 2, name: '女性60-80'}
            ],
            animationEasing: 'cubicInOut',
            //图像显示的速度
            animationDuration: 1600,
            label: {
              emphasis: mylabel
            }
          }
        ]
      });
    }
  }
}
</script>


<style scoped>
.example{
  background: rgba(255, 255, 255, 1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 25px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
}
.pie-wrap{
  width:100%;
  height:400px;
}

</style>