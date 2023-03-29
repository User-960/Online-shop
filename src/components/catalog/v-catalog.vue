<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">
        <img
          class="v-catalog__link_to_cart_img"
          :src="require('../../static/images/cart-icon.svg')"
          alt="cart"
        />
        Cart: {{ CART.length }}
      </div>
    </router-link>

    <h1 class="v-catalog__title">
      Catalog
    </h1>

    <vSelect 
      :options="categories"
      :selected="selected"
      :is_expanded="IS_DESKTOP"
      @select="sortByCategories"
    />

    <div class="v-catalog__list">
      <vCatalogItem 
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import vSelect from '../v-select.vue';
  import vCatalogItem from './v-catalog-item.vue';
  import Product from '../../models/ProductModel';
  import SelectOption from '../../models/SelectModel';

  export default defineComponent({
    name: 'v-catalog',
    components: {
      vCatalogItem,
      vSelect
    },
    // props: {},
    data: () => ({
      categories: [
        { name: 'All', value: 'all' },
        { name: 'Man', value: 'm' },
        { name: 'Woman', value: 'w' }
      ],
      selected: 'All',
      sortedProducts: []
    }),
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_DESKTOP'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts;
        } else {
          return this.PRODUCTS;
        }
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('Data arrived!');
          }
        });
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data: Product): void {
        this.ADD_TO_CART(data);
      },
      sortByCategories(category: SelectOption) {
        this.sortedProducts = [];
        let vm = this;
        this.PRODUCTS.map(function(item: Product) {
          if (item.category === category.name) {
            vm.sortedProducts.push(item);
          }
        });
        this.selected = category.name;
      }
    },
  });
</script>

<style lang="scss">
@import '../../static/style/vars';
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $spacing-padding;
    border: 1px solid #aeaeae;
    display: flex;
    justify-content: space-around;
    width: 130px;
    color: $color-black;
    font-family: 'Montserrat';
  }
  &__link_to_cart_img {
    width: 27px;
  }
  &__title {
    margin: 50px auto 20px ;
    text-align: center;
    font-family: 'Montserrat';
  }
}
</style>