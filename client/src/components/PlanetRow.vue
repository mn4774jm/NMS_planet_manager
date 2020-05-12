<template>
<!--    create template element; provide object locations-->
    <tr v-bind:key="planet.resource1">
        <td>{{ planet.name }}</td>
        <td>{{ planet.system }}</td>
        <td>{{ planet.resource1 }}</td>
        <td>{{ planet.resource2 }}</td>
        <td>{{ planet.resource3 }}</td>
        <td>{{ planet.coordinates }}</td>
        <td>{{ planet.glyphs }}</td>
        <td>{{ planet.author }}</td>
        <td>{{ planet.comments }}</td>
<!--        admin menu to only show delete option when clicked-->
        <td v-show="admin">
            <img class='delete-icon' v-on:click="deletePlanet(planet)" src="@/assets/delete2.png">
        </td>
    </tr>
</template>

<script>

    export default {
        name: 'PlanetRow',
        props: {
            planet: Object,
            admin: Boolean,
        },
        methods: {
            deletePlanet(planet) {
                if(confirm(`Purge ${planet.name}?`)) {
                    this.$emit('delete-planet', planet)
                }
            }
        }
    }
</script>

<style>
    .delete-icon {
        width: 15%;
    }
</style>