<template>
  <div>
    <nav-bar class="profile">
      <div slot="center">这肯定是条BUG街</div>
    </nav-bar>
    <div class="profile register">
      <div class="left">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="center">
        <p>登录/注册</p>
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
      <div class="right">
        <img src="~assets/img/common/arrow-left.svg" alt="">
      </div>
    </div>
    <div class="message">
      <div>
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>

    <div class="more">
      <img src="~assets/img/profile/message.svg" alt="">
      <div>我的消息</div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <div>积分商城</div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/vip.svg" alt="">
      <div>会员卡</div>
    </div>

    <div class="more cart">
      <img src="~assets/img/profile/cart.svg" alt="">
      <div>我的购物车</div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <div>下载购物APP</div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Profile",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .profile{
    background-color: var(--color-tint);
    color: #fff
  }
  .register{
    height: 70px;
    display: flex;
  }
  .left{
    height: 70px;
    width: 70px;
  }
  .left img{
    height: 70px;
    width: 70px;
    padding: 5px 5px;
  }

  .center{
    margin-left: 10px;
    padding-top: 10px;
  }

  .center p{
    height: 30px;
    line-height: 30px;
  }
  .center img{
    height: 10px;
    width: 10px;
  }
  .center span{
    font-size: 12px;
  }
  .right{
    margin:auto 20px auto auto;
  }
  .right img{
    height: 40px;
    width: 20px;
  }

  .message{
    display: flex;
    border-bottom: solid 15px rgba(0, 0, 0,.05);
    height: 80px;
  }
  .message div{
    flex: 1;
    color: var(--color-text);
    font-size: 12px;
    padding-top: 15px;
    padding-left: 30px;
  }
  .message span{
    color: orangered;
    font-size: 20px;
  }

  .more{
    height: 30px;
    border-top: 2px solid rgba(0, 0, 0,.05);
    font-size: 13px;
    display: flex;
  }
  .more div{
    margin-top: 9px;
  }
  .more img{
    height: 18px;
    width: 18px;
    margin: 8px 8px auto;
  }

  .cart{
    height: 40px;
    border-top: 10px solid rgba(0, 0, 0,.07);
  }
</style>
