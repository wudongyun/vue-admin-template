<template>
  <div class="login-container">
    <div class="register">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="register-form">
        <div class="title-container">
          <p class="title">登录</p>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角 色" prop="role">
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="1">投稿人</el-radio>
            <el-radio label="2">审稿人</el-radio>
            <el-radio label="3">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="button">
          <el-button  style="margin-left: 30px;background-color: #6b705c" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button  style="margin-left: 80px;background-color: #b7b7a4" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="linked">
        <router-link to="/register" > 还没有账号？注册一个</router-link>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Indexbg from "@/components/loginpage/bg"
import Foot from "@/components/loginpage/footer"

export default {
  components: {
    Indexbg,
    Foot
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else{
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
    var checkRole = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择角色'));
      }  else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        role:''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        role: [
          {validator: checkRole,trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('登录成功!');
          this.$http
            .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
                { method: '',
                  name: formName.username,
                  password: formName.password,
                  role: formName.role
                }}, {emulateJSON: true})
            .then((response) => {
              this.$store.commit('setUsername', this.ruleForm.username);
              if(this.ruleForm.role==="1"){
                this.$router.replace('/user')
              } else if(this.ruleForm.role==="2"){
                this.$router.replace('/review');
              } else{
                this.$router.replace('/admin');
              }
            }).catch(err =>{
            console.log(err.data)
          });

        } else {
          console.log('登录失败，请输入正确的用户名和密码');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style lang="scss" scoped>
.login-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/bg-4.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .register{
    background-color: rgb(107, 112, 92,0.4);
    width: 30%;
    margin: 200px auto;
    height: 50%;
    .register-form{
      margin-right: 40px;
      margin-bottom: 40px;
      .title-container {
        //position: relative;
        .title {
          font-size: 26px;
          color: #606266;
          margin: 0px auto 20px auto;
          padding-top: 20px;
          text-align: center;
        }
      }
    }
    .linked{
      //text-align: center;
      position: relative;
      top: 20px;
      left: 45px;
      height: 40px;
      width: 100%;
      margin: 0 auto;
      color: white;
    }
  }
}
</style>
