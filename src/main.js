import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import car from './components/car.vue'
import ImageGallery from './components/ImageGallery.vue'
import comp from './components/comp.vue'

const app = createApp(App)

app.use(router)
app.component("car",car)
app.component("brand",ImageGallery)
app.component('comp',comp)
app.mount('#app')
