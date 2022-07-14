<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="../assets/pngwing.com.png" width="50px">
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active margin-left">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link active">Orders</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>