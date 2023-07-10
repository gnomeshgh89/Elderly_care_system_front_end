<template>
  <div style="width:500px;margin-left:270px;">

<!--    <el-form style="height: 5px;"></el-form>-->
<!--    <el-form style="height: 20px; margin-left: -200px; font-size: 25px; font-weight: bold;color: #676060">查看/更新老人信息:</el-form>-->
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="姓名">
        <el-input v-model="form.oldName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.sex" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="ID">
        <el-input v-model="form.ID" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="form.birthday" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="form.roomNumber"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人姓名">
        <el-input v-model="form.guardian1_name"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人电话">
        <el-input v-model="form.guardian1_phone"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人微信">
        <el-input v-model="form.guardian1_wechat"></el-input>
      </el-form-item>
      <el-form-item label="第二监护人姓名">
        <el-input v-model="form.guardian2_name"></el-input>
      </el-form-item>
      <el-form-item label="第二监护人电话">
        <el-input v-model="form.guardian2_phone"></el-input>
      </el-form-item>
      <el-form-item label="第二监护人微信">
        <el-input v-model="form.guardian2_wechat"></el-input>
      </el-form-item>
      <el-form-item label="健康状态">
        <el-input v-model="form.situation"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.des"></el-input>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-input v-model="form.createTime" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="创建人">
        <el-input v-model="form.createName" :disabled="true"></el-input>
      </el-form-item>

<!--      <el-form-item label="头像">-->
<!--        <div>-->
<!--          <el-upload-->
<!--              v-model="fileList"-->
<!--              list-type="picture-card"-->
<!--          >-->
<!--            <i class="el-icon-plus"></i>-->
<!--          </el-upload>-->
<!--&lt;!&ndash;          <el-dialog v-model="form.dialogVisible">&ndash;&gt;-->
<!--&lt;!&ndash;            <img width="100%" :src="form.dialogImageUrl" alt="" />&ndash;&gt;-->
<!--&lt;!&ndash;          </el-dialog>&ndash;&gt;-->
<!--        </div>-->
<!--      </el-form-item>-->
      <el-form-item  style="width:100%;">
        <el-button type="primary" @click="modify"  style="width:50%;margin-left:80px;margin-top:10px;border-color:#f88901;background-color: #F3CEAE">更改老人信息</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>

export default {
  data() {
    return {
      uploadDisabled:'disabled',
      form:{
        dialogImageUrl: "",
        dialogVisible: false,
        fileParam: "",
        id:'',
        oldName:'',
        sex:'',
        phone:'',
        ID:'',
        birthday: '',
        roomNumber: '',
        guardian1_name: '',
        guardian1_phone: '',
        guardian1_wechat: '',
        guardian2_name: '',
        guardian2_phone: '',
        guardian2_wechat: '',
        situation:'',
        des:'',
        createTime:'',
        createName:'',
        updateTime:'',
        updateName:'',
      }
    }

  },
  methods: {
    modify() {
      this.$router.push('/oldMen');
    }
  }
}

</script>
<style scoped>
.disabled .el-upload--picture-card{
  display: none;
}
</style>