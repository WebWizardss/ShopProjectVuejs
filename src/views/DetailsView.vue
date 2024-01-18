<template>
  <div class="container d-flex justify-content-center text-center">
    <div class="card mt-5 py-5 text-center">
      <div class="card-body p-4">
        <img
          :src="require(`../../public/images/${product.image}`)"
          :alt="product.nom"
        />
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
      <router-link to="/ShoppingView">
        <button class="btn btn-secondary">Return</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import service from "@/services/service.js";
export default {
  created() {
    this.id = this.$route.params.id;
    this.getProducts();
  },
  data() {
    return {
      id: -1,
      products: [],
      product: [],
    };
  },
  methods: {
    getProducts() {
      service.getProducts().then((res) => {
        this.products = res.data;
        for (const prob in this.products) {
          for (let i = 0; i < this.products[prob].length; i++) {
            if (this.products[prob][i].id == this.id) {
              this.product = this.products[prob][i];
            }
          }
        }
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 200px;
}
</style>
