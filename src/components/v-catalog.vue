<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem />
    </div>
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

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>