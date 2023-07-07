<template>
  <div style="display: inline">
    <!--    <img src="http://127.0.0.1:5001/living">-->
    <img src="@/assets/user.png" style="height: 600px;width: 700px;margin-left: 20px">
    <div style="width:500px;margin-left:80px; float: left; position: absolute; color:#9b8060; font-size: 20px; font-weight: bold">
      <div>
        <span class="intro">老人姓名: </span>
        张三
      </div>
      <div>
        <span class="intro">老人年龄: </span>
        63
      </div>
      <div>
        <span class="intro">家庭住址: </span>
        北下关16栋5-201
      </div>
    </div>
    <div style="height:620px;float:right;margin-top:20px;margin-right:10px;padding-bottom: 40px;border:3px solid #9b8060">
      <h2 style="margin-left:5px; color:#9b8060">厨房实时记录显示</h2>
      <el-scrollbar style = "height:100%">
        <div style="height:580px;float: right;margin-top: 10px;margin-left: 10px;margin-right: 10px;margin-bottom: 10px;">
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="id"
                label="编号"
                width="70"
                align="center">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="130"
                align="center">
            </el-table-column>
            <el-table-column prop="pic" align="center" label="图片" width="180" show-overflow-tooltip>
              <template slot-scope="scope">
                <img :src="scope.row.image" width="40" height="30" v-image-preview/>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.el-scrollbar__wrap{
  overflow-x: hidden;
}

</style>