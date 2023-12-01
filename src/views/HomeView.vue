<template>
  <div class="container">
    <div>
      <div class="landing-page py-5">
        <div class="row py-5">
          <div class="col-lg-6 py-5">
            <div class="py-4">
              <div class="py-5 mt-5">
                <div class="intro_text text-center">
                  <h1>talel</h1>
                  <h2>qsdq</h2>
                  <h3>qsdsq</h3>
                  <div class="py-4 d-flex justify-content-center">
                    <div class="mx-4">
                      <RouterLink to="login">
                        <button class="button">SigIn</button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-lg-block d-none text-center">
            <img
              src="../assets/images/img1.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <ServiceComp></ServiceComp>
    <TeamsComp></TeamsComp>
    <ContactComp></ContactComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import FooterComp from "@/components/layout/FooterComp.vue";
import ContactComp from "@/components/ContactComp.vue";
import TeamsComp from "@/components/TeamsComp.vue";
import ServiceComp from "@/components/ServiceComp.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    ServiceComp,
    TeamsComp,
    ContactComp,
    FooterComp,
  },
};
</script>

<style scoped>
.home {
  height: 97vh;
}
.button {
  display: inline-block;
  padding: 10px 10px;
  border: 0.2rem solid #ff2d75;
  color: #ff2d75;
  cursor: pointer;
  font-size: 15px;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin-top: 1rem;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  background: #ff2d75;
  transition: 0.3s linear;
  z-index: -1;
}

.button:hover::before {
  width: 100%;
  left: 0;
}

.button:hover {
  color: #fff;
}

.intro_text {
  color: #ff2d75;
}

.intro_text h3 {
  color: #5995fd !important;
}

@media (max-width: 500px) {
  h1,
  h3,
  h2 {
    font-size: 16px;
  }
}
</style>
