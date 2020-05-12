//axios is used to make api requests from the vue client to the express api server
import axios from 'axios'

const base_url = '/api/planets'

export default {
    getAllPlanets() {
        // makes a request to the route in planets.js
        return axios.get(base_url).then( response => {
            return response.data
        })
    },
    // makes a request to post new planet as JSON data
    addPlanet(planet) {
        return axios.post(base_url, planet).then(response => {
            return response.data
        })
    },
    searchPlanet(planet){
        return axios.get(base_url, planet).then( response => {
            return response.data
        })
    },
    deletePlanet() {
        return axios.delete(`${base_url}/${id}`),then( response => {
            return response.data
        })
    }

}