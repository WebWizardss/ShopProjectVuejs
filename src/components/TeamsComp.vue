<template>
  <div data-aos="fade-right">
    <article class="thank py-4">
      <h3
        class="fw-bolder text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        🤍
      </h3>
      <div
        class="row container-fluid justify-content-center gap-5 py-4"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div class="container_box col-lg-5" v-for="user in tabuser" :key="user">
          <div class="card_box">
            <img :src="user.img" alt="" />
          </div>

          <div class="content_box">
            <h3 :style="'color:' + user.color">{{ user.name }}</h3>
            <div class="all_link">
              <a class="mx-2" href="#!">
                <i class="material-icons mx-2">facebook</i>
              </a>
              <a class="mx-2" href="#!">
                <i class="material-icons mx-2">facebook</i>
              </a>
              <a class="mx-2" href="#!">
                <i class="material-icons mx-2">facebook</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabuser: [
        {
          name: "wessim",
          img: require("../assets/images/wessim.jpg"),
          color: "#4fc3dc",
        },
        {
          name: "lyna",
          img: require("../assets/images/lyna.jpg"),
          color: "#ff2d75",
        },
        {
          name: "iheb",
          img: require("../assets/images/iheb.png"),
          color: "#4fc3dc",
        },
      ],
    };
  },
};
</script>

<style>
.container_box {
  width: 200px !important;
  height: 190px;
  margin: 0px 70px;
  background: linear-gradient(60deg, #000, #434343);
  border-radius: 20%;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 4px 12px;
}

.container_box .card_box {
  width: 200px;
  height: 190px;
  z-index: 1;
  margin: 0 auto;
  position: relative;
  border-radius: 20%;
  transition: 1s;
}

.card_box img {
  width: 100%;
  height: 100%;
  border-radius: 20%;
  margin-left: -10px;
}

.container_box .content_box {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: translateY(-168px);
  transition: 1s;
}

.container_box .content_box h3,
.container_box .content_box p {
  text-align: center;
  color: #000;
  font-weight: 600;
}

.container_box .content_box h3 {
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  padding-top: 12px;
}

.container_box .content_box p {
  margin-top: -15px;
  font-family: monospace;
}

.container_box:hover .card_box {
  width: 60%;
  height: 70%;
  opacity: 1;
  transform: translateY(-40px);
}

.container_box:hover .content_box {
  transform: translateY(-40px);
}

.container_box .all_link {
  text-align: center;
}

.container_box .all_link a {
  color: #fff !important;
}

.container_box .all_link :hover {
  color: #b50edf;
  transition: 0.3s;
}
</style>
