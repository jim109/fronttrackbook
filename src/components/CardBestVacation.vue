<script setup>
import { bestVacations } from '../js/data'

const vacations = { ...bestVacations}

</script>

<template>
    <article class="container d-flex justify-content-between">
        <div class="card card-default" v-for="(vacation, index) in vacations" :key="index">
          <img :src="vacation.img" class="card-img-top" alt="imagen madrid">
          <div class="card-body">
            <div class="d-flex flex-row justify-content-between align-items-center">
              <h5 class="card-title py-3">{{ vacation.ciudad }}, {{ vacation.pais }}</h5>
              <div class="d-flex flex-row">
                <span class="card-text ">${{ vacation.costTour }}K</span>  
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-location" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FA7436" fill="#FA7436" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                <p class="px-2">{{ vacation.daysTrip }} Days Trip</p>
              </div>
              <div class="d-flex flex-row">
                <span class="rating px-2">★</span>
                <p>{{ vacation.calificacion }}</p>
              </div>
            </div>
          </div>
        </div>
    </article>
</template>
