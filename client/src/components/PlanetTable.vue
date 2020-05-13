<template>
    <div>
<!--        creates header for display-->
        <div class="card planet-list m-2 p-2">
            <h4 class="card-title">Planets</h4>
            <div id="planet-table">
                <div class="admin-table-toggle form-check">
                    <input id="admin-table" type="checkbox" class="form-check-input" v-model="adminTable">
                    <label for="admin-table" class="form-check-label">Admin</label>
                </div>
<!--                header for planets table-->
                <table class="table">
                    <tr>
<!--                        header names-->
                        <th>Name</th>
                        <th>System</th>
                        <th>Resource 1</th>
                        <th>Resource 2</th>
                        <th>Resource 3</th>
                        <th>Coordinates</th>
                        <th>Glyphs</th>
                        <th>Author</th>
                        <th>Comments</th>
<!--                        delete is only shown when v-show is triggered in PlanetTable-->
                        <th v-show="adminTable">Delete</th>
                    </tr>

<!--                    display values from PlanetRow component in template-->
<!--                    loop through each row to bind html to data-->
                    <PlanetRow
                            v-for="planet in planets" v-bind:key="planet.name"
                            v-bind:planet="planet"
                            v-bind:admin="adminTable"
                            v-on:delete-planet="planetDeleted">
                    </PlanetRow>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
import PlanetRow from "@/components/PlanetRow.vue";
export default {
    name: 'PlanetTable',
    components: {PlanetRow},
    data() {
        return {
            adminTable: false
        }
    },

    props: {
        planets: Array,
    },
    methods: {
        // method call to emit planet to App
        planetDeleted(planet) {
            this.$emit('delete-planet', planet)
        }
    },
}
</script>

<style>
    /*add styles*/
</style>