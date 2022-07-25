<template>
    <div>
        <button @click="$emit('trocar')">Change the Image</button>
    </div>
</template>
<script>
    export default {
        name: 'ChangeImg',
        emits: ['trocar'],
    }
</script>