<template>
<div class="page">
  <div class="info">
    <div class="header"><h3>稿件详情信息</h3></div>
    <p>稿件编号：{{ form.id}}</p>
    <p>投稿时间：{{ form.create_time }}</p>
    <p>修改时间：{{ form.update_time }}</p>
    <p>状态：{{ form.status }}</p>
    <p>审稿人：{{ form.reviewer_list }}</p>
    <p>稿件语言：{{ form.language }}</p>
    <p>中文题目：{{ form.paper_title }}</p>
    <p>英文题目：{{ form.enname }}</p>
    <p>中文摘要：{{ form.abstract_cn }}</p>
    <p>英文摘要：{{ form.abstract_eng }}</p>
    <p>拟投栏目：{{ form.channel }}</p>
    <p>中文关键字：{{ form.cnkeyword }}</p>
    <p>英文关键字：{{ form.enkeyword }}</p>
  </div>
</div>
</template>

<script>
export default {
  created(){
    this.getParams()
  },
  methods :{
    getParams(){
      // 取到路由带过来的参数
      const routerParams = this.$route.query.parms
      // 将数据放在当前组件的数据内
      this.form= routerParams;
      console.log(this.form)
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
      margin-bottom: 40px;
    }
    .final {
      text-align: center;
      height: 300px;
      width: 100%;
    }
  }
}
</style>
