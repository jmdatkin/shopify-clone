<script setup>import { computed, ref } from 'vue';


const categories = ref([]);
const dataReady = ref(false);

const totalNumProducts = computed(() => {
    console.log(categories.value);
    return categories.value.reduce((prev,cur) => {
        return prev + cur.num_products;
    },0);
})

fetch("http://localhost:8080/api/categories")
    .then(data => data.json())
    .then(data => {
        console.log(data);
        categories.value = data;
        dataReady.value = true;
    })
    .catch(err => console.error(err));

</script>

<template>
    <div class="categories-wrapper">
        <h3>Categories</h3>
        <div class="categories-content">
            <ul class="categories-list">
                <li @click.prevent="$emit('user-select-category', -1)">
                    All
                    <span
                    class="category-product-count">({{ totalNumProducts }})</span>
                </li>
                <li
                    v-for="category in categories"
                    :key="category.id"
                    @click.prevent="$emit('user-select-category', category.id)"
                >
                    {{ category.name }}
                    <span
                        class="category-product-count"
                    >({{ category.num_products }})</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.categories-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
}

.category-num-products {
    /* text-align: right; */
    /* display: inline-block; */
    /* float: right; */
}

h3 {
    margin-bottom: 12px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    /* margin: 4px 0; */
    padding: 6px 18px;
}
li:hover {
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: underline;
}
li:visited {
    color: inherit;
}

li:active {
    color: #777;
}

li {
    border-bottom: solid 1px white;
}

li:last-of-type {
    border: 0;
}
</style>