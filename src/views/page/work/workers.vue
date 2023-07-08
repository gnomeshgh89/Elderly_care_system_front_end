<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
          width="100"
          align="center">
      </el-table-column>
      <el-table-column
          prop="workerName"
          label="姓名"
          width="180"
          align="center">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="130"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话"
          width="270"
          align="center">
      </el-table-column>
      <el-table-column
          prop="position"
          label="职位"
          width="220"
          align="center">
      </el-table-column>
      <el-table-column
          float="right"
          label="操作"
          width="280"
          align="center">
        <template slot-scope="scope">
<!--          <el-button  type="text" size="small" @click.native.prevent="w_face(scope.$index)" >录入人脸</el-button>-->
          <el-button  type="text" size="small" @click.native.prevent="queryWorker(scope.$index)" >查看</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <i id="icon" class = "el-icon-circle-plus" @click = "addWorker"></i>
  </div>


</template>
<script>
export default {
  data() {
    return {
      // tableData: []
      tableData:[
        {
          id:'1',
          workerName:'小李',
          sex:'男',
          phone:'1221111',
          position:'护工'
        },
        {
          id:'5',
          workerName:'小李',
          sex:'男',
          phone:'1221111',
          position:'维修工'
        }
      ]
    }
  },
  methods:{
    //查看工作人员
    queryWorker:function(index){
      this.$router.push('/workerMes')
    },
    //增加工作人员
    addWorker:function(){
      this.$router.push('/addWorker')
    }
  }
}
</script>
<style scoped>
i#icon{
  font-size:xx-large;
  float:right;
  margin-top: 10px;
  margin-right:5px;
}
</style>
