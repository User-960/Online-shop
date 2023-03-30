<template>
  <div class="v-header">
    <img
      class="v-header__logo"
      src="../../static/images/home.png"
      alt="logo"
    />

    <router-link :to="{ name: 'catalog' }">
      <div class="v-header__link_to_catalog">
        CATALOG
      </div>
    </router-link>

    <input
      class="v-header__search"
      type="text"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-header',
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss">
@import '../../static/style/vars';
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: $color-dark;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  &__logo {
    width: 50px;
  }
  &__link_to_catalog {
    font-family: 'Montserrat';
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 4px;
  }
  &__link_to_catalog:hover {
    transition: border-bottom .5s ease;
    border-bottom: 2px solid #fff;
  }
  &__search {
    font-family: 'Montserrat';
    padding: 8px;
    color: #3d3d3d;
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: #e7e7e7;
  }
}

</style>