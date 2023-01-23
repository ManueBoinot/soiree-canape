import App from "./App.vue";
import FrenchMovies from "./components/Pages/FrenchMovies.vue"
import { createWebHistory, createRouter } from "vue-router";

// Création des routes
const routes = [
    { path: '/', component: App },
    { path: '/FrenchMovies', component: FrenchMovies },
]

// Intégration des routes à ROUTER pour création de fausses URL et navigation en Single Page
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;