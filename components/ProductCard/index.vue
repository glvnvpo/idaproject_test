<template>
  <div :class="$style.product_card">
    <div :class="$style.wrap_1">
      <div :class="$style.rating">
        <img src="~/assets/imgs/star.svg" />
        <div :class="$style.value" :style="{ '--rating': product.rating }">
          {{ product.rating.toFixed(1) }}
        </div>
      </div>
      <img
        :class="$style.photo"
        :src="'https://frontend-test.idaproject.com' + product.photo"
        :alt="product.name + ' фотография'"
      />
      <button :class="$style.btn_basket" @click="addToBasket(product)">
        <img src="~/assets/imgs/basket_grey.svg" />
      </button>
    </div>
    <div :class="$style.wrap_2">
      <div :class="$style.name">{{ getNameInFormat(product.name) }}</div>
      <div :class="$style.price">{{ getPriceInFormat(product.price) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getPriceInFormat(price) {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      return formatter.format(price)
    },
    getNameInFormat(name) {
      return name
        .split(' ')
        .map(function (word) {
          return word.length > 2
            ? word[0].toUpperCase() + word.substr(1).toLowerCase()
            : word.toUpperCase()
        })
        .join(' ')
    },
    addToBasket(product) {
      this.$store.dispatch('addToBasket', product)
    },
  },
}
</script>

<style module lang="scss">
.product_card {
  width: 264px;
  height: 272px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background: $white;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .wrap_1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .rating {
      font-family: PT Sans Bold;
      color: $yellow;
      font-size: 10px;
      display: flex;
      align-items: center;
      img {
        margin-right: 3px;
        margin-top: 2px;
      }
      .value {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 14px;
          height: calc(14px / 5 * var(--rating));
          background: url('~assets/imgs/star_filled.svg');
          background-position: bottom;
          bottom: -1px;
          left: -17px;
        }
      }
    }
    .photo {
      height: 180px;
    }
    .btn_basket {
      position: relative;
      border: none;
      background: none;
      padding: 0;
      margin-right: 2px;
      margin-top: 1px;
      img {
        width: 12px;
      }
      &:hover {
        img {
          opacity: 0;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          background-image: url('~assets/imgs/basket_black.svg');
          background-size: 12px 14px;
          display: inline-block;
          width: 12px;
          height: 14px;
        }
      }
    }
  }
  .wrap_2 {
    font-size: 14px;
    .name {
      color: $grey;
      margin-bottom: 6px;
    }
    .price {
      font-family: PT Sans Bold;
    }
  }
}
</style>
