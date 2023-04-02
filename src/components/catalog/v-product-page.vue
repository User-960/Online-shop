<template>
  <div class="container">
    <div class="main__inner">
      <div class="v-product-page">
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

        <h3 class="v-product-page__title">
          {{ product.name }}
        </h3>
        <div class="v-product-page__inner">
          <vCarousel 
            :carousel_data="product.image_slider"
          />

          <div class="v-product-page__info">
            <p class="v-product-page__info-name"><span>Name: </span>{{ product.name }}</p>
            <p class="v-product-page__info-price"><span>Price: </span>{{ toFix(product.price) }} </p>
            <p class="v-product-page__info-category"><span>Category: </span>{{ product.category }}</p>
            <p class="v-product-page__info-description"><span>Description: </span>{{ product.description }}</p>
            <div class="v-product-page__btns">
              <button
                class="v-catalog-item__add_to_cart_btn btn"
                @click="addToCart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import Product from '../../models/ProductModel';
  import vNotification from '../notifications/v-notification.vue';
  // import toFixPrice from '../../filters/toFix';
  import vCarousel from '../carousel/v-carousel.vue';

  export default defineComponent({
    name: 'v-product-page',
    components: {
      vNotification,
      vCarousel
    },
    data: () => ({
      messages: []
    }),
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      product() {
        let result: Product;
        let vm = this;
        this.PRODUCTS.map(function(item: Product) {
          if (item.article === vm.$route.query.product) {
            result = item;
          }
        });
        return result;
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API();
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(): void {
        this.ADD_TO_CART(this.product)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              { name: 'Product added to cart', icon: 'check_circle', id: timeStamp }
            );
          });
      },
      toFix(value: number) {
        value.toFixed(2);
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-product-page {
  margin: 0 auto;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
    margin-top: 15px;
  }
  &__image {
    width: 160px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
  &__title {
    color: $color-black;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 24px;
  }
  &__btns {
    margin-top: 5px;
  }
  &__info-name,
  &__info-price,
  &__info-category,
  &__info-description {
    margin-bottom: 15px;
  }
  &__info-name span,
  &__info-price span,
  &__info-category span,
  &__info-description span {
    font-size: 16px;
    color: $color-black;
    font-weight: 700;
  }
  &__info-description {
    max-width: 420px;
  }
}
</style>