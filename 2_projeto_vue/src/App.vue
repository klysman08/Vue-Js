<template>

  <PrimeiroComponte />
  <LifeCycle></LifeCycle>
  <Pessoa></Pessoa>
  <Info></Info>
  <Button></Button>
  
</template>

<script>
  import PrimeiroComponte from './components/PrimeiroComponte.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  import Info from './components/Info.vue'
  import Button from './components/Button.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponte,
      LifeCycle,
      Pessoa,
      Info,
      Button,
    }
  }
</script>