<template>
  <div class="container-fluid text-white">
    <FilmDetails v-bind:film="film" v-bind:errored="errored" v-bind:loading="loading" />
  </div>
</template>

<script>
import FilmDetails from './utils/FilmDetails.vue'
import axios from 'axios'

export default {
  name: 'FicheFilm',
  components: {
    FilmDetails
  },
  data() {
    return {
      film: [],
      loading: true,
      errored: false,
    };
  },

  mounted() {
    axios

      .get('https://api.themoviedb.org/3/movie/' + this.$route.query.id + '?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr')
      .then(response => {
        this.film = response.data
        console.log(this.film)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
