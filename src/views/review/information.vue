<template>
  <div class="page">
    <div class="main">
      <h1 style="color: #b7b7a4;margin-bottom: 50px ">个人信息</h1>
      <el-form label-position="left" label-width="80px">
        <el-form-item label="用户名" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input ></el-input>
        </el-form-item>
        <el-button  style="margin-top: 50px;" @click="commit">修改</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>
.page{
  text-align: center;
  width: 70%;
  margin: 0 auto;
  .main{
    margin-top: 50px;
  }
}
</style>
