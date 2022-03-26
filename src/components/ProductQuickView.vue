<script setup>
const props = defineProps(['data']);
console.log(props.data);
</script>

<template>
    <div class="quick-view-modal">
        <div class="quick-view">
            <div class="card-header">
                <h4>{{ name }}</h4>
            </div>
            <div class="card-body">
                <p>{{ desc }}</p>
                <p>{{ price }}</p>
            </div>
            <div class="card-footer">>> Add to cart</div>
        </div>
        <div class="quick-view-modal-bg" @click="$emit('close-quick-view')"></div>
    </div>
</template>

<style scoped>
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
    width: 1200px;
    height: 720px;
    background-color: #fff;
    border: solid 3px black;
    margin: 0 auto;
    z-index: 999;
    padding: 30px;
    display: flex;
    flex-direction: column;
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