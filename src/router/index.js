import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Contact from '../views/Contact.vue'
import WorkUs from '../views/WorkWithUs.vue'
import Privacy from '../views/PrivacyPolicy.vue'
import Termes from '../views/ServiceTermes.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/WorkUs',
      name: 'WorkUs',
      component: WorkUs
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/Termes',
      name: 'Termes',
      component: Termes
    },
  ]
})

export default router
