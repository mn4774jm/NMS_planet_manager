import axios from 'axios'

export default {
    getAll() {
        // makes a request to the route in planets.js
        return axios.get('/api/planets/').then( response => {
            return response.data
        })
    }
}