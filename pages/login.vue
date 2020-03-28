<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger" role="alert">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Авторизация</h1>
      <div class="form-group">
        <mdb-input label="Login" size="lg" />
      </div>
      <div class="form-group">
        <mdb-input label="Password" size="lg" />
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
  components: {
    mdbBtn,
    mdbInput
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
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
