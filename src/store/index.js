/*
 * @Descripttion:
 * @version
 * @Author: zhaopan
 * @Date: 2020-07-14 19:59:29
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-14 20:55:45
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart
  },
  strict: true, // 严格模式
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
