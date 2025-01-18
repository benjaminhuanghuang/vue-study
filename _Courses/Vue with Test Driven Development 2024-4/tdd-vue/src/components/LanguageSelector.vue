<template>
    <img src="https://flagcdn.com/24x8/tr.png" data-testid="language-en-selector" @click="setLanguage('tr')"
        role="button" />
    <span class="m-1"></span>
    <img src="https://flagcdn.com/24x8/bg.png" data-testid="language-zhCN-selector" @click="setLanguage('en')"
        role="button" />

</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const setLanguage = (language: string) => {
    localStorage.setItem('app-lang', language);
    locale.value = language;
}
</script>

<style></style>