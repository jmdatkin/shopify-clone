<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FrontPage from './components/FrontPage.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="site-title">
        <h2>Galactic Records</h2>
      </div>
    </div>
    <!-- <nav>Hello</nav> -->
  </header>

  <div class="app-wrapper">
    <FrontPage />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  font-weight: normal;

  max-height: 100vh;
  height: 100%;
}

.app-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
}

.site-title {
  text-transform: uppercase;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24pt;
  letter-spacing: 50%;
  line-height: 150%;
}

header {
  /* line-height: 1.5; */
  min-height: 200px;
  min-width: 100vw;
  border-bottom: solid 1px #333;
  display: flex;
  place-items: center;
  margin-bottom: 40px;
}
header .wrapper {
  display: flex;
  place-items: center;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0 40px;
  font-weight: 700;
  justify-content: space-around;
  width: 100%;
  /* height: 100%; */
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
