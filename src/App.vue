<template>
  <img
    class="main__img-icon"
    src="./static/images/home.png"
    alt="logo"
  >
  <h1 class="main__title">
    Vue - TypeScript - Webpack
  </h1>
  <p class="main__message">
    {{ message }}
  </p>
  <img
    class="main__img-back"
    src="./static/images/info-img.jpg"
    alt="img"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: () => ({
    message: 'Hello World',
  }),
});
</script>

<style lang="scss" scoped>
@import './static/style/vars';

.main {
  &__title,
  &__message {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-family: 'Montserrat';
    color: $color-lightcoral;
  }
  &__img-icon,
  &__img-back {
    display: block;
    margin: 100px auto 10px;
  }
}

.main__message {
  font-size: 20px;
}

.example {
    display: grid;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}
</style>