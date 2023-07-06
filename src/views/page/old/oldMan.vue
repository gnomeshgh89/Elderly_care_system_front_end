<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
          width="70"
          align="center">
      </el-table-column>
      <el-table-column
          prop="oldName"
          label="姓名"
          width="120"
          align="center">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="70"
          align="center">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话"
          width="210"
          align="center">
      </el-table-column>
      <el-table-column
          prop="roomNumber"
          label="家庭地址"
          width="225"
          align="center">
      </el-table-column>
      <el-table-column
          prop="guardian1_phone"
          label="监护人电话"
          width="210"
          align="center">
      </el-table-column>
      <el-table-column
          float="right"
          label="操作"
          width="275"
          align="center">
        <template slot-scope="scope">
          <el-button  type="text" size="small" @click.native.prevent="viewMan(scope.$index)">查看</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <i id="icon" class = "el-icon-circle-plus" @click = "addOld"></i>
  </div>


</template>
<script>
export default {
  methods: {
    //添加老人
    addOld: function () {
      this.$router.push('/addOld')
    },
    //查看老人
    viewMan:function(index){

      this.$router.push('/oldMes')
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
