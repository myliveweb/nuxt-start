<template>
  <!-- Card -->
  <div class="card card-mb">
    <!-- Card image -->
    <div class="view overlay">
      <img class="card-img-top"  :src="vote.img"
        alt="Card image cap">
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <!-- Card content -->
    <div class="card-body">

      <!-- Title -->
      <h4 class="card-title">{{ vote.name }}</h4>
      <!-- Text -->
      <p class="card-text">{{ vote.text}}</p>
      <!-- Button -->
      <mdb-btn color="primary">Голосовать</mdb-btn>

    </div>

  </div>
  <!-- Card -->
</template>

<script>
import { mdbBtn } from 'mdbvue'
export default {
  name: 'Card',
  props: ['vote'],
  components: {
    mdbBtn
  }
}
</script>

<style scoped>
.card-mb {
  margin-bottom: 2rem;
}
</style>
