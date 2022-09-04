<template>
    <div>
        <h1>Directiva V-HTML</h1>
        <p>Acesse: <span v-html="link" /></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'diretiva_vhtml',
    data() {
        return {
            link: '<a href="http://google.com">Google</a>'
        };
    }
});
</script>
