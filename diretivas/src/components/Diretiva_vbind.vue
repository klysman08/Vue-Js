<template lang="">
    <div>
        <h1>Directiva V-BIND</h1>
        <p v-bind:title="titulo">{{ titulo }}</p>
        <!-- v-for para minha lista de produtos -->
        <div v-for="produto in produtos" :key="produto.id">
            <!-- <img :src="produto.url" :alt="produto.nome" :title="produto.nome" /> -->
            <h2>{{ produto.name }}</h2>
            <p>{{ produto.price }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Diretiva_vbind',
    data() {
        return {
            titulo: 'Título do elemento',
            // um objeto de produtos com nome url e preço
            produtos: [
                {
                    id: 1,
                    name: 'Produto 1',
                    url: 'https://picsum.photos/200/300',
                    price: 10
                },
                {
                    id: 2,
                    name: 'Produto 2',
                    url: 'https://picsum.photos/200/300',
                    price: 20
                },
                {
                    id: 3,
                    name: 'Produto 3',
                    url: 'https://picsum.photos/200/300',
                    price: 30
                }
            ]
        };
    }
});
</script>
