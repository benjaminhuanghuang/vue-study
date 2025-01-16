<template lang="">
    <div>
        <slot></slot>
        <header>
            <slot name="header" :msg="msg"></slot>
        </header>
        <main>
            
            <slot="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style lang="">

</style>