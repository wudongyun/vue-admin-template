<template>
  <div class="page">
    <el-container>
      <el-header class="header">
        <el-dropdown class="header-container">
          <div class="img">
            <img src="../../assets/images/pro.jpg" class="user-avatar">
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/index">
              <el-dropdown-item>
                主页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="logout">
              <span style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <div class="aside">
          <el-aside style="width: 200px;height: 600px">
            <el-menu
              :default-active="this.$route.path"
              class="menu"
              background-color="#b7b7a4"
              @select="handleSelect"
              router
              text-color="#000"
              active-text-color="#000">
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span> {{ item.navItem }}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </div>
        <el-container>
          <el-main class="main">
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {name: '/review/table', navItem: '待处理稿件'},
        {name: '/review/information', navItem: '个人信息'}
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    logout(){
      this.$store.state.username=''
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  background-color: #6b705c;
  width: 100%;
  height: 100px;

  .header-container {
    position: relative;
    left: 1449px;

    .img {
      img {
        margin: 11px;
        width: 40px;
        height: 40px;
      }
    }
  }
}

.aside {
  position: relative;
  top: 60px;
  height: 812px;
  background-color: #b7b7a4;
}
.main{
  position: relative;
  top: 60px;
  background-color: white;
}
</style>
