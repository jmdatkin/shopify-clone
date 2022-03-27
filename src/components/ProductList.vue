<script setup>
import { onBeforeUpdate, onMounted, onUpdated } from 'vue';
import Product from './Product.vue';
const props = defineProps(['productData', 'cb']);
const emit = defineEmits(['open-quick-view']);

let clickHandler = function (id) {
    console.log(props.productData);
    console.log('clicked2');
    emit('open-quick-view', id);
};

</script>

<template>
    <div class="product-list">
        <!-- <h2>Products</h2> -->
        <div class="product-list-products">
            <!-- <TransitionGroup tag="prod-list" name="fade"> -->
            <TransitionGroup name="fade">
                <!-- <Product
                    v-for="product in productData"
                    :key="product.id"
                    :pid="product.id"
                    :name="product.name"
                    :desc="'adsfadf'"
                    :abcd="'asdf'"
                    @open-quick-view="clickHandler"
                    :price="product.price"
                /> -->
                <Product
                    v-for="product in productData"
                    :key="product.id"
                    :data="product"
                    @open-quick-view="clickHandler"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
.product-list {
    display: flex;
    flex-direction: column;
}
.product-list-products {
    width: 100%;
    height: auto;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: row;
    flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>