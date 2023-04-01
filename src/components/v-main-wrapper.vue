<template>
  <div class="v-main-wrapper">
    <v-header />
    
    <main class="main">
      <router-view />
    </main>
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
  // max-width: 1200px;
  // padding: 0px 15px;
}
</style>