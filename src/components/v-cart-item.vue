<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../static/images/catalog/' + cart_item_data.image)"
      alt="image"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity: </p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Product from '../models/ProductModel';

  export default defineComponent({
    name: 'v-cart-item',
    props: {
      cart_item_data: {
        type: Object as PropType<Product>,
        default() {
          return {};
        }
      }
    },
    emits: ['deleteFromCart'],
    data: () => ({

    }),
    computed: {},
    mounted() {
      this.addQty();
    },
    methods: {
      addQty() {
        this.cart_item_data.quantity = 1;
      },
      deleteFromCart() {
        this.$emit('deleteFromCart');
      }
    }
  });
</script>

<style lang="scss">
  @import '../static/style/vars';

  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $spacing-padding * 2;
    margin: $spacing-margin * 2;
    &__img {
      max-width: 50px;
    }
  }
</style>