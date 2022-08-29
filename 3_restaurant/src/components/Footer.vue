<template>
    <footer id="footer">
        <p>&copy; 2022</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    components: {
        
    }
}
</script>

<style scoped>
    #footer {
        background-color: #222;
        border-top: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        height: 50px;
        /* menu fixed in bottom */
        position: fixed;
        width: 100%;
    }
    #footer p {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;

    }

</style>