export default async function({store, redirect, app}) {
  if(!store.getters.hasToken) {
    let cookieToken = app.$cookies.get('token')
    let cookieUserId = app.$cookies.get('user')
    if(cookieToken) {
      const checkToken = await app.$axios.$get('/', {params: {action: 'checktoken', userid: cookieUserId, token: cookieToken }})
      if(checkToken.token) {
        store.commit('setToken', cookieToken)
        store.commit('setUserId', cookieUserId)
      }
    } else {
      redirect('/login?message=enterlogin')
    }
  }
}
