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
      <mdb-btn v-if="vote.close" class="btn btn-outline-primary waves-effect">Смотреть результаты</mdb-btn>
      <mdb-btn v-else color="primary">Голосовать</mdb-btn>

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
.btn-outline-primary,
.btn-outline-primary:hover,
.btn-outline-primary:focus,
.btn-outline-primary:active,
.btn-outline-primary:active:focus,
.btn-outline-primary.active {
    color: #4285f4 !important;
    background-color: transparent !important;
    border-color: #4285f4 !important;
}
</style>
