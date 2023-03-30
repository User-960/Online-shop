<template>
  <div class="v-main-wrapper">
    <v-header />
    <div class="container">
      <div class="main__inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vHeader from './layouts/v-header.vue';

  export default defineComponent({
    name: 'v-main-wrapper',
    components: {
      vHeader
    },
    data: () => ({

    }),
    computed: {},
  });
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.main__inner {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}
</style>