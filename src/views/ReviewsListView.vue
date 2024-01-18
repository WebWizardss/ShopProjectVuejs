<template>
  <div class="reviews container">
    <h1 class="text-center">Review</h1>
    <div class="row">
      <div class="col-lg-6">
        <draggable
          v-model="reviews"
          group="app"
          itemKey="nom"
          ghost-class="ghost"
          @change="ReviewsMove"
        >
          <template #item="{ element }">
            <div class="card mb-2">
              <div class="card-header">
                {{ element.nom }}
              </div>
              <div class="card-body">
                Message : {{ element.message }} <br />
                Email : {{ element.email }}
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="col-lg-6">
        <draggable
          v-model="Deletetd"
          group="app"
          itemKey="head"
          ghost-class="ghost"
          @change="ReviewsMove"
        >
          <template #item="{ element }">
            <div class="card mb-2">
              <div class="card-header">
                {{ element.head }}
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ReviewsService from "../services/contact.js";
export default {
  created() {
    this.getReviews();
  },
  components: {
    draggable,
  },
  data() {
    return {
      Deletetd: [{ head: "deleted" }],
      reviews: [],
      drag: false,
    };
  },
  methods: {
    getReviews() {
      ReviewsService.getreviews().then((res) => {
        this.reviews = res.data;
      });
    },
    ReviewsMove(event) {
      let itemmoved = event.added;
      if (!itemmoved) return;
      let id = itemmoved.element.id;
      ReviewsService.deleteReview(id).then(() => {
        alert("delete with succes");
        this.getReviews();
      });
    },
  },
};
</script>

<style></style>
