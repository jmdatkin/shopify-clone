<script setup>
const props = defineProps(['pid', 'name', 'desc', 'price']);
const emit = defineEmits(['open-quick-view']);

let clickHandler = () => {
    emit(props.pid);
};

</script>

<template>
    <div class="product" @click="$emit('open-quick-view', props.pid)">
        <!-- <div class="product-border"></div> -->
        <!-- <a class="product-link" > -->
        <div class="product-content">
            <div class="card-header">
                <h4>{{ name }}</h4>
            </div>
            <div class="card-body">
                <p>{{ desc }}</p>
                <p>${{ price }}</p>
            </div>
            <div class="card-footer">>> Add to cart</div>
        </div>
        <div class="card-img">
            <img src="/src/assets/img/products/hoodie.webp" />
        </div>
        <!-- </a> -->
    </div>
</template>

<style scoped>
.product .card-header {
    flex-basis: 75px;
    font-weight: 500;
    flex-grow: 0;
}

.product .card-body {
    height: auto;
    flex-grow: 1;
}

.product .card-footer {
    /* flex-basis: px; */
    flex-grow: 0;
    color: #444;
    align-self: flex-end;
}

.product .card-img {
    width: 100%;
    height: auto;
}

.product .card-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.product-link {
    display: block;
    width: 100%;
    height: 100%;
}

.product {
    line-height: 133%;
    /* border-radius: 2px; */
    width: 250px;
    height: 275px;
    /* font-weight: 500; */
    display: flex;
    flex-direction: column;
    /* width:100px;
        height: 100px;; */
    /* background-color: rgb(245,245,245); */
    justify-content: space-between;
    color: black;
    border: solid 2px rgb(76, 78, 82);
    box-shadow: 0 0 2px rgba(1, 1, 1, 0.3);
    margin: 5px;
    cursor: pointer;
    box-sizing: border-box;
    overflow:hidden;
}

.product-content {
    padding: 15px;
}

.product-border {
    position: absolute;

    width: 250px;
    height: 275px;
}
p {
    margin-bottom: 7px;
}

h4 {
    font-size: 14pt;
    margin-bottom: 5px;
    font-weight: 600;
}

@media (prefers-color-scheme: dark) {
    .product {
        /* color: #fff; */
        /* border-color: #fff; */
        border: 0;
        background-color: #eee;
    }
}
</style>