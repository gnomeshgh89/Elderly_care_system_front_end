<template>
  <div class="content_login">
    <div id="app" class="container">
      <img src="@/assets/bg1.jpg" alt="">
      <div class="panel">
        <div class="switch">
          <button class="white-button" @click="handleCanvas"></button>
          <span :class='{"active": active.login}' @click="go('login')">登录</span>
          <span>/</span>
          <span :class='{"active": active.register}' @click="go('register')">注册</span>
          <button class="white-button" ref="registerButton" @click="handleCanvas"></button>
        </div>
        <div class="form" id="fromLogin">
          <!-- 如果按钮选择的是注册就展示这个里面的内容 -->
          <el-form ref="registerForm" v-if="active.register">
            <el-form-item prop="username" class="input">
              <el-input placeholder="请输入用户名" size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="phone" class="input">
              <el-input placeholder="请输入手机号码" size="medium" style="margin: 10px 0" prefix-icon="el-icon-phone" v-model="registerForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="input">
              <el-input placeholder="请输入密码" size="medium" style="margin: 10px 0" prefix-icon="el-icon-aim" show-password v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form style="display: flex; height: 2rem;">
              <el-form-item prop="username">
                <el-input placeholder="请输入验证码" size="medium" style="margin: 10px 0" prefix-icon="el-icon-aim" v-model="code"></el-input>
              </el-form-item>
              <el-form-item>
                <canvas id="canvas" width="96px" height="44px" @click="handleCanvas"></canvas>
              </el-form-item>
            </el-form>
            <el-form-item prop="realName" class="input">
              <el-input placeholder="请输入真实姓名" size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="registerForm.realName"></el-input>
            </el-form-item>
            <el-form-item prop="email" class="input">
              <el-input placeholder="请输入邮箱" size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button  @click="submit">注册</el-button>
            </el-form-item>
          </el-form>

          <!-- 如果按钮选择的是登录就展示这个里面的内容 -->
          <el-form ref="loginForm" v-if="active.login">
            <el-form-item prop="username" class="input">
              <el-input placeholder="请输入手机号" size="15px" style="margin: 15px 0" prefix-icon="el-icon-user" v-model="loginForm.user_tele"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="input">
              <el-input placeholder="请输入密码" size="medium" style="margin: 10px 0" prefix-icon="el-icon-aim" show-password v-model="loginForm.password"></el-input>
              <!-- Add this button below the password input field -->
              <span class="toggle-password" @click="togglePasswordVisibility">
                <i :class="showPassword ? 'el-icon-eye' : 'el-icon-eye-off'"></i>
              </span>
            </el-form-item>
            <el-form-item>
              <el-button @click="submit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import {login, loginAuto, register} from "@/api/user";

