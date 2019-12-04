import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/addRegist',
        name: 'addRegist',
        component: () => import('@/views/AddRegist/AddRegist')
      },
      {
        path: '/registInfo',
        name: 'registInfo',
        component: () => import('@/views/ShowRegists/ShowRegists')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/Other/PageOne')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/Other/PageTwo')
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
