<template>
  <div class="v-carousel__inner">
    <div class="carousel__wrapper">
      <div
        class="v-carousel"
        :style="{ 'margin-left': '-' + (100 * currentSLideIndex) + '%' }"
      >
        <vCarouselItem 
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
        />
      </div>
    </div>
    <div class="v-carousel__btns">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vCarouselItem from './v-carousel-item.vue';
  import SliderItem from '../../models/Carousel';

  export default defineComponent({
    name: 'v-carousel',
    components: {
      vCarouselItem
    },
    props: {
      carousel_data: {
        type: Array<SliderItem>,
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
.v-carousel__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel__wrapper {
  position: relative;
  height: 400px;
  width: 200px;
  overflow: hidden;
}

.v-carousel {
  display: flex;
  width: 1000px;
  transition: all ease .5s;
}
</style>