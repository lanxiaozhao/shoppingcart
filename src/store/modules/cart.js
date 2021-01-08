/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 20:51:06
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-15 17:34:19
 */
/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2020-07-14 20:51:06
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-07-14 20:59:44
 */
// 初始化数据
const state = {
  // 商品列表
  shopList: [
    {
      id: 1,
      name: '鱼香肉丝',
      price: 25
    },
    {
      id: 2,
      name: '宫保鸡丁',
      price: 22
    },
    {
      id: 3,
      name: '鸡汤',
      price: 13
    },
    {
      id: 4,
      name: '米饭',
      price: 2
    }
  ],
  // 已选商品
  cartProduct: []
}
// 抛出数据，依赖于state的数据，类似于computed也会有缓存
const getters = {
  // 商品列表
  shopList: state => state.shopList,
  // 已选商品
  cartProduct: state => {
    return state.cartProduct.map(({ id, count }) => {
      // cartProduct中不仅需要id和count的值，还需要shopList中的price和name
      const product = state.shopList.find(n => n.id === id)
      return {
        ...product,
        count
      }
    })
  },
  // 计算总价 可以使用getters中的数据作为参数
  totalPrice: (state, getters) => {
    let total = 0
    getters.cartProduct.forEach(item => {
      total += item.price * item.count
    })
    return total
  },
  // 计算总数量
  totalNum: (state, getters) => {
    let total = 0
    getters.cartProduct.forEach(item => {
      total += item.count
    })
    return total
  }
}
// action异步修改数据
const actions = {
  // 分发
  // 添加购物车
  addCart ({ commit }, product) {
    commit('add', {
      id: product.id
    })
  },
  // 已选商品增加数量
  increament ({ commit }, product) {
    commit('increament', {
      id: product.id
    })
  },
  // 已选商品删除
  delProduct ({ commit }, product) {
    commit('del', {
      id: product.id
    })
  },
  // 清空购物车
  clearCart ({ commit }) {
    commit('clear')
  },
  submit ({ commit }) {
    commit('submit')
  }
}
// mutation
const mutations = {
  // 添加购物车
  // 接收分发的方法,这里的id就是传递的参数
  add (state, { id }) {
    // 判断cartProduct是否已经有点击的商品
    const record = state.cartProduct.find(n => n.id === id)
    if (!record) {
      // 没有这个商品则需要新加
      state.cartProduct.push({
        id,
        count: 1
      })
    } else {
      record.count++
    }
  },
  // 已选商品增加数量
  increament (state, { id }) {
    const record = state.cartProduct.find(n => n.id === id)
    record.count++
  },
  // 已选商品删除
  del (state, { id }) {
    state.cartProduct.forEach((item, index) => {
      if (item.id === id) {
        state.cartProduct.splice(index, 1)
      }
    })
  },
  // 清空购物车
  clear (state) {
    state.cartProduct = []
  },
  submit (state) {
    state.cartProduct = []
    alert('成功')
  }
}
// 导出
export default {
  state,
  getters,
  actions,
  mutations
}
