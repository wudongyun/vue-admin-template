<template>
  <div class="page">
    <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)" >
      <el-table-column prop="id" label="编号" width='100px'></el-table-column>
      <el-table-column prop="create_time" label="投稿时间" ></el-table-column>
      <el-table-column prop="update_time" label="修改时间"  ></el-table-column>
      <el-table-column prop="paper_title" label="文章题目"></el-table-column>
      <el-table-column prop="reviewer_list" label="审稿人"></el-table-column>
      <el-table-column prop="status"   label="审核状态" :formatter="stateFormat" ></el-table-column>
      <el-table-column header-align="center" align="center"  label="操作" width="270px">
        <template slot-scope="scope">
        <el-button
          size="mini"
          icon="el-icon-zoom-in"
          @click="handleview(scope.row)">查看
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="handle(scope.row)"
          v-if="">修改
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-delete"
          @click="handledelete(scope.row)"
          v-if="">删除
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
        contributor_name:'dfsnkafn',
        status:1
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
            { method: 'list',
              contributor_id: this.$store.state.userid
            }}, {emulateJSON: true})
        .then((response) => {
          this.tableData=response.data;
          this.dictTotal = this.tableData.length;
        }).catch(err =>{
        console.log(err.data)
      });
      this.dictTotal=this.tableData.length;

    },
    handleview(row){
      this.$router.push({
        path: '/user/des',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handle(row){
      this.$router.push({
        path: '/user/change',
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
            { method: 'delete',
              id: row.id
            }}, {emulateJSON: true})
        .then((response) => {
          alert("删除成功！")
        }).catch(err =>{
        console.log(err.data)
      });
      this.initData();
    },
    stateFormat(row, column) {
      console.log("ces")
      if (row.status === 1) {
        return '未上传'
      } else if (row.status === 2) {
        return '已上传'
      } else if (row.status === 3) {
        return '正在审核'
      } else if (row.status === 4) {
        return '审核不通过'
      } else if (row.status === 5) {
        return '通过审核，待发表'
      }else if (row.status === 5) {
        return '审核不通过，不可再投稿，无效稿件'
      } else {
        return '已发表'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.page{
  position: relative;
  .fy{
    position: absolute;
    //bottom: 2px;
    margin-top: 20px;
    right: 10px;
  }
}
</style>
