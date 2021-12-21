<template>
  <div>
  <el-container>
    <div class="header">
    <el-header >
      <el-menu
        :default-active="this.$route.path"
        class="menu"
        mode="horizontal"
        @select="handleSelect"
        router
        background-color="#fff"
        text-color="#333"
        active-text-color="#0084ff"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-header>
    </div>
    <div class="main">
    <el-main>
      <el-main class="detailed-content">
      <router-view />
    </el-main>
    </el-main>
    </div>
  </el-container>
  <div class="footer">
    <p class="first">2021 © 华东师范大学</p>
    <p>    地址：上海市华东师范大学中山北路3663号 Tel:021-00000000 传真：021-00000000 E-mail: student@stu.ecnu.edu.cn
    </p>
    <p>    本系统由华东师范大学所设计开发
    </p>

  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {name: '/index/frontpage', navItem: '首页'},
        {name: '/login', navItem: '个人中心'},
        {name: '/login', navItem: '后台管理'},
        {name: '/index/help', navItem: '需要帮助'},
        {name: '/index/connect', navItem: '联系我们'},
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: absolute;
  height: 280px;
  width: 100%;
  background-image: url("../../assets/images/header.jpg");
  background-position-y: 1026px;
  .menu{
    position: relative;
    top: 219px;
    background-color: #b7b7a4;
    color: white;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    padding: 0 320px;
    .el-menu-item{
      margin: 0 auto;
    }
  }
}
.main{
  margin: 280px auto ;
  width: 80%;
}
.footer{
  position: relative;
  margin: 0px auto;
  text-align: center;
  width: 100%;
  height: 200px;
  background-color: #b7b7a4;
  .first{
    padding-top: 60px;
  }

}
.footer > p{
  font-family: "Gotham Narrow A", "Gotham Narrow B", sans-serif;
  color: #666;
}

</style>
