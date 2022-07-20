<template>
    <header>
        <h1>{{ title }}</h1>
        <ul>
            
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                title: 'Hello Vue Title Header!'
            }
        }
    }
</script>

<style scoped>
    header {
        background-color: rgb(55, 46, 63);
        color: rgb(255, 255, 255);
        font-family: 'Roboto', sans-serif;
        font-size: 1.5em;
        font-weight: 100;
        margin: 2px;

    }
    h1 {
        color: rgb(255, 255, 255);
        font-family: 'Roboto', sans-serif;
        font-size: 1.5em;
        font-weight: 300;
        margin: 20px;
    }
</style>