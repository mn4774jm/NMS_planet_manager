<template>
  <div id="app">
   <Header></Header>
    <Links></Links>
      <RouterView
              v-bind:planets="planets"
              v-on:planet-added="newPlanetAdded"></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>
    // importing all components for use in the app
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewPlanetForm from '@/components/NewPlanetForm'
import PlanetSearch from '@/components/PlanetSearch'
import ConfirmMessage from '@/components/ConfirmMessage'
import PlanetTable from "@/components/PlanetTable";
import Links from "@/components/Links"


export default {
  name: 'App',
    data() {
      return {
          planets: [],
      }
    },
  components: {
    Header,
      Footer,
      NewPlanetForm,
      PlanetSearch,
      ConfirmMessage,
      PlanetTable,
      Links
  },
    methods: {
      newPlanetAdded(planet) {
          this.planets.push(planet)
          this.planets.sort(function(s1, s2) {
              return s1.resource1.toLowerCase() > s2.resource1.toLowerCase() ? -1 : 1
          })
      }
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
  margin-top: 10px;
}
</style>
