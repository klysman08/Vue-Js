<template>
  <Navbar :logo="logo_src" :alt="logo_name" />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      logo_src: "/img/cat@2x.png",
      logo_name: "Logo",
    };
  },
};
</script>

<style>

  * {
    font-family: "Helvitica", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main-conteiner {
    margin: 50px auto;
    min-height: 205px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }


</style>
