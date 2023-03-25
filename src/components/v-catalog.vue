<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItem />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCatalogItem from './v-catalog-item.vue';

  export default defineComponent({
    name: 'v-catalog',
    components: {
      vCatalogItem
    },
    props: {},
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss" scoped>

</style>