<template>
  <div class="container-fluid text-white">
    <h1 class="fw-bold">TOP 50</h1>
    <h3 class="mb-5">Classement des 50 films les mieux notés* <br> <small class="fst-italic"
        style="font-size: 0.8rem;">(* sur une base de 5000 votes minimum)</small></h3>
        <BoutonFiltre v-bind:films="films" />
    <Top50Liste v-bind:films="films" v-bind:errored="errored" v-bind:loading="loading" />
  </div>
</template>

<script>
import Top50Liste from './utils/Top50Liste.vue'
import BoutonFiltre from './utils/BoutonFiltre.vue'
import axios from 'axios'

export default {
  name: 'TopRated',
  components: {
    Top50Liste,
    BoutonFiltre
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
      .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=true&page=1&vote_count.gte=5000')
      .then(response => {
        this.films = response.data.results
        axios
          .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=true&page=2&vote_count.gte=5000')
          .then(response => {
            this.films = this.films.concat(response.data.results)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
        axios
          .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=true&page=3&vote_count.gte=5000')
          .then(response => {
            this.films = this.films.concat(response.data.results).splice(0, 50)
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
