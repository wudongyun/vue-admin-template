<template>
  <div class="login-container">
    <div class="register">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="register-form">
        <div class="title-container">
          <p class="title">注 册</p>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="user" >投稿人</el-radio>
            <el-radio label="review" >审稿人</el-radio>
            <el-radio label="admin" >管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" ></el-input>
        </el-form-item>
        <el-form-item label="确定密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button  style="margin-left: 30px;background-color: #6b705c" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button  style="margin-left: 80px;background-color: #b7b7a4" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Indexbg from '@/components/loginpage/bg'
import Foot from '@/components/loginpage/footer'

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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
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
        checkPass: '',
        email: '',
        password: '',
        role:''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        email: [
          {validator: validateEmail, trigger:'blur'}
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        role: [
          { validator: checkRole, trigger: 'blur' }
        ]
      }
    };
  },
  watch:{

  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          alert('注册失败');
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
  }
;
}
</style>
