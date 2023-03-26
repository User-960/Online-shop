import { createStore } from 'vuex';
import product from './modules/product';

export const store = createStore({
  modules: {
    product
  }
});