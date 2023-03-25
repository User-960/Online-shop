<template>
  <div class="v-main-wrapper">
    {{ title }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-main-wrapper',
    components: {},
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
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>