import defaultType from './type'
import fetch from './fetch'
const type = defaultType.socket
const module = {
  state: {
    connect: false,
    message: null
  },
  mutations: {
    [type.FETCH_OK] (state, payload) {
      state.connect = payload.status
    },
    [type.MESSAGE] (state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    socket_userMessage ({ commit }, message) {
      commit(type.MESSAGE, message)
    }
  },
  getters: {
    getLink: state => state.link,
    getQrcode: state => state.qrcode
  }
}

export default module
