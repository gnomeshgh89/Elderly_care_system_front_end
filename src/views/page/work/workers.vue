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
          prop="username"
          label="姓名"
          width="180"
          align="center">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别"
          width="130"
          align="center">
        <template slot-scope="scope">
          <template v-if="scope.row.gender === '0'">女</template>
          <template v-if="scope.row.gender === '1'">男</template>
        </template>
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
          <el-button  type="text" size="small" @click.native.prevent="queryWorker(scope.row)" >查看</el-button>
          <el-button  type="text" size="small" @click.native.prevent="updateWorker(scope.row)" >修改</el-button>
          <el-button type="text" size="small" @click.native.prevent="confirmDelete(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="workerFace(scope.row)">上传人脸采集</el-button>
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
    <i id="icon" class = "el-icon-circle-plus" @click = "adda()"></i>

    <!--  详细信息  -->
    <el-dialog title="工作人员信息详情" :visible.sync="workerMesVisible" width="900px">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="工号">
          <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.username" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input :value="form.gender === '0' ? '女' : '男'" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="form.birthday" :disabled="true"></el-input>
        </el-form-item>

<!--        <el-form-item label="头像">-->
<!--          <div>-->
<!--            <el-upload-->
<!--                v-model="fileList"-->
<!--                list-type="picture-card"-->
<!--            >-->
<!--              <i class="el-icon-plus"></i>-->
<!--            </el-upload>-->
<!--            <el-dialog v-model="form.dialogVisible">-->
<!--              <img width="100%" :src="form.dialogImageUrl" alt="" />-->
<!--            </el-dialog>-->
<!--          </div>-->
<!--        </el-form-item>-->

        <el-form-item  style="width:100%;">
          <el-button type="primary" @click="modify"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--  添加信息  -->
    <el-dialog title="添加工作人员" :visible.sync="addWorkerVisible" width="900px">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="工作人员姓名" prop="name">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.gender" placeholder="请选择您的性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd"  value-format="yyyy-MM-dd" v-model="form.birthday" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="职位"  prop="des">
          <el-select v-model="form.position" placeholder="请选择您的职位">
            <el-option label="护工" value="护工"></el-option>
            <el-option label="维修工" value="维修工"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工作人员电话"  prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

<!--        <el-form-item label="工作人员身份证号" prop="ID">-->
<!--          <el-input v-model="form.ID"></el-input>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="设置工作人员头像">-->
<!--          <div>-->
<!--            <el-upload-->
<!--                v-model="form.fileList"-->
<!--                list-type="picture-card"-->
<!--            >-->
<!--              <i class="el-icon-plus"></i>-->
<!--            </el-upload>-->
<!--            <el-dialog v-model="form.dialogVisible">-->
<!--              <img width="100%" :src="form.dialogImageUrl" alt="" />-->
<!--            </el-dialog>-->
<!--          </div>-->
<!--        </el-form-item>-->

        <el-form-item  style="width:100%;">
          <el-button type="primary" @click="addb"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">添加工作人员</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import workerMes from "@/views/page/work/workerMes";
import {workerList, deleteWorker, workerByID, addWorker, updateWorker} from "@/api/worker";
import {MessageBox} from "element-ui";

export default {
  components:{workerMes},
  data() {
    return {
      listForm:{
        page:1,
        size:20,
        total:0,
        pagerCount:5,

      },
      workerList:[],
      addWorkerVisible:false,
      addWorkerTitle:'添加工作人员',
      workerMesVisible:false,
      workerMesTitle:'查看信息',
      form:{
        dialogImageUrl: "",
        dialogVisible: false,
        fileParam: "",
        id: null,
        username: "",
        gender: "",
        phone: "",
        id_card: "",
        birthday: "",
        hire_date: "",
        resign_date: "",
        imgset_dir: "",
        CREATED: "",
        UPDATED: "",
        remove: "",
        updated: "",
        created: "",
        createby: "",
        updateby: "",
        isactive: "",
        client_ID: "",
        org_ID:" ",
        avatarPath: "",
        position: ""
      }
    }
  },
  mounted() {
    this.getWorkerList()
  },
  methods:{
    workerFace(item){
      var id = item.id
      console.log(id)
      //通过id向后端获取工作人员数据
      localStorage.setItem("id",id)
      this.$router.push('/w_face')
      this.$axios.post("http://127.0.0.1:5000/faceCollectemp",{id:id})
          .then(res =>{
            localStorage.setItem("w_face",JSON.stringify(res))
          })
    },
    getWorkerList(){
      workerList().then(res => {
        this.workerList= res.data.records
        this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
    },
    //查看工作人员
    queryWorker(item){
      this.workerMesTitle='查看信息'
      this.workerMesVisible=true
      workerByID(item.id).then(res => {
        console.log(this.workerMesVisible,1553)
        this.form=res.data
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
    },
    //确认删除
    confirmDelete(item) {
      MessageBox.confirm('确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(() => {
            this.delWorker(item);
          })
          .catch(() => {
            // 用户点击了取消按钮，不执行删除操作
          });
    },
    //删除工作人员
    delWorker(item){
      console.log(item.id, 1607);
      deleteWorker(item.id)
          .then(res => {
            this.$message.success('删除成功');
            this.getWorkerList(); // 更新员工列表
          })
          .catch(error => {
            console.log(error);
            this.$message.error('删除失败');
          });
    },
    //修改工作人员e
    updateWorker(item){
      this.workerMesTitle='修改信息'
      this.workerMesVisible=true
      workerByID(item.id).then(res => {
        console.log(this.workerMesVisible,1553)
        this.form=res.data
        // this.elderList= res.data.records
        // this.listForm.total=res.data.records.length
      }).catch(error => {
        console.log(error)
      })
    },
    //提交修改信息
    modify(){
      const requestBody = {
        id: this.form.id,
        position: this.form.position
      };
      updateWorker(requestBody).then(res => {
        this.getWorkerList();
      }).catch(error => {
        console.log(error);
      });
      this.workerMesVisible = false;
    },
    //增加工作人员
    adda(){
      this.addWorkerTitle='新增工作人员信息'
      this.addWorkerVisible=true
      this.form = {
        username: "",
        gender: "",
        phone: "",
        position:"",
        birthday: ""
      }
    },
    //增加工作人员信息
    addb(){
      const requestBody = {
        username: this.form.username,
        gender: this.form.gender,
        birthday: this.form.birthday,
        position: this.form.position,
        phone: this.form.phone,
        id_card: '123456112345623456',
        avatarPath: "hanerbao-2023-JULY-8-16-42-23.jpg"
      };

      addWorker(requestBody).then(res => {
        this.getWorkerList();
      }).catch(error => {
        console.log(error);
      });

      this.addWorkerVisible = false;
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
