export const state = () => ({
  votes: []
})

export const mutations = {
  setVotes(state, votes) {
    state.votes = votes
  }
}

export const actions = {
  async fetch({commit}) {
    const votes = await this.$axios.$get('/', {params: {action: 'votes', cnt: 10 }})
    commit('setVotes', votes.data)
  }
}

export const getters = {
  votes: s => s.votes
}
