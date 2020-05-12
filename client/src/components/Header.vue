<template>
    <div class="header">
<!--        display title using jumbotron for formatting-->
        <div class="jumbotron">
            <h1 class="display-4" id="title">NMS Planet Archive</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .jumbotron{
        background-image: url('../assets/GalacticBanner.jpg');
        background-position: center;
        background-size: cover;
    }
    #title {
        font-weight: 500;
        color: white;
    }
</style>