<template>
    <div>
        <h2 v-once>Valor que não muda: {{ stock }}</h2>
        <h2>Valor que muda: {{ stock }}</h2>
        <button @click="stock++">Adicionar</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Diretiva_vonce',
    data() {
        return {
            stock: 1
        };
    }
});
</script>
