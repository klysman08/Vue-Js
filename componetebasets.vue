<template>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'nome_do_componente'
});
</script>

<style>
/* From uiverse.io by @kirzin */

body {
    background: #141f36;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin: 20px;
    padding: 0;
}
input {
    background: #1e2a4d;
    border: 1px solid #1e2a4d;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    width: 200px;
    margin: 20px;
    display: block;
}

button {
    font: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, uppercase;
    text-decoration: none;
    position: absolute;
    border: none;
    font-size: 14px;
    font-family: inherit;
    color: #fff;
    width: 9em;
    height: 3em;
    line-height: 2em;
    text-align: center;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 300%;
    border-radius: 30px;
    z-index: 1;
}

button:hover {
    animation: ani 8s linear infinite;
    border: none;
}

@keyframes ani {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: 400%;
    }
}

button:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
}

button:hover::before {
    filter: blur(20px);
}

button:active {
    background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}
</style>
