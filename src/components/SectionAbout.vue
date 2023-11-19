<script setups>
import ButtonRight from './ButtonRight.vue';
import ButttonLeft from './ButtonLeft.vue'

</script>

<template>
        <section id="section-about" class="background-secondary py-6 d-flex align-items-center justify-content-center">
      <article class="container d-flex flex-row align-items-center justify-content-between ps-4">
        <div class="container title-secundary col-lg-4 d-flex flex-column align-items-center">
          <h2>What people say <span>about Us.</span></h2>
          <p>Our Clients send us bunch of smilies with our services and we love them.</p>
          <div class="w-100 d-flex flex-row justify-content-start ">
            <div class="pe-1">
              <ButttonLeft />
            </div>
            <div class="ps-1">
              <ButtonRight />
            </div>
          </div>
        </div>
        <div class="container col-lg-8 card about-us">
          <img src="/src/assets/person.png" alt="imagen about">
          <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <h5>Mike taylor</h5>
          <span>Lahore, Pakistan</span>
        </div>
      </article>
    </section>
</template>
