<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">
        Cart: {{ CART.length }}
      </div>
    </router-link>
    <h1 class="v-catalog__title">
      Catalog
    </h1>
    <div class="v-catalog__list">
      <vCatalogItem 
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import vCatalogItem from './v-catalog-item.vue';
  import Product from '../models/ProductModel';

  export default defineComponent({
    name: 'v-catalog',
    components: {
      vCatalogItem
    },
    // props: {},
    data: () => ({
      
    }),
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('Data arrived!');
          }
        });
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data: Product): void {
        this.ADD_TO_CART(data);
      }
    },
  });
</script>

<style lang="scss">
@import '../static/style/vars';
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $spacing-padding * 2;
    border: 1px solid #aeaeae;
  }
  &__title {
    margin: 20px auto;
    text-align: center;
  }
}
</style>