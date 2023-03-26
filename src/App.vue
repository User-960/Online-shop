<template>
  <vMainWrapper :title="title" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vMainWrapper from './components/v-main-wrapper.vue';

export default defineComponent({
  name: 'App',
  components: {
    vMainWrapper,
  },
  data: () => ({
    title: 'Main Wrapper Test'
  })
});
</script>

<style lang="scss">

</style>