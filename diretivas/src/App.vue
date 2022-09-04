<template>
    <div>
        <Diretiva_vbind></Diretiva_vbind>
        <Diretiva_vhtml></Diretiva_vhtml>
        <Diretiva_von></Diretiva_von>
        <Diretiva_vonce></Diretiva_vonce>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Diretiva_vbind from './components/Diretiva_vbind.vue';
import Diretiva_vhtml from './components/Diretiva_vhtml.vue';
import Diretiva_von from './components/Diretiva_von.vue';
import Diretiva_vonce from './components/Diretiva_vonce.vue';

export default defineComponent({
    name: 'App',
    components: {
        Diretiva_vbind,
        Diretiva_vhtml,
        Diretiva_von,
        Diretiva_vonce
    }
});
</script>
