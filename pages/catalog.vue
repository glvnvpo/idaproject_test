<template>
  <div :class="$style.catalog">
    <CatalogMenu :categories="categories" />
    <div :class="$style.page">
      <SortingBar @sortBy="setSortBy" />
      <nuxt-child :products="products" :sort-by="sortBy" />
    </div>
  </div>
</template>

<script>
import CatalogMenu from '~/layouts/CatalogMenu/index'
import SortingBar from '~/layouts/SortingBar/index'
export default {
  name: 'Catalog',
  components: {
    SortingBar,
    CatalogMenu,
  },
  async asyncData(context) {
    const responseCategories = await context.app.$axios.$get(`product-category`)
    let responseProducts
    if (
      context.route.params.products &&
      context.store.state.activeCategory === Number
    ) {
      context.store.dispatch(
        'updateActiveCategory',
        Number(context.route.params.products)
      )
    }
    if (context.store.state.activeCategory !== Number) {
      responseProducts = await context.app.$axios.$get(`product`, {
        params: { category: context.store.state.activeCategory },
      })
    } else {
      responseProducts = await context.app.$axios.$get(`product`, {
        params: { category: responseCategories[0].id },
      })
      context.store.dispatch('updateActiveCategory', responseCategories[0].id)
    }
    if (
      !context.route.params.products &&
      context.store.state.activeCategory !== Number
    ) {
      context.redirect(
        'catalog/' + context.store.state.activeCategory.toString()
      )
    }
    return { categories: responseCategories, products: responseProducts }
  },
  data() {
    return {
      categories: [],
      products: [],
      sortBy: 'price',
    }
  },
  computed: {
    getActiveCategory() {
      return this.$store.state.activeCategory
    },
  },
  watch: {
    getActiveCategory(value) {
      this.updateProducts(value)
    },
  },
  mounted() {
    if (localStorage.getItem('basket')) {
      this.$store.dispatch(
        'setBasketValue',
        JSON.parse(localStorage.getItem('basket'))
      )
    }
  },
  methods: {
    async updateProducts(id) {
      const res = await this.$axios.$get(`product`, {
        params: { category: id },
      })
      this.products = res
    },
    setSortBy(value) {
      this.sortBy = value
    },
  },
}
</script>

<style module lang="scss">
.catalog {
  display: flex;
  padding-left: 88px;
  padding-right: 88px;
  position: relative;
  padding-bottom: 66px;
  .page {
    width: 100%;
    padding-top: 42px;
  }
}
</style>
