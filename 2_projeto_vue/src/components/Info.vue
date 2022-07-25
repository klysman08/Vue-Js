<template>
    <p>{{email}}</p>
    <p>{{email}}</p>
    <p>Pariatur ex sit eu nisi ipsum et deserunt velit cupidatat nisi incididunt reprehenderit. Elit nulla Lorem eiusmod elit
    in incididunt eiusmod dolore aliqua ea. Ea elit anim officia non aliquip ea id in do pariatur cillum sit irure aliquip. 
    Anim qui est labore cupidatat aute nulla cillum excepteur qui incididunt.
    </p>
    <p>Soft Skills:</p>
    <ul v-if="its_working">
        <li>Hability 1</li>
        <li>Hability 2</li>
        <li>Hability 3</li>
    </ul>

    <p>back-end:</p>
    <ul v-for="(technology, index) in backend_technologies" :key="index">
        <li>{{ technology }}</li>
    </ul>
    <p>front-end:</p>
    <ul v-bind:key="index" v-for="(technology, index) in frontend_technologies">
        <li>{{ technology }}</li>
    </ul>


    <button @click="showEmail">{{status_email}}</button>

    <p v-if="show_email">
        <strong>email: {{email}}</strong>
    </p>

</template>

<script>
    export default {
        name: 'Info',
        props: {
            email: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                its_working: true, 
                show_email: false,
                /* email: 'Hataro-san@anime.jp', */
                status_email: 'Show email',
                backend_technologies: ["JavaScript", "PHP", "Python"],
                frontend_technologies: ["HTML", "CSS", "Vue"]
            }
        },

        methods: {
            showEmail() {
                this.show_email = !this.show_email;
                this.status_email = this.show_email ? 'Hide email' : 'Show email';
            }
        }
    }

</script>

<style scoped>
    p {
        color: rgb(9, 58, 90);
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        font-weight: 300;
        margin: 20px;
    }
    ul {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    button {
        background-color: rgb(0, 153, 255);
        border: none;
        color: white;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        transition: 1.3s;
    }
    button:hover {
        background-color: rgb(165, 14, 157);
        color: white;
        transition: 0.3s;
        padding: 20px;
    }
</style>