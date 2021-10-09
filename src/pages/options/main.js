import { createApp } from 'vue'
import App from './Index.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from '@/quasar-user-options'

createApp(App)
  .use(Quasar, quasarUserOptions)
  .mount('#app')
