<template>
  <div id="app">
<!--      used to display header component template-->
   <Header></Header>
<!--      used to display Links component template-->
    <Links></Links>
<!--      router view is used to display templates from other components as assigned in the index-->
      <RouterView
              v-bind:planets="planets"
              v-on:planet-added="newPlanetAdded"
              v-on:delete-planet="deletePlanet"
              v-on:planet-search="searchPlanet">
      </RouterView>
    <Footer></Footer>
  </div>
</template>

<script>
    // importing all components for use in the app
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewPlanetForm from '@/components/NewPlanetForm'
import PlanetSearch from '@/components/PlanetSearch'
import PlanetTable from "@/components/PlanetTable";
import Links from "@/components/Links"


export default {
  name: 'App',
    data() {
      return {
          planets: [],
      }
    },
    // list of all components that are used in template
  components: {
    Header,
      Footer,
      NewPlanetForm,
      PlanetSearch,
      PlanetTable,
      Links
  },
    // calls listed method(s) on launch.
    mounted() {
      // fetches planet data
      this.updatePlanet()
    },
    methods: {
      newPlanetAdded(planet) {
          this.$planetService.addPlanet(planet).then( () => {
              this.updatePlanet()
          }).catch(err => {
              let msg = err.response.data.join(', ')
              alert("error adding planet.\n")
          })
      },

        updatePlanet() {
          this.$planetService.getAllPlanets().then( planets => {
              this.planets = planets
          })
        },

        searchPlanet(resource1){
          this.$planetService.searchPlanet(resource1).then( planets => {
              this.planets = planets
          })
        },

        deletePlanet(planet) {
          this.$planetService.deletePlanet(planet.id).then( () => {
              this.updatePlanet()

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
