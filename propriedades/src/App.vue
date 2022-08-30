<template>
    <div>
        <h1>Hello word</h1>
        <ModPropriedades :propriedade="propriedades" />
        <ModData></ModData>
        <ModComputed></ModComputed>
        <ModMethods></ModMethods>
        <ModWatch></ModWatch>
        <ExTodos></ExTodos>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModPropriedades from './components/ModPropriedades.vue';
import ModData from './components/ModData.vue';
import ModComputed from './components/ModComputed.vue';
import ModMethods from './components/ModMethods.vue';
import ModWatch from './components/ModWatch.vue';
import ExTodos from './components/ExTodos.vue';

export default defineComponent({
    name: 'App',
    components: {
        ModPropriedades,
        ModData,
        ModComputed,
        ModMethods,
        ModWatch,
        ExTodos
    },
    data() {
        return {
            propriedades: 'propriedade'
        };
    }
});
</script>

<style></style>
