<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="destroyComponent">Destruir componente</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BeforeUnmount_Unmounted',
    data() {
        return {
            message: 'Before Unmount and Unmount'
        };
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        console.log('Salvar dado em banco de dados');
    },
    unmounted() {
        console.log('unmounted');
        alert('Salvo com sucesso');
    },
    methods: {
        destroyComponent() {
            this.$.appContext.app.unmount();
        }
    }
});
</script>
