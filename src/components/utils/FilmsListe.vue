<template>
    <div class="container-fluid">


        <p v-if="errored" class="text-white">Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
            informations pour le
            moment. Veuillez
            réessayer ultérieurement.</p>
        <p v-if="loading" class="text-white">Chargement de la liste de films...</p>


        <div v-else class="row">
            <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 mx-auto" v-for="film in films" v-bind:key=film.id>
                <router-link v-bind:to="'film-detail/' + film.id" class="text-decoration-none">
                    <div class="card mb-3 text-bg-light" style="height: 400px">

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

export default {
    name: 'FilmsListe',
    props: [
        'films',
        'errored',
        'loading'
    ],
    data() {
        return {
            preUrl: "https://image.tmdb.org/t/p/original/"
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