/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { configure } from '@storybook/vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(Vuetify)


// .context(mainDirectory, searchSubDir?=true/false, regex )
const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)