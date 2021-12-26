<template>
  <div className="page">
    <div className="info">
      <div className="header"><h3 style="text-align: center">个人信息详情信息</h3></div>
      <p style="margin-left :400px;margin-top: 50px">id：{{ form.id}}</p>
      <p style="margin-left :400px;">姓名：{{ form.username}}</p>
      <p style="margin-left :400px;">单位：{{ form.institude }}</p>
      <p style="margin-left :400px;">邮箱：{{ form.email }}</p>
      <p style="margin-left :400px;">角色：{{ form.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getParams()
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      const routerParams = this.$route.query.parms
      // 将数据放在当前组件的数据内
      this.form = routerParams;
      console.log(this.form)
      this.stateFormat(this.form.role)

    },
    stateFormat(params) {
      console.log("ces")
      if (params === 1) {
        this.form.role= '投稿人'
      } else if (params === 2) {
        this.form.role= '审稿人'
      } else{
        this.form.role= '管理员'
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
    .final {
      text-align: center;
      height: 300px;
      width: 100%;
    }
  }
}
</style>
