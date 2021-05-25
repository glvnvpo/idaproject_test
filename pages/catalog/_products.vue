<template>
  <div :class="$style.product">
    <div :class="$style.cards">
      <ProductCard
        v-for="product in productsData"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard/index'
export default {
  name: 'Products',
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    sortBy: {
      type: String,
      default: 'price',
    },
  },
  data() {
    return {
      ascending: false,
      sortValuesShow: true,
      productsData: this.products,
    }
  },
  watch: {
    sortBy() {
      this.makeSorted()
    },
    products() {
      this.makeSorted()
    },
  },
  mounted() {
    this.makeSorted()
  },
  methods: {
    makeSorted() {
      const products = []
      Object.assign(products, this.products)
      this.productsData = products.sort((a, b) =>
        a[this.sortBy] < b[this.sortBy] ? 1 : -1
      )
    },
  },
}
</script>

<style module lang="scss">
.product {
  .cards {
    margin-top: 34px;
    display: grid;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(auto-fill, 264px);
    justify-content: center;
  }
}
</style>
