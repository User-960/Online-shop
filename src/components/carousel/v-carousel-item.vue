<template>
  <div class="v-carousel-item">
    <img
      :src="require('../../static/images/catalog/' + item_data.img)"
      alt="img"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import SliderProductItem from '../../models/SliderProductItem';

  export default defineComponent({
    name: 'v-carousel-item',
    props: {
      item_data: {
        type: Object as PropType<SliderProductItem>,
        default() {
          return {};
        }
      }
    },
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss">
.v-carousel-item {
  min-width: 200px;
}
</style>