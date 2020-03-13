<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    //具名插槽，要用slot属性替换-->
    <slot name="item-icon" v-if="!isActive"/>
    <slot name="item-icon-active" v-else/>
<!--    动态绑定style，用对象形式-->
    <div v-bind:style="activeStyle">
      <slot name="item-text"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //从模板引用处传入字符串数据path
    props:{
      path:String,
      acolor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {

      }
    },
    computed:{
      isActive(){
        //判断活跃中的组件路径名是否包含模板路径名即上面传进来的参数
        //如果不包含则值为-1
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        //判断是否处于活跃状态从而绑定不同的style对象
        return this.isActive ? {color: this.acolor} : {}
      }
    },
    methods:{
      itemClick(){
        //替换路径名
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
