import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.use(Vuetify)


//Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')