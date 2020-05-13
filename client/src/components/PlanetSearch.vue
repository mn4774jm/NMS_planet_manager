<template>
    <div>


<form>
        <div class="form-group">
<!--            dropdown for search query options-->
            <label for="searchResource">Please select an element to search *</label>
            <select id="searchResource" class="form-control" v-model.trim="newSearch">
                <option value="" disabled hidden >Select Resource</option>
                <option>Ferrite Dust</option>
                <option>Pure Ferrite</option>
                <option>Magnetised Ferrite</option>
                <option>Salt</option>
                <option>Chlorine</option>
                <option>Sodium</option>
                <option>Sodium Nitrate</option>
                <option>Cobalt</option>
                <option>Ionized Cobalt</option>
                <option>Silver</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Ammonia</option>
                <option>Dioxite</option>
                <option>Phosphorus</option>
                <option>Paraffinium</option>
                <option>Pyrite</option>
                <option>Uranium</option>
                <option>Copper</option>
                <option>Activated Copper</option>
                <option>Cadmium</option>
                <option>Activated Cadmium</option>
                <option>Indium</option>
                <option>Activated Indium</option>
                <option>Emeril</option>
                <option>Activated Emeril</option>
                <option>Gamma Root</option>
                <option>Star Bulb</option>
                <option>Frost Crystal</option>
            </select>
            <div>
                <p></p>
<!--                button event triggers call to API through planet search-->
                <button class="btn btn-primary" v-on:click.prevent="planetSearch">Search</button>
                <div class="admin-table-toggle form-check">
<!--                    checkbox is created to show delete buttons when clicked-->
                    <input id="admin-table" type="checkbox" class="form-check-input" v-model="adminTable">
                    <label for="admin-table" class="form-check-label">Admin</label>
                </div>
            </div>
        </div>
</form>

        <div class="card planet-list m-2 p-2">
            <h4 class="card-title">Planets</h4>
            <div id="planet-table">
                <table class="table">
<!--                    column titles for table-->
                    <tr>
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
        name: 'PlanetSearch',
        components: {PlanetRow},

        // define defaults for form fields
        data() {
            return {
                newSearch: '',
                adminTable: false


            }
        },
        props: {
            planets: Array,
        },
        methods: {
            planetSearch() {
                if(this.newSearch){
                    let element = this.newSearch
                    this.$emit('planet-search', element)

                }
            },
            // method call to emit planet to App
            planetDeleted(planet) {
                this.$emit('delete-planet', planet)
            }
        }
    }
</script>

<style>
    /*add styles*/
</style>