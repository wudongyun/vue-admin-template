<template>
  <div class="page">
    <div class="info">
      <div class="header" style="text-align: center"><h3>修改个人信息</h3></div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" ></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="institude">
          <el-input type="password" v-model="ruleForm.institude"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button  style="margin-left: 30px;background-color: #6b705c" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button  style="margin-left: 80px;background-color: #b7b7a4" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
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
    return {
      ruleForm: {
        username: '',
        institude: '',
        email: '',
        password: ''
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
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
                { method: '',
                  name: formName.username,
                  email:formName.email,
                  password: formName.password,
                  institude: formName.institude
                }}, {emulateJSON: true})
            .then((response) => {
              alert("修改成功！")
            }).catch(err =>{
            console.log(err.data)
          });

        } else {
          alert('修改失败');
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
.info{
  width: 50%;
  margin-left: 25%;
}
</style>
