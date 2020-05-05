<template>
    <div class="footer">
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

        <p class="text-right p-2">Header image by
            <a href="https://pngtree.com/free-backgrounds">free background photos from pngtree.com</a>
        </p>

    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>

</style>