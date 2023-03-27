<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
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
        'PRODUCTS'
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
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>