import defaultType from './type'
import fetch from './fetch'
import Nes from 'nes/dist/client'
const client = new Nes.Client('ws://localhost:1000')
console.log(client)
const type = defaultType.link
const module = {
  state: {
    link: '',
    qrcode: '',
    success: -1
  },
  mutations: {
    [type.FETCH_OK] (state, payload) {
      state.link = payload.link
      state.qrcode = payload.image
    }
  },
  actions: {
    fetchLink ({ commit }, {url}) {
      fetch({
        url: '/api/link',
        method: 'post',
        data: {
          url
        },
        successAction: (data) => {
          commit(type.FETCH_OK, data)
        },
        errorAction: (err) => {
          commit(type.FETCH_ERROR, err)
        }
      })
    }
  },
  getters: {
    getLink: state => state.link,
    getQrcode: state => state.qrcode
  }
}

export default module
