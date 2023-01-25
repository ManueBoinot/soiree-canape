<template>
  <div id="app">


    <!-- HEADER -->
    <HeaderTemp />

    <!-- Si affichage ACCUEIL ======================================================= -->
    <div v-if="$route.path == '/'">
      <h1 class="text-white fw-bold">POPULAIRES EN CE MOMENT</h1>
      <FilmsListe v-bind:films="films" v-bind:errored="errored" v-bind:loading="loading" />
    </div>

    <!-- Si affichage autres PAGES ======================================================= -->
    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <!-- FOOTER -->
    <FooterTemp />

  </div>
</template>

<script>
import FilmsListe from './components/utils/FilmsListe.vue'
import HeaderTemp from './components/templates/HeaderTemp.vue'
import FooterTemp from './components/templates/FooterTemp.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    FilmsListe,
    HeaderTemp,
    FooterTemp,
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
      // Pour récupérer la liste des films (avec Discover)
      .get('https://api.themoviedb.org/3/discover/movie?api_key=1ba19e5a213b1f39b7d58ab4aad6ebb5&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000')
      .then(response => {
        // si on veut ne récupérer qu'un seul film, on met seulement "response" et la clé API sans "Discover"
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

<style>
#app {
  font-family: Kanit, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
