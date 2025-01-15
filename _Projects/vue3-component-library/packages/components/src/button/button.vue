<template>
    <button class="sn-button" :class="buttonStyle">
        <slot />
    </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "sn-button",
});
</script>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
type ButtonProps = {
    type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
    return { [`sn-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
