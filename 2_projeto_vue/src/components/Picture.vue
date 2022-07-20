<template>
    <img :src="avatar" :alt="description">
</template>

<script>
    export default {
        name: 'Picture',
        data() {
            return {
                avatar: "/img/preview.jpg",
                description: "This is a description"
            }
        }
    }
</script>

