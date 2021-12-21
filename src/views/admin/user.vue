<template>
  <div class="page">
    <el-table :data="tableData" >
      <el-table-column prop="id" label="编号" width='100px'></el-table-column>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="institude" label="单位" ></el-table-column>
      <el-table-column prop="email" label="邮箱"  :formatter="formatSex"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column header-align="center" align="center" prop="operate" label="操作" width="270px">
        <el-button
          size="mini"
          icon="el-icon-zoom-in"
          @click="handleview">查看
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="handle">编辑
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-delete"
          @click="handleDelete">删除
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
