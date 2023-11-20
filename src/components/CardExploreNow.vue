<template>
  <form class="container d-flex justify-content-center">
    <div id="hero-section-location" class=" rounded d-flex align-items-center">
      <div class="explore">
          <label for="location" class="form-label">Location<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
          <input class="form-control border-0 p-0" type="text" id="location" name="location" placeholder="Where are you going" />  
      </div>
      <div class="explore">
        <label for="fecha" class="form-label">Date<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
        <input type="date" class="form-control" id="fecha" name="fecha" value="When you will go">
      </div>
      <div class="explore">
        <label for="cantidad" class="form-label">Guest<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
        <input type="number" class="form-control form-control-plaintext" id="cantidad" name="cantidad" placeholder="Number of guest">
      </div>
      <div class="explore-button">
        <button type="button" class="btn btn-lg">Explore Now</button>
      </div>

    </div>
  </form>
</template> 
<style scoped>
@media screen and (min-width: 768px) and (max-width: 1439px) {
  label, input, button {
    font-size: 14px;
  }
  #hero button {
    width: 130px;
  }
}
.explore {
  padding-right: 48px;
  padding-left: 48px;
}
.explore-button {
    padding: 48px 48px;
  }
@media screen and (min-width: 768px) and (max-width: 1023px) {
 .explore {

  padding-right: 1px;
  padding-left: 18px;
  }
  .explore-button {
    padding: 30px 15px;
  }
}
@media screen and (min-width: 425px) and (max-width: 767px) {
  #hero-section-location {
    flex-direction: column;
  }
}
</style>