export const state = () => ({
  token: null,
  userId: null
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
  },
  setUserId(state, userId) {
    state.userId = userId
    this.$cookies.set('user', userId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  clearUserId(state) {
    state.userId = null
    this.$cookies.remove('user')
  }
}

export const actions = {
  /*nuxtServerInit({store, dispatch, app}) {
    let cookieToken = this.$cookies.get('token')
    store.dispatch('loginMiddleware', cookieToken)
    //console.log()
  },*/
  async register({commit}, data) {
    const dataRegister = await this.$axios.$get('/', {params: {action: 'register', name: data.name, login: data.login, password: data.password }})
    if(dataRegister.token && dataRegister.token.length) {
      commit('setToken', dataRegister.token)
      commit('setUserId', dataRegister.data.id)
      this.$router.push('/')
    } else {
      this.$router.push('/register?message=badreg')
    }
  },
  async login({commit}, data) {
    const dataLogin = await this.$axios.$get('/', {params: {action: 'login', login: data.login, password: data.password }})
    if(dataLogin.token && dataLogin.token.length) {
      commit('setToken', dataLogin.token)
      commit('setUserId', dataLogin.data.id)
      this.$router.push('/')
    } else {
      this.$router.push('/login?message=badlogin')
    }
  },
  async logout({commit}) {
    let cookieToken = this.$cookies.get('token')
    let cookieUserId = this.$cookies.get('user')
    await this.$axios.$get('/', {params: {action: 'logout', userid: cookieUserId, token: cookieToken }})
    commit('clearToken')
    commit('clearUserId')
  }
}

export const getters = {
  hasToken: s => !!s.token,
  hasTokenVal: s => s.token,
  hasUserIdVal: s => s.userId
}
