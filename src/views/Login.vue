<template>
  <div class="d-flex justify-content-center">
    <div class="card mt-4">
    <form action="" class="box">
      <h1>Login</h1>
      <input type="text" placeholder="Username" v-model="name">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Login" @click="login">
    </form>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.name === '') {
        alert('Name is Required')
      }
      if (this.password === '') {
        alert('Password is Required')
      }
      if (this.name && this.password) {
      let userData = {
        name: this.name,
        password: this.password
      };
      this.$store
        .dispatch("LOGIN", userData)
        .then(() => this.$router.push("/profile"))
        .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>