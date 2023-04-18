import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store'
import { registerPlugins } from '@/plugins'
import './main.scss'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(store)

app.use(vuetify)
registerPlugins(app)
app.mount('#app')
