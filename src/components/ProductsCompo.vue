<template>
  <div>
    <div class="container" v-if="selectCategorie == ''">
      <div class="col mb-5" v-for="prod in ProductFilter" :key="prod">
        <div class="row">
          <div class="col mb-5" v-for="product in prod" :key="product">
            <div class="card h-100">
              <router-link :to="/DetailsView/ + product.id">
                <img
                  class="card-img-top"
                  :src="require(`../../public/images/${product.image}`)"
                  :alt="product.nom"
                />
              </router-link>
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
              <button
                class="btn btn-info"
                @click="Addcar(product)"
                :disabled="!IsAuth"
              >
                AddCard
              </button>
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
            <button
              class="btn btn-info"
              @click="Addcar(product)"
              :disabled="!IsAuth"
            >
              AddCard
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserStore } from "@/store/ServicePinia.js";
export default {
  setup() {
    const store = UserStore();
    return { store };
  },

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
  computed: {
    IsAuth() {
      return this.store.getUser ? true : false;
    },
  },
};
</script>
