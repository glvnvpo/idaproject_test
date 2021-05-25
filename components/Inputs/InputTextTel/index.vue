<template>
  <input
    v-model="input"
    :type="type"
    :required="required"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'InputTextTel',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      input: '',
    }
  },
  watch: {
    input() {
      this.$emit('inputValue', this.input)
    },
  },
}
</script>

<style module lang="scss">
input[type='text'],
input[type='tel'] {
  width: 100%;
  height: 50px;
  background: $grey_extra_light;
  color: $black;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  &::placeholder {
    color: $grey_light;
  }
}
</style>
