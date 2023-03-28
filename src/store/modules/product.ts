import axios from 'axios';
import Product from '../../models/ProductModel';

interface StateRepo {
  products: Array<Product>,
  cart: Array<Product>
}

export default {
  state: {
    products: [] as Product[],
    cart: [] as Product[]
  },

  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
      return await axios('http://localhost:3001/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({commit}, product: Product): void {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index: number): void {
      commit('REMOVE_FROM_CART', index);
    },
    INCREMENT_CART_ITEM({commit}, index: number) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({commit}, index: number) {
      commit('DECREMENT', index);
    }
  },
  
  mutations: {
    SET_PRODUCTS_TO_STATE: (state: StateRepo, products: any): void => {
      state.products = products;
    },
    SET_CART: (state: StateRepo, product: Product): void => {
      if (state.cart.length) {
        let isProductExist: boolean = false;
        state.cart.map(function(item) {
          if (item.article === product.article) {
            isProductExist = true;
            item.quantity++;
          }
        });
        if (!isProductExist) {
          state.cart.push({...product, quantity: 1});
        }
      } else {
        state.cart.push({...product, quantity: 1});
      }
    },
    REMOVE_FROM_CART: (state: StateRepo, index: number): void => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state: StateRepo, index: number): void => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state: StateRepo, index: number): void => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    }
  },

  getters: {
    PRODUCTS(state: StateRepo): Product[] {
      return state.products;
    },
    CART(state: StateRepo): Product[] {
      return state.cart;
    }
  }
};