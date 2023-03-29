<template>
  <div class="v-select">
    <p
      class="v-select__title"
      @click="areOptionVisiable = !areOptionVisiable"
    >
      {{ selected }}
    </p>
    <div
      v-if="areOptionVisiable || is_expanded"
      class="v-select__options"
    >
      <p
        v-for="option in options"
        :key="option.value"
        class="v-select__option"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SelectOption from '../models/SelectModel';

  export default defineComponent({
    name: 'v-select',
    props: {
      options: {
        type: Array<SelectOption>,
        default() {
          return [];
        }
      },
      selected: {
        type: String,
        default() {
          return '';
        }
      },
      is_expanded: {
        type: Boolean,
        default: false
      }
    },
    emits: ['select'],
    data: () => ({
      areOptionVisiable: false
    }),
    computed: {},
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true);
    },
    beforeUnmount() {
      document.removeEventListener('click', this.hideSelect);
    },
    methods: {
      selectOption(option: SelectOption): void {
        this.$emit('select', option);
        this.areOptionVisiable = false;
      },
      hideSelect() {
        this.areOptionVisiable = false;
      }
    }
  });
</script>

<style lang="scss">
@import '../static/style/vars';
.v-select {
  width: 200px;
  position: relative;
  &__title {
    font-size: 16px;
    font-weight: 700;
    color: $color-black;
    border-bottom: 1px solid #aeaeae;
    cursor: pointer;
  }
  &__options {
    position: absolute;
  }
  &__option {
    cursor: pointer;
    width: 80px;
    margin: 5px;
    transition-duration: 0.3s;
  }
  &__option:hover {
    color: $color-black;
    transform: scale(1.1);
  }
}

</style>