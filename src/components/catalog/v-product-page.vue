<template>
  <div class="v-product-page">
    <div class="v-product-page__inner">
      <p>Product name: {{ product.name }}</p>
      <img
        v-if="product.image"
        class="v-product-page__image"
        :src="require('../../static/images/catalog/' + product.image)"
        alt="img"
      />

      <div class="v-product-page__info">
        <p class="v-product-page__info-name"><span>Name: </span>{{ product.name }}</p>
        <p class="v-product-page__info-price"><span>Price: </span>{{ toFix(product.price) }} </p>
        <p class="v-product-page__info-category"><span>Category: </span>{{ product.category }}</p>
        <p class="v-product-page__info-description"><span>Description: </span>{{ product.description }}</p>
      </div>

      <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import Product from '../../models/ProductModel';
  // import toFixPrice from '../../filters/toFix';

  export default defineComponent({
    name: 'v-product-page',
    props: {},
    // emits: ['addToCart'],
    data: () => ({

    }),
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      product() {
        let result: Product;
        let vm = this;
        this.PRODUCTS.map(function(item: Product) {
          if (item.article === vm.$route.query.product) {
            result = item;
          }
        });
        return result;
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API();
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(): void {
        this.ADD_TO_CART(this.product);
      },
      toFix(value: number) {
        value.toFixed(2);
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
    }
  });
</script>

<style lang="scss">

</style>