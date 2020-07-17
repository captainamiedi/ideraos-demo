<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">IDERAOS</a>
      <ul class="d-flex justify-ccontent-end">
        <li class="nav-link active" v-if="!isLoggedIn">
          <router-link to="login">Login</router-link>
        </li>
        <li class="nav-link" v-if="!isLoggedIn">
          <router-link to="signup">Signup</router-link>
        </li>
        <li class="nav-link" v-if="isLoggedIn">
          <button type="button" class="btn btn-light" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      console.log(this.isLoggedIn);
      this.$store.dispatch("LOGOUT").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>