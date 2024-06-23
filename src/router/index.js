import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/components/DashBoard/DashBoard.vue'
import Tasks from "@/components/Tasks.vue";
import UsersLists from '@/views/UsersLists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dash-board',
      component: DashBoard,
    },
    {
      path: '/tasks',
      name: 'tasks-page',
      component: Tasks,
    },
    {
      path: '/users',
      name: 'users-page',
      component: UsersLists
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
