<template>
  <div :class="$style.app">
    <Basket v-if="basketVisible" @basketVisible="setBasketVisibility" />
    <Menu @basketVisible="setBasketVisibility" />
    <Nuxt />
  </div>
</template>

<script>
import Menu from '~/layouts/Menu/index'
import Basket from '~/components/Basket/index'
export default {
  components: {
    Menu,
    Basket,
  },
  data() {
    return {
      basketVisible: false,
    }
  },
  fetch({ redirect }) {
    redirect('catalog')
  },
  methods: {
    setBasketVisibility(value) {
      this.basketVisible = value
    },
  },
}
</script>

<style lang="scss" module>
body {
  font-family: PT Sans, sans-serif;
  font-size: 15px;
  color: $black;
  height: auto;
}
body,
html {
  margin: 0;
  padding: 0;
}
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
.app {
  height: 100vh;
  position: relative;
  button {
    font-family: PT Sans, sans-serif;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input[type='text'],
  input[type='tel'] {
    font-family: PT Sans, sans-serif;
  }
}
</style>
