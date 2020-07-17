<template>
  <div class="d-flex justify-content-center">
      <div class="card mt-4">
    <form @submit.prevent="register" class="box">
    <h1>Register</h1>
        <input type="text" placeholder="Username" v-model="name">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="Confirm Password" v-model="password_confirmation">
        <input type="submit" value="Signup">
    </form>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'signup',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            register() {
                if (this.password !== this.password_confirmation){
                    alert('Incorrect password')
                }
                if (this.password === '') {
                    alert('Password is required')
                }
                if (this.name === '') {
                    alert('Username is required')
                }
                if (this.email === '') {
                    alert('Email is reqired')
                }
                if (this.password && this.name && this.email) {
                    let data = {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                    this.$store.dispatch('REGISTER', data)
                    .then(() => this.$router.push('/profile'))
                    .catch(err => console.log(err))
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>