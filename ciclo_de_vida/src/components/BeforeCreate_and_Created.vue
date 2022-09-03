<template lang="">
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BeforeCreate_and_Created',
    data() {
        return {
            message: 'Hello Created'
        };
    },
    beforeCreate() {
        console.log(this.message); // Ainda não pudemos acessar o data
    },
    created() {
        console.log(this.message); // Depois que o componente é criado, podemos acessar o data
        // é o momento mais adequado para fazer requisições HTTP, mas esse método ainda não tem acesso ao DOM.
    }
});
</script>
