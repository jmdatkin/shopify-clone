<script setup>
    defineProps(['name', 'desc']);
</script>

<template>
    <div class="product">
        <h4>{{ name }}</h4><br>
        <p>{{ desc }}</p>
    </div>
</template>

<style scoped>
    .product {
        border-radius: 2px;
        padding: 5px;
        /* width:100px;
        height: 100px;; */
        /* background-color: rgb(245,245,245); */
        color: black;
        border: solid 1px #555;
        box-shadow: 0 0 2px rgba(1.0,1.0,1.0,0.2);
        margin: 0 15px;
    }
</style>