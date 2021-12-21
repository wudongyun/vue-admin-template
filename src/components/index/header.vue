<template>
  <el-header >
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
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
</template>

<script>
export default {
  name: "header",

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

}
}
</style>
