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
      <el-table-column prop="status"  label="审核状态" :formatter="stateFormat"></el-table-column>
      <el-table-column header-align="center" align="center" prop="operate" label="操作" width="200px">
        <template slot-scope="scope">
        <el-button
          size="mini"
          v-if="scope.row.status===1||scope.row.status==4||scope.row.status===5||scope.row.status==6"
          icon="el-icon-zoom-in"
          @click="handleview(scope.row)">查看
        </el-button>
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="handle(scope.row)"
          v-if="scope.row.status===2||scope.row.status==3">审稿
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
      },{
        id:1,
        create_time:'sd',
        channel:'人工智能与模式识别',
        contributor_name:'dfsnkafn',status: 2
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
              name: this.$store.state.username
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
        path: '/review/des',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    handle(row){
      this.$router.push({
        path: '/review/comment',
        // name: 'mallList',
        query: {
          parms:row
        }
      })
    },
    stateFormat(row, column) {
      console.log("ces")
      if (row.status === 1) {
        return '已创建，待送审'
      } else if (row.status === 2) {
        return '正在审核中'
      } else if (row.status === 3) {
        return '审核通过'
      } else if (row.status === 4) {
        return '审核驳回，待送审'
      } else if (row.status === 5) {
        return '二次审核中'
      } else {
        return '驳回，关闭稿件工单'
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
