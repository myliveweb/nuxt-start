<template>
  <section>
    <div v-if="errors.length" class="alert alert-danger" role="alert">
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Регистрация</h1>
      <div class="form-group">
      <div class="form-group">
        <mdb-input label="Ваше имя" size="lg" v-model="name" />
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
        <mdb-input label="E-Mail" size="lg" v-model="login" />
      </div>
      <div class="form-group">
        <mdb-input label="Пароль" size="lg" v-model="password" />
      </div>
      <div class="form-group">
        <mdb-input label="Повторите пароль" size="lg" v-model="password2" />
      </div>
      <div class="form-group register-group">
        <mdb-btn class="reg-submit" color="primary" type="submit">Зарегистрировать</mdb-btn>
        <nuxt-link class="nav-link register-link" to="/login">Вход</nuxt-link>
      </div>
    </form>
  </section>
</template>

<script>
import { mdbBtn, mdbInput } from 'mdbvue'
export default {
  name: 'Register',
  layout: 'empty',
  data() {
    return {
      errors: [],
      name: '',
      login: '',
      password: '',
      password2: ''
    }
  },
  components: {
    mdbBtn,
    mdbInput
  },
  methods: {
    onSubmit() {
      this.errors.length = 0

      let patt = new RegExp("[A-Za-zА-Яа-яЁё]{2,20}")
      if(!patt.test(this.name))
        this.errors.push('Необходимо указать имя (не менее 2 символов, только буквы).')

      patt = new RegExp("^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$", "i")
      if(!this.login)
        this.errors.push('Необходимо указать E-Mail.')
      else if(!patt.test(this.login))
        this.errors.push('E-Mail указан неправильно.')

      patt = new RegExp("[A-Za-zА-Яа-яЁё0-9_]{6,20}")
      if(!patt.test(this.password))
        this.errors.push('Необходимо указать пароль (не менее 6 символов, буквы цифры и _ ).')

      if(this.password != this.password2)
        this.errors.push('Пароль и повтор пароля не совпадают.')

      if(!this.errors.length) {
        let data = {
          name: this.name,
          login: this.login,
          password: this.password
        }
        this.$store.dispatch('register', data)
      }
    }
  }
}
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
.register-group {
  position: relative;
}
.reg-submit {
  margin-left: 0;
}
.register-link {
  display: inline-block;
  position: absolute;
  bottom: 0;
}
.alert-danger ul {
  margin-bottom: 0;
  padding-left: 15px;
  list-style: none;
}
</style>
