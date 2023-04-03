<template>
  <div class="v-header__inner">
    <router-link :to="{ name: 'mainPage' }">
      <img
        class="v-header__logo"
        src="../../static/images/home.png"
        alt="logo"
      />
    </router-link>

    <menu class="v-header__menu">
      <router-link :to="{ name: 'mainPage' }">
        <div class="v-header__link_to_home">
          HOME
        </div>
      </router-link>

      <router-link :to="{ name: 'catalog' }">
        <div class="v-header__link_to_catalog">
          CATALOG
        </div>
      </router-link>
    </menu>

    <div class="v-header__search">
      <input
        v-model="searchValue"
        placeholder="Search..."
        class="v-header__search-input"
        type="text"
        @keypress.enter="search(searchValue)"
      />
      <button
        v-if="searchValue"
        class="v-header__search-btn"
        @click="clearSearchField"
      >
        <i class="material-icons">cancel</i>
      </button>
      <button
        class="v-header__search-btn"
        @click="search(searchValue)"
      >
        <i class="material-icons">search</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';

  export default defineComponent({
    name: 'v-header',
    data: () => ({
      searchValue: ''
    }),
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX',
      ]),
      search(value: string) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
        if (this.$route.path !== '/catalog') {
          this.$router.push('/catalog');
        }
        this.searchValue = '';
      },
      clearSearchField() {
        this.searchValue = '';
        this.GET_SEARCH_VALUE_TO_VUEX();
        if (this.$route.path !== '/catalog') {
          this.$router.push('/catalog');
        }
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';
.v-header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #505050;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 20;
  }
  &__logo {
    width: 50px;
  }
  &__menu {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
  &__link_to_home,
  &__link_to_catalog {
    font-family: 'Montserrat';
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 4px;
    transition-duration: 1s;
  }
  &__link_to_home:hover,
  &__link_to_catalog:hover {
    border-bottom: 2px solid #fff;
  }
  &__search {
    display: flex;
    align-items: center;
  }
  &__search-btn {
    background-color: transparent;
    border: none;
    outline: none;
    width: 40px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
  &__search-input {
    font-family: 'Montserrat';
    padding: 4px;
    color: #3d3d3d;
    border-radius: 6px;
    border: none;
    outline: none;
  }
}

</style>