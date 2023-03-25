<template>
  <div class="v-catalog-item">
    <p>Item 1</p>
    <p>Price: 100</p>
    <button>Add to Cart</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-catalog-item',
    props: {},
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss" scoped>

</style>