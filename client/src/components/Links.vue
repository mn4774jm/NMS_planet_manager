<template>
    <div class="links">
        <div class="m-2">
<!--            created route links directed to specific directories-->
            <span class="p-3">
                <router-link to="/">Submit Planet</router-link>
            </span>

<!--            features from this code were added to search worlds-->
<!--            <span class="p-3">-->
<!--                <router-link to="/browse">Browse Worlds</router-link>-->
<!--            </span>-->

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