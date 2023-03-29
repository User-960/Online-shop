<template>
  <div class="v-popup">
    <div
      ref="popup_wrapper"
      class="v-popup__inner"
    >
      <div class="v-popup__info">
        <div class="v-popup__header">
          <span class="v-popup__header-title">
            {{ popup_title }}
          </span>
          <img
            class="v-popup__img"
            :src="require('../../static/images/x-circle-fill.svg')"
            alt="close"
            @click="closePopup"
          />
        </div>
        <div class="v-popup__content">
          <slot></slot>
        </div>
        <div class="v-popup__footer">
          <button
            class="v-popup__submit btn"
            @click="leftBtnAction"
          >
            {{ left_btn_title }}
          </button>
          <button
            class="v-popup__close-modal btn"
            @click="closePopup"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-popup',
    props: {
      popup_title: {
        type: String,
        default: 'Popup name'
      },
      left_btn_title: {
        type: String,
        default: 'Ok'
      }
    },
    emits: ['closePopup', 'leftBtnAction'],
    data: () => ({

    }),
    mounted() {
      let vm = this;
      document.addEventListener('click', function(item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup();
        }
      });
    },
    methods: {
      leftBtnAction() {
        this.$emit('leftBtnAction');
      },
      closePopup() {
        this.$emit('closePopup');
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-popup {
  z-index: 10;
  &__inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(3px);
    background-color: #3c3c3c33;
  }
  &__info {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  
    margin: auto;
    padding: 24px;
    max-width: 1000px;
    width: 50%;
    height: 550px;
    overflow: auto;
    background-color: #ffffff;
    box-shadow: $box-shadow-popup;
  }
  &__img {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__header-title {
    color: $color-black;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 20px;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  &__close-modal {
    background-color: $color-error-light;
  }
  &__close-modal:hover {
    background-color: $color-error-dark;
  }
}

</style>