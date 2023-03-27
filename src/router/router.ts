import { createRouter, createWebHistory } from 'vue-router';
import vCatalog from '../components/v-catalog.vue';
import vCart from '../components/v-cart.vue';

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
