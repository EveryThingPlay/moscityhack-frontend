import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/payouts',
      name: 'Payouts',
      component: () => import('../views/AffiliatePayoutsView.vue'),
    },
    {
      path: '/stats',
      name: 'Stats',
      component: () => import('../views/AffiliateStatsView.vue'),
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import('../views/AffiliateReportsView.vue'),
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
      path: '/offers',
      name: 'Offers',
      component: () => import('../views/OffersView.vue'),
    },
    {
      path: '/offer_:offer',
      name: 'Offer',
      component: () => import('../views/OfferView.vue'),
    },
  ],
});

export default router;
