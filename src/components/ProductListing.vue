<script setup>
    defineProps(['name', 'desc']);
</script>

<template>
    <div class="product-listing">
        <h4>{{ name }}</h4><br>
        <p>{{ desc }}</p>
    </div>
</template>

<style scoped>

    .product-listing {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }

</style>