<template>
    <div>
        <h1>{{ message }}</h1>
        <h2>{{ count }}</h2>
        <button @click="count++">Increment</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BeforeUpdate_Update',
    data() {
        return {
            message: 'Before Update and Update',
            count: 0
        };
    },
    // ambos os métodos possuem acesso aos dados e a DOM.
    beforeUpdate() {
        //console.log('beforeUpdate');
    },
    updated() {
        console.log('Atualizando');
        if (this.count > 5) {
            this.count = 0;
            console.log('Zerado');
        }
    }
});
</script>
