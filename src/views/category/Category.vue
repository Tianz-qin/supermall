<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <b-scroll id="tab-content"
                :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"/>
          <tab-control :titles="['综合', '新品', '销量']"/>
          <tab-content-detail :category-detail="showCategoryDetail"
                              @itemClick="tabClick"/>
        </div>

      </b-scroll>
    </div>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import BScroll from "components/common/bscroll/BScroll";
  import TabControl from "components/content/tabControl/TabControl";
  import TabMenu from "./childComps/TabMenu";
  import TabContentCategory from "./childComps/TabContentCategory";
  import TabContentDetail from "./childComps/TabContentDetail";

  import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

  import {POP, SELL, NEW} from "common/const";
  import {tabControlMixin} from "common/mixin";

  export default {
    name: "Category",
    data(){
      return{
        categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    mixins: [tabControlMixin],
    components:{
      NavBar,
      TabMenu,
      BScroll,
      TabContentCategory,
      TabControl,
      TabContentDetail
    },
    computed:{
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []

        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    created() {
      // 1.请求分类数据
      this._getCategory()
    },
    methods:{
      _getCategory() {
        getCategory().then(res => {
          // 1.获取分类数据
          this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            //总数据下面有16个根据分类数据请求的子数据
            this.categoryData[i] = {
              subcategories: {}, //子数据
              //推荐数据
              categoryDetail: {
                'pop': [], //综合
                'new': [], //新品
                'sell': [] //销量
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data //获得子数据
          //对象的扩展运算符（...）用于取出参数对象的所有*可遍历属性*，拷贝到当前对象之中。
          //- =头大。屏蔽了一样可以正常运行，所以屏蔽掉
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail(POP)
          this._getCategoryDetail(SELL)
          this._getCategoryDetail(NEW)
        })
      },
      _getCategoryDetail(type) {
        // 1.从分类数据中获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          console.log(res);
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          //赋值之后再进行一波扩展赋值操作
          this.categoryData = {...this.categoryData}
        })
      },
      selectItem(index){
        this._getSubcategories(index)
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>
