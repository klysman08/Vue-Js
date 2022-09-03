<template>
    <div>
        <h1>Hello word</h1>
        <BeforeCreate_and_Created></BeforeCreate_and_Created>
        <BeforeMount_Mounted></BeforeMount_Mounted>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BeforeCreate_and_Created from './components/BeforeCreate_and_Created.vue';
import BeforeMount_Mounted from './components/BeforeMount_Mounted.vue';

export default defineComponent({
    name: 'App',
    components: {
        BeforeCreate_and_Created,
        BeforeMount_Mounted
    }
});
</script>

<style></style>
