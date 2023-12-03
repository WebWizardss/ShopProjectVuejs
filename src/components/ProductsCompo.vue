<template>
  <div>
    <div class="container" v-if="selectCategorie == ''">
      <div class="col mb-5" v-for="prod in ProductFilter" :key="prod">
        <div class="row">
          <div class="col mb-5" v-for="product in prod" :key="product">
            <div class="card h-100">
              <img
                class="card-img-top"
                :src="require(`../../public/images/${product.image}`)"
                :alt="product.nom"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">{{ product.nom }}</h5>
                  {{ product.prix }}
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  {{ product.Description }}
                </div>
              </div>
              <div class="btn btn-info" @click="Addcar(product)">AddCard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div
          class="col mb-5"
          v-for="product in ProductFilter"
          :key="product.id"
        >
          <div class="card h-100">
            <img
              class="card-img-top"
              :src="require(`../../public/images/${product.image}`)"
              :alt="product.nom"
            />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">{{ product.nom }}</h5>
                {{ product.prix }}
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                {{ product.Description }}
              </div>
            </div>
            <div class="btn btn-info" @click="Addcar(product)">AddCard</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ProductFilter: Object,
    selectCategorie: String,
  },
  data() {
    return {};
  },
  methods: {
    Addcar(val) {
      this.$emit("addcart", val);
    },
  },
};
</script>
