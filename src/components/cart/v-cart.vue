<template>
  <div class="container">
    <div class="v-cart">
      <router-link :to="{ name: 'catalog' }">
        <div class="v-catalog__link_to_shop">
          Back to Catalog
          <img
            class="v-catalog__link_to_shop_img"
            :src="require('../../static/images/shop-icon.svg')"
            alt="shop"
          />
        </div>
      </router-link>
      <h1 class="v-cart__title">
        Cart
      </h1>
      <p
        v-if="!CART.length"
        class="v-cart__cart_empty"
      >
        Cart is empty...
      </p>
      <vCartItem 
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @delete-from-cart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
      <div class="v-cart__total">
        <p class="v-cart__total-text">Total:</p>
        <p class="v-cart__total-number">{{ toFix(cartTotalCost) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCartItem from './v-cart-item.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default defineComponent({
    name: 'v-cart',
    components: {
      vCartItem
    },
    data: () => ({
      
    }),
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartTotalCost() {
        let result = [];

        if (this.CART.length) {
          for (let item of this.CART) {
            result.push(item.price * item.quantity);
          }

          result = result.reduce(function (sum: number, el) {
            return sum + el;
          });
          return result;
        } else {
          return 0;
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      deleteFromCart(index: number): void {
        this.DELETE_FROM_CART(index);
      },
      increment(index: number): void {
        this.INCREMENT_CART_ITEM(index);
      },
      decrement(index: number): void {
        this.DECREMENT_CART_ITEM(index);
      },
      toFix(value): string {
        value.toFixed(2);
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-cart {
  width: 100%;
  &__title {
    margin: 50px auto;
    text-align: center;
    font-family: 'Montserrat';
  }
  &__cart_empty {
    text-align: center;
    font-size: 24px;
    margin: $spacing-margin * 2 0px;
  }
  &__total {
    font-weight: bold;
    display: flex;
    color: $color-black;
    margin: 0 $spacing-margin * 2;
    padding: 10px 0;
    font-size: 20px;
    border-top: 1px solid $color-dark;
    font-family: 'Montserrat';
  }
  &__total-number {
    margin-left: 8px;
  }
}
.v-catalog__link{
  &_to_shop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: $spacing-padding;
    border: 1px solid #aeaeae;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    width: 170px;
    font-size: 14px;
    color: $color-black;
    font-family: 'Montserrat';
    background-color: #dedede;
  }
  &_to_shop_img {
    width: 22px;
    height: 22px;
    margin-left: 10px;
  }
}
</style>