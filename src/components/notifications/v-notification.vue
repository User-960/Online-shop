<template>
  <div class="v-notification">
    <div
      v-for="message in messages"
      :key="message.id"
      class="v-notification__content"
    >
      <div class="v-notification__content-text">
        <span>Notification name</span>
        <img
          class="v-notification__content-img"
          :src="require('../../static/images/bag-check.svg')"
          alt="check"
        />
      </div>
      <div class="v-notification__content-buttons">
        <button v-if="right_button.length">{{ right_button }}</button>
        <button v-if="left_button.length">{{ left_button }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Notification from '../../models/NotificationModel';

  export default defineComponent({
    name: 'v-notification',
    props: {
      messages: {
        type: Array<Notification>,
        default() {
          return [];
        }
      },
      right_button: {
        type: String,
        default: ''
      },
      left_button: {
        type: String,
        default: ''
      }
    },
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
  &__content {
    padding: 16px;
    border-radius: 4px;
    background-color: $color-green-dark;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
  }
  &__content-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content-text span {
    margin-right: 12px;
    font-size: 17px;
    margin-top: 2px;
    font-family: 'Montserrat';
  }
}

</style>