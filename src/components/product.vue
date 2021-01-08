<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 20:05:48
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-14 22:27:18
-->
<!-- 商品列表 -->
<template>
<div>
  <h3>商品列表</h3>
  <table>
    <thead>
      <tr>
        <td>id</td>
        <td>名称</td>
        <td>价格</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in shopList" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="addCart(item)">添加</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'product',
  computed: {
    ...mapGetters([
      'shopList'
    ])
  },
  methods: {
    ...mapActions([
      'addCart'
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
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  text-align: center;
  font-size: 14px;
  padding: 10px;
}
</style>
