<template>
  <div class="page">
    <div class="header"><h3>修改稿件信息</h3></div>
    <div class="form">
      <el-form ref="form" status-icon :model="form" label-width="80px">
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
          <el-form-item label="投稿人" prop="contributor_name">
            <el-input type="text" v-model="form.contributor_name"></el-input>
          </el-form-item>

          <el-form-item label="稿件题目" prop="paper_title">
            <el-input type="text" v-model="form.paper_title"></el-input>
          </el-form-item>

          <el-form-item label="关键字" prop="keyword" label-width="100px">
            （请在下框中输入稿件中文关键词,注意：多个关键词用分号分割。）
            <el-input type="textarea" rows="1" v-model="form.keyword"></el-input>
          </el-form-item>
          <el-form-item label="中文摘要" prop="abstract_cn">
            （请在下框中输入稿件中文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="2" v-model="form.abstract_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文摘要" prop="abstract_eng">
            （请在下框中输入稿件英文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="2" v-model="form.abstract_eng"></el-input>
          </el-form-item>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">注意：在上面上传稿件的pdf版本</div>
          </el-upload>
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
  data(){
    return {
      form:'',
      options: [{
        value: '选项1',
        label: '网络空间安全'
      }, {
        value: '选项2',
        label: '先进计算与数据处理'
      }, {
        value: '选项3',
        label: '热点与综述'
      }, {
        value: '选项4',
        label: '开发研究与工程应用'
      }, {
        value: '选项5',
        label: '体系结构与软件技术'
      }, {
        value: '选项6',
        label: '移动互联与通信技术'
      }, {
        value: '选项7',
        label: '人工智能与模式识别'
      }, {
        value: '选项8',
        label: '图形图像处理'
      }],

    }
  },
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
    },
    change(){
      this.$http
        .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
            { method: 'save',
              id: this.form.id,
              contributor_id: this.form.contributor_id,
              contributor_name: this.form.contributor_name,
              create_time: this.form.create_time,
              update_time: this.form.update_time,
              paper_title: this.form.paper_title,
              abstract_eng: this.form.abstract_eng,
              abstract_cn: this.form.abstract_cn,
              paper_content: this.form.paper_content,
              channel: this.form.channel,
              keyword: this.form.keyword
            }}, {emulateJSON: true})
        .then((response) => {
        }).catch(err =>{
        console.log(err.data)
      });
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
    .upload-demo{
      text-align: center;
    }
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
