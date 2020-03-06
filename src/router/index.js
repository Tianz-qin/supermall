import Vue from "vue";
import VueRouter from "vue-router";

//路由懒加载的写法，
//异步模块获取，打包的时候每次访问这个路由的时候会单调单个文件，按需加载。
const Home = ()=>import('../views/home/Home.vue')
const Cart = ()=>import('../views/cart/Cart')
const Category = ()=>import('../views/category/Category')
const Profile = ()=>import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter)

//2. 创建router
const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/Category',
    component: Category
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = new VueRouter({
    routes,
  mode: 'history'
})

export default router
