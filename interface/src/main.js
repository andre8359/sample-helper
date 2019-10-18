import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import FlagIcon from 'vue-flag-icon'
import * as GoogleMaps from 'vue2-google-maps'
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPray, faMale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import i18n from './locales/i18n'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(FlagIcon)
Vue.use(GoogleMaps, {
  load: {
    // key: 'AIzaSyAzWjTrkOz9dKNUG1kw1uaOHYWEkNIcYf0',
    libraries: 'places,drawing,visualization'
  }
})

library.add([faPray, faMale])
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
