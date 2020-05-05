import router from 'vue-router'

import NewPlanetForm from "@/components/NewPlanetForm";
import PlanetTable from "@/components/PlanetTable";
import About from "@/components/About"
import PlanetSearch from "@/components/PlanetSearch"

export default new router({
    routes: [
        {
            path: '/',
            component: NewPlanetForm
        },
        {
            path: '/browse',
            component: PlanetTable
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/search',
            component: PlanetSearch
        }
    ]
})