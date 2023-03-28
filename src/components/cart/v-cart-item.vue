<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../../static/images/catalog/' + cart_item_data.image)"
      alt="image"
    />
    <div class="v-cart-item__info">
      <p class="v-cart-item__info_name"><span>Product: </span>{{ cart_item_data.name }}</p>
      <p class="v-cart-item__info_price"><span>Price: </span>{{ cart_item_data.price }}</p>
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
    <button
      class="v-cart-item__btn_delete btn"
      @click="deleteFromCart"
    >
      Delete
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Product from '../../models/ProductModel';

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
  @import '../../static/style/vars';

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
    &__info_name,
    &__info_price {
      font-size: 16px;
      color: $color-black;
      font-weight: 700;
    }
    &__info_name span,
    &__info_price span {
      font-size: 14px;
      color: $color-dark;
      font-weight: 400;
      display: inline-block;
      width: 80px;
    }
    &__quantity-span {
      display: flex;
      width: 80px;
      justify-content: space-between;
      user-select: none;
    }
    &__btn_delete {
      background-color: $color-error-light;
    }
    &__btn_delete:hover {
      background-color: $color-error-dark;
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