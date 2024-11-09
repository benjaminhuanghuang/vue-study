<template>
    <div class="module-menu" v-for="(menu, i) in menus" :key="menu.name">
        <div class="title">
            {{ menu.name }}
        </div>
        <div class="menus" v-for="(sub, i) in menu.children" :key="sub.name">
            <router-link :to="{ name: sub.path }">
                <Component :is="sub.icon" theme="outline" size="24" fill="#333" />{{ sub.name }}

            </router-link>
        </div>
    </div>
</template>
<script setup lang="ts">
import { menus } from './useMenu'
</script>
<style lang="">

</style>