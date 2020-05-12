<template>
    <div>
<!--        creates header for display-->
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
    name: 'PlanetTable',
    props: {
        planets: Array,
        admin: Boolean
    }
}
</script>

<style>
    /*add styles*/
</style>