<template>
  <div id="main-banner">
    <h1>Make your plate</h1>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style scoped>

  #main-banner {
    background-image: url('/public/img/pasta-with-chicken-and-mushroom-2022-02-08-22-39-27-utc.jpg');
    /* background-position: 0 -250px; */
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1 {
    color: #FFF;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;
  }

</style>