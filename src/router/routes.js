import Home from '../views/common/Home.vue'
import router from "@/router/index";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue'),
        meta: {auth: false}
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: "",
                redirect: "/login",
                meta: {auth: false}
            },
            {
                // 老人列表
                path: '/oldMen',
                component: () => import('../views/page/old/oldMan.vue'),
                meta: { auth: true,title: '老人列表'}
            },
            // {
            //     //添加老人
            //     path:'/addOld',
            //     component:() =>import('../views/page/old/addOld.vue'),
            //     meta: {auth: true, title: '添加老人' }
            // },
            {
                // 老人统计分析图
                path:'/oldImage',
                component:() =>import('../views/page/old/oldImage.vue'),
                meta:{auth: true,title:'老人统计分析图'}
            },
            // {
            //     //查看具体老人信息
            //     path:'/oldMes',
            //     component:() =>import('../views/page/old/oldMes.vue'),
            //     meta: {auth: true, title: '查看老人信息' }
            // },
            {
                //查看管理员信息
                path:'/managerInfo',
                component:() =>import('../views/page/manager/managerInfo.vue'),
                meta: {auth: true, title: '查看管理员信息' }

            },
            {
                //修改密码
                path:'/changePwd',
                component:() =>import('../views/login/changePwd.vue'),
                meta: { auth: true,title: '修改密码'}

            },
            {
                //查看房间监控
                path:'/room',
                component:() =>import('../views/page/monitor/room.vue'),
                meta: { auth: true,title: '实时查看房间监控'}
            },
            {
                //查看厨房监控
                path:'/kitchen',
                component:() =>import('../views/page/monitor/kitchen.vue'),
                meta: { auth: true,title: '实时查看厨房监控'}
            },
            {
                //查看客厅监控
                path:'/living',
                component:() =>import('../views/page/monitor/living.vue'),
                meta: {auth: true, title: '实时查看客厅监控' }
            },
            {
                //查看餐厅监控
                path:'/dining',
                component:() =>import('../views/page/monitor/dining.vue'),
                meta: { auth: true,title: '实时查看餐厅监控'}
            },
            {
                //查看工作人员列表
                path:'/workers',
                component:() =>import('../views/page/work/workers.vue'),
                meta: { auth: true,title: '查看工作人员列表'}
            },
            // {
            //     //添加工作人员
            //     path:'/addWorker',
            //     component:() =>import('../views/page/work/addWorker.vue'),
            //     meta: {auth: true, title: '添加工作人员' }
            // },
            // {
            //     //工作人员详细信息
            //     path:'/workerMes',
            //     component:() =>import('../views/page/work/workerMes.vue'),
            //     meta: { title: '工作人员详细信息' ,auth: true}
            // },
            {
                //工作人员分析图
                path:'/workerImage',
                component:() =>import('../views/page/work/workerImage.vue'),
                meta: {auth: true, title: '工作人员分析图' }
            },
            {
                //日程表
                path:'/calendar',
                component:() =>import('../views/page/schedule/calendar.vue'),
                meta: { auth: true,title: '日程表' }
            },
            {
                //突发情况
                path:'/emergencies',
                component:() =>import('../views/page/record/emergencies.vue'),
                meta: {auth: true, title: '突发情况' }
            },
            {
                //突发情况
                path:'/old_face',
                component:() =>import('../views/page/old/old_face.vue'),
                meta: {auth: true, title: '人脸采集' }
            },
        ]
    }
]

export default routes