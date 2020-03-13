<template>
  <div id="detail">
    <detail-nav-bar @itemClick="itemClick" ref="navBar"/>
<!--    用BSrcoll之前得给个固定高度-->
    <b-scroll class="content"
              ref="scroll"
              :prototype="3"
              @scroll="contentScroll" :pullUpLoad="true">
      <detail-swiper  :top-images="topImages" />
      <detail-base-info :goods="goods"/>
      <detail-shop-info  :shop="shop"/>
      <detail-goods-info @imageLoad="imageLoad" :detail-info="detailInfo"/>
      <detail-param-info :param-info="goodsParam" ref="param"/>
      <detail-comment-info  :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </b-scroll>

    <back-top class="back-top" v-show="isShowBackTop"
              @click.native="backClick"/>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import BScroll from "components/common/bscroll/BScroll";

  import GoodsList from 'components/content/goods/GoodsList'

  import {itemListenerMixin, backTopMixin} from "common/mixin";
  import {debounce} from "common/untils";

  import {mapActions} from 'vuex'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      BScroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo: {},
        goodsParam: {},
        commentInfo:{},
        recommends: [],

        currentIndex:0,
        oldIndex:0,
        //PS:用数组的话会方便很多
        paramOffset:0,
        commentOffset:0,
        recommendOffset:0,
        debounceDetail: null
      }
    },
    //混合的使用
    mixins:[itemListenerMixin, backTopMixin],
    created() {
      //1.从路径中获取参数iid
      this.iid = this.$route.params.iid;

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res=>{
        // console.log(res);
        //获取数据
        const data = res.data.result
        //1.获取顶部的图片轮播数据
        this.topImages = res.data.result.itemInfo.topImages;

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //  3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

      //  4.保存商品的详细信息
        this.detailInfo = data.detailInfo

      //  5.创建商品参数信息的对象
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //  6.取出评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
      });
      //3.请求推荐商品信息
      getRecommend().then(res=>{
        this.recommends = res.data.data.list
        // console.log(res);
      })


      this.debounceDetail = debounce(()=>{
        //$el 根组件
        this.paramOffset = -(this.$refs.param.$el.offsetTop - 44)
        this.commentOffset = -(this.$refs.comment.$el.offsetTop - 44)
        this.recommendOffset = -(this.$refs.recommend.$el.offsetTop - 44)
        console.log(this.paramOffset);
        console.log(this.commentOffset);
        console.log(this.recommendOffset);
      }, 200);
    },
    mounted() {

    },
    updated() {

    },
    methods:{
      ...mapActions(['addToCart']),
      //这个也是防抖功能，并没有跟mixin重复，这个是goods，mixin的是swiper图片
      imageLoad(){
        console.log('goods图片加载完成了');
        this.$refs.scroll.refresh();
        this.debounceDetail();
      },
      contentScroll(position){
        // console.log(position.y);
        //是否显示返回顶部按钮
        this.listenShowBackTop(position);

        //从这里一直修改组件属性对性能有点不友好，优化一下
        //根据位置修改tanBar Index
        if(position.y <= this.recommendOffset){
          this.currentIndex = 3
        }else if(position.y <= this.commentOffset){
          this.currentIndex = 2
        }else if (position.y <= this.paramOffset){
          this.currentIndex = 1
        }else{
          this.currentIndex = 0
        }
        if(this.currentIndex !== this.oldIndex){
          // console.log('修改参数');
          this.$refs.navBar.currentIndex = this.currentIndex
          this.oldIndex = this.currentIndex
        }
      },
      itemClick(index){
        switch (index) {
          case 0:
            this.$refs.scroll.scrollTo(0, 0, 500)
            break
          case 1:
            this.$refs.scroll.scrollTo(0, this.paramOffset, 500)
            break
          case 2:
            this.$refs.scroll.scrollTo(0, this.commentOffset, 500)
            break
          case 3:
            this.$refs.scroll.scrollTo(0, this.recommendOffset, 500)
            break

        }
      },
    //  加入购物车
      addCart(){
        //  1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0]
        product.desc = this.goods.desc
        product.title = this.goods.title
        product.price = this.goods.realPrice
        product.iid = this.iid

      //  2.将商品添加到购物车里面
        this.addToCart(product).then(res=>{
          this.$toast.show(res, 2000)
        })
      }
    },
    // destroyed() {
    //   //销毁时停止图片刷新
    //   this.$bus.$off('imageLoad',this.refresh)
    // }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 58px);
  }

  .back-top{
    position: fixed;
    right: 10px;
    bottom: 45px;
  }
</style>
