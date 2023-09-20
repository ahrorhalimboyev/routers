<template>
  <div>
    <h2>Car Details</h2>
    <div class="box">
      <div>
        <strong>ID:</strong> {{ $route.query.id }}<br />
        <strong>Brand:</strong> {{ $route.query.brand }}<br />
        <strong>Model:</strong> {{ $route.query.model }}<br />
        <strong>Year:</strong> {{ $route.query.year }}<br />
        <strong>Color:</strong> {{ $route.query.color }} <br />
      </div>
      <div class="card size">
        <img :src="$route.query.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .size {
    width: 800px;
    height: 500px;
    border: none;
  }

  .box {
    display: flex;
    flex-direction: row;
  }
</style>
