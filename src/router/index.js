import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/common/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        // 老人列表
        path: '/oldMen',
        component: () => import('../views/page/old/oldMan.vue'),
        meta: { title: '老人列表' }
      },
      {
        // 老人统计分析图
        path:'/oldImage',
        component:() =>import('../views/page/old/oldImage.vue'),
        meta:{title:'老人统计分析图'}
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
