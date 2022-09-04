<template>
    <div>
        <a href="interno" v-on:click.once.prevent="clicar">Clique aqui</a>
        <input type="text" v-on:keyup.enter="digitando" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Diretiva_von',
    methods: {
        clicar() {
            console.log(
                'Clicou uma vez, previne o comportamento padrão, no segundo clique ativa o comportamento padrão'
            );
        },
        digitando() {
            console.log('Digitou e apertou enter');
        }
    }
});
</script>
