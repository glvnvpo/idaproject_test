<template>
  <div :class="$style.catalog_menu">
    <div :class="$style.header">Каталог</div>
    <div :class="$style.categories">
      <nuxt-link
        v-for="(value, index) in categories"
        :key="value.id"
        :to="value.id.toString()"
        :class="getCategoryStyleClass(value.id)"
        @click.native="changeActiveCategory(value.id)"
      >
        {{ value.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogMenu',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getCategoryStyleClass(id) {
      return [
        this.$style.category,
        id === this.$store.state.activeCategory && this.$style.active,
      ]
    },
    changeActiveCategory(id) {
      this.$store.dispatch('updateActiveCategory', id)
    },
  },
}
</script>

<style module lang="scss">
.catalog_menu {
  padding-right: 10px;
  box-sizing: border-box;
  .header {
    font-family: PT Sans Bold;
    font-size: 32px;
    margin-top: 32px;
    margin-bottom: 24px;
    margin-right: 39px;
  }
  .categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .category {
      color: $grey_light;
      padding: 0;
      background: none;
      border: none;
      font-size: 16px;
      margin-bottom: 16px;
      &:hover {
        color: $grey;
        cursor: pointer;
      }
      &.active {
        color: $black;
        text-decoration: underline;
      }
    }
  }
}
</style>
