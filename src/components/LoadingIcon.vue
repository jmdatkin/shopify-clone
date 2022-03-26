<script setup>
</script>

<template>
    <div class="loading-icon"></div>
</template>

<style scoped>
.loading-icon {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: solid 7px #e1e1e1;
    border-top: solid 7px #636363;
    margin: 0 auto;
    animation: icon-rotate 1s infinite linear;
}

/* .loading-icon:after {
    content: "";
    height: 10px;
    width: 15px;
    left: calc(50% - 7.5px);
    display: block;
    background-color: white;
    /* border: solid 1px red; 
    position: relative;

    bottom: 10px;
    /* transform:rotateX(10deg) perspective(100px); 
} */

@keyframes icon-rotate {
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(359deg);
    }
}
</style>