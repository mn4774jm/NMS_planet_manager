<template>
    <div>
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div class="card add-planet m-2 p-2">
            <form>
                <h4 class="card-title">Add New Planet</h4>

                <div class="form-group">
                    <label for="name">Planet Name *</label>
                    <input id="name" class="form-control" v-model.trim="newPlanetName">
                </div>

                <div class="form-group">
                    <label for="system">System Name *</label>
                    <input id="system" class="form-control" v-model.trim="newSystemName">
                </div>

                <div class="form-group">
                    <label for="resource1">Resource 1 *</label>
                    <select id="resource1" class="form-control" v-model.trim="newResource1">
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
                </div>

                <div class="form-group">
                    <label for="resource2">Resource 2</label>
                    <select id="resource2" class="form-control" v-model.trim="newResource2">
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
                </div>

                <div class="form-group">
                    <label for="resource3">Resource 3</label>
                    <select id="resource3" class="form-control" v-model.trim="newResource3">
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
                </div>

                <div class="form-group">
                    <label for="coordinates">Galactic Coordinates</label>
                    <input id="coordinates" class="form-control" v-model.trim="newCoordinates">
                </div>

                <div class="form-group">
                    <label for="glyphs">Portal Glyphs *</label>
                    <input id="glyphs" class="form-control" v-model.trim="newGlyphs">
                </div>

                <div class="form-group">
                    <label for="author">Author</label>
                    <input id="author" class="form-control" v-model.trim="newAuthor">
                </div>

                <div class="form-group">
                    <label for="comments">Comments</label>
                    <input id="comments" class="form-control" v-model.trim="newComment">
                </div>

                <button class="btn btn-primary" v-on:click.prevent="addPlanet">Submit Planet</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewPlanetForm',
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
                errors: []
            }
        },
        methods: {
            addPlanet() {
                this.errors = []
                if (this.newPlanetName && this.newSystemName && this.resource1 && this.newGlyphs) {
                    let planet = { name: this.newPlanetName, system: this.newSystemName, resource1: this.newResource1,
                    resource2: this.newResource2, resource3: this.newResource3, coordinates: this.newCoordinates,
                    glyphs: this.newGlyphs, author: this.newAuthor, comments: this.newComment }

                    // todo emit message to parent with new planet
                    this.newPlanetName = ''
                    this.newSystemName = ''
                    this.newResource1 = 'Choose a resource'
                    this.newResource2 = 'Choose a resource'
                    this.newResource3 = 'Choose a resource'
                    this.newCoordinates = ""
                    this.newGlyphs = ''
                    this.newAuthor = ''
                    this.newComment = ''

                } else {
                    this.errors.push('Please fill in required fields')
                }
            }
        }
    }
</script>

<style>
    /*add styles*/
</style>