<template>
  <div class="bg-top">
    <h3>Nombre</h3>
    <h3>Promedio</h3>
  </div>
  <div>
    <div class="container mb-5">
      <div class="row size-row">
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src="../assets/math.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Calculo II</h5>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src="../assets/math.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Fisica 2</h5>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src="../assets/add.png" class="card-img-top" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
