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
  data() {
    return {
      votes: [
        {id: 1, name: 'Котики', text: 'Ко́шка, или дома́шняя ко́шка, — домашнее животное, одно из наиболее популярных «животных-компаньонов».', img: 'https://source.unsplash.com/544x362/?cat,cats', close: false},
        {id: 2, name: 'Собачки', text: 'Соба́ка — домашнее животное, одно из наиболее популярных животных-компаньонов. Подвид волка.', img: 'https://source.unsplash.com/544x362/?dog,dogs', close: false},
        {id: 3, name: 'Волчки', text: 'Волк, или серый волк, или обыкнове́нный волк, — вид хищных млекопитающих из семейства псовых.', img: 'https://source.unsplash.com/544x362/?wolf', close: true},
        {id: 4, name: 'Бычки', text: 'Быки́ — систематическая группа полорогих парнокопытных млекопитающих, в настоящее время имеющая таксономический ранг трибы.', img: 'https://source.unsplash.com/544x362/?bulls', close: false},
        {id: 5, name: 'Лисички', text: 'Лиси́ца — название нескольких видов млекопитающих семейства псовые. 10 видов этой группы относят к роду собственно лисиц.', img: 'https://source.unsplash.com/544x362/?fox', close: true}
      ]
    }
  },
  components: {
    Card
  },
  computed: {
    hasFBtnVal() {
      return this.$store.getters.hasFBtnVal
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

