<template>
    <div class="container-fluid">
        <h1 class="text-white border-top border-bottom fw-bold">LES FILMS DU MOMENT !</h1>

        <p v-if="errored">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>


        <p v-if="loading">Chargement de la liste de films...</p>

        <div v-else class="row">
            <div class="col-md-6 col-lg-4 col-xxl-3 mx-auto" v-for="film in films" v-bind:key=film.id>
                <div class="card m-3 text-bg-light">
                    <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                        style="object-fit: cover; height: 550px;">
                    <div class="card-body px-4" style="font-size: small">
                        <h5 class="card-title fw-bold">{{ film.title }}</h5>
                        <p class="card-text" style="font-size: 0.8rem;"><small>Potentiel canapé : {{
                            film.vote_average
                        }} /
                                10 <span class="fst-italic" style="font-size: 0.7rem;">({{ film.vote_count }}
                                    votes)</span></small></p>
                        <p class="card-text overflow-hidden" style="height: 20vh">{{
                            film.overview.slice(0, 400) + '...'
                        }}<router-link v-bind:to="'/Movies/' + film.id"><button type="button"
                                    class="btn btn-outline-dark mx-1 p-1 border-0" style="font-size: 0.7rem;">[Voir
                                    +]</button></router-link>
                        </p>
                        <router-link v-bind:to="'/Movies/' + film.id"><button type="button"
                                class="btn btn-dark mx-auto">Voir la fiche</button></router-link>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'FilmsComp',
    data() {
        return {
            films: [],
            preUrl: "https://image.tmdb.org/t/p/original/",
            loading: true,
            errored: false,
        };
    },
    mounted() {
        axios
            // Pour récupérer la liste des films FRANÇAIS (avec Discover)
            .get('https://api.themoviedb.org/3/movie/popular?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr-FR&page=1&region=France')
            .then(response => {
                // si on veut ne récupérer qu'un seul film, on met seulement "response" et la clé API sans "Discover"
                this.films = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}

</script>
