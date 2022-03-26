<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LoadingIcon from './LoadingIcon.vue';

const props = defineProps(['pid']);

const productData = ref(null);
const dataReady = ref(false);

fetch(`http://localhost:8080/api/product/${props.pid}/details`)
    .then(data => data.json()).then(data => {
        productData.value = data;
        dataReady.value = true;
    })
    .catch(err => console.error(err));
</script>

<template>
    <div class="quick-view-modal">
        <LoadingIcon v-if="!dataReady" />
        <div v-else class="quick-view">
            <div @click.prevent="$emit('close-quick-view')" class="quick-view-close-button">
                <a>X</a>
            </div>
            <div class="quick-view-card quick-view-data">
                <div class="card-header">
                    <h2>{{ productData.name }}</h2>
                </div>
                <div class="card-body">
                    <p>{{ productData.desc }}</p>
                    <p>${{ productData.price }}</p>
                </div>
                <div class="card-footer">>> Add to cart</div>
            </div>
            <div class="quick-view-card quick-view-image">
                <img src="/src/assets/img/products/hoodie.webp" />
            </div>
        </div>
        <div class="quick-view-modal-bg" @click="$emit('close-quick-view')"></div>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 10px;
}
.quick-view-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    place-items: center;
}

.quick-view {
    min-width: 600px;
    width: 1200px;
    height: 720px;
    background-color: #fff;
    border: solid 3px black;
    margin: 0 auto;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
}

.quick-view-card {
    flex-grow: 1;
}

.quick-view-close-button {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    cursor:pointer;
    padding: 5px 10px;
}

.quick-view-close-button a {
    font-size: 16pt;
    font-weight: 500;
}

.quick-view-close-button:hover {
    color: #444;
    text-decoration: underline;
}

.quick-view-data {
    padding: 30px;
    display: flex;
    flex-direction: column;
}

.quick-view-image {
    height: 100%;
    width: auto;
    max-width: 50%;
}

.quick-view-image img {
    height: 100%;
    width: 100%;
    object-fit:cover;
    pointer-events: none;
}

.quick-view-modal-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 998;
    /* background-color: rgba(255, 255, 255, 0.7); */
    background-color: rgba(0, 0, 0, 0.7);
}

.quick-view .card-header {
    flex-basis: 75px;
    font-weight: 500;
    flex-grow: 0;
    /* border-bottom:solid 2px black; */
}

.quick-view .card-body {
    height: auto;
    flex-grow: 1;
}

.quick-view .card-footer {
    /* flex-basis: px; */
    flex-grow: 0;
    color: #444;
    align-self: flex-end;
    /* border-top: solid 2px black; */
}
</style>