<template>
  <div id="app">
   <Header></Header>
      <NewPlanetForm></NewPlanetForm>
      <PlanetTable></PlanetTable>
<!--    Add content here-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewPlanetForm from '@/components/NewPlanetForm'
import PlanetTable from '@/components/PlanetTable'
import ConfirmMessage from '@/components/ConfirmMessage'


export default {
  name: 'App',
  components: {
    Header,
      Footer,
      NewPlanetForm,
      PlanetTable,
      ConfirmMessage
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
