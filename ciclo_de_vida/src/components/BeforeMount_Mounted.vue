<template>
    <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BeforeMount_Mounted',
    data() {
        return {
            message: 'Before Mount and Mounted'
        };
    },
    beforeMount() {
        console.log(this.message); // Ainda não temos acesso ao DOM mas temos acesso ao data
        console.log(this.$el); // Ainda não pudemos acessar o DOM e manipular o HTML
    },
    mounted() {
        console.log(this.$el); // Já podemos acessar o DOM e manipular o HTML
        this.$el.style.background = 'red'; // Depois que o componente é montado, podemos acessar o DOM e manipular o HTML
    }
});
</script>
