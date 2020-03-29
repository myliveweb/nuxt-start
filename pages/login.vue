<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger" role="alert">
      <span v-if="$route.query.message == 'enterlogin'">Введите логин и пароль</span>
      <span v-if="$route.query.message == 'badlogin'">Неверный логин или пароль</span>
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Авторизация</h1>
      <div class="form-group">
        <mdb-input label="E-Mail" size="lg" v-model="login" required />
      </div>
      <div class="form-group">
        <mdb-input label="Пароль" size="lg" v-model="password" required />
      </div>
      <div class="form-group register-group">
        <mdb-btn class="reg-submit" color="primary" type="submit">Вход</mdb-btn>
        <nuxt-link class="nav-link register-link" to="/register">Регистрация</nuxt-link>
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
.reg-submit {
  margin-left: 0;
}
.register-group {
  position: relative;
}
.register-link {
  display: inline-block;
  position: absolute;
  bottom: 0;
}
</style>
