import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/offers',
      name: 'offersAdmin',
      component: () => import('../views/ManagerOffersView.vue'),
    },
    {
      path: '/finances',
      name: 'financeAdmin',
      component: () => import('../views/FinancesView.vue'),
    },
    {
      path: '/offers/:offer',
      name: 'offerAdmin',
      component: () => import('../views/ManagerOfferView.vue'),
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/DataView.vue'),
      children: [
        { path: '/data/:channel', component: () => import('../views/DataView.vue') },
        { path: '/data/:channel/:group', component: () => import('../views/DataView.vue') },
      ],
    },
    {
      path: '/files',
      name: 'filesAdmin',
      component: () => import('../views/FilesView.vue'),
    },
  ],
});

export default router;
