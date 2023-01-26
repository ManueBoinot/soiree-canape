<template>
  <div v-if="$route.path == '/box-office'">
    <div class="container-fluid text-white">
      <h1 class="fw-bold">BOX OFFICE</h1>
      <h3 class="mb-5">Les dernières sorties</h3>
      <FilmsListe v-bind:films="films" v-bind:errored="errored" v-bind:loading="loading" />
    </div>
  </div>
</template>

<script>
import FilmsListe from './utils/FilmsListe.vue'
import axios from 'axios'

export default {
  name: 'BoxOffice',
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
      .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_original_language=fr&vote_count.gte=100')
      .then(response => {
        this.films = response.data.results
        axios
          .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_original_language=en&vote_count.gte=100')
          .then(response => {
            this.films = this.films.concat(response.data.results)
            this.films.sort((a, b) => {
              if (a.release_date > b.release_date) {
                return -1;
              }
              if (a.release_date < b.release_date) {
                return 1;
              }
              // names must be equal
              return 0;
            });
            console.log(this.films)
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
  }
}
</script>
