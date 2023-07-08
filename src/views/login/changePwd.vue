<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-left: 300px">
    <el-form style="height: 5px;"></el-form>
    <el-form style="height: 20px; margin-left: 100px; margin-top:80px;font-size: 25px; font-weight: bold;color: #676060">修改密码:</el-form>
    <el-form-item label="用户名" prop="userid" style="margin-left:100px; margin-top:30px">
      <el-col :span="8">
        <el-input type="text" v-model="ruleForm.userid" autocomplete="off" :disabled="true"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="新密码" prop="pass" style="margin-left:100px; margin-top:30px">
      <el-col :span="8">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass" style="margin-left:100px; margin-top:30px">
      <el-col :span="8">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item  style="margin-left:280px; margin-top:30px">
      <el-button type="primary" @click="submitForm('ruleForm')" style="border-color:#f88901;background-color: #F3CEAE">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var user = localStorage.getItem("userName")
    var validatePass = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userid:user,
        pass: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm:function() {

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
