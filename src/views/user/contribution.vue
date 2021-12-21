<template>
  <div class="page">
    <el-steps :active=active finish-status="success">
      <el-step title="投稿确认"></el-step>
      <el-step title="投稿须知"></el-step>
      <el-step title="输入文章信息"></el-step>
      <el-step title="输入文章信息"></el-step>
      <el-step title="上传稿件"></el-step>
      <el-step title="附加信息"></el-step>
      <el-step title="信息确认"></el-step>
      <el-step title="投稿完成"></el-step>
    </el-steps>
    <!--     个人信息 -->
    <div class="form">
      <el-form ref="form" status-icon :model="form" :rules="rules" label-width="80px">
        <div v-if="active===0">
          <div class="header"><h3>投稿确认书</h3>
            <p>尊敬的作者，您好！请您认真阅读下面选项，确认每项都同意后才能继续投稿。</p>
          </div>
          <div class="content">
            <p> 为使来稿更符合国家科技期刊格式标准，避免多次退修，特向作者提出以下要求：
            </p>
            <p> 请确认您的论文是原创性的，而且没有在其他刊物或以其它任何方式公开发表过（包括任何文种）。 </p>
            <p> 您论文中的署名顺序已经得到所有作者的确认? </p>
            <p> 请确认您已经仔细参看过投稿须知和版权转让协议，并已按本刊要求进行撰写论文。</p>
            <p> 请确认您的文章不涉及保密问题. </p>
          </div>
        </div>
        <div v-if="active===1">
          <div class="header"><h3>投稿须知</h3>
            <p> 为使来稿更符合国家科技期刊格式标准，避免多次退修，特向作者提出以下要求：
            </p>
          </div>
          <div class="content">
            <p> 1.
              文字描述要简练有条理；文章题目在20个字以内(包括中英文数字及符号)；中文摘要不得少于400字，包括目的、方法、结论3个要素；关键词5个以上，且中文关键词不可以全为缩写的英文字母(可以添加“协议”、“技术”等说明性词语)；文章名、姓名、单位、摘要、关键词需要译成英文，且中英文务必严格对应；图、表要求有图号、图名、表号、表名，并且要在文中引用。
            </p>
            <p> 2. 来稿请注明基金资助情况(基金类别、基金项目名称及编号)、论文获奖情况(重要奖项的论文将给予优先处理和奖励)，获专利的文章请注明专利名称及专利号。
            </p>
            <p> 3.
              作者简介内容为：第一作者姓名，出生年，性别，职称/学位，主要研究方向，E-mail地址；其他作者，职称/学位。标题下方每位作者须标注上相应的单位。单位要具体至二级单位，并给出其所在省份、城市及邮编。文章一经修改完成上传至网站后，作者及单位不得改动。在校研究生投稿必须先征得导师的同意，且导师须在论文中署名。
            </p>
            <p> 4. 参考文献25条以上，从文献1开始，按顺序在正文中逐条引用，文献请按以下规范书写：
            </p>
            <p> (1)刊物：作者名(≤3个全部列出，>3个列前3个后加等). 文章名[J]. 期刊名, 年, 卷(期): 起止页.
            </p>
            <p> (2)书籍：作者名(≤3个全部列出，>3个列前3个后加等). 书名[M]. 出版地: 出版单位, 年.
            </p>
            <p> (3)学位论文：作者名. 论文名[D]. 学校所在城市: 学校, 年.
            </p>
            <p> (4)会议论文集析出文献：作者名(≤3个全部列出，>3个列前3个后加等). 文章名[C]//会议名. 出版地: 出版单位, 年: 页码.
            </p>
            <p> (5)电子文献：作者名(≤3个全部列出，>3个列前3个后加等). 文章名[EB/OL]. (发表或更新年月日)/[引用年月日]. 网址.
            </p>
            <p> 5. 图表和公式应保证清晰，不能用扫描方式录入。图表不用彩色、不用图片格式，图中的中文字体为华文中宋，英文字体为Times New Roman。
            </p>
            <p> 6. 请在文章最后给出前3位作者的联系方式(长期有效的手机、电话及E-mail)。
            </p>
            <p> 7. 所有涉密单位论文须经所在单位保密审查通过后方可在本刊网站投稿，否则，后果自负。</p>
            <p> 8. 本刊现入编多种网络数据库，作者著作权使用费与本刊稿酬一次性给付，作者如不同意将文章入编，投稿时敬请说明。</p>


          </div>
        </div>
        <div class="info" v-if="active===2">
          <div class="header"><h3>输入稿件信息</h3></div>
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
            <el-input type="textarea" rows="4" v-model="form.cnsummary"></el-input>
          </el-form-item>
          <el-form-item label="英文摘要" prop="ensummary">
            （请在下框中输入稿件英文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="4" v-model="form.ensummary"></el-input>
          </el-form-item>
        </div>
        <div class="info" v-if="active===3">
          <div class="header"><h3>输入稿件信息</h3></div>
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
            （请在下框中输入稿件中文关键词,注意：多个关键词用分号分割。）
            <el-input type="textarea" rows="2" v-model="form.cnkeyword"></el-input>
          </el-form-item>
          <el-form-item label="英文关键字" prop="enkeyword" label-width="100px">
            （请在下框中输入稿件英文关键词,注意：多个关键词用分号分割; 顺序中文关键词一致。）
            <el-input type="textarea" rows="2" v-model="form.enkeyword"></el-input>
          </el-form-item>
        </div>
        <div class="info" v-if="active===4">
          <div class="header"><h3>上传稿件</h3></div>
        </div>
        <div class="info" v-if="active===5">
          <div class="header"><h3>附加信息</h3></div>
          <el-form-item label="" prop="advice" label-width="100px">
            如果您有什么特殊要求，可以给在这里留言, 我们会认真考虑您的意见。
            <el-input type="textarea" rows="8" v-model="form.advice"></el-input>
          </el-form-item>
        </div>
        <div class="info" v-if="active===6">
          <div class="header"><h3>稿件确认</h3></div>
          <p>稿件语言：{{ form.language }}</p>
          <p>中文题目：{{ form.cnname }}</p>
          <p>英文题目：{{ form.enname }}</p>
          <p>中文摘要：{{ form.cnsummary }}</p>
          <p>英文摘要：{{ form.ensummary }}</p>
          <p>拟投栏目：{{ form.channel }}</p>
          <p>中文关键字：{{ form.cnkeyword }}</p>
          <p>英文关键字：{{ form.enkeyword }}</p>
        </div>
        <div class="info" v-if="active===7">
          <div class="final">
            <div class="header"><h3>恭喜你，投稿完成!</h3></div>
            <img src="../../assets/images/final.jpeg"></div>
        </div>
        <div class="button">
          <el-button style="margin-top: 12px;" @click="next" v-if="active<6">下一步</el-button>
          <el-button style="margin-top: 12px;" @click="commit('form')" v-if="active===6">确定投稿</el-button>
          <el-button style="margin-top: 12px;" @click="pre" v-if="active>0&&active<7">上一步</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validate = (rule, value, callback) => {
      if (!value) {
        callback(new Error('内容不能为空'));
      }else{
        callback();
      }
    };
    return {
      active: 0,
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
      form: {
        cnname: '',
        enname: '',
        language: '',
        cnsummary: '',
        ensummary: '',
        channel: '',
        cnkeyword: '',
        enkeyword: '',
        advice: ''
      },
      rules: {
        cnname: [{validator: validate, trigger: 'blur'}],
        enname: [{validator: validate, trigger: 'blur'}],
        language: [{validator: validate, trigger: 'blur'}],
        cnsummary: [{validator: validate, trigger: 'blur'}],
        ensummary: [{validator: validate, trigger: 'blur'}],
        channel: [{validator: validate, trigger: 'blur'}],
        cnkeyword: [{validator: validate, trigger: 'blur'}],
        enkeyword: [{validator: validate, trigger: 'blur'}]
      }
    }
  },
  methods: {
    next() {
      if (this.active++ > 7) this.active = 7;
    },
    pre() {
      if (this.active-- < 1) this.active = 0;
    },
    commit(formName) {
      console.log(this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          alert('提交失败');
          return false;
        }
      });
      this.active = 7;
    }
  }
}
</script>

<style lang="scss" scoped>
.el-step__title.is-finish {
  color: #6b705c;
}

.page {
  .form {
    margin: 0px auto;
    margin-top: 40px;
    width: 70%;

    .header {
      margin-top: 150px;
      text-align: center;
    }

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
}
</style>
