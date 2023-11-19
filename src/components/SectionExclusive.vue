<script setup>
import { ref, onMounted } from 'vue'
import ButtonRight from './ButtonRight.vue';
import ButttonLeft from './ButtonLeft.vue'
import CardExclusive from './CardExclusive.vue';
import { dealsExclusive } from '../js/data'
import dataApi from '../api';

const deals = ref([])
const itemsPerGroup = 4;
const groups = ref([]);
const currentGroup = ref(0);

const changeGroup = (delta) => {
  const newIndex = (currentGroup.value + delta + groups.value.length) % groups.value.length;
  currentGroup.value = newIndex;
};

onMounted(async () => {

  const {data} = await dataApi.get('/deals')
  deals.value = data.result

  for (let i = 0; i < deals.value.length; i += itemsPerGroup) {
    groups.value.push(deals.value.slice(i, i + itemsPerGroup));
  }
})

</script>

<template>
  <section id="section-exclusive" >
    <article class=" d-flex flex-row align-items-center justify-content-center pb-5">
      <div class="container d-flex flex-column align-items-center title-secundary">
        <h2 >Exclusive <span>deals & discounts</span></h2>
        <p>Discover our fantastic early booking discounts & start planning your journey.</p>
      </div>
    </article>   

    <div id="carouselExclusive" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(group, index) in groups" :key="index" class="carousel-item" :class="{ 'active': index === currentGroup }">

          <article class="container d-flex justify-content-between flex-row">
                      <div class="card card-default" v-for="(deal, subIndex) in group" :key="subIndex">
                          <div style="width: 270px; height: 290px;">
                            <img :src="deal.img_tour" class="card-img-top" alt="imagen madrid" >
                          </div>
                          <div class="card-body">
                          <div class="d-flex flex-row justify-content-between align-items-center">
                              <h5 class="card-title">{{ deal.nombre_ciudad}}</h5>
                              <div class="d-flex flex-row">
                              <span class="rating px-2">★</span>
                              <p>{{ deal.calificacion }}</p>
                              </div>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex flex-row">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                              </svg>
                              <p class="px-2">{{ deal.nombre_pais }}</p>
                              </div>
                              <div class="d-flex flex-row">
                              <p class="card-text"><del>${{ deal.precio }}</del></p>
                              <p class="card-text price">${{ deal.precio_discount }}</p>  
                              </div>
                          </div>
                          
                          </div>
                      </div>
          </article>
        </div>

      </div>


      <div class="d-flex flex-row justify-content-center py-5">
              <div class="p-3">
                <button @click="changeGroup(-1)" class="carousel-control-prev" type="button" data-bs-target="#carouselExclusive" data-bs-slide="prev">
                  <ButttonLeft />
                  <span class="visually-hidden">Previous</span>
                </button>
              </div>
              <div class="p-3">
                <button @click="changeGroup(1)" class="carousel-control-next" type="button" data-bs-target="#carouselExclusive" data-bs-slide="next">
                  <ButtonRight />
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Personalizar los estilos de los botones del carrusel aquí */
.carousel-control-prev, .carousel-control-next {
  width: 50px; /* Ajusta el ancho del botón */
  height: 50px; /* Ajusta la altura del botón */
  border: none;
  top: 440px; /* Ajusta la posición vertical */
  transform: translateY(-50%); /* Centra verticalmente */
}

.carousel-control-prev {
  left: 45%; /* Ajusta la posición horizontal del botón izquierdo */
  right: 10px;
}

.carousel-control-next {
  right: 45%; /* Ajusta la posición horizontal del botón derecho */
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  color: #fff; /* Cambia a tu color de icono preferido */
}

.card-default img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>

