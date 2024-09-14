import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '@/views/BlogsView.vue'
import SingleBlogView from '@/views/SingleBlogView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/blogs/:id',
    name: 'singleBlog',
    component: SingleBlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
