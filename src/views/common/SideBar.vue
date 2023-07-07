<template>
  <div class="sidebar">
    <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-user-solid"></i>老人信息管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1"class="el-icon-tickets" @click="old_mes()">老人列表</el-menu-item>
          <el-menu-item index="1-2"class="el-icon-data-line" @click="old_ana()">信息统计图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-video-camera-solid"></i>实时监控</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="room_monitor()">卧室</el-menu-item>
          <el-menu-item index="2-2" @click="living_monitor()">客厅</el-menu-item>
          <el-menu-item index="2-3" @click="dining_monitor()">餐厅</el-menu-item>
          <el-menu-item index="2-4" @click="kitchen_monitor()">厨房</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-tickets"></i>突发情况记录</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="record_emergencies()">突发情况</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-s-claim"></i>日程表</template>
        <el-menu-item-group>
          <el-menu-item index="4-1" @click="schedule_calendar()">查看日历</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-user-solid"></i>工作人员信息管理</template>
        <el-menu-item-group>
          <el-menu-item index="5-1" @click="worker_mes()">工作人员列表</el-menu-item>
          <el-menu-item index="5-2" @click="worker_ana()">信息统计图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-user-solid"></i>管理员信息管理</template>
        <el-menu-item-group>
          <el-menu-item index="6-1" @click="view_manager()">查看管理员信息</el-menu-item>
          <el-menu-item index="6-2" @click="change_pwd()">修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  methods: {
    old_ana(){
      //获取老人年龄分析图
      this.$router.push('/oldImage');
    },
    old_mes(){
      //后端传老人信息
      this.$router.push('/oldMen');
    },
    view_manager(){
      //后端传管理员信息
      this.$router.push('/managerInfo');
    },
    change_pwd(){
      //更改密码
      this.$router.push('/changePwd');
    },
    room_monitor(){
      //查看房间监控
      this.$router.push('/room');
    },
    dining_monitor(){
      //查看房间监控
      this.$router.push('/dining');
    },
    kitchen_monitor(){
      //查看房间监控
      this.$router.push('/kitchen');
    },
    living_monitor(){
      //查看房间监控
      this.$router.push('/living');
    },
    worker_mes(){
      //后端传入工作人员信息
      this.$router.push('/workers');
    },
    worker_ana(){
      //后端传入工作人员分析图
      this.$router.push('/workerImage');
    },
    schedule_calendar(){
      //后端传入工作人员分析图
      this.$router.push('/calendar');
    },
    record_emergencies(){
      //后端传入工作人员分析图
      this.$router.push('/emergencies');
    },
  }
}
</script>

<style scoped>
.sidebar{
  width:250px;
  left:0;
  height : calc(100vh - 60px);
  background-color: #F8E2C5;
  display: block;
  position: absolute;
  overflow-y: scroll;
}
.el-aside{
  background-color: #F8E2C5;
}

.el-menu-item{
  width:250px;
  background-color: #F8E2C5;
}

.el-menu{
  background-color: #F8E2C5;
}

.el-submenu{

  background-color: #F8E2C5;
}

.el-menu-item-group{
  background-color: #F8E2C5;
}
</style>