<template>
  <div>
    <h2 style="margin-left:10px; height:10px"></h2>
    <h2 style="margin-left:10px">详细信息</h2>
    <div class = example style="width:210px;height:170px;margin-left:20px;margin-top:15px;">
      <img src="./worker.png" width="50" height="50" style="float:left;padding-top: 8px;padding-left: 5px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;">工作人员总数</p>
      <p><div style=" font-weight: bold;font-size:30px;font-style: italic;padding-top: 22px;padding-left: 80px;" >{{total}}人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 540px;top: 120px;">
      <img src="./workerm.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;" >男性人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;" >{{totalM}}人</div>

      <img src="./workerwm.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">女性人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">{{totalW}}人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 810px;top: 120px;">
      <img src="./workerm.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">护工人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">{{supportM}}人</div>

      <img src="./workerwm.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">护工人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">{{supportW}}人</div>
    </div>
    <div class = example style="width:210px;height:170px;position: absolute;left: 1080px;top: 120px;">
      <img src="./workerm.png" width="50" height="50" style="float:left;padding-top: 15px;padding-left:20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">维修工人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">{{maintenanceM}}人</div>

      <img src="./workerwm.png" width="50" height="50" style="float:left;padding-top: 20px;padding-left: 20px;" v-image-preview/>
      <p style=" font-weight: bold;font-size:20px;font-style: italic;padding-top: 22px;padding-left: 12px;">维修工人数</p>
      <p><div style=" font-weight: bold;font-size:20px;font-style: italic;padding-left: 90px;">{{maintenanceW}}人</div>
    </div>
    <div>
      <h2 style="margin-left:10px;margin-top:15px">工作人员职位分析图</h2><br>
      <div id="chartPie" class="pie-wrap"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {workerList} from "@/api/worker";
require('echarts/theme/macarons');//引入主题

export default {
  data() {
    return {
      workerList:[],
      gender: "",
      chartPie: null,
      total:0,
      totalW:0,
      totalM:0,
      supportW:0,
      supportM:0,
      maintenanceW:0,
      maintenanceM:0,
      other:0,
    }
  },
  mounted() {
    this.getWorkerList()
  },
  methods: {
    getWorkerList(){
      workerList().then(res => {
        this.workerList = res.data.records;
        this.calculateWorkerCounts();
        this.drawPieChart();
      }).catch(error => {
        console.log(error)
      })
    },
    calculateWorkerCounts() {
      this.total = this.workerList.length;
      this.totalM = this.workerList.filter((worker) => worker.gender === '0').length;
      this.totalW = this.workerList.filter((worker) => worker.gender === '1').length;
      this.supportM = this.workerList.filter((worker) => worker.position === '护工' && worker.gender === '0').length;
      this.supportW = this.workerList.filter((worker) => worker.position === '护工' && worker.gender === '1').length;
      this.maintenanceM = this.workerList.filter((worker) => worker.position === '维修工' && worker.gender === '0').length;
      this.maintenanceW = this.workerList.filter((worker) => worker.position === '维修工' && worker.gender === '1').length;
      this.other = this.total - this.supportM - this.supportW - this.maintenanceM - this.maintenanceW;
    },
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
          text: '职位分析图',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          data: ['其他','男性护工', '男性维修工', '女性护工', '女性维修工' ],
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
              {value: this.other, name: '其他'},
              {value: this.supportM, name: '男性护工'},
              {value: this.maintenanceM, name: '男性维修工'},
              {value: this.supportW, name: '女性护工'},
              {value: this.maintenanceW, name: '女性维修工'}
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