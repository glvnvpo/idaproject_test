<template>
  <button :class="$style.btn_basket">
    <img src="~/assets/imgs/basket_black.svg" />
    <div v-if="itemsAmount !== 0" :class="$style.amount">{{ itemsAmount }}</div>
  </button>
</template>

<script>
export default {
  name: 'BtnBasket',
  props: {
    itemsAmount: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style module lang="scss">
.btn_basket {
  border: none;
  background: none;
  padding: 0;
  position: relative;
  .amount {
    position: absolute;
    width: 12px;
    height: 12px;
    background: $grey-light;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-size: 8px;
    font-family: PT Sans Bold;
    top: -4px;
    right: -6px;
  }
}
</style>
