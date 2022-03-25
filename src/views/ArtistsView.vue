
<script setup>
import Artist from '../components/Artist.vue';

let artistData = [
    {
        name: 'Thomas Wilkinson',
        desc: 'Wilkinson was born in Wilmington, Alabama in 1987. He was fond of music from a young age, banging on pots and pans whenever he could.',
        propic: 'url("/src/assets/thomas_wilkinson.jpg")'
    },
    {
        name: 'PJ Sucka',
        desc: 'Sucka is an interesting case of a Wall Street stock broker turned folk musician. Taking his name from a childhood bully, Sucka has released several records.',
        propic: 'url("/src/assets/pj_sucka.jpg")'
    },
    {
        name: 'Wildman',
        desc: '...',
        propic: 'url("/src/assets/wildman.jpg")'
    }
];

</script>

<template>
  <main>
      <div class="artist-list">
          <Artist v-for="artist in artistData" :key="artist.id" :name="artist.name" :desc="artist.desc" :propic="artist.propic" />

      </div>
  </main>
</template>
