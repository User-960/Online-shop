<template>
  <div class="v-footer__inner">
    <a
      class="v-footer__link"
      href="https://github.com/User-960"
    >
      <img
        :src="require('../../static/images/github.png')"
        alt="github"
      />
    </a>
    <a
      class="v-footer__link"
      href="mailto:ivanvolodin960@gmail.com"
    >
      <img
        :src="require('../../static/images/mail.png')"
        alt="mail"
      />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'v-footer',
    // props: {},
    data: () => ({

    }),
    computed: {}
  });
</script>

<style lang="scss">
@import '../../static/style/vars';
.v-footer {
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__link {
    margin: 0 10px;
  }
  &__link img {
    max-width: 50px;
  }
}

</style>