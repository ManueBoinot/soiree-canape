<template>
    <div v-if="$route.path == '/films-FR'">
      <div class="container-fluid">
        <h1 class="text-white fw-bold">FILMS FRANÇAIS</h1>
        <FilmsListe v-bind:films="films" v-bind:errored="errored" v-bind:loading="loading" />
      </div>
    </div>
  </template>
  
  <script>
  import FilmsListe from './utils/FilmsListe.vue'
  import axios from 'axios'
  
  export default {
    name: 'FilmsFR',
    components: {
      FilmsListe
    },
    data() {
      return {
        films: [],
        loading: true,
        errored: false,
      };
    },
  
    mounted() {
      axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=french&with_watch_monetization_types=flatrate')
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
  </script>
  