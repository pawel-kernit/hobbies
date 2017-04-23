import Vue from 'vue'
import Vuex from 'vuex'
import notification from './modules/notification'
import auth from './modules/auth'
import localStoragePlugin from './plugins/localStorage'
import items from './modules/items'
import users from './modules/users'
import info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { notification, auth, items, users, info },
  plugins: [localStoragePlugin]
})
