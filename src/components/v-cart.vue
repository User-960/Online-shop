<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">
        Back to Catalog
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
      <p class="v-cart__total-number">{{ cartTotalCost }} USD</p>
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
      }
    }
  });
</script>

<style lang="scss">
@import '../static/style/vars';

.v-cart {
  &__title {
    margin: 20px auto;
    text-align: center;
  }
  &__cart_empty {
    text-align: center;
    font-size: 16px;
  }
  &__total {
    font-weight: bold;
    display: flex;
    color: $color-black;
    margin: 0 $spacing-margin * 2;
    padding: 10px 0;
    font-size: 20px;
    border-top: 1px solid $color-dark;
  }
  &__total-number {
    margin-left: 8px;
  }
}
</style>