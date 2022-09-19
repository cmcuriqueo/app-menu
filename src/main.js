import Vue from 'vue'

window.Vue = require('vue');
import VueEvents from 'vue-events'
Vue.use(VueEvents)
 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faEnvelope, faGlobe, faNetworkWired, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faEnvelope, faGlobe, faNetworkWired, faEllipsisVertical)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
