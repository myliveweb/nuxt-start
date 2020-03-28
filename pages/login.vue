<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger" role="alert">
      <span v-if="$route.query.message == 'enterlogin'">Введите логин и пароль</span>
      <span v-if="$route.query.message == 'badlogin'">Неверный логин илим пароль</span>
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Авторизация</h1>
      <div class="form-group">
        <mdb-input label="Login" size="lg" v-model="login" required />
      </div>
      <div class="form-group">
        <mdb-input label="Password" size="lg" v-model="password" required />
      </div>
      <div class="form-group">
        <mdb-btn color="primary" style="margin-left: 0;" type="submit">Login</mdb-btn>
      </div>
    </form>
  </section>
</template>

<script>
import { mdbBtn, mdbInput } from 'mdbvue'
export default {
  name: 'Login',
  layout: 'empty',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  components: {
    mdbBtn,
    mdbInput
  },
  methods: {
    onSubmit() {
      let data = {
        login: this.login,
        password: this.password
      }
      this.$store.dispatch('login', data)
    }
  }
}
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
