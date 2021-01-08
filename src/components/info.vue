<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 20:27:35
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-15 17:31:32
-->
<!-- 结算 -->
<template>
<div>
  <span>总数：{{totalNum}}</span>
  <span>总价：{{totalPrice}}</span>
  <button @click="clearCart">清空购物车</button>
  <button @click="submit">提交订单</button>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'info',
  computed: {
    ...mapGetters([
      'totalPrice',
      'totalNum'
    ])
  },
  methods: {
    ...mapActions([
      'clearCart',
      'submit'
    ])
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
div {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
span {
  margin-left: 20px;
}
button {
  margin-left: 20px;
}
</style>
