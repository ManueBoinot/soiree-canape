<template>
  <div id="app">

    <Header />
    <div v-if="$route.path == '/'">
      <img alt="Vue logo" src="./images/logo-canape.jpg">
      <AccueilComp msg="Qu'est-ce qu'on regarde ce soir ?" />
    </div>


    <Footer />
  </div>
</template>

<script>
import AccueilComp from './components/AccueilComp.vue'

export default {
  name: 'App',
  components: {
    AccueilComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
