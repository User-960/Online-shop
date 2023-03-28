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
    />
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
      ])
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(index: number) {
        this.DELETE_FROM_CART(index);
      }
    }
  });
</script>

<style lang="scss" scoped>
.v-cart {
  &__title {
    margin: 20px auto;
    text-align: center;
  }
  &__cart_empty {
    text-align: center;
    font-size: 16px;
  }
}
</style>