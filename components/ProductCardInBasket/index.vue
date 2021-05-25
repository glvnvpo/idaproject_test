<template>
  <div :key="product.id" :class="$style.product_card_in_basket">
    <img
      :class="$style.photo"
      :src="'https://frontend-test.idaproject.com' + product.photo"
      :alt="product.name + ' фотография'"
    />
    <div :class="$style.block">
      <div :class="$style.name">
        {{ getNameInFormat(product.name) }}
      </div>
      <div :class="$style.price">
        {{ getPriceInFormat(product.price) }}
      </div>
      <div :class="$style.rating">
        <img src="~/assets/imgs/star.svg" />
        <div :class="$style.value" :style="{ '--rating': product.rating }">
          {{ product.rating.toFixed(1) }}
        </div>
      </div>
    </div>
    <button :class="$style.delete" @click="removeProduct(index)">
      <img src="~/assets/imgs/trash_grey.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCardInBasket',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: Number,
    },
  },
  methods: {
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
    getPriceInFormat(price) {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      return formatter.format(price)
    },
    removeProduct(index) {
      this.$store.dispatch('deleteProductByIndex', index)
    },
  },
}
</script>

<style module lang="scss">
.product_card_in_basket {
  width: 100%;
  height: 120px;
  background: $white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  .photo {
    max-height: 90px;
    height: auto;
    width: auto;
    max-width: 70px;
    object-fit: contain;
  }
  .block {
    width: 170px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      color: $grey;
      margin-bottom: 6px;
    }
    .price {
      font-family: PT Sans Bold;
      margin-bottom: 19px;
    }
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
        margin-top: 2px;
        &:before {
          content: '';
          position: absolute;
          width: 14px;
          height: calc(14px / 5 * var(--rating));
          background: url('~/assets/imgs/star_filled.svg');
          background-position: bottom;
          bottom: -1px;
          left: -17px;
        }
      }
    }
  }
  .delete {
    position: relative;
    border: none;
    background: none;
    padding: 0;
    &:hover {
      img {
        opacity: 0;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background-image: url('~assets/imgs/trash_black.svg');
        background-size: 20px 22px;
        display: inline-block;
        width: 20px;
        height: 22px;
      }
    }
  }
}
</style>
