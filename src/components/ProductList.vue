<script setup>
import { onBeforeUpdate, onMounted, onUpdated } from 'vue';
import Product from './Product.vue';
defineProps(['productData']);


</script>

<template>
    <div class="product-list">
        <Product
            v-for="product in productData"
            :key="product.id"
            :name="product.name"
            :desc="product.desc"
            :price="product.price"
        />
    </div>
</template>

<style scoped>
.product-list {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>