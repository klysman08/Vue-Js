<template>
    <img :src="avatar" :alt="description">
    <ChangeImgVue @trocar="changeImg"></ChangeImgVue>

</template>

<script>
    import ChangeImgVue from './ChangeImg.vue'
    export default {
        name: 'Picture',
        components: {
            ChangeImgVue
        },
        data() {
            return {
                avatar: "/img/nayon.jpg",
                description: "This is a description",
                ativado: false
            }
        },
        methods: {
            changeImg() {
                if (this.ativado) {
                    this.avatar = "/img/nayon.jpg"
                    this.description = "This is a description"
                    this.ativado = false
                } else {
                    this.avatar = "/img/nayon2.jpg"
                    this.description = "This is a description 2"
                    this.ativado = true
                }
            }
        }
    }
</script>

<style scoped> 
    img {
        width: 50%;
        height: 50%;
        margin: 20px;
    }
</style>
