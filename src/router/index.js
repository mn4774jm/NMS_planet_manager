import router from 'vue-router'

import NewPlanetForm from "@/components/NewPlanetForm";
import PlanetTable from "../components/PlanetTable";

export default new router({
    routes: [
        {
            path: '/',
            component: NewPlanetForm
        },
        {
            path: '/browse',
            component: PlanetTable
        }
    ]
})