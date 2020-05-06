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
      PlanetTable,
      Links
  },
    mounted() {
      this.updatePlanet()
    },
    methods: {
      newPlanetAdded(planet) {
          this.$planetService.addPlanet(planet).then( planet => {
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
