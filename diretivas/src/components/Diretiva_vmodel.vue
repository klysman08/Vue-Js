<template>
    <div>
        <form>
            <input type="text" placeholder="Nome" v-model.lazy.trim="name" />

            <input type="number" placeholder="Idade" v-model.number="age" />

            <textarea
                rows="2"
                placeholder="Descrição"
                v-model="message"
            ></textarea>

            <input type="checkbox" /> Newsletter <br />

            <input type="radio" name="color" value="vermelho" v-model="color" />
            Vermelho
            <input type="radio" name="color" value="verde" v-model="color" />
            Verde
            <input type="radio" name="color" value="azul" v-model="color" />
            Azul

            <select v-model="fruit">
                <option disabled selected>Selecione uma fruta</option>
                <option value="uva">Uva</option>
                <option value="banana">Banna</option>
                <option value="morango">Morango</option>
            </select>
        </form>

        <p>Nome: {{ name }}</p>
        <p>Idade: {{ age }}</p>
        <p>Mensagem: {{ message }}</p>
        <p>Newsletter: {{ newsletter }}</p>
        <p>Cor: {{ color }}</p>
        <p>Fruta: {{ fruit }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Diretiva_vmodel',
    data() {
        return {
            name: '',
            age: 0,
            message: '',
            newsletter: false,
            color: '',
            fruit: ''
        };
    }
});
</script>

<style scoped></style>
