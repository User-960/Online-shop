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
      <span class="v-cart-item__quantity-span">
        <div
          class="quantity__btn"
          @click="decrementItem"
        >
          <span>-</span>
        </div>
        {{ cart_item_data.quantity }}
        <div
          class="quantity__btn"
          @click="incrementItem"
        >
          <span>+</span>
        </div>
      </span>
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
    emits: ['deleteFromCart', 'increment', 'decrement'],
    data: () => ({

    }),
    computed: {},
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart');
      },
      incrementItem() {
        this.$emit('increment');
      },
      decrementItem() {
        this.$emit('decrement');
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
    &__quantity-span {
      display: flex;
      width: 80px;
      justify-content: space-between;
      user-select: none;
    }
  }
  .quantity__btn {
    cursor: pointer;
    color: $color-white;
    border-radius: 30px;
    background-color: $color-black;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
</style>