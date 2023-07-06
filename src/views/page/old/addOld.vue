<template>
  <div style="width:500px;margin-left:270px;">
    <el-form style="height: 5px;"></el-form>
    <el-form style="height: 20px; margin-left: -200px; font-size: 25px; font-weight: bold;color: #676060">增加老人信息:</el-form>
      <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="老人姓名"  prop="name">
        <el-input v-model="form.oldName"></el-input>
      </el-form-item>

      <el-form-item label="出生日期" prop="birthday">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd"  value-format="yyyy-MM-dd" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="安装系统日期" prop="date_in">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="form.date_in"  style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-select v-model="form.sex" placeholder="请选择您的性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="老人电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="老人身份证号" prop="ID">
        <el-input v-model="form.ID"></el-input>
      </el-form-item>


      <el-form-item label="家庭地址" prop="rno">
        <el-input v-model="form.roomNumber"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人姓名" prop="g1name">
        <el-input v-model="form.guardian1_name"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人电话" prop="g1tel">
        <el-input v-model="form.guardian1_phone"></el-input>
      </el-form-item>
      <el-form-item label="第一监护人微信" prop="g1wechat">
        <el-input v-model="form.guardian1_wechat"></el-input>
      </el-form-item>

      <el-form-item label="第二监护人姓名" prop="g2name">
        <el-input v-model="form.guardian2_name"></el-input>
      </el-form-item>
      <el-form-item label="第二监护人电话" prop="g2tel">
        <el-input v-model="form.guardian2_phone"></el-input>
      </el-form-item>
      <el-form-item label="第二监护人微信" prop="g2wechat">
        <el-input v-model="form.guardian2_wechat"></el-input>
      </el-form-item>

      <el-form-item label="身体状况" prop="situation">
        <el-input type="textarea" v-model="form.situation"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="des">
        <el-input type="textarea" v-model="form.des"></el-input>
      </el-form-item>

      <el-form-item label="设置老人头像">
        <div>
          <el-upload v-model="form.fileList" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog v-model="form.dialogVisible">
            <img width="100%" :src="form.dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </el-form-item>
      <el-form-item  style="width:100%;">
        <el-button type="primary" style="width:50%;margin-left:80px;margin-top:10px">添加老人</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileParam: "",
      uploadDisabled: '',
      form: {
        oldName: '',
        sex: '',
        phone: '',
        ID: '',
        birthday: '',
        date_in: '',
        roomNumber: '',
        guardian1_name: '',
        guardian1_phone: '',
        guardian1_wechat: '',
        guardian2_name: '',
        guardian2_phone: '',
        guardian2_wechat: '',
        situation: '',
        des: '',
        fileList: [],
        dialogImageUrl: "",
        dialogVisible: false,
      }
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
</style>
