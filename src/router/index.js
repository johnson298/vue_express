import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // ==============================================================
    // MAIN LAYOUTS ROUTES authRequired: true
    // ==============================================================
    path: '',
    component: () => import('@/layouts/Main.vue'),
    meta: {
      authRequired: true
    },
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/Home'),
        meta: {
          breadcrumb: [{ title: "Home", url: "/" }],
          pageTitle: "Home"
        }
      }
    ]
  },

  // ==============================================================
  // MAIN LAYOUTS ROUTES authRequired: false
  // ==============================================================
  {
    path: "",
    component: () => import("@/layouts/full-page/FullPage.vue"),
    children: [
      {
        path: "/auth/login",
        name: "pageLogin",
        component: () => import("@/views/auth/Login.vue")
      },
      {
        path: "/auth/register",
        name: "pageRegister",
        component: () => import("@/views/auth/Register.vue")
      },
      {
        path: "/pages/error-404",
        name: "pageError404",
        component: () => import("@/views/pages/_404.vue")
      }
    ],
    meta: {
      authRequired: false
    }
  },
  {
    path: '*',
    redirect: "/pages/error-404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
