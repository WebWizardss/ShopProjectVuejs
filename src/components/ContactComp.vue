<template>
  <div>
    <article id="contact_us" class="contact py-1" data-aos="fade-up">
      <div class="container py-5">
        <div class="text-center py-4">
          <h2 class="text-uppercase">Talel</h2>
        </div>
        <form class="shadow p-4 m-3 rounded">
          <h4 class="fw-bolder text-primary">Form</h4>
          <p class="text-muted-primary">Test</p>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <input
                  type="name"
                  name="name"
                  required
                  class="form-control shadow"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  name="email"
                  required
                  class="shadow form-control shadow"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <textarea
                  required
                  class="shadow rounded"
                  style="outline: none; border: none; padding: 10px"
                  name="messages"
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
              <button
                style="width: 100%"
                name="submit"
                type="submit"
                class="button"
              >
                Send
              </button>
            </div>
            <div class="col-sm-6 text-center">
              <div class="row text-center">
                <div class="col-md-12 d-lg-block d-none text-center mb-5">
                  <img
                    src="../assets/images/img1.png"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div class="col-md-12 text-center">
                  <div class="row mb-3">
                    <div class="col-md-2">
                      <span class="fa-stack fa-1x">
                        <i class="material-icons mx-2">shopping_cart</i>
                      </span>
                    </div>
                    <div class="col-md-2">
                      Bahra <span class="text-danger">❤</span>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-2">
                      <span class="fa-stack fa-1x">
                        <i class="material-icons mx-2">shopping_cart</i>
                      </span>
                    </div>
                    <div class="col-md-2">+21629036027</div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <span class="fa-stack fa-1x">
                        <i class="material-icons mx-2">shopping_cart</i>
                      </span>
                    </div>
                    <div class="col-md-2">talelmejri8@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
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
</style>
