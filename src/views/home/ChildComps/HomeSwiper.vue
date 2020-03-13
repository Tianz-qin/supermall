<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  import {debounce} from "../../../common/untils";

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          console.log('----轮播图');
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
