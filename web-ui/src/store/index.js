import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    accessToken: '',
    refreshToken: '',
    userName: '',
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    updateAuthTokens(state, payload) {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
      state.userName = payload.userName
    },
  },
  actions: {},
  modules: {},
})
