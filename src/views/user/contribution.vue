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
      <el-form ref="form" status-icon :model="form" label-width="80px">
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
            <el-input type="textarea" rows="5" v-model="form.keyword"></el-input>
          </el-form-item>
        </div>
        <div class="info" v-if="active===3">
          <div class="header"><h3>输入稿件信息</h3></div>
          <el-form-item label="中文摘要" prop="abstract_cn">
            （请在下框中输入稿件中文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="6" v-model="form.abstract_cn"></el-input>
          </el-form-item>
          <el-form-item label="英文摘要" prop="abstract_eng">
            （请在下框中输入稿件英文摘要,或从您的论文中复制过来）
            <el-input type="textarea" rows="6" v-model="form.abstract_eng"></el-input>
          </el-form-item>
        </div>
        <div class="info" v-if="active===4">
          <div class="header">
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
          <p>投稿人：{{ form.contributor_name }}</p>
          <p>稿件题目：{{ form.paper_title }}</p>
          <p>中文摘要：{{ form.abstract_cn }}</p>
          <p>英文摘要：{{ form.abstract_eng }}</p>
          <p>拟投栏目：{{ form.lable }}</p>
          <p>稿件关键字：{{ form.keyword }}</p>
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
    return {
      active: 0,
      options: [{
        value: '网络空间安全',
        label: '网络空间安全'
      }, {
        value: '先进计算与数据处理',
        label: '先进计算与数据处理'
      }, {
        value: '热点与综述',
        label: '热点与综述'
      }, {
        value: '开发研究与工程应用',
        label: '开发研究与工程应用'
      }, {
        value: '体系结构与软件技术',
        label: '体系结构与软件技术'
      }, {
        value: '移动互联与通信技术',
        label: '移动互联与通信技术'
      }, {
        value: '人工智能与模式识别',
        label: '人工智能与模式识别'
      }, {
        value: '图形图像处理',
        label: '图形图像处理'
      }],
      form: {
        contributor_id: '',
        contributor_name: '',
        create_time: '',
        update_time: '',
        paper_title: '',
        abstract_eng: '',
        abstract_cn: '',
        paper_content: '',
        channel: '',
        keyword: '',
        advice: ''
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
      this.form.create_time=this.getNewDate()
      this.form.update_time=this.getNewDate()
      this.form.contributor_id=this.$store.state.username
      console.log(this.form)
      this.$http
        .get("http://localhost:8080/ProjectWeb/PaperServlet", {params:
            { method: 'save',
              contributor_id: this.form.contributor_id,
              paper_author: this.form.contributor_name,
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
          console.log("投稿成功")
          this.active = 7;
        }).catch(err =>{
        console.log(err.data)
      });
    },
    //获取特定格式的日期时间  "yyyy-MM-dd HH:MMM:SS"
    getNewDate() {
      var date = new Date();
      // console.log(date);
      var transverse = "-";
      var Verticalpoint = ":";
      var month = date.getMonth() + 1;//获取月份
      var strDate = date.getDate();//获取具体的日期
      var strHour = date.getHours();//获取...钟点
      var strMinute = date.getMinutes();//获取分钟数
      var strSeconde = date.getSeconds();//获取秒钟数
      //判断获取月份 、 具体的日期 、...钟点、分钟数、秒钟数 是否在1~9
      //如果是则在前面加“0”
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      // console.log(month);
      if (strDate >= 1 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (strHour >= 1 && strHour <=9) {
        strHour = "0" + strHour
      }
      // console.log(strHour);
      if (strMinute >= 1 && strMinute <= 9) {
        strMinute = "0" + strMinute;
      }

      if (strSeconde >= 1 && strSeconde <= 9) {
        strSeconde = "0" + strSeconde;
      }
      //时间日期字符串拼接
      var NewDate = date.getFullYear() + transverse + month + transverse + strDate + " " +
        strHour + Verticalpoint + strMinute + Verticalpoint + strSeconde;
      //返回拼接字符串
      return NewDate;
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
      text-align: center;
      .upload-demo{
        margin-top: 100px;
      }
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
