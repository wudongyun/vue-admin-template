<template>
  <div class="page">
    <el-table :data="tableData" >
      <el-table-column prop="id" label="编号" width='100px'></el-table-column>
      <el-table-column prop="start-time" label="投稿时间" ></el-table-column>
      <el-table-column prop="end-time" label="修改时间"  :formatter="formatSex"></el-table-column>
      <el-table-column prop="name" label="文章题目"></el-table-column>
      <el-table-column prop="review" label="审稿人"></el-table-column>
      <el-table-column prop="status"  :formatter="formatterColumn" label="审核状态" ></el-table-column>
      <el-table-column header-align="center" align="center" prop="operate" label="操作" width="200px">
        <el-button
          size="mini"
          icon="el-icon-zoom-in"
          @click="handleview">查看
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="handle"
          v-if="">修改
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-delete"
          @click="handledelete"
          v-if="">删除
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData: [{
        id:'1',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:0,
        sex:'1'
      }, {
        id:'2',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:1,
        sex:'0'
      }, {
        id:'3',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        IsAudit:10,
        sex:'-1'
      }]
    }
  }
}
</script>

<style scoped>

</style>
