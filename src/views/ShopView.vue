<script setup>
import { ref, onMounted } from 'vue';
import Product from '../components/Product.vue';
import ProductList from '../components/ProductList.vue';
import LoadingIcon from '../components/LoadingIcon.vue';
import ProductQuickView from '../components/ProductQuickView.vue';

const data = ref([]);
const dataReady = ref(false);

const quickViewing = ref(null);

const openQuickView = function (id) {
    console.log(data.value);
    let newValue = data.value.filter(x=> {return x.id===id})[0];  //Bad, change later
    console.log(newValue);
    quickViewing.value = newValue;
};

const closeQuickView = function() {
    quickViewing.value = null;
}

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
        <ProductQuickView v-if="quickViewing !== null" :data="quickViewing.value" 
        @close-quick-view="closeQuickView"
         />
        <div class="panel-wrapper">
            <div class="left-sidebar">Categories</div>
            <div class="product-wrapper">
                <!-- <Loadin -->
                <ProductList
                    :cb="openQuickView"
                    @open-quick-view="openQuickView"
                    v-if="dataReady"
                    :productData="data"
                />
                <!-- <h4 v-else>Loading...</h4> -->
                <div v-else class="loading">
                    <LoadingIcon />
                </div>
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

.loading {
    padding: 70px 0;
    place-items: center;
}
.product-wrapper {
    flex-grow: 1;
}
</style>