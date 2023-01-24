<template>
    <div class="container-fluid">
        <h1 class="text-white border-top border-bottom fw-bold">LES FILMS DU MOMENT !</h1>

        <p v-if="errored">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>


        <p v-if="loading">Chargement de la liste de films...</p>

        <div v-else class="row">

            <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 mx-auto" v-for="film in films"
                v-bind:key=film.id>
                <router-link v-bind:to="'/Movies/' + film.id" class="text-decoration-none">
                    <div class="card m-3 text-bg-light" style="height: 400px">
                        <!-- AFFICHE FILM -->

                        <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                            style="object-fit: contain; height: 300px;">

                        <div class="card-body" style="font-size: small">
                            <!-- TITRE FILM -->

                            <h5 class="card-title fw-bold text-uppercase" style="font-size: 0.8rem; color: #750202;">{{
                                film.title
                            }}</h5>

                            <!-- NOTE FILM -->
                            <p class="card-text" style="font-size: 0.8rem;"><small>Note : {{
                                film.vote_average
                            }} / 10 <span class="fst-italic" style="font-size: 0.7rem;">({{ film.vote_count }}
                                        votes)</span></small></p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FilmsListe',
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
            // Pour récupérer la liste des films (avec Discover)
            .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000')
            .then(response => {
                // si on veut ne récupérer qu'un seul film, on met seulement "response" et la clé API sans "Discover"
                this.films = response.data.results
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}

</script>
