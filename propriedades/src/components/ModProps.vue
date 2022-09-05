<template>
    <div>
        <button :class="[color, size]">{{ text }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type color = 'red' | 'green' | 'blue';

export default defineComponent({
    name: 'ModProps',
    props: {
        text: {
            type: [String, Number],
            required: true
        },
        size: {
            type: String,
            default: 'small',
            validator: (value: string) => {
                return ['small', 'medium', 'large'].includes(value);
            }
        },
        color: {
            type: String,
            default: 'red',
            validator: (value: color) => {
                return ['red', 'green', 'blue'].includes(value);
            }
        }
    }
});
</script>

<style scoped>
button {
    color: rgb(7, 71, 114);
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    margin-bottom: 1rem;
}

.size {
    background-color: green;
}

.danger {
    background-color: red;
}

.primary {
    background-color: #2d6cea;
}
</style>
