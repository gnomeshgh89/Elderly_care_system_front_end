<template>
  <div class="header">
    <img src="../../assets/logo.png" alt="Logo" style="float: left; width: 60px; height: 60px;">
    <span style="float: left; margin-left: 10px; font-size: 20px; font-weight: bold;">智慧养老系统</span>
    <el-dropdown>
      <span style="margin-right: 20px; font-size: 20px; margin-top: 20px; align-items: center;">
        管理员1
        <i class="el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="width: 87px; position: center">
        <el-dropdown-item>查看信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

</script>

<style scoped>
.header{
  background-color: #F3CEAE;
  color: #676060;
  line-height: 60px;
  text-align: right;
  float:top;
  width: 100vw;
  margin-top: 0;
  position: relative;
}
</style>