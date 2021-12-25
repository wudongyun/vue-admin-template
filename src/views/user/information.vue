<template>
  <div class="page">
    <div class="main">
      <h1 style="color: #b7b7a4;margin-bottom: 50px ">个人信息</h1>
      <el-form label-position="left" label-width="80px" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username" >
          <el-input type="text" v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="ruleForm.email" ></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="address">
          <el-input type="text" v-model="ruleForm.address" ></el-input>
        </el-form-item>
        <el-button  style="margin-top: 50px;" @click="commit('ruleForm')">修改</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else{
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请正确填写邮箱'));
      } else {
        if (value !== '') {
          var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(value)){
            callback(new Error('请输入有效的邮箱'));
          }
        }
        callback();
      }
    };
    var checkAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入地址'));
      }  else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        email: '',
        address:''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          {validator: validateEmail, trigger:'blur'}
        ],
        address: [
          {validator: checkAddress,trigger: 'blur'}
        ]
      }
    };
  },
  methods:{
    commit(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
                { method: '',
                  name: formName.username,
                  password: formName.password,
                  institude: formName.address,
                  email:formName.email
                }}, {emulateJSON: true})
            .then((response) => {
              this.$store.commit('setUsername', this.ruleForm.username);
            }).catch(err =>{
            console.log(err.data)
          });
        } else {
          alert('修改失败');
          return false;
        }
      });
    },
    initData(){
      this.$http
        .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
            { method: '',
              name: this.$store.state.username
            }}, {emulateJSON: true})
        .then((response) => {
          this.ruleForm=response.data;
        }).catch(err =>{
        console.log(err.data)
      });
    }
  },
  mounted() {
    this.initData();
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
