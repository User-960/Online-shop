<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../static/images/catalog/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button
      class="v-catalog-item__add_to_cart_btn btn"
      @click="addToCart"
    >
      Add to Cart
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Product from '../models/ProductModel';

  export default defineComponent({
    name: 'v-catalog-item',
    props: {
      product_data: {
        type: Object as PropType<Product>,
        default() {
          return {};
        }
      }
    },
    emits: ['addToCart'],
    data: () => ({

    }),
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    }
  });
</script>

<style lang="scss">
@import '../static/style/vars';

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $spacing-padding * 2;
  margin: $spacing-margin * 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    width: 100px;
  }
  &__name {
    margin-top: 10px;
  }
  &__price {
    margin: 10px 0px;
  }
}
</style>