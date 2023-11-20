<script setup>
import CardExclusive from './CardExclusive.vue';

</script>

<template>
  <section id="section-exclusive" >
    <article class=" d-flex flex-row align-items-center justify-content-center pb-5">
      <div class="container d-flex flex-column align-items-center title-secundary">
        <h2 >Exclusive <span>deals & discounts</span></h2>
        <p>Discover our fantastic early booking discounts & start planning your journey.</p>
      </div>
    </article>   
    <CardExclusive />
  </section>
</template>

<style scoped>
@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .container .card-default {
    margin: 4px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .container .card-default {
    margin: 8px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  #section-exclusive .title-secundary p {
    width: auto;
  }
  #section-exclusive .title-secundary h2 {
    font-size: 30px;
  }
}
</style>

