<template>
  <nav class="navbar navbar-expand-lg bg-top">
    <div class="container-fluid">
      <a class="navbar-brand bg-top hover" @click="goHome()">Home</a>
    </div>
  </nav>
  <div class="bg-top">
    <h3>{{ subject.name }}</h3>
    <h4>Promedio: {{ avg }}</h4>
  </div>
  <div>
    <div
      class="container mb-5"
      v-for="evaluation in subject.evaluations"
      :key="evaluation._id"
    >
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ evaluation.name }}</h5>
              <h5 class="card-title">Fecha: {{ evaluation.date }}</h5>
              <h5 class="card-title">
                Nota: {{ evaluation.grade.$numberDecimal }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="mb-3">
      <label class="form-label">Nombre</label>
      <input v-model="name" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Fecha</label>
      <input v-model="date" type="date" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Nota</label>
      <input v-model="grade" class="form-control" />
    </div>
    <button class="btn btn-primary" @click="addEvaluation(name, date, grade)">
      Añadir Evaluación
    </button>
  </div>
</template>

<script>
import { getSubject } from "../services/subjects.service";
import { addEvaluation } from "../services/evaluations.service";
import { toNumber } from "@vue/shared";

export default {
  name: "SubjectView",

  data() {
    return {
      user: "",
      userId: "639bd3b42b9b92a0a225fc24",
      name: "",
      urlImage: "",
      subject: "",
      avg: 0,
    };
  },
  props: {
    id: String,
  },
  mounted() {
    this.getSubject(this.id);
  },

  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },

    average(subject) {
      subject.evaluations.forEach((element) => {
        this.avg = toNumber(this.avg) + toNumber(element.grade.$numberDecimal);
      });
      this.avg = this.avg / subject.evaluations.length;
    },

    async getSubject(id) {
      const response = await getSubject(id);
      this.subject = response.data.subject;
      this.average(this.subject);
    },

    addEvaluation(name, date, grade) {
      const data = {
        name: name,
        date: date,
        grade: grade,
        subjectId: this.subject._id,
      };
      addEvaluation(data);
      window.location.reload();
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
