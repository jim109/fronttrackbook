<template>
    <section>
      <div id="suscribe" class="container mt-4 d-flex flex-column justify-content-center align-items-center">
        <h2 class="text-center pb-4">Subscribe and get exclusive deals & offer</h2>
        <div class="mt-4">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Enter your mail">
            <div class="input-group-append">
              <button class="btn" type="button">Suscribirse</button>
            </div>
          </div>
      </div>
      
      <div class="img-ondas">
        <img src="/src/assets/Element-5.png" alt="img ondas">
      </div>
      <div class="img-arboles">
        <img src="/src/assets/Element-6.png" alt="imagen arboles">
      </div>
    </div>
    </section>
</template>
<style scoped>
@media screen and (min-width: 768px) and (max-width: 1439px) {
  .img-arboles img {
    display: none;
  }
}
@media screen and (min-width: 320px) and (max-width: 767px) {
#suscribe h2 {
    font-size: 28px;
    width: 320px;
  }
  #suscribe .input-group {
    width: 320px;
  }
}
</style>