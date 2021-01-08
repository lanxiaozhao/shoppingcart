<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 19:59:29
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-14 20:36:28
-->
<template>
  <div id="app">
    <h1>VUEX购物车</h1>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import product from './components/product'
import cart from './components/cart'
import info from './components/info'
export default {
  name: 'App',
  components: {
    product,
    cart,
    info
  }
}
</script>

<style>

</style>
