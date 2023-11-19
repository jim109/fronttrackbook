<script setup>
import { ref, onMounted } from 'vue';
import dataApi from '../api';
import ButtonRight from './ButtonRight.vue';
import ButtonLeft from './ButtonLeft.vue';

const vacations = ref([]);
const itemsPerGroup = 3;
const groups = ref([]);
const currentGroup = ref(0);

const changeGroup = (delta) => {
  const newIndex = (currentGroup.value + delta + groups.value.length) % groups.value.length;
  currentGroup.value = newIndex;
};

onMounted(async () => {
  const { data } = await dataApi.get('/tours');
  vacations.value = data.result;

  for (let i = 0; i < vacations.value.length; i += itemsPerGroup) {
    groups.value.push(vacations.value.slice(i, i + itemsPerGroup));
  }
});
</script>

<template>
  <section id="section-exclusive" class="py-5">
    
    <article class="container d-flex flex-row align-items-center justify-content-center pb-5">
      <div class="container d-flex flex-column align-items-start title-secundary">
        <div class="row row-cols-3 w-100 align-items-center">
          <div class="col-3"></div>
          <div class="col-6 d-flex flex-column align-items-center">
            <h2>Best <span>vacation plan</span></h2>
            <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!  </p>
          </div>
          <div class="col-3 d-flex flex-column justify-content-between align-items-between">
            <img class="img-secundary" src="/src/assets/Element-3.png" alt="imagen fondo" style="width: 105px; height: auto;">
          </div>
        </div>
      </div>
    </article>
    <!-- <CardBestVacation /> -->
    <div id="carouselBestVacation" class="carousel slide container" data-bs-ride="carousel">

      <div>    
        <button @click="changeGroup(-1)" class="carousel-control-prev" type="button" data-bs-target="#carouselBestVacation" data-bs-slide="prev">
          <ButtonLeft />
        </button>

        <button @click="changeGroup(1)" class="carousel-control-next" type="button" data-bs-target="#carouselBestVacation" data-bs-slide="next">
          <ButtonRight />
        </button>       
      </div>

      <div class="carousel-inner">
        <div v-for="(group, index) in groups" :key="index" class="carousel-item" :class="{ 'active': index === currentGroup }">
           
          <article class="container d-flex justify-content-between">
              <div class="card card-default" v-for="(vacation, subIndex) in group" :key="subIndex">
                <div style="width: 369px; height: 327px;">
                  <img :src="vacation.img_tour" class="card-img-top" alt="imagen madrid" >
                </div>
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between align-items-center">
                    <h5 class="card-title py-3">{{ vacation.nombre_ciudad}},{{ vacation.nombre_pais }}</h5>
                    <div class="d-flex flex-row">
                      <span class="card-text ">${{ vacation.precio }}K</span>  
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-location" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FA7436" fill="#FA7436" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                      </svg>
                      <p class="px-2">{{ vacation.tour_days }} Days Trip</p>
                    </div>
                    <div class="d-flex flex-row">
                      <span class="rating px-2">★</span>
                      <p>{{ vacation.calificacion }}</p>
                    </div>
                  </div>
                </div>
              </div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Personalizar los estilos de los botones del carrusel aquí */
.carousel-control-prev, .carousel-control-next {
  width: 40px; /* Ajusta el ancho del botón */
  height: 40px; /* Ajusta la altura del botón */
  border: none;
  top: -50px; /* Ajusta la posición vertical */
  transform: translateY(-50%); /* Centra verticalmente */
}

.carousel-control-prev {
  left: 88%; /* Ajusta la posición horizontal del botón izquierdo */
  right: 10px;
}

.carousel-control-next {
  right: 40px; /* Ajusta la posición horizontal del botón derecho */
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