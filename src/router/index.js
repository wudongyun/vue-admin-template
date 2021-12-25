import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path:'/',
    redirect: '/index/frontpage',
    hidden: true
  },
  {
    name: 'index',
    path: '/index',
    hidden: true,
    component:()=>import('@/views/index/index'),
    redirect: '/index/frontpage',
    children: [
      {
        name: 'frontpage',
        path: '/index/frontpage',
        component: () => import('@/views/index/frontpage'),
      },
      {
        name: 'help',
        path: '/index/help',
        component: () => import('@/views/index/help'),
      },
      {
        name: 'connect',
        path: '/index/connect',
        component: () => import('@/views/index/connect'),
      },
      {
        name: 'desc',
        path: '/index/desc',
        component: () => import('@/views/index/desc'),
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    component:()=>import('@/views/user/index'),
    redirect: '/user/contribution',
    children: [
      {
        name: 'contribution',
        path: '/user/contribution',
        component: () => import('@/views/user/contribution'),
      },
      {
        name: 'information',
        path: '/user/information',
        component: () => import('@/views/user/information'),
      },
      {
        name: 'table',
        path: '/user/table',
        component: () => import('@/views/user/table'),
      },
      {
        name: 'des',
        path: '/user/des',
        component: () => import('@/views/user/des'),
      },
      {
        name: 'change',
        path: '/user/change',
        component: () => import('@/views/user/change'),
      }
    ]
  },
  {
    name: 'review',
    path: '/review',
    component:()=>import('@/views/review/index'),
    redirect: '/review/table',
    children: [
      {
        name: 'table',
        path: '/review/table',
        component: () => import('@/views/review/table'),
      },
      {
        name: 'information',
        path: '/review/information',
        component: () => import('@/views/review/information'),
      },
      {
        name: 'des',
        path: '/review/des',
        component: () => import('@/views/review/des'),
      },
      {
        name: 'comment',
        path: '/review/comment',
        component: () => import('@/views/review/comment'),
      }
    ]
  },
  {
    name: 'admin',
    path: '/admin',
    component:()=>import('@/views/admin/index'),
    redirect: '/admin/thesis',
    children: [
      {
        name: 'thesis',
        path: '/admin/thesis',
        component: () => import('@/views/admin/thesis'),
      },{
        name: 'des_thesis',
        path: '/admin/des_thesis',
        component: () => import('@/views/admin/des_thesis'),
      },
      {
        name: 'des',
        path: '/admin/des',
        component: () => import('@/views/admin/des'),
      },
      {
        name: 'change_thesis',
        path: '/admin/change_thesis',
        component: () => import('@/views/admin/change_thesis'),
      },
      {
        name: 'change',
        path: '/admin/change',
        component: () => import('@/views/admin/change'),
      },
      {
        name: 'user',
        path: '/admin/user',
        component: () => import('@/views/admin/user'),
      },
      {
        name: 'review',
        path: '/admin/review',
        component: () => import('@/views/admin/review'),
      },
      {
        name: 'information',
        path: '/admin/information',
        component: () => import('@/views/admin/information'),
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
