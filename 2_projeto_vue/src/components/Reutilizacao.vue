<template>
    <button @click="ativou">Ativar</button>
    <span v-show="ativado">Reutilização independente ativado</span>
</template>

<script>
export default {
    name: 'Reutilizacao',
    data() {
        return {
            ativado: false
        }
    },
    methods: {
        ativou() {
            this.ativado = !this.ativado
        }
    }
}
</script>

<style scoped>
button {
    background-color: rgb(27, 166, 190);
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 300;
    padding: 10px;
    border-radius: 5px;
    margin: 20px;
    display: inline-block;
}
</style>