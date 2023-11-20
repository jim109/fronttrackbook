<script setup>
import CardBestVacation from '../components/CardBestVacation.vue'

</script>

<template>
  <section id="section-exclusive" class="py-5">
    <article class="container d-flex flex-row align-items-center justify-content-center pb-5">
      <div class="container d-flex flex-column align-items-start title-secundary">
        <div class="row row-cols-3 w-100 align-items-center">
          <div class="col-3 col-sm-0"></div>
          <div class="col-6 col-sm-12 d-flex flex-column align-items-center">
            <h2>Best <span>vacation plan</span></h2>
            <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!  </p>
          </div>
          <div class="col-3 d-flex flex-column justify-content-between align-items-between">
            <img class="img-secundary" src="/src/assets/Element-3.png" alt="imagen fondo" style="width: 105px; height: auto;">
          </div>
        </div>
      </div>
    </article>

    <CardBestVacation />

  </section>
</template>

<style scoped>
#section-exclusive .img-secundary { 
  top:-145px;
  left: 900px;
  position: relative;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  #section-exclusive .container {
    padding: 0px;
  }
  #section-exclusive .title-secundary h2 {
    font-size: 37px;
  }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .img-secundary {
    display: none;
  }
  #section-exclusive .title-secundary p { 
    width: 320px;
  }
}
</style>