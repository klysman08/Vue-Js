<template>
    <h3> {{name}}</h3>
    <Info :email="email"></Info>
</template>

<script>
import Info from './Info.vue'
    export default {
        name: 'Pessoa',
        components: {
            Info,
        },
        data() {
            return {
                name: 'Hello Vue Pessoa',
                email: 'Hataro-san@anihub.tv'
            }
        },
    }
</script>

<style scoped>
    h3 {
        color: rgb(27, 166, 190);
        font-family: 'Roboto', sans-serif;
        font-size: 1.5em;
        font-weight: 300;
        margin: 20px;
    }

</style>