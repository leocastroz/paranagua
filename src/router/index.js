import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/decoracoes',
      name: 'decoracoes',
      component: () => import('../views/DecoracoesView.vue')
    },
    {
      path: '/flores',
      name: 'flores',
      component: () => import('../views/FloresView.vue')
    },
    {
      path: '/sementes',
      name: 'sementes',
      component: () => import('../views/SementesView.vue')
    },
    {
      path: '/vasos',
      name: 'vasos',
      component: () => import('../views/VasosView.vue')
    },
    {
      path: '/pelucias',
      name: 'pelucias',
      component: () => import('../views/PeluciasView.vue')
    }
  ]
})

export default router
