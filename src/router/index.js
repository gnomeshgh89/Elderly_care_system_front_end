import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/common/Home.vue'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from "@/router/routes"

Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

//顶部进度条样式
NProgress.configure({
  showSpinner: false,
  speed: 800,
});


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由卫士

router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta.auth && !store.state.user.token ? next("/login") : next()
})

router.afterEach(() => {
  NProgress.done()
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
