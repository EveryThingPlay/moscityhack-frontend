import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
  ],
});

export default router;
