<template>
  <div class="v-main-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-main-wrapper',
    data: () => ({

    }),
    computed: {},
    // watch: {},
    // methods: {},
  });
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
  }
</style>