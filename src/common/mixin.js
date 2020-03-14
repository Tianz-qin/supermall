import {debounce} from "./untils";
import BackTop from "components/content/backTop/BackTop";
import {POP, NEW, SELL} from "./const";


//监听事件总线：图片载入完了之后进行刷新
export const itemListenerMixin = {
  data(){
    return{
      refresh:null
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on('imageLoad',this.refresh)
  }
}

//对backTop进行封装
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    listenShowBackTop(position){
      this.isShowBackTop = position.y <= -700
    },
    backClick(){
      //绕口令来啦，scroll拿到组件对象
      //scrollTO调用组件methods绑定的方法：this.scroll.scrollTo(x, y, time)
      this.$refs.scroll.scrollTo(0,0, 500)
    }
  }

}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
