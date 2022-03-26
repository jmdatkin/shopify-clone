<script setup>
</script>

<template>
  <main>
    <div class="row">
      <div class="card-wrapper">
        <h1>Bold.</h1>
        <div class="card">
          <div class="card-content">
            <h2>Groundbreaking artists.</h2>
            <p>Our artists are 100% organically sourced. That means no pollution, no waste. Need we say more?</p>
          </div>
          <div class="card-footer"></div>
          <div class="card-image"></div>
          <img src="/src/assets/home_1.jpg" />
        </div>
      </div>
      <div class="filler"></div>
    </div>
    <div class="row">
      <div class="filler"></div>
      <div class="card-wrapper">
        <h1>Cutting-edge.</h1>
        <div class="card">
          <div class="card-content">
            <h2>High quality tech and high-fidelity sound.</h2>
            <p>Each of our three studios is equipped with state-of-the-art recording equipment.</p>
          </div>
          <img src="/src/assets/home_2.jpg" />
        </div>
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
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: 10% 15%;
  pointer-events: none;
  /* width: 640px; */
  /* align-self: center;; */
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
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  padding: 20px;
}

.card-footer {
  height: fit-content;
}

.card-wrapper {
  height: 100%;
  flex-grow: 1;
}

.filler {
  flex-grow: 0;
  flex-basis: 200px;
}
</style>