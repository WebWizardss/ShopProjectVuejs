import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const UserStore = defineStore("store", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) ?? null);
  const products = ref(JSON.parse(localStorage.getItem("products")) ?? null);

  const getUser = computed(() => user.value);
  const getProducts = computed(() => products.value);

  function AddUser(u) {
    localStorage.setItem("user", JSON.stringify(u));
  }

  function AddProduct(p) {
    localStorage.setItem("products", JSON.stringify(p));
  }

  function clearProduct() {
    localStorage.removeItem("products");
  }

  function clearnUser() {
    localStorage.removeItem("user");
  }

  return {
    user,
    getUser,
    AddUser,
    clearnUser,
    products,
    getProducts,
    AddProduct,
    clearProduct,
  };
});
