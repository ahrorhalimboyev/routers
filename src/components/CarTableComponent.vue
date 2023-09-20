<template>
  <div>
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <td><h6>ID</h6></td>
          <td><h6>Brand</h6></td>
          <td><h6>Model</h6></td>
          <td><h6>Year</h6></td>
          <td><h6>Color</h6></td>
        </tr>
      </thead>
      <tbody
        v-for="(car, index) in cars"
        :key="index"
        @click="navigateToCarInfo(car)"
      >
        <tr>
          <td>{{ car.id }}</td>
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();

  const cars = ref([
    {
      id: 1,
      brand: "Chevrolet",
      model: "Tracker",
      year: 2022,
      color: "white",
      image: "http://www.navoiyatx.uz/uploads/car_colors/1633511505.png",
    },
    {
      id: 2,
      brand: "KIA",
      model: "K5",
      year: 2023,
      color: "black",
      image: "https://s3.amazonaws.com/fzautomotive/dealers/63ea82b92b34c.png",
    },
    {
      id: 3,
      brand: "Hundai",
      model: "Santa Fe",
      year: 2020,
      color: "blue",
      image:
        "https://s7d1.scene7.com/is/image/hyundai/2023-santa-fe-se-stormy-sea-centered-browse-hero:Browse?fmt=webp-alpha",
    },
    {
      id: 4,
      brand: "Chevrolet",
      model: "TrailBlazer",
      year: 2023,
      color: "gray",
      image:
        "https://images.hgmsites.net/med/2022-chevrolet-trailblazer-fwd-4-door-lt-angular-front-exterior-view_100798959_m.jpg",
    },
    { id: 5, brand: "Nissan", model: "Ariya", year: 2022, color: "orange" ,image:"https://di-uploads-pod17.dealerinspire.com/balisenissanofwestspringfield/uploads/2023/02/ariya.png"},
  ]);

  const navigateToCarInfo = (car) => {
    router.push({ path: "/carinfo", query: car });
  };
</script>

<style lang="scss" scoped></style>
