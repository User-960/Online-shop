<template>
  <div class="container">
    <div class="main__inner">
      <div class="v-filter">
        <h3 class="v-filter__title">
          Filter
        </h3>
        <div class="v-filter__category">
          <vSelect 
            :options="categories"
            :selected="selected"
            :is_expanded="IS_DESKTOP"
            @select="sortByCategories"
          />
        </div>
        <div class="v-filter__range">
          <div class="v-filter__range-title">
            Price
          </div>
          <div class="v-filter__range-values">
            <p>Min: {{ minPrice }}</p>
            <p>Max: {{ maxPrice }}</p>
          </div>
          <div class="v-filter__range-slider">
            <input
              v-model.number="maxPrice"
              class="v-filter__range-slider-input"
              type="range"
              min="0"
              max="200"
              step="10"
              @change="setRangeSlider()"
            />
          </div>
        </div>
      </div>
      <div class="v-catalog">
        <v-notification 
          :messages="messages"
          :timeout="3000"
        />

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

        <div class="v-catalog__list">
          <vCatalogItem 
            v-for="product in filteredProducts"
            :key="product.article"
            :product_data="product"
            @add-to-cart="addToCart"
            @product-click="productClick"
          />
        </div>
      </div>
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
  import vNotification from '../notifications/v-notification.vue';

  export default defineComponent({
    name: 'v-catalog',
    components: {
      vCatalogItem,
      vSelect,
      vNotification
    },
    data: () => ({
      categories: [
        { name: 'All', value: 'all' },
        { name: 'Man', value: 'm' },
        { name: 'Woman', value: 'w' }
      ],
      selected: 'All',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 200,
      messages: []
    }),
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_DESKTOP',
        'SEARCH_VALUE'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts;
        } else {
          return this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    // mounted() {
    //   this.GET_PRODUCTS_FROM_API()
    //     .then((response) => {
    //       if (response.data) {
    //         this.sortByCategories();
    //         this.sortProductsBySearchValue(this.SEARCH_VALUE);
    //       }
    //     });
    // },
    created() {
      this.GET_PRODUCTS_FROM_API();
      if (this.PRODUCTS) {
        this.sortByCategories();
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data: Product): void {
        this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              { name: 'Product added to cart', icon: 'check_circle', id: timeStamp }
            );
          });
      },
      sortByCategories(category: SelectOption) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS];
        this.sortedProducts = this.sortedProducts.filter(function(item: Product) {
          return item >= vm.minPrice || item.price <= vm.maxPrice;
        });

        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function (item: Product) {
            vm.selected = category.name;
            return item.category === category.name;
          });
        }
      },
      setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories();
      },
      sortProductsBySearchValue(value: string) {
        this.sortedProducts = [...this.PRODUCTS];
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item: Product) {
            return item.name.toLowerCase().includes(value.toLowerCase());
          });
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      },
      productClick(article: string) {
        this.$router.push({name: 'product', query: { product: article }});
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';
.main__inner {
  display: flex;
  margin-top: 100px;
  right: 0;
  left: 0;
  width: 100%;
}
.v-catalog {
  margin-left: 50px;
  justify-self: flex-start;
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 100px;
  }
  &__link_to_cart {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: $spacing-padding;
    border: 1px solid #aeaeae;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    width: 130px;
    color: $color-black;
    font-family: 'Montserrat';
    background-color: #dedede;
  }
  &__link_to_cart_img {
    width: 27px;
  }
}

.v-filter {
  &__title {
    font-size: 22px;
    color: $color-black;
    font-family: 'Montserrat';
    margin-top: 116px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  &__category {
    padding-top: 10px;
    border-top: 1px solid #aeaeae;
  }
}

.v-filter__range {
  padding-top: 10px;
  border-top: 1px solid #aeaeae;
  position: relative;
  width: 200px;
  top: 150px;
  font-family: 'Montserrat';
  &-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: $color-black;
    cursor: pointer;
  }
  &-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  &-slider svg, 
  &-slider input[type=range] {
    position: absolute;
    top: 40px;
    left: -20px;
  }
  &-values {
    width: 160px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 40;
    left: 0;
  }
  &-slider-input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
}
</style>