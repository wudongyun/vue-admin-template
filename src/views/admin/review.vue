<template>
  <div class="page">
    <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)"  >
      <el-table-column header-align="center" align="center" prop="id" label="编号" width='50px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="username" label="姓名" width="70px"></el-table-column>
      <el-table-column header-align="center" align="center" prop="institude" label="单位" ></el-table-column>
      <el-table-column header-align="center" align="center" prop="email" label="邮箱" ></el-table-column>
<!--      <el-table-column header-align="center" align="center" prop="password" label="密码"></el-table-column>-->
      <el-table-column header-align="center" align="center" prop="operate" label="操作" width="270px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-zoom-in"
            @click="handleview(scope.row)">查看
          </el-button>
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="handle(scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            icon="el-icon-delete"
            @click="handledelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="fy"
                   layout="sizes, prev, pager, next, total"
                   :current-page.sync="dictCurrentPage"
                   :total="dictTotal"
                   background
                   :page-sizes="[12]"
                   :page-size.sync="dictPageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dictTotal:0,
      dictCurrentPage:1,
      dictPageSize:12,
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
  },
  mounted() {
    this.initData();
  },
  methods:{
    initData(){
      this.$http
        .get("http://localhost:8080/ProjectWeb/UserServlet", {
          params:
            { method: 'list',
              actor:2
            }}, {emulateJSON: true})
        .then((response) => {
          this.tableData=response.data;
          this.dictTotal = this.tableData.length;
        }).catch(err =>{
        console.log(err.data)
      });
    },
    handleview(row){
      this.$router.push({
        path: '/admin/des',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handle(row){
      this.$router.push({
        path: '/admin/change',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handledelete(row){
      this.$http
        .get("http://localhost:8080/ProjectWeb/UserServlet", {
          params:
            { method: 'delete',
              username: row.username
            }}, {emulateJSON: true})
        .then((response) => {
          alert("删除成功！")
        }).catch(err =>{
        console.log(err.data)
      });
      this.initData();
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  .fy {
    position: absolute;
    //bottom: 2px;
    margin-top: 20px;
    right: 10px;
  }
}
</style>
