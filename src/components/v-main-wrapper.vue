<template>
  <div class="v-main-wrapper">
    {{ title }}
    <vCatalog />
    <vCart />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCatalog from './v-catalog.vue';
  import vCart from './v-cart.vue';

  export default defineComponent({
    name: 'v-main-wrapper',
    components: {
      vCatalog,
      vCart
    },
    props: {
      title: String,
    },
    data: () => ({

    }),
    computed: {},
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