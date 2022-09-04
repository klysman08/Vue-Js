<template>
    <div>
        <h1>Diretiva V-FOR</h1>
        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                {{ produto.nome }} : {{ produto.preco }} R$
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'diretiva_vfor',
    data() {
        return {
            /* Lista de produtos de computador com id, nome e preço - limite = 5 */
            produtos: [
                { id: 1, nome: 'Computador', preco: 2000 },
                { id: 2, nome: 'Mouse', preco: 50 },
                { id: 3, nome: 'Teclado', preco: 100 },
                { id: 4, nome: 'Monitor', preco: 500 },
                { id: 5, nome: 'Headset', preco: 200 }
            ]
        };
    }
});
</script>
