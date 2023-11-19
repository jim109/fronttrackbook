<script setup>
import { dealsExclusive } from '../js/data'

const deals = { ...dealsExclusive}

</script>

<template>
    <article class="container d-flex justify-content-between flex-row">
        <div class="card card-default" v-for="(deal, index) in deals" :key="index">
            <img :src="deal.img" class="card-img-top" alt="imagen madrid">
            <div class="card-body">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <h5 class="card-title">{{ deal.ciudad}}</h5>
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
                <p class="px-2">{{ deal.pais }}</p>
                </div>
                <div class="d-flex flex-row">
                <p class="card-text"><del>${{ deal.PrecioFull }}</del></p>
                <p class="card-text price">${{ deal.PrecioDiscont }}</p>  
                </div>
            </div>
            
            </div>
        </div>
    </article>
</template>
