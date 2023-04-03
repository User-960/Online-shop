<template>
  <div class="v-carousel__inner">
    <button
      class="v-carousel__btn"
      @click="prevSlide"
    >
      &lt;
    </button>

    <div class="v-carousel__wrapper">
      <div
        class="v-carousel__slider"
        :style="{ 'margin-left': '-' + (100 * currentSLideIndex) + '%' }"
      >
        <vCarouselItem 
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
        />
      </div>
    </div>
    
    <button
      class="v-carousel__btn"
      @click="nextSlide"
    >
      >
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCarouselItem from './v-carousel-item.vue';
  import SliderProductItem from '../../models/SliderProductItem';

  export default defineComponent({
    name: 'v-carousel',
    components: {
      vCarouselItem
    },
    props: {
      carousel_data: {
        type: Array<SliderProductItem>,
        default() {
          return [];
        }
      },
      interval: {
        type: Number,
        default() {
          return 0;
        }
      }
    },
    data: () => ({
      currentSLideIndex: 0
    }),
    computed: {},
    mounted() {
      if (this.interval > 0) {
        let vm = this;
        setInterval(function() {
          vm.nextSlide();
        }, vm.interval);
      }
    },
    methods: {
      prevSlide() {
        if (this.currentSLideIndex > 0) {
          this.currentSLideIndex--;
        }
      },
      nextSlide() {
        if (this.currentSLideIndex >= this.carousel_data.length - 1) {
          this.currentSLideIndex = 0;
        } else {
          this.currentSLideIndex++;
        }
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-carousel {
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__wrapper {
    position: relative;
    height: 400px;
    width: 200px;
    overflow: hidden;
    margin: 0 40px;
  }
  &__slider {
    display: flex;
    width: 1000px;
    transition: all ease .5s;
  }
  &__btn {
    background: none;
    border: none;
    outline: none;
    width: 60px;
    font-family: 'Montserrat';
    font-size: 32px;
    color: $color-dark;
    transition: all ease .5s;
    cursor: pointer;
  }
  &__btn:hover {
    background-color: #e7e7e7;
    color: $color-grey;
  }
}
</style>