<template>
  <div class="page">
    <div class="header"><h3>稿件详情信息</h3></div>
    <div class="form">
      <el-form ref="form" status-icon :model="form" :rules="rules" label-width="80px">
        <div class="info">
          <el-form-item label="稿件语言" prop="language">
            <el-radio-group v-model="form.language">
              <el-radio label="English">英语稿件</el-radio>
              <el-radio label="Chinese">中文稿件</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="中文题目" prop="cnname">
            <el-input type="text" v-model="form.cnname"></el-input>
          </el-form-item>
          <el-form-item label="英文题目" prop="enname">
            <el-input type="text" v-model="form.enname"></el-input>
          </el-form-item>
          <el-form-item label="中文摘要" prop="cnsummary">
            （请在下框中输入稿件中文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="3" v-model="form.cnsummary"></el-input>
          </el-form-item>
          <el-form-item label="英文摘要" prop="ensummary">
            （请在下框中输入稿件英文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="3" v-model="form.ensummary"></el-input>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="拟投栏目" prop="channel" label-width="100px">
            <el-select v-model="form.channel" placeholder="请选择拟投的栏目">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="中文关键字" prop="cnkeyword" label-width="100px">
            <el-input type="textarea" rows="2" v-model="form.cnkeyword"></el-input>
          </el-form-item>
          <el-form-item label="英文关键字" prop="enkeyword" label-width="100px">
            <el-input type="textarea" rows="2" v-model="form.enkeyword"></el-input>
          </el-form-item>
        </div>
        <div class="info">
          <div class="header"><h3>上传稿件</h3></div>
        </div>
        <div class="button">
          <el-button style="margin-top: 12px;" @click="change" >修改</el-button>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  created(){
    this.getParams()
  },
  methods :{
    getParams(){
      // 取到路由带过来的参数
      const routerParams = this.$route.query.parms
      // 将数据放在当前组件的数据内
      this.form= routerParams;
      console.log(this.form)
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
}
.form {
  margin: 0px auto;
  margin-top: 40px;
  width: 70%;



  .content {
    border: 1px solid grey;
    padding: 10px;

    p {
      margin: 9px 0px;
    }
  }

  .info {
    width: 80%;
    margin: 0 auto;

    .final {
      text-align: center;
      height: 300px;
      width: 100%;
    }
  }

  .button {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
