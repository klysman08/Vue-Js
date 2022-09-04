<template>
    <div>
        <Diretiva_vbind></Diretiva_vbind>
        <Diretiva_vhtml></Diretiva_vhtml>
        <Diretiva_von></Diretiva_von>
        <Diretiva_vonce></Diretiva_vonce>
        <Diretiva_vif></Diretiva_vif>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Diretiva_vbind from './components/Diretiva_vbind.vue';
import Diretiva_vhtml from './components/Diretiva_vhtml.vue';
import Diretiva_von from './components/Diretiva_von.vue';
import Diretiva_vonce from './components/Diretiva_vonce.vue';
import Diretiva_vif from './components/Diretiva_vif.vue';

export default defineComponent({
    name: 'App',
    components: {
        Diretiva_vbind,
        Diretiva_vhtml,
        Diretiva_von,
        Diretiva_vonce,
        Diretiva_vif
    }
});
</script>

<style>
/* From uiverse.io by @kirzin */
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
