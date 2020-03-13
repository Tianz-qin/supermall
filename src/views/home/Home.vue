<template>
  <div id="home">
<!--    导航-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <TabControl class="tab-control Fixed"
                :titles="['流行','新款', '精选']"
                @tabClick='tabClick' v-show="isTabFixed"
                ref="tabControl1"/>

<!--    BS滚动条-->
    <BScroll ref="scroll" :prototype="3"
             :pullUpLoad = 'true'
             @scroll="contentScroll"
             @addPage="addPage">
      <!--    轮播图-->
      <home-swiper :banners="banner" @swiperImageLoad="showOffset"/>
      <!--    推荐信息栏-->
      <recommend-view :recommends=recommend />
      <!--    流行榜-->
      <FeatureView/>
      <TabControl class="tab-control"
                  :titles="['流行','新款', '精选']"
                  @tabClick='tabClick'
                  ref="tabControl2"/>

      <!--    商品数据展示-->
<!--      计算属性-->
      <goods-list :goods="showGoods"/>
    </BScroll>

<!--    返回顶部-->
<!--    组件不能直接监听，要加上.native:监听组件根元素的源生事件-->
    <back-top v-show="isShowBackTop" @click.native="backClick"/>

<!--    ul>li{列表$}*100-->

  </div>
</template>

<script>
  import HomeSwiper from "./ChildComps/HomeSwiper";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import BScroll from 'components/common/bscroll/BScroll';
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {itemListenerMixin, backTopMixin } from "common/mixin";

  import {getHomeMultiData, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      BScroll
    },
    //混用
    mixins:[itemListenerMixin, backTopMixin],
    data(){
      return {
        banner: [],
        recommend:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType: 'pop',
        offsetTop:0,
        isTabFixed: false,
        saveY:0,
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    //生命周期函数，页面创建完成后发送请求,还没挂载模板不能拿取元素
    created() {
    //  1.请求多个数据
      this.getHomeMultiData();

      //2.请求商品数据(使用methods)
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    //组件创建完后调用
    mounted() {
      //3.一直监听item中图片加载完成
      // this.refresh = debounce(this.$refs.scroll.refresh, 200);
      // this.$bus.$on('imageLoad',this.refresh)
    },
    activated() {
      //滚动完了之后要记得刷新
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh();
    },
    deactivated() {
      //记录位置信息
      this.saveY = this.$refs.scroll.scroll.y;
      this.$bus.$off('imageLoad',this.refresh)
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },

      contentScroll(position){
        // console.log(position.y);
        //是否让backTop组件显示
        this.listenShowBackTop(position);
      //  是否让吸附顶部的tabControl组件显示
        this.isTabFixed = -(position.y) >= this.offsetTop
      },

      addPage(){
        this.getHomeGoods(this.currentType);
      },

      showOffset(){
        //获取组件距离顶部的高度
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop - 44;
        // console.log(this.offsetTop);
      },

      /**
      网络请求相关方法
       */
      getHomeMultiData(){
        getHomeMultiData().then(res => {
          // console.log(res);
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

          //完成上拉加载更多
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    /*视口高度*/
    height: 100vh;
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
    z-index: 9;
  }

  .Fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
</style>
