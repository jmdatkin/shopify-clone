<script setup>
import { ref, onMounted } from 'vue';
import Product from './Product.vue';

const data = ref([]);

let dataReady = false;

async function fetchData() {
    let ajaxData = [];
    return fetch('http://localhost:8080/api/products');
    // try {
    //     ajaxData = await fetch('http://localhost:8080/api/products');
    // }
    // catch(error) {
    //     ajaxData = [];
    //     console.error(error);
    // }

}

onMounted(() => {
    // data.value = await fetchData();
    fetchData()
        .catch(err => {
            console.error(err);
        })
        .then(myData => {
            return myData.json()
            // data.value = myData.json();
            // dataReady = true;
        })
        .then(json => {
            data.value = json;
            dataReady = true;
        })
});
</script>

<template>
    <div class="product-wrapper">
        <Product
            v-for="product in data"
            :key="product.id"
            :name="product.name"
            :desc="product.desc"
        ></Product>
    </div>
</template>

<style scoped>
.product-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-basis: 200px;
    /* justify-content: space-between; */
}
</style>