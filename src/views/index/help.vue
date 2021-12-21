<template>
  <div class="page">
    <div class="left">
      <div class="describe">投稿指南</div>
      <div class="content">
        <p> 为使来稿更符合国家科技期刊格式标准，避免多次退修，特向作者提出以下要求：
        </p>
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
        <p> 8. 本刊现入编多种网络数据库，作者著作权使用费与本刊稿酬一次性给付，作者如不同意将文章入编，投稿时敬请说明。
        <p class="footer"> 《PaparPlane》编辑部
        </p>
        <p class="footer"> 发布日期：2021-12-05
        </p>


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
  name: "help",
  data() {
    return {}
  }
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
  bottom: 825px;
  right: -72%;
  background-color: #b7b7a4;
  padding: 10px;
  .logo {
    width: 100%;
    height: 300px;
  }
}
</style>
