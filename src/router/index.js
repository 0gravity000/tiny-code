import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DigitalClock from '../views/contents/DigitalClock.vue'
import PlayingCards from '../views/contents/PlayingCards.vue'
import ClosuresExperiment01 from '../views/contents/ClosuresExperiment01.vue'
import DOMExperiment01 from '../views/contents/DOMExperiment01.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/digital-clock',
    name: 'digital-clock',
    component: DigitalClock
  },
  {
    path: '/playing-cards',
    name: 'playing-cards',
    component: PlayingCards
  },
  {
    path: '/closures-experiment-01',
    name: 'closures-experiment-01',
    component: ClosuresExperiment01
  },
  {
    path: '/dom-experiment-01',
    name: 'dom-experiment-01',
    component: DOMExperiment01
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
