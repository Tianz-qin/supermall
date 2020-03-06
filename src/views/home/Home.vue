<template>
  <div id="home">
<!--    导航-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
<!--    轮播图空缺-->
    <home-swiper :banners="banner"/>
<!--    推荐信息栏-->
    <recommend-view :recommends=recommend />
<!--    流行榜-->
    <FeatureView/>
    <TabControl class="tab-control"
                :titles="['流行','新款', '精选']"
                @tabClick='tabClick'/>

<!--    商品数据展示-->
    <goods-list :goods="showGoods"/>

<!--    ul>li{列表$}*100-->

  </div>
</template>

<script>
  import HomeSwiper from "./ChildComps/HomeSwiper";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultiData, getHomeGoods} from "network/home";
  import BScroll from 'better-scroll'

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banner: [],
        recommend:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType: 'pop'
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    //生命周期函数，页面创建完成后发送请求,还没挂载模板
    created() {
    //  1.请求多个数据
      this.getHomeMultiData();

      //2.请求商品数据(使用methods)
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    mounted() {

    },
    methods:{
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      /**
      网络请求相关方法
       */
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          console.log(res);
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list
        })
      },
      //封装多一层函数，方便使用请求数据
      getHomeGoods(type){
        //为方便复用，不把页码写死
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res =>{
          //push语法:把数组解构然后添加进第一个数组里面
          //concat函数
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    /*滚着滚着它就缩起来了,原因待查
    大概是基础样式表把这里的样式覆盖掉了*/
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    z-index: 9;
  }

  .tab-control{
    background-color: #ffffff;
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
