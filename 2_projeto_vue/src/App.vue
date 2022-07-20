<template>
  <Header></Header>
  <PrimeiroComponte />
  <LifeCycle></LifeCycle>
  <Pessoa></Pessoa>
  <Info></Info>
  <!-- <Button></Button> -->
  <Forms></Forms>
  <Picture></Picture>
  <MultiplosEvents></MultiplosEvents>
  
</template>

<script>
  import PrimeiroComponte from './components/PrimeiroComponte.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  import Info from './components/Info.vue'
  import Button from './components/Button.vue'
  import Forms from './components/Forms.vue'
  import Picture from './components/Picture.vue'
  import Header from './components/Header.vue'
  import MultiplosEvents from './components/MultiplosEvents.vue'

  export default {
    name: 'App',
    components: {
      Header,
      PrimeiroComponte,
      LifeCycle,
      Pessoa,
      Info,
      Button,
      Forms,
      Picture,
      MultiplosEvents
    }
  }
</script>

<style>
  body {
    background-color: rgb(255, 255, 255)  }
  img {
    width: 200px;
    height: 200px;
    margin: 20px;
  }
  h1 {
    color: rgb(27, 166, 190);
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    font-weight: 300;
    margin: 20px;
  }
  p {
    color: rgb(9, 58, 90);
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 300;
    margin: 20px;
  }

</style>