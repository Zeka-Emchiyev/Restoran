<template>
  <div>
    <div class="app-header">
      <!-- <router-link to="/nav">Navbar</router-link>| -->
      <Navbar />
    </div>
    <main>
      <router-link to="/order"></router-link>
      <router-view />
    </main>


  </div>
</template>
<script>
import axios from 'axios'
import Navbar from './views/Navbar.vue'
export default {
  components: {
    Navbar
  },
  mounted() {
    axios.get('orders.json')
      .then(response => {
        console.log(response)
        this.$store.commit('setOrders', response.data.orders)
      })
      .catch(e => {
        console.log(e)
      })
  },
}

</script>
<style>
</style>
