import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/common/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login/Login.vue')
  },
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
        //添加老人
        path:'/addOld',
        component:() =>import('../views/page/old/addOld.vue'),
        meta: { title: '添加老人' }
      },
      {
        // 老人统计分析图
        path:'/oldImage',
        component:() =>import('../views/page/old/oldImage.vue'),
        meta:{title:'老人统计分析图'}
      },
      {
        //查看具体老人信息
        path:'/oldMes',
        component:() =>import('../views/page/old/oldMes.vue'),
        meta: { title: '查看老人信息' }
      },
      {
        //查看管理员信息
        path:'/managerInfo',
        component:() =>import('../views/page/manager/managerInfo.vue'),
        meta: { title: '查看管理员信息' }

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
