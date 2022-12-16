<template>
  <nav class="navbar navbar-expand-lg bg-top">
    <div class="container-fluid">
      <a class="navbar-brand bg-top hover" @click="goHome()">Home</a>
    </div>
  </nav>
  <div class="bg-top">
    <h3>Añadir Asignatura</h3>
  </div>
  <div class="container mt-5">
    <div class="mb-3">
      <label class="form-label">Nombre Asignatura</label>
      <input v-model="name" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">URL Imagen</label>
      <input v-model="urlImage" class="form-control" />
    </div>
    <button class="btn btn-primary" @click="addSubject(name, urlImage)">
      Añadir
    </button>
  </div>
</template>

<script>
import { userDetails } from "../services/users.service";
import { addSubject } from "../services/subjects.service";

export default {
  name: "AddSubjectView",

  data() {
    return {
      user: "",
      id: "639bd3b42b9b92a0a225fc24",
      name: "",
      urlImage: "",
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
    addSubject(name, urlImage) {
      const data = {
        name: name,
        urlImage: urlImage,
        evaluations: [],
        userId: this.user._id,
      };
      addSubject(data);
    },
    goHome() {
      this.$router.push({ name: "home" });
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
