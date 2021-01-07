import Vue from 'vue'
import VueRouter from 'vue-router'
import systemHome from './children/systemHome'
import systemSetting from './children/systemSetting'
import statusSearch from './children/statusSearch'
import deviceManage from './children/deviceManage'
import serialSetting from './children/serialSetting'
import workMode from './children/workMode'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/systemHome',
    component: () => import('../layout/home/index'),
    children: [
      {
        path: '/systemHome',
        name: 'systemHome',
        component: () => import('../views/systemHome/index'),
        children: systemHome
      },
      {
        path: '/systemSetting',
        name: 'systemSetting',
        component: () => import('../views/systemSetting/index'),
        children: systemSetting
      },
      {
        path: '/serialSetting',
        name: 'serialSetting',
        component: () => import('../views/serialSetting/index'),
        children: serialSetting
      },
      {
        path: '/workMode',
        name: 'workMode',
        component: () => import('../views/workMode/index'),
        children: workMode
      },
      {
        path: '/statusSearch',
        name: 'statusSearch',
        component: () => import('../views/statusSearch/index'),
        children: statusSearch
      },
      {
        path: '/deviceManage',
        name: 'deviceManage',
        component: () => import('../views/deviceManage/index'),
        children: deviceManage
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layout/login/index')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  const token = localStorage.getItem('token')
  if (token === '' || token === undefined || token === null) {
    router.push('/login')
    next()
    return
  }
  next()
})

export default router
