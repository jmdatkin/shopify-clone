<script setup>import { ref } from 'vue';


const categories = ref([]);
const dataReady = ref(false);

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
        <h4>Categories</h4>
        <div class="categories-content">
            <ul class="categories-list">
                <li v-for="category in categories" :key="category.id">
                    <a @click.prevent="$emit('user-select-category', category.id)" href="#">{{ category.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.categories-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}

h4 {
    margin-bottom: 12px;
}

ul {
    list-style: none;
}

li {

}

li:hover {
    text-decoration: underline;
}
</style>