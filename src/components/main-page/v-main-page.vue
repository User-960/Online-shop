<template>
  <div class="v-main-page">
    <div class="v-main-page__start">
      <img
        class="v-main-page__start-img"
        :src="require('../../static/images/online-shop-back.jpg')"
        alt="background"
      />
      <h1 class="v-main-page__start-title">
        ONLINE SHOP
      </h1>
    </div>

    <div class="v-main-page__categories">
      <div class="container">
        <div class="v-main-page__categories-inner">
          <h2 class="v-main-page__categories-title">
            Categories
          </h2>
          <div class="v-main-page__categories-items">
            <a
              class="v-main-page__categories-item v-main-page__category-woman"
              href="#"
            >
              <img
                :src="require('../../static/images/woman-category.jpg')"
                alt="category"
              />
              <p>Woman</p>
            </a>
            <a
              class="v-main-page__categories-item v-main-page__category-man"
              href="#"
            >
              <img
                :src="require('../../static/images/man-category.jpg')"
                alt="category"
              />
              <p>Man</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-main-page',
    // props: {},
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss">
.v-main-page {
  &__start {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  &__start-img {
    z-index: -1;
  }
  &__start-title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    font-family: serif;
    color: #fff;
    font-weight: bold;
    font-size: 52px;
  }
  &__categories {
    margin-top: 60px;
  }
  &__categories-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__categories-title {
    font-size: 36px;
    font-family: 'Montserrat';
    margin: 80px auto;
  }
  &__categories-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 0px 10px;
  }
  &__categories-item {
    position: relative;
    max-height: 580px;
  }
  &__categories-item img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  &__categories-item p {
    position: absolute;
    bottom: 10px;
    left: 30px;
    font-size: 24px;
    font-family: 'Montserrat';
    font-weight: bold;
    color: #fff;
  }
  &__category-woman {
    background-color: #F9F9F9;
  }
  &__category-woman p {
    color: #3d3d3d;
  }
}
</style>