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
          prop="username"
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
          <el-button  type="text" size="small" @click="updateMan(scope.row)">修改</el-button>
          <el-button  type="text" size="small" @click="confirmDelete(scope.row)">删除</el-button>
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
    <i id="icon" class = "el-icon-circle-plus" @click = "add()"></i>

    <el-dialog :title="oldMesTitle" :visible.sync="oldMesVisible" width="900px">
      <el-form ref="form" :model="form" label-width="140px"  >
        <el-form-item label="姓名">
          <el-input v-model="form.username" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.gender" ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="ID">
          <el-input v-model="form.id_card" ></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="form.birthday" ></el-input>
        </el-form-item>
        <el-form-item label="住址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人姓名">
          <el-input v-model="form.firstGuardianName"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人电话">
          <el-input v-model="form.firstGuardianPhone"></el-input>
        </el-form-item>
        <el-form-item label="第一监护人微信">
          <el-input v-model="form.firstGuardianWechat"></el-input>
        </el-form-item>
        <el-form-item label="健康状态">
          <el-input v-model="form.health_state"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.des"></el-input>
        </el-form-item>
        <el-form-item label="创建日期">
          <el-input v-model="form.createTime" ></el-input>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input v-model="form.createName" ></el-input>
        </el-form-item>

        <el-form-item  style="width:100%;" v-if="oldMesType===2">
          <el-button type="primary" @click="updateOld()"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">更改老人信息</el-button>
        </el-form-item>
        <el-form-item  style="width:100%;" v-if="oldMesType===3">
          <el-button type="primary" @click="addOld()"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">新增老人信息</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


<!--    <old-mes :oldMesVisible="oldMesVisible" ></old-mes>-->
  </div>

</template>
<script>
import oldMes from "@/views/page/old/oldMes";
import {addElder, deleteElder, elderByID, elderList, updateElder} from "@/api/elder";
import {MessageBox} from "element-ui";

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
      oldMesTitle:'查看老人信息',
      oldMesType:1,//1仅查看2修改3新增
      form:{
        dialogImageUrl: "",
        dialogVisible: false,
        fileParam: "",
        id:'',
        username:'',
        gender:'',
        phone:'',
        id_card:'',
        birthday: '',
        address: '',
        firstGuardianName: '',
        firstGuardianPhone: '',
        firstGuardianWechat: '',
        guardian2_name: '',
        guardian2_phone: '',
        guardian2_wechat: '',
        health_state:'',
        des:'',
        createTime:'',
        createName:'',
        updateTime:'',
        updateName:'',
      }
    }
  },
  mounted() {
    this.getElderList()
  },
  methods: {
    getElderList(){
      elderList().then(res => {
        this.elderList= res.data.records
        this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
    },
    delElder(item){
      console.log(item.id,1607)

      deleteElder(item.id).then(res => {
        this.$message("删除成功")
      }).catch(error => {
        console.log(error)
      })
      location.reload();
    },
    //确认删除
    confirmDelete(item) {
      MessageBox.confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(() => {
            this.delElder(item);
          })
          .catch(() => {
            // 用户点击了取消按钮，不执行删除操作
          });
    },
    //添加老人
    add() {
      this.oldMesTitle='新增老人信息'
      this.oldMesType=3
      this.oldMesVisible=true
    },
    //查看老人
    viewMan(item){
      this.oldMesTitle='查看老人信息'
      this.oldMesType=1
      this.oldMesVisible=true
      elderByID(item.id).then(res => {
        console.log(this.oldMesVisible,1553)
        this.form=res.data
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
      // this.$router.push('/oldMes')
    },
    updateMan(item){
      this.oldMesTitle='修改老人信息'
      this.oldMesType=2
      this.oldMesVisible=true
      elderByID(item.id).then(res => {
        console.log(this.oldMesVisible,1553)
        this.form=res.data
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
    },
    updateOld(){
      updateElder(this.form).then(res => {
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
        this.getElderList()
      }).catch(error => {
        console.log(error)
      })
      this.oldMesVisible=false
    },
    addOld(){
      addElder(this.form).then(res => {
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
        this.getElderList()
      }).catch(error => {
        console.log(error)
      })
      this.oldMesVisible=false
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
