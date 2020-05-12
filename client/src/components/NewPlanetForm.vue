<template>
    <div>
<!--        display error message from addPlanet method if condition triggered-->
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

<!--        display success message if condition triggered-->
        <div class="alert alert-success" v-show="success && success.length > 0">
            <li v-for="yay in success">{{ yay }}</li>
        </div>

        <div class="card add-planet m-2 p-2">
            <form>
                <h4 class="card-title">Add New Planet</h4>
<!--                user inputs to form and labels-->
                <div class="form-group">
                    <label for="name">Planet Name *</label>
                    <input id="name" class="form-control" v-model.trim="newPlanetName">
                </div>

                <div class="form-group">
                    <label for="system">System Name *</label>
                    <input id="system" class="form-control" v-model.trim="newSystemName">
                </div>
                <div class="form-group">
                    <label>Planetary Resources</label>
                </div>

                <div class="dropdown">
<!--                    <label for="resource1">Resource 1 *</label>-->
                    <select id="resource1" class="form-control" v-model.trim="newResource1">
                        <option value="" disabled hidden>Resource 1*</option>
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

                <div class="dropdown">

<!--                    <label for="resource2">Resource 2</label>-->
                    <select id="resource2" class="form-control" v-model.trim="newResource2">
                        <option value="" disabled hidden>Resource 2*</option>
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

                <div class="dropdown">
<!--                    <label for="resource3">Resource 3</label>-->
                    <select id="resource3" class="form-control" v-model.trim="newResource3">
                        <option value="" disabled hidden>Resource 3*</option>

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
<p></p>
                <div class="form-group">
                    <label for="coordinates">Galactic Coordinates</label>
                    <input id="coordinates" class="form-control" v-model.trim="newCoordinates">
                </div>

                <div class="form-group">
                    <label for="glyphs">Portal Glyphs *</label>
                    <input id="glyphs" class="form-control" v-model.trim="newGlyphs">
<!--                    TODO try to make this a 'what is this" button-->
<!--                    <img src="@/assets/glyph.jpg" alt="glyph map" width="300">-->
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
        // define defaults for form fields
        data() {
            return {
                newPlanetName: '',
                newSystemName: '',
                newResource1: '',
                newResource2: '',
                newResource3: '',
                newCoordinates: "",
                newGlyphs: '',
                newAuthor: '',
                newComment: '',
                errors: [],
                success: []
            }
        },
        methods: {
            addPlanet() {
                this.errors = []
                this.success = []
                //TODO figure out how to use input from selected for validation
                // validation for required fields before submitting the form
                if (this.newPlanetName && this.newSystemName && this.newGlyphs && this.newResource1 && this.newResource2
                && this.newResource3) {
                    let planet = { name: this.newPlanetName, system: this.newSystemName, resource1: this.newResource1,
                    resource2: this.newResource2, resource3: this.newResource3, coordinates: this.newCoordinates,
                    glyphs: this.newGlyphs, author: this.newAuthor, comments: this.newComment }
                    // save success message to success list to display in template
                    this.success.push('New planet Submitted Successfully')
                    //emit message to parent
                    this.$emit('planet-added', planet)
                    //clear all fields for next entry
                    this.newPlanetName = ''
                    this.newSystemName = ''
                    this.newResource1 = ''
                    this.newResource2 = ''
                    this.newResource3 = ''
                    this.newCoordinates = ""
                    this.newGlyphs = ''
                    this.newAuthor = ''
                    this.newComment = ''

                } else {
                    // add error message to errors list to be displayed in template
                    this.errors.push('Please fill in required fields')
                }
            }
        }
    }
</script>

<style>
.form-group input{
    text-align: center;
    align-items: center;
}
    .dropdown{
        width: 478px;
        display: inline-flex;
        text-align: center;

    }

</style>