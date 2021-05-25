<template>
  <div :class="$style.basket">
    <div :class="$style.shadow" @click="closeBasket()"></div>
    <div :class="$style.content">
      <div :class="$style.header">
        <span :class="$style.title">Корзина</span>
        <button :class="$style.btn_close" @click="closeBasket()">
          <img src="~/assets/imgs/cross.svg" />
        </button>
      </div>
      <div
        v-if="$store.state.basket.length !== 0 && !formSubmited"
        :class="$style.items"
      >
        <span :class="$style.title2">Товары в корзине</span>
        <div :class="$style.cards">
          <ProductCardInBasket
            v-for="(product, index) in $store.state.basket"
            :key="product.id"
            :product="product"
            :index="index"
          />
        </div>
        <span :class="$style.title2">Оформить заказ</span>
        <form @submit.prevent="submitForm()">
          <InputTextTel
            type="text"
            placeholder="Ваше имя"
            @inputValue="(value) => (clientName = value)"
          />
          <InputTextTel
            type="tel"
            placeholder="Телефон"
            @inputValue="(value) => (clientTel = value)"
          />
          <InputTextTel
            type="text"
            placeholder="Адрес"
            @inputValue="(value) => (clientAddress = value)"
          />
          <BtnInBasket text="Отправить" type="submit" />
        </form>
      </div>
      <div v-else-if="formSubmited" :class="$style.submitted">
        <img src="~/assets/imgs/ok-emoji.png" />
        <div :class="$style.title1">Заявка успешно отправлена</div>
        <span :class="$style.title2">Вскоре наш менеджер свяжется с Вами</span>
      </div>
      <div v-else :class="$style.empty">
        <span>Пока что вы ничего не добавили в корзину.</span>
        <BtnInBasket text="Перейти к выбору" @click.native="closeBasket()" />
      </div>
    </div>
  </div>
</template>

<script>
import BtnInBasket from '~/components/BtnInBasket/index'
import InputTextTel from '~/components/Inputs/InputTextTel/index'
export default {
  name: 'Basket',
  components: {
    BtnInBasket,
    InputTextTel,
  },
  data() {
    return {
      clientName: '',
      clientTel: '',
      clientAddress: '',
      formSubmited: false,
    }
  },
  methods: {
    closeBasket() {
      this.$emit('basketVisible', false)
    },
    submitForm() {
      this.clientName = ''
      this.clientTel = ''
      this.clientAddress = ''
      this.$store.dispatch('clearBasket')
      this.formSubmited = true
    },
  },
}
</script>

<style module lang="scss">
.basket {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 9999;
  .shadow {
    background: $white;
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    top: 0;
    right: 0;
    width: 460px;
    height: 100%;
    background: $white;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    padding-top: 52px;
    padding-left: 48px;
    padding-right: 48px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      .title {
        font-family: PT Sans Bold;
        font-size: 32px;
      }
      .btn_close {
        background: none;
        padding: 0;
        border: none;
        margin-right: 5px;
        img {
        }
      }
    }
    .items {
      .title2 {
        color: $grey;
        font-size: 18px;
      }
      .cards {
        margin-top: 16px;
        margin-bottom: 20px;
      }
      form {
        margin-bottom: 60px;
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
      }
    }
    .submitted {
      height: 100%;
      padding-bottom: 64px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        margin-bottom: 24px;
      }
      .title1 {
        margin-bottom: 2px;
        font-family: PT Sans Bold;
        font-size: 24px;
      }
      .title2 {
        color: $grey;
        font-size: 16px;
      }
    }
    .empty {
      span {
        font-size: 22px;
      }
    }
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
  }
}
</style>
