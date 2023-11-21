<script setup>
import { ref, onMounted } from 'vue';

import dataApi from '../api';
import ButtonRight from './ButtonRight.vue';
import ButtonLeft from './ButtonLeft.vue'

const abouts = ref([])
const itemsPerGroup = ref(2);
const groups = ref([]);
const currentGroup = ref(0);

const changeGroup = (delta) => {
const newIndex = (currentGroup.value + delta + groups.value.length) % groups.value.length;
currentGroup.value = newIndex;
};

onMounted(async () => {
    const { data } = await dataApi.get('/abouts');
    abouts.value = data.result;
    
    for (let i = 0; i < abouts.value.length; i += itemsPerGroup.value) {
      groups.value.push(abouts.value.slice(i, i + itemsPerGroup.value));
    } 
})
</script>

<template>
    <div>
        <div v-for="(group, index) in groups" :key="index" class="carousel-item col-6" :class="{ 'active': index === currentGroup }">
            <div v-for="(about, subIndex) in group" :key="subIndex" class="container col-lg-8 card about-us">
                <img :src=" about.img_cliente" alt="imagen about" class="rounded-circle">
                <p>{{ about.recomendacion }}</p>
                <h5>{{ about.nombre_cliente }} {{ about.apellido_cliente }}</h5>
                <span>{{ about.ciudad_cliente }}Bucaramanga</span>
            </div>
        </div>
        <div class="w-100 d-flex flex-row justify-content-start button-about">    
            <button @click="changeGroup(-1)" class="carousel-control-prev" type="button" data-bs-target="#carouselBestVacation" data-bs-slide="prev">
                <ButtonLeft />
            </button>

            <button @click="changeGroup(1)" class="carousel-control-next" type="button" data-bs-target="#carouselBestVacation" data-bs-slide="next">
                <ButtonRight />
            </button>       
        </div>
    </div>
</template>
<style scoped>
.button-about {
    position: relative;
    top: 347px;
    left: -580px;
}
  .carousel-item.active .card.about-us {
    z-index: 2;
    top: 100px;
    left: -50px;
  }
  .carousel-item.active .card.about-us:nth-child(2) {
    z-index: 1;
    top: -28px;
    left: 7px;
    background-color: #FAFBFF;
  }
  .carousel-control-next, .carousel-control-prev {
    position: relative;
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .button-about {
    position: relative;
    top: 344px;
    left: -340px;
}
  }
</style>