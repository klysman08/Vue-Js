<template lang="">
    <div>
        <h1>{{ fullName }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Person {
    name: string;
    age: number;
}

export default defineComponent({
    name: 'ModComputed',
    data() {
        return {
            name: 'Chisato',
            lastname: 'Takinaaa'
        };
    },
    computed: {
        fullName(): string {
            return `${this.name} ${this.lastname}`;
        }
    }
});
</script>

<style lang=""></style>
