<template>
  <section class="container">
    <div class="btn-group btngb" data-toggle="buttons">
      <label class="btn btn-light-blue form-check-label btngl" v-bind:class="{active: hasFBtnVal === 'all'}">
        <input @click.prevent="filterBtn('all')" class="form-check-input" type="radio" name="options" id="option1" autocomplete="off" checked>
        Все голосования
      </label>
      <label class="btn btn-light-blue form-check-label" v-bind:class="{active: hasFBtnVal === 'actY'}">
        <input @click.prevent="filterBtn('actY')" class="form-check-input" type="radio" name="options" id="option2" autocomplete="off">
        Активные
      </label>
      <label class="btn btn-light-blue form-check-label" v-bind:class="{active: hasFBtnVal === 'actN'}">
        <input @click.prevent="filterBtn('actN')" class="form-check-input" type="radio" name="options" id="option3" autocomplete="off">
        Завершенные
      </label>
    </div>
    <div class="row row-cols-3">
      <div class="col" v-for="vote in filteredVote" :key="vote.id">
        <Card v-bind:vote="vote" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Home',
  async fetch({store}) {
    if(store.getters['votes/votes'].length === 0) {
      await store.dispatch('votes/fetch')
    }
  },
  /*data() {
    return {
      votes: [
        {id: 1, req: 'Котики', opisanie: 'Ко́шка, или дома́шняя ко́шка, — домашнее животное, одно из наиболее популярных «животных-компаньонов».', img: 'photo-1582541990881-b2dc79eeb689.jpg', close: 0},
        {id: 2, req: 'Собачки', opisanie: 'Соба́ка — домашнее животное, одно из наиболее популярных животных-компаньонов. Подвид волка.', img: 'photo-1541857181491-d04fd4ce7133.jpg', close: 0},
        {id: 3, req: 'Волчки', opisanie: 'Волк, или серый волк, или обыкнове́нный волк, — вид хищных млекопитающих из семейства псовых.', img: 'photo-1558369359-32c0fb3c83cc.jpg', close: 1},
        {id: 4, req: 'Бычки', opisanie: 'Быки́ — систематическая группа полорогих парнокопытных млекопитающих, в настоящее время имеющая таксономический ранг трибы.', img: 'photo-1558172475-f02feeed9c63.jpg', close: 0},
        {id: 5, req: 'Лисички', opisanie: 'Лиси́ца — название нескольких видов млекопитающих семейства псовые. 10 видов этой группы относят к роду собственно лисиц.', img: 'photo-1569449047196-cebeecbc6b6b.jpg', close: 1}
      ]
    }
  },*/
  components: {
    Card
  },
  computed: {
    hasFBtnVal() {
      return this.$store.getters.hasFBtnVal
    },
    votes() {
      return  this.$store.getters['votes/votes']
    },
    filteredVote() {
      if(this.$store.getters.hasFBtnVal === 'all') {
        return this.votes
      }

      if(this.$store.getters.hasFBtnVal === 'actY') {
        return this.votes.filter(v => !v.close)
      }

      if(this.$store.getters.hasFBtnVal === 'actN') {
        return this.votes.filter(v => v.close)
      }
    }
  },
  methods: {
    filterBtn(value) {
      this.$store.dispatch('setFBtn', value)
    }
  }
}
</script>

<style scoped>
.btngb {
  margin-bottom: 2rem;
}
.btngl {
  margin-left: 0;
}
[type="radio"]:not(:checked), [type="radio"]:checked {
    position: absolute;
    pointer-events: none;
    opacity: 0;
}
</style>

