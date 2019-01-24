import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAWN from "vue-awesome-notifications"

Vue.use(VueAWN, {
  modal: {
    okLabel: 'Reset game',
    cancelLabel: 'Just show board'
  },
  labels: {
    confirm: 'Ohh'
  }
})

require("vue-awesome-notifications/dist/styles/style.css")

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
