<template>
    <div>

        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>
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
                <button class="btn btn-primary" v-on:click.prevent="searchPlanet">Search</button>
            </div>
        </div>
</form>

        <div class="card planet-list m-2 p-2">
            <h4 class="card-title">Planets</h4>
            <div id="planet-table">
                <table class="table">
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
                    <tr class="planet-row" v-for="planet in planets" v-bind:key="planet.resource1">
                        <td>{{ planet.name }}</td>
                        <td>{{ planet.system }}</td>
                        <td>{{ planet.resource1 }}</td>
                        <td>{{ planet.resource2 }}</td>
                        <td>{{ planet.resource3 }}</td>
                        <td>{{ planet.coordinates }}</td>
                        <td>{{ planet.glyphs }}</td>
                        <td>{{ planet.author }}</td>
                        <td>{{ planet.comments }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlanetSearch',
        // define defaults for form fields
        data() {
            return {
                newPlanetName: '',
                newSystemName: '',
                newResource1: 'Choose a resource',
                newResource2: 'Choose a resource',
                newResource3: 'Choose a resource',
                newCoordinates: "",
                newGlyphs: '',
                newAuthor: '',
                newComment: '',
                errors: [],
                success: []
            }
        }
    }
</script>

<style>
    /*add styles*/
</style>