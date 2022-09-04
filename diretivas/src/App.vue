<template>
    <div>
        <Diretiva_vbind></Diretiva_vbind>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Diretiva_vbind from './components/Diretiva_vbind.vue';

export default defineComponent({
    name: 'App',
    components: {
        Diretiva_vbind
    }
});
</script>
