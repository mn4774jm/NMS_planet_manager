<template>
    <div class="links">
        <div class="m-2">

            <span class="p-3">
                <router-link to="/">Submit Planet</router-link>
            </span>

            <span class="p-3">
                <router-link to="/browse">Browse Worlds</router-link>
            </span>

            <span class="p-3">
                <router-link to="/search">Search Worlds</router-link>
            </span>

            <span class="p-3">
                <router-link to="/about">About</router-link>
                </span>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Links'
    }
</script>

<style scoped>

</style>