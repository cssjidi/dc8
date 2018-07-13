// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import MintUI from 'mint-ui'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import 'mint-ui/lib/style.css'
import '@/assets/css/modern.css'

import App from './App'
import router from './router'
import * as module from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(MintUI)

const store = new Vuex.Store({
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  modules: {
    module
  }
})

Vue.use(VueSocketio, socketio('http://localhost:1000'), store)

/* eslint-disable no-new */
new Vue({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
