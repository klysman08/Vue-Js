<template>
    <div>
        <h1>Hello word</h1>
        <ModPropriedades :propriedade="propriedades" />
        <ModData></ModData>
        <ModComputed></ModComputed>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModPropriedades from './components/ModPropriedades.vue';
import ModData from './components/ModData.vue';
import ModComputed from './components/ModComputed.vue';

export default defineComponent({
    name: 'App',
    components: {
        ModPropriedades,
        ModData,
        ModComputed
    },
    data() {
        return {
            propriedades: 'propriedade222'
        };
    }
});
</script>

<style></style>
