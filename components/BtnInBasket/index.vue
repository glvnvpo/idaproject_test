<template>
  <button :class="$style.btn_in_basket" :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnInBasket',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style module lang="scss">
.btn_in_basket {
  width: 100%;
  background: $black;
  color: $white;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 16px;
  border: none;
  height: 50px;
  margin-top: 24px;
  &:hover {
    background: $grey;
  }
}
</style>
