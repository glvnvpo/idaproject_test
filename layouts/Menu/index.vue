<template>
  <div :class="$style.menu">
    <div :class="$style.logo">TestList</div>
    <BtnBasket
      :items-amount="$store.state.basket.length"
      @click.native="$emit('basketVisible', true)"
    />
  </div>
</template>

<script>
import BtnBasket from '~/components/BtnBasket/index'
export default {
  name: 'Menu',
  components: { BtnBasket },
}
</script>

<style module lang="scss">
.menu {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 88px;
  padding-right: 108px;
  .logo {
    font-family: PT Sans Bold;
    color: $grey;
    font-size: 22px;
  }
}
</style>
