<script setup>
</script>

<template>
    <svg class="svg">
        <clipPath id="circle" clipPathUnits="objectBoundingBox">
            <path
                d="M0.5,0 C0.776,0,1,0.224,1,0.5 C1,0.603,0.969,0.7,0.915,0.779 C0.897,0.767,0.876,0.76,0.853,0.76 C0.794,0.76,0.747,0.808,0.747,0.867 C0.747,0.888,0.753,0.908,0.764,0.925 C0.687,0.972,0.597,1,0.5,1 C0.224,1,0,0.776,0,0.5 C0,0.224,0.224,0,0.5,0"
            />
        </clipPath>
    </svg>

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