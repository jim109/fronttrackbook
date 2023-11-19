<script setup>
import CardExploreNow from './CardExploreNow.vue';

</script>

<template>
        <section id="hero" class="container mb-5">
      <div class="container py-5">
          <div class="row">
              <article class="col-lg-6 d-flex flex-column justify-content-between align-items-start cont-info mx-auto">
                  <div>
                    <h1>Get started your exciting <span>journey</span>
                      with us.
                      </h1>
                  <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                  </div>
                  <button type="button" class="btn btn-lg">Discover Now</button>
              </article>
              <article class="col-lg-6 ">
                  <div class="cont-foto">
                      <img src="/src/assets/tourist.png" alt="hero img">
                  </div>
              </article>
          </div>
      </div>
      <div id="container-float">
        <div class="container-float4" >
          <img src="/src/assets/Element.png" alt="img Airplane ">
        </div>
        <div class="p-3 container-float d-flex justify-content-start align-items-center">
          <img class="me-3" src="/src/assets/trophy-removebg-preview 1.png" alt="img trophy ">
          <p>Best Tour Awards</p>
        </div>
        <div class="p-3 container-float2 d-flex justify-content-start align-items-center">
          <img class=" me-3" src="/src/assets/star 1.png" alt="img trophy ">
          <div >
            <p class="title">27K</p>
            <p >Customer Review</p>
          </div>
        </div>
        <div class="p-2 container-float3 d-flex justify-content-start align-items-center">
          <img class="me-3" src="/src/assets/google-maps 1.png" alt="img trophy ">
          <div >
            <p class="title">Explore</p>
            <p >Every cornar of the world with us</p>
          </div>
        </div>
      </div>
      <CardExploreNow />
    </section>
</template>
