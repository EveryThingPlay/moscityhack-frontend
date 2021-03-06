import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
