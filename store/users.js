export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({commit}) {
    const users = await this.$axios.$get('/', {params: {action: 'users', cnt: 10 }})
    commit('setUsers', users.data)
  }
}

export const getters = {
  users: s => s.users
}
