import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/payouts',
      name: 'PublishersPayouts',
      component: () => import('../views/ManagerPayoutsView.vue'),
    },
    {
      path: '/publishers',
      name: 'Publishers',
      component: () => import('../views/PublishersView.vue'),
    },
    {
      path: '/stats',
      name: 'CPAStats',
      component: () => import('../views/CPAStatsView.vue'),
    },
    {
      path: '/clients',
      name: 'Clients',
      component: () => import('../views/ReportsView.vue'),
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
      path: '/recommend',
      name: 'Recommendations',
      component: () => import('../views/RecommendationsView.vue'),
    },
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
