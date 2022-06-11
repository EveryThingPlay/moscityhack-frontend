import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/offers',
      name: 'Offers',
      component: () => import('../views/OffersView.vue'),
    },
    {
      path: '/offers/:offer',
      name: 'Offer',
      component: () => import('../views/OfferView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/manager/offers',
      name: 'offersAdmin',
      component: () => import('../views/ManagerOffersView.vue'),
    },
    {
      path: '/manager/offers/:offer',
      name: 'offerAdmin',
      component: () => import('../views/ManagerOfferView.vue'),
    },
    {
      path: '/manager',
      name: 'data',
      component: () => import('../views/DataView.vue'),
      children: [
        { path: '/manager/:channel', component: () => import('../views/DataView.vue') },
        { path: '/manager/:channel/:group', component: () => import('../views/DataView.vue') },
      ],
    },
    {
      path: '/manager/files',
      name: 'filesAdmin',
      component: () => import('../views/FilesView.vue'),
    },
  ],
});

export default router;
