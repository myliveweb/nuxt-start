<template>
  <section>
    <h1>{{user.name}}</h1>
    <hr>
    <h3>{{user.country}}</h3>
    <h3>{{user.coordinates}}</h3>
  </section>
</template>

<script>
export default {
  name: 'User',
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const userData = await $axios.$get('/', {params: {action: 'user', id: params.id }})
    const user = userData.data
    return {user}
  }
}
</script>

<style>

</style>
