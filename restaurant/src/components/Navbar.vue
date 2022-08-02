<template>
    <div id="nav">
        <router-link to="/" id="logo_url">
            <img :src="logo" :id="logo" alt="alt">
        </router-link>

        <router-link id="menu" to="/">Home</router-link>
        <router-link id="menu" to="/pedidos">Pedidos</router-link>
        
    </div>

</template>

<script>
export default {
    name: 'Navbar',
    props: ["logo", "alt"],
    components: {
        
    }
}
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        /* border-radius: 10px 10px; */
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav #logo_url {
        text-decoration: none;
        color: #fff;
        margin: auto;
        margin-left: 0;
    }
    #logo {
        width: 50px;
        height: 50px;
        margin-right: 5px;
    }
    #nav a {
        text-decoration: none;
        color: #ffc003;
        margin: auto;
        margin-left: 10px;
        transition: .5s;
    }
    #nav a:hover {
        color: #fff;
    }
    #menu {
        font-size: 20px;
        font-weight: bold;
        margin: auto;
        margin-right: 0;
    }
</style>