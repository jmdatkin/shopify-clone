<script setup>
</script>

<template>
  <main>
    <div class="row">
      <div class="card-wrapper">
        <h1>Bold.</h1>
        <div class="card">
          <h2>Groundbreaking artists.</h2>
          <p>Our artists are 100% organically sourced. That means no pollution, no waste. Need we say more?</p>
          <div class="card-content">

          </div>
          <img src="/src/assets/home_1.png">
        </div>
      </div>
      <div class="filler"></div>
    </div>
    <div class="row">
      <div class="filler"></div>
      <div class="card-wrapper">
        <h1>Cutting-edge.</h1>
        <div class="card">Content</div>
      </div>
    </div>
    <FrontPage />
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
h1 {
  font-size: 48pt;
}
h2 {
  font-size: 24pt;
  margin-bottom: 12px;
}

p {
  font-size: 14pt;
  margin-bottom: 12px;
}

img {
  margin: 0 auto;
  /* clip-path: circle(360px at center); */
  /* clip-path: inset(20px,20px,20px,20px); */
}
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* height: 600px; */
  margin-bottom: 20px;
}

.card {
  /* height: 450px; */
  min-height: 450px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0, 0.8);
  color: #000;
}

.card-wrapper {
  height: 100%;
  flex-grow: 1;
}

.filler {
  flex-grow: 0;
  flex-basis: 400px;
}
</style>