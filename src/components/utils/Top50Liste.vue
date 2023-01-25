<template>
    <div class="container-fluid">


        <p v-if="errored" class="text-white">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
            informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>
        <p v-if="loading" class="text-white">Chargement de la liste de films...</p>


        <div v-else class="row">
            <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 mx-auto" v-for="(film, index) in films" v-bind:key=film.id>
                <router-link v-bind:to="'film-detail/' + film.id" class="text-decoration-none">
                    <div class="card mb-3 text-bg-light py-2" style="height: 600px">

                        <!-- CLASSEMENT AU TOP 50 -->
                        <div class="card-text py-2" v-if="index == 0">
                            <h5 class="my-auto py-1 pe-2 bg-dark" style="font-size: 1rem; color: gold"><i
                                    class="fa-solid fa-medal"></i> {{ index + 1}}<sup>ère</sup> place</h5>
                        </div>

                        <div class="card-text py-2" v-else-if="index == 1">
                            <h5 class="my-auto py-1 pe-2 bg-dark" style="font-size: 1rem; color: silver"><i
                                    class="fa-solid fa-medal"></i> {{ index + 1}}<sup>nde</sup> place</h5>
                        </div>

                        <div class="card-tex py-2" v-else-if="index == 2">
                            <h5 class="my-auto py-1 pe-2 bg-dark" style="font-size: 1rem; color: chocolate"><i
                                    class="fa-solid fa-medal"></i> {{ index + 1}}<sup>ème</sup> place</h5>
                        </div>

                        <div class="card-text py-2" v-else>
                            <h5 class="my-auto py-1 pe-2 text-bg-dark" style="font-size: 1rem">{{ index +
                            1}}<sup>ème</sup> place
                            </h5>
                        </div>

                        <!-- AFFICHE FILM -->
                        <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                            style="object-fit: contain; height: 300px;">

                        <div class="card-body" style="font-size: small">

                            <!-- TITRE FILM -->
                            <div class="card-title d-flex align-items-center justify-content-center"
                                style="color: #750202;">

                                <h5 class="fw-bold text-uppercase m-0">{{
                                    film.title
                                }}</h5>
                            </div>

                            <!-- NOTE FILM -->
                            <p class="card-text m-0" style="font-size: 1rem;"><small>Note : <span class="fw-bold">{{
                                film.vote_average
                            }} / 10</span> <span class="fst-italic" style="font-size: 0.7rem;">({{
    film.vote_count
}}
                                        votes)</span></small></p>

                            <!-- DATE SORTIE FILM -->
                            <p class="card-text mb-3" style="font-size: 0.8rem;"><small>(Date de sortie : <span
                                        class="fst-italic" style="font-size: 0.7rem;"> {{
                                            formatDate(film.release_date)
                                        }}
                                    </span>)</small></p>

                            <div class="card-text">
                                {{ film.overview.slice(0, 200) + '...' }}
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
    name: 'Top50Liste',
    props: [
        'films',
        'index',
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

<style>
.card {
    transition: 0.5s;
}

.card:hover {
    transition: 0.5s;
    transform: scale(1.2);
    z-index: 1;
}
</style>