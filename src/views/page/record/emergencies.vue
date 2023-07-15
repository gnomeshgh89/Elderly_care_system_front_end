<template>
  <el-table :data="tableData" border style="width: 100%"  >
    <el-table-column prop="id" align="center" label="id" width="70"></el-table-column>
    <el-table-column prop="type" align="center" label="类型" width="160"></el-table-column>
    <el-table-column prop="time" align="center" label="时间" width="190"></el-table-column>
    <el-table-column prop="destination" align="center" label="地点" width="190"></el-table-column>
    <el-table-column prop="des" align="center" label="描述" width="220"></el-table-column>
    <el-table-column prop="old_id" align="center" label="老人ID" width="150"></el-table-column>
    <el-table-column prop="pic" align="center" label="图片" width="200" show-overflow-tooltip>
      <template slot-scope="scope">
        <img :src="scope.row.image" width="50" height="50" v-image-preview/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  data() {
    return{
      tableData:[]
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      var that = this
      this.$axios.get("http://127.0.0.1:5000/readRecord")
        .then(res => {
          localStorage.setItem("record", JSON.stringify(res.data))
          var json = JSON.parse(localStorage.getItem('record') || '[]');
          for (let i in json) {
            if (json[i].old_id == 0) {
              json[i].old_id = '无';
            }
          }
          that.tableData = json;
        })
    },
    handleRemove(file, fileList) {
      this.fileList.pop();
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
}
</script>