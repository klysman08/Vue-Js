<template>
    <div>
        <h1>Hello word</h1>
        <ModPropriedades :propriedade="propriedades" />
        <ModData></ModData>
        <ModComputed></ModComputed>
        <ModMethods></ModMethods>
        <ModWatch></ModWatch>
        <ExTodos></ExTodos>
        <ModProps text="Propriedade" size="small" color="red" />
        <ModSlot propriedade="Propriedade de slot">
            <template #slot1>
                <h1>Slot 1</h1>
            </template>
            <template #slot2>
                <h1>Slot 2</h1>
            </template>
        </ModSlot>
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
import ModProps from './components/ModProps.vue';
import ModSlot from './components/ModSlot.vue';

export default defineComponent({
    name: 'App',
    components: {
        ModPropriedades,
        ModData,
        ModComputed,
        ModMethods,
        ModWatch,
        ExTodos,
        ModProps,
        ModSlot
    },
    data() {
        return {
            propriedades: 'propriedade'
        };
    }
});
</script>

<style>
body {
    background: #141f36;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: rgb(255, 255, 255);
    margin: 20px;
    padding: 0;
}
</style>
