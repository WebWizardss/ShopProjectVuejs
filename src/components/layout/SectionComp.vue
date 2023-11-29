<template>
  <div>
    <div class="Image">
      <img :src="currentImage" width="90%" height="250px" />
      <img src="../../assets/logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      Images: [
        "../../assets/Capture d’écran (146).png",
        "../../assets/logo.png",
      ],
    };
  },
  methods: {},
  mounted() {
    setInterval(() => {
      this.i++;
    }, 3000);
  },
  computed: {
    currentImage() {
      return this.Images[this.i % this.Images.length];
    },
  },
};
</script>

<style scoped>
.Image {
  text-align: center;
  justify-items: center;
}
.Image img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 25px;
}
</style>
