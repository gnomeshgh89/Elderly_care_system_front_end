<template>
  <div>
    <el-table
        :data="elderList"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
          width="70"
          align="center">
      </el-table-column>
      <el-table-column
          prop="userName"
          label="姓名"
          width="120"
          align="center">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别"
          width="70"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话"
          width="210"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="家庭地址"
          width="225"
          align="center">
      </el-table-column>
      <el-table-column
          prop="firstGuardianPhone"
          label="监护人电话"
          width="210"
          align="center">
      </el-table-column>
      <el-table-column
          label="操作"
          width="275"
          align="center">
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click="viewMan(scope.row)">查看</el-button>
          <el-button  type="text" size="small" @click="updateMan(scope.row)">查看</el-button>
          <el-button  type="text" size="small" @click="delElder(scope.row)">删除</el-button>
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
    <i id="icon" class = "el-icon-circle-plus" @click = "addOld"></i>

    <old-mes v-if="oldMesVisible" ></old-mes>
  </div>

</template>
<script>
import oldMes from "@/views/page/old/oldMes";
import {deleteElder, elderList} from "@/api/elder";

export default {
  components:{oldMes},
  data(){
    return{
      listForm:{
        page:1,
        size:20,
        total:0,
        pagerCount:5,

      },
      elderList:[],
      oldMesVisible:false,

    }
  },
  mounted() {
    this.getElderList()
  },
  methods: {
    getElderList(){
      elderList().then(res => {
        this.elderList= res.data.records
        this.listForm.total=res.data.total
      }).catch(error => {
        console.log(error)
      })
    },
    delElder(item){
      deleteElder(item.id).then(res => {
        this.$message("删除成功")
      }).catch(error => {
        console.log(error)
      })
    },
    //添加老人
    addOld() {
      // this.$router.push('/addOld')
    },
    //查看老人
    viewMan(index){
      this.oldMesVisible=true
      // this.$router.push('/oldMes')
    },
    updateMan(index){
      this.oldMesVisible=true
    },
    handleSizeChange(value){
      this.listForm.size = value;
      this.getElderList()
    },
    handlePageChange(value){
      this.listForm.page = value;
      this.getElderList()
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
