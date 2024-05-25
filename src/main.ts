import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { createI18n } from 'vue-i18n'
import { languages } from '@/i18n-translate'
import { defaultLocale } from '@/i18n-translate'

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
})
const app = createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
app.config.globalProperties.$axios = axios;

app.mount('#app');
