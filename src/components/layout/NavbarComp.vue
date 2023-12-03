<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div class="container px-5">
        <a class="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li
              class="nav-item"
              v-if="IsAuth"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a class="nav-link" href="#features">
                Panier
                <i class="material-icons mx-2">shopping_cart</i>
              </a>
            </li>
            <li class="nav-item" v-if="IsAuth" @click="logutUser()">
              <a class="nav-link" href="#download">
                Logout
                <i class="material-icons mx-2">logout</i>
              </a>
            </li>
          </ul>
          <RouterLink to="/ShoppingView">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Shopping</span>
              </span>
            </button>
          </RouterLink>
        </div>
      </div>
    </nav>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">All Purchase</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center my-4">
              <div class="col-md-8">
                <div
                  v-for="product in Panier_Product"
                  :key="product.prod['id']"
                >
                  <div class="card mb-4">
                    <div class="card-header py-3">
                      <h5 class="mb-0">{{ product.prod["nom"] }}</h5>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            class="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              :src="
                                require(`../../../public/images/${product.prod['image']}`)
                              "
                              class="w-100"
                            />
                          </div>
                        </div>
                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <button
                            type="button"
                            class="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                            @click="delete_product(product.prod['id'])"
                          >
                            <i class="material-icons">delete</i>
                          </button>
                        </div>
                        <div class="col-lg-4">
                          <p class="text-start text-md-center py-4">
                            <strong>{{ product.prod["prix"] }} TND</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                      >
                        Products
                        <span>${{ total }}</span>
                      </li>
                    </ul>
                    <button
                      @click="GeneratePdf()"
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserStore } from "@/store/ServicePinia.js";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
export default {
  setup() {
    const store = UserStore();
    return { store };
  },
  name: "navbar-vue",
  data() {
    return {
      Panier_Product: [],
    };
  },
  created() {
    this.Panier_Product = this.store.products ? this.store.products : [];
  },
  methods: {
    logutUser() {
      this.store.clearnUser();
      this.$router.push({ name: "LoginView" });
      // this.$router.go();
    },
    delete_product(id) {
      let index = this.Panier_Product.findIndex((v) => v.prod["id"] == id);
      if (index != -1) {
        this.Panier_Product.splice(index, 1);
        this.store.clearProduct();
        this.store.AddProduct(this.Panier_Product);
      }
    },
    GeneratePdf() {
      const doc = new jsPDF();
      doc.addImage(
        require("../../assets/images/img1.png"),
        "png",
        2,
        2,
        20,
        20
      );
      doc.setFontSize(25);
      doc.setFont("times", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(45, 40, "BON DE COMMANDE");

      const header = ["Name Product", "Prix", "Color"];
      const body = this.Panier_Product.map((product) => [
        product.prod["nom"],
        product.prod["prix"],
        product.prod["color"],
      ]);
      doc.setFont("times", "bold");
      doc.setFontSize(15);
      autoTable(doc, {
        theme: "striped",
        bodyStyles: { fontStyle: "bold", halign: "center" },
        margin: { top: 60 },
        head: [header],
        body: body,
      });

      var writtenNumber = require("written-number");
      let total = writtenNumber(this.total, { lang: "fr" }).toUpperCase();
      doc.text(45, 110, total);
      doc.text(
        "Nous apprecions votre clinetele",
        110,
        doc.internal.pageSize.height - 30,
        "center"
      );
      doc.text(
        "si vous-avez des questions sur cette facture,n hesitez pas a nous contacter",
        110,
        doc.internal.pageSize.height - 20,
        "center"
      );
      this.store.clearProduct();
      doc.save("resatu.pdf");
    },
  },
  computed: {
    IsAuth() {
      return this.store.getUser ? true : false;
    },
    total() {
      let prix = 0;
      this.Panier_Product.forEach((e) => {
        prix += e.prod["prix"] * e.qte;
      });
      return prix;
    },
  },
  mounted() {},
};
</script>

<style scoped>
a {
  color: red;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
