<template>
  <section>
    <h1>Error 404</h1>
    <nuxt-link to="/">Home Page</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Error',
  date: () => {

  }
}
</script>

<style scoped>
  section {
    width: 600px;
    margin: 0 auto;
    padding-top: 5rem;
  }

  h1 {
    color: red;
  }
</style>
