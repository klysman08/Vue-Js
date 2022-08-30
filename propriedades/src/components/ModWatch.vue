<template lang="">
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModWatch',
    data() {
        return {
            count: 80
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    },
    watch: {
        count(newValue: number, oldValue: number) {
            console.log(`new: ${newValue}, old: ${oldValue}`);
        }
    }
});
</script>
