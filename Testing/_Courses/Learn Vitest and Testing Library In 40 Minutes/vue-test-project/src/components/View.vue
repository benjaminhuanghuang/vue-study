<script setup lang="ts">
defineProps<{
    element: string;
    ariaLabel?: string;
    isDisabled?: string;
}>();

</script>

<template>
    <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
        <slot>
            
        </slot>
    </component>
</template>