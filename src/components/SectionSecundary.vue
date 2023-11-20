<template>
        <section id="section-secundary" class="py-5 background-secondary">
      <article class=" d-flex flex-row align-items-center justify-content-center">
        <div class="container d-flex flex-column align-items-start title-secundary">
        <div class="row row-cols-3 w-100 align-items-center">
          <div class="col-3"></div>
          <div class="col-6 d-flex flex-column align-items-center">
            <h2>Things you need <span>to do</span></h2>
            <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
          </div>
          <div class="col-3">
            <img class="img-secundary" src="/src/assets/Element-2.png" alt="imagen fondo">
          </div>
        </div>
        
        </div>
      </article>
      <article class="container d-flex py-5 align-items-center justify-content-between">
        <div class="card card-section">
          <img src="/src/assets/signup.png" class="card-img-top" alt="img signup">
          <div class="card-body p-0">
            <h5 class="card-title">Sign up</h5>
            <p class="card-text">Completes all the work associated with planning and processing</p>
          </div>
        </div>
        <div class="card card-section mx-5">
          <img src="/src/assets/money.png" class="card-img-top " alt="img money">
          <div class="card-body p-0">
            <h5 class="card-title">Worth of Money</h5>
            <p class="card-text">After successful access then book from exclusive deals & pricing</p>
          </div>
        </div>
        <div class="card d-flex flex-column justify-content-between">
          <img src="/src/assets/travel.png" class="card-img-top" alt="img travel">
          <div class="card-body card-section p-0 ">
            <h5 class="card-title">Exciting Travel</h5>
            <p class="card-text">Start and explore a wide range of exciting travel experience.</p>
          </div>
        </div>
        </article>
    </section>
</template>
<style scoped>
@media screen and (min-width: 768px) and (max-width: 1023px) {
  #section-secundary .card-section h5 {

    padding-top: 16px;
    font-size: 18px;
  }
  #section-secundary .card-section p {
    font-size: 14px;
  }
  #section-secundary .card {
    padding: 32px;
  }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .img-secundary {
    display: none;
  }
  #section-secundary .card-section h5 {
  padding-top: 16px;
  font-size: 24px;
}
#section-secundary .d-flex {
    flex-direction: column;
  }
  #section-secundary .d-flex .card {
    margin-bottom: 10px;
  }
}
</style>