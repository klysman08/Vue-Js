<template>
    <div>
        <h1>Hello word</h1>
        <BeforeCreate_and_Created></BeforeCreate_and_Created>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BeforeCreate_and_Created from './components/BeforeCreate_and_Created.vue';

export default defineComponent({
    name: 'App',
    components: {
        BeforeCreate_and_Created
    }
});
</script>

<style></style>
