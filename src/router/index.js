import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from "../views/Orders.vue"
import OrderId from "../views/OrderId.vue"
import Contact from "../views/Contact.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/orders/orderId',
    name: 'orderId',
    component: OrderId
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },


]

const router = new VueRouter({
  routes
})

export default router
