import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp -> instancie l'application / use(router) -> fait le lien avec les routes / mount -> injecte l'application à l'endroit défini
createApp(App).use(router).mount('#app')
