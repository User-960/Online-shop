<template>
  <div class="v-notification">
    <transition-group
      name="v-transition-animate"
      class="v-notification__messages-list"
      tag="div"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        class="v-notification__content"
        :class="message.icon"
      >
        <div class="v-notification__content-text">
          <span>{{ message.name }}</span>
          <i class="material-icons">
            {{ message.icon }}
          </i>
        </div>
        <div class="v-notification__content-buttons">
          <button v-if="right_button.length">{{ right_button }}</button>
          <button v-if="left_button.length">{{ left_button }}</button>
        </div>
      </div>
    </transition-group>
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
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    data: () => ({

    }),
    watch: {
      messages: {
        handler() {
          this.hideNotification();
        },
        deep: true
      }
    },
    mounted() {
      this.hideNotification();
    },
    methods: {
      hideNotification() {
        let vm = this;
        if (this.messages.length) {
          setTimeout(() => {
            vm.messages.splice(vm.messages.length - 1, 1);
            console.log('Problem');
          }, vm.timeout);
        }
      }
    }
  });
</script>

<style lang="scss">
@import '../../static/style/vars';

.v-notification {
  position: fixed;
  top: 100px;
  right: 16px;
  z-index: 10;
  &__messages-list {
    display: flex;
    flex-direction: column;
  }
  &__content {
    padding: 8px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    &.error {
      background-color: $color-error-light;
    }
    &.warning {
      background-color: $color-warning-orange;
    }
    &.check_circle {
      background-color: $color-green-dark;
    }
  }
  &__content-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content-text span {
    margin-right: 12px;
    font-size: 15px;
    margin-top: 2px;
    font-family: 'Montserrat';
  }
}

.v-transition-animate {
  &-enter-from {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all .6s ease;
  }
  &-enter-to {
    opacity: 1;
  }
  &-leave-from {
    height: 50px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }
  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move {
    transition: transform .6s ease;
  }
}

</style>