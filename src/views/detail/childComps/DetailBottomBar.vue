<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"/>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"/>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"/>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        // console.log('加入购物车');
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 58px;
    text-align: center;
    display: flex;
    background-color: #fff;

    /*position: fixed;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 0;*/
    position: relative;
  }

  .bar-item{
    flex: 1;
    display: flex;
  }

  .bar-item>div{
    flex: 1;
  }

  .bar-left .text{
    font-size: 13px;
  }

  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    /*position:0 0 size:100%*/
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service{
    background-position: 0 -54px;
  }

  .bar-left .shop{
    /*background-position属性设置背景图像的起始位置。宽高*/
    background-position: 0 -98px;
  }

  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy{
    background-color: #f69;
  }

  .sport-ball{
    position: absolute;
    left: 225px;
    bottom: 20px;
  }

</style>
