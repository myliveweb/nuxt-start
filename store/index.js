export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    this.$cookies.set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  clearToken(state) {
    state.token = null
    this.$cookies.remove('token')
  }
}

export const actions = {
  /*nuxtServerInit({store, dispatch, app}) {
    let cookieToken = this.$cookies.get('token')
    store.dispatch('loginMiddleware', cookieToken)
    //console.log()
  },*/
  async login({commit}, data) {
    const dataLogin = await this.$axios.$get('/', {params: {action: 'login', login: data.login, password: data.password }})
    if(dataLogin.token && dataLogin.token.length) {
      commit('setToken', dataLogin.token)
      this.$router.push('/')
    } else {
      this.$router.push('/login?message=badlogin')
    }
  },
  logout({commit}) {
    //const dataLogout = await this.$axios.$get('/', {params: {action: 'logout' }})
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}
