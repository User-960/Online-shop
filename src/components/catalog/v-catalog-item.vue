<template>
  <div
    class="v-catalog-item"
  >
    <v-popup 
      v-if="isInfoPopupVisiable"
      left_btn_title="Add to Cart"
      :popup_title="product_data.name"
      @close-popup="closeInfoPopup"
      @left-btn-action="addToCart"
    >
      <img
        class="v-catalog-item__popup-image"
        :src="require('../../static/images/catalog/' + product_data.image)"
        alt="img"
      />
      <div class="v-catalog-item__popup-info">
        <p class="v-catalog-item__popup-name"><span>Name: </span>{{ product_data.name }}</p>
        <p class="v-catalog-item__popup-price"><span>Price: </span>{{ toFix(product_data.price) }} </p>
        <p class="v-catalog-item__popup-category"><span>Category: </span>{{ product_data.category }}</p>
        <p class="v-catalog-item__popup-description"><span>Description: </span>{{ product_data.description }}</p>
      </div>
    </v-popup>

    <img
      class="v-catalog-item__image"
      :src="require('../../static/images/catalog/' + product_data.image)"
      alt="img"
      @click="productClick"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: <span>{{ toFix(product_data.price) }}</span></p>
    <div class="v-catalog-item__btns">
      <button
        class="v-catalog-item__show_info btn"
        @click="showPopupInfo"
      >
        Show info
      </button>
      <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Product from '../../models/ProductModel';
  import vPopup from '../popup/v-popup.vue';

  export default defineComponent({
    name: 'v-catalog-item',
    components: {
      vPopup
    },
    props: {
      product_data: {
        type: Object as PropType<Product>,
        default() {
          return {};
        }
      }
    },
    emits: ['addToCart', 'productClick'],
    data: () => ({
      isInfoPopupVisiable: false,
    }),
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
      },
      productClick() {
        this.$emit('productClick', this.product_data.article);
      },
      showPopupInfo() {
        this.isInfoPopupVisiable = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisiable = false;
      },
      toFormatPrice(value): string {
        if (value >= 1000) {
          let parts = value.toFixed(2).toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          return parts.join('.');
        } else {
          return value.toFixed(2);
        }
      },
      toFix(value: number): string {
        value.toFixed(2);
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-catalog-item {
  flex-basis: 25%;
  min-width: 240px;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $spacing-padding * 2;
  margin: $spacing-margin * 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: $border-radius;
  &__image {
    width: 100px;
  }
  &__name {
    margin-top: 10px;
  }
  &__price {
    margin: 10px 0px;
  }
  &__price span {
    color: $color-black;
  }
  &__btns {
    display: flex;
  }
  &__show_info {
    margin-right: 10px;
    background-color: $color-grey;
  }
  &__show_info:hover {
    background-color: $color-dark;
  }
  &__popup-name,
  &__popup-price,
  &__popup-category,
  &__popup-description {
    margin-bottom: 10px;
  }
  &__popup-name span,
  &__popup-price span,
  &__popup-category span,
  &__popup-description span {
    font-size: 16px;
    color: $color-black;
    font-weight: 700;
  }
  &__popup-description {
    max-width: 320px;
  }
  &__popup-image {
    margin-right: 35px;
    width: 120px;
  }
}
</style>