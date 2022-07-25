<template>
    <button @click="primeiro(txt1, $event), segundo(txt2, $event)"> Active MultiplosEvents</button>
    <p>{{multiplos_events}}</p>:
</template>

<script>
    export default {
        name: 'MultiplosEvents',
        data() {
            return {
                multiplos_events: '',
                txt1: 'Primeiro evento',
                txt2: 'Segundo evento'
            }
        },
        methods: {
            primeiro(txt1, e) {
                this.multiplos_events = txt1;
                console.log(this.multiplos_events)
            },
            segundo(txt2, e) {
                setTimeout(() => {
                    this.multiplos_events = txt2;
                    console.log(this.multiplos_events)
                }, 2000);
            }
        }
    }
</script>

<style scoped>
    button {
        background-color: rgb(27, 166, 190);
        color: rgb(255, 255, 255);
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        font-weight: 300;
        padding: 10px;
        border-radius: 5px;
        margin: 20px;
        display: block;
    }
</style>
