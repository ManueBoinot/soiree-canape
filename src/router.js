import App from "./App.vue";
import FilmsFR from "./components/FilmsFR.vue"
import FilmsUS from "./components/FilmsUS.vue"
import TopRated from "./components/TopRated.vue"
import FicheFilm from "./components/FicheFilm.vue"
import BoxOffice from "./components/BoxOffice.vue"
import RechercheFilm from "./components/RechercheFilm.vue"
import { createWebHistory, createRouter } from "vue-router";

// Création des routes
const routes = [
    { path: '/', component: App },
    { path: '/films-FR', component: FilmsFR },
    { path: '/films-US', component: FilmsUS },
    { path: '/top-rated', component: TopRated },
    { path: '/fiche-film', component: FicheFilm },
    { path: '/box-office', component: BoxOffice },
    { path: '/rechercher', component: RechercheFilm },
]

// Intégration des routes à ROUTER pour création de fausses URL et navigation en Single Page
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;