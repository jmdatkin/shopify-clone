<script setup>
import { onBeforeUpdate, onMounted, onUpdated } from 'vue';
import Product from './Product.vue';
defineProps(['productData','cb']);
const emit = defineEmits(['open-quick-view']);

let clickHandler = function(id) {
    console.log('clicked2');
    emit('open-quick-view', id);
};

</script>

<template>
    <div class="product-list">
        <Product
            v-for="product in productData"
            :key="product.id"
            :pid="product.id"
            :name="product.name"
            :desc="product.desc"
            @open-quick-view="clickHandler"
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