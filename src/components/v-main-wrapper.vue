<template>
  <div class="v-main-wrapper wrapper">
    <header class="header">
      <v-header />
    </header>
    
    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <vFooter />
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import vHeader from './layouts/v-header.vue';
  import vFooter from './layouts/v-footer.vue';

  export default defineComponent({
    name: 'v-main-wrapper',
    components: {
      vHeader,
      vFooter
    },
    data: () => ({

    }),
    computed: {},
  });
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
}

.footer {
  margin-top: 80px;
  padding: 30px 10px;
  background-color: #505050;
}
</style>