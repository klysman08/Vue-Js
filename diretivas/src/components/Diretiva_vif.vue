<template>
    <div>
        <div>..</div>
        <h1>Diretiva v-if</h1>
        <h2 v-if="sex === 'M'">Masculino</h2>
        <h2 v-else-if="sex === 'F'">Feminino</h2>
        <h3 v-else>Outro</h3>
        <h1>Diretiva v-show</h1>
        <h2 v-show="sex === 'F'">Feminino</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Diretiva_vif',
    data() {
        return {
            sex: 'F'
        };
    }
});
</script>
