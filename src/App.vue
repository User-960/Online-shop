<template>
  <img
    class="main__img-icon"
    src="./static/images/home.png"
    alt="logo"
  />
  <h1 class="main__title">
    Vue - TypeScript - Webpack
  </h1>
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
@import './static/style/vars';

.main {
  &__title {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-family: 'Montserrat';
    color: $color-lightcoral;
  }
  &__img-icon {
    display: block;
    margin: 100px auto 10px;
  }
}
</style>