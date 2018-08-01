import saveAs from 'save-as'
import defaultType from './type'
import fetch from './fetch'

const type = defaultType.image
const postType = defaultType.save
const module = {
  state: {
    images: [],
    success: -1
  },
  mutations: {
    [type.FETCH_OK] (state, payload) {
      state.images = payload.images
    },
    [postType.FETCH_OK] (state, payload) {
      state.success = 0
      Object.keys(payload).forEach((key) => {
        const { name, data } = payload[key]
        saveAs(new Blob(data.data, {type: data.type}), name)
      })
    }
  },
  actions: {
    getImage ({ commit }, {url}) {
      fetch({
        url: '/api/post',
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
    },
    saveImage ({commit}, {image}) {
      fetch({
        url: '/api/post/save',
        method: 'post',
        data: {
          image
        },
        successAction: (data) => {
          console.log(data)
          commit(postType.FETCH_OK, data)
        },
        errorAction: (err) => {
          commit(postType.FETCH_ERROR, err)
        }
      })
    }
  },
  getters: {
    getImages: (state) => state.images
  }
}

export default module
