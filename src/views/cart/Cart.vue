<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{checkLength}})</div>
    </nav-bar>
<!--    商品的列表-->
    <b-scroll class="content" ref="scroll">
      <cart-list/>
    </b-scroll>
<!--    底部汇总-->
    <cart-bottom-bar :check-length="checkLength"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import BScroll from "components/common/bscroll/BScroll";

  import CartList from "./ChildComps/CartList";
  import CartBottomBar from "./ChildComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      BScroll,
      CartList,
      CartBottomBar
    },
    data(){
      return{

      }
    },
    computed:{
      //getters的数组语法
      //如果想将一个getter属性另取一个名字，使用对象形式
      ...mapGetters(['cartLength','cartList']),
      checkLength(){
        return this.cartList.filter(item=>item.checked).length
      }
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    height: calc(100vh - 44px - 50px - 40px);
  }
</style>
