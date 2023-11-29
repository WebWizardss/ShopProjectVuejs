<template>
  <div id="app">
    <NavbarComp></NavbarComp>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarComp from "./components/layout/NavbarComp.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavbarComp,
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
#app {
  overflow-x: hidden;
  width: 100vw;
}
</style>
