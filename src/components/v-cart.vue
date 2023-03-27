<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <vCartItem 
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @delete-from-cart="deleteFromCart(index)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import vCartItem from './v-cart-item.vue';
  import { mapActions } from 'vuex';

  export default defineComponent({
    name: 'v-cart',
    components: {
      vCartItem
    },
    props: {
      cart_data: {
        type: Array as PropType<Object>,
        default() {
          return [];
        }
      }
    },
    data: () => ({

    }),
    computed: {},
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

</style>