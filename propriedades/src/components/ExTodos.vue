<!-- 
[] Definir o dado `todos`
[] Preencher os `todos` quando o componente é criado
[] Exibir em tela apenas `todos` concluídos
[] Ter um método para concluir os `todos`
[] Mostrar um alerta quando todos os `todos` forem finalizados -->

<template>
    <div>
        <h1>Exemplo de todos</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.text">
                {{ todo.text }}
            </li>
        </ul>
        <button @click="checkAllTodos">Concluir todos</button>
    </div>
</template>

<script lang="ts">
interface Todo {
    text: string;
    done: boolean;
}

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ExTodos',
    data() {
        return {
            todos: [] as Todo[]
        };
    },
    computed: {
        doneTodos(): Todo[] {
            return this.todos.filter((todo) => todo.done);
        }
    },
    watch: {
        todos: {
            handler: function (todos) {
                if (todos.length === this.doneTodos.length) {
                    alert('Todos os todos foram concluídos');
                }
            },
            deep: true
        }
    },
    created() {
        this.todos = [
            { text: 'Estudar Typescript', done: true },
            { text: 'Lavar os pratos', done: false },
            { text: 'Aprender Nuxt.js', done: true }
        ];
    },
    methods: {
        checkAllTodos() {
            this.todos.forEach((todo) => (todo.done = true));
        }
    }
});
</script>

<style></style>
