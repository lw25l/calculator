import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseManage from '../views/CourseManage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/course', name: 'course', component: CourseManage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
