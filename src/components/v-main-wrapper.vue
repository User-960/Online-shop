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
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
}
.main__inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  right: 0;
  left: 0;
  width: 100%;
}
</style>