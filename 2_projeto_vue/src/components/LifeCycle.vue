<template>
    <h1>My name is: {{ name }}</h1>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                name: 'I dont know'
            }
        },
        created() {
            setTimeout(() => {
                this.name = 'Klysman',
                console.log('created 01')
            }, 2000)
        },
        mounted() {
               setTimeout(() => {
                this.name = 'Hataro-sann',
                console.log('created 02')
            }, 4000)
        },

    }
</script>

<style scoped>
    h1 {
        color: rgb(55, 46, 63);
        font-family: 'Roboto', sans-serif;
        font-size: 2.5em;
        font-weight: 100;
        margin: 20px;
    }
</style>