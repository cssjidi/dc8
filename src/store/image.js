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

    [postType.FETCH_OK] ({commit, state}, payload) {
      console.log(payload)
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
    saveImage ({commit}, {images, savePath}) {
      console.log(images, savePath)
      let pic = []
      Object.keys(images).forEach((key) => {
        if (images[key].check) {
          pic.push(images[key].url)
        }
      })
      fetch({
        url: '/api/saveImage',
        method: 'post',
        data: {
          images: pic,
          savePath
        },
        successAction: (data) => {
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