export default {
  name: "Login.vue",
  data() {
    return {
      active: {
        login: true,
        register: false
      },
      showPassword: false, // Add this line
      errorMessage:'',
      successMessage:'',
      code:'',
      true_code:'',
      yanzheng_arr:[],
      loginForm :{
        user_tele : '',
        password : ''
      },
      token: localStorage.getItem("token"),
      registerForm:{
        username : '',
        password : '',
        phone:'',
        realName:'',
        email:''
      }
    }
  },
  methods: {
    //密码是否可视
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    //登录注册之间的跳转
    go(type) {
      this.active = {
        login: type === 'login',
        register: type === 'register'
      }
      if (type === 'register') {
        this.$nextTick(() => {
          const registerButton = this.$refs.registerButton;
          if (registerButton) {
            registerButton.click();
          }
        });
      }
    },
    //警告提示
    alert(){
      this.$message({
        message:this.errorMessage,
        type: 'warning'
      });
    },
    //成功提示
    node(){
      this.$message({
        message:this.successMessage,
        type: 'success'
      });
    },
    submit() {
      console.log(this.active.login,this.active.register,1312)
      if (this.active.login) {
        if(this.code === this.true_code){
          //先调自动登录接口
          loginAuto(this.token).then(res => {
            console.log(res.data);
            if(res.code===200){
              this.$store.commit('user/saveToken', res.data.token)//保存新token
            }else {//未登录则调登录接口
              login(this.loginForm).then(res => {
                console.log(res.data);
                if(res.code===500){
                  this.errorMessage='该账号密码错误'
                  this.alert();
                }else if(res.code===200){
                  //保存token
                  this.$store.commit('user/saveToken', res.data.token)
                  // this.$store.commit('user/saveLoginUser', res.data.uid)
                  // Cookies.set('token',JSON.stringify(res.data))
                  //跳转到主页
                  this.$router.push('/home');
                }
              }).catch((err)=>{
                console.log(err);
              })}
          }).catch((err)=>{
            console.log(err);
          })
          // login(this.loginForm).then(res => {
          //   console.log(res.data);
          //   if(res.code===500){
          //     this.errorMessage='该账号密码错误'
          //     this.alert();
          //   }else if(res.code===200){
          //     //保存token
          //     this.$store.commit('user/saveToken', res.data.token)
          //     // this.$store.commit('user/saveLoginUser', res.data.uid)
          //     // Cookies.set('token',JSON.stringify(res.data))
          //     //跳转到主页
          //     this.$router.push('/home');
          //   }
          // }).catch((err)=>{
          //   console.log(err);
          // })
        }else{
          this.errorMessage='验证码输入错误';
          this.alert();
        }
      } else if (this.active.register) {
        if(this.code === this.true_code){
          register(this.registerForm).then(res => {
            console.log(res.data);
            if(res.code===200){
              this.successMessage='成功注册';
              this.node();
              this.go('login');
            // }else if(this.registerForm.user_name.length<5){
            //   this.errorMessage='用户名不得小于5位'
            //   this.alert();
            // }else if(this.registerForm.password.length<6){
            //   this.errorMessage='密码不得小于6位';
            //   this.alert();
            }else if(res.code===500){
              this.errorMessage=res.data.msg;
              this.alert();
            }
          }).catch((err)=>{
            console.log(err);
          })
        }else{
          this.errorMessage='验证码输入错误';
          this.alert();
        }
      }
    },
    draw(show_num) {
      var canvas_width =  document.querySelector("#canvas").clientWidth;
      var canvas_height = document.querySelector("#canvas").clientHeight;
      var canvas = document.getElementById("canvas"); //获取到canvas
      var context = canvas.getContext("2d"); //获取到canvas画图
      canvas.width = canvas_width;
      canvas.height = canvas_height;
      var sCode = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0";
      var aCode = sCode.split(",");
      var aLength = aCode.length; //获取到数组的长度

      //4个验证码数
      for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        var deg = (Math.random() * 30 * Math.PI) / 180; //产生0~30之间的随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        show_num[i] = txt.toLowerCase();// 依次把取得的内容放到数组里面
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = this.randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      }
      //验证码上显示6条线条
      for (var i = 0; i <= 5; i++) {
        context.strokeStyle = this.randomColor();
        context.beginPath();
        context.moveTo(
            Math.random() * canvas_width,
            Math.random() * canvas_height
        );
        context.lineTo(
            Math.random() * canvas_width,
            Math.random() * canvas_height
        );
        context.stroke();
      }
      //验证码上显示31个小点
      for (var i = 0; i <= 30; i++) {
        context.strokeStyle = this.randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }

      //最后把取得的验证码数组存起来，方式不唯一
      var num = show_num.join("");
      // console.log(num);
      this.true_code = num
    },
    //得到随机的颜色值
    randomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    //canvas点击刷新
    handleCanvas(){
      this.draw(this.yanzheng_arr);
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}

.content_login{
  /* 100%的窗口高度 */
  height: 100vh;
  /* 弹性布局 水平 + 垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(45deg, rgb(243, 206, 174), rgb(248, 226, 197)) fixed;
}

.container{
  /* 相对定位 */
  position: relative;
  width: 70rem;
}

.container img{
  width: 70rem;
}

.panel{
  width: 44%;
  margin: 4rem -2rem 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
}

.switch span{
  color: #ccc;
  font-size: 1.4rem;
  /* 鼠标放上变小手 */
  cursor: pointer;
}

.switch span.active{
  color: rgb(248, 226, 197);
}

.form{
  width: 15rem;
  margin: 3rem -10rem 0;
}

.form .input{
  position: relative;
  opacity: 1;
  height: 2rem;
  width: 100%;
  margin: 2rem 0;
  transition: 0.4s;
}

.form input{
  outline: none;
  width: 100%;
  border: none;
  border-bottom: .1rem solid rgb(248, 226, 197);
  position: relative;
  line-height: 35px;
  background-color: transparent;
  z-index: 1;
}

.form span{
  display: block;
  color: rgb(3, 39, 76);
  font-size: 0.8rem;
  cursor: pointer;
}


.form button{
  border: none;
  outline: none;
  margin: 2.5rem 0 0;
  width: 100%;
  height: 3rem;
  border-radius: 3rem;
  background:linear-gradient(45deg, rgb(243, 206, 174), rgb(248, 226, 197)) ;
  box-shadow: 0 0 8px rgb(243, 206, 174);
  cursor: pointer;
  color: white;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.white-button {
  background-color: white;
  border: none;
  color: black;
  padding: 12px 8px;
  border-radius: 4px;
}


</style>
