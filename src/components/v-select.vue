<template>
  <div class="v-filter">
    <h3 class="v-filter__title">
      Filter
    </h3>

    <div class="v-filter__category">
      <div class="v-select">
        <p
          class="v-select__title"
          @click="areOptionVisiable = !areOptionVisiable"
        >
          Category: {{ selected }}
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
    </div>
    <hr />
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

.v-filter {
  position: relative;
  top: 190px;
  margin-left: 20px;
  &__title {
    font-size: 22px;
    color: $color-black;
    font-family: 'Montserrat';
    margin-bottom: 20px;
    font-weight: bold;
  }
}
.v-select {
  width: 150px;
  margin: 0 auto;
  position: relative;
  font-family: 'Montserrat';
  &__title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: $color-black;
    cursor: pointer;
  }
  &__options {
    position: absolute;
  }
  &__option {
    cursor: pointer;
    width: 80px;
    margin: 10px 0px;
    transition-duration: 0.1s;
  }
  &__option:hover {
    color: $color-black;
    transform: scale(1.1);
    border-bottom: 2px solid $color-green;
  }
}

</style>