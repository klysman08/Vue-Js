<template>
    <div>
        <h1>ModSlot</h1>
        <slot name="slot1" />
        {{ propriedade }}
        <slot name="slot2" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModSlot',
    props: {
        propriedade: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped></style>
