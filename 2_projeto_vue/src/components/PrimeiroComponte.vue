<template>
    <h2>Hello Vue</h2>
    <p>{{ message }}</p>
    <p>My profession is {{ profession }}</p>
</template>


<script>
    export default {
        name: 'PrimeiroComponte',
        data() {
            return {
                message: 'Hello Vue by Data',
                profession: 'Data Scietist'
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: rgb(55, 46, 63);
        font-family: 'Roboto', sans-serif;
        font-size: 2.5em;
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