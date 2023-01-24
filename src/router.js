import App from "./App.vue";
import FilmsFR from "./components/utils/FilmsListe.vue"
import FilmsUS from "./components/utils/FilmsListe.vue"
import Top50 from "./components/utils/Top50Liste.vue"
import FilmDetail from "./components/utils/FicheFilm.vue"
import BoxOffice from "./components/utils/FilmsListe.vue"
import { createWebHistory, createRouter } from "vue-router";

// Création des routes
const routes = [
    { path: '/', component: App },
    { path: '/FilmsFR', component: FilmsFR },
    { path: '/FilmsUS', component: FilmsUS },
    { path: '/Top50', component: Top50 },
    { path: '/FilmDetail', component: FilmDetail },
    { path: '/BoxOffice', component: BoxOffice },
]

// Intégration des routes à ROUTER pour création de fausses URL et navigation en Single Page
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;