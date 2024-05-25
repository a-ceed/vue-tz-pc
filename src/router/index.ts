import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:id',
    name: 'article',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
  },
  {
    path: '/nominees',
    name: 'nominees',
    component: () => import(/* webpackChunkName: "about" */ '../views/NomineesView.vue')
  },
  {
    path: '/vote/:id',
    name: 'vote',
    component: () => import(/* webpackChunkName: "about" */ '../views/VotePage.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import(/* webpackChunkName: "about" */ '../views/VotePage.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolitics.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsCondition.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutSite.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThanksSite.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddCorporation.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
