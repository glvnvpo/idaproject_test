<template>
  <div :class="$style.sorting_bar">
    Сортировать по:
    <div :class="$style.sort_wrap">
      <button :class="$style.current_sort" type="button">
        {{ sortBy === 'price' ? 'цене' : 'популярности' }}
      </button>
      <div :class="$style.sort_values">
        <button type="button" @click="changeSortBy('price')">По цене</button>
        <button type="button" @click="changeSortBy('rating')">
          По популярности
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingBar',
  data() {
    return {
      sortBy: 'price',
    }
  },
  methods: {
    changeSortBy(value) {
      this.sortBy = value
      this.$emit('sortBy', value)
    },
  },
}
</script>

<style module lang="scss">
.sorting_bar {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  .sort_wrap {
    position: relative;
    margin-left: 6px;
    .current_sort {
      color: $grey;
      position: relative;
      background: none;
      border: none;
      padding: 0;
      padding-right: 10px;
      &:after {
        content: '';
        position: absolute;
        top: 9px;
        right: 0;
        border: 3px solid transparent;
        border-top: 3px solid $grey;
      }
    }
    .sort_values {
      position: absolute;
      display: none;
      font-size: 14px;
      width: 160px;
      background: $white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      padding-top: 8px;
      padding-bottom: 8px;
      top: 28px;
      right: 0;
      &:after {
        content: '';
        width: 100%;
        height: 10px;
        position: absolute;
        background: transparent;
        top: -10px;
        left: 0;
      }
      button {
        width: 100%;
        text-align: left;
        color: $grey_light;
        border: none;
        background: $white;
        padding: 4px 12px;
        transition: all 0.3s ease;
        &:hover {
          color: $black;
          background: $grey_extra_light;
        }
      }
    }
    &:hover {
      .sort_values {
        display: block;
        z-index: 999;
      }
    }
  }
}
</style>
