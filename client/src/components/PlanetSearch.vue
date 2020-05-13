<template>
    <div>


<form>
        <div class="form-group">
            <label for="searchResource">Please select an element to search *</label>
            <select id="searchResource" class="form-control" v-model.trim="newSearch">
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
                <button class="btn btn-primary" v-on:click.prevent="planetSearch">Search</button>
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
                    </tr>

                    <PlanetRow
                            v-for="planet in planets" v-bind:key="planet.id"
                            v-bind:planet="planet">
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
            }
        }
    }
</script>

<style>
    /*add styles*/
</style>