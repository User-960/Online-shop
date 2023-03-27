<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vCart 
      v-if="CART.length"
      :cart_data="CART"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCatalog from './v-catalog.vue';
  import vCart from './v-cart.vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'v-main-wrapper',
    components: {
      vCatalog,
      vCart
    },
    // props: {},
    data: () => ({

    }),
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
    watch: {},
    mounted() {
      console.log('Hello! I am alive.');
    },
    methods: {},
  });
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>