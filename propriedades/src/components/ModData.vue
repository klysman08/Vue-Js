<template lang="">
    <div>
        <h1>{{ person.name }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Person {
    name: string;
    age: number;
}

export default defineComponent({
    name: 'ModData',
    data() {
        return {
            person: {
                name: 'Klysman',
                age: 28
            } as Person
        };
    }
});
</script>

<style lang=""></style>
