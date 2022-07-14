<template>
  <div class="container">
    <div class="row justify-content-center text-center mt-5">
      <div class="col-4">
        <h2>Günlük cəmi gəlirlər</h2>
        <div class="btn btn-lg w-100 btn-success mt-3">{{ ordersSumAmount }} AZN</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },

  computed: {
    ordersSumAmount() {
      let sum = 0
      if (this.$store.state.orders && this.$store.state.orders.length > 0) {
        this.$store.state.orders.forEach((item) => {
          sum += item.price
        })
        return sum.toFixed(1)
      } else return sum
    }
  },

}
</script>
