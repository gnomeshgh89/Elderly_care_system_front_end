<template>
  <div class="container">
  <!--    头部     -->
    <v-head></v-head>
    <!--    侧边栏     -->
    <v-sides></v-sides>
    <div style="width:calc(100vw - 250px); float:right; overflow-y: scroll; height:calc(100vh - 60px);">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import vHead from './Header.vue';
import vSides from './SideBar.vue';
export default {
  data() {

  },
  components: {
    'v-head':vHead,
    'v-sides':vSides
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.container{
  /* 100%的窗口高度 */
  height: 100vh;
  /*!* 弹性布局 水平 + 垂直居中 *!*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /* 渐变背景 */
  background: linear-gradient(45deg, rgb(243, 206, 174), rgb(248, 226, 197)) fixed;
}


body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
