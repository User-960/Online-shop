<template>
  <vMainWrapper />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vMainWrapper from './components/v-main-wrapper.vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    vMainWrapper,
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
      } else {
        vm.SET_MOBILE();
      }
    });
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
});
</script>

<style lang="scss">

</style>