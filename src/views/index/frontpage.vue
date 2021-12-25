<template>
 <div class="page">
      <div v-for="item in headerlist" class="box" >
        <p class="header">{{item.name}}</p>
        <div class="main">
          <div v-for="itemindex in item.list" class="card" @click="click(itemindex)">
            <div>
              <h4 style="color: #6b705c">{{ itemindex.paper_title}}</h4>
              <p style="color: #5a5e66;font-size: 15px">{{ itemindex.create_time}}</p>
              <p style="color: #5a5e66;font-size: 15px">{{ '作者: '+itemindex.contributor_name}}</p>
              <p style="color: #5a5e66;font-size: 15px">{{'关键字: '+itemindex.keyword}}</p>
            </div>
          </div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      headerlist:[
        {name:'网络空间安全',value:1,list:[]},
        {name:'先进计算与数据处理',value:2,list:[]},
        {name:'热点与综述',value:3,list:[]},
        {name:'开发研究与工程应用',value:4,list:[]},
        {name:'体系结构与软件技术',value:5,list:[]},
        {name:'移动互联与通信技术',value:6,list:[]},
        {name:'人工智能与模式识别',value:7,list:[]},
        {name:'图形图像处理',value:8,list:[]}],
    }
  },
  mounted() {
    this.initData();
  },
  methods:{
    initData(){
      for(let i = 0; i < 8 ; i++) {
        //假数据
        this.headerlist[i].list=[{
          id: 1,
          paper_title: 'nihao',
          create_time: '2019-1-3',
          contributor_name: 'xiao ji li li',
          key: 'kfjdslafjkdsnf;a'
        }]
        console.log(i);
        //--假数据
        this.$http
          .get("http://localhost:8080/ProjectWeb/PaperServlet", {
            params: {
              method: '',
              channel: i+1
            }
          }, {emulateJSON: true})
          .then((response) => {
            this.headerlist[i].list = response.data;
          }).catch(err => {
          console.log(err.data)
        });
      }
    },
    click(index){
      console.log(index.id)
      this.$router.push({
        path: '/index/desc',
        // name: 'mallList',
        query: {
          params:index
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  .box{
    margin: 0 auto;
    padding-left: 100px;
    .header{
      margin: 0px;
      margin-top: 20px;
      line-height: 60px;
      height: 60px;
      width: 200px;
      padding-left: 20px;
      text-align: left;
      background-color: #b7b7a4;
    }
    .main{
      .card{
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 4px;
        display: inline-block;
        margin-left: 18px;
        vertical-align: top;
        margin-top: 20px;
        height: 300px;
        width: 300px;
        padding: 20px;

      }
    }
  }
}

</style>
