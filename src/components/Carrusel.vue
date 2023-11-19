<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div v-for="(group, index) in groups" :key="index" class="carousel-item" :class="{ 'active': index === currentGroup }">
          <div class="d-flex">
            <img v-for="(image, subIndex) in group" :key="subIndex" :src="image" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
      <button @click="changeGroup(-1)" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button @click="changeGroup(1)" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  '/src/assets/firenze.png',
  '/src/assets/madrid.png',
  '/src/assets/madrid.png',
  '/src/assets/london.png',
  '/src/assets/firenze.png',
  '/src/assets/london.png',
  '/src/assets/madrid.png',
  '/src/assets/london.png',
  '/src/assets/firenze.png',
  '/src/assets/firenze.png',
  '/src/assets/madrid.png',
  '/src/assets/london.png',
  '/src/assets/firenze.png',
  '/src/assets/madrid.png',
  '/src/assets/london.png',
  '/src/assets/firenze.png',
  '/src/assets/madrid.png',
  '/src/assets/london.png',
  // Agrega más rutas de imágenes según sea necesario
]);

const itemsPerGroup = 3;
const groups = ref([]);
const currentGroup = ref(0);

const changeGroup = (delta) => {
  const newIndex = (currentGroup.value + delta + groups.value.length) % groups.value.length;
  currentGroup.value = newIndex;
};

// Agrupa las imágenes en grupos de 3
for (let i = 0; i < images.value.length; i += itemsPerGroup) {
  groups.value.push(images.value.slice(i, i + itemsPerGroup));
}
</script>
