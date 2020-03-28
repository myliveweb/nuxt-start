export default function({store, redirect, app}) {
  if(!store.getters.hasToken) {
    let cookieToken = app.$cookies.get('token')
    if(cookieToken) {
      store.commit('setToken', cookieToken)
    } else {
      redirect('/login?message=enterlogin')
    }
  }
}
