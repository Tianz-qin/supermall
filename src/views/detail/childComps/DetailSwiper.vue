<template>
  <swiper >
    <swiper-item class="detail-swiper" v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{
        moreImg:0
      }
    },
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }
</style>
