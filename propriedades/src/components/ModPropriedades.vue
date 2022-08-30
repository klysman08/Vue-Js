<template>
    <div>
        <h1>{{ propriedade }}</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ModPropriedades',
    props: {
        propriedade: {
            type: String,
            required: true
        }
    }
});
</script>
