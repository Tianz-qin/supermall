<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    @click.native="allChange"
                    :isChecked="allChecked"/>
      <span>全选</span>
    </div>

    <div>合计：{{totalPrice}}</div>

    <div class="calculate" @click="calcClick">结算({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    props:{
      checkLength:{
        type:Number,
        default(){
          return 0
        }
      }
    },
    methods:{
      allChange(){
        const checker = this.allChecked
        this.$store.commit('allChange', !checker)
      },
      calcClick(){
        if(this.deChecked){
          this.$toast.show('请先添加商品',2000)
        }
      }
    },
    computed:{
      ...mapGetters(['cartList', 'allChecked', 'deChecked']),
      totalPrice(){
        return '￥' + this.cartList.filter(item=>item.checked).reduce(
          (previousValue, item) => previousValue + item.price * item.count,0
        ).toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    font-size: 14px;
    display: flex;
    background-color: #eee;
    height: 40px;
    line-height: 40px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  .check-button{
    height: 20px;
    width: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .calculate{
    margin-left: auto;
    background-color: orangered;
    border-radius: 20%;
    padding: 0 5px;
  }
</style>
