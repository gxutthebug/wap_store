import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/layout/home', // 二级路由默认
    component: () => import('@/views/layout'),
    children: [
      {
        path: 'home', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'assemble',
        name: 'assemble',
        component: () => import('@/views/assemble')
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('@/views/shop')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: 'sort',
        name: 'sort',
        component: () => import('@/views/sort')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/yzmdl',
    name: 'yzmdl',
    component: () => import('@/views/login/yzmdl')
  },
  {
    path: '/yszc',
    name: 'yszc',
    component: () => import('@/views/login/yszc')
  },
  {
    path: '/zcxy',
    name: 'zcxy',
    component: () => import('@/views/login/zcxy')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  },
  {
    path: '/assembledetail',
    name: 'assembledetail',
    component: () => import('@/views/assembledetail')
  },
  {
    path: '/selfhelp',
    name: 'selfhelp',
    component: () => import('@/views/selfhelp')
  },
  {
    path: '/myassemble',
    name: 'myassemble',
    component: () => import('@/views/myassemble')
  },
  {
    path: '/searchlist',
    name: 'searchlist',
    component: () => import('@/views/searchlist')
  },
  {
    path: '/goodsdetail/:id',
    name: 'goodsdetail',
    props: true,
    component: () => import('@/views/goodsdetail')
  },
  {
    path: '/show',
    name: 'show',
    props: true,
    component: () => import('@/views/sort/show')
  }
]

const router = new VueRouter({
  routes
})

export default router
