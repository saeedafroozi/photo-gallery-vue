import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown,faArrowAltCircleUp,faArrowAltCircleDown,faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowUp, faArrowDown,faArrowAltCircleUp,faArrowAltCircleDown,faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
