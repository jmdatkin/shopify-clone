
<script setup>
import { ref, onMounted } from "vue";

// defineProps(['width','height']);
let width = 700;
let height = 100;

let fontLoaded = false;

const canvasRef = ref(null);

let font = new FontFace("Poppins", "url('src/assets/fonts/Poppins-Bold.ttf')");
document.fonts.add(font);

font.load().then(() => fontLoaded = true);
// const c_width = 
let counter = ref(0);

const increment = function () {
    counter.value += 1;
};

const init = function () {
    let canvas = canvasRef.value;

    canvas.width = width;
    canvas.height = height;

    let ctx = canvas.getContext('2d');

    let bg = 'black';

    let r = 155;
    let g = 232;
    let b = 78;

    let speed = 0.01;
    // let x = (Math.cos(counter.value*speed)+1)*width/2;
    // let x2 = (Math.sin(counter.value*speed)+1)*width/2;
    let x = (Math.sin(counter.value * speed));
    let x2 = (counter.value + 25) % width;

    let grd = ctx.createRadialGradient(x, 25, 50, x2 + 25, 75, 200);
    grd.addColorStop(0, `rgb(${r},${b},${g})`);
    grd.addColorStop(1, `rgb(${r / 2}, ${b * 1.5}, ${g * 1.5}`);

    let text = "GALACTIC RECORDS";

    ctx.font = "700 48pt Poppins";
    let m = ctx.measureText(text);
    ctx.fillStyle = grd;


    if (!fontLoaded) return;

    ctx.globalCompositeOperation = "difference";
    ctx.restore();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-in";
    ctx.save();
    ctx.fillText(text, width / 2 - m.width / 2, height / 2 + m.actualBoundingBoxAscent / 2);

    increment();
};

onMounted(() => {

    let fxn = () => {
        init();
        window.requestAnimationFrame(fxn);
    }
    fxn();
    // paint();
});


</script>

<template>
    <div class="site-title-wrapper">
        <canvas ref="canvasRef" id="site-title-canvas" :key="canv"></canvas>
    </div>
</template>

<style scoped>
.site-title-wrapper {
    font-family: "Poppins";
    /* width: 500px; */
}
</style>