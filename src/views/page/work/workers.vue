<template>
  <div>
    <el-table
        :data="workerList"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
          width="100"
          align="center">
      </el-table-column>
      <el-table-column
          prop="userName"
          label="姓名"
          width="180"
          align="center">
      </el-table-column>
      <el-table-column
          prop="gender"
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
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
        :page-sizes="[10, 20, 50, 100, 500, 1000]"
        :current-page="listForm.page"
        :page-size="listForm.size"
        :pagerCount="listForm.pagerCount"
        :total="listForm.total"
        layout="total, sizes, prev, pager, next, jumper"
        style=" margin: auto">
    </el-pagination>
    <i id="icon" class = "el-icon-circle-plus" @click = "addWorker"></i>
  </div>


</template>
<script>
import {workerList} from "@/api/worker";

export default {
  data() {
    return {
      listForm:{
        page:1,
        size:20,
        total:0,
        pagerCount:5,

      },
      workerList:[],
    }
  },
  mounted() {
    this.getWorkerList()
  },
  methods:{
    getWorkerList(){
      workerList().then(res => {
        this.elderList= res.data.records
        this.listForm.total=res.data.total
      }).catch(error => {
        console.log(error)
      })
    },

    //查看工作人员
    queryWorker:function(index){
      // this.$router.push('/workerMes')
    },
    //增加工作人员
    addWorker:function(){
      // this.$router.push('/addWorker')
    },
    handleSizeChange(value){
      this.listForm.size = value;
      this.getWorkerList()
    },
    handlePageChange(value){
      this.listForm.page = value;
      this.getWorkerList()
    },
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
