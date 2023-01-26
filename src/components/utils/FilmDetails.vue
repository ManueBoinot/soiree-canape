<template>
    <div class="container-fluid">
        <p v-if="errored" class="text-white">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
            informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>
        <p v-if="loading" class="text-white">Chargement de la liste de films...</p>

        <div v-else class="row">
            <div class="col">
                <div class="card text-bg-light mb-3" v-bind:key=film.id style="height: 50vh">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <!-- AFFICHE FILM -->
                            <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                                style="height: 50%; object-fit: contain;">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <!-- TITRE FILM -->
                                <h5 class="card-title">{{ film.title }}</h5>
                                <!-- NOTE FILM -->
                                <div class="card-text m-0">
                                    <p style="font-size: 1rem;">Note : <span class="fw-bold">{{ film.vote_average }} /
                                            10</span> <span class="fst-italic" style="font-size: 0.7rem;">({{
                                                film.vote_count
                                            }}
                                            votes)</span></p>
                                </div>
                                <!-- RÉSUMÉ FILM -->
                                <p class="card-text">{{ film.overview }}</p>
                                <!-- DATE SORTIE FILM -->
                                <p class="card-text"><small class="text-body-secondary">(Date de sortie : <span
                                            class="fst-italic" style="font-size: 0.7rem;"> {{
    formatDate(film.release_date)
                                            }}
                                        </span>)</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'FilmDetails',
    props: [
        'film',
        'errored',
        'loading'
    ],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/"
        }
    },

    methods: {
        formatDate(value) {
            return moment(value).format('Do MMMM YYYY');
        }
    }
}
</script>