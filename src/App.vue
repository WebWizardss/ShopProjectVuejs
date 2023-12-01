<template>
  <div id="app">
    <PrealoaderComp></PrealoaderComp>
    <NavbarComp></NavbarComp>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import PrealoaderComp from "./components/PrealoaderComp.vue";
import NavbarComp from "./components/layout/NavbarComp.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavbarComp,
    PrealoaderComp,
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
