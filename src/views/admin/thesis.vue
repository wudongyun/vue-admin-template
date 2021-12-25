<template>
  <div class="page">
    <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)" >
      <el-table-column prop="id" label="编号" width='100px'></el-table-column>
      <el-table-column prop="contributor_name" label="投稿人" ></el-table-column>
      <el-table-column prop="create_time" label="投稿时间" ></el-table-column>
      <el-table-column prop="update_time" label="修改时间" ></el-table-column>
      <el-table-column prop="paper_title" label="文章题目"></el-table-column>
      <el-table-column prop="channel" label="拟投栏目"></el-table-column>
      <el-table-column prop="keyword" label="关键词"></el-table-column>
      <el-table-column prop="status" label="审核状态" ></el-table-column>
      <el-table-column prop="reviewer_list" label="审稿人"></el-table-column>
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
        id:1,
        create_time:'sd',
        channel:'人工智能与模式识别',
        contributor_name:'dfsnkafn'
      },{
        id:1,
        create_time:'sd',
        channel:'人工智能与模式识别',
        contributor_name:'dfsnkafn'
      }]
    }
  },
  mounted() {
    this.initData();
  },
  methods:{
    initData(){
      this.$http
        .get("http://localhost:8080/ProjectWeb/PaperServlet", {
          params:
            {
              method: 'list',
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
        path: '/admin/des_thesis',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handle(row){
      this.$router.push({
        path: '/admin/change_thesis',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handledelete(row){
      this.$http
        .get("http://localhost:8080/ProjectWeb/PaperServlet", {
          params:
            { method: '',
              id: row.id
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
