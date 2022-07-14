import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    menuItems: [
      {
        id: 1,
        name: 'Çörəkdə ət dönəri',
        price: 4
      },
      {
        id: 2,
        name: 'Lavaşda ət dönəri',
        price: 4.5
      },
      {
        id: 3,
        name: 'Cola',
        price: 2
      },
    ],
    servants: [
      {
        id: 1,
        name: 'Lale'
      },
      {
        id: 2,
        name: 'Nergiz'
      },
      {
        id: 3,
        name: 'Reyhan'
      },
    ],
    tables: [
      {
        id: 1,
        name: 'Masa 1'
      },
      {
        id: 2,
        name: 'Masa 2'
      },
      {
        id: 3,
        name: 'Masa 3'
      }
    ]
  },
  getters: {
  },
  mutations: {
    createOrder(state, order) {
      state.orders.push(order)
    },
    submitOrderItems(state, order) {
      const orderIndex = state.orders.findIndex(orderMain => orderMain.id === order.id)
      state.orders[orderIndex].price = order.price
      state.orders[orderIndex].orderItems = order.orderItems
    },
    setOrders(state, orders) {
      state.orders = orders
    }
  },
  actions: {
  },
  modules: {
  }
})
