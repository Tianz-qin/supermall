<template>
<!-- ref/children -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "BScroll",
    data(){
      return {
        scroll: null
      }
    },
    props:{
      prototype:{
        type: Number,
        default() {
          //0、1不监听，2（手指滚动，惯性滑动不监听），3全部监听
          return 0;
        }
      },
      pullUpLoad:{
        type:Boolean,
        default() {
          return false;
        }
      },
      data:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        prototype:this.prototype,
        //开启拉到底部事件
        pullUpLoad:this.pullUpLoad,
        //button什么情况下都可以点击，div只有true情况下才可以点击
        click:true
      });

      //2.监听滚动的位置
      this.scroll.on('scroll',position=>{
        //事件发生时,调用该回调函数
        // console.log(position);
        this.$emit('scroll', position)
      });
      this.scroll.on('pullingUp',()=>{
        this.$emit('addPage', this.scroll);

      })


    },
    methods:{
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        this.scroll.refresh();
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    /*设置窗口高度*/
    height: calc(100% - 49px);
    overflow: hidden;
  }
</style>
