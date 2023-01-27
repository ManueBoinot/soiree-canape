<template>
    <div class="container">
        <p v-if="errored" class="text-white">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
            informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>
        <p v-if="loading" class="text-white">Chargement de la liste de films...</p>

        <div v-else>


            <div class="row text-bg-light mb-3 mx-auto rounded" v-bind:key=film.id>

                <div class="col-md-5 p-0 mx-auto">
                    <!-- AFFICHE FILM -->
                    <img class="rounded-start" v-bind:src="preUrl + film.poster_path" alt="moviePoster"
                        style="max-height: 90vh; max-width: 100%; object-fit: contain;">
                </div>

                <div class="col-md-7 p-5 mx-auto">
                    <!-- TITRE FILM -->
                    <h1 class="fw-bold" style="color: #750202;">{{ film.title }}</h1>
                    <div class="d-flex justify-content-center mx-auto gap-2 mb-3 fst-italic">
                        <p class="fw-bold">Titre original :</p>
                        <p>{{
                            film.original_title
                        }}
                        </p>
                    </div>

                    <!-- NOTE FILM -->
                    <div class="d-flex justify-content-center align-items-center mx-auto gap-2">
                        <p class="fw-bold">Note : </p>
                        <p class="fs-5">{{ film.vote_average }} /
                            10</p>
                        <p class="fst-italic">({{
                            film.vote_count
                        }}
                            votes)</p>
                    </div>

                    <!-- DATE SORTIE FILM -->
                    <div class="d-flex justify-content-center mx-auto gap-2">
                        <p class="fw-bold">Date de sortie :</p>
                        <p>{{ formatDate(film.release_date) }}
                        </p>
                    </div>

                    <!-- LANGUE ORIGINALE FILM -->
                    <div class="d-flex justify-content-center mx-auto gap-2">
                        <p class="fw-bold">Langue originale :</p>
                        <div v-if="film.original_language == 'en'">Anglais</div>
                        <div v-if="film.original_language == 'fr'">Français</div>
                        <div v-if="film.original_language == 'ja'">Japonais</div>
                    </div>


                    <!-- RÉSUMÉ FILM -->
                    <div class="mx-3 mt-5">
                        <p class="fw-bold">Synopsis</p>
                        <p>{{ film.overview }}</p>
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