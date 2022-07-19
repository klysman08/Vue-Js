<template>

        <form  action="">
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="sobrenome" placeholder="Sobrenome">
            <input type="submit" value="Enviar" v-on:click="enviar">
        </form>

</template>

<script>
    export default {
        name: 'Forms',
        data() {
            return {
                nome: 'Hataro-san',
                sobrenome: 'san',
            }
        },
        methods: {
            enviar() {
                console.log(this.nome, this.sobrenome)
            }
        }
    }

</script>

<style scoped>
        /* From uiverse.io by @alexruix */
    input-group {
    position: relative;
    }

    input {
    border: solid 1.5px #302f2f;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #1ba7ac;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
    margin: 10px;
    }

    user-label {
    position: absolute;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4,0,0.2,1);
    }

    input:focus, input:valid {
    outline: none;
    border: 1.5px solid #1a73e8;
    }

    input:focus ~ label, input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #212121;
    padding: 0 .2em;
    color: #2196f3;
    }
</style>