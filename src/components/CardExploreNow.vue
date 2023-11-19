<template>
  <form class="container d-flex justify-content-center">
    <div id="hero-section-location" class=" rounded d-flex align-items-center ">
      <div class="px-5">
          <label for="location" class="form-label">Location<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
          <input class="form-control border-0 p-0" type="text" id="location" name="location" placeholder="Where are you going" />  
      </div>
      <div class="px-5">
        <label for="fecha" class="form-label">Date<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
        <input type="date" class="form-control" id="fecha" name="fecha" value="When you will go">
      </div>
      <div class="px-5">
        <label for="cantidad" class="form-label">Guest<img class="p-3" src="/src/assets/vector.png" alt="flecha apertura"></label>
        <input type="number" class="form-control form-control-plaintext" id="cantidad" name="cantidad" placeholder="Number of guest">
      </div>
      <div class="p-5">
        <button type="button" class="btn btn-lg">Explore Now</button>
      </div>

    </div>
  </form>
</template> 