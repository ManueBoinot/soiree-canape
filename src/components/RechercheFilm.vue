<template>
    <div class="container-fluid text-white">
        <h1 class="fw-bold">RECHERCHER UN FILM</h1>
        <h3 class="mb-4">Par titre (version française)</h3>
        <input type="text" class="w-100 p-2 mb-5" style="max-width: 600px;" v-model="query" @keyup="search(query)"
            placeholder="Tapez le titre du film recherché" />
        <FilmsListe v-bind:films="films" v-bind:errored="errored" v-bind:loading="loading" />
    </div>
</template>

<script>
import FilmsListe from './utils/FilmsListe.vue'
import axios from 'axios'

export default {
    name: 'RechercheFilm',
    components: {
        FilmsListe
    },
    data() {
        return {
            films: [],
            query: '',
            loading: true,
            errored: false,
        };
    },

    mounted() {
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&vote_count.gte=100`)
            .then(response => {
                this.films = response.data.results
                axios
                    .get(`https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=original_title.asc&include_adult=false&include_video=false&page=2&vote_count.gte=100`)
                    .then(response => {
                        this.films = this.films.concat(response.data.results)
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                axios
                    .get(`https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=original_title.asc&include_adult=false&include_video=false&page=3&vote_count.gte=100`)
                    .then(response => {
                        this.films = this.films.concat(response.data.results)
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                axios
                    .get(`https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=original_title.asc&include_adult=false&include_video=false&page=4&vote_count.gte=100`)
                    .then(response => {
                        this.films = this.films.concat(response.data.results)
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },

    methods: {
        search(query) {

            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr-FR&query=${query}&page=1&include_adult=false`)
                .then(response => {
                    this.films = response.data.results
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
}
</script>
