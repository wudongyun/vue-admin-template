<template>
  <div class="page">
    <el-table :data="tableData.slice((dictCurrentPage-1)*dictPageSize,dictCurrentPage*dictPageSize)" >
      <el-table-column header-align="center" align="center" prop="id" label="编号" width='50px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="contributor_name" label="投稿人"  width='70px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="create_time" label="投稿时间"  width='100px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="update_time" label="修改时间" width='100px' ></el-table-column>
      <el-table-column header-align="center" align="center" prop="paper_title" label="文章题目"  width='220px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="channel" label="拟投栏目"  width='150px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="keyword" label="关键词"  width='400px'></el-table-column>
      <el-table-column header-align="center" align="center" prop="status"  label="审核状态" :formatter="stateFormat"  width='100px'></el-table-column>
      <el-table-column  header-align="center" align="center" prop="operate" label="操作" width="100px">
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
        contributor_name:"王小明",
        create_time: "2021-12-26",
        paper_title: "基于向量承诺与代理重加密的数据外包及分享方案",
        abstract_cn: "为保障外包数据的完整性、机密性以及可访问性,在向量承诺原语基础上,结合代理重加密技术,提出一种安全的数据外包及分享方案。通过引入对承诺值的数字签名,使得任意第三方可以在数据拥有者和服务提供商均不完全可信的情况下,对外包数据的完整性进行校验,数据拥有者可以对外包数据执行高效的添加、删除、修改和访问授权操作。性能及安全性分析结果表明了该方案的可行性。",
        channel: "移动互联与通信技术",
        update_time: "2021-12-26",
        paper_author: "吴兴华,张爱新,李建华",
        id: 34,
        abstract_eng: "",
        keyword: "数据外包, 数据分享, 双线性映射, 向量承诺, 代理重加密",
        contributor_id: "57",
        status: 3
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
        return '未上传'
      } else if (row.status === 2) {
        return '已上传'
      } else if (row.status === 3) {
        return '正在审核'
      } else if (row.status === 4) {
        return '审核不通过'
      } else if (row.status === 5) {
        return '通过审核，待发表'
      }else if (row.status === 6) {
        return '审核不通过，不可再投稿，无效稿件'
      } else if(rou.status===8){
        return '二次提交，重新审核'
      }else {
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
