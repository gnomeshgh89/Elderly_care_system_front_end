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

      },
      {
        //修改密码
        path:'/changePwd',
        component:() =>import('../views/login/changePwd.vue'),
        meta: { title: '修改密码' }

      },
      {
        //查看房间监控
        path:'/room',
        component:() =>import('../views/page/monitor/room.vue'),
        meta: { title: '实时查看房间监控' }
      },
      {
        //查看厨房监控
        path:'/kitchen',
        component:() =>import('../views/page/monitor/kitchen.vue'),
        meta: { title: '实时查看厨房监控' }
      },
      {
        //查看客厅监控
        path:'/living',
        component:() =>import('../views/page/monitor/living.vue'),
        meta: { title: '实时查看客厅监控' }
      },
      {
        //查看餐厅监控
        path:'/dining',
        component:() =>import('../views/page/monitor/dining.vue'),
        meta: { title: '实时查看餐厅监控' }
      },
      {
        //查看工作人员列表
        path:'/workers',
        component:() =>import('../views/page/work/workers.vue'),
        meta: { title: '查看工作人员列表' }
      },
      {
        //添加工作人员
        path:'/addWorker',
        component:() =>import('../views/page/work/addWorker.vue'),
        meta: { title: '添加工作人员' }
      },
      {
        //工作人员详细信息
        path:'/workerMes',
        component:() =>import('../views/page/work/workerMes.vue'),
        meta: { title: '工作人员详细信息' }
      },
      {
        //工作人员分析图
        path:'/workerImage',
        component:() =>import('../views/page/work/workerImage.vue'),
        meta: { title: '工作人员分析图' }
      },
      {
        //日程表
        path:'/calendar',
        component:() =>import('../views/page/schedule/calendar.vue'),
        meta: { title: '日程表' }
      },
      {
        //突发情况
        path:'/emergencies',
        component:() =>import('../views/page/record/emergencies.vue'),
        meta: { title: '突发情况' }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
