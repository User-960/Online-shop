<template>
  <div class="v-catalog-item">
    <img
      src=""
      alt="img"
    />
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

<style lang="scss">
@import '../static/style/vars';

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $spacing-padding * 2;
  margin-bottom: $spacing-margin * 2;
  text-align: center;
}
</style>