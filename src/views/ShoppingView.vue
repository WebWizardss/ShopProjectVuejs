<template>
  <div class="container">
    <div class="row justify-content-center d-flex mt-5 py-3">
      <div class="col-lg-2" v-for="cat in categories" :key="cat">
        <button
          class="btn"
          :class="selectCategorie == cat ? 'btn-dark' : 'btn-outline-dark'"
          @click="selectCategorie = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="selectCategorie = ''" class="btn btn-primary">ALL</button>
    </div>
    <div class="justify-content-center mt-2">
      <button @click="prix = prix == 0 ? 1 : 0" class="btn btn-warning">
        Sort By Prix
      </button>
    </div>
    <div class="mt-5 py-3">
      <ProductsCompo
        :ProductFilter="ProductFilter"
        :selectCategorie="selectCategorie"
        @addcart="addcart"
      ></ProductsCompo>
    </div>
  </div>
</template>

<script>
import ProductsCompo from "@/components/ProductsCompo.vue";
import ProductService from "../services/service.js";
import { UserStore } from "../store/ServicePinia.js";
export default {
  setup() {
    const store = UserStore();
    return { store };
  },
  data() {
    return {
      products: [],
      categories: [],
      selectCategorie: "",
      Product_Panier: [],
      prix: 0,
    };
  },
  created() {
    ProductService.getProducts().then((res) => {
      this.products = res.data;
      for (const prob in this.products) {
        this.categories.push(prob);
      }
    });
    this.Product_Panier = this.store.products ? this.store.products : [];
  },
  components: {
    ProductsCompo,
  },
  methods: {
    addcart(val) {
      let prod = this.Product_Panier.findIndex((p) => p.prod["id"] == val.id);
      if (prod != -1) {
        if (this.Product_Panier[prod].qte == val.quantity) {
          alert("Out Of Stock");
        } else {
          this.Product_Panier[prod].qte++;
        }
      } else {
        this.Product_Panier.push({ prod: val, qte: 1 });
      }
      this.store.AddProduct(this.Product_Panier);
    },
  },
  computed: {
    ProductFilter() {
      let filter = [];
      filter = JSON.parse(JSON.stringify(this.products));
      if (this.selectCategorie != "") {
        if (this.prix != 0) {
          return {
            ...filter[this.selectCategorie].sort((a, b) =>
              a.prix > b.prix ? -1 : 1
            ),
          };
        } else {
          return { ...filter[this.selectCategorie] };
        }
      } else {
        if (this.prix != 0) {
          for (const property in filter) {
            filter[property].sort((a, b) => (a.prix > b.prix ? -1 : 1));
          }
          return { ...filter };
        } else {
          return { ...filter };
        }
      }
    },
  },
};
</script>
