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
      path: '/offer_:offer',
      name: 'Offer',
      component: () => import('../views/OfferView.vue'),
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import('../views/ReportsView.vue'),
    },
  ],
});

export default router;
