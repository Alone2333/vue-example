import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'


// 3、创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/home/newsList',
      component: NewsList
    },
    {
      path: '/home/newsInfo/:id',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认类叫做router-link-active


})

export default router