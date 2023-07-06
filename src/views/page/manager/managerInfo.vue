<template>
  <div style="width:500px;margin-left:270px;">
    <el-form style="height: 5px;"></el-form>
    <el-form style="height: 20px; margin-left: -200px; font-size: 25px; font-weight: bold;color: #676060">查看/更新管理员:</el-form>
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.realName" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="性别" >
        <el-input v-model="form.sex" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.des"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="image" >
        <div>
          <el-upload
              v-model="fileList"
              list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog v-model="form.dialogVisible">
            <img width="100%" :src="form.dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </el-form-item>

      <el-form-item  style="width:100%;">
        <el-button type="primary" @click="modify()"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      uploadDisabled:'disabled',
      form: {

        dialogImageUrl: "",
        dialogVisible: false,
        fileParam: "",
        userName:'',
        realName:'',
        sex:'',
        email:'',
        phone:'',
        des:'',
      },
    }
  },
  methods: {
    modify() {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.page{
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 600px;
  height: 596px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  margin-left: 238px;
  box-shadow: 0 0 25px #cac6c6;
}

.disabled .el-upload--picture-card{
  display: none;
}
</style>
