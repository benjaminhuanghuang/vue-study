<template>
    <div>
        <div>
            <h1>
                {{ msg }}
            </h1>
            <p>Hello1</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        msg: {
            type: String,
            required: true,
        },
    });
</script>