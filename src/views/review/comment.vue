<template>
  <div class="page">
    <div class="info">
      <div class="header"><h3>稿件详情信息</h3></div>
      <p>稿件编号：{{ form.id}}</p>
      <p>投稿人：{{ form.contributor_id}}</p>
      <p>投稿时间：{{ form.create_time }}</p>
      <p>修改时间：{{ form.update_time }}</p>
      <p>状态：{{ form.status }}</p>
      <p>审稿人：{{ form.reviewer_list }}</p>
      <p>稿件题目：{{ form.paper_title }}</p>
      <p>中文摘要：{{ form.abstract_cn }}</p>
      <p>英文摘要：{{ form.abstract_eng }}</p>
      <p>拟投栏目：{{ form.channel }}</p>
      <p>关键字：{{ form.keyword }}</p>
      <p>稿件pdf：<a href="../../assets/DNNV.pdf" download="稿件pdf.pdf" style="color: #20a0ff">点击这里下载</a></p>


      <el-form ref="ruleform" status-icon :model="ruleform" label-width="80px">
        <el-form-item label="是否通过" prop="ispass">
          <el-radio-group v-model="ruleform.ispass">
            <el-radio label="1">通过</el-radio>
            <el-radio label="2">驳回</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="评审意见" prop="review_comment">
          <el-input type="textarea" rows="4" v-model="ruleform.review_comment"></el-input>
        </el-form-item>
        <div class="button">
          <el-button style="margin-top: 12px;" @click="commit" >提交</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ruleform:{
        ispass: '',
        review_comment: ''
      },
      form:''
    }
  },
  created(){
    this.getParams()
  },
  methods :{
    getParams(){
      // 取到路由带过来的参数
      const routerParams = this.$route.query.parms
      // 将数据放在当前组件的数据内
      this.form= routerParams;
      // console.log(this.form)
      this.stateFormat(this.form.status)
    },
    commit(){
      console.log(this.form)
      console.log(this.ruleform)
      this.$http
        .get("http://localhost:8080/ProjectWeb/ReviewServlet", {
          params:
            { method: 'review',
              paper_id: this.form.id,
              status:this.ruleform.ispass,
              review_comment:this.ruleform.review_comment,
              review_id:this.$store.state.userid,
              review_name:this.$store.state.username,
              contributor_id:this.form.contributor_id
            }}, {emulateJSON: true})
        .then((response) => {
          this.tableData=response.data;
          this.dictTotal = this.tableData.length;
        }).catch(err =>{
        console.log(err.data)
      });
    },
    stateFormat(params) {
      // console.log("ces")
      if (params === 1) {
        this.form.status=  '已创建，待送审'
      } else  if(params === 2) {
        this.form.status='正在审核中'
      }else  if(params === 3) {
        this.form.status='审核通过'
      }else  if(params === 4) {
        this.form.status= '审核驳回，待送审'
      }else  if(params === 5) {
        this.form.status= '二次审核中'
      }else {
        this.form.status= '驳回，关闭稿件工单'
      }
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style lang="scss" scoped>

.page{
  .info {
    width: 80%;
    margin: 0 auto;
    .header{
      text-align: center;
      margin-bottom: 40px;
    }
    .button{
      text-align: center;
    }
    .final {
      text-align: center;
      height: 300px;
      width: 100%;
    }
  }
}
</style>
