<script setup>
import { ref, onMounted } from 'vue';
import Product from '../components/Product.vue';
import ProductList from '../components/ProductList.vue';

const data = ref([]);
const dataReady = ref(false);

async function fetchData() {
    let ajaxData = [];
    return fetch('http://localhost:8080/api/products');
}

fetchData()
    .catch(err => {
        console.error(err);
    })
    .then(myData => {
        return myData.json()
    })
    .then(json => {
        data.value = json;
        dataReady.value = true;
    })
</script>

<template>
    <main>
        <div class="panel-wrapper">
            <div class="left-sidebar">
                Categories
            </div>
            <div class="product-wrapper">
                <ProductList v-if="dataReady" :productData="data" />
                <h4 v-else>Loading...</h4>
            </div>
        </div>
    </main>
</template>

<style scoped>
.panel-wrapper {
    display: flex;
    flex-direction: row;
}

.left-sidebar {
    flex-basis: 300px;
    border-right: solid 1px black;
    flex-grow: 0;
    padding: 0 25px;
}
.product-wrapper {
    flex-grow: 1;
}
</style>