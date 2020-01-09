import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB4aKnDYKZIXbcVisZDn5ry0Ed3ugUMZ9M',
    libraries: 'places' // necessary for places input
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
