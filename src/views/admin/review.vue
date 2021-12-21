<template>
  <div class="page">
    <el-table :data="tableData"  >
      <el-table-column header-align="center" align="center" prop="id" label="编号" width='50px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="name" label="姓名" width="70px"></el-table-column>
      <el-table-column header-align="center" align="center" prop="institude" label="单位" ></el-table-column>
      <el-table-column header-align="center" align="center" prop="email" label="邮箱" ></el-table-column>
      <el-table-column header-align="center" align="center" prop="password" label="密码"></el-table-column>
      <el-table-column header-align="center" align="center" prop="periodical_id_list" label="负责期刊"></el-table-column>
      <el-table-column header-align="center" align="center" prop="level" label="权限等级" width="80px"></el-table-column>
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

<style lang="scss" scoped>
.page{
  .op{
    display: inline-block;
  }
}
</style>
