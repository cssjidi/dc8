import Fetch from './fetch'
import defaultType from './type'
import request from 'request'

const type = defaultType.login

const module = {
  state: {
    login: false
  },
  mutations: {
    [type.FETCH_OK] ({commit}) {

    }
  },
  actions: {
    login (commit, {url}) {
      console.log(url)
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          console.log(body)
        }
      })
    }
  },
  getters: {
    isLogin: state => state.login
  }
}

export default module
