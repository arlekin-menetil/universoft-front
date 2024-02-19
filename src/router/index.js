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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vacancy',
      name: 'vacancy',
      component: () => import('../views/VacancyVuew.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceVuew.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
        {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactVuew.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/OurPartners.vue')
    },
    {
      path: '/token',
      name: 'token',
      component: () => import('../components/ServicePage/Tokenvue.vue')
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: () => import('../components/ServicePage/MessengerVue.vue')
    },
    {
      path: '/crypto_routers',
      name: 'crypto routers',
      component: () => import('../components/ServicePage/CryptoRouters.vue')
    },
    {
      path: '/operation_system',
      name: 'operation system',
      component: () => import('../components/ServicePage/OperatingSystem.vue')
    },
    {
      path: '/soc_center',
      name: 'soc center',
      component: () => import('../components/ServicePage/SocCenter.vue')
    },
    {
      path: '/antivirus',
      name: 'antivirus',
      component: () => import('../components/ServicePage/AntivirusVue.vue')
    },
    {
      path: '/dlp_system',
      name: 'dlp system',
      component: () => import('../components/ServicePage/DlpSystem.vue')
    },
    {
      path: '/etracker',
      name: 'etracker',
      component: () => import('../components/ServicePage/EtrackerVue.vue')
    },
    {
      path: '/ai',
      name: 'ai',
      component: () => import('../components/ServicePage/AiVue.vue')
    },
    {
      path: '/complex_system',
      name: 'complex system',
      component: () => import('../components/ServicePage/ComplexSystem.vue')
    },
        {
      path: '/Process_Automation',
      name: 'Process Automation',
      component: () => import('../components/ServicePage/ProcessAutomation.vue')
    },
    {
      path: '/Computer_Engineering',
      name: 'Computer Engineering',
      component: () => import('../components/ServicePage/ComputerEngineering.vue')
    },
  ]
})

export default router
