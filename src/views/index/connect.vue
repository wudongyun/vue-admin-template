<template>
  <div class="page">
    <div class="left">
      <div class="describe">联系我们</div>
      <div class="content">
        <p>对于系统有关的任何问题欢迎联系：</p>
        <img class="img" src="../../assets/images/connect.jpeg" alt="联系二维码">
        <p>地址：上海市华东师范大学中山北路3663号</p>
        <p>Tel:021-00000000 </p>
        <p>传真：021-00000000</p>
        <p>E-mail: student@stu.ecnu.edu.cn</p>
      </div>
    </div>
    <div class="right">
      <img class="logo" src="../../assets/images/logo-2.jpg" alt="华东师范大学logo"/>
      <p> 主管：XXXXXXXXXXXXX
      </p>
      <p> 主办：华东师范大学
      </p>
      <p> 执行主编：xxxxx
      </p>
      <p>
        电话：021-0000000000
      </p>
      <p> 传真：021-00000000
      </p>
      <p> E-mail: student@stu.ecnu.edu.cn
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "connect"
}
</script>

<style lang="scss" scoped>
p {
  font-family: "Gotham Narrow A", "Gotham Narrow B", sans-serif;
  color: #666;
}

.left {
  position: relative;
  width: 70%;
  text-align: center;
  .img{
    height: 400px;
    width: 600px;
  }
  .describe {
    padding: 13px;
    background-color: #b7b7a4;
    color: white;
    font-size: 22px;
    text-align: center;
    height: 50px;
    width: 130px;
  }

  .content {
    border: 1px solid grey;
    padding: 20px;

    .footer {
      text-align: right;
    }
  }
}
.right {
  position: relative;
  width: 25%;
  bottom: 652px;
  left: 75%;
  background-color: #b7b7a4;
  padding: 10px;
.logo {
  width: 100%;
  height: 300px;
}
}
</style>
