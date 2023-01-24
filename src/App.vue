<template>
  <div id="app">

    <!-- HEADER sans navbar -->
    <img alt="logo canapé rouge" src="./assets/logo-canape.png">
    <h4 class="text-white mb-5">Le repaire des couch potatoes</h4>

    <!-- Si affichage ACCUEIL ======================================================= -->
    <div v-if="$route.path == '/'">
      <HeaderTemp />
      <FilmsListe />
    </div>

    <!-- Si affichage ACCUEIL ======================================================= -->
    <div v-if="$route.path == '/FilmsFR'">
      <FilmsFR />
    </div>

  </div>
</template>

<script>
import FilmsListe from './components/utils/FilmsListe.vue'
import HeaderTemp from './components/templates/HeaderTemp.vue'

export default {
  name: 'app',
  components: {
    FilmsListe
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
