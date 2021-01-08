<!--
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 20:18:10
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-15 17:28:57
-->
<!-- 购物车 -->
<template>
<div>
  <h3>已选商品</h3>
  <table>
    <div v-if="cartProduct.length !== 0">
    <thead>
      <tr>
        <td>id</td>
        <td>名称</td>
        <td>价格</td>
        <td>数量</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in cartProduct" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td>
          <button @click="increament(item)">增加</button>
          <button @click="delProduct(item)">删除</button>
        </td>
      </tr>
    </tbody>
    </div>
    <div v-else>
        购物车为空
    </div>
  </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapGetters([
      'cartProduct'
    ])
  },
  methods: {
    ...mapActions([
      'increament',
      'delProduct'
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
