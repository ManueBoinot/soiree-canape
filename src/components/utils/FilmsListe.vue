<template>
    <div class="container-fluid">


        <p v-if="errored" class="text-white">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
            informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>
        <p v-if="loading" class="text-white">Chargement de la liste de films...</p>


        <div v-else class="row">

            <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 mx-auto" v-for="film in films" v-bind:key=film.id>

                <router-link v-bind:to="'fiche-film?id=' + film.id" class="text-decoration-none">

                    <div class="card mb-3 text-bg-light overflow-hidden" style="height: 650px">

                        <!-- AFFICHE FILM -->
                        <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                            style="object-fit: contain; height: 300px;">

                        <div class="card-body" style="font-size: small">

                            <!-- TITRE FILM -->
                            <div class="card-title d-flex align-items-center justify-content-center"
                                style="color: #750202; height: 80px;">

                                <h5 class="fw-bold text-uppercase m-0">{{
                                    film.title
                                }}</h5>
                            </div>

                            <!-- NOTE FILM -->
                            <div class="card-text m-0">
                                <p style="font-size: 1rem;">Note : <span class="fw-bold">{{
                                    film.vote_average
                                }} / 10</span> <span class="fst-italic" style="font-size: 0.7rem;">({{
    film.vote_count
}}
                                        votes)</span></p>
                            </div>

                            <!-- RÉSUMÉ FILM -->
                            <div class="card-text" style="height: 120px">
                                {{ film.overview.slice(0, 200) + '...' }}
                            </div>

                            <!-- DATE SORTIE FILM -->
                            <div class="d-flex justify-content-center mx-auto gap-2 mt-2 fst-italic">(
                                <p class="fw-bold">Date de sortie :</p>
                                <p>{{ formatDate(film.release_date) }}
                                </p>)
                            </div>

                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'FilmsListe',
    props: [
        'films',
        'loading',
        'errored'
    ],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/",
        };
    },

    methods: {
        formatDate(value) {
            return moment(value).format('Do MMMM YYYY');
        }
    }
}

</script>

<style scoped>
.card {
    transition: 0.5s;
}

.card:hover {
    transition: 0.5s;
    transform: scale(1.2);
    z-index: 1;
}
</style>