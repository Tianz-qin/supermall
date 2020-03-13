<template>
<!--  props->titles
   div -> 根据titles v-for 遍历 div->span{{title}}-->
  <div class="tab-control">
<!--    动态绑定类名-->
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         @click="itemClick(index)"
         :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        // console.log(this.currentIndex);
      //  把这个函数传给父组件
        this.$emit('tabClick', index);
      }
    },
    props:{
      titles:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    height: 44px;
  }

  .tab-control-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
