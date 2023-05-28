import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'
import Vue from 'vue';
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '<Max />'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const DEFAULT_TITLE = 'Some Default Title';
// router.afterEach((to, from) => {
//     // Use next tick to handle router history correctly
//     // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//     Vue.nextTick(() => {
//         const meta = to.meta as RouteMeta;
//         document.title = meta.title || DEFAULT_TITLE;
//     });
// });

export default router
