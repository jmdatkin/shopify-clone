<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import SiteTitle from './components/SiteTitle.vue';

let fancy = false;

const cartOpen = ref(false);

function toggleCart() {
  cartOpen.value = !cartOpen.value;
}

function closeCart() {
  cartOpen.value = false;
}

</script>

<template>
  <div class="app-wrapper">
    <div class="cart-overlay">
      <div class="cart-sidebar" :class="{ closed: !cartOpen }">
        <div class="cart-toggle">
          <a v-on:click="toggleCart">Cart</a>
          <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
        </div>
      </div>
    </div>
    <div class="app-bg"></div>
    <header>
      <div class="wrapper">
        <div class="site-title">
          <SiteTitle v-if="fancy" />
          <h2 v-else>Galactic Records</h2>
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink to="/artists">Artists</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
      <!-- <nav>Hello</nav> -->
    </header>

    <div class="app-section">
      <div class="app-container">
        <Transition>
          <RouterView />
        </Transition>
        <!-- <FrontPage /> -->
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

:root {
  --sidebar-width: 400px;
  --header-height: 200px;
}

html, body {
  overflow-x: hidden;
}

#app {
  font-weight: normal;

  max-height: 100vh;
  height: 100%;
}

.app-container {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
}

.app-wrapper,
.app-bg {
  width: 100vw;
  height: 100vh;
}

.app-wrapper {
  position: absolute;
}

.app-bg {
  background: url("/src/assets/shop_bg.png");
  background-size: cover;
  position: fixed;

  z-index: -3;
}

.app-section {
  width: 100%;
  padding-top: 40px;
  height: calc(100% - var(--header-height));
}

.cart-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1002;
  pointer-events: none;
  /* background-color: rgba(255,0,0,0.5); */
}

.cart-overlay > * {
  pointer-events: auto;
}

.cart-toggle {
  top: 0;
  right: 40px;
  /* border: solid 1px red; */
  width: 75px;
  height: 75px;
}

.cart-sidebar {
  width: var(--sidebar-width);
  height: 100%;
  border-left: solid 1px black;
  background-color: #fff;
  position: fixed;
  transition: right 0.2s ease-in-out;
  right: 0;
}

.closed {
  right: calc(-1 * var(--sidebar-width));
}

.site-title {
  text-transform: uppercase;
  font-family: "Poppins";
  font-weight: 700;
  color: rgb(21, 22, 27);
  font-size: 24pt;
  letter-spacing: 50%;
  line-height: 150%;
}

header {
  /* line-height: 1.5; */
  min-height: var(--header-height);
  min-width: 100vw;
  border-bottom: solid 1px #333;
  display: flex;
  place-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  /* position: sticky; */
  z-index: 1005;
  background-color: #fff;
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
  font-size: 13pt;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  color: black;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  text-decoration: underline;
}

nav a:first-of-type {
  border: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    color: #fff;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
