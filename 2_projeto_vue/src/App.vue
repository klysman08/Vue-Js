<template>

  <PrimeiroComponte />
  <LifeCycle></LifeCycle>
  
</template>

<script>
  import PrimeiroComponte from './components/PrimeiroComponte.vue'
  import LifeCycle from './components/LifeCycle.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponte,
      LifeCycle
    }
  }
</script>