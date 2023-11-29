<template>
  <div>
    <article class="mt-3 py-5 container" id="service" data-aos="fade-up">
      <div class="titre_service text-center">
        <p class="h5">Offre</p>
        <h2>Service</h2>
      </div>

      <div class="row mt-5 py-5 justify-content-center">
        <div class="col-md-4 mb-2" v-for="item in 3" :key="item.id">
          <div class="box blue text-center">
            <p class="icon">
              <span class="fa-stack fa-2x">
                <i class="material-icons mx-2">shopping_cart</i>
              </span>
            </p>
            <h3 class="titre_box">fsdf</h3>
            <p class="description">sdfsd</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
