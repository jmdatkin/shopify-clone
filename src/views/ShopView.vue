<script setup>
import { ref, onMounted } from 'vue';
import Product from '../components/Product.vue';
import ProductList from '../components/ProductList.vue';
import LoadingIcon from '../components/LoadingIcon.vue';
import ProductQuickView from '../components/ProductQuickView.vue';

const data = ref([]);
const dataReady = ref(false);

const quickViewing = ref(null);
const quickViewOpen = ref(false);

const openQuickView = function (id) {
    console.log(id);
    quickViewing.value = id;
    quickViewOpen.value = true;
};

const closeQuickView = function () {
    quickViewOpen.value = false;
}

async function fetchData() {
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
        <Transition name="quickview-fade">
            <ProductQuickView
                v-if="quickViewOpen"
                :pid="quickViewing"
                @close-quick-view="closeQuickView"
            />
        </Transition>
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

.quickview-fade-enter-active,
.quickview-fade-leave-active {
    transition: opacity 0.1s ease;
}

.quickview-fade-enter-from,
.quickview-fade-leave-to {
    opacity: 0;
}
</style>