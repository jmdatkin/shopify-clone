<script setup>

defineProps(['name','desc', 'propic']);

</script>

<template>
    <div class="artist-row">
        <div style="background" class="artist-pic"></div>
        <div class="artist-info">
            <span class="artist-name">{{ name }}</span>
            <span class="artist-desc">{{ desc }}</span>
        </div>
    </div>
</template>

<style scoped>
    .artist-row {
        border: solid 2px black;
        padding: 25px;
        display: flex;
        
        flex-direction: row;
        margin-bottom: 25px;
    }

    .artist-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex-shrink: 1;
    }

    span.artist-name {
        font-weight: 700;
        font-size: 18pt;
    }

    span.artist-desc {
        font-size: 12pt;
    }

    .artist-info span {
        margin-bottom: 10px;
    }
    

    .artist-pic {
        width: 150px;
        height: 150px;
        border: solid 0 #222;
        border-radius: 50%;
        margin-right: 30px;
        background: v-bind(propic);
        flex-shrink: 0;
        background-position: center;
        /* background-size: 95%; */
        filter: contrast(0.8);
    }

</style>