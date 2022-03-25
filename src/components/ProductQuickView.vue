<script setup>
</script>

<template>
    <div class="quick-view-modal">
        <div class="quick-view">
            Hello!
        </div>
        <div class="quick-view-modal-bg" @click="$emit('close-quick-view')">
        </div>
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
        width: 800px;
        height: 600px;
        background-color: #fff;
        border: solid 1px black;
        margin: 0 auto;
        z-index: 999;
        padding: 30px;
    }

    .quick-view-modal-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 998;
        background-color: rgba(255,255,255,0.7);
    }
</style>