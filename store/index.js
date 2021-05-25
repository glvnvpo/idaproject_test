import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      activeCategory: Number,
      basket: [],
    },
    actions: {
      updateActiveCategory({ commit }, value) {
        commit('UPDATE_ACTIVE_CATEGORY', value)
      },
      addToBasket({ commit }, product) {
        commit('ADD_TO_BASKET', product)
      },
      setBasketValue({ commit }, array) {
        commit('SET_BASKET_VALUE', array)
      },
      clearBasket({ commit }) {
        commit('CLEAR_BASKET')
      },
      deleteProductByIndex({ commit }, index) {
        commit('DELETE_PRODUCT_BY_INDEX', index)
      },
    },
    mutations: {
      UPDATE_ACTIVE_CATEGORY(state, value) {
        state.activeCategory = value
      },
      ADD_TO_BASKET(state, product) {
        state.basket.push(product)
        localStorage.setItem('basket', JSON.stringify(state.basket))
      },
      SET_BASKET_VALUE(state, array) {
        state.basket = array
      },
      CLEAR_BASKET(state) {
        state.basket = []
        localStorage.setItem('basket', JSON.stringify(state.basket))
      },
      DELETE_PRODUCT_BY_INDEX(state, index) {
        state.basket.splice(index, 1)
        localStorage.setItem('basket', JSON.stringify(state.basket))
      },
    },
    getters: {},
  })

export default store
