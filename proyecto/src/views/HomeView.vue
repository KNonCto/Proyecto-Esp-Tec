<template>
  <div class="bg-top">
    <h3>{{ user.name }}</h3>
  </div>
  <div>
    <div
      class="container mb-5"
      v-for="subject in user.subjects"
      :key="subject._id"
    >
      <div class="row hover" @click="goSubject(subject._id)">
        <div class="col-lg-4">
          <div class="card">
            <img :src="subject.urlImage" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ subject.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <button type="button" class="btn btn-primary" @click="addSubject()">
      +
    </button>
  </div>
</template>

<script>
import { userDetails } from "../services/users.service";

export default {
  name: "HomeView",

  data() {
    return {
      user: "",
      id: "639bd3b42b9b92a0a225fc24",
    };
  },

  mounted() {
    this.getUser();
  },

  methods: {
    async getUser() {
      const response = await userDetails(this.id);
      this.user = response.data.user;
    },
    addSubject() {
      this.$router.push({ name: "addSubject" });
    },
    goSubject(id) {
      this.$router.push({ name: "subject", params: { id } });
    },
  },
};
</script>

<style>
.hover {
  cursor: pointer;
}

.bg-top {
  background-color: rgb(127, 208, 255);
}

.size-row {
  height: 1px;
}
</style>
